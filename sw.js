const CACHE_NAME = 'gadhar-doler-v1';
const ASSETS = [
  './index.html',
  './manifest.json',
  'https://cdn-icons-png.flaticon.com/512/2831/2831972.png'
];

// Install the service worker and cache files
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Fetch files from cache first, then network
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});