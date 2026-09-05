/* Héroes y Dioses — lógica del módulo Colección.
   El estado, los personajes y los capítulos viven en nucleo.js (compartido
   con los demás módulos del hub). Este archivo arma la UI de la Colección:
   grilla, detalle de carta, sets temáticos y ceremonias de material. El
   descubrimiento (Oráculo, ambos modos) vive en oraculo.html/oraculo.js. */

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
let ordenActivo = "sugerido";  // sugerido | az | nuevas
let vistaActiva = "grilla";    // grilla | lista
let nombresConstelaciones = {}; // id de constelación → nombre, para las pistas de capítulos velados

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

/* Una barra por mitología (pedido de Hidalgo2): cada cultura muestra su propio
   progreso en vez de un único total general. */
const MITOS_CONTADOR = [
  { id: "griega",  icono: "🏛️", nombre: "Griega" },
  { id: "nordica", icono: "⚡",  nombre: "Nórdica" },
  { id: "romana",  icono: "🦅", nombre: "Romana" }
];

function renderContador() {
  const contador = document.getElementById("contador");
  const tengoTotal = personajes.filter(p => estaDesbloqueada(p.id)).length;
  const subioDesdeUltimoRender = Number(contador.dataset.tengo || 0) < tengoTotal;

  contador.innerHTML = MITOS_CONTADOR.map(m => {
    const delMito = personajes.filter(p => p.mitologia === m.id);
    const tengo = delMito.filter(p => estaDesbloqueada(p.id)).length;
    const total = delMito.length;
    const pct = total ? Math.round((tengo / total) * 100) : 0;
    return `
      <span class="contador-mito contador-mito--${m.id}" title="${m.nombre}: ${tengo} de ${total}">
        <span class="contador-mito-icono" aria-hidden="true">${m.icono}</span>
        <span class="contador-barra"><i style="width:${pct}%"></i></span>
        <span class="contador-mito-cifra">${tengo}<span class="contador-mito-total">/${total}</span></span>
      </span>`;
  }).join("");

  contador.dataset.tengo = tengoTotal;
  if (subioDesdeUltimoRender) {
    contador.classList.remove("contador--pop");
    void contador.offsetWidth;
    contador.classList.add("contador--pop");
  }
}

/* Secciones de la grilla por tier (pedido de Hidalgo2): cada tier se muestra
   por separado con su propio progreso, dorados primero. */
const TIERS_SECCION = [
  { id: "dorado",   nombre: "Dorados" },
  { id: "plateado", nombre: "Plateados" },
  { id: "normal",   nombre: "Normales" }
];

/* "Nuevas" usa el orden real de desbloqueo: estado.global.descubiertos crece
   con push() en desbloquear() (nucleo.js), así que el índice ya es el orden
   cronológico sin necesitar timestamps. */
function ordenarVisibles(lista) {
  if (ordenActivo === "az") return [...lista].sort((a, b) => a.nombre.localeCompare(b.nombre, "es"));
  if (ordenActivo === "nuevas") {
    const orden = estado.global.descubiertos;
    return [...lista].sort((a, b) => orden.indexOf(b.id) - orden.indexOf(a.id));
  }
  return lista; // sugerido: orden curado del roster, tal cual viene en personajes.json
}

/* Vista lista: mismo naipe, versión resumida — solo lo que hace falta para
   reconocer al personaje y ver cuánto avanzó: ícono real, nombre, mitología,
   tier y progreso. Sin dones ni subtítulo: en un recuadro chico no entran
   sin volverse ilegibles. */
function crearCartaGaleria(p) {
  const tieneMaterial = historiaCompleta(p) && (p.tier === "dorado" || p.tier === "plateado");
  const resumida = vistaActiva === "lista";
  const carta = document.createElement("button");
  carta.className = resumida ? "carta carta-resumida" : "carta";
  if (tieneMaterial) carta.classList.add(p.tier === "dorado" ? "carta--dorada" : "carta--plateada");
  if (!tieneMaterial && casiCompleta(p)) carta.classList.add("carta--casi-completa");
  carta.dataset.id = p.id;
  carta.classList.add("mito-" + p.mitologia);
  if (!tieneMaterial) carta.style.background = fondoCarta(p.colorCarta);
  carta.setAttribute("aria-label", `Ver la carta de ${p.nombre}`);
  carta.innerHTML = resumida ? `
    ${tieneMaterial ? capasMaterialHTML(p.tier === "dorado" ? "oro" : "plata") : ""}
    ${medallonTier(p)}
    <span class="ilustracion">${svgIcono(p.icono)}</span>
    <span class="nombre">${p.nombre}</span>
    <span class="chip-mito-mini">${NOMBRE_MITO_CORTO[p.mitologia] || p.mitologia.toUpperCase()}</span>
    ${barraCapitulosMini(p)}` : `
    ${tieneMaterial ? capasMaterialHTML(p.tier === "dorado" ? "oro" : "plata") : ""}
    ${medallonTier(p)}
    <span class="ilustracion">${svgIcono(p.icono)}</span>
    <span class="nombre">${p.nombre}</span>
    <span class="subtitulo-mito">${p.titulo}</span>
    ${divisorMito(p)}
    ${donesCartaHTML(p)}
    ${barraCapitulosMini(p)}`;
  carta.addEventListener("click", () => abrirDetalleConTransicion(p.id));
  activarIcono(carta.querySelector(".ilustracion"), p);
  return carta;
}

/* La grilla solo muestra cartas descubiertas: el camino a una carta nueva es
   el módulo del Oráculo, accesible desde el hub o el FAB de abajo. */
function renderGaleria() {
  const galeria = document.getElementById("galeria");
  const busqueda = normalizar(textoBusqueda.trim());

  const visibles = ordenarVisibles(personajes.filter(p => {
    if (!estaDesbloqueada(p.id)) return false;
    if (filtroActivo !== "todas" && p.mitologia !== filtroActivo) return false;
    if (busqueda) return normalizar(p.nombre).includes(busqueda);
    return true;
  }));

  const hayDescubiertos = personajes.some(p => estaDesbloqueada(p.id));
  document.getElementById("mensaje-vacio").classList.toggle("oculto", visibles.length > 0 || !hayDescubiertos || busqueda !== "" || filtroActivo !== "todas");

  galeria.classList.toggle("vista-lista", vistaActiva === "lista");
  galeria.innerHTML = "";

  for (const t of TIERS_SECCION) {
    const delTier = visibles.filter(p => p.tier === t.id);
    if (!delTier.length) continue;

    const enFiltro = personajes.filter(p => p.tier === t.id && (filtroActivo === "todas" || p.mitologia === filtroActivo));
    const tengo = enFiltro.filter(p => estaDesbloqueada(p.id)).length;
    const total = enFiltro.length;
    const pct = total ? Math.round((tengo / total) * 100) : 0;

    const seccion = document.createElement("div");
    seccion.className = "seccion-tier";
    seccion.innerHTML = `
      <div class="seccion-tier-header">
        <span class="seccion-tier-nombre">${t.nombre}</span>
        <span class="seccion-tier-cifra">${tengo}/${total}</span>
        <span class="seccion-tier-barra seccion-tier-barra--${t.id}"><i style="width:${pct}%"></i></span>
      </div>`;
    const grilla = document.createElement("div");
    grilla.className = "tier-grid";
    delTier.forEach(p => grilla.appendChild(crearCartaGaleria(p)));
    seccion.appendChild(grilla);
    galeria.appendChild(seccion);
  }

  actualizarFabOraculo(personajes.some(p => !estaDesbloqueada(p.id)));
  renderContador();
}

/* El Oráculo dejó de ocupar un banner grande en la colección: ahora es un botón
   flotante discreto en la esquina, para que esta pantalla sea sobre todo para
   explorar las cartas (pedido de Hidalgo2). */
function actualizarFabOraculo(quedanPorDescubrir) {
  const fab = document.getElementById("fab-oraculo");
  if (!fab) return;
  fab.classList.toggle("oculto", !quedanPorDescubrir);
  if (quedanPorDescubrir) {
    const faltan = personajes.filter(p => !estaDesbloqueada(p.id)).length;
    fab.setAttribute("aria-label", `Abrir una carta nueva — te faltan ${faltan} héroes`);
    fab.setAttribute("title", `Abrir una carta nueva (te faltan ${faltan})`);
  }
}

/* ---------- Detalle: la carta abierta tiene tres caras ----------
   frente     → la ilustración (o el nombre, si el personaje todavía no tiene
                imagen), con la ficha mínima debajo;
   dorso      → dones y atributos, que entran completos en una pantalla;
   capitulos  → la historia como índice: el primer capítulo abierto y el resto
                plegado, para que releer uno sea un tap y no un scroll.
   Una sola cara se pinta por vez dentro de #detalle-contenido. */

let caraDetalle = "frente";

/* Identidad visual de cada mitología en la carta sin imagen: ornamento, acento
   y línea. La textura de fondo la sigue poniendo estilos.css (.mito-*).
   El acento romano no venía del repo: se derivó de los colorCarta romanos. */
const MITO_VISUAL = {
  griega:  { acento: "#ffd867", suave: "rgba(255, 236, 170, .9)",  linea: "rgba(255, 216, 103, .45)", ornamento: "greca" },
  nordica: { acento: "#d6ecff", suave: "rgba(214, 236, 255, .92)", linea: "rgba(214, 236, 255, .45)", ornamento: "nudo" },
  romana:  { acento: "#e8a884", suave: "rgba(232, 168, 132, .92)", linea: "rgba(232, 168, 132, .45)", ornamento: "laurel" }
};

/* Bandas ornamentales, dibujadas en SVG para que escalen y se recoloreen.
   Griega: greca. Nórdica: entrelazado. Romana: laurel. */
const ORNAMENTOS = {
  greca: () => {
    const d = Array.from({ length: 10 }, (_, i) => {
      const x = i * 24;
      return `M${x + 2},22 V2 H${x + 22} V18 H${x + 8} V8 H${x + 16} V14`;
    }).join(" ");
    return `<path d="${d}"></path>`;
  },
  nudo: () => {
    const onda = (y) => "M0,12 " + Array.from({ length: 10 }, (_, i) =>
      `Q${i * 24 + 12},${y} ${i * 24 + 24},12`).join(" ");
    const nudos = Array.from({ length: 11 }, (_, i) =>
      `<circle cx="${i * 24}" cy="12" r="1.9" fill="currentColor" stroke="none"></circle>`).join("");
    return `<path d="${onda(1)}"></path><path d="${onda(23)}"></path>${nudos}`;
  },
  laurel: () => {
    let hojas = "";
    for (let i = 0; i < 7; i++) {
      const izq = 104 - i * 15, der = 136 + i * 15;
      hojas += `<path d="M${izq},12 q-7,-7 -14,-4 q3,7 14,4"></path><path d="M${izq},12 q-7,7 -14,4 q3,-7 14,-4"></path>`;
      hojas += `<path d="M${der},12 q7,-7 14,-4 q-3,7 -14,4"></path><path d="M${der},12 q7,7 14,4 q-3,-7 -14,-4"></path>`;
    }
    return `<path d="M14,12 H104"></path><path d="M136,12 H226"></path>${hojas}<circle cx="120" cy="12" r="5.5"></circle>`;
  }
};

function ornamentoMito(mitologia, invertido = false) {
  const visual = MITO_VISUAL[mitologia] || MITO_VISUAL.griega;
  const dibujo = (ORNAMENTOS[visual.ornamento] || ORNAMENTOS.greca)();
  return `<svg class="ornamento-mito${invertido ? " ornamento-mito--invertido" : ""}" viewBox="0 0 240 24"
    fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"
    aria-hidden="true">${dibujo}</svg>`;
}

function esquinasHTML() {
  return `
    <i class="esquina esquina-tl" aria-hidden="true"></i>
    <i class="esquina esquina-tr" aria-hidden="true"></i>
    <i class="esquina esquina-bl" aria-hidden="true"></i>
    <i class="esquina esquina-br" aria-hidden="true"></i>`;
}

/* Materiales de la carta abierta. En el frente el marco vive en la caja de la
   ilustración (que es 3:4 como la imagen); en el dorso y en los capítulos vive
   en la carta entera, como venía. */
function clasesMaterial(p, completa) {
  const tieneMaterial = completa && (p.tier === "dorado" || p.tier === "plateado");
  if (!tieneMaterial) return { clase: "", capas: "", tieneMaterial: false };
  return {
    clase: p.tier === "dorado" ? "tier-dorada" : "tier-plateada",
    capas: `<div class="capas-material">${capasMaterialHTML(p.tier === "dorado" ? "oro" : "plata")}</div>`,
    tieneMaterial: true
  };
}

function pintarMarcoDetalle(p, completa, cara) {
  const cartaDetalle = document.getElementById("detalle-carta");
  const material = clasesMaterial(p, completa);
  cartaDetalle.classList.remove("tier-plateada", "tier-dorada", "mito-griega", "mito-nordica", "mito-romana",
                                "cara--frente", "cara--dorso", "cara--capitulos");
  cartaDetalle.classList.add("cara--" + cara);
  cartaDetalle.classList.add("mito-" + p.mitologia);

  // En el frente la carta es solo el marco de la pantalla: no lleva fondo ni material.
  if (cara === "frente") {
    cartaDetalle.style.background = "";
    const capasViejas = cartaDetalle.querySelector(":scope > .capas-material");
    if (capasViejas) capasViejas.remove();
    return;
  }

  if (!material.tieneMaterial) {
    cartaDetalle.style.background = fondoCarta(p.colorCarta);
  } else {
    cartaDetalle.style.background = "";
    cartaDetalle.classList.add(material.clase);
  }

  let capas = cartaDetalle.querySelector(":scope > .capas-material");
  if (material.tieneMaterial) {
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

function chipsIdentidad(p) {
  return `
    <div class="detalle-chips">
      <span class="detalle-chip">${NOMBRE_MITO[p.mitologia] || p.mitologia}</span>
      ${chipTier(p)}
    </div>`;
}

function progresoHistoria(p) {
  const total = capitulosParaMostrar(p).length;
  return `
    <div class="capitulos-progreso">
      <span>📖 Su historia</span>
      <span>${capitulosGanadosDe(p).length} de ${total} capítulos</span>
    </div>
    ${barraCapitulos(p)}`;
}

function botonCara(cara, texto, icono) {
  return `<button class="boton-cara" data-cara="${cara}">${icono}<span>${texto}</span></button>`;
}

const ICONO_GIRAR = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
  stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M3 12a9 9 0 0 1 15.5-6.2L21 8"></path><path d="M21 3v5h-5"></path>
  <path d="M21 12a9 9 0 0 1-15.5 6.2L3 16"></path><path d="M3 21v-5h5"></path></svg>`;

const ICONO_LEER = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"
  stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>`;

/* ---------- Cara 1: el frente ---------- */

function cajaIlustracionHTML(p, completa) {
  const material = clasesMaterial(p, completa);
  const clases = ["frente-caja", "mito-" + p.mitologia, material.clase].filter(Boolean).join(" ");
  const estilo = material.tieneMaterial ? "" : ` style="background:${fondoCarta(p.colorCarta)}"`;

  const dentro = p.imagen
    ? `<img class="frente-imagen" src="${p.imagen}" alt="${p.nombre}, ${p.titulo}" width="780" height="1040">`
    : `
      <div class="frente-sin-imagen" style="--acento-mito:${(MITO_VISUAL[p.mitologia] || MITO_VISUAL.griega).acento}">
        ${ornamentoMito(p.mitologia)}
        <h2 class="frente-nombre" id="detalle-nombre">${p.nombre}</h2>
        <span class="divisor-mito"><i></i><span>${NOMBRE_MITO_CORTO[p.mitologia] || p.mitologia.toUpperCase()}</span><i></i></span>
        ${ornamentoMito(p.mitologia, true)}
      </div>`;

  return `<div class="${clases}"${estilo}>${material.capas}${dentro}${esquinasHTML()}</div>`;
}

function caraFrenteHTML(p, completa) {
  // Con imagen el nombre va debajo de la caja; sin imagen ya está dentro de ella.
  const nombreDebajo = p.imagen ? `<h2 class="frente-nombre-debajo" id="detalle-nombre">${p.nombre}</h2>` : "";
  return `
    <div class="frente-encabezado">
      <button class="boton-volver" data-accion="atras">← Volver</button>
    </div>
    ${cajaIlustracionHTML(p, completa)}
    ${completa ? `<div class="frente-sello">${selloHistoriaCompleta(completa)}</div>` : ""}
    <div class="frente-ficha">
      ${nombreDebajo}
      <p class="detalle-titulo">${p.titulo}</p>
      ${chipsIdentidad(p)}
      <div class="frente-espaciador"></div>
      <div class="frente-progreso">${progresoHistoria(p)}</div>
      ${botonCara("dorso", "Dar vuelta la carta", ICONO_GIRAR)}
    </div>`;
}

/* ---------- Cara 2: el dorso ---------- */

function caraDorsoHTML(p, completa) {
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

  const total = capitulosParaMostrar(p).length;
  const etiquetaLectura = total === 1 ? "Leer su capítulo" : `Leer sus ${total} capítulos`;

  return `
    <div class="cara-barra">
      <button class="boton-volver" data-accion="atras">← Volver</button>
      ${botonCara("frente", p.imagen ? "Ilustración" : "La carta", ICONO_GIRAR)}
    </div>
    <div class="dorso-cuerpo">
      <h2 id="detalle-nombre">${p.nombre}</h2>
      <p class="detalle-titulo">${p.titulo}</p>
      ${chipsIdentidad(p)}
      ${completa ? selloHistoriaCompleta(completa) : ""}
      <div class="dones">${p.dones.map(d => `<span class="don">${d}</span>`).join("")}</div>
      <div class="atributos">${barras}</div>
      <div class="dorso-espaciador"></div>
      <div class="dorso-historia">
        ${progresoHistoria(p)}
        ${botonCara("capitulos", etiquetaLectura, ICONO_LEER)}
      </div>
    </div>`;
}

/* ---------- Cara 3: los capítulos, como índice ---------- */

/* Ícono del capítulo velado según el módulo que lo enciende (doc de olas §2):
   brújula para El Mapa del Héroe, estrella para El Cielo de los Mitos,
   rompecabezas para Ordená el Mito. El resto (oráculo difícil, vínculo ya
   alcanzable) conserva la brújula genérica de "hay un lugar adonde ir". */
function iconoCapituloVelado(capitulo, destino) {
  if (!destino) return "🔒";
  const modulo = (capitulo.fuente || "").split(":")[0];
  if (modulo === "ordena") return "🧩";
  if (modulo === "cielo") return "⭐";
  if (modulo === "espejo") return "🪞";
  return "🧭";
}

/* Los capítulos velados con un destino conocido (cielo, oráculo difícil, o un
   vínculo ya alcanzable) se muestran como <button>: un tap navega directo al
   módulo que los enciende (doc de olas §2, regla transversal de UI).
   Los encendidos son <details>: el primero abierto, el resto plegado. */
function bloqueCapitulo(capitulo, encendido, personaje, abierto) {
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
    const destino = destinoCapituloVelado(capitulo);
    const Tag = destino ? "button" : "div";
    const atributoDestino = destino ? `data-destino="${destino}"` : "";
    return `
      <${Tag} class="capitulo capitulo--velado${destino ? " capitulo--navegable" : ""}" data-capitulo-id="${capitulo.id}" ${atributoDestino}>
        <span class="capitulo-candado" aria-hidden="true">${iconoCapituloVelado(capitulo, destino)}</span>
        <div>
          <strong class="capitulo-titulo">${capitulo.titulo}</strong>
          <p class="capitulo-pista">${pistaCapituloVelado(capitulo, encendido, nombresConstelaciones, personaje)}</p>
        </div>
      </${Tag}>`;
  }
  return `
    <details class="capitulo capitulo--encendido" data-capitulo-id="${capitulo.id}"${abierto ? " open" : ""}>
      <summary><h3>📜 ${capitulo.titulo}</h3><span class="capitulo-chevron" aria-hidden="true"></span></summary>
      <div class="capitulo-texto">
        <p>${capitulo.texto}</p>
        ${capitulo.porque ? `
        <div class="bloque-porque bloque-porque--capitulo">
          <h4>💡 ¿Por qué?</h4>
          <p>${capitulo.porque}</p>
        </div>` : ""}
      </div>
    </details>`;
}

function caraCapitulosHTML(p) {
  const capitulos = capitulosParaMostrar(p);
  const encendidos = capitulosEncendidosDe(p.id);
  let yaAbriUno = false;
  const lista = capitulos.map(c => {
    const encendido = encendidos.includes(c.id);
    const visible = !c.pendienteDeDiseno && capituloListoParaMostrar(c, encendido);
    const abrir = visible && !yaAbriUno;
    if (abrir) yaAbriUno = true;
    return bloqueCapitulo(c, encendido, p, abrir);
  }).join("");

  return `
    <div class="capitulos-encabezado">
      <div class="cara-barra">
        <button class="boton-volver" data-accion="atras">←</button>
        <div class="capitulos-titulo">
          <strong id="detalle-nombre">${p.nombre}</strong>
          <span>Su historia · ${capitulosGanadosDe(p).length} de ${capitulos.length} capítulos</span>
        </div>
      </div>
      ${barraCapitulos(p)}
    </div>
    <div class="capitulos">${lista}</div>`;
}

/* ---------- Apertura y navegación entre caras ---------- */

function abrirDetalle(id, recienRevelada = false, cara = "frente") {
  const p = porId(id);
  if (!p) return;

  caraDetalle = cara;
  const detalle = document.getElementById("detalle");
  const cartaDetalle = document.getElementById("detalle-carta");
  const completa = historiaCompleta(p);
  pintarMarcoDetalle(p, completa, cara);

  const contenido = document.getElementById("detalle-contenido");
  if (cara === "dorso") contenido.innerHTML = caraDorsoHTML(p, completa);
  else if (cara === "capitulos") contenido.innerHTML = caraCapitulosHTML(p);
  else contenido.innerHTML = caraFrenteHTML(p, completa);

  contenido.querySelectorAll(".capitulo--navegable").forEach(boton => {
    boton.addEventListener("click", () => { location.href = boton.dataset.destino; });
  });
  contenido.querySelectorAll("[data-cara]").forEach(boton => {
    boton.addEventListener("click", () => abrirDetalle(id, false, boton.dataset.cara));
  });
  contenido.querySelectorAll('[data-accion="atras"]').forEach(boton => {
    boton.addEventListener("click", volverDeCara);
  });

  detalle.dataset.personajeId = id;
  cartaDetalle.classList.toggle("revelando", recienRevelada && cara === "frente");
  detalle.classList.remove("oculto");
  contenido.scrollTop = 0;
  const foco = contenido.querySelector(".boton-volver");
  if (foco) foco.focus();
}

/* "← Volver" retrocede una cara: capítulos → dorso → frente → cerrar. */
function volverDeCara() {
  const id = document.getElementById("detalle").dataset.personajeId;
  if (caraDetalle === "capitulos") abrirDetalle(id, false, "dorso");
  else if (caraDetalle === "dorso") abrirDetalle(id, false, "frente");
  else cerrarDetalle();
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
  caraDetalle = "frente";
}


/* ---------- Toast ---------- */

function mostrarToast(texto) {
  const toast = document.createElement("div");
  toast.className = "toast-aparicion";
  toast.textContent = texto;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

/* ---------- Sets temáticos latentes (spec funcional §6) ----------
   Vitrina de chips en la Colección; el logro se muestra con el Súper ¿Por
   qué? apenas se completa un set (revisarSets / desbloquear ya lo detectan). */

function renderVitrinaSets() {
  const menu = document.getElementById("menu-sets");
  const cont = document.getElementById("vitrina-sets");
  if (!menu || !cont) return;
  const sets = setsPublicados();
  // Oculta el botón "🎖️ Sets" entero si todavía no hay sets publicados; el
  // panel en sí (abierto/cerrado) lo maneja solo configurarMenusControles(),
  // así que acá no se toca su clase "oculto".
  menu.classList.toggle("oculto", !sets.length);
  if (!sets.length) return;
  cont.innerHTML = sets.map(s => {
    const revelado = estado.sets.revelados.includes(s.id);
    return `<button class="set-chip${revelado ? " set-chip--revelado" : ""}" data-set="${s.id}" aria-label="${s.nombre}">
      <span class="set-chip-icono" aria-hidden="true">${s.icono}</span>
      <span class="set-chip-nombre">${s.nombre}</span>
    </button>`;
  }).join("");
  cont.querySelectorAll(".set-chip--revelado").forEach(boton => {
    boton.addEventListener("click", () => mostrarLogroSet(boton.dataset.set));
  });
}

function mostrarLogroSet(setId) {
  const s = setPorId(setId);
  if (!s) return;
  const modal = document.getElementById("modal-logro-set");
  document.getElementById("logro-set-contenido").innerHTML = `
    <span class="logro-set-icono" aria-hidden="true">${s.icono}</span>
    <h2>${s.nombre}</h2>
    <div class="logro-set-integrantes">
      ${s.integrantes.map(id => { const p = porId(id); return p ? `<span class="logro-set-personaje">${p.nombre}</span>` : ""; }).join("")}
    </div>
    <div class="bloque-porque">
      <h4>💡 El Súper ¿Por qué?</h4>
      <p>${s.superPorque || "Encontraste un patrón que se repite entre culturas que nunca se conocieron. Eso es antropología: buscar por qué los seres humanos, sin copiarse, llegan a las mismas ideas."}</p>
    </div>
    <button class="boton-principal" id="logro-set-cerrar">Genial</button>`;
  modal.classList.remove("oculto");
  document.getElementById("logro-set-cerrar").addEventListener("click", () => modal.classList.add("oculto"));
}

/* ---------- Ceremonias de material ----------
   Se disparan cuando un capítulo recién publicado completa la historia de
   un personaje dorado/plateado. Los capítulos los encienden otros módulos
   (Oráculo difícil, vínculos, El Cielo de los Mitos) — acá solo la celebración. */

let tokenCeremonia = 0;

/* Helpers de efectos efímeros de la ceremonia (partículas, anillo, flash,
   rayos). Duplicados en oraculo.js: coleccion.html y oraculo.html no
   comparten JS más allá de nucleo.js. */

function conAlpha(hex, a) {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
}

function fxEfimero(parent, css, ms) {
  const el = document.createElement("i");
  el.style.cssText = css;
  parent.appendChild(el);
  setTimeout(() => el.remove(), ms);
  return el;
}

function fxParticulas(parent, { n, colores, dist, dur, modo, delay = 0, glyphs = ["✦"], base = 13 }) {
  for (let i = 0; i < n; i++) {
    const ang = (i / n) * Math.PI * 2 + Math.random() * .5;
    const d = dist * (0.75 + Math.random() * 0.5);
    const el = document.createElement("span");
    el.textContent = glyphs[i % glyphs.length];
    el.style.cssText = `position:absolute;top:50%;left:50%;z-index:9;pointer-events:none;font-size:${base - 4 + Math.random() * 8}px;color:${colores[i % colores.length]};animation:${modo === "in" ? "cer-part-in" : "cer-part-out"} ${dur}s ease-out ${(delay + Math.random() * .12)}s both`;
    el.style.setProperty("--dx", `${Math.cos(ang) * d}px`);
    el.style.setProperty("--dy", `${Math.sin(ang) * d}px`);
    parent.appendChild(el);
    setTimeout(() => el.remove(), (delay + dur + .3) * 1000);
  }
}

function fxAnillo(parent, color, delay = 0, dur = .95) {
  fxEfimero(parent,
    `position:absolute;top:50%;left:50%;width:70px;height:70px;margin:-35px 0 0 -35px;border-radius:50%;border:3px solid ${color};pointer-events:none;z-index:8;animation:cer-anillo ${dur}s ease-out ${delay}s both`,
    (delay + dur + .2) * 1000);
}

function fxFlash(parent) {
  fxEfimero(parent,
    `position:absolute;inset:0;border-radius:18px;background:radial-gradient(circle, rgba(255,255,255,.95), rgba(255,255,255,.6) 60%, transparent);pointer-events:none;z-index:10;animation:cer-flash .45s ease-out both`,
    800);
}

function fxRayos(parent, color) {
  fxEfimero(parent,
    `position:absolute;top:50%;left:50%;width:480px;height:480px;margin:-240px 0 0 -240px;pointer-events:none;z-index:0;background:repeating-conic-gradient(${color} 0deg 5deg, transparent 5deg 28deg);border-radius:50%;animation:cer-rayos 1.4s ease-out both`,
    1600);
}

/* Estampa el medallón de tier al final de la ceremonia (aparece con "pop"). */
function estampaMedallonCeremonia(carta, tono) {
  const el = document.createElement("span");
  el.className = "medallon-tier tier-" + (tono === "oro" ? "dorado" : "plateado");
  el.textContent = tono === "oro" ? "⭐" : "✦";
  el.style.animation = "cer-estampa .6s ease-out both";
  carta.appendChild(el);
}

/* Ceremonia plateada v2 "Luz de luna" (~3s). `carta` = nodo .carta ya visible
   con el personaje, ANTES de aplicar el marco. */
function ceremoniaPlateada(carta, alTerminar) {
  const token = ++tokenCeremonia;
  sonar("arpegio");
  carta.style.transform = "translateY(-6px) scale(1.03)";
  fxParticulas(carta, { n: 12, colores: ["#eef1f6", "#c8d4e6", "#ffffff"], dist: 120, dur: .95, modo: "in" });

  setTimeout(() => {
    if (token !== tokenCeremonia) return;
    fxFlash(carta);
    fxAnillo(carta, "rgba(224,230,240,.85)");
    fxRayos(carta, "rgba(224,230,240,.28)");
    carta.classList.add("carta--plateada");
    carta.style.background = "";
    carta.insertAdjacentHTML("afterbegin", capasMaterialHTML("plata"));
    vibrar([20, 40, 20]);
  }, 1200);

  setTimeout(() => {
    if (token !== tokenCeremonia) return;
    sonar("sello");
    carta.style.transform = "";
    estampaMedallonCeremonia(carta, "plata");
    fxParticulas(carta, { n: 8, colores: ["#eef1f6"], dist: 90, dur: .8, modo: "out" });
    setTimeout(() => { if (token === tokenCeremonia && alTerminar) alTerminar(); }, 650);
  }, 2350);
}

/* Ceremonia dorada v2 "Coronación" (~3.2s). */
function ceremoniaDorada(carta, alTerminar) {
  const token = ++tokenCeremonia;
  sonar("carga");
  carta.classList.add("ceremonia-resplandor");
  carta.style.transform = "translateY(-8px) scale(1.05)";
  fxParticulas(carta, { n: 10, colores: ["#ffd867", "#ffe9a8"], dist: 130, dur: .9, modo: "in" });
  setTimeout(() => {
    if (token !== tokenCeremonia) return;
    fxParticulas(carta, { n: 10, colores: ["#ffd867", "#ffffff"], dist: 110, dur: .8, modo: "in" });
  }, 450);

  setTimeout(() => {
    if (token !== tokenCeremonia) return;
    sonar("impacto");
    fxFlash(carta);
    fxRayos(carta, "rgba(255,224,130,.32)");
    fxAnillo(carta, "rgba(255,216,103,.9)");
    fxAnillo(carta, "rgba(255,158,107,.8)", .15);
    fxParticulas(carta, { n: 26, colores: ["#ffd867", "#ffffff", "#ff9e6b"], dist: 160, dur: 1, modo: "out", glyphs: ["✦", "✧", "·"] });
  }, 900);

  setTimeout(() => {
    if (token !== tokenCeremonia) return;
    sonar("fanfarria");
    carta.classList.remove("ceremonia-resplandor");
    carta.classList.add("carta--dorada");
    carta.style.background = "";
    carta.insertAdjacentHTML("afterbegin", capasMaterialHTML("oro"));
    vibrar([30, 50, 30, 50, 60]);
  }, 1050);

  setTimeout(() => {
    if (token !== tokenCeremonia) return;
    sonar("sello");
    carta.style.transform = "";
    estampaMedallonCeremonia(carta, "oro");
    setTimeout(() => { if (token === tokenCeremonia && alTerminar) alTerminar(); }, 650);
  }, 1900);
}

/* Marca a un personaje como festejado si su historia acaba de completarse
   (estado.global.completas evita repetir la animación en cada carga). No
   anima: solo decide y devuelve si hace falta encolar una ceremonia. Separar
   esto de la animación es lo que permite festejar a varios personajes a la
   vez (posible desde que los vínculos pueden completar más de uno de un
   saque) sin que sus ceremonias se pisen entre sí. */
function marcarCompletaSiCorresponde(personajeId) {
  const p = porId(personajeId);
  if (!p || !historiaCompleta(p) || estado.global.completas.includes(personajeId)) return false;
  estado.global.completas.push(personajeId);
  guardarEstado();
  return p.tier === "dorado" || p.tier === "plateado";
}

let colaCeremonias = [];
let procesandoCeremonias = false;

function procesarColaCeremonias() {
  if (procesandoCeremonias) return;
  const personajeId = colaCeremonias.shift();
  if (!personajeId) return;
  procesandoCeremonias = true;

  renderGaleria();
  const p = porId(personajeId);
  const carta = document.querySelector(`.carta[data-id="${personajeId}"]`);
  const siguiente = () => {
    procesandoCeremonias = false;
    renderGaleria();
    procesarColaCeremonias();
  };
  if (!p || !carta) { siguiente(); return; }

  carta.classList.remove("carta--dorada", "carta--plateada");
  carta.querySelectorAll(".holo, .brillo-sweep, .destello-permanente").forEach(n => n.remove());
  carta.style.background = fondoCarta(p.colorCarta);
  (p.tier === "dorado" ? ceremoniaDorada : ceremoniaPlateada)(carta, siguiente);
}

function celebrarSiCorresponde(personajeId) {
  if (marcarCompletaSiCorresponde(personajeId)) {
    colaCeremonias.push(personajeId);
    procesarColaCeremonias();
  }
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
    abrirDetalle(personajeId, false, "capitulos");
    const nuevo = document.querySelector(`#detalle-contenido .capitulo[data-capitulo-id="${capituloId}"]`);
    if (nuevo) {
      nuevo.classList.add("capitulo--recien-encendido");
      nuevo.scrollIntoView({ block: "center", behavior: "smooth" });
    }
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
  document.getElementById("fab-oraculo").addEventListener("click", () => { location.href = "oraculo.html"; });
  document.getElementById("boton-cerrar-config").addEventListener("click", () => modal.classList.add("oculto"));
  document.getElementById("boton-sonido").addEventListener("click", () => {
    alternarSonido();
    actualizarTextoBotonSonido();
  });
  actualizarTextoBotonSonido();
  document.getElementById("boton-mazo-curado").addEventListener("click", () => {
    if (confirm("¿Cargar el mazo inicial curado en este perfil?")) {
      const sumadas = cargarMazoCurado();
      modal.classList.add("oculto");
      renderGaleria();
      renderVitrinaSets();
      alert(sumadas ? `Se sumaron ${sumadas} cartas.` : "Este perfil ya tenía todo el mazo curado.");
    }
  });
  document.getElementById("boton-reset").addEventListener("click", () => {
    if (confirm("¿Seguro? Se pierde todo el progreso de este perfil.")) {
      reiniciarPerfilActivo();
      modal.classList.add("oculto");
      renderGaleria();
      renderVitrinaSets();
    }
  });
}

/* ---------- Arranque ---------- */

/* Filtro / Orden / Vista / Sets son botones que despliegan su propio menú
   (Handoff v10-v11). Acá solo se maneja abrir/cerrar; la lógica de filtrar,
   ordenar y cambiar vista sigue igual, sobre los mismos data-* de adentro. */
function configurarMenusControles() {
  const menus = [...document.querySelectorAll(".menu-control")];

  function cerrarMenus(exceptoMenu) {
    menus.forEach(menu => {
      if (menu === exceptoMenu) return;
      menu.querySelector(".panel-control").classList.add("oculto");
      menu.querySelector(".chip-trigger").setAttribute("aria-expanded", "false");
    });
  }

  menus.forEach(menu => {
    const trigger = menu.querySelector(".chip-trigger");
    const panel = menu.querySelector(".panel-control");

    trigger.addEventListener("click", () => {
      const yaAbierto = trigger.getAttribute("aria-expanded") === "true";
      cerrarMenus(menu);
      trigger.setAttribute("aria-expanded", yaAbierto ? "false" : "true");
      panel.classList.toggle("oculto", yaAbierto);
    });

    panel.addEventListener("click", e => {
      if (e.target.closest("button")) cerrarMenus(null);
    });
  });

  document.addEventListener("click", e => {
    if (!e.target.closest(".menu-control")) cerrarMenus(null);
  });
}

function configurarControles() {
  configurarMenusControles();

  document.querySelectorAll(".chip[data-filtro]").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".chip[data-filtro]").forEach(c => c.classList.remove("activo"));
      chip.classList.add("activo");
      filtroActivo = chip.dataset.filtro;
      renderGaleria();
    });
  });

  document.querySelectorAll(".chip[data-orden]").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".chip[data-orden]").forEach(c => c.classList.remove("activo"));
      chip.classList.add("activo");
      ordenActivo = chip.dataset.orden;
      renderGaleria();
    });
  });

  document.querySelectorAll(".vista-toggle-boton[data-vista]").forEach(boton => {
    boton.addEventListener("click", () => {
      document.querySelectorAll(".vista-toggle-boton[data-vista]").forEach(b => b.classList.remove("activo"));
      boton.classList.add("activo");
      vistaActiva = boton.dataset.vista;
      renderGaleria();
    });
  });

  document.getElementById("buscador").addEventListener("input", e => {
    textoBusqueda = e.target.value;
    renderGaleria();
  });

  document.getElementById("detalle").addEventListener("click", e => {
    if (e.target.id === "detalle") cerrarDetalle();
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      cerrarDetalle();
      document.querySelectorAll(".panel-control").forEach(p => p.classList.add("oculto"));
      document.querySelectorAll(".chip-trigger").forEach(t => t.setAttribute("aria-expanded", "false"));
      document.getElementById("modal-config").classList.add("oculto");
      document.getElementById("modal-logro-set").classList.add("oculto");
    }
  });

  // Si otro módulo (u otra pestaña) cambia el progreso guardado, reflejarlo
  // acá sin esperar a recargar: es el "volver a la colección" del Handoff v2 §1.
  window.addEventListener("storage", e => {
    if (e.key !== CLAVE_GUARDADO) return;
    const antes = JSON.parse(JSON.stringify(estado.global.capitulos));
    cargarEstado();
    renderGaleria();
    renderVitrinaSets();
    Object.keys(estado.global.capitulos).forEach(personajeId => {
      const nuevos = estado.global.capitulos[personajeId].filter(cid => !(antes[personajeId] || []).includes(cid));
      nuevos.forEach(capituloId => animarCapituloEncendido(personajeId, capituloId));
    });
    revisarCeremoniasPendientes();
  });
}

/* Nombres de constelaciones para las pistas de capítulos velados con fuente
   "cielo:<id>" (doc de olas §2: la pista tiene que decir el nombre real). */
async function cargarNombresConstelaciones() {
  try {
    const todas = await (await fetch("constelaciones.json")).json();
    nombresConstelaciones = {};
    todas.forEach(c => { nombresConstelaciones[c.id] = c.nombre; });
  } catch (e) { /* sin archivo: la pista genérica alcanza */ }
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
  await cargarNombresConstelaciones();
  await cargarCatalogosDestino();
  reconciliarVinculos();
  sembrarEstrellas();
  inyectarKeyframesIconos();
  configurarControles();
  configurarOpciones();
  renderGaleria();
  renderVitrinaSets();
  revisarCeremoniasPendientes();

  // Enlace de vuelta desde otro módulo (ej. "Ver la carta de X" en El Cielo
  // de los Mitos): coleccion.html?ver=teseo abre esa carta directo.
  const idAVer = new URLSearchParams(location.search).get("ver");
  if (idAVer && estaDesbloqueada(idAVer)) abrirDetalle(idAVer);

  // Offline real una vez cargado (solo cuando se sirve por http/https)
  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
}

iniciar();

/* ============================================================
   ÍCONOS ANIMADOS Y EVOLUTIVOS (motor en iconos.js)
   ============================================================ */

/* Inyecta los @keyframes de los íconos una sola vez. */
function inyectarKeyframesIconos() {
  if (document.getElementById("iconos-keyframes")) return;
  if (typeof ICONO_KEYFRAMES === "undefined") return;
  const style = document.createElement("style");
  style.id = "iconos-keyframes";
  style.textContent = ICONO_KEYFRAMES;
  document.head.appendChild(style);
}

/* Activa el ícono dentro de un contenedor recién pintado:
   - Si la historia del personaje todavía no está completa, quita el detalle
     narrativo ([data-extra]) => estado "antes de leer" del ícono evolutivo.
   - Arranca la animación sutil del ícono (gestos [data-fx] + movimiento raíz). */
function activarIcono(contenedorEl, p) {
  if (!contenedorEl || typeof animarIcono !== "function") return;
  const svgIco = contenedorEl.querySelector("svg");
  if (!svgIco) return;

  const completa = historiaCompleta(p);
  if (!completa) iconoBase(svgIco);
  animarIcono(svgIco, p.icono);

  // Escena de fondo ambiental del medallón (solo los íconos que la tienen definida).
  const esc = (typeof ICONO_ESCENA !== "undefined") ? ICONO_ESCENA[p.icono] : null;
  contenedorEl.style.background = esc || "";

  // Borde punteado = ícono evolutivo que todavía no reveló su detalle narrativo.
  const esEvolutivo = !!(ICONOS[p.icono] && ICONOS[p.icono].includes("data-extra"));
  contenedorEl.style.borderStyle = (esEvolutivo && !completa) ? "dashed" : "";
  contenedorEl.style.borderColor = (esEvolutivo && !completa) ? "rgba(255,216,103,.6)" : "";
}
