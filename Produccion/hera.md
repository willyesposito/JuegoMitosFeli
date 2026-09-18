# Orden de producción — Hera

**Estado: LISTA.** Identidad cerrada, inventario cerrado, separación resuelta.

**Imagen actual:** `imagenes/hera.jpg`, **a reemplazar.** Es de un estilo anterior: la colección quedó en cine de animación 3D el 2026-09-14, con el acabado calibrado por `imagenes/teseo.jpg` y el registro emocional por `imagenes/hermes.jpg`.

**Se lee junto con:** `Documentacion/estilo_visual_aprobado.md`. Nada más.

> Generada por `herramientas/generar-ordenes.py`. Para cambiarla, editar la fuente (el ADN, la matriz, `personajes.json` o `herramientas/identidad_visual.py`) y volver a generar. Editar este archivo a mano se pierde.

---

## 1. Identidad

| Campo | Valor | Origen |
|---|---|---|
| Mitología | griega | `personajes.json` |
| Tier | plateado | `personajes.json` |
| Familia de encuadre | figura humana | ADN |
| Edad y contextura | Adulta madura; alta y de postura regia. | ADN |
| Rostro y cabello | Rostro oval largo; cabello pesado, ordenado y estructurado. | ADN |
| Cabello, color | castaño oscuro | decisión de diseño visual, sin atestación localizada; revisable por la investigación |
| Cabello, textura | pesado y estructurado | decisión de diseño visual, sin atestación localizada; revisable por la investigación |
| Piel | oliva clara | decisión de diseño visual, sin atestación localizada; revisable por la investigación |
| Ojos | ámbar | decisión de diseño visual, sin atestación localizada; revisable por la investigación |

## 2. Detalle reconocible

**Pavo real como principal o coprotagonista.**

Dones declarados en `personajes.json`: Reina del Olimpo, diosa del matrimonio y la familia; El pavo real es su animal sagrado.

Ícono de la carta en la colección: `pavorreal`. Dependencia del identificador en la matriz: 7 de 10.

## 3. Acción y pose

Una mano relajada y otra sobre el manto; cero gesto de combate.

Dirección corporal: Frontal asimétrica con eje vertical.

Es la acción de la ficha y no se cambia. Si la acción no se puede representar sin agregar un objeto que no está en el inventario de la §5, frenar y avisar.

**Y al revés, que es el caso que falló tres veces:** si un objeto autorizado de la §5 no entra en la pose tal como está descripta, **el objeto no se descarta**. Se ajusta la pose lo mínimo para que entre, conservando la dirección corporal y la diagonal. Una silueta de carrera con los dos puños cerrados no deja mano para un bastón, y la salida no es correr sin el bastón: es que una mano lo lleve. Declarar el ajuste en el preflight.

## 4. Silueta y composición

- **Firma de silueta:** Tocado o peinado elevado + manto vertical + pavo real rompiendo un lateral del contorno.
- **Composición:** Pavo real lateral para quebrar la verticalidad sin competir con el rostro; fondo contenido.
- **Densidad visual:** media-alta (matriz: 8 de 10).

- **Cuerpo, y esto manda sobre cualquier intuición:** entrado en años, de contextura media, atlética sin volumen, hombros de ancho medio, de escala algo mayor que humana.

La contextura sale de acá y no de lo que el personaje representa. Un dios no es corpulento por ser dios, ni un héroe es musculoso por ser héroe: si estos valores piden un cuerpo liviano, va un cuerpo liviano. **Sin abdominales marcados, sin deltoides separados, sin bíceps de gimnasio y sin espalda en V** salvo que la masa y los hombros de arriba lo pidan expresamente.

Los quince ejes completos, como límites de diseño y no como sugerencia (EV edad visual, MC masa corporal, EA escala aparente, AF angulosidad facial, CO contorno superior, AC apertura corporal, DP dinamismo de pose, VD verticalidad, DV densidad visual, OV oscuridad, DI dependencia del identificador, AN anchura de hombros, PF protagonismo de fondo, RM rigidez de materiales, RA rareza anatómica):

| EV | MC | EA | AF | CO | AC | DP | VD | DV | OV | DI | AN | PF | RM | RA |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 7 | 5 | 8 | 7 | 2 | 5 | 1 | 9 | 8 | 3 | 7 | 5 | 5 | 7 | 1 |

Prueba de silueta: reducida a mancha negra, tiene que seguir distinguiéndose de los personajes de la §7.

## 5. Inventario cerrado

Lo único que puede verse:

1. **Pavo real como principal o coprotagonista** — identificador principal. ADN.
2. **Pistas secundarias autorizadas, y van en la imagen:** Patrón de ojos de las plumas. ADN. Subordinadas al identificador, nunca compitiendo con él, pero presentes.
3. **Vestimenta autorizada:** . ADN. Sin adornos más allá de lo que dice esa línea.

Nada más. En particular, y porque ya pasó en la tanda anterior: **sin** broche, **sin** medallón, **sin** insignia, **sin** emblema, **sin** remaches decorativos, **sin** joyas, **sin** flores en el pelo, **sin** tatuajes, **sin** cuernos, **sin** alas que la ficha no pida, **sin** animal acompañante que no esté arriba, **sin** efecto mágico decorativo agregado por fuera del identificador, **sin** runas, **sin** pseudo-texto, **sin** calzado con decisión no trazada.

**Esta lista es para mostrar, no sólo para permitir.** El inventario está cerrado hacia arriba, no hacia abajo: lo que no figura no entra, y lo que figura tiene que entrar. Un personaje que llega a la imagen sin ninguno de sus atributos característicos es una carta fallada, aunque no haya inventado nada. **Ante la duda entre una carta pelada y una con tres objetos autorizados, van los tres.** El único límite es la jerarquía: el identificador principal manda, las pistas acompañan, y nada tapa la cara ni el identificador.

**La magia es obligatoria y sale del identificador.** El detalle reconocible de la §2 no se muestra apoyado y quieto: se muestra funcionando, el entorno reacciona, y el don produce su fenómeno visible. Estela, chispas, partículas, luz propia que ilumina de verdad, deformación del aire, materia que responde: todo eso está autorizado y va sin timidez. Esto no agrega ningún objeto al inventario de arriba, porque lo que se enciende es lo que el personaje ya tiene.

Las tres capas y las cuatro reglas están en `estilo_visual_aprobado.md` §7, que gobierna. En resumen: el efecto nace del don y se puede señalar de dónde salió; no tapa la cara ni el identificador; el color sale del don o del material y nunca es el dorado por default; y el fenómeno es propio de este personaje y no el mismo de las otras 84. Queda afuera el aura que envuelve el cuerpo y disuelve la silueta, el halo detrás de la cabeza, las runas o pseudo-texto flotando, y cualquier efecto que no se pueda trazar al don. Si el identificador no da para un fenómeno, la carta va con el objeto en actividad y el entorno reaccionando, y no se inventa uno.

## 6. Escenario

Sale de la acción de la §3 y de las pistas autorizadas de la §5, en ese orden. El fondo se diseña después del personaje, nunca antes.

Protagonismo de fondo asignado: 5 de 10, o sea que el contexto acompaña sin llevar peso.

**Sin** pedestal de roca ni acantilado heroico, **sin** templo griego de decoración, **sin** Olimpo, **sin** cielo azul con nubes por defecto, **sin** arquitectura de fantasía, **sin** paisaje panorámico que compita en nitidez. Quince de las treinta y una imágenes anteriores tenían el pedestal y once el templo.

El fondo va con profundidad de campo real: menos nitidez y menos contraste que el personaje. Es el recurso principal para cumplir la jerarquía personaje → identificador → contexto.

## 7. Separación obligatoria

**Par de Espejo: Frigg.** El módulo Espejo de los Mundos los muestra enfrentados en pantalla, así que las dos cartas tienen que separarse solas a simple vista. Es el par donde un parecido cuesta doble.

**Contra Casiopea.**

| | Hera | Casiopea |
|---|---|---|
| Cabello | castaño oscuro | negro |
| Textura | pesado y estructurado | estructurado alto |
| Piel | oliva clara | castaña media |
| Ojos | ámbar ⚠ igual | ámbar |

Silueta de Casiopea, para no repetirla: trono dominando la forma exterior y sugiriendo una W con respaldo/brazos, sin letras visibles.

Pose de Casiopea, para no repetirla: quietud orgullosa sobre el trono.

Ejes numéricos que ya los separan: protagonismo de fondo 5 contra 9, apertura corporal 5 contra 2, verticalidad 9 contra 6, oscuridad 3 contra 5.

**Atención: 11 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Contra Afrodita.**

| | Hera | Afrodita |
|---|---|---|
| Cabello | castaño oscuro | rubio ceniza |
| Textura | pesado y estructurado | ondulado amplio |
| Piel | oliva clara | clara neutra |
| Ojos | ámbar | verde gris |

Silueta de Afrodita, para no repetirla: cabello y telas ondulantes formando curvas abiertas; sin pose pin-up ni sexualización.

Pose de Afrodita, para no repetirla: cuerpo relajado y manos bajas; belleza visual sin depender de una pose ornamental.

Ejes numéricos que ya los separan: contorno superior 2 contra 9, angulosidad facial 7 contra 2, rigidez de materiales 7 contra 2, verticalidad 9 contra 6.

**Contra Frigg.**

| | Hera | Frigg |
|---|---|---|
| Cabello | castaño oscuro | rubio ceniza con canas |
| Textura | pesado y estructurado | trenzas simples |
| Piel | oliva clara | clara rosada |
| Ojos | ámbar | azul gris |

Silueta de Frigg, para no repetirla: figura vertical cerrada + manos juntas o una cubriendo parcialmente la otra + manto largo limpio.

Pose de Frigg, para no repetirla: parece saber algo que no va a decir; manos controladas y ausencia de objeto profético.

Ejes numéricos que ya los separan: densidad visual 8 contra 3, dependencia del identificador 7 contra 2, apertura corporal 5 contra 2, protagonismo de fondo 5 contra 2.

**Atención: 10 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

Criterio de la ficha: Afrodita, Casiopea y Frigg. Diferenciar por autoridad, geometría vertical y presencia del pavo real, no por belleza o solemnidad genéricas.

La diferencia no puede depender sólo del color, del fondo, del objeto sostenido, del peinado ni de una prenda. Matriz §4.1: el objeto no salva un clon.

## 8. Encuadre

Vertical 3:4. Figura al 70–80% del alto del cuadro. Zona limpia detrás de la cabeza o del foco principal.

Avatar circular, como restricción invisible: Rostro + plumas de pavo real claramente visibles. No se dibuja ningún círculo, medallón, marco, inset ni retrato secundario.

## 9. Registro

Cálido, despierto, concentrado. No hace falta que sonría. Sin amenaza, sin crueldad, sin solemnidad genérica repetida de otra carta. La emoción sale de la historia del personaje y de lo que está haciendo.

## 10. Contaminación a evitar

**Pendiente de la investigación** del lote correspondiente de `Documentacion/prompt_investigacion_85.md`, campo `contaminacion_pop`. No bloquea la generación, pero dejarlo vacío es aceptar el riesgo a ciegas: la contaminación de cultura pop fue la falla más frecuente de la tanda anterior y la más difícil de ver desde adentro.

Nada de Marvel, Disney, DC, anime conocido ni videojuegos, sea o no de esta lista.

## 11. Antes de generar

Mostrar cinco líneas y esperar OK: qué se ve, cuál es el detalle reconocible, el inventario con su fuente, contra quién se separa y con qué diferencia concreta, y de dónde sale el escenario.

Después de generar, declarar cuatro cosas: qué objetos quedaron en la imagen que no estaban en el inventario; **qué elementos autorizados de la §5 no aparecieron y por qué**; qué campos de esta orden no se cumplieron; y los once puntos del gate de `estilo_visual_aprobado.md` §9, que ahora son doce.

El segundo control es tan importante como el primero y es el que faltaba hasta el 2026-09-14: una imagen puede cumplir el inventario cerrado al pie de la letra y seguir siendo una carta fallada por no mostrar nada de lo que hace reconocible al personaje.
