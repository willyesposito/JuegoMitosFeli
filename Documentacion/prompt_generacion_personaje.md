# Prompt maestro — Generación de imagen por personaje

Usar este prompt como primer mensaje de un chat nuevo para producir cada personaje de la colección. Reemplazar únicamente `[NOMBRE DEL PERSONAJE]`.

---

Quiero que hagas la imagen de **[NOMBRE DEL PERSONAJE]** para el proyecto Juego Mitos.

Antes de generar:

1. Leé en GitHub el repo `willyesposito/JuegoMitosFeli`.
2. Usá como rama principal `claude/game-setup-v98pr1`.
3. Revisá especialmente:
   - `Documentacion/guia_visual_maestra_v2_1.md`
   - `Documentacion/adn_visual_personajes_v1.md`
   - `personajes.json`
   - cualquier nota vigente sobre imágenes aprobadas o errores de producción.
4. Buscá la ficha exacta de **[NOMBRE DEL PERSONAJE]**.
5. Respetá estrictamente su ADN visual individual: silueta, edad aparente, cuerpo, rostro, cabello, dirección corporal, pose, composición, identificador principal, pistas secundarias, avatar y riesgos de parecido.
6. Tomá las imágenes aprobadas de Zeus, Atenea, Iris y Teseo solo como referencia del lenguaje visual general. Aplicá también la calibración infantil documentada en la guía a partir del feedback sobre la última generación de Odín. Nunca copies cara, cuerpo, pose, anatomía, objetos, vestuario, paleta, fondo ni composición. En Odín, la aprobación del estilo no autoriza la lanza, el parche, las runas, los broches, la montaña, el barco, el pueblo ni ningún elemento ausente de su ficha. No afirmes haber inspeccionado la imagen de Odín si no está realmente accesible en el chat o mediante una ruta persistente.
7. Revisá explícitamente los errores que hay que evitar antes de generar: personajes genéricos, clones entre sí, identificador principal débil, pose heroica repetida, objetos secundarios compitiendo con el principal, composición incompatible con avatar, exceso de elementos y cualquier desviación respecto del repo.
8. No inventes elementos mitológicos que no estén autorizados por el repo.
9. Aplicá como restricción visual dominante una ilustración infantil sofisticada de aventura, con apariencia de película animada familiar: ojos grandes y muy expresivos, rasgos faciales simplificados y redondeados, cabeza algo mayor que en un adulto real cuando corresponda, formas limpias, volumen suave, iluminación amable, colores luminosos y sombreado pictórico simplificado. Los materiales deben sentirse ilustrados y diferenciados por grandes formas, color y luz, sin microtextura dominante.
10. Conservá la edad e identidad del personaje, pero reinterpretadas dentro de ese lenguaje infantil. “Adulto”, “anciano”, “fuerte”, “guerrero”, “rey” o “poderoso” nunca autorizan anatomía realista, rostro severo, estética cinematográfica adulta, solemnidad épica, aspecto de videojuego AAA ni intimidación.
11. Evitá realismo o semirrealismo cinematográfico, piel fotorrealista, anatomía cincelada, mandíbula angulosa, iluminación dramática y expresiones amenazantes. Una sonrisa por sí sola no alcanza: la adecuación infantil debe verse también en rostro, ojos, proporciones, manos, cuerpo, volúmenes y materiales.
12. La imagen debe ser vertical 3:4, sin texto ni pseudo-texto. Debe transmitir primero personaje de aventura infantil y después mitología.
13. El personaje debe poder reconocerse por su silueta, pose e identificador incluso sin ver su nombre.
14. Prepará la zona superior para que después pueda obtenerse un avatar circular reconocible de la misma imagen.
15. No me preguntes decisiones estéticas que ya estén resueltas en el repo. Si hay una decisión menor no definida, elegí la opción que mejor preserve diferenciación y coherencia con la colección.

**Gate final obligatorio:** si el resultado parece arte conceptual de videojuego, una película épica adulta o una representación semirrealista, rechazalo aunque el contenido mitológico sea correcto. Rechazalo también si incorpora elementos no autorizados de una referencia de estilo.

Después de revisar todo eso, **generá directamente la imagen**. No me muestres primero el prompt ni me pidas confirmación.

---

## Uso abreviado

Una vez que este archivo forma parte del repo, en un chat nuevo se puede pedir:

> Usá `Documentacion/prompt_generacion_personaje.md` para **[NOMBRE DEL PERSONAJE]** y generá la imagen.

El archivo de prompt no reemplaza las fuentes de verdad del proyecto. La guía visual, el ADN individual y `personajes.json` siguen gobernando el contenido y diseño de cada personaje.