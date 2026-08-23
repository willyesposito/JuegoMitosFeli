/* Núcleo compartido — estado, perfiles, personajes y capítulos, audio y utilidades.
   Todo módulo del hub (Colección, Oráculo, El Cielo de los Mitos, y los que
   sigan) carga este archivo antes que el suyo propio: es la única fuente de
   verdad sobre qué descubrió y qué encendió la jugadora. Ver CLAUDE.md:
   "Fuente de datos única... Estado único versionado en localStorage". */

const CLAVE_GUARDADO = "feli-mitos-v2";
const CLAVE_VIEJA_V1 = "feli-cartas-v1";
const MAX_PERFILES = 5;

/* Dificultad por partida (CLAUDE.md "Dificultad por partida"): se elige una
   sola vez, al crear el perfil, y no existe forma de cambiarla dentro de la
   partida — ni UI ni setter acá, a propósito. Para jugar en otra dificultad
   se crea otro perfil. Los módulos la leen con dificultadActual() y ajustan
   exigencia (pistas, intentos, feedback), nunca contenido ni acceso. */
const DIFICULTADES = ["facil", "normal", "dificil"];
const NOMBRE_DIFICULTAD = { facil: "🌱 Fácil", normal: "⭐ Normal", dificil: "🔥 Difícil" };

/* Mazo inicial curado por Willy (ver Documentacion/sesion_actual.md, que es
   su versión legible). Ya no se aplica solo: un perfil nuevo o recién
   reiniciado arranca en 0 cartas. Esta lista se carga a mano desde Opciones
   → "Cargar mazo inicial curado" (cargarMazoCurado), para cuando Willy
   decida usarla. */
const DESBLOQUEADAS_INICIALES = [
  "teseo", "heracles", "penelope", "atlas", "odiseo", "atenea", "perseo", "dedalo",
  "zeus", "hera", "poseidon", "hades", "demeter", "persefone", "hestia", "apolo",
  "artemisa", "ares", "afrodita", "pandora", "fenix", "psique", "paris", "nike",
  "thor", "loki", "odin", "freya", "heimdall", "sif", "tyr", "sigurd", "valquirias",
  "romulo_remo"
];

/* Cuántos capítulos le corresponden como mínimo a cada tier (regla 6 de
   CLAUDE.md: piso dorado 3, plateado 2, normal 1). El techo es regla de
   contenido, no de código: dorado no tiene techo, plateado 4, normal 3. Este
   piso solo se usa para no dar por completa una historia que todavía no tiene
   todos sus capítulos diseñados. */
const TIER_MINIMO = { dorado: 3, plateado: 2, normal: 1 };

/* Nombre amigable del módulo que enciende cada capítulo, a partir del campo
   "fuente" (formato "modulo:condicion"). Los módulos de olas futuras figuran
   para que la pista velada diga algo real. */
const NOMBRE_MODULO_FUENTE = {
  cielo: "El Cielo de los Mitos",
  oraculo: "el Oráculo en modo difícil",
  ordena: "Ordená el Mito",
  mapa: "el Mapa del Héroe",
  espejo: "el Espejo de los Mundos",
  reliquia: "Las Reliquias",
  encrucijada: "La Encrucijada"
};

/* ---------- Sets temáticos latentes (spec funcional §6) ----------
   Cada set se revela cuando todos sus integrantes están descubiertos: pantalla
   de logro con el Súper ¿Por qué? (la explicación antropológica del patrón
   común entre culturas). Los tags_secretos del JSON son los clasificadores
   latentes que lo sostienen. "Los Más Valientes" queda pendiente de
   redefinición (spec §6) y no se incluye todavía. El texto de superPorque
   se completa desde datos_ola1.json al cargar personajes. */
const SETS_TEMATICOS = [
  {
    id: "mentes_maestras", nombre: "Mentes Maestras", icono: "🧠",
    integrantes: ["odiseo", "loki", "dedalo", "prometeo", "hermes"],
    superPorque: "", estado: "publicado"
  },
  {
    id: "senores_clima", nombre: "Señores del Clima", icono: "⛈️",
    integrantes: ["zeus", "thor", "poseidon", "njord"],
    superPorque: "", estado: "publicado"
  },
  {
    id: "tejedoras_destino", nombre: "Tejedoras del Destino", icono: "🧵",
    integrantes: ["penelope", "aracne", "ariadna", "frigg"],
    superPorque: "", estado: "publicado"
  },
  {
    id: "guardianes", nombre: "Guardianes", icono: "🛡️",
    integrantes: ["heimdall", "cerbero", "atlas", "esfinge"],
    superPorque: "", estado: "publicado"
  },
  {
    id: "mensajeros", nombre: "Mensajeros", icono: "🕊️",
    integrantes: ["hermes", "iris", "ratatosk"],
    superPorque: "", estado: "publicado"
  }
];

let personajes = [];
let datos = null;   // el contenido completo de feli-mitos-v2 (todos los perfiles)
let estado = null;  // atajo: datos.perfiles[datos.perfilActivo]

/* ---------- Perfiles (spec funcional §0.1: hasta 5 slots) ---------- */

function perfilNuevo(nombre, dificultad) {
  const global = { descubiertos: [], capitulos: {}, completas: [], logros: [] };
  return {
    nombre: nombre || "Feli",
    dificultad: DIFICULTADES.includes(dificultad) ? dificultad : "normal",
    creado: new Date().toISOString().slice(0, 10),
    global,
    coleccion: { vistas: [] },
    oraculo: { fecha: "", modo: "facil", resueltas: [], deseo: null, abanicosSinDeseo: 0 },
    cielo: { completadas: [] },
    sets: { revelados: [] }
  };
}

/* Garantiza la forma interna de un perfil venga de donde venga (migración,
   versión anterior del formato, edición manual). Nadie pierde progreso. */
function normalizarPerfil(p) {
  // Los perfiles anteriores a la dificultad por partida quedan en "normal".
  const base = perfilNuevo(p && typeof p.nombre === "string" ? p.nombre : undefined, p && p.dificultad);
  if (!p || typeof p !== "object") return base;
  const g = p.global && typeof p.global === "object" ? p.global : {};
  if (typeof p.creado === "string") base.creado = p.creado;
  if (Array.isArray(g.descubiertos)) base.global.descubiertos = g.descubiertos;
  base.global.capitulos = g.capitulos && typeof g.capitulos === "object" ? g.capitulos : {};
  // "completas" reemplaza al viejo "doradas" (spec §0.1): personajes con
  // historia completa ya celebrada, sin importar el tier.
  base.global.completas = Array.isArray(g.completas) ? g.completas : (Array.isArray(g.doradas) ? g.doradas : []);
  base.global.logros = Array.isArray(g.logros) ? g.logros : [];
  if (p.coleccion && Array.isArray(p.coleccion.vistas)) base.coleccion = p.coleccion;
  if (p.oraculo && typeof p.oraculo === "object") {
    base.oraculo = {
      fecha: typeof p.oraculo.fecha === "string" ? p.oraculo.fecha : "",
      modo: p.oraculo.modo === "dificil" ? "dificil" : "facil",
      resueltas: Array.isArray(p.oraculo.resueltas) ? p.oraculo.resueltas : [],
      deseo: typeof p.oraculo.deseo === "string" ? p.oraculo.deseo : null,
      abanicosSinDeseo: Number.isInteger(p.oraculo.abanicosSinDeseo) ? p.oraculo.abanicosSinDeseo : 0
    };
  }
  if (p.cielo && Array.isArray(p.cielo.completadas)) base.cielo = p.cielo;
  if (p.sets && Array.isArray(p.sets.revelados)) base.sets = p.sets;
  // "mapa" y "ordena" no se declaran en perfilNuevo (cada módulo inicializa su
  // propio namespace de forma perezosa, ver estadoMapa()/estadoOrdena() en sus
  // JS), pero si no se preservan acá quedan afuera del perfil normalizado y la
  // próxima guardarEstado() los borra: el progreso de esos módulos desaparece
  // en el siguiente reload. Mismo criterio que cielo/sets arriba.
  if (p.mapa && Array.isArray(p.mapa.completados)) base.mapa = p.mapa;
  if (p.ordena && Array.isArray(p.ordena.completados)) base.ordena = p.ordena;
  if (p.espejo && Array.isArray(p.espejo.completados)) base.espejo = p.espejo;
  for (const id of base.global.descubiertos) {
    if (!base.global.capitulos[id]) base.global.capitulos[id] = ["base"];
  }
  return base;
}

function listaPerfiles() {
  return datos.perfiles.map((p, i) => ({
    indice: i,
    nombre: p.nombre,
    dificultad: DIFICULTADES.includes(p.dificultad) ? p.dificultad : "normal",
    activo: i === datos.perfilActivo,
    descubiertos: p.global.descubiertos.length
  }));
}

function crearPerfil(nombre, dificultad) {
  if (datos.perfiles.length >= MAX_PERFILES) return -1;
  datos.perfiles.push(perfilNuevo((nombre || "").trim() || `Perfil ${datos.perfiles.length + 1}`, dificultad));
  guardarEstado();
  return datos.perfiles.length - 1;
}

/* Dificultad de la partida activa. Única puerta de lectura para los módulos;
   no hay contraparte de escritura (ver comentario de DIFICULTADES). */
function dificultadActual() {
  return estado && DIFICULTADES.includes(estado.dificultad) ? estado.dificultad : "normal";
}

function cambiarPerfil(indice) {
  if (indice < 0 || indice >= datos.perfiles.length) return false;
  datos.perfilActivo = indice;
  estado = datos.perfiles[indice];
  guardarEstado();
  return true;
}

/* Borrar perfil: solo desde el menú de utilidades de Willy, con doble
   confirmación a cargo de la UI. Siempre queda al menos un perfil. */
function borrarPerfil(indice) {
  if (datos.perfiles.length <= 1 || indice < 0 || indice >= datos.perfiles.length) return false;
  datos.perfiles.splice(indice, 1);
  if (datos.perfilActivo >= datos.perfiles.length) datos.perfilActivo = 0;
  estado = datos.perfiles[datos.perfilActivo];
  guardarEstado();
  return true;
}

function reiniciarPerfilActivo() {
  // Reiniciar borra el progreso pero no es una puerta trasera para cambiar
  // la dificultad: la partida conserva la que se eligió al crearla.
  datos.perfiles[datos.perfilActivo] = perfilNuevo(estado.nombre, estado.dificultad);
  estado = datos.perfiles[datos.perfilActivo];
  guardarEstado();
}

/* Acción manual desde Opciones: suma el mazo curado de Willy al perfil
   activo sin pisar progreso existente. Devuelve cuántas cartas sumó. */
function cargarMazoCurado() {
  let sumadas = 0;
  for (const id of DESBLOQUEADAS_INICIALES) {
    if (estado.global.descubiertos.includes(id)) continue;
    estado.global.descubiertos.push(id);
    if (!estado.global.capitulos[id]) estado.global.capitulos[id] = ["base"];
    sumadas++;
  }
  guardarEstado();
  return sumadas;
}

/* ---------- Persistencia y migración ---------- */

function cargarEstado() {
  datos = null;
  try {
    const crudo = localStorage.getItem(CLAVE_GUARDADO);
    if (crudo) {
      const d = JSON.parse(crudo);
      if (d && Array.isArray(d.perfiles) && d.perfiles.length) {
        datos = {
          perfilActivo: Number.isInteger(d.perfilActivo) && d.perfilActivo >= 0 && d.perfilActivo < d.perfiles.length ? d.perfilActivo : 0,
          perfiles: d.perfiles.slice(0, MAX_PERFILES).map(normalizarPerfil)
        };
      } else if (d && typeof d === "object") {
        // feli-mitos-v2 con el formato anterior (objeto único sin perfiles):
        // se envuelve como perfil 0 (spec §0.1).
        datos = { perfilActivo: 0, perfiles: [normalizarPerfil(d)] };
      }
    }
  } catch (e) { /* estado corrupto: se sigue con la migración o un perfil nuevo */ }

  // Migración obligatoria desde feli-cartas-v1 (CLAUDE.md): el progreso viejo
  // se convierte en el primer perfil. Feli no pierde nada.
  if (!datos) {
    try {
      const viejo = localStorage.getItem(CLAVE_VIEJA_V1);
      if (viejo) {
        const v1 = JSON.parse(viejo);
        if (v1 && Array.isArray(v1.desbloqueadas)) {
          datos = {
            perfilActivo: 0,
            perfiles: [normalizarPerfil({
              nombre: "Feli",
              global: {
                descubiertos: v1.desbloqueadas,
                capitulos: v1.capitulosEncendidos && typeof v1.capitulosEncendidos === "object" ? v1.capitulosEncendidos : {},
                completas: Array.isArray(v1.celebrados) ? v1.celebrados : []
              },
              cielo: v1.cielo && Array.isArray(v1.cielo.completadas) ? v1.cielo : { completadas: [] }
            })]
          };
        }
      }
    } catch (e) { /* v1 corrupto: perfil nuevo */ }
  }

  if (!datos) datos = { perfilActivo: 0, perfiles: [perfilNuevo("Feli")] };
  estado = datos.perfiles[datos.perfilActivo];

  guardarEstado();
  // La key vieja se borra recién después de guardar la nueva con éxito.
  try {
    if (localStorage.getItem(CLAVE_GUARDADO)) localStorage.removeItem(CLAVE_VIEJA_V1);
  } catch (e) { /* sin localStorage: nada que borrar */ }
}

function guardarEstado() {
  try {
    localStorage.setItem(CLAVE_GUARDADO, JSON.stringify(datos));
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
  cargarSuperPorques();
  return personajes;
}

/* Los Súper ¿Por qué? de los sets viven en datos_ola1.json para no inflar
   este archivo. Si el fetch falla, los sets se revelan igual con un texto
   genérico: nunca bloquear el juego por un texto. */
async function cargarSuperPorques() {
  try {
    const r = await fetch("datos_ola1.json");
    const d = await r.json();
    for (const s of SETS_TEMATICOS) {
      if (d.superPorques && d.superPorques[s.id]) s.superPorque = d.superPorques[s.id];
    }
  } catch (e) { /* sin archivo: texto genérico en la UI */ }
}

function porId(id) {
  return personajes.find(p => p.id === id);
}

/* No hay campo de género en el contrato de datos (CLAUDE.md §4) y no se
   agrega uno solo para esto: el `titulo` de cada personaje ya empieza
   siempre con el artículo correcto ("El rey...", "La reina..."), así que
   alcanza como señal para elegir pronombre en textos generados. */
function esFemenino(p) {
  return typeof p.titulo === "string" && p.titulo.startsWith("La ");
}

/* ---------- Descubrimiento y vínculos ---------- */

function estaDesbloqueada(id) {
  return estado.global.descubiertos.includes(id);
}

/* ---------- Deseo del Oráculo ----------
   Un solo deseo activo por perfil. Sesga el abanico sin garantizar (la piedad
   suave la maneja el módulo). Se limpia solo cuando el deseado se descubre. A
   diferencia de la dificultad, el deseo SÍ tiene setter: es una elección de la
   jugadora, no un parámetro fijo de la partida. */
function deseoActual() {
  const id = estado.oraculo.deseo;
  if (!id) return null;
  if (estaDesbloqueada(id)) { estado.oraculo.deseo = null; guardarEstado(); return null; }
  return porId(id) ? id : null;
}

function fijarDeseo(id) {
  estado.oraculo.deseo = (porId(id) && !estaDesbloqueada(id)) ? id : null;
  estado.oraculo.abanicosSinDeseo = 0;
  guardarEstado();
}

function quitarDeseo() {
  estado.oraculo.deseo = null;
  guardarEstado();
}

/* Capítulos con fuente "vinculo:<id>": se encienden solos cuando el personaje
   vinculado entra a descubiertos. El chequeo es bidireccional y corre en el
   mismo evento de descubrimiento (doc de olas §3.1): al descubrir a X se
   revisan los capítulos de X que apunten a personajes ya descubiertos, y los
   capítulos de los ya descubiertos que apunten a X. */
function encenderVinculosDe(nuevoId) {
  const encendidos = [];
  for (const p of personajes) {
    if (!estaDesbloqueada(p.id)) continue;
    for (const c of capitulosDe(p)) {
      if (!c.fuente || !c.fuente.startsWith("vinculo:")) continue;
      const objetivo = c.fuente.slice(8);
      const aplica = p.id === nuevoId ? estaDesbloqueada(objetivo) : objetivo === nuevoId;
      if (aplica && !capitulosEncendidosDe(p.id).includes(c.id)) {
        encenderCapitulo(p.id, c.id);
        encendidos.push({ personajeId: p.id, capituloId: c.id, titulo: c.titulo, publicado: c.estado === "publicado" });
      }
    }
  }
  return encendidos;
}

/* Devuelve lo que el descubrimiento disparó, para que el módulo que llamó
   pueda contarlo: capítulos encendidos por vínculo y sets recién completados.
   Es el momento que enseña la mecánica sin explicarla (doc de olas §3.1). */
function desbloquear(id) {
  if (estaDesbloqueada(id)) return { vinculos: [], setsNuevos: [] };
  estado.global.descubiertos.push(id);
  encenderCapitulo(id, "base");
  const vinculos = encenderVinculosDe(id);
  const setsNuevos = revisarSets();
  guardarEstado();
  return { vinculos, setsNuevos };
}

/* Pasada de reconciliación: enciende todo vínculo que corresponda al estado
   actual (migraciones, contenido publicado cuando ambos personajes ya estaban
   descubiertos). Se llama al iniciar cada módulo, después de
   cargarPersonajes + cargarEstado. */
function reconciliarVinculos() {
  const encendidos = [];
  for (const p of personajes) {
    if (!estaDesbloqueada(p.id)) continue;
    for (const c of capitulosDe(p)) {
      if (!c.fuente || !c.fuente.startsWith("vinculo:")) continue;
      if (estaDesbloqueada(c.fuente.slice(8)) && !capitulosEncendidosDe(p.id).includes(c.id)) {
        encenderCapitulo(p.id, c.id);
        encendidos.push({ personajeId: p.id, capituloId: c.id });
      }
    }
  }
  const setsNuevos = revisarSets();
  if (encendidos.length || setsNuevos.length) guardarEstado();
  return { vinculos: encendidos, setsNuevos };
}

/* ---------- Sets temáticos ---------- */

function setsPublicados() {
  return SETS_TEMATICOS.filter(s => s.estado === "publicado");
}

function setCompleto(s) {
  return s.integrantes.every(id => estaDesbloqueada(id));
}

/* Sets que se acaban de completar y todavía no se festejaron. */
function revisarSets() {
  const nuevos = [];
  for (const s of setsPublicados()) {
    if (setCompleto(s) && !estado.sets.revelados.includes(s.id)) {
      estado.sets.revelados.push(s.id);
      nuevos.push(s.id);
    }
  }
  return nuevos;
}

function setPorId(id) {
  return SETS_TEMATICOS.find(s => s.id === id);
}

/* ---------- Capítulos e historia por capas ----------
   No confundir con el campo "tier" de personajes.json (rareza estática del
   personaje): acá se resuelve cuántos capítulos ya encendió la jugadora y si
   eso alcanza para dar la historia por completa en su tier. */

function capitulosEncendidosDe(id) {
  return estado.global.capitulos[id] || [];
}

function encenderCapitulo(personajeId, capituloId) {
  const encendidos = estado.global.capitulos[personajeId] || (estado.global.capitulos[personajeId] = []);
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

function contarHistoriasCompletas() {
  return personajes.filter(p => estaDesbloqueada(p.id) && historiaCompleta(p)).length;
}

/* ---------- Pistas y navegación de capítulos velados ----------
   Regla transversal del doc de olas §2: cada capítulo velado dice en lenguaje
   natural dónde se gana, y el tap navega directo al módulo con el contenido
   pre-activado. `nombresConstelaciones` es un mapa opcional id → nombre que
   la Colección arma tras leer constelaciones.json. */

function pistaCapituloVelado(capitulo, encendido, nombresConstelaciones, personaje) {
  if (encendido) return "Ya lo desbloqueaste — el texto todavía se está terminando de escribir.";
  const fuente = capitulo.fuente || "";
  const [modulo, condicion] = fuente.split(":");

  if (modulo === "vinculo") {
    const otro = porId(condicion);
    const nombre = otro ? otro.nombre : "otro personaje";
    return `Descubrí a ${nombre} para encender este capítulo.`;
  }
  if (modulo === "cielo") {
    const nombre = nombresConstelaciones && nombresConstelaciones[condicion];
    const ancla = catalogosDestino && catalogosDestino.cielo && catalogosDestino.cielo.get(condicion);
    if (ancla && !estaDesbloqueada(ancla)) {
      const personajeAncla = porId(ancla);
      const nombreAncla = personajeAncla ? personajeAncla.nombre : "otro personaje";
      return `Primero descubrí a ${nombreAncla} — recién ahí vas a poder trazar ${nombre || "esa constelación"} en El Cielo de los Mitos y encender este capítulo.`;
    }
    return nombre
      ? `Trazá ${nombre} en El Cielo de los Mitos para encender este capítulo.`
      : "Se enciende trazando una constelación en El Cielo de los Mitos.";
  }
  if (modulo === "oraculo") {
    return "Resolvé el desafío del Oráculo en modo difícil, sin fallar ni una vez.";
  }
  if (modulo === "ordena") {
    return "Secuenciá ese mito en Ordená el Mito para encender este capítulo.";
  }
  if (modulo === "mapa") {
    return "Recorré ese viaje en El Mapa del Héroe para encender este capítulo.";
  }
  if (modulo === "espejo") {
    // No nombra al compañero: decirlo de antemano resuelve media tarea del
    // módulo (handoff "subir la exigencia" §Cambio 5). Solo dice de qué
    // lado buscar, con el pronombre del personaje de esta carta.
    const zona = personaje && personaje.mitologia === "griega" ? "del norte" : "de Grecia";
    const femenino = personaje && esFemenino(personaje);
    const pronombre = femenino ? "ella" : "él";
    const busca = femenino ? "Buscala" : "Buscalo";
    return `Alguien ${zona} cuenta la misma idea que ${pronombre}. ${busca} en Espejo de los Mundos.`;
  }
  const nombre = NOMBRE_MODULO_FUENTE[modulo];
  return nombre
    ? `Se enciende jugando ${nombre} (llega en una próxima ola).`
    : "Se enciende jugando otro módulo (llega en una próxima ola).";
}

/* Catálogos de destino: ids publicados de cada módulo de trazado/secuencia,
   para saber si un capítulo velado tiene realmente adónde llevar. Si el
   contenido escrito de un capítulo apunta a un mito/constelación/viaje que
   todavía no se construyó (o está en borrador), no queremos ofrecer un tap
   que caería en un destino genérico: mejor mostrarlo velado sin link hasta
   que el destino exista. Se cargan una vez desde la Colección. */
let catalogosDestino = null;

async function cargarCatalogosDestino() {
  if (catalogosDestino) return catalogosDestino;
  const leer = async (archivo) => {
    try {
      const arr = await (await fetch(archivo)).json();
      return new Set(arr.filter(x => x.estado === "publicado").map(x => x.id));
    } catch (e) { return null; } // sin catálogo: no bloqueamos el link (fallback al comportamiento previo)
  };
  // El Cielo necesita, además del id, el personaje ancla de cada constelación:
  // el catálogo de Cielo solo lista constelaciones de cartas ya desbloqueadas
  // (cielo.js: "el Cielo enciende capítulos, no descubre"), así que un capítulo
  // encendido por `tambienEnciende` en OTRA carta (ej. Atenea vía la
  // constelación de Andrómeda) recién tiene adónde ir cuando esa ancla ya
  // fue descubierta.
  const leerCielo = async () => {
    try {
      const arr = await (await fetch("constelaciones.json")).json();
      const mapa = new Map();
      arr.filter(x => x.estado === "publicado").forEach(x => mapa.set(x.id, x.personajeId));
      return mapa;
    } catch (e) { return null; }
  };
  const [cielo, ordena, mapa] = await Promise.all([
    leerCielo(), leer("mitos_ordena.json"), leer("viajes.json")
  ]);
  catalogosDestino = { cielo, ordena, mapa };
  return catalogosDestino;
}

/* href del módulo que enciende un capítulo velado, o null si todavía no hay
   adónde ir (módulos de olas futuras, o un destino que todavía no existe /
   está en borrador). Para "vinculo" el destino es el Oráculo: es el camino
   para descubrir al personaje que falta. */
function destinoCapituloVelado(capitulo) {
  const fuente = capitulo.fuente || "";
  const [modulo, condicion] = fuente.split(":");
  // Si conocemos el catálogo del módulo y el destino no está publicado ahí,
  // el link caería en un mito/constelación/viaje genérico: no lo ofrecemos.
  const existe = (mod) => !catalogosDestino || !catalogosDestino[mod] || catalogosDestino[mod].has(condicion);
  if (modulo === "cielo") {
    if (!existe("cielo")) return null;
    const ancla = catalogosDestino && catalogosDestino.cielo && catalogosDestino.cielo.get(condicion);
    // Si la constelación ancla todavía no está desbloqueada, el link a Cielo
    // caería en un catálogo sin esa constelación (dead end): mandamos al
    // Oráculo, el mismo camino que ya usa "vinculo" para descubrir a alguien.
    if (ancla && !estaDesbloqueada(ancla)) return "oraculo.html";
    return `cielo.html?const=${encodeURIComponent(condicion || "")}`;
  }
  if (modulo === "oraculo") return "oraculo.html?modo=dificil";
  if (modulo === "ordena") return existe("ordena") ? `ordena.html?mito=${encodeURIComponent(condicion || "")}` : null;
  if (modulo === "mapa") return existe("mapa") ? `mapa.html?viaje=${encodeURIComponent(condicion || "")}` : null;
  if (modulo === "espejo") return "espejo.html";
  if (modulo === "vinculo") {
    return estaDesbloqueada(condicion) ? `coleccion.html?ver=${encodeURIComponent(condicion)}` : "oraculo.html";
  }
  return null;
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
