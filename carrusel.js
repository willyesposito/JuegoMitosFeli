/* Deslizador de catálogo — agrega flechas de avance/retroceso a una fila
   de chips que scrollea horizontal (los catálogos de El Cielo, El Mapa y
   Ordená). En celular la fila se desliza con el dedo; en la compu no hay
   forma cómoda de scrollear una fila sin barra, así que las flechas hacen
   accesibles los chips que quedan fuera de la vista a la derecha o a la
   izquierda. Autocontenido y genérico: no sabe nada del contenido de los
   chips, solo scrollea el contenedor que le pasan. La piel (colores) la
   pone cada módulo en su CSS via las clases .deslizador-*. */

function montarDeslizador(catalogo) {
  if (!catalogo || catalogo.dataset.deslizador) return;
  catalogo.dataset.deslizador = "1";

  const marco = document.createElement("div");
  marco.className = "deslizador";
  catalogo.parentNode.insertBefore(marco, catalogo);

  const prev = crearFlecha("deslizador-prev", "‹", "Ver anteriores");
  const next = crearFlecha("deslizador-next", "›", "Ver siguientes");

  marco.appendChild(prev);
  marco.appendChild(catalogo);
  marco.appendChild(next);

  function paso() {
    return Math.max(catalogo.clientWidth * 0.7, 140);
  }

  prev.addEventListener("click", () => catalogo.scrollBy({ left: -paso(), behavior: "smooth" }));
  next.addEventListener("click", () => catalogo.scrollBy({ left: paso(), behavior: "smooth" }));

  function actualizar() {
    const resto = catalogo.scrollWidth - catalogo.clientWidth;
    const hayOverflow = resto > 2;
    prev.classList.toggle("oculto-flecha", !hayOverflow || catalogo.scrollLeft <= 1);
    next.classList.toggle("oculto-flecha", !hayOverflow || catalogo.scrollLeft >= resto - 1);
  }

  catalogo.addEventListener("scroll", actualizar, { passive: true });
  window.addEventListener("resize", actualizar);
  // El catálogo se repuebla en cada render (innerHTML = ""); el observer
  // recalcula el overflow sin que el módulo tenga que avisar.
  new MutationObserver(actualizar).observe(catalogo, { childList: true });
  requestAnimationFrame(actualizar);
}

function crearFlecha(clase, glifo, etiqueta) {
  const b = document.createElement("button");
  b.type = "button";
  b.className = "deslizador-flecha " + clase + " oculto-flecha";
  b.setAttribute("aria-label", etiqueta);
  b.textContent = glifo;
  return b;
}
