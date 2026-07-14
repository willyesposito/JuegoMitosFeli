/* Mundo de Mitos — hub shell (spec_funcional §0). Portada como constelación
   (Handoff v13): los módulos son estrellas alrededor del Oráculo, leyendo el
   progreso real de nucleo.js. El sistema de perfiles/dificultad (más abajo)
   no cambia — el avatar del header solo lo abre. Agregar un módulo nuevo =
   sumar una entrada a MODULOS + su arista en CONEXIONES (CLAUDE.md:
   "arquitectura de hub modular"). */

const MODULOS = [
  { id: "oraculo",   nombre: "El Oráculo",     emoji: "🔮", href: "oraculo.html",   x: 50,   y: 22,   hub: true },
  { id: "coleccion", nombre: "Héroes y Dioses", emoji: "🏛️", href: "coleccion.html", x: 21.5, y: 41.2 },
  { id: "cielo",     nombre: "El Cielo",       emoji: "🌌", href: "cielo.html",     x: 79,   y: 12.8 },
  { id: "ordena",    nombre: "Ordená el Mito", emoji: "🧩", href: "ordena.html",    x: 68,   y: 68 },
  { id: "mapa",      nombre: "El Mapa",        emoji: "🗺️", href: "mapa.html",      x: 29.5, y: 78.4 },
  { id: "espejo",    nombre: "El Espejo",      emoji: "🪞", href: "espejo.html",    x: 85,   y: 46.4 },
];

/* Aristas de la constelación (el Oráculo es el centro). true = línea punteada tenue. */
const CONEXIONES = [
  ["cielo", "oraculo"], ["oraculo", "coleccion"], ["coleccion", "mapa"],
  ["oraculo", "ordena"], ["ordena", "espejo", true],
];

let nombresConstelaciones = {};

function posDe(id) { const m = MODULOS.find(x => x.id === id); return { x: m.x, y: m.y }; }

function fraccion(hechos, total, vacio) {
  return total ? `${hechos} / ${total}` : vacio;
}

/* ---------- Progreso real por módulo. Mismo filtro que usaba el hub de
   tarjetas: solo cuenta lo publicado y ya alcanzable (CLAUDE.md "el hub...
   filtra y solo muestra lo publicado"), acá en formato corto para caber
   bajo cada estrella. ---------- */

async function progresoOraculo() {
  const faltan = personajes.filter(p => !estaDesbloqueada(p.id)).length;
  return faltan ? `te faltan ${faltan} héroes` : "ya los descubriste a todos";
}

async function progresoColeccion() {
  const tengo = personajes.filter(p => estaDesbloqueada(p.id)).length;
  return `${tengo} / ${personajes.length}`;
}

async function progresoCielo() {
  try {
    const todas = await (await fetch("constelaciones.json")).json();
    todas.forEach(c => { nombresConstelaciones[c.id] = c.nombre; });
    const publicadas = todas.filter(c => c.estado === "publicado" && estaDesbloqueada(c.personajeId));
    const completadas = (estado.cielo?.completadas || []).filter(id => publicadas.some(c => c.id === id)).length;
    return fraccion(completadas, publicadas.length, "por abrir");
  } catch (e) { return "por abrir"; }
}

async function progresoMapa() {
  try {
    const todos = await (await fetch("viajes.json")).json();
    const publicados = todos.filter(v => v.estado === "publicado" && estaDesbloqueada(v.personajeAsociado));
    const completados = (estado.mapa?.completados || []).filter(id => publicados.some(v => v.id === id)).length;
    return fraccion(completados, publicados.length, "por abrir");
  } catch (e) { return "por abrir"; }
}

async function progresoOrdena() {
  try {
    const todos = await (await fetch("mitos_ordena.json")).json();
    const publicados = todos.filter(m => m.estado === "publicado" && estaDesbloqueada(m.personaje));
    const completados = (estado.ordena?.completados || []).filter(id => publicados.some(m => m.id === id)).length;
    return fraccion(completados, publicados.length, "por abrir");
  } catch (e) { return "por abrir"; }
}

async function progresoEspejo() {
  try {
    const todos = await (await fetch("espejos.json")).json();
    const disponibles = todos.filter(par => par.estado === "publicado" && estaDesbloqueada(par.griego) && estaDesbloqueada(par.nordico));
    const completados = (estado.espejo?.completados || []).filter(id => disponibles.some(par => par.id === id)).length;
    return fraccion(completados, disponibles.length, "por abrir");
  } catch (e) { return "por abrir"; }
}

const PROGRESO_POR_MODULO = {
  oraculo: progresoOraculo, coleccion: progresoColeccion, cielo: progresoCielo,
  mapa: progresoMapa, ordena: progresoOrdena, espejo: progresoEspejo,
};

/* ---------- Cielo de fondo: estrellas + niebla ---------- */

function construirCielo(n) {
  const cielo = document.getElementById("hub-cielo");
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) n = Math.min(n, 14);
  let h = '<span class="hub-niebla hub-niebla--1"></span><span class="hub-niebla hub-niebla--2"></span><span class="hub-niebla hub-niebla--3"></span>';
  for (let i = 0; i < n; i++) {
    const s = (1.5 + Math.random() * 2).toFixed(1);
    h += `<i class="hub-estrella" style="left:${(Math.random() * 100).toFixed(1)}%;top:${(Math.random() * 100).toFixed(1)}%;width:${s}px;height:${s}px;animation-duration:${(3 + Math.random() * 2.5).toFixed(1)}s;animation-delay:${(Math.random() * 2).toFixed(1)}s"></i>`;
  }
  cielo.innerHTML = h;
}

/* ---------- Header: contador global + avatar de perfil ---------- */

function renderHeader() {
  const n = personajes.filter(p => estaDesbloqueada(p.id)).length;
  document.getElementById("hub-contador").textContent = `✧ ${n} de ${personajes.length} héroes descubiertos`;
  document.getElementById("hub-avatar").textContent = (estado.nombre || "F").trim().charAt(0).toUpperCase() || "F";
}

/* ---------- Constelación de módulos ---------- */

async function renderConstelacion() {
  const cont = document.getElementById("hub-constelacion");
  let svg = '<svg class="hub-lineas" preserveAspectRatio="none">';
  for (const [a, b, tenue] of CONEXIONES) {
    const p = posDe(a), q = posDe(b);
    svg += `<line x1="${p.x}%" y1="${p.y}%" x2="${q.x}%" y2="${q.y}%"${tenue ? ' stroke-dasharray="3 4" class="hub-linea--tenue"' : ''} />`;
  }
  svg += "</svg>";

  const progresos = await Promise.all(MODULOS.map(m => PROGRESO_POR_MODULO[m.id]()));

  let html = svg;
  MODULOS.forEach((m, i) => {
    const prog = progresos[i];
    const cls = "hub-astro" + (m.hub ? " hub-astro--oraculo" : "");
    const delay = (Math.random() * 2).toFixed(2);
    html += `<a class="${cls}" href="${m.href}" style="left:${m.x}%;top:${m.y}%;animation-delay:${delay}s" aria-label="${m.nombre}, ${prog}">${m.emoji}</a>`;
    html += `<span class="hub-astro-label" style="left:${m.x}%;top:calc(${m.y}% + ${m.hub ? 42 : 32}px)" aria-hidden="true"><b>${m.nombre}</b><i>${prog}</i></span>`;
  });
  cont.innerHTML = html;
}

/* ---------- Próxima aventura: una sola sugerencia calculada del estado
   real. Sutil: si no hay nada claro, la franja se oculta (no inventa
   tareas). ---------- */

function proximaAventura() {
  let mejor = null;
  for (const p of personajes) {
    if (!estaDesbloqueada(p.id) || historiaCompleta(p)) continue;
    const encendidos = capitulosEncendidosDe(p.id);
    const velados = capitulosDe(p).filter(c => !(encendidos.includes(c.id) && c.estado === "publicado"));
    if (!velados.length) continue;
    const cap = velados[0];
    const href = destinoCapituloVelado(cap);
    if (!href) continue;                          // sin destino jugable → no lo sugiero
    if (!mejor || velados.length < mejor.faltan) {
      const pista = pistaCapituloVelado(cap, false, nombresConstelaciones)
        .replace(/\s*para encender este capítulo\.?$/i, "");
      mejor = { faltan: velados.length, href, texto: `A <b>${p.nombre}</b> le falta un capítulo: ${pista}` };
    }
  }
  if (mejor) return mejor;
  const deseo = deseoActual();
  if (deseo) { const q = porId(deseo); return { href: "oraculo.html", texto: `Tu deseo te espera en el Oráculo${q ? `: <b>${q.nombre}</b>` : ""}` }; }
  if (personajes.some(p => !estaDesbloqueada(p.id))) return { href: "oraculo.html", texto: "Consultá el Oráculo para descubrir un héroe nuevo" };
  return null;
}

function renderProxima() {
  const el = document.getElementById("hub-proxima");
  const pa = proximaAventura();
  if (!pa) { el.classList.add("oculta"); return; }
  el.href = pa.href;
  el.innerHTML = `<span aria-hidden="true">✦</span><span style="flex:1">${pa.texto}</span><span aria-hidden="true" style="color:rgba(255,216,103,.7)">›</span>`;
  el.classList.remove("oculta");
}

async function actualizarTodo() {
  renderHeader();
  await renderConstelacion();
  renderProxima();
}

/* ---------- Perfiles (spec §0.1) ---------- */

function renderListaPerfiles() {
  const cont = document.getElementById("perfiles-lista");
  const lista = listaPerfiles();
  cont.innerHTML = lista.map(p => `
    <div class="perfil-fila${p.activo ? " perfil-fila--activo" : ""}" data-indice="${p.indice}">
      <button class="perfil-elegir" data-indice="${p.indice}">
        <span class="perfil-avatar" aria-hidden="true">👤</span>
        <span class="perfil-datos">
          <strong>${p.nombre}</strong>
          <span>${NOMBRE_DIFICULTAD[p.dificultad]} · ${p.descubiertos} héroes${p.activo ? " · jugando ahora" : ""}</span>
        </span>
      </button>
      ${lista.length > 1 ? `<button class="perfil-borrar" data-indice="${p.indice}" aria-label="Borrar perfil ${p.nombre}">✕</button>` : ""}
    </div>`).join("");

  cont.querySelectorAll(".perfil-elegir").forEach(boton => {
    boton.addEventListener("click", () => {
      cambiarPerfil(Number(boton.dataset.indice));
      actualizarTodo();
      cerrarModalPerfiles();
    });
  });
  cont.querySelectorAll(".perfil-borrar").forEach(boton => {
    boton.addEventListener("click", e => {
      e.stopPropagation();
      const i = Number(boton.dataset.indice);
      const nombre = datos.perfiles[i].nombre;
      if (confirm(`¿Borrar el perfil "${nombre}"? Se pierde todo su progreso.`)) {
        borrarPerfil(i);
        renderListaPerfiles();
        actualizarTodo();
      }
    });
  });

  document.getElementById("boton-nuevo-perfil").classList.toggle("oculto", lista.length >= MAX_PERFILES);
  document.getElementById("boton-cerrar-perfiles").classList.toggle("oculto", lista.length <= 1);
}

function abrirModalPerfiles() {
  renderListaPerfiles();
  document.getElementById("modal-perfiles").classList.remove("oculto");
}

function cerrarModalPerfiles() {
  document.getElementById("modal-perfiles").classList.add("oculto");
}

function configurarPerfiles() {
  document.getElementById("hub-avatar").addEventListener("click", abrirModalPerfiles);
  document.getElementById("boton-cerrar-perfiles").addEventListener("click", cerrarModalPerfiles);
  document.getElementById("boton-nuevo-perfil").addEventListener("click", () => {
    const nombre = prompt("¿Cómo se llama el nuevo perfil?", `Perfil ${datos.perfiles.length + 1}`);
    if (nombre === null) return;
    abrirModalDificultad(nombre);
  });
  document.getElementById("boton-cancelar-dificultad").addEventListener("click", () => {
    document.getElementById("modal-dificultad").classList.add("oculto");
  });
}

/* La dificultad se elige una sola vez, acá, al crear la partida (CLAUDE.md
   "Dificultad por partida"): no hay ninguna otra pantalla que la toque. */
function abrirModalDificultad(nombre) {
  const modal = document.getElementById("modal-dificultad");
  modal.classList.remove("oculto");
  modal.querySelectorAll(".dificultad-opcion").forEach(boton => {
    boton.onclick = () => {
      modal.classList.add("oculto");
      const i = crearPerfil(nombre, boton.dataset.dificultad);
      if (i === -1) { alert("Ya hay 5 perfiles, el máximo."); return; }
      cambiarPerfil(i);
      actualizarTodo();
      renderListaPerfiles();
    };
  });
}

/* ---------- Opciones (para Willy) ---------- */

function actualizarTextoBotonSonido() {
  const boton = document.getElementById("boton-sonido");
  if (boton) boton.textContent = sonidoActivo ? "🔊 Sonido activado" : "🔇 Sonido silenciado";
}

function configurarOpciones() {
  const modal = document.getElementById("modal-config");
  document.getElementById("boton-config-hub").addEventListener("click", () => modal.classList.remove("oculto"));
  document.getElementById("boton-cerrar-config").addEventListener("click", () => modal.classList.add("oculto"));
  document.getElementById("boton-sonido").addEventListener("click", () => {
    alternarSonido();
    actualizarTextoBotonSonido();
  });
  actualizarTextoBotonSonido();
  document.getElementById("boton-perfiles-config").addEventListener("click", () => {
    modal.classList.add("oculto");
    abrirModalPerfiles();
  });
  document.getElementById("boton-mazo-curado").addEventListener("click", () => {
    if (confirm("¿Cargar el mazo inicial curado en este perfil?")) {
      const sumadas = cargarMazoCurado();
      modal.classList.add("oculto");
      actualizarTodo();
      alert(sumadas ? `Se sumaron ${sumadas} cartas.` : "Este perfil ya tenía todo el mazo curado.");
    }
  });
  document.getElementById("boton-reset").addEventListener("click", () => {
    if (confirm("¿Seguro? Se pierde todo el progreso de este perfil.")) {
      reiniciarPerfilActivo();
      modal.classList.add("oculto");
      actualizarTodo();
    }
  });
}

async function iniciar() {
  try {
    await cargarPersonajes();
  } catch (e) {
    document.getElementById("hub-constelacion").innerHTML =
      `<p class="mensaje-vacio">No pude cargar el mundo. Si abriste el archivo directo,
       probá servirlo con un servidor local (ver README).</p>`;
    return;
  }

  cargarEstado();
  reconciliarVinculos();
  configurarPerfiles();
  configurarOpciones();
  construirCielo(28);
  await actualizarTodo();

  // Selector de perfil solo si hay más de uno (spec §0.1), y solo la primera
  // vez que se abre el hub en esta pestaña: volver de un módulo a index.html
  // recarga hub.js entero, y sin este freno el selector se re-abría en cada
  // vuelta en vez de solo al entrar de cero.
  if (datos.perfiles.length > 1 && !sessionStorage.getItem("feli-selector-mostrado")) {
    sessionStorage.setItem("feli-selector-mostrado", "1");
    abrirModalPerfiles();
  }

  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
}

iniciar();
