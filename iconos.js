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
    <path d="M28 92 Q60 112 92 92" stroke="#FFD867" stroke-width="7" fill="none" stroke-linecap="round"/>`,

  rayo: `
    <circle cx="60" cy="60" r="42" fill="rgba(255,255,255,.18)"/>
    <path d="M68 18 L34 68 H56 L48 102 L88 50 H64 Z" fill="#FFD867" stroke="#fff" stroke-width="4" stroke-linejoin="round"/>`,

  pavorreal: `
    <circle cx="60" cy="78" r="20" fill="#FFF4DE"/>
    <circle cx="53" cy="72" r="4" fill="#4A431F"/>
    <path d="M56 60 L46 56 L52 48 Z" fill="#C9902A"/>
    <g fill="none" stroke-width="5" stroke-linecap="round">
      <path d="M60 58 Q40 30 20 34" stroke="#8FBF7A"/>
      <path d="M60 58 Q50 24 30 18" stroke="#5B9EAE"/>
      <path d="M60 58 Q60 20 60 12" stroke="#FFD867"/>
      <path d="M60 58 Q70 24 90 18" stroke="#5B9EAE"/>
      <path d="M60 58 Q80 30 100 34" stroke="#8FBF7A"/>
    </g>
    <g fill="#FFF4DE"><circle cx="20" cy="34" r="6"/><circle cx="30" cy="18" r="6"/><circle cx="60" cy="12" r="6"/><circle cx="90" cy="18" r="6"/><circle cx="100" cy="34" r="6"/></g>`,

  tridente: `
    <rect x="55" y="46" width="10" height="58" rx="4" fill="#FFF4DE"/>
    <path d="M60 100 h20" stroke="rgba(0,0,0,.15)" stroke-width="4"/>
    <path d="M36 20 V54 M60 14 V54 M84 20 V54" stroke="#FFF4DE" stroke-width="8" stroke-linecap="round"/>
    <path d="M30 20 q6 -10 12 0 M54 14 q6 -8 12 0 M78 20 q6 -10 12 0" fill="none" stroke="#FFD867" stroke-width="4" stroke-linecap="round"/>`,

  yelmo: `
    <path d="M30 66 a30 30 0 0 1 60 0 v18 H30 Z" fill="#FFF4DE"/>
    <rect x="22" y="84" width="76" height="14" rx="6" fill="rgba(255,255,255,.75)"/>
    <path d="M60 20 V40" stroke="#FFD867" stroke-width="7" stroke-linecap="round"/>
    <path d="M46 66 h28" stroke="rgba(74,53,82,.4)" stroke-width="5" stroke-linecap="round"/>`,

  espigas: `
    <g stroke="#FFF4DE" stroke-width="5" fill="none" stroke-linecap="round">
      <path d="M40 104 V50"/><path d="M60 104 V36"/><path d="M80 104 V50"/>
    </g>
    <g fill="#FFD867">
      <ellipse cx="33" cy="56" rx="7" ry="4" transform="rotate(-35 33 56)"/>
      <ellipse cx="47" cy="56" rx="7" ry="4" transform="rotate(35 47 56)"/>
      <ellipse cx="53" cy="42" rx="7" ry="4" transform="rotate(-35 53 42)"/>
      <ellipse cx="67" cy="42" rx="7" ry="4" transform="rotate(35 67 42)"/>
      <ellipse cx="60" cy="26" rx="4.5" ry="8"/>
      <ellipse cx="73" cy="56" rx="7" ry="4" transform="rotate(-35 73 56)"/>
      <ellipse cx="87" cy="56" rx="7" ry="4" transform="rotate(35 87 56)"/>
    </g>`,

  granada: `
    <path d="M60 30 C36 30 28 54 28 70 a32 32 0 0 0 64 0 C92 54 84 30 60 30 Z" fill="#B5304A"/>
    <path d="M50 26 L54 16 L60 24 L66 16 L70 26 Z" fill="#5C7A3D"/>
    <g fill="#FFD867"><circle cx="48" cy="62" r="4"/><circle cx="60" cy="72" r="4"/><circle cx="72" cy="60" r="4"/><circle cx="56" cy="86" r="4"/><circle cx="70" cy="82" r="4"/></g>`,

  fogon: `
    <ellipse cx="60" cy="98" rx="34" ry="8" fill="rgba(0,0,0,.15)"/>
    <g fill="#8C6B4A"><rect x="30" y="86" width="16" height="8" rx="3"/><rect x="74" y="86" width="16" height="8" rx="3"/><rect x="50" y="90" width="20" height="8" rx="3"/></g>
    <path d="M60 30 C42 46 42 62 54 72 C50 60 56 56 58 52 C60 64 72 66 68 80 C86 70 82 46 60 30 Z" fill="#FFD867"/>
    <path d="M60 50 C52 60 54 70 60 76 C58 68 62 66 62 60 Z" fill="#FF9E5C"/>`,

  sol: `
    <g stroke="#FFD867" stroke-width="6" stroke-linecap="round">
      <path d="M60 12 v14"/><path d="M60 94 v14"/><path d="M12 60 h14"/><path d="M94 60 h14"/>
      <path d="M27 27 l10 10"/><path d="M83 83 l10 10"/><path d="M93 27 l-10 10"/><path d="M37 83 l-10 10"/>
    </g>
    <circle cx="60" cy="60" r="26" fill="#FFF4DE"/>
    <circle cx="60" cy="60" r="18" fill="#FFD867"/>`,

  arco: `
    <path d="M40 18 a54 54 0 0 0 0 84" fill="none" stroke="#FFF4DE" stroke-width="7" stroke-linecap="round"/>
    <path d="M40 18 L88 60 L40 102" fill="none" stroke="#FFD867" stroke-width="3" stroke-linecap="round"/>
    <circle cx="88" cy="60" r="4" fill="#FFD867"/>
    <circle cx="82" cy="60" r="6" fill="#FFF4DE" opacity=".7"/>`,

  espada: `
    <path d="M60 18 L68 70 H52 Z" fill="#EDF2F7"/>
    <rect x="56" y="70" width="8" height="20" fill="#EDF2F7"/>
    <rect x="38" y="86" width="44" height="10" rx="4" fill="#FFD867"/>
    <rect x="55" y="94" width="10" height="16" rx="3" fill="rgba(255,255,255,.75)"/>`,

  concha: `
    <path d="M60 30 C30 30 22 66 30 92 h60 c8 -26 0 -62 -30 -62 Z" fill="#FFF4DE"/>
    <g stroke="rgba(194,86,138,.5)" stroke-width="4" fill="none" stroke-linecap="round">
      <path d="M60 34 V92"/><path d="M44 40 Q40 66 42 92"/><path d="M76 40 Q80 66 78 92"/>
    </g>
    <circle cx="60" cy="30" r="8" fill="#FFD867"/>`,

  yunque: `
    <path d="M32 70 h56 l-8 -14 H40 Z" fill="#FFF4DE"/>
    <rect x="52" y="56" width="16" height="16" fill="#FFF4DE"/>
    <rect x="46" y="86" width="28" height="14" rx="4" fill="rgba(255,255,255,.75)"/>
    <rect x="54" y="72" width="12" height="14" fill="#FFF4DE"/>
    <path d="M84 40 l-14 14" stroke="#FFD867" stroke-width="6" stroke-linecap="round"/>
    <circle cx="86" cy="38" r="6" fill="#FFD867"/>`,

  sandalias: `
    <path d="M26 78 q34 -14 68 0 l-6 14 H32 Z" fill="#FFF4DE"/>
    <path d="M40 78 V64 M60 78 V60 M78 78 V66" stroke="rgba(255,255,255,.6)" stroke-width="4" stroke-linecap="round"/>
    <path d="M30 40 l-10 8 6 1 -7 9" stroke="#FFD867" stroke-width="4.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M90 40 l10 8 -6 1 7 9" stroke="#FFD867" stroke-width="4.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,

  mascara: `
    <path d="M22 40 q38 -18 76 0 v14 q-38 18 -76 0 Z" fill="#FFF4DE"/>
    <circle cx="42" cy="42" r="6" fill="#4A3D5C"/>
    <circle cx="78" cy="42" r="6" fill="#4A3D5C"/>
    <path d="M46 54 q14 8 28 0" stroke="#4A3D5C" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <path d="M22 78 q38 18 76 0 v-14 q-38 -18 -76 0 Z" fill="rgba(255,255,255,.7)"/>
    <circle cx="42" cy="72" r="5" fill="#4A3D5C"/>
    <circle cx="78" cy="72" r="5" fill="#4A3D5C"/>
    <path d="M48 84 q12 -8 24 0" stroke="#4A3D5C" stroke-width="3.5" fill="none" stroke-linecap="round"/>`,

  laurel: `
    <g fill="#FFD867">
      <ellipse cx="30" cy="40" rx="7" ry="4" transform="rotate(-30 30 40)"/>
      <ellipse cx="24" cy="56" rx="7" ry="4" transform="rotate(-10 24 56)"/>
      <ellipse cx="24" cy="74" rx="7" ry="4" transform="rotate(10 24 74)"/>
      <ellipse cx="34" cy="90" rx="7" ry="4" transform="rotate(35 34 90)"/>
      <ellipse cx="90" cy="40" rx="7" ry="4" transform="rotate(30 90 40)"/>
      <ellipse cx="96" cy="56" rx="7" ry="4" transform="rotate(10 96 56)"/>
      <ellipse cx="96" cy="74" rx="7" ry="4" transform="rotate(-10 96 74)"/>
      <ellipse cx="86" cy="90" rx="7" ry="4" transform="rotate(-35 86 90)"/>
    </g>
    <path d="M28 36 Q60 100 92 36" fill="none" stroke="rgba(255,216,103,.6)" stroke-width="4"/>
    <circle cx="60" cy="60" r="14" fill="#FFF4DE"/>`,

  iris: `
    <path d="M18 92 a42 42 0 0 1 84 0" fill="none" stroke="#FF9E9E" stroke-width="8" stroke-linecap="round"/>
    <path d="M30 92 a30 30 0 0 1 60 0" fill="none" stroke="#FFE08A" stroke-width="8" stroke-linecap="round"/>
    <path d="M42 92 a18 18 0 0 1 36 0" fill="none" stroke="#BDEBFF" stroke-width="8" stroke-linecap="round"/>
    <circle cx="60" cy="70" r="13" fill="#FFF4DE"/>
    <path d="M52 66 L60 76 L74 58" stroke="#4E9E8C" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,

  carrosolar: `
    <circle cx="60" cy="42" r="20" fill="#FFD867"/>
    <g stroke="#FFF4DE" stroke-width="4" stroke-linecap="round">
      <path d="M60 14 v8"/><path d="M38 22 l6 6"/><path d="M82 22 l-6 6"/>
    </g>
    <path d="M24 96 q36 -18 72 0" fill="none" stroke="#FFF4DE" stroke-width="8" stroke-linecap="round"/>
    <circle cx="34" cy="98" r="8" fill="rgba(255,255,255,.7)"/>
    <circle cx="86" cy="98" r="8" fill="rgba(255,255,255,.7)"/>`,

  carrolunar: `
    <path d="M74 24 a26 26 0 1 0 18 40 a20 20 0 1 1 -18 -40 Z" fill="#FFF4DE"/>
    <g fill="#FFF4DE" opacity=".7"><circle cx="30" cy="30" r="2.5"/><circle cx="44" cy="20" r="2"/><circle cx="20" cy="46" r="2"/></g>
    <path d="M24 96 q36 -18 72 0" fill="none" stroke="#4A5A8C" stroke-width="8" stroke-linecap="round"/>
    <circle cx="34" cy="98" r="8" fill="rgba(255,255,255,.55)"/>
    <circle cx="86" cy="98" r="8" fill="rgba(255,255,255,.55)"/>`,

  flauta: `
    <rect x="16" y="66" width="88" height="12" rx="6" fill="#FFF4DE" transform="rotate(-18 60 72)"/>
    <g fill="#5C7A3D" transform="rotate(-18 60 72)">
      <circle cx="34" cy="72" r="3"/><circle cx="50" cy="72" r="3"/><circle cx="66" cy="72" r="3"/><circle cx="82" cy="72" r="3"/>
    </g>`,

  antorcha: `
    <rect x="52" y="54" width="16" height="46" rx="5" fill="#8C6B4A"/>
    <path d="M60 12 C44 26 44 40 54 48 C50 38 56 34 58 30 C60 40 72 42 68 54 C84 46 80 24 60 12 Z" fill="#FFD867"/>
    <path d="M60 30 C54 38 56 46 60 50 C58 44 62 42 62 38 Z" fill="#FF9E5C"/>`,

  lira: `
    <path d="M34 100 V52 Q34 24 60 20 Q86 24 86 52 V100" fill="none" stroke="#FFF4DE" stroke-width="7" stroke-linecap="round"/>
    <path d="M46 100 V44 M74 100 V44" stroke="rgba(255,255,255,.6)" stroke-width="4" stroke-linecap="round"/>
    <g stroke="#FFD867" stroke-width="3" stroke-linecap="round">
      <path d="M40 96 H80"/><path d="M40 82 H80"/><path d="M40 68 H80"/>
    </g>`,

  talon: `
    <path d="M36 44 Q30 80 46 96 Q64 104 88 92 Q98 88 96 78 Q84 84 70 78 Q60 74 58 60 Q56 46 42 42 Z" fill="#FFF4DE"/>
    <circle cx="56" cy="60" r="7" fill="#FFD867"/>`,

  lanza: `
    <path d="M60 14 L74 32 L60 40 L46 32 Z" fill="#FFF4DE"/>
    <rect x="57" y="36" width="6" height="66" rx="3" fill="rgba(255,255,255,.8)"/>
    <path d="M40 92 h40" stroke="#FFD867" stroke-width="6" stroke-linecap="round"/>`,

  vellocino: `
    <ellipse cx="60" cy="60" rx="36" ry="30" fill="#E8C34A"/>
    <g fill="#FFD867">
      <circle cx="38" cy="48" r="8"/><circle cx="54" cy="38" r="8"/><circle cx="72" cy="38" r="8"/><circle cx="86" cy="50" r="8"/>
      <circle cx="34" cy="66" r="8"/><circle cx="88" cy="68" r="8"/><circle cx="48" cy="80" r="8"/><circle cx="72" cy="80" r="8"/>
    </g>
    <ellipse cx="60" cy="60" rx="20" ry="16" fill="#F4DE8A"/>`,

  ovillo: `
    <circle cx="60" cy="62" r="34" fill="#FFF4DE"/>
    <g stroke="rgba(168,92,122,.55)" stroke-width="4" fill="none" stroke-linecap="round">
      <path d="M30 50 Q60 30 90 50"/><path d="M28 62 Q60 44 92 62"/><path d="M30 74 Q60 92 90 74"/>
      <path d="M40 40 Q60 62 40 88"/><path d="M80 40 Q60 62 80 88"/>
    </g>
    <path d="M90 50 q10 -6 12 -16" stroke="#FFD867" stroke-width="4" fill="none" stroke-linecap="round"/>`,

  manzana: `
    <path d="M60 40 C42 34 30 48 30 66 a30 26 0 0 0 60 0 C90 48 78 34 60 40 Z" fill="#C9502A"/>
    <path d="M58 40 q0 -12 -8 -18" stroke="#5C7A3D" stroke-width="4" fill="none" stroke-linecap="round"/>
    <ellipse cx="48" cy="56" rx="6" ry="10" fill="rgba(255,255,255,.25)"/>`,

  brida: `
    <ellipse cx="60" cy="60" rx="28" ry="34" fill="none" stroke="#FFD867" stroke-width="7"/>
    <path d="M60 26 V94 M32 60 H88" stroke="#FFD867" stroke-width="5" stroke-linecap="round"/>
    <circle cx="60" cy="60" r="8" fill="#FFF4DE"/>`,

  jarra: `
    <path d="M46 30 h28 v14 h-8 v6 c14 4 22 20 20 36 c-2 14 -14 20 -26 20 s-24 -6 -26 -20 c-2 -16 6 -32 20 -36 v-6 h-8 Z" fill="#B58A5C"/>
    <path d="M42 62 q18 10 36 0" stroke="rgba(255,255,255,.5)" stroke-width="4" fill="none" stroke-linecap="round"/>
    <ellipse cx="60" cy="40" rx="12" ry="4" fill="rgba(0,0,0,.15)"/>`,

  telarana: `
    <g stroke="#FFF4DE" stroke-width="3" fill="none">
      <path d="M60 14 V106 M18 60 H102 M30 26 L90 94 M90 26 L30 94"/>
      <circle cx="60" cy="60" r="14"/><circle cx="60" cy="60" r="26"/><circle cx="60" cy="60" r="38"/>
    </g>
    <circle cx="70" cy="46" r="7" fill="#4A3D3D"/>
    <g stroke="#4A3D3D" stroke-width="2.5" stroke-linecap="round">
      <path d="M65 40 l-6 -6 M75 40 l6 -6 M64 52 l-8 2 M76 52 l8 2"/>
    </g>`,

  corona: `
    <path d="M26 78 L34 40 L52 60 L60 32 L68 60 L86 40 L94 78 Z" fill="#FFD867"/>
    <rect x="26" y="78" width="68" height="14" rx="4" fill="#E8B93A"/>
    <circle cx="60" cy="32" r="6" fill="#FFF4DE"/>
    <circle cx="34" cy="40" r="5" fill="#FFF4DE"/>
    <circle cx="86" cy="40" r="5" fill="#FFF4DE"/>`,

  pegaso: `
    <ellipse cx="60" cy="70" rx="26" ry="18" fill="#FFF4DE"/>
    <path d="M44 58 L34 36 L54 48 Z" fill="#FFF4DE"/>
    <g fill="rgba(255,255,255,.85)">
      <path d="M50 60 C34 44 18 42 10 50 C22 52 26 56 20 62 C30 64 34 66 32 74 C42 74 48 70 50 60 Z"/>
    </g>
    <circle cx="42" cy="56" r="3" fill="#4A431F"/>
    <path d="M84 78 q14 6 20 -4" stroke="#FFD867" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M60 86 v18 M72 86 v18" stroke="#FFF4DE" stroke-width="6" stroke-linecap="round"/>`,

  centauro: `
    <ellipse cx="66" cy="76" rx="30" ry="18" fill="#8C6B4A"/>
    <path d="M96 78 q14 6 18 -6" stroke="#5C4A3D" stroke-width="5" fill="none" stroke-linecap="round"/>
    <circle cx="46" cy="42" r="16" fill="#FFF4DE"/>
    <circle cx="41" cy="40" r="2.5" fill="#4A3D2E"/>
    <circle cx="51" cy="40" r="2.5" fill="#4A3D2E"/>
    <path d="M44 46 q3 3 6 0" stroke="#4A3D2E" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M46 56 V70" stroke="#FFF4DE" stroke-width="8" stroke-linecap="round"/>
    <path d="M20 40 L46 34 L44 46 Z" fill="#FFD867"/>`,

  fenix: `
    <path d="M60 22 C40 40 40 58 52 68 C48 56 54 50 56 46 C58 58 72 60 66 76 C86 66 84 38 60 22 Z" fill="#FF9E5C"/>
    <path d="M60 40 C52 50 54 62 60 68 C58 60 62 58 62 52 Z" fill="#C9502A"/>
    <path d="M60 68 q-16 6 -20 22 q14 -4 20 -12 q6 8 20 12 q-4 -16 -20 -22 Z" fill="#FFD867"/>`,

  cerbero: `
    <ellipse cx="60" cy="76" rx="34" ry="22" fill="#5C4A4A"/>
    <circle cx="34" cy="46" r="14" fill="#6B5555"/>
    <circle cx="60" cy="40" r="16" fill="#6B5555"/>
    <circle cx="86" cy="46" r="14" fill="#6B5555"/>
    <g fill="#FFD867"><circle cx="30" cy="44" r="2.5"/><circle cx="38" cy="44" r="2.5"/>
      <circle cx="55" cy="38" r="2.5"/><circle cx="65" cy="38" r="2.5"/>
      <circle cx="82" cy="44" r="2.5"/><circle cx="90" cy="44" r="2.5"/></g>`,

  serpientes: `
    <circle cx="60" cy="66" r="26" fill="#FFF4DE"/>
    <circle cx="51" cy="60" r="4" fill="#4A6B4A"/>
    <circle cx="69" cy="60" r="4" fill="#4A6B4A"/>
    <g stroke="#4A6B4A" stroke-width="5" fill="none" stroke-linecap="round">
      <path d="M30 30 q10 8 4 18 q-8 8 2 16"/>
      <path d="M50 24 q8 10 0 18 q-8 8 2 16"/>
      <path d="M70 24 q-8 10 0 18 q8 8 -2 16"/>
      <path d="M90 30 q-10 8 -4 18 q8 8 -2 16"/>
    </g>`,

  esfinge: `
    <ellipse cx="60" cy="82" rx="34" ry="16" fill="#B58A5C"/>
    <path d="M40 40 h40 v40 h-40 Z" fill="#D9B98A"/>
    <circle cx="50" cy="54" r="4" fill="#4A3D2E"/>
    <circle cx="70" cy="54" r="4" fill="#4A3D2E"/>
    <path d="M46 68 h28" stroke="#4A3D2E" stroke-width="3" stroke-linecap="round"/>
    <path d="M40 40 l-10 -18 h20 Z" fill="#B58A5C"/>
    <path d="M80 40 l10 -18 h-20 Z" fill="#B58A5C"/>`,

  toro: `
    <ellipse cx="60" cy="70" rx="30" ry="24" fill="#6B4A3D"/>
    <path d="M24 46 q-14 -4 -16 -18 q14 2 20 14 Z" fill="#8C6B5C"/>
    <path d="M96 46 q14 -4 16 -18 q-14 2 -20 14 Z" fill="#8C6B5C"/>
    <circle cx="48" cy="60" r="5" fill="#2E2521"/>
    <circle cx="72" cy="60" r="5" fill="#2E2521"/>
    <ellipse cx="60" cy="78" rx="10" ry="6" fill="#3D302A"/>`,

  rueca: `
    <circle cx="60" cy="60" r="34" fill="none" stroke="#FFF4DE" stroke-width="6"/>
    <g stroke="#FFF4DE" stroke-width="4" stroke-linecap="round">
      <path d="M60 26 V94"/><path d="M26 60 H94"/><path d="M37 37 L83 83"/><path d="M83 37 L37 83"/>
    </g>
    <circle cx="60" cy="60" r="9" fill="#FFD867"/>`,

  muerdago: `
    <g fill="#FFF4DE"><ellipse cx="46" cy="60" rx="14" ry="8" transform="rotate(-20 46 60)"/>
      <ellipse cx="74" cy="60" rx="14" ry="8" transform="rotate(20 74 60)"/>
      <ellipse cx="46" cy="80" rx="14" ry="8" transform="rotate(20 46 80)"/>
      <ellipse cx="74" cy="80" rx="14" ry="8" transform="rotate(-20 74 80)"/></g>
    <g fill="#FFF4DE" stroke="rgba(255,255,255,.4)" stroke-width="2"><circle cx="60" cy="70" r="6"/><circle cx="68" cy="76" r="6"/><circle cx="52" cy="76" r="6"/></g>
    <path d="M60 40 v20" stroke="#8C9E4A" stroke-width="5" stroke-linecap="round"/>`,

  manzanasdoradas: `
    <path d="M44 50 C34 46 26 54 26 64 a16 14 0 0 0 32 0 C58 54 54 46 44 50 Z" fill="#FFD867"/>
    <path d="M76 50 C66 46 58 54 58 64 a16 14 0 0 0 32 0 C90 54 86 46 76 50 Z" fill="#FFD867"/>
    <path d="M60 74 C50 70 42 78 42 88 a16 14 0 0 0 32 0 C74 78 70 70 60 74 Z" fill="#F4DE8A"/>
    <path d="M44 50 q0 -8 -6 -12 M76 50 q0 -8 6 -12 M60 74 q0 -8 -4 -10" stroke="#5C7A3D" stroke-width="3" fill="none" stroke-linecap="round"/>`,

  runas: `
    <rect x="40" y="20" width="20" height="80" rx="6" fill="#FFF4DE"/>
    <g stroke="#6B5C8C" stroke-width="4" stroke-linecap="round">
      <path d="M46 34 L54 42 M46 42 L54 34"/>
      <path d="M50 54 V70 M46 58 L50 54 L54 58"/>
      <path d="M46 82 L54 90 M50 82 V90"/>
    </g>`,

  jabali: `
    <ellipse cx="58" cy="70" rx="34" ry="22" fill="#D9B93A"/>
    <path d="M90 62 L104 58 L96 70 L104 78 L90 74 Z" fill="#FFD867"/>
    <path d="M28 60 l-10 -6 4 12 -8 8 12 -2" fill="#FFF4DE"/>
    <circle cx="42" cy="62" r="4" fill="#4A3D2E"/>`,

  ola: `
    <path d="M14 60 q12 -16 24 0 t24 0 t24 0 t24 0" fill="none" stroke="#FFF4DE" stroke-width="7" stroke-linecap="round"/>
    <path d="M14 78 q12 -16 24 0 t24 0 t24 0 t24 0" fill="none" stroke="rgba(255,255,255,.6)" stroke-width="7" stroke-linecap="round"/>
    <path d="M14 42 q12 -14 24 0 t24 0 t24 0 t24 0" fill="none" stroke="rgba(255,255,255,.35)" stroke-width="6" stroke-linecap="round"/>`,

  esquis: `
    <rect x="34" y="20" width="10" height="80" rx="5" fill="#FFF4DE" transform="rotate(-10 39 60)"/>
    <rect x="76" y="20" width="10" height="80" rx="5" fill="#FFF4DE" transform="rotate(10 81 60)"/>
    <circle cx="60" cy="46" r="14" fill="#7A8C9E"/>
    <path d="M50 60 L60 78 L70 60" fill="none" stroke="#7A8C9E" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>`,

  dragon: `
    <path d="M28 78 Q40 40 76 34 Q100 30 104 46 Q90 42 82 50 Q94 52 96 64 Q82 58 72 64 Q60 70 60 82 Q48 74 28 78 Z" fill="#5C6B3D"/>
    <circle cx="90" cy="42" r="3.5" fill="#FFD867"/>
    <path d="M76 34 l-8 -12 l4 14 Z" fill="#8FA85C"/>
    <path d="M96 46 l10 -4 l-4 10 Z" fill="#FFD867"/>`,

  anillofuego: `
    <ellipse cx="60" cy="70" rx="36" ry="18" fill="none" stroke="#A64B3D" stroke-width="8"/>
    <g fill="#FFD867">
      <path d="M30 62 q-4 -10 4 -16 q-2 10 4 12 Z"/>
      <path d="M60 52 q-4 -12 4 -18 q-2 12 4 14 Z"/>
      <path d="M90 62 q4 -10 -4 -16 q2 10 -4 12 Z"/>
    </g>`,

  pozo: `
    <ellipse cx="60" cy="46" rx="30" ry="12" fill="#3D5C5C"/>
    <ellipse cx="60" cy="46" rx="20" ry="7" fill="#1E3A3A"/>
    <path d="M30 46 v30 a30 10 0 0 0 60 0 v-30" fill="none" stroke="#FFF4DE" stroke-width="6"/>
    <circle cx="60" cy="20" r="4" fill="#FFD867"/>
    <path d="M60 24 V38" stroke="#FFD867" stroke-width="3"/>`,

  yggdrasil: `
    <path d="M60 20 V70" stroke="#FFF4DE" stroke-width="7" stroke-linecap="round"/>
    <path d="M60 40 Q30 30 24 14 M60 40 Q90 30 96 14 M60 55 Q28 50 16 60 M60 55 Q92 50 104 60" fill="none" stroke="#FFF4DE" stroke-width="5" stroke-linecap="round"/>
    <path d="M60 70 q-16 8 -20 26 M60 70 q16 8 20 26" fill="none" stroke="rgba(255,255,255,.6)" stroke-width="5" stroke-linecap="round"/>
    <g fill="#FFD867"><circle cx="24" cy="14" r="5"/><circle cx="96" cy="14" r="5"/><circle cx="16" cy="60" r="5"/><circle cx="104" cy="60" r="5"/></g>`,

  valquiria: `
    <path d="M60 30 L48 60 H72 Z" fill="#FFF4DE"/>
    <rect x="52" y="60" width="16" height="30" rx="4" fill="rgba(255,255,255,.8)"/>
    <path d="M40 46 C24 40 12 46 8 56 C20 54 26 58 22 66 C32 64 36 60 40 52 Z" fill="#5C7A9E"/>
    <path d="M80 46 C96 40 108 46 112 56 C100 54 94 58 98 66 C88 64 84 60 80 52 Z" fill="#5C7A9E"/>
    <circle cx="60" cy="24" r="6" fill="#FFD867"/>`,

  sleipnir: `
    <ellipse cx="58" cy="60" rx="30" ry="20" fill="#FFF4DE"/>
    <path d="M40 46 L30 24 L52 38 Z" fill="#FFF4DE"/>
    <circle cx="36" cy="42" r="3" fill="#4A431F"/>
    <g stroke="rgba(255,255,255,.85)" stroke-width="7" stroke-linecap="round">
      <path d="M40 76 L34 100"/><path d="M52 78 L48 102"/><path d="M66 78 L70 102"/><path d="M78 76 L84 100"/>
    </g>
    <path d="M86 56 q10 4 14 -4" stroke="#FFD867" stroke-width="4" fill="none" stroke-linecap="round"/>`,

  ardilla: `
    <ellipse cx="52" cy="70" rx="20" ry="16" fill="#8C6B4A"/>
    <circle cx="34" cy="58" r="12" fill="#8C6B4A"/>
    <circle cx="29" cy="55" r="2.5" fill="#2E2521"/>
    <path d="M70 62 C92 50 100 30 88 16 C88 36 78 46 62 54 Z" fill="#A6805C"/>
    <path d="M52 54 L46 40 L58 44 Z" fill="#8C6B4A"/>`,

  fenrir: `
    <path d="M34 40 L22 12 L50 28 Z" fill="#EDF2F7"/>
    <path d="M86 40 L98 12 L70 28 Z" fill="#EDF2F7"/>
    <path d="M60 24 L96 44 L88 92 Q60 108 32 92 L24 44 Z" fill="#EDF2F7"/>
    <circle cx="47" cy="56" r="5.5" fill="#8C1A1A"/>
    <circle cx="73" cy="56" r="5.5" fill="#8C1A1A"/>
    <path d="M50 70 L70 70 L60 80 Z" fill="#2E2521"/>
    <path d="M40 80 q20 20 40 0" stroke="#2E2521" stroke-width="4" fill="none" stroke-linecap="round"/>`,

  bota: `
    <path d="M50 20 h20 v46 l24 8 q8 4 8 14 v6 H40 v-40 Z" fill="#6B5040"/>
    <path d="M40 94 h62 v8 h-62 Z" fill="#4A3830"/>
    <path d="M56 30 h8" stroke="rgba(255,255,255,.3)" stroke-width="4" stroke-linecap="round"/>`,

  reloj_arena: `
    <path d="M34 20 H86 L64 60 L86 100 H34 L56 60 Z" fill="#FFF4DE"/>
    <path d="M34 20 H86 V28 H34 Z" fill="rgba(255,255,255,.75)"/>
    <path d="M34 92 H86 V100 H34 Z" fill="rgba(255,255,255,.75)"/>
    <path d="M44 30 L76 30 L60 55 Z" fill="#5C4A6B" opacity=".55"/>
    <path d="M60 65 L52 90 H68 Z" fill="#FFD867"/>`,

  pocion: `
    <path d="M50 22 h20 v18 l18 34 c6 12 -3 26 -17 26 H49 c-14 0 -23 -14 -17 -26 l18 -34 Z" fill="#FFF4DE"/>
    <path d="M46 74 h28 l4 8 c4 8 -2 16 -10 16 H52 c-8 0 -14 -8 -10 -16 Z" fill="#3D5C4A"/>
    <rect x="48" y="18" width="24" height="8" rx="3" fill="#FFD867"/>
    <circle cx="60" cy="60" r="4" fill="#FFD867"/>
    <circle cx="52" cy="68" r="3" fill="#FFD867"/>`,

  sombras: `
    <path d="M60 18 a42 42 0 1 0 42 42 A34 34 0 0 1 60 18 Z" fill="#FFF4DE"/>
    <circle cx="80" cy="36" r="3" fill="#FFF4DE"/>
    <circle cx="92" cy="52" r="2" fill="#FFF4DE"/>
    <path d="M40 78 h40" stroke="rgba(255,255,255,.4)" stroke-width="4" stroke-linecap="round"/>`,

  padre_hombros: `
    <circle cx="46" cy="34" r="12" fill="#FFF4DE"/>
    <path d="M28 96 q0 -30 18 -34 q18 4 18 34 Z" fill="#FFF4DE"/>
    <circle cx="80" cy="52" r="9" fill="rgba(255,255,255,.85)"/>
    <path d="M62 60 q12 -4 18 6 q4 10 -4 30 h-20 q-4 -20 6 -36 Z" fill="rgba(255,255,255,.85)"/>
    <path d="M50 66 q8 -6 16 -2" stroke="#8C4A3D" stroke-width="3" fill="none" stroke-linecap="round"/>`,

  llave_acertijo: `
    <circle cx="42" cy="42" r="20" fill="none" stroke="#FFF4DE" stroke-width="8"/>
    <rect x="58" y="55" width="9" height="42" rx="3" fill="#FFF4DE" transform="rotate(45 62 76)"/>
    <path d="M78 72 l10 10 M84 78 l8 8" stroke="#FFF4DE" stroke-width="7" stroke-linecap="round"/>
    <text x="42" y="49" text-anchor="middle" font-size="20" font-weight="800" fill="#6B5C3D">?</text>`,

  espejo: `
    <ellipse cx="60" cy="52" rx="30" ry="36" fill="none" stroke="#FFF4DE" stroke-width="7"/>
    <ellipse cx="60" cy="52" rx="30" ry="36" fill="rgba(255,255,255,.2)"/>
    <rect x="53" y="86" width="14" height="22" rx="4" fill="#FFF4DE"/>
    <path d="M40 96 h40" stroke="#FFF4DE" stroke-width="6" stroke-linecap="round"/>
    <path d="M46 36 q14 -10 28 0" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round" opacity=".7"/>`,

  vision: `
    <path d="M18 60 q42 -34 84 0 q-42 34 -84 0 Z" fill="#FFF4DE"/>
    <circle cx="60" cy="60" r="16" fill="#5C3D5C"/>
    <circle cx="60" cy="60" r="7" fill="#FFD867"/>
    <path d="M30 30 l6 8 M90 30 l-6 8" stroke="#FFD867" stroke-width="3.5" fill="none" stroke-linecap="round"/>`,

  vara_magica: `
    <rect x="55" y="30" width="10" height="70" rx="4" fill="#FFF4DE" transform="rotate(20 60 65)"/>
    <path d="M78 26 l4 10 10 4 -10 4 -4 10 -4 -10 -10 -4 10 -4 Z" fill="#FFD867"/>
    <circle cx="38" cy="80" r="3" fill="#FFD867"/>
    <circle cx="30" cy="66" r="2.5" fill="#FFD867"/>
    <circle cx="46" cy="92" r="2.5" fill="#FFD867"/>`,

  loba_capitolina: `
    <ellipse cx="60" cy="66" rx="34" ry="20" fill="#FFF4DE"/>
    <path d="M34 54 L26 32 L46 46 Z" fill="#FFF4DE"/>
    <path d="M86 54 L94 32 L74 46 Z" fill="#FFF4DE"/>
    <circle cx="48" cy="58" r="4" fill="#4A2E22"/>
    <circle cx="72" cy="58" r="4" fill="#4A2E22"/>
    <circle cx="44" cy="82" r="7" fill="rgba(255,255,255,.7)"/>
    <circle cx="60" cy="86" r="7" fill="rgba(255,255,255,.7)"/>
    <circle cx="76" cy="82" r="7" fill="rgba(255,255,255,.7)"/>`,

  cetro: `
    <rect x="55" y="30" width="10" height="72" rx="4" fill="#FFF4DE"/>
    <circle cx="60" cy="24" r="14" fill="#FFD867"/>
    <path d="M60 14 v20 M50 24 h20" stroke="#6B4A4A" stroke-width="3" stroke-linecap="round"/>
    <path d="M45 100 h30" stroke="rgba(255,255,255,.5)" stroke-width="5" stroke-linecap="round"/>`,

  flecha_amor: `
    <path d="M60 60 m-34 0 a34 34 0 1 0 68 0 a34 34 0 1 0 -68 0" fill="none" stroke="#C97B9E" stroke-width="5" opacity=".4"/>
    <path d="M26 60 H86" stroke="#FFF4DE" stroke-width="5" stroke-linecap="round"/>
    <path d="M86 60 L72 50 M86 60 L72 70" stroke="#FFF4DE" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M26 60 L38 52 L38 68 Z" fill="#FFD867"/>`,

  muralla_cartago: `
    <rect x="22" y="58" width="76" height="42" fill="#FFF4DE"/>
    <rect x="22" y="46" width="14" height="14" fill="#FFF4DE"/>
    <rect x="44" y="46" width="14" height="14" fill="#FFF4DE"/>
    <rect x="66" y="46" width="14" height="14" fill="#FFF4DE"/>
    <rect x="88" y="46" width="10" height="14" fill="#FFF4DE"/>
    <rect x="50" y="76" width="20" height="24" fill="#8C5C3D"/>
    <path d="M22 58 h76" stroke="rgba(140,92,61,.4)" stroke-width="3"/>`,

  estrella_cadena: `
    <g fill="#FFD867">
      <circle cx="30" cy="30" r="4"/><circle cx="52" cy="44" r="4"/><circle cx="70" cy="30" r="4"/>
      <circle cx="90" cy="50" r="4"/><circle cx="60" cy="70" r="4"/><circle cx="40" cy="90" r="4"/><circle cx="80" cy="90" r="4"/>
    </g>
    <path d="M30 30 L52 44 L70 30 M52 44 L60 70 L40 90 M60 70 L80 90" stroke="rgba(255,255,255,.55)" stroke-width="2.5" fill="none"/>`,

  vasija_agua: `
    <path d="M42 30 h36 l-4 14 c14 8 20 24 14 40 c-4 12 -16 18 -32 18 s-28 -6 -32 -18 c-6 -16 0 -32 14 -40 Z" fill="#FFF4DE"/>
    <path d="M42 30 h36" stroke="#4A8C8C" stroke-width="4"/>
    <path d="M34 74 q26 12 52 0" stroke="rgba(74,140,140,.4)" stroke-width="4" fill="none"/>`,

  isla_lejana: `
    <path d="M20 76 q40 -18 80 0 q-8 20 -40 20 t-40 -20 Z" fill="#FFF4DE"/>
    <path d="M50 76 q4 -30 10 -48 q10 18 10 48 Z" fill="#3D6B6B"/>
    <circle cx="60" cy="24" r="8" fill="#FFD867"/>
    <path d="M14 84 q46 14 92 0" stroke="rgba(255,255,255,.4)" stroke-width="4" fill="none" stroke-linecap="round"/>`,

  mariposa_alma: `
    <path d="M60 40 C46 18 20 24 22 46 C24 62 44 62 60 46 Z" fill="#FFF4DE"/>
    <path d="M60 40 C74 18 100 24 98 46 C96 62 76 62 60 46 Z" fill="#FFF4DE"/>
    <path d="M60 46 C48 62 26 66 26 82 C42 82 56 70 60 58 Z" fill="rgba(255,255,255,.75)"/>
    <path d="M60 46 C72 62 94 66 94 82 C78 82 64 70 60 58 Z" fill="rgba(255,255,255,.75)"/>
    <rect x="58" y="38" width="4" height="46" rx="2" fill="#4A3D2E"/>`,

  hojas_laurel: `
    <path d="M60 16 V104" stroke="#FFF4DE" stroke-width="5" stroke-linecap="round"/>
    <g fill="#FFF4DE">
      <ellipse cx="46" cy="32" rx="10" ry="5" transform="rotate(-30 46 32)"/>
      <ellipse cx="74" cy="32" rx="10" ry="5" transform="rotate(30 74 32)"/>
      <ellipse cx="42" cy="54" rx="10" ry="5" transform="rotate(-30 42 54)"/>
      <ellipse cx="78" cy="54" rx="10" ry="5" transform="rotate(30 78 54)"/>
      <ellipse cx="46" cy="76" rx="10" ry="5" transform="rotate(-30 46 76)"/>
      <ellipse cx="74" cy="76" rx="10" ry="5" transform="rotate(30 74 76)"/>
    </g>`,

  ondas_sonido: `
    <circle cx="60" cy="60" r="8" fill="#FFF4DE"/>
    <path d="M76 44 a24 24 0 0 1 0 32" fill="none" stroke="#FFF4DE" stroke-width="5" stroke-linecap="round"/>
    <path d="M86 32 a40 40 0 0 1 0 56" fill="none" stroke="rgba(255,255,255,.6)" stroke-width="5" stroke-linecap="round"/>
    <path d="M44 44 a24 24 0 0 0 0 32" fill="none" stroke="#FFF4DE" stroke-width="5" stroke-linecap="round"/>
    <path d="M34 32 a40 40 0 0 0 0 56" fill="none" stroke="rgba(255,255,255,.6)" stroke-width="5" stroke-linecap="round"/>`,

  flor_narciso: `
    <circle cx="60" cy="60" r="10" fill="#FFD867"/>
    <g fill="#FFF4DE">
      <ellipse cx="60" cy="38" rx="10" ry="16"/>
      <ellipse cx="60" cy="82" rx="10" ry="16"/>
      <ellipse cx="38" cy="60" rx="16" ry="10"/>
      <ellipse cx="82" cy="60" rx="16" ry="10"/>
    </g>
    <path d="M60 92 V108" stroke="#6B9E8C" stroke-width="5" stroke-linecap="round"/>`,

  escudo_amazona: `
    <path d="M60 16 L94 28 V58 C94 82 78 98 60 106 C42 98 26 82 26 58 V28 Z" fill="#FFF4DE"/>
    <path d="M60 16 L94 28 V58 C94 82 78 98 60 106 Z" fill="rgba(0,0,0,.12)"/>
    <path d="M60 32 V90 M40 50 L80 70 M80 50 L40 70" stroke="#8C3D5C" stroke-width="4.5" stroke-linecap="round"/>`,

  manzana_discordia: `
    <path d="M60 42 C42 36 30 50 30 68 a30 26 0 0 0 60 0 C90 50 78 36 60 42 Z" fill="#FFD867"/>
    <path d="M58 42 q0 -12 -8 -18" stroke="#9E6B4A" stroke-width="4" fill="none" stroke-linecap="round"/>
    <text x="60" y="80" text-anchor="middle" font-size="26" font-weight="800" fill="#9E6B4A">?</text>`,
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
