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


## Intento fallido 4 — Agamenón — 2026-09-04

**Estado:** FALLIDO por inspección posterior del agente; pendiente de feedback específico de Willy sobre esta imagen. Nueva instrucción de Willy autorizó exactamente un intento adicional. No confundir esta evaluación con una aprobación o rechazo posterior suyo.

**Versión:** rama `claude/game-setup-v98pr1`, skill reforzada en commit `6c196cec1d5e435608fcc282203d6d07956ce05f`; las ocho fuentes obligatorias de diseño no cambiaron respecto del intento 3. Historial completo releído y Zeus real abierto antes del preflight. Una generación con la herramienta integrada, desde texto y sin imagen base.

**Evidencia:** `exec-c9efe1c4-123f-434b-870f-b2c9bca950a1.png`, 1086 × 1448 px, SHA-256 `C259B5915C45FAD9035F723EF16C5B8430E4C5A9CC18C5CAE329AF1ED00CE57C`. Imagen inspeccionada a resolución original en la conversación, no incorporada al repo. Recorte circular de inspección sobre copia: cuadro x=80, y=20, ancho=440, alto=440 px; conserva rostro completo y cabeza del cetro. No se exportó un avatar final.

### Qué mejoró de forma visible

- No aparecen el broche circular ni los remaches decorativos del intento 3.
- La mano se muestra lateral, con palma hacia abajo, y la mirada sigue su dirección. Se eliminó el gesto frontal de bienvenida.
- Volúmenes y superficies más simplificados; la coraza es lisa y el cetro no lleva iconografía.
- Una única escena sin inset, marcos, texto ni duplicación de Agamenón.
- Pies completos y margen inferior más claro.
- El recorte se probó realmente en lugar de aprobarlo por intuición.

### Incumplimientos y puntos pendientes

- **Adecuación infantil no alcanzada:** rostro serio/solemne, cejas tensas y mirada contenida. El diseño no alcanza la accesibilidad y expresividad del Zeus aprobado.
- **Volúmenes todavía duros:** la simplificación produjo planos angulosos marcados en cara y miembros; no equivale al modelado amable buscado. Simplificar no significa facetar la anatomía.
- **Escala fuera de lo previsto:** la figura ocupa aproximadamente 87% de la altura total, estimación visual por límites de cabello y pies, frente al 70–80% pedido. La relación 3:4 sí cumple; no confundir ambos controles.
- **Sujetos secundarios no previstos:** los barcos contienen pequeñas siluetas humanas. La flota estaba autorizada, pero el inventario y el prompt pedían una escena con un solo hombre; la tripulación no había sido incluida ni resuelta explícitamente.
- **Contorno superior a revisar:** el cabello alrededor de la nuca y la barba tienen mayor volumen que el contorno corto/controlado previsto. No considerar la fidelidad de pelo/barba completamente verificada sólo porque son rubios.
- **Decisión sobre calzado:** se omitió el accesorio no trazado y el generador mostró pies descalzos. Esto fue explícito en el preflight de esta prueba; no queda establecido como canon ni como solución obligatoria para los 85 personajes.

### Gate posterior de esta ejecución

| Control | Resultado | Evidencia |
|---|---|---|
| 1. Formato 3:4 | SÍ | Dimensiones leídas: 1086 × 1448 |
| 2. Escena y cantidad de sujetos | NO | Un Agamenón, pero siluetas humanas adicionales en barcos |
| 3. Sin texto/paneles/interfaz | SÍ | No se observan |
| 4. Anatomía, rostro, cabello y silueta | NO VERIFICADO | Madurez/robustez/rubio presentes; contorno de pelo y barba requiere resolver su desviación |
| 5. Pose y dirección | SÍ | Cetro bajo, mano lateral y mirada hacia el sector de la flota |
| 6. Identificador | SÍ | Cetro vertical sin símbolo, flota reconocible |
| 7. Inventario completo | NO | Tripulación añadida; ropa sin los adornos anteriores |
| 8. Escenario | SÍ | Orilla y flota subordinadas, sin templo ni pedestal |
| 9. Cuerpo, escala y margen | NO | Cuerpo completo, pero figura demasiado grande |
| 10. Anti-clonación | SÍ | Cetro bajo/gesto lateral frente a Zeus; eje estable frente a Jasón; sin guardia de Héctor ni trabajo de Hefesto |
| 11. Adecuación infantil | NO | Expresión solemne y planos anatómicos duros |
| 12. Seguridad emocional | SÍ | Sin violencia, terror ni amenaza directa |
| 13. Recorte | SÍ | Copia circular inspeccionada con cara y cabeza de cetro completas |

### Hipótesis y cambio exigido antes de otro intento

- **Hipótesis:** pedir que mire a los barcos mejoró la dirección, pero pudo reforzar una expresión distante. La relación mirada/acción debe conservar accesibilidad emocional sin volver a la palma de bienvenida.
- **Hipótesis:** “planos de color simples” fue interpretado como planos facetados; la próxima especificación debe distinguir simplificación de dureza angular.
- Ajustar escala y dejar explícita la resolución de ocupantes de la flota. No asumir que autorizar vehículos autoriza automáticamente sujetos secundarios.
- Un nuevo intento necesita una corrección material del método o del diseño de expresión; no repetir el mismo prompt cambiando adjetivos ni relajar gates para conseguir un SÍ.
- No se generó una segunda variante dentro de esta ejecución.


## Intento fallido 5 — Agamenón — 2026-09-07

**Estado:** FALLIDO por incumplimientos visibles; no aprobado por Willy. La instrucción vigente del usuario fue generar la imagen completa vertical 3:4 con el **mismo estilo del Zeus aprobado, ni más ni menos infantil**. No se autorizó sustituirla por un busto o una prueba parcial.

### Qué se hizo realmente

- Se leyó completo este historial y se revalidaron las ocho fuentes obligatorias en la rama `claude/game-setup-v98pr1`. Se leyeron los cambios recientes de `CLAUDE.md` y `MEMORY.md`; la ficha de Agamenón seguía igual.
- Se abrió visualmente el PNG aprobado de Zeus.
- Por primera vez entre las generaciones de esta conversación, la llamada al generador incluyó el PNG real en `referenced_image_paths`, además del prompt. Los intentos 3 y 4 habían recibido sólo texto, aunque el agente sí había mirado Zeus.
- Se entregó un preflight completo y se hizo exactamente una llamada a `image_gen.imagegen`.
- Se usó Zeus como referencia declarada de acabado, con instrucción de no copiar identidad, pose ni entorno. La referencia completa contenía, de todos modos, esos elementos.
- Se midieron las dimensiones y se inspeccionó la imagen y una copia de recorte circular: x=0, y=0, ancho=650, alto=650 px. Esa copia conservó rostro y cabeza del cetro; no fue otro intento de generación ni un avatar final.
- No se editó el repo durante la generación. Esta entrada se agrega después, por pedido explícito de Willy.
- No se conoce el identificador exacto del modelo de imagen que ejecutó la herramienta integrada: su respuesta no lo expuso. No confundir el modelo de conversación con el generador de imágenes.

**Evidencia:** `exec-e4e917ac-2519-4ac1-8ed7-81619026ae58.png`; 1086 × 1448 px; SHA-256 `281244B68D7FD2879702096BE38DCC2A1A5905186B414D39F37B7E8C8C2657D7`. Imagen disponible en esta conversación y en el entorno local de esa ejecución, no subida al repo. No asumir que el nombre basta para abrirla desde otro chat.

### Qué estuvo bien

- El registro se acercó al Zeus aprobado: ojos más expresivos, expresión amable y lenguaje de dibujo más cercano a la colección. Esto es una comparación visual del agente, no una aprobación de Willy ni prueba de coincidencia perfecta de estilo.
- El archivo de referencia llegó explícitamente a la llamada del generador; no se reemplazó por una descripción Markdown.
- Se mantuvieron formato 3:4, cuerpo completo, cabello rubio, capa rojiza, cetro y flota.
- No hubo texto, paneles, retrato secundario ni duplicación de Agamenón.
- No hubo violencia ni amenaza.
- El recorte se comprobó en una copia.
- Se rechazó la imagen al detectar incumplimientos; no se generó otra variante automáticamente.

### Qué estuvo mal

1. **Transferencia del fondo:** cielo azul intenso con grandes nubes, muy próximo al de Zeus, pese a pedir un ambiente marítimo mínimo e independiente.
2. **Transferencia del gesto:** reapareció la palma abierta hacia el espectador. La mano no resolvió la dirección hacia el agua como estaba especificado.
3. **Sujetos añadidos:** se ven tripulantes en los barcos aunque el prompt pedía que no hubiera personas discernibles.
4. **Escala:** la figura ocupa aproximadamente 90% del alto del lienzo, estimación visual, frente al 70–80% previsto. El formato del archivo sí es correcto; la escala del sujeto no.
5. **Decoración de vestuario:** aparecieron bordes ornamentales y pequeños detalles metálicos en la ropa/coraza que no figuraban en la lista positiva de superficies lisas. El registro anterior decía sólo “detalles”; esta entrada precisa la observación.
6. **Control de referencia insuficiente:** escribir “sólo estilo” junto a una imagen completa no impidió que el resultado reprodujera pose y ambiente.
7. **Evaluación de estilo demasiado agregada:** el gate “registro infantil comparable = SÍ” sólo sustentaba la mejora visible de expresividad y dibujo. No debía interpretarse como certificación de igualdad exacta de acabado en rostro, cuerpo, superficies y fondo.
8. **Arrastre de decisiones del proceso:** pies descalzos, exclusión de tripulación y rechazo de pequeños cierres fueron resoluciones operativas de esta prueba; no deben convertirse en canon global del roster.
9. **Persistencia pendiente de la referencia:** el Zeus aprobado sigue requiriendo un adjunto accesible o una ubicación verificada para la nueva ejecución. El archivo Markdown no sustituye la imagen.

### Aprendizajes que cambian el próximo intento

- Mantener explícito el objetivo final confirmado: **imagen completa, una sola, vertical 3:4, mismo estilo que Zeus**. No inferir autorización para bustos, variantes, edición del canon o nuevas publicaciones.
- Una referencia completa mejora potencialmente el acabado y también puede transferir contenido no deseado. En esta prueba coexistieron ambas cosas; no prometer aislamiento perfecto entre estilo y contenido.
- **Hipótesis a probar, todavía no validada:** utilizar como referencia de estilo un recorte del Zeus original que excluya cielo, brazos y accesorios podría reducir la transferencia de composición. Requiere acordar esa preparación; no hacerlo silenciosamente ni afirmar que resolverá el problema.
- No reutilizar los Agamenones fallidos como referencias positivas.
- Presentar una única ficha de producción breve y trazable, con prioridades claras. El historial sirve para razonar y auditar; no debe copiarse entero como una lista creciente de prohibiciones dentro del prompt de imagen.
- Separar incumplimientos de canon, incumplimientos de una decisión de prueba y cuestiones visuales discutibles. No elevar una inferencia del agente a norma universal.
- Preservar la distinción entre “el prompt lo exige” y “la imagen lo cumple”. Evaluar con evidencia cada SÍ y señalar las incertidumbres.
- El 74% de contexto que muestra la captura de Willy no demuestra causalidad con los fallos. No afirmar que cambiar de chat o subir razonamiento garantiza mejores imágenes.

### Continuidad desde otra tarea

Se recomienda comenzar una tarea nueva con el Zeus original adjunto y una instrucción de arranque corta. Esta recomendación busca evitar mezclar propuestas descartadas, imágenes rechazadas y decisiones de prueba; no se presenta como una corrección técnica garantizada.

**Advertencia operativa:** la skill guardada todavía exige “desde texto y desde cero”. En el intento 5 se aplicó la instrucción posterior de Willy que autorizó referencia visual directa. Un chat nuevo debe recibir explícitamente esa excepción; este historial no modifica por sí solo la skill. No cambiar el resto de los gates ni el canon para conseguir una aprobación.

Conservar la referencia real, la rama, la ficha vigente, los fallos concretos y la excepción autorizada. No arrastrar las imágenes rechazadas como ejemplos de cómo debe quedar.

### Prompt exacto enviado en el intento 5

Se conserva para auditoría y comparación, **no como receta aprobada para repetir**. La llamada incluyó además el PNG original aprobado de Zeus como única referencia visual.

```text
Use the attached approved Zeus illustration as the DIRECT VISUAL STYLE REFERENCE for this image. The user requests EXACTLY THE SAME CHILD-FRIENDLY ILLUSTRATION STYLE, neither more realistic nor more childish. The new image should look drawn and colored by the same illustrator for the same collection: match the reference's expressive eye design language, friendly animated-feature facial expressiveness, moderate caricature, clean flowing colored linework, luminous color, softly rounded volumes, smooth shading and refined illustrated finish. This visual style match is essential. Do not reproduce the previously attempted stern, realistically rendered, angular military portraits.

Create one complete vertical 3:4 illustration of AGAMEMNON, a DIFFERENT character. The attached image establishes STYLE ONLY; design the new face, short hair, body silhouette, clothing, pose and maritime scene independently. No Zeus, lightning, laurel, white beard, long hair, blue cloak, celestial sky, temple, rocks or pedestal.

Agamemnon: a mature robust man, broad chest, broad rectangular face, SHORT BLOND HAIR kept compact close to the head, neatly trimmed SHORT beard following the jaw. Warm, engaging, self-assured and approachable expression, open expressive eyes and relaxed brows, a gentle confident smile. The illustration must have the same warm child-friendly appeal as the attached Zeus; keep the character mature, not a child, chibi or caricature with exaggerated proportions.

Character identity and silhouette: broad chest + heavy plain cape descending under its own weight + plain vertical scepter. Wear a short chiton under a smooth plain cuirass with plain lambrequin strips. Muted reddish-brown #6B4A4A clothing accents and naturally colored materials, painted with the reference's clean rich illustration technique. No visible cloak clasp, brooch, studs, jewelry, ornament or emblem. Bare feet fully visible. A simple scepter with a modest plain terminal, no decorative symbol.

Full-body frontal three-quarter standing pose. Grip the scepter LOW beside the hip, with relaxed low elbow. Scepter stays vertical beside him with its head near and clearly separate from his face. The other hand gestures sideways toward the fleet, palm angled toward the water rather than toward the viewer. Let his expression stay friendly and his face clearly readable. Stable and calm, not a military salute, attack, march or theatrical welcome. Both arms remain below shoulder height.

Compose the complete figure at about 78% of canvas height, hair near 15% down and feet near 93% down, with full feet and ground beneath. Entire figure, hair, hands and scepter inside the frame. Face and scepter terminal in the same clean upper region, with breathing room. One continuous scene only.
Agamemnon stands on a simple flat shore. A large fleet of ancient ships forms the subordinate background in the direction of the gesture. Ships should recede in depth, softly simplified at lower contrast, with no discernible people aboard. Plain quiet maritime atmosphere, no decorative architecture, no heroic or celestial sky. Person first, scepter second, fleet third.

Exactly ONE image and ONE representation of Agamemnon. No text, pseudo-text, lettering, borders, panels, insets, circles, portraits, medallions, interfaces or extra views. No additional objects, weapons, animals, magic or symbols. Match the attached illustration's exact friendly children's style throughout the face, body, cloth, metal and environment.
```


## Auditoría de las 31 imágenes producidas — 2026-09-14

**Estado:** auditoría completa del lote, no de un intento suelto. Se abrieron y miraron las 31
imágenes (28 registradas en `personajes.json` más `odiseo.png`, `poseidon.png` y `thor.png`,
subidas y todavía sin registrar) y se contrastaron contra su ficha de
`adn_visual_personajes_v1.md`, la matriz numérica y la guía maestra.

### Hallazgo de proceso: la skill nunca gobernó ninguna imagen

Las 30 imágenes que no son Zeus entraron al repo como commits `Add files via upload` desde
GitHub web. Se generaron afuera, en chats de GPT, con
`Documentacion/prompt_generacion_personaje.md`, que no tenía blacklist ni gate posterior. La
skill, con sus 15 gates de preflight y sus 13 de gate posterior, no participó de ninguna.

Consecuencia comprobable: la imagen final de Agamenón repite cuatro fallas ya documentadas y
rechazadas en los intentos 3 a 5 de este mismo archivo. Palma abierta hacia el espectador,
sujetos secundarios en la flota, figura muy por encima del 70–80% del alto, e iconografía
inventada (leones en cetro, coraza, grebas y estandarte, cuando la corrección exigía cetro sin
iconografía y sin emblema). **Un historial de fallas que el proceso de producción no lee no
previene nada.**

### Causa raíz 1: el punto 6 del prompt maestro

Decía: *"Tomá las imágenes aprobadas de Zeus, Atenea, Iris y Teseo solo como referencia del
lenguaje visual general... Nunca copies cara, cuerpo, pose, anatomía"*. Estuvo desde la primera
versión del archivo, el 2026-09-12, y las 24 imágenes posteriores se generaron con esa
instrucción activa.

Resultado: Teseo, Hermes y Perseo comparten la cara. Es el mismo mecanismo que ya había fallado
en el intento 5 de Agamenón, registrado arriba como *"escribir 'sólo estilo' junto a una imagen
completa no impidió que el resultado reprodujera pose y ambiente"*. El aprendizaje se escribió
y después se hizo exactamente lo contrario, con cuatro imágenes en vez de una.

Agravante detectado: cuando se escribió ese punto, en el repo sólo existía `zeus.jpg`. Atenea,
Iris y Teseo entraron después. Durante las primeras tandas el prompt nombraba tres referencias
que el modelo no podía abrir.

### Causa raíz 2: cara y pelo no están gobernados por ningún archivo

- Los 15 ejes de la matriz numérica no incluyen color de pelo, tono de piel ni identidad
  facial. El único eje de cara es `AF`, angulosidad.
- De 85 fichas, unas 15 declaran color o tono de pelo. Entre los 28 ilustrados: Agamenón, Sif,
  Heimdall, Hades, Odín y Loki. El resto no declara nada y el generador cae en su default.
- Peor, las fichas asignan geometrías casi idénticas: Teseo "cara más redonda, cabello corto
  rizado", Perseo "rostro oval corto y cabello rizado compacto", Hermes "rostro corto y vivo,
  cabello rizado pequeño". Los tres se cumplieron. El clon está en la fuente, no en el
  generador.
- Lo mismo en el elenco femenino: Atenea, Penélope, Helena, Calipso, Pandora, Iris, Psique y
  Perséfone tienen todas rostro oval o corazón y ninguna declara color de pelo. Salieron ocho
  castañas de rostro oval.

Confirmación por contraste: Sigurd comparte la construcción facial del grupo de héroes jóvenes
y se distingue igual, porque su ficha declara el pelo. Es el único separador que funcionó.

### Causa raíz 3: dos archivos de instrucciones, y el que se usa es el que no tiene la blacklist

La skill prohíbe textualmente el pedestal de roca y el templo griego automático. El prompt
maestro no los mencionaba. Resultado sobre 31 imágenes: 15 con roca-pedestal, 11 con templo en
acantilado.

### Incumplimientos por categoría

**Cultura pop, prohibición expresa de la blacklist.** Thor como Thor de Marvel, con capa roja y
martillo al hombro. Loki con la silueta y la paleta de Marvel. Sif como Rapunzel de *Enredados*.
Una valquiria como Merida de *Valiente*.

**Objetos inventados.** Alas anatómicas en Freya, cuando su ficha dice capa de plumas de halcón.
Lanza, parche, valknut, piedra rúnica, aldea y drakkar en Odín, ninguno autorizado por su ficha,
cuya única pista secundaria es el pozo de sabiduría. Valva de vieira en Afrodita, que es
Botticelli y no está en su ficha. Galaxia espiral y Vía Láctea de astrofotografía en la bóveda
de Atlas. Mapa del tesoro con rosa de los vientos y una X en Odiseo. Calavera y perro negro en
Perséfone, cuyas pistas autorizadas son sólo flor y piedra. Lechuza en el escudo de Atenea.
Pelo azul verdoso en Poseidón. Ropa arcoíris en Iris, que es la misma prohibición del pelo
multicolor mudada a la tela.

**Acción prestada de otra carta.** Sif ejecuta la acción de Deméter, canasto y siembra, en vez
de la suya, levantar el cabello para mostrar su peso. Son par de Espejo en el juego, así que la
confusión es doblemente costosa.

**Momento narrativo equivocado.** Rómulo y Remo aparecen como bebés con la loba. Su ficha pide
gemelos adultos jóvenes fundando la ciudad, con contexturas deliberadamente distintas. Salieron
dos nenes casi idénticos, o sea que además incumple el anti-clon interno de la dupla.

**Estructura de ficha rota.** Perséfone es un plano medio sin pies, con la dualidad resuelta por
collage de fondo, cuando su ficha exige un pie en cada zona visual y cuerpo repartido entre dos
ambientes.

**Uniforme por mitología.** El kit "nudo celta más cuello de piel más broche redondo más botas
envueltas" se repite en Odín, Sif, Freya, Heimdall, Loki, Sigurd, Thor y las Valquirias. La
guía maestra §7 dice explícitamente que una mitología aporta vocabulario, no uniforme.

**Tres técnicas distintas conviviendo.** Cel 2D con línea negra dura, render 3D estilo Pixar, y
semirrealismo cinematográfico en Teseo, que es un caso único.

### Qué se cambió a partir de esta auditoría

1. **Decisión de estilo de Willy: la colección es semirrealista, calibrada por
   `imagenes/teseo.jpg`.** Nuevo archivo `Documentacion/estilo_visual_aprobado.md`. Deroga la
   restricción dominante de aventura infantil de la guía maestra §1 y la calibración infantil
   derivada de Odín.
2. **Se invierte el criterio de los intentos 1 a 5 de Agamenón.** Esos cinco se rechazaron por
   ser demasiado adultos y realistas. Ese motivo de rechazo ya no aplica. Las entradas se
   conservan enteras: sus otros hallazgos (objetos inventados, escala, sujetos añadidos, falsos
   SÍ del gate) siguen plenamente vigentes.
3. **Prohibido abrir imágenes de otros personajes**, en la skill y en el prompt maestro.
4. **Órdenes de producción precompiladas** en `Produccion/<id>.md`, una por personaje, cerradas
   y de dos páginas. `Produccion/sif.md` queda como modelo, y a propósito queda **bloqueada**
   por dos `[FALTA]`: es la demostración de que el circuito frena en vez de rellenar con el
   default.
5. **Blacklist dentro del prompt maestro**, no sólo en la skill, con la cuenta de incidencias
   de cada ítem sobre las 31 imágenes.
6. **Preflight de cinco líneas antes de generar y declaración obligatoria después.**
7. **Investigación documental de los 85** en `Documentacion/prompt_investigacion_85.md`, para
   cerrar detalle reconocible, atestación física y contaminación pop antes de volver a generar.

### Estado del lote

Las 31 imágenes quedan fuera de norma de estilo. Teseo es la única en el estilo vigente y pasa
a ser la calibración. Ninguna se borra ni se despublica en este cambio: eso es decisión de
Willy y requiere instrucción textual suya.


### Cierre de la auditoría — órdenes de producción, 2026-09-14

Se precompilaron las 85 órdenes en `Produccion/` y se llenó el hueco de identidad facial y
cromática que la auditoría había señalado como causa raíz 2.

Hallazgo nuevo, aparecido al armarlas: **el campo "riesgos de parecido" de las fichas no
contiene los pares que efectivamente fallaron.** La ficha de Hermes nombra a Iris y a Loki; su
clon real fue con Teseo y con Perseo, que no figuran. Lo mismo con Calipso, Helena y Penélope,
que salieron la misma mujer sin estar emparejadas entre sí en ninguna ficha. La lista de riesgos
del ADN se construyó sobre el papel, comparando descripciones, y no anticipó lo que el generador
efectivamente hizo. Los 15 pares comprobados quedaron en `herramientas/identidad_visual.py`,
bajo `RIESGOS_OBSERVADOS`, y entran en las órdenes **además** de los de la ficha, nunca en lugar.

Se agregó también el par de Espejo como riesgo visual automático: el módulo muestra las dos
cartas enfrentadas, así que un parecido ahí cuesta el doble. Es el caso de Sif y Deméter.

Se borraron `imagenes/odiseo.png`, `imagenes/poseidon.png` y `imagenes/thor.png` por
instrucción de Willy: estaban subidas sin registrar en `personajes.json`, o sea que no se veían
en el juego, y eran cel 2D, fuera de norma antes de llegar. Thor además había salido con la capa
roja y el martillo al hombro de Marvel, y Poseidón con pelo azul verdoso inventado.

---

## Intento 1 de Hermes semirrealista — 2026-09-14, RECHAZADO por Willy

Primera imagen generada con el circuito nuevo: orden precompilada `Produccion/hermes.md` +
`estilo_visual_aprobado.md`, sin abrir ninguna imagen del repo. El circuito funcionó. El
resultado lo rechazó Willy por estilo.

**Qué salió.** Un corredor de anatomía real, cabello cobrizo rizado, piel clara con pecas,
túnica de lino sin ornamento, sandalias con alas blancas, carrera lateral con diagonal limpia,
polvo levantado, fondo de olivos y cipreses desenfocado. Contenido correcto: inventario
respetado, sin pedestal, sin templo, sin Olimpo, sin dorado automático, separación cumplida.

**Por qué se rechazó, en dos fallas distintas.**

1. **Salió fotográfica.** No parece una ilustración pintada: parece la foto de un chico
   corriendo por un campo. No hay pincelada, los bordes están todos igual de enfocados y las
   luces no tienen empaste.
2. **El don estaba apagado.** Las alas de las sandalias eran dos apliques de cuero blanco
   quietos, atados al pie. Hermes es el más veloz de los dioses y la imagen no lo dice: sin la
   ficha al lado, es un chico corriendo.

**Causa raíz, y es de método, no del generador.** El archivo de estilo estaba escrito casi
enteramente en negativo y en términos de lo que el estilo *no* era: no caricatura, no cabeza
agrandada, no cel shading, no dorado. Lo único positivo que declaraba era "anatomía real,
textura real, terminación alta". El default del generador para esa descripción es la
fotografía, y la entregó. **Un estilo definido por sus prohibiciones converge al default del
modelo.** Es la misma falla de fondo que el "no repitas a Perseo" que produjo el clon de
Perseo: lo que sobrevive hasta el generador es el sustantivo, no la negación.

Sobre el don, el error fue de encuadre conceptual: la orden trataba al identificador como un
objeto a incluir en un inventario, no como algo que el personaje está usando. "Sandalias
aladas — identificador principal" se cumple con un par de sandalias apoyadas.

**Correcciones aplicadas el mismo día.**

- `estilo_visual_aprobado.md` §3.1, nueva: el acabado de pintura visible, en positivo.
- `estilo_visual_aprobado.md` §7, nueva: la manifestación del don en tres capas, con el halo
  acotado al objeto y la salvedad de que un don sin manifestación física va sin luz.
- El gate de estilo pasó de siete a diez puntos: se agregaron "no se ve la pintura", "el don
  está apagado" y "hay efecto mágico decorativo".
- `herramientas/generar-ordenes.py`: la §5 de cada orden dejó de decir "sin efecto mágico" a
  secas, que prohibía también encender el identificador propio, y pasó a prohibir el efecto
  decorativo agregado por fuera del identificador. Se agregó el bloque "El identificador va
  encendido". Las 85 órdenes se regeneraron.
- `skills/nuevo-personaje-mitos/SKILL.md`: gate de estilo, blacklist y preflight.

**Lo que no se cambió, a propósito:** la anatomía y las proporciones de adulto real, la
prohibición de caricatura y de cabeza agrandada, y Teseo como calibración. La corrección es
sobre el acabado y sobre el don, no sobre la estructura. Volver al registro animado estaba
sobre la mesa y Willy lo descartó.

---

## Intento 2 de Hermes — 2026-09-14, RECHAZADO por Willy. Y el diagnóstico real

Segunda imagen, generada después de agregar al archivo de estilo la §3.1 de pintura visible y
la §7 de manifestación del don.

**Qué salió.** Un óleo academicista del siglo XIX. Pincelada visible, empaste en las luces,
fondo en manchas, halo blanco cálido en las sandalias iluminando el tobillo y el suelo. Es
decir: **cumplió todo lo que se le había agregado**, y salió peor que el anterior para el uso
real. Musculatura de estatua, gravedad de monumento, cuadro de museo. Para una carta de un
juego infantil, inservible.

**Qué pasó de verdad, y es más grave que las dos imágenes.** El archivo de estilo del 14/9 a la
mañana declaró a `imagenes/teseo.jpg` como calibración y después lo describió mal. Dijo
"anatomía y proporciones de adulto real", "pintura digital", "sin caricatura", "la forma la
define la luz".

Teseo no es nada de eso. Teseo es un fotograma de película de animación 3D: volumen pulido,
cejas gruesas y actuadas de caricatura moderada, cara joven idealizada, materiales estilizados,
luz cinematográfica con contraluz.

El generador obedece al texto y nunca ve la imagen. Con esa descripción entregó primero una
fotografía y después, cuando se le pidió pintura, un óleo. **Las dos salidas eran lecturas
correctas de lo que estaba escrito.** No falló el generador ni falló el circuito: falló el
texto, que describía una imagen distinta de la que decía calibrar.

**La regla que queda, y vale más que este caso:** si un archivo declara una imagen como
calibración, el texto tiene que describir esa imagen. Cuando el texto y la referencia se
contradicen, gana el texto, porque es lo único que llega al generador. Antes de dar por buena
una norma visual, leerla preguntándose si describe la imagen que dice calibrar.

**Costo del error:** dos generaciones y tres reescrituras del archivo de estilo en un día.
Verificar esa coherencia habría costado abrir una imagen.

**Corrección aplicada.** Tercera y vigente versión de `estilo_visual_aprobado.md`: cine de
animación 3D familiar, con el acabado calibrado por `teseo.jpg` y el registro emocional por
`hermes.jpg`, cada uno declarado en lo suyo. La §0 del archivo explica el error para que no se
repita. Gate de once puntos, que ahora rechaza por separado la fotografía, la pintura al óleo y
el 2D plano, más la musculatura de estatua académica.

La §7 de manifestación del don sobrevive intacta a los tres cambios de estilo: es agnóstica del
acabado y el halo de las sandalias fue lo único que funcionó en esta imagen.

**Qué no volvió de `hermes.jpg`, aunque sea la calibración del registro:** el templo al fondo,
el cielo azul de default, el broche inventado del hombro y las estelas de chispas. De esa imagen
vuelve el tono y nada más. La auditoría del 14/9 sobre escenario, inventario y anti-clones es
independiente del estilo y sigue entera.

---

## Intento 3 de Hermes — 2026-09-14, PARCIAL. Dos correcciones que salieron de acá

Primera imagen en el estilo de cine de animación 3D, y la primera que Willy consideró encaminada.
Salió con el registro correcto, las alas encendidas, la estela y el polvo de la carrera.

**Falla 1: demasiado musculoso.** Y acá el dato importante es que **el repo ya decía que no.**
La matriz declara para Hermes masa corporal 3 y anchura de hombros 3 sobre 10 desde el
principio, o sea el cuerpo de un corredor liviano. Los tres intentos lo ignoraron.

El motivo no fue desobediencia: la orden entregaba esos números como una tabla de quince siglas
con los valores debajo y sin leyenda. `| EV | MC | EA | ... |` seguido de `| 3 | 3 | 6 | ... |`
no es una instrucción ejecutable. Un dato que no está en palabras no llega.

Corrección: `generar-ordenes.py` traduce ahora edad visual, masa corporal, anchura de hombros y
escala aparente a una frase en español al principio de la §4 de cada orden ("joven, delgado y
liviano, sin masa muscular marcada, hombros estrechos, de escala humana"), con la aclaración
expresa de que ese dato manda sobre lo que el personaje representa: un dios no es corpulento por
ser dios. La tabla completa queda, ahora con leyenda, para control humano.

**Regla general que queda: si un dato tiene que llegar al generador, tiene que llegar en
palabras.** Vale para cualquier eje numérico que se agregue en el futuro.

**Falla 2: poca magia, y era culpa del archivo de estilo.** Corrección textual de Willy: son
personajes que no existen en la vida real y la carta tiene que decirlo. Un dios que parece una
persona común con un objeto en la mano es una carta fallada aunque el objeto sea correcto.

Las versiones anteriores de la §7 autorizaban el fenómeno del don pero después lo acotaban con
una lista larga de prohibiciones que incluía chispas, partículas y estelas. Esa lista nació de
un problema real de la tanda vieja, donde todas las cartas tenían las mismas chispas doradas
genéricas, pero el problema era **la falta de traza al don**, no el efecto en sí. Prohibir el
efecto resolvió el síntoma y mató el motor.

La §7 se reescribió como "Magia visible": las tres capas se mantienen, la capa 3 pasa a estar
explícitamente autorizada y generosa (estela, chispas, partículas, luz propia, deformación del
aire, materia que responde), y el control pasa de una lista de prohibiciones a cuatro reglas:
nace del don, no tapa la cara ni el identificador, el color sale del don o del material, y el
fenómeno es propio de ese personaje. Afuera queda sólo el aura que disuelve la silueta, el halo
de santo, las runas flotando y el efecto sin traza.

El gate ahora rechaza por **falta** de magia: "una carta sobria es una carta fallada".
