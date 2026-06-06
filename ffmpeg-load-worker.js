const FFMessageType = {
  LOAD: "LOAD",
  EXEC: "EXEC",
  FFPROBE: "FFPROBE",
  WRITE_FILE: "WRITE_FILE",
  READ_FILE: "READ_FILE",
  DELETE_FILE: "DELETE_FILE",
  RENAME: "RENAME",
  CREATE_DIR: "CREATE_DIR",
  LIST_DIR: "LIST_DIR",
  DELETE_DIR: "DELETE_DIR",
  ERROR: "ERROR",
  PROGRESS: "PROGRESS",
  LOG: "LOG",
  MOUNT: "MOUNT",
  UNMOUNT: "UNMOUNT",
};

const ERROR_UNKNOWN_MESSAGE_TYPE = new Error("unknown message type");
const ERROR_NOT_LOADED = new Error("ffmpeg is not loaded, call `await ffmpeg.load()` first");
const ERROR_IMPORT_FAILURE = new Error("failed to import ffmpeg-core.js");

let ffmpeg;

function postLoadLog(message) {
  self.postMessage({
    type: FFMessageType.LOG,
    data: {
      type: "info",
      message,
    },
  });
}

function resolveErrorMessage(error) {
  if (error instanceof Error && error.message) {
    return error.message;
  }

  return String(error);
}

async function importFfmpegCore(coreURL) {
  postLoadLog("FFmpeg Worker 已启动，正在导入内核脚本。");

  let coreModule;
  try {
    coreModule = await import(/* @vite-ignore */ coreURL);
  } catch (error) {
    throw new Error(
      `FFmpeg 稳定 Worker 导入内核脚本失败：${coreURL}；${resolveErrorMessage(error)}`,
    );
  }
  self.createFFmpegCore = coreModule.default;

  if (!self.createFFmpegCore) {
    throw ERROR_IMPORT_FAILURE;
  }

  postLoadLog("FFmpeg 内核脚本已导入，正在读取 WASM。");
}

async function fetchWasmBinary(wasmURL) {
  let response;
  try {
    response = await fetch(wasmURL, {
      cache: "force-cache",
      credentials: "same-origin",
    });
  } catch (error) {
    throw new Error(
      `FFmpeg 稳定 Worker 读取 WASM 失败：${wasmURL}；${resolveErrorMessage(error)}`,
    );
  }

  if (!response.ok) {
    throw new Error(`failed to load wasm binary file at '${wasmURL}'`);
  }

  const wasmBinary = await response.arrayBuffer();
  const sizeMb = Math.max(1, Math.round(wasmBinary.byteLength / 1024 / 1024));
  postLoadLog(`FFmpeg WASM 已读取 ${sizeMb} MB，正在编译并实例化。`);
  return wasmBinary;
}

async function load({ coreURL, wasmURL, workerURL }) {
  const first = !ffmpeg;
  if (!coreURL) {
    throw new Error("missing ffmpeg coreURL");
  }

  const resolvedWasmURL = wasmURL || coreURL.replace(/.js$/g, ".wasm");
  const resolvedWorkerURL = workerURL || coreURL.replace(/.js$/g, ".worker.js");

  await importFfmpegCore(coreURL);
  const wasmBinary = await fetchWasmBinary(resolvedWasmURL);

  ffmpeg = await self.createFFmpegCore({
    wasmBinary,
    mainScriptUrlOrBlob: `${coreURL}#${btoa(
      JSON.stringify({
        wasmURL: resolvedWasmURL,
        workerURL: resolvedWorkerURL,
      }),
    )}`,
  });
  ffmpeg.setLogger((data) => self.postMessage({ type: FFMessageType.LOG, data }));
  ffmpeg.setProgress((data) =>
    self.postMessage({
      type: FFMessageType.PROGRESS,
      data,
    }),
  );
  postLoadLog("FFmpeg WASM 内核已就绪。");
  return first;
}

function exec({ args, timeout = -1 }) {
  ffmpeg.setTimeout(timeout);
  ffmpeg.exec(...args);
  const ret = ffmpeg.ret;
  ffmpeg.reset();
  return ret;
}

function ffprobe({ args, timeout = -1 }) {
  ffmpeg.setTimeout(timeout);
  ffmpeg.ffprobe(...args);
  const ret = ffmpeg.ret;
  ffmpeg.reset();
  return ret;
}

function writeFile({ path, data }) {
  ffmpeg.FS.writeFile(path, data);
  return true;
}

function readFile({ path, encoding }) {
  return ffmpeg.FS.readFile(path, { encoding });
}

function deleteFile({ path }) {
  ffmpeg.FS.unlink(path);
  return true;
}

function rename({ oldPath, newPath }) {
  ffmpeg.FS.rename(oldPath, newPath);
  return true;
}

function createDir({ path }) {
  ffmpeg.FS.mkdir(path);
  return true;
}

function listDir({ path }) {
  const names = ffmpeg.FS.readdir(path);
  const nodes = [];

  for (const name of names) {
    const stat = ffmpeg.FS.stat(`${path}/${name}`);
    const isDir = ffmpeg.FS.isDir(stat.mode);
    nodes.push({ name, isDir });
  }

  return nodes;
}

function deleteDir({ path }) {
  ffmpeg.FS.rmdir(path);
  return true;
}

function mount({ fsType, options, mountPoint }) {
  const fs = ffmpeg.FS.filesystems[String(fsType)];
  if (!fs) {
    return false;
  }

  ffmpeg.FS.mount(fs, options, mountPoint);
  return true;
}

function unmount({ mountPoint }) {
  ffmpeg.FS.unmount(mountPoint);
  return true;
}

self.onmessage = async ({ data: { id, type, data: messageData } }) => {
  const trans = [];
  let data;

  try {
    if (type !== FFMessageType.LOAD && !ffmpeg) {
      throw ERROR_NOT_LOADED;
    }

    switch (type) {
      case FFMessageType.LOAD:
        data = await load(messageData);
        break;
      case FFMessageType.EXEC:
        data = exec(messageData);
        break;
      case FFMessageType.FFPROBE:
        data = ffprobe(messageData);
        break;
      case FFMessageType.WRITE_FILE:
        data = writeFile(messageData);
        break;
      case FFMessageType.READ_FILE:
        data = readFile(messageData);
        break;
      case FFMessageType.DELETE_FILE:
        data = deleteFile(messageData);
        break;
      case FFMessageType.RENAME:
        data = rename(messageData);
        break;
      case FFMessageType.CREATE_DIR:
        data = createDir(messageData);
        break;
      case FFMessageType.LIST_DIR:
        data = listDir(messageData);
        break;
      case FFMessageType.DELETE_DIR:
        data = deleteDir(messageData);
        break;
      case FFMessageType.MOUNT:
        data = mount(messageData);
        break;
      case FFMessageType.UNMOUNT:
        data = unmount(messageData);
        break;
      default:
        throw ERROR_UNKNOWN_MESSAGE_TYPE;
    }
  } catch (error) {
    self.postMessage({
      id,
      type: FFMessageType.ERROR,
      data: resolveErrorMessage(error),
    });
    return;
  }

  if (data instanceof Uint8Array) {
    trans.push(data.buffer);
  }

  self.postMessage({ id, type, data }, trans);
};
