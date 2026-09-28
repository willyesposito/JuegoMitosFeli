# Orden de producción — Ares

**Completitud mecánica: COMPLETA.** Campos obligatorios y referencias comprobados; vestimenta opcional con alternativa general cuando falta.
**Validación visual: PENDIENTE.** Compilar no acredita silueta, pose, composición, avatar ni colisión; tampoco aprueba identidad, inventario o separación.

**Imagen actual:** ninguna. La carta funciona igual, mostrando el nombre con el tratamiento de su mitología.

**Se lee junto con:** `Documentacion/estilo_visual_aprobado.md`. Nada más.

> Generada por `herramientas/generar-ordenes.py`. Para cambiarla, editar la fuente (el ADN, la matriz, `personajes.json` o `herramientas/identidad_visual.py`) y volver a generar. Editar este archivo a mano se pierde.

---

## 1. Identidad

| Campo | Valor | Origen |
|---|---|---|
| Mitología | griega | `personajes.json` |
| Tier | plateado | `personajes.json` |
| Familia de encuadre | figura humana | ADN |
| Edad y contextura | Adulto maduro; musculoso compacto. | ADN |
| Rostro y cabello | Rostro ancho, mandíbula fuerte y cabello muy corto. | ADN |
| Cabello, color | negro | ya declarado en el ADN, precisado sin contradecirlo |
| Cabello, textura | muy corto | ya declarado en el ADN, precisado sin contradecirlo |
| Piel | oliva media | ya declarado en el ADN, precisado sin contradecirlo |
| Ojos | marrón muy oscuro | ya declarado en el ADN, precisado sin contradecirlo |

## 2. Detalle reconocible

**Casco liso, armadura voluminosa y presencia guerrera de guardia.**

Dones declarados en `personajes.json`: Coraje guerrero; Nunca retrocede en una batalla.

Ícono de la carta en la colección: `espada`. Dependencia del identificador en la matriz: 6 de 10.

## 3. Acción y pose

Guardia estática y tensa; una mano sostiene la lanza baja en reposo lateral y la otra sostiene el escudo. Sin gesto de ataque ni lanza dirigida hacia cámara.

Dirección corporal: Frontal con peso repartido en ambas piernas.

Es la acción de la ficha y no se cambia. Si la acción no se puede representar sin agregar un objeto que no está en el inventario de la §5, frenar y avisar.

**Y al revés, que es el caso que falló tres veces:** si un objeto exigido de la §5 no entra en la pose tal como está descripta, **el objeto no se descarta**. Se ajusta la pose lo mínimo para que entre, conservando la dirección corporal y la diagonal. Una silueta de carrera con los dos puños cerrados no deja mano para un bastón, y la salida no es correr sin el bastón: es que una mano lo lleve. Declarar el ajuste en el preflight. Una pista condicional sólo se exige si se cumple su condición; las alternativas con «o» se conservan como alternativas, sin exigir todas a la vez.

## 4. Silueta y composición

- **Firma de silueta:** Casco liso y armadura voluminosa + postura de guardia cuadrada + lanza baja en reposo lateral + escudo separado del torso.
- **Composición:** Fondo mínimo para que mande la masa corporal; lanza y escudo separados del torso y entre sí para conservar sus contornos. Mantener el rostro legible bajo el casco y evitar que el escudo lo tape.
- **Densidad visual:** alta (matriz: 8 de 10).

- **Cuerpo, y esto manda sobre cualquier intuición:** de edad media, de masa enorme, muy por encima de lo humano, hombros muy anchos, que dominan la silueta, de escala algo mayor que humana.

La contextura sale de acá y no de lo que el personaje representa. Un dios no es corpulento por ser dios, ni un héroe es musculoso por ser héroe: si estos valores piden un cuerpo liviano, va un cuerpo liviano. **Sin abdominales marcados, sin deltoides separados, sin bíceps de gimnasio y sin espalda en V** salvo que la masa y los hombros de arriba lo pidan expresamente.

Los quince ejes completos, como límites de diseño y no como sugerencia (EV edad visual, MC masa corporal, EA escala aparente, AF angulosidad facial, CO contorno superior, AC apertura corporal, DP dinamismo de pose, VD verticalidad, DV densidad visual, OV oscuridad, DI dependencia del identificador, AN anchura de hombros, PF protagonismo de fondo, RM rigidez de materiales, RA rareza anatómica):

| EV | MC | EA | AF | CO | AC | DP | VD | DV | OV | DI | AN | PF | RM | RA |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 6 | 9 | 7 | 8 | 1 | 4 | 4 | 8 | 8 | 6 | 6 | 9 | 2 | 10 | 1 |

Prueba de silueta: reducida a mancha negra, tiene que seguir distinguiéndose de los personajes de la §7.

## 5. Inventario cerrado

Lo único que puede verse:

1. **Casco liso, armadura voluminosa y presencia guerrera de guardia** — identificador principal. ADN.
2. **Pistas secundarias autorizadas:** lanza en reposo lateral y escudo liso, sin símbolos, emblemas, inscripciones ni adornos nuevos. Casco, armadura, lanza y escudo son una decisión de diseño de Willy aprobada el 2026-09-28, no una atestación histórica. ADN. Subordinadas al identificador. Respetar las condiciones y alternativas del texto: «si hace falta» y «cuando corresponda» no exigen presencia incondicional; «o» no exige ambas opciones.
3. **Vestimenta lisa del vocabulario griego**, sin ornamento. Necesaria para vestir al personaje; sin autorización de ningún adorno concreto, va lisa.
4. **Resolución funcional de vestimenta y calzado:** `Documentacion/adn_visual_personajes_v1.md`, sección «Regla común de vestimenta funcional y calzado — lote del 2026-09-28». Decisión de diseño de Willy aprobada el 2026-09-28; no es una atestación histórica.
   - **Vestimenta funcional:** Túnica lisa de corte sencillo, ajustada a la acción y a la silueta.
   - **Calzado:** Sandalias simples de cuero, sin motivos ornamentales.
   - **Alcance:** Conservar prendas y armaduras expresamente autorizadas; la base lisa sólo completa las partes que requieren vestimenta funcional, sin reemplazar ni tapar la firma de silueta. No imponer un color común: conservar los colores autorizados. Cierres funcionales discretos, sin broches, emblemas, joyas ni adornos nuevos.

Nada más. En particular, y porque ya pasó en la tanda anterior: **sin** broche, **sin** medallón, **sin** insignia, **sin** emblema, **sin** remaches decorativos, **sin** joyas, **sin** flores en el pelo, **sin** tatuajes, **sin** cuernos, **sin** alas que la ficha no pida, **sin** animal acompañante que no esté arriba, **sin** efecto mágico decorativo agregado por fuera del identificador, **sin** runas, **sin** pseudo-texto, **sin** calzado con decisión no trazada.

**Inventario por exceso y por omisión.** Lo que no figura no entra. Mostrar los elementos exigidos por el ADN, aplicar las pistas condicionales sólo cuando se cumpla su condición y conservar las alternativas como tales. El identificador principal manda, las pistas acompañan y nada tapa la cara ni el identificador. En el preflight, declarar qué condiciones se cumplen y qué alternativa se usa, sin agregar decisiones ajenas a la fuente.

**La magia es obligatoria y sale del identificador.** El detalle reconocible de la §2 no se muestra apoyado y quieto: se muestra funcionando, el entorno reacciona, y el don produce su fenómeno visible. Estela, chispas, partículas, luz propia que ilumina de verdad, deformación del aire, materia que responde: todo eso está autorizado y va sin timidez. Esto no agrega ningún objeto al inventario de arriba, porque lo que se enciende es lo que el personaje ya tiene.

Las tres capas y las cuatro reglas están en `estilo_visual_aprobado.md` §7, que gobierna. En resumen: el efecto nace del don y se puede señalar de dónde salió; no tapa la cara ni el identificador; el color sale del don o del material y nunca es el dorado por default; y el fenómeno es propio de este personaje y no el mismo de las otras 84. Queda afuera el aura que envuelve el cuerpo y disuelve la silueta, el halo detrás de la cabeza, las runas o pseudo-texto flotando, y cualquier efecto que no se pueda trazar al don. Si el identificador no da para un fenómeno, la carta va con el objeto en actividad y el entorno reaccionando, y no se inventa uno.

## 6. Escenario

Sale de la acción de la §3 y de las pistas autorizadas de la §5, en ese orden. El fondo se diseña después del personaje, nunca antes.

Protagonismo de fondo asignado: 2 de 10, o sea que el fondo es prescindible: mínimo suficiente y nada más.

**Sin** pedestal de roca ni acantilado heroico, **sin** templo griego de decoración, **sin** Olimpo, **sin** cielo azul con nubes por defecto, **sin** arquitectura de fantasía, **sin** paisaje panorámico que compita en nitidez. Quince de las treinta y una imágenes anteriores tenían el pedestal y once el templo.

El fondo va con profundidad de campo real: menos nitidez y menos contraste que el personaje. Es el recurso principal para cumplir la jerarquía personaje → identificador → contexto.

## 7. Separación obligatoria

**Par de Espejo: Tyr.** El módulo Espejo de los Mundos los muestra enfrentados en pantalla, así que las dos cartas tienen que separarse solas a simple vista. Es el par donde un parecido cuesta doble.

**Contra Atenea.**

| | Ares | Atenea |
|---|---|---|
| Cabello | negro | castaño ceniza |
| Textura | muy corto | ondulado recogido compacto |
| Piel | oliva media | oliva clara |
| Ojos | marrón muy oscuro | gris claro |

Silueta de Atenea, para no repetirla: casco/cresta + escudo desplazado + línea de lanza o arma defensiva sólo si la referencia aprobada la conserva.

Pose de Atenea, para no repetirla: escudo en diagonal baja y mano libre indicando estrategia; no combate ni simetría de estatua.

Ejes numéricos que ya los separan: masa corporal 9 contra 5, anchura de hombros 9 contra 5, oscuridad 6 contra 3.

**Atención: 12 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Contra Pentesilea.**

| | Ares | Pentesilea |
|---|---|---|
| Cabello | negro ⚠ igual | negro |
| Textura | muy corto | trenzado corto |
| Piel | oliva media ⚠ igual | oliva media |
| Ojos | marrón muy oscuro | gris oscuro |

Silueta de Pentesilea, para no repetirla: escudo de amazona separado del torso + postura amplia + armadura con geometría distinta a Atenea.

Pose de Pentesilea, para no repetirla: mirada hacia fuera de cuadro y postura de campo; no combate explícito.

Ejes numéricos que ya los separan: apertura corporal 4 contra 7, masa corporal 9 contra 7, verticalidad 8 contra 6, dependencia del identificador 6 contra 8.

**Atención: 9 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Contra Agamenón.**

| | Ares | Agamenón |
|---|---|---|
| Cabello | negro | rubio |
| Textura | muy corto | corto |
| Piel | oliva media | oliva clara |
| Ojos | marrón muy oscuro | avellana |

Silueta de Agamenón, para no repetirla: cetro vertical + capa pesada + pecho ancho, con composición de comandante.

Pose de Agamenón, para no repetirla: cetro bajo y mano extendida hacia una flota; liderazgo antes que combate.

Ejes numéricos que ya los separan: protagonismo de fondo 2 contra 8, apertura corporal 4 contra 7, dependencia del identificador 6 contra 8, rigidez de materiales 10 contra 8.

**Atención: 11 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Contra Héctor.**

| | Ares | Héctor |
|---|---|---|
| Cabello | negro | castaño oscuro |
| Textura | muy corto | corto |
| Piel | oliva media ⚠ igual | oliva media |
| Ojos | marrón muy oscuro | marrón cálido |

Silueta de Héctor, para no repetirla: gran escudo defensivo hacia un lateral + cuerpo colocado entre ciudad y exterior.

Pose de Héctor, para no repetirla: protege y contiene, no avanza ni ataca.

Ejes numéricos que ya los separan: protagonismo de fondo 2 contra 8, angulosidad facial 8 contra 4, masa corporal 9 contra 7, apertura corporal 4 contra 6.

**Atención: 8 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Contra Tyr.**

| | Ares | Tyr |
|---|---|---|
| Cabello | negro | rubio oscuro |
| Textura | muy corto | corto |
| Piel | oliva media | clara rosada |
| Ojos | marrón muy oscuro | azul gris |

Silueta de Tyr, para no repetirla: asimetría clara de brazos sin detalle gráfico + cinta de Fenrir formando una curva externa.

Pose de Tyr, para no repetirla: postura firme y voluntaria junto al lobo; no ataque ni herida explícita.

Ejes numéricos que ya los separan: masa corporal 9 contra 6, dependencia del identificador 6 contra 9, anchura de hombros 9 contra 6, protagonismo de fondo 2 contra 5.

**Atención: 8 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

Criterio de la ficha: Atenea, Pentesilea, Agamenón, Héctor y Tyr. Separar por masa y apertura corporal, guardia frontal con ambas manos ocupadas y composición concentrada en el bloque corporal, sin gesto estratégico, mando de flota o contexto protector.

**Separadores documentados:** Preparación textual contrastada con las fichas individuales y la matriz; no acredita una imagen futura. Contra Atenea: silueta de Ares de masa y hombros 9/10 frente a 5/10, bloque superior ancho y base de guardia cerrada; pose frontal con peso equilibrado y ambas manos ocupadas, frente a tres cuartos, un pie adelantado y mano libre que indica estrategia; composición de Ares concentrada en el bloque corporal y los contornos laterales de lanza y escudo, frente al aire dirigido por el escudo diagonal y la mano de Atenea. Compartir casco, armadura y escudo no cuenta como separación. Contra Pentesilea: masa y hombros de Ares 9/10 frente a 7/10; apertura corporal 4/10 frente a 7/10, con bloque cerrado de guardia frente a base más abierta; pose frontal equilibrada frente a perfil tres cuartos y mirada fuera de cuadro; composición compacta de Ares frente al escudo lateral y la base amplia de Pentesilea. La diferencia no depende del sexo, el color ni el equipamiento. Contra Agamenón: apertura corporal de Ares 4/10 frente a 7/10 y bloque cerrado frente a capa y gesto extendido del comandante; Ares tiene las dos manos ocupadas en guardia, mientras Agamenón dirige una flota con la mano libre; composición sin recorrido de mando ni flota, frente al aire hacia la mano que dirige y la flota subordinada. No copiar el cetro ni la capa de comandante. Contra Héctor: masa y hombros de Ares 9/10 frente a 7/10; Ares mantiene eje frontal equilibrado, frente al eje hacia atrás de protección y el escudo que cierra el paso; composición sin organizar una barrera entre ciudad y exterior, frente a la relación cuerpo-escudo-murallas de Héctor. No usar la ausencia de escudo como separador: ambos lo llevan. Contra Tyr: masa y hombros de Ares 9/10 frente a 6/10 y bloque bilateral frente a la asimetría corporal de Tyr; Ares mira en guardia frontal y conserva ambas manos ocupadas, frente al giro lateral hacia Fenrir; composición de una figura con aire lateral para lanza y escudo frente al espacio relacional Tyr-Fenrir y la curva de la cinta. La selección incluye colisiones de equipamiento, los dos candidatos de menor distancia numérica (Pentesilea y Agamenón) y el par de Espejo (Tyr); la distancia numérica no aprueba la separación por sí sola. En una futura imagen, comprobar por separado mancha negra, pose, composición y recorte de rostro-casco-armadura. Resultado visual: NO VERIFICADO.

La diferencia no puede depender sólo del color, del fondo, del objeto sostenido, del peinado ni de una prenda. Matriz §4.1: el objeto no salva un clon.

## 8. Encuadre

Vertical 3:4. Figura al 70–80% del alto del cuadro. Zona limpia detrás de la cabeza o del foco principal.

Avatar circular, como restricción invisible: Casco y armadura superior + rostro intenso; el casco no oculta los ojos ni la expresión. No se dibuja ningún círculo, medallón, marco, inset ni retrato secundario.

## 9. Registro

Cálido, despierto, concentrado. No hace falta que sonría. Sin amenaza, sin crueldad, sin solemnidad genérica repetida de otra carta. La emoción sale de la historia del personaje y de lo que está haciendo.

**Controles de acabado documentados:** Fuente vigente: Documentacion/estilo_visual_aprobado.md, §§1–3, 6–9. Aplicación a Ares: volumen pulido de animación 3D, piel sin poros ni vello detallado, telas en pliegues amplios sin trama fotográfica, metal de reflejos amplios sin moteado ni microarañazos, pelo muy corto en masas sólidas sin hebras individuales. No cambiar los materiales o colores autorizados; no introducir un acabado dorado común. Cejas actuadas y concentración accesible, sin ira, crueldad ni gravedad de estatua. Masa y hombros altos según §4, sin convertirlos en anatomía fotográfica. La reseña textual del agente en Produccion/resultados_lote_2026-09-28/ares/revision.md registró microtextura y hebras finas en los intentos anteriores; se usa como antecedente de fallo, no como referencia visual ni canon. No se inspeccionó ninguna imagen en esta revisión. El don declarado es coraje guerrero, no fuego ni emisión luminosa: aplicar la excepción de estilo §7 cuando no existe un fenómeno trazable, con actividad de guardia y relación física con el entorno; no inventar aura, halo, runas o chispas de combate. Comprobación futura: formato 3:4, un sujeto, inventario completo de casco-armadura-lanza-escudo y vestimenta funcional vigente, manos y contornos legibles, márgenes completos, avatar sin círculo visible, doce controles del estilo y catorce controles posteriores de la skill. Preparación documental especificada. Apariencia, proporciones, texturas, cantidad efectiva de objetos y recorte: NO VERIFICADO hasta generar e inspeccionar con autorización; antes de esa generación se deberá leer completo el historial de fallas.

## 10. Contaminación a evitar

Investigación textual acotada completada el 2026-09-28; no se abrieron imágenes. [PlayStation, God of War: Ascension — Introducing Ares, son of Zeus](https://blog.playstation.com/archive/2012/11/09/god-of-war-ascension-introducing-ares-son-of-zeus/) describe guerreros vinculados a Ares con fuerza ofensiva, magia de fuego y un martillo de guerra con ataques de fuego. [DC, Ares](https://www.dc.com/characters/ares) lo caracteriza por destrucción, manipulación de mortales y conflicto con Wonder Woman. Controles derivados para esta orden: mantener la lanza aprobada, sin sustituirla por martillo, maza o armas de esas franquicias; no importar fuego, furia, poderes, rostro, armadura, emblemas ni composición de sus versiones; expresión concentrada y accesible, sin ataque ni amenaza. Las fuentes identifican riesgos de franquicia y de contenido; no autorizan objetos nuevos ni aportan una descripción visual verificada. La búsqueda no es exhaustiva. Cero contaminación en una imagen futura: NO VERIFICADO hasta su inspección.

Nada de Marvel, Disney, DC, anime conocido ni videojuegos, sea o no de esta lista.

## 11. Antes de generar

Mostrar cinco líneas y esperar OK: qué se ve, cuál es el detalle reconocible, el inventario con su fuente, contra quién se separa y con qué diferencia concreta, y de dónde sale el escenario.

Después de generar, declarar cuatro cosas: qué objetos quedaron en la imagen que no estaban en el inventario; **qué elementos exigidos de la §5 no aparecieron y por qué, qué condiciones no se cumplieron y qué alternativas se usaron**; qué campos de esta orden no se cumplieron; y los once puntos del gate de `estilo_visual_aprobado.md` §9, que ahora son doce.

El segundo control es tan importante como el primero y es el que faltaba hasta el 2026-09-14: una imagen puede cumplir el inventario cerrado al pie de la letra y seguir siendo una carta fallada por no mostrar nada de lo que hace reconocible al personaje.
