/* El Mapa del Héroe — trazar el recorrido geográfico real de un héroe para
   encender capítulos (olas_y_fuentes_de_capitulos.md §4.1). A diferencia de
   El Cielo, este módulo enseña geografía, no la evalúa: la próxima parada
   siempre está resaltada (modo guiado), sin señuelos ni penalidad por no
   saber. Usa el núcleo compartido de nucleo.js (estado, personajes, audio)
   y el motor de trazado genérico de motor-trazado.js; los datos propios
   del módulo viven en viajes.json. */

let catalogo = [];
let idx = 0;
let fase = "trazando"; // trazando | ceremonia | capitulo | completada
let tokenSecuencia = 0;
let ultimaParadaTocada = -1;

/* Modo guiado: la próxima parada se resalta desde el arranque, sin
   necesidad de errar primero (a diferencia de El Cielo). */
const motor = crearMotorTrazado({ pistaPorDefecto: true, alCambiar: () => render() });

function actual() {
  return catalogo[idx];
}

/* ---------- Doble función: descubre o enciende un capítulo adicional ---------- */

function encenderConSuBase(personajeId, capituloId) {
  if (!estaDesbloqueada(personajeId)) desbloquear(personajeId);
  encenderCapitulo(personajeId, capituloId);
}

function completarViaje(viaje) {
  const mapa = estado.mapa || (estado.mapa = { completados: [] });
  if (!Array.isArray(mapa.completados)) mapa.completados = [];
  if (!mapa.completados.includes(viaje.id)) mapa.completados.push(viaje.id);

  encenderConSuBase(viaje.personajeAsociado, viaje.capituloQueEnciende);

  guardarEstado();
}

function completados() {
  return (estado.mapa && Array.isArray(estado.mapa.completados)) ? estado.mapa.completados : [];
}

/* ---------- Interacción ---------- */

function tocarParada(i) {
  if (fase !== "trazando") return;
  const v = actual();
  const resultado = motor.tocarPunto(i, v.paradas.length);
  if (resultado.avanzo) {
    ultimaParadaTocada = i;
    sonar("estrella", motor.paso);
    if (resultado.completo) ceremonia(v);
    else render();
  }
  // No hay señuelos ni tap fuera de orden penalizado visualmente más allá
  // de simplemente no avanzar: el modo guiado ya marca cuál sigue.
}

function ceremonia(v) {
  fase = "ceremonia";
  render();
  vibrar([30, 50, 30]);
  const token = ++tokenSecuencia;
  setTimeout(() => { if (token === tokenSecuencia) sonar("fanfarria"); }, 250);
  setTimeout(() => {
    if (token !== tokenSecuencia) return;
    sonar("sello");
    fase = "capitulo";
    completarViaje(v);
    render();
  }, 1900);
}

function elegir(id) {
  tokenSecuencia++;
  const i = catalogo.findIndex(v => v.id === id);
  if (i === -1) return;
  idx = i;
  const v = actual();
  const hecho = completados().includes(v.id);
  if (hecho) motor.marcarCompleto(v.paradas.length);
  else motor.reiniciar();
  ultimaParadaTocada = hecho ? v.paradas.length - 1 : -1;
  fase = hecho ? "completada" : "trazando";
  render();
}

function reiniciar() {
  tokenSecuencia++;
  motor.reiniciar();
  ultimaParadaTocada = -1;
  fase = "trazando";
  render();
}

function cerrarHoja() {
  tokenSecuencia++;
  fase = "completada";
  render();
}

/* ---------- Dibujo del mapa ---------- */

const TEMA_MAPA = {
  colorTrazoCompleto: "#9c3b28", colorTrazoParcial: "rgba(156,59,40,.85)",
  colorPunto: "#9c3b28", colorPuntoInactivo: "#b98b52", colorError: "#c0532f",
  colorHalo: "rgba(156,59,40,.18)", colorOnda: "rgba(156,59,40,.75)",
  colorPista: "#c58a2e"
};

function puntosDe(v) {
  return v.paradas.map(p => [p.x, p.y]);
}

function renderMapa() {
  const v = actual();
  const completo = fase !== "trazando";

  renderTrazado({
    grupoId: "mapa-dinamico",
    puntos: puntosDe(v),
    decoys: [],
    paso: motor.paso,
    completo,
    errorKey: motor.errorKey,
    conPista: fase === "trazando" && motor.conPista(),
    etiquetaPunto: (i, total) => `Parada ${i + 1} de ${total}: ${v.paradas[i].nombre}`,
    onTocarPunto: tocarParada,
    onTocarDecoy: () => {},
    tema: TEMA_MAPA
  });
}

/* ---------- Texto e instrucciones ---------- */

function textoInstruccion() {
  const v = actual();
  const paso = motor.paso;

  if (fase === "ceremonia") return `¡El viaje de ${v.nombre.replace(/^(La |El |De |Los )/, "")} está completo! 🗺️`;
  if (fase === "capitulo") return "";
  if (fase === "completada") return `${v.nombre} recorrido ✓ · Elegí otro viaje`;
  if (paso === 0) return `Empezá por la parada que brilla y seguí el camino de ${personajeDelViaje(v).nombre}`;
  if (paso > 0 && paso < v.paradas.length) return `Seguí el camino · ${paso} de ${v.paradas.length} paradas`;
  return "";
}

function personajeDelViaje(v) {
  return porId(v.personajeAsociado);
}

/* ---------- Panel de la última parada tocada ---------- */

function renderParadaActual() {
  const panel = document.getElementById("mapa-nombre-viaje");
  const v = actual();
  const mostrar = fase === "trazando" && ultimaParadaTocada >= 0;

  if (!mostrar) { panel.classList.add("oculto"); return; }

  const p = v.paradas[ultimaParadaTocada];
  document.getElementById("mapa-nombre-viaje-texto").textContent = p.nombre;
  document.getElementById("mapa-sub-viaje").textContent = p.contexto;
  panel.classList.remove("oculto");
}

/* ---------- Catálogo ---------- */

function renderCatalogo() {
  const cont = document.getElementById("mapa-catalogo");
  const hechos = completados();
  cont.innerHTML = "";
  catalogo.forEach(v => {
    const boton = document.createElement("button");
    const activo = v.id === actual().id;
    const hecho = hechos.includes(v.id);
    boton.className = "mapa-chip" + (activo ? " activo" : "") + (hecho ? " hecho" : "");
    boton.textContent = `🗺️ ${v.nombre}${hecho ? " ✓" : ""}`;
    boton.setAttribute("aria-pressed", String(activo));
    boton.addEventListener("click", () => elegir(v.id));
    cont.appendChild(boton);
  });
}

/* ---------- Hoja de capítulo revelado ----------
   Misma regla que El Cielo: si el capítulo todavía es borrador, la
   ceremonia se siente igual de especial pero sin mostrar el texto sin
   revisar (capituloListoParaMostrar, nucleo.js). */

function renderHoja() {
  const hoja = document.getElementById("mapa-hoja");
  if (fase !== "capitulo") { hoja.classList.add("oculto"); hoja.innerHTML = ""; return; }

  const v = actual();
  const personaje = porId(v.personajeAsociado);
  const capitulo = personaje && capitulosDe(personaje).find(x => x.id === v.capituloQueEnciende);
  if (!personaje || !capitulo) { hoja.classList.add("oculto"); return; }

  const listo = capituloListoParaMostrar(capitulo, true);

  hoja.innerHTML = `
    <div class="mapa-hoja-agarre"></div>
    <div class="mapa-hoja-encabezado">
      <span class="mapa-hoja-badge">🗺️ ${listo ? `Nuevo capítulo: ${capitulo.titulo}` : `¡Encendiste algo de ${personaje.nombre}!`}</span>
      <span class="mapa-hoja-modulo">🧭 Encendido en El Mapa del Héroe</span>
    </div>
    <div class="mapa-hoja-cuerpo">
      ${listo ? `
        <div class="mapa-hoja-titulo-fila">
          <span class="mapa-hoja-numero">✦</span>
          <strong>${capitulo.titulo} · <span class="mapa-hoja-personaje">${personaje.nombre}</span></strong>
        </div>
        <p class="mapa-hoja-texto">${capitulo.texto}</p>
        <div class="mapa-hoja-porque">
          <strong>💡 ¿Por qué?</strong>
          <p>${capitulo.porque}</p>
        </div>
      ` : `
        <p class="mapa-hoja-texto">Esta historia todavía se está terminando de escribir. En cuanto esté lista, la vas a poder leer completa en tu colección.</p>
      `}
    </div>
    <div class="mapa-hoja-botones">
      <a class="mapa-boton-primario" href="coleccion.html?ver=${encodeURIComponent(personaje.id)}">Ver la carta de ${personaje.nombre}</a>
      <button class="mapa-boton-secundario" id="mapa-boton-seguir">Seguir explorando</button>
    </div>`;

  hoja.classList.remove("oculto");
  document.getElementById("mapa-boton-seguir").addEventListener("click", cerrarHoja);
}

/* ---------- Render general ---------- */

function render() {
  const v = actual();

  document.getElementById("mapa-contador").textContent = `${completados().length} de ${catalogo.length} 🗺️`;
  document.getElementById("mapa-instruccion").textContent = textoInstruccion();

  renderParadaActual();
  renderCatalogo();
  renderMapa();
  renderHoja();
}

/* ---------- Arranque ---------- */

async function iniciar() {
  let publicados = [];
  try {
    await cargarPersonajes();
    const respuesta = await fetch("viajes.json");
    const todos = await respuesta.json();
    publicados = todos.filter(v => v.estado === "publicado");
  } catch (e) {
    document.getElementById("mapa-vacio").textContent =
      "No pude cargar el mapa. Si abriste el archivo directo, probá servirlo con un servidor local (ver README).";
    document.getElementById("mapa-vacio").classList.remove("oculto");
    return;
  }

  cargarEstado();

  // Igual que El Cielo: solo se ofrecen viajes de héroes que ya están en
  // la colección. El Mapa enciende capítulos adicionales, no es una vía
  // de descubrimiento.
  catalogo = publicados.filter(v => estaDesbloqueada(v.personajeAsociado));

  if (catalogo.length === 0) {
    document.getElementById("mapa-vacio").classList.remove("oculto");
    document.getElementById("mapa-contador").classList.add("oculto");
    return;
  }

  document.getElementById("mapa-area").classList.remove("oculto");
  document.getElementById("mapa-catalogo").classList.remove("oculto");
  montarDeslizador(document.getElementById("mapa-catalogo"));

  document.getElementById("boton-reiniciar-mapa").addEventListener("click", reiniciar);

  idx = 0;
  const parametros = new URLSearchParams(location.search);
  const pedido = parametros.get("viaje");
  if (pedido) {
    const i = catalogo.findIndex(v => v.id === pedido);
    if (i !== -1) idx = i;
  }
  const hecho = completados().includes(actual().id);
  if (hecho) motor.marcarCompleto(actual().paradas.length);
  ultimaParadaTocada = hecho ? actual().paradas.length - 1 : -1;
  fase = hecho ? "completada" : "trazando";
  render();

  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
}

iniciar();
