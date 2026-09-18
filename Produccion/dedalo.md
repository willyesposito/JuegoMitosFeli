# Orden de producción — Dédalo

**Estado: LISTA.** Identidad cerrada, inventario cerrado, separación resuelta.

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
| Edad y contextura | Adulto mayor; delgado. | ADN |
| Rostro y cabello | Rostro largo con nariz marcada; cabello gris corto y desordenado. | ADN |
| Cabello, color | gris | ya declarado en el ADN, precisado sin contradecirlo |
| Cabello, textura | corto desordenado | ya declarado en el ADN, precisado sin contradecirlo |
| Piel | oliva clara | ya declarado en el ADN, precisado sin contradecirlo |
| Ojos | avellana | ya declarado en el ADN, precisado sin contradecirlo |

## 2. Detalle reconocible

**Alas construidas.**

Dones declarados en `personajes.json`: El inventor más grande de Grecia; Constructor del laberinto y de las alas.

Ícono de la carta en la colección: `alas`. Dependencia del identificador en la matriz: 9 de 10.

## 3. Acción y pose

Trabaja con las manos; no vuela.

Dirección corporal: Lateral hacia el ala que está construyendo o ajustando.

Es la acción de la ficha y no se cambia. Si la acción no se puede representar sin agregar un objeto que no está en el inventario de la §5, frenar y avisar.

**Y al revés, que es el caso que falló tres veces:** si un objeto autorizado de la §5 no entra en la pose tal como está descripta, **el objeto no se descarta**. Se ajusta la pose lo mínimo para que entre, conservando la dirección corporal y la diagonal. Una silueta de carrera con los dos puños cerrados no deja mano para un bastón, y la salida no es correr sin el bastón: es que una mano lo lleve. Declarar el ajuste en el preflight.

## 4. Silueta y composición

- **Firma de silueta:** Alas de plumas parcialmente abiertas + herramientas pequeñas en cinturón + postura encorvada de inventor.
- **Composición:** Ala ocupa un lateral y laberinto aparece como patrón simple de fondo; separar plumas de herramientas para no saturar.
- **Densidad visual:** media-alta (matriz: 7 de 10).

- **Cuerpo, y esto manda sobre cualquier intuición:** anciano, delgado y liviano, sin masa muscular marcada, hombros estrechos, de escala humana.

La contextura sale de acá y no de lo que el personaje representa. Un dios no es corpulento por ser dios, ni un héroe es musculoso por ser héroe: si estos valores piden un cuerpo liviano, va un cuerpo liviano. **Sin abdominales marcados, sin deltoides separados, sin bíceps de gimnasio y sin espalda en V** salvo que la masa y los hombros de arriba lo pidan expresamente.

Los quince ejes completos, como límites de diseño y no como sugerencia (EV edad visual, MC masa corporal, EA escala aparente, AF angulosidad facial, CO contorno superior, AC apertura corporal, DP dinamismo de pose, VD verticalidad, DV densidad visual, OV oscuridad, DI dependencia del identificador, AN anchura de hombros, PF protagonismo de fondo, RM rigidez de materiales, RA rareza anatómica):

| EV | MC | EA | AF | CO | AC | DP | VD | DV | OV | DI | AN | PF | RM | RA |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 9 | 3 | 6 | 8 | 4 | 3 | 4 | 4 | 7 | 4 | 9 | 3 | 6 | 4 | 3 |

Prueba de silueta: reducida a mancha negra, tiene que seguir distinguiéndose de los personajes de la §7.

## 5. Inventario cerrado

Lo único que puede verse:

1. **Alas construidas** — identificador principal. ADN.
2. **Pistas secundarias autorizadas, y van en la imagen:** Laberinto y herramientas. ADN. Subordinadas al identificador, nunca compitiendo con él, pero presentes.
3. **Vestimenta autorizada:** . ADN. Sin adornos más allá de lo que dice esa línea.

Nada más. En particular, y porque ya pasó en la tanda anterior: **sin** broche, **sin** medallón, **sin** insignia, **sin** emblema, **sin** remaches decorativos, **sin** joyas, **sin** flores en el pelo, **sin** tatuajes, **sin** cuernos, **sin** alas que la ficha no pida, **sin** animal acompañante que no esté arriba, **sin** efecto mágico decorativo agregado por fuera del identificador, **sin** runas, **sin** pseudo-texto, **sin** calzado con decisión no trazada.

**Esta lista es para mostrar, no sólo para permitir.** El inventario está cerrado hacia arriba, no hacia abajo: lo que no figura no entra, y lo que figura tiene que entrar. Un personaje que llega a la imagen sin ninguno de sus atributos característicos es una carta fallada, aunque no haya inventado nada. **Ante la duda entre una carta pelada y una con tres objetos autorizados, van los tres.** El único límite es la jerarquía: el identificador principal manda, las pistas acompañan, y nada tapa la cara ni el identificador.

**La magia es obligatoria y sale del identificador.** El detalle reconocible de la §2 no se muestra apoyado y quieto: se muestra funcionando, el entorno reacciona, y el don produce su fenómeno visible. Estela, chispas, partículas, luz propia que ilumina de verdad, deformación del aire, materia que responde: todo eso está autorizado y va sin timidez. Esto no agrega ningún objeto al inventario de arriba, porque lo que se enciende es lo que el personaje ya tiene.

Las tres capas y las cuatro reglas están en `estilo_visual_aprobado.md` §7, que gobierna. En resumen: el efecto nace del don y se puede señalar de dónde salió; no tapa la cara ni el identificador; el color sale del don o del material y nunca es el dorado por default; y el fenómeno es propio de este personaje y no el mismo de las otras 84. Queda afuera el aura que envuelve el cuerpo y disuelve la silueta, el halo detrás de la cabeza, las runas o pseudo-texto flotando, y cualquier efecto que no se pueda trazar al don. Si el identificador no da para un fenómeno, la carta va con el objeto en actividad y el entorno reaccionando, y no se inventa uno.

## 6. Escenario

Sale de la acción de la §3 y de las pistas autorizadas de la §5, en ese orden. El fondo se diseña después del personaje, nunca antes.

Protagonismo de fondo asignado: 6 de 10, o sea que el contexto acompaña sin llevar peso.

**Sin** pedestal de roca ni acantilado heroico, **sin** templo griego de decoración, **sin** Olimpo, **sin** cielo azul con nubes por defecto, **sin** arquitectura de fantasía, **sin** paisaje panorámico que compita en nitidez. Quince de las treinta y una imágenes anteriores tenían el pedestal y once el templo.

El fondo va con profundidad de campo real: menos nitidez y menos contraste que el personaje. Es el recurso principal para cumplir la jerarquía personaje → identificador → contexto.

## 7. Separación obligatoria

**Contra Perseo.**

| | Dédalo | Perseo |
|---|---|---|
| Cabello | gris | negro |
| Textura | corto desordenado | ondulado marcado |
| Piel | oliva clara | canela |
| Ojos | avellana | negro |

Silueta de Perseo, para no repetirla: escudo espejo en diagonal + sandalias aladas rompiendo el contorno bajo + casco separado del eje facial.

Pose de Perseo, para no repetirla: mira el reflejo del escudo en vez de dirigir la mirada al peligro; sensación de vuelo propio.

Ejes numéricos que ya los separan: edad visual 9 contra 4, angulosidad facial 8 contra 4, apertura corporal 3 contra 7, dinamismo de pose 4 contra 8.

**Contra Nike.**

| | Dédalo | Nike |
|---|---|---|
| Cabello | gris | rubio oscuro |
| Textura | corto desordenado | corto barrido |
| Piel | oliva clara | clara dorada |
| Ojos | avellana | gris |

Silueta de Nike, para no repetirla: alas grandes en V asimétrica + cuerpo inclinado hacia adelante, con contorno de velocidad.

Pose de Nike, para no repetirla: movimiento de llegada; manos libres o gesto de coronación sin texto.

Ejes numéricos que ya los separan: dependencia del identificador 9 contra 2, apertura corporal 3 contra 9, edad visual 9 contra 4, dinamismo de pose 4 contra 9.

Criterio de la ficha: Perseo y Nike. Diferenciar por tecnología fabricada, edad mayor y pose de trabajo en tierra, no vuelo mágico o anatómico.

La diferencia no puede depender sólo del color, del fondo, del objeto sostenido, del peinado ni de una prenda. Matriz §4.1: el objeto no salva un clon.

## 8. Encuadre

Vertical 3:4. Figura al 70–80% del alto del cuadro. Zona limpia detrás de la cabeza o del foco principal.

Avatar circular, como restricción invisible: Rostro + plumas de ala entrando desde un costado. No se dibuja ningún círculo, medallón, marco, inset ni retrato secundario.

## 9. Registro

Cálido, despierto, concentrado. No hace falta que sonría. Sin amenaza, sin crueldad, sin solemnidad genérica repetida de otra carta. La emoción sale de la historia del personaje y de lo que está haciendo.

## 10. Contaminación a evitar

**Pendiente de la investigación** del lote correspondiente de `Documentacion/prompt_investigacion_85.md`, campo `contaminacion_pop`. No bloquea la generación, pero dejarlo vacío es aceptar el riesgo a ciegas: la contaminación de cultura pop fue la falla más frecuente de la tanda anterior y la más difícil de ver desde adentro.

Nada de Marvel, Disney, DC, anime conocido ni videojuegos, sea o no de esta lista.

## 11. Antes de generar

Mostrar cinco líneas y esperar OK: qué se ve, cuál es el detalle reconocible, el inventario con su fuente, contra quién se separa y con qué diferencia concreta, y de dónde sale el escenario.

Después de generar, declarar cuatro cosas: qué objetos quedaron en la imagen que no estaban en el inventario; **qué elementos autorizados de la §5 no aparecieron y por qué**; qué campos de esta orden no se cumplieron; y los once puntos del gate de `estilo_visual_aprobado.md` §9, que ahora son doce.

El segundo control es tan importante como el primero y es el que faltaba hasta el 2026-09-14: una imagen puede cumplir el inventario cerrado al pie de la letra y seguir siendo una carta fallada por no mostrar nada de lo que hace reconocible al personaje.
