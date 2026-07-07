/* El Cielo de los Mitos — trazar constelaciones para descubrir personajes
   y encender capítulos (spec_funcional §4, Handoff "El Cielo de los Mitos").
   Usa el núcleo compartido de nucleo.js (estado, personajes, audio); los
   datos propios del módulo viven en constelaciones.json. */

const NS = "http://www.w3.org/2000/svg";

const DECOY_POOL = [
  [10, 22], [88, 16], [10, 52], [90, 40], [8, 80], [92, 78], [52, 8], [22, 88],
  [70, 10], [78, 88], [46, 84], [60, 16], [16, 14], [84, 64], [30, 78], [72, 34]
];

let catalogo = [];
let idx = 0;
let paso = 0;
let fase = "trazando"; // trazando | ceremonia | capitulo | completada
let errorKey = null;
let errores = 0;
let pistaTemporal = false;
let tokenSecuencia = 0;

/* Namespace propio dentro del estado compartido, inicializado en forma
   perezosa: nucleo.js no necesita saber nada de constelaciones. */
function estadoCielo() {
  if (!estado.cielo || !Array.isArray(estado.cielo.completadas)) estado.cielo = { completadas: [] };
  return estado.cielo;
}

function actual() {
  return catalogo[idx];
}

function decoysDe(c) {
  const cant = c.dificultad === 1 ? 2 : c.dificultad === 2 ? 4 : 7;
  return DECOY_POOL.filter(d => c.estrellas.every(p => Math.hypot(p[0] - d[0], p[1] - d[1]) >= 10)).slice(0, cant);
}

function conPista(c) {
  return c.dificultad === 1 || (c.dificultad === 2 && paso === 0) || pistaTemporal;
}

/* ---------- Doble función: descubre o enciende un capítulo adicional ---------- */

function encenderConSuBase(personajeId, capituloId) {
  if (!estaDesbloqueada(personajeId)) desbloquear(personajeId);
  encenderCapitulo(personajeId, capituloId);
}

function completarConstelacion(constelacion) {
  const cielo = estadoCielo();
  if (!cielo.completadas.includes(constelacion.id)) cielo.completadas.push(constelacion.id);

  encenderConSuBase(constelacion.personajeId, constelacion.capituloId);

  if (Array.isArray(constelacion.tambienEnciende)) {
    for (const t of constelacion.tambienEnciende) {
      const p = porId(t.personajeId);
      if (!p) continue;
      const cap = capitulosDe(p).find(c => c.fuente === "cielo:" + constelacion.id);
      if (cap) encenderConSuBase(t.personajeId, cap.id);
    }
  }

  guardarEstado();
}

/* ---------- Interacción ---------- */

function marcarError(clave) {
  sonar("error");
  errores++;
  if (errores >= 3) pistaTemporal = true; // regalo de pista, sin castigo
  errorKey = clave;
  render();
  const token = tokenSecuencia;
  setTimeout(() => {
    if (token === tokenSecuencia && errorKey === clave) { errorKey = null; render(); }
  }, 700);
}

function tocarEstrella(i) {
  if (fase !== "trazando") return;
  const c = actual();
  if (i === paso) {
    paso++;
    sonar("estrella", paso);
    if (paso === c.estrellas.length) {
      ceremonia(c);
    } else {
      errores = 0;
      pistaTemporal = false;
      render();
    }
  } else if (i > paso) {
    marcarError("e" + i);
  }
}

function ceremonia(c) {
  fase = "ceremonia";
  errorKey = null;
  pistaTemporal = false;
  render();
  vibrar([30, 50, 30]);
  const token = ++tokenSecuencia;
  setTimeout(() => { if (token === tokenSecuencia) sonar("fanfarria"); }, 250);
  setTimeout(() => {
    if (token !== tokenSecuencia) return;
    sonar("sello");
    fase = "capitulo";
    completarConstelacion(c);
    render();
  }, 1900);
}

function elegir(id) {
  tokenSecuencia++;
  const i = catalogo.findIndex(c => c.id === id);
  if (i === -1) return;
  idx = i;
  const c = actual();
  const hecha = estadoCielo().completadas.includes(c.id);
  paso = hecha ? c.estrellas.length : 0;
  fase = hecha ? "completada" : "trazando";
  errorKey = null;
  errores = 0;
  pistaTemporal = false;
  render();
}

function reiniciar() {
  tokenSecuencia++;
  paso = 0;
  fase = "trazando";
  errorKey = null;
  errores = 0;
  pistaTemporal = false;
  render();
}

function cerrarHoja() {
  tokenSecuencia++;
  fase = "completada";
  render();
}

/* ---------- Dibujo del cielo ---------- */

function crearEl(tag, attrs) {
  const el = document.createElementNS(NS, tag);
  for (const clave in attrs) el.setAttribute(clave, attrs[clave]);
  return el;
}

function renderCielo() {
  const grupo = document.getElementById("cielo-dinamico");
  grupo.innerHTML = "";
  const c = actual();
  const PTS = c.estrellas;
  const completa = fase !== "trazando";

  if (completa) {
    const xs = PTS.map(p => p[0]), ys = PTS.map(p => p[1]);
    const cx = (Math.min(...xs) + Math.max(...xs)) / 2;
    const cy = (Math.min(...ys) + Math.max(...ys)) / 2;
    const rx = (Math.max(...xs) - Math.min(...xs)) / 2 + 10;
    const ry = (Math.max(...ys) - Math.min(...ys)) / 2 + 10;

    const elipse = crearEl("ellipse", { cx, cy, rx, ry, fill: "rgba(255,216,103,.14)" });
    elipse.style.filter = "blur(6px)";
    elipse.style.animation = "aparece .8s ease-out both";
    grupo.appendChild(elipse);

    grupo.appendChild(crearEl("circle", {
      cx, cy, r: Math.max(rx, ry), fill: "none",
      stroke: "rgba(255,216,103,.8)", "stroke-width": .7, class: "onda-final"
    }));
  }

  for (let i = 1; i < Math.min(paso, PTS.length); i++) {
    const linea = crearEl("line", {
      x1: PTS[i - 1][0], y1: PTS[i - 1][1], x2: PTS[i][0], y2: PTS[i][1],
      stroke: completa ? "#ffd867" : "rgba(255,216,103,.85)",
      "stroke-width": completa ? 1 : .7,
      "stroke-linecap": "round",
      pathLength: "1",
      class: "linea-trazada"
    });
    if (completa) linea.style.filter = "drop-shadow(0 0 2px rgba(255,216,103,.9))";
    grupo.appendChild(linea);
  }

  if (fase === "trazando" && conPista(c) && paso < PTS.length) {
    const [hx, hy] = PTS[paso];
    grupo.appendChild(crearEl("circle", {
      cx: hx, cy: hy, r: 5, fill: "none",
      stroke: "rgba(255,233,168,.9)", "stroke-width": .6, class: "halo-guia"
    }));
  }

  decoysDe(c).forEach((d, j) => {
    const esError = errorKey === "d" + j;
    const decoy = crearEl("circle", {
      cx: d[0], cy: d[1], r: c.dificultad === 3 ? 1.4 : 1.1,
      fill: esError ? "#ff9e8a" : "#fff",
      opacity: c.dificultad === 3 ? .9 : .65
    });
    decoy.style.transformBox = "fill-box";
    decoy.style.transformOrigin = "center";
    decoy.style.animation = esError ? "sacudir-suave .4s" : `brillo-estrella 4.4s ease-in-out ${j * .7}s infinite backwards`;
    grupo.appendChild(decoy);

    const tapDecoy = crearEl("circle", { cx: d[0], cy: d[1], r: 6, fill: "rgba(0,0,0,0)" });
    tapDecoy.style.cursor = "pointer";
    tapDecoy.addEventListener("click", () => { if (fase === "trazando") marcarError("d" + j); });
    grupo.appendChild(tapDecoy);
  });

  PTS.forEach((p, i) => {
    const tocada = i < paso;
    const esError = errorKey === "e" + i;
    const base = i === c.brillante ? 2 : (i === 0 ? 1.8 : 1.6);

    if (tocada) {
      const glow = crearEl("circle", { cx: p[0], cy: p[1], r: 4, fill: "rgba(255,216,103,.22)" });
      if (completa) { glow.classList.add("destello-final"); glow.style.animationDelay = (i * .3) + "s"; }
      grupo.appendChild(glow);
    }

    const estrella = crearEl("circle", {
      cx: p[0], cy: p[1], r: tocada ? base + .4 : base,
      fill: tocada ? "#ffd867" : (esError ? "#ff9e8a" : "#fff")
    });
    estrella.style.transition = "fill .25s, r .25s";
    estrella.style.transformBox = "fill-box";
    estrella.style.transformOrigin = "center";
    estrella.style.animation = esError ? "sacudir-suave .4s" : (!tocada ? `brillo-estrella 3.4s ease-in-out ${i * .5}s infinite backwards` : "none");
    grupo.appendChild(estrella);

    const tap = crearEl("circle", { cx: p[0], cy: p[1], r: 7, fill: "rgba(0,0,0,0)" });
    tap.style.cursor = "pointer";
    tap.setAttribute("role", "button");
    tap.setAttribute("aria-label", `Estrella ${i + 1} de ${PTS.length}`);
    tap.addEventListener("click", () => tocarEstrella(i));
    grupo.appendChild(tap);
  });
}

/* ---------- Texto e instrucciones ---------- */

function textoInstruccion() {
  const c = actual();
  const estrellitas = "★".repeat(c.dificultad) + "☆".repeat(3 - c.dificultad);

  let instruccion = c.dificultad === 1
    ? `Tocá la estrella que brilla y uní ${c.nombre} ✨ · ${estrellitas}`
    : c.dificultad === 2
      ? `Empezá por la estrella que brilla y seguí el patrón · ${estrellitas}`
      : `Sin pistas: buscá la estrella más grande y trazá ${c.nombre} · ${estrellitas}`;

  if (errorKey !== null) instruccion = pistaTemporal ? "El cielo te regala una pista ✨" : "Mmm, esa no es… mirá bien el patrón";
  else if (pistaTemporal && fase === "trazando") instruccion = "El cielo te regala una pista ✨";
  else if (fase === "ceremonia") instruccion = `¡${c.nombre} se enciende! ${c.emoji}`;
  else if (fase === "capitulo") instruccion = "";
  else if (fase === "completada") instruccion = `${c.nombre} trazada ✓ · Elegí otra constelación`;
  else if (paso > 0) instruccion = `Seguí el trazo · ${paso} de ${c.estrellas.length} estrellas`;

  return instruccion;
}

/* ---------- Catálogo ---------- */

function renderCatalogo() {
  const cont = document.getElementById("cielo-catalogo");
  const completadas = estadoCielo().completadas;
  cont.innerHTML = "";
  catalogo.forEach(c => {
    const boton = document.createElement("button");
    const activa = c.id === actual().id;
    const hecha = completadas.includes(c.id);
    boton.className = "cielo-chip" + (activa ? " activo" : "") + (hecha ? " hecho" : "");
    boton.textContent = `${c.emoji} ${c.nombre}${hecha ? " ✓" : ""}`;
    boton.setAttribute("aria-pressed", String(activa));
    boton.addEventListener("click", () => elegir(c.id));
    cont.appendChild(boton);
  });
}

/* ---------- Hoja de capítulo revelado ----------
   Si el capítulo todavía es borrador (Willy no lo aprobó), la ceremonia se
   siente igual de especial pero sin mostrar el texto sin revisar: eso vive
   en capituloListoParaMostrar (nucleo.js), la misma regla que usa la
   Colección para no filtrar contenido sin publicar. */

function renderHoja() {
  const hoja = document.getElementById("cielo-hoja");
  if (fase !== "capitulo") { hoja.classList.add("oculto"); hoja.innerHTML = ""; return; }

  const c = actual();
  const personaje = porId(c.personajeId);
  const capitulo = personaje && capitulosDe(personaje).find(x => x.id === c.capituloId);
  if (!personaje || !capitulo) { hoja.classList.add("oculto"); return; }

  const listo = capituloListoParaMostrar(capitulo, true);
  const tambien = Array.isArray(c.tambienEnciende) && c.tambienEnciende.length
    ? c.tambienEnciende.map(t => `También se encendió en la carta de ${porId(t.personajeId) ? porId(t.personajeId).nombre : t.personajeId}: «${t.capituloTitulo}»`).join(" ")
    : "";

  hoja.innerHTML = `
    <div class="cielo-hoja-agarre"></div>
    <div class="cielo-hoja-encabezado">
      <span class="cielo-hoja-badge">✨ ${listo ? `Nuevo capítulo: ${capitulo.titulo}` : `¡Encendiste algo de ${personaje.nombre}!`}</span>
      <span class="cielo-hoja-modulo">🌌 Encendido en El Cielo de los Mitos</span>
    </div>
    <div class="cielo-hoja-cuerpo">
      ${listo ? `
        <div class="cielo-hoja-titulo-fila">
          <span class="cielo-hoja-numero">✦</span>
          <strong>${capitulo.titulo} · <span class="cielo-hoja-personaje">${personaje.nombre}</span></strong>
        </div>
        <p class="cielo-hoja-texto">${capitulo.texto}</p>
        <div class="cielo-hoja-porque">
          <strong>💡 ¿Por qué?</strong>
          <p>${capitulo.porque}</p>
        </div>
      ` : `
        <p class="cielo-hoja-texto">Esta historia todavía se está terminando de escribir. En cuanto esté lista, la vas a poder leer completa en tu colección.</p>
      `}
    </div>
    ${listo && tambien ? `<p class="cielo-hoja-tambien">${tambien}</p>` : ""}
    <div class="cielo-hoja-botones">
      <a class="cielo-boton-primario" href="index.html?ver=${encodeURIComponent(personaje.id)}">Ver la carta de ${personaje.nombre}</a>
      <button class="cielo-boton-secundario" id="cielo-boton-seguir">Seguir mirando el cielo</button>
    </div>`;

  hoja.classList.remove("oculto");
  document.getElementById("cielo-boton-seguir").addEventListener("click", cerrarHoja);
}

/* ---------- Render general ---------- */

function render() {
  const c = actual();
  const completadas = estadoCielo().completadas;

  document.getElementById("cielo-contador").textContent = `${completadas.length} de ${catalogo.length} ✦`;
  document.getElementById("cielo-instruccion").textContent = textoInstruccion();

  const nombreVisible = fase !== "trazando";
  const bloqueNombre = document.getElementById("cielo-nombre-const");
  bloqueNombre.classList.toggle("oculto", !nombreVisible);
  if (nombreVisible) {
    document.getElementById("cielo-nombre-const-texto").textContent = c.nombre.toUpperCase();
    document.getElementById("cielo-sub-const").textContent = c.sub;
  }

  renderCatalogo();
  renderCielo();
  renderHoja();
}

/* ---------- Arranque ---------- */

async function iniciar() {
  try {
    await cargarPersonajes();
    const respuesta = await fetch("constelaciones.json");
    const todas = await respuesta.json();
    catalogo = todas.filter(c => c.estado === "publicado");
  } catch (e) {
    document.getElementById("cielo-vacio").textContent =
      "No pude cargar el cielo. Si abriste el archivo directo, probá servirlo con un servidor local (ver README).";
    document.getElementById("cielo-vacio").classList.remove("oculto");
    return;
  }

  cargarEstado();

  if (catalogo.length === 0) {
    document.getElementById("cielo-vacio").classList.remove("oculto");
    document.getElementById("cielo-contador").classList.add("oculto");
    return;
  }

  document.getElementById("cielo-area").classList.remove("oculto");
  document.getElementById("cielo-catalogo").classList.remove("oculto");

  document.getElementById("boton-reiniciar-cielo").addEventListener("click", reiniciar);

  idx = 0;
  const hecha = estadoCielo().completadas.includes(actual().id);
  paso = hecha ? actual().estrellas.length : 0;
  fase = hecha ? "completada" : "trazando";
  render();

  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
}

iniciar();
