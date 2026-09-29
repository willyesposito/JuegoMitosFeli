# Orden de producción — Héctor

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
| Edad y contextura | Adulto maduro; atlético fuerte pero no enorme. | ADN |
| Rostro y cabello | Rostro ancho amable-serio, cabello corto y barba mínima. | ADN |
| Cabello, color | castaño oscuro | ya declarado en el ADN, precisado sin contradecirlo |
| Cabello, textura | corto | ya declarado en el ADN, precisado sin contradecirlo |
| Piel | oliva media | ya declarado en el ADN, precisado sin contradecirlo |
| Ojos | marrón cálido | ya declarado en el ADN, precisado sin contradecirlo |

## 2. Detalle reconocible

**Escudo como forma defensiva + rol de defensor de la ciudad.**

Dones declarados en `personajes.json`: El gran defensor de Troya; Peleaba por su familia y su ciudad.

Ícono de la carta en la colección: `lanza`. Dependencia del identificador en la matriz: 7 de 10.

## 3. Acción y pose

Protege y contiene, no avanza ni ataca.

Dirección corporal: Perfil tres cuartos con eje ligeramente hacia atrás/protección.

Es la acción de la ficha y no se cambia. Si la acción no se puede representar sin agregar un objeto que no está en el inventario de la §5, frenar y avisar.

**Y al revés, que es el caso que falló tres veces:** si un objeto exigido de la §5 no entra en la pose tal como está descripta, **el objeto no se descarta**. Se ajusta la pose lo mínimo para que entre, conservando la dirección corporal y la diagonal. Una silueta de carrera con los dos puños cerrados no deja mano para un bastón, y la salida no es correr sin el bastón: es que una mano lo lleve. Declarar el ajuste en el preflight. Una pista condicional sólo se exige si se cumple su condición; las alternativas con «o» se conservan como alternativas, sin exigir todas a la vez.

## 4. Silueta y composición

- **Firma de silueta:** Gran escudo defensivo hacia un lateral + cuerpo colocado entre ciudad y exterior.
- **Composición:** Murallas de Troya subordinadas detrás; el escudo ocupa un lateral y el cuerpo cierra visualmente el paso.
- **Densidad visual:** alta (matriz: 7 de 10).

- **Cuerpo, y esto manda sobre cualquier intuición:** de edad media, corpulento, con masa evidente, hombros anchos, de escala algo mayor que humana.

La contextura sale de acá y no de lo que el personaje representa. Un dios no es corpulento por ser dios, ni un héroe es musculoso por ser héroe: si estos valores piden un cuerpo liviano, va un cuerpo liviano. **Sin abdominales marcados, sin deltoides separados, sin bíceps de gimnasio y sin espalda en V** salvo que la masa y los hombros de arriba lo pidan expresamente.

Los quince ejes completos, como límites de diseño y no como sugerencia (EV edad visual, MC masa corporal, EA escala aparente, AF angulosidad facial, CO contorno superior, AC apertura corporal, DP dinamismo de pose, VD verticalidad, DV densidad visual, OV oscuridad, DI dependencia del identificador, AN anchura de hombros, PF protagonismo de fondo, RM rigidez de materiales, RA rareza anatómica):

| EV | MC | EA | AF | CO | AC | DP | VD | DV | OV | DI | AN | PF | RM | RA |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 6 | 7 | 7 | 4 | 2 | 6 | 3 | 6 | 7 | 5 | 7 | 7 | 8 | 8 | 1 |

Prueba de silueta: reducida a mancha negra, tiene que seguir distinguiéndose de los personajes de la §7.

## 5. Inventario cerrado

Lo único que puede verse:

1. **Escudo como forma defensiva + rol de defensor de la ciudad** — identificador principal. ADN.
2. **Pistas secundarias autorizadas:** murallas de Troya y contexto familiar/protector cuando ya esté definido. ADN. Subordinadas al identificador. Respetar las condiciones y alternativas del texto: «si hace falta» y «cuando corresponda» no exigen presencia incondicional; «o» no exige ambas opciones.
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

Protagonismo de fondo asignado: 8 de 10, o sea que el contexto es esencial para leer la carta.

**Sin** pedestal de roca ni acantilado heroico, **sin** templo griego de decoración, **sin** Olimpo, **sin** cielo azul con nubes por defecto, **sin** arquitectura de fantasía, **sin** paisaje panorámico que compita en nitidez. Quince de las treinta y una imágenes anteriores tenían el pedestal y once el templo.

El fondo va con profundidad de campo real: menos nitidez y menos contraste que el personaje. Es el recurso principal para cumplir la jerarquía personaje → identificador → contexto.

## 7. Separación obligatoria

**Preparación textual anti-clonación: DOCUMENTADA.** Tres o más riesgos justificados y separadores de silueta, pose y composición; la prueba visual de silueta, pose y avatar sigue pendiente.

**Contra Aquiles.**

| | Héctor | Aquiles |
|---|---|---|
| Cabello | castaño oscuro | rubio miel |
| Textura | corto | ondulado suave |
| Piel | oliva media | clara dorada |
| Ojos | marrón cálido | gris |

Silueta de Aquiles, para no repetirla: escudo grande desplazado + piernas largas + torso inclinado hacia adelante, con sensación de velocidad incluso quieto.

Pose de Aquiles, para no repetirla: pausa tensa como a punto de moverse; evitar combate directo.

Ejes numéricos que ya los separan: contorno superior 2 contra 6, dinamismo de pose 3 contra 7, protagonismo de fondo 8 contra 4, angulosidad facial 4 contra 7.

**Atención: 10 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** guerreros con escudo.
**Filtro numérico:** distancia ponderada 1.257; misma morfología y lectura; riesgo numérico bajo. No sustituye la comparación textual.

- **Separador de silueta:** Héctor: gran escudo defensivo hacia un lateral + cuerpo colocado entre ciudad y exterior. Cuerpo: adulto maduro; atlético fuerte pero no enorme. Frente a Aquiles: escudo grande desplazado + piernas largas + torso inclinado hacia adelante, con sensación de velocidad incluso quieto. Cuerpo: adulto joven; musculatura definida pero más estilizada que Heracles. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Héctor: protege y contiene, no avanza ni ataca. Frente a Aquiles: pausa tensa como a punto de moverse; evitar combate directo. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Héctor: murallas de Troya subordinadas detrás; el escudo ocupa un lateral y el cuerpo cierra visualmente el paso. Frente a Aquiles: mantener visible el talón en la imagen completa sin convertirlo en único foco; aire delante del eje corporal para sostener la sensación de impulso. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo hector, comparación Aquiles; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Ares.**

| | Héctor | Ares |
|---|---|---|
| Cabello | castaño oscuro | negro |
| Textura | corto | muy corto |
| Piel | oliva media ⚠ igual | oliva media |
| Ojos | marrón cálido | marrón muy oscuro |

Silueta de Ares, para no repetirla: casco liso y armadura voluminosa + postura de guardia cuadrada + lanza baja en reposo lateral + escudo separado del torso.

Pose de Ares, para no repetirla: guardia estática y tensa; una mano sostiene la lanza baja en reposo lateral y la otra sostiene el escudo. Sin gesto de ataque ni lanza dirigida hacia cámara.

Ejes numéricos que ya los separan: protagonismo de fondo 8 contra 2, angulosidad facial 4 contra 8, masa corporal 7 contra 9, apertura corporal 6 contra 4.

**Atención: 8 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** guardia de guerrero antiguo.
**Filtro numérico:** distancia ponderada 1.609; misma morfología y lectura; riesgo numérico bajo. No sustituye la comparación textual.

- **Separador de silueta:** Héctor: gran escudo defensivo hacia un lateral + cuerpo colocado entre ciudad y exterior. Cuerpo: adulto maduro; atlético fuerte pero no enorme. Frente a Ares: casco liso y armadura voluminosa + postura de guardia cuadrada + lanza baja en reposo lateral + escudo separado del torso. Cuerpo: adulto maduro; musculoso compacto. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Héctor: protege y contiene, no avanza ni ataca. Frente a Ares: guardia estática y tensa; una mano sostiene la lanza baja en reposo lateral y la otra sostiene el escudo. Sin gesto de ataque ni lanza dirigida hacia cámara. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Héctor: murallas de Troya subordinadas detrás; el escudo ocupa un lateral y el cuerpo cierra visualmente el paso. Frente a Ares: fondo mínimo para que mande la masa corporal; lanza y escudo separados del torso y entre sí para conservar sus contornos. Mantener el rostro legible bajo el casco y evitar que el escudo lo tape. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo hector, comparación Ares; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Heracles.**

| | Héctor | Heracles |
|---|---|---|
| Cabello | castaño oscuro ⚠ igual | castaño oscuro |
| Textura | corto | rizado abierto corto |
| Piel | oliva media | canela |
| Ojos | marrón cálido | ámbar |

Silueta de Heracles, para no repetirla: espalda muy ancha + piel del león de Nemea rompiendo el contorno de hombros + brazos separados del torso.

Pose de Heracles, para no repetirla: cargando o desplazando peso en vez de posar; gesto laborioso más que guerrero perfecto.

Ejes numéricos que ya los separan: contorno superior 2 contra 7, dinamismo de pose 3 contra 8, protagonismo de fondo 8 contra 3, rigidez de materiales 8 contra 4.

**Por qué se controla este par:** volumen y brazos de héroe.
**Filtro numérico:** distancia ponderada 2.263; misma morfología y lectura; riesgo numérico bajo. No sustituye la comparación textual.

- **Separador de silueta:** Héctor: gran escudo defensivo hacia un lateral + cuerpo colocado entre ciudad y exterior. Cuerpo: adulto maduro; atlético fuerte pero no enorme. Frente a Heracles: espalda muy ancha + piel del león de Nemea rompiendo el contorno de hombros + brazos separados del torso. Cuerpo: adulto joven-maduro; el cuerpo humano más macizo del roster, cuello ancho y centro de gravedad bajo. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Héctor: protege y contiene, no avanza ni ataca. Frente a Heracles: cargando o desplazando peso en vez de posar; gesto laborioso más que guerrero perfecto. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Héctor: murallas de Troya subordinadas detrás; el escudo ocupa un lateral y el cuerpo cierra visualmente el paso. Frente a Heracles: masa corporal dominante, con brazos separados para que la silueta respire y la piel del león se lea sin collage de trabajos. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo hector, comparación Heracles; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Eneas.**

| | Héctor | Eneas |
|---|---|---|
| Cabello | castaño oscuro | castaño muy oscuro |
| Textura | corto ⚠ igual | corto |
| Piel | oliva media | canela |
| Ojos | marrón cálido | gris oscuro |

Silueta de Eneas, para no repetirla: equipo de tradición de Edad del Bronce + escudo antiguo + cuerpo inclinado hacia adelante como viajero.

Pose de Eneas, para no repetirla: camina o avanza como viajero fundador, no combate.

Ejes numéricos que ya los separan: angulosidad facial 4 contra 7, dinamismo de pose 3 contra 6, dependencia del identificador 7 contra 5.

**Atención: 12 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** adultos fuertes de equipo antiguo; par de riesgo alto.
**Filtro numérico:** distancia ponderada 0.844; misma morfología y lectura; riesgo numérico alto. No sustituye la comparación textual.

- **Separador de silueta:** Héctor: gran escudo defensivo hacia un lateral + cuerpo colocado entre ciudad y exterior. Cuerpo: adulto maduro; atlético fuerte pero no enorme. Frente a Eneas: equipo de tradición de Edad del Bronce + escudo antiguo + cuerpo inclinado hacia adelante como viajero. Cuerpo: adulto maduro; atlético de viaje. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Héctor: protege y contiene, no avanza ni ataca. Frente a Eneas: camina o avanza como viajero fundador, no combate. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Héctor: murallas de Troya subordinadas detrás; el escudo ocupa un lateral y el cuerpo cierra visualmente el paso. Frente a Eneas: costa/barco subordinados y aire delante del recorrido; evitar coraza segmentada o estética legionaria imperial. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo hector, comparación Eneas; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Agamenón.**

| | Héctor | Agamenón |
|---|---|---|
| Cabello | castaño oscuro | rubio |
| Textura | corto ⚠ igual | corto |
| Piel | oliva media | oliva clara |
| Ojos | marrón cálido | avellana |

Silueta de Agamenón, para no repetirla: cetro vertical + capa pesada + pecho ancho, con composición de comandante.

Pose de Agamenón, para no repetirla: cetro bajo y mano extendida hacia una flota; liderazgo antes que combate.

Ejes numéricos que ya los separan: angulosidad facial 4 contra 8, verticalidad 6 contra 8.

**Atención: 13 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** líderes maduros con equipo rígido; par de riesgo alto.
**Filtro numérico:** distancia ponderada 0.866; misma morfología y lectura; riesgo numérico alto. No sustituye la comparación textual.

- **Separador de silueta:** Héctor: gran escudo defensivo hacia un lateral + cuerpo colocado entre ciudad y exterior. Cuerpo: adulto maduro; atlético fuerte pero no enorme. Frente a Agamenón: cetro vertical + capa pesada + pecho ancho, con composición de comandante. Cuerpo: adulto maduro; robusto. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Héctor: protege y contiene, no avanza ni ataca. Frente a Agamenón: cetro bajo y mano extendida hacia una flota; liderazgo antes que combate. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Héctor: murallas de Troya subordinadas detrás; el escudo ocupa un lateral y el cuerpo cierra visualmente el paso. Frente a Agamenón: flota en segundo plano y aire hacia la mano que dirige; evitar que el cetro quede al pecho como plantilla. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo hector, comparación Agamenón; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Orión.**

| | Héctor | Orión |
|---|---|---|
| Cabello | castaño oscuro | negro |
| Textura | corto | corto áspero |
| Piel | oliva media | castaña media |
| Ojos | marrón cálido | gris |

Silueta de Orión, para no repetirla: cuerpo largo de cazador + cinturón de tres puntos luminosos separado visualmente del torso + herramienta de caza en reposo si hace falta.

Pose de Orión, para no repetirla: mira el cielo en dirección opuesta al escorpión; no caza activamente.

Ejes numéricos que ya los separan: rigidez de materiales 8 contra 5, escala aparente 7 contra 9, angulosidad facial 4 contra 6.

**Atención: 12 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** adultos altos y fuertes; par de riesgo alto.
**Filtro numérico:** distancia ponderada 0.866; misma morfología y lectura; riesgo numérico alto. No sustituye la comparación textual.

- **Separador de silueta:** Héctor: gran escudo defensivo hacia un lateral + cuerpo colocado entre ciudad y exterior. Cuerpo: adulto maduro; atlético fuerte pero no enorme. Frente a Orión: cuerpo largo de cazador + cinturón de tres puntos luminosos separado visualmente del torso + herramienta de caza en reposo si hace falta. Cuerpo: adulto maduro; muy alto y atlético. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Héctor: protege y contiene, no avanza ni ataca. Frente a Orión: mira el cielo en dirección opuesta al escorpión; no caza activamente. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Héctor: murallas de Troya subordinadas detrás; el escudo ocupa un lateral y el cuerpo cierra visualmente el paso. Frente a Orión: reservar cielo en la dirección de la mirada; las tres estrellas deben quedar legibles cerca de la parte alta del torso. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo hector, comparación Orión; contrastes derivados del ADN y la matriz, sin nuevo diseño.

Criterio de la ficha: Aquiles, Ares y Heracles. Diferenciar por eje protector hacia atrás, rostro menos agresivo y masa contenida.

La diferencia no puede depender sólo del color, del fondo, del objeto sostenido, del peinado ni de una prenda. Matriz §4.1: el objeto no salva un clon.

## 8. Encuadre

Vertical 3:4. Figura al 70–80% del alto del cuadro. Zona limpia detrás de la cabeza o del foco principal.

Avatar circular, como restricción invisible: Rostro + borde de escudo + muralla. No se dibuja ningún círculo, medallón, marco, inset ni retrato secundario.

## 9. Registro

Cálido, despierto, concentrado. No hace falta que sonría. Sin amenaza, sin crueldad, sin solemnidad genérica repetida de otra carta. La emoción sale de la historia del personaje y de lo que está haciendo.

## 10. Contaminación a evitar

**Investigación externa pendiente.** No se relevaron versiones modernas específicas para este personaje. Aplicar los controles disponibles del repo de [Documentacion/controles_contaminacion_pop_lote_2026-09-28.md](../Documentacion/controles_contaminacion_pop_lote_2026-09-28.md), junto con la identidad, acción, inventario y exclusiones de esta orden. Este pendiente no constituye por sí solo un bloqueo material ni certifica ausencia de contaminación. Las representaciones y sus rasgos concretos siguen sin investigar; no reemplazar ese faltante por asociaciones de memoria.

Nada de Marvel, Disney, DC, anime conocido ni videojuegos, sea o no de esta lista.

## 11. Antes de generar

Mostrar cinco líneas y esperar OK: qué se ve, cuál es el detalle reconocible, el inventario con su fuente, contra quién se separa y con qué diferencia concreta, y de dónde sale el escenario.

Después de generar, declarar cuatro cosas: qué objetos quedaron en la imagen que no estaban en el inventario; **qué elementos exigidos de la §5 no aparecieron y por qué, qué condiciones no se cumplieron y qué alternativas se usaron**; qué campos de esta orden no se cumplieron; y los once puntos del gate de `estilo_visual_aprobado.md` §9, que ahora son doce.

El segundo control es tan importante como el primero y es el que faltaba hasta el 2026-09-14: una imagen puede cumplir el inventario cerrado al pie de la letra y seguir siendo una carta fallada por no mostrar nada de lo que hace reconocible al personaje.
