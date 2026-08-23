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

---

## 4. Registro de nuevas normas

> Formato: `* [AAAA-MM] Norma aprendida — contexto en el que surgió.`

* [2026-07] El repo dejó de contener datos personales de la usuaria; la documentación la describe solo en términos funcionales.
* [2026-07] Claude Code mergea sus propios PRs sin esperar revisión de Willy.
* [2026-08] Antes de responder sobre cualquier archivo del proyecto, Chat lee primero el repo (clonar `willyesposito/JuegoMitosFeli`). El proyecto de Claude no duplica archivos del repo: ahí solo van borradores todavía no subidos o contenido que nunca va al repo (privado, ver §2.1).
* [2026-08] Los señuelos de mecánicas de apareo (Espejo de los Mundos, y cualquier otra que sume distractores) solo pueden salir de personajes ya descubiertos en el perfil activo, nunca del roster completo: mostrar una carta no descubierta como señuelo la spoilearía y rompe la regla de disponibilidad de `CLAUDE.md` §4.
