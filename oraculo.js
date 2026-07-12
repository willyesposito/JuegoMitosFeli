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

const TAM_ABANICO = 3;    // cartas veladas por consulta
const PIEDAD_DESEO = 4;   // consultas sin el deseado antes de forzar su entrada
const PROB_DESEO = 0.6;   // chance de incluir el deseado antes de la piedad

let modo = "facil";

// ---- pantallas nuevas (abanico / dorada / deseo) ----
let doradaEnConsulta = null;
let preguntaDorada = null;
let busquedaDeseo = "";

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

/* ---------- Consulta: abanico + deseo + acceso dorada ----------
   Nuevo punto de entrada. En vez de arrancar el desafío contra un secreto al
   azar, se muestran TAM_ABANICO cartas veladas para que Feli elija a quién
   perseguir; el desafío que ya existía corre recién al elegir una. */

function poolComun()   { return candidatosSinDescubrir().filter(p => p.tier !== "dorado"); }
function poolDoradas() { return candidatosSinDescubrir().filter(p => p.tier === "dorado"); }

/* Pista de una carta velada: mitología más un rasgo, nunca el nombre. */
function pistaVeladaDe(p) {
  const mito = NOMBRE_MITO_ORACULO[p.mitologia] || p.mitologia;
  const rasgo = (p.dones || [])[0];
  return rasgo ? `${mito} · ${rasgo}` : mito;
}

function componerAbanico() {
  let pool = poolComun();
  const elegidos = [];
  const deseo = deseoActual();

  // El deseo entra al abanico común solo si no es dorado (las doradas tienen
  // su propia consulta). Sesga, no garantiza, salvo piedad suave.
  const deseoComun = (deseo && porId(deseo).tier !== "dorado") ? deseo : null;
  if (deseoComun && pool.some(p => p.id === deseoComun)) {
    const forzar = estado.oraculo.abanicosSinDeseo >= PIEDAD_DESEO;
    if (forzar || Math.random() < PROB_DESEO) {
      elegidos.push(deseoComun);
      pool = pool.filter(p => p.id !== deseoComun);
      estado.oraculo.abanicosSinDeseo = 0;
    } else {
      estado.oraculo.abanicosSinDeseo++;
    }
    guardarEstado();
  }

  for (const p of mezclar(pool)) {
    if (elegidos.length >= TAM_ABANICO) break;
    elegidos.push(p.id);
  }
  return mezclar(elegidos); // que el deseado no caiga siempre en la misma posición
}

function pantallaTodoDescubierto() {
  document.getElementById("oraculo-main").innerHTML = `
    <p class="oraculo-vacio">✨ ¡Ya descubriste a todos los héroes! Volvé cuando Willy sume alguno nuevo.</p>`;
}

function iniciarConsulta() {
  if (!candidatosSinDescubrir().length) { pantallaTodoDescubierto(); return; }

  const abanico = componerAbanico();
  const hayDoradas = poolDoradas().length > 0;
  const deseo = deseoActual();
  const main = document.getElementById("oraculo-main");

  main.innerHTML = `
    ${hayDoradas ? `
      <button class="oraculo-acceso-dorada" id="oraculo-acceso-dorada">
        <span class="oraculo-acceso-dorada-halo" aria-hidden="true"></span>
        <strong>⭐ Consulta dorada</strong>
        <em>Un héroe legendario te espera</em>
      </button>` : ""}

    <div class="oraculo-deseo">
      ${deseo
        ? `<span class="oraculo-deseo-chip">✧ Tu deseo: ${porId(deseo).nombre}
             <button class="oraculo-deseo-quitar" id="oraculo-deseo-quitar" aria-label="Quitar deseo">✕</button>
           </span>`
        : `<button class="oraculo-deseo-pedir" id="oraculo-deseo-pedir">✧ Pedí un deseo</button>`}
    </div>

    <p class="oraculo-instruccion">Elegí a quién querés descubrir</p>
    <div class="oraculo-abanico">
      ${abanico.map(id => {
        const p = porId(id);
        const esDeseo = deseo === id;
        return `
          <button class="oraculo-velada${esDeseo ? " oraculo-velada--deseo" : ""}" data-id="${id}">
            <span class="oraculo-velada-marca" aria-hidden="true">${esDeseo ? "✧" : "🔮"}</span>
            <span class="oraculo-velada-pista">${pistaVeladaDe(p)}</span>
          </button>`;
      }).join("")}
    </div>`;

  main.querySelectorAll(".oraculo-velada").forEach(b =>
    b.addEventListener("click", () => elegirDelAbanico(b.dataset.id)));
  const accesoD = document.getElementById("oraculo-acceso-dorada");
  if (accesoD) accesoD.addEventListener("click", abrirConsultaDorada);
  const pedir = document.getElementById("oraculo-deseo-pedir");
  if (pedir) pedir.addEventListener("click", abrirSelectorDeseo);
  const quitar = document.getElementById("oraculo-deseo-quitar");
  if (quitar) quitar.addEventListener("click", () => { quitarDeseo(); iniciarConsulta(); });
}

function elegirDelAbanico(id) {
  if (modo === "facil") desafioFacil(id); else desafioDificil(id);
}

/* ---------- Modo fácil ---------- */

function pistaFacilDe(p) {
  if (Array.isArray(p.pistas_deduccion) && p.pistas_deduccion[2]) return p.pistas_deduccion[2];
  return `Un héroe o dios de mitología ${p.mitologia === "griega" ? "griega" : p.mitologia === "nordica" ? "nórdica" : "romana"}, con dones como «${(p.dones || [])[0] || "algo especial"}».`;
}

/* Entrada del modo fácil: abre el abanico. El desafío corre recién cuando
   Feli elige una carta velada (elegirDelAbanico → desafioFacil). */
function iniciarFacil() { iniciarConsulta(); }

/* El desafío de siempre, pero contra el id ya elegido en el abanico. */
function desafioFacil(id) {
  secretoFacil = id;
  erroresFacil = 0;
  const sinDescubrir = candidatosSinDescubrir();
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

/* Entrada del modo difícil: abre el abanico (igual que el fácil). El
   Mastermind corre recién al elegir una carta velada. */
function iniciarDificil() { iniciarConsulta(); }

function desafioDificil(id) {
  secretoDificil = id;
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

/* ---------- Consulta dorada (guardián) ----------
   Las doradas quedan fuera del abanico común: se llega por la consulta dorada,
   con una pregunta guardián (campo `preguntas` del JSON). Acertar la revela.
   Fallar o cancelar la devuelve al pool: nunca se pierde, nunca bloquea
   (regla de oro). Funciona en las tres dificultades. */
function abrirConsultaDorada() {
  const doradas = poolDoradas();
  if (!doradas.length) { iniciarConsulta(); return; }

  // Si el deseo es una dorada sin descubrir, la consulta apunta a ella.
  const deseo = deseoActual();
  const idDeseoDorado = (deseo && doradas.some(p => p.id === deseo)) ? deseo : null;
  doradaEnConsulta = idDeseoDorado || alAzar(doradas).id;

  const p = porId(doradaEnConsulta);
  preguntaDorada = (p.preguntas && p.preguntas.length) ? alAzar(p.preguntas) : null;

  // Sin pregunta escrita: nunca bloquear por falta de contenido, se revela directo.
  if (!preguntaDorada) { revelar(doradaEnConsulta, false); return; }

  const main = document.getElementById("oraculo-main");
  main.innerHTML = `
    <div class="oraculo-consulta-dorada">
      <div class="oraculo-velada oraculo-velada--dorada">
        <span class="oraculo-velada-marca" aria-hidden="true">⭐</span>
        <span class="oraculo-velada-pista">${pistaVeladaDe(p)}</span>
      </div>
      <p class="oraculo-guardian-texto">El guardián te pregunta:<br><strong>${preguntaDorada.texto}</strong></p>
      <div class="oraculo-grilla-facil" id="oraculo-guardian-opciones">
        ${preguntaDorada.opciones.map((op, i) =>
          `<button class="oraculo-candidato" data-i="${i}">${op}</button>`).join("")}
      </div>
      <button class="boton-secundario" id="oraculo-dorada-luego">Mejor la busco después</button>
    </div>`;

  main.querySelectorAll("#oraculo-guardian-opciones .oraculo-candidato").forEach(b =>
    b.addEventListener("click", () => responderGuardian(Number(b.dataset.i), b)));
  document.getElementById("oraculo-dorada-luego")
    .addEventListener("click", () => iniciarConsulta());
}

function responderGuardian(indice, boton) {
  if (indice === preguntaDorada.correcta) { revelar(doradaEnConsulta, false); return; }

  // Sin bloqueo: se marca el error, se muestra la correcta, la dorada vuelve
  // al pool para otro día. No se pierde ni se castiga.
  sonar("error");
  boton.classList.add("oraculo-candidato--error");
  document.querySelectorAll("#oraculo-guardian-opciones .oraculo-candidato").forEach((b, i) => {
    b.disabled = true;
    if (i === preguntaDorada.correcta) b.classList.add("oraculo-candidato--correcta");
  });
  document.getElementById("oraculo-dorada-luego").textContent = "Volver al Oráculo";
}

/* ---------- Selector de deseo ----------
   Un deseo por perfil: aparece más seguido en el abanico, pero igual hay que
   descubrirlo (no lo regala). */
function abrirSelectorDeseo() {
  const main = document.getElementById("oraculo-main");
  const lista = candidatosSinDescubrir()
    .filter(p => !busquedaDeseo || normalizar(p.nombre).includes(normalizar(busquedaDeseo)))
    .slice(0, 40);

  main.innerHTML = `
    <p class="oraculo-instruccion">¿A quién te gustaría descubrir?</p>
    <p class="oraculo-pista-siguiente" style="text-align:center;margin-bottom:10px">
      Va a aparecer más seguido en el Oráculo. No te lo regala: igual hay que descubrirlo.</p>
    <input type="search" id="oraculo-buscador-deseo" class="buscador oraculo-buscador"
           placeholder="Buscá un nombre..." value="${busquedaDeseo}">
    <div class="oraculo-lista-dificil">
      ${lista.map(p => `<button class="oraculo-candidato-fila" data-id="${p.id}">${p.nombre}</button>`).join("")
        || `<p class="oraculo-vacio">Nadie coincide con esa búsqueda.</p>`}
    </div>
    <button class="boton-secundario" id="oraculo-deseo-cancelar" style="margin-top:10px">Cancelar</button>`;

  document.getElementById("oraculo-buscador-deseo").addEventListener("input", e => {
    busquedaDeseo = e.target.value;
    abrirSelectorDeseo();
    document.getElementById("oraculo-buscador-deseo").focus();
  });
  main.querySelectorAll(".oraculo-candidato-fila").forEach(b =>
    b.addEventListener("click", () => { fijarDeseo(b.dataset.id); busquedaDeseo = ""; iniciarConsulta(); }));
  document.getElementById("oraculo-deseo-cancelar")
    .addEventListener("click", () => { busquedaDeseo = ""; iniciarConsulta(); });
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
