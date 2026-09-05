# MEMORIA PERSISTENTE — Mundo de Mitos

> Leer al inicio de cada sesión, antes de procesar cualquier orden.
>
> `CLAUDE.md` define qué es el proyecto y sus reglas fijas. **Este archivo guarda lo aprendido**: preferencias de trabajo, criterios que se descubrieron sobre la marcha y errores que no hay que repetir. No duplicar acá reglas que ya viven en `CLAUDE.md`.
>
> **Cada vez que Willy corrige un formato, una preferencia o una regla de negocio, escribir la norma acá antes de cerrar la sesión.** No esperar a que lo pida.

---

## 1. Preferencias de trabajo y estilo

* **Idioma:** español rioplatense en todo, conversación y contenido del juego. Cero inglés en texto visible.
* **Brainstorm antes de construir.** Confirmar el alcance con una frase del tipo "Entendí que lo que necesitás es X" y esperar. Nunca asumir y avanzar.
* **Alcance mínimo.** Resolver lo pedido, nada más. Si aparece una idea adicional, nombrarla en una línea al final y esperar. Si algo se complicó, simplificar sacando cosas, no reordenándolas.
* **Alternativas rankeadas** del 1 al 10, con el criterio junto a cada puesto, no en un bloque al final. Nada de "depende".
* **Formato:** prosa directa por default. Listas solo cuando el contenido es genuinamente enumerable. Prohibida la estructura vacía intro + 3 bullets + cierre.
* **Nivel técnico:** Willy decide arquitectura de contenido y canon, pero no quiere tecnicismos de desarrollo (git, builds, dependencias, arquitectura de código). Explicar en términos de qué hace el juego, no de cómo se implementa.
* **Desafiar premisas, no solo conclusiones.** Si Willy afirma algo como hecho y está mal o no está verificado, decirlo aunque no lo haya preguntado.
* **Separación de herramientas:**
  * Claude Chat: arquitectura, contenido, canon, decisiones estructurales. **Ahí no se escribe código.**
  * Claude Code: ejecución autónoma contra el repo. Commitear y pushear al cierre de cada sesión.
  * Claude Design: trabajo visual y UI, con handoff a Code vía GitHub.
* **Flujo:** diseño en Chat → push a GitHub → Code clona limpio y ejecuta → commitea y mergea → Chat lee el estado desde GitHub.
* **Estrategia de modelos:** Opus en Chat para arquitectura y canon. Sonnet 5 esfuerzo estándar como default de Code. Esfuerzo alto solo para prompts de complejidad alta puntual. Evitar Fable 5 en este proyecto.

---

## 2. Reglas de negocio aprendidas

* **El tier se asigna por alcance del ciclo mítico, no solo por peso narrativo.** Caso testigo: Perseo pasó a dorado porque su ciclo cubre 4 de las 10 constelaciones planificadas.
* **Los pares del Espejo se definen por el texto ya escrito, no por la equivalencia clásica.** Zeus↔Thor y Atenea↔Odín (no Zeus↔Odín), porque las fichas existentes ya sostienen esos pares palabra por palabra. Prometeo↔Tyr por encima de Ares↔Tyr: gana el arquetipo del sacrificio sobre el match superficial de dios de la guerra.
* **Arquitectura de todo capítulo:** un Enfoque con nombre (encuadre cognitivo), una Historia suavizada (cortada antes del contenido gráfico) y un "¿Por qué?" que explica la relevancia antropológica o de pensamiento sistémico.
* **Restricciones de diseño de exigencia:** sin penalizaciones de corte duro por error; sin timers ni presión de velocidad motriz fina; el desafío intelectual alto es apropiado y no hay que bajarlo; sin rachas ni recordatorios por obligación.
* **La dificultad ajusta exigencia, nunca contenido ni acceso.** Se elige al crear el perfil y no se cambia dentro de la partida: eso es deliberado, no un faltante.
* **Techo de dorado eliminado** (julio 2026): un dorado acumula todos los capítulos que su historia dé, sin descartar candidatos de módulos nuevos. Plateado y normal conservan rango con el techo +1 ya aplicado.
* **Umbral de contenido para material de referencia externo** (podcasts, libros): la violencia y las muertes son aceptables; la violencia sexual se filtra.
* **La escritura propia de capítulos por la jugadora sigue fuera de alcance.** Los capítulos los aporta el juego. Vuelve recién en Ola 4 si se decide.

---

## 3. Correcciones e historial de feedback

* **Acceso al repo desde Chat:** el método confiable es clonar el repo entero. Traer la URL de GitHub Pages devuelve solo el shell HTML renderizado y no sirve. Los cambios sin commitear en una VM de Code no son visibles desde Chat. **Corolario:** el `CLAUDE.md` que Chat ve en los archivos adjuntos del proyecto puede estar desactualizado contra el del repo. La verdad está en el repo, siempre.
* **Espejo de los Mundos estaba mal planteado:** nombrar la categoría compartida tiene que ser la tarea central, no un premio posterior al match.
* **Ordená el Mito:** el contador de progreso que baja al hacer un swap es un patrón de feedback problemático. Va reemplazado por indicadores visuales por escena.
* **Recompensa binaria del modo difícil descartada.** Va degradación en tres niveles: run perfecto → capítulo especial + bonus; 1-2 errores → capítulo especial solo; 3+ errores → capítulo estándar.
* **El sistema ya no elige por la jugadora.** El abanico de 3 cartas veladas antes de cada consulta del Oráculo salió de esa corrección: elegir a quién perseguir es de ella, el desafío sigue siendo del juego.
* **Colección con 85+ cartas:** el layout de 2 por fila se volvió inusable. Va secciones por tier con barras de progreso, selector de orden (Sugerido / A-Z / Nuevas) y toggle de densidad.
* **Perfil nuevo o reiniciado arranca en 0 cartas.** El mazo curado pasó a opt-in manual desde Opciones. Precargar cartas mataba el momento del descubrimiento.
* **Problemas visuales corregidos o pendientes de verificar:** pista de capítulo velado con opacidad y tamaño demasiado bajos; texto de capítulo sin `max-width`; áreas táctiles chicas en vista compacta.
* **Un capítulo velado cuyo ancla estaba en otra carta se quedaba sin destino.** Al agregar fuentes cruzadas, verificar siempre que la pista tenga a dónde apuntar.
* **Generación visual de personajes:** una referencia aprobada de otro personaje no se usa como plantilla ni como imagen base. El estilo se hereda como acabado, no como pose, fondo, cámara, paleta o distribución de masas. No usar Olimpo/templos/cielo épico como fondo automático por mitología, y no inventar tatuajes, cuernos, alas, animales, armas, magia, colores de pelo ni rasgos de cultura pop que el repo no autorice. Si el modelo genera un resultado contaminado, no insistir automáticamente con nuevas variantes: detener la producción y corregir el método antes de volver a generar.

---

## 4. Registro de nuevas normas

> Formato: `* [AAAA-MM] Norma aprendida — contexto en el que surgió.`

* [2026-07] El repo dejó de contener datos personales de la usuaria; la documentación la describe solo en términos funcionales.
* [2026-07] Claude Code mergea sus propios PRs sin esperar revisión de Willy.
* [2026-08] Antes de responder sobre cualquier archivo del proyecto, Chat lee primero el repo (clonar `willyesposito/JuegoMitosFeli`). El proyecto de Claude no duplica archivos del repo: ahí solo van borradores todavía no subidos o contenido que nunca va al repo (privado, ver §2.1).
* [2026-08] Los señuelos de mecánicas de apareo (Espejo de los Mundos, y cualquier otra que sume distractores) solo pueden salir de personajes ya descubiertos en el perfil activo, nunca del roster completo: mostrar una carta no descubierta como señuelo la spoilearía y rompe la regla de disponibilidad de `CLAUDE.md` §4.
* [2026-09] **Los señuelos en el Espejo de los Mundos quedaron descartados.** Regla que los reemplaza: en toda mecánica de apareo, cada carta que se muestra tiene que tener su contraparte en pantalla. Un distractor imposible de aparear no sube la exigencia, convierte el juego en prueba y error. Corolario general: si un módulo se puede abrir pero no se puede terminar, la puerta está mal, no el módulo — el capítulo velado tiene que mandar al paso que sí desbloquea (el Oráculo), no al módulo bloqueado.
* [2026-09] La producción visual de personajes usa `skills/nuevo-personaje-mitos/SKILL.md`: cada personaje se genera desde texto y desde cero, con whitelist de rasgos autorizados, blacklist de contaminaciones, control contra los personajes visualmente más cercanos y escenario trazable al ADN. Las referencias aprobadas fijan calidad de acabado, no una plantilla compositiva.
* [2026-09] **El formato de carta abierta pasó a tres caras: frente, dorso y capítulos como índice.** El frente es una caja 3:4, la misma proporción en que se producen las ilustraciones, para que la imagen entre entera. La razón de separar los capítulos del dorso: con la ficha y los capítulos en un solo scroll, releer un capítulo obliga a pasar la ficha entera cada vez, y el costo crece con cada capítulo nuevo. Como el motor de retención son los capítulos, el formato tiene que abaratar releerlos, no encarecerlo.
* [2026-09] **La ilustración nunca va a sangre completa.** La imagen es 3:4 y la pantalla de un teléfono es casi 1:2: llenarla obliga a recortar más de la mitad, y lo primero que se pierde son los pies apoyados y la figura entera que fija la referencia aprobada. Al agregar cualquier formato nuevo, la proporción de la ilustración manda sobre la de la pantalla.
* [2026-09] **La imagen es opcional por personaje, no un requisito.** El campo `imagen` en `personajes.json` decide qué muestra el frente: con imagen, la ilustración; sin imagen, el nombre con el tratamiento de su mitología (ornamento, acento y textura). Las 85 cartas funcionan hoy, con una sola imagen producida.
* [2026-09] **El acento de la mitología romana (`#e8a884`) no existía en el repo** y se derivó de los `colorCarta` de las 3 cartas romanas. Griega (`#ffd867`) y nórdica (`#d6ecff`) sí venían de `estilos.css`.

