/* Ilustraciones SVG de cada carta, generadas en código (cero imágenes externas).
   Cada función devuelve el contenido interno de un <svg viewBox="0 0 120 120">.
   Para agregar un personaje nuevo con icono propio: sumar una entrada acá
   y referenciarla desde el campo "icono" de personajes.json. */

const ICONOS = {

  laberinto: `
    <path d="M22 26 H98 V98 H22 V46 H78 V78 H46 V62" fill="none"
      stroke="#fff" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="60" cy="62" r="5" fill="#FFD867"/>`,

  leon: `
    <circle cx="60" cy="62" r="44" fill="rgba(255,255,255,.28)"/>
    <g stroke="rgba(255,255,255,.55)" stroke-width="5" stroke-linecap="round">
      <path d="M60 14 v8"/><path d="M60 102 v8"/><path d="M12 62 h8"/><path d="M100 62 h8"/>
      <path d="M26 28 l6 6"/><path d="M88 90 l6 6"/><path d="M94 28 l-6 6"/><path d="M32 90 l-6 6"/>
    </g>
    <circle cx="40" cy="38" r="8" fill="#FFF4DE"/>
    <circle cx="80" cy="38" r="8" fill="#FFF4DE"/>
    <circle cx="60" cy="62" r="30" fill="#FFF4DE"/>
    <circle cx="49" cy="56" r="4.5" fill="#5C4023"/>
    <circle cx="71" cy="56" r="4.5" fill="#5C4023"/>
    <path d="M55 64 L65 64 L60 70 Z" fill="#5C4023"/>
    <path d="M52 74 q8 7 16 0" stroke="#5C4023" stroke-width="3.5" fill="none" stroke-linecap="round"/>`,

  telar: `
    <rect x="26" y="20" width="68" height="80" rx="9" fill="none" stroke="#fff" stroke-width="7"/>
    <g stroke="rgba(255,255,255,.65)" stroke-width="4" stroke-linecap="round">
      <path d="M40 28 V92"/><path d="M53 28 V92"/><path d="M67 28 V92"/><path d="M80 28 V92"/>
    </g>
    <g stroke="#FFD867" stroke-width="5" fill="none" stroke-linecap="round">
      <path d="M33 68 q7 -6 14 0 t14 0 t14 0 t12 0"/>
      <path d="M33 78 q7 6 14 0 t14 0 t14 0 t12 0"/>
      <path d="M33 88 q7 -6 14 0 t14 0 t14 0 t12 0"/>
    </g>`,

  cielo: `
    <path d="M22 64 a38 38 0 0 1 76 0 Z" fill="rgba(255,255,255,.22)" stroke="#fff" stroke-width="6"/>
    <g fill="#FFD867">
      <circle cx="44" cy="48" r="3.5"/><circle cx="62" cy="38" r="3.5"/>
      <circle cx="79" cy="50" r="3.5"/><circle cx="60" cy="56" r="2.5"/>
    </g>
    <circle cx="60" cy="80" r="10" fill="#FFF4DE"/>
    <path d="M40 100 L46 66 M80 100 L74 66" stroke="#FFF4DE" stroke-width="8" stroke-linecap="round" fill="none"/>
    <path d="M46 100 h28" stroke="#FFF4DE" stroke-width="8" stroke-linecap="round"/>`,

  barco: `
    <path d="M26 74 H94 L80 94 H40 Z" fill="#FFF4DE"/>
    <path d="M60 74 V26" stroke="#fff" stroke-width="6" stroke-linecap="round"/>
    <path d="M64 30 L90 62 H64 Z" fill="rgba(255,255,255,.9)"/>
    <path d="M56 36 L36 60 H56 Z" fill="rgba(255,255,255,.65)"/>
    <g stroke="rgba(255,255,255,.7)" stroke-width="4.5" fill="none" stroke-linecap="round">
      <path d="M20 102 q8 -7 16 0 t16 0 t16 0 t16 0 t16 0"/>
    </g>`,

  lechuza: `
    <ellipse cx="60" cy="66" rx="28" ry="32" fill="#FFF4DE"/>
    <path d="M38 42 L32 24 L50 34 Z" fill="#FFF4DE"/>
    <path d="M82 42 L88 24 L70 34 Z" fill="#FFF4DE"/>
    <circle cx="49" cy="56" r="10" fill="#fff"/>
    <circle cx="71" cy="56" r="10" fill="#fff"/>
    <circle cx="49" cy="56" r="5" fill="#4A431F"/>
    <circle cx="71" cy="56" r="5" fill="#4A431F"/>
    <path d="M56 64 L64 64 L60 72 Z" fill="#C9902A"/>
    <path d="M44 80 q4 6 9 0 M67 80 q4 6 9 0" stroke="rgba(74,67,31,.5)" stroke-width="3" fill="none" stroke-linecap="round"/>`,

  escudo: `
    <circle cx="60" cy="60" r="38" fill="#EDF4FF"/>
    <circle cx="60" cy="60" r="38" fill="none" stroke="#fff" stroke-width="6"/>
    <circle cx="60" cy="60" r="13" fill="rgba(91,110,174,.45)"/>
    <path d="M36 48 a28 28 0 0 1 20 -16" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M84 30 l3 8 8 3 -8 3 -3 8 -3 -8 -8 -3 8 -3 Z" fill="#FFD867"/>`,

  alas: `
    <circle cx="60" cy="26" r="11" fill="#FFD867"/>
    <g fill="#FFF4DE">
      <path d="M56 68 C42 48 24 44 14 52 C26 55 30 60 24 66 C34 66 38 70 34 78 C44 78 50 76 56 68 Z"/>
      <path d="M64 68 C78 48 96 44 106 52 C94 55 90 60 96 66 C86 66 82 70 86 78 C76 78 70 76 64 68 Z"/>
    </g>
    <ellipse cx="60" cy="74" rx="7" ry="14" fill="#FFF4DE"/>`,

  martillo: `
    <rect x="32" y="28" width="56" height="34" rx="7" fill="#FFF4DE"/>
    <rect x="53" y="62" width="14" height="36" rx="6" fill="rgba(255,255,255,.75)"/>
    <path d="M53 90 h14" stroke="rgba(0,0,0,.15)" stroke-width="4"/>
    <path d="M22 40 l-8 8 6 1 -7 8" stroke="#FFE45C" stroke-width="4.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M98 40 l8 8 -6 1 7 8" stroke="#FFE45C" stroke-width="4.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,

  zorro: `
    <path d="M36 44 L28 18 L52 34 Z" fill="#FFF4DE"/>
    <path d="M84 44 L92 18 L68 34 Z" fill="#FFF4DE"/>
    <path d="M60 30 L90 50 L82 86 Q60 100 38 86 L30 50 Z" fill="#FFF4DE"/>
    <path d="M44 58 q5 -5 10 0" stroke="#4A3421" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <path d="M66 58 q5 -5 10 0" stroke="#4A3421" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <path d="M56 72 L64 72 L60 78 Z" fill="#4A3421"/>
    <path d="M48 82 q12 9 24 -2" stroke="#4A3421" stroke-width="3.5" fill="none" stroke-linecap="round"/>`,

  cuervos: `
    <g fill="#FFF4DE">
      <ellipse cx="38" cy="66" rx="16" ry="12"/>
      <circle cx="50" cy="52" r="9"/>
      <path d="M57 50 L68 54 L57 57 Z"/>
      <path d="M26 62 Q14 58 12 68 Q20 72 28 70 Z"/>
    </g>
    <circle cx="52.5" cy="50" r="2.5" fill="#3A3550"/>
    <g fill="rgba(255,255,255,.8)">
      <ellipse cx="84" cy="76" rx="14" ry="10"/>
      <circle cx="73" cy="64" r="8"/>
      <path d="M66 62 L56 66 L67 68 Z"/>
      <path d="M95 72 Q106 68 108 78 Q100 82 93 80 Z"/>
    </g>
    <circle cx="71" cy="62" r="2.2" fill="#3A3550"/>
    <path d="M30 30 l2.5 6 6 2.5 -6 2.5 -2.5 6 -2.5 -6 -6 -2.5 6 -2.5 Z" fill="#FFD867"/>`,

  gato: `
    <path d="M40 50 L34 26 L54 42 Z" fill="#FFF4DE"/>
    <path d="M80 50 L86 26 L66 42 Z" fill="#FFF4DE"/>
    <circle cx="60" cy="66" r="28" fill="#FFF4DE"/>
    <circle cx="50" cy="60" r="4.5" fill="#4A2D3C"/>
    <circle cx="70" cy="60" r="4.5" fill="#4A2D3C"/>
    <path d="M56 70 L64 70 L60 75 Z" fill="#4A2D3C"/>
    <path d="M54 78 q6 5 12 0" stroke="#4A2D3C" stroke-width="3" fill="none" stroke-linecap="round"/>
    <g stroke="rgba(74,45,60,.55)" stroke-width="2.5" stroke-linecap="round">
      <path d="M30 66 L16 62"/><path d="M30 72 L16 74"/>
      <path d="M90 66 L104 62"/><path d="M90 72 L104 74"/>
    </g>
    <path d="M92 26 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3 Z" fill="#FFD867"/>
    <path d="M24 96 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2 Z" fill="#FFD867"/>`,

  arcoiris: `
    <path d="M18 88 a42 42 0 0 1 84 0" fill="none" stroke="#FF9E9E" stroke-width="9" stroke-linecap="round"/>
    <path d="M30 88 a30 30 0 0 1 60 0" fill="none" stroke="#FFE08A" stroke-width="9" stroke-linecap="round"/>
    <path d="M42 88 a18 18 0 0 1 36 0" fill="none" stroke="#BDEBFF" stroke-width="9" stroke-linecap="round"/>
    <g fill="#fff">
      <circle cx="18" cy="90" r="9"/><circle cx="30" cy="93" r="8"/>
      <circle cx="102" cy="90" r="9"/><circle cx="90" cy="93" r="8"/>
    </g>`,

  trigo: `
    <g stroke="#FFF4DE" stroke-width="5" fill="none" stroke-linecap="round">
      <path d="M60 104 V40"/><path d="M36 104 V54"/><path d="M84 104 V54"/>
    </g>
    <g fill="#FFF4DE">
      <ellipse cx="52" cy="44" rx="9" ry="5" transform="rotate(-35 52 44)"/>
      <ellipse cx="68" cy="44" rx="9" ry="5" transform="rotate(35 68 44)"/>
      <ellipse cx="52" cy="32" rx="9" ry="5" transform="rotate(-35 52 32)"/>
      <ellipse cx="68" cy="32" rx="9" ry="5" transform="rotate(35 68 32)"/>
      <ellipse cx="60" cy="20" rx="5" ry="9"/>
      <ellipse cx="29" cy="58" rx="8" ry="4.5" transform="rotate(-35 29 58)"/>
      <ellipse cx="43" cy="58" rx="8" ry="4.5" transform="rotate(35 43 58)"/>
      <ellipse cx="36" cy="46" rx="4.5" ry="8"/>
      <ellipse cx="77" cy="58" rx="8" ry="4.5" transform="rotate(-35 77 58)"/>
      <ellipse cx="91" cy="58" rx="8" ry="4.5" transform="rotate(35 91 58)"/>
      <ellipse cx="84" cy="46" rx="4.5" ry="8"/>
    </g>`,

  lobo: `
    <path d="M38 42 L30 16 L54 32 Z" fill="#EDF2F7"/>
    <path d="M82 42 L90 16 L66 32 Z" fill="#EDF2F7"/>
    <path d="M60 28 L90 46 L84 88 Q60 102 36 88 L30 46 Z" fill="#EDF2F7"/>
    <circle cx="49" cy="56" r="4.5" fill="#39312E"/>
    <circle cx="71" cy="56" r="4.5" fill="#39312E"/>
    <path d="M54 68 L66 68 L60 76 Z" fill="#39312E"/>
    <path d="M52 82 q8 6 16 0" stroke="#39312E" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <path d="M28 92 Q60 112 92 92" stroke="#FFD867" stroke-width="7" fill="none" stroke-linecap="round"/>`
};

/* Silueta para cartas todavía no desbloqueadas */
const ICONO_VELADO = `
  <circle cx="60" cy="60" r="40" fill="rgba(255,255,255,.10)"/>
  <text x="60" y="76" text-anchor="middle" font-size="52" font-weight="800"
    fill="rgba(255,255,255,.55)" font-family="inherit">?</text>`;

function svgIcono(nombre, velado = false) {
  const contenido = velado ? ICONO_VELADO : (ICONOS[nombre] || ICONO_VELADO);
  return `<svg viewBox="0 0 120 120" role="img" aria-hidden="true">${contenido}</svg>`;
}
