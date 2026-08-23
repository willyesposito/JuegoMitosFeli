# Handoff — El Mapa del Héroe con geografía real (opción 1d)

**Para Claude Code.** Reemplaza el mapa dibujado a mano del módulo por costas
reales del Mediterráneo, con cada parada ubicada por su coordenada verdadera y
una cámara que sigue el trazado. Se mantiene todo lo demás: la piel pergamino,
los chips, la hoja de capítulo, el motor de trazado y la lógica de progreso.

**Cumple CLAUDE.md §2.5:** vanilla JS, cero dependencias de red en runtime,
cero build. La geometría viene congelada en un `.js` del repo.

---

## 1. Qué cambia y qué no

| | Antes | Después |
|---|---|---|
| Costas | 9 paths dibujados a mano en `mapa.html` | Natural Earth 1:50m congelado en `mapa-geo.js` |
| Ubicación de paradas | `x`/`y` inventados en un plano 0-100 | `lat`/`lon` reales, proyectadas en Mercator |
| Encuadre | Fijo, todo el mapa siempre | Cámara que sigue el trazado y se abre al terminar |
| Rótulos | Texto fijo en el SVG | Ubicados por coordenada, con anticolisión |
| Piel, chips, hoja, ceremonia, progreso | — | **Sin cambios** |
| `motor-trazado.js`, `carrusel.js`, `nucleo.js` | — | **Sin cambios** |

No se toca ningún `estado`, ni se publica nada nuevo: los mismos 12 viajes
publicados, la misma mecánica, el mismo premio (CLAUDE.md §2.3).

---

## 2. Archivos del paquete

```
handoff/
  Handoff - Mapa real.md      ← este documento
  mapa-geo.js                 ← NUEVO en el repo (29 KB)
  mapa.html                   ← reemplaza el actual
  mapa.js                     ← reemplaza el actual
  viajes.json                 ← reemplaza el actual (agrega lat/lon)
  mapa.css.patch.css          ← bloque para APPENDEAR al final de mapa.css
  generador-geo.html          ← script que regenera mapa-geo.js (no va al repo)
  capturas/                   ← cómo tiene que quedar
  demo/                       ← el módulo andando, con un nucleo.js de mentira
```

### Pasos

1. `cp handoff/mapa-geo.js .`
2. `cp handoff/mapa.html handoff/mapa.js handoff/viajes.json .`
3. Appendear `handoff/mapa.css.patch.css` al final de `mapa.css`
   (no borrar nada de lo que ya está).
4. En `sw.js`: agregar `"mapa-geo.js"` al array `ARCHIVOS` (justo después de
   `"mapa.js"`) y subir `VERSION` de `feli-mitos-v3.2.4` a `feli-mitos-v3.3.0`.
5. `python3 -m http.server 8000` y probar el checklist de la sección 7.

`generador-geo.html` y `demo/` **no van al repo** — o si van, que sea a
`Documentacion/handoff-mapa/`.

---

## 3. `mapa-geo.js` — de dónde salen las costas

- **Origen:** Natural Earth 1:50m, capa `land`, vía el paquete `world-atlas@2.0.2`.
- **Licencia:** dominio público, sin atribución obligatoria. Se puede versionar
  en el repo sin problema.
- **Proceso** (`generador-geo.html`, se abre en el navegador y escupe el archivo):
  1. Recorte Sutherland-Hodgman a lon −32..64 / lat −8..70 — la ventana máxima
     que la cámara puede llegar a mostrar. Los anillos quedan cerrados, así que
     se pueden rellenar.
  2. Simplificación Douglas-Peucker con **tolerancia variable**: 0,025° dentro
     del Mediterráneo (el mundo que el juego recorre) y 0,45° afuera, donde la
     costa es puro decorado de fondo.
  3. Redondeo a 2 decimales (~1 km).
- **Resultado:** 60.835 puntos → **2.433 puntos, 124 anillos, 29 KB**.
- **Formato:** `const GEO_COSTAS = [[lon,lat, lon,lat, …], …]`, arrays planos.

Las islas chicas que el juego necesita sobreviven al recorte: Ítaca, Sérifos,
Naxos, Delos, Icaria, Creta, Chipre, Malta, Eubea, Léucade. Las Eolias (Lípari)
son demasiado chicas para 1:50m: la parada las representa igual, sobre el punto
correcto. Si en algún momento hacen falta, se regenera con el dataset 1:10m.

**No editar `mapa-geo.js` a mano.** Se regenera.

---

## 4. `viajes.json` — contrato de datos

Cada parada suma dos campos y **no pierde ninguno**:

```json
{
  "nombre": "Las Puertas de Troya",
  "x": 68, "y": 30,
  "lat": 39.957, "lon": 26.239,
  "contexto": "Acá empezó todo: …",
  "ubicacionReferencia": "Troya, en la región de la Tróade, …"
}
```

- `lat`/`lon`: grados decimales, norte y este positivos. **Es lo que el módulo lee.**
- `x`/`y`: se dejan como referencia del diseño anterior. `mapa.js` ya no los usa.
  Se pueden borrar en una limpieza posterior; no molestan.
- Las 53 paradas de los 12 viajes tienen coordenada. Ninguna quedó sin ubicar.

Las coordenadas salen de `ubicacionReferencia`, que ya estaba escrito en el
JSON: Troya de la Tróade, Cólquida en Poti, el monte Quimera en Yanartaş, Jope
en Jaffa, Temiscira en Terme. **Para agregar un viaje nuevo alcanza con poner
`lat`/`lon`** — no hay que calcular ningún `x`/`y`.

### Paradas que conviene revisar (decisión de contenido, no de código)

1. **Rómulo y Remo.** Las tres paradas están a menos de 20 km entre sí
   (Alba Longa 41,75/12,65 · Tíber 41,89/12,48 · Palatino 41,889/12,487): las
   dos últimas son literalmente el mismo lugar. El mapa las separa visualmente
   para que se puedan tocar (ver §5), pero geográficamente sería más honesto
   mover "La Orilla del Tíber" a la desembocadura (41,73/12,28) o dejar el
   viaje en dos paradas.
2. **"El Camino de las Antorchas"** (Deméter) y **"El Cielo sobre el Mar"**
   (Dédalo) no son lugares: los ubiqué en mar abierto (37,0/19,0 y 36,4/25,8)
   porque el mito habla de un recorrido, no de un punto. Funciona, pero si
   preferís que toda parada sea un lugar real, hay que reescribirlas.
3. **"El Confín del Oeste"** (Perseo) y **"El Jardín del Fin del Mundo"**
   (Heracles): los griegos los ponían más allá del mundo conocido. Los puse en
   la costa atlántica de Marruecos (32,3/−9,2 y 31,9/−9,4), que es lo más cerca
   de "el borde" que existe de verdad.
4. **Argonautas y Perseo** vuelven a su parada inicial (Yolco, Sérifos): la
   primera y la última caen en el mismo punto. El motor ya prioriza el punto que
   sigue en el orden, así que el último tap funciona.

---

## 5. Cómo funciona `mapa.js`

### Unidades

El SVG usa un `viewBox` de **100 unidades de ancho** y alto proporcional a la
caja real (`0 0 100 146.5` en un celular típico). Es a propósito: los radios y
grosores que usa `motor-trazado.js` están pensados para un plano 0-100, así que
**el motor no se toca**. Una unidad ≈ 4,3 px en un celular de 430 px.

### Proyección

Mercator a mano, cinco líneas, sin librería:

```js
const VISTA = { lon0: -14, lon1: 47, latCentro: 37.2 };
// con la cámara en reposo (k = 1) esa franja ocupa exactamente el ancho
mercatorY(lat) = Math.log(Math.tan(Math.PI/4 + lat*GRADOS/2))
```

### Cámara

`camara = { k, tx, ty }` aplicada como `transform` sobre `#mapa-camara`
(tierra + retícula). Los rótulos y el trazado viven afuera y se reproyectan, así
no se agrandan con el zoom. El grosor de la costa se divide por `k`.

**Mientras se traza**, la cámara encuadra la parada anterior, la actual y la
siguiente. Eso es lo que hace jugable un viaje como Belerofonte, donde dos
paradas están a 0,3° y otra a 7°: se ve el detalle local y la cámara vuela
cuando el viaje salta. **Al completarlo**, se abre y muestra el recorrido
entero — ese es el momento "ah, mirá por dónde fue".

Topes: `CAMARA_MIN = 1` (nunca se aleja más que la vista base) y
`CAMARA_MAX = 26` (~2,3° de ancho, el zoom del Lacio).

La animación dura 700 ms y respeta `prefers-reduced-motion` (salta al encuadre
sin animar). Durante el vuelo, `#mapa-svg` lleva la clase `.moviendo`, que apaga
las animaciones del trazado para que no se reinicien en cada cuadro — de ahí el
parche de CSS.

### Separación mínima

`separar()` empuja las paradas que caerían a menos de 9 unidades una de otra,
con un tope de 4,5 unidades de desplazamiento. **Es un ajuste de legibilidad,
no de datos**: el JSON conserva la coordenada real y el empujón nunca supera
unos 20 px. Sin esto, Alba Longa y el Palatino serían un solo punto.

### Rótulos

`REGIONES` y `MARES` en `mapa.js`, con coordenada real cada uno. Se dibujan por
prioridad (regiones primero) y el que pisaría a otro ya puesto no se dibuja. Los
que caen fuera del lienzo se saltean. Agregar un rótulo = una línea en el array.

---

## 6. Rendimiento

- `mapa-geo.js` son 29 KB de texto: se parsea una vez al cargar.
- El camino de la costa se arma una sola vez por medición (y en cada `resize`,
  con 150 ms de rebote), no en cada cuadro.
- Durante el vuelo de la cámara se redibujan solo el `transform`, los rótulos
  (~14 nodos) y el trazado (~20 nodos). Probado fluido en el navegador.
- El filtro `feTurbulence` de la costa (`#mapa-tinta`) es estático y se aplica a
  un solo path. Si en algún celular viejo se nota lento, sacarle el atributo
  `filter="url(#mapa-tinta)"` a `#mapa-tierras`: se pierde el temblor de pluma,
  no se rompe nada.

---

## 7. Checklist de QA

- [ ] Los 12 viajes se trazan de punta a punta sin error de consola.
- [ ] Atlas (una sola parada) completa con un tap y dispara la ceremonia.
- [ ] Argonautas y Perseo: el último tap, sobre la parada inicial, funciona.
- [ ] Rómulo y Remo: las tres paradas se distinguen y se pueden tocar.
- [ ] Al completar, la cámara se abre y se ve el recorrido entero.
- [ ] Rotar el teléfono rearma el mapa sin deformarlo.
- [ ] En compu (≥760 px) el mapa entra en la tarjeta grande, sin recortes raros.
- [ ] Con `prefers-reduced-motion` la cámara salta sin animar.
- [ ] Modo avión después de la primera carga: el mapa sigue andando.
- [ ] El progreso guardado antes del cambio sigue reconociendo los viajes hechos.

---

## 8. Qué NO se hizo, y por qué

- **Tiles de OpenStreetMap / satelital.** Es lo más realista que existe, pero
  rompe CLAUDE.md §2.5 (red en runtime) y mete nombres y fronteras modernos que
  sacan del mito. Está prototipado en `opciones-mapa.html`, opción 1e, por si
  alguna vez se quiere ver.
- **Relieve / sombreado de montañas.** Necesita un raster de elevación: son
  cientos de KB y no hay dataset chico de dominio público que valga la pena.
  Los triángulos de montaña del mapa viejo se pueden reponer como decoración
  sobre coordenadas reales (Olimpo, Etna, Cáucaso, Atlas) si querés: son seis
  líneas en `mapa.js`.
- **Mapa orientado al este** (opción 1c del set de opciones): entra todo el
  mundo del juego sin cámara, pero elegiste 1d. El código de rotación está en
  `opciones-mapa.html` si alguna vez se quiere combinar.
- **Nombres de ciudades antiguas sobre el mapa** (Troya, Cartago, Micenas): se
  puede, pero compite con el panel de la parada tocada. Lo dejo como propuesta.
