# Revisión textual de identificadores — siete alertas

Fecha: 2026-09-28. Rama: `claude/game-setup-v98pr1`.
Base de lectura: `3668a2c67464881e867e3bd779bd095013b9836b`.

Las siete alertas originales eran coincidencias léxicas, no evidencia de ausencia de identidad. No se confirma ningún faltante material de identificador en esta revisión. Cinco sistemas visuales cuentan con recursos concretos documentados; dos conservan un control de reconocimiento por comportamiento o escala. La validación visual de los siete sigue pendiente.

| Personaje | Evidencia en la orden y el ADN | Resolución textual | Pendiente |
|---|---|---|---|
| Frigg | Manos controladas, manto largo limpio, mirada lateral y ausencia expresa de objeto profético; avatar con mirada lateral. | Control pendiente: el sistema está definido, pero depende del gesto silencioso. No convertir el ícono rueca en objeto autorizado. | Comprobar lectura del conocimiento silencioso y separación de otras figuras de autoridad. |
| Balder | Luminosidad propia, cuerpo abierto, pequeño muérdago y avatar con ambos recursos. | Documentado: la frase abstracta tiene realización concreta. | Validación visual; luz propia sin halo solar genérico. |
| Cronos | Escala de titán, hombros masivos, manto en bloque, quietud cerrada y avatar con borde monumental. | Control pendiente: escala y presencia están definidas, pero no prueban por sí mismas la lectura de tensión generacional. | Comprobar reconocimiento y separación de ancianos monumentales. No agregar hoz, relojes, arena o símbolos de tiempo. |
| Hel | Silueta muy fina, manto oscuro, salón, sombras estructuradas y manos bajas y ordenadas. | Documentado: ambiente y comportamiento tienen realización concreta. | Validación visual del conjunto y del avatar, sin horror. |
| Eneas | Marcha de viajero fundador, escudo de bronce, equipo preimperial y costa/barco; avatar con escudo. | Documentado: equipamiento y acción concretan el viaje. | Validación visual. El ícono padre_hombros no autoriza incorporar otro sujeto. |
| Dido | Planificación/supervisión de obra, púrpura de Tiro, muralla y puerto; avatar con pistas de ese conjunto. | Documentado: la fundación tiene una escena y pistas autorizadas. | Validación visual, conservando vocabulario fenicio y actividad fundadora. |
| Nausícaa | Gesto activo de ayuda, vasija, tela y costa tranquila; avatar con vasija o tela. | Documentado: la hospitalidad tiene acción y recursos concretos. | Validación visual, respetando alternativas de silueta sin regalia inventada. |

## Cambios del detector

`herramientas/generar-ordenes.py` usa la misma evaluación para las órdenes y para las notas del índice. La heurística de palabras únicamente selecciona candidatos sin revisión; nunca afirma que falta un objeto o exige investigación externa. El índice no se regeneró en esta tarea.

La evidencia mantenible vive en `Documentacion/revision_identificadores_lote_2026-09-28.json`. Cada evaluación conserva los campos de identificador, acción, dirección, silueta, composición, pistas y avatar. Si alguno cambia, el generador descarta la conclusión vigente y devuelve el caso a control pendiente. Una evaluación incompleta o desalineada produce error; no se acepta como validación.

No se cambiaron el ADN, la matriz, el canon, los diseños ni la skill. No se agregaron objetos, no se hizo investigación web y no se leyeron imágenes ni el historial de fallas. Las fichas consultadas fueron exclusivamente las siete de este alcance, desde una copia cuyo blob del ADN coincidía con el remoto vigente. Las dependencias restantes se cargaron mecánicamente para compilar, sin relevar el roster.

## Continuidad

Recompilar sólo `frigg balder cronos hel eneas dido nausicaa`. Frigg y Cronos conservan `[REVISAR] Control de reconocimiento pendiente`; los otros cinco muestran reconocimiento textual documentado. Ninguna de esas etiquetas aprueba una imagen ni levanta otros controles del lote. No hace falta una decisión visual nueva para corregir las alertas; cualquier propuesta futura de cambio de diseño requiere una decisión explícita de Willy.

Validación: cinco pruebas de comportamiento, comparación integral de salidas antes/después, modificación limitada al bloque de reconocimiento en cada orden y recompilación repetida sin cambios. El control local de 57 entradas permanece intacto.
