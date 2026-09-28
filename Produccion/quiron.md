# Orden de producción — Quirón

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
| Familia de encuadre | híbrido | ADN |
| Edad y contextura | Parte humana de adulto mayor con torso atlético moderado; parte equina completa y estable. | ADN |
| Rostro y cabello | Rostro humano maduro de maestro; cabello de adulto mayor sin volumen heroico. La transición al cuerpo equino debe ser anatómicamente clara. | ADN |
| Cabello, piel y ojos | no aplica: la identidad es anatómica, ver ADN | ADN |

**No humano.** Pelo, piel y ojos no se aplican. La geometría de la ficha manda y no se le agregan rasgos humanos que el repo no autorice.

## 2. Detalle reconocible

**Anatomía de centauro + rol de maestro.**

Dones declarados en `personajes.json`: El centauro sabio; Maestro de medicina, música, arquería y estrategia.

Ícono de la carta en la colección: `centauro`. Dependencia del identificador en la matriz: 2 de 10.

## 3. Acción y pose

Enseña o indica; no corre.

Dirección corporal: Lateral hacia la persona o punto al que enseña/señala.

Es la acción de la ficha y no se cambia. Si la acción no se puede representar sin agregar un objeto que no está en el inventario de la §5, frenar y avisar.

**Y al revés, que es el caso que falló tres veces:** si un objeto exigido de la §5 no entra en la pose tal como está descripta, **el objeto no se descarta**. Se ajusta la pose lo mínimo para que entre, conservando la dirección corporal y la diagonal. Una silueta de carrera con los dos puños cerrados no deja mano para un bastón, y la salida no es correr sin el bastón: es que una mano lo lleve. Declarar el ajuste en el preflight. Una pista condicional sólo se exige si se cumple su condición; las alternativas con «o» se conservan como alternativas, sin exigir todas a la vez.

## 4. Silueta y composición

- **Firma de silueta:** Cuerpo de centauro + arco o instrumento de enseñanza en diagonal + postura abierta de maestro.
- **Composición:** Espacio negativo frente al gesto docente; cuerpo equino completo para que la hibridez no quede escondida.
- **Densidad visual:** alta (matriz: 8 de 10).

- **Cuerpo, y esto manda sobre cualquier intuición:** entrado en años, corpulento, con masa evidente, hombros anchos, de escala algo mayor que humana.

La contextura sale de acá y no de lo que el personaje representa. Un dios no es corpulento por ser dios, ni un héroe es musculoso por ser héroe: si estos valores piden un cuerpo liviano, va un cuerpo liviano. **Sin abdominales marcados, sin deltoides separados, sin bíceps de gimnasio y sin espalda en V** salvo que la masa y los hombros de arriba lo pidan expresamente.

Los quince ejes completos, como límites de diseño y no como sugerencia (EV edad visual, MC masa corporal, EA escala aparente, AF angulosidad facial, CO contorno superior, AC apertura corporal, DP dinamismo de pose, VD verticalidad, DV densidad visual, OV oscuridad, DI dependencia del identificador, AN anchura de hombros, PF protagonismo de fondo, RM rigidez de materiales, RA rareza anatómica):

| EV | MC | EA | AF | CO | AC | DP | VD | DV | OV | DI | AN | PF | RM | RA |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 8 | 7 | 8 | 5 | 5 | 7 | 2 | 6 | 8 | 3 | 2 | 7 | 5 | 4 | 9 |

Prueba de silueta: reducida a mancha negra, tiene que seguir distinguiéndose de los personajes de la §7.

## 5. Inventario cerrado

Lo único que puede verse:

1. **Anatomía de centauro + rol de maestro** — identificador principal. ADN.
2. **Pistas secundarias autorizadas:** arquería o instrumento de enseñanza autorizado. ADN. Subordinadas al identificador. Respetar las condiciones y alternativas del texto: «si hace falta» y «cuando corresponda» no exigen presencia incondicional; «o» no exige ambas opciones.
3. **Resolución funcional de vestimenta y calzado:** `Documentacion/adn_visual_personajes_v1.md`, sección «Regla común de vestimenta funcional y calzado — lote del 2026-09-28». Decisión de diseño de Willy aprobada el 2026-09-28; no es una atestación histórica.
   - **Vestimenta funcional:** Túnica corta lisa, sin mangas, limitada al torso humano y terminada antes de la unión equina. Brazos libres para enseñar; cuerpo equino visible, sin prendas que lo cubran.
   - **Calzado:** No corresponde calzado humano: conservar la parte equina completa y sus patas.

Nada más. En particular, y porque ya pasó en la tanda anterior: **sin** broche, **sin** medallón, **sin** insignia, **sin** emblema, **sin** remaches decorativos, **sin** joyas, **sin** flores en el pelo, **sin** tatuajes, **sin** cuernos, **sin** alas que la ficha no pida, **sin** animal acompañante que no esté arriba, **sin** efecto mágico decorativo agregado por fuera del identificador, **sin** runas, **sin** pseudo-texto, **sin** calzado con decisión no trazada.

**Inventario por exceso y por omisión.** Lo que no figura no entra. Mostrar los elementos exigidos por el ADN, aplicar las pistas condicionales sólo cuando se cumpla su condición y conservar las alternativas como tales. El identificador principal manda, las pistas acompañan y nada tapa la cara ni el identificador. En el preflight, declarar qué condiciones se cumplen y qué alternativa se usa, sin agregar decisiones ajenas a la fuente.

**La magia es obligatoria y sale del identificador.** El detalle reconocible de la §2 no se muestra apoyado y quieto: se muestra funcionando, el entorno reacciona, y el don produce su fenómeno visible. Estela, chispas, partículas, luz propia que ilumina de verdad, deformación del aire, materia que responde: todo eso está autorizado y va sin timidez. Esto no agrega ningún objeto al inventario de arriba, porque lo que se enciende es lo que el personaje ya tiene.

Las tres capas y las cuatro reglas están en `estilo_visual_aprobado.md` §7, que gobierna. En resumen: el efecto nace del don y se puede señalar de dónde salió; no tapa la cara ni el identificador; el color sale del don o del material y nunca es el dorado por default; y el fenómeno es propio de este personaje y no el mismo de las otras 84. Queda afuera el aura que envuelve el cuerpo y disuelve la silueta, el halo detrás de la cabeza, las runas o pseudo-texto flotando, y cualquier efecto que no se pueda trazar al don. Si el identificador no da para un fenómeno, la carta va con el objeto en actividad y el entorno reaccionando, y no se inventa uno.

## 6. Escenario

Sale de la acción de la §3 y de las pistas autorizadas de la §5, en ese orden. El fondo se diseña después del personaje, nunca antes.

Protagonismo de fondo asignado: 5 de 10, o sea que el contexto acompaña sin llevar peso.

**Sin** pedestal de roca ni acantilado heroico, **sin** templo griego de decoración, **sin** Olimpo, **sin** cielo azul con nubes por defecto, **sin** arquitectura de fantasía, **sin** paisaje panorámico que compita en nitidez. Quince de las treinta y una imágenes anteriores tenían el pedestal y once el templo.

El fondo va con profundidad de campo real: menos nitidez y menos contraste que el personaje. Es el recurso principal para cumplir la jerarquía personaje → identificador → contexto.

## 7. Separación obligatoria

**Preparación textual anti-clonación: DOCUMENTADA.** Tres o más riesgos justificados y separadores de silueta, pose y composición; la prueba visual de silueta, pose y avatar sigue pendiente.

**Contra Minotauro.**

Silueta de Minotauro, para no repetirla: cuernos largos + hombros enormes + postura ligeramente encorvada sobre anatomía toro-humano.

Pose de Minotauro, para no repetirla: observa o decide camino; no carga hacia cámara.

Ejes numéricos que ya los separan: masa corporal 7 contra 10, apertura corporal 7 contra 4, oscuridad 3 contra 6, anchura de hombros 7 contra 10.

**Atención: 9 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** híbridos grandes de torso humanoide y masa alta.
**Filtro numérico:** distancia ponderada 1.352; misma morfología y lectura; riesgo numérico bajo. No sustituye la comparación textual.

- **Separador de silueta:** Quirón: cuerpo de centauro + arco o instrumento de enseñanza en diagonal + postura abierta de maestro. Cuerpo: parte humana de adulto mayor con torso atlético moderado; parte equina completa y estable. Frente a Minotauro: cuernos largos + hombros enormes + postura ligeramente encorvada sobre anatomía toro-humano. Cuerpo: adulto híbrido; torso humanoide muy ancho y pesado, con piernas taurinas terminadas en pezuñas. Sin piernas ni pies humanos. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Quirón: enseña o indica; no corre. Frente a Minotauro: observa o decide camino; no carga hacia cámara. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Quirón: espacio negativo frente al gesto docente; cuerpo equino completo para que la hibridez no quede escondida. Frente a Minotauro: transición anatómica completa en imagen maestra; laberinto subordinado y aire alrededor de ambos cuernos. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo quiron, comparación Minotauro; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Esfinge.**

Silueta de Esfinge, para no repetirla: cabeza humana alta + pecho y patas de león en reposo; no sumar alas si no están autorizadas.

Pose de Esfinge, para no repetirla: mira con curiosidad a quien responde; quietud de acertijo, no amenaza.

Ejes numéricos que ya los separan: apertura corporal 7 contra 3, oscuridad 3 contra 6, escala aparente 8 contra 6.

**Atención: 12 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** híbrido de rostro humano y cuerpo cuadrúpedo en reposo.
**Filtro numérico:** distancia ponderada 0.944; misma morfología y lectura; riesgo numérico medio. No sustituye la comparación textual.

- **Separador de silueta:** Quirón: cuerpo de centauro + arco o instrumento de enseñanza en diagonal + postura abierta de maestro. Cuerpo: parte humana de adulto mayor con torso atlético moderado; parte equina completa y estable. Frente a Esfinge: cabeza humana alta + pecho y patas de león en reposo; no sumar alas si no están autorizadas. Cuerpo: figura híbrida adulta; cuerpo de león robusto y presencia majestuosa. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Quirón: enseña o indica; no corre. Frente a Esfinge: mira con curiosidad a quien responde; quietud de acertijo, no amenaza. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Quirón: espacio negativo frente al gesto docente; cuerpo equino completo para que la hibridez no quede escondida. Frente a Esfinge: camino bloqueado queda visible y el cuerpo leonino debe leerse completo; aire alrededor del rostro humano. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo quiron, comparación Esfinge; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Pegaso.**

Silueta de Pegaso, para no repetirla: dos alas abiertas en alturas diferentes + cuello arqueado + patas recogidas o una apoyada según escena.

Pose de Pegaso, para no repetirla: vuelo o elevación controlada, no picada heroica.

Ejes numéricos que ya los separan: dinamismo de pose 2 contra 8, edad visual 8 contra 5, angulosidad facial 5 contra 3, contorno superior 5 contra 7.

**Atención: 9 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** cuerpo equino que puede absorber o borrar la transición humana.
**Filtro numérico:** distancia ponderada 1.754; morfología o lectura distinta: control semántico/compositivo, no colisión anatómica. No sustituye la comparación textual.

- **Separador de silueta:** Quirón: cuerpo de centauro + arco o instrumento de enseñanza en diagonal + postura abierta de maestro. Cuerpo: parte humana de adulto mayor con torso atlético moderado; parte equina completa y estable. Frente a Pegaso: dos alas abiertas en alturas diferentes + cuello arqueado + patas recogidas o una apoyada según escena. Cuerpo: caballo adulto de proporciones elegantes y atléticas. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Quirón: enseña o indica; no corre. Frente a Pegaso: vuelo o elevación controlada, no picada heroica. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Quirón: espacio negativo frente al gesto docente; cuerpo equino completo para que la hibridez no quede escondida. Frente a Pegaso: cuerpo completo cuando la escala lo permita; aire entre alas y borde del cuadro para no perder la firma. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo quiron, comparación Pegaso; contrastes derivados del ADN y la matriz, sin nuevo diseño.

Criterio de la ficha: Héroes guerreros humanos. Diferenciar por edad, anatomía híbrida y comportamiento docente.

La diferencia no puede depender sólo del color, del fondo, del objeto sostenido, del peinado ni de una prenda. Matriz §4.1: el objeto no salva un clon.

## 8. Encuadre

Vertical 3:4. Figura al 70–80% del alto del cuadro. Zona limpia detrás de la cabeza o del foco principal.

Avatar circular, como restricción invisible: Rostro humano + hombros + indicio claro de anatomía equina mediante encuadre o eco visual alto. No se dibuja ningún círculo, medallón, marco, inset ni retrato secundario.

## 9. Registro

Cálido, despierto, concentrado. No hace falta que sonría. Sin amenaza, sin crueldad, sin solemnidad genérica repetida de otra carta. La emoción sale de la historia del personaje y de lo que está haciendo.

## 10. Contaminación a evitar

El Quirón de *Percy Jackson*.

Nada de Marvel, Disney, DC, anime conocido ni videojuegos, sea o no de esta lista.

## 11. Antes de generar

Mostrar cinco líneas y esperar OK: qué se ve, cuál es el detalle reconocible, el inventario con su fuente, contra quién se separa y con qué diferencia concreta, y de dónde sale el escenario.

Después de generar, declarar cuatro cosas: qué objetos quedaron en la imagen que no estaban en el inventario; **qué elementos exigidos de la §5 no aparecieron y por qué, qué condiciones no se cumplieron y qué alternativas se usaron**; qué campos de esta orden no se cumplieron; y los once puntos del gate de `estilo_visual_aprobado.md` §9, que ahora son doce.

El segundo control es tan importante como el primero y es el que faltaba hasta el 2026-09-14: una imagen puede cumplir el inventario cerrado al pie de la letra y seguir siendo una carta fallada por no mostrar nada de lo que hace reconocible al personaje.
