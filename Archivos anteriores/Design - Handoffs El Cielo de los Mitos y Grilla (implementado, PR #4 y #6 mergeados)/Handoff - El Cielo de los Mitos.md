# Handoff — Módulo "El Cielo de los Mitos"

Prototipo ejecutable de referencia: `El Cielo de los Mitos.dc.html` (abrir con doble clic; es hifi, comportamiento final). Este doc tiene todo lo necesario para implementarlo en el repo real (vanilla JS/HTML/CSS, sin build, sin red en runtime). Branch base: `claude/game-setup-v98pr1`.

**Fidelidad: hifi.** Coordenadas, timings, dificultad y flujo del prototipo son finales. Los **textos de capítulo son BORRADOR** (ver §6) salvo Corona Boreal — Willy los revisa antes de publicar.

---

## 1. Qué hace el módulo (spec_funcional §4)

Cielo nocturno SVG. Feli une estrellas en orden siguiendo el patrón de una constelación. Al completarla: se ilumina, se dibuja la figura, suena una fanfarria y sube una hoja con el capítulo de historia que enciende (con su "¿Por qué?"). El selector inferior permite cambiar de constelación; el progreso persiste.

**Doble función (spec):** completar una constelación
- **descubre** al personaje asociado (enciende su capítulo `base`) si aún no estaba descubierto, o
- **enciende un capítulo adicional** si ya estaba descubierto.

Sin límite diario: el límite lo pone el catálogo finito de 10.

---

## 2. Contrato de datos

### 2.1 Nuevo archivo `constelaciones.json`

Contenido completo listo para pegar (coordenadas 0–100, trazo lineal sin ramas; `estrellaInicio` = índice de la estrella más grande/brillante por donde arranca el trazo; `personajeId` + `capituloId` mapean al capítulo que enciende en `personajes.json`).

```json
[
  {
    "id": "corona_boreal", "nombre": "Corona Boreal", "sub": "La corona de Ariadna",
    "emoji": "👑", "dificultad": 1, "estrellaInicio": 0,
    "estrellas": [[17,62],[25,47],[37,38],[51,36],[64,40],[75,49],[82,62]],
    "brillante": 3, "personajeId": "teseo", "capituloId": "hilo_ariadna",
    "tambienEnciende": [{ "personajeId": "ariadna", "capituloTitulo": "La corona en el cielo" }],
    "estado": "publicado"
  },
  {
    "id": "osa_mayor", "nombre": "Osa Mayor", "sub": "La osa que nunca se esconde",
    "emoji": "🐻", "dificultad": 1, "estrellaInicio": 0,
    "estrellas": [[14,36],[26,40],[37,45],[47,50],[62,48],[66,63],[50,64]],
    "brillante": 0, "personajeId": "calisto", "capituloId": "osa_cielo", "estado": "borrador"
  },
  {
    "id": "casiopea", "nombre": "Casiopea", "sub": "La reina en su trono",
    "emoji": "👸", "dificultad": 1, "estrellaInicio": 0,
    "estrellas": [[16,44],[32,58],[48,42],[64,58],[80,44]],
    "brillante": 2, "personajeId": "casiopea", "capituloId": "reina_trono", "estado": "borrador"
  },
  {
    "id": "leo", "nombre": "Leo", "sub": "El león de Nemea",
    "emoji": "🦁", "dificultad": 2, "estrellaInicio": 0,
    "estrellas": [[24,66],[21,52],[28,42],[39,37],[50,41],[62,46],[76,52],[70,64]],
    "brillante": 0, "personajeId": "heracles", "capituloId": "leon_nemea", "estado": "borrador"
  },
  {
    "id": "andromeda", "nombre": "Andrómeda", "sub": "La princesa rescatada",
    "emoji": "🌊", "dificultad": 2, "estrellaInicio": 0,
    "estrellas": [[14,68],[30,57],[47,48],[64,40],[81,31]],
    "brillante": 0, "personajeId": "andromeda", "capituloId": "rescate", "estado": "borrador"
  },
  {
    "id": "orion", "nombre": "Orión", "sub": "El cazador del cielo",
    "emoji": "🏹", "dificultad": 2, "estrellaInicio": 0,
    "estrellas": [[58,28],[36,26],[42,48],[48,51],[54,54],[64,76],[40,74]],
    "brillante": 0, "personajeId": "orion", "capituloId": "cazador", "estado": "borrador"
  },
  {
    "id": "geminis", "nombre": "Géminis", "sub": "Los gemelos inseparables",
    "emoji": "👬", "dificultad": 2, "estrellaInicio": 0,
    "estrellas": [[28,26],[33,46],[42,66],[58,66],[65,46],[68,26]],
    "brillante": 5, "personajeId": "castor_polux", "capituloId": "gemelos", "estado": "borrador"
  },
  {
    "id": "pegaso", "nombre": "Pegaso", "sub": "El caballo alado",
    "emoji": "🐴", "dificultad": 3, "estrellaInicio": 0,
    "estrellas": [[30,38],[56,33],[62,58],[36,63],[20,74]],
    "brillante": 1, "personajeId": "pegaso", "capituloId": "caballo_alado", "estado": "borrador"
  },
  {
    "id": "perseo", "nombre": "Perseo", "sub": "El héroe del escudo espejo",
    "emoji": "🛡️", "dificultad": 3, "estrellaInicio": 0,
    "estrellas": [[52,14],[46,28],[40,42],[33,56],[28,70],[44,76]],
    "brillante": 1, "personajeId": "perseo", "capituloId": "heroe_estrellas", "estado": "borrador"
  },
  {
    "id": "escorpio", "nombre": "Escorpio", "sub": "El escorpión del cielo",
    "emoji": "🦂", "dificultad": 3, "estrellaInicio": 0,
    "estrellas": [[24,28],[31,39],[35,51],[41,61],[51,68],[62,70],[72,65],[77,54]],
    "brillante": 2, "personajeId": "orion", "capituloId": "escorpion", "estado": "borrador"
  }
]
```

Nota: `estrellaInicio` quedó en 0 en todas porque el trazo arranca por el primer elemento del array; `brillante` es el índice de la estrella que se dibuja un poco más grande (referencia visual para dificultad 3). Podés unificarlos si preferís.

### 2.2 Capítulos en `personajes.json`

Los capítulos con `fuente: "cielo:..."` YA existen para los personajes ya presentes (`teseo/hilo_ariadna`, `heracles/leon_nemea`, `atlas/boveda_celeste` → nota: en el catálogo del prototipo Atlas no está entre las 10; su `cielo:atlas` queda para otra constelación futura o se mapea a una de las 10). Para las constelaciones cuyos personajes **no existen todavía** en el JSON (Calisto, Casiopea, Andrómeda, Orión, Cástor y Pólux, Pegaso), hay que:
- crear la ficha del personaje (o al menos su capítulo `base`), y
- agregar el capítulo que enciende el Cielo con `fuente: "cielo:<id_constelacion>"`, `estado: "borrador"` hasta que Willy apruebe el texto.

Los textos borrador de cada capítulo están en §6 para copiar al JSON.

### 2.3 `localStorage` / perfiles (spec_funcional §0.1)

El módulo lee y escribe SOLO sobre `perfiles[perfilActivo]` de la key `feli-mitos-v2`. Al completar una constelación:

```js
function completarConstelacion(cielo, constelacion) {
  // cielo = perfil.cielo ; global = perfil.global
  if (!cielo.completadas.includes(constelacion.id)) cielo.completadas.push(constelacion.id);

  const { personajeId, capituloId } = constelacion;
  const caps = global.capitulos[personajeId] || (global.capitulos[personajeId] = []);

  // Doble función: si el personaje no está descubierto, la constelación lo descubre.
  if (!global.descubiertos.includes(personajeId)) {
    global.descubiertos.push(personajeId);
    if (!caps.includes("base")) caps.push("base");
  }
  // Enciende el capítulo asociado.
  if (!caps.includes(capituloId)) caps.push(capituloId);

  // Reevaluar historia completa → dispara la ceremonia de material si corresponde
  // (ver Handoff v2 §1: encenderCapituloConCeremonia).
  guardarPerfil();
}
```

El prototipo persiste su propio progreso demo en `localStorage["cielo-mitos-demo-v1"]` solo para la demo — **en el repo real se usa el perfil**, no esa key.

---

## 3. Dificultad (final)

Tres niveles, definidos por `dificultad` en cada constelación:

| Nivel | Constelaciones | Pista (halo pulsante en la próxima estrella) | Estrellas distractoras | Tamaño distractoras |
|---|---|---|---|---|
| ★ (1) | Corona Boreal, Osa Mayor, Casiopea | Siempre visible | 2 | pequeñas, opacidad .65 |
| ★★ (2) | Leo, Andrómeda, Orión, Géminis | Solo marca la **primera** estrella; después no | 4 | pequeñas, opacidad .65 |
| ★★★ (3) | Pegaso, Perseo, Escorpio | Ninguna (la estrella de inicio se dibuja más grande) | 7 | del mismo brillo que las reales, opacidad .9 |

**Regla anti-frustración (spec: "nunca frustrar por precisión"):** contar errores por intento; al **3er error** activar pista temporal (`pistaTemporal = true` → vuelve el halo aunque la dificultad no lo diera) y cambiar el copy a "El cielo te regala una pista ✨". Se resetea `errores`/`pistaTemporal` al acertar una estrella o cambiar de constelación. Tocar una distractora o una estrella fuera de orden = error suave (sacudida + sonido grave), nunca bloquea ni reinicia.

Distractoras: se toman de un pool fijo de posiciones y se filtran las que estén a <10 unidades de cualquier estrella real (para no confundir con las verdaderas). Código en §5.

**Tolerancia táctil:** cada estrella tiene un círculo de tap invisible de r=7 (mucho mayor que el visual r≈1.6–2.4). No exigir precisión.

---

## 4. Flujo y animaciones (timings finales)

Fases: `trazando` → `ceremonia` → `capitulo` → `completada`.

1. **trazando**: tocar estrellas en orden. Cada acierto: nota que sube de tono (`440 + paso*55` Hz, triangle), la línea se dibuja con `trazar-linea` (.45s), la estrella pasa a dorada.
2. **ceremonia** (al tocar la última, ~1.9s): `navigator.vibrate([30,50,30])`; t=250ms fanfarria (arpegio 523/659/784/1047); la elipse-halo de la figura aparece (`aparece .8s`), una onda dorada se expande (`onda-svg 1.1s`), aparece el nombre de la constelación arriba (`brota-nombre .7s`); t=1900ms sonido de sello → pasa a `capitulo`.
3. **capitulo**: sube la hoja (`sube-sheet .5s`) con toast "✨ Nuevo capítulo: {título}", el bloque de capítulo con `tinta`, el "¿Por qué?", la nota de "También encendió a {otro}" si aplica, y botones "Ver la carta de {personaje}" / "Seguir mirando el cielo".
4. **completada**: cerrar la hoja NO reinicia — la constelación queda dorada e iluminada, contador +1, ✓ en el chip. El botón ↺ es el único reset (demo).

Todos los `setTimeout` de la ceremonia usan un token (`tokenSecuencia`) que se incrementa al reiniciar/cambiar/cerrar, para poder cancelar secuencias en curso.

**`prefers-reduced-motion: reduce`**: colapsar todas las animaciones a ~0 (regla global que ya existe en `estilos.css`); el estado final queda íntegro porque los `setTimeout` igual corren.

### 4.1 Keyframes (agregar a `estilos.css`)

```css
@keyframes titila { 0%,100% { opacity:.15 } 50% { opacity:1 } }
@keyframes pulso-halo { 0% { transform:scale(.7); opacity:.9 } 70% { transform:scale(1.5); opacity:0 } 100% { transform:scale(1.5); opacity:0 } }
@keyframes trazar-linea { from { stroke-dashoffset:1 } to { stroke-dashoffset:0 } }
@keyframes onda-svg { 0% { transform:scale(.15); opacity:.9 } 100% { transform:scale(1.8); opacity:0 } }
@keyframes brota-nombre { 0% { opacity:0; transform:translateY(10px) scale(.92) } 60% { opacity:1; transform:translateY(0) scale(1.04) } 100% { opacity:1; transform:none } }
@keyframes sube-sheet { from { transform:translateY(105%) } to { transform:none } }
@keyframes tinta { from { clip-path:inset(0 0 100% 0); opacity:0 } to { clip-path:inset(0 0 0 0); opacity:1 } }
@keyframes sacudir-suave { 0%,100% { transform:translateX(0) } 30% { transform:translateX(-4px) } 70% { transform:translateX(4px) } }
@keyframes brillo-estrella { 0%,100% { opacity:.5 } 50% { opacity:1 } }
/* Las líneas SVG animadas necesitan pathLength="1" en el elemento + stroke-dasharray:1.
   Los transform de círculos/elipses SVG requieren transform-box:fill-box; transform-origin:center. */
.halo-guia { transform-box:fill-box; transform-origin:center; animation:pulso-halo 1.6s ease-out infinite backwards }
.linea-trazada { stroke-dasharray:1; animation:trazar-linea .45s ease-out both }
.onda-final { transform-box:fill-box; transform-origin:center; animation:onda-svg 1.1s ease-out both }
.destello-final { transform-box:fill-box; transform-origin:center; animation:brillo-estrella 2.4s ease-in-out infinite backwards }
```

Fondo del cielo (contenedor del módulo): `radial-gradient(circle at 50% 24%, #2c2260 0%, #191142 58%, #120d33 100%)`, con ~12 puntitos `titila` de fondo (durations 4–5.4s, delays .3–2.9s, **con `backwards`**).

---

## 5. Lógica de referencia (vanilla, adaptada del prototipo)

El prototipo es una Design Component (React). Para el repo vanilla, la mecánica traducida (dibujar con `document.createElementNS` sobre un `<svg viewBox="0 0 100 100">`):

```js
const NS = "http://www.w3.org/2000/svg";
let cActual = null, paso = 0, fase = "trazando", errores = 0, pistaTemporal = false, tokenSeq = 0;

const DECOY_POOL = [[10,22],[88,16],[10,52],[90,40],[8,80],[92,78],[52,8],[22,88],
  [70,10],[78,88],[46,84],[60,16],[16,14],[84,64],[30,78],[72,34]];

function decoysDe(c) {
  const cant = c.dificultad === 1 ? 2 : c.dificultad === 2 ? 4 : 7;
  return DECOY_POOL.filter(d => c.estrellas.every(p => Math.hypot(p[0]-d[0], p[1]-d[1]) >= 10)).slice(0, cant);
}

function conPista(c) {
  return c.dificultad === 1 || (c.dificultad === 2 && paso === 0) || pistaTemporal;
}

function tocarEstrella(i) {
  if (fase !== "trazando") return;
  if (i === paso) {
    sonar("estrella", paso + 1);
    paso++;
    if (paso === cActual.estrellas.length) ceremonia();
    else { errores = 0; pistaTemporal = false; render(); }
  } else if (i > paso) marcarError();
}

function marcarError() {
  sonar("error");
  errores++;
  if (errores >= 3) pistaTemporal = true;   // regalo de pista, sin castigo
  render(); // pinta la estrella tocada en rojo con .sacudir-suave y la limpia a los 700ms
}

function ceremonia() {
  fase = "ceremonia"; render();
  if (navigator.vibrate) navigator.vibrate([30,50,30]);
  const t = ++tokenSeq;
  setTimeout(() => { if (t === tokenSeq) sonar("fanfarria"); }, 250);
  setTimeout(() => { if (t !== tokenSeq) return; sonar("sello"); fase = "capitulo"; render();
                     completarConstelacion(perfil.cielo, cActual); }, 1900);
}

function elegir(id) {
  tokenSeq++;
  cActual = catalogo.find(c => c.id === id);
  const hecha = perfil.cielo.completadas.includes(id);
  paso = hecha ? cActual.estrellas.length : 0;
  fase = hecha ? "completada" : "trazando";
  errores = 0; pistaTemporal = false;
  render();
}
```

Audio: WebAudio con osciladores, idéntico al de Handoff v2 §4 (`sonar("estrella"|"error"|"fanfarria"|"sello")`), detrás del toggle de sonido persistido. `AudioContext` creado en el primer tap.

Dibujo (`render()`): por cada estrella un `<circle r="7" fill="transparent">` de tap + el círculo visual; líneas ya trazadas con `pathLength="1"` + `.linea-trazada`; halo con `.halo-guia` si `conPista(c) && paso < n`; distractoras de `decoysDe(c)`; en `completada`/`ceremonia`, elipse-halo + onda + líneas doradas con `drop-shadow`. La elipse envolvente se calcula del bounding box de las estrellas + 10 de margen.

---

## 6. Textos de capítulo (BORRADOR — revisar con Willy)

Solo `hilo_ariadna` (Teseo) es final (ya está en `personajes.json`). El resto son borradores para pegar como `estado: "borrador"`:

- **osa_mayor → Calisto / "La osa del cielo":** "Calisto fue transformada en osa por un hechizo injusto. Para protegerla para siempre, Zeus la subió al cielo convertida en estrellas: la Osa Mayor, que nunca baja del horizonte." — ¿Por qué?: "La Osa Mayor se ve todas las noches del año. Los griegos explicaban esa presencia constante con una guardiana que nunca deja de cuidar."
- **casiopea → Casiopea / "La reina en su trono":** "Casiopea era una reina tan orgullosa que se comparaba con las diosas del mar. Como recuerdo, quedó en el cielo sentada en su trono, girando alrededor de la estrella polar para siempre." — ¿Por qué?: "Su forma de W se ve todo el año. Los griegos la usaban para contar que presumir demasiado también deja marca… hasta en el cielo."
- **leo → Heracles / "El león de Nemea":** "El primer trabajo de Heracles fue vencer al león de Nemea, una fiera cuya piel no podía atravesar ninguna arma. Heracles lo venció con su fuerza y su ingenio, y desde entonces llevó esa piel como armadura." — ¿Por qué?: "Los griegos pusieron al león en el cielo: la constelación de Leo recuerda el primero de los doce trabajos."
- **andromeda → Andrómeda / "El rescate":** "Andrómeda estaba encadenada a una roca frente al mar cuando Perseo pasó volando de regreso de su misión. La rescató del monstruo marino, y sus historias quedaron unidas para siempre." — ¿Por qué?: "Andrómeda conecta directo con la carta de Perseo, y muestra cómo los griegos convertían a sus personajes favoritos en constelaciones."
- **orion → Orión / "El cazador del cielo":** "Orión era un cazador gigante, tan hábil que presumía de poder vencer a cualquier animal del mundo. Su figura quedó en el cielo con un cinturón de tres estrellas, y todavía hoy es la constelación más fácil de encontrar." — ¿Por qué?: "Las tres estrellas del cinturón se alinean casi perfecto. Culturas de todo el mundo las usaron para orientarse."
- **geminis → Cástor y Pólux / "Los gemelos inseparables":** "Cástor y Pólux eran gemelos, pero uno era mortal y el otro inmortal. Cuando Cástor murió, Pólux pidió compartir su inmortalidad. Zeus los puso juntos en el cielo, para que no se separaran nunca." — ¿Por qué?: "Géminis son dos hileras de estrellas casi iguales: dos hermanos que eligieron estar juntos por sobre todo."
- **pegaso → Pegaso / "El caballo alado":** "Pegaso es el caballo alado que nació de la historia de Perseo y Medusa. Voló libre por el mundo y ayudó a más de un héroe, hasta ganarse un lugar entre las estrellas." — ¿Por qué?: "El Gran Cuadrado de Pegaso es una de las figuras más grandes del cielo."
- **perseo → Perseo / "El héroe en las estrellas":** "Perseo venció a Medusa sin mirarla de frente ni una sola vez: se guió por el reflejo de su escudo. Su figura quedó cerca de Andrómeda, Casiopea y Pegaso: su ciclo completo, dibujado en estrellas." — ¿Por qué?: "Cuatro constelaciones de este cielo cuentan la historia de Perseo. Los griegos le dedicaron una región entera del cielo."
- **escorpio → Orión / "El escorpión que persigue al cazador":** "Un escorpión gigante fue enviado a detener a Orión cuando el cazador presumió demasiado. Los dos quedaron en el cielo, pero en lados opuestos: cuando Escorpio sale, Orión se esconde." — ¿Por qué?: "Escorpio y Orión nunca se ven juntos. Los griegos explicaron ese turno perfecto como una persecución que sigue todavía."

**Decisiones — RESUELTAS (revisar textos, no la estructura):**
1. **Personajes nuevos** (Calisto, Casiopea, Andrómeda, Orión, Cástor y Pólux, Pegaso): creados como fichas mínimas con capítulo `base` + 1 pregunta, `estado: "borrador"`. Listos para pegar en `personajes.json` desde el archivo **`personajes-nuevos-cielo.json`** (en este proyecto). Tiers asignados: Orión → `plateado` (tiene 2 capítulos, base + escorpión); el resto → `normal`. Íconos: todos usan `"cielo"` de `iconos.js` como placeholder — cambiar por íconos propios cuando existan (osa, trono, princesa, cazador, gemelos, caballo).
2. **Escorpio** enciende el 2º capítulo de **Orión**: `id: "escorpion"`, `fuente: "cielo:escorpio"`. Ya incluido en la ficha de Orión del JSON nuevo. (En `constelaciones.json`, la entrada `escorpio` tiene `personajeId: "orion"`, `capituloId: "escorpion"`.)
3. **`cielo:atlas` huérfano**: se deja para una ola futura. El capítulo `atlas/boveda_celeste` queda `borrador` sin constelación en el catálogo de Ola 1 (Atlas no entra en las 10). No bloquea nada: su capítulo simplemente no se puede encender todavía, igual que cualquier `crisis:*`. Cuando se sume su constelación, se agrega al `constelaciones.json` con `personajeId: "atlas", capituloId: "boveda_celeste"`.

---

## 7. Orden de implementación

1. Crear `constelaciones.json` (§2.1) y cargarlo con `fetch` como se hace con `personajes.json`.
2. Pantalla del módulo dentro del hub shell: header + volver, cielo SVG, instrucción, selector inferior, hoja de capítulo. HTML/CSS del prototipo.
3. Lógica de trazado + dificultad + anti-frustración (§3, §5). Probar los 3 niveles.
4. Ceremonia + hoja de capítulo (§4). Conectar `completarConstelacion` al perfil (§2.3), reusando `encenderCapituloConCeremonia` del Handoff v2 §1 para que dispare la ceremonia de material si el personaje quedó completo.
5. Audio + `prefers-reduced-motion` + persistencia por perfil.
6. Textos: dejar todo `borrador` salvo Corona Boreal hasta la revisión de Willy; crear/completar fichas de personajes nuevos (§6 decisión 1).

**Prueba manual:** completar Corona Boreal → debe encender `teseo/hilo_ariadna` (y, si se implementó Ariadna, su capítulo). Como Teseo es tier dorado con 4 capítulos, NO se vuelve dorado con solo este; sirve para verificar que el conteo de completitud es correcto.
