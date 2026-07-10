/* Ordená el Mito — secuenciar las escenas de un mito en su orden causal (no
   cronológico plano) para encender un capítulo (spec_funcional §5, doc de
   olas §4.3). Usa el núcleo compartido de nucleo.js (estado, personajes,
   audio); los datos propios del módulo viven en mitos_ordena.json.

   Sin motor de trazado: la interacción es tocar dos escenas para
   intercambiarlas. El barajado inicial vive en código, no en el JSON — un
   JSON guarda datos, no funciones — y garantiza que el mito nunca abra ya
   resuelto. */

let catalogo = [];
let idx = 0;
let fase = "ordenando"; // ordenando | ceremonia | capitulo | completada
let tokenSecuencia = 0;
let orden = [];
let solucion = [];
let seleccionada = -1;
let recienMovidas = [];

function actual() {
  return catalogo[idx];
}

function estadoOrdena() {
  if (!estado.ordena || !Array.isArray(estado.ordena.completados)) estado.ordena = { completados: [] };
  return estado.ordena;
}

function nombrePersonaje(m) {
  const p = porId(m.personaje);
  return p ? p.nombre : "el héroe";
}

/* Baraja las escenas en un orden distinto al correcto para que el mito nunca
   abra ya resuelto. Fisher-Yates + rechazo si el resultado coincide entero
   con la solución. */
function escenasParaMostrar(mito) {
  const sol = mito.ordenCorrecto.map(i => mito.escenas[i]);
  let barajado;
  do {
    barajado = [...sol];
    for (let i = barajado.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [barajado[i], barajado[j]] = [barajado[j], barajado[i]];
    }
  } while (barajado.every((e, i) => e.texto === sol[i].texto));
  return barajado;
}

/* ---------- Doble función: descubre o enciende un capítulo adicional ---------- */

function encenderConSuBase(personajeId, capituloId) {
  if (!estaDesbloqueada(personajeId)) desbloquear(personajeId);
  encenderCapitulo(personajeId, capituloId);
}

function capituloDeMito(mito) {
  const p = porId(mito.personaje);
  return p && capitulosDe(p).find(c => c.fuente === "ordena:" + mito.id);
}

function completarMito(mito) {
  const o = estadoOrdena();
  if (!o.completados.includes(mito.id)) o.completados.push(mito.id);

  const capitulo = capituloDeMito(mito);
  if (capitulo) encenderConSuBase(mito.personaje, capitulo.id);

  guardarEstado();
}

/* ---------- Interacción ---------- */

function tocarEscena(i) {
  if (fase !== "ordenando") return;

  if (seleccionada === -1) {
    seleccionada = i;
    sonar("estrella", 0);
    render();
    return;
  }
  if (seleccionada === i) {
    seleccionada = -1;
    render();
    return;
  }

  const a = seleccionada, b = i;
  [orden[a], orden[b]] = [orden[b], orden[a]];
  seleccionada = -1;
  recienMovidas = [a, b];

  const completo = orden.every((e, k) => e.texto === solucion[k].texto);
  if (completo) {
    sonar("correcto");
    ceremonia(actual());
  } else {
    sonar("dosNotas");
    render();
    setTimeout(() => { recienMovidas = []; render(); }, 500);
  }
}

function ceremonia(mito) {
  fase = "ceremonia";
  render();
  vibrar([30, 50, 30]);
  const token = ++tokenSecuencia;
  setTimeout(() => { if (token === tokenSecuencia) sonar("fanfarria"); }, 250);
  setTimeout(() => {
    if (token !== tokenSecuencia) return;
    sonar("sello");
    fase = "capitulo";
    completarMito(mito);
    render();
  }, 1900);
}

function prepararMito() {
  const mito = actual();
  solucion = mito.ordenCorrecto.map(i => mito.escenas[i]);
  seleccionada = -1;
  recienMovidas = [];
  const hecho = estadoOrdena().completados.includes(mito.id);
  if (hecho) {
    orden = [...solucion];
    fase = "completada";
  } else {
    orden = escenasParaMostrar(mito);
    fase = "ordenando";
  }
}

function elegir(id) {
  tokenSecuencia++;
  const i = catalogo.findIndex(m => m.id === id);
  if (i === -1) return;
  idx = i;
  prepararMito();
  render();
}

function reiniciar() {
  tokenSecuencia++;
  orden = escenasParaMostrar(actual());
  seleccionada = -1;
  recienMovidas = [];
  fase = "ordenando";
  render();
}

function cerrarHoja() {
  tokenSecuencia++;
  fase = "completada";
  orden = [...solucion];
  render();
}

/* ---------- Texto e instrucciones ---------- */

function textoInstruccion() {
  const m = actual();
  if (fase === "ceremonia") return `¡El mito se ordena! ${nombrePersonaje(m)} 📜`;
  if (fase === "capitulo") return "";
  if (fase === "completada") return `Mito ordenado ✓ · Elegí otro mito`;
  if (seleccionada !== -1) return "Tocá otra escena para intercambiarla con la elegida";
  const correctas = orden.filter((e, i) => e.texto === solucion[i].texto).length;
  if (correctas === 0) return "Tocá dos escenas para intercambiarlas · ¿qué pasó primero?";
  return `Vas bien: ${correctas} de ${orden.length} en su lugar · seguí intercambiando`;
}

/* ---------- Catálogo ---------- */

function renderCatalogo() {
  const cont = document.getElementById("ordena-catalogo");
  const hechos = estadoOrdena().completados;
  cont.innerHTML = "";
  catalogo.forEach(m => {
    const boton = document.createElement("button");
    const activo = m.id === actual().id;
    const hecho = hechos.includes(m.id);
    boton.className = "ordena-chip" + (activo ? " activo" : "") + (hecho ? " hecho" : "");
    boton.textContent = `📜 ${nombrePersonaje(m)}${hecho ? " ✓" : ""}`;
    boton.setAttribute("aria-pressed", String(activo));
    boton.addEventListener("click", () => elegir(m.id));
    cont.appendChild(boton);
  });
}

/* ---------- Tarjetas de escenas ---------- */

function renderTarjetas() {
  const cont = document.getElementById("ordena-tarjetas");
  cont.innerHTML = "";
  const interactivo = fase === "ordenando";

  orden.forEach((escena, i) => {
    const correcta = fase !== "ordenando" || escena.texto === solucion[i].texto;
    const tarjeta = document.createElement("button");
    tarjeta.className = "ordena-tarjeta"
      + (interactivo && seleccionada === i ? " seleccionada" : "")
      + (correcta ? " correcta" : "")
      + (recienMovidas.includes(i) ? " recien-movida" : "");
    tarjeta.disabled = !interactivo;
    tarjeta.setAttribute("aria-label", `Posición ${i + 1} de ${orden.length}: ${escena.texto}`);
    tarjeta.innerHTML = `
      <span class="ordena-tarjeta-numero">${i + 1}</span>
      <span class="ordena-tarjeta-icono">${escena.icono}</span>
      <span class="ordena-tarjeta-texto">${escena.texto}</span>`;
    if (interactivo) tarjeta.addEventListener("click", () => tocarEscena(i));
    cont.appendChild(tarjeta);
  });
}

/* ---------- Hoja de capítulo revelado ----------
   Misma regla que El Cielo y El Mapa: si el capítulo todavía es borrador, la
   ceremonia se siente igual de especial pero sin mostrar el texto sin
   revisar (capituloListoParaMostrar, nucleo.js). El "¿por qué?" del propio
   mito (la clave de la secuencia causal) es de este módulo y se muestra
   siempre: solo llegan a jugarse mitos ya publicados. */

function renderHoja() {
  const hoja = document.getElementById("ordena-hoja");
  if (fase !== "capitulo") { hoja.classList.add("oculto"); hoja.innerHTML = ""; return; }

  const m = actual();
  const personaje = porId(m.personaje);
  if (!personaje) { hoja.classList.add("oculto"); return; }
  const capitulo = capituloDeMito(m);
  const listo = capitulo && capituloListoParaMostrar(capitulo, true);

  hoja.innerHTML = `
    <div class="ordena-hoja-agarre"></div>
    <div class="ordena-hoja-encabezado">
      <span class="ordena-hoja-badge">📜 ${listo ? `Nuevo capítulo: ${capitulo.titulo}` : `¡Encendiste algo de ${personaje.nombre}!`}</span>
      <span class="ordena-hoja-modulo">🧩 Encendido en Ordená el Mito</span>
    </div>
    <div class="ordena-hoja-cuerpo">
      ${listo ? `
        <div class="ordena-hoja-titulo-fila">
          <span class="ordena-hoja-numero">✦</span>
          <strong>${capitulo.titulo} · <span class="ordena-hoja-personaje">${personaje.nombre}</span></strong>
        </div>
        <p class="ordena-hoja-texto">${capitulo.texto}</p>
        <div class="ordena-hoja-porque">
          <strong>💡 ¿Por qué?</strong>
          <p>${capitulo.porque}</p>
        </div>
      ` : `
        <p class="ordena-hoja-texto">Esta historia todavía se está terminando de escribir. En cuanto esté lista, la vas a poder leer completa en tu colección.</p>
      `}
    </div>
    <div class="ordena-hoja-clave">
      <strong>🧩 Lo que enseña este orden</strong>
      <p>${m.porque}</p>
    </div>
    <div class="ordena-hoja-botones">
      <a class="ordena-boton-primario" href="coleccion.html?ver=${encodeURIComponent(personaje.id)}">Ver la carta de ${personaje.nombre}</a>
      <button class="ordena-boton-secundario" id="ordena-boton-seguir">Seguir ordenando mitos</button>
    </div>`;

  hoja.classList.remove("oculto");
  document.getElementById("ordena-boton-seguir").addEventListener("click", cerrarHoja);
}

/* ---------- Render general ---------- */

function render() {
  document.getElementById("ordena-contador").textContent = `${estadoOrdena().completados.length} de ${catalogo.length} 📜`;
  document.getElementById("ordena-instruccion").textContent = textoInstruccion();

  renderCatalogo();
  renderTarjetas();
  renderHoja();
}

/* ---------- Arranque ---------- */

async function iniciar() {
  let publicados = [];
  try {
    await cargarPersonajes();
    const respuesta = await fetch("mitos_ordena.json");
    const todos = await respuesta.json();
    publicados = todos.filter(m => m.estado === "publicado");
  } catch (e) {
    document.getElementById("ordena-vacio").textContent =
      "No pude cargar los mitos. Si abriste el archivo directo, probá servirlo con un servidor local (ver README).";
    document.getElementById("ordena-vacio").classList.remove("oculto");
    return;
  }

  cargarEstado();

  // Igual que El Cielo y El Mapa: solo se ofrecen mitos de héroes que ya
  // están en la colección. Ordená el Mito enciende capítulos adicionales,
  // no es una vía de descubrimiento.
  catalogo = publicados.filter(m => estaDesbloqueada(m.personaje));

  if (catalogo.length === 0) {
    document.getElementById("ordena-vacio").classList.remove("oculto");
    document.getElementById("ordena-contador").classList.add("oculto");
    return;
  }

  document.getElementById("ordena-area").classList.remove("oculto");
  document.getElementById("ordena-catalogo").classList.remove("oculto");

  document.getElementById("boton-reiniciar-ordena").addEventListener("click", reiniciar);

  idx = 0;
  const parametros = new URLSearchParams(location.search);
  const pedido = parametros.get("mito");
  if (pedido) {
    const i = catalogo.findIndex(m => m.id === pedido);
    if (i !== -1) idx = i;
  }
  prepararMito();
  render();

  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
}

iniciar();
