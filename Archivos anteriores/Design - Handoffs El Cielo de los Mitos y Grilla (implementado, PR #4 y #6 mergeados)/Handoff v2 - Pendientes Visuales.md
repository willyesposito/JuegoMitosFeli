# Handoff v2 — Pendientes visuales de Mundo de Mitos

Estado al 06/07/2026, branch `claude/game-setup-v98pr1`. Lo que ya está codeado (marcos plata/oro, holo, brillo-barrido, destellos, sello `estampar`, niebla de revelado, toast, reduced-motion) **no se toca**. Este doc lista solo lo que falta, con código listo para pegar y adaptado al modelo real del repo (`tier` = rareza estática; el logro es `historiaCompleta(p)` pasando de `false` a `true`).

Referencia visual ejecutable: `Referencia Visual - Mundo de Mitos.html` (abrir con doble clic).

---

## 1. Ceremonias de material (plateada / dorada mayor)

**Disparo:** cuando `encenderCapitulo()` hace que `historiaCompleta(p)` pase de `false` a `true` y `p.tier` es `plateado` o `dorado`. Como los capítulos los encienden otros módulos, el hook correcto es una función pública que esos módulos (o un listener de `storage`) llamen al volver a la colección.

### 1.1 CSS — agregar a `estilos.css`

```css
/* ===== Ceremonias de material ===== */
@keyframes aparece-oro { from { opacity: 0; } to { opacity: 1; } }

@keyframes onda-oro {
  0%   { transform: scale(.15); opacity: .9; }
  100% { transform: scale(4.4); opacity: 0; }
}

@keyframes flash-blanco {
  0% { opacity: 0; } 30% { opacity: 1; } 100% { opacity: 0; }
}

@keyframes rayos-estalla {
  0%   { transform: rotate(0deg) scale(.6); opacity: 0; }
  25%  { opacity: .8; }
  100% { transform: rotate(200deg) scale(1.5); opacity: 0; }
}

@keyframes part-vuela {
  0%   { transform: translate(0, 0) scale(1); opacity: 1; }
  100% { transform: translate(var(--dx), var(--dy)) scale(.15); opacity: 0; }
}

@keyframes resplandor {
  0%, 100% { box-shadow: 0 0 0 0 rgba(255, 216, 103, 0); }
  50%      { box-shadow: 0 0 34px 8px rgba(255, 216, 103, .55); }
}

.ceremonia-resplandor { animation: resplandor 1.1s ease-in-out; }

.onda-ceremonia {
  position: absolute;
  top: 50%; left: 50%;
  width: 70px; height: 70px;
  margin: -35px 0 0 -35px;
  border-radius: 50%;
  border: 3px solid rgba(255, 216, 103, .85);
  pointer-events: none;
  z-index: 4;
  animation: onda-oro .9s ease-out both;
}

.onda-ceremonia--plata { border-color: rgba(224, 230, 240, .85); }

.flash-ceremonia {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: radial-gradient(circle, rgba(255,255,255,.95), rgba(255,255,255,.6) 60%, transparent);
  pointer-events: none;
  z-index: 5;
  animation: flash-blanco .45s ease-out both;
}

.rayos-ceremonia {
  position: absolute;
  top: 50%; left: 50%;
  width: 240%;
  aspect-ratio: 1;
  margin-left: -120%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 0;
  background: repeating-conic-gradient(rgba(255, 224, 130, .35) 0deg 5deg, transparent 5deg 28deg);
  border-radius: 50%;
  animation: rayos-estalla 1.4s ease-out both;
}

.particula-sello {
  position: absolute;
  z-index: 6;
  font-size: 13px;
  color: #ffe9a8;
  pointer-events: none;
  animation: part-vuela .85s ease-out both;
}
```

### 1.2 JS — agregar a `app.js`

```js
/* ---------- Ceremonias de material ----------
   Un token por secuencia: si se dispara otra ceremonia (o se cierra el
   detalle) los setTimeout viejos no pisan el estado nuevo. */
let tokenCeremonia = 0;

function lanzarParticulasSello(contenedor, cantidad) {
  const centro = { top: "50%", left: "50%" };
  for (let i = 0; i < cantidad; i++) {
    const ang = (i / cantidad) * Math.PI * 2;
    const dist = 60 + Math.random() * 30;
    const part = document.createElement("span");
    part.className = "particula-sello";
    part.textContent = "✦";
    part.style.top = centro.top;
    part.style.left = centro.left;
    part.style.setProperty("--dx", `${Math.cos(ang) * dist}px`);
    part.style.setProperty("--dy", `${Math.sin(ang) * dist}px`);
    contenedor.appendChild(part);
    setTimeout(() => part.remove(), 900);
  }
}

function agregarEfimero(contenedor, clase, duracionMs) {
  const el = document.createElement("i");
  el.className = clase;
  contenedor.appendChild(el);
  setTimeout(() => el.remove(), duracionMs);
  return el;
}

/* Ceremonia plateada (~2.5s). `carta` = nodo .carta o #detalle-carta ya
   visible con el personaje, ANTES de aplicar el marco. */
function ceremoniaPlateada(carta, alTerminar) {
  const token = ++tokenCeremonia;
  sonar("arpegio");                                   // ver sección 4 (audio)
  setTimeout(() => {
    if (token !== tokenCeremonia) return;
    carta.classList.add("carta--plateada");           // o tier-plateada en detalle
    carta.style.background = "";
    carta.insertAdjacentHTML("afterbegin", capasMaterialHTML("plata"));
    agregarEfimero(carta, "onda-ceremonia onda-ceremonia--plata", 1000);
  }, 1250);
  setTimeout(() => {
    if (token !== tokenCeremonia) return;
    sonar("sello");
    if (alTerminar) alTerminar();                     // re-render de sello/chips
  }, 2450);
}

/* Ceremonia dorada mayor (~2.8s). */
function ceremoniaDorada(carta, alTerminar) {
  const token = ++tokenCeremonia;
  sonar("carga");
  carta.classList.add("ceremonia-resplandor");
  setTimeout(() => {
    if (token !== tokenCeremonia) return;
    sonar("impacto");
    agregarEfimero(carta, "flash-ceremonia", 500);
    agregarEfimero(carta, "onda-ceremonia", 1000);
  }, 450);
  setTimeout(() => {
    if (token !== tokenCeremonia) return;
    sonar("fanfarria");
    carta.classList.remove("ceremonia-resplandor");
    carta.classList.add("carta--dorada");
    carta.style.background = "";
    carta.insertAdjacentHTML("afterbegin", capasMaterialHTML("oro"));
    agregarEfimero(carta, "onda-ceremonia", 1100).style.transform = "scale(1.2)";
    agregarEfimero(carta, "rayos-ceremonia", 1500);
  }, 850);
  setTimeout(() => {
    if (token !== tokenCeremonia) return;
    sonar("sello");
    lanzarParticulasSello(carta, 6);
    if (alTerminar) alTerminar();
  }, 1750);
}

/* Hook para módulos externos: encender capítulo Y celebrar si con eso
   la historia quedó completa. Los módulos llaman a esto, no a encenderCapitulo. */
function encenderCapituloConCeremonia(personajeId, capituloId) {
  const p = porId(personajeId);
  const antes = p && historiaCompleta(p);
  encenderCapitulo(personajeId, capituloId);
  const ahora = p && historiaCompleta(p);
  if (!antes && ahora && (p.tier === "dorado" || p.tier === "plateado")) {
    renderGaleria();
    const carta = document.querySelector(`.carta[data-id="${personajeId}"]`);
    if (!carta) return;
    // Quitar el marco que renderGaleria ya pintó, para que la ceremonia lo "gane"
    carta.classList.remove("carta--dorada", "carta--plateada");
    carta.querySelectorAll(".holo, .brillo-sweep, .destello-permanente").forEach(n => n.remove());
    carta.style.background = `linear-gradient(160deg, ${p.colorCarta}, ${p.colorCarta}cc)`;
    (p.tier === "dorado" ? ceremoniaDorada : ceremoniaPlateada)(carta, renderGaleria);
  } else {
    renderGaleria();
  }
}
```

**Nota reduced-motion:** la regla global existente (`animation-duration: .01ms`) ya colapsa las animaciones; los `setTimeout` igual corren, así que el estado final queda íntegro. No hace falta nada más.

---

## 2. Encendido de capítulo (sección 8 del handoff v1)

Se implementa cuando exista el primer módulo que encienda capítulos. Feedback dentro del detalle abierto (~1.4s):

### 2.1 CSS

```css
@keyframes candado-abre {
  0%   { transform: rotate(0) scale(1); opacity: 1; }
  100% { transform: rotate(-25deg) scale(.4); opacity: 0; }
}

@keyframes num-entra {
  0%   { transform: scale(.3); opacity: 0; }
  70%  { transform: scale(1.15); opacity: 1; }
  100% { transform: scale(1); }
}

@keyframes tinta {
  from { clip-path: inset(0 0 100% 0); opacity: 0; }
  to   { clip-path: inset(0 0 0 0); opacity: 1; }
}

@keyframes luz-cruza {
  from { transform: translateX(-120%) skewX(-14deg); }
  to   { transform: translateX(520%) skewX(-14deg); }
}

.capitulo--recien-encendido { animation: resplandor 1.5s ease-out .25s both; overflow: hidden; position: relative; }

.capitulo--recien-encendido::before {
  content: "";
  position: absolute;
  top: 0; bottom: 0; left: 0;
  width: 30%;
  background: linear-gradient(105deg, transparent, rgba(255,255,255,.22), transparent);
  animation: luz-cruza .9s ease-out .15s both;
  pointer-events: none;
}

.capitulo--recien-encendido h3 { animation: num-entra .5s ease-out .4s both; }
.capitulo--recien-encendido p  { animation: tinta .8s ease-out .45s both; }

.capitulo-candado--abriendo { animation: candado-abre .55s ease-in both; }
```

### 2.2 JS (esqueleto)

```js
/* Si el detalle del personaje está abierto cuando llega un capítulo nuevo,
   reemplazar su bloque velado por el encendido con la clase de ceremonia. */
function animarCapituloEncendido(personajeId, capituloId) {
  sonar("dosNotas");
  const detalleAbierto = !document.getElementById("detalle").classList.contains("oculto");
  if (!detalleAbierto) return; // el toast alcanza
  setTimeout(() => {
    abrirDetalle(personajeId);                        // re-render con el capítulo ya encendido
    const bloques = document.querySelectorAll("#detalle-contenido .capitulo--encendido");
    const nuevo = bloques[bloques.length - 1];        // o buscar por data-capitulo-id
    if (nuevo) nuevo.classList.add("capitulo--recien-encendido");
  }, 950);
}

function toastCapitulo(titulo) {
  const toast = document.createElement("div");
  toast.className = "toast-aparicion";
  toast.textContent = `✨ Nuevo capítulo: ${titulo}`;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}
```

Mejor que el índice: agregar `data-capitulo-id="${capitulo.id}"` en `bloqueCapitulo()` y buscar por eso.

---

## 3. Fondo de carta derivado de `colorCarta`

Hoy: `linear-gradient(160deg, ${colorCarta}, ${colorCarta}cc)` — se ve chato. Reemplazar por la fórmula del mockup (2 lugares: `renderGaleria` y `pintarMarcoDetalle`):

```js
function hexARgb(hex) {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function fondoCarta(colorCarta) {
  const [r, g, b] = hexARgb(colorCarta);
  const f = (x, k) => Math.round(x * k);
  const oscuro    = `rgb(${f(r,.63)},${f(g,.63)},${f(b,.63)})`;
  const masOscuro = `rgb(${f(r,.47)},${f(g,.47)},${f(b,.47)})`;
  return `linear-gradient(170deg, ${colorCarta} 0%, ${oscuro} 55%, ${masOscuro} 100%)`;
}
```

Uso: `carta.style.background = fondoCarta(p.colorCarta);` y en el detalle reemplazar el doble gradiente actual por `fondoCarta(p.colorCarta)`.

---

## 4. Audio WebAudio (sin archivos)

Un `AudioContext` creado en el primer tap. Toggle en el modal de config, persistido.

```js
/* ---------- Audio ---------- */
let ctxAudio = null;
let sonidoActivo = localStorage.getItem("feli-sonido") !== "off";

function audioCtx() {
  if (!ctxAudio) ctxAudio = new (window.AudioContext || window.webkitAudioContext)();
  if (ctxAudio.state === "suspended") ctxAudio.resume();
  return ctxAudio;
}

function nota(freq, t0, dur, tipo = "sine", vol = .18) {
  const ctx = audioCtx();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = tipo;
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(vol, ctx.currentTime + t0);
  gain.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + t0 + dur);
  osc.connect(gain).connect(ctx.destination);
  osc.start(ctx.currentTime + t0);
  osc.stop(ctx.currentTime + t0 + dur);
}

function sonar(nombre) {
  if (!sonidoActivo) return;
  try {
    switch (nombre) {
      case "arpegio":   [523, 659, 784].forEach((f, i) => nota(f, i * .09, .3)); break;
      case "sello":     nota(880, 0, .25, "triangle", .22); nota(1320, .05, .2, "sine", .12); break;
      case "carga":     nota(196, 0, .5, "sawtooth", .08); break;
      case "impacto":   nota(90, 0, .3, "sine", .3); nota(60, 0, .35, "triangle", .2); break;
      case "fanfarria": [523, 659, 784, 1047].forEach((f, i) => nota(f, i * .11, .4, "triangle")); break;
      case "dosNotas":  nota(659, 0, .18); nota(880, .14, .25); break;
      case "correcto":  nota(784, 0, .15); nota(1047, .1, .3); break;
    }
  } catch (e) { /* sin audio: no pasa nada */ }
}
```

Toggle en config (HTML: un botón `#boton-sonido` en el modal):

```js
document.getElementById("boton-sonido").addEventListener("click", () => {
  sonidoActivo = !sonidoActivo;
  localStorage.setItem("feli-sonido", sonidoActivo ? "on" : "off");
  actualizarTextoBotonSonido();
});
```

Llamar `sonar("correcto")` en `responder()` cuando acierta, y `sonar("arpegio")` en `revelarCarta()`.

---

## 5. Tipografía Cinzel (offline)

Bajar los `.woff2` de Cinzel 700 y 800 (Google Fonts → carpeta `fonts/`) y en `estilos.css`:

```css
@font-face {
  font-family: "Cinzel";
  src: url("fonts/cinzel-700.woff2") format("woff2");
  font-weight: 700;
  font-display: swap;
}
@font-face {
  font-family: "Cinzel";
  src: url("fonts/cinzel-800.woff2") format("woff2");
  font-weight: 800;
  font-display: swap;
}

.encabezado h1, .carta .nombre, .detalle-contenido h2 {
  font-family: "Cinzel", serif;
  letter-spacing: .5px;
}
```

Agregar los dos woff2 a la lista del `sw.js` para cache offline.

---

## 6. Mejoras nuevas (prioridad sugerida)

### 6.1 Confetti al acertar la pregunta de desbloqueo (fácil, mucho retorno)

En `responder()`, rama correcta, antes del `setTimeout`:

```js
sonar("correcto");
lanzarParticulasSello(boton.parentElement, 8);   // reusa .particula-sello (sección 1)
```

(`.opciones` necesita `position: relative` en CSS.)

### 6.2 Barra de progreso segmentada de capítulos (detalle)

CSS:

```css
.barra-capitulos { display: flex; gap: 4px; height: 8px; margin-bottom: 12px; position: relative; z-index: 2; }
.barra-capitulos i { flex: 1; border-radius: 999px; background: rgba(255,255,255,.14); }
.barra-capitulos i.lleno { background: linear-gradient(90deg, #ffd867, #ff9e6b); }
```

JS, en `abrirDetalle()` después de `.capitulos-progreso`:

```js
const segmentos = capitulos.map(c =>
  `<i class="${!c.pendienteDeDiseno && encendidos.includes(c.id) ? "lleno" : ""}"></i>`).join("");
// insertar: `<div class="barra-capitulos">${segmentos}</div>`
```

### 6.3 Pulso "casi completa" (falta 1 capítulo)

```css
@keyframes pulso-casi { 0%, 100% { box-shadow: var(--sombra); } 50% { box-shadow: 0 0 18px 4px rgba(255, 216, 103, .35); } }
.carta--casi-completa { animation: pulso-casi 2.8s ease-in-out infinite; }
```

```js
function casiCompleta(p) {
  const reales = capitulosDe(p);
  const minimo = TIER_MINIMO[p.tier] || 1;
  if (reales.length < minimo) return false;
  const faltan = reales.filter(c => !capitulosEncendidosDe(p.id).includes(c.id)).length;
  return faltan === 1;
}
// en renderGaleria: if (desbloqueada && !tieneMaterial && casiCompleta(p)) carta.classList.add("carta--casi-completa");
```

### 6.4 Vibración en momentos clave (mobile)

```js
function vibrar(patron) { if (navigator.vibrate) navigator.vibrate(patron); }
// revelarCarta():        vibrar(30);
// ceremoniaPlateada t=2450: vibrar([20, 40, 20]);
// ceremoniaDorada t=1750:   vibrar([30, 50, 30, 50, 60]);
```

### 6.5 Contador con "pop" al subir

```css
@keyframes contador-pop { 0% { transform: scale(1); } 40% { transform: scale(1.18); } 100% { transform: scale(1); } }
.contador--pop { animation: contador-pop .45s ease-out; display: inline-block; }
```

```js
// en renderContador(), si `tengo` subió respecto del render anterior:
const el = document.getElementById("contador");
el.classList.remove("contador--pop");
void el.offsetWidth;   // reinicia la animación
el.classList.add("contador--pop");
```

### 6.6 Transición carta → detalle (opcional, progressive enhancement)

Con View Transitions API; en navegadores sin soporte no cambia nada:

```js
function abrirDetalleConTransicion(id) {
  if (!document.startViewTransition) { abrirDetalle(id); return; }
  const carta = document.querySelector(`.carta[data-id="${id}"]`);
  if (carta) carta.style.viewTransitionName = "carta-activa";
  document.startViewTransition(() => {
    abrirDetalle(id);
    document.getElementById("detalle-carta").style.viewTransitionName = "carta-activa";
    if (carta) carta.style.viewTransitionName = "";
  });
}
```

```css
::view-transition-old(carta-activa), ::view-transition-new(carta-activa) { animation-duration: .35s; }
```

---

## 7. Orden de implementación sugerido

1. §3 fondo de carta (5 min, mejora todas las cartas ya).
2. §5 Cinzel (30 min con descarga de fonts).
3. §4 audio + §6.1 confetti (el juego "se siente" vivo).
4. §1 ceremonias — dejarlas listas aunque hoy ninguna carta pueda completarse; probar forzando `estado.capitulosEncendidos` en consola.
5. §6.2, 6.3, 6.4, 6.5 (chico y rápido cada uno).
6. §2 encendido de capítulo — recién cuando exista un módulo que lo dispare.
7. §6.6 view transition, si sobra tiempo.

**Prueba manual de ceremonias sin módulos:** en consola,
`encenderCapituloConCeremonia("teseo", "<id-del-último-capítulo-real>")` con los demás ya encendidos vía `estado.capitulosEncendidos`.

---

## 8. Rediseño de la grilla — 3 opciones ("está chato")

La carta actual es un rectángulo plano de un color con tres chips apilados (`chip-mito`, `chip-tier`, `chip-capitulos`) que compiten. Mockup ejecutable comparando las tres: `Mejoras Grilla.dc.html` (opciones 1a / 1b / 1c). Son **acumulables**; recomendación: **1a + 1c** juntas es el mayor salto con menos riesgo estructural, 1b si se quiere un look de "juego de cartas" más marcado.

### Opción 1a — Profundidad y orden (bajo riesgo, no cambia el HTML de la carta)

Cinco cambios, todos sobre estilos + el `innerHTML` que ya arma `renderGaleria`:

**a) Fondo de 3 stops** — ya está en §3 (`fondoCarta`). Aplicar `carta.style.background = fondoCarta(p.colorCarta)`.

**b) Sombra con profundidad** — en `.carta`:
```css
.carta {
  box-shadow: 0 10px 24px rgba(0, 0, 0, .45), inset 0 1px 0 rgba(255, 255, 255, .18);
  overflow: hidden;
}
```

**c) Glow detrás del ícono** — en `.carta .ilustracion`:
```css
.carta .ilustracion {
  border: 1.5px solid rgba(255, 255, 255, .22);
  box-shadow: 0 0 26px rgba(255, 216, 103, .22);
}
```

**d) Esquinas doradas también en la grilla** (hoy solo en el detalle). Insertar al principio del `innerHTML` de cada carta desbloqueada sin material:
```html
<i class="esquina esquina-tl"></i><i class="esquina esquina-tr"></i><i class="esquina esquina-bl"></i><i class="esquina esquina-br"></i>
```
Las reglas `.esquina-*` ya existen en `estilos.css`; achicar a 11px para la mini:
```css
.carta .esquina { width: 11px; height: 11px; top: 8px; bottom: 8px; left: 8px; right: 8px; }
```

**e) Consolidar los 3 chips en 2 filas.** Reemplazar en `renderGaleria` el bloque
`${chipTier}${chipCapitulos}` por: fila 1 = mito + tier juntos; fila 2 = **barra segmentada** en vez de "1 de 4" en texto (reusa §6.2):
```js
carta.innerHTML = `
  ${tieneMaterial ? capasMaterialHTML(p.tier === "dorado" ? "oro" : "plata") : ""}
  ${desbloqueada && !tieneMaterial ? '<i class="esquina esquina-tl"></i><i class="esquina esquina-tr"></i><i class="esquina esquina-bl"></i><i class="esquina esquina-br"></i>' : ""}
  <span class="ilustracion">${svgIcono(p.icono, !desbloqueada)}</span>
  <span class="nombre">${desbloqueada ? p.nombre : "???"}</span>
  ${desbloqueada ? `
    <span class="chips-fila">
      <span class="chip-mito">${NOMBRE_MITO[p.mitologia] || p.mitologia}</span>
      ${chipTierCompacto(p)}
    </span>
    ${barraCapitulosMini(p)}
  ` : `<span class="chip-mito">${NOMBRE_MITO[p.mitologia] || p.mitologia}</span>`}`;
```
```js
/* tier como medalla chica, solo el símbolo */
function chipTierCompacto(p) {
  if (p.tier !== "dorado" && p.tier !== "plateado") return "";
  const simbolo = p.tier === "dorado" ? "⭐" : "✦";
  return `<span class="chip-tier tier-${p.tier}" style="padding:3px 8px">${simbolo}</span>`;
}
function barraCapitulosMini(p) {
  const caps = capitulosParaMostrar(p);
  const enc = capitulosEncendidosDe(p.id);
  const segs = caps.map(c =>
    `<i class="${!c.pendienteDeDiseno && enc.includes(c.id) ? "lleno" : ""}"></i>`).join("");
  return `<span class="barra-capitulos-mini">${segs}</span>`;
}
```
```css
.chips-fila { display: flex; gap: 6px; align-items: center; }
.barra-capitulos-mini { display: flex; gap: 4px; width: 72%; height: 6px; margin-top: 2px; }
.barra-capitulos-mini i { flex: 1; border-radius: 999px; background: rgba(255,255,255,.16); }
.barra-capitulos-mini i.lleno { background: linear-gradient(90deg, #ffd867, #ff9e6b); }
```

**f) Nombre en Cinzel** — cubierto por §5.

### Opción 1b — Naipe de colección (mayor cambio, look de trading card)

Envuelve el contenido en un marco interior y mueve el tier a un **medallón** en la esquina. Estructura de la carta pasa a dos capas (`.carta` externa = borde de material, `.carta-interior` = contenido con borde fino):

```css
.carta {
  padding: 7px;                 /* el "marco" es el padding + su background */
  border-radius: 16px;
}
.carta-interior {
  position: relative;
  border: 1.5px solid rgba(255, 216, 103, .5);
  border-radius: 11px;
  padding: 16px 10px 12px;
  display: flex; flex-direction: column; align-items: center; gap: 8px;
  overflow: hidden;
}
/* halo detrás del ícono */
.carta-interior::before {
  content: ""; position: absolute; top: -34px; left: 50%;
  width: 150px; height: 150px; margin-left: -75px; border-radius: 50%;
  background: radial-gradient(circle, rgba(255,216,103,.2), transparent 70%);
  pointer-events: none;
}
.medallon-tier {
  position: absolute; top: 6px; right: 6px; z-index: 2;
  width: 26px; height: 26px; border-radius: 50%;
  display: grid; place-items: center; font-size: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,.4);
}
.medallon-tier.tier-dorado   { background: linear-gradient(135deg, #f8e08e, #c9962e); }
.medallon-tier.tier-plateado { background: linear-gradient(135deg, #f4f7fb, #9aa5b5); }
/* subtítulo (titulo del personaje) bajo el nombre */
.carta .subtitulo-mito { font-size: 10px; font-style: italic; color: rgba(255,255,255,.75); }
/* divisor ornamental mito */
.divisor-mito { display: flex; align-items: center; gap: 6px; justify-content: center; width: 100%; }
.divisor-mito i { flex: 1; max-width: 26px; height: 1px; background: rgba(255,216,103,.45); }
.divisor-mito span { font-size: 10.5px; font-weight: 700; color: rgba(255,236,170,.9); letter-spacing: 1px; }
```
```js
// renderGaleria: la carta ahora envuelve todo en .carta-interior
carta.style.background = fondoCarta(p.colorCarta);   // el borde de material se pinta con el padding
carta.innerHTML = `
  <div class="carta-interior">
    ${p.tier === "dorado" || p.tier === "plateado"
      ? `<span class="medallon-tier tier-${p.tier}">${p.tier === "dorado" ? "⭐" : "✦"}</span>` : ""}
    <span class="ilustracion">${svgIcono(p.icono, !desbloqueada)}</span>
    <span class="nombre">${desbloqueada ? p.nombre : "???"}</span>
    ${desbloqueada ? `<span class="subtitulo-mito">${p.titulo}</span>` : ""}
    <span class="divisor-mito"><i></i><span>${(NOMBRE_MITO[p.mitologia]||p.mitologia).replace(/^\S+\s/, "").toUpperCase()}</span><i></i></span>
    ${desbloqueada ? barraCapitulosMini(p) : ""}
  </div>`;
```
Para cartas con historia completa, la `.carta` externa ya lleva el gradiente metálico (`carta--dorada/--plateada`) como borde; quitarle el borde fino dorado al interior en ese caso (`.carta--dorada .carta-interior { border-color: transparent; }`).

### Opción 1c — Ambiente de página (independiente de la carta)

Toca `body`, `.encabezado` y `.filtros`, no las cartas. Combinable con 1a o 1b.

**a) Fondo con cielo estrellado** (los puntitos `titila` que ya están definidos):
```css
body {
  background: radial-gradient(circle at 50% 12%, #2c2260 0%, #191142 58%, #120d33 100%) fixed;
}
```
JS al iniciar — sembrar ~6 estrellas fijas en el fondo:
```js
function sembrarEstrellas() {
  const capa = document.createElement("div");
  capa.style.cssText = "position:fixed;inset:0;pointer-events:none;z-index:0;overflow:hidden";
  const pos = [[12,8,3,4,.4],[24,88,2,4.8,1.2],[60,5,2,5.2,2],[78,92,3,4.4,.9],[8,55,2,4.6,1.6],[40,70,2,5,.6]];
  capa.innerHTML = pos.map(([t,l,s,d,dl]) =>
    `<span style="position:absolute;top:${t}%;left:${l}%;width:${s}px;height:${s}px;border-radius:50%;background:#fff;animation:titila ${d}s ease-in-out ${dl}s infinite backwards"></span>`).join("");
  document.body.appendChild(capa);
}
// llamar en iniciar(); y asegurar que .encabezado/.galeria tengan position:relative;z-index:1
```

**b) Header con ornamento** — divisor bajo el título:
```html
<!-- en index.html, después del <h1> -->
<span class="ornamento-header"><i></i><span>⚡</span><i></i></span>
```
```css
.ornamento-header { display: flex; align-items: center; gap: 10px; width: 240px; margin: 6px auto 0; }
.ornamento-header i { flex: 1; height: 1px; }
.ornamento-header i:first-child { background: linear-gradient(90deg, transparent, rgba(255,216,103,.6)); }
.ornamento-header i:last-child  { background: linear-gradient(90deg, rgba(255,216,103,.6), transparent); }
.ornamento-header span { color: rgba(255,216,103,.8); font-size: 12px; }
```

**c) Contador con mini barra** — reemplazar el texto plano del `.contador`:
```js
function renderContador() {
  const total = personajes.length;
  const tengo = personajes.filter(p => estaDesbloqueada(p.id)).length;
  const pct = Math.round((tengo / total) * 100);
  document.getElementById("contador").innerHTML =
    `<span class="contador-barra"><i style="width:${pct}%"></i></span> Tenés ${tengo} de ${total} héroes`;
}
```
```css
.contador { display: inline-flex; align-items: center; gap: 10px; border: 1px solid rgba(255,216,103,.35); }
.contador-barra { display: inline-block; width: 110px; height: 7px; border-radius: 999px; background: rgba(0,0,0,.35); overflow: hidden; }
.contador-barra i { display: block; height: 100%; border-radius: 999px; background: linear-gradient(90deg, #ffd867, #ff9e6b); }
```

**d) Filtros más finos** — borde 1px en vez de 2px, el activo con glow:
```css
.chip { border-width: 1px; padding: 7px 16px; }
.chip.activo { box-shadow: 0 0 12px rgba(255, 216, 103, .4); }
```

### Prioridad dentro de §8
Meter **1c** primero (independiente, sin riesgo) → luego **1a** (mejora cada carta) → **1b** solo si tras ver 1a se quiere el look de naipe. 1b y 1a-e (chips) son mutuamente excluyentes: 1b reordena el contenido de la carta, no apila chips.
