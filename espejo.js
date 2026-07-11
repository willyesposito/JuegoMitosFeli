/* Espejo de los Mundos — aparear personajes griegos con su equivalente nórdico
   para encender un capítulo comparativo en las DOS cartas (doc de olas §4.2).
   Usa el núcleo compartido (nucleo.js: estado, personajes, audio) y los íconos
   de iconos.js. El catálogo de pares vive en espejos.json.

   Mecánica: matching simple. Se elige una carta de cada columna; si forman un
   par válido, se ilumina y enciende un capítulo en ambos. Errar no castiga: las
   cartas vuelven a su lugar con una pista suave. Solo aparecen pares donde los
   DOS personajes ya fueron descubiertos — el módulo nunca spoilea (regla de
   disponibilidad del doc). Paleta propia: plata y azul de espejo, distinta de
   la noche del Cielo, el verde del Mapa y el ámbar de Ordená. */

let catalogo = [];        // pares publicados y con ambos personajes descubiertos
let idx = 0;              // par en ceremonia / hoja
let fase = "apareando";   // apareando | ceremonia | capitulo
let tokenSecuencia = 0;
let selG = null;          // id griego elegido
let selN = null;          // id nórdico elegido
let parError = null;      // [g, n] con feedback de error momentáneo

function estadoEspejo() {
  if (!estado.espejo || !Array.isArray(estado.espejo.completados)) estado.espejo = { completados: [] };
  return estado.espejo;
}

function nombre(id) {
  const p = porId(id);
  return p ? p.nombre : id;
}

function actual() {
  return catalogo[idx];
}

function hecho(par) {
  return estadoEspejo().completados.includes(par.id);
}

/* Personajes únicos de un lado, en el orden en que aparecen en el catálogo. */
function columna(lado) {
  const vistos = new Set();
  const out = [];
  catalogo.forEach(par => {
    const id = par[lado];
    if (!vistos.has(id)) { vistos.add(id); out.push(id); }
  });
  return out;
}

function parDe(g, n) {
  return catalogo.find(par => par.griego === g && par.nordico === n);
}

/* Un personaje ya está apareado si su par (de cualquier lado) está completo. */
function idHecho(lado, id) {
  return catalogo.some(par => par[lado] === id && hecho(par));
}

function capituloDe(personajeId, capituloId) {
  const p = porId(personajeId);
  return p ? capitulosDe(p).find(c => c.id === capituloId) : null;
}

/* ---------- Interacción ---------- */

function tocar(lado, id) {
  if (fase !== "apareando") return;

  // Un personaje ya apareado navega a su carta (no se vuelve a jugar).
  if (idHecho(lado, id)) {
    location.href = `coleccion.html?ver=${encodeURIComponent(id)}`;
    return;
  }

  if (lado === "griego") selG = (selG === id ? null : id);
  else selN = (selN === id ? null : id);
  sonar("estrella", 0);

  if (selG && selN) evaluar();
  else render();
}

function evaluar() {
  const par = parDe(selG, selN);
  if (par && !hecho(par)) {
    sonar("correcto");
    idx = catalogo.indexOf(par);
    ceremonia(par);
  } else {
    // Errar no castiga: pista suave y las cartas vuelven a su lugar.
    sonar("dosNotas");
    parError = [selG, selN];
    vibrar([20]);
    render();
    setTimeout(() => {
      parError = null; selG = null; selN = null;
      if (fase === "apareando") render();
    }, 750);
  }
}

function ceremonia(par) {
  fase = "ceremonia";
  render();
  vibrar([30, 50, 30]);
  const token = ++tokenSecuencia;
  setTimeout(() => { if (token === tokenSecuencia) sonar("fanfarria"); }, 250);
  setTimeout(() => {
    if (token !== tokenSecuencia) return;
    sonar("sello");
    fase = "capitulo";
    completar(par);
    selG = null; selN = null;
    render();
  }, 1900);
}

function completar(par) {
  const e = estadoEspejo();
  if (!e.completados.includes(par.id)) e.completados.push(par.id);
  // Ambos ya están descubiertos (regla de disponibilidad): solo encendemos.
  encenderCapitulo(par.griego, par.capituloGriego);
  encenderCapitulo(par.nordico, par.capituloNordico);
  guardarEstado();
}

function cerrarHoja() {
  tokenSecuencia++;
  fase = "apareando";
  render();
}

/* ---------- Texto e instrucciones ---------- */

function textoInstruccion() {
  if (fase === "ceremonia") return "¡Los dos mundos se reflejan! 🪞";
  if (fase === "capitulo") return "";
  const restan = catalogo.filter(par => !hecho(par)).length;
  if (restan === 0) return "Encontraste todos los reflejos ✓";
  if (selG && !selN) return `Elegiste a ${nombre(selG)} — ¿quién es su reflejo en el norte?`;
  if (selN && !selG) return `Elegiste a ${nombre(selN)} — ¿quién es su reflejo en Grecia?`;
  return "Tocá un héroe de cada lado que cuenten la misma idea";
}

/* ---------- Columnas ---------- */

function tarjetaPersonaje(lado, id) {
  const p = porId(id);
  const seleccionado = (lado === "griego" ? selG : selN) === id;
  const completo = idHecho(lado, id);
  const conError = parError && parError.includes(id);

  const boton = document.createElement("button");
  boton.className = "espejo-carta"
    + (seleccionado ? " seleccionada" : "")
    + (completo ? " hecha" : "")
    + (conError ? " error" : "");
  boton.setAttribute("aria-pressed", String(seleccionado));
  boton.setAttribute("aria-label", `${nombre(id)}${completo ? " (ya reflejado)" : ""}`);
  boton.innerHTML = `
    <span class="espejo-carta-icono">${svgIcono(p ? p.icono : "")}</span>
    <span class="espejo-carta-nombre">${nombre(id)}</span>
    ${completo ? '<span class="espejo-carta-check">🪞</span>' : ""}`;
  boton.addEventListener("click", () => tocar(lado, id));
  return boton;
}

function renderColumnas() {
  const colG = document.getElementById("espejo-col-griego");
  const colN = document.getElementById("espejo-col-nordico");
  colG.innerHTML = "";
  colN.innerHTML = "";
  columna("griego").forEach(id => colG.appendChild(tarjetaPersonaje("griego", id)));
  columna("nordico").forEach(id => colN.appendChild(tarjetaPersonaje("nordico", id)));
}

/* ---------- Hoja de capítulo revelado ----------
   Igual que El Cielo, El Mapa y Ordená: si los capítulos todavía son borrador,
   la ceremonia se siente igual pero sin mostrar texto sin revisar. El "¿por
   qué?" comparativo del par (lo que enseña este espejo) es del módulo y se
   muestra siempre: solo se juegan pares ya publicados. */

function bloqueCapituloHoja(personajeId, capituloId) {
  const p = porId(personajeId);
  const cap = capituloDe(personajeId, capituloId);
  const listo = cap && capituloListoParaMostrar(cap, true);
  return `
    <div class="espejo-hoja-cap">
      <div class="espejo-hoja-cap-titulo">
        <span class="espejo-hoja-cap-icono">${svgIcono(p ? p.icono : "")}</span>
        <strong>${p ? p.nombre : ""}${listo ? ` · ${cap.titulo}` : ""}</strong>
      </div>
      ${listo
        ? `<p class="espejo-hoja-cap-texto">${cap.texto}</p>`
        : `<p class="espejo-hoja-cap-texto espejo-hoja-cap-borrador">Este capítulo ya está encendido — su historia se está terminando de escribir. Vas a poder leerla en la carta de ${p ? p.nombre : "el héroe"}.</p>`}
    </div>`;
}

function renderHoja() {
  const hoja = document.getElementById("espejo-hoja");
  if (fase !== "capitulo") { hoja.classList.add("oculto"); hoja.innerHTML = ""; return; }

  const par = actual();
  if (!par) { hoja.classList.add("oculto"); return; }

  hoja.innerHTML = `
    <div class="espejo-hoja-agarre"></div>
    <div class="espejo-hoja-encabezado">
      <span class="espejo-hoja-badge">🪞 ${nombre(par.griego)} ⟷ ${nombre(par.nordico)}</span>
      <span class="espejo-hoja-modulo">Encendido en Espejo de los Mundos</span>
    </div>
    <div class="espejo-hoja-cuerpo">
      ${bloqueCapituloHoja(par.griego, par.capituloGriego)}
      ${bloqueCapituloHoja(par.nordico, par.capituloNordico)}
    </div>
    <div class="espejo-hoja-porque">
      <strong>🪞 ¿Por qué se reflejan?</strong>
      <p>${par.porque}</p>
    </div>
    <div class="espejo-hoja-botones">
      <a class="espejo-boton-primario" href="coleccion.html?ver=${encodeURIComponent(par.griego)}">Ver a ${nombre(par.griego)}</a>
      <a class="espejo-boton-primario" href="coleccion.html?ver=${encodeURIComponent(par.nordico)}">Ver a ${nombre(par.nordico)}</a>
      <button class="espejo-boton-secundario" id="espejo-boton-seguir">Seguir buscando reflejos</button>
    </div>`;

  hoja.classList.remove("oculto");
  document.getElementById("espejo-boton-seguir").addEventListener("click", cerrarHoja);
}

/* ---------- Render general ---------- */

function render() {
  const restan = catalogo.filter(par => !hecho(par)).length;
  document.getElementById("espejo-contador").textContent =
    `${catalogo.length - restan} de ${catalogo.length} 🪞`;
  document.getElementById("espejo-instruccion").textContent = textoInstruccion();
  renderColumnas();
  renderHoja();
}

/* ---------- Arranque ---------- */

async function iniciar() {
  let publicados = [];
  try {
    await cargarPersonajes();
    const respuesta = await fetch("espejos.json");
    const todos = await respuesta.json();
    publicados = todos.filter(par => par.estado === "publicado");
  } catch (e) {
    document.getElementById("espejo-vacio").textContent =
      "No pude cargar los espejos. Si abriste el archivo directo, probá servirlo con un servidor local (ver README).";
    document.getElementById("espejo-vacio").classList.remove("oculto");
    return;
  }

  cargarEstado();

  // Regla de disponibilidad (doc §4.2): solo pares donde AMBOS ya están
  // descubiertos. El módulo enciende capítulos, no descubre — nunca spoilea.
  catalogo = publicados.filter(par => estaDesbloqueada(par.griego) && estaDesbloqueada(par.nordico));

  // Con menos de 2 pares disponibles el espejo "todavía está empañado".
  if (catalogo.length < 2) {
    document.getElementById("espejo-vacio").classList.remove("oculto");
    document.getElementById("espejo-contador").classList.add("oculto");
    return;
  }

  document.getElementById("espejo-area").classList.remove("oculto");

  // ?con=<id>: preselecciona ese personaje (llegada desde un capítulo velado).
  const pedido = new URLSearchParams(location.search).get("con");
  if (pedido) {
    if (columna("griego").includes(pedido)) selG = pedido;
    else if (columna("nordico").includes(pedido)) selN = pedido;
  }

  render();

  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
}

iniciar();
