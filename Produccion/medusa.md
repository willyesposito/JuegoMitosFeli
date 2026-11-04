# Orden de producción — Medusa

**Completitud mecánica: COMPLETA.** Campos obligatorios y referencias comprobados; vestimenta opcional con alternativa general cuando falta.
**Validación visual: PENDIENTE.** Compilar no acredita silueta, pose, composición, avatar ni colisión; tampoco aprueba identidad, inventario o separación.

**Imagen actual:** `imagenes/medusa.png`. Su existencia no implica aprobación ni reemplazo automático; consultar la evaluación vigente.

**Se lee junto con:** `Documentacion/estilo_visual_aprobado.md`. Nada más.

> Generada por `herramientas/generar-ordenes.py`. Para cambiarla, editar la fuente (el ADN, la matriz, `personajes.json` o `herramientas/identidad_visual.py`) y volver a generar. Editar este archivo a mano se pierde.

---

## 1. Identidad

| Campo | Valor | Origen |
|---|---|---|
| Mitología | griega | `personajes.json` |
| Tier | normal | `personajes.json` |
| Familia de encuadre | figura humana con anatomía fantástica | ADN |
| Edad y contextura | Adulta madura; contextura media. | ADN |
| Rostro y cabello | Rostro fuerte no monstruoso; el “cabello” está compuesto por serpientes de volúmenes y direcciones diferenciadas. | ADN |
| Cabello, color | serpientes en lugar de cabello | ya declarado en el ADN, precisado sin contradecirlo |
| Cabello, textura | volúmenes y direcciones diferenciadas | ya declarado en el ADN, precisado sin contradecirlo |
| Piel | oliva media | ya declarado en el ADN, precisado sin contradecirlo |
| Ojos | ámbar | ya declarado en el ADN, precisado sin contradecirlo |

## 2. Detalle reconocible

**Cabello de serpientes.**

Dones declarados en `personajes.json`: Su mirada convierte en piedra; Cabello de serpientes.

Ícono de la carta en la colección: `serpientes`. Dependencia del identificador en la matriz: 2 de 10.

## 3. Acción y pose

Quietud controlada; nunca amenaza dirigida a cámara.

Dirección corporal: Tres cuartos lateral, con mirada fuera del espectador.

Es la acción de la ficha y no se cambia. Si la acción no se puede representar sin agregar un detalle, aplicar la regla narrativa de la §5 y documentarlo en el preflight; verificar fuentes para nuevos atributos míticos.

**Y al revés, que es el caso que falló tres veces:** si un objeto exigido de la §5 no entra en la pose tal como está descripta, **el objeto no se descarta**. Se ajusta la pose lo mínimo para que entre, conservando la dirección corporal y la diagonal. Una silueta de carrera con los dos puños cerrados no deja mano para un bastón, y la salida no es correr sin el bastón: es que una mano lo lleve. Declarar el ajuste en el preflight. Una pista condicional sólo se exige si se cumple su condición; las alternativas con «o» se conservan como alternativas, sin exigir todas a la vez.

## 4. Silueta y composición

- **Firma de silueta:** Cabello de serpientes como firma total, con cabezas orientadas en direcciones variadas para evitar casco simétrico.
- **Composición:** Piedras en fondo como pista y aire alrededor de las serpientes para que cada masa se lea; cero horror.
- **Densidad visual:** alta (matriz: 9 de 10).

- **Cuerpo, y esto manda sobre cualquier intuición:** entrado en años, de contextura media, atlética sin volumen, hombros de ancho medio, de escala humana.

La contextura sale de acá y no de lo que el personaje representa. Un dios no es corpulento por ser dios, ni un héroe es musculoso por ser héroe: si estos valores piden un cuerpo liviano, va un cuerpo liviano. **Sin abdominales marcados, sin deltoides separados, sin bíceps de gimnasio y sin espalda en V** salvo que la masa y los hombros de arriba lo pidan expresamente.

Los quince ejes completos, como límites de diseño y no como sugerencia (EV edad visual, MC masa corporal, EA escala aparente, AF angulosidad facial, CO contorno superior, AC apertura corporal, DP dinamismo de pose, VD verticalidad, DV densidad visual, OV oscuridad, DI dependencia del identificador, AN anchura de hombros, PF protagonismo de fondo, RM rigidez de materiales, RA rareza anatómica):

| EV | MC | EA | AF | CO | AC | DP | VD | DV | OV | DI | AN | PF | RM | RA |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 7 | 5 | 6 | 8 | 10 | 4 | 2 | 7 | 9 | 7 | 2 | 5 | 5 | 2 | 7 |

Prueba de silueta: reducida a mancha negra, tiene que seguir distinguiéndose de los personajes de la §7.

## 5. Inventario narrativo y detalles trazables

Elementos de base; completar con detalles narrativos trazables según la regla siguiente:

1. **Cabello de serpientes** — identificador principal. ADN.
2. **Pistas secundarias autorizadas:** piedras y efecto de mirada petrificante mostrado sin víctimas. ADN. Subordinadas al identificador. Respetar las condiciones y alternativas del texto: «si hace falta» y «cuando corresponda» no exigen presencia incondicional; «o» no exige ambas opciones.
3. **Vestimenta del vocabulario griego:** resolver cortes, capas, tejidos y detalles según identidad y episodio; documentar decisiones artísticas en el preflight.
4. **Resolución funcional de vestimenta y calzado:** `Documentacion/adn_visual_personajes_v1.md`, sección «Regla común de vestimenta funcional y calzado — lote del 2026-09-28». Decisión de diseño de Willy aprobada el 2026-09-28; no es una atestación histórica.
   - **Vestimenta funcional:** Túnica lisa de corte sencillo, ajustada a la acción y a la silueta.
   - **Calzado:** Sandalias simples de cuero, sin motivos ornamentales.
   - **Alcance:** Base funcional de respaldo: las prendas y los detalles específicos de la ficha o del preflight narrativo del 2026-11-04 tienen prioridad. Variar cortes, capas, tejidos y materiales según personaje; no imponer uniforme ni prohibición general de adornos. Mantener anatomía, acción e identificador legibles.
   - **Excepción anatómica:** Aplicar la regla humana a las partes humanas descritas; no agregar cuerpo de serpiente ni cambiar la anatomía autorizada.

**Regla vigente — 2026-11-04: riqueza narrativa e identidad mítica.** Priorizar que se entienda quién es el personaje y qué episodio representa. Se permiten prendas de cortes distintos, capas, tejidos, bordados, cierres, equipo, desgaste y objetos narrativos cuando aporten identidad o sentido a la escena; no hay un máximo fijo de prendas ni de detalles. Antes de generar, registrar los detalles elegidos en la ficha o el preflight y distinguir: (a) atributo o episodio respaldado, citando fuente; (b) interpretación artística autorizada, sin presentarla como dato del mito. La autorización general de Willy permite estas decisiones de diseño sin pedir aprobación por cada cierre o material. Para nuevos poderes, animales, símbolos de identidad o hechos narrativos, verificar la fuente y actualizar la ficha antes de dibujarlos. No agregar por rutina ni copiar el mismo kit entre personajes. Mantener rostro, identificador, acción, silueta y jerarquía legibles. Revisar también las omisiones de elementos exigidos; respetar condiciones y alternativas. Esta regla reemplaza las prohibiciones generales de adornos, el inventario cerrado absoluto y la base lisa obligatoria. Las exclusiones específicas contra errores míticos, anacronismos y clones siguen vigentes salvo decisión posterior expresa. Frigg puede conservar el acabado fotográfico aceptado por Willy; esta excepción no cambia el estilo general de la colección.

**La magia es obligatoria y sale del identificador.** El detalle reconocible de la §2 no se muestra apoyado y quieto: se muestra funcionando, el entorno reacciona, y el don produce su fenómeno visible. Estela, chispas, partículas, luz propia que ilumina de verdad, deformación del aire, materia que responde: todo eso está autorizado y va sin timidez. Esto no agrega ningún objeto al inventario de arriba, porque lo que se enciende es lo que el personaje ya tiene.

Las tres capas y las cuatro reglas están en `estilo_visual_aprobado.md` §7, que gobierna. En resumen: el efecto nace del don y se puede señalar de dónde salió; no tapa la cara ni el identificador; el color sale del don o del material y nunca es el dorado por default; y el fenómeno es propio de este personaje y no el mismo de las otras 84. Queda afuera el aura que envuelve el cuerpo y disuelve la silueta, el halo detrás de la cabeza, las runas o pseudo-texto flotando, y cualquier efecto que no se pueda trazar al don. Si el identificador no da para un fenómeno, la carta va con el objeto en actividad y el entorno reaccionando, y no se inventa uno.

## 6. Escenario

Sale de la acción de la §3 y de las pistas autorizadas de la §5, en ese orden. El fondo se diseña después del personaje, nunca antes.

Protagonismo de fondo asignado: 5 de 10, o sea que el contexto acompaña sin llevar peso.

**Sin** pedestal de roca ni acantilado heroico, **sin** templo griego de decoración, **sin** Olimpo, **sin** cielo azul con nubes por defecto, **sin** arquitectura de fantasía, **sin** paisaje panorámico que compita en nitidez. Quince de las treinta y una imágenes anteriores tenían el pedestal y once el templo.

El fondo va con profundidad de campo real: menos nitidez y menos contraste que el personaje. Es el recurso principal para cumplir la jerarquía personaje → identificador → contexto.

## 7. Separación obligatoria

**Preparación textual anti-clonación: DOCUMENTADA.** Tres o más riesgos justificados y separadores de silueta, pose y composición; la prueba visual de silueta, pose y avatar sigue pendiente.

**Contra Dafne.**

| | Medusa | Dafne |
|---|---|---|
| Cabello | serpientes en lugar de cabello | castaño claro |
| Textura | volúmenes y direcciones diferenciadas | largo mezclándose con hojas |
| Piel | oliva media | clara dorada |
| Ojos | ámbar | verde oliva |

Silueta de Dafne, para no repetirla: brazos convertidos en ramas + pies/parte baja en raíces, con transición clara y no terrorífica.

Pose de Dafne, para no repetirla: el cuerpo crece y se transforma, en vez de huir.

Ejes numéricos que ya los separan: angulosidad facial 8 contra 3, dinamismo de pose 2 contra 6, oscuridad 7 contra 3, edad visual 7 contra 4.

**Por qué se controla este par:** figuras femeninas de anatomía transformada y contorno orgánico.
**Filtro numérico:** distancia ponderada 1.961; misma morfología y lectura; riesgo numérico bajo. No sustituye la comparación textual.

- **Separador de silueta:** Medusa: cabello de serpientes como firma total, con cabezas orientadas en direcciones variadas para evitar casco simétrico. Cuerpo: adulta madura; contextura media. Frente a Dafne: brazos convertidos en ramas + pies/parte baja en raíces, con transición clara y no terrorífica. Cuerpo: adulta joven; delgada. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Medusa: quietud controlada; nunca amenaza dirigida a cámara. Frente a Dafne: el cuerpo crece y se transforma, en vez de huir. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Medusa: piedras en fondo como pista y aire alrededor de las serpientes para que cada masa se lea; cero horror. Frente a Dafne: río/bosque simple; ramas deben abrirse hacia aire limpio y raíces quedar completas en la imagen maestra. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo medusa, comparación Dafne; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Aracne.**

| | Medusa | Aracne |
|---|---|---|
| Cabello | serpientes en lugar de cabello | castaño oscuro |
| Textura | volúmenes y direcciones diferenciadas | recogido alto |
| Piel | oliva media | oliva clara |
| Ojos | ámbar | gris |

Silueta de Aracne, para no repetirla: telar diagonal + hilos saliendo del marco corporal + pequeña araña/patrón radial rompiendo el contorno.

Pose de Aracne, para no repetirla: trabaja con precisión, con manos separadas en tareas distintas.

Ejes numéricos que ya los separan: contorno superior 10 contra 1, dependencia del identificador 2 contra 8, edad visual 7 contra 4, rareza anatómica 7 contra 4.

**Por qué se controla este par:** transformación femenina con estructura radial.
**Filtro numérico:** distancia ponderada 2.374; misma morfología y lectura; riesgo numérico bajo. No sustituye la comparación textual.

- **Separador de silueta:** Medusa: cabello de serpientes como firma total, con cabezas orientadas en direcciones variadas para evitar casco simétrico. Cuerpo: adulta madura; contextura media. Frente a Aracne: telar diagonal + hilos saliendo del marco corporal + pequeña araña/patrón radial rompiendo el contorno. Cuerpo: adulta joven; contextura pequeña. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Medusa: quietud controlada; nunca amenaza dirigida a cámara. Frente a Aracne: trabaja con precisión, con manos separadas en tareas distintas. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Medusa: piedras en fondo como pista y aire alrededor de las serpientes para que cada masa se lea; cero horror. Frente a Aracne: hilos crean geometría radial sin tapar rostro; telar ocupa una diagonal y deja un área limpia opuesta. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo medusa, comparación Aracne; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Sif.**

| | Medusa | Sif |
|---|---|---|
| Cabello | serpientes en lugar de cabello | oro verdadero |
| Textura | volúmenes y direcciones diferenciadas | extremadamente largo y pesado |
| Piel | oliva media | clara dorada |
| Ojos | ámbar ⚠ igual | ámbar |

Silueta de Sif, para no repetirla: masa dorada de cabello ocupando un lateral completo y cayendo hasta romper el contorno del cuerpo.

Pose de Sif, para no repetirla: una mano levanta parte del cabello para mostrar materialidad y peso.

Ejes numéricos que ya los separan: dependencia del identificador 2 contra 10, rareza anatómica 7 contra 1, angulosidad facial 8 contra 3, oscuridad 7 contra 2.

**Atención: 9 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** contorno superior máximo puede convertirse en una sola masa de cabello.
**Filtro numérico:** distancia ponderada 1.933; morfología o lectura distinta: control semántico/compositivo, no colisión anatómica. No sustituye la comparación textual.

- **Separador de silueta:** Medusa: cabello de serpientes como firma total, con cabezas orientadas en direcciones variadas para evitar casco simétrico. Cuerpo: adulta madura; contextura media. Frente a Sif: masa dorada de cabello ocupando un lateral completo y cayendo hasta romper el contorno del cuerpo. Cuerpo: adulta joven-madura; contextura media. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Medusa: quietud controlada; nunca amenaza dirigida a cámara. Frente a Sif: una mano levanta parte del cabello para mostrar materialidad y peso. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Medusa: piedras en fondo como pista y aire alrededor de las serpientes para que cada masa se lea; cero horror. Frente a Sif: el cabello forma una gran masa lateral y el lado opuesto queda más limpio; campo de trigo subordinado. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo medusa, comparación Sif; contrastes derivados del ADN y la matriz, sin nuevo diseño.

Criterio de la ficha: Cualquier figura femenina humana del roster. La silueta capilar debe volverla inequívoca incluso sin color.

La diferencia no puede depender sólo del color, del fondo, del objeto sostenido, del peinado ni de una prenda. Matriz §4.1: el objeto no salva un clon.

## 8. Encuadre

Vertical 3:4. Figura al 70–80% del alto del cuadro. Zona limpia detrás de la cabeza o del foco principal.

Avatar circular, como restricción invisible: Rostro + varias cabezas de serpiente completas. No se dibuja ningún círculo, medallón, marco, inset ni retrato secundario.

## 9. Registro

Cálido, despierto, concentrado. No hace falta que sonría. Sin amenaza, sin crueldad, sin solemnidad genérica repetida de otra carta. La emoción sale de la historia del personaje y de lo que está haciendo.

## 10. Contaminación a evitar

*Percy Jackson* y *Furia de titanes*: monstruo verde de colmillos. Su ficha pide rostro fuerte no monstruoso.

Nada de Marvel, Disney, DC, anime conocido ni videojuegos, sea o no de esta lista.

## 11. Antes de generar

Mostrar cinco líneas y esperar OK: qué se ve, cuál es el detalle reconocible, el inventario con su fuente, contra quién se separa y con qué diferencia concreta, y de dónde sale el escenario.

Después de generar, declarar cuatro cosas: qué objetos quedaron en la imagen que no estaban en el inventario; **qué elementos exigidos de la §5 no aparecieron y por qué, qué condiciones no se cumplieron y qué alternativas se usaron**; qué campos de esta orden no se cumplieron; y los once puntos del gate de `estilo_visual_aprobado.md` §9, que ahora son doce.

El segundo control es tan importante como el primero y es el que faltaba hasta el 2026-09-14: una imagen puede cumplir el inventario cerrado al pie de la letra y seguir siendo una carta fallada por no mostrar nada de lo que hace reconocible al personaje.
