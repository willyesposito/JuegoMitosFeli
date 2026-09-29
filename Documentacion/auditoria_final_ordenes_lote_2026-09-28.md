# Auditoría final de órdenes — lote 2026-09-28

## Alcance y resultado

Snapshot auditado: `356f90a75b30b15afef2adbb9ba7390daa9d61a9`, rama `claude/game-setup-v98pr1`.
Universo: exclusivamente las 57 entradas del control local indicado por Willy; sin reinventariar personajes ni imágenes.

- 57/57 órdenes mecánicamente completas.
- 55/57 sin bloqueo material detectado en esta revisión textual: 53 sin alerta específica de reconocimiento y 2 con control pendiente (Frigg y Cronos).
- 2/57 con bloqueo material: Apolo y Orión.
- 57/57 con resolución funcional trazada de vestimenta/calzado o excepción anatómica explícita.
- 181 comparaciones; cada orden tiene al menos tres rivales distintos, motivos y separadores de silueta, pose y composición.
- 0 órdenes con estado automático LISTA; 57 declaran validación visual PENDIENTE.
- 0 marcadores [FALTA] en las órdenes. Esto no acredita ausencia de faltantes semánticos: los dos siguientes siguen sin estar señalizados allí.
- 2 alertas [REVISAR], correctamente clasificadas como reconocimiento pendiente.
- 39 investigaciones externas de contaminación pop pendientes; no son bloqueos materiales por sí solas.

“Sin bloqueo detectado” describe la preparación textual revisada. No acredita preflight de una futura ejecución ni aprueba una imagen. No se revisaron imágenes.

## Bloqueos materiales restantes

| Personaje | Evidencia actual | Decisión pendiente |
|---|---|---|
| Apolo | [Orden §5](../Produccion/apolo.md): “sol y oráculo, discretos”. ADN vigente, línea 452: mismo texto. La [revisión previa](../Produccion/resultados_lote_2026-09-28/apolo/revision.md) documentó falta de forma/objeto y ubicación. La orden actual conserva el requisito. | [FALTA: representación visual concreta y trazable del oráculo, o autorización expresa para omitir esa pista]. No seleccionar trípode, edificio, símbolo u otro recurso por intuición. |
| Orión | [Orden §4](../Produccion/orion.md): “herramienta de caza en reposo si hace falta”. §5: “relación visual con Escorpio y herramienta de caza en reposo”. La instrucción general de respetar condiciones no define la herramienta ni alinea estos dos campos. | [FALTA: resolver si se omite como opcional o se incorpora una herramienta concreta autorizada]. No elegirla por asociación mitológica. |

Estas decisiones requieren intervención de Willy. No se modificaron el ADN, las órdenes ni sus estados para resolverlas.

## Correcciones anteriores verificadas

- Ares: casco, armadura, lanza baja y escudo están definidos; acción, silueta e inventario se corresponden.
- Hefesto: martillo, pinzas, yunque y banco incorporados; las manos y el lugar de trabajo están resueltos textualmente.
- Orfeo: “Adulto joven” y traducción corporal “joven” coinciden.
- Helios: avatar referido a la porción del sol ambiental, con exclusión expresa del halo decorativo.
- Vestimenta: desapareció la salida vacía “. ADN.”. Se conserva la base funcional subordinada a prendas y armaduras específicas.
- Aquiles: sandalia con talón descubierto y recorte del contorno repetido en el escudo; Quirón: túnica limitada al torso humano y patas equinas; Minotauro: faldellín, piernas taurinas y pezuñas.
- Condiciones y alternativas: el generador conserva el texto y ya no exige todas las opciones con “o”. El conflicto particular de Orión sigue abierto.
- Separación: 181 motivos y 543 separadores presentes; sin comparadores duplicados dentro de cada orden. Se reutilizó la cobertura previa y se revisaron las comparaciones compiladas, sin reconstruir el roster.
- Identificadores: las cinco alertas léxicas resueltas no reaparecen; Frigg y Cronos conservan sus controles.
- La comprobación mecánica del generador no pretende detectar todos los faltantes de significado. Apolo y Orión muestran por qué COMPLETA no equivale a inventario validado.

## Controles pendientes

1. Frigg: reconocimiento del conocimiento silencioso mediante manos, mirada y manto, sin agregar objeto profético.
2. Cronos: reconocimiento mediante escala y presencia y separación respecto de otros ancianos monumentales, sin agregar hoz ni símbolos de tiempo.
3. Contaminación pop: 39 pendientes según [el registro vigente](controles_contaminacion_pop_lote_2026-09-28.md). Las otras 18 anotaciones no equivalen a investigación exhaustiva.
4. Todas las órdenes: aplicación del preflight completo antes de generar; lectura del historial de fallas en esa futura etapa; controles visuales del resultado y del recorte sólo cuando exista una imagen.
5. Las alternativas autorizadas deben seleccionarse explícitamente en el preflight; ninguna cuenta como autorización de objetos adicionales.

## Continuidad y notas desactualizadas

Reutilizar este informe junto con [cobertura anti-clonación](cobertura_anti_clonacion_lote_2026-09-28.md), [revisión de identificadores](revision_identificadores_lote_2026-09-28.md) y [controles pop](controles_contaminacion_pop_lote_2026-09-28.md).

La nota de correcciones estructurales documenta una etapa anterior: sus cifras de siete alertas y cuarenta investigaciones y los pendientes de ropa de Odiseo/Dédalo/Thor no describen por sí solos la preparación textual actual. Los estados históricos del control no se alteran.

La introducción de la regla común en el ADN aún dice que Aquiles, Quirón y Minotauro conservan pendientes; el bloque JSON actual tiene sus decisiones explícitas y listas `pendientes: []`. Es una nota introductoria desactualizada, no tres bloqueos nuevos. En esta auditoría se conserva el archivo fuente y se deja identificada la discrepancia documental.

No hubo nuevas decisiones de diseño, generación, prompts de imagen, investigación web, apertura de imágenes ni cambios del control o automatización. El único archivo publicado por esta auditoría es este diagnóstico; no se recompilaron órdenes porque no se modificaron sus fuentes.

## Cobertura para no repetir lecturas

Las 57 órdenes se recuperaron una sola vez en el snapshot indicado. Las huellas siguientes permiten identificar cuáles cambiaron en una revisión posterior. Comparar sólo cambios y evidencias pendientes; no asumir que este resultado sigue vigente si cambian las fuentes.

| ID del control | Resultado de esta auditoría | Comparaciones | Blob de la orden |
|---|---|---:|---|
| odiseo | PREPARACIÓN TEXTUAL SIN BLOQUEO DETECTADO | 3 | `f1559bbc58a9d343aa543e79cd54331a146a885a` |
| dedalo | PREPARACIÓN TEXTUAL SIN BLOQUEO DETECTADO | 3 | `ae74c52984f7c7b4d0da52c0e0ad438e4ba4787e` |
| thor | PREPARACIÓN TEXTUAL SIN BLOQUEO DETECTADO | 4 | `c339366203233fe76412dfd7ed90cb42c3be5b21` |
| tyr | PREPARACIÓN TEXTUAL SIN BLOQUEO DETECTADO | 3 | `aa5c0e60e562c40a32dd9631c4e68f97b01f6710` |
| poseidon | PREPARACIÓN TEXTUAL SIN BLOQUEO DETECTADO | 3 | `e77d8be0289721b5b82fc77cb5d685046a3ea2b3` |
| hestia | PREPARACIÓN TEXTUAL SIN BLOQUEO DETECTADO | 3 | `f1be160078913c99d313897eeddd9ed62ef90ff1` |
| apolo | BLOQUEO MATERIAL | 4 | `babed26d1e5f7ea830f7316799d299085a6cae9c` |
| ares | PREPARACIÓN TEXTUAL SIN BLOQUEO DETECTADO | 5 | `774f99ab9501386db92fc4d25479c4edafd13665` |
| hefesto | PREPARACIÓN TEXTUAL SIN BLOQUEO DETECTADO | 3 | `9d83e33b3b0d1d48a720e7534d3e33bef9844f8e` |
| dioniso | PREPARACIÓN TEXTUAL SIN BLOQUEO DETECTADO | 3 | `cba10f338dfdb9d194414c1e978570b7ee500f44` |
| nike | PREPARACIÓN TEXTUAL SIN BLOQUEO DETECTADO | 3 | `f839d87f88632729c90feb3b952725feaf42704d` |
| helios | PREPARACIÓN TEXTUAL SIN BLOQUEO DETECTADO | 3 | `68a71b53eef4590d23a205c7b437897a5315bcb6` |
| selene | PREPARACIÓN TEXTUAL SIN BLOQUEO DETECTADO | 3 | `8eb4134a4e92fc48bdd1d72d718350e5ada2fb76` |
| pan | PREPARACIÓN TEXTUAL SIN BLOQUEO DETECTADO | 3 | `a0cde9c48545ffe1eceeac106e52a8571e9dc7a1` |
| prometeo | PREPARACIÓN TEXTUAL SIN BLOQUEO DETECTADO | 3 | `7083bc2e4f932cad018aa52830fb2e418ac36320` |
| aquiles | PREPARACIÓN TEXTUAL SIN BLOQUEO DETECTADO | 4 | `a7b1813ab14067cf2b7e9fb720a5833d4de2367f` |
| hector | PREPARACIÓN TEXTUAL SIN BLOQUEO DETECTADO | 6 | `6c2e96e997b8da1104c4d5a9c96b271e4ce41f2d` |
| jason | PREPARACIÓN TEXTUAL SIN BLOQUEO DETECTADO | 4 | `0cd1b7d0d7bbf74c2d84849bfd9eb3ca2b14c6d0` |
| orfeo | PREPARACIÓN TEXTUAL SIN BLOQUEO DETECTADO | 3 | `a3c1397570bde5ba13186719de7161e823eb17f9` |
| ariadna | PREPARACIÓN TEXTUAL SIN BLOQUEO DETECTADO | 3 | `a485385770927f97c51255201115a03003f43191` |
| atalanta | PREPARACIÓN TEXTUAL SIN BLOQUEO DETECTADO | 3 | `8e7f9e593ff79b3eabb87110eb1670beadb6872c` |
| belerofonte | PREPARACIÓN TEXTUAL SIN BLOQUEO DETECTADO | 3 | `21b773d4d3d4140297ed258785cd72dfd07ddff9` |
| aracne | PREPARACIÓN TEXTUAL SIN BLOQUEO DETECTADO | 3 | `b5aa36fa874588e23839f3f4b9e4b53c1d006659` |
| midas | PREPARACIÓN TEXTUAL SIN BLOQUEO DETECTADO | 3 | `c1fdc841c562e6696c14c99fc8909733a9a4b2a9` |
| pegaso | PREPARACIÓN TEXTUAL SIN BLOQUEO DETECTADO | 3 | `dc12ca4cb78f95350e3ca7a41abd8f0e7824c7f3` |
| quiron | PREPARACIÓN TEXTUAL SIN BLOQUEO DETECTADO | 3 | `4ca71b01442315b5af4df66a41524e945d16b297` |
| fenix | PREPARACIÓN TEXTUAL SIN BLOQUEO DETECTADO | 3 | `15aa38c51febb218262ccf38f33557dede3df0fc` |
| cerbero | PREPARACIÓN TEXTUAL SIN BLOQUEO DETECTADO | 3 | `4bebe7893030f10ef7dbf160e865dbe36557017c` |
| medusa | PREPARACIÓN TEXTUAL SIN BLOQUEO DETECTADO | 3 | `4d0453ff2f930d8d6eb427c2bbdc71256819ff3c` |
| esfinge | PREPARACIÓN TEXTUAL SIN BLOQUEO DETECTADO | 3 | `007f7c006a25f15a20e853f3ce3c0017e0e43de2` |
| minotauro | PREPARACIÓN TEXTUAL SIN BLOQUEO DETECTADO | 3 | `f4c89738a9d0b6fec8ea6eb9d2f9734106e6235d` |
| frigg | CONTROL DE RECONOCIMIENTO | 3 | `0e2c6f258265134cba63519e3741f26597b0c317` |
| balder | PREPARACIÓN TEXTUAL SIN BLOQUEO DETECTADO | 3 | `c4db557eeec45ab42173c373b563963a926d009d` |
| njord | PREPARACIÓN TEXTUAL SIN BLOQUEO DETECTADO | 3 | `b06f457c425ce6d6b8aa38e9a6592ad10568aad8` |
| skadi | PREPARACIÓN TEXTUAL SIN BLOQUEO DETECTADO | 3 | `544cfc84bf065a5c6194306b07df192270ad8837` |
| ratatosk | PREPARACIÓN TEXTUAL SIN BLOQUEO DETECTADO | 3 | `1f4e1866b04f16de419f75b7a4cae389cdcae38c` |
| fenrir | PREPARACIÓN TEXTUAL SIN BLOQUEO DETECTADO | 3 | `3b944f718abea0467975ad81f1d41e6c2baa6344` |
| cronos | CONTROL DE RECONOCIMIENTO | 3 | `ec89618395465dcda6a4883784bb5965cb79265e` |
| medea | PREPARACIÓN TEXTUAL SIN BLOQUEO DETECTADO | 3 | `4f712b7d977f339c235a7555fe26a9cba76853e6` |
| hel | PREPARACIÓN TEXTUAL SIN BLOQUEO DETECTADO | 3 | `685a556c74ddf756f0eb3270d38f2e6136c14e26` |
| eneas | PREPARACIÓN TEXTUAL SIN BLOQUEO DETECTADO | 4 | `a0719397e49db0cbb4d15bc0d8586f13b3990d3e` |
| edipo | PREPARACIÓN TEXTUAL SIN BLOQUEO DETECTADO | 3 | `347c01ee99d4a67db8ac019758cfdc2c6fd6b73e` |
| casandra | PREPARACIÓN TEXTUAL SIN BLOQUEO DETECTADO | 3 | `3f69258059fc816533ce414e6809bdd7feab1ea0` |
| circe | PREPARACIÓN TEXTUAL SIN BLOQUEO DETECTADO | 3 | `556bf0fcec09520555c25e4662350a64abd5ece5` |
| eros | PREPARACIÓN TEXTUAL SIN BLOQUEO DETECTADO | 3 | `96840e5d66d7d2ecb3c6f339e749c0a79efb6ec5` |
| dido | PREPARACIÓN TEXTUAL SIN BLOQUEO DETECTADO | 3 | `0b24e60f2790d1aba7c454dec27e693a73d9229c` |
| andromeda | PREPARACIÓN TEXTUAL SIN BLOQUEO DETECTADO | 3 | `c4603d4a3a188150ca41ad37c87a298c05223a50` |
| nausicaa | PREPARACIÓN TEXTUAL SIN BLOQUEO DETECTADO | 3 | `8081cf2ec794dce023d1292fd0acd7b8cde8ec6d` |
| dafne | PREPARACIÓN TEXTUAL SIN BLOQUEO DETECTADO | 3 | `098e0eb96dd483b54628de05dfba014e14dbec4b` |
| eco | PREPARACIÓN TEXTUAL SIN BLOQUEO DETECTADO | 3 | `e44d280733e883f2796d874fd80745544f781c25` |
| narciso | PREPARACIÓN TEXTUAL SIN BLOQUEO DETECTADO | 3 | `d17a01cefda31dd66835bb5fd01d426942099c51` |
| pentesilea | PREPARACIÓN TEXTUAL SIN BLOQUEO DETECTADO | 3 | `bcadae82f4dc2754f5d9b9c526062cb1f9872b95` |
| paris | PREPARACIÓN TEXTUAL SIN BLOQUEO DETECTADO | 3 | `b817605938b425702e9e1d940cb66189fe8bb9a7` |
| calisto | PREPARACIÓN TEXTUAL SIN BLOQUEO DETECTADO | 3 | `c80436701cd22d6b4659b78db8c6d720e0e0622b` |
| casiopea | PREPARACIÓN TEXTUAL SIN BLOQUEO DETECTADO | 3 | `97cb0ca9802c5f8c10971039961c6d592da64a3c` |
| orion | BLOQUEO MATERIAL | 3 | `13653f40c75bbd38a2f512073e9c20c67e075e8e` |
| castor_polux | PREPARACIÓN TEXTUAL SIN BLOQUEO DETECTADO | 3 | `0e539a8daf6956d2eb20ad24f197a6771cc20a55` |
