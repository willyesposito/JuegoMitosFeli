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
- **Estado único versionado en localStorage:** key `feli-mitos-v2`, un objeto con namespace por módulo más un `global` (personajes descubiertos, capítulos encendidos, cartas doradas, logros). Lo que se gana en cualquier juego se refleja en la colección.
- **Migración obligatoria:** al primer arranque, si existe `feli-cartas-v1`, importar su progreso. Feli no pierde nada.
- Botón de reset y utilidades de Willy en un menú discreto (ya existe).

## Modelo de historia por capas (corazón del proyecto)

Cada personaje tiene su historia dividida en **capítulos**. Uno viene con el descubrimiento; el resto se encienden jugando.

- **Capítulo 1 — base:** se enciende al descubrir la carta (Oráculo o constelación). Es la historia corta que ya existe hoy.
- **Capítulos 2+:** cada uno se gana resolviendo un módulo específico que toca a ese personaje. Ejemplo: Teseo tiene 4 capítulos — base (descubrimiento), "el hilo de Ariadna" (trazar la Corona Boreal), "el laberinto" (crisis del laberinto, ola 3), "después de Creta" (secuenciar su mito, ola 2).
- La carta muestra los capítulos velados con la pista de dónde se ganan ("Trazá la Corona Boreal para encender este capítulo"). Ese "me falta el capítulo 3" es el mismo gancho que "me faltan cartas", pero dentro del personaje.
- **Carta dorada:** cuando un personaje tiene TODOS sus capítulos encendidos, la carta entera se vuelve dorada con efecto holográfico CSS. Dorada = historia completa. No es azar ni compra: es el cierre de haberlo jugado todo.
- **Bonificaciones especiales:** algunos capítulos (marcados) solo se consiguen en un módulo puntual. Son el gancho para que explore un juego que capaz no elegiría sola: si quiere completar a su favorito, el juego la lleva a probar un módulo nuevo. La bonificación es un pedazo de historia, nunca un número de combate.

Los capítulos los aporta el juego, no la usuaria. La escritura propia (que ella escriba capítulos) queda fuera de alcance por ahora; vuelve como fase muy posterior si se decide.

## Descubrimiento de cartas — Oráculo fácil + modo difícil

- **Oráculo (por defecto, fácil):** carta del día casi regalada. Una pista, un tap, la tenés. Objetivo: que junte un mazo grande en pocos días y pase rápido a enriquecer historias.
- **Oráculo Difícil (modo opcional):** el rompecabezas deductivo completo tipo Mastermind/Cryptid que a Feli le gustó. Adivinar sin fallar da la **versión especial** del capítulo base (más largo / dorado de entrada). Preserva el desafío intelectual para cuando ELLA lo elige, sin volverlo peaje diario obligatorio.

## Contrato de datos — campos en personajes.json

Además de los existentes (id, nombre, mitologia, titulo, dones, historia, porque, atributos, colorCarta, icono):

- `capitulos` (array de objetos): cada uno `{ id, titulo, texto, porque, fuente }`. `fuente` indica cómo se enciende: `"descubrimiento"` para el capítulo 1, o el id del módulo + condición para los demás (ej. `"cielo:corona_boreal"`). El primer capítulo del array es siempre el base.
- `tags_secretos` (array): clasificadores latentes para sets temáticos. No se muestran como texto plano.
- `pistas_deduccion` (array de 3 strings): pistas del Oráculo Difícil, de lo amplio a lo singular.
- `constelacion` (opcional): id de la constelación asociada.
- `espejo` (opcional): id del personaje equivalente en la otra mitología. Reservado para módulos futuros.

## Reglas de contenido (NO negociables)

1. Mitos con contenido violento, sexual o adulto en su versión original se cuentan suavizados: la esencia existe, el detalle crudo no. Nunca mentir sobre que el mito existe.
2. Prohibido sin excepción: contenido ofensivo, sexual, violento explícito o no apto para una menor.
3. Registro cálido, visual, creativo. No subestimar.
4. La sección "¿Por qué?" es obligatoria en cada capítulo que revele contenido.
5. Personajes excluidos deliberadamente del universo: Cronos, Medea, Hel (ver roster).

## Roadmap por olas

**Ola 1 (este ciclo):** Hub shell + Colección (refactor, ahora muestra capítulos y cartas doradas) + Oráculo de Delfos (fácil + modo difícil) + El Cielo de los Mitos (constelaciones, encienden capítulos) + Sets temáticos latentes de fondo.

**Ola 2:** Ordená el Mito (secuenciador causal — enciende capítulos) + Laboratorio de Mitos en **modo lector** (arma combinaciones y lee la historia resultante; sin escritura propia todavía).

**Ola 3:** Crisis del Mundo Antiguo (duelo paramétrico pacífico — enciende capítulos) + ¿Quién es quién? (deducción invertida) + Memoria de Espejos + Acertijos de la Esfinge.

**Ola 4:** Escritura propia de capítulos + Taller de creación de personajes.

## Criterio de terminado

Cada ola está terminada cuando Feli la usó sola, entendió las reglas sin que se las expliquen dos veces, y volvió por decisión propia. No cuando compila.

## Archivos del proyecto

- `roster_personajes.md`: 68 personajes con fichas y capítulos.
- `spec_funcional.md`: spec del hub, formato de carta y módulos de la ola 1 y 2.
