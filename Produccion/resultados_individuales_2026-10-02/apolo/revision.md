# Apolo — producción individual del 2026-10-02
**Resultado: PASA LA REVISIÓN DEL AGENTE. Aprobación visual de Willy: PENDIENTE.**
Imagen final: imagenes/apolo.png. PNG nativo completo 1086 × 1448 (3:4).
SHA-256: 1552165c1e4c02aeae6c4823835aed884bc2291d4677d0a642d6d71c406d4bb0.
Blob Git esperado: 5d26376528e428118b96a6cbf4d9fcfe6e95c5b2.

## Autorización y alcance
Willy pidió en este chat: «revisa los nuevos cambios del repo y genera la imagen hasta que quede aprobada y subilo».
Se retoma únicamente Apolo en claude/game-setup-v98pr1. Esta producción individual permite correcciones sucesivas hasta superar controles; no reanuda la automatización ni reinicia los contadores del lote anterior. Tres llamadas en esta producción; existe un intento anterior documentado del 29/9. No se modifica el juego, personajes.json, sw.js, canon, órdenes, fichas, skills, MEMORY.md, historial ni control del lote. La revisión del agente no se registra como aprobación de Willy.

## Fuentes actuales y cambios revisados
Base de producción: d1e4e8f82fa76fd57975502734c91de9c1bf5e24. Se comparó la rama con 5601b97dc52b248ba52438e6af8f36747b66eb2a: 20 commits posteriores. Para esta imagen se revisaron las fuentes visuales y cambios pertinentes, no se hizo una auditoría general de todo el código.
- Produccion/apolo.md completo (229 líneas), blob 57dbe19148591a96cfd6d19f1c240141f27426a1.
- Documentacion/memoria_fallas_generacion_imagenes.md completo (700 líneas), blob 6654ec4d0e821c108084d50c7a0f72e43e1c4f99.
- skills/nuevo-personaje-mitos/SKILL.md completo (481 líneas), blob 766ce95801cb30e72cedbc085be8aaff07b094ed.
- Documentacion/estilo_visual_aprobado.md completo (235 líneas), blob 190e907c8e653e409fa240d52001b2b525b33928. Cine de animación 3D familiar vigente, no versiones históricas derogadas.
- Documentacion/decisiones_apolo_orion_frigg_cronos_2026-09-29.md completo, blob a8027211fcb3acf85814a609a7b43222f9416e41: el oráculo se concreta en trípode pequeño de tres patas y cuenco.
- Produccion/resultados_decisiones_2026-09-29/apolo/revision.md completo, blob 2215bc0441dc16f4afc36498db517e6b028bbcf2: fallos previos de adornos, escala, panorama, microtextura y recorte no verificado.
- Documentacion/controles_contaminacion_pop_lote_2026-09-28.md completo, blob c09cf4bc73c444b04dee00ea44eb83d191de21e1; mantiene pendiente la investigación externa específica y delimita controles existentes.
- Documentacion/continuidad_lote_57.md completo, blob 35a650d5aa69957a3bcb453ede3a394656880534: distingue preparación, resultados y elegibilidad; el estado previo de Apolo no era evidencia vigente del diseño.

Ninguna imagen de otro personaje abierta. Las tres generaciones parten de texto desde cero, sin imagen de referencia ni transformación de otro personaje. Sólo se abren resultados propios y copias de inspección. No se investigaron franquicias por fuera de las fuentes actuales; no se certifica ausencia exhaustiva de contaminación externa.

## Preflight aprobado
Un adulto joven alto/esbelto, delgado y liviano, hombros medios y escala algo mayor que humana. Rostro simétrico fino; rubio oscuro medio ondulado suave, piel clara dorada, ojos ámbar. Figura de pie tres cuartos, vertical ligera, manos tocando lira lateral; concentración cálida despierta.
Inventario §5: lira lisa funcional en manos al costado del torso; trípode pequeño con cuenco y tres patas en suelo a un lateral, separado de la lira y subordinado; túnica lisa de corte sencillo; sandalias simples de cuero; sol expresado por luz lateral. No condiciones o alternativas que permitan omitir atributos.
Resonancia visible desde cuerdas y luz localizada en dedos/instrumento. Fondo mínimo desenfocado y suelo suficiente, sin paisaje, edificio, templo, roca, halo ni texto. Cuerpo completo 3:4 al 70–80%, rostro y curva de lira próximos; cada objeto tiene lugar concreto.
Controles previos 1–19: SÍ. Identidad e inventario trazados; escenario/pose derivados de orden; ubicaciones sin omisión; separación textual; recorte previsto sin círculo visible; cero referencias; no símbolos externos; historial completo convertido en controles; acabado 3D y masa en palabras; don localizado; un sujeto; formato/escala/márgenes; detalles funcionales; sin faltantes materiales actuales.
Riesgos y separación de silueta/pose/composición:
- Balder: Apolo vertical con brazos contenidos y actuación musical, rostro más fino; frente a Balder abierto con manos bajas y cara más suave. Luz lateral y aire junto a lira frente a quietud abierta luminosa.
- Helios: Apolo joven liviano independiente; frente a adulto atlético sobre carro. Música serena de pie frente a conducción; verticalidad con aire lateral frente a base de ruedas/movimiento horizontal.
- Orfeo: alto de pie, lira lateral y rostro fino; frente a músico sentado/apoyado con lira baja diagonal, cara menos angular y composición íntima.
- Paris: rostro fino y cuerpo liviano, atención musical en ambas manos; frente a contextura media, cuerpo girado entre direcciones y mano baja con manzana. Composición vertical contenida frente a elección dividida.
Estos contrastes proceden de orden §7 y no autorizan abrir imágenes ajenas.

## Intentos y diferencias
1. exec-8ec557fe-ec66-4238-9e16-e4c005787939.png, 1086×1448, SHA256 9c3c0b72e4eec62c138d59b3d1b65e1c118971c62ad06909608d7f95ba94310e. FALLIDO: figura ≈85.7%; grano visible piel/tela/suelo. Sin adornos, sin panorama, tres patas. Corrección de distancia de cámara y materiales.
2. exec-0a77e8d6-e1c3-4ab4-b5dd-e365ab3243e0.png, 1086×1448, SHA256 fba29eca5f32d1f2bd2feeb9053d7d8ed125600161f13cf3a0a1fa2456aca649. FALLIDO: escala corregida ≈76.3%, pero persiste microtextura de piel/tela. Corrección de método: especificación explícita de materiales CG sin mapas de textura, color continuo y volumen por luz/pliegues.
3. exec-e6ab9307-f28c-4668-83cf-45b4ebe0a5a7.png, 1086×1448, hash final arriba. PASA REVISIÓN: escala ≈78.1%, materiales simplificados sin poros/trama fotográfica identificables en acercamientos, inventario y acción conservados.
Sólo se publica el tercer PNG como activo final. Variantes y recortes son evidencia local, no otros activos ni canon.

## Gate posterior del resultado final
SÍ indica cumplimiento del control inspeccionado por el agente; no aprobación de Willy.
| Control | Resultado | Evidencia |
|---|---|---|
| 1 Formato | SÍ | Dimensiones reales PNG: 1086×1448=3:4 |
| 2 Escena/sujetos | SÍ | Una escena continua y un Apolo; sin duplicados, un instrumento y un trípode |
| 3 Texto/interfaz | SÍ | Barrido completo de fondo y bordes sin letras, pseudo-texto, panel, marco o inset |
| 4 Identidad/anatomía | SÍ | Joven alto/esbelto, hombros medios, cara fina con mentón definido suave; ojos ámbar, rubio oscuro ondulado agrupado; sin torso corpulento |
| 5 Pose | SÍ | De pie en tres cuartos hacia derecha; mano baja alcanza cuerdas, otra sostiene brazo lateral de lira; gesto artístico sin presentación heroica |
| 6 Identificador | SÍ | Lira U legible, cuerdas funcionales paralelas y caja lisa; resonancia visible desde cuerdas; sin roseta ni símbolo |
| 7 Inventario por exceso | SÍ | Túnica lisa sin broche/cierre ornamental; sandalias simples; lira funcional, trípode pequeño; sin adorno, animal, arma o edificio |
| 8 Escenario | SÍ | Fondo neutro sin elementos narrativos, desenfocado y menor contraste; suelo mínimo suficiente |
| 9 Cuerpo/escala/margen | SÍ | Cabello y≈188, sandalia más baja y≈1320: 1132/1448≈78.2%; ambas sandalias enteras, margen superior≈188 e inferior≈128 px |
| 10 Anti-clonación | SÍ dentro del alcance textual | Rostro fino y cuerpo liviano; eje alto, brazos musicales contenidos y objeto lateral. Se separa de apertura de Balder, conducción adulta de Helios, músico sentado de Orfeo y elección girada de Paris. No certificación exhaustiva contra las imágenes del roster |
| 11 Estilo | SÍ | Doce puntos evaluados separadamente abajo |
| 12 Inventario por omisión | SÍ | Lira, luz solar lateral, cuenco con tres patas, túnica y dos sandalias presentes. Sin condiciones incumplidas ni alternativa descartada |
| 13 Seguridad emocional | SÍ | Concentración cálida y sonrisa leve; sin amenaza, ira, violencia, heridas o sexualización |
| 14 Recorte de identidad | SÍ | Copia circular real x330 y180 lado550 inspeccionada: rostro completo y curvas superiores de lira visibles y legibles; no publicada |

## Doce controles de estilo
| Punto | Resultado | Evidencia |
|---|---|---|
| 1 Ausencia de fotografía | SÍ | Cara y miembros modelados como animación; piel de gradientes amplios sin poros identificables, tela sin trama fotográfica. |
| 2 Ausencia de pintura tradicional | SÍ | Sin pincelada, empaste o óleo |
| 3 Ausencia de 2D plano | SÍ | Volumen sólido, sombras suaves con color y profundidad, sin contorno negro/cel shading |
| 4 Proporciones moderadas | SÍ | Cabeza moderada, cara fina, piernas largas, no gnomo/muñeco |
| 5 Masa según orden | SÍ | Brazos/piernas livianos, no abdominales, no bíceps cincelados, espalda en V o gravedad monumental |
| 6 Diferenciación facial | SÍ en comparación textual | Geometría fina/tapered frente a suavidad de Balder/Orfeo/Paris y madurez de Helios; no se sustituye por peinado u objeto. No se afirma auditoría visual completa del roster |
| 7 Profundidad | SÍ | Fondo sin formas nítidas competidoras, contexto subordinado al sujeto y a la lira |
| 8 Don activo | SÍ | Ondas curvas luminosas salen de cuerdas que la mano toca |
| 9 Atributos presentes | SÍ | Todos los elementos de orden §5 se ven |
| 10 Magia trazada | SÍ | Origen en cuerdas, sin símbolos/notas escritas, aura corporal o halo; no tapa cara/instrumento |
| 11 Expresión | SÍ | Cejas actuadas, atención despierta, gesto cálido musical, sin amenaza ni solemnidad genérica |
| 12 Color justificado | SÍ | Temperatura procede de luz solar lateral y resonancia cálida; fondo/sombras conservan fríos, no baño dorado uniforme |

## Inspección y preservación
Se abrió imagen completa y se inspeccionaron a tamaño propio: rostro x400 y180 220×250; manos/lira x530 y315 250×330; piel/tela x345 y380 300×565; pies/trípode x310 y925 620×425; copia circular descrita. Trípode: cuenco y exactamente tres patas claramente separadas hasta suelo. Bordes revisados en imagen completa. Original y PNG final idénticos según SHA256; ninguna modificación de píxeles del activo. Los recortes usan copias temporales de inspección y no se publican.
Método de publicación: exclusivamente imagenes/apolo.png y esta reseña juntos en un commit sobre tip actual, preservando árbol y con force=false; confirmar ref y ambos blobs después. No se sobrescribe un activo remoto preexistente.

## Prompt final exacto
Generador integrado, texto desde cero, sin referencias:
```text
Create one vertical 3:4 FULL-BODY APOLLO illustration as a refined FAMILY 3D ANIMATED FEATURE FRAME. Use an explicitly stylized animated character model with clean, sculpted, moderately caricatured shapes. This is an ANIMATION LOOK DEVELOPMENT image: all materials have ZERO TEXTURE MAPS, zero fine-grain detail. Smooth painted CG skin, completely continuous even color; cloth modeled as smooth broad 3D folds in an otherwise perfectly even solid-color material; solid hair locks as broad designed shapes. Use polished, untextured animation shading and broad light gradients to show every volume. No pores, skin hair, dots, film grain, textile weave, scratches, gritty ground, individual hair strands or realistic surface maps. NOT flat 2D: clearly rounded 3D volumes and colored soft shadows, full cinematic depth.

SUBJECT: exactly one young ADULT man, TALL and SLENDER/LIGHTWEIGHT, medium-width shoulders, slightly idealized stature, fine symmetrical tapered face, clear softly defined jaw, dark blond medium-length SOFT WAVY GROUPED HAIR, fair golden-toned skin, amber expressive eyes, thick acting eyebrows. Small warm focused smile enjoying his music. Moderate head proportion, not big-headed, not chibi, not heavily muscular, not athletic adult gym build.

POSE: standing upright, calm THREE-QUARTER PROFILE facing right. Both feet on ground. Hands gently PLUCKING the LYRE. A light vertical figure with the lyre held to the side at chest height, clearly projecting separately from his torso rather than lying across the stomach. Upper plain curved arm near his face, keeping both face and curve unobstructed. Natural leg stance, no body twist into an indecisive choice, no open arms, no driving or sitting.

CLOSED INVENTORY, ALL AND ONLY:
- ONE PLAIN LYRE, brown smooth unornamented wood, simple U-shaped smooth functional curved arms, straight top bar, parallel functional strings and simple smooth soundbox. NO round motif, rosette, carving, emblem, metal decoration or pattern.
- ONE SMALL DELPHIC TRIPOD on the ground at one lateral, separated from the lyre and secondary: a shallow bowl resting on exactly THREE straight plain slim legs, with all three supports visibly reaching the ground. No decoration, fourth leg, fire, smoke or altar.
- One plain simple Greek knee-length tunic, light natural linen color but SMOOTH SOLID-COLORED ANIMATION MATERIAL, broad sculpted folds. Plain continuous sewn shoulders, NO brooch, clasp, buttons, ornamental knot, belt, jewelry, trim or second garment.
- Two simple unornamented leather sandals, full feet and anatomical toes clearly visible.
- Solar cue expressed only through clear lateral sunlight; no visible sun disk or halo.

MUSICAL DON: his fingers touch the strings, which resonate with visible luminous continuous curved vibration WAVES. They originate visibly at the strings and spread into the empty air beside the instrument. Local pale warm-white light on the fingers and lyre edge. No musical notes, symbols, particles, head halo, bodily aura or disconnected effect. Keep expression, strings and instrument shape readable. Solar light is directional from the side; other shadows are cool, not blanket golden grading.

CAMERA / LAYOUT: a PULLED BACK full scene. Keep a LARGE EMPTY UPPER REGION, roughly the upper FIFTH of the canvas entirely soft background. Topmost hair near 22% height, bottom of sandals near 94% height: Apollo's entire body occupies about 72% of canvas height, strictly within 70–80%. Generous headroom, full feet, some empty floor below. Do not zoom in to fill the frame. Face and the upper lyre curves together in the upper-middle picture, suited to a future crop but without drawing any circle, avatar or inset.

BACKGROUND: a softly defocused neutral color field, subtle spatial depth and nothing recognizable in it. Flat completely smooth CG ground plane of one continuous neutral material, with broad smooth soft cast shadows. No grain, texture or floor pattern. No scenery, building, temple, rock, plant, tree, coastline, mountains, clouds, horizon landscape, background subject or other prop. Image reads immediately as a polished animation frame through large clean forms, crisp acting face, silky untextured 3D surfaces and clean colored lighting.
No text, frame, panels or extras. No franchise styling or copied character identity.
```
