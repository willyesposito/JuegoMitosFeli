/* Motor de trazado SVG — dibuja puntos sobre un plano 0-100 y los conecta
   en el orden que toca, con tolerancia para el dedo y feedback de error.
   Lo comparten El Cielo de los Mitos (constelaciones) y el Mapa del Héroe
   (Ola 2, viajes): la piel (colores, fondo) cambia según el módulo que lo
   usa, el mecanismo de trazado no. No sabe nada de personajes, capítulos
   ni constelaciones — eso lo resuelve el módulo que lo instancia. */

const NS_TRAZADO = "http://www.w3.org/2000/svg";

function crearElSvg(tag, attrs) {
  const el = document.createElementNS(NS_TRAZADO, tag);
  for (const clave in attrs) el.setAttribute(clave, attrs[clave]);
  return el;
}

/* Filtra un pool de puntos señuelo para que ninguno quede pegado a un
   punto real (evita ambigüedad al tocar), y devuelve como máximo
   `cantidad`. */
function decoysDe(puntosReales, pool, cantidad) {
  return pool
    .filter(d => puntosReales.every(p => Math.hypot(p[0] - d[0], p[1] - d[1]) >= 10))
    .slice(0, cantidad);
}

/* pistaPorDefecto: true = modo guiado (el próximo punto se resalta desde
   el arranque, sin necesidad de errar — lo usa el Mapa del Héroe, que
   enseña geografía en vez de evaluarla). false = modo desafío (la pista
   se regala recién después de varios errores seguidos — lo usa El Cielo).
   alCambiar se llama cuando el estado interno cambia por sí solo (el
   error temporal que se borra solo) para que el módulo vuelva a dibujar. */
function crearMotorTrazado({ pistaPorDefecto = false, umbralErroresParaPista = 3, alCambiar } = {}) {
  let paso = 0;
  let errorKey = null;
  let errores = 0;
  let pistaTemporal = pistaPorDefecto;
  let tokenSecuencia = 0;

  function reiniciar() {
    tokenSecuencia++;
    paso = 0;
    errorKey = null;
    errores = 0;
    pistaTemporal = pistaPorDefecto;
  }

  function conPista() {
    return pistaTemporal;
  }

  function marcarError(clave) {
    errores++;
    if (!pistaPorDefecto && errores >= umbralErroresParaPista) pistaTemporal = true;
    errorKey = clave;
    const token = tokenSecuencia;
    setTimeout(() => {
      if (token === tokenSecuencia && errorKey === clave) {
        errorKey = null;
        if (alCambiar) alCambiar();
      }
    }, 700);
  }

  function tocarPunto(i, totalPuntos) {
    if (i === paso) {
      paso++;
      const completo = paso === totalPuntos;
      if (!completo) { errores = 0; pistaTemporal = pistaPorDefecto; }
      return { avanzo: true, completo, error: false };
    }
    if (i > paso) { marcarError("e" + i); return { avanzo: false, completo: false, error: true }; }
    return { avanzo: false, completo: false, error: false };
  }

  function tocarDecoy(j) {
    marcarError("d" + j);
  }

  function marcarCompleto(totalPuntos) {
    paso = totalPuntos;
    errorKey = null;
  }

  return {
    get paso() { return paso; },
    get errorKey() { return errorKey; },
    get tokenSecuencia() { return tokenSecuencia; },
    reiniciar, conPista, tocarPunto, tocarDecoy, marcarCompleto,
  };
}

/* Dibuja el estado actual del trazado dentro del <g id="grupoId">.
   puntos/decoys son arrays [x,y] en escala 0-100. tema define los
   colores; cada módulo pasa la paleta que le corresponde. */
function renderTrazado({
  grupoId, puntos, decoys = [], paso, completo, errorKey, conPista,
  puntoBrillante = -1, decoyRadio = 1.1, decoyOpacidad = .65,
  onTocarPunto, onTocarDecoy, etiquetaPunto = (i, total) => `Punto ${i + 1} de ${total}`,
  tema = {}
}) {
  const {
    colorTrazoCompleto = "#ffd867", colorTrazoParcial = "rgba(255,216,103,.85)",
    colorPunto = "#ffd867", colorPuntoInactivo = "#fff", colorError = "#ff9e8a",
    colorHalo = "rgba(255,216,103,.14)", colorOnda = "rgba(255,216,103,.8)",
    colorPista = "rgba(255,233,168,.9)"
  } = tema;

  const grupo = document.getElementById(grupoId);
  grupo.innerHTML = "";

  if (completo) {
    const xs = puntos.map(p => p[0]), ys = puntos.map(p => p[1]);
    const cx = (Math.min(...xs) + Math.max(...xs)) / 2;
    const cy = (Math.min(...ys) + Math.max(...ys)) / 2;
    const rx = (Math.max(...xs) - Math.min(...xs)) / 2 + 10;
    const ry = (Math.max(...ys) - Math.min(...ys)) / 2 + 10;

    const elipse = crearElSvg("ellipse", { cx, cy, rx, ry, fill: colorHalo });
    elipse.style.filter = "blur(6px)";
    elipse.style.animation = "aparece .8s ease-out both";
    grupo.appendChild(elipse);

    grupo.appendChild(crearElSvg("circle", {
      cx, cy, r: Math.max(rx, ry), fill: "none",
      stroke: colorOnda, "stroke-width": .7, class: "onda-final"
    }));
  }

  for (let i = 1; i < Math.min(paso, puntos.length); i++) {
    const linea = crearElSvg("line", {
      x1: puntos[i - 1][0], y1: puntos[i - 1][1], x2: puntos[i][0], y2: puntos[i][1],
      stroke: completo ? colorTrazoCompleto : colorTrazoParcial,
      "stroke-width": completo ? 1 : .7,
      "stroke-linecap": "round",
      pathLength: "1",
      class: "linea-trazada"
    });
    if (completo) linea.style.filter = `drop-shadow(0 0 2px ${colorTrazoCompleto})`;
    grupo.appendChild(linea);
  }

  if (!completo && conPista && paso < puntos.length) {
    const [hx, hy] = puntos[paso];
    grupo.appendChild(crearElSvg("circle", {
      cx: hx, cy: hy, r: 5, fill: "none",
      stroke: colorPista, "stroke-width": .6, class: "halo-guia"
    }));
  }

  decoys.forEach((d, j) => {
    const esError = errorKey === "d" + j;
    const decoy = crearElSvg("circle", {
      cx: d[0], cy: d[1], r: decoyRadio,
      fill: esError ? colorError : colorPuntoInactivo,
      opacity: decoyOpacidad
    });
    decoy.style.transformBox = "fill-box";
    decoy.style.transformOrigin = "center";
    decoy.style.animation = esError ? "sacudir-suave .4s" : `brillo-estrella 4.4s ease-in-out ${j * .7}s infinite backwards`;
    grupo.appendChild(decoy);

    const tapDecoy = crearElSvg("circle", { cx: d[0], cy: d[1], r: 6, fill: "rgba(0,0,0,0)" });
    tapDecoy.style.cursor = "pointer";
    tapDecoy.addEventListener("click", () => { if (!completo && onTocarDecoy) onTocarDecoy(j); });
    grupo.appendChild(tapDecoy);
  });

  // Capa visual de cada punto (halo + circulo). Las zonas de toque van
  // aparte, en una capa propia por encima de todo (ver abajo).
  puntos.forEach((p, i) => {
    const tocado = i < paso;
    const esError = errorKey === "e" + i;
    const base = i === puntoBrillante ? 2 : (i === 0 ? 1.8 : 1.6);

    if (tocado) {
      const glow = crearElSvg("circle", { cx: p[0], cy: p[1], r: 4, fill: colorHalo });
      if (completo) { glow.classList.add("destello-final"); glow.style.animationDelay = (i * .3) + "s"; }
      grupo.appendChild(glow);
    }

    const punto = crearElSvg("circle", {
      cx: p[0], cy: p[1], r: tocado ? base + .4 : base,
      fill: tocado ? colorPunto : (esError ? colorError : colorPuntoInactivo)
    });
    punto.style.transition = "fill .25s, r .25s";
    punto.style.transformBox = "fill-box";
    punto.style.transformOrigin = "center";
    punto.style.animation = esError ? "sacudir-suave .4s" : (!tocado ? `brillo-estrella 3.4s ease-in-out ${i * .5}s infinite backwards` : "none");
    grupo.appendChild(punto);
  });

  // Capa de toque: se dibuja encima de TODOS los puntos, y el punto que
  // sigue en el orden queda de ultimo (el mas "arriba" en el SVG). Asi,
  // cuando dos paradas caen muy juntas (viajes reales con geografia
  // apretada, como la cola de La Odisea), el tap siempre llega al punto
  // correcto en vez de trabarse contra un vecino que quedaba tapandolo.
  const proximo = (!completo && paso < puntos.length) ? paso : -1;
  puntos
    .map((p, i) => ({ p, i }))
    .sort((a, b) => (a.i === proximo ? 1 : 0) - (b.i === proximo ? 1 : 0))
    .forEach(({ p, i }) => {
      const tap = crearElSvg("circle", { cx: p[0], cy: p[1], r: 7, fill: "rgba(0,0,0,0)" });
      tap.style.cursor = "pointer";
      tap.setAttribute("role", "button");
      tap.setAttribute("aria-label", etiquetaPunto(i, puntos.length));
      tap.addEventListener("click", () => onTocarPunto && onTocarPunto(i));
      grupo.appendChild(tap);
    });
}
