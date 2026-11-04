# Orden de producción — Helena

**Completitud mecánica: COMPLETA.** Campos obligatorios y referencias comprobados; vestimenta opcional con alternativa general cuando falta.
**Validación visual: PENDIENTE.** Compilar no acredita silueta, pose, composición, avatar ni colisión; tampoco aprueba identidad, inventario o separación.

**Imagen actual:** `imagenes/helena.jpg`. Su existencia no implica aprobación ni reemplazo automático; consultar la evaluación vigente.

**Se lee junto con:** `Documentacion/estilo_visual_aprobado.md`. Nada más.

> Generada por `herramientas/generar-ordenes.py`. Para cambiarla, editar la fuente (el ADN, la matriz, `personajes.json` o `herramientas/identidad_visual.py`) y volver a generar. Editar este archivo a mano se pierde.

---

## 1. Identidad

| Campo | Valor | Origen |
|---|---|---|
| Mitología | griega | `personajes.json` |
| Tier | plateado | `personajes.json` |
| Familia de encuadre | figura humana | ADN |
| Edad y contextura | Adulta joven-madura; alta y esbelta. | ADN |
| Rostro y cabello | Rostro oval largo; cabello largo con ondas pesadas y controladas. | ADN |
| Cabello, color | castaño claro dorado | decisión de diseño visual, sin atestación localizada; revisable por la investigación |
| Cabello, textura | ondas pesadas | decisión de diseño visual, sin atestación localizada; revisable por la investigación |
| Piel | clara dorada | decisión de diseño visual, sin atestación localizada; revisable por la investigación |
| Ojos | gris | decisión de diseño visual, sin atestación localizada; revisable por la investigación |

## 2. Detalle reconocible

**Conexión con el juramento y Troya expresada por contexto.**

Dones declarados en `personajes.json`: Belleza legendaria en toda Grecia; Figura central de la causa de la guerra de Troya.

Ícono de la carta en la colección: `espejo`. Dependencia del identificador en la matriz: 3 de 10.

> **[REVISAR] Control de reconocimiento pendiente.** Coincidencia léxica sin evaluación textual documentada. Revisar acción, silueta, ambiente, pistas y avatar antes de concluir si hay un faltante material. No exige un objeto nuevo ni investigación externa. La validación visual sigue pendiente.

## 3. Acción y pose

Quietud contemplativa con mirada lejana; atmósfera de consecuencia, no romance.

Dirección corporal: Tres cuartos orientada hacia la distancia.

Es la acción de la ficha y no se cambia. Si la acción no se puede representar sin agregar un detalle, aplicar la regla narrativa de la §5 y documentarlo en el preflight; verificar fuentes para nuevos atributos míticos.

**Y al revés, que es el caso que falló tres veces:** si un objeto exigido de la §5 no entra en la pose tal como está descripta, **el objeto no se descarta**. Se ajusta la pose lo mínimo para que entre, conservando la dirección corporal y la diagonal. Una silueta de carrera con los dos puños cerrados no deja mano para un bastón, y la salida no es correr sin el bastón: es que una mano lo lleve. Declarar el ajuste en el preflight. Una pista condicional sólo se exige si se cumple su condición; las alternativas con «o» se conservan como alternativas, sin exigir todas a la vez.

## 4. Silueta y composición

- **Firma de silueta:** Telas amplias y verticales + postura casi inmóvil; sin depender de accesorios de belleza.
- **Composición:** Velas o arquitectura de Troya muy subordinadas; mucho aire alrededor de una figura austera.
- **Densidad visual:** baja-media (matriz: 5 de 10).

- **Cuerpo, y esto manda sobre cualquier intuición:** de edad media, delgado y liviano, sin masa muscular marcada, hombros de ancho medio, de escala algo mayor que humana.

La contextura sale de acá y no de lo que el personaje representa. Un dios no es corpulento por ser dios, ni un héroe es musculoso por ser héroe: si estos valores piden un cuerpo liviano, va un cuerpo liviano. **Sin abdominales marcados, sin deltoides separados, sin bíceps de gimnasio y sin espalda en V** salvo que la masa y los hombros de arriba lo pidan expresamente.

Los quince ejes completos, como límites de diseño y no como sugerencia (EV edad visual, MC masa corporal, EA escala aparente, AF angulosidad facial, CO contorno superior, AC apertura corporal, DP dinamismo de pose, VD verticalidad, DV densidad visual, OV oscuridad, DI dependencia del identificador, AN anchura de hombros, PF protagonismo de fondo, RM rigidez de materiales, RA rareza anatómica):

| EV | MC | EA | AF | CO | AC | DP | VD | DV | OV | DI | AN | PF | RM | RA |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 5 | 4 | 7 | 3 | 7 | 3 | 1 | 9 | 5 | 4 | 3 | 4 | 7 | 4 | 1 |

Prueba de silueta: reducida a mancha negra, tiene que seguir distinguiéndose de los personajes de la §7.

## 5. Inventario narrativo y detalles trazables

Elementos de base; completar con detalles narrativos trazables según la regla siguiente:

1. **Conexión con el juramento y Troya expresada por contexto** — identificador principal. ADN.
2. **Pistas secundarias autorizadas:** viaje/Troya en fondo; ningún objeto inventado para “representar belleza”. ADN. Subordinadas al identificador. Respetar las condiciones y alternativas del texto: «si hace falta» y «cuando corresponda» no exigen presencia incondicional; «o» no exige ambas opciones.
3. **Vestimenta del vocabulario griego:** resolver cortes, capas, tejidos y detalles según identidad y episodio; documentar decisiones artísticas en el preflight.

**Regla vigente — 2026-11-04: riqueza narrativa e identidad mítica.** Priorizar que se entienda quién es el personaje y qué episodio representa. Se permiten prendas de cortes distintos, capas, tejidos, bordados, cierres, equipo, desgaste y objetos narrativos cuando aporten identidad o sentido a la escena; no hay un máximo fijo de prendas ni de detalles. Antes de generar, registrar los detalles elegidos en la ficha o el preflight y distinguir: (a) atributo o episodio respaldado, citando fuente; (b) interpretación artística autorizada, sin presentarla como dato del mito. La autorización general de Willy permite estas decisiones de diseño sin pedir aprobación por cada cierre o material. Para nuevos poderes, animales, símbolos de identidad o hechos narrativos, verificar la fuente y actualizar la ficha antes de dibujarlos. No agregar por rutina ni copiar el mismo kit entre personajes. Mantener rostro, identificador, acción, silueta y jerarquía legibles. Revisar también las omisiones de elementos exigidos; respetar condiciones y alternativas. Esta regla reemplaza las prohibiciones generales de adornos, el inventario cerrado absoluto y la base lisa obligatoria. Las exclusiones específicas contra errores míticos, anacronismos y clones siguen vigentes salvo decisión posterior expresa. Frigg puede conservar el acabado fotográfico aceptado por Willy; esta excepción no cambia el estilo general de la colección.

**La magia es obligatoria y sale del identificador.** El detalle reconocible de la §2 no se muestra apoyado y quieto: se muestra funcionando, el entorno reacciona, y el don produce su fenómeno visible. Estela, chispas, partículas, luz propia que ilumina de verdad, deformación del aire, materia que responde: todo eso está autorizado y va sin timidez. Esto no agrega ningún objeto al inventario de arriba, porque lo que se enciende es lo que el personaje ya tiene.

Las tres capas y las cuatro reglas están en `estilo_visual_aprobado.md` §7, que gobierna. En resumen: el efecto nace del don y se puede señalar de dónde salió; no tapa la cara ni el identificador; el color sale del don o del material y nunca es el dorado por default; y el fenómeno es propio de este personaje y no el mismo de las otras 84. Queda afuera el aura que envuelve el cuerpo y disuelve la silueta, el halo detrás de la cabeza, las runas o pseudo-texto flotando, y cualquier efecto que no se pueda trazar al don. Si el identificador no da para un fenómeno, la carta va con el objeto en actividad y el entorno reaccionando, y no se inventa uno.

## 6. Escenario

Sale de la acción de la §3 y de las pistas autorizadas de la §5, en ese orden. El fondo se diseña después del personaje, nunca antes.

Protagonismo de fondo asignado: 7 de 10, o sea que el contexto acompaña sin llevar peso.

**Sin** pedestal de roca ni acantilado heroico, **sin** templo griego de decoración, **sin** Olimpo, **sin** cielo azul con nubes por defecto, **sin** arquitectura de fantasía, **sin** paisaje panorámico que compita en nitidez. Quince de las treinta y una imágenes anteriores tenían el pedestal y once el templo.

El fondo va con profundidad de campo real: menos nitidez y menos contraste que el personaje. Es el recurso principal para cumplir la jerarquía personaje → identificador → contexto.

## 7. Separación obligatoria

**Clones comprobados en la auditoría del 2026-09-14.** Estos pares salieron de mirar las imágenes reales y **no figuraban en el campo de riesgos de la ficha**: la lista del ADN se armó sobre el papel y no vio los pares que después fallaron.

- **Calipso**: misma mujer con otro objeto al lado.
- **Penélope**: misma mujer con otro objeto al lado.

**Contra Afrodita.**

| | Helena | Afrodita |
|---|---|---|
| Cabello | castaño claro dorado | rubio ceniza |
| Textura | ondas pesadas | ondulado amplio |
| Piel | clara dorada | clara neutra |
| Ojos | gris | verde gris |

Silueta de Afrodita, para no repetirla: cabello y telas ondulantes formando curvas abiertas; sin pose pin-up ni sexualización.

Pose de Afrodita, para no repetirla: cuerpo relajado y manos bajas; belleza visual sin depender de una pose ornamental.

Ejes numéricos que ya los separan: apertura corporal 3 contra 7, verticalidad 9 contra 6, oscuridad 4 contra 1, dependencia del identificador 3 contra 6.

**Atención: 9 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Contra Casandra.**

| | Helena | Casandra |
|---|---|---|
| Cabello | castaño claro dorado | negro |
| Textura | ondas pesadas | lacio largo de poco volumen |
| Piel | clara dorada | oliva media |
| Ojos | gris | marrón muy oscuro |

Silueta de Casandra, para no repetirla: cuerpo inclinado hacia adelante + una mano señalando lejos + otra abierta en frustración contenida.

Pose de Casandra, para no repetirla: advertencia activa mediante mirada y manos; ninguna magia lanzada.

Ejes numéricos que ya los separan: angulosidad facial 3 contra 8, apertura corporal 3 contra 8, dinamismo de pose 1 contra 6, verticalidad 9 contra 6.

**Atención: 10 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Contra Calipso.**

| | Helena | Calipso |
|---|---|---|
| Cabello | castaño claro dorado | castaño medio |
| Textura | ondas pesadas | largo suelto ondulado por humedad |
| Piel | clara dorada | canela |
| Ojos | gris | marrón cálido |

Silueta de Calipso, para no repetirla: figura aislada + telas largas verticales + vegetación insular lateral; sin objeto mágico inventado.

Pose de Calipso, para no repetirla: contemplación inmóvil desde la isla.

Ejes numéricos que ya los separan: protagonismo de fondo 7 contra 10, rigidez de materiales 4 contra 1, edad visual 5 contra 7, contorno superior 7 contra 9.

**Atención: 9 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Contra Penélope.**

| | Helena | Penélope |
|---|---|---|
| Cabello | castaño claro dorado | castaño oscuro con hilos grises |
| Textura | ondas pesadas | recogido bajo |
| Piel | clara dorada | oliva media |
| Ojos | gris | marrón cálido |

Silueta de Penélope, para no repetirla: telar formando un marco vertical parcial + brazos ocupados a distinta altura.

Pose de Penélope, para no repetirla: trabajando con el hilo, sentada o de pie lateral; mirada fuera de cuadro en una pausa pensativa.

Ejes numéricos que ya los separan: contorno superior 7 contra 2, dependencia del identificador 3 contra 8, verticalidad 9 contra 6, edad visual 5 contra 7.

**Atención: 8 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

Criterio de la ficha: Afrodita y Casandra. Diferenciar de Afrodita por austeridad y ausencia de aura divina; de Casandra por quietud y falta de gesto urgente.

La diferencia no puede depender sólo del color, del fondo, del objeto sostenido, del peinado ni de una prenda. Matriz §4.1: el objeto no salva un clon.

## 8. Encuadre

Vertical 3:4. Figura al 70–80% del alto del cuadro. Zona limpia detrás de la cabeza o del foco principal.

Avatar circular, como restricción invisible: Rostro + una pista clara de viaje o Troya. No se dibuja ningún círculo, medallón, marco, inset ni retrato secundario.

## 9. Registro

Cálido, despierto, concentrado. No hace falta que sonría. Sin amenaza, sin crueldad, sin solemnidad genérica repetida de otra carta. La emoción sale de la historia del personaje y de lo que está haciendo.

## 10. Contaminación a evitar

*Troya* (2004).

Nada de Marvel, Disney, DC, anime conocido ni videojuegos, sea o no de esta lista.

## 11. Antes de generar

Mostrar cinco líneas y esperar OK: qué se ve, cuál es el detalle reconocible, el inventario con su fuente, contra quién se separa y con qué diferencia concreta, y de dónde sale el escenario.

Después de generar, declarar cuatro cosas: qué objetos quedaron en la imagen que no estaban en el inventario; **qué elementos exigidos de la §5 no aparecieron y por qué, qué condiciones no se cumplieron y qué alternativas se usaron**; qué campos de esta orden no se cumplieron; y los once puntos del gate de `estilo_visual_aprobado.md` §9, que ahora son doce.

El segundo control es tan importante como el primero y es el que faltaba hasta el 2026-09-14: una imagen puede cumplir el inventario cerrado al pie de la letra y seguir siendo una carta fallada por no mostrar nada de lo que hace reconocible al personaje.
