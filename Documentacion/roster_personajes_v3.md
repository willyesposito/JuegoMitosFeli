# Roster de personajes v3 — Master de tiers y estado

**Reemplaza a:** `roster_personajes_v2.md` y a la sección de clasificación de `Especificación de Implementación de Tiers`. Las **fichas individuales** (dones, historia, ¿por qué?, atributos, notas de suavizado) de los personajes heredados siguen vigentes tal como están en `roster_personajes.md` (v1); este documento gobierna composición del roster, tiers y qué falta producir.

**Roadmap de módulos y fuentes de capítulo:** ver `olas_y_fuentes_de_capitulos.md` — ese documento manda sobre el roadmap por olas donde haya conflicto. Este archivo sigue siendo la fuente de verdad de **composición del roster** (quién está, tier, ficha) y del **estado de producción de capítulos** (qué está escrito, mergeado y publicado).

**Actualizado julio 2026 — mergeo de contenido cerrado.** Todo el texto de capítulos que estaba escrito en `contenido para mergear/` (`capitulos_tier_dorado.md`, `Info Personajes.txt`, `capitulos_plateado_bloque3.md`) ya está copiado a `personajes.json`. Verificado directo contra el JSON: no queda ningún capítulo con solo título — todos tienen historia y ¿por qué? completos. Lo único que puede quedar pendiente por personaje es que Willy revise un capítulo en `estado: "borrador"` y lo pase a `"publicado"`. La carpeta `contenido para mergear/` queda como archivo histórico de referencia, ya no como lista de tareas.

## Decisiones que fijan esta versión (julio 2026)

1. Se mantienen los 9 griegos que v2 eliminaba (Atlas, Dédalo, Nike, Iris, Selene, Pan, Midas, Quirón, Fénix).
2. De los nórdicos eliminados por v2 vuelve solo **Las Valquirias**, por criterio de relevancia en las películas de *How to Train Your Dragon* (mencionadas explícitamente en el funeral de Stoick en HTTYD 2, junto a Odín y el Valhalla). Idunn, Bragi, Frey, Brunilda, Mimir, Las Nornas, Sleipnir, Ratatosk y Vidar quedan fuera del roster activo.
3. Cronos, Medea y Hel entran con versión suavizada aprobada por Willy (ver regla 5 de CLAUDE.md). **Sus segundos capítulos ya están escritos y publicados** (julio 2026): Cronos (`ordena:titanomaquia`, el miedo al reemplazo como motor de su propia caída), Medea (`ordena:dragon_dormido`, el conocimiento como solución en vez de la fuerza), Hel (`vinculo:balder`, equidad sin excepciones al administrar su reino). Ninguno lleva detalle crudo del mito original.
4. Tier estático en Ola 1. Absorción de mitos menores y rutas de ascensión: anotadas para Ola 2+, no implementar antes.
5. Rango de capítulos por tier (regla 6 de CLAUDE.md): dorado 3-4, plateado 2-3, normal 1-2.
6. Confirmado (julio 2026): Ratatosk se reincorpora puntualmente para sostener el set Mensajeros (ficha v1 ya escrita, costo de producción cero — solo falta `pistas_deduccion`). Se agrega chip de mitología "Romana" para Eneas, Dido y Rómulo y Remo.
7. **Confirmado con Willy (julio 2026): 85 es el número final del roster.** Coincide exacto con `personajes.json` y con la tabla de Totales de este documento — no hay discrepancia que reconciliar. El contador del hub ya se calcula dinámicamente (`personajes.length`), no hardcodeado.

## Totales

| | Griega | Nórdica | Romana | Total |
|---|---|---|---|---|
| Dorado | 10 | 3 | 0 | 13 |
| Plateado | 25 | 10 | 2 | 37 |
| Normal | 31 | 3 | 1 | 35 |
| **Total** | **66** | **16** | **3** | **85** |

Suma de El Cielo de los Mitos (Ola 1, ya publicado): Orión (plateado, 2 capítulos: base · escorpión) y Calisto, Casiopea, Cástor y Pólux (normal, 1 capítulo: base) — los cuatro personajes que faltaban para completar el catálogo de 10 constelaciones.

Proporción nórdica: 19,75%. Eneas, Dido y Rómulo y Remo llevan `mitologia: "romana"` (chip propio, ver más abajo) y no suman al target de proporción griega/nórdica.

## Leyenda de estado

- **✅ publicado:** capítulo con historia y ¿por qué? completos, en `personajes.json` con `estado: "publicado"` — ya se puede encender jugando.
- **🕓 borrador:** capítulo con historia y ¿por qué? completos y ya mergeados en `personajes.json`, pero con `estado: "borrador"` — el hub y los módulos todavía no lo muestran. Pasa a publicado cuando Willy da la instrucción explícita (regla de despliegue de `CLAUDE.md`).

Ya no quedan capítulos "solo título" (🔲) ni "escritos sin mergear" (📝) en el roster activo — ver nota de julio 2026 más arriba.

---

# TIER DORADO (13) — 3 a 4 capítulos

## Griega (10)

| Personaje | Capítulos |
|---|---|
| Zeus | base ✅ · La boda del cielo (`vinculo:hera`) ✅ · Visión Panorámica (`ordena:aguila`) 🕓 · La Prueba de la Xenia (`ordena:hospitalidad`) 🕓 |
| Poseidón | base ✅ · El Origen de Pegaso (`cielo:pegaso`) ✅ · El Valor del Olivo (`ordena:atenas_olivo`) 🕓 |
| Hades | base ✅ · El acuerdo de las estaciones (`vinculo:persefone`) ✅ · El Contrato Booleano (`ordena:orfeo`) 🕓 · Resolución Paramétrica (`ordena:cerbero`) 🕓 |
| Atenea | base ✅ · La Red de Soporte (`cielo:andromeda`) ✅ · El Primer Tribunal (`ordena:areopago`) 🕓 |
| Heracles | base ✅ · El león de Nemea (`cielo:leo`) ✅ · Los establos de Augías (`ordena:establos_augias`) 🕓 · Los doce trabajos (`ordena:heracles`) 🕓 · Los trabajos que dibujaron el mundo (`mapa:heracles_doce_trabajos`) 🕓 ⚠️ 5º candidato, tope 4 |
| Odiseo | base ✅ · Nadie y el cíclope (`ordena:ciclope`) 🕓 · El caballo de Troya (`ordena:troya`) 🕓 · La vuelta a Ítaca (`vinculo:penelope`) ✅ · El mapa de los diez años (`mapa:odisea`) 🕓 ⚠️ 5º candidato, tope 4 |
| Teseo | base ✅ · El hilo de Ariadna (`cielo:corona_boreal`) ✅ · El laberinto (`ordena:laberinto`) 🕓 · Después de Creta (`ordena:teseo`) 🕓 · El héroe que le dio nombre a un mar (`mapa:teseo`) 🕓 ⚠️ 5º candidato, tope 4 |
| Aquiles | base ✅ · El Escudo Cosmológico (`ordena:escudo`) 🕓 · El Costo de la Impulsividad (`ordena:ira`) 🕓 · Ruptura del Ciclo (`ordena:reconciliacion`, bonificación) 🕓 |
| Jasón | base ✅ · El Vellocino Protector (`ordena:vellocino`) 🕓 · Alquimia vs. Fuerza (`ordena:colquida`) 🕓 · Las Rocas Simplégades (`ordena:simplegades`) 🕓 · El barco que llegó al borde del mapa (`mapa:argonautas`) 🕓 ⚠️ 5º candidato, tope 4 |
| Perseo | base ✅ · El héroe en las estrellas (`cielo:perseo`) ✅ · Inventario Crítico (`ordena:equipamiento`) 🕓 · Ventaja Aérea (`cielo:casiopea`) ✅ · De una isla chica a los dos extremos del mundo (`mapa:perseo`) 🕓 ⚠️ 5º candidato, tope 4 |

## Nórdica (3)

| Personaje | Capítulos |
|---|---|
| Odín | base ✅ · El ojo en el pozo (`ordena:pozo_mimir`) 🕓 · Lo que Frigg sabe (`vinculo:frigg`) ✅ |
| Thor | base ✅ · El Collar de Sif (`ordena:mjolnir`) 🕓 · El Viaje a Jotunheim (`ordena:jotunheim`) 🕓 · El compañero de viajes (`vinculo:loki`) ✅ |
| Loki | base ✅ · La travesura del pelo de oro (`vinculo:sif`) ✅ · El lobo que creció demasiado (`vinculo:tyr`) ✅ |

**Tier dorado: los 13 tienen sus 3-4 capítulos escritos y mergeados.** Lo único pendiente por personaje es que Willy revise y publique los marcados 🕓 (23 de los 40 capítulos no-base del tier, incluidos los 5 de `mapa:` sumados en julio 2026). Odiseo, Teseo, Jasón, Perseo y Heracles tienen un candidato de más para su tope (⚠️) — ver "Trabajo pendiente" más abajo.

# TIER PLATEADO (37) — 2 a 3 capítulos

## Griega (25)

| Personaje | Capítulos |
|---|---|
| Hera | base ✅ · El Guardián de los Cien Ojos (`ordena:argos`) 🕓 |
| Deméter | base ✅ · El Regalo de Triptólemo (`ordena:triptolemo`) 🕓 · El mapa de las estaciones (`mapa:demeter_persefone`) 🕓 |
| Apolo | base ✅ · Armonía Matemática (`ordena:armonia_lyra`) 🕓 |
| Artemisa | base ✅ · La Metamorfosis (`cielo:osa_mayor`) ✅ |
| Ares | base ✅ · Atrapado en la Vasija de Bronce (`ordena:aloadas`) 🕓 |
| Afrodita | base ✅ · La Manzana Dorada (`ordena:manzana_dorada`) 🕓 |
| Hefesto | base ✅ · El escudo que cuenta el mundo (`vinculo:aquiles`) ✅ · Talos, el Gigante de Bronce (`ordena:talos`) 🕓 |
| Hermes | base ✅ · Negociación de Activos (`ordena:robo_ganado`) 🕓 |
| Dioniso | base ✅ · El Don de Midas (`ordena:midas`) 🕓 |
| Cronos | base ✅ · La guerra que no evitó nada (`ordena:titanomaquia`) ✅ |
| Prometeo | base ✅ · El Engaño de Mecone (`ordena:reparto`) 🕓 · La Resiliencia (`ordena:caucaso`) 🕓 · El castigo en el borde del mundo (`mapa:prometeo`) 🕓 ⚠️ 4º candidato, tope 3. Absorción futura: Deucalión y Pirra (Ola 2+) |
| Perséfone | base ✅ · Algoritmo de las Estaciones (`ordena:ciclo_natural`) 🕓 |
| Belerofonte | base ✅ · El Límite del Vuelo (`ordena:limite_vuelo`) 🕓 · La montaña que todavía echa fuego (`mapa:belerofonte`) 🕓 |
| Orfeo | base ✅ · Análisis de Frecuencias (`ordena:inframundo`) 🕓 |
| Edipo | base ✅ · El acertijo de la Esfinge (`vinculo:esfinge`) ✅ |
| Penélope | base ✅ · El regreso de Odiseo (`vinculo:odiseo`) ✅ |
| Helena | base ✅ · La promesa de Afrodita (`vinculo:afrodita`) ✅ |
| Casandra | base ✅ · El don y su precio (`vinculo:apolo`) ✅ |
| Medea | base ✅ · El dragón que nunca dormía (`ordena:dragon_dormido`) ✅ |
| Circe | base ✅ · La maga de la isla (`vinculo:odiseo`) ✅ |
| Agamenón | base ✅ · La ofensa (`vinculo:aquiles`) ✅ |
| Héctor | base ✅ · La Despedida en las Puertas Esceas (`ordena:despedida`) 🕓 |
| Atlas | base ✅ · La bóveda celeste (`vinculo:heracles`) ✅ · El gigante que le dio nombre a un océano (`mapa:atlas`) 🕓 |
| Dédalo | base ✅ · Límites Operativos (`ordena:vuelo_icaro`) 🕓 · El Hilo y la Caracola (`ordena:desafio_minos`) 🕓 · El vuelo que bautizó un mar (`mapa:dedalo`) 🕓 ⚠️ 4º candidato, tope 3 |
| Orión | base ✅ · El escorpión que lo persigue (`cielo:escorpio`) ✅. Publicado en Ola 1, El Cielo de los Mitos |

## Nórdica (10)

| Personaje | Capítulos |
|---|---|
| Freya | base ✅ · El Collar Brisingamen (`ordena:forja_enana`) 🕓 |
| Frigg | base ✅ · El Juramento de Todas las Cosas (`ordena:juramento`) 🕓 |
| Tyr | base ✅ · La Paradoja de Gleipnir (`ordena:fenrir_paradoja`) 🕓 |
| Heimdall | base ✅ · El Ancho de Banda (`ordena:heimdall`) 🕓 |
| Skadi | base ✅ · La Elección a Ciegas (`ordena:eleccion_ciegas`) 🕓 |
| Njörd | base ✅ · Noatún y la Montaña (`ordena:convivencia`) 🕓 |
| Balder | base ✅ · Breidablik, el Salón sin Mancha (`ordena:breidablik`) 🕓 |
| Sigurd | base ✅ · Parser de Advertencias (`ordena:traicion`) 🕓 |
| Sif | base ✅ · La Apuesta de los Enanos (`ordena:apuesta_enanos`) 🕓 |
| Hel | base ✅ · La única condición (`vinculo:balder`) ✅ |

## Romana (2)

| Personaje | Capítulos |
|---|---|
| Eneas | base ✅ · La reina de Cartago (`vinculo:dido`) ✅ · El viaje que unió Troya con Roma (`mapa:eneas`) 🕓 |
| Rómulo y Remo | base ✅ · La estirpe del troyano (`vinculo:eneas`) ✅ · La colina donde empezó una ciudad de verdad (`mapa:romulo_remo`) 🕓 |

**Tier plateado: los 37 tienen su capítulo base publicado y su(s) segundo(s) capítulo(s) escritos y mergeados** (Cronos, Hel y Medea incluidos — julio 2026). 17 personajes ya tienen los dos capítulos en `publicado`; el resto tiene su segundo capítulo en `borrador`, esperando revisión de Willy. Con la carga de El Mapa del Héroe (julio 2026), Eneas, Belerofonte, Deméter, Atlas y Rómulo y Remo suman un tercer capítulo (dentro del tope); Dédalo y Prometeo suman un 4º candidato que se pasa del tope de 3 (⚠️).

# TIER NORMAL (35) — 1 a 2 capítulos

Todos cumplen el mínimo del tier con su capítulo base, publicado. Los segundos capítulos que ya existen vienen de vínculos o de El Cielo de los Mitos; los que no los tienen todavía no tienen urgencia — se suman cuando otro módulo los toque.

## Griega (31)

**Con segundo capítulo ya publicado:** Andrómeda (`cielo:andromeda`, el rescate), Aracne (`vinculo:atenea`), Ariadna (`cielo:corona_boreal`, la corona en el cielo), Calisto (`vinculo:artemisa`), Medusa (`vinculo:perseo`), Minotauro (`vinculo:dedalo`), Pandora (`vinculo:prometeo`), Pegaso (`cielo:pegaso`, el caballo alado), Quirón (`vinculo:aquiles`).

**Solo capítulo base (sin urgencia):** Atalanta, Calipso, Casiopea, Cerbero, Cástor y Pólux, Dafne, Eco, Eros, Esfinge, Fénix, Helios, Hestia, Iris, Midas, Narciso, Nausícaa, Nike, Pan, Paris, Pentesilea, Psique, Selene.

## Nórdica (3)

| Personaje | Capítulos |
|---|---|
| Fenrir | base ✅ · La cinta imposible (`vinculo:tyr`) ✅. Ruta de ascensión futura a plateado (evento Ragnarok, Ola 2+) |
| Las Valquirias | base ✅. Recuperada por criterio HTTYD (funeral de Stoick, HTTYD 2). Capítulo natural: auroras boreales |
| Ratatosk | base ✅ (ficha v1). Reincorporado para sostener el set Mensajeros. Falta `pistas_deduccion` |

## Romana (1)

| Personaje | Capítulos |
|---|---|
| Dido | base ✅. Puente Troya→Roma |

---

## Fuera del roster activo (con ficha v1 escrita, reutilizable)

Idunn, Bragi, Frey, Brunilda, Mimir, Las Nornas, Sleipnir, Vidar. Sus fichas v1 quedan escritas; si algún módulo futuro los necesita (Mimir cierra la historia del ojo de Odín; las Nornas eran parte del set Tejedoras del Destino), se reincorporan sin costo de producción.

**Impacto en sets temáticos:** la salida de los otros 8 sigue rompiendo "Tejedoras del Destino" (pierde a Las Nornas) y "Los Más Valientes" (pierde a Brunilda). "Mensajeros" queda resuelto con la vuelta de Ratatosk. Los otros dos sets quedan pendientes de redefinición o reincorporación puntual.

## Chip de mitología romana (confirmado)

Eneas, Dido y Rómulo y Remo llevan `mitologia: "romana"`. El chip visual y el filtro "Romana" ya están implementados en el módulo Colección.

## Relaciones (espejo) — estado

Ver el detalle completo y las tablas en `capitulos_plateado_bloque3.md` §"Relaciones (espejo)" (archivo histórico, ver nota de julio 2026 al principio de este documento). Resumen: 6 pares confirmados (Hades↔Hel, Aquiles↔Balder, Poseidón↔Njörd, Deméter↔Sif, Artemisa↔Skadi, Afrodita↔Freya), 2 rotos por la salida de Bragi y Sleipnir del roster (Apolo y Pegaso quedan sin contraparte nórdica por ahora), 1 pendiente de que se termine de resolver Frigg↔Casandra. El campo `espejo` en `personajes.json` sigue vacío (`null`) en todos los personajes — pasa a ser funcional recién cuando se construya Espejo de los Mundos (Ola 2, `olas_y_fuentes_de_capitulos.md` §4.2). Cerrar la tabla definitiva de pares es un insumo de contenido que Willy tiene que producir antes de implementar ese módulo.

## Trabajo pendiente (actualizado julio 2026 — post-mergeo)

El mergeo de contenido escrito quedó cerrado. Lo que sigue pendiente es distinto:

1. **Revisión y publicación:** hay capítulos 🕓 en `estado: "borrador"` en los tres tiers (18 dorados, ~20 plateados). Publicarlos es decisión editorial de Willy, capítulo por capítulo o en lote — no requiere más escritura.
2. **Construir los módulos que los encienden:** la mayoría de los capítulos 🕓 usan `fuente: "ordena:*"` — no se pueden encender jugando hasta que exista el módulo Ordená el Mito (Ola 2). Mientras el módulo no exista, publicarlos los deja visibles en la ficha como capítulo velado con su pista de origen, pero no jugable.
3. **Espejo de los Mundos:** falta cerrar la tabla definitiva de pares (~12) y llenar el campo `espejo` en `personajes.json` antes de poder construir el módulo (Ola 2).
4. **Mapa del Héroe (resuelto, julio 2026):** catálogo de 12 viajes cargado en `viajes.json` (borrador) con sus 12 capítulos nuevos en `personajes.json` (borrador) — ver `olas_y_fuentes_de_capitulos.md` §4.1 para el detalle. El módulo técnico (`mapa.html`/`mapa.js`/`mapa.css`) también está construido, sin registrar en el hub.
5. **Perseo (resuelto):** el título de más que este documento marcaba como pendiente de recortar ya no aplica — el JSON tenía exactamente 4 capítulos para Perseo antes de sumar el de `mapa:`; ahora tiene 5 candidatos para su tope de 4, ver punto 6.
6. **Cupo de más por `mapa:` (julio 2026):** 7 personajes quedaron con un capítulo candidato de más para su tope de tier — dorados: Odiseo, Jasón, Heracles, Teseo, Perseo (5 candidatos, tope 4); plateados: Dédalo, Prometeo (4 candidatos, tope 3). No es un error de datos: son candidatos en `borrador` compitiendo por los mismos 3-4 lugares publicables. Antes de publicar los capítulos de `mapa:` para estos 7, Willy tiene que elegir cuál de los candidatos existentes queda afuera (marcados con ⚠️ en las tablas de arriba).

## Regla de crecimiento del roster

Cuando Feli pida un personaje nuevo, se agrega al JSON siguiendo la misma ficha: dones, historia suavizada, sección "¿Por qué?", atributos, tier asignado según densidad de historia (regla 6), y nota de suavizado si el mito original lo necesita. Registrar qué personajes pidió ella (dato de interés para el documento de contexto del proyecto padre).
