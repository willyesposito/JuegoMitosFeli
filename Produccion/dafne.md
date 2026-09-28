# Orden de producción — Dafne

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
| Tier | normal | `personajes.json` |
| Familia de encuadre | figura humana con transformación | ADN |
| Edad y contextura | Adulta joven; delgada. | ADN |
| Rostro y cabello | Rostro oval; cabello largo que empieza a mezclarse visualmente con hojas. | ADN |
| Cabello, color | castaño claro | ya declarado en el ADN, precisado sin contradecirlo |
| Cabello, textura | largo mezclándose con hojas | ya declarado en el ADN, precisado sin contradecirlo |
| Piel | clara dorada | ya declarado en el ADN, precisado sin contradecirlo |
| Ojos | verde oliva | ya declarado en el ADN, precisado sin contradecirlo |

## 2. Detalle reconocible

**Transformación en laurel.**

Dones declarados en `personajes.json`: Ninfa veloz; Se transformó en el primer árbol de laurel.

Ícono de la carta en la colección: `hojas_laurel`. Dependencia del identificador en la matriz: 2 de 10.

## 3. Acción y pose

El cuerpo crece y se transforma, en vez de huir.

Dirección corporal: Diagonal ascendente.

Es la acción de la ficha y no se cambia. Si la acción no se puede representar sin agregar un objeto que no está en el inventario de la §5, frenar y avisar.

**Y al revés, que es el caso que falló tres veces:** si un objeto exigido de la §5 no entra en la pose tal como está descripta, **el objeto no se descarta**. Se ajusta la pose lo mínimo para que entre, conservando la dirección corporal y la diagonal. Una silueta de carrera con los dos puños cerrados no deja mano para un bastón, y la salida no es correr sin el bastón: es que una mano lo lleve. Declarar el ajuste en el preflight. Una pista condicional sólo se exige si se cumple su condición; las alternativas con «o» se conservan como alternativas, sin exigir todas a la vez.

## 4. Silueta y composición

- **Firma de silueta:** Brazos convertidos en ramas + pies/parte baja en raíces, con transición clara y no terrorífica.
- **Composición:** Río/bosque simple; ramas deben abrirse hacia aire limpio y raíces quedar completas en la imagen maestra.
- **Densidad visual:** media-alta (matriz: 8 de 10).

- **Cuerpo, y esto manda sobre cualquier intuición:** joven, delgado y liviano, sin masa muscular marcada, hombros estrechos, de escala humana.

La contextura sale de acá y no de lo que el personaje representa. Un dios no es corpulento por ser dios, ni un héroe es musculoso por ser héroe: si estos valores piden un cuerpo liviano, va un cuerpo liviano. **Sin abdominales marcados, sin deltoides separados, sin bíceps de gimnasio y sin espalda en V** salvo que la masa y los hombros de arriba lo pidan expresamente.

Los quince ejes completos, como límites de diseño y no como sugerencia (EV edad visual, MC masa corporal, EA escala aparente, AF angulosidad facial, CO contorno superior, AC apertura corporal, DP dinamismo de pose, VD verticalidad, DV densidad visual, OV oscuridad, DI dependencia del identificador, AN anchura de hombros, PF protagonismo de fondo, RM rigidez de materiales, RA rareza anatómica):

| EV | MC | EA | AF | CO | AC | DP | VD | DV | OV | DI | AN | PF | RM | RA |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 4 | 3 | 6 | 3 | 9 | 7 | 6 | 9 | 8 | 3 | 2 | 3 | 6 | 2 | 7 |

Prueba de silueta: reducida a mancha negra, tiene que seguir distinguiéndose de los personajes de la §7.

## 5. Inventario cerrado

Lo único que puede verse:

1. **Transformación en laurel** — identificador principal. ADN.
2. **Pistas secundarias autorizadas:** hojas de laurel, raíces y ambiente de río/bosque. ADN. Subordinadas al identificador. Respetar las condiciones y alternativas del texto: «si hace falta» y «cuando corresponda» no exigen presencia incondicional; «o» no exige ambas opciones.
3. **Vestimenta lisa del vocabulario griego**, sin ornamento. Necesaria para vestir al personaje; sin autorización de ningún adorno concreto, va lisa.
4. **Resolución funcional de vestimenta y calzado:** `Documentacion/adn_visual_personajes_v1.md`, sección «Regla común de vestimenta funcional y calzado — lote del 2026-09-28». Decisión de diseño de Willy aprobada el 2026-09-28; no es una atestación histórica.
   - **Vestimenta funcional:** Vestimenta base lisa sólo donde conserve cuerpo humano.
   - **Calzado:** No corresponde: raíces visibles en la parte baja, sin zapatos ni pies humanos agregados.
   - **Alcance:** Conservar prendas y armaduras expresamente autorizadas; la base lisa sólo completa las partes que requieren vestimenta funcional, sin reemplazar ni tapar la firma de silueta. No imponer un color común: conservar los colores autorizados. Cierres funcionales discretos, sin broches, emblemas, joyas ni adornos nuevos.

Nada más. En particular, y porque ya pasó en la tanda anterior: **sin** broche, **sin** medallón, **sin** insignia, **sin** emblema, **sin** remaches decorativos, **sin** joyas, **sin** flores en el pelo, **sin** tatuajes, **sin** cuernos, **sin** alas que la ficha no pida, **sin** animal acompañante que no esté arriba, **sin** efecto mágico decorativo agregado por fuera del identificador, **sin** runas, **sin** pseudo-texto, **sin** calzado con decisión no trazada.

**Inventario por exceso y por omisión.** Lo que no figura no entra. Mostrar los elementos exigidos por el ADN, aplicar las pistas condicionales sólo cuando se cumpla su condición y conservar las alternativas como tales. El identificador principal manda, las pistas acompañan y nada tapa la cara ni el identificador. En el preflight, declarar qué condiciones se cumplen y qué alternativa se usa, sin agregar decisiones ajenas a la fuente.

**La magia es obligatoria y sale del identificador.** El detalle reconocible de la §2 no se muestra apoyado y quieto: se muestra funcionando, el entorno reacciona, y el don produce su fenómeno visible. Estela, chispas, partículas, luz propia que ilumina de verdad, deformación del aire, materia que responde: todo eso está autorizado y va sin timidez. Esto no agrega ningún objeto al inventario de arriba, porque lo que se enciende es lo que el personaje ya tiene.

Las tres capas y las cuatro reglas están en `estilo_visual_aprobado.md` §7, que gobierna. En resumen: el efecto nace del don y se puede señalar de dónde salió; no tapa la cara ni el identificador; el color sale del don o del material y nunca es el dorado por default; y el fenómeno es propio de este personaje y no el mismo de las otras 84. Queda afuera el aura que envuelve el cuerpo y disuelve la silueta, el halo detrás de la cabeza, las runas o pseudo-texto flotando, y cualquier efecto que no se pueda trazar al don. Si el identificador no da para un fenómeno, la carta va con el objeto en actividad y el entorno reaccionando, y no se inventa uno.

## 6. Escenario

Sale de la acción de la §3 y de las pistas autorizadas de la §5, en ese orden. El fondo se diseña después del personaje, nunca antes.

Protagonismo de fondo asignado: 6 de 10, o sea que el contexto acompaña sin llevar peso.

**Sin** pedestal de roca ni acantilado heroico, **sin** templo griego de decoración, **sin** Olimpo, **sin** cielo azul con nubes por defecto, **sin** arquitectura de fantasía, **sin** paisaje panorámico que compita en nitidez. Quince de las treinta y una imágenes anteriores tenían el pedestal y once el templo.

El fondo va con profundidad de campo real: menos nitidez y menos contraste que el personaje. Es el recurso principal para cumplir la jerarquía personaje → identificador → contexto.

## 7. Separación obligatoria

**Preparación textual anti-clonación: DOCUMENTADA.** Tres o más riesgos justificados y separadores de silueta, pose y composición; la prueba visual de silueta, pose y avatar sigue pendiente.

**Contra Deméter.**

| | Dafne | Deméter |
|---|---|---|
| Cabello | castaño claro | castaño ceniza con canas |
| Textura | largo mezclándose con hojas | recogido bajo |
| Piel | clara dorada | dorada media |
| Ojos | verde oliva | avellana |

Silueta de Deméter, para no repetirla: espigas/cosecha formando una masa lateral + falda o túnica amplia cerca del suelo.

Pose de Deméter, para no repetirla: manos activas trabajando con plantas o semillas.

Ejes numéricos que ya los separan: contorno superior 9 contra 2, rareza anatómica 7 contra 1, verticalidad 9 contra 5, dependencia del identificador 2 contra 6.

**Por qué se controla este par:** figura femenina asociada a vegetación.
**Filtro numérico:** distancia ponderada 2.749; morfología o lectura distinta: control semántico/compositivo, no colisión anatómica. No sustituye la comparación textual.

- **Separador de silueta:** Dafne: brazos convertidos en ramas + pies/parte baja en raíces, con transición clara y no terrorífica. Cuerpo: adulta joven; delgada. Frente a Deméter: espigas/cosecha formando una masa lateral + falda o túnica amplia cerca del suelo. Cuerpo: adulta madura; cuerpo fuerte de trabajo sin musculatura heroica. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Dafne: el cuerpo crece y se transforma, en vez de huir. Frente a Deméter: manos activas trabajando con plantas o semillas. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Dafne: río/bosque simple; ramas deben abrirse hacia aire limpio y raíces quedar completas en la imagen maestra. Frente a Deméter: crecimiento controlado alrededor de la figura, con una masa vegetal lateral y espacio limpio en el lado opuesto. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo dafne, comparación Deméter; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Aracne.**

| | Dafne | Aracne |
|---|---|---|
| Cabello | castaño claro | castaño oscuro |
| Textura | largo mezclándose con hojas | recogido alto |
| Piel | clara dorada | oliva clara |
| Ojos | verde oliva | gris |

Silueta de Aracne, para no repetirla: telar diagonal + hilos saliendo del marco corporal + pequeña araña/patrón radial rompiendo el contorno.

Pose de Aracne, para no repetirla: trabaja con precisión, con manos separadas en tareas distintas.

Ejes numéricos que ya los separan: contorno superior 9 contra 1, dependencia del identificador 2 contra 8, angulosidad facial 3 contra 7, verticalidad 9 contra 5.

**Por qué se controla este par:** transformación femenina visible.
**Filtro numérico:** distancia ponderada 2.402; misma morfología y lectura; riesgo numérico bajo. No sustituye la comparación textual.

- **Separador de silueta:** Dafne: brazos convertidos en ramas + pies/parte baja en raíces, con transición clara y no terrorífica. Cuerpo: adulta joven; delgada. Frente a Aracne: telar diagonal + hilos saliendo del marco corporal + pequeña araña/patrón radial rompiendo el contorno. Cuerpo: adulta joven; contextura pequeña. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Dafne: el cuerpo crece y se transforma, en vez de huir. Frente a Aracne: trabaja con precisión, con manos separadas en tareas distintas. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Dafne: río/bosque simple; ramas deben abrirse hacia aire limpio y raíces quedar completas en la imagen maestra. Frente a Aracne: hilos crean geometría radial sin tapar rostro; telar ocupa una diagonal y deja un área limpia opuesta. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo dafne, comparación Aracne; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Medusa.**

| | Dafne | Medusa |
|---|---|---|
| Cabello | castaño claro | serpientes en lugar de cabello |
| Textura | largo mezclándose con hojas | volúmenes y direcciones diferenciadas |
| Piel | clara dorada | oliva media |
| Ojos | verde oliva | ámbar |

Silueta de Medusa, para no repetirla: cabello de serpientes como firma total, con cabezas orientadas en direcciones variadas para evitar casco simétrico.

Pose de Medusa, para no repetirla: quietud controlada; nunca amenaza dirigida a cámara.

Ejes numéricos que ya los separan: angulosidad facial 3 contra 8, dinamismo de pose 6 contra 2, oscuridad 3 contra 7, edad visual 4 contra 7.

**Por qué se controla este par:** figura femenina transformada de contorno orgánico.
**Filtro numérico:** distancia ponderada 1.961; misma morfología y lectura; riesgo numérico bajo. No sustituye la comparación textual.

- **Separador de silueta:** Dafne: brazos convertidos en ramas + pies/parte baja en raíces, con transición clara y no terrorífica. Cuerpo: adulta joven; delgada. Frente a Medusa: cabello de serpientes como firma total, con cabezas orientadas en direcciones variadas para evitar casco simétrico. Cuerpo: adulta madura; contextura media. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Dafne: el cuerpo crece y se transforma, en vez de huir. Frente a Medusa: quietud controlada; nunca amenaza dirigida a cámara. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Dafne: río/bosque simple; ramas deben abrirse hacia aire limpio y raíces quedar completas en la imagen maestra. Frente a Medusa: piedras en fondo como pista y aire alrededor de las serpientes para que cada masa se lea; cero horror. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo dafne, comparación Medusa; contrastes derivados del ADN y la matriz, sin nuevo diseño.

Criterio de la ficha: Deméter. Diferenciar por transformación corporal y silueta de ramas, no agricultura.

La diferencia no puede depender sólo del color, del fondo, del objeto sostenido, del peinado ni de una prenda. Matriz §4.1: el objeto no salva un clon.

## 8. Encuadre

Vertical 3:4. Figura al 70–80% del alto del cuadro. Zona limpia detrás de la cabeza o del foco principal.

Avatar circular, como restricción invisible: Rostro + hojas de laurel naciendo junto al cabello. No se dibuja ningún círculo, medallón, marco, inset ni retrato secundario.

## 9. Registro

Cálido, despierto, concentrado. No hace falta que sonría. Sin amenaza, sin crueldad, sin solemnidad genérica repetida de otra carta. La emoción sale de la historia del personaje y de lo que está haciendo.

## 10. Contaminación a evitar

**Pendiente de la investigación** del lote correspondiente de `Documentacion/prompt_investigacion_85.md`, campo `contaminacion_pop`. No bloquea la generación, pero dejarlo vacío es aceptar el riesgo a ciegas: la contaminación de cultura pop fue la falla más frecuente de la tanda anterior y la más difícil de ver desde adentro.

Nada de Marvel, Disney, DC, anime conocido ni videojuegos, sea o no de esta lista.

## 11. Antes de generar

Mostrar cinco líneas y esperar OK: qué se ve, cuál es el detalle reconocible, el inventario con su fuente, contra quién se separa y con qué diferencia concreta, y de dónde sale el escenario.

Después de generar, declarar cuatro cosas: qué objetos quedaron en la imagen que no estaban en el inventario; **qué elementos exigidos de la §5 no aparecieron y por qué, qué condiciones no se cumplieron y qué alternativas se usaron**; qué campos de esta orden no se cumplieron; y los once puntos del gate de `estilo_visual_aprobado.md` §9, que ahora son doce.

El segundo control es tan importante como el primero y es el que faltaba hasta el 2026-09-14: una imagen puede cumplir el inventario cerrado al pie de la letra y seguir siendo una carta fallada por no mostrar nada de lo que hace reconocible al personaje.
