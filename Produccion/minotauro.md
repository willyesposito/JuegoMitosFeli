# Orden de producción — Minotauro

**Estado: LISTA.** Identidad cerrada, inventario cerrado, separación resuelta.

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
| Edad y contextura | Adulto híbrido; torso humanoide muy ancho y pesado. | ADN |
| Rostro y cabello | Cabeza de toro completa; no aplica rostro/cabello humano. Cuernos y hocico deben definir la parte superior de la silueta. | ADN |
| Cabello, piel y ojos | no aplica: la identidad es anatómica, ver ADN | ADN |

**No humano.** Pelo, piel y ojos no se aplican. La geometría de la ficha manda y no se le agregan rasgos humanos que el repo no autorice.

## 2. Detalle reconocible

**Anatomía toro-humano.**

Dones declarados en `personajes.json`: Fuerza descomunal; Conoce cada rincón de su laberinto.

Ícono de la carta en la colección: `toro`. Dependencia del identificador en la matriz: 1 de 10.

## 3. Acción y pose

Observa o decide camino; no carga hacia cámara.

Dirección corporal: Tres cuartos detenido en una bifurcación.

Es la acción de la ficha y no se cambia. Si la acción no se puede representar sin agregar un objeto que no está en el inventario de la §5, frenar y avisar.

## 4. Silueta y composición

- **Firma de silueta:** Cuernos largos + hombros enormes + postura ligeramente encorvada sobre anatomía toro-humano.
- **Composición:** Transición anatómica completa en imagen maestra; laberinto subordinado y aire alrededor de ambos cuernos.
- **Densidad visual:** alta (matriz: 8 de 10).

Números de la matriz, como límites de diseño y no como sugerencia:

| EV | MC | EA | AF | CO | AC | DP | VD | DV | OV | DI | AN | PF | RM | RA |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 6 | 10 | 8 | 7 | 5 | 4 | 2 | 7 | 8 | 6 | 1 | 10 | 6 | 3 | 9 |

Prueba de silueta: reducida a mancha negra, tiene que seguir distinguiéndose de los personajes de la §7.

## 5. Inventario cerrado

Lo único que puede verse:

1. **Anatomía toro-humano** — identificador principal. ADN.
2. **Pistas secundarias autorizadas:** Laberinto. ADN. Subordinadas, nunca compitiendo con el identificador.

Nada más. En particular, y porque ya pasó en la tanda anterior: **sin** broche, **sin** medallón, **sin** insignia, **sin** emblema, **sin** remaches decorativos, **sin** joyas, **sin** flores en el pelo, **sin** tatuajes, **sin** cuernos, **sin** alas que la ficha no pida, **sin** animal acompañante que no esté arriba, **sin** efecto mágico, **sin** runas, **sin** pseudo-texto, **sin** calzado con decisión no trazada.

## 6. Escenario

Sale de la acción de la §3 y de las pistas autorizadas de la §5, en ese orden. El fondo se diseña después del personaje, nunca antes.

Protagonismo de fondo asignado: 6 de 10, o sea que el contexto acompaña sin llevar peso.

**Sin** pedestal de roca ni acantilado heroico, **sin** templo griego de decoración, **sin** Olimpo, **sin** cielo azul con nubes por defecto, **sin** arquitectura de fantasía, **sin** paisaje panorámico que compita en nitidez. Quince de las treinta y una imágenes anteriores tenían el pedestal y once el templo.

El fondo va con profundidad de campo real: menos nitidez y menos contraste que el personaje. Es el recurso principal para cumplir la jerarquía personaje → identificador → contexto.

## 7. Separación obligatoria

**Contra Pan.**

Silueta de Pan, para no repetirla: flauta de caña horizontal + cuerpo compacto + vegetación de bosque; no agregar patas, cuernos u otros rasgos anatómicos si la ficha visual no los autoriza expresamente.

Pose de Pan, para no repetirla: sentado o apoyado tocando la flauta.

Ejes numéricos que ya los separan: dependencia del identificador 1 contra 9, rareza anatómica 9 contra 1, masa corporal 10 contra 6, escala aparente 8 contra 4.

Criterio de la ficha: Pan. Evitar sumar rasgos caprinos no autorizados a Pan y mantener al Minotauro inequívocamente taurino y masivo.

La diferencia no puede depender sólo del color, del fondo, del objeto sostenido, del peinado ni de una prenda. Matriz §4.1: el objeto no salva un clon.

## 8. Encuadre

Vertical 3:4. Figura al 70–80% del alto del cuadro. Zona limpia detrás de la cabeza o del foco principal.

Avatar circular, como restricción invisible: Cabeza completa + ambos cuernos + tramo reconocible de laberinto. No se dibuja ningún círculo, medallón, marco, inset ni retrato secundario.

## 9. Registro

Cálido, despierto, concentrado. No hace falta que sonría. Sin amenaza, sin crueldad, sin solemnidad genérica repetida de otra carta. La emoción sale de la historia del personaje y de lo que está haciendo.

## 10. Contaminación a evitar

*God of War* y *Percy Jackson*: bestia musculosa agresiva.

Nada de Marvel, Disney, DC, anime conocido ni videojuegos, sea o no de esta lista.

## 11. Antes de generar

Mostrar cinco líneas y esperar OK: qué se ve, cuál es el detalle reconocible, el inventario con su fuente, contra quién se separa y con qué diferencia concreta, y de dónde sale el escenario.

Después de generar, declarar qué objetos quedaron en la imagen que no estaban en el inventario, qué campos de esta orden no se cumplieron, y los siete puntos del gate de `estilo_visual_aprobado.md` §7.
