# Orden de producción — Andrómeda

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
| Familia de encuadre | figura humana | ADN |
| Edad y contextura | Adulta joven; esbelta. | ADN |
| Rostro y cabello | Rostro oval suave y cabello largo movido por viento marino. | ADN |
| Cabello, color | negro | decisión de diseño visual, sin atestación localizada; revisable por la investigación |
| Cabello, textura | crespo largo | decisión de diseño visual, sin atestación localizada; revisable por la investigación |
| Piel | castaña oscura | decisión de diseño visual, sin atestación localizada; revisable por la investigación |
| Ojos | marrón muy oscuro | decisión de diseño visual, sin atestación localizada; revisable por la investigación |

## 2. Detalle reconocible

**Cadenas + roca.**

Dones declarados en `personajes.json`: Valentía frente a lo desconocido; Su historia quedó escrita entre las estrellas.

Ícono de la carta en la colección: `estrella_cadena`. Dependencia del identificador en la matriz: 8 de 10.

## 3. Acción y pose

Tensión contenida sobre la roca; mirada activa, no terror.

Dirección corporal: Tres cuartos orientada hacia arriba/lateral.

Es la acción de la ficha y no se cambia. Si la acción no se puede representar sin agregar un objeto que no está en el inventario de la §5, frenar y avisar.

**Y al revés, que es el caso que falló tres veces:** si un objeto exigido de la §5 no entra en la pose tal como está descripta, **el objeto no se descarta**. Se ajusta la pose lo mínimo para que entre, conservando la dirección corporal y la diagonal. Una silueta de carrera con los dos puños cerrados no deja mano para un bastón, y la salida no es correr sin el bastón: es que una mano lo lleve. Declarar el ajuste en el preflight. Una pista condicional sólo se exige si se cumple su condición; las alternativas con «o» se conservan como alternativas, sin exigir todas a la vez.

## 4. Silueta y composición

- **Firma de silueta:** Cadenas visibles rompiendo el contorno lateral + cuerpo erguido sobre roca, sin postura de víctima aterrada.
- **Composición:** Mar y peligro muy subordinados; aire alrededor de cadenas y cabeza para no encerrar la figura.
- **Densidad visual:** media (matriz: 5 de 10).

- **Cuerpo, y esto manda sobre cualquier intuición:** joven, delgado y liviano, sin masa muscular marcada, hombros estrechos, de escala humana.

La contextura sale de acá y no de lo que el personaje representa. Un dios no es corpulento por ser dios, ni un héroe es musculoso por ser héroe: si estos valores piden un cuerpo liviano, va un cuerpo liviano. **Sin abdominales marcados, sin deltoides separados, sin bíceps de gimnasio y sin espalda en V** salvo que la masa y los hombros de arriba lo pidan expresamente.

Los quince ejes completos, como límites de diseño y no como sugerencia (EV edad visual, MC masa corporal, EA escala aparente, AF angulosidad facial, CO contorno superior, AC apertura corporal, DP dinamismo de pose, VD verticalidad, DV densidad visual, OV oscuridad, DI dependencia del identificador, AN anchura de hombros, PF protagonismo de fondo, RM rigidez de materiales, RA rareza anatómica):

| EV | MC | EA | AF | CO | AC | DP | VD | DV | OV | DI | AN | PF | RM | RA |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 4 | 3 | 6 | 3 | 9 | 4 | 2 | 7 | 5 | 5 | 8 | 3 | 9 | 2 | 1 |

Prueba de silueta: reducida a mancha negra, tiene que seguir distinguiéndose de los personajes de la §7.

## 5. Inventario cerrado

Lo único que puede verse:

1. **Cadenas + roca** — identificador principal. ADN.
2. **Pistas secundarias autorizadas:** constelación y monstruo marino sólo como pista pequeña y no terrorífica. ADN. Subordinadas al identificador. Respetar las condiciones y alternativas del texto: «si hace falta» y «cuando corresponda» no exigen presencia incondicional; «o» no exige ambas opciones.
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

Protagonismo de fondo asignado: 9 de 10, o sea que el contexto es esencial para leer la carta.

**Sin** pedestal de roca ni acantilado heroico, **sin** templo griego de decoración, **sin** Olimpo, **sin** cielo azul con nubes por defecto, **sin** arquitectura de fantasía, **sin** paisaje panorámico que compita en nitidez. Quince de las treinta y una imágenes anteriores tenían el pedestal y once el templo.

El fondo va con profundidad de campo real: menos nitidez y menos contraste que el personaje. Es el recurso principal para cumplir la jerarquía personaje → identificador → contexto.

## 7. Separación obligatoria

**Preparación textual anti-clonación: DOCUMENTADA.** Tres o más riesgos justificados y separadores de silueta, pose y composición; la prueba visual de silueta, pose y avatar sigue pendiente.

**Contra Helena.**

| | Andrómeda | Helena |
|---|---|---|
| Cabello | negro | castaño claro dorado |
| Textura | crespo largo | ondas pesadas |
| Piel | castaña oscura | clara dorada |
| Ojos | marrón muy oscuro | gris |

Silueta de Helena, para no repetirla: telas amplias y verticales + postura casi inmóvil; sin depender de accesorios de belleza.

Pose de Helena, para no repetirla: quietud contemplativa con mirada lejana; atmósfera de consecuencia, no romance.

Ejes numéricos que ya los separan: dependencia del identificador 8 contra 3, contorno superior 9 contra 7, verticalidad 7 contra 9, protagonismo de fondo 9 contra 7.

**Atención: 10 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** mujeres jóvenes de postura contenida.
**Filtro numérico:** distancia ponderada 1.218; misma morfología y lectura; riesgo numérico bajo. No sustituye la comparación textual.

- **Separador de silueta:** Andrómeda: cadenas visibles rompiendo el contorno lateral + cuerpo erguido sobre roca, sin postura de víctima aterrada. Cuerpo: adulta joven; esbelta. Frente a Helena: telas amplias y verticales + postura casi inmóvil; sin depender de accesorios de belleza. Cuerpo: adulta joven-madura; alta y esbelta. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Andrómeda: tensión contenida sobre la roca; mirada activa, no terror. Frente a Helena: quietud contemplativa con mirada lejana; atmósfera de consecuencia, no romance. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Andrómeda: mar y peligro muy subordinados; aire alrededor de cadenas y cabeza para no encerrar la figura. Frente a Helena: velas o arquitectura de Troya muy subordinadas; mucho aire alrededor de una figura austera. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo andromeda, comparación Helena; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Psique.**

| | Andrómeda | Psique |
|---|---|---|
| Cabello | negro | castaño oscuro |
| Textura | crespo largo | ondulado marcado |
| Piel | castaña oscura | oliva clara |
| Ojos | marrón muy oscuro | marrón cálido |

Silueta de Psique, para no repetirla: mariposa o motivo de mariposa cerca del hombro + postura de avance cauteloso.

Pose de Psique, para no repetirla: avanza entre pruebas con cautela y perseverancia.

Ejes numéricos que ya los separan: contorno superior 9 contra 6, oscuridad 5 contra 2, dinamismo de pose 2 contra 4, protagonismo de fondo 9 contra 7.

**Atención: 11 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** mujeres ligeras de lectura aérea; par de riesgo alto.
**Filtro numérico:** distancia ponderada 0.888; misma morfología y lectura; riesgo numérico alto. No sustituye la comparación textual.

- **Separador de silueta:** Andrómeda: cadenas visibles rompiendo el contorno lateral + cuerpo erguido sobre roca, sin postura de víctima aterrada. Cuerpo: adulta joven; esbelta. Frente a Psique: mariposa o motivo de mariposa cerca del hombro + postura de avance cauteloso. Cuerpo: adulta joven; delgada. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Andrómeda: tensión contenida sobre la roca; mirada activa, no terror. Frente a Psique: avanza entre pruebas con cautela y perseverancia. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Andrómeda: mar y peligro muy subordinados; aire alrededor de cadenas y cabeza para no encerrar la figura. Frente a Psique: dejar aire en la dirección de avance; pruebas se sugieren de forma abstracta y no saturan el fondo. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo andromeda, comparación Psique; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Calipso.**

| | Andrómeda | Calipso |
|---|---|---|
| Cabello | negro | castaño medio |
| Textura | crespo largo | largo suelto ondulado por humedad |
| Piel | castaña oscura | canela |
| Ojos | marrón muy oscuro | marrón cálido |

Silueta de Calipso, para no repetirla: figura aislada + telas largas verticales + vegetación insular lateral; sin objeto mágico inventado.

Pose de Calipso, para no repetirla: contemplación inmóvil desde la isla.

Ejes numéricos que ya los separan: dependencia del identificador 8 contra 2, edad visual 4 contra 7, densidad visual 5 contra 3, oscuridad 5 contra 3.

**Atención: 11 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** mujer de contorno largo en ambiente marino.
**Filtro numérico:** distancia ponderada 1.184; misma morfología y lectura; riesgo numérico bajo. No sustituye la comparación textual.

- **Separador de silueta:** Andrómeda: cadenas visibles rompiendo el contorno lateral + cuerpo erguido sobre roca, sin postura de víctima aterrada. Cuerpo: adulta joven; esbelta. Frente a Calipso: figura aislada + telas largas verticales + vegetación insular lateral; sin objeto mágico inventado. Cuerpo: adulta madura; contextura media. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Andrómeda: tensión contenida sobre la roca; mirada activa, no terror. Frente a Calipso: contemplación inmóvil desde la isla. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Andrómeda: mar y peligro muy subordinados; aire alrededor de cadenas y cabeza para no encerrar la figura. Frente a Calipso: mucho espacio negativo de mar; vegetación insular sólo rompe un lateral. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo andromeda, comparación Calipso; contrastes derivados del ADN y la matriz, sin nuevo diseño.

Criterio de la ficha: Helena. Diferenciar por tensión física, cadenas y contexto celeste-marino, no quietud austera.

La diferencia no puede depender sólo del color, del fondo, del objeto sostenido, del peinado ni de una prenda. Matriz §4.1: el objeto no salva un clon.

## 8. Encuadre

Vertical 3:4. Figura al 70–80% del alto del cuadro. Zona limpia detrás de la cabeza o del foco principal.

Avatar circular, como restricción invisible: Rostro + fragmento de cadena + estrellas. No se dibuja ningún círculo, medallón, marco, inset ni retrato secundario.

## 9. Registro

Cálido, despierto, concentrado. No hace falta que sonría. Sin amenaza, sin crueldad, sin solemnidad genérica repetida de otra carta. La emoción sale de la historia del personaje y de lo que está haciendo.

## 10. Contaminación a evitar

**Pendiente de la investigación** del lote correspondiente de `Documentacion/prompt_investigacion_85.md`, campo `contaminacion_pop`. No bloquea la generación, pero dejarlo vacío es aceptar el riesgo a ciegas: la contaminación de cultura pop fue la falla más frecuente de la tanda anterior y la más difícil de ver desde adentro.

Nada de Marvel, Disney, DC, anime conocido ni videojuegos, sea o no de esta lista.

## 11. Antes de generar

Mostrar cinco líneas y esperar OK: qué se ve, cuál es el detalle reconocible, el inventario con su fuente, contra quién se separa y con qué diferencia concreta, y de dónde sale el escenario.

Después de generar, declarar cuatro cosas: qué objetos quedaron en la imagen que no estaban en el inventario; **qué elementos exigidos de la §5 no aparecieron y por qué, qué condiciones no se cumplieron y qué alternativas se usaron**; qué campos de esta orden no se cumplieron; y los once puntos del gate de `estilo_visual_aprobado.md` §9, que ahora son doce.

El segundo control es tan importante como el primero y es el que faltaba hasta el 2026-09-14: una imagen puede cumplir el inventario cerrado al pie de la letra y seguir siendo una carta fallada por no mostrar nada de lo que hace reconocible al personaje.
