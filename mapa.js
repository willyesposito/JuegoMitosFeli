/* El Mapa del Héroe — trazar el recorrido geográfico real de un héroe para
   encender capítulos (olas_y_fuentes_de_capitulos.md §4.1). A diferencia de
   El Cielo, este módulo enseña geografía, no la evalúa: la próxima parada
   siempre está resaltada (modo guiado), sin señuelos ni penalidad por no
   saber. Usa el núcleo compartido de nucleo.js (estado, personajes, audio)
   y el motor de trazado genérico de motor-trazado.js; los datos propios
   del módulo viven en viajes.json.

   GEOGRAFÍA REAL (handoff "Mapa real", opción 1d)
   -----------------------------------------------
   Las costas ya no se dibujan a mano: salen de mapa-geo.js (Natural Earth
   1:50m, dominio público, congelado en el repo, sin red en runtime). Cada
   parada de viajes.json tiene su coordenada real `lat`/`lon` y se proyecta
   en Mercator. Los campos `x`/`y` del mapa viejo siguen en el JSON como
   referencia histórica: este módulo ya no los lee.

   La cámara acompaña el trazado: mientras se traza encuadra la parada
   actual y la siguiente (así se ve el detalle local aunque el viaje entero
   cruce medio Mediterráneo), y al completarlo se abre para mostrar el
   recorrido completo. */

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

/* ================================================================
   Proyección y cámara
   ================================================================ */

const GRADOS = Math.PI / 180;

/* Ventana base del mapa: el mundo que recorren los viajes, de las Columnas
   de Hércules al Cáucaso. Con la cámara en reposo (k = 1) esta franja ocupa
   exactamente el ancho del lienzo. */
const VISTA = { lon0: -14, lon1: 47, latCentro: 37.2 };

/* El lienzo trabaja en "unidades": 100 unidades = el ancho del mapa. Así los
   radios y grosores que usa motor-trazado.js (pensados para un viewBox
   0-100) siguen valiendo sin tocar el motor. */
const LIENZO = { alto: 100, escala: 1, origenY: 0 };

const CAMARA_MIN = 1;     // nunca se aleja más que la vista base
const CAMARA_MAX = 26;    // ni se acerca más de ~2,3° de ancho
const SEPARACION_MIN = 9; // unidades entre paradas para que el dedo distinga

let camara = { k: 1, tx: 0, ty: 0 };
let tokenCamara = 0;
let caminoTierra = "";
let caminoGraticula = "";

function mercatorY(lat) {
  return Math.log(Math.tan(Math.PI / 4 + lat * GRADOS / 2));
}

function proyectar(lon, lat) {
  return [
    (lon - VISTA.lon0) * GRADOS * LIENZO.escala,
    LIENZO.origenY - mercatorY(lat) * LIENZO.escala
  ];
}

function enPantalla(lon, lat) {
  const p = proyectar(lon, lat);
  return [p[0] * camara.k + camara.tx, p[1] * camara.k + camara.ty];
}

/* Recalcula el lienzo cuando cambia el tamaño de la pantalla y rearma los
   caminos de costa y retícula (que viven en coordenadas base, sin cámara). */
function medirLienzo() {
  const svg = document.getElementById("mapa-svg");
  const caja = svg.getBoundingClientRect();
  if (!caja.width || !caja.height) return false;

  LIENZO.alto = Math.round(1000 * caja.height / caja.width) / 10;
  LIENZO.escala = 100 / ((VISTA.lon1 - VISTA.lon0) * GRADOS);
  LIENZO.origenY = mercatorY(VISTA.latCentro) * LIENZO.escala + LIENZO.alto / 2;

  svg.setAttribute("viewBox", `0 0 100 ${LIENZO.alto}`);
  document.querySelectorAll("#mapa-svg .mapa-fondo").forEach(rect => {
    rect.setAttribute("width", 100);
    rect.setAttribute("height", LIENZO.alto);
  });

  caminoTierra = GEO_COSTAS.map(anillo => {
    let d = "";
    for (let i = 0; i < anillo.length; i += 2) {
      const [x, y] = proyectar(anillo[i], anillo[i + 1]);
      d += (i === 0 ? "M" : "L") + Math.round(x * 100) / 100 + " " + Math.round(y * 100) / 100;
    }
    return d + "Z";
  }).join("");

  caminoGraticula = "";
  for (let lon = -30; lon <= 60; lon += 5) {
    const a = proyectar(lon, -10), b = proyectar(lon, 70);
    caminoGraticula += `M${a[0]} ${a[1]}L${b[0]} ${b[1]}`;
  }
  for (let lat = -10; lat <= 70; lat += 5) {
    const a = proyectar(-32, lat), b = proyectar(64, lat);
    caminoGraticula += `M${a[0]} ${a[1]}L${b[0]} ${b[1]}`;
  }

  document.getElementById("mapa-tierras").setAttribute("d", caminoTierra);
  document.getElementById("mapa-graticula").setAttribute("d", caminoGraticula);
  document.getElementById("mapa-rosa")
    .setAttribute("transform", `translate(11,${Math.round((LIENZO.alto - 12) * 10) / 10})`);
  return true;
}

/* Encuadre: mientras se traza, la cámara mira la parada actual y la que
   sigue (con la anterior de contexto). Terminado el viaje, se abre y muestra
   el recorrido entero. */
function paradasAEncuadrar(v) {
  if (fase !== "trazando") return v.paradas;
  const desde = Math.max(0, motor.paso - 1);
  const hasta = Math.min(v.paradas.length - 1, motor.paso + 1);
  return v.paradas.slice(desde, hasta + 1);
}

function encuadrar(animado) {
  const v = actual();
  const puntos = paradasAEncuadrar(v).map(p => proyectar(p.lon, p.lat));
  const xs = puntos.map(p => p[0]), ys = puntos.map(p => p[1]);
  const margen = 16;
  // Ancho/alto mínimos: si todas las paradas caen casi en el mismo punto
  // (Rómulo y Remo, por ejemplo) la cámara no se va al infinito.
  const ancho = Math.max(Math.max(...xs) - Math.min(...xs), 6);
  const alto = Math.max(Math.max(...ys) - Math.min(...ys), 6);
  const cx = (Math.min(...xs) + Math.max(...xs)) / 2;
  const cy = (Math.min(...ys) + Math.max(...ys)) / 2;

  const k = Math.max(CAMARA_MIN, Math.min(CAMARA_MAX,
    Math.min((100 - margen) / ancho, (LIENZO.alto - margen) / alto)));
  const objetivo = { k, tx: 50 - k * cx, ty: LIENZO.alto / 2 - k * cy };

  tokenCamara++;
  const svg = document.getElementById("mapa-svg");
  if (!animado || prefiereSinMovimiento()) { camara = objetivo; svg.classList.remove("moviendo"); aplicarCamara(); return; }

  // Mientras la cámara viaja, el trazado se redibuja en cada cuadro: la clase
  // .moviendo apaga las animaciones de línea y halo para que no se reinicien
  // sesenta veces por segundo (ver mapa.css).
  svg.classList.add("moviendo");
  const token = tokenCamara, desde = { ...camara }, t0 = performance.now(), dur = 700;
  requestAnimationFrame(function paso(t) {
    if (token !== tokenCamara) return;
    const u = Math.min(1, (t - t0) / dur);
    const e = u < .5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2;
    camara = {
      k: desde.k + (objetivo.k - desde.k) * e,
      tx: desde.tx + (objetivo.tx - desde.tx) * e,
      ty: desde.ty + (objetivo.ty - desde.ty) * e
    };
    aplicarCamara();
    renderMapa();
    if (u < 1) requestAnimationFrame(paso);
    else { svg.classList.remove("moviendo"); renderMapa(); }
  });
}

function prefiereSinMovimiento() {
  return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function aplicarCamara() {
  document.getElementById("mapa-camara")
    .setAttribute("transform", `translate(${camara.tx},${camara.ty}) scale(${camara.k})`);
  // El grosor de línea se compensa para que la costa no engorde al acercar.
  document.getElementById("mapa-tierras").setAttribute("stroke-width", 0.5 / camara.k);
  document.getElementById("mapa-graticula").setAttribute("stroke-width", 0.12 / camara.k);
  pintarRotulos();
}

/* ================================================================
   Rótulos geográficos (ubicados por coordenada real)
   ================================================================ */

const REGIONES = [
  { t: "HISPANIA", lat: 40.0, lon: -4.0 }, { t: "GALIA", lat: 46.4, lon: 2.5 },
  { t: "ITALIA", lat: 42.6, lon: 12.6 }, { t: "GRECIA", lat: 39.4, lon: 21.8 },
  { t: "TRACIA", lat: 41.6, lon: 25.6 }, { t: "ANATOLIA", lat: 39.0, lon: 33.0 },
  { t: "CÓLQUIDE", lat: 43.3, lon: 42.6 }, { t: "LEVANTE", lat: 33.6, lon: 36.6 },
  { t: "EGIPTO", lat: 27.6, lon: 30.0 }, { t: "LIBIA", lat: 29.4, lon: 17.5 },
  { t: "NUMIDIA", lat: 34.4, lon: 5.0 }, { t: "MAURITANIA", lat: 32.0, lon: -6.0 },
  { t: "CRETA", lat: 34.6, lon: 24.9 }, { t: "SICILIA", lat: 37.5, lon: 14.3 }
];

const MARES = [
  { t: "Mar Egeo", lat: 38.3, lon: 25.2 }, { t: "Mar Negro", lat: 43.2, lon: 34.0 },
  { t: "Mar Jónico", lat: 37.6, lon: 18.4 }, { t: "Mare Nostrum", lat: 34.4, lon: 18.0 },
  { t: "Mar Tirreno", lat: 39.9, lon: 11.9 }, { t: "Mar de Icaria", lat: 37.4, lon: 26.6 },
  { t: "Océano Atlántico", lat: 35.4, lon: -11.5 }
];

const NS_MAPA = "http://www.w3.org/2000/svg";

function crearSvg(tag, attrs) {
  const el = document.createElementNS(NS_MAPA, tag);
  for (const clave in attrs) el.setAttribute(clave, attrs[clave]);
  return el;
}

/* Los rótulos viven fuera del grupo de cámara: se reubican por coordenada en
   cada movimiento pero no se agrandan con el zoom. Los que caen fuera del
   lienzo no se dibujan. */
function pintarRotulos() {
  const grupo = document.getElementById("mapa-rotulos");
  grupo.innerHTML = "";
  const puestos = [];

  /* Los rótulos se colocan por orden de prioridad (primero las regiones) y
     el que pisaría a uno ya puesto no se dibuja: con zoom, media docena de
     nombres pueden caer sobre el mismo pedazo de mar. */
  function colocar(texto, lon, lat, estilo, cuerpo) {
    const [x, y] = enPantalla(lon, lat);
    if (x < -4 || x > 104 || y < 3 || y > LIENZO.alto - 3) return;
    const ancho = texto.length * cuerpo * 0.62, alto = cuerpo * 1.5;
    const caja = { x0: x - ancho / 2, x1: x + ancho / 2, y0: y - alto / 2, y1: y + alto / 2 };
    if (puestos.some(p => caja.x0 < p.x1 && caja.x1 > p.x0 && caja.y0 < p.y1 && caja.y1 > p.y0)) return;
    puestos.push(caja);
    const t = crearSvg("text", Object.assign({ x, y, "font-size": cuerpo, "text-anchor": "middle" }, estilo));
    t.textContent = texto;
    grupo.appendChild(t);
  }

  REGIONES.forEach(r => colocar(r.t, r.lon, r.lat, {
    fill: "#6b4f2a", "font-family": "'Cinzel', serif", "font-weight": 700,
    "letter-spacing": 0.25, opacity: 0.72
  }, 2.2));

  MARES.forEach(m => colocar(m.t, m.lon, m.lat, {
    fill: "#9a8259", "font-family": "Georgia, serif", "font-style": "italic", opacity: 0.75
  }, 2.1));
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
    else { encuadrar(true); render(); }
  }
  // No hay señuelos ni tap fuera de orden penalizado visualmente más allá
  // de simplemente no avanzar: el modo guiado ya marca cuál sigue.
}

function ceremonia(v) {
  fase = "ceremonia";
  encuadrar(true); // se abre para mostrar el recorrido entero
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
  encuadrar(true);
  render();
}

function reiniciar() {
  tokenSecuencia++;
  motor.reiniciar();
  ultimaParadaTocada = -1;
  fase = "trazando";
  encuadrar(true);
  render();
}

function cerrarHoja() {
  tokenSecuencia++;
  fase = "completada";
  encuadrar(true);
  render();
}

/* ---------- Dibujo del mapa ---------- */

const TEMA_MAPA = {
  colorTrazoCompleto: "#9c3b28", colorTrazoParcial: "rgba(156,59,40,.85)",
  colorPunto: "#9c3b28", colorPuntoInactivo: "#b98b52", colorError: "#c0532f",
  colorHalo: "rgba(156,59,40,.18)", colorOnda: "rgba(156,59,40,.75)",
  colorPista: "#c58a2e"
};

/* Cuando dos paradas caen casi en el mismo punto en pantalla (Alba Longa y el
   Palatino están a 20 km), se las separa lo justo para que el dedo distinga
   una de otra. Es un ajuste de legibilidad, no de datos: nunca supera
   SEPARACION_MIN/2 unidades y el JSON sigue con la coordenada real. */
function separar(puntos) {
  const salida = puntos.map(p => [p[0], p[1]]);
  for (let pasada = 0; pasada < 4; pasada++) {
    for (let i = 0; i < salida.length; i++) {
      for (let j = i + 1; j < salida.length; j++) {
        let dx = salida[j][0] - salida[i][0], dy = salida[j][1] - salida[i][1];
        let d = Math.hypot(dx, dy);
        if (d >= SEPARACION_MIN) continue;
        if (d < 0.001) { dx = Math.cos(i * 2.4); dy = Math.sin(i * 2.4); d = 1; }
        const empuje = (SEPARACION_MIN - d) / 2 / d;
        salida[i][0] -= dx * empuje; salida[i][1] -= dy * empuje;
        salida[j][0] += dx * empuje; salida[j][1] += dy * empuje;
      }
    }
  }
  // Tope de desplazamiento: la parada nunca se despega mucho de su lugar real
  return salida.map((p, i) => {
    const dx = p[0] - puntos[i][0], dy = p[1] - puntos[i][1], d = Math.hypot(dx, dy);
    const tope = SEPARACION_MIN / 2;
    if (d <= tope) return p;
    return [puntos[i][0] + dx / d * tope, puntos[i][1] + dy / d * tope];
  });
}

function puntosDe(v) {
  return separar(v.paradas.map(p => enPantalla(p.lon, p.lat)));
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

  medirLienzo();
  encuadrar(false);
  render();

  // Rotar el teléfono o abrir el teclado cambia la caja: se recalcula todo.
  let tempo = null;
  window.addEventListener("resize", () => {
    clearTimeout(tempo);
    tempo = setTimeout(() => { if (medirLienzo()) { encuadrar(false); render(); } }, 150);
  });

  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
}

iniciar();
