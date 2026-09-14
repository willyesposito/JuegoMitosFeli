# Orden de producción — Orión

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
| Familia de encuadre | escala grande / figura humana | ADN |
| Edad y contextura | Adulto maduro; muy alto y atlético. | ADN |
| Rostro y cabello | Rostro ancho y cabello corto áspero. | ADN |
| Cabello, color | negro | decisión de diseño visual, sin atestación localizada; revisable por la investigación |
| Cabello, textura | corto áspero | decisión de diseño visual, sin atestación localizada; revisable por la investigación |
| Piel | castaña media | decisión de diseño visual, sin atestación localizada; revisable por la investigación |
| Ojos | gris | decisión de diseño visual, sin atestación localizada; revisable por la investigación |

## 2. Detalle reconocible

**Cinturón de tres estrellas.**

Dones declarados en `personajes.json`: Cazador gigante; Cinturón de tres estrellas.

Ícono de la carta en la colección: `cazador`. Dependencia del identificador en la matriz: 8 de 10.

## 3. Acción y pose

Mira el cielo en dirección opuesta al escorpión; no caza activamente.

Dirección corporal: Perfil lateral con eje horizontal dentro del marco vertical.

Es la acción de la ficha y no se cambia. Si la acción no se puede representar sin agregar un objeto que no está en el inventario de la §5, frenar y avisar.

## 4. Silueta y composición

- **Firma de silueta:** Cuerpo largo de cazador + cinturón de tres puntos luminosos separado visualmente del torso + herramienta de caza en reposo si hace falta.
- **Composición:** Reservar cielo en la dirección de la mirada; las tres estrellas deben quedar legibles cerca de la parte alta del torso.
- **Densidad visual:** media-alta (matriz: 6 de 10).

Números de la matriz, como límites de diseño y no como sugerencia:

| EV | MC | EA | AF | CO | AC | DP | VD | DV | OV | DI | AN | PF | RM | RA |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 6 | 7 | 9 | 6 | 2 | 5 | 2 | 5 | 6 | 5 | 8 | 7 | 8 | 5 | 2 |

Prueba de silueta: reducida a mancha negra, tiene que seguir distinguiéndose de los personajes de la §7.

## 5. Inventario cerrado

Lo único que puede verse:

1. **Cinturón de tres estrellas** — identificador principal. ADN.
2. **Pistas secundarias autorizadas:** Relación visual con Escorpio y herramienta de caza en reposo. ADN. Subordinadas, nunca compitiendo con el identificador.
3. **Vestimenta lisa del vocabulario griego**, sin ornamento. Necesaria para vestir al personaje; sin autorización de ningún adorno concreto, va lisa.

Nada más. En particular, y porque ya pasó en la tanda anterior: **sin** broche, **sin** medallón, **sin** insignia, **sin** emblema, **sin** remaches decorativos, **sin** joyas, **sin** flores en el pelo, **sin** tatuajes, **sin** cuernos, **sin** alas que la ficha no pida, **sin** animal acompañante que no esté arriba, **sin** efecto mágico, **sin** runas, **sin** pseudo-texto, **sin** calzado con decisión no trazada.

## 6. Escenario

Sale de la acción de la §3 y de las pistas autorizadas de la §5, en ese orden. El fondo se diseña después del personaje, nunca antes.

Protagonismo de fondo asignado: 8 de 10, o sea que el contexto es esencial para leer la carta.

**Sin** pedestal de roca ni acantilado heroico, **sin** templo griego de decoración, **sin** Olimpo, **sin** cielo azul con nubes por defecto, **sin** arquitectura de fantasía, **sin** paisaje panorámico que compita en nitidez. Quince de las treinta y una imágenes anteriores tenían el pedestal y once el templo.

El fondo va con profundidad de campo real: menos nitidez y menos contraste que el personaje. Es el recurso principal para cumplir la jerarquía personaje → identificador → contexto.

## 7. Separación obligatoria

**Contra Atlas.**

| | Orión | Atlas |
|---|---|---|
| Cabello | negro | castaño grisáceo |
| Textura | corto áspero | subordinado a la escala |
| Piel | castaña media | canela |
| Ojos | gris | ámbar |

Silueta de Atlas, para no repetirla: arco de la bóveda celeste sobre hombros/brazos, una forma única que domina el contorno.

Pose de Atlas, para no repetirla: piernas muy separadas y brazos sosteniendo físicamente la bóveda.

Ejes numéricos que ya los separan: verticalidad 5 contra 9, masa corporal 7 contra 10, dinamismo de pose 2 contra 5, densidad visual 6 contra 9.

Criterio de la ficha: Atlas. Diferenciar por altura esbelta, eje horizontal y ausencia de carga.

La diferencia no puede depender sólo del color, del fondo, del objeto sostenido, del peinado ni de una prenda. Matriz §4.1: el objeto no salva un clon.

## 8. Encuadre

Vertical 3:4. Figura al 70–80% del alto del cuadro. Zona limpia detrás de la cabeza o del foco principal.

Avatar circular, como restricción invisible: Rostro + tres estrellas alineadas cerca del pecho superior. No se dibuja ningún círculo, medallón, marco, inset ni retrato secundario.

## 9. Registro

Cálido, despierto, concentrado. No hace falta que sonría. Sin amenaza, sin crueldad, sin solemnidad genérica repetida de otra carta. La emoción sale de la historia del personaje y de lo que está haciendo.

## 10. Contaminación a evitar

**Pendiente de la investigación** del lote correspondiente de `Documentacion/prompt_investigacion_85.md`, campo `contaminacion_pop`. No bloquea la generación, pero dejarlo vacío es aceptar el riesgo a ciegas: la contaminación de cultura pop fue la falla más frecuente de la tanda anterior y la más difícil de ver desde adentro.

Nada de Marvel, Disney, DC, anime conocido ni videojuegos, sea o no de esta lista.

## 11. Antes de generar

Mostrar cinco líneas y esperar OK: qué se ve, cuál es el detalle reconocible, el inventario con su fuente, contra quién se separa y con qué diferencia concreta, y de dónde sale el escenario.

Después de generar, declarar qué objetos quedaron en la imagen que no estaban en el inventario, qué campos de esta orden no se cumplieron, y los siete puntos del gate de `estilo_visual_aprobado.md` §7.
