# Orden de producción — Ratatosk

**Completitud mecánica: COMPLETA.** Campos obligatorios y referencias comprobados; vestimenta opcional con alternativa general cuando falta.
**Validación visual: PENDIENTE.** Compilar no acredita silueta, pose, composición, avatar ni colisión; tampoco aprueba identidad, inventario o separación.

**Imagen actual:** ninguna. La carta funciona igual, mostrando el nombre con el tratamiento de su mitología.

**Se lee junto con:** `Documentacion/estilo_visual_aprobado.md`. Nada más.

> Generada por `herramientas/generar-ordenes.py`. Para cambiarla, editar la fuente (el ADN, la matriz, `personajes.json` o `herramientas/identidad_visual.py`) y volver a generar. Editar este archivo a mano se pierde.

---

## 1. Identidad

| Campo | Valor | Origen |
|---|---|---|
| Mitología | nordica | `personajes.json` |
| Tier | normal | `personajes.json` |
| Familia de encuadre | criatura | ADN |
| Edad y contextura | Ardilla adulta pequeña, ágil, con cola desproporcionadamente grande y expresiva como recurso de diseño. | ADN |
| Rostro y cabello | No aplica geometría humana; anatomía natural estilizada, cabeza pequeña y cola de gran volumen. | ADN |
| Cabello, piel y ojos | no aplica: la identidad es anatómica, ver ADN | ADN |

**No humano.** Pelo, piel y ojos no se aplican. La geometría de la ficha manda y no se le agregan rasgos humanos que el repo no autorice.

## 2. Detalle reconocible

**Ardilla mensajera de Yggdrasil.**

Dones declarados en `personajes.json`: La ardilla mensajera de Yggdrasil; Sube y baja el árbol llevando mensajes (y chismes).

Ícono de la carta en la colección: `ardilla`. Dependencia del identificador en la matriz: 2 de 10.

## 3. Acción y pose

Trepa con cabeza girada como llevando un mensaje.

Dirección corporal: Ascendente vertical por el tronco.

Es la acción de la ficha y no se cambia. Si la acción no se puede representar sin agregar un objeto que no está en el inventario de la §5, frenar y avisar.

**Y al revés, que es el caso que falló tres veces:** si un objeto exigido de la §5 no entra en la pose tal como está descripta, **el objeto no se descarta**. Se ajusta la pose lo mínimo para que entre, conservando la dirección corporal y la diagonal. Una silueta de carrera con los dos puños cerrados no deja mano para un bastón, y la salida no es correr sin el bastón: es que una mano lo lleve. Declarar el ajuste en el preflight. Una pista condicional sólo se exige si se cumple su condición; las alternativas con «o» se conservan como alternativas, sin exigir todas a la vez.

## 4. Silueta y composición

- **Firma de silueta:** Cola en gran arco + cuerpo vertical trepando + rama de Yggdrasil cruzando diagonal.
- **Composición:** Rama/tronco forman diagonales de apoyo; aire alrededor de la cola para que su arco no se pierda.
- **Densidad visual:** media (matriz: 6 de 10).

- **Cuerpo, y esto manda sobre cualquier intuición:** joven, muy delgado, de contextura frágil, hombros estrechos, de escala menor que una persona común.

La contextura sale de acá y no de lo que el personaje representa. Un dios no es corpulento por ser dios, ni un héroe es musculoso por ser héroe: si estos valores piden un cuerpo liviano, va un cuerpo liviano. **Sin abdominales marcados, sin deltoides separados, sin bíceps de gimnasio y sin espalda en V** salvo que la masa y los hombros de arriba lo pidan expresamente.

Los quince ejes completos, como límites de diseño y no como sugerencia (EV edad visual, MC masa corporal, EA escala aparente, AF angulosidad facial, CO contorno superior, AC apertura corporal, DP dinamismo de pose, VD verticalidad, DV densidad visual, OV oscuridad, DI dependencia del identificador, AN anchura de hombros, PF protagonismo de fondo, RM rigidez de materiales, RA rareza anatómica):

| EV | MC | EA | AF | CO | AC | DP | VD | DV | OV | DI | AN | PF | RM | RA |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 3 | 1 | 2 | 2 | 10 | 8 | 9 | 9 | 6 | 2 | 2 | 1 | 7 | 1 | 8 |

Prueba de silueta: reducida a mancha negra, tiene que seguir distinguiéndose de los personajes de la §7.

## 5. Inventario cerrado

Lo único que puede verse:

1. **Ardilla mensajera de Yggdrasil** — identificador principal. ADN.
2. **Pistas secundarias autorizadas:** corteza/rama de Yggdrasil; águila/dragón sólo como pistas lejanas si aparecen. ADN. Subordinadas al identificador. Respetar las condiciones y alternativas del texto: «si hace falta» y «cuando corresponda» no exigen presencia incondicional; «o» no exige ambas opciones.
3. **Resolución funcional de vestimenta y calzado:** `Documentacion/adn_visual_personajes_v1.md`, sección «Regla común de vestimenta funcional y calzado — lote del 2026-09-28». Decisión de diseño de Willy aprobada el 2026-09-28; no es una atestación histórica.
   - **Calzado:** No corresponde: conservar la anatomía de criatura autorizada, sin ropa ni calzado humano.

Nada más. En particular, y porque ya pasó en la tanda anterior: **sin** broche, **sin** medallón, **sin** insignia, **sin** emblema, **sin** remaches decorativos, **sin** joyas, **sin** flores en el pelo, **sin** tatuajes, **sin** cuernos, **sin** alas que la ficha no pida, **sin** animal acompañante que no esté arriba, **sin** efecto mágico decorativo agregado por fuera del identificador, **sin** runas, **sin** pseudo-texto, **sin** calzado con decisión no trazada.

**Inventario por exceso y por omisión.** Lo que no figura no entra. Mostrar los elementos exigidos por el ADN, aplicar las pistas condicionales sólo cuando se cumpla su condición y conservar las alternativas como tales. El identificador principal manda, las pistas acompañan y nada tapa la cara ni el identificador. En el preflight, declarar qué condiciones se cumplen y qué alternativa se usa, sin agregar decisiones ajenas a la fuente.

**La magia es obligatoria y sale del identificador.** El detalle reconocible de la §2 no se muestra apoyado y quieto: se muestra funcionando, el entorno reacciona, y el don produce su fenómeno visible. Estela, chispas, partículas, luz propia que ilumina de verdad, deformación del aire, materia que responde: todo eso está autorizado y va sin timidez. Esto no agrega ningún objeto al inventario de arriba, porque lo que se enciende es lo que el personaje ya tiene.

Las tres capas y las cuatro reglas están en `estilo_visual_aprobado.md` §7, que gobierna. En resumen: el efecto nace del don y se puede señalar de dónde salió; no tapa la cara ni el identificador; el color sale del don o del material y nunca es el dorado por default; y el fenómeno es propio de este personaje y no el mismo de las otras 84. Queda afuera el aura que envuelve el cuerpo y disuelve la silueta, el halo detrás de la cabeza, las runas o pseudo-texto flotando, y cualquier efecto que no se pueda trazar al don. Si el identificador no da para un fenómeno, la carta va con el objeto en actividad y el entorno reaccionando, y no se inventa uno.

**Kit nórdico prohibido:** nudo celta, cuello o ribete de piel, broche redondo, medallón, botas envueltas con tiras, cinturón de hebilla decorada, trenzas con anillos de metal. Ese conjunto se repitió en seis cartas nórdicas y es la razón por la que parecen del mismo disfraz. Una mitología aporta vocabulario, no uniforme.

## 6. Escenario

Sale de la acción de la §3 y de las pistas autorizadas de la §5, en ese orden. El fondo se diseña después del personaje, nunca antes.

Protagonismo de fondo asignado: 7 de 10, o sea que el contexto acompaña sin llevar peso.

**Sin** pedestal de roca ni acantilado heroico, **sin** templo griego de decoración, **sin** Olimpo, **sin** cielo azul con nubes por defecto, **sin** arquitectura de fantasía, **sin** paisaje panorámico que compita en nitidez. Quince de las treinta y una imágenes anteriores tenían el pedestal y once el templo.

El fondo va con profundidad de campo real: menos nitidez y menos contraste que el personaje. Es el recurso principal para cumplir la jerarquía personaje → identificador → contexto.

## 7. Separación obligatoria

**Preparación textual anti-clonación: DOCUMENTADA.** Tres o más riesgos justificados y separadores de silueta, pose y composición; la prueba visual de silueta, pose y avatar sigue pendiente.

**Contra Fénix.**

Silueta de Fénix, para no repetirla: alas en arco desigual + cola amplia cuyas plumas se fragmentan visualmente en fuego/ceniza.

Pose de Fénix, para no repetirla: renace o se eleva desde ceniza; no vuelo horizontal.

Ejes numéricos que ya los separan: escala aparente 2 contra 7, anchura de hombros 1 contra 6, masa corporal 1 contra 5, angulosidad facial 2 contra 6.

**Atención: 8 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** contorno superior expansivo y ascenso de criatura; cruce de morfología, no clon de especie.
**Filtro numérico:** distancia ponderada 2.050; misma morfología y lectura; riesgo numérico bajo. No sustituye la comparación textual.

- **Separador de silueta:** Ratatosk: cola en gran arco + cuerpo vertical trepando + rama de Yggdrasil cruzando diagonal. Cuerpo: ardilla adulta pequeña, ágil, con cola desproporcionadamente grande y expresiva como recurso de diseño. Frente a Fénix: alas en arco desigual + cola amplia cuyas plumas se fragmentan visualmente en fuego/ceniza. Cuerpo: ave adulta grande, de alas largas, cabeza relativamente pequeña y cola amplia. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Ratatosk: trepa con cabeza girada como llevando un mensaje. Frente a Fénix: renace o se eleva desde ceniza; no vuelo horizontal. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Ratatosk: rama/tronco forman diagonales de apoyo; aire alrededor de la cola para que su arco no se pierda. Frente a Fénix: base de ceniza abajo y gran aire superior para la trayectoria ascendente; fuego sin convertir la escena en amenaza. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo ratatosk, comparación Fénix; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Pegaso.**

Silueta de Pegaso, para no repetirla: dos alas abiertas en alturas diferentes + cuello arqueado + patas recogidas o una apoyada según escena.

Pose de Pegaso, para no repetirla: vuelo o elevación controlada, no picada heroica.

Ejes numéricos que ya los separan: masa corporal 1 contra 6, escala aparente 2 contra 7, anchura de hombros 1 contra 6, contorno superior 10 contra 7.

**Atención: 8 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** criatura elevada con curva de contorno amplia; control de trepa frente a vuelo.
**Filtro numérico:** distancia ponderada 2.050; misma morfología y lectura; riesgo numérico bajo. No sustituye la comparación textual.

- **Separador de silueta:** Ratatosk: cola en gran arco + cuerpo vertical trepando + rama de Yggdrasil cruzando diagonal. Cuerpo: ardilla adulta pequeña, ágil, con cola desproporcionadamente grande y expresiva como recurso de diseño. Frente a Pegaso: dos alas abiertas en alturas diferentes + cuello arqueado + patas recogidas o una apoyada según escena. Cuerpo: caballo adulto de proporciones elegantes y atléticas. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Ratatosk: trepa con cabeza girada como llevando un mensaje. Frente a Pegaso: vuelo o elevación controlada, no picada heroica. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Ratatosk: rama/tronco forman diagonales de apoyo; aire alrededor de la cola para que su arco no se pierda. Frente a Pegaso: cuerpo completo cuando la escala lo permita; aire entre alas y borde del cuadro para no perder la firma. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo ratatosk, comparación Pegaso; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Fenrir.**

Silueta de Fenrir, para no repetirla: lomo horizontal + cinta mágica fina contrastando con el gran tamaño + patas separadas y firmes.

Pose de Fenrir, para no repetirla: detenido y observando; nunca abalanzándose.

Ejes numéricos que ya los separan: masa corporal 1 contra 9, anchura de hombros 1 contra 9, dinamismo de pose 9 contra 2, angulosidad facial 2 contra 8.

**Por qué se controla este par:** criatura peluda nórdica; control de escala y hocico para evitar animal genérico.
**Filtro numérico:** distancia ponderada 4.201; misma morfología y lectura; riesgo numérico bajo. No sustituye la comparación textual.

- **Separador de silueta:** Ratatosk: cola en gran arco + cuerpo vertical trepando + rama de Yggdrasil cruzando diagonal. Cuerpo: ardilla adulta pequeña, ágil, con cola desproporcionadamente grande y expresiva como recurso de diseño. Frente a Fenrir: lomo horizontal + cinta mágica fina contrastando con el gran tamaño + patas separadas y firmes. Cuerpo: lobo adulto gigante; cuerpo largo, musculoso y de cabeza grande. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Ratatosk: trepa con cabeza girada como llevando un mensaje. Frente a Fenrir: detenido y observando; nunca abalanzándose. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Ratatosk: rama/tronco forman diagonales de apoyo; aire alrededor de la cola para que su arco no se pierda. Frente a Fenrir: la cinta debe verse claramente contra la masa del lobo y existir aire delante del hocico. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo ratatosk, comparación Fenrir; contrastes derivados del ADN y la matriz, sin nuevo diseño.

Criterio de la ficha: Resto de criaturas. Debe distinguirse por escala pequeña, cola enorme y movimiento vertical de trepa.

La diferencia no puede depender sólo del color, del fondo, del objeto sostenido, del peinado ni de una prenda. Matriz §4.1: el objeto no salva un clon.

## 8. Encuadre

Vertical 3:4. Figura al 70–80% del alto del cuadro. Zona limpia detrás de la cabeza o del foco principal.

Avatar circular, como restricción invisible: Cabeza + gran cola + corteza/rama. No se dibuja ningún círculo, medallón, marco, inset ni retrato secundario.

## 9. Registro

Cálido, despierto, concentrado. No hace falta que sonría. Sin amenaza, sin crueldad, sin solemnidad genérica repetida de otra carta. La emoción sale de la historia del personaje y de lo que está haciendo.

## 10. Contaminación a evitar

**Investigación externa pendiente.** No se relevaron versiones modernas específicas para este personaje. Aplicar los controles disponibles del repo de [Documentacion/controles_contaminacion_pop_lote_2026-09-28.md](../Documentacion/controles_contaminacion_pop_lote_2026-09-28.md), junto con la identidad, acción, inventario y exclusiones de esta orden. Este pendiente no constituye por sí solo un bloqueo material ni certifica ausencia de contaminación. Las representaciones y sus rasgos concretos siguen sin investigar; no reemplazar ese faltante por asociaciones de memoria.

Nada de Marvel, Disney, DC, anime conocido ni videojuegos, sea o no de esta lista.

## 11. Antes de generar

Mostrar cinco líneas y esperar OK: qué se ve, cuál es el detalle reconocible, el inventario con su fuente, contra quién se separa y con qué diferencia concreta, y de dónde sale el escenario.

Después de generar, declarar cuatro cosas: qué objetos quedaron en la imagen que no estaban en el inventario; **qué elementos exigidos de la §5 no aparecieron y por qué, qué condiciones no se cumplieron y qué alternativas se usaron**; qué campos de esta orden no se cumplieron; y los once puntos del gate de `estilo_visual_aprobado.md` §9, que ahora son doce.

El segundo control es tan importante como el primero y es el que faltaba hasta el 2026-09-14: una imagen puede cumplir el inventario cerrado al pie de la letra y seguir siendo una carta fallada por no mostrar nada de lo que hace reconocible al personaje.
