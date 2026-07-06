# Handoff: Tiers de carta (Descubierta → Plateada → Dorada)

Mockup de referencia: `Cartas y Animaciones.dc.html` (sección 04 = ceremonia interactiva, sección 05 = looks permanentes, sección 01 = los 4 estados en la grilla). Es HTML/CSS puro con `@keyframes`, sin librerías — **es una referencia visual, no código para copiar tal cual**. La tarea es recrear el comportamiento en el repo real (vanilla JS/HTML/CSS, sin build, sin red en runtime).

## Fidelidad
**Hifi.** Colores, gradientes, timings y textos del mockup son finales. Recrear pixel a pixel donde se pueda; los valores exactos están en "Notas de portabilidad" al final.

---

## 1. Contrato de datos

### 1.1 `personajes.json` — no hace falta agregar campos para el MVP

Los campos que ya tenés alcanzan:
- `historia` (string) → dispara **plateada** cuando el jugador la termina de leer.
- `pregunta: { texto, opciones[], correcta }` → dispara **dorada** cuando la responde bien. Es la "Pregunta del Sabio".

⚠️ **Ojo con el campo `tier` que mencionás en tu forma actual de `personajes.json`.** Si ese `tier` es un dato **estático** del personaje (ej. rareza/dificultad de contenido), no lo toques, es otra cosa. Si en cambio pensaban usarlo para guardar el progreso del jugador (descubierta/plateada/dorada), **no debería vivir en `personajes.json`**: ese archivo es contenido compartido y de solo lectura; el progreso es por-jugador y mutable, así que va en `localStorage` (ver 1.2). Avisá cuál de las dos cosas es antes de tocar el archivo.

Campo opcional/futuro (no para el MVP): ver sección 3.

### 1.2 `localStorage` — progreso del jugador

Una sola key, un objeto con los hechos crudos por personaje. El tier **se calcula, no se guarda** (evita que quede desincronizado si cambia la lógica más adelante).

**Key:** `mitos_progreso_v1`

```json
{
  "version": 1,
  "personajes": {
    "teseo": {
      "descubierta": true,
      "historiaLeida": true,
      "preguntaAcertada": false,
      "intentosFallados": 2
    },
    "heracles": {
      "descubierta": true,
      "historiaLeida": true,
      "preguntaAcertada": true
    },
    "penelope": {
      "descubierta": false
    }
  }
}
```

Campos por personaje (todos opcionales, ausencia = `false`):
- `descubierta: boolean` — apareció al menos una vez (Oráculo, etc.). Sin esto, tier 0 (velada).
- `historiaLeida: boolean` — terminó de leer `historia`. Con esto, tier 2 (plateada).
- `preguntaAcertada: boolean` — respondió bien `pregunta`. Con esto, tier 3 (dorada).
- `intentosFallados: number` — opcional, solo para analytics/futuro (ver sección 3). No bloquea nada.

**Función derivada (poné esto en un solo lugar, no la repitas):**

```js
function tierDe(progresoPersonaje) {
  if (!progresoPersonaje?.descubierta) return 0;      // velada
  if (!progresoPersonaje.historiaLeida) return 1;      // descubierta
  if (!progresoPersonaje.preguntaAcertada) return 2;   // plateada
  return 3;                                            // dorada
}
```

---

## 2. Fases de implementación

Cada fase se puede construir y probar sola, sin que la UI final exista todavía.

**Fase 1 — Esquema y lectura, sin UI.**
Escribir `tierDe()`, la key de `localStorage` y helpers `marcarHistoriaLeida(id)` / `marcarPreguntaAcertada(id)` / `marcarPreguntaFallada(id)`. Test manual: escribir JSON de prueba en `localStorage`, llamar `tierDe()` en consola, confirmar que devuelve 0/1/2/3 correctamente. **Cero cambios visuales.**

**Fase 2 — Grilla estática con 4 estados.**
La grilla de colección ya debe pintar el marco/badge correcto según `tierDe()` (velada / descubierta / plateada / dorada), **sin ninguna animación todavía** — solo los 4 looks fijos de la sección 01 y 05 del mockup. Sirve para validar que el dato se lee bien antes de sumar movimiento.

**Fase 3 — Disparadores de negocio.**
Conectar `marcarHistoriaLeida` al final de la lectura de la historia (scroll al fondo, botón "Terminé de leer", lo que ya tengan). Conectar la Pregunta del Sabio: render de `pregunta.texto` + `pregunta.opciones`, click → si `idx === pregunta.correcta` llamar `marcarPreguntaAcertada`, si no, `marcarPreguntaFallada` + mensaje "Probá de nuevo" (sin bloquear, sin límite de intentos). La Pregunta del Sabio solo se muestra si `tierDe() === 2`. Todavía sin ceremonia: el cambio de tier puede ser instantáneo (re-render).

**Fase 4 — Las dos ceremonias.**
Recién aquí se agregan los `@keyframes` y los `setTimeout` encadenados del mockup (ver sección 4). Plateada reusa los timings/keyframes que en el mockup eran los únicos que existían; dorada es la versión mayor. Esta fase es puramente visual, no toca el contrato de datos.

**Fase 5 — Pulido de audio/reduced-motion.**
Sonidos WebAudio (opcional, ver notas) + respetar `prefers-reduced-motion`.

---

## 3. Imprescindible vs. opcional/futuro

**Imprescindible para este feature:**
- Las 4 fases 1–4 completas.
- `historia` + `pregunta` tal como ya existen en `personajes.json`.

**Opcional / depende de otra mecánica que todavía no existe — no bloquea nada de lo anterior:**
- **Historia en capítulos con contenido "bonus" desbloqueado en otros mini-juegos** (el mockup mostraba esto como flavor de demo, con capítulos tipo "🔒 Superá la crisis en Crisis del Mundo Antiguo"). Esto requeriría cambiar `historia: string` a `capitulos: [{ titulo, texto, porque?, bonus: boolean, juego?: string }]` y una forma de que otros juegos escriban de vuelta en este `localStorage`. **No lo implementes hasta que esos otros juegos existan y tengan un mecanismo de comunicación definido** (¿mismo dominio? ¿mismo storage? hay que decidirlo aparte).
- `intentosFallados` / cualquier lógica de pistas después de N fallos en la Pregunta del Sabio.
- Persistencia del toggle de sonido entre sesiones (en el mockup vive en memoria).
- Variante "Giro estelar" del revelado (sección 02 del mockup) — quedó descartada a favor de "Niebla del Oráculo", no hace falta portarla.

---

## 4. Notas de portabilidad (visual)

**Bug ya resuelto en el mockup, replicalo:** toda animación con `animation-delay` + `infinite` necesita `animation-fill-mode: backwards` (o `both`). Sin eso, durante la espera el navegador no aplica ningún keyframe y el elemento se ve fijo en su posición base — se veía como una franja de luz pegada a mitad de la carta. Con `backwards` sí toma los valores del 0%.

**Paleta:**
- Plateada — marco: `linear-gradient(130deg, #e8ecf2, #9aa5b5 30%, #f4f7fb 50%, #77828f 72%, #d9dfe8)`. Interior: `linear-gradient(165deg, #4a5460 0%, #39424d 48%, #262d36 100%)`. Sello: fondo `linear-gradient(120deg, rgba(224,230,240,.95), rgba(255,255,255,.9))`, texto `#2b323c`, copy "✦ HISTORIA COMPLETA".
- Dorada — marco: `linear-gradient(130deg, #f8e08e, #c9962e 30%, #ffefb0 50%, #a87b1f 72%, #f2cf6b)`. Interior: `linear-gradient(165deg, #6b5015 0%, #4a3610 48%, #33250b 100%)`. Sello: fondo `linear-gradient(120deg, rgba(255,216,103,.95), rgba(255,236,170,.9))`, texto `#4a3200`, copy "🥇 MITO DOMINADO".
- Holográfico (elegido para las dos, se regula con un slider de intensidad 10–100%): plata = tonos fríos `rgba(180,200,255,·) / rgba(210,175,255,·) / rgba(255,255,255,·) / rgba(170,220,255,·)`; oro = arcoíris cálido `rgba(255,110,196,·) / rgba(96,225,255,·) / rgba(255,230,120,·) / rgba(150,255,180,·)`. Gradiente `115deg`, `background-size: 240% 240%`, animado con `holo-mov` (`background-position` 0%→100%, 7s ease-in-out infinite alternate).

**Keyframes por momento** (nombres tal cual, para no reinventarlos):
- Comunes a ambas ceremonias: `aparece-oro` (fade-in del marco, 0→1 opacidad), `onda-oro` (anillo `scale(.15)→scale(4.4)` + opacidad `.9→0`), `estampar` (el sello: `scale(2.3) rotate(-15deg)` → overshoot `scale(1.07)` → reposo `scale(1) rotate(-6deg)`), `brillo-barrido` (franja diagonal `translateX(-170%)→translateX(430%)`, infinite, **con `backwards`**), `holo-mov`, `titila` (destellos, `opacity 0→1→0` + `scale .5→1`), `part-vuela` (partículas: `translate(0,0)→translate(var(--dx),var(--dy))` + `scale 1→.15` + fade).
- Solo en dorada (mayor): `flash-blanco` (opacidad `0→1→0` en 0.45s, radial blanco cubriendo toda la carta), `rayos-estalla` (`repeating-conic-gradient` girando `rotate(0→200deg)` + `scale(.6→1.5)` + fade in/out, spokes cada ~28° vía `repeating-conic-gradient(color 0deg 5deg, transparent 5deg 28deg)`).

**z-index dentro de la carta** (de atrás a adelante): 0 rayos (dorada mayor) · marco/interior recoloreado (sin z-index explícito, va antes en el DOM) · 1 brillo-barrido + holo + titila · 2 contenido (texto/ícono, siempre arriba del brillo) · 4 ondas · 5 flash blanco (dorada mayor) · 6 sello + partículas del sello.

**Timings (setTimeout encadenados, un token por secuencia para poder cancelar con "Reiniciar"):**
- *Plateada* (~2.5s total, id "ORO" en el mockup): t=0 revelar contenido de historia (si aplica) → t=1250ms sonido + aparece marco plata + onda → t=2450ms sonido de sello + estado final (sello, brillo infinito, holo infinito).
- *Dorada mayor* (~2.8s total, arranca al responder bien la pregunta): t=0 sonido de carga + glow de anticipación (reusa `resplandor`) → t=450ms impacto + flash blanco + primera onda → t=850ms fanfarria + segunda onda más grande + rayos girando + marco pasa a oro → t=1750ms sello "Mito dominado" + ráfaga de partículas (6, no 3) + brillo/holo infinitos.

**Audio (WebAudio, sin archivos, opcional pero ya resuelto en el mockup):** osciladores simples (`sine`/`triangle`/`sawtooth`) + un buffer de ruido filtrado para "soplos". Un `AudioContext` global, creado en el primer tap del usuario (no antes, los navegadores lo bloquean). Plateada usa un arpegio corto; dorada mayor suma un "impacto" grave (thump + ruido) antes del arpegio y un sello con más armónicos. Todo detrás de un toggle de sonido que respeta el estado del usuario.

**`prefers-reduced-motion: reduce`:** todas las animaciones deben poder colapsarse a duración ~0 sin romper el estado final (el contenido final debe quedar completo e íntegro, no a mitad de una transición).

---

## 5. Referencia visual ejecutable (sin nuestro runtime)

Además de este markdown, adjunto `Referencia Visual - Mundo de Mitos.html`: es el mismo mockup pero **empaquetado en un solo archivo, sin dependencias externas ni de red** — se puede abrir con doble clic en cualquier navegador, sin conexión, y funciona igual que en el chat (incluye las animaciones, los estados, todo). Pasale ese archivo a tu asistente de código junto con este `.md`: puede abrirlo y también leer su fuente (`Ctrl/Cmd+U` o "ver código fuente") para copiar valores exactos de CSS que no estén ya transcriptos abajo.

## 6. Anatomía de la carta — tokens compartidos por las 63 cartas

Esto no está en la sección de tiers pero hace falta para que **cualquier** personaje de `personajes.json` se vea bien, no solo los 3 que usé de ejemplo (Teseo, Heracles, Penélope).

**El fondo de la carta se deriva de `colorCarta`, no está hardcodeado.** Reconstruí la fórmula comparando los 3 ejemplos del mockup:

```js
function fondoCarta(colorCarta) {
  const [r, g, b] = hexARgb(colorCarta);
  const oscuro  = rgbAHex(r * 0.63, g * 0.63, b * 0.63);   // stop 55%
  const masOscuro = rgbAHex(r * 0.47, g * 0.47, b * 0.47); // stop 100%
  return `linear-gradient(170deg, ${colorCarta} 0%, ${oscuro} 55%, ${masOscuro} 100%)`;
}
```
(Verificado contra los 3 colores reales del JSON: `#4A7C59` Teseo, `#C97B2D` Heracles, `#8E5A8E` Penélope — los 3 caen en esos mismos ratios ±0.02.)

**Tipografía:** nombres/headers en `Cinzel` (Google Fonts, pesos 600/700/800), fallback `serif`. Cuerpo en stack de sistema (`ui-rounded, 'Segoe UI', system-ui, -apple-system, 'Helvetica Neue', Arial, sans-serif`). **Para offline** hay que bajar el `.woff2` de Cinzel (~30 KB por peso) y servirlo local vía `@font-face` — el link a `fonts.googleapis.com` que usa el mockup no funciona sin red.

**Esquinas doradas (bracket corners):** 4 `<i>` en las esquinas, cada uno con 2 bordes de 2px en `rgba(255,216,103,.7)` formando una L, `border-radius` solo en la esquina exterior. Tamaño 15px en la carta grande de detalle, 13px en la carta revelada, 11px en la mini de grilla. Se usan en descubierta; plateada/dorada las reemplazan por el marco metálico completo (no llevan esquinas sueltas).

**Ícono del personaje:** círculo `rgba(0,0,0,.22–.28)` con borde `1.5px solid rgba(255,255,255,.22)` y un glow radial detrás (`radial-gradient(circle, rgba(255,216,103,.28), transparent 70%)`) en la carta de detalle. El `<svg viewBox="0 0 120 120">` de adentro en el mockup lo dibujé a mano por personaje (laberinto, león, telar) **solo para la demo** — en el repo real ese `<svg>` sale de `iconos.js` según el campo `icono` de cada personaje. Portar: conservar el círculo contenedor tal cual, reemplazar únicamente el contenido interno del `<svg>` por lo que devuelva `iconos.js` para ese `icono`.

## 7. Revelado — "Niebla del Oráculo" (spec completa, sección 02 variante A del mockup)

Es la animación elegida para cuando aparece una carta nueva desde el Oráculo.

**Fondo del escenario:** `radial-gradient(circle at 50% 28%, #2c2260 0%, #191142 58%, #120d33 100%)`. 5 puntitos de fondo (`titila`, 2–3px, blancos, duraciones 4–5.2s con delays .4–2s, **con `backwards`**) dan sensación de cielo estrellado, siempre activos.

**Estado inicial (dorso, "idle"):** el dorso de la carta (mismo diseño para las 63: fondo `radial-gradient(circle at 50% 40%, #3b2f75, #241c4d 62%, #1a1440)`, rombo dorado en el centro con un punto brillante, texto "MUNDO DE MITOS" chiquito abajo) flota con `flota 5.5s ease-in-out infinite` (`translateY -5px ↔ +5px`). Detrás, 4 manchas de niebla difuminadas (`filter: blur(22–24px)`, radial-gradients violeta/celeste) se mueven con `deriva` (9–12s, distintos delays y `reverse` en 2 de las 4).

**Click en "Consultar al Oráculo" → secuencia (~1s total):**
1. t=0: sonido (soplo de viento + acorde ascendente), estado "invocando". El dorso suma `resplandor` (glow pulse, 1.1s) + `floron` (anillo dorado que se expande y desaparece, .95s) — ambas `ease-out both`, sin loop.
2. t=1050ms: estado "revelada". Las 4 manchas de niebla idle se reemplazan por `niebla-parte-a/b/c/d` (cada una 1s ease-out both): cada mancha se dispara hacia una esquina distinta escalando ×1.4–1.55 mientras se funde a 0 opacidad — el efecto de "la niebla se abre". Simultáneamente la carta real aparece con `brotar` (.95s ease-out both: opacidad 0→1, `scale(.86)→scale(1)`, `brightness(2.4)→brightness(1.35)→brightness(1)`, `saturate(.6)→saturate(1)` — el "destello" de aparición).
3. Toast "✨ ¡Apareció {nombre}!" a los +500ms de la revelación (`aparecer-toast .45s ease-out .5s both`).

**Botón "↺ Otra vez"** reinicia todo el estado a idle sin animación de salida (corte directo).

## 8. Capítulo — "encendido" (spec completa, sección 03 del mockup)

Es el feedback de leer una historia o volver de otro mini-juego con progreso nuevo. A diferencia de las ceremonias de tier, esto no cambia el marco de la carta — solo desbloquea contenido de texto dentro de la lista de capítulos.

**Disparo → secuencia (~1.4s hasta quedar legible, toast se va solo a los 3s):**
1. t=0: sonido (2 notas cortas), estado "encendiendo". La barra de progreso del capítulo anterior ya está llena; nada visible cambia todavía.
2. t=950ms (dentro de la barra de progreso, en paralelo): el segmento del nuevo capítulo se llena con `crece-seg .5s ease-out .95s both` (`scaleX(0)→scaleX(1)`, `transform-origin: left`).
3. t=1400ms: estado "encendido" + toast visible. El bloque del capítulo (antes con candado, fondo punteado) se reemplaza por el bloque real: `resplandor 1.5s ease-out .25s both` en el contenedor, `luz-cruza .9s ease-out .15s both` como barrido de luz único (no infinito) cruzando el bloque. El ícono 🔒 se va con `candado-abre .55s ease-in both` (rota, escala, funde) mientras el número de capítulo (ej. "II") entra con `num-entra .5s ease-out .4s both` (`scale(.3)→scale(1.15)→scale(1)`). El título/subtítulo del capítulo y el párrafo entran con `tinta` (clip-path de abajo hacia arriba simulando escritura, .6–1s, delays .4–.5s, todas `both` — estas ya estaban bien, sin el bug de delay).
4. Toast "✨ Nuevo capítulo: {título}" (`aparecer-toast .45s ease-out both`, sin delay) se oculta solo a los 3s de aparecido (t=4400ms desde el click).

**Botón "↺ Reiniciar"** corta cualquier secuencia en curso y vuelve al capítulo bloqueado, igual que en las ceremonias de tier.
