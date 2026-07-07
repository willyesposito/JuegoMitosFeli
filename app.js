/* Héroes y Dioses — lógica del modo colección.
   El estado, los personajes y los capítulos viven en nucleo.js (compartido
   con los demás módulos del hub). Este archivo solo arma la UI de la
   Colección: grilla, detalle de carta y desbloqueo por pregunta. */

const NOMBRE_MITO = { griega: "🏛️ Griega", nordica: "⚡ Nórdica", romana: "🦅 Romana" };
const NOMBRE_MITO_CORTO = { griega: "GRIEGA", nordica: "NÓRDICA", romana: "ROMANA" };
const ATRIBUTOS = [
  { clave: "fuerza",    icono: "⚔️", nombre: "Fuerza" },
  { clave: "astucia",   icono: "🧠", nombre: "Astucia" },
  { clave: "valentia",  icono: "🦁", nombre: "Valentía" },
  { clave: "magia",     icono: "✨", nombre: "Magia" },
  { clave: "liderazgo", icono: "👑", nombre: "Liderazgo" },
  { clave: "bondad",    icono: "❤️", nombre: "Bondad" }
];

let filtroActivo = "todas";
let textoBusqueda = "";
let cartaPendiente = null;   // id de la carta que se intenta desbloquear
let preguntaActual = null;   // { personajeId, opciones: [{texto, esCorrecta}] }
let oraculoPendiente = null; // id del héroe que el Oráculo va a revelar

/* ---------- Insignias de tier y capítulos ----------
   Insignia de tier: distintivo estático de cuán central es el personaje en su
   mitología. Define el marco/holo máximo que puede alcanzar (ver historiaCompleta),
   no un logro en sí mismo. */
const NOMBRE_TIER = { dorado: "⭐ Dorado", plateado: "✦ Plateado" };

function chipTier(p) {
  const etiqueta = NOMBRE_TIER[p.tier];
  return etiqueta ? `<span class="chip-tier tier-${p.tier}">${etiqueta}</span>` : "";
}

/* Medallón de tier en la esquina del naipe (grilla — Handoff v2 §8, opción 1b).
   Solo dorado/plateado llevan medallón; normal no lo necesita. */
function medallonTier(p) {
  if (p.tier !== "dorado" && p.tier !== "plateado") return "";
  const simbolo = p.tier === "dorado" ? "⭐" : "✦";
  return `<span class="medallon-tier tier-${p.tier}" title="${NOMBRE_TIER[p.tier]}">${simbolo}</span>`;
}

/* Divisor ornamental con el nombre de la mitología, en vez del chip suelto
   (grilla — Handoff v2 §8, opción 1b). */
function divisorMito(p) {
  const nombre = NOMBRE_MITO_CORTO[p.mitologia] || p.mitologia.toUpperCase();
  return `<span class="divisor-mito"><i></i><span>${nombre}</span><i></i></span>`;
}

/* Habilidades del personaje en la carta de la grilla: sus dones principales,
   como placas pequeñas. Antes solo se veían al abrir el detalle. */
function donesCartaHTML(p, cantidad = 2) {
  const dones = (p.dones || []).slice(0, cantidad);
  if (!dones.length) return "";
  const placas = dones.map(d => `<span class="don-carta">✦ ${d}</span>`).join("");
  return `<span class="dones-carta">${placas}</span>`;
}

/* Capítulos reales (no los "pendiente de diseño") que ya se pueden leer:
   encendidos por el juego Y publicados por Willy. Es el número que se
   muestra en todos lados para que la cuenta sea consistente. */
function capitulosGanadosDe(p) {
  const encendidos = capitulosEncendidosDe(p.id);
  return capitulosDe(p).filter(c => capituloListoParaMostrar(c, encendidos.includes(c.id)));
}

function segmentosCapitulos(p) {
  const caps = capitulosParaMostrar(p);
  const ganadosIds = capitulosGanadosDe(p).map(c => c.id);
  return caps.map(c => `<i class="${!c.pendienteDeDiseno && ganadosIds.includes(c.id) ? "lleno" : ""}"></i>`).join("");
}

function barraCapitulosMini(p) {
  return `<span class="barra-capitulos-mini">${segmentosCapitulos(p)}</span>`;
}

function barraCapitulos(p) {
  return `<div class="barra-capitulos">${segmentosCapitulos(p)}</div>`;
}

/* Le falta un solo capítulo para completar su tier: la carta pulsa suave
   para invitar a terminarla (Handoff v2 §6.3). */
function casiCompleta(p) {
  const reales = capitulosDe(p);
  const minimo = TIER_MINIMO[p.tier] || 1;
  if (reales.length < minimo) return false;
  const ganadosIds = capitulosGanadosDe(p).map(c => c.id);
  const faltan = reales.filter(c => !ganadosIds.includes(c.id)).length;
  return faltan === 1;
}

/* Capas visuales de una carta con la historia completa: holo + brillo barrido + destellos.
   Permanentes mientras la carta esté completa, no solo en el momento en que se completa. */
const DESTELLOS_PERMANENTES = [
  { top: "16%", left: "10%", size: "11px", delay: ".4s", dur: "2.6s" },
  { top: "30%", left: "86%", size: "13px", delay: "1.3s", dur: "3.2s" },
  { top: "78%", left: "16%", size: "10px", delay: "2.1s", dur: "2.9s" }
];

function capasMaterialHTML(tono) {
  const color = tono === "oro" ? "#ffe9a8" : "#eef1f6";
  const estrellas = DESTELLOS_PERMANENTES.map(d =>
    `<span class="destello-permanente" style="top:${d.top};left:${d.left};font-size:${d.size};color:${color};animation-delay:${d.delay};animation-duration:${d.dur}">✦</span>`
  ).join("");
  return `<i class="holo" aria-hidden="true"></i><i class="brillo-sweep brillo-sweep--${tono}" aria-hidden="true"></i>${estrellas}`;
}

/* ---------- Banner de "El Cielo de los Mitos" ----------
   Progreso propio del módulo, igual que pediría el hub (spec_funcional §0):
   "X de Y constelaciones trazadas". Si constelaciones.json no está (o el
   módulo todavía no tiene nada publicado), el banner se queda con el texto
   genérico en vez de romper. */
async function actualizarBannerCielo() {
  const texto = document.getElementById("banner-cielo-progreso");
  if (!texto) return;
  try {
    const todas = await (await fetch("constelaciones.json")).json();
    const publicadas = todas.filter(c => c.estado === "publicado");
    if (!publicadas.length) return;
    const completadas = (estado.cielo && Array.isArray(estado.cielo.completadas))
      ? estado.cielo.completadas.filter(id => publicadas.some(c => c.id === id)).length : 0;
    texto.textContent = `${completadas} de ${publicadas.length} constelaciones trazadas`;
  } catch (e) { /* sin conexión al archivo: se queda el texto por defecto */ }
}

/* ---------- Ambiente de página (Handoff v2 §8, opción 1c) ---------- */

function sembrarEstrellas() {
  const capa = document.createElement("div");
  capa.style.cssText = "position:fixed;inset:0;pointer-events:none;z-index:0;overflow:hidden";
  const pos = [[12, 8, 3, 4, .4], [24, 88, 2, 4.8, 1.2], [60, 5, 2, 5.2, 2], [78, 92, 3, 4.4, .9], [8, 55, 2, 4.6, 1.6], [40, 70, 2, 5, .6]];
  capa.innerHTML = pos.map(([t, l, s, d, dl]) =>
    `<span style="position:absolute;top:${t}%;left:${l}%;width:${s}px;height:${s}px;border-radius:50%;background:#fff;animation:titila ${d}s ease-in-out ${dl}s infinite backwards"></span>`).join("");
  document.body.appendChild(capa);
}

/* ---------- Galería ---------- */

function renderContador() {
  const total = personajes.length;
  const tengo = personajes.filter(p => estaDesbloqueada(p.id)).length;
  const pct = total ? Math.round((tengo / total) * 100) : 0;
  const contador = document.getElementById("contador");
  const subioDesdeUltimoRender = Number(contador.dataset.tengo || 0) < tengo;
  contador.innerHTML = `<span class="contador-barra"><i style="width:${pct}%"></i></span> Tenés ${tengo} de ${total} héroes`;
  contador.dataset.tengo = tengo;
  if (subioDesdeUltimoRender) {
    contador.classList.remove("contador--pop");
    void contador.offsetWidth;
    contador.classList.add("contador--pop");
  }
}

/* La grilla ya no muestra las cartas veladas (eran mucho ruido "???"): solo
   las descubiertas, más un único lanzador para abrir una carta nueva por el
   Oráculo. Así el álbum se ve como una colección, no como una lista de
   candados. */
function renderGaleria() {
  const galeria = document.getElementById("galeria");
  const busqueda = normalizar(textoBusqueda.trim());

  const visibles = personajes.filter(p => {
    if (!estaDesbloqueada(p.id)) return false;
    if (filtroActivo !== "todas" && p.mitologia !== filtroActivo) return false;
    if (busqueda) return normalizar(p.nombre).includes(busqueda);
    return true;
  });

  // El lanzador del Oráculo aparece solo en la vista limpia (sin filtro ni
  // búsqueda) y mientras queden héroes por descubrir.
  const quedanPorDescubrir = personajes.some(p => !estaDesbloqueada(p.id));
  const mostrarLanzador = quedanPorDescubrir && !busqueda && filtroActivo === "todas";

  document.getElementById("mensaje-vacio").classList.toggle("oculto", visibles.length > 0 || mostrarLanzador);

  galeria.innerHTML = "";

  if (mostrarLanzador) galeria.appendChild(crearLanzadorOraculo());

  for (const p of visibles) {
    const tieneMaterial = historiaCompleta(p) && (p.tier === "dorado" || p.tier === "plateado");
    const carta = document.createElement("button");
    carta.className = "carta";
    if (tieneMaterial) carta.classList.add(p.tier === "dorado" ? "carta--dorada" : "carta--plateada");
    if (!tieneMaterial && casiCompleta(p)) carta.classList.add("carta--casi-completa");
    carta.dataset.id = p.id;
    if (!tieneMaterial) carta.style.background = fondoCarta(p.colorCarta);
    carta.setAttribute("aria-label", `Ver la carta de ${p.nombre}`);
    carta.innerHTML = `
      ${tieneMaterial ? capasMaterialHTML(p.tier === "dorado" ? "oro" : "plata") : ""}
      ${medallonTier(p)}
      <span class="ilustracion">${svgIcono(p.icono)}</span>
      <span class="nombre">${p.nombre}</span>
      <span class="subtitulo-mito">${p.titulo}</span>
      ${divisorMito(p)}
      ${donesCartaHTML(p)}
      ${barraCapitulosMini(p)}`;
    carta.addEventListener("click", () => abrirDetalleConTransicion(p.id));
    galeria.appendChild(carta);
  }

  renderContador();
}

/* Tarjeta-botón que reemplaza a todas las "???": una sola puerta de entrada
   al descubrimiento por el Oráculo. */
function crearLanzadorOraculo() {
  const boton = document.createElement("button");
  boton.className = "carta carta-lanzador";
  boton.id = "carta-lanzador";
  boton.setAttribute("aria-label", "Abrir una carta nueva consultando al Oráculo");
  const total = personajes.length;
  const faltan = personajes.filter(p => !estaDesbloqueada(p.id)).length;
  boton.innerHTML = `
    <span class="lanzador-icono" aria-hidden="true">🔮</span>
    <span class="lanzador-titulo">Abrir una carta nueva</span>
    <span class="lanzador-sub">Te faltan ${faltan} de ${total} héroes</span>`;
  boton.addEventListener("click", abrirOraculo);
  return boton;
}

/* ---------- Detalle ---------- */

function pintarMarcoDetalle(p, completa) {
  const cartaDetalle = document.getElementById("detalle-carta");
  const tieneMaterial = completa && (p.tier === "dorado" || p.tier === "plateado");
  cartaDetalle.classList.remove("tier-plateada", "tier-dorada");
  if (!tieneMaterial) {
    cartaDetalle.style.background = fondoCarta(p.colorCarta);
  } else {
    cartaDetalle.style.background = "";
    cartaDetalle.classList.add(p.tier === "dorado" ? "tier-dorada" : "tier-plateada");
  }

  let capas = cartaDetalle.querySelector(":scope > .capas-material");
  if (tieneMaterial) {
    if (!capas) {
      capas = document.createElement("div");
      capas.className = "capas-material";
      cartaDetalle.insertBefore(capas, cartaDetalle.firstChild);
    }
    capas.innerHTML = capasMaterialHTML(p.tier === "dorado" ? "oro" : "plata");
  } else if (capas) {
    capas.remove();
  }
}

function selloHistoriaCompleta(completa) {
  return completa ? '<span class="sello-historia">✦ Historia completa</span>' : "";
}

function bloqueCapitulo(capitulo, encendido) {
  if (capitulo.pendienteDeDiseno) {
    return `
      <div class="capitulo capitulo--velado">
        <span class="capitulo-candado" aria-hidden="true">🔒</span>
        <div>
          <strong class="capitulo-titulo">Próximo capítulo</strong>
          <p class="capitulo-pista">Todavía no se diseñó. Va a sumarse más adelante.</p>
        </div>
      </div>`;
  }
  if (!capituloListoParaMostrar(capitulo, encendido)) {
    return `
      <div class="capitulo capitulo--velado" data-capitulo-id="${capitulo.id}">
        <span class="capitulo-candado" aria-hidden="true">🔒</span>
        <div>
          <strong class="capitulo-titulo">${capitulo.titulo}</strong>
          <p class="capitulo-pista">${pistaCapituloVelado(capitulo, encendido)}</p>
        </div>
      </div>`;
  }
  return `
    <div class="capitulo capitulo--encendido" data-capitulo-id="${capitulo.id}">
      <h3>📜 ${capitulo.titulo}</h3>
      <p>${capitulo.texto}</p>
      ${capitulo.porque ? `
      <div class="bloque-porque bloque-porque--capitulo">
        <h4>💡 ¿Por qué?</h4>
        <p>${capitulo.porque}</p>
      </div>` : ""}
    </div>`;
}

function abrirDetalle(id, recienRevelada = false) {
  const p = porId(id);
  if (!p) return;

  const detalle = document.getElementById("detalle");
  const cartaDetalle = document.getElementById("detalle-carta");
  const completa = historiaCompleta(p);
  pintarMarcoDetalle(p, completa);

  const barras = ATRIBUTOS
    .filter(a => typeof p.atributos[a.clave] === "number")
    .map(a => `
    <div class="atributo">
      <span class="icono-attr" aria-hidden="true">${a.icono}</span>
      <span class="nombre-attr">${a.nombre}</span>
      <div class="barra" role="img" aria-label="${a.nombre}: ${p.atributos[a.clave]} de 10">
        <span style="width:${p.atributos[a.clave] * 10}%"></span>
      </div>
      <strong class="valor-attr" aria-hidden="true">${p.atributos[a.clave]}</strong>
    </div>`).join("");

  const capitulos = capitulosParaMostrar(p);
  const encendidos = capitulosEncendidosDe(p.id);
  const listaCapitulos = capitulos.map(c => bloqueCapitulo(c, encendidos.includes(c.id))).join("");

  document.getElementById("detalle-contenido").innerHTML = `
    <div class="detalle-ilustracion">${svgIcono(p.icono)}</div>
    <h2 id="detalle-nombre">${p.nombre}</h2>
    <p class="detalle-titulo">${p.titulo}</p>
    <span class="detalle-chip">${NOMBRE_MITO[p.mitologia] || p.mitologia}</span>
    ${chipTier(p)}
    ${selloHistoriaCompleta(completa)}
    <div class="dones">${p.dones.map(d => `<span class="don">${d}</span>`).join("")}</div>
    <div class="atributos">${barras}</div>
    <div class="capitulos">
      <div class="capitulos-progreso">
        <span>📖 Su historia</span>
        <span>${capitulosGanadosDe(p).length} de ${capitulos.length} capítulos</span>
      </div>
      ${barraCapitulos(p)}
      ${listaCapitulos}
    </div>`;

  detalle.dataset.personajeId = id;
  cartaDetalle.classList.toggle("revelando", recienRevelada);
  detalle.classList.remove("oculto");
  cartaDetalle.scrollTop = 0;
  document.getElementById("boton-volver").focus();
}

/* Progressive enhancement: transición carta → detalle con View Transitions
   API cuando el navegador la soporta (Handoff v2 §6.6); si no, abre directo. */
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

function cerrarDetalle() {
  document.getElementById("detalle").classList.add("oculto");
  document.getElementById("detalle").dataset.personajeId = "";
  document.getElementById("detalle-carta").classList.remove("revelando");
}

/* ---------- Toast ---------- */

function mostrarToast(texto) {
  const toast = document.createElement("div");
  toast.className = "toast-aparicion";
  toast.textContent = texto;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

/* ---------- Descubrimiento — Niebla del Oráculo (spec_funcional §3) ----------
   La grilla ya no tiene cartas "???": el único camino a una carta nueva es
   este overlay. Muestra el dorso "Mundo de Mitos" envuelto en niebla; al
   consultar al Oráculo aparece una pregunta sobre una carta ya conocida, y
   al acertar la niebla se dispersa y la carta nueva brota. */

function nieblaFlotanteHTML() {
  return `
    <i class="oraculo-niebla oraculo-niebla--1"></i>
    <i class="oraculo-niebla oraculo-niebla--2"></i>
    <i class="oraculo-niebla oraculo-niebla--3"></i>
    <i class="oraculo-niebla oraculo-niebla--4"></i>`;
}

function nieblaDispersaHTML() {
  return `
    <i class="oraculo-niebla oraculo-niebla--parte-a"></i>
    <i class="oraculo-niebla oraculo-niebla--parte-b"></i>
    <i class="oraculo-niebla oraculo-niebla--parte-c"></i>
    <i class="oraculo-niebla oraculo-niebla--parte-d"></i>`;
}

function dorsoOraculoHTML() {
  return `
    <div class="oraculo-dorso">
      <i class="oraculo-dorso-marco" aria-hidden="true"></i>
      <span class="oraculo-dorso-esq" style="top:14px;left:14px">✦</span>
      <span class="oraculo-dorso-esq" style="top:14px;right:14px">✦</span>
      <span class="oraculo-dorso-esq" style="bottom:26px;left:14px">✦</span>
      <span class="oraculo-dorso-esq" style="bottom:26px;right:14px">✦</span>
      <span class="oraculo-emblema" aria-hidden="true">
        <i class="rombo"></i><i class="marco"></i><i class="nucleo"></i>
      </span>
      <span class="oraculo-dorso-nombre">MUNDO DE MITOS</span>
    </div>`;
}

function caraOraculoHTML(p) {
  return `
    <div class="oraculo-cara" style="background:${fondoCarta(p.colorCarta)}">
      <i class="esquina esquina-tl" aria-hidden="true"></i>
      <i class="esquina esquina-tr" aria-hidden="true"></i>
      <i class="esquina esquina-bl" aria-hidden="true"></i>
      <i class="esquina esquina-br" aria-hidden="true"></i>
      <span class="ilustracion">${svgIcono(p.icono)}</span>
      <strong class="oraculo-cara-nombre">${p.nombre}</strong>
      <em class="oraculo-cara-titulo">${p.titulo}</em>
      <span class="chip-mito">${NOMBRE_MITO[p.mitologia] || p.mitologia}</span>
    </div>`;
}

function abrirOraculo() {
  const candidatos = personajes.filter(p => !estaDesbloqueada(p.id));
  if (!candidatos.length) {
    mostrarToast("✨ ¡Ya descubriste a todos los héroes!");
    return;
  }
  oraculoPendiente = alAzar(candidatos).id;
  renderOraculoDorso();
  document.getElementById("oraculo").classList.remove("oculto");
}

function renderOraculoDorso() {
  const escena = document.getElementById("oraculo-escena");
  escena.className = "oraculo-escena estado-dorso";
  escena.innerHTML = `
    ${nieblaFlotanteHTML()}
    <div class="oraculo-carta">${dorsoOraculoHTML()}</div>
    <div class="oraculo-acciones">
      <button class="boton-principal" id="oraculo-consultar">🔮 Consultar al Oráculo</button>
      <button class="boton-secundario" id="oraculo-cerrar">Mejor después</button>
    </div>`;
  document.getElementById("oraculo-consultar").addEventListener("click", () => abrirPregunta(oraculoPendiente));
  document.getElementById("oraculo-cerrar").addEventListener("click", cerrarOraculo);
}

function revelarConOraculo(id) {
  cerrarPregunta();
  desbloquear(id);
  sonar("arpegio");
  vibrar([30, 50, 30]);
  renderGaleria();

  const p = porId(id);
  const escena = document.getElementById("oraculo-escena");
  escena.className = "oraculo-escena estado-revelada";
  escena.innerHTML = `
    ${nieblaDispersaHTML()}
    <div class="oraculo-toast">✨ ¡Apareció ${p.nombre}!</div>
    <div class="oraculo-carta oraculo-carta--revelada">${caraOraculoHTML(p)}</div>
    <div class="oraculo-acciones">
      <button class="boton-principal" id="oraculo-ver">Ver su carta</button>
      <button class="boton-secundario" id="oraculo-otra">Abrir otra</button>
    </div>`;
  document.getElementById("oraculo-ver").addEventListener("click", () => {
    cerrarOraculo();
    abrirDetalle(id, true);
  });
  document.getElementById("oraculo-otra").addEventListener("click", abrirOraculo);
}

function cerrarOraculo() {
  document.getElementById("oraculo").classList.add("oculto");
  oraculoPendiente = null;
}

/* ---------- Pregunta de desbloqueo ---------- */

function abrirPregunta(idVelada) {
  const conPreguntas = personajes.filter(p => estaDesbloqueada(p.id) && p.preguntas && p.preguntas.length);
  if (conPreguntas.length === 0) {
    // Sin cartas con preguntas no hay desafío posible: se revela directo.
    revelarConOraculo(idVelada);
    return;
  }

  cartaPendiente = idVelada;
  const elegido = alAzar(conPreguntas);
  const pregunta = alAzar(elegido.preguntas);
  preguntaActual = {
    personajeId: elegido.id,
    opciones: mezclar(pregunta.opciones.map((texto, i) => ({
      texto,
      esCorrecta: i === pregunta.correcta
    })))
  };

  const contenido = document.getElementById("pregunta-contenido");
  contenido.innerHTML = `
    <p class="pregunta-intro">Para desbloquear esta carta, respondé una pregunta sobre
      <strong>${elegido.nombre}</strong>, que ya está en tu colección:</p>
    <p class="pregunta-texto">${pregunta.texto}</p>
    <div class="opciones">
      ${preguntaActual.opciones.map((o, i) =>
        `<button class="opcion" data-indice="${i}">${o.texto}</button>`).join("")}
    </div>
    <p class="pregunta-resultado" aria-live="assertive"></p>
    <button class="boton-secundario" id="boton-cancelar-pregunta">Mejor después</button>`;

  contenido.querySelectorAll(".opcion").forEach(boton => {
    boton.addEventListener("click", () => responder(boton));
  });
  contenido.querySelector("#boton-cancelar-pregunta").addEventListener("click", cerrarPregunta);

  document.getElementById("modal-pregunta").classList.remove("oculto");
}

function responder(boton) {
  const opcion = preguntaActual.opciones[Number(boton.dataset.indice)];
  const resultado = document.querySelector("#pregunta-contenido .pregunta-resultado");

  if (opcion.esCorrecta) {
    boton.classList.add("correcta");
    resultado.textContent = "¡Correcto! ✨";
    sonar("correcto");
    lanzarParticulasSello(boton.parentElement, 8);
    document.querySelectorAll("#pregunta-contenido .opcion").forEach(b => b.disabled = true);
    const idGanada = cartaPendiente;
    setTimeout(() => revelarConOraculo(idGanada), 700);
  } else {
    boton.classList.add("incorrecta");
    boton.disabled = true;
    resultado.textContent = "Mmm, esa no es... ¡probá con otra opción!";
  }
}

/* Cierra el modal de la pregunta. No toca el overlay del Oráculo que está
   detrás: si la jugadora cancela, vuelve al dorso para reintentar. */
function cerrarPregunta() {
  document.getElementById("modal-pregunta").classList.add("oculto");
  cartaPendiente = null;
  preguntaActual = null;
}

/* ---------- Ceremonias de material ----------
   Se disparan cuando un capítulo recién publicado completa la historia de
   un personaje dorado/plateado. Los capítulos los encienden otros módulos
   (El Cielo de los Mitos y los que sigan) — acá solo vive la celebración. */

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

/* Ceremonia plateada (~2.5s). `carta` = nodo .carta ya visible con el
   personaje, ANTES de aplicar el marco. */
function ceremoniaPlateada(carta, alTerminar) {
  const token = ++tokenCeremonia;
  sonar("arpegio");
  setTimeout(() => {
    if (token !== tokenCeremonia) return;
    carta.classList.add("carta--plateada");
    carta.style.background = "";
    carta.insertAdjacentHTML("afterbegin", capasMaterialHTML("plata"));
    agregarEfimero(carta, "onda-ceremonia onda-ceremonia--plata", 1000);
    vibrar([20, 40, 20]);
  }, 1250);
  setTimeout(() => {
    if (token !== tokenCeremonia) return;
    sonar("sello");
    if (alTerminar) alTerminar();
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
    vibrar([30, 50, 30, 50, 60]);
  }, 850);
  setTimeout(() => {
    if (token !== tokenCeremonia) return;
    sonar("sello");
    lanzarParticulasSello(carta, 6);
    if (alTerminar) alTerminar();
  }, 1750);
}

/* Celebra a un personaje si su historia acaba de completarse y todavía no
   se festejó (estado.celebrados evita repetir la animación en cada carga). */
function celebrarSiCorresponde(personajeId) {
  const p = porId(personajeId);
  if (!p || !historiaCompleta(p) || estado.celebrados.includes(personajeId)) return;
  estado.celebrados.push(personajeId);
  guardarEstado();
  if (p.tier !== "dorado" && p.tier !== "plateado") return;
  renderGaleria();
  const carta = document.querySelector(`.carta[data-id="${personajeId}"]`);
  if (!carta) return;
  carta.classList.remove("carta--dorada", "carta--plateada");
  carta.querySelectorAll(".holo, .brillo-sweep, .destello-permanente").forEach(n => n.remove());
  carta.style.background = fondoCarta(p.colorCarta);
  (p.tier === "dorado" ? ceremoniaDorada : ceremoniaPlateada)(carta, renderGaleria);
}

/* Recorre a todos los descubiertos por si alguno quedó completo mientras
   jugaba otro módulo (se llama al iniciar y al volver de otra pestaña). */
function revisarCeremoniasPendientes() {
  personajes.forEach(p => { if (estaDesbloqueada(p.id)) celebrarSiCorresponde(p.id); });
}

/* Hook público para pruebas manuales (Handoff v2 §7): enciende un capítulo
   y celebra si corresponde, sin depender de que exista el módulo real.
   Ej. en consola: encenderCapituloConCeremonia("teseo", "hilo_ariadna") */
function encenderCapituloConCeremonia(personajeId, capituloId) {
  encenderCapitulo(personajeId, capituloId);
  celebrarSiCorresponde(personajeId);
  renderGaleria();
}

/* ---------- Encendido de capítulo con el detalle ya abierto ----------
   Si otro módulo (u otra pestaña) enciende un capítulo de la carta que la
   jugadora tiene abierta en este momento, se lo mostramos con ceremonia en
   vez de dejar que se pierda hasta el próximo tap. */

function toastCapitulo(titulo) {
  mostrarToast(`✨ Nuevo capítulo: ${titulo}`);
}

function animarCapituloEncendido(personajeId, capituloId) {
  sonar("dosNotas");
  const p = porId(personajeId);
  const capitulo = p && capitulosDe(p).find(c => c.id === capituloId);
  if (capitulo && capitulo.estado === "publicado") toastCapitulo(capitulo.titulo);
  const detalle = document.getElementById("detalle");
  const detalleAbierto = !detalle.classList.contains("oculto") && detalle.dataset.personajeId === personajeId;
  if (!detalleAbierto) return;
  setTimeout(() => {
    abrirDetalle(personajeId);
    const nuevo = document.querySelector(`#detalle-contenido .capitulo[data-capitulo-id="${capituloId}"]`);
    if (nuevo) nuevo.classList.add("capitulo--recien-encendido");
  }, 950);
}

/* ---------- Opciones (para Willy) ---------- */

function actualizarTextoBotonSonido() {
  const boton = document.getElementById("boton-sonido");
  if (boton) boton.textContent = sonidoActivo ? "🔊 Sonido activado" : "🔇 Sonido silenciado";
}

function configurarOpciones() {
  const modal = document.getElementById("modal-config");
  document.getElementById("boton-config").addEventListener("click", () => modal.classList.remove("oculto"));
  document.getElementById("boton-cerrar-config").addEventListener("click", () => modal.classList.add("oculto"));
  document.getElementById("boton-sonido").addEventListener("click", () => {
    alternarSonido();
    actualizarTextoBotonSonido();
  });
  actualizarTextoBotonSonido();
  document.getElementById("boton-reset").addEventListener("click", () => {
    if (confirm("¿Seguro? Se pierde todo el progreso de la colección.")) {
      localStorage.removeItem(CLAVE_GUARDADO);
      cargarEstado();
      modal.classList.add("oculto");
      renderGaleria();
    }
  });
}

/* ---------- Arranque ---------- */

function configurarControles() {
  document.querySelectorAll(".chip[data-filtro]").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".chip[data-filtro]").forEach(c => c.classList.remove("activo"));
      chip.classList.add("activo");
      filtroActivo = chip.dataset.filtro;
      renderGaleria();
    });
  });

  document.getElementById("buscador").addEventListener("input", e => {
    textoBusqueda = e.target.value;
    renderGaleria();
  });

  document.getElementById("boton-volver").addEventListener("click", cerrarDetalle);
  document.getElementById("detalle").addEventListener("click", e => {
    if (e.target.id === "detalle") cerrarDetalle();
  });
  document.getElementById("oraculo").addEventListener("click", e => {
    if (e.target.id === "oraculo") cerrarOraculo();
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      // Si la pregunta está abierta, Escape solo la cancela (vuelve al dorso);
      // si no, cierra lo que haya abierto.
      const preguntaAbierta = !document.getElementById("modal-pregunta").classList.contains("oculto");
      if (preguntaAbierta) { cerrarPregunta(); return; }
      cerrarDetalle();
      cerrarOraculo();
      document.getElementById("modal-config").classList.add("oculto");
    }
  });

  // Si otro módulo (u otra pestaña) cambia el progreso guardado, reflejarlo
  // acá sin esperar a recargar: es el "volver a la colección" del Handoff v2 §1.
  window.addEventListener("storage", e => {
    if (e.key !== CLAVE_GUARDADO) return;
    const antes = JSON.parse(JSON.stringify(estado.capitulosEncendidos));
    cargarEstado();
    renderGaleria();
    Object.keys(estado.capitulosEncendidos).forEach(personajeId => {
      const nuevos = estado.capitulosEncendidos[personajeId].filter(cid => !(antes[personajeId] || []).includes(cid));
      nuevos.forEach(capituloId => animarCapituloEncendido(personajeId, capituloId));
    });
    revisarCeremoniasPendientes();
  });
}

async function iniciar() {
  try {
    await cargarPersonajes();
  } catch (e) {
    document.getElementById("galeria").innerHTML =
      `<p class="mensaje-vacio">No pude cargar las cartas. Si abriste el archivo directo,
       probá servirlo con un servidor local (ver README).</p>`;
    return;
  }

  cargarEstado();
  sembrarEstrellas();
  configurarControles();
  configurarOpciones();
  renderGaleria();
  revisarCeremoniasPendientes();
  actualizarBannerCielo();

  // Enlace de vuelta desde otro módulo (ej. "Ver la carta de X" en El Cielo
  // de los Mitos): index.html?ver=teseo abre esa carta directo.
  const idAVer = new URLSearchParams(location.search).get("ver");
  if (idAVer && estaDesbloqueada(idAVer)) abrirDetalle(idAVer);

  // Offline real una vez cargado (solo cuando se sirve por http/https)
  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
}

iniciar();
