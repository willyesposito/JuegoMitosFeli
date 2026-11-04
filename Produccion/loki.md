# Orden de producción — Loki

**Completitud mecánica: COMPLETA.** Campos obligatorios y referencias comprobados; vestimenta opcional con alternativa general cuando falta.
**Validación visual: PENDIENTE.** Compilar no acredita silueta, pose, composición, avatar ni colisión; tampoco aprueba identidad, inventario o separación.

**Imagen actual:** `imagenes/loki.jpg`. Su existencia no implica aprobación ni reemplazo automático; consultar la evaluación vigente.

**Se lee junto con:** `Documentacion/estilo_visual_aprobado.md`. Nada más.

> Generada por `herramientas/generar-ordenes.py`. Para cambiarla, editar la fuente (el ADN, la matriz, `personajes.json` o `herramientas/identidad_visual.py`) y volver a generar. Editar este archivo a mano se pierde.

---

## 1. Identidad

| Campo | Valor | Origen |
|---|---|---|
| Mitología | nordica | `personajes.json` |
| Tier | dorado | `personajes.json` |
| Familia de encuadre | figura humana | ADN |
| Edad y contextura | Adulto joven-maduro; delgado y flexible. | ADN |
| Rostro y cabello | Rostro estrecho y móvil; cabello medio asimétrico. | ADN |
| Cabello, color | castaño rojizo oscuro | decisión de diseño visual, sin atestación localizada; revisable por la investigación |
| Cabello, textura | medio asimétrico | decisión de diseño visual, sin atestación localizada; revisable por la investigación |
| Piel | clara pálida | decisión de diseño visual, sin atestación localizada; revisable por la investigación |
| Ojos | verde | decisión de diseño visual, sin atestación localizada; revisable por la investigación |

## 2. Detalle reconocible

**Transformación/ingenio expresados mediante comportamiento corporal.**

Dones declarados en `personajes.json`: Cambia de forma; Ingenio sin límites (a veces para bien, a veces para lío).

Ícono de la carta en la colección: `zorro`. Dependencia del identificador en la matriz: 3 de 10.

> **[REVISAR] Control de reconocimiento pendiente.** Coincidencia léxica sin evaluación textual documentada. Revisar acción, silueta, ambiente, pistas y avatar antes de concluir si hay un faltante material. No exige un objeto nuevo ni investigación externa. La validación visual sigue pendiente.

## 3. Acción y pose

Mira hacia un lado mientras una mano parece terminar una travesura; la otra queda activa en una acción distinta.

Dirección corporal: Tres cuartos torsionado, con cabeza y torso orientados de manera no completamente coincidente.

Es la acción de la ficha y no se cambia. Si la acción no se puede representar sin agregar un detalle, aplicar la regla narrativa de la §5 y documentarlo en el preflight; verificar fuentes para nuevos atributos míticos.

**Y al revés, que es el caso que falló tres veces:** si un objeto exigido de la §5 no entra en la pose tal como está descripta, **el objeto no se descarta**. Se ajusta la pose lo mínimo para que entre, conservando la dirección corporal y la diagonal. Una silueta de carrera con los dos puños cerrados no deja mano para un bastón, y la salida no es correr sin el bastón: es que una mano lo lleve. Declarar el ajuste en el preflight. Una pista condicional sólo se exige si se cumple su condición; las alternativas con «o» se conservan como alternativas, sin exigir todas a la vez.

## 4. Silueta y composición

- **Firma de silueta:** Cuerpo en S + manos separadas en acciones distintas + borde de capa irregular; sin corona ni cuernos inventados.
- **Composición:** Sombra o reflejo con forma levemente distinta puede sugerir cambio de forma sin agregar criatura concreta; mantener aire alrededor de ambas manos.
- **Densidad visual:** media (matriz: 6 de 10).

- **Cuerpo, y esto manda sobre cualquier intuición:** de edad media, delgado y liviano, sin masa muscular marcada, hombros estrechos, de escala humana.

La contextura sale de acá y no de lo que el personaje representa. Un dios no es corpulento por ser dios, ni un héroe es musculoso por ser héroe: si estos valores piden un cuerpo liviano, va un cuerpo liviano. **Sin abdominales marcados, sin deltoides separados, sin bíceps de gimnasio y sin espalda en V** salvo que la masa y los hombros de arriba lo pidan expresamente.

Los quince ejes completos, como límites de diseño y no como sugerencia (EV edad visual, MC masa corporal, EA escala aparente, AF angulosidad facial, CO contorno superior, AC apertura corporal, DP dinamismo de pose, VD verticalidad, DV densidad visual, OV oscuridad, DI dependencia del identificador, AN anchura de hombros, PF protagonismo de fondo, RM rigidez de materiales, RA rareza anatómica):

| EV | MC | EA | AF | CO | AC | DP | VD | DV | OV | DI | AN | PF | RM | RA |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 5 | 3 | 6 | 8 | 8 | 4 | 7 | 5 | 6 | 6 | 3 | 3 | 4 | 4 | 1 |

Prueba de silueta: reducida a mancha negra, tiene que seguir distinguiéndose de los personajes de la §7.

## 5. Inventario narrativo y detalles trazables

Elementos de base; completar con detalles narrativos trazables según la regla siguiente:

1. **Transformación/ingenio expresados mediante comportamiento corporal** — identificador principal. ADN.
2. **Pistas secundarias autorizadas:** relación con Sif o Fenrir sólo cuando corresponda al contexto autorizado. ADN. Subordinadas al identificador. Respetar las condiciones y alternativas del texto: «si hace falta» y «cuando corresponda» no exigen presencia incondicional; «o» no exige ambas opciones.
3. **Vestimenta del vocabulario nórdico:** resolver cortes, capas, tejidos y detalles según identidad y episodio; documentar decisiones artísticas en el preflight.

**Regla vigente — 2026-11-04: riqueza narrativa e identidad mítica.** Priorizar que se entienda quién es el personaje y qué episodio representa. Se permiten prendas de cortes distintos, capas, tejidos, bordados, cierres, equipo, desgaste y objetos narrativos cuando aporten identidad o sentido a la escena; no hay un máximo fijo de prendas ni de detalles. Antes de generar, registrar los detalles elegidos en la ficha o el preflight y distinguir: (a) atributo o episodio respaldado, citando fuente; (b) interpretación artística autorizada, sin presentarla como dato del mito. La autorización general de Willy permite estas decisiones de diseño sin pedir aprobación por cada cierre o material. Para nuevos poderes, animales, símbolos de identidad o hechos narrativos, verificar la fuente y actualizar la ficha antes de dibujarlos. No agregar por rutina ni copiar el mismo kit entre personajes. Mantener rostro, identificador, acción, silueta y jerarquía legibles. Revisar también las omisiones de elementos exigidos; respetar condiciones y alternativas. Esta regla reemplaza las prohibiciones generales de adornos, el inventario cerrado absoluto y la base lisa obligatoria. Las exclusiones específicas contra errores míticos, anacronismos y clones siguen vigentes salvo decisión posterior expresa. Frigg puede conservar el acabado fotográfico aceptado por Willy; esta excepción no cambia el estilo general de la colección.

**La magia es obligatoria y sale del identificador.** El detalle reconocible de la §2 no se muestra apoyado y quieto: se muestra funcionando, el entorno reacciona, y el don produce su fenómeno visible. Estela, chispas, partículas, luz propia que ilumina de verdad, deformación del aire, materia que responde: todo eso está autorizado y va sin timidez. Esto no agrega ningún objeto al inventario de arriba, porque lo que se enciende es lo que el personaje ya tiene.

Las tres capas y las cuatro reglas están en `estilo_visual_aprobado.md` §7, que gobierna. En resumen: el efecto nace del don y se puede señalar de dónde salió; no tapa la cara ni el identificador; el color sale del don o del material y nunca es el dorado por default; y el fenómeno es propio de este personaje y no el mismo de las otras 84. Queda afuera el aura que envuelve el cuerpo y disuelve la silueta, el halo detrás de la cabeza, las runas o pseudo-texto flotando, y cualquier efecto que no se pueda trazar al don. Si el identificador no da para un fenómeno, la carta va con el objeto en actividad y el entorno reaccionando, y no se inventa uno.

**Evitar kit nórdico repetido:** nudo celta, cuello o ribete de piel, broche redondo, medallón, botas envueltas con tiras, cinturón de hebilla decorada, trenzas con anillos de metal. Sus piezas no se prohíben por sí mismas si tienen sentido documentado; ese conjunto se repitió en seis cartas nórdicas y es la razón por la que parecen del mismo disfraz. Una mitología aporta vocabulario, no uniforme.

## 6. Escenario

Sale de la acción de la §3 y de las pistas autorizadas de la §5, en ese orden. El fondo se diseña después del personaje, nunca antes.

Protagonismo de fondo asignado: 4 de 10, o sea que el fondo es prescindible: mínimo suficiente y nada más.

**Sin** pedestal de roca ni acantilado heroico, **sin** templo griego de decoración, **sin** Olimpo, **sin** cielo azul con nubes por defecto, **sin** arquitectura de fantasía, **sin** paisaje panorámico que compita en nitidez. Quince de las treinta y una imágenes anteriores tenían el pedestal y once el templo.

El fondo va con profundidad de campo real: menos nitidez y menos contraste que el personaje. Es el recurso principal para cumplir la jerarquía personaje → identificador → contexto.

## 7. Separación obligatoria

**Clones comprobados en la auditoría del 2026-09-14.** Estos pares salieron de mirar las imágenes reales y **no figuraban en el campo de riesgos de la ficha**: la lista del ADN se armó sobre el papel y no vio los pares que después fallaron.

- **Thor**: mismo castillo de fantasía con cascada al fondo.

**Par de Espejo: Hermes.** El módulo Espejo de los Mundos los muestra enfrentados en pantalla, así que las dos cartas tienen que separarse solas a simple vista. Es el par donde un parecido cuesta doble.

**Contra Hermes.**

| | Loki | Hermes |
|---|---|---|
| Cabello | castaño rojizo oscuro | cobrizo |
| Textura | medio asimétrico | rizado abierto |
| Piel | clara pálida | clara dorada con pecas |
| Ojos | verde | verde oliva |

Silueta de Hermes, para no repetirla: sandalias aladas abajo + paso largo + caduceo en alto en la mano adelantada mientras el otro brazo va en carrera, con diagonal corporal limpia. **Corrección del 2026-09-14:** decía "brazos opuestos en carrera", o sea los dos puños cerrados, y eso dejaba a Hermes sin mano para el caduceo. Tres imágenes seguidas salieron sin él resolviendo el choque a favor de la silueta, que es lo que la orden manda. El brazo que lleva el caduceo conserva el contrabalanceo de la carrera; no es una pose de presentación.

Pose de Hermes, para no repetirla: carrera terrestre, no vuelo frontal.

Ejes numéricos que ya los separan: dependencia del identificador 3 contra 9, angulosidad facial 8 contra 3, contorno superior 8 contra 4, apertura corporal 4 contra 8.

**Atención: 8 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Contra Thor.**

| | Loki | Thor |
|---|---|---|
| Cabello | castaño rojizo oscuro | cobrizo |
| Textura | medio asimétrico | ondulado grueso |
| Piel | clara pálida | clara rosada curtida |
| Ojos | verde | azul claro |

Silueta de Thor, para no repetirla: Mjölnir separado del cuerpo + capa corta o pieles que ensanchan la parte alta + piernas firmes.

Pose de Thor, para no repetirla: martillo bajo o lateral listo pero sin golpear; cuerpo preparado, no agresivo hacia cámara.

Ejes numéricos que ya los separan: masa corporal 3 contra 9, dependencia del identificador 3 contra 9, anchura de hombros 3 contra 9, rigidez de materiales 4 contra 8.

Criterio de la ficha: Hermes. Separarlo por menor velocidad física, mayor torsión, ambigüedad corporal y ausencia de eje limpio de carrera.

La diferencia no puede depender sólo del color, del fondo, del objeto sostenido, del peinado ni de una prenda. Matriz §4.1: el objeto no salva un clon.

## 8. Encuadre

Vertical 3:4. Figura al 70–80% del alto del cuadro. Zona limpia detrás de la cabeza o del foco principal.

Avatar circular, como restricción invisible: Rostro con ceja levantada + gesto claro de una mano. No se dibuja ningún círculo, medallón, marco, inset ni retrato secundario.

## 9. Registro

Cálido, despierto, concentrado. No hace falta que sonría. Sin amenaza, sin crueldad, sin solemnidad genérica repetida de otra carta. La emoción sale de la historia del personaje y de lo que está haciendo.

## 10. Contaminación a evitar

Loki de Marvel (pelo largo negro, verde y oro, cara alargada). Ya contaminó su imagen anterior.

Nada de Marvel, Disney, DC, anime conocido ni videojuegos, sea o no de esta lista.

## 11. Antes de generar

Mostrar cinco líneas y esperar OK: qué se ve, cuál es el detalle reconocible, el inventario con su fuente, contra quién se separa y con qué diferencia concreta, y de dónde sale el escenario.

Después de generar, declarar cuatro cosas: qué objetos quedaron en la imagen que no estaban en el inventario; **qué elementos exigidos de la §5 no aparecieron y por qué, qué condiciones no se cumplieron y qué alternativas se usaron**; qué campos de esta orden no se cumplieron; y los once puntos del gate de `estilo_visual_aprobado.md` §9, que ahora son doce.

El segundo control es tan importante como el primero y es el que faltaba hasta el 2026-09-14: una imagen puede cumplir el inventario cerrado al pie de la letra y seguir siendo una carta fallada por no mostrar nada de lo que hace reconocible al personaje.
