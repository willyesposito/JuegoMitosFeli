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

let personajes = [];
let estado = { desbloqueadas: [] };
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
        return;
      }
    }
  } catch (e) { /* estado corrupto: se reinicia */ }
  estado.desbloqueadas = [...DESBLOQUEADAS_INICIALES];
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
    guardarEstado();
  }
}

/* ---------- Utilidades ---------- */

function normalizar(texto) {
  return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
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

/* Insignia de tier: distintivo estático de cuán central es el personaje en su mitología.
   Estático, no es un logro; el progreso por capítulos llega en el modo historia. */
const NOMBRE_TIER = { dorado: "⭐ Dorado", plateado: "✦ Plateado" };

function chipTier(p) {
  const etiqueta = NOMBRE_TIER[p.tier];
  return etiqueta ? `<span class="chip-tier tier-${p.tier}">${etiqueta}</span>` : "";
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
    const carta = document.createElement("button");
    carta.className = "carta" + (desbloqueada ? "" : " velada");
    carta.dataset.id = p.id;
    if (desbloqueada) {
      carta.style.background = `linear-gradient(160deg, ${p.colorCarta}, ${p.colorCarta}cc)`;
      carta.setAttribute("aria-label", `Ver la carta de ${p.nombre}`);
    } else {
      carta.setAttribute("aria-label", "Carta misteriosa, tocá para intentar desbloquearla");
    }
    carta.innerHTML = `
      <span class="ilustracion">${svgIcono(p.icono, !desbloqueada)}</span>
      <span class="nombre">${desbloqueada ? p.nombre : "???"}</span>
      <span class="chip-mito">${NOMBRE_MITO[p.mitologia] || p.mitologia}</span>
      ${desbloqueada ? chipTier(p) : ""}`;
    carta.addEventListener("click", () => {
      if (estaDesbloqueada(p.id)) abrirDetalle(p.id);
      else abrirPregunta(p.id);
    });
    galeria.appendChild(carta);
  }

  renderContador();
}

/* ---------- Detalle ---------- */

function abrirDetalle(id, recienRevelada = false) {
  const p = porId(id);
  if (!p) return;

  const detalle = document.getElementById("detalle");
  const cartaDetalle = document.getElementById("detalle-carta");
  cartaDetalle.style.background =
    `linear-gradient(165deg, rgba(255,255,255,.10), rgba(0,0,0,.30)), linear-gradient(${p.colorCarta}, ${p.colorCarta})`;

  const barras = ATRIBUTOS.map(a => `
    <div class="atributo">
      <span class="icono-attr" title="${a.nombre}">${a.icono}</span>
      <div class="barra" role="img" aria-label="${a.nombre}: ${p.atributos[a.clave]} de 10">
        <span style="width:${p.atributos[a.clave] * 10}%"></span>
      </div>
    </div>`).join("");

  document.getElementById("detalle-contenido").innerHTML = `
    <div class="detalle-ilustracion">${svgIcono(p.icono)}</div>
    <h2 id="detalle-nombre">${p.nombre}</h2>
    <p class="detalle-titulo">${p.titulo}</p>
    <span class="detalle-chip">${NOMBRE_MITO[p.mitologia] || p.mitologia}</span>
    ${chipTier(p)}
    <div class="dones">${p.dones.map(d => `<span class="don">${d}</span>`).join("")}</div>
    <div class="atributos">${barras}</div>
    <div class="bloque-texto">
      <h3>📜 Su historia</h3>
      <p>${p.historia}</p>
    </div>
    <div class="bloque-texto bloque-porque">
      <h3>💡 ¿Por qué?</h3>
      <p>${p.porque}</p>
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

/* ---------- Desbloqueo por pregunta ---------- */

function abrirPregunta(idVelada) {
  const conPregunta = personajes.filter(p => estaDesbloqueada(p.id) && p.pregunta);
  if (conPregunta.length === 0) {
    // Sin cartas con pregunta no hay desafío posible: se desbloquea directo.
    revelarCarta(idVelada);
    return;
  }

  cartaPendiente = idVelada;
  const elegido = alAzar(conPregunta);
  preguntaActual = {
    personajeId: elegido.id,
    opciones: mezclar(elegido.pregunta.opciones.map((texto, i) => ({
      texto,
      esCorrecta: i === elegido.pregunta.correcta
    })))
  };

  const contenido = document.getElementById("pregunta-contenido");
  contenido.innerHTML = `
    <p class="pregunta-intro">Para desbloquear esta carta, respondé una pregunta sobre
      <strong>${elegido.nombre}</strong>, que ya está en tu colección:</p>
    <p class="pregunta-texto">${elegido.pregunta.texto}</p>
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
  if (carta) carta.classList.add("recien-revelada");
  setTimeout(() => abrirDetalle(id, true), 650);
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
