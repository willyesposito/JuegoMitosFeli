# Orden de producción — Orfeo

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
| Edad y contextura | Adulto joven; delgado. | ADN |
| Rostro y cabello | Rostro oval suave y cabello medio ondulado. | ADN |
| Cabello, color | castaño muy oscuro | ya declarado en el ADN, precisado sin contradecirlo |
| Cabello, textura | ondulado marcado | ya declarado en el ADN, precisado sin contradecirlo |
| Piel | oliva clara | ya declarado en el ADN, precisado sin contradecirlo |
| Ojos | avellana | ya declarado en el ADN, precisado sin contradecirlo |

## 2. Detalle reconocible

**Lira y efecto de la música.**

Dones declarados en `personajes.json`: Su música encantaba a personas, animales, piedras y hasta a los dioses.

Ícono de la carta en la colección: `lira`. Dependencia del identificador en la matriz: 9 de 10.

## 3. Acción y pose

Sentado o apoyado tocando la lira.

Dirección corporal: Lateral o tres cuartos bajo, sin verticalidad heroica.

Es la acción de la ficha y no se cambia. Si la acción no se puede representar sin agregar un objeto que no está en el inventario de la §5, frenar y avisar.

**Y al revés, que es el caso que falló tres veces:** si un objeto exigido de la §5 no entra en la pose tal como está descripta, **el objeto no se descarta**. Se ajusta la pose lo mínimo para que entre, conservando la dirección corporal y la diagonal. Una silueta de carrera con los dos puños cerrados no deja mano para un bastón, y la salida no es correr sin el bastón: es que una mano lo lleve. Declarar el ajuste en el preflight. Una pista condicional sólo se exige si se cumple su condición; las alternativas con «o» se conservan como alternativas, sin exigir todas a la vez.

## 4. Silueta y composición

- **Firma de silueta:** Lira amplia cruzada en diagonal baja + hombros relajados + manos finas activas.
- **Composición:** Pequeños elementos del entorno pueden orientarse hacia la música; mantener aire íntimo alrededor de la figura.
- **Densidad visual:** baja-media (matriz: 4 de 10).

- **Cuerpo, y esto manda sobre cualquier intuición:** joven, delgado y liviano, sin masa muscular marcada, hombros estrechos, de escala humana.

La contextura sale de acá y no de lo que el personaje representa. Un dios no es corpulento por ser dios, ni un héroe es musculoso por ser héroe: si estos valores piden un cuerpo liviano, va un cuerpo liviano. **Sin abdominales marcados, sin deltoides separados, sin bíceps de gimnasio y sin espalda en V** salvo que la masa y los hombros de arriba lo pidan expresamente.

Los quince ejes completos, como límites de diseño y no como sugerencia (EV edad visual, MC masa corporal, EA escala aparente, AF angulosidad facial, CO contorno superior, AC apertura corporal, DP dinamismo de pose, VD verticalidad, DV densidad visual, OV oscuridad, DI dependencia del identificador, AN anchura de hombros, PF protagonismo de fondo, RM rigidez de materiales, RA rareza anatómica):

| EV | MC | EA | AF | CO | AC | DP | VD | DV | OV | DI | AN | PF | RM | RA |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 4 | 3 | 5 | 2 | 6 | 4 | 2 | 4 | 4 | 4 | 9 | 3 | 6 | 2 | 1 |

Prueba de silueta: reducida a mancha negra, tiene que seguir distinguiéndose de los personajes de la §7.

## 5. Inventario cerrado

Lo único que puede verse:

1. **Lira y efecto de la música** — identificador principal. ADN.
2. **Pistas secundarias autorizadas:** reacción sutil del entorno a la música. ADN. Subordinadas al identificador. Respetar las condiciones y alternativas del texto: «si hace falta» y «cuando corresponda» no exigen presencia incondicional; «o» no exige ambas opciones.
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

Protagonismo de fondo asignado: 6 de 10, o sea que el contexto acompaña sin llevar peso.

**Sin** pedestal de roca ni acantilado heroico, **sin** templo griego de decoración, **sin** Olimpo, **sin** cielo azul con nubes por defecto, **sin** arquitectura de fantasía, **sin** paisaje panorámico que compita en nitidez. Quince de las treinta y una imágenes anteriores tenían el pedestal y once el templo.

El fondo va con profundidad de campo real: menos nitidez y menos contraste que el personaje. Es el recurso principal para cumplir la jerarquía personaje → identificador → contexto.

## 7. Separación obligatoria

**Preparación textual anti-clonación: DOCUMENTADA.** Tres o más riesgos justificados y separadores de silueta, pose y composición; la prueba visual de silueta, pose y avatar sigue pendiente.

**Contra Apolo.**

| | Orfeo | Apolo |
|---|---|---|
| Cabello | castaño muy oscuro | rubio oscuro |
| Textura | ondulado marcado | ondulado suave |
| Piel | oliva clara | clara dorada |
| Ojos | avellana | ámbar |

Silueta de Apolo, para no repetirla: lira separada del torso + línea corporal muy vertical y ligera.

Pose de Apolo, para no repetirla: tocando o afinando la lira; gesto artístico, no pose heroica.

Ejes numéricos que ya los separan: verticalidad 4 contra 8, angulosidad facial 2 contra 5, escala aparente 5 contra 7, oscuridad 4 contra 2.

**Atención: 10 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** músicos jóvenes con lira.
**Filtro numérico:** distancia ponderada 1.385; misma morfología y lectura; riesgo numérico bajo. No sustituye la comparación textual.

- **Separador de silueta:** Orfeo: lira amplia cruzada en diagonal baja + hombros relajados + manos finas activas. Cuerpo: adulto joven; delgado. Frente a Apolo: lira separada del torso + línea corporal muy vertical y ligera. Cuerpo: adulto joven; alto y esbelto. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Orfeo: sentado o apoyado tocando la lira. Frente a Apolo: tocando o afinando la lira; gesto artístico, no pose heroica. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Orfeo: pequeños elementos del entorno pueden orientarse hacia la música; mantener aire íntimo alrededor de la figura. Frente a Apolo: luz solar lateral y aire alrededor de la curva de la lira; evitar halo automático. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo orfeo, comparación Apolo; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Dioniso.**

| | Orfeo | Dioniso |
|---|---|---|
| Cabello | castaño muy oscuro | negro |
| Textura | ondulado marcado | largo rizado suelto |
| Piel | oliva clara | oliva media |
| Ojos | avellana | marrón cálido |

Silueta de Dioniso, para no repetirla: racimos/vides y tela teatral creando contorno orgánico + postura abierta de anfitrión.

Pose de Dioniso, para no repetirla: una mano invita y otra sostiene máscara teatral o elemento de escena; celebración sin alcohol protagonista.

Ejes numéricos que ya los separan: apertura corporal 4 contra 9, densidad visual 4 contra 8, contorno superior 6 contra 9, dependencia del identificador 9 contra 6.

**Atención: 9 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** figuras artísticas con respuesta del entorno.
**Filtro numérico:** distancia ponderada 1.547; misma morfología y lectura; riesgo numérico bajo. No sustituye la comparación textual.

- **Separador de silueta:** Orfeo: lira amplia cruzada en diagonal baja + hombros relajados + manos finas activas. Cuerpo: adulto joven; delgado. Frente a Dioniso: racimos/vides y tela teatral creando contorno orgánico + postura abierta de anfitrión. Cuerpo: adulto joven-maduro; contextura media. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Orfeo: sentado o apoyado tocando la lira. Frente a Dioniso: una mano invita y otra sostiene máscara teatral o elemento de escena; celebración sin alcohol protagonista. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Orfeo: pequeños elementos del entorno pueden orientarse hacia la música; mantener aire íntimo alrededor de la figura. Frente a Dioniso: formas orgánicas rodean sin cerrar el cuerpo; reservar aire para el gesto de invitación. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo orfeo, comparación Dioniso; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Narciso.**

| | Orfeo | Narciso |
|---|---|---|
| Cabello | castaño muy oscuro | castaño oscuro |
| Textura | ondulado marcado | ondulado suave |
| Piel | oliva clara | clara dorada |
| Ojos | avellana | verde oliva |

Silueta de Narciso, para no repetirla: cuerpo inclinado sobre agua + reflejo creando una segunda forma invertida + flor pequeña cerca del borde.

Pose de Narciso, para no repetirla: agachado mirando el reflejo.

Ejes numéricos que ya los separan: contorno superior 6 contra 4, apertura corporal 4 contra 2, verticalidad 4 contra 2, oscuridad 4 contra 2.

**Atención: 10 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** varones jóvenes livianos y de baja acción; riesgo alto con EV actualizado.
**Filtro numérico:** distancia ponderada 0.872; misma morfología y lectura; riesgo numérico alto. No sustituye la comparación textual.

- **Separador de silueta:** Orfeo: lira amplia cruzada en diagonal baja + hombros relajados + manos finas activas. Cuerpo: adulto joven; delgado. Frente a Narciso: cuerpo inclinado sobre agua + reflejo creando una segunda forma invertida + flor pequeña cerca del borde. Cuerpo: adulto joven; delgado. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Orfeo: sentado o apoyado tocando la lira. Frente a Narciso: agachado mirando el reflejo. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Orfeo: pequeños elementos del entorno pueden orientarse hacia la música; mantener aire íntimo alrededor de la figura. Frente a Narciso: composición vertical duplicada por el agua; reservar superficie limpia para que el reflejo sea legible. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo orfeo, comparación Narciso; contrastes derivados del ADN y la matriz, sin nuevo diseño.

Criterio de la ficha: Apolo y Dioniso. Diferenciar por pose íntima, cuerpo menos idealizado y ambiente emocional antes que solar o social.

La diferencia no puede depender sólo del color, del fondo, del objeto sostenido, del peinado ni de una prenda. Matriz §4.1: el objeto no salva un clon.

## 8. Encuadre

Vertical 3:4. Figura al 70–80% del alto del cuadro. Zona limpia detrás de la cabeza o del foco principal.

Avatar circular, como restricción invisible: Rostro + extremo superior de la lira. No se dibuja ningún círculo, medallón, marco, inset ni retrato secundario.

## 9. Registro

Cálido, despierto, concentrado. No hace falta que sonría. Sin amenaza, sin crueldad, sin solemnidad genérica repetida de otra carta. La emoción sale de la historia del personaje y de lo que está haciendo.

## 10. Contaminación a evitar

**Pendiente de la investigación** del lote correspondiente de `Documentacion/prompt_investigacion_85.md`, campo `contaminacion_pop`. No bloquea la generación, pero dejarlo vacío es aceptar el riesgo a ciegas: la contaminación de cultura pop fue la falla más frecuente de la tanda anterior y la más difícil de ver desde adentro.

Nada de Marvel, Disney, DC, anime conocido ni videojuegos, sea o no de esta lista.

## 11. Antes de generar

Mostrar cinco líneas y esperar OK: qué se ve, cuál es el detalle reconocible, el inventario con su fuente, contra quién se separa y con qué diferencia concreta, y de dónde sale el escenario.

Después de generar, declarar cuatro cosas: qué objetos quedaron en la imagen que no estaban en el inventario; **qué elementos exigidos de la §5 no aparecieron y por qué, qué condiciones no se cumplieron y qué alternativas se usaron**; qué campos de esta orden no se cumplieron; y los once puntos del gate de `estilo_visual_aprobado.md` §9, que ahora son doce.

El segundo control es tan importante como el primero y es el que faltaba hasta el 2026-09-14: una imagen puede cumplir el inventario cerrado al pie de la letra y seguir siendo una carta fallada por no mostrar nada de lo que hace reconocible al personaje.
