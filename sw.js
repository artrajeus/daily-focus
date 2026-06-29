// Daily Focus — service worker (offline support)
// Bump CACHE when you change index.html so phones pick up the new version.
const CACHE = "daily-focus-v6";
const SDK   = "daily-focus-sdk-v1";   // separate, long-lived cache for the Firebase SDK
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./firebase-config.js",
  "./icon-180.png",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable-512.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE && k !== SDK).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);

  // 1. Firebase SDK code (versioned + immutable) -> cache-first so the app can
  //    initialise sync even when it cold-starts with no connection.
  if (url.hostname === "www.gstatic.com" && url.pathname.includes("/firebasejs/")) {
    e.respondWith(
      caches.match(e.request).then(hit => hit || fetch(e.request).then(resp => {
        const copy = resp.clone();
        caches.open(SDK).then(c => c.put(e.request, copy)).catch(()=>{});
        return resp;
      }))
    );
    return;
  }

  // 2. Live Firebase data / auth traffic -> always network; never cache.
  //    Firestore's own persistent cache handles offline reads + queued writes.
  if (url.hostname.includes("googleapis.com") ||
      url.hostname.includes("firebaseio.com") ||
      url.hostname.includes("firebaseinstallations") ||
      url.hostname.includes("identitytoolkit") ||
      url.hostname.includes("firebase")) {
    return; // default browser/network handling
  }

  // 3. App shell -> network-first (so updates land), fall back to cache offline.
  e.respondWith(
    fetch(e.request)
      .then(resp => {
        const copy = resp.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy)).catch(()=>{});
        return resp;
      })
      .catch(() => caches.match(e.request).then(r => r || caches.match("./index.html")))
  );
});
