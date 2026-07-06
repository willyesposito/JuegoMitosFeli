# Proyecto: Mundo de Mitos — Hub de juegos de mitología para Feli

## Qué es

Hub web de mini-juegos de mitología griega y nórdica para Felicitas (7 años, edad mental ~11, lectora fuerte, perfil AACC). Evolución del MVP de colección de cartas ya construido en este repo. La colección dejó de ser "la app": es el primer módulo de un mundo con varios juegos que comparten universo, datos y progreso.

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
- **Estado único versionado en localStorage:** key `feli-mitos-v2`, con soporte de hasta 5 perfiles de partida (ver spec funcional). Lo que se gana en cualquier juego se refleja en la colección del perfil activo.
- **Migración obligatoria:** al primer arranque, si existe `feli-cartas-v1`, importar su progreso al primer perfil. Feli no pierde nada.
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
6. **Cantidad de capítulos por tier:** dorado 3-4, plateado 2-3, normal 1-2. Un personaje no se considera terminado en su tier hasta tener sus capítulos diseñados dentro del rango. Cualquier ascenso de tier futuro exige primero completar los capítulos del rango nuevo.

## Roadmap por olas

**Ola 1 (este ciclo):** Hub shell + Colección (refactor, ahora muestra capítulos y tiers dorado/plateado/normal) + Oráculo de Delfos (fácil + modo difícil) + El Cielo de los Mitos (constelaciones, encienden capítulos) + Sets temáticos latentes de fondo + Perfiles de partida (5 slots).

**Ola 2:** Ordená el Mito (secuenciador causal — enciende capítulos) + Laboratorio de Mitos en **modo lector** (arma combinaciones y lee la historia resultante; sin escritura propia todavía).

**Anotado para Ola 2+ (decidido, no implementar antes):**
- **Absorción de mitos menores:** personajes grandes incorporan mitos satélite como capítulos propios (Odiseo ← Cíclope/Lotófagos/Sirenas, Zeus ← Filemón y Baucis, Prometeo ← Deucalión y Pirra). No requiere campo nuevo en el JSON: se resuelve redefiniendo el contenido de capítulos existentes cuando el Laboratorio de Mitos (modo lector) lo necesite. No tocar el contrato de datos por esto en Ola 1.
- **Rutas de ascensión de tier:** Minotauro y Fenrir a plateado vía expansiones temáticas; Pegaso y Medusa vía sinergia de set (Perseo+Andrómeda+Medusa+Pegaso). Cuando se implemente, agregar `tier_base` y `tier_maximo_posible` al JSON. En Ola 1 el tier es estático.

**Ola 3:** Crisis del Mundo Antiguo (duelo paramétrico pacífico — enciende capítulos) + ¿Quién es quién? (deducción invertida) + Memoria de Espejos + Acertijos de la Esfinge.

**Ola 4:** Escritura propia de capítulos + Taller de creación de personajes.

## Criterio de terminado

Cada ola está terminada cuando Feli la usó sola, entendió las reglas sin que se las expliquen dos veces, y volvió por decisión propia. No cuando compila.

## Archivos del proyecto

- `roster_personajes_v3.md`: master de 80 personajes con tiers, estado de fichas y capítulos. Gobierna la composición del roster. Las fichas individuales heredadas siguen vigentes en `roster_personajes.md` hasta consolidarlas.
- `spec_funcional.md`: spec del hub, formato de carta, perfiles de partida y módulos de la ola 1 y 2.
