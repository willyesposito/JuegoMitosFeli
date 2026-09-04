# Memoria de fallas en generación de imágenes

## Propósito

Registro acumulativo de fallas de producción visual para los 85 personajes. Comenzó con Agamenón; cada ejecución fallida agrega una entrada sin borrar las anteriores. Debe leerse antes de modificar `skills/nuevo-personaje-mitos/SKILL.md` o de volver a ejecutar esa skill.

Este archivo no reemplaza la ficha del personaje, la guía visual, la matriz numérica ni la referencia aprobada. No autoriza completar datos faltantes ni agregar decisiones visuales.

## Resultado esperado que no se alcanzó

Una única ilustración vertical 3:4 de Agamenón para una colección infantil, con ilustración sofisticada, caricatura moderada, formas limpias, expresión amable, volumen claro sin fotorrealismo y acabado coleccionable.

Agamenón debía construirse sólo desde su ficha vigente y las fuentes obligatorias. La imagen real aprobada de Zeus debía usarse exclusivamente como referencia del nivel de acabado, sin transferir su contenido.

## Intento fallido 1

### Fallas de proceso

- No se abrió visualmente la imagen real aprobada de Zeus. Se trabajó sólo con `Documentacion/referencia_visual_zeus_aprobada.md`.
- La adecuación infantil no se trató como un gate independiente y obligatorio.
- El prompt introdujo términos como “stylized realism”, “premium mythological collectible” y “proud command”. Esas expresiones empujaron el resultado hacia realismo, solemnidad y épica adulta.
- No se realizó una comparación visual final contra la imagen real de Zeus antes de presentar el resultado.

### Fallas visibles

- Realismo cinematográfico y materiales con apariencia fotorrealista.
- Estética militar adulta.
- Tono solemne y expresión intimidante.
- Cielo heroico azul y fondo épico no autorizados.
- Roca o pedestal no autorizados.
- Cabeza de cetro con forma de rueda o símbolo solar inventado.
- El nivel de caricatura, amabilidad y lectura infantil quedó muy por debajo de la referencia aprobada.

## Intento fallido 2

### Correcciones que sí se hicieron

- Se localizó y abrió visualmente la imagen real aprobada de Zeus.
- Zeus se usó sólo como referencia de acabado.
- Se realizó el preflight anti-clonación y se agregó un gate de adecuación infantil.
- No se editó el repo durante esa ejecución.
- Se generó una sola imagen.

### Fallas visibles

- El generador agregó un retrato circular secundario con la cara y parte del cetro de Agamenón.
- Ese retrato duplicó al personaje y convirtió una única ilustración en una composición con inset o panel.
- La causa probable fue mencionar la preparación para recorte de avatar como si fuera contenido visible. La preparación de avatar debe ser únicamente una restricción invisible de encuadre.
- El rostro, las proporciones y la expresión siguieron siendo demasiado adultos y solemnes.
- El resultado todavía no alcanzó el registro infantil sofisticado, amable y moderadamente caricaturesco de la referencia aprobada.

### Falla de control

El preflight validó el prompt, pero no garantizó el resultado. Hace falta un gate posterior a la generación: una imagen que viole una prohibición o no alcance el nivel infantil debe declararse fallida y no presentarse como aprobada.

## Problema de reproducibilidad detectado

`Documentacion/referencia_visual_zeus_aprobada.md` describe la referencia, pero no contiene la imagen aprobada ni una ruta persistente hacia ella.

La imagen real se encontró como adjunto temporal en otra conversación. Esa ubicación no es una fuente reproducible para un chat nuevo. Mientras la imagen no tenga una ubicación persistente dentro del repo, una ejecución nueva debe:

1. recibir la imagen aprobada de Zeus como adjunto para inspección visual; o
2. frenar antes del preflight si no puede abrirla.

No se debe sustituir la inspección visual por la lectura del archivo Markdown.

## Reglas preventivas para la próxima ejecución

1. Abrir la imagen real aprobada de Zeus antes de redactar el preflight. Si no se puede abrir, frenar.
2. Transferir de Zeus sólo estas cualidades de acabado: ilustración infantil sofisticada, caricatura moderada, formas limpias, expresión amable, volumen claro sin fotorrealismo y calidad coleccionable.
3. No transferir rostro, cuerpo, pose, cámara, fondo, roca, cielo, arquitectura, paleta, vestimenta ni accesorios de Zeus.
4. Tratar la adecuación infantil como un gate positivo y obligatorio, no sólo como ausencia de violencia o miedo.
5. Interpretar “adulto maduro” y “robusto” como identidad del personaje, nunca como autorización para realismo adulto, dureza facial, solemnidad o militarización.
6. No incluir ni pedir que se represente ningún avatar, retrato, círculo, medallón, inset, panel, marco, insignia, duplicado, vista secundaria o interfaz. La futura posibilidad de recorte no debe visualizarse.
7. No agregar objetos, símbolos, decoraciones, fondos ni atributos que no estén autorizados por la ficha y las fuentes obligatorias.
8. Antes de aceptar el resultado, verificar visualmente: una sola escena, una sola representación de Agamenón, vertical 3:4, sin contenido prohibido, anti-clonación cumplida y adecuación infantil cumplida.
9. Si el gate posterior falla, detener la ejecución. “Generar una sola imagen” no autoriza un segundo intento automático.
10. No declarar éxito por haber cumplido el prompt; el resultado visible también debe cumplir todos los gates.

## Estado de la skill

Registro original conservado arriba. Actualización 2026-09-04: la skill se refuerza para exigir la lectura completa de este archivo como primer paso operativo, inspección de la referencia real, preflight con evidencia y gate posterior obligatorio. Ninguna regla escrita garantiza por sí sola que el generador cumpla; una imagen fallida debe rechazarse.


## Intento fallido 3 — Agamenón — 2026-09-04

**Estado:** FALLIDO; rechazado también por Willy. Prueba realizada en la rama `claude/game-setup-v98pr1`, sin editar el repo durante esa ejecución. Una sola generación desde texto, con herramienta integrada; sin imagen base ni segundo intento automático.

**Evidencia:** imagen generada de 1086 × 1448 px (3:4), identificador de archivo `exec-0946d65c-5a45-4c48-8055-b08f25d05d51.png`. La imagen estuvo disponible y se inspeccionó en la conversación; no está incorporada al repo. No asumir que un chat nuevo tiene acceso a ese archivo. El Zeus aprobado sí se abrió visualmente desde el adjunto de esa ejecución.

### Fallas visibles comprobadas

- **Deriva de estilo:** acabado más realista y adulto que el Zeus aprobado: modelado de brazos y piernas con anatomía detallada, textura insistente en metal/tela/piel y formas menos gráficas. Sigue siendo una ilustración; no corresponde describirla como una fotografía.
- **Infancia resuelta sólo con una sonrisa:** la expresión resulta amable, pero sonrisa y ausencia de violencia no bastan para alcanzar la caricatura moderada, ojos expresivos, formas limpias y lectura infantil sofisticada de la referencia.
- **Accesorio añadido:** broche metálico circular en el cierre de la capa, ausente de la lista positiva y contrario al prompt de superficies sin ornamentos.
- **Decoración añadida:** remaches/adornos metálicos visibles en los lambrequines que no se habían trazado a una fuente ni incluido en la lista positiva.
- **Deriva del gesto:** palma amplia abierta hacia el frente/lateral, con el rostro hacia quien mira. No demuestra con suficiente claridad que la mano dirija la flota. Se acerca al gesto de presentación de Zeus aunque el brazo del cetro esté bajo.
- **Encuadre demasiado ajustado:** la figura ocupa casi toda la altura y deja poco margen inferior, en lugar de la escala aproximada de 70–80% prevista para la familia humana.
- **Inventario incompleto:** apareció calzado de tiras cuya decisión visual no había sido trazada explícitamente en el preflight. No se afirma que sea históricamente incorrecto; se registra la falta de trazabilidad.

### Fallas del prompt y del proceso

- La especificación mezcló muchas repeticiones negativas con una descripción anatómica/material extensa. **Hipótesis**, no causalidad probada: el énfasis acumulado en cuerpo robusto, coraza y materialidad pudo reforzar el registro adulto.
- La instrucción de estilo no se convirtió en criterios visuales separados para cara, proporciones, simplificación anatómica y superficies.
- No se hizo un barrido completo de pequeños objetos: broche, remaches y calzado quedaron fuera de la planificación.
- Los archivos grandes recuperados por el conector produjeron salidas truncadas. La lectura posterior recuperó reglas y fichas pertinentes, pero la mera descarga no demuestra lectura completa de contenido no mostrado. Evitar volcar archivos enormes juntos; leer reglas completas y fichas relevantes con salida acotada, y declarar el alcance real.
- No se conservó en el repo una evidencia visual reproducible de la prueba. El nombre del archivo identifica esta ejecución, pero no reemplaza abrir la imagen.

### Fallas del gate posterior

- Se marcó separación respecto de Zeus en SÍ basándose principalmente en que el cetro estaba bajo. Eso no demuestra separación suficiente del conjunto de cuerpo, gesto, rostro y composición.
- Se marcó el recorte como compatible sin probar un recorte real. Esa evaluación sólo establecía plausibilidad, no verificación.
- El gate agrupó muchos requisitos; omitió escala de la figura, trazabilidad del calzado y revisión específica de adornos.
- Se detectó el fallo global y se detuvo la ejecución: esa decisión fue correcta. Los SÍ insuficientemente demostrados anteriores deben corregirse, no conservarse como precedentes de aprobación.

### Corrección operativa para el próximo intento

1. Priorizar en el prompt el lenguaje de ilustración infantil: formas gráficas limpias, volumen simplificado, bordes coloreados integrados, ojos expresivos y caricatura moderada; después detallar identidad, pose y objetos.
2. Mantener madurez y robustez de Agamenón sin textura realista ni musculatura cincelada. No convertirlo en niño ni copiar el rostro de Zeus.
3. Hacer cerrada y visible la lista de objetos, incluidos cierres, adornos, calzado y emblemas. Omitir lo no autorizado; si la omisión no permite representar el personaje sin inventar un dato material, frenar.
4. Para Agamenón, capa lisa sin broche visible ni remaches decorativos, coraza y lambrequines lisos; cetro sin iconografía. No extender esta prohibición a personajes cuya ficha sí autorice esos objetos.
5. Traducir la mano hacia la flota en una relación espacial verificable: dirección lateral hacia los barcos, sin palma de bienvenida al espectador. No inventar otra acción.
6. Verificar imagen completa y acercamientos del rostro, manos, cetro, vestimenta y pies. Comprobar dimensiones y escala de figura.
7. Probar el recorte en una copia de inspección si la herramienta lo permite. Nunca insertarlo en la ilustración ni exportarlo como segundo activo de esta prueba.
8. Un requisito no verificado no obtiene SÍ. La corrección de estilo se juzga junto al Zeus real, no por cumplir palabras del prompt.

## Cómo registrar cada nueva falla

Conservar el historial y agregar una entrada por ejecución; no convertir las imágenes fallidas en referencias de estilo ni en canon.

Para cada entrada registrar:

- fecha, personaje, rama y versión de fuentes si está disponible;
- estado FALLIDO y feedback explícito recibido;
- cantidad de generaciones, herramienta y dimensiones;
- evidencia accesible o identificador del archivo; declarar cuando no sea persistente;
- cada incumplimiento visible, por separado;
- errores de preparación y evaluación, sin ocultar falsos SÍ;
- causas probables etiquetadas como hipótesis;
- controles que sí pasaron, sin que compensen fallas;
- cambio concreto que debe comprobar el siguiente intento.

La actualización de este historial no autoriza cambiar el canon, borrar pruebas, publicar imágenes ni generar variantes. Respetar siempre el alcance de escritura autorizado por Willy. Si una ejecución es de sólo lectura, entregar la entrada propuesta en el chat y no escribirla en el repo.

## Reglas transversales para los 85 personajes

- Leer este archivo completo antes de preparar una ejecución; si falta o está truncado, completar la lectura o frenar.
- El acabado infantil se hereda; la identidad, objetos y composición salen de la ficha objetivo.
- Los fallos específicos de Agamenón no autorizan uniformar a todo el roster ni prohibir atributos válidos de otros personajes.
- Evaluar por separado ausencia de amenaza y adecuación positiva de estilo.
- Ningún SÍ previo sustituye una comprobación posterior.
- Si una sola condición falla o no puede verificarse, detenerse sin declarar éxito.
- Sólo una nueva instrucción de Willy habilita otro intento; releer el historial actualizado antes de hacerlo.
