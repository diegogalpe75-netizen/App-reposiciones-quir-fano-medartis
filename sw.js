// Service Worker — Medartis APTUS PWA
// Cachea los recursos esenciales para que la app funcione sin conexión.

const CACHE_NAME = 'medartis-aptus-v3';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './assets/portada.jpg',
  './icons/icon-16.png',
  './icons/icon-32.png',
  './icons/icon-72.png',
  './icons/icon-96.png',
  './icons/icon-128.png',
  './icons/icon-144.png',
  './icons/icon-152.png',
  './icons/icon-180.png',
  './icons/icon-192.png',
  './icons/icon-384.png',
  './icons/icon-512.png',
  './icons/icon-maskable-192.png',
  './icons/icon-maskable-512.png'
];

// Instalación: precarga los recursos básicos
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

// Activación: limpia cachés antiguas
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// Estrategia: "cache first, network fallback" para navegación y recursos propios
self.addEventListener('fetch', (event) => {
  // Solo gestionamos peticiones GET del mismo origen
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;

      return fetch(event.request).then((response) => {
        // Guarda una copia en caché para futuras visitas offline
        if (response && response.status === 200 && response.type === 'basic') {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      }).catch(() => {
        // Si falla la red y se pide la página principal, devolvemos index.html cacheado
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
