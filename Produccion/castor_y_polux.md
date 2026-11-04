# Orden de producción — Cástor y Pólux

**Completitud mecánica: COMPLETA.** Campos obligatorios y referencias comprobados; vestimenta opcional con alternativa general cuando falta.
**Validación visual: PENDIENTE.** Compilar no acredita silueta, pose, composición, avatar ni colisión; tampoco aprueba identidad, inventario o separación.

**Imagen actual:** `imagenes/castor_polux.png`. Su existencia no implica aprobación ni reemplazo automático; consultar la evaluación vigente.

**Se lee junto con:** `Documentacion/estilo_visual_aprobado.md`. Nada más.

> Generada por `herramientas/generar-ordenes.py`. Para cambiarla, editar la fuente (el ADN, la matriz, `personajes.json` o `herramientas/identidad_visual.py`) y volver a generar. Editar este archivo a mano se pierde.

---

## 1. Identidad

| Campo | Valor | Origen |
|---|---|---|
| Mitología | griega | `personajes.json` |
| Tier | normal | `personajes.json` |
| Familia de encuadre | dupla | ADN |
| Edad y contextura | Gemelos jóvenes con parecido familiar, uno más terrestre/robusto y otro más ligero/luminoso. | ADN |
| Rostro y cabello | Parentesco facial visible sin clonación; diferencias de ancho de cara, expresión y tratamiento de cabello. | ADN |
| Cabello, piel y ojos | por integrante, ver abajo | decisión de diseño coordinada |

**Integrantes.** Parentesco o pertenencia visible, sin clonación. Cada uno cambia al menos dos de los cuatro valores.

| Integrante | Cabello | Textura | Piel | Ojos |
|---|---|---|---|---|
| Cástor | negro | lacio | oliva clara | gris |
| Pólux | negro | rizado abierto | oliva clara | marrón cálido |

## 2. Detalle reconocible

**Gemelos inseparables + constelación Géminis.**

Dones declarados en `personajes.json`: Hermanos inseparables; Comparten una misma inmortalidad.

Ícono de la carta en la colección: `gemelos`. Dependencia del identificador en la matriz: 6 de 10.

## 3. Acción y pose

Ambos de pie, hombros tocándose o conectados por gesto; nunca espejo exacto.

Dirección corporal: Inclinaciones opuestas que se encuentran visualmente.

Es la acción de la ficha y no se cambia. Si la acción no se puede representar sin agregar un detalle, aplicar la regla narrativa de la §5 y documentarlo en el preflight; verificar fuentes para nuevos atributos míticos.

**Y al revés, que es el caso que falló tres veces:** si un objeto exigido de la §5 no entra en la pose tal como está descripta, **el objeto no se descarta**. Se ajusta la pose lo mínimo para que entre, conservando la dirección corporal y la diagonal. Una silueta de carrera con los dos puños cerrados no deja mano para un bastón, y la salida no es correr sin el bastón: es que una mano lo lleve. Declarar el ajuste en el preflight. Una pista condicional sólo se exige si se cumple su condición; las alternativas con «o» se conservan como alternativas, sin exigir todas a la vez.

## 4. Silueta y composición

- **Firma de silueta:** Dos cuerpos paralelos con inclinaciones opuestas + dos estrellas altas separadas.
- **Composición:** Las dos estrellas deben quedar separadas sobre cada sujeto y ambos rostros tener aire propio.
- **Densidad visual:** media (matriz: 7 de 10).

- **Cuerpo, y esto manda sobre cualquier intuición:** joven, de contextura media, atlética sin volumen, hombros de ancho medio, de escala humana.

La contextura sale de acá y no de lo que el personaje representa. Un dios no es corpulento por ser dios, ni un héroe es musculoso por ser héroe: si estos valores piden un cuerpo liviano, va un cuerpo liviano. **Sin abdominales marcados, sin deltoides separados, sin bíceps de gimnasio y sin espalda en V** salvo que la masa y los hombros de arriba lo pidan expresamente.

Los quince ejes completos, como límites de diseño y no como sugerencia (EV edad visual, MC masa corporal, EA escala aparente, AF angulosidad facial, CO contorno superior, AC apertura corporal, DP dinamismo de pose, VD verticalidad, DV densidad visual, OV oscuridad, DI dependencia del identificador, AN anchura de hombros, PF protagonismo de fondo, RM rigidez de materiales, RA rareza anatómica):

| EV | MC | EA | AF | CO | AC | DP | VD | DV | OV | DI | AN | PF | RM | RA |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 4 | 5 | 6 | 4 | 3 | 6 | 2 | 8 | 7 | 2 | 6 | 5 | 6 | 5 | 8 |

Prueba de silueta: reducida a mancha negra, tiene que seguir distinguiéndose de los personajes de la §7.

## 5. Inventario narrativo y detalles trazables

Elementos de base; completar con detalles narrativos trazables según la regla siguiente:

1. **Gemelos inseparables + constelación Géminis** — identificador principal. ADN.
2. **Pistas secundarias autorizadas:** dos estrellas altas. ADN. Subordinadas al identificador. Respetar las condiciones y alternativas del texto: «si hace falta» y «cuando corresponda» no exigen presencia incondicional; «o» no exige ambas opciones.
3. **Vestimenta del vocabulario griego:** resolver cortes, capas, tejidos y detalles según identidad y episodio; documentar decisiones artísticas en el preflight.
4. **Resolución funcional de vestimenta y calzado:** `Documentacion/adn_visual_personajes_v1.md`, sección «Regla común de vestimenta funcional y calzado — lote del 2026-09-28». Decisión de diseño de Willy aprobada el 2026-09-28; no es una atestación histórica.
   - **Vestimenta funcional:** Túnica lisa de corte sencillo, ajustada a la acción y a la silueta.
   - **Calzado:** Sandalias simples de cuero, sin motivos ornamentales.
   - **Alcance:** Base funcional de respaldo: las prendas y los detalles específicos de la ficha o del preflight narrativo del 2026-11-04 tienen prioridad. Variar cortes, capas, tejidos y materiales según personaje; no imponer uniforme ni prohibición general de adornos. Mantener anatomía, acción e identificador legibles.

**Regla vigente — 2026-11-04: riqueza narrativa e identidad mítica.** Priorizar que se entienda quién es el personaje y qué episodio representa. Se permiten prendas de cortes distintos, capas, tejidos, bordados, cierres, equipo, desgaste y objetos narrativos cuando aporten identidad o sentido a la escena; no hay un máximo fijo de prendas ni de detalles. Antes de generar, registrar los detalles elegidos en la ficha o el preflight y distinguir: (a) atributo o episodio respaldado, citando fuente; (b) interpretación artística autorizada, sin presentarla como dato del mito. La autorización general de Willy permite estas decisiones de diseño sin pedir aprobación por cada cierre o material. Para nuevos poderes, animales, símbolos de identidad o hechos narrativos, verificar la fuente y actualizar la ficha antes de dibujarlos. No agregar por rutina ni copiar el mismo kit entre personajes. Mantener rostro, identificador, acción, silueta y jerarquía legibles. Revisar también las omisiones de elementos exigidos; respetar condiciones y alternativas. Esta regla reemplaza las prohibiciones generales de adornos, el inventario cerrado absoluto y la base lisa obligatoria. Las exclusiones específicas contra errores míticos, anacronismos y clones siguen vigentes salvo decisión posterior expresa. Frigg puede conservar el acabado fotográfico aceptado por Willy; esta excepción no cambia el estilo general de la colección.

**La magia es obligatoria y sale del identificador.** El detalle reconocible de la §2 no se muestra apoyado y quieto: se muestra funcionando, el entorno reacciona, y el don produce su fenómeno visible. Estela, chispas, partículas, luz propia que ilumina de verdad, deformación del aire, materia que responde: todo eso está autorizado y va sin timidez. Esto no agrega ningún objeto al inventario de arriba, porque lo que se enciende es lo que el personaje ya tiene.

Las tres capas y las cuatro reglas están en `estilo_visual_aprobado.md` §7, que gobierna. En resumen: el efecto nace del don y se puede señalar de dónde salió; no tapa la cara ni el identificador; el color sale del don o del material y nunca es el dorado por default; y el fenómeno es propio de este personaje y no el mismo de las otras 84. Queda afuera el aura que envuelve el cuerpo y disuelve la silueta, el halo detrás de la cabeza, las runas o pseudo-texto flotando, y cualquier efecto que no se pueda trazar al don. Si el identificador no da para un fenómeno, la carta va con el objeto en actividad y el entorno reaccionando, y no se inventa uno.

## 6. Escenario

Sale de la acción de la §3 y de las pistas autorizadas de la §5, en ese orden. El fondo se diseña después del personaje, nunca antes.

Protagonismo de fondo asignado: 6 de 10, o sea que el contexto acompaña sin llevar peso.

**Sin** pedestal de roca ni acantilado heroico, **sin** templo griego de decoración, **sin** Olimpo, **sin** cielo azul con nubes por defecto, **sin** arquitectura de fantasía, **sin** paisaje panorámico que compita en nitidez. Quince de las treinta y una imágenes anteriores tenían el pedestal y once el templo.

El fondo va con profundidad de campo real: menos nitidez y menos contraste que el personaje. Es el recurso principal para cumplir la jerarquía personaje → identificador → contexto.

## 7. Separación obligatoria

**Preparación textual anti-clonación: DOCUMENTADA.** Tres o más riesgos justificados y separadores de silueta, pose y composición; la prueba visual de silueta, pose y avatar sigue pendiente.

**Contra Rómulo y Remo.**

Silueta de Rómulo y Remo, para no repetirla: dos ejes corporales distintos + loba baja entre ambos o detrás; uno más ancho/frontal y el otro más delgado/lateral.

Pose de Rómulo y Remo, para no repetirla: uno señala el terreno y el otro observa la colina; ambos coprotagonistas.

Ejes numéricos que ya los separan: dinamismo de pose 2 contra 5, dependencia del identificador 6 contra 9, protagonismo de fondo 6 contra 9, apertura corporal 6 contra 8.

**Atención: 9 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** duplas oficiales de gemelos adultos.
**Filtro numérico:** distancia ponderada 1.302; misma morfología y lectura; riesgo numérico bajo. No sustituye la comparación textual.

- **Separador de silueta:** Cástor y Pólux: dos cuerpos paralelos con inclinaciones opuestas + dos estrellas altas separadas. Cuerpo: gemelos jóvenes con parecido familiar, uno más terrestre/robusto y otro más ligero/luminoso. Frente a Rómulo y Remo: dos ejes corporales distintos + loba baja entre ambos o detrás; uno más ancho/frontal y el otro más delgado/lateral. Cuerpo: gemelos adultos jóvenes con similitud familiar real pero no clones; contexturas deliberadamente distintas. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Cástor y Pólux: ambos de pie, hombros tocándose o conectados por gesto; nunca espejo exacto. Frente a Rómulo y Remo: uno señala el terreno y el otro observa la colina; ambos coprotagonistas. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Cástor y Pólux: las dos estrellas deben quedar separadas sobre cada sujeto y ambos rostros tener aire propio. Frente a Rómulo y Remo: triángulo visual con loba baja y colina/surco subordinado; espacio suficiente entre cabezas para que el avatar no las fusione. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo castor_polux, comparación Rómulo y Remo; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Las Valquirias.**

Silueta de Las Valquirias, para no repetirla: tres jinetes principales en alturas distintas + armaduras brillantes + diagonales de monturas; nunca formación militar simétrica.

Pose de Las Valquirias, para no repetirla: una dirige y dos completan la lectura con acciones propias; todas montadas y activas.

Ejes numéricos que ya los separan: dinamismo de pose 2 contra 9, rigidez de materiales 5 contra 9, contorno superior 3 contra 6, apertura corporal 6 contra 9.

**Por qué se controla este par:** colectivo que exige varias identidades en avatar.
**Filtro numérico:** distancia ponderada 2.330; morfología o lectura distinta: control semántico/compositivo, no colisión anatómica. No sustituye la comparación textual.

- **Separador de silueta:** Cástor y Pólux: dos cuerpos paralelos con inclinaciones opuestas + dos estrellas altas separadas. Cuerpo: gemelos jóvenes con parecido familiar, uno más terrestre/robusto y otro más ligero/luminoso. Frente a Las Valquirias: tres jinetes principales en alturas distintas + armaduras brillantes + diagonales de monturas; nunca formación militar simétrica. Cuerpo: tres figuras adultas con edades aparentes/contexturas diferentes para comunicar colectivo sin copias. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Cástor y Pólux: ambos de pie, hombros tocándose o conectados por gesto; nunca espejo exacto. Frente a Las Valquirias: una dirige y dos completan la lectura con acciones propias; todas montadas y activas. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Cástor y Pólux: las dos estrellas deben quedar separadas sobre cada sujeto y ambos rostros tener aire propio. Frente a Las Valquirias: aurora arriba/fondo y tres niveles de altura; conservar separaciones claras entre rostros, monturas y diagonales. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo castor_polux, comparación Las Valquirias; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Cerbero.**

Silueta de Cerbero, para no repetirla: tres perfiles de cabeza escalonados en altura + cuerpo único ancho.

Pose de Cerbero, para no repetirla: sentado o quieto ante una entrada.

Ejes numéricos que ya los separan: masa corporal 5 contra 10, oscuridad 2 contra 7, dependencia del identificador 6 contra 1, anchura de hombros 5 contra 10.

**Por qué se controla este par:** múltiples focos cefálicos que deben sobrevivir juntos al avatar; control compositivo de multiplicidad, no clon anatómico.
**Filtro numérico:** distancia ponderada 2.709; morfología o lectura distinta: control semántico/compositivo, no colisión anatómica. No sustituye la comparación textual.

- **Separador de silueta:** Cástor y Pólux: dos cuerpos paralelos con inclinaciones opuestas + dos estrellas altas separadas. Cuerpo: gemelos jóvenes con parecido familiar, uno más terrestre/robusto y otro más ligero/luminoso. Frente a Cerbero: tres perfiles de cabeza escalonados en altura + cuerpo único ancho. Cuerpo: perro adulto enorme, robusto y de patas pesadas. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Cástor y Pólux: ambos de pie, hombros tocándose o conectados por gesto; nunca espejo exacto. Frente a Cerbero: sentado o quieto ante una entrada. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Cástor y Pólux: las dos estrellas deben quedar separadas sobre cada sujeto y ambos rostros tener aire propio. Frente a Cerbero: escalonar las tres cabezas para evitar solapamiento; entrada subordinada y aire suficiente entre perfiles. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo castor_polux, comparación Cerbero; contrastes derivados del ADN y la matriz, sin nuevo diseño.

Criterio de la ficha: Rómulo y Remo. Diferenciar por eje celeste, ausencia de loba y mayor simetría afectiva.

La diferencia no puede depender sólo del color, del fondo, del objeto sostenido, del peinado ni de una prenda. Matriz §4.1: el objeto no salva un clon.

## 8. Encuadre

Vertical 3:4. Figura al 70–80% del alto del cuadro. Zona limpia detrás de la cabeza o del foco principal.

Avatar circular, como restricción invisible: Ambos rostros + ambas estrellas. No se dibuja ningún círculo, medallón, marco, inset ni retrato secundario.

## 9. Registro

Cálido, despierto, concentrado. No hace falta que sonría. Sin amenaza, sin crueldad, sin solemnidad genérica repetida de otra carta. La emoción sale de la historia del personaje y de lo que está haciendo.

## 10. Contaminación a evitar

**Investigación externa pendiente.** No se relevaron versiones modernas específicas para este personaje. Aplicar los controles disponibles del repo de [Documentacion/controles_contaminacion_pop_lote_2026-09-28.md](../Documentacion/controles_contaminacion_pop_lote_2026-09-28.md), junto con la identidad, acción, inventario y exclusiones de esta orden. Este pendiente no constituye por sí solo un bloqueo material ni certifica ausencia de contaminación. Las representaciones y sus rasgos concretos siguen sin investigar; no reemplazar ese faltante por asociaciones de memoria.

Nada de Marvel, Disney, DC, anime conocido ni videojuegos, sea o no de esta lista.

## 11. Antes de generar

Mostrar cinco líneas y esperar OK: qué se ve, cuál es el detalle reconocible, el inventario con su fuente, contra quién se separa y con qué diferencia concreta, y de dónde sale el escenario.

Después de generar, declarar cuatro cosas: qué objetos quedaron en la imagen que no estaban en el inventario; **qué elementos exigidos de la §5 no aparecieron y por qué, qué condiciones no se cumplieron y qué alternativas se usaron**; qué campos de esta orden no se cumplieron; y los once puntos del gate de `estilo_visual_aprobado.md` §9, que ahora son doce.

El segundo control es tan importante como el primero y es el que faltaba hasta el 2026-09-14: una imagen puede cumplir el inventario cerrado al pie de la letra y seguir siendo una carta fallada por no mostrar nada de lo que hace reconocible al personaje.
