# Proyecto: Cartas de Héroes — Mitología para Feli

## Qué es

Juego web de colección de cartas de héroes y dioses de mitología griega y nórdica para Felicitas (7 años, edad mental ~11, lectora fuerte, interés sostenido en mitología griega con la nórdica en segundo plano). No es un juego genérico para chicos: está calibrado para una nena que quiere entender el **porqué** detrás de cada mito, no solo el relato plano.

## Alcance del MVP

Solo modo colección. Sin duelo, sin combate, sin puntajes competitivos en esta versión.

El MVP incluye:
- Galería de cartas (grilla responsive) con filtro por mitología (griega / nórdica) y búsqueda por nombre.
- Vista de detalle de cada carta: ilustración, nombre, mitología de origen, poderes/dones, historia suavizada, y la sección "¿Por qué?" (la lógica o moraleja detrás del mito).
- Sistema de desbloqueo simple: las cartas arrancan "veladas" y se desbloquean al abrirlas por primera vez (o mecánica similar liviana), para dar sensación de colección progresiva.
- Persistencia local con localStorage (qué cartas ya vio/desbloqueó).

## Arquitectura obligatoria

- Datos de personajes en un archivo JSON separado del código de UI (`personajes.json`). Agregar un héroe nuevo = agregar un objeto al JSON, sin tocar componentes.
- Cada personaje ya incluye en el JSON los atributos numéricos para el futuro modo duelo (fuerza, astucia, valentía, magia), aunque el MVP no los use en ninguna mecánica. Se pueden mostrar como "stats" visuales en la carta.
- Ilustraciones: SVG/CSS generadas en código. Cero dependencias de imágenes externas o URLs remotas. Estilo cartoon amigable, colores vivos, coherente con la estética de los libros "Mitología para Niños" (Shackleton): personajes simpáticos, no intimidantes.
- Responsive real: se juega en celular, tablet y PC. Mobile-first.
- Un solo idioma: español rioplatense neutro (sin diminutivos forzados).

## Reglas de contenido (NO negociables)

1. Todo mito con contenido violento, sexual o adulto en su versión original se cuenta en versión muy suavizada: la esencia de la historia existe, pero sin detalle crudo. Ejemplo: Heracles "venció" a la Hidra, no la "decapitó"; el Minotauro es "derrotado", Teseo "encuentra la salida gracias al hilo de Ariadna". Nunca mentir sobre que el mito existe; nunca detallar lo fuerte.
2. Prohibido sin excepción: contenido ofensivo, sexual, violento explícito o no apto para una menor.
3. Registro: cálido, visual, creativo. Explica el razonamiento con claridad. No subestimar: ella maneja vocabulario y conceptos de nena más grande. Nada de "guerrerito" ni lenguaje bebé.
4. La sección "¿Por qué?" de cada carta es obligatoria: qué explica el mito, qué enseña, o por qué los griegos/nórdicos lo contaban. Es el diferencial del juego para ella.

## Criterio de terminado

Está terminado cuando Feli lo abrió, navegó las cartas sola y volvió a abrirlo por decisión propia. No cuando compila.

## Roadmap post-MVP (no construir ahora, no bloquear después)

- Fase 2: modo duelo tipo Top Trumps comparando atributos.
- Fase 3: modo historia / elegí-tu-camino (encaja con su perfil de escritora; eventualmente ella podría escribir ramas).
- Fase 4: editor de cartas para que ella cree sus propios héroes.

## Archivos del proyecto

- `roster_personajes.md`: roster completo con fichas, estado de confirmación y guía de suavizado por personaje.
- `spec_funcional.md`: spec de pantallas, componentes y comportamiento del MVP.
