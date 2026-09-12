/* Íconos de sistema — nodos del hub, atributos del dorso, mitología, tier
   y dificultad. Antes eran emoji del sistema operativo: se veían distinto
   en cada dispositivo, rompían el registro Cinzel/oro de la app y en algún
   caso metían un error de sentido (ver MEMORY.md, corrección de septiembre
   2026). Este archivo reemplaza esos emoji por un set propio de trazo fino
   en oro, coherente entre sí, para inyectar con iconoUI(clave).

   No confundir con iconos.js: ahí viven las ilustraciones grandes del
   frente de las cartas (una por personaje). Acá son glifos chicos de UI,
   un trazo simple por concepto, pensados para 18–30px. */

const ICONOS_UI = {
  // ---------- Módulos del hub ----------
  oraculo: `<circle cx="12" cy="13" r="7"/><path d="M9 13a3 3 0 0 1 3-3"/><path d="M12 3v2.4M12 3l-1.6 1.6M12 3l1.6 1.6"/>`,
  coleccion: `<path d="M4 20h16M5 20V10M9 20V10M15 20V10M19 20V10M3 10l9-6 9 6"/>`,
  cielo: `<path d="M6 17 11 6 18 12 14 19Z" stroke-opacity=".55"/><circle cx="6" cy="17" r="1.6" fill="currentColor" stroke="none"/><circle cx="11" cy="6" r="1.6" fill="currentColor" stroke="none"/><circle cx="18" cy="12" r="1.6" fill="currentColor" stroke="none"/><circle cx="14" cy="19" r="1.6" fill="currentColor" stroke="none"/>`,
  ordena: `<path d="M9 4h4v2.2a1.8 1.8 0 1 0 2 3V9h2a2 2 0 0 1 2 2v2h-2.2a1.8 1.8 0 1 0 0 3.6H19v2a2 2 0 0 1-2 2h-2v-2.2a1.8 1.8 0 1 0-3.6 0V21H9a2 2 0 0 1-2-2v-2H4.8a1.8 1.8 0 1 1 0-3.6H7v-2a2 2 0 0 1 2-2V9H6.8a1.8 1.8 0 1 1 2-3V4Z"/>`,
  mapa: `<path d="M9 4 4 6v14l5-2 6 2 5-2V4l-5 2-6-2Z"/><path d="M9 4v14M15 6v14"/><circle cx="12" cy="11" r="1" fill="currentColor" stroke="none"/>`,
  espejo: `<ellipse cx="12" cy="9.5" rx="6" ry="7.5"/><path d="M12 17v4M9 21h6"/>`,

  // ---------- Atributos (dorso de carta) ----------
  fuerza: `<path d="M12 2 13.7 8.3 12 10.3 10.3 8.3 12 2Z" fill="currentColor" stroke="none"/><path d="M12 10.3V19"/><path d="M8.5 13h7"/><path d="M9.4 19h5.2l-.9 2.7h-3.4L9.4 19Z"/>`,
  astucia: `<path d="M8 5 5 2M16 5l3-3M12 4v3"/><ellipse cx="12" cy="12" rx="7" ry="6.5"/><path d="M9.3 11.2h1.2M13.5 11.2h1.2"/><path d="M10.5 15c1 .8 2 .8 3 0"/>`,
  valentia: `<circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5 5l2.2 2.2M19 5l-2.2 2.2M5 19l2.2-2.2M19 19l-2.2-2.2"/>`,
  magia: `<path d="M12 2.5c.6 3 2 4.4 5 5-3 .6-4.4 2-5 5-.6-3-2-4.4-5-5 3-.6 4.4-2 5-5Z"/><path d="M18.5 15.5c.3 1.4.9 2 2.3 2.3-1.4.3-2 .9-2.3 2.3-.3-1.4-.9-2-2.3-2.3 1.4-.3 2-.9 2.3-2.3Z"/>`,
  liderazgo: `<path d="M4 18h16l-1.4-7-3.6 3-3-5.5-3 5.5-3.6-3L4 18Z"/><path d="M7 21h10"/>`,
  bondad: `<path d="M12 20.2 4.8 13c-2-2-1.9-5 .1-6.8 2-1.8 4.7-1.3 6 .8l1.1 1.7 1.1-1.7c1.3-2.1 4-2.6 6-.8 2 1.8 2.1 4.8.1 6.8L12 20.2Z"/>`,

  // ---------- Mitología ----------
  griega: `<path d="M4 20h16M5 20V10M9 20V10M15 20V10M19 20V10M3 10l9-6 9 6"/>`,
  nordica: `<path d="M13 2 6 13h5l-2 9 9-13h-5l2-9Z"/>`,
  romana: `<path d="M12 4v16"/><path d="M12 6c-2.4.3-4 2-4 4s1.6 3.2 4 3c-2.4.4-4 2-4 3.8"/><path d="M12 6c2.4.3 4 2 4 4s-1.6 3.2-4 3c2.4.4 4 2 4 3.8"/>`,

  // ---------- Tier ----------
  dorado: `<path d="M12 3.5 14.4 9l5.6.5-4.3 3.8 1.3 5.5L12 15.9 6.9 18.8l1.3-5.5L4 9.5 9.6 9 12 3.5Z" fill="currentColor" stroke="none"/>`,
  plateado: `<path d="M12 3.5 14.4 9l5.6.5-4.3 3.8 1.3 5.5L12 15.9 6.9 18.8l1.3-5.5L4 9.5 9.6 9 12 3.5Z"/>`,

  // ---------- Dificultad ----------
  facil: `<path d="M12 21c0-6 0-11 6-15-1 6-2 9-6 15Z"/><path d="M12 21c0-4.5-1-8-5-11 1.5 4.5 2.5 7.5 5 11Z"/>`,
  normal: `<path d="M12 3.5 14.4 9l5.6.5-4.3 3.8 1.3 5.5L12 15.9 6.9 18.8l1.3-5.5L4 9.5 9.6 9 12 3.5Z"/>`,
  dificil: `<path d="M12 2.5c.4 3-1.8 3.8-2.6 5.8-.7 1.7.1 2.9 1 3.5-.9-2 .1-3 1-3.7-.2 1.6.6 2.4 1.4 3.2 1.4 1.4 1.4 3.4.2 4.8-1.6 1.9-4.8 1.9-6.4-.2-1.7-2.3-1.1-5.5.6-7.7 1.4-1.8 3.4-3 4.8-5.7Z"/>`
};

/* iconoUI("clave") → <svg> lista para inyectar en innerHTML. clase extra
   opcional para engancharle tamaño/color puntual desde CSS. */
function iconoUI(clave, clase = "") {
  const glifo = ICONOS_UI[clave];
  if (!glifo) return "";
  return `<svg class="icono-ui${clase ? " " + clase : ""}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${glifo}</svg>`;
}
