/* Héroes y Dioses — lógica del modo colección.
   Los datos viven en personajes.json; este archivo no conoce ningún personaje. */

const CLAVE_GUARDADO = "feli-cartas-v1";
const DESBLOQUEADAS_INICIALES = ["teseo", "heracles", "thor"];

const NOMBRE_MITO = { griega: "🏛️ Griega", nordica: "⚡ Nórdica", romana: "🦅 Romana" };
const ATRIBUTOS = [
  { clave: "fuerza",   icono: "⚔️", nombre: "Fuerza" },
  { clave: "astucia",  icono: "🧠", nombre: "Astucia" },
  { clave: "valentia", icono: "🦁", nombre: "Valentía" },
  { clave: "magia",    icono: "✨", nombre: "Magia" }
];

/* Cuántos capítulos le corresponden como mínimo a cada tier (regla 6 de
   CLAUDE.md: dorado 3-4, plateado 2-3, normal 1-2). Se usa para no dar por
   completa una historia que todavía no tiene todos sus capítulos diseñados. */
const TIER_MINIMO = { dorado: 3, plateado: 2, normal: 1 };

/* Nombre amigable del módulo que enciende cada capítulo, a partir del campo
   "fuente" (formato "modulo:condicion"). Ninguno de estos módulos existe
   todavía en este repo: por eso la pista siempre aclara "todavía no disponible". */
const NOMBRE_MODULO_FUENTE = {
  cielo: "El Cielo de los Mitos",
  crisis: "Crisis del Mundo Antiguo",
  ordena: "Ordená el Mito",
  oraculo: "el Oráculo en modo difícil"
};

let personajes = [];
let estado = { desbloqueadas: [], capitulosEncendidos: {} };
let filtroActivo = "todas";
let textoBusqueda = "";
let cartaPendiente = null;   // id de la carta velada que se intenta desbloquear
let preguntaActual = null;   // { personajeId, opciones: [{texto, esCorrecta}] }

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
  for (const id of estado.desbloqueadas) estado.capitulosEncendidos[id] = ["base"];
  guardarEstado();
}

function guardarEstado() {
  try {
    localStorage.setItem(CLAVE_GUARDADO, JSON.stringify(estado));
  } catch (e) { /* sin localStorage (modo incógnito): el juego sigue, sin persistir */ }
}

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
   personaje, ver chipTier): acá se resuelve cuántos capítulos ya encendió el
   jugador y si eso alcanza para dar la historia por completa en su tier.
   Los capítulos los encienden los módulos del juego, nunca una acción dentro
   de la colección misma — hoy el único módulo que existe es el descubrimiento
   (capítulo "base"), así que ninguna carta puede llegar a completa todavía. */

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
  return reales.every(c => encendidos.includes(c.id));
}

function pistaCapituloVelado(fuente) {
  const modulo = fuente ? fuente.split(":")[0] : null;
  const nombre = NOMBRE_MODULO_FUENTE[modulo];
  return nombre
    ? `Se enciende jugando ${nombre} (todavía no disponible)`
    : "Se enciende jugando otro módulo (todavía no disponible)";
}

/* ---------- Utilidades ---------- */

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

function porId(id) {
  return personajes.find(p => p.id === id);
}

/* Insignia de tier: distintivo estático de cuán central es el personaje en su
   mitología. Define el marco/holo máximo que puede alcanzar (ver historiaCompleta),
   no un logro en sí mismo. */
const NOMBRE_TIER = { dorado: "⭐ Dorado", plateado: "✦ Plateado" };

function chipTier(p) {
  const etiqueta = NOMBRE_TIER[p.tier];
  return etiqueta ? `<span class="chip-tier tier-${p.tier}">${etiqueta}</span>` : "";
}

function chipCapitulos(p) {
  const total = capitulosParaMostrar(p).length;
  const encendidos = capitulosEncendidosDe(p.id).length;
  return `<span class="chip-capitulos">📖 ${encendidos} de ${total}</span>`;
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

/* ---------- Galería ---------- */

function renderContador() {
  const total = personajes.length;
  const tengo = personajes.filter(p => estaDesbloqueada(p.id)).length;
  document.getElementById("contador").textContent = `Tenés ${tengo} de ${total} héroes`;
}

function renderGaleria() {
  const galeria = document.getElementById("galeria");
  const busqueda = normalizar(textoBusqueda.trim());

  const visibles = personajes.filter(p => {
    if (filtroActivo !== "todas" && p.mitologia !== filtroActivo) return false;
    if (busqueda) {
      // El buscador solo encuentra cartas desbloqueadas: las veladas siguen siendo un misterio.
      return estaDesbloqueada(p.id) && normalizar(p.nombre).includes(busqueda);
    }
    return true;
  });

  document.getElementById("mensaje-vacio").classList.toggle("oculto", visibles.length > 0);

  galeria.innerHTML = "";
  for (const p of visibles) {
    const desbloqueada = estaDesbloqueada(p.id);
    const tieneMaterial = desbloqueada && historiaCompleta(p) && (p.tier === "dorado" || p.tier === "plateado");
    const carta = document.createElement("button");
    carta.className = "carta" + (desbloqueada ? "" : " velada");
    if (tieneMaterial) carta.classList.add(p.tier === "dorado" ? "carta--dorada" : "carta--plateada");
    carta.dataset.id = p.id;
    if (desbloqueada) {
      if (!tieneMaterial) carta.style.background = `linear-gradient(160deg, ${p.colorCarta}, ${p.colorCarta}cc)`;
      carta.setAttribute("aria-label", `Ver la carta de ${p.nombre}`);
    } else {
      carta.setAttribute("aria-label", "Carta misteriosa, tocá para intentar desbloquearla");
    }
    carta.innerHTML = `
      ${tieneMaterial ? capasMaterialHTML(p.tier === "dorado" ? "oro" : "plata") : ""}
      <span class="ilustracion">${svgIcono(p.icono, !desbloqueada)}</span>
      <span class="nombre">${desbloqueada ? p.nombre : "???"}</span>
      <span class="chip-mito">${NOMBRE_MITO[p.mitologia] || p.mitologia}</span>
      ${desbloqueada ? chipTier(p) : ""}
      ${desbloqueada ? chipCapitulos(p) : ""}`;
    carta.addEventListener("click", () => {
      if (estaDesbloqueada(p.id)) abrirDetalle(p.id);
      else abrirPregunta(p.id);
    });
    galeria.appendChild(carta);
  }

  renderContador();
}

/* ---------- Detalle ---------- */

function pintarMarcoDetalle(p, completa) {
  const cartaDetalle = document.getElementById("detalle-carta");
  const tieneMaterial = completa && (p.tier === "dorado" || p.tier === "plateado");
  cartaDetalle.classList.remove("tier-plateada", "tier-dorada");
  if (!tieneMaterial) {
    cartaDetalle.style.background =
      `linear-gradient(165deg, rgba(255,255,255,.10), rgba(0,0,0,.30)), linear-gradient(${p.colorCarta}, ${p.colorCarta})`;
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
  if (!encendido) {
    return `
      <div class="capitulo capitulo--velado">
        <span class="capitulo-candado" aria-hidden="true">🔒</span>
        <div>
          <strong class="capitulo-titulo">${capitulo.titulo}</strong>
          <p class="capitulo-pista">${pistaCapituloVelado(capitulo.fuente)}</p>
        </div>
      </div>`;
  }
  return `
    <div class="capitulo capitulo--encendido">
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

  const barras = ATRIBUTOS.map(a => `
    <div class="atributo">
      <span class="icono-attr" title="${a.nombre}">${a.icono}</span>
      <div class="barra" role="img" aria-label="${a.nombre}: ${p.atributos[a.clave]} de 10">
        <span style="width:${p.atributos[a.clave] * 10}%"></span>
      </div>
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
        <span>${encendidos.length} de ${capitulos.length} capítulos</span>
      </div>
      ${listaCapitulos}
    </div>`;

  cartaDetalle.classList.toggle("revelando", recienRevelada);
  detalle.classList.remove("oculto");
  cartaDetalle.scrollTop = 0;
  document.getElementById("boton-volver").focus();
}

function cerrarDetalle() {
  document.getElementById("detalle").classList.add("oculto");
  document.getElementById("detalle-carta").classList.remove("revelando");
}

/* ---------- Revelado — "Niebla del Oráculo" ----------
   Al aparecer una carta nueva: la niebla alrededor se dispersa mientras la
   carta brota con un destello, y un toast confirma quién apareció. */

function lanzarNieblaDispersa(carta) {
  const desplazos = [
    { dx: "-64px", dy: "-38px" }, { dx: "64px", dy: "-38px" },
    { dx: "-56px", dy: "46px" },  { dx: "56px", dy: "46px" }
  ];
  for (const d of desplazos) {
    const niebla = document.createElement("i");
    niebla.className = "niebla-dispersa";
    niebla.style.setProperty("--dx", d.dx);
    niebla.style.setProperty("--dy", d.dy);
    carta.appendChild(niebla);
    setTimeout(() => niebla.remove(), 1000);
  }
}

function mostrarToastAparicion(nombre) {
  const toast = document.createElement("div");
  toast.className = "toast-aparicion";
  toast.textContent = `✨ ¡Apareció ${nombre}!`;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

/* ---------- Desbloqueo por pregunta ---------- */

function abrirPregunta(idVelada) {
  const conPreguntas = personajes.filter(p => estaDesbloqueada(p.id) && p.preguntas && p.preguntas.length);
  if (conPreguntas.length === 0) {
    // Sin cartas con preguntas no hay desafío posible: se desbloquea directo.
    revelarCarta(idVelada);
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
    document.querySelectorAll("#pregunta-contenido .opcion").forEach(b => b.disabled = true);
    const idGanada = cartaPendiente;
    setTimeout(() => {
      cerrarPregunta();
      revelarCarta(idGanada);
    }, 700);
  } else {
    boton.classList.add("incorrecta");
    boton.disabled = true;
    resultado.textContent = "Mmm, esa no es... ¡probá con otra opción!";
  }
}

function revelarCarta(id) {
  desbloquear(id);
  renderGaleria();
  const carta = document.querySelector(`.carta[data-id="${id}"]`);
  if (carta) {
    carta.classList.add("recien-revelada");
    lanzarNieblaDispersa(carta);
  }
  mostrarToastAparicion(porId(id).nombre);
  setTimeout(() => abrirDetalle(id, true), 950);
}

function cerrarPregunta() {
  document.getElementById("modal-pregunta").classList.add("oculto");
  cartaPendiente = null;
  preguntaActual = null;
}

/* ---------- Opciones (para Willy) ---------- */

function configurarOpciones() {
  const modal = document.getElementById("modal-config");
  document.getElementById("boton-config").addEventListener("click", () => modal.classList.remove("oculto"));
  document.getElementById("boton-cerrar-config").addEventListener("click", () => modal.classList.add("oculto"));
  document.getElementById("boton-reset").addEventListener("click", () => {
    if (confirm("¿Seguro? Se pierde todo el progreso de la colección.")) {
      localStorage.removeItem(CLAVE_GUARDADO);
      estado.desbloqueadas = [...DESBLOQUEADAS_INICIALES];
      estado.capitulosEncendidos = {};
      for (const id of estado.desbloqueadas) estado.capitulosEncendidos[id] = ["base"];
      guardarEstado();
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

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      cerrarDetalle();
      cerrarPregunta();
      document.getElementById("modal-config").classList.add("oculto");
    }
  });
}

async function iniciar() {
  try {
    const respuesta = await fetch("personajes.json");
    personajes = await respuesta.json();
  } catch (e) {
    document.getElementById("galeria").innerHTML =
      `<p class="mensaje-vacio">No pude cargar las cartas. Si abriste el archivo directo,
       probá servirlo con un servidor local (ver README).</p>`;
    return;
  }

  cargarEstado();
  configurarControles();
  configurarOpciones();
  renderGaleria();

  // Offline real una vez cargado (solo cuando se sirve por http/https)
  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
}

iniciar();
