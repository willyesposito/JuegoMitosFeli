# Orden de producción — Hel

**Completitud mecánica: COMPLETA.** Campos obligatorios y referencias comprobados; vestimenta opcional con alternativa general cuando falta.
**Validación visual: PENDIENTE.** Compilar no acredita silueta, pose, composición, avatar ni colisión; tampoco aprueba identidad, inventario o separación.

**Imagen actual:** `imagenes/hel.png`. Su existencia no implica aprobación ni reemplazo automático; consultar la evaluación vigente.

**Se lee junto con:** `Documentacion/estilo_visual_aprobado.md`. Nada más.

> Generada por `herramientas/generar-ordenes.py`. Para cambiarla, editar la fuente (el ADN, la matriz, `personajes.json` o `herramientas/identidad_visual.py`) y volver a generar. Editar este archivo a mano se pierde.

---

## 1. Identidad

| Campo | Valor | Origen |
|---|---|---|
| Mitología | nordica | `personajes.json` |
| Tier | plateado | `personajes.json` |
| Familia de encuadre | figura humana | ADN |
| Edad y contextura | Adulta madura; alta y muy delgada. | ADN |
| Rostro y cabello | Rostro largo sereno; cabello oscuro lacio y contenido. | ADN |
| Cabello, color | negro | ya declarado en el ADN, precisado sin contradecirlo |
| Cabello, textura | lacio contenido | ya declarado en el ADN, precisado sin contradecirlo |
| Piel | muy pálida | ya declarado en el ADN, precisado sin contradecirlo |
| Ojos | gris muy claro | ya declarado en el ADN, precisado sin contradecirlo |

## 2. Detalle reconocible

**Reino nórdico subterráneo y sus reglas expresados mediante ambiente y comportamiento.**

Dones declarados en `personajes.json`: Gobierna el reino de los que mueren de enfermedad o vejez; Organiza su mundo con reglas propias y justas.

Ícono de la carta en la colección: `sombras`. Dependencia del identificador en la matriz: 4 de 10.

> **Reconocimiento textual: DOCUMENTADO.** Manto oscuro cerrado, silueta muy fina, sombras estructuradas y salón, con manos bajas y ordenadas, concretan ambiente y comportamiento. El avatar conserva manto/sombra; no hace falta un objeto profético ni iconografía de horror. La validación visual sigue pendiente.
> Fuente de la revisión: `Documentacion/revision_identificadores_lote_2026-09-28.json`, objetivo `hel`. Evidencia de acción, silueta, composición, pistas y avatar del ADN.

## 3. Acción y pose

Manos bajas y ordenadas; sensación administrativa y justa, no siniestra.

Dirección corporal: Frontal levemente desplazada.

Es la acción de la ficha y no se cambia. Si la acción no se puede representar sin agregar un detalle, aplicar la regla narrativa de la §5 y documentarlo en el preflight; verificar fuentes para nuevos atributos míticos.

**Y al revés, que es el caso que falló tres veces:** si un objeto exigido de la §5 no entra en la pose tal como está descripta, **el objeto no se descarta**. Se ajusta la pose lo mínimo para que entre, conservando la dirección corporal y la diagonal. Una silueta de carrera con los dos puños cerrados no deja mano para un bastón, y la salida no es correr sin el bastón: es que una mano lo lleve. Declarar el ajuste en el preflight. Una pista condicional sólo se exige si se cumple su condición; las alternativas con «o» se conservan como alternativas, sin exigir todas a la vez.

## 4. Silueta y composición

- **Firma de silueta:** Cuerpo vertical casi inmóvil + manto oscuro cerrado + arquitectura del salón como marco.
- **Composición:** Arquitectura del salón estructura sin aprisionar; sombras funcionan como lenguaje gráfico, nunca horror.
- **Densidad visual:** baja-media (matriz: 4 de 10).

- **Cuerpo, y esto manda sobre cualquier intuición:** entrado en años, muy delgado, de contextura frágil, hombros estrechos, de escala algo mayor que humana.

La contextura sale de acá y no de lo que el personaje representa. Un dios no es corpulento por ser dios, ni un héroe es musculoso por ser héroe: si estos valores piden un cuerpo liviano, va un cuerpo liviano. **Sin abdominales marcados, sin deltoides separados, sin bíceps de gimnasio y sin espalda en V** salvo que la masa y los hombros de arriba lo pidan expresamente.

Los quince ejes completos, como límites de diseño y no como sugerencia (EV edad visual, MC masa corporal, EA escala aparente, AF angulosidad facial, CO contorno superior, AC apertura corporal, DP dinamismo de pose, VD verticalidad, DV densidad visual, OV oscuridad, DI dependencia del identificador, AN anchura de hombros, PF protagonismo de fondo, RM rigidez de materiales, RA rareza anatómica):

| EV | MC | EA | AF | CO | AC | DP | VD | DV | OV | DI | AN | PF | RM | RA |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 7 | 2 | 8 | 9 | 1 | 2 | 1 | 10 | 4 | 9 | 4 | 2 | 6 | 7 | 1 |

Prueba de silueta: reducida a mancha negra, tiene que seguir distinguiéndose de los personajes de la §7.

## 5. Inventario narrativo y detalles trazables

Elementos de base; completar con detalles narrativos trazables según la regla siguiente:

1. **Reino nórdico subterráneo y sus reglas expresados mediante ambiente y comportamiento** — identificador principal. ADN.
2. **Pistas secundarias autorizadas:** manto, sombras estructuradas y arquitectura del salón. ADN. Subordinadas al identificador. Respetar las condiciones y alternativas del texto: «si hace falta» y «cuando corresponda» no exigen presencia incondicional; «o» no exige ambas opciones.
3. **Vestimenta del vocabulario nórdico:** resolver cortes, capas, tejidos y detalles según identidad y episodio; documentar decisiones artísticas en el preflight.
4. **Resolución funcional de vestimenta y calzado:** `Documentacion/adn_visual_personajes_v1.md`, sección «Regla común de vestimenta funcional y calzado — lote del 2026-09-28». Decisión de diseño de Willy aprobada el 2026-09-28; no es una atestación histórica.
   - **Vestimenta funcional:** Túnica lisa de manga larga y pantalón sencillo.
   - **Calzado:** Botas simples de cuero, sin pieles, tiras envolventes ni herrajes decorativos agregados.
   - **Alcance:** Base funcional de respaldo: las prendas y los detalles específicos de la ficha o del preflight narrativo del 2026-11-04 tienen prioridad. Variar cortes, capas, tejidos y materiales según personaje; no imponer uniforme ni prohibición general de adornos. Mantener anatomía, acción e identificador legibles.

**Regla vigente — 2026-11-04: riqueza narrativa e identidad mítica.** Priorizar que se entienda quién es el personaje y qué episodio representa. Se permiten prendas de cortes distintos, capas, tejidos, bordados, cierres, equipo, desgaste y objetos narrativos cuando aporten identidad o sentido a la escena; no hay un máximo fijo de prendas ni de detalles. Antes de generar, registrar los detalles elegidos en la ficha o el preflight y distinguir: (a) atributo o episodio respaldado, citando fuente; (b) interpretación artística autorizada, sin presentarla como dato del mito. La autorización general de Willy permite estas decisiones de diseño sin pedir aprobación por cada cierre o material. Para nuevos poderes, animales, símbolos de identidad o hechos narrativos, verificar la fuente y actualizar la ficha antes de dibujarlos. No agregar por rutina ni copiar el mismo kit entre personajes. Mantener rostro, identificador, acción, silueta y jerarquía legibles. Revisar también las omisiones de elementos exigidos; respetar condiciones y alternativas. Esta regla reemplaza las prohibiciones generales de adornos, el inventario cerrado absoluto y la base lisa obligatoria. Las exclusiones específicas contra errores míticos, anacronismos y clones siguen vigentes salvo decisión posterior expresa. Frigg puede conservar el acabado fotográfico aceptado por Willy; esta excepción no cambia el estilo general de la colección.

**La magia es obligatoria y sale del identificador.** El detalle reconocible de la §2 no se muestra apoyado y quieto: se muestra funcionando, el entorno reacciona, y el don produce su fenómeno visible. Estela, chispas, partículas, luz propia que ilumina de verdad, deformación del aire, materia que responde: todo eso está autorizado y va sin timidez. Esto no agrega ningún objeto al inventario de arriba, porque lo que se enciende es lo que el personaje ya tiene.

Las tres capas y las cuatro reglas están en `estilo_visual_aprobado.md` §7, que gobierna. En resumen: el efecto nace del don y se puede señalar de dónde salió; no tapa la cara ni el identificador; el color sale del don o del material y nunca es el dorado por default; y el fenómeno es propio de este personaje y no el mismo de las otras 84. Queda afuera el aura que envuelve el cuerpo y disuelve la silueta, el halo detrás de la cabeza, las runas o pseudo-texto flotando, y cualquier efecto que no se pueda trazar al don. Si el identificador no da para un fenómeno, la carta va con el objeto en actividad y el entorno reaccionando, y no se inventa uno.

**Evitar kit nórdico repetido:** nudo celta, cuello o ribete de piel, broche redondo, medallón, botas envueltas con tiras, cinturón de hebilla decorada, trenzas con anillos de metal. Sus piezas no se prohíben por sí mismas si tienen sentido documentado; ese conjunto se repitió en seis cartas nórdicas y es la razón por la que parecen del mismo disfraz. Una mitología aporta vocabulario, no uniforme.

## 6. Escenario

Sale de la acción de la §3 y de las pistas autorizadas de la §5, en ese orden. El fondo se diseña después del personaje, nunca antes.

Protagonismo de fondo asignado: 6 de 10, o sea que el contexto acompaña sin llevar peso.

**Sin** pedestal de roca ni acantilado heroico, **sin** templo griego de decoración, **sin** Olimpo, **sin** cielo azul con nubes por defecto, **sin** arquitectura de fantasía, **sin** paisaje panorámico que compita en nitidez. Quince de las treinta y una imágenes anteriores tenían el pedestal y once el templo.

El fondo va con profundidad de campo real: menos nitidez y menos contraste que el personaje. Es el recurso principal para cumplir la jerarquía personaje → identificador → contexto.

## 7. Separación obligatoria

**Par de Espejo: Hades.** El módulo Espejo de los Mundos los muestra enfrentados en pantalla, así que las dos cartas tienen que separarse solas a simple vista. Es el par donde un parecido cuesta doble.

**Preparación textual anti-clonación: DOCUMENTADA.** Tres o más riesgos justificados y separadores de silueta, pose y composición; la prueba visual de silueta, pose y avatar sigue pendiente.

**Contra Hades.**

| | Hel | Hades |
|---|---|---|
| Cabello | negro ⚠ igual | negro |
| Textura | lacio contenido | lacio ordenado |
| Piel | muy pálida | clara neutra |
| Ojos | gris muy claro | gris |

Silueta de Hades, para no repetirla: cuerpo casi columnar + manto pesado cerrado + casco de invisibilidad sostenido a un costado cuando llevarlo puesto perjudique el rostro.

Pose de Hades, para no repetirla: manos controladas y cuerpo quieto; autoridad cerrada sin gesto expansivo.

Ejes numéricos que ya los separan: masa corporal 2 contra 6, anchura de hombros 2 contra 6, contorno superior 1 contra 3, dependencia del identificador 4 contra 6.

**Atención: 11 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** autoridad del inframundo de eje vertical.
**Filtro numérico:** distancia ponderada 1.006; morfología o lectura distinta: control semántico/compositivo, no colisión anatómica. No sustituye la comparación textual.

- **Separador de silueta:** Hel: cuerpo vertical casi inmóvil + manto oscuro cerrado + arquitectura del salón como marco. Cuerpo: adulta madura; alta y muy delgada. Frente a Hades: cuerpo casi columnar + manto pesado cerrado + casco de invisibilidad sostenido a un costado cuando llevarlo puesto perjudique el rostro. Cuerpo: adulto maduro; alto pero menos ancho que Zeus y Poseidón. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Hel: manos bajas y ordenadas; sensación administrativa y justa, no siniestra. Frente a Hades: manos controladas y cuerpo quieto; autoridad cerrada sin gesto expansivo. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Hel: arquitectura del salón estructura sin aprisionar; sombras funcionan como lenguaje gráfico, nunca horror. Frente a Hades: fondo subterráneo simple, luminosidad mineral baja y espacio limpio alrededor de la figura; nada terrorífico. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo hel, comparación Hades; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Perséfone.**

| | Hel | Perséfone |
|---|---|---|
| Cabello | negro | rubio miel oscuro |
| Textura | lacio contenido | ondulado suave |
| Piel | muy pálida | clara dorada |
| Ojos | gris muy claro | verde oliva |

Silueta de Perséfone, para no repetirla: mitad superior ligera con flores/vegetación + parte baja más pesada por telas oscuras; dualidad vertical sin rostro partido.

Pose de Perséfone, para no repetirla: un pie en cada zona visual; pose de frontera, no trabajo agrícola ni teatralidad oscura.

Ejes numéricos que ya los separan: angulosidad facial 9 contra 3, contorno superior 1 contra 5, protagonismo de fondo 6 contra 10, edad visual 7 contra 4.

**Por qué se controla este par:** mujeres ligadas al inframundo.
**Filtro numérico:** distancia ponderada 2.285; misma morfología y lectura; riesgo numérico bajo. No sustituye la comparación textual.

- **Separador de silueta:** Hel: cuerpo vertical casi inmóvil + manto oscuro cerrado + arquitectura del salón como marco. Cuerpo: adulta madura; alta y muy delgada. Frente a Perséfone: mitad superior ligera con flores/vegetación + parte baja más pesada por telas oscuras; dualidad vertical sin rostro partido. Cuerpo: adulta joven; cuerpo esbelto medio. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Hel: manos bajas y ordenadas; sensación administrativa y justa, no siniestra. Frente a Perséfone: un pie en cada zona visual; pose de frontera, no trabajo agrícola ni teatralidad oscura. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Hel: arquitectura del salón estructura sin aprisionar; sombras funcionan como lenguaje gráfico, nunca horror. Frente a Perséfone: separar claramente superficie y mundo subterráneo sin partir la cara; equilibrar una zona ligera y otra pesada. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo hel, comparación Perséfone; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Frigg.**

| | Hel | Frigg |
|---|---|---|
| Cabello | negro | rubio ceniza con canas |
| Textura | lacio contenido | trenzas simples |
| Piel | muy pálida | clara rosada |
| Ojos | gris muy claro | azul gris |

Silueta de Frigg, para no repetirla: figura vertical regia y cerrada, manos juntas y manto de caída asimétrica sobre un hombro; vestido de tejido grueso.

Pose de Frigg, para no repetirla: parece saber algo que no va a decir; boca cerrada, mirada lateral atenta y manos juntas, una cubriendo parcialmente la otra; ausencia de objeto profético.

Ejes numéricos que ya los separan: oscuridad 9 contra 4, protagonismo de fondo 6 contra 2, masa corporal 2 contra 4, angulosidad facial 9 contra 7.

**Atención: 8 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** mujeres maduras cerradas y de baja acción; cercanía numérica.
**Filtro numérico:** distancia ponderada 1.279; misma morfología y lectura; riesgo numérico bajo. No sustituye la comparación textual.

- **Separador de silueta:** Hel: cuerpo vertical casi inmóvil + manto oscuro cerrado + arquitectura del salón como marco. Frente a Frigg: figura vertical regia y cerrada, manos juntas y manto de caída asimétrica sobre un hombro; vestido de tejido grueso. Conservar identidades, acción y jerarquía distintas; revisión visual pendiente.
- **Separador de pose:** Hel: manos bajas y ordenadas; sensación administrativa y justa, no siniestra. Frente a Frigg: parece saber algo que no va a decir; boca cerrada, mirada lateral atenta y manos juntas, una cubriendo parcialmente la otra; ausencia de objeto profético. Conservar identidades, acción y jerarquía distintas; revisión visual pendiente.
- **Separador de composición:** Hel: arquitectura del salón estructura sin aprisionar; sombras funcionan como lenguaje gráfico, nunca horror. Frente a Frigg: fondo muy simple y amplio alrededor del eje vertical. Conservar identidades, acción y jerarquía distintas; revisión visual pendiente.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo hel, comparación Frigg; contrastes derivados del ADN y la matriz, sin nuevo diseño.

Criterio de la ficha: Hades y Perséfone. Diferenciar de Hades por silueta más fina y materiales nórdicos; de Perséfone por ausencia de dualidad primaveral.

La diferencia no puede depender sólo del color, del fondo, del objeto sostenido, del peinado ni de una prenda. Matriz §4.1: el objeto no salva un clon.

## 8. Encuadre

Vertical 3:4. Figura al 70–80% del alto del cuadro. Zona limpia detrás de la cabeza o del foco principal.

Avatar circular, como restricción invisible: Rostro + borde del manto/sombra estructurada. No se dibuja ningún círculo, medallón, marco, inset ni retrato secundario.

## 9. Registro

Cálido, despierto, concentrado. No hace falta que sonría. Sin amenaza, sin crueldad, sin solemnidad genérica repetida de otra carta. La emoción sale de la historia del personaje y de lo que está haciendo.

## 10. Contaminación a evitar

Las villanas góticas de media cara podrida de videojuego.

Nada de Marvel, Disney, DC, anime conocido ni videojuegos, sea o no de esta lista.

## 11. Antes de generar

Mostrar cinco líneas y esperar OK: qué se ve, cuál es el detalle reconocible, el inventario con su fuente, contra quién se separa y con qué diferencia concreta, y de dónde sale el escenario.

Después de generar, declarar cuatro cosas: qué objetos quedaron en la imagen que no estaban en el inventario; **qué elementos exigidos de la §5 no aparecieron y por qué, qué condiciones no se cumplieron y qué alternativas se usaron**; qué campos de esta orden no se cumplieron; y los once puntos del gate de `estilo_visual_aprobado.md` §9, que ahora son doce.

El segundo control es tan importante como el primero y es el que faltaba hasta el 2026-09-14: una imagen puede cumplir el inventario cerrado al pie de la letra y seguir siendo una carta fallada por no mostrar nada de lo que hace reconocible al personaje.
