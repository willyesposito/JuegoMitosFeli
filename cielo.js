/* El Cielo de los Mitos — trazar constelaciones para descubrir personajes
   y encender capítulos (spec_funcional §4, Handoff "El Cielo de los Mitos").
   Usa el núcleo compartido de nucleo.js (estado, personajes, audio) y el
   motor de trazado genérico de motor-trazado.js (dibuja y sigue el trazo);
   los datos propios del módulo viven en constelaciones.json. */

const DECOY_POOL = [
  [10, 22], [88, 16], [10, 52], [90, 40], [8, 80], [92, 78], [52, 8], [22, 88],
  [70, 10], [78, 88], [46, 84], [60, 16], [16, 14], [84, 64], [30, 78], [72, 34],
  [8, 15], [24, 15], [40, 15], [56, 15], [72, 15], [88, 15],
  [16, 32], [34, 32], [50, 32], [66, 32], [84, 32],
  [8, 50], [24, 50], [40, 50], [56, 50], [72, 50], [88, 50],
  [16, 68], [34, 68], [50, 68], [66, 68], [84, 68],
  [8, 85], [24, 85], [40, 85], [56, 85], [72, 85], [88, 85]
];

let catalogo = [];
let idx = 0;
let fase = "trazando"; // trazando | ceremonia | capitulo | completada
let tokenSecuencia = 0;

/* El Cielo no regala la pista de entrada — hacía el trazado demasiado
   fácil. Recién se enciende sola después de varios errores seguidos
   (ver crearMotorTrazado, pistaPorDefecto: false). */
const motor = crearMotorTrazado({ pistaPorDefecto: false, umbralErroresParaPista: 3, alCambiar: () => render() });

/* Namespace propio dentro del estado compartido, inicializado en forma
   perezosa: nucleo.js no necesita saber nada de constelaciones. */
function estadoCielo() {
  if (!estado.cielo || !Array.isArray(estado.cielo.completadas)) estado.cielo = { completadas: [] };
  return estado.cielo;
}

function actual() {
  return catalogo[idx];
}

function decoysDeConstelacion(c) {
  const cant = c.dificultad === 1 ? 7 : c.dificultad === 2 ? 10 : 13;
  return decoysDe(c.estrellas, DECOY_POOL, cant);
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

function tocarEstrella(i) {
  if (fase !== "trazando") return;
  const c = actual();
  const resultado = motor.tocarPunto(i, c.estrellas.length);
  if (resultado.avanzo) {
    sonar("estrella", motor.paso);
    if (resultado.completo) ceremonia(c);
    else render();
  } else if (resultado.error) {
    sonar("error");
    render();
  }
}

function tocarDecoy(j) {
  if (fase !== "trazando") return;
  motor.tocarDecoy(j);
  sonar("error");
  render();
}

function ceremonia(c) {
  fase = "ceremonia";
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
  if (hecha) motor.marcarCompleto(c.estrellas.length);
  else motor.reiniciar();
  fase = hecha ? "completada" : "trazando";
  render();
}

function reiniciar() {
  tokenSecuencia++;
  motor.reiniciar();
  fase = "trazando";
  render();
}

function cerrarHoja() {
  tokenSecuencia++;
  fase = "completada";
  render();
}

/* ---------- Dibujo del cielo ---------- */

function renderCielo() {
  const c = actual();
  const completa = fase !== "trazando";

  renderTrazado({
    grupoId: "cielo-dinamico",
    puntos: c.estrellas,
    decoys: decoysDeConstelacion(c),
    paso: motor.paso,
    completo: completa,
    errorKey: motor.errorKey,
    conPista: fase === "trazando" && motor.conPista(),
    puntoBrillante: c.brillante,
    decoyRadio: c.dificultad === 3 ? 1.4 : 1.1,
    decoyOpacidad: c.dificultad === 3 ? .9 : .65,
    etiquetaPunto: (i, total) => `Estrella ${i + 1} de ${total}`,
    onTocarPunto: tocarEstrella,
    onTocarDecoy: tocarDecoy
  });
}

/* ---------- Texto e instrucciones ---------- */

function textoInstruccion() {
  const c = actual();
  const estrellitas = "★".repeat(c.dificultad) + "☆".repeat(3 - c.dificultad);
  const errorKey = motor.errorKey;
  const pistaTemporal = motor.conPista();
  const paso = motor.paso;

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
      <a class="cielo-boton-primario" href="coleccion.html?ver=${encodeURIComponent(personaje.id)}">Ver la carta de ${personaje.nombre}</a>
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
  let publicadas = [];
  try {
    await cargarPersonajes();
    const respuesta = await fetch("constelaciones.json");
    const todas = await respuesta.json();
    publicadas = todas.filter(c => c.estado === "publicado");
  } catch (e) {
    document.getElementById("cielo-vacio").textContent =
      "No pude cargar el cielo. Si abriste el archivo directo, probá servirlo con un servidor local (ver README).";
    document.getElementById("cielo-vacio").classList.remove("oculto");
    return;
  }

  cargarEstado();

  // Solo se ofrecen constelaciones de cartas que ya están en la colección:
  // el Cielo enciende capítulos adicionales, no es una vía de descubrimiento.
  catalogo = publicadas.filter(c => estaDesbloqueada(c.personajeId));

  if (catalogo.length === 0) {
    document.getElementById("cielo-vacio").classList.remove("oculto");
    document.getElementById("cielo-contador").classList.add("oculto");
    return;
  }

  document.getElementById("cielo-area").classList.remove("oculto");
  document.getElementById("cielo-catalogo").classList.remove("oculto");
  montarDeslizador(document.getElementById("cielo-catalogo"));

  document.getElementById("boton-reiniciar-cielo").addEventListener("click", reiniciar);

  idx = 0;
  const hecha = estadoCielo().completadas.includes(actual().id);
  if (hecha) motor.marcarCompleto(actual().estrellas.length);
  fase = hecha ? "completada" : "trazando";
  render();

  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
}

iniciar();
