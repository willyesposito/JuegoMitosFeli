# Orden de producción — Artemisa

**Estado: LISTA.** Identidad cerrada, inventario cerrado, separación resuelta.

**Imagen actual:** `imagenes/artemisa.jpg`, **a reemplazar.** Es de un estilo anterior: la colección quedó en cine de animación 3D el 2026-09-14, con el acabado calibrado por `imagenes/teseo.jpg` y el registro emocional por `imagenes/hermes.jpg`.

**Se lee junto con:** `Documentacion/estilo_visual_aprobado.md`. Nada más.

> Generada por `herramientas/generar-ordenes.py`. Para cambiarla, editar la fuente (el ADN, la matriz, `personajes.json` o `herramientas/identidad_visual.py`) y volver a generar. Editar este archivo a mano se pierde.

---

## 1. Identidad

| Campo | Valor | Origen |
|---|---|---|
| Mitología | griega | `personajes.json` |
| Tier | plateado | `personajes.json` |
| Familia de encuadre | figura humana | ADN |
| Edad y contextura | Adulta joven; atlética ligera. | ADN |
| Rostro y cabello | Rostro triangular suave; cabello recogido alto o trenzado para despejar cuello. | ADN |
| Cabello, color | castaño muy oscuro | decisión de diseño visual, sin atestación localizada; revisable por la investigación |
| Cabello, textura | lacio recogido alto | decisión de diseño visual, sin atestación localizada; revisable por la investigación |
| Piel | canela | decisión de diseño visual, sin atestación localizada; revisable por la investigación |
| Ojos | ámbar | decisión de diseño visual, sin atestación localizada; revisable por la investigación |

## 2. Detalle reconocible

**Arco.**

Dones declarados en `personajes.json`: Arco infalible; Diosa de la caza y la luna; Protectora de los animales salvajes.

Ícono de la carta en la colección: `arco`. Dependencia del identificador en la matriz: 8 de 10.

## 3. Acción y pose

Arco en reposo hacia abajo; calma vigilante, no disparo ni combate.

Dirección corporal: Perfil lateral orientado hacia lo que observa.

Es la acción de la ficha y no se cambia. Si la acción no se puede representar sin agregar un objeto que no está en el inventario de la §5, frenar y avisar.

**Y al revés, que es el caso que falló tres veces:** si un objeto autorizado de la §5 no entra en la pose tal como está descripta, **el objeto no se descarta**. Se ajusta la pose lo mínimo para que entre, conservando la dirección corporal y la diagonal. Una silueta de carrera con los dos puños cerrados no deja mano para un bastón, y la salida no es correr sin el bastón: es que una mano lo lleve. Declarar el ajuste en el preflight.

## 4. Silueta y composición

- **Firma de silueta:** Arco largo rompiendo un lateral + cuerpo de cazadora en eje diagonal + capa corta o faldón práctico.
- **Composición:** Espacio negativo claro delante de la mirada; el arco debe romper el contorno sin encerrarla.
- **Densidad visual:** media (matriz: 5 de 10).

- **Cuerpo, y esto manda sobre cualquier intuición:** joven, delgado y liviano, sin masa muscular marcada, hombros de ancho medio, de escala humana.

La contextura sale de acá y no de lo que el personaje representa. Un dios no es corpulento por ser dios, ni un héroe es musculoso por ser héroe: si estos valores piden un cuerpo liviano, va un cuerpo liviano. **Sin abdominales marcados, sin deltoides separados, sin bíceps de gimnasio y sin espalda en V** salvo que la masa y los hombros de arriba lo pidan expresamente.

Los quince ejes completos, como límites de diseño y no como sugerencia (EV edad visual, MC masa corporal, EA escala aparente, AF angulosidad facial, CO contorno superior, AC apertura corporal, DP dinamismo de pose, VD verticalidad, DV densidad visual, OV oscuridad, DI dependencia del identificador, AN anchura de hombros, PF protagonismo de fondo, RM rigidez de materiales, RA rareza anatómica):

| EV | MC | EA | AF | CO | AC | DP | VD | DV | OV | DI | AN | PF | RM | RA |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 4 | 4 | 6 | 5 | 2 | 4 | 3 | 6 | 5 | 4 | 8 | 4 | 6 | 6 | 1 |

Prueba de silueta: reducida a mancha negra, tiene que seguir distinguiéndose de los personajes de la §7.

## 5. Inventario cerrado

Lo único que puede verse:

1. **Arco** — identificador principal. ADN.
2. **Pistas secundarias autorizadas, y van en la imagen:** Luna y animal salvaje, sólo si no compite. ADN. Subordinadas al identificador, nunca compitiendo con él, pero presentes.
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

**Par de Espejo: Skadi.** El módulo Espejo de los Mundos los muestra enfrentados en pantalla, así que las dos cartas tienen que separarse solas a simple vista. Es el par donde un parecido cuesta doble.

**Contra Pentesilea.**

| | Artemisa | Pentesilea |
|---|---|---|
| Cabello | castaño muy oscuro | negro |
| Textura | lacio recogido alto | trenzado corto |
| Piel | canela | oliva media |
| Ojos | ámbar | gris oscuro |

Silueta de Pentesilea, para no repetirla: escudo de amazona separado del torso + postura amplia + armadura con geometría distinta a Atenea.

Pose de Pentesilea, para no repetirla: mirada hacia fuera de cuadro y postura de campo; no combate explícito.

Ejes numéricos que ya los separan: edad visual 4 contra 7, masa corporal 4 contra 7, apertura corporal 4 contra 7, densidad visual 5 contra 8.

**Contra Atalanta.**

| | Artemisa | Atalanta |
|---|---|---|
| Cabello | castaño muy oscuro | negro |
| Textura | lacio recogido alto | crespo recogido alto |
| Piel | canela | castaña media |
| Ojos | ámbar | marrón muy oscuro |

Silueta de Atalanta, para no repetirla: piernas largas en carrera + arco bajo + una manzana de oro como punto lateral.

Pose de Atalanta, para no repetirla: cuerpo inclinado en carrera física; arco bajo, no en uso.

Ejes numéricos que ya los separan: dinamismo de pose 3 contra 10, apertura corporal 4 contra 8, verticalidad 6 contra 4, densidad visual 5 contra 7.

**Atención: 10 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Contra Atenea.**

| | Artemisa | Atenea |
|---|---|---|
| Cabello | castaño muy oscuro | castaño ceniza |
| Textura | lacio recogido alto | ondulado recogido compacto |
| Piel | canela | oliva clara |
| Ojos | ámbar | gris claro |

Silueta de Atenea, para no repetirla: casco/cresta + escudo desplazado + línea de lanza o arma defensiva sólo si la referencia aprobada la conserva.

Pose de Atenea, para no repetirla: escudo en diagonal baja y mano libre indicando estrategia; no combate ni simetría de estatua.

Ejes numéricos que ya los separan: protagonismo de fondo 6 contra 3, rigidez de materiales 6 contra 9, angulosidad facial 5 contra 7, densidad visual 5 contra 7.

**Atención: 11 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Contra Skadi.**

| | Artemisa | Skadi |
|---|---|---|
| Cabello | castaño muy oscuro ⚠ igual | castaño muy oscuro |
| Textura | lacio recogido alto | trenzado contenido |
| Piel | canela | clara pálida |
| Ojos | ámbar | gris hielo |

Silueta de Skadi, para no repetirla: esquís/tablas largos en diagonal + arco en reposo + piernas muy definidas por postura de montaña.

Pose de Skadi, para no repetirla: como frenando sobre nieve; arco en reposo.

Ejes numéricos que ya los separan: dinamismo de pose 3 contra 8, edad visual 4 contra 7, angulosidad facial 5 contra 8, apertura corporal 4 contra 7.

Criterio de la ficha: Atalanta, Pentesilea y Atenea. Diferenciar por calma vigilante, menor masa guerrera y ausencia de carrera o escudo dominante.

La diferencia no puede depender sólo del color, del fondo, del objeto sostenido, del peinado ni de una prenda. Matriz §4.1: el objeto no salva un clon.

## 8. Encuadre

Vertical 3:4. Figura al 70–80% del alto del cuadro. Zona limpia detrás de la cabeza o del foco principal.

Avatar circular, como restricción invisible: Rostro de perfil + arco o creciente lunar. No se dibuja ningún círculo, medallón, marco, inset ni retrato secundario.

## 9. Registro

Cálido, despierto, concentrado. No hace falta que sonría. Sin amenaza, sin crueldad, sin solemnidad genérica repetida de otra carta. La emoción sale de la historia del personaje y de lo que está haciendo.

## 10. Contaminación a evitar

**Pendiente de la investigación** del lote correspondiente de `Documentacion/prompt_investigacion_85.md`, campo `contaminacion_pop`. No bloquea la generación, pero dejarlo vacío es aceptar el riesgo a ciegas: la contaminación de cultura pop fue la falla más frecuente de la tanda anterior y la más difícil de ver desde adentro.

Nada de Marvel, Disney, DC, anime conocido ni videojuegos, sea o no de esta lista.

## 11. Antes de generar

Mostrar cinco líneas y esperar OK: qué se ve, cuál es el detalle reconocible, el inventario con su fuente, contra quién se separa y con qué diferencia concreta, y de dónde sale el escenario.

Después de generar, declarar cuatro cosas: qué objetos quedaron en la imagen que no estaban en el inventario; **qué elementos autorizados de la §5 no aparecieron y por qué**; qué campos de esta orden no se cumplieron; y los once puntos del gate de `estilo_visual_aprobado.md` §9, que ahora son doce.

El segundo control es tan importante como el primero y es el que faltaba hasta el 2026-09-14: una imagen puede cumplir el inventario cerrado al pie de la letra y seguir siendo una carta fallada por no mostrar nada de lo que hace reconocible al personaje.
