/* El Oráculo de Delfos — descubrimiento de cartas, dos modos (spec_funcional §3).
   Fácil (por defecto): una pista y un tap sobre una grilla chica de
   candidatos, casi regalado — el mazo tiene que crecer rápido. Difícil
   (opcional): 3 pistas secuenciales con feedback paramétrico tipo Mastermind
   entre intentos; resolverlo sin fallar da la versión especial del capítulo
   base. Sin límite diario (decisión de Willy, julio 2026): se puede abrir
   más de una carta por sesión en cualquiera de los dos modos. */

const ATRIBUTOS_ORACULO = [
  { clave: "fuerza",    icono: "⚔️", nombre: "Fuerza" },
  { clave: "astucia",   icono: "🧠", nombre: "Astucia" },
  { clave: "valentia",  icono: "🦁", nombre: "Valentía" },
  { clave: "magia",     icono: "✨", nombre: "Magia" },
  { clave: "liderazgo", icono: "👑", nombre: "Liderazgo" },
  { clave: "bondad",    icono: "❤️", nombre: "Bondad" }
];
const NOMBRE_MITO_ORACULO = { griega: "🏛️ Griega", nordica: "⚡ Nórdica", romana: "🦅 Romana" };

let modo = "facil";

// ---- modo fácil ----
let secretoFacil = null;
let candidatosFacil = [];
let erroresFacil = 0;

// ---- modo difícil ----
let secretoDificil = null;
let pistasReveladasDificil = 1;
let erroresDificil = 0;
let intentosDificil = [];
let busquedaDificil = "";

// ---- estado compartido de la ceremonia de revelación ----
let ultimoResultado = null; // { id, sinFallar } — usado por la pantalla de revelación

function candidatosSinDescubrir() {
  return personajes.filter(p => !estaDesbloqueada(p.id));
}

/* ---------- Niebla del Oráculo (presentación de la carta) ---------- */

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
      <span class="chip-mito">${NOMBRE_MITO_ORACULO[p.mitologia] || p.mitologia}</span>
    </div>`;
}

/* Revela un personaje y muestra la ceremonia. `sinFallar` (solo modo difícil)
   agrega la versión especial del capítulo base si existe (doc de olas §2:
   "oraculo:dificil"). Los vínculos y sets que se enciendan de yapa se cuentan
   después, en un toast — es "el momento que enseña la mecánica sin
   explicarla" (doc de olas §3.1). */
function revelar(id, sinFallar) {
  const resultado = desbloquear(id);
  sonar("arpegio");
  vibrar([30, 50, 30]);

  if (sinFallar) {
    const p = porId(id);
    const bonus = p && capitulosDe(p).find(c => c.fuente === "oraculo:dificil");
    if (bonus) encenderCapitulo(id, bonus.id);
  }

  const p = porId(id);
  const main = document.getElementById("oraculo-main");
  main.innerHTML = `
    <div class="oraculo-escena estado-revelada">
      ${nieblaDispersaHTML()}
      <div class="oraculo-toast">✨ ¡Apareció ${p.nombre}!${sinFallar ? " · Sin fallar ni una vez 🌟" : ""}</div>
      <div class="oraculo-carta oraculo-carta--revelada">${caraOraculoHTML(p)}</div>
      <div class="oraculo-acciones">
        <a class="boton-principal" href="coleccion.html?ver=${encodeURIComponent(id)}">Ver su carta</a>
        <button class="boton-secundario" id="oraculo-otra">Abrir otra</button>
      </div>
    </div>`;
  document.getElementById("oraculo-otra").addEventListener("click", () => {
    if (modo === "facil") iniciarFacil(); else iniciarDificil();
  });
  activarIcono(main.querySelector(".ilustracion"), p);

  setTimeout(() => {
    if (resultado.vinculos.length) {
      const v = resultado.vinculos[0];
      mostrarToast(`✨ Eso encendió un capítulo en ${porId(v.personajeId) ? porId(v.personajeId).nombre : v.personajeId}`);
    }
    if (resultado.setsNuevos.length) {
      setTimeout(() => {
        const s = setPorId(resultado.setsNuevos[0]);
        if (s) mostrarToast(`🏆 ¡Completaste el set "${s.nombre}"! Mirá la vitrina en tu colección.`);
      }, resultado.vinculos.length ? 2600 : 0);
    }
  }, 1900);
}

function mostrarToast(texto) {
  const toast = document.createElement("div");
  toast.className = "toast-aparicion";
  toast.textContent = texto;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3400);
}

/* ---------- Modo fácil ---------- */

function pistaFacilDe(p) {
  if (Array.isArray(p.pistas_deduccion) && p.pistas_deduccion[2]) return p.pistas_deduccion[2];
  return `Un héroe o dios de mitología ${p.mitologia === "griega" ? "griega" : p.mitologia === "nordica" ? "nórdica" : "romana"}, con dones como «${(p.dones || [])[0] || "algo especial"}».`;
}

function iniciarFacil() {
  const sinDescubrir = candidatosSinDescubrir();
  if (!sinDescubrir.length) {
    document.getElementById("oraculo-main").innerHTML = `
      <p class="oraculo-vacio">✨ ¡Ya descubriste a todos los héroes! Volvé cuando Willy sume alguno nuevo.</p>`;
    return;
  }
  secretoFacil = alAzar(sinDescubrir).id;
  erroresFacil = 0;
  const decoys = mezclar(sinDescubrir.filter(p => p.id !== secretoFacil)).slice(0, Math.min(4, sinDescubrir.length - 1));
  candidatosFacil = mezclar([secretoFacil, ...decoys.map(p => p.id)]);
  renderFacil();
}

function renderFacil() {
  const p = porId(secretoFacil);
  const main = document.getElementById("oraculo-main");
  main.innerHTML = `
    <div class="oraculo-pista-caja">
      <span class="oraculo-pista-etiqueta">✨ La pista de hoy</span>
      <p class="oraculo-pista-texto">${pistaFacilDe(p)}</p>
    </div>
    <p class="oraculo-instruccion" id="oraculo-feedback-facil" aria-live="polite">Tocá quién creés que es</p>
    <div class="oraculo-grilla-facil" id="oraculo-grilla-facil"></div>`;

  const grilla = document.getElementById("oraculo-grilla-facil");
  candidatosFacil.forEach(id => {
    const cand = porId(id);
    const boton = document.createElement("button");
    boton.className = "oraculo-candidato";
    boton.textContent = cand.nombre;
    boton.addEventListener("click", () => onTapFacil(id, boton));
    grilla.appendChild(boton);
  });
}

function onTapFacil(id, boton) {
  if (id === secretoFacil) {
    revelar(id, false);
    return;
  }
  erroresFacil++;
  boton.classList.add("oraculo-candidato--error");
  sonar("error");
  document.getElementById("oraculo-feedback-facil").textContent = "Mmm, esa no es… ¡probá con otra!";
  setTimeout(() => boton.classList.remove("oraculo-candidato--error"), 500);
}

/* ---------- Modo difícil ---------- */

function pistasDe(p) {
  if (Array.isArray(p.pistas_deduccion) && p.pistas_deduccion.length === 3) return p.pistas_deduccion;
  // Sin pistas escritas todavía: el desafío sigue jugable solo con el
  // feedback paramétrico de atributos (fallback genérico, nunca romper).
  return [
    `Un héroe o dios de mitología ${p.mitologia}.`,
    "Sus atributos van a aparecer al comparar cada intento.",
    `Uno de sus dones es «${(p.dones || [])[0] || "un don propio"}».`
  ];
}

function iniciarDificil() {
  const sinDescubrir = candidatosSinDescubrir();
  if (!sinDescubrir.length) {
    document.getElementById("oraculo-main").innerHTML = `
      <p class="oraculo-vacio">✨ ¡Ya descubriste a todos los héroes! Volvé cuando Willy sume alguno nuevo.</p>`;
    return;
  }
  secretoDificil = alAzar(sinDescubrir).id;
  pistasReveladasDificil = 1;
  erroresDificil = 0;
  intentosDificil = [];
  busquedaDificil = "";
  renderDificil();
}

function flechaComparacion(valorSecreto, valorIntento) {
  if (valorSecreto === valorIntento) return { simbolo: "✓", clase: "igual" };
  if (valorSecreto > valorIntento) return { simbolo: "▲", clase: "mayor" };
  return { simbolo: "▼", clase: "menor" };
}

function feedbackParametrico(intento) {
  const secreto = porId(secretoDificil);
  const mismaLinaje = intento.mitologia === secreto.mitologia;
  const attrs = ATRIBUTOS_ORACULO.map(a => {
    const f = flechaComparacion(secreto.atributos[a.clave], intento.atributos[a.clave]);
    return `<span class="oraculo-feedback-attr oraculo-feedback-attr--${f.clase}" title="${a.nombre}">${a.icono}${f.simbolo}</span>`;
  }).join("");
  return `
    <div class="oraculo-intento">
      <div class="oraculo-intento-nombre">${mismaLinaje ? "🏛️" : "🌐"} ${intento.nombre}</div>
      <div class="oraculo-intento-attrs">${attrs}</div>
    </div>`;
}

function renderDificil() {
  const sinDescubrir = candidatosSinDescubrir();
  const main = document.getElementById("oraculo-main");
  const pistas = pistasDe(porId(secretoDificil)).slice(0, pistasReveladasDificil);

  const filtrados = sinDescubrir.filter(p =>
    !busquedaDificil || normalizar(p.nombre).includes(normalizar(busquedaDificil))
  ).slice(0, 40);

  main.innerHTML = `
    <div class="oraculo-pista-caja oraculo-pista-caja--dificil">
      <span class="oraculo-pista-etiqueta">🧩 Pistas de Delfos</span>
      ${pistas.map((texto, i) => `<p class="oraculo-pista-texto">${i + 1}. ${texto}</p>`).join("")}
      ${pistasReveladasDificil < 3 ? `<p class="oraculo-pista-siguiente">Errá una vez más para desbloquear la próxima pista.</p>` : ""}
    </div>

    ${intentosDificil.length ? `<div class="oraculo-intentos">${intentosDificil.map(feedbackParametrico).join("")}</div>` : ""}

    <input type="search" id="oraculo-buscador-dificil" class="buscador oraculo-buscador" placeholder="Escribí un nombre para buscar..." value="${busquedaDificil}">
    <div class="oraculo-lista-dificil" id="oraculo-lista-dificil">
      ${filtrados.map(p => `<button class="oraculo-candidato-fila" data-id="${p.id}">${p.nombre}</button>`).join("") || `<p class="oraculo-vacio">Ningún héroe coincide con esa búsqueda.</p>`}
    </div>`;

  document.getElementById("oraculo-buscador-dificil").addEventListener("input", e => {
    busquedaDificil = e.target.value;
    renderDificil();
    document.getElementById("oraculo-buscador-dificil").focus();
  });
  main.querySelectorAll(".oraculo-candidato-fila").forEach(boton => {
    boton.addEventListener("click", () => onGuessDificil(boton.dataset.id));
  });
}

function onGuessDificil(id) {
  if (id === secretoDificil) {
    revelar(id, erroresDificil === 0);
    return;
  }
  sonar("error");
  erroresDificil++;
  intentosDificil.unshift(porId(id));
  if (erroresDificil <= 2) pistasReveladasDificil = erroresDificil + 1;
  busquedaDificil = "";
  renderDificil();
}

/* ---------- Cambio de modo ---------- */

function cambiarModo(nuevo) {
  modo = nuevo;
  document.getElementById("toggle-facil").classList.toggle("activo", modo === "facil");
  document.getElementById("toggle-dificil").classList.toggle("activo", modo === "dificil");
  document.getElementById("oraculo-subtitulo").textContent = modo === "facil"
    ? "Consultá para descubrir un héroe nuevo"
    : "El rompecabezas completo — sin fallar da una versión especial";
  if (modo === "facil") iniciarFacil(); else iniciarDificil();
}

/* ---------- Arranque ---------- */

async function iniciar() {
  try {
    await cargarPersonajes();
  } catch (e) {
    document.getElementById("oraculo-main").innerHTML =
      `<p class="oraculo-vacio">No pude cargar las cartas. Si abriste el archivo directo,
       probá servirlo con un servidor local (ver README).</p>`;
    return;
  }

  cargarEstado();
  reconciliarVinculos();
  inyectarKeyframesIconos();

  // Dificultad por partida (CLAUDE.md): en partida fácil el Oráculo queda
  // fijo en modo fácil y en partida difícil queda fijo en difícil — sin
  // toggle. Solo en normal se elige el modo consulta por consulta, como
  // hasta ahora. Fallar en difícil nunca bloquea el descubrimiento: solo
  // se pierde la versión especial del capítulo (regla de oro intacta).
  const dificultadPartida = dificultadActual();
  if (dificultadPartida === "normal") {
    document.getElementById("toggle-facil").addEventListener("click", () => cambiarModo("facil"));
    document.getElementById("toggle-dificil").addEventListener("click", () => cambiarModo("dificil"));
    const modoInicial = new URLSearchParams(location.search).get("modo") === "dificil" ? "dificil" : "facil";
    cambiarModo(modoInicial);
  } else {
    document.querySelector(".oraculo-toggle").classList.add("oculto");
    cambiarModo(dificultadPartida);
  }

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
  if (!historiaCompleta(p)) iconoBase(svgIco);
  animarIcono(svgIco, p.icono);
}
