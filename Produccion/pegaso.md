# Orden de producción — Pegaso

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
| Familia de encuadre | criatura | ADN |
| Edad y contextura | Caballo adulto de proporciones elegantes y atléticas. | ADN |
| Rostro y cabello | No aplica geometría humana; cabeza equina limpia, crin legible y alas grandes de plumas diferenciadas. | ADN |
| Cabello, piel y ojos | no aplica: la identidad es anatómica, ver ADN | ADN |

**No humano.** Pelo, piel y ojos no se aplican. La geometría de la ficha manda y no se le agregan rasgos humanos que el repo no autorice.

## 2. Detalle reconocible

**Caballo alado.**

Dones declarados en `personajes.json`: Caballo alado; Vuela más alto que cualquier ave.

Ícono de la carta en la colección: `pegaso`. Dependencia del identificador en la matriz: 1 de 10.

## 3. Acción y pose

Vuelo o elevación controlada, no picada heroica.

Dirección corporal: Diagonal ascendente suave.

Es la acción de la ficha y no se cambia. Si la acción no se puede representar sin agregar un objeto que no está en el inventario de la §5, frenar y avisar.

**Y al revés, que es el caso que falló tres veces:** si un objeto exigido de la §5 no entra en la pose tal como está descripta, **el objeto no se descarta**. Se ajusta la pose lo mínimo para que entre, conservando la dirección corporal y la diagonal. Una silueta de carrera con los dos puños cerrados no deja mano para un bastón, y la salida no es correr sin el bastón: es que una mano lo lleve. Declarar el ajuste en el preflight. Una pista condicional sólo se exige si se cumple su condición; las alternativas con «o» se conservan como alternativas, sin exigir todas a la vez.

## 4. Silueta y composición

- **Firma de silueta:** Dos alas abiertas en alturas diferentes + cuello arqueado + patas recogidas o una apoyada según escena.
- **Composición:** Cuerpo completo cuando la escala lo permita; aire entre alas y borde del cuadro para no perder la firma.
- **Densidad visual:** alta (matriz: 8 de 10).

- **Cuerpo, y esto manda sobre cualquier intuición:** de edad media, de contextura media, atlética sin volumen, hombros de ancho medio, de escala algo mayor que humana.

La contextura sale de acá y no de lo que el personaje representa. Un dios no es corpulento por ser dios, ni un héroe es musculoso por ser héroe: si estos valores piden un cuerpo liviano, va un cuerpo liviano. **Sin abdominales marcados, sin deltoides separados, sin bíceps de gimnasio y sin espalda en V** salvo que la masa y los hombros de arriba lo pidan expresamente.

Los quince ejes completos, como límites de diseño y no como sugerencia (EV edad visual, MC masa corporal, EA escala aparente, AF angulosidad facial, CO contorno superior, AC apertura corporal, DP dinamismo de pose, VD verticalidad, DV densidad visual, OV oscuridad, DI dependencia del identificador, AN anchura de hombros, PF protagonismo de fondo, RM rigidez de materiales, RA rareza anatómica):

| EV | MC | EA | AF | CO | AC | DP | VD | DV | OV | DI | AN | PF | RM | RA |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 5 | 6 | 7 | 3 | 7 | 8 | 8 | 8 | 8 | 2 | 1 | 6 | 4 | 2 | 8 |

Prueba de silueta: reducida a mancha negra, tiene que seguir distinguiéndose de los personajes de la §7.

## 5. Inventario cerrado

Lo único que puede verse:

1. **Caballo alado** — identificador principal. ADN.
2. **Pistas secundarias autorizadas:** fuente de inspiración como pista baja. ADN. Subordinadas al identificador. Respetar las condiciones y alternativas del texto: «si hace falta» y «cuando corresponda» no exigen presencia incondicional; «o» no exige ambas opciones.
3. **Resolución funcional de vestimenta y calzado:** `Documentacion/adn_visual_personajes_v1.md`, sección «Regla común de vestimenta funcional y calzado — lote del 2026-09-28». Decisión de diseño de Willy aprobada el 2026-09-28; no es una atestación histórica.
   - **Calzado:** No corresponde: conservar la anatomía de criatura autorizada, sin ropa ni calzado humano.

Nada más. En particular, y porque ya pasó en la tanda anterior: **sin** broche, **sin** medallón, **sin** insignia, **sin** emblema, **sin** remaches decorativos, **sin** joyas, **sin** flores en el pelo, **sin** tatuajes, **sin** cuernos, **sin** alas que la ficha no pida, **sin** animal acompañante que no esté arriba, **sin** efecto mágico decorativo agregado por fuera del identificador, **sin** runas, **sin** pseudo-texto, **sin** calzado con decisión no trazada.

**Inventario por exceso y por omisión.** Lo que no figura no entra. Mostrar los elementos exigidos por el ADN, aplicar las pistas condicionales sólo cuando se cumpla su condición y conservar las alternativas como tales. El identificador principal manda, las pistas acompañan y nada tapa la cara ni el identificador. En el preflight, declarar qué condiciones se cumplen y qué alternativa se usa, sin agregar decisiones ajenas a la fuente.

**La magia es obligatoria y sale del identificador.** El detalle reconocible de la §2 no se muestra apoyado y quieto: se muestra funcionando, el entorno reacciona, y el don produce su fenómeno visible. Estela, chispas, partículas, luz propia que ilumina de verdad, deformación del aire, materia que responde: todo eso está autorizado y va sin timidez. Esto no agrega ningún objeto al inventario de arriba, porque lo que se enciende es lo que el personaje ya tiene.

Las tres capas y las cuatro reglas están en `estilo_visual_aprobado.md` §7, que gobierna. En resumen: el efecto nace del don y se puede señalar de dónde salió; no tapa la cara ni el identificador; el color sale del don o del material y nunca es el dorado por default; y el fenómeno es propio de este personaje y no el mismo de las otras 84. Queda afuera el aura que envuelve el cuerpo y disuelve la silueta, el halo detrás de la cabeza, las runas o pseudo-texto flotando, y cualquier efecto que no se pueda trazar al don. Si el identificador no da para un fenómeno, la carta va con el objeto en actividad y el entorno reaccionando, y no se inventa uno.

## 6. Escenario

Sale de la acción de la §3 y de las pistas autorizadas de la §5, en ese orden. El fondo se diseña después del personaje, nunca antes.

Protagonismo de fondo asignado: 4 de 10, o sea que el fondo es prescindible: mínimo suficiente y nada más.

**Sin** pedestal de roca ni acantilado heroico, **sin** templo griego de decoración, **sin** Olimpo, **sin** cielo azul con nubes por defecto, **sin** arquitectura de fantasía, **sin** paisaje panorámico que compita en nitidez. Quince de las treinta y una imágenes anteriores tenían el pedestal y once el templo.

El fondo va con profundidad de campo real: menos nitidez y menos contraste que el personaje. Es el recurso principal para cumplir la jerarquía personaje → identificador → contexto.

## 7. Separación obligatoria

**Preparación textual anti-clonación: DOCUMENTADA.** Tres o más riesgos justificados y separadores de silueta, pose y composición; la prueba visual de silueta, pose y avatar sigue pendiente.

**Contra Belerofonte.**

Silueta de Belerofonte, para no repetirla: jinete + alas de Pegaso creando contorno horizontal ancho dentro del 3:4 + brida de oro visible cerca de la mano.

Pose de Belerofonte, para no repetirla: montado en vuelo, no vuelo corporal propio.

Ejes numéricos que ya los separan: dependencia del identificador 1 contra 10, contorno superior 7 contra 3, rigidez de materiales 2 contra 6, protagonismo de fondo 4 contra 7.

**Atención: 10 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** misma anatomía equina alada; riesgo de agregar jinete.
**Filtro numérico:** distancia ponderada 1.642; morfología o lectura distinta: control semántico/compositivo, no colisión anatómica. No sustituye la comparación textual.

- **Separador de silueta:** Pegaso: dos alas abiertas en alturas diferentes + cuello arqueado + patas recogidas o una apoyada según escena. Cuerpo: caballo adulto de proporciones elegantes y atléticas. Frente a Belerofonte: jinete + alas de Pegaso creando contorno horizontal ancho dentro del 3:4 + brida de oro visible cerca de la mano. Cuerpo: adulto joven; atlético ligero. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Pegaso: vuelo o elevación controlada, no picada heroica. Frente a Belerofonte: montado en vuelo, no vuelo corporal propio. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Pegaso: cuerpo completo cuando la escala lo permita; aire entre alas y borde del cuadro para no perder la firma. Frente a Belerofonte: Belerofonte y Pegaso deben leerse como una unidad; reservar ancho para alas sin cortar la zona segura del avatar. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo pegaso, comparación Belerofonte; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Fénix.**

Silueta de Fénix, para no repetirla: alas en arco desigual + cola amplia cuyas plumas se fragmentan visualmente en fuego/ceniza.

Pose de Fénix, para no repetirla: renace o se eleva desde ceniza; no vuelo horizontal.

Ejes numéricos que ya los separan: angulosidad facial 3 contra 6, contorno superior 7 contra 10, verticalidad 8 contra 10.

**Atención: 12 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** alas y elevación de criatura.
**Filtro numérico:** distancia ponderada 0.972; misma morfología y lectura; riesgo numérico medio. No sustituye la comparación textual.

- **Separador de silueta:** Pegaso: dos alas abiertas en alturas diferentes + cuello arqueado + patas recogidas o una apoyada según escena. Cuerpo: caballo adulto de proporciones elegantes y atléticas. Frente a Fénix: alas en arco desigual + cola amplia cuyas plumas se fragmentan visualmente en fuego/ceniza. Cuerpo: ave adulta grande, de alas largas, cabeza relativamente pequeña y cola amplia. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Pegaso: vuelo o elevación controlada, no picada heroica. Frente a Fénix: renace o se eleva desde ceniza; no vuelo horizontal. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Pegaso: cuerpo completo cuando la escala lo permita; aire entre alas y borde del cuadro para no perder la firma. Frente a Fénix: base de ceniza abajo y gran aire superior para la trayectoria ascendente; fuego sin convertir la escena en amenaza. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo pegaso, comparación Fénix; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Nike.**

Silueta de Nike, para no repetirla: alas grandes en V asimétrica + cuerpo inclinado hacia adelante, con contorno de velocidad.

Pose de Nike, para no repetirla: movimiento de llegada; manos libres o gesto de coronación sin texto.

Ejes numéricos que ya los separan: masa corporal 6 contra 4, angulosidad facial 3 contra 5, anchura de hombros 6 contra 4.

**Atención: 12 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** alas abiertas y diagonal ascendente.
**Filtro numérico:** distancia ponderada 1.184; morfología o lectura distinta: control semántico/compositivo, no colisión anatómica. No sustituye la comparación textual.

- **Separador de silueta:** Pegaso: dos alas abiertas en alturas diferentes + cuello arqueado + patas recogidas o una apoyada según escena. Cuerpo: caballo adulto de proporciones elegantes y atléticas. Frente a Nike: alas grandes en V asimétrica + cuerpo inclinado hacia adelante, con contorno de velocidad. Cuerpo: adulta joven; atlética ligera. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Pegaso: vuelo o elevación controlada, no picada heroica. Frente a Nike: movimiento de llegada; manos libres o gesto de coronación sin texto. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Pegaso: cuerpo completo cuando la escala lo permita; aire entre alas y borde del cuadro para no perder la firma. Frente a Nike: nacimiento de ambas alas debe quedar limpio en la zona alta y conservar aire hacia la trayectoria. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo pegaso, comparación Nike; contrastes derivados del ADN y la matriz, sin nuevo diseño.

Criterio de la ficha: Belerofonte. El avatar y la imagen individual no deben incluir jinete.

La diferencia no puede depender sólo del color, del fondo, del objeto sostenido, del peinado ni de una prenda. Matriz §4.1: el objeto no salva un clon.

## 8. Encuadre

Vertical 3:4. Figura al 70–80% del alto del cuadro. Zona limpia detrás de la cabeza o del foco principal.

Avatar circular, como restricción invisible: Cabeza de caballo + nacimiento de un ala. No se dibuja ningún círculo, medallón, marco, inset ni retrato secundario.

## 9. Registro

Cálido, despierto, concentrado. No hace falta que sonría. Sin amenaza, sin crueldad, sin solemnidad genérica repetida de otra carta. La emoción sale de la historia del personaje y de lo que está haciendo.

## 10. Contaminación a evitar

El Pegaso de *Hércules* (Disney, 1997), con cara de cachorro.

Nada de Marvel, Disney, DC, anime conocido ni videojuegos, sea o no de esta lista.

## 11. Antes de generar

Mostrar cinco líneas y esperar OK: qué se ve, cuál es el detalle reconocible, el inventario con su fuente, contra quién se separa y con qué diferencia concreta, y de dónde sale el escenario.

Después de generar, declarar cuatro cosas: qué objetos quedaron en la imagen que no estaban en el inventario; **qué elementos exigidos de la §5 no aparecieron y por qué, qué condiciones no se cumplieron y qué alternativas se usaron**; qué campos de esta orden no se cumplieron; y los once puntos del gate de `estilo_visual_aprobado.md` §9, que ahora son doce.

El segundo control es tan importante como el primero y es el que faltaba hasta el 2026-09-14: una imagen puede cumplir el inventario cerrado al pie de la letra y seguir siendo una carta fallada por no mostrar nada de lo que hace reconocible al personaje.
