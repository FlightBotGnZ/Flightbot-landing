/**
 * FlightBot Service Worker (PWA Offline-First)
 * Garantiza disponibilidad real en modo avión para la Billetera de Viaje y el portal estático.
 * No cachea mutaciones ni respuestas de /api/ para preservar frescura y seguridad.
 */

const CACHE_VERSION = 'flightbot-pwa-v2';
const STATIC_CACHE = `${CACHE_VERSION}-static`;
const RUNTIME_CACHE = `${CACHE_VERSION}-runtime`;

// Recursos esenciales precacheados al instalar el Service Worker
const PRECACHE_URLS = [
  '/billetera',
  '/billetera.html',
  '/',
  '/index.html',
  '/css/styles.css',
  '/manifest.json',
  '/js/wallet-crypto.js',
  '/img/rolli-head.svg',
  '/img/rolli-avatar-dark.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then(async (cache) => {
      // Precargar de forma resiliente para que un fallo individual no aborte la instalación
      await Promise.allSettled(
        PRECACHE_URLS.map(async (url) => {
          try {
            const response = await fetch(url, { cache: 'reload' });
            if (response && response.ok) {
              await cache.put(url, response);
            }
          } catch (_err) {
            // Ignorar recurso inaccesible durante la precarga inicial
          }
        })
      );
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((name) => !name.startsWith(CACHE_VERSION))
          .map((oldName) => caches.delete(oldName))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Solo interceptar solicitudes GET seguras
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Nunca interceptar orígenes externos (Tailwind CDN, Google Fonts, Telegram, DolarAPI):
  // un fetch() dentro del Service Worker queda sujeto a connect-src de la CSP del propio SW.
  if (url.origin !== self.location.origin) {
    return;
  }

  // Nunca interceptar ni cachear llamadas dinámicas a la API
  if (url.pathname.startsWith('/api/')) {
    return;
  }

  // Navegación de páginas HTML: Network-First con respaldo inmediato en caché offline
  if (request.mode === 'navigate' || (request.headers.get('accept') || '').includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.ok) {
            const copy = networkResponse.clone();
            caches.open(STATIC_CACHE).then((cache) => cache.put(request, copy));
          }
          return networkResponse;
        })
        .catch(async () => {
          const cachedExact = await caches.match(request);
          if (cachedExact) return cachedExact;
          if (url.pathname.includes('billetera')) {
            return (await caches.match('/billetera.html')) || (await caches.match('/billetera')) || Response.error();
          }
          return (await caches.match('/index.html')) || (await caches.match('/')) || Response.error();
        })
    );
    return;
  }

  // Assets estáticos del mismo origen (JS, CSS, imágenes locales): Stale-While-Revalidate
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      const networkFetch = fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.ok && networkResponse.type === 'basic') {
            const copy = networkResponse.clone();
            caches.open(RUNTIME_CACHE).then((cache) => cache.put(request, copy));
          }
          return networkResponse;
        })
        .catch(() => cachedResponse || Response.error());

      return cachedResponse || networkFetch;
    })
  );
});
