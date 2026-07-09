/* Ilustraciones SVG de cada carta, generadas en código (cero imágenes externas).
   Cada función devuelve el contenido interno de un <svg viewBox="0 0 120 120">.
   Para agregar un personaje nuevo con icono propio: sumar una entrada acá
   y referenciarla desde el campo "icono" de personajes.json. */

const ICONOS = {

  laberinto: `
    <defs>
      <linearGradient id="labGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#FFFFFF"/>
        <stop offset="1" stop-color="#D9D3C8"/>
      </linearGradient>
      <radialGradient id="labGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#FFE9A8"/>
        <stop offset="1" stop-color="#FFD867" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <ellipse cx="60" cy="102" rx="30" ry="6" fill="rgba(0,0,0,.25)"/>
    <path d="M22 28 H98 V100 H22 V48 H78 V80 H46 V64" fill="none"
      stroke="rgba(0,0,0,.35)" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M22 26 H98 V98 H22 V46 H78 V78 H46 V62" fill="none"
      stroke="url(#labGrad)" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="60" cy="62" r="14" fill="url(#labGlow)"/>
    <g data-extra="hilo">
      <path d="M12 14 Q30 20 32 38 Q34 56 30 88 Q52 92 54 70 L57 63" fill="none"
        stroke="#FF8A7A" stroke-width="3.2" stroke-linecap="round" opacity=".95" data-fx="draw"/>
      <circle cx="12" cy="14" r="6" fill="#FF8A7A" stroke="#C25548" stroke-width="1.5"/>
    </g>
    <circle cx="60" cy="62" r="5.5" fill="#FFD867" stroke="#B8862A" stroke-width="1.5"/>`,

  leon: `
    <defs>
      <radialGradient id="leonMane" cx="50%" cy="45%" r="60%">
        <stop offset="0" stop-color="#FFE9A8"/>
        <stop offset="65%" stop-color="#F0B94A"/>
        <stop offset="100%" stop-color="#C9862A"/>
      </radialGradient>
      <linearGradient id="leonFace" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#FFFBEF"/>
        <stop offset="1" stop-color="#F4DFAE"/>
      </linearGradient>
    </defs>
    <ellipse cx="60" cy="106" rx="34" ry="7" fill="rgba(0,0,0,.28)"/>
    <circle cx="60" cy="62" r="44" fill="url(#leonMane)" stroke="#8C5A1E" stroke-width="2.5"/>
    <g stroke="#B8862A" stroke-width="4" stroke-linecap="round" opacity=".55" data-fx="pulse">
      <path d="M60 14 v10"/><path d="M60 100 v10"/><path d="M12 62 h10"/><path d="M98 62 h10"/>
      <path d="M28 30 l7 7"/><path d="M85 87 l7 7"/><path d="M92 30 l-7 7"/><path d="M35 87 l-7 7"/>
    </g>
    <circle cx="60" cy="62" r="30" fill="url(#leonFace)" stroke="#8C5A1E" stroke-width="2"/>
    <ellipse cx="48" cy="52" rx="6.5" ry="8" fill="#fff" opacity=".8"/>
    <circle cx="49" cy="56" r="4.5" fill="#5C4023"/>
    <circle cx="71" cy="56" r="4.5" fill="#5C4023"/>
    <circle cx="47.5" cy="54.5" r="1.3" fill="#fff"/>
    <circle cx="69.5" cy="54.5" r="1.3" fill="#fff"/>
    <path d="M55 64 L65 64 L60 70 Z" fill="#5C4023"/>
    <path d="M52 74 q8 7 16 0" stroke="#5C4023" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <ellipse cx="43" cy="68" rx="5" ry="3" fill="#E8935C" opacity=".5"/>
    <ellipse cx="77" cy="68" rx="5" ry="3" fill="#E8935C" opacity=".5"/>`,

  telar: `
    <defs>
      <linearGradient id="telarFrame" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#FFF6E0"/>
        <stop offset="1" stop-color="#D8CDB0"/>
      </linearGradient>
      <linearGradient id="telarHilo" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#FFD867"/>
        <stop offset="1" stop-color="#FF9E9E"/>
      </linearGradient>
    </defs>
    <ellipse cx="60" cy="106" rx="32" ry="6" fill="rgba(0,0,0,.25)"/>
    <rect x="26" y="20" width="68" height="80" rx="9" fill="rgba(255,255,255,.06)" stroke="url(#telarFrame)" stroke-width="7"/>
    <g stroke="rgba(255,255,255,.55)" stroke-width="4" stroke-linecap="round">
      <path d="M40 28 V92"/><path d="M53 28 V92"/><path d="M67 28 V92"/><path d="M80 28 V92"/>
    </g>
    <g stroke="url(#telarHilo)" stroke-width="5.5" fill="none" stroke-linecap="round" data-fx="wave">
      <path d="M33 68 q7 -6 14 0 t14 0 t14 0 t12 0"/>
      <path d="M33 78 q7 6 14 0 t14 0 t14 0 t12 0"/>
      <path d="M33 88 q7 -6 14 0 t14 0 t14 0 t12 0"/>
    </g>
    <circle cx="83" cy="30" r="6" fill="#FFD867" opacity=".85"/>
    <g data-extra="luna" data-fx="pulse"><path d="M104 22 a9 9 0 1 1 -9 -12 a7.5 7.5 0 0 0 9 12 Z" fill="#EDF2FF" opacity=".95"/></g>
    <path d="M91 88 q14 4 12 16" stroke="#FF9E9E" stroke-width="4" fill="none" stroke-linecap="round"/>
    <circle cx="103" cy="106" r="4" fill="#FF9E9E"/>`,

  cielo: `
    <path d="M22 64 a38 38 0 0 1 76 0 Z" fill="rgba(255,255,255,.22)" stroke="#fff" stroke-width="6"/>
    <g fill="#FFD867" data-fx="twinkle">
      <circle cx="44" cy="48" r="3.5"/><circle cx="62" cy="38" r="3.5"/>
      <circle cx="79" cy="50" r="3.5"/><circle cx="60" cy="56" r="2.5"/>
    </g>
    <circle cx="60" cy="80" r="10" fill="#FFF4DE"/>
    <path d="M40 100 L46 66 M80 100 L74 66" stroke="#FFF4DE" stroke-width="8" stroke-linecap="round" fill="none"/>
    <path d="M46 100 h28" stroke="#FFF4DE" stroke-width="8" stroke-linecap="round"/>`,

  atlas: `
    <path d="M22 60 a38 38 0 0 1 76 0 Z" fill="rgba(255,255,255,.22)" stroke="#fff" stroke-width="6"/>
    <g fill="#FFD867" data-fx="twinkle">
      <circle cx="44" cy="44" r="3.5"/><circle cx="62" cy="34" r="3.5"/>
      <circle cx="79" cy="46" r="3.5"/><circle cx="60" cy="52" r="2.5"/>
    </g>
    <circle cx="60" cy="78" r="9" fill="#E8C9A0"/>
    <path d="M43 62 q17 -8 34 0" stroke="#E8C9A0" stroke-width="8" stroke-linecap="round" fill="none" data-extra="cargando" data-fx="pulse"/>
    <path d="M40 100 L47 86 M80 100 L73 86" stroke="#E8C9A0" stroke-width="8" stroke-linecap="round" fill="none"/>
    <path d="M47 100 h26" stroke="#E8C9A0" stroke-width="8" stroke-linecap="round"/>`,

  osa: `
    <ellipse cx="60" cy="106" rx="30" ry="5" fill="rgba(0,0,0,.28)"/>
    <ellipse cx="62" cy="70" rx="30" ry="20" fill="#8C7A6B"/>
    <circle cx="30" cy="58" r="15" fill="#8C7A6B"/>
    <path d="M22 46 l-4 -12 10 6 Z M18 50 l-11 -1 8 6 Z" fill="#8C7A6B"/>
    <circle cx="26" cy="56" r="2.2" fill="#2E2521"/>
    <path d="M18 60 q-4 2 0 4" stroke="#2E2521" stroke-width="2" fill="none"/>
    <g stroke="#6B5C4A" stroke-width="7" stroke-linecap="round"><path d="M48 86 v16"/><path d="M84 84 v18"/></g>
    <g fill="#FFD867" data-extra="osamayor" data-fx="twinkle">
      <circle cx="70" cy="30" r="3"/><circle cx="82" cy="26" r="3"/><circle cx="94" cy="32" r="3"/>
      <circle cx="96" cy="46" r="3"/><circle cx="84" cy="42" r="2.5"/>
      <path d="M70 30 L82 26 L94 32 L96 46 L84 42 L82 26" stroke="#FFD867" stroke-width="1.5" fill="none" opacity=".6"/>
    </g>`,

  trono: `
    <ellipse cx="60" cy="108" rx="24" ry="5" fill="rgba(0,0,0,.28)"/>
    <path d="M38 100 V54 h-8 V40 h8 a10 10 0 0 1 20 0 h4 a10 10 0 0 1 20 0 h6 V54 h-8 V100 Z" fill="#8C5C9E" stroke="#6B4483" stroke-width="2"/>
    <rect x="42" y="70" width="36" height="30" rx="4" fill="#6B4483"/>
    <circle cx="60" cy="60" r="7" fill="#FFD867" data-fx="pulse"/>
    <g fill="#FFF4DE" data-extra="w" data-fx="twinkle">
      <circle cx="30" cy="24" r="3"/><circle cx="45" cy="34" r="3"/><circle cx="60" cy="22" r="3"/>
      <circle cx="75" cy="34" r="3"/><circle cx="90" cy="24" r="3"/>
      <path d="M30 24 L45 34 L60 22 L75 34 L90 24" stroke="#FFF4DE" stroke-width="1.5" fill="none" opacity=".6"/>
    </g>`,

  cazador: `
    <g stroke="#7FA8D9" stroke-width="6" stroke-linecap="round" fill="none">
      <path d="M60 24 v54"/><path d="M60 40 L38 30 M60 40 L84 32"/>
      <path d="M60 78 L46 104 M60 78 L76 104"/>
    </g>
    <circle cx="60" cy="24" r="6" fill="#FFF4DE" data-fx="twinkle"/>
    <g fill="#FFD867" data-extra="cinturon" data-fx="twinkle">
      <circle cx="50" cy="58" r="4"/><circle cx="60" cy="60" r="4"/><circle cx="70" cy="62" r="4"/>
    </g>
    <circle cx="38" cy="30" r="4" fill="#FFF4DE"/><circle cx="84" cy="32" r="4" fill="#FF9E9E"/>
    <circle cx="46" cy="104" r="4" fill="#FFF4DE"/><circle cx="76" cy="104" r="4" fill="#7FD9E8"/>`,

  gemelos: `
    <g fill="#FFF4DE">
      <circle cx="44" cy="34" r="10"/><path d="M30 96 V60 a14 14 0 0 1 28 0 V96 Z"/>
      <circle cx="76" cy="34" r="10"/><path d="M62 96 V60 a14 14 0 0 1 28 0 V96 Z"/>
    </g>
    <path d="M54 62 h12" stroke="#7FA8D9" stroke-width="5" stroke-linecap="round" data-extra="union" data-fx="pulse"/>
    <g fill="#FFD867" data-fx="twinkle"><circle cx="44" cy="16" r="4"/><circle cx="76" cy="16" r="4"/></g>`,

  barco: `
    <defs>
      <linearGradient id="barcoHull" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#A67B4A"/><stop offset="1" stop-color="#6B4A26"/>
      </linearGradient>
      <linearGradient id="barcoVela" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="#D9D3C8"/>
      </linearGradient>
    </defs>
    <path d="M20 18 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3 Z" fill="#FFD867" data-extra="estrella" data-fx="twinkle"/>
    <path d="M26 74 H94 L80 94 H40 Z" fill="url(#barcoHull)" stroke="#4A3218" stroke-width="2"/>
    <path d="M30 78 H90" stroke="rgba(255,255,255,.25)" stroke-width="3" stroke-linecap="round"/>
    <path d="M60 74 V26" stroke="#8C6B4A" stroke-width="6" stroke-linecap="round"/>
    <path d="M64 30 L90 62 H64 Z" fill="url(#barcoVela)" stroke="#B8A88C" stroke-width="1.5"/>
    <path d="M56 36 L36 60 H56 Z" fill="url(#barcoVela)" opacity=".8"/>
    <g fill="none" stroke-linecap="round">
      <path d="M20 102 q8 -7 16 0 t16 0 t16 0 t16 0 t16 0" stroke="#BDEBFF" stroke-width="4.5"/>
      <path d="M28 92 q8 -6 16 0 t16 0 t16 0" stroke="rgba(189,235,255,.45)" stroke-width="4"/>
    </g>`,

  lechuza: `
    <defs>
      <linearGradient id="lechuzaBody" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#FFFBEF"/><stop offset="1" stop-color="#E8D9B8"/>
      </linearGradient>
    </defs>
    <ellipse cx="60" cy="104" rx="30" ry="6" fill="rgba(0,0,0,.25)"/>
    <path d="M38 40 L32 22 L50 32 Z" fill="url(#lechuzaBody)" stroke="#B8A272" stroke-width="2"/>
    <path d="M82 40 L88 22 L70 32 Z" fill="url(#lechuzaBody)" stroke="#B8A272" stroke-width="2"/>
    <ellipse cx="60" cy="62" rx="28" ry="31" fill="url(#lechuzaBody)" stroke="#B8A272" stroke-width="2"/>
    <path d="M44 76 q4 6 9 0 M67 76 q4 6 9 0" stroke="rgba(74,67,31,.45)" stroke-width="3" fill="none" stroke-linecap="round"/>
    <circle cx="49" cy="54" r="10" fill="#fff" stroke="#C9B87A" stroke-width="1.5"/>
    <circle cx="71" cy="54" r="10" fill="#fff" stroke="#C9B87A" stroke-width="1.5"/>
    <circle cx="49" cy="54" r="5" fill="#4A431F"/>
    <circle cx="71" cy="54" r="5" fill="#4A431F"/>
    <circle cx="47.5" cy="52.5" r="1.5" fill="#fff"/>
    <circle cx="69.5" cy="52.5" r="1.5" fill="#fff"/>
    <path d="M56 62 L64 62 L60 70 Z" fill="#C9902A"/>
    <g data-extra="olivo">
      <path d="M40 94 Q60 103 80 94" stroke="#7A8B3D" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      <g fill="#8FA85C">
        <ellipse cx="46" cy="95" rx="6" ry="3" transform="rotate(-15 46 95)"/>
        <ellipse cx="74" cy="95" rx="6" ry="3" transform="rotate(15 74 95)"/>
      </g>
      <circle cx="56" cy="98" r="3" fill="#5C6B3D"/>
      <circle cx="64" cy="98" r="3" fill="#5C6B3D"/>
    </g>`,

  escudo: `
    <defs>
      <radialGradient id="escMirror" cx="40%" cy="35%" r="75%">
        <stop offset="0" stop-color="#FFFFFF"/>
        <stop offset="60%" stop-color="#C9DCF2"/>
        <stop offset="100%" stop-color="#8FA8C9"/>
      </radialGradient>
    </defs>
    <ellipse cx="60" cy="104" rx="32" ry="6" fill="rgba(0,0,0,.25)"/>
    <circle cx="60" cy="60" r="38" fill="url(#escMirror)" stroke="#4A5A8C" stroke-width="3"/>
    <circle cx="60" cy="60" r="38" fill="none" stroke="#fff" stroke-width="5" opacity=".75"/>
    <g data-extra="medusa" data-fx="pulse">
      <g stroke="#4E9E8C" stroke-width="4" fill="none" stroke-linecap="round" opacity=".75">
        <path d="M48 52 q-6 -10 2 -14"/>
        <path d="M58 48 q0 -12 8 -12"/>
        <path d="M70 52 q8 -8 2 -16"/>
      </g>
      <circle cx="59" cy="62" r="11" fill="rgba(78,158,140,.35)"/>
      <circle cx="55" cy="60" r="2" fill="#2E5C50"/>
      <circle cx="63" cy="60" r="2" fill="#2E5C50"/>
    </g>
    <path d="M36 46 a28 28 0 0 1 18 -16" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M88 26 l3 8 8 3 -8 3 -3 8 -3 -8 -8 -3 8 -3 Z" fill="#FFD867"/>`,

  alas: `
    <defs>
      <linearGradient id="alasPluma" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="#D9D3C8"/>
      </linearGradient>
    </defs>
    <g data-extra="sol" data-fx="pulse">
    <circle cx="60" cy="24" r="11" fill="#FFD867" stroke="#E8B93A" stroke-width="2"/>
    <g stroke="#FFD867" stroke-width="3" stroke-linecap="round">
      <path d="M60 5 v6"/><path d="M42 11 l4 4"/><path d="M78 11 l-4 4"/>
    </g>
    </g>
    <g fill="url(#alasPluma)" stroke="#B8A88C" stroke-width="1.5">
      <path d="M56 68 C42 48 24 44 14 52 C26 55 30 60 24 66 C34 66 38 70 34 78 C44 78 50 76 56 68 Z"/>
      <path d="M64 68 C78 48 96 44 106 52 C94 55 90 60 96 66 C86 66 82 70 86 78 C76 78 70 76 64 68 Z"/>
      <ellipse cx="60" cy="74" rx="7" ry="14"/>
    </g>
    <path d="M40 84 q3 5 0 8 q-3 -3 0 -8 Z" fill="#FFE9A8"/>
    <path d="M80 86 q3 5 0 8 q-3 -3 0 -8 Z" fill="#FFE9A8"/>
    <path d="M60 92 q3 5 0 8 q-3 -3 0 -8 Z" fill="#FFE9A8"/>`,

  martillo: `
    <defs>
      <linearGradient id="mjHead" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#F2F5FA"/>
        <stop offset="45%" stop-color="#B9C4D6"/>
        <stop offset="100%" stop-color="#6E7A90"/>
      </linearGradient>
      <linearGradient id="mjHandle" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#9C6B3E"/>
        <stop offset="1" stop-color="#6B4526"/>
      </linearGradient>
    </defs>
    <ellipse cx="60" cy="106" rx="30" ry="6" fill="rgba(0,0,0,.28)"/>
    <rect x="32" y="28" width="56" height="34" rx="7" fill="url(#mjHead)" stroke="#4A5568" stroke-width="2.5"/>
    <rect x="32" y="28" width="56" height="10" rx="5" fill="#fff" opacity=".35"/>
    <rect x="53" y="62" width="14" height="36" rx="6" fill="url(#mjHandle)" stroke="#4A2E17" stroke-width="1.5"/>
    <path d="M53 68 h14 M53 78 h14 M53 88 h14" stroke="rgba(0,0,0,.25)" stroke-width="2"/>
    <path d="M22 40 l-8 8 6 1 -7 8" stroke="#FFE45C" stroke-width="4.5" fill="none" stroke-linecap="round" stroke-linejoin="round" data-fx="flicker"/>
    <path d="M98 40 l8 8 -6 1 7 8" stroke="#FFE45C" stroke-width="4.5" fill="none" stroke-linecap="round" stroke-linejoin="round" data-fx="flicker"/>`,

  zorro: `
    <defs>
      <linearGradient id="zorroFace" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#FFB870"/>
        <stop offset="100%" stop-color="#E8843C"/>
      </linearGradient>
      <linearGradient id="zorroEar" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#FFB870"/>
        <stop offset="100%" stop-color="#C9682A"/>
      </linearGradient>
    </defs>
    <ellipse cx="60" cy="104" rx="30" ry="6" fill="rgba(0,0,0,.28)"/>
    <path d="M36 44 L28 18 L52 34 Z" fill="url(#zorroEar)" stroke="#8C4A1E" stroke-width="2"/>
    <path d="M84 44 L92 18 L68 34 Z" fill="url(#zorroEar)" stroke="#8C4A1E" stroke-width="2"/>
    <path d="M38 32 L32 22 L46 30 Z" fill="#FFF4DE" opacity=".7"/>
    <path d="M82 32 L88 22 L74 30 Z" fill="#FFF4DE" opacity=".7"/>
    <path d="M60 30 L90 50 L82 86 Q60 100 38 86 L30 50 Z" fill="url(#zorroFace)" stroke="#8C4A1E" stroke-width="2.5"/>
    <path d="M44 58 q5 -5 10 0" stroke="#4A2E17" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <path d="M66 58 q5 -5 10 0" stroke="#4A2E17" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <circle cx="47" cy="55" r="1.2" fill="#fff"/>
    <circle cx="69" cy="55" r="1.2" fill="#fff"/>
    <path d="M56 72 L64 72 L60 78 Z" fill="#4A2E17"/>
    <path d="M48 82 q12 9 24 -2" stroke="#4A2E17" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <path d="M12 56 l2.5 6 6 2.5 -6 2.5 -2.5 6 -2.5 -6 -6 -2.5 6 -2.5 Z" fill="#A8E8CE" data-extra="destellos" data-fx="twinkle"/>
    <path d="M104 62 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2 Z" fill="#A8E8CE" data-extra="destellos" data-fx="twinkle"/>`,

  cuervos: `
    <defs>
      <linearGradient id="cuervoPluma" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="#C9CFE0"/>
      </linearGradient>
    </defs>
    <g fill="url(#cuervoPluma)" stroke="#6B7290" stroke-width="1.5">
      <ellipse cx="38" cy="58" rx="16" ry="12"/>
      <circle cx="50" cy="44" r="9"/>
      <path d="M57 42 L68 46 L57 49 Z"/>
      <path d="M26 54 Q14 50 12 60 Q20 64 28 62 Z"/>
    </g>
    <circle cx="52.5" cy="42" r="2.5" fill="#3A3550"/>
    <g fill="url(#cuervoPluma)" stroke="#6B7290" stroke-width="1.5" opacity=".92">
      <ellipse cx="84" cy="66" rx="14" ry="10"/>
      <circle cx="73" cy="54" r="8"/>
      <path d="M66 52 L56 56 L67 58 Z"/>
      <path d="M95 62 Q106 58 108 68 Q100 72 93 70 Z"/>
    </g>
    <circle cx="71" cy="52" r="2.2" fill="#3A3550"/>
    <g data-extra="ojo" data-fx="pulse">
      <path d="M42 96 q18 -14 36 0 q-18 14 -36 0 Z" fill="#FFF4DE" stroke="#B8862A" stroke-width="2"/>
      <circle cx="60" cy="96" r="5.5" fill="#FFD867" stroke="#B8862A" stroke-width="1.5"/>
      <circle cx="58.5" cy="94.5" r="1.5" fill="#FFF4DE"/>
    </g>`,

  gato: `
    <defs>
      <linearGradient id="gatoFur" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#FFFBEF"/><stop offset="1" stop-color="#EBD9C6"/>
      </linearGradient>
    </defs>
    <path d="M40 50 L34 26 L54 42 Z" fill="url(#gatoFur)" stroke="#B58A5C" stroke-width="2"/>
    <path d="M80 50 L86 26 L66 42 Z" fill="url(#gatoFur)" stroke="#B58A5C" stroke-width="2"/>
    <circle cx="60" cy="66" r="28" fill="url(#gatoFur)" stroke="#B58A5C" stroke-width="2"/>
    <circle cx="50" cy="60" r="4.5" fill="#4A2D3C"/>
    <circle cx="70" cy="60" r="4.5" fill="#4A2D3C"/>
    <circle cx="48.5" cy="58.5" r="1.2" fill="#fff"/>
    <circle cx="68.5" cy="58.5" r="1.2" fill="#fff"/>
    <path d="M56 70 L64 70 L60 75 Z" fill="#4A2D3C"/>
    <path d="M54 78 q6 5 12 0" stroke="#4A2D3C" stroke-width="3" fill="none" stroke-linecap="round"/>
    <g stroke="rgba(74,45,60,.55)" stroke-width="2.5" stroke-linecap="round">
      <path d="M30 66 L16 62"/><path d="M30 72 L16 74"/>
      <path d="M90 66 L104 62"/><path d="M90 72 L104 74"/>
    </g>
    <path d="M94 92 Q106 80 104 62 Q90 76 90 92 Z" fill="#B58A5C" stroke="#8C6B4A" stroke-width="1.5"/>
    <path d="M94 90 Q100 78 103 65" stroke="#FFF4DE" stroke-width="2" fill="none"/>
    <path d="M24 24 l2.5 6 6 2.5 -6 2.5 -2.5 6 -2.5 -6 -6 -2.5 6 -2.5 Z" fill="#FFD867" data-fx="twinkle"/>
    <g data-extra="pluma" data-fx="pulse">
      <path d="M100 30 q10 6 8 20 q-8 -2 -10 -8 Z" fill="#EDF2FF" stroke="#B8A88C" stroke-width="1"/>
      <path d="M104 34 q2 8 0 14" stroke="#B8A88C" stroke-width="1" fill="none"/>
    </g>`,

  arcoiris: `
    <path d="M18 88 a42 42 0 0 1 84 0" fill="none" stroke="#FF9E9E" stroke-width="9" stroke-linecap="round"/>
    <path d="M30 88 a30 30 0 0 1 60 0" fill="none" stroke="#FFE08A" stroke-width="9" stroke-linecap="round"/>
    <path d="M42 88 a18 18 0 0 1 36 0" fill="none" stroke="#BDEBFF" stroke-width="9" stroke-linecap="round" data-fx="pulse"/>
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
    <defs>
      <linearGradient id="loboFur" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#F7FAFF"/><stop offset="1" stop-color="#C6D0DC"/>
      </linearGradient>
    </defs>
    <path d="M38 42 L30 16 L54 32 Z" fill="url(#loboFur)" stroke="#6B7A8C" stroke-width="2"/>
    <path d="M82 42 L90 16 L66 32 Z" fill="url(#loboFur)" stroke="#6B7A8C" stroke-width="2"/>
    <path d="M60 28 L90 46 L84 88 Q60 102 36 88 L30 46 Z" fill="url(#loboFur)" stroke="#6B7A8C" stroke-width="2"/>
    <circle cx="49" cy="56" r="4.5" fill="#39312E"/>
    <circle cx="71" cy="56" r="4.5" fill="#39312E"/>
    <circle cx="47.5" cy="54.5" r="1.2" fill="#fff"/>
    <circle cx="69.5" cy="54.5" r="1.2" fill="#fff"/>
    <path d="M54 66 L66 66 L60 73 Z" fill="#39312E"/>
    <g data-extra="cinta">
    <path d="M24 80 Q60 96 96 78" stroke="#FFD867" stroke-width="7" fill="none" stroke-linecap="round" data-fx="draw"/>
    <path d="M24 80 Q60 96 96 78" stroke="rgba(184,134,42,.55)" stroke-width="2" fill="none"/>
    <circle cx="96" cy="78" r="4.5" fill="#FFD867" stroke="#B8862A" stroke-width="1.5"/>
    <path d="M98 81 l8 9 M99 79 l11 3" stroke="#FFD867" stroke-width="3" stroke-linecap="round"/>
    </g>`,

  rayo: `
    <defs>
      <linearGradient id="rayoGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#FFE9A8"/><stop offset="1" stop-color="#F0B33A"/>
      </linearGradient>
    </defs>
    <circle cx="60" cy="60" r="42" fill="rgba(255,255,255,.14)"/>
    <g fill="#EDF2FF" opacity=".9">
      <ellipse cx="34" cy="26" rx="14" ry="8"/><ellipse cx="48" cy="22" rx="12" ry="7"/>
      <ellipse cx="90" cy="32" rx="12" ry="7"/>
    </g>
    <path d="M68 20 L34 68 H56 L48 102 L88 50 H64 Z" fill="url(#rayoGrad)" stroke="#B8862A" stroke-width="2.5" stroke-linejoin="round" data-fx="flicker"/>
    <path d="M64 26 L44 60" stroke="#FFF4DE" stroke-width="3" stroke-linecap="round" opacity=".85"/>`,

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
    <g fill="#FFF4DE" data-extra="ojos" data-fx="pulse"><circle cx="20" cy="34" r="6"/><circle cx="30" cy="18" r="6"/><circle cx="60" cy="12" r="6"/><circle cx="90" cy="18" r="6"/><circle cx="100" cy="34" r="6"/></g>`,

  tridente: `
    <defs>
      <linearGradient id="triGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#FFFBEF"/><stop offset="1" stop-color="#D9CDA8"/>
      </linearGradient>
    </defs>
    <rect x="55" y="46" width="10" height="46" rx="4" fill="url(#triGrad)" stroke="#8C7A4A" stroke-width="1.5"/>
    <path d="M36 20 V54 M60 14 V54 M84 20 V54" stroke="url(#triGrad)" stroke-width="8" stroke-linecap="round"/>
    <path d="M32 54 h56" stroke="url(#triGrad)" stroke-width="7" stroke-linecap="round"/>
    <path d="M30 20 q6 -10 12 0 M54 14 q6 -8 12 0 M78 20 q6 -10 12 0" fill="none" stroke="#FFD867" stroke-width="4" stroke-linecap="round"/>
    <circle cx="26" cy="40" r="3" fill="rgba(189,235,255,.8)" data-fx="twinkle"/>
    <circle cx="96" cy="36" r="4" fill="rgba(189,235,255,.6)" data-fx="twinkle"/>
    <circle cx="30" cy="66" r="2.5" fill="rgba(189,235,255,.6)" data-fx="twinkle"/>
    <g fill="none" stroke-linecap="round" data-fx="wave">
      <path d="M18 96 q10 -8 20 0 t20 0 t20 0 t20 0" stroke="#BDEBFF" stroke-width="5"/>
      <path d="M28 106 q10 -7 20 0 t20 0 t20 0" stroke="rgba(189,235,255,.45)" stroke-width="4"/>
    </g>`,

  yelmo: `
    <defs>
      <linearGradient id="yelmoGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#FFF4DE"/>
        <stop offset="55%" stop-color="#E8DCC0"/>
        <stop offset="100%" stop-color="#E8DCC0" stop-opacity=".22"/>
      </linearGradient>
    </defs>
    <g data-fx="ghost">
      <path d="M30 64 a30 30 0 0 1 60 0 v16 H30 Z" fill="url(#yelmoGrad)" stroke="rgba(255,244,222,.5)" stroke-width="2"/>
      <rect x="22" y="80" width="76" height="13" rx="6" fill="url(#yelmoGrad)"/>
      <path d="M92 64 a32 32 0 0 0 -16 -26" stroke="rgba(255,255,255,.55)" stroke-width="2.5" stroke-dasharray="3 5" fill="none" stroke-linecap="round"/>
      <path d="M60 16 V36" stroke="#FFD867" stroke-width="7" stroke-linecap="round"/>
      <path d="M44 62 h20" stroke="rgba(74,53,82,.4)" stroke-width="5" stroke-linecap="round"/>
    </g>
    <g data-extra="gemas">
      <path d="M32 102 l4 -6 h7 l4 6 -7.5 6 Z" fill="#B58AE0" stroke="#7A5CA6" stroke-width="1.5"/>
      <path d="M74 102 l4 -6 h7 l4 6 -7.5 6 Z" fill="#6BC1E8" stroke="#3D7A99" stroke-width="1.5"/>
      <circle cx="60" cy="104" r="5" fill="#FFD867" stroke="#B8862A" stroke-width="1.5"/>
    </g>`,

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
    <g fill="#FFD867" data-extra="semillas" data-fx="twinkle"><circle cx="48" cy="62" r="4"/><circle cx="60" cy="72" r="4"/><circle cx="72" cy="60" r="4"/><circle cx="56" cy="86" r="4"/><circle cx="70" cy="82" r="4"/></g>`,

  fogon: `
    <ellipse cx="60" cy="98" rx="34" ry="8" fill="rgba(0,0,0,.15)"/>
    <g fill="#8C6B4A"><rect x="30" y="86" width="16" height="8" rx="3"/><rect x="74" y="86" width="16" height="8" rx="3"/><rect x="50" y="90" width="20" height="8" rx="3"/></g>
    <path d="M60 30 C42 46 42 62 54 72 C50 60 56 56 58 52 C60 64 72 66 68 80 C86 70 82 46 60 30 Z" fill="#FFD867" data-fx="beat"/>
    <path d="M60 50 C52 60 54 70 60 76 C58 68 62 66 62 60 Z" fill="#FF9E5C"/>`,

  sol: `
    <g stroke="#FFD867" stroke-width="6" stroke-linecap="round" data-fx="pulse">
      <path d="M60 12 v14"/><path d="M60 94 v14"/><path d="M12 60 h14"/><path d="M94 60 h14"/>
      <path d="M27 27 l10 10"/><path d="M83 83 l10 10"/><path d="M93 27 l-10 10"/><path d="M37 83 l-10 10"/>
    </g>
    <circle cx="60" cy="60" r="26" fill="#FFF4DE"/>
    <circle cx="60" cy="60" r="18" fill="#FFD867"/>`,

  arco: `
    <path d="M40 18 a54 54 0 0 0 0 84" fill="none" stroke="#FFF4DE" stroke-width="7" stroke-linecap="round"/>
    <path d="M40 18 L88 60 L40 102" fill="none" stroke="#FFD867" stroke-width="3" stroke-linecap="round"/>
    <circle cx="88" cy="60" r="4" fill="#FFD867" data-fx="pulse"/>
    <circle cx="82" cy="60" r="6" fill="#FFF4DE" opacity=".7"/>
    <path d="M98 20 a11 11 0 1 0 7 17 a9 9 0 0 1 -7 -17 Z" fill="#FFF4DE" data-extra="luna" data-fx="pulse"/>`,

  espada: `
    <path d="M60 18 L68 70 H52 Z" fill="#EDF2F7"/>
    <rect x="56" y="70" width="8" height="20" fill="#EDF2F7"/>
    <rect x="38" y="86" width="44" height="10" rx="4" fill="#FFD867"/>
    <rect x="55" y="94" width="10" height="16" rx="3" fill="rgba(255,255,255,.75)"/>
    <path d="M60 12 l1.5 5 5 1.5 -5 1.5 -1.5 5 -1.5 -5 -5 -1.5 5 -1.5 Z" fill="#FFF4DE" data-fx="twinkle"/>`,

  concha: `
    <path d="M60 30 C30 30 22 66 30 92 h60 c8 -26 0 -62 -30 -62 Z" fill="#FFF4DE"/>
    <g stroke="rgba(194,86,138,.5)" stroke-width="4" fill="none" stroke-linecap="round">
      <path d="M60 34 V92"/><path d="M44 40 Q40 66 42 92"/><path d="M76 40 Q80 66 78 92"/>
    </g>
    <circle cx="60" cy="30" r="8" fill="#FFD867" data-fx="pulse"/>`,

  yunque: `
    <path d="M32 70 h56 l-8 -14 H40 Z" fill="#FFF4DE"/>
    <rect x="52" y="56" width="16" height="16" fill="#FFF4DE"/>
    <rect x="46" y="86" width="28" height="14" rx="4" fill="rgba(255,255,255,.75)"/>
    <rect x="54" y="72" width="12" height="14" fill="#FFF4DE"/>
    <path d="M84 40 l-14 14" stroke="#FFD867" stroke-width="6" stroke-linecap="round"/>
    <circle cx="86" cy="38" r="6" fill="#FFD867"/>
    <path d="M88 18 l1.5 5 5 1.5 -5 1.5 -1.5 5 -1.5 -5 -5 -1.5 5 -1.5 Z" fill="#FFF4DE" data-fx="flicker"/>`,

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
    <path d="M48 84 q12 -8 24 0" stroke="#4A3D5C" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <path d="M100 24 l1.5 5 5 1.5 -5 1.5 -1.5 5 -1.5 -5 -5 -1.5 5 -1.5 Z" fill="#FFD867" data-fx="twinkle"/>`,

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
    <circle cx="60" cy="60" r="14" fill="#FFF4DE" data-fx="pulse"/>`,

  iris: `
    <path d="M18 92 a42 42 0 0 1 84 0" fill="none" stroke="#FF9E9E" stroke-width="8" stroke-linecap="round"/>
    <path d="M30 92 a30 30 0 0 1 60 0" fill="none" stroke="#FFE08A" stroke-width="8" stroke-linecap="round"/>
    <path d="M42 92 a18 18 0 0 1 36 0" fill="none" stroke="#BDEBFF" stroke-width="8" stroke-linecap="round" data-fx="pulse"/>
    <circle cx="60" cy="70" r="13" fill="#FFF4DE"/>
    <path d="M52 66 L60 76 L74 58" stroke="#4E9E8C" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,

  carrosolar: `
    <circle cx="60" cy="42" r="20" fill="#FFD867" data-fx="pulse"/>
    <g stroke="#FFF4DE" stroke-width="4" stroke-linecap="round">
      <path d="M60 14 v8"/><path d="M38 22 l6 6"/><path d="M82 22 l-6 6"/>
    </g>
    <path d="M24 96 q36 -18 72 0" fill="none" stroke="#FFF4DE" stroke-width="8" stroke-linecap="round"/>
    <circle cx="34" cy="98" r="8" fill="rgba(255,255,255,.7)"/>
    <circle cx="86" cy="98" r="8" fill="rgba(255,255,255,.7)"/>`,

  carrolunar: `
    <path d="M74 24 a26 26 0 1 0 18 40 a20 20 0 1 1 -18 -40 Z" fill="#FFF4DE"/>
    <g fill="#FFF4DE" opacity=".7" data-fx="twinkle"><circle cx="30" cy="30" r="2.5"/><circle cx="44" cy="20" r="2"/><circle cx="20" cy="46" r="2"/></g>
    <path d="M24 96 q36 -18 72 0" fill="none" stroke="#4A5A8C" stroke-width="8" stroke-linecap="round"/>
    <circle cx="34" cy="98" r="8" fill="rgba(255,255,255,.55)"/>
    <circle cx="86" cy="98" r="8" fill="rgba(255,255,255,.55)"/>`,

  flauta: `
    <rect x="16" y="66" width="88" height="12" rx="6" fill="#FFF4DE" transform="rotate(-18 60 72)"/>
    <g fill="#5C7A3D" transform="rotate(-18 60 72)">
      <circle cx="34" cy="72" r="3"/><circle cx="50" cy="72" r="3"/><circle cx="66" cy="72" r="3"/><circle cx="82" cy="72" r="3"/>
    </g>
    <g fill="#FFD867" data-fx="pulse"><circle cx="30" cy="34" r="4"/><rect x="32.5" y="18" width="2.5" height="18"/><path d="M32.5 18 h9 v4 h-9 Z"/></g>`,

  antorcha: `
    <rect x="52" y="54" width="16" height="46" rx="5" fill="#8C6B4A"/>
    <path d="M60 12 C44 26 44 40 54 48 C50 38 56 34 58 30 C60 40 72 42 68 54 C84 46 80 24 60 12 Z" fill="#FFD867" data-fx="beat"/>
    <path d="M60 30 C54 38 56 46 60 50 C58 44 62 42 62 38 Z" fill="#FF9E5C"/>`,

  lira: `
    <path d="M34 100 V52 Q34 24 60 20 Q86 24 86 52 V100" fill="none" stroke="#FFF4DE" stroke-width="7" stroke-linecap="round"/>
    <path d="M46 100 V44 M74 100 V44" stroke="rgba(255,255,255,.6)" stroke-width="4" stroke-linecap="round"/>
    <g stroke="#FFD867" stroke-width="3" stroke-linecap="round" data-fx="pulse">
      <path d="M40 96 H80"/><path d="M40 82 H80"/><path d="M40 68 H80"/>
    </g>`,

  talon: `
    <defs>
      <linearGradient id="talonGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#FFFBEF"/><stop offset="1" stop-color="#E8D9B8"/>
      </linearGradient>
    </defs>
    <ellipse cx="64" cy="102" rx="32" ry="6" fill="rgba(0,0,0,.25)"/>
    <path d="M36 44 Q30 80 46 96 Q64 104 88 92 Q98 88 96 78 Q84 84 70 78 Q60 74 58 60 Q56 46 42 42 Z" fill="url(#talonGrad)" stroke="#B8A272" stroke-width="2"/>
    <g data-extra="flecha" data-fx="arrow">
      <path d="M14 28 L42 50" stroke="#C25548" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M48 55 l-11 -1.5 4.5 -8.5 Z" fill="#C25548"/>
      <path d="M14 28 l-7 -5 M14 28 l-8 3" stroke="#C25548" stroke-width="3" stroke-linecap="round"/>
    </g>
    <circle cx="56" cy="60" r="11" fill="rgba(255,216,103,.3)" data-fx="pulse"/>
    <circle cx="56" cy="60" r="6" fill="#FFD867" stroke="#B8862A" stroke-width="1.5"/>`,

  lanza: `
    <path d="M60 14 L74 32 L60 40 L46 32 Z" fill="#FFF4DE"/>
    <rect x="57" y="36" width="6" height="66" rx="3" fill="rgba(255,255,255,.8)"/>
    <path d="M40 92 h40" stroke="#FFD867" stroke-width="6" stroke-linecap="round"/>
    <path d="M60 6 l1.5 5 5 1.5 -5 1.5 -1.5 5 -1.5 -5 -5 -1.5 5 -1.5 Z" fill="#FFF4DE" data-fx="twinkle"/>`,

  vellocino: `
    <defs>
      <radialGradient id="vellGrad" cx="50%" cy="40%" r="65%">
        <stop offset="0" stop-color="#FFE9A8"/><stop offset="100%" stop-color="#D9A82A"/>
      </radialGradient>
    </defs>
    <path d="M14 22 Q60 10 106 22" stroke="#8C6B4A" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M60 20 V36" stroke="#8C6B4A" stroke-width="4" stroke-linecap="round"/>
    <ellipse cx="60" cy="66" rx="36" ry="29" fill="url(#vellGrad)" stroke="#B8862A" stroke-width="2"/>
    <g fill="#FFD867">
      <circle cx="38" cy="54" r="8"/><circle cx="54" cy="44" r="8"/><circle cx="72" cy="44" r="8"/><circle cx="86" cy="56" r="8"/>
      <circle cx="34" cy="72" r="8"/><circle cx="88" cy="74" r="8"/><circle cx="48" cy="86" r="8"/><circle cx="72" cy="86" r="8"/>
    </g>
    <ellipse cx="60" cy="66" rx="20" ry="16" fill="#F4DE8A"/>
    <path d="M98 36 l2.5 6 6 2.5 -6 2.5 -2.5 6 -2.5 -6 -6 -2.5 6 -2.5 Z" fill="#FFF4DE" data-fx="twinkle"/>
    <path d="M18 44 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2 Z" fill="#FFF4DE" data-fx="twinkle"/>`,

  ovillo: `
    <circle cx="60" cy="62" r="34" fill="#FFF4DE"/>
    <g stroke="rgba(168,92,122,.55)" stroke-width="4" fill="none" stroke-linecap="round">
      <path d="M30 50 Q60 30 90 50"/><path d="M28 62 Q60 44 92 62"/><path d="M30 74 Q60 92 90 74"/>
      <path d="M40 40 Q60 62 40 88"/><path d="M80 40 Q60 62 80 88"/>
    </g>
    <path d="M90 50 q10 -6 12 -16" stroke="#FFD867" stroke-width="4" fill="none" stroke-linecap="round" data-fx="draw"/>
    <g data-extra="corona" data-fx="twinkle" fill="#FFD867"><circle cx="90" cy="20" r="2"/><circle cx="98" cy="16" r="2.5"/><circle cx="106" cy="20" r="2"/></g>`,

  manzana: `
    <path d="M60 40 C42 34 30 48 30 66 a30 26 0 0 0 60 0 C90 48 78 34 60 40 Z" fill="#C9502A"/>
    <path d="M58 40 q0 -12 -8 -18" stroke="#5C7A3D" stroke-width="4" fill="none" stroke-linecap="round"/>
    <ellipse cx="48" cy="56" rx="6" ry="10" fill="rgba(255,255,255,.25)"/>
    <path d="M86 44 l1.5 5 5 1.5 -5 1.5 -1.5 5 -1.5 -5 -5 -1.5 5 -1.5 Z" fill="#FFD867" data-fx="twinkle"/>`,

  brida: `
    <ellipse cx="60" cy="60" rx="28" ry="34" fill="none" stroke="#FFD867" stroke-width="7"/>
    <path d="M60 26 V94 M32 60 H88" stroke="#FFD867" stroke-width="5" stroke-linecap="round"/>
    <circle cx="60" cy="60" r="8" fill="#FFF4DE" data-fx="pulse"/>`,

  jarra: `
    <path d="M46 30 h28 v14 h-8 v6 c14 4 22 20 20 36 c-2 14 -14 20 -26 20 s-24 -6 -26 -20 c-2 -16 6 -32 20 -36 v-6 h-8 Z" fill="#B58A5C"/>
    <path d="M42 62 q18 10 36 0" stroke="rgba(255,255,255,.5)" stroke-width="4" fill="none" stroke-linecap="round"/>
    <ellipse cx="60" cy="40" rx="12" ry="4" fill="rgba(0,0,0,.15)"/>
    <circle cx="60" cy="24" r="4" fill="#FFE9A8" data-extra="esperanza" data-fx="pulse" opacity=".9"/>`,

  telarana: `
    <g stroke="#FFF4DE" stroke-width="3" fill="none" data-fx="spin">
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
    <g data-fx="twinkle"><circle cx="60" cy="32" r="6" fill="#FFF4DE"/>
    <circle cx="34" cy="40" r="5" fill="#FFF4DE"/>
    <circle cx="86" cy="40" r="5" fill="#FFF4DE"/></g>`,

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
    <path d="M20 40 L46 34 L44 46 Z" fill="#FFD867" data-fx="twinkle"/>`,

  fenix: `
    <path d="M60 22 C40 40 40 58 52 68 C48 56 54 50 56 46 C58 58 72 60 66 76 C86 66 84 38 60 22 Z" fill="#FF9E5C" data-fx="beat"/>
    <path d="M60 40 C52 50 54 62 60 68 C58 60 62 58 62 52 Z" fill="#C9502A"/>
    <path d="M60 68 q-16 6 -20 22 q14 -4 20 -12 q6 8 20 12 q-4 -16 -20 -22 Z" fill="#FFD867"/>`,

  cerbero: `
    <ellipse cx="60" cy="76" rx="34" ry="22" fill="#5C4A4A"/>
    <circle cx="34" cy="46" r="14" fill="#6B5555"/>
    <circle cx="60" cy="40" r="16" fill="#6B5555"/>
    <circle cx="86" cy="46" r="14" fill="#6B5555"/>
    <g fill="#FFD867" data-fx="pulse"><circle cx="30" cy="44" r="2.5"/><circle cx="38" cy="44" r="2.5"/>
      <circle cx="55" cy="38" r="2.5"/><circle cx="65" cy="38" r="2.5"/>
      <circle cx="82" cy="44" r="2.5"/><circle cx="90" cy="44" r="2.5"/></g>`,

  serpientes: `
    <circle cx="60" cy="66" r="26" fill="#FFF4DE"/>
    <circle cx="51" cy="60" r="4" fill="#4A6B4A"/>
    <circle cx="69" cy="60" r="4" fill="#4A6B4A"/>
    <g stroke="#4A6B4A" stroke-width="5" fill="none" stroke-linecap="round" data-fx="wave">
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
    <path d="M80 40 l10 -18 h-20 Z" fill="#B58A5C"/>
    <path d="M96 26 l1.5 5 5 1.5 -5 1.5 -1.5 5 -1.5 -5 -5 -1.5 5 -1.5 Z" fill="#FFD867" data-fx="twinkle"/>`,

  toro: `
    <ellipse cx="60" cy="70" rx="30" ry="24" fill="#6B4A3D"/>
    <path d="M24 46 q-14 -4 -16 -18 q14 2 20 14 Z" fill="#8C6B5C"/>
    <path d="M96 46 q14 -4 16 -18 q-14 2 -20 14 Z" fill="#8C6B5C"/>
    <circle cx="48" cy="60" r="5" fill="#2E2521"/>
    <circle cx="72" cy="60" r="5" fill="#2E2521"/>
    <ellipse cx="60" cy="78" rx="10" ry="6" fill="#3D302A"/>`,

  rueca: `
    <circle cx="60" cy="60" r="34" fill="none" stroke="#FFF4DE" stroke-width="6"/>
    <g stroke="#FFF4DE" stroke-width="4" stroke-linecap="round" data-fx="spin">
      <path d="M60 26 V94"/><path d="M26 60 H94"/><path d="M37 37 L83 83"/><path d="M83 37 L37 83"/>
    </g>
    <circle cx="60" cy="60" r="9" fill="#FFD867"/>`,

  muerdago: `
    <g fill="#FFF4DE"><ellipse cx="46" cy="60" rx="14" ry="8" transform="rotate(-20 46 60)"/>
      <ellipse cx="74" cy="60" rx="14" ry="8" transform="rotate(20 74 60)"/>
      <ellipse cx="46" cy="80" rx="14" ry="8" transform="rotate(20 46 80)"/>
      <ellipse cx="74" cy="80" rx="14" ry="8" transform="rotate(-20 74 80)"/></g>
    <g fill="#FFF4DE" stroke="rgba(255,255,255,.4)" stroke-width="2" data-extra="bayas" data-fx="pulse"><circle cx="60" cy="70" r="6"/><circle cx="68" cy="76" r="6"/><circle cx="52" cy="76" r="6"/></g>
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
    <g data-fx="wave">
    <path d="M14 60 q12 -16 24 0 t24 0 t24 0 t24 0" fill="none" stroke="#FFF4DE" stroke-width="7" stroke-linecap="round"/>
    <path d="M14 78 q12 -16 24 0 t24 0 t24 0 t24 0" fill="none" stroke="rgba(255,255,255,.6)" stroke-width="7" stroke-linecap="round"/>
    <path d="M14 42 q12 -14 24 0 t24 0 t24 0 t24 0" fill="none" stroke="rgba(255,255,255,.35)" stroke-width="6" stroke-linecap="round"/>
    </g>`,

  esquis: `
    <rect x="34" y="20" width="10" height="80" rx="5" fill="#FFF4DE" transform="rotate(-10 39 60)"/>
    <rect x="76" y="20" width="10" height="80" rx="5" fill="#FFF4DE" transform="rotate(10 81 60)"/>
    <circle cx="60" cy="46" r="14" fill="#7A8C9E"/>
    <path d="M50 60 L60 78 L70 60" fill="none" stroke="#7A8C9E" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
    <g fill="#FFF4DE" data-fx="twinkle"><circle cx="22" cy="30" r="2"/><circle cx="98" cy="26" r="2"/><circle cx="30" cy="94" r="2"/></g>`,

  dragon: `
    <path d="M28 78 Q40 40 76 34 Q100 30 104 46 Q90 42 82 50 Q94 52 96 64 Q82 58 72 64 Q60 70 60 82 Q48 74 28 78 Z" fill="#5C6B3D"/>
    <circle cx="90" cy="42" r="3.5" fill="#FFD867" data-fx="pulse"/>
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
    <g fill="#FFD867" data-fx="twinkle"><circle cx="24" cy="14" r="5"/><circle cx="96" cy="14" r="5"/><circle cx="16" cy="60" r="5"/><circle cx="104" cy="60" r="5"/></g>`,

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
    <g data-fx="pulse"><circle cx="47" cy="56" r="5.5" fill="#8C1A1A"/>
    <circle cx="73" cy="56" r="5.5" fill="#8C1A1A"/></g>
    <path d="M50 70 L70 70 L60 80 Z" fill="#2E2521"/>
    <path d="M40 80 q20 20 40 0" stroke="#2E2521" stroke-width="4" fill="none" stroke-linecap="round"/>
    <g data-extra="cinta"><path d="M18 92 Q60 106 102 90" stroke="#FFD867" stroke-width="4" fill="none" stroke-linecap="round" data-fx="draw"/></g>`,

  bota: `
    <path d="M50 20 h20 v46 l24 8 q8 4 8 14 v6 H40 v-40 Z" fill="#6B5040"/>
    <path d="M40 94 h62 v8 h-62 Z" fill="#4A3830"/>
    <path d="M56 30 h8" stroke="rgba(255,255,255,.3)" stroke-width="4" stroke-linecap="round"/>`,

  reloj_arena: `
    <defs><linearGradient id="rlSand" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFE9A8"/><stop offset="1" stop-color="#E8B93A"/></linearGradient></defs>
    <ellipse cx="60" cy="108" rx="26" ry="5" fill="rgba(0,0,0,.25)"/>
    <path d="M34 16 H86 M34 104 H86" stroke="#C9A23A" stroke-width="6" stroke-linecap="round"/>
    <path d="M40 20 Q40 54 60 60 Q80 54 80 20" fill="rgba(255,255,255,.08)" stroke="#D8CDB0" stroke-width="3"/>
    <path d="M40 100 Q40 66 60 60 Q80 66 80 100" fill="rgba(255,255,255,.08)" stroke="#D8CDB0" stroke-width="3"/>
    <path d="M47 26 Q47 50 60 56 Q73 50 73 26 Z" fill="url(#rlSand)"/>
    <path d="M60 60 L54 96 Q60 100 66 96 Z" fill="url(#rlSand)" data-fx="pulse"/>
    <circle cx="60" cy="72" r="2" fill="#FFE9A8" data-fx="twinkle"/>`,

  pocion: `
    <defs><linearGradient id="poLiq" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7ED9B0"/><stop offset="1" stop-color="#2F8F6B"/></linearGradient></defs>
    <ellipse cx="60" cy="108" rx="24" ry="5" fill="rgba(0,0,0,.25)"/>
    <path d="M52 20 h16 v18 l14 40 a20 20 0 0 1 -44 0 l14 -40 Z" fill="rgba(255,255,255,.10)" stroke="#CFEFE2" stroke-width="3"/>
    <path d="M44 66 a20 20 0 0 0 32 0 l-8 -22 h-16 Z" fill="url(#poLiq)"/>
    <rect x="50" y="14" width="20" height="8" rx="3" fill="#CFEFE2"/>
    <g data-extra="burbujas">
      <circle cx="54" cy="72" r="2.5" fill="#DFFFF4" data-fx="pulse" opacity=".85"/>
      <circle cx="64" cy="78" r="2" fill="#DFFFF4" data-fx="pulse" opacity=".7"/>
      <circle cx="60" cy="64" r="1.6" fill="#FFFFFF" data-fx="twinkle"/>
    </g>`,

  sombras: `
    <ellipse cx="60" cy="108" rx="28" ry="5" fill="rgba(0,0,0,.3)"/>
    <path d="M30 100 V54 a30 30 0 0 1 60 0 V100 Z" fill="#2A2438" stroke="#4A415C" stroke-width="2"/>
    <path d="M44 100 V64 a16 16 0 0 1 32 0 V100 Z" fill="#14102e"/>
    <path d="M60 30 v10 M50 44 h20" stroke="#6B5C8C" stroke-width="3" stroke-linecap="round"/>
    <g data-extra="brasas">
      <circle cx="52" cy="86" r="2" fill="#8C6BE0" data-fx="twinkle"/>
      <circle cx="68" cy="90" r="2" fill="#6BC1E8" data-fx="twinkle"/>
      <circle cx="60" cy="80" r="2.2" fill="#B58AE0" data-fx="twinkle"/>
    </g>`,

  padre_hombros: `
    <ellipse cx="58" cy="110" rx="22" ry="5" fill="rgba(0,0,0,.25)"/>
    <g fill="#E8C9A0" stroke="#A6805C" stroke-width="1.5">
      <circle cx="58" cy="28" r="8"/>
      <path d="M50 38 h16 v11 h-16 Z"/>
      <circle cx="58" cy="62" r="11"/>
      <path d="M42 74 q16 -6 32 0 l-5 30 h-22 Z"/>
    </g>
    <path d="M50 104 v-6 M66 104 v-6" stroke="#A6805C" stroke-width="4" stroke-linecap="round"/>
    <g data-extra="fuego"><path d="M94 98 q-6 -14 2 -22 q-2 10 6 12 q-2 8 -8 10 Z" fill="#E8843C" data-fx="flicker"/></g>`,

  llave_acertijo: `
    <ellipse cx="52" cy="106" rx="20" ry="4" fill="rgba(0,0,0,.2)"/>
    <circle cx="46" cy="44" r="18" fill="none" stroke="#FFD867" stroke-width="7"/>
    <path d="M46 62 V96 M46 80 h12 M46 90 h9" stroke="#FFD867" stroke-width="6" stroke-linecap="round"/>
    <text x="46" y="51" text-anchor="middle" font-size="20" font-weight="800" fill="#14102e" font-family="inherit" data-extra="incognita" data-fx="pulse">?</text>`,

  espejo: `
    <defs><radialGradient id="espG" cx="40%" cy="35%" r="70%"><stop offset="0" stop-color="#FFFFFF"/><stop offset="60%" stop-color="#E8D9F0"/><stop offset="100%" stop-color="#B58AC9"/></radialGradient></defs>
    <ellipse cx="60" cy="108" rx="18" ry="4" fill="rgba(0,0,0,.2)"/>
    <circle cx="60" cy="46" r="30" fill="url(#espG)" stroke="#C9A23A" stroke-width="4"/>
    <rect x="55" y="74" width="10" height="30" rx="4" fill="#C9A23A"/>
    <path d="M46 34 a22 22 0 0 1 14 -12" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" data-fx="pulse"/>
    <path d="M86 20 l1.5 5 5 1.5 -5 1.5 -1.5 5 -1.5 -5 -5 -1.5 5 -1.5 Z" fill="#FFD867" data-fx="twinkle"/>`,

  vision: `
    <g data-fx="pulse">
      <path d="M24 60 q36 -30 72 0 q-36 30 -72 0 Z" fill="#FFF4DE" stroke="#B58AC9" stroke-width="2"/>
      <circle cx="60" cy="60" r="12" fill="#6B4A8C"/><circle cx="60" cy="60" r="5" fill="#2A1B3D"/><circle cx="56" cy="56" r="2" fill="#fff"/>
    </g>
    <g stroke="#FFD867" stroke-width="3" stroke-linecap="round" data-extra="rayos" data-fx="twinkle">
      <path d="M60 30 v-8"/><path d="M32 42 l-6 -5"/><path d="M88 42 l6 -5"/>
    </g>`,

  vara_magica: `
    <ellipse cx="60" cy="108" rx="18" ry="4" fill="rgba(0,0,0,.2)"/>
    <rect x="56" y="40" width="8" height="60" rx="4" fill="#8C6B4A" transform="rotate(12 60 70)"/>
    <path d="M70 28 l3 8 8 3 -8 3 -3 8 -3 -8 -8 -3 8 -3 Z" fill="#FFD867" data-fx="twinkle"/>
    <g data-extra="hechizo" fill="none" stroke="#7ED9B0" stroke-width="3" stroke-linecap="round">
      <path d="M38 72 q10 -12 22 -6" data-fx="draw"/>
      <path d="M42 86 q12 6 24 -2" data-fx="draw"/>
    </g>`,

  loba_capitolina: `
    <ellipse cx="58" cy="108" rx="32" ry="6" fill="rgba(0,0,0,.28)"/>
    <ellipse cx="62" cy="68" rx="34" ry="18" fill="#8C7A6B"/>
    <circle cx="30" cy="54" r="13" fill="#8C7A6B"/>
    <path d="M24 44 l-4 -13 11 7 Z" fill="#8C7A6B"/>
    <path d="M18 54 l-9 3 9 4 Z" fill="#8C7A6B"/>
    <circle cx="26" cy="52" r="2" fill="#2E2521"/>
    <g stroke="#6B5C4A" stroke-width="6" stroke-linecap="round"><path d="M46 84 v14"/><path d="M84 82 v16"/></g>
    <g data-extra="gemelos" fill="#E8C9A0" data-fx="pulse"><circle cx="58" cy="86" r="5"/><circle cx="72" cy="86" r="5"/></g>`,

  cetro: `
    <ellipse cx="60" cy="108" rx="14" ry="4" fill="rgba(0,0,0,.2)"/>
    <rect x="56" y="34" width="8" height="70" rx="4" fill="#C9A23A"/>
    <circle cx="60" cy="28" r="8" fill="#FFD867"/>
    <g data-extra="aguila" data-fx="pulse"><path d="M42 26 q18 -12 36 0 q-10 -2 -18 5 q-8 -7 -18 -5 Z" fill="#EDF2F7" stroke="#B8A88C" stroke-width="1"/></g>
    <path d="M60 20 l-3 -6 h6 Z" fill="#FFD867"/>`,

  flecha_amor: `
    <path d="M60 96 C22 68 26 36 48 36 C58 36 60 46 60 50 C60 46 62 36 72 36 C94 36 98 68 60 96 Z" fill="#E85C7A" data-fx="beat"/>
    <path d="M18 30 L98 80" stroke="#C9A23A" stroke-width="3" stroke-linecap="round"/>
    <path d="M98 80 l-10 -1 3 -9 Z" fill="#C9A23A"/>
    <path d="M18 30 l-6 -4 M18 30 l-4 -7" stroke="#C9A23A" stroke-width="3" stroke-linecap="round"/>`,

  muralla_cartago: `
    <ellipse cx="60" cy="108" rx="30" ry="5" fill="rgba(0,0,0,.25)"/>
    <path d="M24 50 h8 v-8 h8 v8 h8 v-8 h8 v8 h8 v-8 h8 v8 h8 v50 H24 Z" fill="#C99A6A" stroke="#8C6B4A" stroke-width="2"/>
    <g stroke="#8C6B4A" stroke-width="2" fill="none"><path d="M24 66 H96 M40 66 V100 M56 66 V100 M72 66 V100 M88 66 V100"/></g>
    <rect x="52" y="80" width="16" height="20" rx="2" fill="#6B4A3D"/>
    <path d="M90 30 l1.5 5 5 1.5 -5 1.5 -1.5 5 -1.5 -5 -5 -1.5 5 -1.5 Z" fill="#FFD867" data-fx="twinkle"/>`,

  estrella_cadena: `
    <path d="M60 18 l6 17 18 1 -14 11 5 17 -15 -10 -15 10 5 -17 -14 -11 18 -1 Z" fill="#FFD867" data-fx="twinkle"/>
    <g data-extra="cadena" stroke="#C9CFE0" stroke-width="3" fill="none"><circle cx="34" cy="86" r="5"/><circle cx="46" cy="93" r="5"/><circle cx="59" cy="97" r="5"/></g>`,

  vasija_agua: `
    <ellipse cx="60" cy="108" rx="20" ry="4" fill="rgba(0,0,0,.2)"/>
    <path d="M46 26 h28 l-4 10 q14 8 12 30 q-2 22 -22 22 q-20 0 -22 -22 q-2 -22 12 -30 l-4 -10 Z" fill="#C99A6A" stroke="#8C6B4A" stroke-width="2" transform="rotate(-14 60 60)"/>
    <g data-extra="agua" fill="none" stroke="#BDEBFF" stroke-width="4" stroke-linecap="round" data-fx="wave"><path d="M32 58 q-6 12 -4 26"/><path d="M40 64 q-4 10 -2 20"/></g>`,

  isla_lejana: `
    <g data-fx="wave"><path d="M14 98 q10 -8 20 0 t20 0 t20 0 t20 0" fill="none" stroke="#BDEBFF" stroke-width="5" stroke-linecap="round"/></g>
    <path d="M38 94 q22 -14 44 0 Z" fill="#E8CE8A"/>
    <rect x="58" y="60" width="5" height="34" rx="2" fill="#8C6B4A"/>
    <g fill="#5C8C5C"><path d="M60 60 q-18 -6 -26 4 q14 -2 26 2 Z"/><path d="M60 60 q18 -6 26 4 q-14 -2 -26 2 Z"/><path d="M60 58 q-6 -16 -18 -18 q10 8 12 20 Z"/></g>
    <circle cx="92" cy="28" r="7" fill="#FFD867" data-fx="pulse"/>`,

  mariposa_alma: `
    <ellipse cx="60" cy="110" rx="16" ry="4" fill="rgba(0,0,0,.2)"/>
    <path d="M58 60 C40 40 20 42 20 56 C20 70 40 72 58 62 Z" fill="#B58AE0"/>
    <path d="M62 60 C80 40 100 42 100 56 C100 70 80 72 62 62 Z" fill="#B58AE0"/>
    <path d="M58 62 C44 76 30 80 30 90 C30 98 46 92 58 78 Z" fill="#8C6BC9"/>
    <path d="M62 62 C76 76 90 80 90 90 C90 98 74 92 62 78 Z" fill="#8C6BC9"/>
    <rect x="58" y="52" width="4" height="40" rx="2" fill="#4A3D5C"/>
    <circle cx="60" cy="50" r="4" fill="#4A3D5C"/>
    <path d="M58 48 q-6 -10 -12 -12 M62 48 q6 -10 12 -12" stroke="#4A3D5C" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <g fill="#FFF4DE" data-extra="alma" data-fx="twinkle"><circle cx="40" cy="54" r="3"/><circle cx="80" cy="54" r="3"/></g>`,

  hojas_laurel: `
    <path d="M40 100 Q50 60 62 20" stroke="#6B8C4A" stroke-width="5" fill="none" stroke-linecap="round"/>
    <g fill="#7CA85C">
      <ellipse cx="48" cy="82" rx="9" ry="4" transform="rotate(-42 48 82)"/>
      <ellipse cx="53" cy="66" rx="9" ry="4" transform="rotate(-42 53 66)"/>
      <ellipse cx="58" cy="48" rx="9" ry="4" transform="rotate(-42 58 48)"/>
      <ellipse cx="64" cy="74" rx="9" ry="4" transform="rotate(42 64 74)"/>
      <ellipse cx="66" cy="56" rx="9" ry="4" transform="rotate(42 66 56)"/>
      <ellipse cx="66" cy="38" rx="9" ry="4" transform="rotate(42 66 38)"/>
    </g>
    <path d="M96 30 l1.5 5 5 1.5 -5 1.5 -1.5 5 -1.5 -5 -5 -1.5 5 -1.5 Z" fill="#FFD867" data-fx="twinkle"/>`,

  ondas_sonido: `
    <circle cx="40" cy="60" r="7" fill="#FFF4DE"/>
    <g fill="none" stroke="#BDEBFF" stroke-linecap="round">
      <path d="M54 44 a22 22 0 0 1 0 32" stroke-width="4" data-fx="pulse"/>
      <path d="M66 36 a34 34 0 0 1 0 48" stroke-width="4" data-fx="pulse"/>
      <path d="M78 28 a46 46 0 0 1 0 64" stroke-width="4" data-fx="pulse"/>
    </g>`,

  flor_narciso: `
    <g data-fx="pulse">
      <g fill="#FFF4DE"><ellipse cx="60" cy="34" rx="6" ry="12"/><ellipse cx="48" cy="44" rx="6" ry="12" transform="rotate(-60 48 44)"/><ellipse cx="72" cy="44" rx="6" ry="12" transform="rotate(60 72 44)"/><ellipse cx="50" cy="56" rx="6" ry="12" transform="rotate(-120 50 56)"/><ellipse cx="70" cy="56" rx="6" ry="12" transform="rotate(120 70 56)"/></g>
      <circle cx="60" cy="46" r="7" fill="#FFD867"/>
    </g>
    <rect x="58" y="58" width="4" height="18" fill="#5C8C5C"/>
    <g data-extra="reflejo" opacity=".4"><path d="M40 86 q20 8 40 0" stroke="#BDEBFF" stroke-width="3" fill="none" data-fx="wave"/><circle cx="60" cy="94" r="6" fill="#FFD867"/></g>`,

  escudo_amazona: `
    <ellipse cx="60" cy="108" rx="22" ry="4" fill="rgba(0,0,0,.2)"/>
    <path d="M32 42 a30 30 0 0 1 56 0 q-14 -9 -28 6 q-14 -15 -28 -6 Z" fill="#B23D5C" stroke="#8C2F4A" stroke-width="2"/>
    <path d="M32 42 a30 30 0 0 0 56 0" fill="none" stroke="#FFD867" stroke-width="3"/>
    <rect x="57" y="40" width="6" height="22" fill="#8C6B4A"/>
    <circle cx="60" cy="40" r="6" fill="#FFD867" data-fx="pulse"/>`,

  manzana_discordia: `
    <defs><radialGradient id="mdG" cx="45%" cy="35%" r="65%"><stop offset="0" stop-color="#FFE9A8"/><stop offset="100%" stop-color="#D9A82A"/></radialGradient></defs>
    <ellipse cx="60" cy="108" rx="20" ry="4" fill="rgba(0,0,0,.22)"/>
    <path d="M60 42 C42 36 30 50 30 66 a30 26 0 0 0 60 0 C90 50 78 36 60 42 Z" fill="url(#mdG)" stroke="#B8862A" stroke-width="2"/>
    <path d="M58 42 q-2 -12 -10 -16" stroke="#5C7A3D" stroke-width="4" fill="none" stroke-linecap="round"/>
    <ellipse cx="46" cy="58" rx="6" ry="10" fill="rgba(255,255,255,.3)"/>
    <g data-extra="inscripcion" data-fx="twinkle"><path d="M54 66 h12 M60 60 v12" stroke="#8C6B1A" stroke-width="2" stroke-linecap="round"/></g>
    <path d="M92 34 l1.5 5 5 1.5 -5 1.5 -1.5 5 -1.5 -5 -5 -1.5 5 -1.5 Z" fill="#FFF4DE" data-fx="twinkle"/>`,
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

/* ============================================================
   EFECTOS DE CARTAS DORADAS
   1) Inyectar ICONO_KEYFRAMES una sola vez en un <style>.
   2) animarIcono(svg, nombre): activa la animación sutil del ícono.
   3) iconoBase(svg): quita el detalle narrativo ([data-extra]) para
      el estado "sin capítulo leído" del ícono evolutivo.
   4) ICONO_ESCENA: fondo del medallón para dorados sin evolutivo.
   5) marcoMedallon(tipo): marco griego/nórdico, en <svg viewBox="0 0 100 100">.
   ============================================================ */

const ICONO_KEYFRAMES = `
@keyframes icoDraw { 0% { stroke-dashoffset: 320; } 55%, 100% { stroke-dashoffset: 0; } }
@keyframes icoFlicker { 0%, 86%, 92%, 100% { opacity: 1; } 89% { opacity: .3; } 95% { opacity: .55; } }
@keyframes icoPulse { 0%, 100% { opacity: .45; } 50% { opacity: 1; } }
@keyframes icoBob { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
@keyframes icoRock { 0%, 100% { transform: rotate(-2.5deg); } 50% { transform: rotate(2.5deg); } }
@keyframes icoWave { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(-5px); } }
@keyframes icoGhost { 0%, 100% { opacity: 1; } 50% { opacity: .35; } }
@keyframes icoArrow { 0% { transform: translate(-14px, -11px); opacity: 0; } 25% { opacity: 1; } 60%, 100% { transform: translate(0, 0); opacity: 1; } }
@keyframes icoTwinkle { 0%, 100% { opacity: .25; } 50% { opacity: 1; } }
@keyframes icoSpin { to { transform: rotate(360deg); } }
@keyframes icoBeat { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.12); } }
`;

/* Animación del elemento raíz (todo el ícono se mueve) */
const ICONO_FX_ROOT = {
  barco: "icoRock 4.5s ease-in-out infinite",
  lechuza: "icoBob 3.5s ease-in-out infinite",
  alas: "icoBob 4s ease-in-out infinite",
  trigo: "icoRock 5s ease-in-out infinite",
  espigas: "icoRock 5s ease-in-out infinite",
  sandalias: "icoBob 3.6s ease-in-out infinite",
  pegaso: "icoBob 3.4s ease-in-out infinite",
  valquiria: "icoBob 3.8s ease-in-out infinite",
  ardilla: "icoBob 3s ease-in-out infinite",
  toro: "icoBob 4.5s ease-in-out infinite",
  sleipnir: "icoBob 3.6s ease-in-out infinite",
  mariposa_alma: "icoBob 3.2s ease-in-out infinite",
  hojas_laurel: "icoRock 5s ease-in-out infinite",
};

/* Fondo del medallón para dorados sin ícono evolutivo */
const ICONO_ESCENA = {
  leon: "radial-gradient(ellipse at 50% 20%, #7a4a1a 0%, #3d2410 75%)",
  martillo: "radial-gradient(ellipse at 50% 15%, #3d4f73 0%, #16203a 75%)",
  rayo: "radial-gradient(ellipse at 50% 15%, #2b3c66 0%, #131a33 75%)",
  tridente: "radial-gradient(ellipse at 50% 15%, #1d5a73 0%, #0c2433 75%)",
  vellocino: "radial-gradient(ellipse at 50% 15%, #2e4a26 0%, #14230f 75%)",
  reloj_arena: "radial-gradient(ellipse at 50% 15%, #4a3d5c 0%, #241d33 75%)",
  sombras: "radial-gradient(ellipse at 50% 20%, #3d3552 0%, #16121f 80%)",
  isla_lejana: "radial-gradient(ellipse at 50% 20%, #2e5a63 0%, #0f2a30 78%)",
};

const ICONO_FX = {
  draw: (el) => { el.style.strokeDasharray = "320"; el.style.animation = "icoDraw 5s ease-in-out infinite"; },
  flicker: (el, i) => { el.style.animation = "icoFlicker 3.2s " + (i * 0.6) + "s infinite"; },
  pulse: (el, i) => { el.style.animation = "icoPulse 3s ease-in-out " + (i * 0.4) + "s infinite"; },
  twinkle: (el, i) => { el.style.animation = "icoTwinkle 2.8s ease-in-out " + (i * 0.7) + "s infinite"; },
  wave: (el) => { el.style.animation = "icoWave 4s ease-in-out infinite"; },
  ghost: (el) => { el.style.animation = "icoGhost 5s ease-in-out infinite"; },
  arrow: (el) => { el.style.animation = "icoArrow 3.5s ease-in-out infinite"; },
  spin: (el) => { el.style.transformBox = "fill-box"; el.style.transformOrigin = "center"; el.style.animation = "icoSpin 16s linear infinite"; },
  beat: (el, i) => { el.style.transformBox = "fill-box"; el.style.transformOrigin = "center"; el.style.animation = "icoBeat 2.8s ease-in-out " + (i * 0.3) + "s infinite"; },
};

function animarIcono(svgEl, nombre) {
  if (ICONO_FX_ROOT[nombre]) {
    svgEl.style.transformOrigin = "50% 70%";
    svgEl.style.animation = ICONO_FX_ROOT[nombre];
  }
  svgEl.querySelectorAll("[data-fx]").forEach((el, i) => {
    const fn = ICONO_FX[el.dataset.fx];
    if (fn) fn(el, i);
  });
}

function iconoBase(svgEl) {
  svgEl.querySelectorAll("[data-extra]").forEach((n) => n.remove());
}

/* Marco del medallón según mitología. Devuelve el contenido interno
   de un <svg viewBox="0 0 100 100"> que se superpone al medallón. */
function marcoMedallon(tipo) {
  const pt = (r, a) => (50 + r * Math.cos(a)).toFixed(2) + " " + (50 + r * Math.sin(a)).toFixed(2);
  if (tipo === "griega") {
    const N = 18, rO = 47, rI = 41.5;
    let d = "";
    for (let i = 0; i < N; i++) {
      const a0 = (i / N) * 2 * Math.PI, a1 = ((i + 0.5) / N) * 2 * Math.PI, a2 = ((i + 1) / N) * 2 * Math.PI;
      d += (i ? "L" : "M") + pt(rO, a0) + " A" + rO + " " + rO + " 0 0 1 " + pt(rO, a1) +
        " L" + pt(rI, a1) + " A" + rI + " " + rI + " 0 0 1 " + pt(rI, a2) + " ";
    }
    return '<circle cx="50" cy="50" r="49" fill="none" stroke="#FFD867" stroke-width="1.2"/>' +
      '<path d="' + d + 'Z" fill="none" stroke="#FFD867" stroke-width="2.4"/>' +
      '<circle cx="50" cy="50" r="38.5" fill="none" stroke="rgba(255,216,103,.55)" stroke-width="1.2"/>';
  }
  /* nórdica: trenza de dos hebras entrelazadas */
  const hebra = (fase) => {
    let d = "";
    for (let i = 0; i <= 200; i++) {
      const a = (i / 200) * 2 * Math.PI;
      const r = 44 + 3.8 * Math.sin(8 * a + fase);
      d += (i ? "L" : "M") + pt(r, a) + " ";
    }
    return d + "Z";
  };
  return '<circle cx="50" cy="50" r="49.2" fill="none" stroke="rgba(255,216,103,.5)" stroke-width="1"/>' +
    '<path d="' + hebra(0) + '" fill="none" stroke="#E8B93A" stroke-width="2.6" stroke-linejoin="round"/>' +
    '<path d="' + hebra(Math.PI) + '" fill="none" stroke="#FFD867" stroke-width="2.6" stroke-linejoin="round"/>' +
    '<circle cx="50" cy="50" r="37.5" fill="none" stroke="rgba(255,216,103,.5)" stroke-width="1"/>';
}
