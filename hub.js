/* Mundo de Mitos — hub shell (spec_funcional §0).
   Pantalla principal: contador global, una tarjeta grande por módulo con su
   propio progreso, y el selector de perfiles (spec §0.1). Agregar un módulo
   nuevo = agregar una entrada a MODULOS y registrar su progreso(), sin tocar
   los demás (CLAUDE.md: "arquitectura de hub modular"). */

const MODULOS = [
  {
    id: "coleccion", nombre: "Héroes y Dioses", icono: "🏛️", href: "coleccion.html",
    descripcion: "Tu colección de mitología",
    async progreso() {
      const total = personajes.length;
      const tengo = personajes.filter(p => estaDesbloqueada(p.id)).length;
      return `${tengo} de ${total} héroes`;
    }
  },
  {
    id: "oraculo", nombre: "El Oráculo de Delfos", icono: "🔮", href: "oraculo.html",
    descripcion: "Consultá para descubrir una carta nueva",
    async progreso() {
      const faltan = personajes.filter(p => !estaDesbloqueada(p.id)).length;
      return faltan ? `Te faltan ${faltan} héroes` : "¡Descubriste a todos!";
    }
  },
  {
    id: "cielo", nombre: "El Cielo de los Mitos", icono: "🌌", href: "cielo.html",
    descripcion: "Uní las estrellas y encendé historias",
    async progreso() {
      try {
        const todas = await (await fetch("constelaciones.json")).json();
        const publicadas = todas.filter(c => c.estado === "publicado" && estaDesbloqueada(c.personajeId));
        const completadas = (estado.cielo && Array.isArray(estado.cielo.completadas))
          ? estado.cielo.completadas.filter(id => publicadas.some(c => c.id === id)).length : 0;
        return publicadas.length ? `${completadas} de ${publicadas.length} constelaciones` : "Descubrí héroes para desbloquear constelaciones";
      } catch (e) { return "Uní las estrellas y encendé historias"; }
    }
  },
  {
    id: "mapa", nombre: "El Mapa del Héroe", icono: "🗺️", href: "mapa.html",
    descripcion: "Seguí el viaje y encendé historias",
    async progreso() {
      try {
        const todos = await (await fetch("viajes.json")).json();
        const publicados = todos.filter(v => v.estado === "publicado" && estaDesbloqueada(v.personajeAsociado));
        const completados = (estado.mapa && Array.isArray(estado.mapa.completados))
          ? estado.mapa.completados.filter(id => publicados.some(v => v.id === id)).length : 0;
        return publicados.length ? `${completados} de ${publicados.length} viajes` : "Descubrí héroes para desbloquear viajes";
      } catch (e) { return "Seguí el viaje y encendé historias"; }
    }
  },
  {
    id: "ordena", nombre: "Ordená el Mito", icono: "🧩", href: "ordena.html",
    descripcion: "Secuenciá la historia y encendé capítulos",
    async progreso() {
      try {
        const todos = await (await fetch("mitos_ordena.json")).json();
        const publicados = todos.filter(m => m.estado === "publicado" && estaDesbloqueada(m.personaje));
        const completados = (estado.ordena && Array.isArray(estado.ordena.completados))
          ? estado.ordena.completados.filter(id => publicados.some(m => m.id === id)).length : 0;
        return publicados.length ? `${completados} de ${publicados.length} mitos` : "Descubrí héroes para desbloquear mitos";
      } catch (e) { return "Secuenciá la historia y encendé capítulos"; }
    }
  }
];

function renderContadorGlobal() {
  const total = personajes.length;
  const tengo = personajes.filter(p => estaDesbloqueada(p.id)).length;
  const completas = contarHistoriasCompletas();
  document.getElementById("hub-contador").textContent =
    `Descubriste ${tengo} de ${total} héroes · ${completas} con historia completa`;
}

async function renderModulos() {
  const cont = document.getElementById("hub-modulos");
  cont.innerHTML = MODULOS.map(m => `
    <a class="hub-modulo" href="${m.href}" data-id="${m.id}">
      <span class="hub-modulo-icono" aria-hidden="true">${m.icono}</span>
      <span class="hub-modulo-texto">
        <strong>${m.nombre}</strong>
        <span class="hub-modulo-progreso" id="progreso-${m.id}">${m.descripcion}</span>
      </span>
      <span class="hub-modulo-flecha" aria-hidden="true">›</span>
    </a>`).join("");

  for (const m of MODULOS) {
    m.progreso().then(texto => {
      const el = document.getElementById(`progreso-${m.id}`);
      if (el) el.textContent = texto;
    });
  }
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

function actualizarTodo() {
  document.getElementById("hub-perfil-nombre").textContent = estado.nombre;
  renderContadorGlobal();
  renderModulos();
}

function configurarPerfiles() {
  document.getElementById("hub-boton-perfil").addEventListener("click", abrirModalPerfiles);
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
    document.getElementById("hub-modulos").innerHTML =
      `<p class="mensaje-vacio">No pude cargar el mundo. Si abriste el archivo directo,
       probá servirlo con un servidor local (ver README).</p>`;
    return;
  }

  cargarEstado();
  reconciliarVinculos();
  configurarPerfiles();
  configurarOpciones();
  actualizarTodo();

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
