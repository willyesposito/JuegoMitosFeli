/* Núcleo compartido — estado, personajes y capítulos, audio y utilidades.
   Todo módulo del hub (Colección, El Cielo de los Mitos, y los que sigan)
   carga este archivo antes que el suyo propio: es la única fuente de verdad
   sobre qué desbloqueó y qué encendió la jugadora. Ver CLAUDE.md:
   "Fuente de datos única... Estado único versionado en localStorage". */

const CLAVE_GUARDADO = "feli-cartas-v1";

/* Arranque = el progreso real de Feli al momento de este deploy (ver
   sesion_actual.md, 32 de 81 héroes), no el mazo inicial original de 3. Así
   un perfil nuevo (dispositivo nuevo, localStorage limpio, o "Reiniciar la
   colección" en Opciones) no le hace perder lo que ya tiene. */
const DESBLOQUEADAS_INICIALES = [
  "teseo", "heracles", "penelope", "atlas", "odiseo", "atenea", "perseo", "dedalo",
  "zeus", "hera", "poseidon", "hades", "demeter", "persefone", "hestia", "apolo",
  "artemisa", "ares", "afrodita", "pandora", "fenix", "psique", "paris",
  "thor", "loki", "odin", "freya", "heimdall", "sif", "tyr", "valquirias",
  "romulo_remo"
];

/* Cuántos capítulos le corresponden como mínimo a cada tier (regla 6 de
   CLAUDE.md: dorado 3-4, plateado 2-3, normal 1-2). Se usa para no dar por
   completa una historia que todavía no tiene todos sus capítulos diseñados. */
const TIER_MINIMO = { dorado: 3, plateado: 2, normal: 1 };

/* Nombre amigable del módulo que enciende cada capítulo, a partir del campo
   "fuente" (formato "modulo:condicion"). */
const NOMBRE_MODULO_FUENTE = {
  cielo: "El Cielo de los Mitos",
  crisis: "Crisis del Mundo Antiguo",
  ordena: "Ordená el Mito",
  oraculo: "el Oráculo en modo difícil"
};

let personajes = [];
let estado = { desbloqueadas: [], capitulosEncendidos: {}, celebrados: [] };

/* ---------- Persistencia ---------- */

function cargarEstado() {
  try {
    const crudo = localStorage.getItem(CLAVE_GUARDADO);
    if (crudo) {
      const datos = JSON.parse(crudo);
      if (Array.isArray(datos.desbloqueadas)) {
        estado.desbloqueadas = datos.desbloqueadas;
        estado.capitulosEncendidos = (datos.capitulosEncendidos && typeof datos.capitulosEncendidos === "object")
          ? datos.capitulosEncendidos : {};
        estado.celebrados = Array.isArray(datos.celebrados) ? datos.celebrados : [];
        // Compatibilidad: partidas guardadas antes de que existiera este concepto
        // (o con el viejo historiaLeida/preguntaAcertada) igual tienen su capítulo
        // base encendido en toda carta ya descubierta. Nadie pierde progreso.
        for (const id of estado.desbloqueadas) {
          if (!estado.capitulosEncendidos[id]) estado.capitulosEncendidos[id] = ["base"];
        }
        guardarEstado();
        return;
      }
    }
  } catch (e) { /* estado corrupto: se reinicia */ }
  estado.desbloqueadas = [...DESBLOQUEADAS_INICIALES];
  estado.capitulosEncendidos = {};
  estado.celebrados = [];
  for (const id of estado.desbloqueadas) estado.capitulosEncendidos[id] = ["base"];
  guardarEstado();
}

function guardarEstado() {
  try {
    localStorage.setItem(CLAVE_GUARDADO, JSON.stringify(estado));
  } catch (e) { /* sin localStorage (modo incógnito): el juego sigue, sin persistir */ }
}

/* ---------- Personajes ----------
   Un personaje solo entra al juego en vivo cuando tiene al menos un capítulo
   "publicado" (ver regla de despliegue de CLAUDE.md). Mientras tanto puede
   vivir tranquilo en personajes.json, listo para cuando Willy lo publique. */

async function cargarPersonajes() {
  const respuesta = await fetch("personajes.json");
  const todos = await respuesta.json();
  personajes = todos.filter(p => (p.capitulos || []).some(c => c.estado === "publicado"));
  return personajes;
}

function porId(id) {
  return personajes.find(p => p.id === id);
}

/* ---------- Descubrimiento ---------- */

function estaDesbloqueada(id) {
  return estado.desbloqueadas.includes(id);
}

function desbloquear(id) {
  if (!estaDesbloqueada(id)) {
    estado.desbloqueadas.push(id);
    encenderCapitulo(id, "base");
  }
}

/* ---------- Capítulos e historia por capas ----------
   No confundir con el campo "tier" de personajes.json (rareza estática del
   personaje): acá se resuelve cuántos capítulos ya encendió el jugador y si
   eso alcanza para dar la historia por completa en su tier. */

function capitulosEncendidosDe(id) {
  return estado.capitulosEncendidos[id] || [];
}

function encenderCapitulo(personajeId, capituloId) {
  const encendidos = estado.capitulosEncendidos[personajeId] || (estado.capitulosEncendidos[personajeId] = []);
  if (!encendidos.includes(capituloId)) {
    encendidos.push(capituloId);
    guardarEstado();
  }
}

function capitulosDe(p) {
  return p.capitulos || [];
}

/* Un capítulo solo se muestra como contenido leíble (y solo cuenta para
   historiaCompleta) si la jugadora ya lo encendió Y Willy ya lo publicó.
   Sin este chequeo, cualquier módulo que encienda un capítulo todavía en
   borrador revelaría un texto sin aprobar — ver regla de despliegue de
   CLAUDE.md. Un capítulo encendido-pero-borrador sigue viéndose "velado",
   con una pista distinta a la de un capítulo todavía no alcanzado. */
function capituloListoParaMostrar(capitulo, encendido) {
  return encendido && capitulo.estado === "publicado";
}

/* Capítulos a mostrar en pantalla: los reales, más lugares vacíos hasta llegar
   al mínimo de su tier, para los que todavía no se diseñaron (ver roster_v3). */
function capitulosParaMostrar(p) {
  const reales = capitulosDe(p);
  const minimo = TIER_MINIMO[p.tier] || 1;
  const faltan = Math.max(0, minimo - reales.length);
  const pendientesDeDiseno = Array.from({ length: faltan }, (_, i) => ({
    id: `pendiente-${i}`,
    pendienteDeDiseno: true
  }));
  return [...reales, ...pendientesDeDiseno];
}

function historiaCompleta(p) {
  const reales = capitulosDe(p);
  const minimo = TIER_MINIMO[p.tier] || 1;
  if (reales.length < minimo) return false;
  const encendidos = capitulosEncendidosDe(p.id);
  return reales.every(c => capituloListoParaMostrar(c, encendidos.includes(c.id)));
}

function pistaCapituloVelado(capitulo, encendido) {
  if (encendido) return "Ya la desbloqueaste — el texto todavía se está terminando de escribir.";
  const modulo = capitulo.fuente ? capitulo.fuente.split(":")[0] : null;
  const nombre = NOMBRE_MODULO_FUENTE[modulo];
  return nombre
    ? `Se enciende jugando ${nombre} (todavía no disponible)`
    : "Se enciende jugando otro módulo (todavía no disponible)";
}

/* ---------- Audio (WebAudio, sin archivos) ---------- */

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

function sonar(nombre, extra) {
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
      case "estrella":  nota(440 + (extra || 0) * 55, 0, .3, "triangle"); break;
      case "error":     nota(200, 0, .2, "sine", .1); break;
    }
  } catch (e) { /* sin audio: no pasa nada */ }
}

function alternarSonido() {
  sonidoActivo = !sonidoActivo;
  localStorage.setItem("feli-sonido", sonidoActivo ? "on" : "off");
  return sonidoActivo;
}

/* ---------- Vibración (mobile) ---------- */

function vibrar(patron) {
  if (navigator.vibrate) navigator.vibrate(patron);
}

/* ---------- Utilidades genéricas ---------- */

function normalizar(texto) {
  return texto.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}

function alAzar(lista) {
  return lista[Math.floor(Math.random() * lista.length)];
}

function mezclar(lista) {
  const copia = [...lista];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

/* Fondo de carta con 3 stops derivados del color base del personaje (Handoff v2 §3). */
function hexARgb(hex) {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function fondoCarta(colorCarta) {
  const [r, g, b] = hexARgb(colorCarta);
  const f = (x, k) => Math.round(x * k);
  const oscuro    = `rgb(${f(r, .63)},${f(g, .63)},${f(b, .63)})`;
  const masOscuro = `rgb(${f(r, .47)},${f(g, .47)},${f(b, .47)})`;
  return `linear-gradient(170deg, ${colorCarta} 0%, ${oscuro} 55%, ${masOscuro} 100%)`;
}
