# Proyecto: Mundo de Mitos — Hub de juegos de mitología para Feli

## Qué es

Hub web de mini-juegos de mitología griega y nórdica para Feli, lectora fuerte que disfruta los desafíos y entender el porqué de cada mito. La exigencia del juego se piensa en tres modos de dificultad —fácil, normal y difícil— para que los retos escalen sin cambiar el contenido. Evolución del MVP de colección de cartas ya construido en este repo. La colección dejó de ser "la app": es el primer módulo de un mundo con varios juegos que comparten universo, datos y progreso.

Principio de diseño, no negociable: a Feli le gusta **leer historias** y entender el **porqué** de cada mito. Toda mecánica tiene que alimentar eso. Suavizar contenido nunca significa infantilizar: se preserva la estructura y el peso de la historia, se quita el detalle crudo.

## Tesis de diseño (leer antes de tocar mecánicas)

El juego tiene dos motores, y no hay que confundirlos:

1. **Descubrir cartas es el enganche inicial.** Tiene que ser fácil y rápido. Es la puerta, no la casa. Si descubrir cuesta, el juego se agota (dato real: Feli descubrió 34 de 68 en tres semanas con el modelo viejo, y cada carta le costaba un día). Descubrir barato = tiene los personajes pronto y el foco se corre a qué hace con ellos.

2. **Enriquecer las historias es lo que retiene.** Cada carta no es una ficha estática: su historia se cuenta en **capítulos** que se van encendiendo a medida que ella juega los otros módulos. Descubrir a un héroe da su capítulo 1. Jugar módulos que lo tocan enciende los demás. La misma carta se vuelve cada vez más rica. El premio de jugar es más historia para leer — exactamente lo que le gusta.

Regla de oro derivada: **jugar cualquier módulo siempre suma historia, nunca bloquea.** No existe "necesitás tal carta para jugar tal juego". El progreso es acumulativo y siempre hacia adelante.

## Stack (lockeado)

Vanilla JS + HTML + CSS, como está el repo. No migrar a React: el MVP funciona y la portabilidad offline con `sw.js` está resuelta. Mobile-first, cero dependencias de red en runtime, cero texto visible en inglés, español rioplatense sin diminutivos forzados.

## Arquitectura de hub modular

- El hub es la pantalla principal: tarjetas grandes, una por juego, con indicador de progreso propio.
- Cada juego es un **módulo autocontenido**: su carpeta/archivo, su UI, y un objeto de registro (`id`, `nombre`, `icono`, `descripcion`, `progreso()`) que el hub consume. Agregar un juego = agregar un módulo y registrarlo, sin tocar los demás.
- Los módulos no dan solo cartas: dan **capítulos de historia** a personajes concretos (ver contrato de datos).
- **Fuente de datos única:** `personajes.json` (más datos propios de cada módulo, como `constelaciones.json`).
- **Estado único versionado en localStorage:** key `feli-mitos-v2`, con soporte de hasta 5 perfiles de partida (ver spec funcional §0.1). **Estado real de la implementación (julio 2026, Ola 1 cerrada): construido.** `nucleo.js` usa `CLAVE_GUARDADO = "feli-mitos-v2"` con `MAX_PERFILES = 5` y migra automáticamente y sin pérdida de progreso desde la key vieja `feli-cartas-v1` (perfil único) y desde formatos v2 previos sin perfiles. El hub (`index.html`/`hub.js`) tiene selector de perfiles. Los módulos (Colección, Oráculo, El Cielo de los Mitos) leen y escriben ese estado compartido correctamente.
- Botón de reset y utilidades de Willy en un menú discreto (ya existe).

## Regla de despliegue de contenido nuevo (misiones, módulos, capítulos)

Todo contenido nuevo lleva un campo `"estado": "borrador"` o `"publicado"`. El hub y los módulos **filtran y solo muestran lo publicado**. Regla para cualquier sesión de Claude Code sobre este repo: **nunca registrar un módulo nuevo en el hub, ni cambiar un `estado` a `"publicado"`, sin instrucción textual de Willy en esa conversación.** Se puede construir, commitear y dejar listo contenido en borrador; visible solo cuando Willy lo publica.

## Modelo de historia por capas (corazón del proyecto)

Cada personaje tiene su historia dividida en **capítulos**. Uno viene con el descubrimiento; el resto se encienden jugando.

- **Capítulo 1 — base:** se enciende al descubrir la carta (Oráculo o constelación). Es la historia corta que ya existe hoy.
- **Capítulos 2+:** cada uno se gana resolviendo un módulo específico que toca a ese personaje. Ejemplo: Teseo tiene 4 capítulos — base (descubrimiento), "el hilo de Ariadna" (trazar la Corona Boreal), "el laberinto" (crisis del laberinto, ola 3), "después de Creta" (secuenciar su mito, ola 2).
- La carta muestra los capítulos velados con la pista de dónde se ganan ("Trazá la Corona Boreal para encender este capítulo"). Ese "me falta el capítulo 3" es el mismo gancho que "me faltan cartas", pero dentro del personaje.
- **Bonificaciones especiales:** algunos capítulos (marcados) solo se consiguen en un módulo puntual. Son el gancho para que explore un juego que capaz no elegiría sola. La bonificación es un pedazo de historia, nunca un número de combate.

### Sistema de tiers (reemplaza a la "carta dorada" binaria)

Cada personaje tiene un `tier` estático en el JSON: `"dorado"`, `"plateado"` o `"normal"`, según su peso mitológico y la densidad de su historia. El tier define el tratamiento visual máximo que la carta alcanza al completar TODOS sus capítulos:

- **Dorado:** marco metálico dorado + efecto holográfico CSS animado.
- **Plateado:** marco metálico plateado (efecto propio, menor intensidad que el dorado).
- **Normal:** sin marco de material; solo el sello de "Historia completa".

El sello de **"Historia completa"** aparece en TODA carta completada, sin importar el tier. Completar siempre se reconoce; el material es jerarquía, no premio exclusivo. Nada de esto es azar ni compra: se gana jugando.

Los capítulos los aporta el juego, no la usuaria. La escritura propia (que ella escriba capítulos) queda fuera de alcance por ahora; vuelve como fase muy posterior si se decide.

## Dificultad por partida (fácil / normal / difícil)

- Cada perfil de partida tiene un campo `dificultad` (`"facil"` | `"normal"` | `"dificil"`) que se elige **una sola vez, al crear la partida**, y **no se puede cambiar dentro de ella**: para jugar en otra dificultad se crea otro perfil. No hay UI de edición y `nucleo.js` no expone setter — eso es deliberado, no un faltante.
- `nucleo.js` es el dueño del dato: `perfilNuevo()`/`crearPerfil()` lo reciben, `normalizarPerfil()` lo preserva (los perfiles anteriores a este sistema migran a `"normal"` sin perder nada), `reiniciarPerfilActivo()` lo conserva (reiniciar no es una puerta trasera para cambiarlo), y los módulos lo leen únicamente vía `dificultadActual()`.
- Regla para módulos: la dificultad ajusta la **exigencia** (pistas, intentos, feedback, ayudas), nunca el contenido ni el acceso. En cualquier dificultad jugar siempre suma historia (regla de oro).
- Mapeo vigente: **Oráculo** — partida fácil = solo modo fácil (toggle oculto); normal = los dos modos elegibles por consulta, como siempre; difícil = solo modo difícil (fallar no bloquea el descubrimiento, solo se pierde la versión especial del capítulo). Los demás módulos todavía no ajustan reglas por dificultad: cuando uno lo haga, su mapeo se documenta acá.

## Descubrimiento de cartas — Oráculo fácil + modo difícil

- **Oráculo (por defecto, fácil):** carta del día casi regalada. Una pista, un tap, la tenés. Objetivo: que junte un mazo grande en pocos días y pase rápido a enriquecer historias.
- **Oráculo Difícil (modo opcional):** el rompecabezas deductivo completo tipo Mastermind/Cryptid que a Feli le gustó. Adivinar sin fallar da la **versión especial** del capítulo base (más largo / con bonificación de entrada). Preserva el desafío intelectual para cuando ELLA lo elige, sin volverlo peaje diario obligatorio.

## Contrato de datos — campos en personajes.json

Además de los existentes (id, nombre, mitologia, titulo, dones, historia, porque, atributos, colorCarta, icono):

- `tier` (string): `"dorado"`, `"plateado"` o `"normal"`. Estático en Ola 1. Define el tratamiento visual al completar la historia (ver sistema de tiers). La asignación por personaje vive en `roster_personajes_v3.md`.
- `capitulos` (array de objetos): cada uno `{ id, titulo, texto, porque, fuente, estado }`. `fuente` indica cómo se enciende: `"descubrimiento"` para el capítulo 1, o el id del módulo + condición para los demás (ej. `"cielo:corona_boreal"`). El primer capítulo del array es siempre el base. `estado` = `"borrador"` | `"publicado"` (ver regla de despliegue).
- `tags_secretos` (array): clasificadores latentes para sets temáticos. No se muestran como texto plano.
- `pistas_deduccion` (array de 3 strings): pistas del Oráculo Difícil, de lo amplio a lo singular.
- `constelacion` (opcional): id de la constelación asociada.
- `espejo` (opcional): id del personaje equivalente en la otra mitología. Reservado para módulos futuros.

## Reglas de contenido (NO negociables)

1. Mitos con contenido violento, sexual o adulto en su versión original se cuentan suavizados: la esencia existe, el detalle crudo no. Nunca mentir sobre que el mito existe.
2. Prohibido sin excepción: contenido ofensivo, sexual, violento explícito o no apto para una menor.
3. Registro cálido, visual, creativo. No subestimar.
4. La sección "¿Por qué?" es obligatoria en cada capítulo que revele contenido.
5. **Cronos, Medea y Hel están incluidos con versión suavizada aprobada por Willy** (decisión julio 2026, revierte la exclusión original):
   - Cronos: encuadre en el miedo al reemplazo como motor causal; sin el mito de devorar a sus hijos.
   - Medea: la mente táctica de los Argonautas; final acotado, sin el desenlace trágico con sus hijos.
   - Hel: equilibrio y administración del inframundo, misma línea de encuadre que Hades; sin tono tenebroso.
   Ninguna ficha ni capítulo de estos tres lleva detalle crudo del mito original. Sus fichas completas las valida Willy antes de entrar al JSON.
6. **Cantidad de capítulos por tier:** dorado **sin techo** (piso 3, sin límite superior), plateado 2-4, normal 1-3 (julio 2026: se elimina el techo de dorado para que un dorado pueda acumular todos los capítulos que su historia dé, sin tener que descartar candidatos de módulos nuevos; plateado y normal conservan su rango, con el techo +1 que ya se les había subido). El piso de cada tier no cambió. Un personaje no se considera terminado en su tier hasta tener al menos sus capítulos de piso diseñados; para plateado y normal, además dentro de su techo. Cualquier ascenso de tier futuro exige primero completar los capítulos del rango nuevo.

## Regla de privacidad (repo público, NO negociable)

Este repositorio es público. Prohibido escribir en cualquier archivo, commit, PR o issue: nombres reales completos, edades, fechas de nacimiento, escuela, ubicación, o cualquier etiqueta diagnóstica / de perfil cognitivo de la usuaria o de su familia (decisión julio 2026, que además eliminó los que había). El público objetivo se describe únicamente en términos funcionales de diseño (por ejemplo "lectora fuerte") y de modos de dificultad (fácil / normal / difícil), nunca de datos personales. Si Willy pega en una conversación un dato de este tipo como contexto, usarlo para razonar está bien; volcarlo al repo, no.

## Roadmap por olas

**El roadmap por olas vive en `olas_y_fuentes_de_capitulos.md`.** Ese documento es la fuente de verdad: define qué módulo entra en qué ola, todos los formatos de `fuente` de capítulo (incluidos los nuevos: `vinculo:`, `mapa:`, `espejo:`, `reliquia:`, `encrucijada:`), y el presupuesto de capítulos que garantiza que cada tier pueda completarse. Léelo antes de planificar cualquier módulo nuevo — resume así (julio 2026):

- **Ola 1** (cerrada, julio 2026): Hub + Perfiles + Colección + Oráculo (2 modos) + El Cielo de los Mitos (publicado) + Sets latentes + Vínculos entre personajes (`vinculo:`). El mergeo de contenido de los 13 dorados y 37 plateados también quedó cerrado — ver `roster_personajes_v3.md` para el detalle de qué está publicado y qué está en borrador esperando revisión de Willy.
- **Ola 2** (cerrada en lo mecánico, julio 2026): Mapa del Héroe (`mapa:`), Ordená el Mito (`ordena:`) y Espejo de los Mundos (`espejo:`) están construidos, publicados y registrados en el hub. El motor de trazado SVG ya se desacopló de `cielo.js` a `motor-trazado.js` (lo reusan Cielo y Mapa). Queda contenido incremental por sumar (mitos de Ordená, vínculos) y el "Laboratorio de Mitos en modo lector" sin construir. El seguimiento fino de qué módulo/contenido está hecho vive en `olas_y_fuentes_de_capitulos.md` §10.
- **Ola 3:** Las Reliquias (`reliquia:`) + La Encrucijada (`encrucijada:`). Reemplazan a "Crisis del Mundo Antiguo" y al viejo "Desafío del Héroe" (descartado).
- **Ola 4:** sin cambios — escritura propia de capítulos + taller de creación de personajes.

**Decisiones ya tomadas para más adelante (no implementar antes de que llegue su ola):**
- **Absorción de mitos menores:** personajes grandes incorporan mitos satélite como capítulos propios (Odiseo ← Cíclope/Lotófagos/Sirenas, Zeus ← Filemón y Baucis, Prometeo ← Deucalión y Pirra). Se resuelve redefiniendo capítulos existentes cuando el módulo que corresponda lo necesite; no requiere campo nuevo en el JSON.
- **Rutas de ascensión de tier:** Minotauro y Fenrir a plateado vía expansiones temáticas; Pegaso y Medusa vía sinergia de set (Perseo+Andrómeda+Medusa+Pegaso). Cuando se implemente, agregar `tier_base` y `tier_maximo_posible` al JSON. Por ahora el tier es estático.

## Criterio de terminado

Cada ola está terminada cuando Feli la usó sola, entendió las reglas sin que se las expliquen dos veces, y volvió por decisión propia. No cuando compila.

## Flujo de PRs con Claude Code

Willy no quiere revisar cada PR a mano: cuando el trabajo de una sesión esté listo (commits hechos, sin romper la regla de despliegue de contenido de este documento), subí la rama y **mergeá el PR directo**, sin dejarlo esperando aprobación suya ni pedirle que lo revise primero. Esto no cambia la regla de publicar contenido (`estado: "borrador"` → `"publicado"` sigue necesitando instrucción textual de Willy en la conversación) ni habilita acciones destructivas (force-push, borrar ramas, etc.) — es específico a cerrar el ciclo normal de "hice cambios → PR → merge".

## Archivos del proyecto

**Código y datos en vivo** (el juego real; espejo de lo que está en GitHub):

- `index.html` / `app.js` / `estilos.css`: módulo Colección (grilla naipe, detalle de carta, Niebla del Oráculo).
- `nucleo.js`: estado y persistencia compartidos por todos los módulos (progreso, personajes, audio). Todo módulo nuevo carga este archivo.
- `cielo.html` / `cielo.js` / `cielo.css`: módulo El Cielo de los Mitos. Construido y publicado.
- `personajes.json`: los 85 personajes del roster activo — datos y contenido en vivo.
- `constelaciones.json`: las 10 constelaciones de El Cielo de los Mitos.
- `datos_ola1.json`: contenido de sets temáticos latentes (los "superPorques" que se revelan al completar un set).
- `iconos.js`: ilustraciones SVG generadas en código.
- `sw.js`: service worker (offline). Subir `VERSION` en cada deploy real.
- `fonts/`: Cinzel en `.woff2`, servida local.

Los archivos de código y datos viven en la **raíz** (así el juego corre y coincide con lo que se despliega en GitHub). Toda la documentación se movió a `Documentacion/` para que la raíz quede navegable.

**`Documentacion/` — planificación y contenido (vigente):**

- `Documentacion/olas_y_fuentes_de_capitulos.md`: **el roadmap.** Gana sobre esta sección de CLAUDE.md donde haya conflicto.
- `Documentacion/roster_personajes_v3.md`: master del roster — composición, tiers, y estado de producción de cada capítulo (diseñado / escrito sin mergear / publicado). Es el mapa de qué falta hacer.
- `Documentacion/roster_personajes.md` (v1): fichas individuales heredadas (dones, historia, ¿por qué?, atributos) — siguen siendo la fuente para los personajes que no se tocaron en v2/v3.
- `Documentacion/spec_funcional.md`: spec del hub, formato de carta, perfiles de partida y módulos.
- `Documentacion/sesion_actual.md`: **el mazo inicial curado por Willy** — la lista de héroes de referencia, sincronizada con `DESBLOQUEADAS_INICIALES` en `nucleo.js`. Desde julio 2026 (cierre de Ola 1) ya no se aplica sola: un perfil nuevo o recién reiniciado arranca en 0 cartas, y esta lista se carga a mano desde Opciones → "Cargar mazo inicial curado" (`cargarMazoCurado()`), para cuando Willy decida usarla.
- `Documentacion/contenido para mergear/`: texto de capítulos ya escrito pero todavía no volcado al JSON. `capitulos_tier_dorado.md` (8 capítulos de dorados), `capitulos_plateado_bloque3.md` (13 de plateados + tabla de relaciones `espejo`), e `Info Personajes.txt` (bloques plateado 1-2: Dédalo, Prometeo, Hermes, Artemisa, Tyr, Freya, Apolo, Perséfone, Orfeo, Sigurd, Heimdall — su bloque dorado quedó superado por `capitulos_tier_dorado.md`, no usar esa parte).
- `Documentacion/mockups visuales/`: `Cartas y Animaciones.dc.html` y `Referencia Visual - Mundo de Mitos.html` — mockups de referencia. La mayor parte ya está implementada; quedan como referencia viva para ajustes finos.

**Archivadas en `Archivos anteriores/`** (superadas, no partir de ellas): versiones viejas del roster, el `Handoff - Tiers Plateada y Dorada.md` (describía un modelo de progreso y una key de localStorage que ya no existen), `cartas_desbloqueadas.md` (su contenido pasó a `sesion_actual.md`), `fichas_suavizado_obligatorio_borrador.md` (las 7 fichas que proponía ya están escritas —con texto final distinto— y publicadas en `personajes.json`), y la carpeta `Design` con los handoffs de El Cielo de los Mitos y el rediseño de grilla (ambos ya implementados y mergeados, PR #4 y #6).
