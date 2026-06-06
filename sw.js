const FFMPEG_CACHE_NAME = "trickcal-ffmpeg-assets-v5";

function isFfmpegAssetRequest(request) {
  if (request.method !== "GET") {
    return false;
  }

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) {
    return false;
  }

  return (
    url.pathname === "/ffmpeg-load-worker.js" ||
    /\/assets\/(?:ffmpeg-core|worker)-.*\.(?:js|wasm)$/.test(url.pathname)
  );
}

async function cacheFirst(request) {
  let cache;

  try {
    cache = await caches.open(FFMPEG_CACHE_NAME);
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
  } catch (error) {
    console.warn("FFmpeg asset cache lookup failed; falling back to network.", error);
  }

  const networkResponse = await fetch(request);
  if (cache && networkResponse.ok) {
    try {
      await cache.put(request, networkResponse.clone());
    } catch (error) {
      console.warn("FFmpeg asset cache write failed; using network response.", error);
    }
  }

  return networkResponse;
}

self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter((cacheName) => cacheName.startsWith("trickcal-ffmpeg-assets-"))
            .filter((cacheName) => cacheName !== FFMPEG_CACHE_NAME)
            .map((cacheName) => caches.delete(cacheName)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    event.waitUntil(self.skipWaiting());
  }
});

self.addEventListener("fetch", (event) => {
  if (!isFfmpegAssetRequest(event.request)) {
    return;
  }

  event.respondWith(cacheFirst(event.request));
});
