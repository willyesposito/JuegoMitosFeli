/* Service worker: deja el juego disponible offline una vez cargado.
   Al cambiar cualquier archivo, subir la versión para que se actualice la caché. */

const VERSION = "feli-cartas-v1.8.0";
const ARCHIVOS = [
  "./",
  "index.html",
  "estilos.css",
  "app.js",
  "nucleo.js",
  "iconos.js",
  "personajes.json",
  "cielo.html",
  "cielo.css",
  "cielo.js",
  "constelaciones.json",
  "fonts/cinzel-700.woff2",
  "fonts/cinzel-800.woff2"
];

self.addEventListener("install", evento => {
  evento.waitUntil(
    caches.open(VERSION).then(cache => cache.addAll(ARCHIVOS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", evento => {
  evento.waitUntil(
    caches.keys()
      .then(claves => Promise.all(claves.filter(c => c !== VERSION).map(c => caches.delete(c))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", evento => {
  evento.respondWith(
    caches.match(evento.request, { ignoreSearch: true })
      .then(respuesta => respuesta || fetch(evento.request))
  );
});
