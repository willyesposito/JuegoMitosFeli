# Orden de producción — Aquiles

**Completitud mecánica: COMPLETA.** Campos obligatorios y referencias comprobados; vestimenta opcional con alternativa general cuando falta.
**Validación visual: PENDIENTE.** Compilar no acredita silueta, pose, composición, avatar ni colisión; tampoco aprueba identidad, inventario o separación.

**Imagen actual:** `imagenes/aquiles.png`. Su existencia no implica aprobación ni reemplazo automático; consultar la evaluación vigente.

**Se lee junto con:** `Documentacion/estilo_visual_aprobado.md`. Nada más.

> Generada por `herramientas/generar-ordenes.py`. Para cambiarla, editar la fuente (el ADN, la matriz, `personajes.json` o `herramientas/identidad_visual.py`) y volver a generar. Editar este archivo a mano se pierde.

---

## 1. Identidad

| Campo | Valor | Origen |
|---|---|---|
| Mitología | griega | `personajes.json` |
| Tier | dorado | `personajes.json` |
| Familia de encuadre | figura humana | ADN |
| Edad y contextura | Adulto joven; musculatura definida pero más estilizada que Heracles. | ADN |
| Rostro y cabello | Cara triangular y cabello claro corto y dinámico. | ADN |
| Cabello, color | rubio miel | ya declarado en el ADN, precisado sin contradecirlo |
| Cabello, textura | ondulado suave | ya declarado en el ADN, precisado sin contradecirlo |
| Piel | clara dorada | ya declarado en el ADN, precisado sin contradecirlo |
| Ojos | gris | ya declarado en el ADN, precisado sin contradecirlo |

## 2. Detalle reconocible

**Escudo + talón descubierto, asociado a una pequeña interrupción en forma de V en el borde de la sandalia, repetida en el borde superior del escudo.**

Dones declarados en `personajes.json`: El guerrero más veloz y fuerte de Troya; Casi invulnerable.

Ícono de la carta en la colección: `talon`. Dependencia del identificador en la matriz: 7 de 10.

## 3. Acción y pose

Pausa tensa como a punto de moverse; evitar combate directo.

Dirección corporal: Perfil tres cuartos con eje proyectado hacia adelante.

Es la acción de la ficha y no se cambia. Si la acción no se puede representar sin agregar un detalle, aplicar la regla narrativa de la §5 y documentarlo en el preflight; verificar fuentes para nuevos atributos míticos.

**Y al revés, que es el caso que falló tres veces:** si un objeto exigido de la §5 no entra en la pose tal como está descripta, **el objeto no se descarta**. Se ajusta la pose lo mínimo para que entre, conservando la dirección corporal y la diagonal. Una silueta de carrera con los dos puños cerrados no deja mano para un bastón, y la salida no es correr sin el bastón: es que una mano lo lleve. Declarar el ajuste en el preflight. Una pista condicional sólo se exige si se cumple su condición; las alternativas con «o» se conservan como alternativas, sin exigir todas a la vez.

## 4. Silueta y composición

- **Firma de silueta:** Escudo grande desplazado + piernas largas + torso inclinado hacia adelante, con sensación de velocidad incluso quieto.
- **Composición:** Mantener visible el talón en la imagen completa sin convertirlo en único foco; aire delante del eje corporal para sostener la sensación de impulso.
- **Densidad visual:** media-alta (matriz: 7 de 10).

- **Cuerpo, y esto manda sobre cualquier intuición:** joven, corpulento, con masa evidente, hombros anchos, de escala algo mayor que humana.

La contextura sale de acá y no de lo que el personaje representa. Un dios no es corpulento por ser dios, ni un héroe es musculoso por ser héroe: si estos valores piden un cuerpo liviano, va un cuerpo liviano. **Sin abdominales marcados, sin deltoides separados, sin bíceps de gimnasio y sin espalda en V** salvo que la masa y los hombros de arriba lo pidan expresamente.

Los quince ejes completos, como límites de diseño y no como sugerencia (EV edad visual, MC masa corporal, EA escala aparente, AF angulosidad facial, CO contorno superior, AC apertura corporal, DP dinamismo de pose, VD verticalidad, DV densidad visual, OV oscuridad, DI dependencia del identificador, AN anchura de hombros, PF protagonismo de fondo, RM rigidez de materiales, RA rareza anatómica):

| EV | MC | EA | AF | CO | AC | DP | VD | DV | OV | DI | AN | PF | RM | RA |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 4 | 7 | 7 | 7 | 6 | 6 | 7 | 5 | 7 | 4 | 7 | 7 | 4 | 8 | 1 |

Prueba de silueta: reducida a mancha negra, tiene que seguir distinguiéndose de los personajes de la §7.

## 5. Inventario narrativo y detalles trazables

Elementos de base; completar con detalles narrativos trazables según la regla siguiente:

1. **Escudo + talón descubierto, asociado a una pequeña interrupción en forma de V en el borde de la sandalia, repetida en el borde superior del escudo** — identificador principal. ADN.
2. **Pistas secundarias autorizadas:** eco visual del talón mediante la misma pequeña interrupción en forma de V en el borde de la sandalia y en el borde superior del escudo. Es un recorte del contorno, sin texto, sin símbolo añadido y sin herida; no exige grebas. ADN. Subordinadas al identificador. Respetar las condiciones y alternativas del texto: «si hace falta» y «cuando corresponda» no exigen presencia incondicional; «o» no exige ambas opciones.
3. **Vestimenta del vocabulario griego:** resolver cortes, capas, tejidos y detalles según identidad y episodio; documentar decisiones artísticas en el preflight.
4. **Resolución funcional de vestimenta y calzado:** `Documentacion/adn_visual_personajes_v1.md`, sección «Regla común de vestimenta funcional y calzado — lote del 2026-09-28». Decisión de diseño de Willy aprobada el 2026-09-28; no es una atestación histórica.
   - **Vestimenta funcional:** Túnica lisa de corte sencillo, ajustada a la acción y a la silueta.
   - **Calzado:** Sandalia simple con talón descubierto y una pequeña interrupción en forma de V en su borde, repetida en el borde superior del escudo. Es un recorte del contorno, no una letra, inscripción ni símbolo añadido; sin herida.
   - **Alcance:** Base funcional de respaldo: las prendas y los detalles específicos de la ficha o del preflight narrativo del 2026-11-04 tienen prioridad. Variar cortes, capas, tejidos y materiales según personaje; no imponer uniforme ni prohibición general de adornos. Mantener anatomía, acción e identificador legibles.

**Regla vigente — 2026-11-04: riqueza narrativa e identidad mítica.** Priorizar que se entienda quién es el personaje y qué episodio representa. Se permiten prendas de cortes distintos, capas, tejidos, bordados, cierres, equipo, desgaste y objetos narrativos cuando aporten identidad o sentido a la escena; no hay un máximo fijo de prendas ni de detalles. Antes de generar, registrar los detalles elegidos en la ficha o el preflight y distinguir: (a) atributo o episodio respaldado, citando fuente; (b) interpretación artística autorizada, sin presentarla como dato del mito. La autorización general de Willy permite estas decisiones de diseño sin pedir aprobación por cada cierre o material. Para nuevos poderes, animales, símbolos de identidad o hechos narrativos, verificar la fuente y actualizar la ficha antes de dibujarlos. No agregar por rutina ni copiar el mismo kit entre personajes. Mantener rostro, identificador, acción, silueta y jerarquía legibles. Revisar también las omisiones de elementos exigidos; respetar condiciones y alternativas. Esta regla reemplaza las prohibiciones generales de adornos, el inventario cerrado absoluto y la base lisa obligatoria. Las exclusiones específicas contra errores míticos, anacronismos y clones siguen vigentes salvo decisión posterior expresa. Frigg puede conservar el acabado fotográfico aceptado por Willy; esta excepción no cambia el estilo general de la colección.

**La magia es obligatoria y sale del identificador.** El detalle reconocible de la §2 no se muestra apoyado y quieto: se muestra funcionando, el entorno reacciona, y el don produce su fenómeno visible. Estela, chispas, partículas, luz propia que ilumina de verdad, deformación del aire, materia que responde: todo eso está autorizado y va sin timidez. Esto no agrega ningún objeto al inventario de arriba, porque lo que se enciende es lo que el personaje ya tiene.

Las tres capas y las cuatro reglas están en `estilo_visual_aprobado.md` §7, que gobierna. En resumen: el efecto nace del don y se puede señalar de dónde salió; no tapa la cara ni el identificador; el color sale del don o del material y nunca es el dorado por default; y el fenómeno es propio de este personaje y no el mismo de las otras 84. Queda afuera el aura que envuelve el cuerpo y disuelve la silueta, el halo detrás de la cabeza, las runas o pseudo-texto flotando, y cualquier efecto que no se pueda trazar al don. Si el identificador no da para un fenómeno, la carta va con el objeto en actividad y el entorno reaccionando, y no se inventa uno.

## 6. Escenario

Sale de la acción de la §3 y de las pistas autorizadas de la §5, en ese orden. El fondo se diseña después del personaje, nunca antes.

Protagonismo de fondo asignado: 4 de 10, o sea que el fondo es prescindible: mínimo suficiente y nada más.

**Sin** pedestal de roca ni acantilado heroico, **sin** templo griego de decoración, **sin** Olimpo, **sin** cielo azul con nubes por defecto, **sin** arquitectura de fantasía, **sin** paisaje panorámico que compita en nitidez. Quince de las treinta y una imágenes anteriores tenían el pedestal y once el templo.

El fondo va con profundidad de campo real: menos nitidez y menos contraste que el personaje. Es el recurso principal para cumplir la jerarquía personaje → identificador → contexto.

## 7. Separación obligatoria

**Par de Espejo: Sigurd.** El módulo Espejo de los Mundos los muestra enfrentados en pantalla, así que las dos cartas tienen que separarse solas a simple vista. Es el par donde un parecido cuesta doble.

**Preparación textual anti-clonación: DOCUMENTADA.** Tres o más riesgos justificados y separadores de silueta, pose y composición; la prueba visual de silueta, pose y avatar sigue pendiente.

**Contra Héctor.**

| | Aquiles | Héctor |
|---|---|---|
| Cabello | rubio miel | castaño oscuro |
| Textura | ondulado suave | corto |
| Piel | clara dorada | oliva media |
| Ojos | gris | marrón cálido |

Silueta de Héctor, para no repetirla: gran escudo defensivo hacia un lateral + cuerpo colocado entre ciudad y exterior.

Pose de Héctor, para no repetirla: protege y contiene, no avanza ni ataca.

Ejes numéricos que ya los separan: contorno superior 6 contra 2, dinamismo de pose 7 contra 3, protagonismo de fondo 4 contra 8, angulosidad facial 7 contra 4.

**Atención: 10 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** héroes guerreros con escudo.
**Filtro numérico:** distancia ponderada 1.257; misma morfología y lectura; riesgo numérico bajo. No sustituye la comparación textual.

- **Separador de silueta:** Aquiles: escudo grande desplazado + piernas largas + torso inclinado hacia adelante, con sensación de velocidad incluso quieto. Cuerpo: adulto joven; musculatura definida pero más estilizada que Heracles. Frente a Héctor: gran escudo defensivo hacia un lateral + cuerpo colocado entre ciudad y exterior. Cuerpo: adulto maduro; atlético fuerte pero no enorme. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Aquiles: pausa tensa como a punto de moverse; evitar combate directo. Frente a Héctor: protege y contiene, no avanza ni ataca. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Aquiles: mantener visible el talón en la imagen completa sin convertirlo en único foco; aire delante del eje corporal para sostener la sensación de impulso. Frente a Héctor: murallas de Troya subordinadas detrás; el escudo ocupa un lateral y el cuerpo cierra visualmente el paso. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo aquiles, comparación Héctor; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Heracles.**

| | Aquiles | Heracles |
|---|---|---|
| Cabello | rubio miel | castaño oscuro |
| Textura | ondulado suave | rizado abierto corto |
| Piel | clara dorada | canela |
| Ojos | gris | ámbar |

Silueta de Heracles, para no repetirla: espalda muy ancha + piel del león de Nemea rompiendo el contorno de hombros + brazos separados del torso.

Pose de Heracles, para no repetirla: cargando o desplazando peso en vez de posar; gesto laborioso más que guerrero perfecto.

Ejes numéricos que ya los separan: rigidez de materiales 8 contra 4, masa corporal 7 contra 10, anchura de hombros 7 contra 10, edad visual 4 contra 6.

**Atención: 11 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** héroes de esfuerzo físico que pueden compartir cuerpo macizo.
**Filtro numérico:** distancia ponderada 1.408; misma morfología y lectura; riesgo numérico bajo. No sustituye la comparación textual.

- **Separador de silueta:** Aquiles: escudo grande desplazado + piernas largas + torso inclinado hacia adelante, con sensación de velocidad incluso quieto. Cuerpo: adulto joven; musculatura definida pero más estilizada que Heracles. Frente a Heracles: espalda muy ancha + piel del león de Nemea rompiendo el contorno de hombros + brazos separados del torso. Cuerpo: adulto joven-maduro; el cuerpo humano más macizo del roster, cuello ancho y centro de gravedad bajo. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Aquiles: pausa tensa como a punto de moverse; evitar combate directo. Frente a Heracles: cargando o desplazando peso en vez de posar; gesto laborioso más que guerrero perfecto. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Aquiles: mantener visible el talón en la imagen completa sin convertirlo en único foco; aire delante del eje corporal para sostener la sensación de impulso. Frente a Heracles: masa corporal dominante, con brazos separados para que la silueta respire y la piel del león se lea sin collage de trabajos. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo aquiles, comparación Heracles; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Sigurd.**

| | Aquiles | Sigurd |
|---|---|---|
| Cabello | rubio miel | castaño claro |
| Textura | ondulado suave | medio práctico |
| Piel | clara dorada ⚠ igual | clara dorada |
| Ojos | gris | verde gris |

Silueta de Sigurd, para no repetirla: cuerpo inclinado + aves sobre un hombro + gran masa de dragón alejada en fondo.

Pose de Sigurd, para no repetirla: escucha a los pájaros después del desafío; no escena de combate.

Ejes numéricos que ya los separan: dinamismo de pose 7 contra 2, protagonismo de fondo 4 contra 7, contorno superior 6 contra 4, apertura corporal 6 contra 4.

**Atención: 10 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** héroes fuertes con equipamiento.
**Filtro numérico:** distancia ponderada 1.263; misma morfología y lectura; riesgo numérico bajo. No sustituye la comparación textual.

- **Separador de silueta:** Aquiles: escudo grande desplazado + piernas largas + torso inclinado hacia adelante, con sensación de velocidad incluso quieto. Cuerpo: adulto joven; musculatura definida pero más estilizada que Heracles. Frente a Sigurd: cuerpo inclinado + aves sobre un hombro + gran masa de dragón alejada en fondo. Cuerpo: adulto joven-maduro; atlético fuerte. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Aquiles: pausa tensa como a punto de moverse; evitar combate directo. Frente a Sigurd: escucha a los pájaros después del desafío; no escena de combate. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Aquiles: mantener visible el talón en la imagen completa sin convertirlo en único foco; aire delante del eje corporal para sostener la sensación de impulso. Frente a Sigurd: aves cerca del rostro y Fafnir subordinado en fondo para que no absorba la lectura del personaje. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo aquiles, comparación Sigurd; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Eneas.**

| | Aquiles | Eneas |
|---|---|---|
| Cabello | rubio miel | castaño muy oscuro |
| Textura | ondulado suave | corto |
| Piel | clara dorada | canela |
| Ojos | gris | gris oscuro |

Silueta de Eneas, para no repetirla: equipo de tradición de Edad del Bronce + escudo antiguo + cuerpo inclinado hacia adelante como viajero.

Pose de Eneas, para no repetirla: avanza como viajero resistente marcado por el recorrido, cansado pero firme; no combate ni posa como comandante.

Ejes numéricos que ya los separan: contorno superior 6 contra 2, protagonismo de fondo 4 contra 8, edad visual 4 contra 7, dependencia del identificador 7 contra 5.

**Atención: 11 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** atléticos con equipo antiguo; par de riesgo alto.
**Filtro numérico:** distancia ponderada 0.894; misma morfología y lectura; riesgo numérico alto. No sustituye la comparación textual.

- **Separador de silueta:** Aquiles: escudo grande desplazado + piernas largas + torso inclinado hacia adelante, con sensación de velocidad incluso quieto. Frente a Eneas: equipo de tradición de Edad del Bronce + escudo antiguo + cuerpo inclinado hacia adelante como viajero. Conservar identidades, acción y jerarquía distintas; revisión visual pendiente.
- **Separador de pose:** Aquiles: pausa tensa como a punto de moverse; evitar combate directo. Frente a Eneas: avanza como viajero resistente marcado por el recorrido, cansado pero firme; no combate ni posa como comandante. Conservar identidades, acción y jerarquía distintas; revisión visual pendiente.
- **Separador de composición:** Aquiles: mantener visible el talón en la imagen completa sin convertirlo en único foco; aire delante del eje corporal para sostener la sensación de impulso. Frente a Eneas: costa/barco subordinados y aire delante del recorrido; evitar coraza segmentada o estética legionaria imperial. Conservar identidades, acción y jerarquía distintas; revisión visual pendiente.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo aquiles, comparación Eneas; contrastes derivados del ADN y la matriz, sin nuevo diseño.

Criterio de la ficha: Héctor y Heracles. Diferenciar por energía impulsiva, silueta más fina y eje hacia adelante.

La diferencia no puede depender sólo del color, del fondo, del objeto sostenido, del peinado ni de una prenda. Matriz §4.1: el objeto no salva un clon.

## 8. Encuadre

Vertical 3:4. Figura al 70–80% del alto del cuadro. Zona limpia detrás de la cabeza o del foco principal.

Avatar circular, como restricción invisible: Rostro + borde de escudo; el eco alto debe permitir que el avatar no dependa del talón. No se dibuja ningún círculo, medallón, marco, inset ni retrato secundario.

## 9. Registro

Cálido, despierto, concentrado. No hace falta que sonría. Sin amenaza, sin crueldad, sin solemnidad genérica repetida de otra carta. La emoción sale de la historia del personaje y de lo que está haciendo.

## 10. Contaminación a evitar

*Troya* (2004).

Nada de Marvel, Disney, DC, anime conocido ni videojuegos, sea o no de esta lista.

## 11. Antes de generar

Mostrar cinco líneas y esperar OK: qué se ve, cuál es el detalle reconocible, el inventario con su fuente, contra quién se separa y con qué diferencia concreta, y de dónde sale el escenario.

Después de generar, declarar cuatro cosas: qué objetos quedaron en la imagen que no estaban en el inventario; **qué elementos exigidos de la §5 no aparecieron y por qué, qué condiciones no se cumplieron y qué alternativas se usaron**; qué campos de esta orden no se cumplieron; y los once puntos del gate de `estilo_visual_aprobado.md` §9, que ahora son doce.

El segundo control es tan importante como el primero y es el que faltaba hasta el 2026-09-14: una imagen puede cumplir el inventario cerrado al pie de la letra y seguir siendo una carta fallada por no mostrar nada de lo que hace reconocible al personaje.
