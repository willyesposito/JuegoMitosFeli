# Orden de producción — Hefesto

**Completitud mecánica: COMPLETA.** Campos obligatorios y referencias comprobados; vestimenta opcional con alternativa general cuando falta.
**Validación visual: PENDIENTE.** Compilar no acredita silueta, pose, composición, avatar ni colisión; tampoco aprueba identidad, inventario o separación.

**Imagen actual:** ninguna. La carta funciona igual, mostrando el nombre con el tratamiento de su mitología.

**Se lee junto con:** `Documentacion/estilo_visual_aprobado.md`. Nada más.

> Generada por `herramientas/generar-ordenes.py`. Para cambiarla, editar la fuente (el ADN, la matriz, `personajes.json` o `herramientas/identidad_visual.py`) y volver a generar. Editar este archivo a mano se pierde.

---

## 1. Identidad

| Campo | Valor | Origen |
|---|---|---|
| Mitología | griega | `personajes.json` |
| Tier | plateado | `personajes.json` |
| Familia de encuadre | figura humana | ADN |
| Edad y contextura | Adulto maduro; torso robusto y brazos de trabajador. | ADN |
| Rostro y cabello | Rostro ancho irregular, cabello corto áspero y barba breve. | ADN |
| Cabello, color | castaño muy oscuro | decisión de diseño visual, sin atestación localizada; revisable por la investigación |
| Cabello, textura | corto áspero | decisión de diseño visual, sin atestación localizada; revisable por la investigación |
| Piel | canela con hollín | decisión de diseño visual, sin atestación localizada; revisable por la investigación |
| Ojos | ámbar | decisión de diseño visual, sin atestación localizada; revisable por la investigación |

## 2. Detalle reconocible

**Fragua y metal trabajado.**

Dones declarados en `personajes.json`: El herrero de los dioses; Forjó el rayo de Zeus, armaduras legendarias y hasta robots de bronce.

Ícono de la carta en la colección: `yunque`. Dependencia del identificador en la matriz: 7 de 10.

## 3. Acción y pose

Trabajando sobre metal; una mano mantiene bajo el martillo de forja simple y la otra sujeta con pinzas la pieza sobre el yunque liso apoyado en el banco de trabajo; ambas manos ocupadas en construir.

Dirección corporal: Lateral orientado hacia la pieza de trabajo.

Es la acción de la ficha y no se cambia. Si la acción no se puede representar sin agregar un objeto que no está en el inventario de la §5, frenar y avisar.

**Y al revés, que es el caso que falló tres veces:** si un objeto exigido de la §5 no entra en la pose tal como está descripta, **el objeto no se descarta**. Se ajusta la pose lo mínimo para que entre, conservando la dirección corporal y la diagonal. Una silueta de carrera con los dos puños cerrados no deja mano para un bastón, y la salida no es correr sin el bastón: es que una mano lo lleve. Declarar el ajuste en el preflight. Una pista condicional sólo se exige si se cumple su condición; las alternativas con «o» se conservan como alternativas, sin exigir todas a la vez.

## 4. Silueta y composición

- **Firma de silueta:** Hombro adelantado + martillo de forja simple mantenido bajo + delantal/tela pesada; cuerpo deliberadamente no simétrico.
- **Composición:** Banco de trabajo subordinado, con el yunque liso y la pieza de metal apoyados, y chispas controladas; dejar aire suficiente para leer el martillo bajo, las pinzas y el hombro adelantado.
- **Densidad visual:** alta (matriz: 8 de 10).

- **Cuerpo, y esto manda sobre cualquier intuición:** entrado en años, corpulento, con masa evidente, hombros anchos, de escala humana.

La contextura sale de acá y no de lo que el personaje representa. Un dios no es corpulento por ser dios, ni un héroe es musculoso por ser héroe: si estos valores piden un cuerpo liviano, va un cuerpo liviano. **Sin abdominales marcados, sin deltoides separados, sin bíceps de gimnasio y sin espalda en V** salvo que la masa y los hombros de arriba lo pidan expresamente.

Los quince ejes completos, como límites de diseño y no como sugerencia (EV edad visual, MC masa corporal, EA escala aparente, AF angulosidad facial, CO contorno superior, AC apertura corporal, DP dinamismo de pose, VD verticalidad, DV densidad visual, OV oscuridad, DI dependencia del identificador, AN anchura de hombros, PF protagonismo de fondo, RM rigidez de materiales, RA rareza anatómica):

| EV | MC | EA | AF | CO | AC | DP | VD | DV | OV | DI | AN | PF | RM | RA |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 7 | 8 | 6 | 7 | 3 | 4 | 5 | 4 | 8 | 6 | 7 | 8 | 7 | 8 | 1 |

Prueba de silueta: reducida a mancha negra, tiene que seguir distinguiéndose de los personajes de la §7.

## 5. Inventario cerrado

Lo único que puede verse:

1. **Fragua y metal trabajado** — identificador principal. ADN.
2. **Pistas secundarias autorizadas:** autómata de bronce, martillo de forja simple, pinzas, yunque liso y banco de trabajo. Martillo, pinzas y yunque son una decisión de diseño de Willy aprobada el 2026-09-28, no una atestación histórica. El banco ya estaba autorizado en la composición. Todo el equipo es liso y sin adornos, emblemas ni inscripciones nuevos. ADN. Subordinadas al identificador. Respetar las condiciones y alternativas del texto: «si hace falta» y «cuando corresponda» no exigen presencia incondicional; «o» no exige ambas opciones.
3. **Vestimenta autorizada:** Delantal/tela pesada lisa ya prevista en la firma de silueta, sobre la vestimenta funcional vigente; sin adornos ni cierres decorativos nuevos. ADN. Sin adornos más allá de lo que dice esa línea.
4. **Resolución funcional de vestimenta y calzado:** `Documentacion/adn_visual_personajes_v1.md`, sección «Regla común de vestimenta funcional y calzado — lote del 2026-09-28». Decisión de diseño de Willy aprobada el 2026-09-28; no es una atestación histórica.
   - **Vestimenta funcional:** Túnica lisa de corte sencillo, ajustada a la acción y a la silueta.
   - **Calzado:** Sandalias simples de cuero, sin motivos ornamentales.
   - **Alcance:** Conservar prendas y armaduras expresamente autorizadas; la base lisa sólo completa las partes que requieren vestimenta funcional, sin reemplazar ni tapar la firma de silueta. No imponer un color común: conservar los colores autorizados. Cierres funcionales discretos, sin broches, emblemas, joyas ni adornos nuevos.

Nada más. En particular, y porque ya pasó en la tanda anterior: **sin** broche, **sin** medallón, **sin** insignia, **sin** emblema, **sin** remaches decorativos, **sin** joyas, **sin** flores en el pelo, **sin** tatuajes, **sin** cuernos, **sin** alas que la ficha no pida, **sin** animal acompañante que no esté arriba, **sin** efecto mágico decorativo agregado por fuera del identificador, **sin** runas, **sin** pseudo-texto, **sin** calzado con decisión no trazada.

**Inventario por exceso y por omisión.** Lo que no figura no entra. Mostrar los elementos exigidos por el ADN, aplicar las pistas condicionales sólo cuando se cumpla su condición y conservar las alternativas como tales. El identificador principal manda, las pistas acompañan y nada tapa la cara ni el identificador. En el preflight, declarar qué condiciones se cumplen y qué alternativa se usa, sin agregar decisiones ajenas a la fuente.

**La magia es obligatoria y sale del identificador.** El detalle reconocible de la §2 no se muestra apoyado y quieto: se muestra funcionando, el entorno reacciona, y el don produce su fenómeno visible. Estela, chispas, partículas, luz propia que ilumina de verdad, deformación del aire, materia que responde: todo eso está autorizado y va sin timidez. Esto no agrega ningún objeto al inventario de arriba, porque lo que se enciende es lo que el personaje ya tiene.

Las tres capas y las cuatro reglas están en `estilo_visual_aprobado.md` §7, que gobierna. En resumen: el efecto nace del don y se puede señalar de dónde salió; no tapa la cara ni el identificador; el color sale del don o del material y nunca es el dorado por default; y el fenómeno es propio de este personaje y no el mismo de las otras 84. Queda afuera el aura que envuelve el cuerpo y disuelve la silueta, el halo detrás de la cabeza, las runas o pseudo-texto flotando, y cualquier efecto que no se pueda trazar al don. Si el identificador no da para un fenómeno, la carta va con el objeto en actividad y el entorno reaccionando, y no se inventa uno.

## 6. Escenario

Sale de la acción de la §3 y de las pistas autorizadas de la §5, en ese orden. El fondo se diseña después del personaje, nunca antes.

Protagonismo de fondo asignado: 7 de 10, o sea que el contexto acompaña sin llevar peso.

**Sin** pedestal de roca ni acantilado heroico, **sin** templo griego de decoración, **sin** Olimpo, **sin** cielo azul con nubes por defecto, **sin** arquitectura de fantasía, **sin** paisaje panorámico que compita en nitidez. Quince de las treinta y una imágenes anteriores tenían el pedestal y once el templo.

El fondo va con profundidad de campo real: menos nitidez y menos contraste que el personaje. Es el recurso principal para cumplir la jerarquía personaje → identificador → contexto.

## 7. Separación obligatoria

**Preparación textual anti-clonación: DOCUMENTADA.** Tres o más riesgos justificados y separadores de silueta, pose y composición; la prueba visual de silueta, pose y avatar sigue pendiente.

**Contra Heracles.**

| | Hefesto | Heracles |
|---|---|---|
| Cabello | castaño muy oscuro | castaño oscuro |
| Textura | corto áspero | rizado abierto corto |
| Piel | canela con hollín | canela |
| Ojos | ámbar ⚠ igual | ámbar |

Silueta de Heracles, para no repetirla: espalda muy ancha + piel del león de Nemea rompiendo el contorno de hombros + brazos separados del torso.

Pose de Heracles, para no repetirla: cargando o desplazando peso en vez de posar; gesto laborioso más que guerrero perfecto.

Ejes numéricos que ya los separan: contorno superior 3 contra 7, protagonismo de fondo 7 contra 3, rigidez de materiales 8 contra 4, apertura corporal 4 contra 7.

**Por qué se controla este par:** torso robusto y brazos de esfuerzo.
**Filtro numérico:** distancia ponderada 1.872; misma morfología y lectura; riesgo numérico bajo. No sustituye la comparación textual.

- **Separador de silueta:** Hefesto: hombro adelantado + martillo de forja simple mantenido bajo + delantal/tela pesada; cuerpo deliberadamente no simétrico. Cuerpo: adulto maduro; torso robusto y brazos de trabajador. Frente a Heracles: espalda muy ancha + piel del león de Nemea rompiendo el contorno de hombros + brazos separados del torso. Cuerpo: adulto joven-maduro; el cuerpo humano más macizo del roster, cuello ancho y centro de gravedad bajo. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Hefesto: trabajando sobre metal; una mano mantiene bajo el martillo de forja simple y la otra sujeta con pinzas la pieza sobre el yunque liso apoyado en el banco de trabajo; ambas manos ocupadas en construir. Frente a Heracles: cargando o desplazando peso en vez de posar; gesto laborioso más que guerrero perfecto. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Hefesto: banco de trabajo subordinado, con el yunque liso y la pieza de metal apoyados, y chispas controladas; dejar aire suficiente para leer el martillo bajo, las pinzas y el hombro adelantado. Frente a Heracles: masa corporal dominante, con brazos separados para que la silueta respire y la piel del león se lea sin collage de trabajos. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo hefesto, comparación Heracles; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Eneas.**

| | Hefesto | Eneas |
|---|---|---|
| Cabello | castaño muy oscuro ⚠ igual | castaño muy oscuro |
| Textura | corto áspero | corto |
| Piel | canela con hollín | canela |
| Ojos | ámbar | gris oscuro |

Silueta de Eneas, para no repetirla: equipo de tradición de Edad del Bronce + escudo antiguo + cuerpo inclinado hacia adelante como viajero.

Pose de Eneas, para no repetirla: camina o avanza como viajero fundador, no combate.

Ejes numéricos que ya los separan: oscuridad 6 contra 4, dependencia del identificador 7 contra 5.

**Atención: 13 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** adultos robustos con materiales rígidos; par de riesgo alto.
**Filtro numérico:** distancia ponderada 0.821; misma morfología y lectura; riesgo numérico alto. No sustituye la comparación textual.

- **Separador de silueta:** Hefesto: hombro adelantado + martillo de forja simple mantenido bajo + delantal/tela pesada; cuerpo deliberadamente no simétrico. Cuerpo: adulto maduro; torso robusto y brazos de trabajador. Frente a Eneas: equipo de tradición de Edad del Bronce + escudo antiguo + cuerpo inclinado hacia adelante como viajero. Cuerpo: adulto maduro; atlético de viaje. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Hefesto: trabajando sobre metal; una mano mantiene bajo el martillo de forja simple y la otra sujeta con pinzas la pieza sobre el yunque liso apoyado en el banco de trabajo; ambas manos ocupadas en construir. Frente a Eneas: camina o avanza como viajero fundador, no combate. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Hefesto: banco de trabajo subordinado, con el yunque liso y la pieza de metal apoyados, y chispas controladas; dejar aire suficiente para leer el martillo bajo, las pinzas y el hombro adelantado. Frente a Eneas: costa/barco subordinados y aire delante del recorrido; evitar coraza segmentada o estética legionaria imperial. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo hefesto, comparación Eneas; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Agamenón.**

| | Hefesto | Agamenón |
|---|---|---|
| Cabello | castaño muy oscuro | rubio |
| Textura | corto áspero | corto |
| Piel | canela con hollín | oliva clara |
| Ojos | ámbar | avellana |

Silueta de Agamenón, para no repetirla: cetro vertical + capa pesada + pecho ancho, con composición de comandante.

Pose de Agamenón, para no repetirla: cetro bajo y mano extendida hacia una flota; liderazgo antes que combate.

Ejes numéricos que ya los separan: verticalidad 4 contra 8, apertura corporal 4 contra 7, dinamismo de pose 5 contra 3.

**Atención: 12 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** adultos fuertes angulares de alta densidad y rigidez.
**Filtro numérico:** distancia ponderada 1.045; misma morfología y lectura; riesgo numérico medio. No sustituye la comparación textual.

- **Separador de silueta:** Hefesto: hombro adelantado + martillo de forja simple mantenido bajo + delantal/tela pesada; cuerpo deliberadamente no simétrico. Cuerpo: adulto maduro; torso robusto y brazos de trabajador. Frente a Agamenón: cetro vertical + capa pesada + pecho ancho, con composición de comandante. Cuerpo: adulto maduro; robusto. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Hefesto: trabajando sobre metal; una mano mantiene bajo el martillo de forja simple y la otra sujeta con pinzas la pieza sobre el yunque liso apoyado en el banco de trabajo; ambas manos ocupadas en construir. Frente a Agamenón: cetro bajo y mano extendida hacia una flota; liderazgo antes que combate. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Hefesto: banco de trabajo subordinado, con el yunque liso y la pieza de metal apoyados, y chispas controladas; dejar aire suficiente para leer el martillo bajo, las pinzas y el hombro adelantado. Frente a Agamenón: flota en segundo plano y aire hacia la mano que dirige; evitar que el cetro quede al pecho como plantilla. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo hefesto, comparación Agamenón; contrastes derivados del ADN y la matriz, sin nuevo diseño.

Criterio de la ficha: Heracles. Separarlo por cuerpo de oficio, asimetría funcional y manos construyendo en vez de masa heroica y piel de león.

La diferencia no puede depender sólo del color, del fondo, del objeto sostenido, del peinado ni de una prenda. Matriz §4.1: el objeto no salva un clon.

## 8. Encuadre

Vertical 3:4. Figura al 70–80% del alto del cuadro. Zona limpia detrás de la cabeza o del foco principal.

Avatar circular, como restricción invisible: Rostro + hombro + reflejo naranja de la fragua. No se dibuja ningún círculo, medallón, marco, inset ni retrato secundario.

## 9. Registro

Cálido, despierto, concentrado. No hace falta que sonría. Sin amenaza, sin crueldad, sin solemnidad genérica repetida de otra carta. La emoción sale de la historia del personaje y de lo que está haciendo.

## 10. Contaminación a evitar

**Investigación externa pendiente.** No se relevaron versiones modernas específicas para este personaje. Aplicar los controles disponibles del repo de [Documentacion/controles_contaminacion_pop_lote_2026-09-28.md](../Documentacion/controles_contaminacion_pop_lote_2026-09-28.md), junto con la identidad, acción, inventario y exclusiones de esta orden. Este pendiente no constituye por sí solo un bloqueo material ni certifica ausencia de contaminación. Las representaciones y sus rasgos concretos siguen sin investigar; no reemplazar ese faltante por asociaciones de memoria.

Nada de Marvel, Disney, DC, anime conocido ni videojuegos, sea o no de esta lista.

## 11. Antes de generar

Mostrar cinco líneas y esperar OK: qué se ve, cuál es el detalle reconocible, el inventario con su fuente, contra quién se separa y con qué diferencia concreta, y de dónde sale el escenario.

Después de generar, declarar cuatro cosas: qué objetos quedaron en la imagen que no estaban en el inventario; **qué elementos exigidos de la §5 no aparecieron y por qué, qué condiciones no se cumplieron y qué alternativas se usaron**; qué campos de esta orden no se cumplieron; y los once puntos del gate de `estilo_visual_aprobado.md` §9, que ahora son doce.

El segundo control es tan importante como el primero y es el que faltaba hasta el 2026-09-14: una imagen puede cumplir el inventario cerrado al pie de la letra y seguir siendo una carta fallada por no mostrar nada de lo que hace reconocible al personaje.
