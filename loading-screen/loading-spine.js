(function (global) {
  "use strict";

  var currentScriptUrl = document.currentScript && document.currentScript.src;
  var defaultAssetRoot = currentScriptUrl
    ? new URL("./", currentScriptUrl).href
    : new URL("/loading-screen/", window.location.href).href;
  var sessions = new WeakMap();
  var activeCanvases = new Set();
  var configPromises = new Map();
  var copyPromises = new Map();

  function ensureTrailingSlash(value) {
    return value.endsWith("/") ? value : value + "/";
  }

  function resolveRoot(value, fallback) {
    if (/^%VITE_[A-Z0-9_]+%$/.test(String(value || ""))) value = "";
    try {
      return ensureTrailingSlash(new URL(value || fallback, document.baseURI).href);
    } catch (error) {
      return ensureTrailingSlash(fallback);
    }
  }

  function loadJsonOnce(cache, url) {
    if (!cache.has(url)) {
      cache.set(
        url,
        fetch(url, { cache: "no-store" }).then(function (response) {
          if (!response.ok) throw new Error("Loading screen data unavailable: " + url);
          return response.json();
        }),
      );
    }
    return cache.get(url);
  }

  function pickRandom(items, random) {
    var nextRandom = typeof random === "function" ? random : Math.random;
    return Array.isArray(items) && items.length
      ? items[Math.floor(nextRandom() * items.length)]
      : null;
  }

  function hashSeed(value) {
    var hash = 2166136261;
    var text = String(value || "loading-mascots");
    for (var index = 0; index < text.length; index += 1) {
      hash ^= text.charCodeAt(index);
      hash = Math.imul(hash, 16777619);
    }
    return hash >>> 0;
  }

  function createSeededRandom(seed) {
    var state = hashSeed(seed) || 0x6d2b79f5;
    return function () {
      state = (state + 0x6d2b79f5) >>> 0;
      var value = state;
      value = Math.imul(value ^ (value >>> 15), value | 1);
      value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
      return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
    };
  }

  function createMascotSeed() {
    var values = new Uint32Array(2);
    if (global.crypto && typeof global.crypto.getRandomValues === "function") {
      global.crypto.getRandomValues(values);
    } else {
      values[0] = Math.floor(Math.random() * 0xffffffff);
      values[1] = Date.now() >>> 0;
    }
    return values[0].toString(36) + values[1].toString(36);
  }

  function resolveMascotSeed(canvas) {
    var querySeed = new URLSearchParams(window.location.search).get("loadingMascotSeed");
    if (querySeed) return querySeed;
    if (canvas.dataset.mascotSeed) return canvas.dataset.mascotSeed;

    var sessionKey = global.__codexLoadingBackgroundKey ||
      (window.location.pathname + window.location.search + window.location.hash);
    if (
      global.__codexLoadingMascotKey !== sessionKey ||
      !global.__codexLoadingMascotSeed
    ) {
      global.__codexLoadingMascotKey = sessionKey;
      global.__codexLoadingMascotSeed = createMascotSeed();
      global.__codexLoadingMascotStartedAt = Date.now();
    }
    return global.__codexLoadingMascotSeed;
  }

  function resolveMascotStartedAt(canvas) {
    var queryValue = Number(
      new URLSearchParams(window.location.search).get("loadingMascotStartedAt"),
    );
    if (Number.isFinite(queryValue) && queryValue > 0) return queryValue;
    var datasetValue = Number(canvas.dataset.mascotStartedAt);
    if (Number.isFinite(datasetValue) && datasetValue > 0) return datasetValue;
    if (!Number.isFinite(global.__codexLoadingMascotStartedAt)) {
      global.__codexLoadingMascotStartedAt = Date.now();
    }
    return global.__codexLoadingMascotStartedAt;
  }
  function normalizeLocale(value) {
    var locale = String(value || "").toLowerCase();
    if (locale.startsWith("ko")) return "ko-KR";
    if (locale.startsWith("ja")) return "ja-JP";
    return "zh-CN";
  }

  function readLocale(canvas) {
    var queryLocale = new URLSearchParams(window.location.search).get("locale");
    return normalizeLocale(
      canvas.dataset.locale || queryLocale || document.documentElement.lang || navigator.language,
    );
  }

  function applyLoadingCopy(canvas, assetRoot, random) {
    var root = canvas.closest(".codex-loading-screen, #codex-loading-screen");
    if (!root) return;
    var url = new URL("loading-copy.json", assetRoot).href;
    void loadJsonOnce(copyPromises, url)
      .then(function (data) {
        if (!canvas.isConnected) return;
        var categories = data && data.categories ? Object.values(data.categories) : [];
        var messages = categories.reduce(function (all, group) {
          return all.concat(Array.isArray(group) ? group : []);
        }, []);
        var message = pickRandom(messages, random);
        var locale = readLocale(canvas);
        var title = root.querySelector(".codex-loading-title, #codex-loading-title");
        var subtitle = root.querySelector(".codex-loading-subtitle, #codex-loading-subtitle");
        if (title && message && message.text) {
          title.textContent = message.text[locale] || message.text["zh-CN"] || title.textContent;
        }
        if (subtitle && data.subtitle) {
          subtitle.textContent = data.subtitle[locale] || data.subtitle["zh-CN"] || subtitle.textContent;
        }
      })
      .catch(function () {});
  }

  function selectAnimation(skeletonData, configuredNames, random) {
    var available = skeletonData.animations.map(function (animation) {
      return animation.name;
    });
    var candidates = configuredNames === "*"
      ? available.slice()
      : (configuredNames || []).filter(function (name) {
          return available.indexOf(name) >= 0;
        });
    return (
      pickRandom(candidates, random) ||
      available.find(function (name) { return /^Idle_/i.test(name); }) ||
      available[0] ||
      null
    );
  }

  function buildModelSelection(config, spineRoot, random) {
    return (config.characters || []).map(function (character) {
      var variant = pickRandom(character.variants, random);
      if (!variant) throw new Error("Loading mascot variant missing: " + character.id);
      var resourceBase = new URL(
        variant.folder.replace(/^\/+|\/+$/g, "") + "/" + variant.baseName,
        spineRoot,
      ).href;
      return {
        id: character.id,
        side: character.side,
        mirrorX: Boolean(character.mirrorX),
        excludedInternalSkins: character.excludedInternalSkins || ["default"],
        animations: character.animations || [],
        skeletonUrl: resourceBase + ".skel.bytes",
        atlasUrl: resourceBase + ".atlas.txt",
      };
    });
  }

  function createSpineSession(canvas, config, spineRoot, token, random, startedAt) {
    var runtime = global.spine;
    if (!runtime || !runtime.SpineCanvas) throw new Error("Official Spine runtime missing.");

    var selections = buildModelSelection(config, spineRoot, random);
    var models = [];
    var initialized = false;
    var renderPending = false;
    var visualReadyNotified = false;
    var frameTime = 0;
    var targetFrameTime = 1 / Math.max(12, Math.min(60, Number(config.frameRate) || 30));
    var maxDpr = Math.max(1, Math.min(2, Number(config.maxDevicePixelRatio) || 1.5));
    var lastWidth = 0;
    var lastHeight = 0;
    var lastDpr = 0;
    var spineCanvas = null;

    function resize(renderContext) {
      var width = Math.max(1, canvas.clientWidth);
      var height = Math.max(1, canvas.clientHeight);
      var dpr = Math.min(maxDpr, window.devicePixelRatio || 1);
      var pixelWidth = Math.max(1, Math.round(width * dpr));
      var pixelHeight = Math.max(1, Math.round(height * dpr));
      if (pixelWidth === lastWidth && pixelHeight === lastHeight && dpr === lastDpr) return;
      lastWidth = pixelWidth;
      lastHeight = pixelHeight;
      lastDpr = dpr;
      canvas.width = pixelWidth;
      canvas.height = pixelHeight;
      renderContext.gl.viewport(0, 0, pixelWidth, pixelHeight);
      renderContext.renderer.camera.zoom = 1 / dpr;
      renderContext.renderer.camera.setViewport(pixelWidth, pixelHeight);
      renderContext.renderer.camera.update();
    }

    function layoutModels() {
      var width = Math.max(1, canvas.clientWidth);
      var height = Math.max(1, canvas.clientHeight);
      var compact = width / height < 1.45;
      var maxWidth = Math.max.apply(null, models.map(function (model) { return model.data.width; }));
      var maxHeight = Math.max.apply(null, models.map(function (model) { return model.data.height; }));
      var zoneWidth = width * (compact ? 0.44 : 0.3);
      var zoneHeight = height * (compact ? 0.47 : 0.84);
      var scale = Math.min(zoneWidth / maxWidth, zoneHeight / maxHeight) * 0.88;
      var bottom = -height / 2 + height * (compact ? 0.015 : 0.04);

      models.forEach(function (model) {
        var centerX = model.side === "left"
          ? -width * (compact ? 0.245 : 0.35)
          : width * (compact ? 0.245 : 0.35);
        var scaleX = model.mirrorX ? -scale : scale;
        model.skeleton.scaleX = scaleX;
        model.skeleton.scaleY = scale;
        model.skeleton.x = centerX - (model.data.x + model.data.width / 2) * scaleX;
        model.skeleton.y = bottom - model.data.y * scale;
        model.skeleton.updateWorldTransform();
      });
    }

    var app = {
      loadAssets: function (renderContext) {
        selections.forEach(function (selection) {
          renderContext.assetManager.loadBinary(selection.skeletonUrl);
          renderContext.assetManager.loadTextureAtlas(selection.atlasUrl);
        });
      },
      initialize: function (renderContext) {
        models = selections.map(function (selection) {
          var atlas = renderContext.assetManager.get(selection.atlasUrl);
          var binary = renderContext.assetManager.get(selection.skeletonUrl);
          var attachmentLoader = new runtime.AtlasAttachmentLoader(atlas);
          var skeletonData = new runtime.SkeletonBinary(attachmentLoader).readSkeletonData(binary);
          var skeleton = new runtime.Skeleton(skeletonData);
          var excludedSkins = new Set(selection.excludedInternalSkins || ["default"]);
          var internalSkin = pickRandom(skeletonData.skins.filter(function (skin) {
            return !excludedSkins.has(skin.name);
          }), random);
          if (!internalSkin) {
            throw new Error("Loading mascot has no allowed internal skin.");
          }
          skeleton.setSkinByName(internalSkin.name);
          var state = new runtime.AnimationState(new runtime.AnimationStateData(skeletonData));
          var animation = selectAnimation(skeletonData, selection.animations, random);
          skeleton.setToSetupPose();
          if (animation) {
            state.setAnimation(0, animation, true);
            state.update(Math.max(0, (Date.now() - startedAt) / 1000));
          }
          state.apply(skeleton);
          skeleton.updateWorldTransform();
          return {
            side: selection.side,
            mirrorX: selection.mirrorX,
            data: skeletonData,
            skeleton: skeleton,
            state: state,
          };
        });
        initialized = true;
      },
      update: function (_renderContext, delta) {
        if (!canvas.isConnected) {
          setTimeout(function () { global.codexStopLoadingSpine(canvas); }, 0);
          return;
        }
        if (!initialized) return;
        frameTime += Math.min(0.1, Math.max(0, delta || 0));
        if (frameTime < targetFrameTime) return;
        var elapsed = frameTime;
        frameTime = 0;
        models.forEach(function (model) {
          model.state.update(elapsed);
          model.state.apply(model.skeleton);
        });
        renderPending = true;
      },
      render: function (renderContext) {
        if (!initialized || !renderPending) return;
        renderPending = false;
        resize(renderContext);
        layoutModels();
        renderContext.clear(0, 0, 0, 0);
        renderContext.renderer.begin();
        models.forEach(function (model) {
          renderContext.renderer.drawSkeleton(model.skeleton, true);
        });
        renderContext.renderer.end();
        if (!visualReadyNotified) {
          visualReadyNotified = true;
          canvas.classList.add("is-ready");
          canvas.dispatchEvent(new CustomEvent("codex-loading-spine-ready", {
            bubbles: true,
          }));
          if (global.parent && global.parent !== global) {
            setTimeout(function () {
              if (!canvas.isConnected) return;
              global.parent.postMessage({
                type: "codex-unity-loading-visual-ready",
              }, "*");
            }, 180);
          }
        }
      },
      error: function () {
        canvas.classList.add("is-unavailable");
      },
      dispose: function (renderContext) {
        try { renderContext.assetManager.dispose(); } catch (error) {}
        try { renderContext.renderer.dispose(); } catch (error) {}
      },
    };

    spineCanvas = new runtime.SpineCanvas(canvas, {
      app: app,
      webglConfig: {
        alpha: true,
        antialias: true,
        premultipliedAlpha: true,
        preserveDrawingBuffer: false,
      },
    });
    if (sessions.get(canvas) !== token) {
      spineCanvas.dispose();
      return null;
    }
    return spineCanvas;
  }

  function start(canvas, options) {
    if (!(canvas instanceof HTMLCanvasElement) || sessions.has(canvas)) return;
    var mascotSeed = resolveMascotSeed(canvas);
    var mascotStartedAt = resolveMascotStartedAt(canvas);
    var token = {
      pending: true,
      mascotRandom: createSeededRandom(mascotSeed + ":mascots"),
      copyRandom: createSeededRandom(mascotSeed + ":copy"),
    };
    sessions.set(canvas, token);
    activeCanvases.add(canvas);
    var assetRoot = resolveRoot(canvas.dataset.loadingRoot, defaultAssetRoot);
    var spineRoot = resolveRoot(canvas.dataset.spineRoot, new URL("../spine/", assetRoot).href);
    applyLoadingCopy(canvas, assetRoot, token.copyRandom);

    var configUrl = new URL("spine-mascots.json", assetRoot).href;
    void loadJsonOnce(configPromises, configUrl)
      .then(function (config) {
        if (!canvas.isConnected || sessions.get(canvas) !== token) return;
        var session = createSpineSession(
          canvas,
          config,
          spineRoot,
          token,
          token.mascotRandom,
          mascotStartedAt,
        );
        if (session) sessions.set(canvas, { session: session });
      })
      .catch(function () {
        canvas.classList.add("is-unavailable");
        sessions.delete(canvas);
        activeCanvases.delete(canvas);
      });
  }

  function stop(canvas) {
    var state = sessions.get(canvas);
    sessions.delete(canvas);
    activeCanvases.delete(canvas);
    if (state && state.session) {
      try { state.session.dispose(); } catch (error) {}
    }
  }

  function scan(root) {
    if (root instanceof HTMLCanvasElement && root.matches("[data-codex-loading-spine]")) {
      start(root);
    }
    if (root.querySelectorAll) {
      root.querySelectorAll("canvas[data-codex-loading-spine]").forEach(start);
    }
    activeCanvases.forEach(function (canvas) {
      if (!canvas.isConnected) stop(canvas);
    });
  }

  global.codexStartLoadingSpine = start;
  global.codexStopLoadingSpine = stop;
  global.codexRefreshLoadingSpines = function () { scan(document); };

  var observer = new MutationObserver(function (records) {
    records.forEach(function (record) {
      record.addedNodes.forEach(function (node) {
        if (node.nodeType === 1) scan(node);
      });
    });
  });

  function initialize() {
    scan(document);
    observer.observe(document.documentElement, { childList: true, subtree: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize, { once: true });
  } else {
    initialize();
  }
})(window);
