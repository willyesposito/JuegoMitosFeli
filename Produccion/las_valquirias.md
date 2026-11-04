# Orden de producción — Las Valquirias

**Completitud mecánica: COMPLETA.** Campos obligatorios y referencias comprobados; vestimenta opcional con alternativa general cuando falta.
**Validación visual: PENDIENTE.** Compilar no acredita silueta, pose, composición, avatar ni colisión; tampoco aprueba identidad, inventario o separación.

**Imagen actual:** `imagenes/valquirias.jpg`. Su existencia no implica aprobación ni reemplazo automático; consultar la evaluación vigente.

**Se lee junto con:** `Documentacion/estilo_visual_aprobado.md`. Nada más.

> Generada por `herramientas/generar-ordenes.py`. Para cambiarla, editar la fuente (el ADN, la matriz, `personajes.json` o `herramientas/identidad_visual.py`) y volver a generar. Editar este archivo a mano se pierde.

---

## 1. Identidad

| Campo | Valor | Origen |
|---|---|---|
| Mitología | nordica | `personajes.json` |
| Tier | normal | `personajes.json` |
| Familia de encuadre | grupo | ADN |
| Edad y contextura | Tres figuras adultas con edades aparentes/contexturas diferentes para comunicar colectivo sin copias. | ADN |
| Rostro y cabello | Tres rostros, peinados y volúmenes claramente distintos dentro del mismo vocabulario nórdico; ninguna clonación facial. | ADN |
| Cabello, piel y ojos | por integrante, ver abajo | decisión de diseño coordinada |

**Integrantes.** Parentesco o pertenencia visible, sin clonación. Cada uno cambia al menos dos de los cuatro valores.

| Integrante | Cabello | Textura | Piel | Ojos |
|---|---|---|---|---|
| la que dirige | pelirrojo | crespo suelto | clara rosada con pecas | verde oliva |
| la más joven | negro | lacio | castaña oscura | marrón muy oscuro |
| la de más edad | rubio ceniza | trenzas gruesas | clara rosada | azul gris |

## 2. Detalle reconocible

**Grupo de jinetes del cielo.**

Dones declarados en `personajes.json`: Jinetes del cielo con armaduras brillantes; Eligen a los más valientes.

Ícono de la carta en la colección: `valquiria`. Dependencia del identificador en la matriz: 5 de 10.

## 3. Acción y pose

Una dirige y dos completan la lectura con acciones propias; todas montadas y activas.

Dirección corporal: Barrido ascendente lateral con direcciones complementarias, no idénticas.

Es la acción de la ficha y no se cambia. Si la acción no se puede representar sin agregar un detalle, aplicar la regla narrativa de la §5 y documentarlo en el preflight; verificar fuentes para nuevos atributos míticos.

**Y al revés, que es el caso que falló tres veces:** si un objeto exigido de la §5 no entra en la pose tal como está descripta, **el objeto no se descarta**. Se ajusta la pose lo mínimo para que entre, conservando la dirección corporal y la diagonal. Una silueta de carrera con los dos puños cerrados no deja mano para un bastón, y la salida no es correr sin el bastón: es que una mano lo lleve. Declarar el ajuste en el preflight. Una pista condicional sólo se exige si se cumple su condición; las alternativas con «o» se conservan como alternativas, sin exigir todas a la vez.

## 4. Silueta y composición

- **Firma de silueta:** Tres jinetes principales en alturas distintas + armaduras brillantes + diagonales de monturas; nunca formación militar simétrica.
- **Composición:** Aurora arriba/fondo y tres niveles de altura; conservar separaciones claras entre rostros, monturas y diagonales.
- **Densidad visual:** alta (matriz: 10 de 10).

- **Cuerpo, y esto manda sobre cualquier intuición:** de edad media, de contextura media, atlética sin volumen, hombros de ancho medio, de escala algo mayor que humana.

La contextura sale de acá y no de lo que el personaje representa. Un dios no es corpulento por ser dios, ni un héroe es musculoso por ser héroe: si estos valores piden un cuerpo liviano, va un cuerpo liviano. **Sin abdominales marcados, sin deltoides separados, sin bíceps de gimnasio y sin espalda en V** salvo que la masa y los hombros de arriba lo pidan expresamente.

Los quince ejes completos, como límites de diseño y no como sugerencia (EV edad visual, MC masa corporal, EA escala aparente, AF angulosidad facial, CO contorno superior, AC apertura corporal, DP dinamismo de pose, VD verticalidad, DV densidad visual, OV oscuridad, DI dependencia del identificador, AN anchura de hombros, PF protagonismo de fondo, RM rigidez de materiales, RA rareza anatómica):

| EV | MC | EA | AF | CO | AC | DP | VD | DV | OV | DI | AN | PF | RM | RA |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 5 | 6 | 8 | 6 | 6 | 9 | 9 | 9 | 10 | 3 | 5 | 6 | 8 | 9 | 10 |

Prueba de silueta: reducida a mancha negra, tiene que seguir distinguiéndose de los personajes de la §7.

## 5. Inventario narrativo y detalles trazables

Elementos de base; completar con detalles narrativos trazables según la regla siguiente:

1. **Grupo de jinetes del cielo** — identificador principal. ADN.
2. **Pistas secundarias autorizadas:** armaduras brillantes y aurora boreal. ADN. Subordinadas al identificador. Respetar las condiciones y alternativas del texto: «si hace falta» y «cuando corresponda» no exigen presencia incondicional; «o» no exige ambas opciones.
3. **Vestimenta del vocabulario nórdico:** resolver cortes, capas, tejidos y detalles según identidad y episodio; documentar decisiones artísticas en el preflight.

**Regla vigente — 2026-11-04: riqueza narrativa e identidad mítica.** Priorizar que se entienda quién es el personaje y qué episodio representa. Se permiten prendas de cortes distintos, capas, tejidos, bordados, cierres, equipo, desgaste y objetos narrativos cuando aporten identidad o sentido a la escena; no hay un máximo fijo de prendas ni de detalles. Antes de generar, registrar los detalles elegidos en la ficha o el preflight y distinguir: (a) atributo o episodio respaldado, citando fuente; (b) interpretación artística autorizada, sin presentarla como dato del mito. La autorización general de Willy permite estas decisiones de diseño sin pedir aprobación por cada cierre o material. Para nuevos poderes, animales, símbolos de identidad o hechos narrativos, verificar la fuente y actualizar la ficha antes de dibujarlos. No agregar por rutina ni copiar el mismo kit entre personajes. Mantener rostro, identificador, acción, silueta y jerarquía legibles. Revisar también las omisiones de elementos exigidos; respetar condiciones y alternativas. Esta regla reemplaza las prohibiciones generales de adornos, el inventario cerrado absoluto y la base lisa obligatoria. Las exclusiones específicas contra errores míticos, anacronismos y clones siguen vigentes salvo decisión posterior expresa. Frigg puede conservar el acabado fotográfico aceptado por Willy; esta excepción no cambia el estilo general de la colección.

**La magia es obligatoria y sale del identificador.** El detalle reconocible de la §2 no se muestra apoyado y quieto: se muestra funcionando, el entorno reacciona, y el don produce su fenómeno visible. Estela, chispas, partículas, luz propia que ilumina de verdad, deformación del aire, materia que responde: todo eso está autorizado y va sin timidez. Esto no agrega ningún objeto al inventario de arriba, porque lo que se enciende es lo que el personaje ya tiene.

Las tres capas y las cuatro reglas están en `estilo_visual_aprobado.md` §7, que gobierna. En resumen: el efecto nace del don y se puede señalar de dónde salió; no tapa la cara ni el identificador; el color sale del don o del material y nunca es el dorado por default; y el fenómeno es propio de este personaje y no el mismo de las otras 84. Queda afuera el aura que envuelve el cuerpo y disuelve la silueta, el halo detrás de la cabeza, las runas o pseudo-texto flotando, y cualquier efecto que no se pueda trazar al don. Si el identificador no da para un fenómeno, la carta va con el objeto en actividad y el entorno reaccionando, y no se inventa uno.

**Evitar kit nórdico repetido:** nudo celta, cuello o ribete de piel, broche redondo, medallón, botas envueltas con tiras, cinturón de hebilla decorada, trenzas con anillos de metal. Sus piezas no se prohíben por sí mismas si tienen sentido documentado; ese conjunto se repitió en seis cartas nórdicas y es la razón por la que parecen del mismo disfraz. Una mitología aporta vocabulario, no uniforme.

## 6. Escenario

Sale de la acción de la §3 y de las pistas autorizadas de la §5, en ese orden. El fondo se diseña después del personaje, nunca antes.

Protagonismo de fondo asignado: 8 de 10, o sea que el contexto es esencial para leer la carta.

**Sin** pedestal de roca ni acantilado heroico, **sin** templo griego de decoración, **sin** Olimpo, **sin** cielo azul con nubes por defecto, **sin** arquitectura de fantasía, **sin** paisaje panorámico que compita en nitidez. Quince de las treinta y una imágenes anteriores tenían el pedestal y once el templo.

El fondo va con profundidad de campo real: menos nitidez y menos contraste que el personaje. Es el recurso principal para cumplir la jerarquía personaje → identificador → contexto.

## 7. Separación obligatoria

**Contra Skadi.**

Silueta de Skadi, para no repetirla: esquís/tablas largos en diagonal + arco en reposo + piernas muy definidas por postura de montaña.

Pose de Skadi, para no repetirla: como frenando sobre nieve; arco en reposo.

Ejes numéricos que ya los separan: rareza anatómica 10 contra 1, verticalidad 9 contra 3, contorno superior 6 contra 2, densidad visual 10 contra 7.

**Contra Pentesilea.**

Silueta de Pentesilea, para no repetirla: escudo de amazona separado del torso + postura amplia + armadura con geometría distinta a Atenea.

Pose de Pentesilea, para no repetirla: mirada hacia fuera de cuadro y postura de campo; no combate explícito.

Ejes numéricos que ya los separan: rareza anatómica 10 contra 1, contorno superior 6 contra 1, dinamismo de pose 9 contra 4, protagonismo de fondo 8 contra 4.

Criterio de la ficha: Cualquier guerrera individual, especialmente Skadi/Pentesilea. El riesgo principal es que el recorte o la composición conviertan al colectivo en “una sola valquiria genérica”.

La diferencia no puede depender sólo del color, del fondo, del objeto sostenido, del peinado ni de una prenda. Matriz §4.1: el objeto no salva un clon.

## 8. Encuadre

Vertical 3:4. Figura al 70–80% del alto del cuadro. Zona limpia detrás de la cabeza o del foco principal.

Avatar circular, como restricción invisible: Deben entrar al menos dos rostros claros + una tercera silueta inequívoca + brillo de aurora; debe leer “grupo”. No se dibuja ningún círculo, medallón, marco, inset ni retrato secundario.

## 9. Registro

Cálido, despierto, concentrado. No hace falta que sonría. Sin amenaza, sin crueldad, sin solemnidad genérica repetida de otra carta. La emoción sale de la historia del personaje y de lo que está haciendo.

## 10. Contaminación a evitar

Merida de *Valiente* (Pixar, 2012) en la pelirroja; ya contaminó la imagen anterior. También la brünnhilde operática con casco alado, que no es nórdica.

Nada de Marvel, Disney, DC, anime conocido ni videojuegos, sea o no de esta lista.

## 11. Antes de generar

Mostrar cinco líneas y esperar OK: qué se ve, cuál es el detalle reconocible, el inventario con su fuente, contra quién se separa y con qué diferencia concreta, y de dónde sale el escenario.

Después de generar, declarar cuatro cosas: qué objetos quedaron en la imagen que no estaban en el inventario; **qué elementos exigidos de la §5 no aparecieron y por qué, qué condiciones no se cumplieron y qué alternativas se usaron**; qué campos de esta orden no se cumplieron; y los once puntos del gate de `estilo_visual_aprobado.md` §9, que ahora son doce.

El segundo control es tan importante como el primero y es el que faltaba hasta el 2026-09-14: una imagen puede cumplir el inventario cerrado al pie de la letra y seguir siendo una carta fallada por no mostrar nada de lo que hace reconocible al personaje.
