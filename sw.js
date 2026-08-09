/* Reba PWA service worker.
 *
 * CACHE KEY. Ruled static on 2026-08-09: the worker is network-first for the
 * app itself, so an online phone always gets the current build and the key
 * carries no version meaning. Bumping it with every deck change only made every
 * phone re-download its icons. A publish is index.html alone.
 *
 * THAT RULING HAS ONE EXIT, AND THIS IS IT: "unless the worker's own logic
 * changes." The asset list below now carries the card-back diagrams, and a
 * worker whose ASSETS list has grown must re-run install to fetch them — which
 * only happens when the key moves. So the key moves once, here, for the
 * diagrams, and then goes back to standing still.
 *
 * WHY THE DIAGRAMS ARE PRECACHED RATHER THAN LEFT TO LAZY CACHING. The fetch
 * handler below already caches any asset on first use, which would be enough if
 * the diagrams were read at a desk. They are not. They are read standing on a
 * bank at Cross Lake with no signal, and a diagram that caches on first view is
 * a diagram that is missing the first time it is wanted. 900 KB once, on wifi,
 * buys the whole set offline.
 */
const CACHE = 'reba-08-09·91f-dgm';
const ASSETS = [
  './', './index.html', './manifest.webmanifest',
  './icon-192.png', './icon-512.png', './icon-180.png',
  './diagrams/ln-r1.svg', './diagrams/mk-r3.svg', './diagrams/wa-5.svg',
  './diagrams/mk-3.svg',  './diagrams/mk-r4.svg', './diagrams/wh-2.svg',
  './diagrams/ln-1.svg',  './diagrams/wh-5.svg',  './diagrams/wh-6.svg',
  './diagrams/mk-67.svg', './diagrams/ln-5.svg'
];
self.addEventListener('install', e => {
  // addAll is atomic — one 404 and the whole install fails and the old worker
  // stays. That is the behaviour we want: a half-cached diagram set that claims
  // to work offline is worse than an install that visibly did not happen.
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
// NETWORK-FIRST for the app itself: online always serves the current build,
// the cache exists only for offline. Cache-first pinned phones to stale builds.
self.addEventListener('fetch', e => {
  const nav = e.request.mode === 'navigate' || e.request.url.endsWith('/index.html') || e.request.url.endsWith('/');
  if (nav) {
    e.respondWith(fetch(e.request).then(r => {
      const cp = r.clone(); caches.open(CACHE).then(c => c.put('./index.html', cp));
      return r;
    }).catch(() => caches.match('./index.html', {ignoreSearch: true})));
  } else {
    e.respondWith(caches.match(e.request, {ignoreSearch: true}).then(hit => hit || fetch(e.request).then(r => {
      if (r.ok && e.request.method === 'GET') { const cp = r.clone(); caches.open(CACHE).then(c => c.put(e.request, cp)); }
      return r;
    })));
  }
});
