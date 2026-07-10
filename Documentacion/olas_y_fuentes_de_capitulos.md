# Olas de desarrollo y fuentes de capítulos — v1 (julio 2026)

**Qué gobierna este documento:** el sistema completo de fuentes de capítulos (todas las formas en que un capítulo se enciende), la asignación de módulos por ola, y la economía de capítulos que garantiza que cada tier pueda completarse. Extiende a `spec_funcional.md` y `CLAUDE.md`; donde haya conflicto de roadmap, gana este documento. Las reglas de contenido, el contrato de datos base y la regla de despliegue (`estado: borrador/publicado`) de `CLAUDE.md` siguen intactas.

**Decisiones de Willy que fija esta versión:**
1. Vínculos entre personajes entra a **Ola 1**.
2. El Desafío del Héroe queda **descartado**; su lugar lo ocupa **La Encrucijada** (Ola 3).
3. Mapa del Héroe, Espejo de los Mundos y Las Reliquias quedan confirmados (Olas 2 y 3).
4. El Mapa del Héroe se diseña **para enseñar geografía, no para evaluarla**: Feli no maneja ese dato.
5. La Encrucijada presenta **entre 5 y 10 cartas candidatas** para elegir; nunca la colección entera.

---

## 0. Principios que ningún módulo puede violar

1. **Jugar cualquier módulo siempre suma historia, nunca bloquea.** Ningún juego exige tener una carta para jugarse. Los requisitos cruzados (ej. Teseo cap. 2 ← Ariadna) gatean **contenido**, nunca acceso a un módulo.
2. **Ningún módulo castiga.** Los fallos redirigen con humor o misterio.
3. Todo capítulo con contenido que lo pida lleva su **"¿Por qué?"**.
4. Todo contenido nuevo nace con `estado: "borrador"` y solo Willy lo publica.
5. Nada de mecánicas de retención por calendario (rachas, "volvé mañana o perdés"). El único límite diario existente es la carta del día del Oráculo, que ya está spec'd.

---

## 1. El presupuesto de capítulos (número que gobierna todo)

Roster v3: 13 dorados (3-4 caps) + 37 plateados (2-3) + 35 normales (1-2) ≈ **190 capítulos totales** en el punto medio de los rangos.

- El descubrimiento cubre **85** (capítulo base de cada personaje — número confirmado por Willy, coincide con `personajes.json` y con la tabla de Totales de `roster_personajes_v3.md`).
- Quedan **~105 capítulos** que deben salir de módulos. Las fuentes de este documento suman ~110: cierra con margen para bonificaciones.

| Fuente | Ola | Capítulos aprox. |
|---|---|---|
| Descubrimiento (base) | 1 | 85 |
| Vínculos entre personajes | 1 | ~35 |
| Cielo de los Mitos (10 constelaciones) | 1 | 10 |
| Oráculo difícil (versión extendida del base) | 1 | según uso |
| Espejo de los Mundos (~12 pares × 2 cartas) | 2 | ~24 |
| Mapa del Héroe (4-6 viajes) | 2 | ~6 |
| Ordená el Mito (8 mitos) | 2 | 8 |
| Las Reliquias (~14 objetos) | 3 | ~14 |
| La Encrucijada (~13 desafíos) | 3 | ~13 |

---

## 2. Fuentes de capítulos — catálogo completo

Cada capítulo declara en su campo `fuente` cómo se enciende. Formatos válidos a partir de esta versión:

| Formato de `fuente` | Significado | Ola |
|---|---|---|
| `"descubrimiento"` | Capítulo base, se enciende al descubrir la carta | 1 (existe) |
| `"oraculo:dificil"` | Versión extendida del base + bonificación por resolver sin fallar | 1 (spec'd) |
| `"cielo:<id_constelacion>"` | Trazar esa constelación | 1 (spec'd) |
| `"vinculo:<id_personaje>"` | **NUEVO.** Se enciende automáticamente cuando el personaje vinculado entra a `descubiertos` | 1 |
| `"mapa:<id_viaje>"` | **NUEVO.** Completar ese viaje en el Mapa del Héroe | 2 |
| `"espejo:<id_personaje>"` | **NUEVO.** Aparear correctamente este personaje con su espejo | 2 |
| `"ordena:<id_mito>"` | Secuenciar ese mito | 2 (spec'd) |
| `"reliquia:<id_objeto>"` | **NUEVO.** Encontrar esa reliquia | 3 |
| `"encrucijada:<id_desafio>"` | **NUEVO.** Resolver ese desafío eligiendo al héroe correcto | 3 |

Regla transversal de UI (ya spec'd, se ratifica): en la ficha, cada capítulo velado muestra su pista de origen en lenguaje natural ("Descubrí a Ariadna para encender este capítulo" / "Trazá la Corona Boreal en el Cielo de los Mitos") y **tap sobre el capítulo velado navega directo al módulo con el contenido pre-activado**. Para `vinculo:` la pista navega a la Colección con el personaje vinculado resaltado en estado velado (si no fue descubierto) o abre su ficha (si ya lo fue).

---

## 3. OLA 1 — cierre del ciclo actual

Alcance ya spec'd (hub, perfiles, Colección refactor, Oráculo 2 modos, Cielo, Sets latentes, modal de carta completa con navegación directa) **más una fuente nueva:**

### 3.1 Vínculos entre personajes (`vinculo:`)

**Mecánica:** cero UI nueva. Al ejecutarse `desbloquear(id)`, el sistema recorre los personajes ya descubiertos buscando capítulos con `fuente: "vinculo:<id>"` y los enciende; y a la inversa, revisa si el recién descubierto tiene capítulos de vínculo cuyo personaje ya esté en `descubiertos`. El chequeo es bidireccional y corre en el mismo evento de descubrimiento.

**Feedback:** al encenderse un capítulo por vínculo, mostrar una notificación suave después de la ficha del descubrimiento: "Descubriste a Ariadna — y eso encendió un capítulo nuevo en Teseo". Un tap lleva a la carta de Teseo. Es el momento que enseña la mecánica sin explicarla.

**Por qué en Ola 1:** es la fuente más barata del sistema y la que más capítulos aporta (~35). Sin ella, los plateados no tienen cómo completarse hasta Ola 2 y el sistema de tiers queda cojo de entrada. Además es la mecánica temáticamente más correcta: los mitos griegos son relacionales, nadie tiene su historia solo.

**Producción de contenido (Willy + este contexto):** definir la tabla de vínculos. Candidatos evidentes: Teseo↔Ariadna, Odiseo↔Penélope, Perseo↔Andrómeda, Perseo↔Medusa, Orfeo↔Eurídice, Heracles↔Quirón, Aquiles↔Quirón, Jasón↔Medea, Dédalo↔Minotauro, Eneas↔Dido, Zeus↔Hera, Odín↔Frigg, Thor↔Loki, Loki↔Fenrir, Hades↔Perséfone. La tabla definitiva se produce como anexo de este documento antes de tocar el JSON.

**Consecuencia de diseño:** con vínculos + Cielo + Oráculo difícil, en Ola 1 Feli ya puede completar plateados y 2-3 dorados. El efecto dorado holográfico, el plateado y el sello "Historia completa" deben estar funcionando en Ola 1 (el spec ya lo contempla; se ratifica que no es opcional).

---

## 4. OLA 2 — los módulos de conexión

### 4.1 Mapa del Héroe (`mapa:`)

**Qué es:** el hermano geográfico del Cielo. Un mapa SVG estilizado del Mediterráneo (y una variante nórdica si algún viaje lo pide) donde Feli traza el recorrido de un héroe, parada por parada.

**Restricción de diseño (decisión de Willy):** el módulo **enseña** geografía, no la evalúa. Feli no maneja ese dato y no debe frustrarse por eso. Reglas derivadas:
- Mapa estilizado, no realista: siluetas simples, mar de un color, 4-6 paradas por viaje como puntos grandes y visibles.
- El orden del trazado es **guiado**: la próxima parada pulsa suavemente. Ella conecta, no adivina.
- Cada parada, al llegar, se nombra sola y muestra una línea de contexto ("Isla de los Cíclopes — acá Odiseo se enfrentó a Polifemo"). El aprendizaje es por exposición, no por examen.
- Tolerancia de trazo generosa, igual criterio que el Cielo.
- Al completar el viaje se enciende el capítulo del héroe con su "¿Por qué?" (el porqué geográfico: los mitos griegos pasan en lugares reales que hoy se pueden señalar).

**Motor:** reusa el motor de trazado SVG del Cielo (puntos con coordenadas 0-100, orden de trazo, tolerancia). La diferencia es la piel (mapa en vez de cielo nocturno) y el modo guiado. **Estado (julio 2026): hecho.** El motor quedó desacoplado en `motor-trazado.js` (ver PR de refactor) y `cielo.js` ya lo consume; `mapa.js` lo reusa con `pistaPorDefecto: true` (modo guiado, sin señuelos).

**Datos:** `viajes.json`: `{ id, nombre, personajeAsociado, capituloQueEnciende, paradas: [{ nombre, x, y, contexto, ubicacionReferencia }], porque, estado }`. `ubicacionReferencia` es la ubicación geográfica real (nombre antiguo/moderno) que se usó para decidir las coordenadas `x, y` del mapa estilizado — se conserva en el dato por si hace falta revisar o recolocar un punto.

**Estado del contenido (julio 2026): construido, 12 viajes en `estado: "borrador"` en `viajes.json`** (más que el catálogo inicial de 4 — Willy amplió el pedido y se cargó todo lo que llegó escrito). Los 4 originales — la Odisea (Odiseo), el viaje de los Argonautas (Jasón), los Doce Trabajos como recorrido (Heracles), Trecén→Atenas→Creta (Teseo) — más 8 adicionales: el vuelo de Perseo, el viaje de Eneas, el vuelo de Dédalo, Belerofonte y la Quimera, la búsqueda de Deméter, Prometeo y el fuego, Atlas (un solo punto, sin trazado real: es válido, el motor tolera viajes de 1 parada), y Rómulo y Remo. Cada viaje enciende un capítulo nuevo (`mapa:<id_viaje>`) en la carta del héroe correspondiente, también en borrador.

**Cupo por tier (resuelto, julio 2026):** Odiseo, Jasón, Heracles, Teseo y Perseo (dorados) y Dédalo y Prometeo (plateados) habían llegado al tope de su tier antes de sumar el capítulo de `mapa:`. Willy resolvió esto subiendo el techo de capítulos +1 en todos los tiers (regla 6 de `CLAUDE.md`: dorado 3-5, plateado 2-4, normal 1-3) en vez de descartar candidatos — el piso de cada tier no cambió, así que ningún personaje quedó con menos de lo que ya tenía diseñado.

**Módulo técnico:** `mapa.html`/`mapa.js`/`mapa.css` construidos, mismo patrón que `cielo.js` (catálogo, ceremonia, hoja de capítulo). **No registrado en el hub** (regla de despliegue: un módulo nuevo no se muestra sin instrucción textual de Willy) — se llega solo por URL directa mientras tanto.

### 4.2 Espejo de los Mundos (`espejo:`)

**Qué es:** el módulo del pensamiento comparativo — la tesis antropológica del juego hecha mecánica. Dos columnas: personajes griegos y nórdicos **ya descubiertos** por Feli. Ella aparea equivalentes (Zeus↔Odín, Afrodita↔Freyja, Hermes↔Loki).

**Mecánica:** matching simple. Acertar un par lo ilumina con una animación de espejo y enciende **un capítulo en ambas cartas**: la misma idea humana contada dos veces ("dos pueblos que nunca se conocieron inventaron un dios del trueno — ¿por qué?"). Errar no castiga: las cartas vuelven a su lugar con una pista suave.

**Regla de disponibilidad:** solo aparecen en las columnas los pares donde **ambos** personajes están descubiertos. El módulo nunca muestra personajes velados (evita spoilear descubrimientos). Si hay menos de 2 pares disponibles, el módulo muestra un mensaje de misterio ("El espejo todavía está empañado — descubrí más héroes de los dos mundos").

**Datos:** usa el campo `espejo` que ya existe en el contrato de datos y hoy no usa nadie. Cada par define además su capítulo espejo (mismo texto conceptual, adaptado a cada carta) con su "¿Por qué?" comparativo.

**Pendiente de contenido:** cerrar la tabla de pares. Los huérfanos anotados (Apolo↔Bragi, Pegaso↔Sleipnir) quedan **descartados como pares** porque Bragi y Sleipnir están fuera del roster v3; Apolo y Pegaso reciben capítulos por otras fuentes. Target: ~12 pares = ~24 capítulos.

### 4.3 Ordená el Mito

Sin cambios sobre lo spec'd en `spec_funcional.md` §5. Se ratifica su rol: capítulos narrativos de los héroes de historia larga (Odiseo, Penélope, Jasón, Orfeo, Teseo). 8 mitos secuenciables al lanzar.

**Módulo técnico (julio 2026): construido y registrado en el hub.** `ordena.html`/`ordena.js`/`ordena.css`, mismo patrón que `cielo.js`/`mapa.js` (catálogo, ceremonia, hoja de capítulo). Sin motor de trazado: la interacción es tocar dos escenas para intercambiarlas hasta llegar al orden causal; sin castigo, con conteo de posiciones ya correctas como pista. El barajado inicial de cada apertura vive en código (Fisher-Yates con rechazo si sale ya resuelto), nunca en el JSON — un JSON guarda datos, no funciones. Tarjeta agregada a `hub.js` (icono 🧩), y el capítulo velado con fuente `ordena:<id>` muestra ícono de rompecabezas 🧩 en la ficha (icono propio, distinto de la brújula 🧭 de `mapa:` y la estrella ⭐ de `cielo:` — ver `app.js`, `iconoCapituloVelado`).

**Estado del contenido (julio 2026): primer lote de 18 mitos publicado.** `mitos_ordena.json` y sus 18 capítulos correspondientes en `personajes.json` (fuente `ordena:<id>`) pasaron a `estado: "publicado"` por instrucción textual de Willy: ciclope, simplegades, laberinto, establos_augias, equipamiento, inframundo, robo_ganado, atenas_olivo, mjolnir, fenrir_paradoja, eleccion_ciegas, pozo_mimir, desafio_minos, talos, reparto, jotunheim, traicion, juramento. Quedan ~31 fuentes `ordena:<id>` sin su mito escrito, para lotes futuros.

**Pendiente de contenido (anotado julio 2026, no implementar hasta que Willy lo pida):**
- **Freya:** reemplazar `ordena:forja_enana` (la forja del collar, dejada afuera) por el robo del Brisingamen — Loki se lo roba a Freya, Heimdall lo descubre y se lo disputa para devolvérselo. Cadena causal limpia, sin contenido adulto, y conecta con Heimdall. Va con un `id` de mito nuevo (no `forja_enana`), lo que implica también actualizar la `fuente` del capítulo de Freya en `personajes.json` cuando se escriba.
- **Penélope:** falta su mito secuenciable — premio + puzzle del telar, contado desde ella.

---

## 5. OLA 3 — cosecha y dominio

### 5.1 Las Reliquias (`reliquia:`)

**Qué es:** los objetos míticos como micro-colección que vive **adentro de las cartas de sus dueños**, no como colección paralela. Resuelve la pregunta abierta de "¿cartas de objetos?" sin crear una segunda colección que compita con la principal.

**Mecánica:** las reliquias aparecen como hallazgos al completar acciones en cualquier módulo (definición exacta del drop por reliquia en el anexo de contenido: ej. Mjölnir aparece al completar el viaje o constelación que toca a Thor; el hilo de Ariadna, al resolver el mito del laberinto en Ordená). Encontrar una reliquia dispara una pantalla de hallazgo y enciende el capítulo del objeto en la carta de su dueño. La ficha del personaje muestra sus reliquias como íconos: encontradas a color, no encontradas como silueta con pista.

**Por qué en Ola 3:** como los hallazgos ocurren jugando cualquier módulo, cuantos más módulos existan, mejor funciona. Lanzarla antes la desperdicia.

**Catálogo inicial (~14):** Mjölnir (Thor), Gungnir (Odín), el hilo de Ariadna (Ariadna), el tridente (Poseidón), el rayo (Zeus), las sandalias aladas (Hermes), la égida (Atenea), el arco de Odiseo (Odiseo), el Vellocino de Oro (Jasón), el escudo espejo (Perseo), la lira (Orfeo), el casco de invisibilidad (Hades), Gleipnir (Fenrir/Tyr — definir dueño), la piel del león de Nemea (Heracles).

**Datos:** `reliquias.json`: `{ id, nombre, duenio, capituloQueEnciende, condicionHallazgo, icono, estado }`.

### 5.2 La Encrucijada (`encrucijada:`)

**Qué es:** el módulo que evalúa si entendió a los personajes, sin preguntarle datos. Se plantea un desafío ("hay que cruzar un laberinto sin perderse — ¿a quién mandás?", "hay que convencer a un gigante sin pelear", "hay que ganar una carrera imposible") y ella elige al héroe que lo resolvería.

**Mecánica de candidatos (decisión de Willy):** el sistema presenta **entre 5 y 10 cartas candidatas**, nunca la colección entera. Composición del set de candidatos:
- Solo personajes **descubiertos** (nunca spoilear).
- Siempre incluye al menos una respuesta correcta. Los desafíos admiten **más de un héroe válido** cuando tiene sentido (un desafío de astucia lo resuelven Odiseo, Dédalo o Penélope): la solución se define por atributos y tags, no por un único id hardcodeado.
- El resto son distractores plausibles, priorizando variedad de atributos para que la elección sea razonada.
- Si la colección de Feli no alcanza para armar un set válido (mínimo 5 candidatos con al menos un correcto), el desafío no se ofrece todavía.

**Resolución:** elegir un héroe válido enciende un capítulo **en el héroe elegido** — el capítulo cuenta cómo ese héroe resolvió (o habría resuelto) ese tipo de desafío, con su "¿Por qué?". Elegir uno no válido no castiga: el héroe "lo intenta" y la escena devuelve una pista con humor ("Heracles rompió el laberinto de un golpe... pero ahora hay dos laberintos. ¿Quién pensaría antes de entrar?") y permite volver a elegir. Resolver al primer intento marca el desafío con una estrella (cosmético, sin recompensa extra: la recompensa es siempre la historia).

**Rol en la economía:** es la fuente natural del capítulo final de varios dorados — el 4to capítulo se gana demostrando criterio sobre el personaje. Favorece estructuralmente al tier alto porque los dorados son los que resuelven desafíos icónicos.

**Datos:** `encrucijadas.json`: `{ id, titulo, planteo, atributosClave, tagsValidos, personajesValidos (opcional, para casos cerrados), capituloPorHeroe: { <id>: <capituloQueEnciende> }, pistas_error, estado }`.

**Catálogo inicial (~13 desafíos):** uno por dorado como mínimo. Se produce en el anexo de contenido.

---

## 6. Conversión a plateado y dorado — recetas por tier

La completitud sigue siendo la del spec (capítulos encendidos = capítulos publicados). Lo que fija esta sección es **de dónde sale cada capítulo** para que ningún personaje quede sin ruta de completado.

**Dorado tipo (3-4 capítulos):** base + vínculo + un módulo de trazado (Cielo o Mapa) + un capítulo de Ola 2/3 (Ordená, Espejo, Reliquia o Encrucijada). Ejemplos que fijan el estándar:

| Personaje | Cap 1 | Cap 2 | Cap 3 | Cap 4 |
|---|---|---|---|---|
| Teseo | base | `vinculo:ariadna` | `cielo:corona_boreal` | `ordena:laberinto` |
| Odiseo | base | `vinculo:penelope` | `mapa:odisea` | `encrucijada:astucia` |
| Thor | base | `reliquia:mjolnir` | `espejo:zeus` | `ordena:jotunheim` |
| Perseo | base | `vinculo:andromeda` | `cielo:perseo` | `reliquia:escudo_espejo` |

**Plateado tipo (2-3 capítulos):** base + una o dos fuentes baratas (vínculo, espejo, constelación compartida). Ejemplo: Ariadna = base + `vinculo:teseo` + `cielo:corona_boreal`. Nótese que **la misma constelación enciende capítulos en dos cartas** — esa es la conexión entre módulos que faltaba.

**Normal tipo (1-2 capítulos):** base + a lo sumo un vínculo o un capítulo de set. Los normales nunca dependen de módulos de Ola 3.

**Regla de asignación para el anexo de contenido:** al mapear los ~100 capítulos no-base a fuentes, cada dorado debe tener al menos una fuente de Ola 1 más allá del base (vínculo u oráculo difícil), para que el tier alto progrese desde el día uno.

---

## 7. Cambios al contrato de datos (resumen para Claude Code)

1. `fuente` admite los formatos nuevos de la tabla §2. Sin campos nuevos en `personajes.json`.
2. El campo `espejo` (ya existente) pasa a ser funcional en Ola 2.
3. Archivos de datos nuevos: `viajes.json` (Ola 2), `reliquias.json` y `encrucijadas.json` (Ola 3). Todos con `estado: borrador/publicado` por ítem, misma regla de despliegue.
4. El motor de trazado SVG del Cielo se construye **desacoplado** (componente reutilizable) porque el Mapa del Héroe lo reusa en Ola 2. Decisión a aplicar ahora, durante la construcción del Cielo.
5. El evento de descubrimiento (`desbloquear`) incorpora el chequeo bidireccional de vínculos (§3.1) en Ola 1.
6. Nada de esto modifica perfiles, migración ni la estructura de `feli-mitos-v2` más allá de los ids de capítulos nuevos en `global.capitulos`.

---

## 8. Pendientes que bloquean (resolver antes de implementar)

1. ~~Reconciliar el contador~~ — **resuelto (julio 2026):** 85 es el número confirmado por Willy. Coincide con `personajes.json` (85 entradas) y con la tabla de Totales de `roster_personajes_v3.md`. Además, `hub.js` y `app.js` ya calculan el total con `personajes.length`, no hardcodean el número — no hace falta ningún cambio de código.
2. ~~Decidir el destino de la pregunta de 3 opciones~~ — **resuelto:** no existe rastro de esa mecánica en el código actual. El Oráculo implementado son los 2 modos spec'd (pista + tap / 3 pistas tipo Mastermind); no hay una tercera variante de "elegir entre 3 opciones" corriendo en paralelo.
3. **Anexos de contenido a producir en este contexto (no en Claude Code):** tabla definitiva de vínculos (~35), tabla de pares espejo (~12), catálogo de viajes (4), catálogo de reliquias (~14), catálogo de encrucijadas (~13), y el mapeo capítulo-por-capítulo de los 13 dorados y 36 plateados a sus fuentes.

## 9. Roadmap consolidado (reemplaza al de CLAUDE.md)

**Ola 1:** Hub + Perfiles + Colección refactor + modal de carta completa con navegación directa + Oráculo (2 modos) + Cielo (motor de trazado desacoplado) + Sets latentes + **Vínculos**.

**Ola 2:** Mapa del Héroe + Espejo de los Mundos + Ordená el Mito + Laboratorio de Mitos en modo lector (se mantiene de CLAUDE.md).

**Ola 3:** Las Reliquias + La Encrucijada + lo ya anotado para Ola 2+ que aplique (absorción de mitos menores, rutas de ascensión de tier).

**Ola 4:** sin cambios (escritura propia + taller de personajes).

El Desafío del Héroe queda descartado. "¿Qué hubiera pasado si...?" queda anotado como variante de Ordená el Mito para Ola 3+, sin módulo propio. Crisis del Mundo Antiguo, ¿Quién es quién?, Memoria de Espejos y Acertijos de la Esfinge (viejo roadmap Ola 3) quedan en evaluación detrás de Reliquias y Encrucijada.
