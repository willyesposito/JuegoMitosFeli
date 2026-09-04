# Memoria de fallas en generación de imágenes

## Propósito

Registro operativo de errores observados durante la generación de Agamenón. Debe leerse antes de modificar `skills/nuevo-personaje-mitos/SKILL.md` o de volver a ejecutar esa skill.

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

Este registro se creó antes de modificar `skills/nuevo-personaje-mitos/SKILL.md`. La skill no fue editada como parte de este cambio.
