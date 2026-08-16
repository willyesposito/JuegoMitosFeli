# Roster de personajes v3 — Master de tiers y estado

**Reemplaza a:** `roster_personajes_v2.md` y a la sección de clasificación de `Especificación de Implementación de Tiers`. Las **fichas individuales** (dones, historia, ¿por qué?, atributos, notas de suavizado) de los personajes heredados siguen vigentes tal como están en `roster_personajes.md` (v1); este documento gobierna composición del roster, tiers y qué falta producir.

**Roadmap de módulos y fuentes de capítulo:** ver `olas_y_fuentes_de_capitulos.md` — ese documento manda sobre el roadmap por olas donde haya conflicto. Este archivo sigue siendo la fuente de verdad de **composición del roster** (quién está, tier, ficha) y del **estado de producción de capítulos** (qué está escrito, mergeado y publicado).

**Actualizado julio 2026 — mergeo de contenido cerrado.** Todo el texto de capítulos que estaba escrito en `contenido para mergear/` (`capitulos_tier_dorado.md`, `Info Personajes.txt`, `capitulos_plateado_bloque3.md`) ya está copiado a `personajes.json`. Verificado directo contra el JSON: no queda ningún capítulo con solo título — todos tienen historia y ¿por qué? completos. Lo único que puede quedar pendiente por personaje es que Willy revise un capítulo en `estado: "borrador"` y lo pase a `"publicado"`. La carpeta `contenido para mergear/` queda como archivo histórico de referencia, ya no como lista de tareas.

## Decisiones que fijan esta versión (julio 2026)

1. Se mantienen los 9 griegos que v2 eliminaba (Atlas, Dédalo, Nike, Iris, Selene, Pan, Midas, Quirón, Fénix).
2. De los nórdicos eliminados por v2 vuelve solo **Las Valquirias**, por criterio de relevancia en las películas de *How to Train Your Dragon* (mencionadas explícitamente en el funeral de Stoick en HTTYD 2, junto a Odín y el Valhalla). Idunn, Bragi, Frey, Brunilda, Mimir, Las Nornas, Sleipnir, Ratatosk y Vidar quedan fuera del roster activo.
3. Cronos, Medea y Hel entran con versión suavizada aprobada por Willy (ver regla 5 de CLAUDE.md). **Sus segundos capítulos ya están escritos y publicados** (julio 2026): Cronos (`ordena:titanomaquia`, el miedo al reemplazo como motor de su propia caída), Medea (`ordena:dragon_dormido`, el conocimiento como solución en vez de la fuerza), Hel (`vinculo:balder`, equidad sin excepciones al administrar su reino). Ninguno lleva detalle crudo del mito original.
4. Tier estático en Ola 1. Absorción de mitos menores y rutas de ascensión: anotadas para Ola 2+, no implementar antes.
5. Rango de capítulos por tier (regla 6 de CLAUDE.md): dorado **sin techo** (piso 3, sin límite superior), plateado 2-4, normal 1-3. El techo de dorado se eliminó en julio 2026 (al construir el Espejo de los Mundos) para que un dorado acumule todos los capítulos que su historia dé sin desplazar candidatos; antes de eso el techo se había subido +1 en los tres tiers por los capítulos de `mapa:`. El piso no cambió en ningún momento.
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

**Actualizado agosto 2026, verificado contra el repo:** ya no queda ningún capítulo en `estado: "borrador"`. El PR #31 (27 de julio de 2026) publicó el último lote pendiente (16 capítulos de tier plateado + los 18 mitos de Ordená que faltaban) y cerró el pendiente por completo: 206 capítulos publicados, 0 borradores, 0 links colgados. Las marcas 🕓 que quedaban en las tablas de este documento estaban desactualizadas desde esa fecha y se corrigieron a ✅ en esta revisión.

---

# TIER DORADO (13) — 3 a 5 capítulos

## Griega (10)

| Personaje | Capítulos |
|---|---|
| Zeus | base ✅ · La boda del cielo (`vinculo:hera`) ✅ · Visión Panorámica (`ordena:aguila`) ✅ · La Prueba de la Xenia (`ordena:hospitalidad`) ✅ |
| Poseidón | base ✅ · El Origen de Pegaso (`cielo:pegaso`) ✅ · El Valor del Olivo (`ordena:atenas_olivo`) ✅ |
| Hades | base ✅ · El acuerdo de las estaciones (`vinculo:persefone`) ✅ · El Contrato Booleano (`ordena:orfeo`) ✅ · Resolución Paramétrica (`ordena:cerbero`) ✅ |
| Atenea | base ✅ · La Red de Soporte (`cielo:andromeda`) ✅ · El Primer Tribunal (`ordena:areopago`) ✅ |
| Heracles | base ✅ · El león de Nemea (`cielo:leo`) ✅ · Los establos de Augías (`ordena:establos_augias`) ✅ · Los doce trabajos (`ordena:heracles`) ✅ · Los trabajos que dibujaron el mundo (`mapa:heracles_doce_trabajos`) ✅ |
| Odiseo | base ✅ · Nadie y el cíclope (`ordena:ciclope`) ✅ · El caballo de Troya (`ordena:troya`) ✅ · La vuelta a Ítaca (`vinculo:penelope`) ✅ · El mapa de los diez años (`mapa:odisea`) ✅ |
| Teseo | base ✅ · El hilo de Ariadna (`cielo:corona_boreal`) ✅ · El laberinto (`ordena:laberinto`) ✅ · Después de Creta (`ordena:teseo`) ✅ · El héroe que le dio nombre a un mar (`mapa:teseo`) ✅ |
| Aquiles | base ✅ · El Escudo Cosmológico (`ordena:escudo`) ✅ · El Costo de la Impulsividad (`ordena:ira`) ✅ · Ruptura del Ciclo (`ordena:reconciliacion`, bonificación) ✅ |
| Jasón | base ✅ · El Vellocino Protector (`ordena:vellocino`) ✅ · Alquimia vs. Fuerza (`ordena:colquida`) ✅ · Las Rocas Simplégades (`ordena:simplegades`) ✅ · El barco que llegó al borde del mapa (`mapa:argonautas`) ✅ |
| Perseo | base ✅ · El héroe en las estrellas (`cielo:perseo`) ✅ · Inventario Crítico (`ordena:equipamiento`) ✅ · Ventaja Aérea (`cielo:casiopea`) ✅ · De una isla chica a los dos extremos del mundo (`mapa:perseo`) ✅ |

## Nórdica (3)

| Personaje | Capítulos |
|---|---|
| Odín | base ✅ · El ojo en el pozo (`ordena:pozo_mimir`) ✅ · Lo que Frigg sabe (`vinculo:frigg`) ✅ |
| Thor | base ✅ · El Collar de Sif (`ordena:mjolnir`) ✅ · El Viaje a Jotunheim (`ordena:jotunheim`) ✅ · El compañero de viajes (`vinculo:loki`) ✅ |
| Loki | base ✅ · La travesura del pelo de oro (`vinculo:sif`) ✅ · El lobo que creció demasiado (`vinculo:tyr`) ✅ |

**Tier dorado: los 13 tienen 3 o más capítulos, todos publicados** (tier sin techo desde julio 2026, ver decisión 5; un dorado puede seguir sumando). Los capítulos `espejo:` de los dorados apareados (Zeus, Odín, Heracles, Thor, Hades, Poseidón, Loki, Aquiles) también están publicados (julio 2026, con el módulo Espejo de los Mundos).

# TIER PLATEADO (37) — 2 a 4 capítulos

## Griega (25)

| Personaje | Capítulos |
|---|---|
| Hera | base ✅ · El Guardián de los Cien Ojos (`ordena:argos`) ✅ |
| Deméter | base ✅ · El Regalo de Triptólemo (`ordena:triptolemo`) ✅ · El mapa de las estaciones (`mapa:demeter_persefone`) ✅ |
| Apolo | base ✅ · Armonía Matemática (`ordena:armonia_lyra`) ✅ |
| Artemisa | base ✅ · La Metamorfosis (`cielo:osa_mayor`) ✅ |
| Ares | base ✅ · Atrapado en la Vasija de Bronce (`ordena:aloadas`) ✅ |
| Afrodita | base ✅ · La Manzana Dorada (`ordena:manzana_dorada`) ✅ |
| Hefesto | base ✅ · El escudo que cuenta el mundo (`vinculo:aquiles`) ✅ · Talos, el Gigante de Bronce (`ordena:talos`) ✅ |
| Hermes | base ✅ · Negociación de Activos (`ordena:robo_ganado`) ✅ |
| Dioniso | base ✅ · El Don de Midas (`ordena:midas`) ✅ |
| Cronos | base ✅ · La guerra que no evitó nada (`ordena:titanomaquia`) ✅ |
| Prometeo | base ✅ · El Engaño de Mecone (`ordena:reparto`) ✅ · La Resiliencia (`ordena:caucaso`) ✅ · El castigo en el borde del mundo (`mapa:prometeo`) ✅. Absorción futura: Deucalión y Pirra (Ola 2+) |
| Perséfone | base ✅ · Algoritmo de las Estaciones (`ordena:ciclo_natural`) ✅ |
| Belerofonte | base ✅ · El Límite del Vuelo (`ordena:limite_vuelo`) ✅ · La montaña que todavía echa fuego (`mapa:belerofonte`) ✅ |
| Orfeo | base ✅ · Análisis de Frecuencias (`ordena:inframundo`) ✅ |
| Edipo | base ✅ · El acertijo de la Esfinge (`vinculo:esfinge`) ✅ |
| Penélope | base ✅ · El regreso de Odiseo (`vinculo:odiseo`) ✅ |
| Helena | base ✅ · La promesa de Afrodita (`vinculo:afrodita`) ✅ |
| Casandra | base ✅ · El don y su precio (`vinculo:apolo`) ✅ |
| Medea | base ✅ · El dragón que nunca dormía (`ordena:dragon_dormido`) ✅ |
| Circe | base ✅ · La maga de la isla (`vinculo:odiseo`) ✅ |
| Agamenón | base ✅ · La ofensa (`vinculo:aquiles`) ✅ |
| Héctor | base ✅ · La Despedida en las Puertas Esceas (`ordena:despedida`) ✅ |
| Atlas | base ✅ · La bóveda celeste (`vinculo:heracles`) ✅ · El gigante que le dio nombre a un océano (`mapa:atlas`) ✅ |
| Dédalo | base ✅ · Límites Operativos (`ordena:vuelo_icaro`) ✅ · El Hilo y la Caracola (`ordena:desafio_minos`) ✅ · El vuelo que bautizó un mar (`mapa:dedalo`) ✅ |
| Orión | base ✅ · El escorpión que lo persigue (`cielo:escorpio`) ✅. Publicado en Ola 1, El Cielo de los Mitos |

## Nórdica (10)

| Personaje | Capítulos |
|---|---|
| Freya | base ✅ · El Collar Brisingamen (`ordena:forja_enana`) ✅ |
| Frigg | base ✅ · El Juramento de Todas las Cosas (`ordena:juramento`) ✅ |
| Tyr | base ✅ · La Paradoja de Gleipnir (`ordena:fenrir_paradoja`) ✅ |
| Heimdall | base ✅ · El Ancho de Banda (`ordena:heimdall`) ✅ |
| Skadi | base ✅ · La Elección a Ciegas (`ordena:eleccion_ciegas`) ✅ |
| Njörd | base ✅ · Noatún y la Montaña (`ordena:convivencia`) ✅ |
| Balder | base ✅ · Breidablik, el Salón sin Mancha (`ordena:breidablik`) ✅ |
| Sigurd | base ✅ · Parser de Advertencias (`ordena:traicion`) ✅ |
| Sif | base ✅ · La Apuesta de los Enanos (`ordena:apuesta_enanos`) ✅ |
| Hel | base ✅ · La única condición (`vinculo:balder`) ✅ |

## Romana (2)

| Personaje | Capítulos |
|---|---|
| Eneas | base ✅ · La reina de Cartago (`vinculo:dido`) ✅ · El viaje que unió Troya con Roma (`mapa:eneas`) ✅ |
| Rómulo y Remo | base ✅ · La estirpe del troyano (`vinculo:eneas`) ✅ · La colina donde empezó una ciudad de verdad (`mapa:romulo_remo`) ✅ |

**Tier plateado: los 37 tienen su capítulo base y su(s) segundo(s) capítulo(s), todos publicados** (Cronos, Hel y Medea incluidos — julio 2026). Con la carga de El Mapa del Héroe (julio 2026), Eneas, Belerofonte, Deméter, Atlas y Rómulo y Remo suman un tercer capítulo; Dédalo y Prometeo suman un cuarto — todos dentro del nuevo techo de 4 (ver decisión 5).

# TIER NORMAL (35) — 1 a 3 capítulos

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

**Actualizado julio 2026 — resuelto.** La tabla definitiva de pares se cerró y publicó con el módulo Espejo de los Mundos: **12 pares**, ver `olas_y_fuentes_de_capitulos.md` §4.2 para la tabla completa. El campo `espejo` en `personajes.json` ya está poblado (recíproco) en los 24 personajes apareados y sus 24 capítulos `espejo:` están publicados. Notas sobre la tabla vieja de este archivo (que era tentativa): Aquiles quedó apareado con **Sigurd** (no Balder; Balder va con Apolo), y Frigg con **Hera** (el tanteo Frigg↔Casandra se descartó). Apolo↔Bragi y Pegaso↔Sleipnir siguen descartados (Bragi y Sleipnir fuera del roster). Atenea quedó sin par (su equivalente, Odín, va con Zeus).

## Trabajo pendiente (actualizado agosto 2026 — verificado contra el repo)

El mergeo de contenido escrito quedó cerrado, y desde el PR #31 (27 de julio de 2026) también quedó cerrada la publicación: **0 capítulos en `estado: "borrador"`, 0 anclas rotas.** Los ítems 1, 2 y 4 de este listado (revisión/publicación pendiente, módulo Ordená sin construir, viajes del Mapa en borrador) describían un estado intermedio de julio ya superado; se dejan tachados para no perder el historial.

1. ~~Revisión y publicación de capítulos en borrador~~ — resuelto (julio 2026, PR #31): las 85 cartas tienen sus 206 capítulos publicados.
2. ~~Construir Ordená el Mito para encender los capítulos `ordena:*`~~ — resuelto: módulo construido, registrado en el hub, con su catálogo completo de 49 mitos publicados.
3. **Espejo de los Mundos (resuelto y publicado, julio 2026):** 12 pares cerrados en `espejos.json` y campo `espejo` poblado + 24 capítulos `espejo:` en `personajes.json`, todo en `estado: "publicado"`. Módulo construido y registrado en el hub. Ver `olas_y_fuentes_de_capitulos.md` §4.2 para la tabla.
4. ~~Mapa del Héroe sin registrar en el hub~~ — resuelto: `viajes.json` y sus 12 capítulos están publicados, y el módulo está registrado en el hub (`hub.js`).
5. **Perseo (resuelto):** el título de más que este documento marcaba como pendiente de recortar ya no aplica.
6. **Cupo de más por `mapa:` (resuelto, julio 2026):** los 7 personajes que habían quedado con un capítulo candidato de más para su tope de tier (dorados: Odiseo, Jasón, Heracles, Teseo, Perseo; plateados: Dédalo, Prometeo) ya no tienen conflicto — Willy subió el techo de cada tier +1 (decisión 5) específicamente para que el capítulo de `mapa:` entre sin desplazar a los que ya había. Nadie queda afuera.
7. **Lo único real que queda:** Vínculos tiene 25 capítulos escritos contra el presupuesto de ~35 (enriquecimiento para los 25 normales que hoy solo tienen el capítulo base, no falta — cumplen el piso de su tier), y la nota de Freya (`ordena:forja_enana` → Brisingamen) sigue anotada y sin implementar a propósito.

## Regla de crecimiento del roster

Cuando Feli pida un personaje nuevo, se agrega al JSON siguiendo la misma ficha: dones, historia suavizada, sección "¿Por qué?", atributos, tier asignado según densidad de historia (regla 6), y nota de suavizado si el mito original lo necesita. Registrar qué personajes pidió ella (dato de interés para el documento de contexto del proyecto padre).
