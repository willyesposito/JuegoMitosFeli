# Roster de personajes v3 — Master de tiers y estado

**Reemplaza a:** `roster_personajes_v2.md` y a la sección de clasificación de `Especificación de Implementación de Tiers`. Las **fichas individuales** (dones, historia, ¿por qué?, atributos, notas de suavizado) de los personajes heredados siguen vigentes tal como están en `roster_personajes.md` (v1); este documento gobierna composición del roster, tiers y qué falta producir.

**Roadmap de módulos y fuentes de capítulo:** ver `olas_y_fuentes_de_capitulos.md` — ese documento manda sobre el roadmap por olas donde haya conflicto (CLAUDE.md queda desactualizado en esa sección). Este archivo sigue siendo la fuente de verdad de **composición del roster** (quién está, tier, ficha) y del **estado de producción de capítulos** (qué está diseñado, escrito o mergeado).

## Decisiones que fijan esta versión (julio 2026)

1. Se mantienen los 9 griegos que v2 eliminaba (Atlas, Dédalo, Nike, Iris, Selene, Pan, Midas, Quirón, Fénix).
2. De los nórdicos eliminados por v2 vuelve solo **Las Valquirias**, por criterio de relevancia en las películas de *How to Train Your Dragon* (mencionadas explícitamente en el funeral de Stoick en HTTYD 2, junto a Odín y el Valhalla). Idunn, Bragi, Frey, Brunilda, Mimir, Las Nornas, Sleipnir, Ratatosk y Vidar quedan fuera del roster activo.
3. Cronos, Medea y Hel entran con versión suavizada aprobada por Willy (ver regla 5 de CLAUDE.md).
4. Tier estático en Ola 1. Absorción de mitos menores y rutas de ascensión: anotadas para Ola 2+, no implementar antes.
5. Rango de capítulos por tier (regla 6 de CLAUDE.md): dorado 3-4, plateado 2-3, normal 1-2.
6. Confirmado (julio 2026): Ratatosk se reincorpora puntualmente para sostener el set Mensajeros (ficha v1 ya escrita, costo de producción cero — solo falta `pistas_deduccion`). Se agrega chip de mitología "Romana" para Eneas, Dido y Rómulo y Remo.

## Totales

| | Griega | Nórdica | Total |
|---|---|---|---|
| Dorado | 10 | 3 | 13 |
| Plateado | 27 | 10 | 37 |
| Normal | 32 | 3 | 35 |
| **Total** | **69** | **16** | **85** |

(No incluye a Eneas/Dido/Rómulo y Remo, con `mitologia: "romana"` — ver nota más abajo sobre el chip romano.)

Suma de El Cielo de los Mitos (Ola 1, ya publicado): Orión (plateado, 2 capítulos: base · escorpión) y Calisto, Casiopea, Cástor y Pólux (normal, 1 capítulo: base) — los cuatro personajes que faltaban para completar el catálogo de 10 constelaciones.

Proporción nórdica: 19,75% (target v2: ~20%). Sube un punto por la reincorporación de Ratatosk.

## Leyenda de estado

- **FICHA OK:** ficha completa y publicada en `personajes.json` (dones, historia, ¿por qué?, atributos).
- **FICHA PENDIENTE:** personaje sin ficha todavía.
- **CAP OK (n):** el personaje tiene diseñados (título + `fuente`) los `n` capítulos que le corresponden por tier. "Diseñado" no es lo mismo que "escrito y mergeado" — ver la columna de estado real más abajo en cada bloque.
- **✅ publicado:** capítulo con historia y ¿por qué? ya escritos y en `personajes.json` con `estado: "publicado"`.
- **📝 escrito, sin mergear:** el texto completo existe en un documento de contenido (`capitulos_tier_dorado.md`, `capitulos_plateado_bloque3.md`, `Info Personajes.txt`) pero todavía no se copió al JSON.
- **🔲 solo título:** existe el nombre del capítulo y su `fuente` pero falta escribir historia y ¿por qué?.

---

# TIER DORADO (13) — 3 a 4 capítulos

| Personaje | Mitología | Ficha | Capítulos diseñados | Estado real de cada capítulo |
|---|---|---|---|---|
| Zeus | Griega | OK | OK (3) | base ✅ · Visión Panorámica 📝 · La Prueba de la Xenia 📝 |
| Poseidón | Griega | OK | OK (3) | base ✅ · Origen de Pegaso 📝 · El Valor del Olivo 📝 |
| Hades | Griega | OK | OK (3) | base ✅ · Contrato Booleano 📝 · Resolución Paramétrica 📝 |
| Atenea | Griega | OK | OK (3) | base ✅ · Red de Soporte 📝 · Primer Tribunal 📝 |
| Heracles | Griega | OK | OK (4) | base ✅ · León de Nemea ✅ (`cielo:leo`) · Establos de Augías 🔲 · Doce Trabajos 🔲 |
| Odiseo | Griega | OK | CAP PENDIENTE | base ✅. Faltan 2-3 capítulos; absorción futura de Lotófagos/Cíclope/Sirenas (Ola 2+) |
| Teseo | Griega | OK | OK (4) | base ✅ · El Hilo de Ariadna ✅ (`cielo:corona_boreal`) · El Laberinto 🔲 · Después de Creta 🔲 |
| Aquiles | Griega | OK | OK (4) | base ✅ · Escudo Cosmológico 📝 · Costo de la Impulsividad 📝 · Ruptura del Ciclo (bonificación) 📝 |
| Jasón | Griega | OK | OK (4) | base ✅ · Vellocino Protector 📝 · Alquimia vs Fuerza 📝 · Rocas Simplégades 📝 |
| Perseo | Griega | OK | OK (4) | base ✅ · El Héroe en las Estrellas ✅ (`cielo:perseo`) · Inventario Crítico 📝 · El Punto Ciego 📝 · Ventaja Aérea 📝 (son 5 títulos para un tope de 4 — hay que resolver cuál queda afuera o pasa a bonificación) |
| Odín | Nórdica | OK | OK (3) | base ✅ · El Ojo en el Pozo 🔲 · Los Cuervos 🔲 (repite info de la ficha base — conviene reemplazarlo antes de escribirlo, ver `capitulos_tier_dorado.md`) |
| Thor | Nórdica | OK | OK (3) | base ✅ · El Collar de Sif 📝 · El Viaje a Jotunheim 📝 |
| Loki | Nórdica | OK | OK (3) | base ✅ · El Pelo de Sif 🔲 (falta adaptar a la voz de Loki el episodio ya escrito en Sif) · El Lobo Fenrir 🔲 (ídem, adaptar el episodio ya escrito en Tyr) |

**Tier dorado: los 13 tienen sus capítulos diseñados** (títulos + fuente). De los ~35 capítulos no-base, **8 están escritos** (📝, en `capitulos_tier_dorado.md`) y **4 ya están mergeados y publicados** (✅, vía El Cielo de los Mitos). El resto son 🔲. Perseo tiene un título de más para su tope — resolver antes de mergear.

# TIER PLATEADO (37) — 2 a 3 capítulos

## Griega (27)

| Personaje | Ficha | Capítulos diseñados | Estado real de cada capítulo |
|---|---|---|---|
| Hera | OK | OK (2) | base ✅ · El Guardián de los Cien Ojos 📝 |
| Deméter | OK | OK (2) | base ✅ · El Regalo de Triptólemo 📝 |
| Apolo | OK | OK (2) | base ✅ · Armonía Matemática 📝 |
| Artemisa | OK | OK (2) | base ✅ · La Metamorfosis 📝 |
| Ares | OK | OK (2) | base ✅ · Atrapado en la Vasija de Bronce 📝 |
| Afrodita | OK | OK (2) | base ✅ · La Manzana Dorada 📝 |
| Hefesto | OK | OK (2) | base ✅ · Talos, el Gigante de Bronce 📝 |
| Hermes | OK | OK (2) | base ✅ · Negociación de Activos 📝 |
| Dioniso | OK | OK (2) | base ✅ · El Don de Midas 📝 |
| Cronos | OK | CAP PENDIENTE | base ✅. Suavizado aprobado: miedo al reemplazo, sin devorar hijos |
| Prometeo | OK | OK (3) | base ✅ · El Engaño de Mecone 📝 · La Resiliencia 📝. Absorción futura: Deucalión y Pirra (Ola 2+) |
| Perséfone | OK | OK (2) | base ✅ · Algoritmo de las Estaciones 📝 |
| Eneas | OK | CAP PENDIENTE | base ✅. Puente Troya→Roma. Mitología: romana |
| Belerofonte | OK | OK (2) | base ✅ · El Límite del Vuelo 📝 |
| Orfeo | OK | OK (2) | base ✅ · Análisis de Frecuencias 📝 |
| Edipo | OK | CAP PENDIENTE | base ✅. Suavizado ya aplicado en la ficha publicada (foco en el acertijo de la Esfinge) |
| Penélope | OK | OK (3) | base ✅ · telar ✅ · regreso de Odiseo ✅ |
| Helena | OK | CAP PENDIENTE | base ✅. Suavizado ya aplicado (sin rapto crudo) |
| Casandra | OK | CAP PENDIENTE | base ✅. Encuadre potente pendiente para su 2º capítulo: decir la verdad y que no te crean |
| Medea | OK | CAP PENDIENTE | base ✅. Suavizado ya aplicado (mente táctica de los Argonautas, final acotado) |
| Circe | OK | CAP PENDIENTE | base ✅. Encuadre pendiente: la maga de la isla, transformaciones |
| Rómulo y Remo | OK | CAP PENDIENTE | base ✅. Carta dual, mitología romana. Suavizado ya aplicado (sin el fratricidio) |
| Agamenón | OK | CAP PENDIENTE | base ✅. Suavizado ya aplicado (líder de la flota, sin Ifigenia) |
| Héctor | OK | OK (2) | base ✅ · La Despedida en las Puertas Esceas 📝 |
| Atlas | OK | OK (2) | base ✅ · bóveda celeste 🔲 |
| Dédalo | OK | OK (3) | base ✅ · Límites Operativos 📝 · El Hilo y la Caracola 📝 |
| Orión | OK | OK (2) | base ✅ · escorpión ✅ (`cielo:escorpio`). Nuevo (Ola 1, El Cielo de los Mitos) |

## Nórdica (10)

| Personaje | Ficha | Capítulos diseñados | Estado real de cada capítulo |
|---|---|---|---|
| Freya | OK | OK (2) | base ✅ · Collar Brisingamen 📝 |
| Frigg | OK | OK (2) | base ✅ · Juramento de Todas las Cosas 📝 |
| Tyr | OK | OK (2) | base ✅ · Paradoja de Gleipnir (Fenrir) 📝 |
| Heimdall | OK | OK (2) | base ✅ · El Ancho de Banda (Bifröst) 📝 |
| Skadi | OK | OK (2) | base ✅ · La Elección a Ciegas 📝 |
| Njörd | OK | OK (2) | base ✅ · Noatún y la Montaña 📝 |
| Balder | OK | OK (2) | base ✅ · Breidablik 📝 |
| Sigurd | OK | OK (2) | base ✅ · Parser de Advertencias 📝. Baja de dorado (doc Tiers) a plateado (v2, confirmado) |
| Sif | OK | OK (2) | base ✅ · La Apuesta de los Enanos 📝 |
| Hel | OK | CAP PENDIENTE | base ✅. Suavizado ya aplicado (administración del inframundo, línea Hades) |

**Tier plateado: 24/37 con capítulos diseñados** (títulos + fuente). De esos, **19 capítulos no-base están escritos** (📝, repartidos entre `Info Personajes.txt` bloques 1-2 y `capitulos_plateado_bloque3.md`) y **2 ya mergeados y publicados** (✅, Orión vía El Cielo). Quedan **13 personajes sin ningún capítulo más allá del base**: Cronos, Eneas, Edipo, Helena, Casandra, Medea, Circe, Rómulo y Remo, Agamenón (griegos, todos con ficha ya publicada) + Hel (nórdica).

# TIER NORMAL (35) — 1 a 2 capítulos

Todos cumplen el mínimo del tier con su capítulo base, publicado. Sin urgencia de diseño de capítulos; los segundos capítulos se suman cuando un módulo los toque.

## Griega (32)

**Con ficha OK, publicada:** Hestia, Helios, Ariadna (2 capítulos: base · corona en el cielo), Pandora, Aracne, Atalanta, Minotauro, Medusa, Pegaso (2 capítulos: base · el caballo alado), Cerbero, Esfinge, Nike, Iris, Selene, Pan, Midas, Quirón, Fénix, Andrómeda (2 capítulos: base · el rescate), Eros, Dido, Nausícaa, Calipso, Psique, Dafne, Eco, Narciso, Pentesilea, Paris.

**Nuevas (Ola 1, El Cielo de los Mitos), publicadas:** Calisto (base · "La osa del cielo", completa Osa Mayor), Casiopea (base · "La reina en su trono", completa Casiopea) y Cástor y Pólux (base, carta dual, completa Géminis) — capítulo único hasta que otro módulo los toque.

## Nórdica (3)

| Personaje | Ficha | Nota |
|---|---|---|
| Fenrir | OK | Ruta de ascensión futura a plateado (evento Ragnarok, Ola 2+) |
| Las Valquirias | OK | Recuperada por criterio HTTYD (funeral de Stoick, HTTYD 2). Capítulo natural: auroras boreales |
| Ratatosk | OK (ficha v1) | Reincorporado para sostener el set Mensajeros. Ficha sin costo; falta `pistas_deduccion` |

---

## Fuera del roster activo (con ficha v1 escrita, reutilizable)

Idunn, Bragi, Frey, Brunilda, Mimir, Las Nornas, Sleipnir, Vidar. Sus fichas v1 quedan escritas; si algún módulo futuro los necesita (Mimir cierra la historia del ojo de Odín; las Nornas eran parte del set Tejedoras del Destino), se reincorporan sin costo de producción.

**Impacto en sets temáticos:** la salida de los otros 8 sigue rompiendo "Tejedoras del Destino" (pierde a Las Nornas) y "Los Más Valientes" (pierde a Brunilda). "Mensajeros" queda resuelto con la vuelta de Ratatosk. Los otros dos sets quedan pendientes de redefinición o reincorporación puntual.

## Chip de mitología romana (confirmado)

Eneas, Dido y Rómulo y Remo llevan `mitologia: "romana"`. El chip visual y el filtro "Romana" ya están implementados en el módulo Colección.

## Relaciones (espejo) — estado

Ver el detalle completo y las tablas en `capitulos_plateado_bloque3.md` §"Relaciones (espejo)". Resumen: 6 pares confirmados (Hades↔Hel, Aquiles↔Balder, Poseidón↔Njörd, Deméter↔Sif, Artemisa↔Skadi, Afrodita↔Freya), 2 rotos por la salida de Bragi y Sleipnir del roster (Apolo y Pegaso quedan sin contraparte nórdica por ahora), 1 pendiente de que se termine de resolver Frigg↔Casandra. El campo `espejo` del contrato de datos pasa a ser funcional recién en Ola 2 (`olas_y_fuentes_de_capitulos.md` §4.2) — hasta entonces esta tabla es solo de referencia de contenido.

## Trabajo de producción pendiente (resumen, actualizado julio 2026)

1. **Fichas nuevas: cerrado.** Las 20 fichas que este documento marcaba como pendientes (Cronos, Medea, Hel, Eneas, Edipo, Helena, Casandra, Circe, Rómulo y Remo, Agamenón, Eros, Dido, Nausícaa, Calipso, Psique, Dafne, Eco, Narciso, Pentesilea, Paris) ya están escritas y publicadas en `personajes.json`. Ninguna tiene todavía un segundo capítulo (salvo que se sume por otra fuente).
2. **Mergear al JSON los capítulos ya escritos:** el trabajo real pendiente no es diseñar ni escribir más — es copiar a `personajes.json` (en `estado: "borrador"` hasta que Willy los revise y publique) el texto que ya existe en `capitulos_tier_dorado.md` (8 capítulos de dorados), `Info Personajes.txt` bloques 1-2 (11 capítulos de plateados) y `capitulos_plateado_bloque3.md` (13 capítulos de plateados). Total: ~32 capítulos con texto listo, sin mergear.
3. **Capítulos de dorados sin escribir todavía:** Heracles (Establos de Augías, Doce Trabajos), Teseo (Laberinto, Después de Creta), Odín (Ojo en el Pozo — rehacer Los Cuervos), Loki (adaptar los episodios de Sif y Tyr a su voz). Ver notas en `capitulos_tier_dorado.md`.
4. **Capítulos de plateados sin ningún capítulo más allá del base:** Cronos, Eneas, Edipo, Helena, Casandra, Medea, Circe, Rómulo y Remo, Agamenón, Hel (10 personajes, fichas ya publicadas).
5. **Normales:** nada urgente.
6. **Decisión pendiente:** Perseo tiene 5 títulos de capítulo diseñados para un tope de 4 (dorado) — resolver cuál se recorta o pasa a bonificación antes de mergear.

## Regla de crecimiento del roster

Cuando Feli pida un personaje nuevo, se agrega al JSON siguiendo la misma ficha: dones, historia suavizada, sección "¿Por qué?", atributos, tier asignado según densidad de historia (regla 6), y nota de suavizado si el mito original lo necesita. Registrar qué personajes pidió ella (dato de interés para el documento de contexto del proyecto padre).
