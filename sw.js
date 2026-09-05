/* Service worker: deja el juego disponible offline una vez cargado.
   Al cambiar cualquier archivo, subir la versión para que se actualice la caché. */

const VERSION = "feli-mitos-v3.5.0";
const ARCHIVOS = [
  "./",
  "index.html",
  "hub.css",
  "hub.js",
  "coleccion.html",
  "estilos.css",
  "app.js",
  "nucleo.js",
  "iconos.js",
  "personajes.json",
  "datos_ola1.json",
  "oraculo.html",
  "oraculo.css",
  "oraculo.js",
  "cielo.html",
  "cielo.css",
  "cielo.js",
  "motor-trazado.js",
  "carrusel.js",
  "constelaciones.json",
  "mapa.html",
  "mapa.css",
  "mapa.js",
  "mapa-geo.js",
  "viajes.json",
  "ordena.html",
  "ordena.css",
  "ordena.js",
  "mitos_ordena.json",
  "espejo.html",
  "espejo.css",
  "espejo.js",
  "espejos.json",
  "fonts/cinzel-700.woff2",
  "fonts/cinzel-800.woff2",
  // Ilustraciones de personaje. Van una por una y no por carpeta: el service
  // worker no puede listar un directorio, y sumar las 85 de golpe serían ~12 MB
  // de precarga (hoy el juego entero pesa menos de 1 MB). Antes de producir el
  // lote hay que decidir si siguen acá o si pasan a caché bajo demanda.
  "imagenes/zeus.jpg"
];

self.addEventListener("install", evento => {
  // cache.addAll(ARCHIVOS) por sí solo puede traer bytes viejos: el fetch
  // interno respeta el caché HTTP del navegador, y el server no manda
  // cache-control. { cache: "reload" } fuerza a ir siempre a la red en
  // cada instalación, así una versión nueva de verdad trae contenido nuevo.
  evento.waitUntil(
    caches.open(VERSION)
      .then(cache => Promise.all(
        ARCHIVOS.map(url => fetch(new Request(url, { cache: "reload" })).then(respuesta => cache.put(url, respuesta)))
      ))
      .then(() => self.skipWaiting())
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
