# Orden de producción — Apolo

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
| Edad y contextura | Adulto joven; alto y esbelto. | ADN |
| Rostro y cabello | Rostro simétrico fino; cabello medio ondulado y ordenado. | ADN |
| Cabello, color | rubio oscuro | ya declarado en el ADN, precisado sin contradecirlo |
| Cabello, textura | ondulado suave | ya declarado en el ADN, precisado sin contradecirlo |
| Piel | clara dorada | ya declarado en el ADN, precisado sin contradecirlo |
| Ojos | ámbar | ya declarado en el ADN, precisado sin contradecirlo |

## 2. Detalle reconocible

**Lira.**

Dones declarados en `personajes.json`: Dios del sol, la música y la poesía; El oráculo de Delfos.

Ícono de la carta en la colección: `sol`. Dependencia del identificador en la matriz: 8 de 10.

## 3. Acción y pose

Tocando o afinando la lira; gesto artístico, no pose heroica.

Dirección corporal: Perfil tres cuartos, vertical y sereno.

Es la acción de la ficha y no se cambia. Si la acción no se puede representar sin agregar un objeto que no está en el inventario de la §5, frenar y avisar.

**Y al revés, que es el caso que falló tres veces:** si un objeto exigido de la §5 no entra en la pose tal como está descripta, **el objeto no se descarta**. Se ajusta la pose lo mínimo para que entre, conservando la dirección corporal y la diagonal. Una silueta de carrera con los dos puños cerrados no deja mano para un bastón, y la salida no es correr sin el bastón: es que una mano lo lleve. Declarar el ajuste en el preflight. Una pista condicional sólo se exige si se cumple su condición; las alternativas con «o» se conservan como alternativas, sin exigir todas a la vez.

## 4. Silueta y composición

- **Firma de silueta:** Lira separada del torso + línea corporal muy vertical y ligera.
- **Composición:** Luz solar lateral y aire alrededor de la curva de la lira; evitar halo automático.
- **Densidad visual:** media (matriz: 5 de 10).

- **Cuerpo, y esto manda sobre cualquier intuición:** joven, delgado y liviano, sin masa muscular marcada, hombros de ancho medio, de escala algo mayor que humana.

La contextura sale de acá y no de lo que el personaje representa. Un dios no es corpulento por ser dios, ni un héroe es musculoso por ser héroe: si estos valores piden un cuerpo liviano, va un cuerpo liviano. **Sin abdominales marcados, sin deltoides separados, sin bíceps de gimnasio y sin espalda en V** salvo que la masa y los hombros de arriba lo pidan expresamente.

Los quince ejes completos, como límites de diseño y no como sugerencia (EV edad visual, MC masa corporal, EA escala aparente, AF angulosidad facial, CO contorno superior, AC apertura corporal, DP dinamismo de pose, VD verticalidad, DV densidad visual, OV oscuridad, DI dependencia del identificador, AN anchura de hombros, PF protagonismo de fondo, RM rigidez de materiales, RA rareza anatómica):

| EV | MC | EA | AF | CO | AC | DP | VD | DV | OV | DI | AN | PF | RM | RA |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 4 | 4 | 7 | 5 | 5 | 5 | 3 | 8 | 5 | 2 | 8 | 4 | 4 | 3 | 1 |

Prueba de silueta: reducida a mancha negra, tiene que seguir distinguiéndose de los personajes de la §7.

## 5. Inventario cerrado

Lo único que puede verse:

1. **Lira** — identificador principal. ADN.
2. **Pistas secundarias autorizadas:** sol y oráculo, discretos. ADN. Subordinadas al identificador. Respetar las condiciones y alternativas del texto: «si hace falta» y «cuando corresponda» no exigen presencia incondicional; «o» no exige ambas opciones.
3. **Vestimenta lisa del vocabulario griego**, sin ornamento. Necesaria para vestir al personaje; sin autorización de ningún adorno concreto, va lisa.
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

Protagonismo de fondo asignado: 4 de 10, o sea que el fondo es prescindible: mínimo suficiente y nada más.

**Sin** pedestal de roca ni acantilado heroico, **sin** templo griego de decoración, **sin** Olimpo, **sin** cielo azul con nubes por defecto, **sin** arquitectura de fantasía, **sin** paisaje panorámico que compita en nitidez. Quince de las treinta y una imágenes anteriores tenían el pedestal y once el templo.

El fondo va con profundidad de campo real: menos nitidez y menos contraste que el personaje. Es el recurso principal para cumplir la jerarquía personaje → identificador → contexto.

## 7. Separación obligatoria

**Par de Espejo: Balder.** El módulo Espejo de los Mundos los muestra enfrentados en pantalla, así que las dos cartas tienen que separarse solas a simple vista. Es el par donde un parecido cuesta doble.

**Preparación textual anti-clonación: DOCUMENTADA.** Tres o más riesgos justificados y separadores de silueta, pose y composición; la prueba visual de silueta, pose y avatar sigue pendiente.

**Contra Balder.**

| | Apolo | Balder |
|---|---|---|
| Cabello | rubio oscuro | rubio claro |
| Textura | ondulado suave | corto-medio |
| Piel | clara dorada | clara luminosa |
| Ojos | ámbar | azul claro |

Silueta de Balder, para no repetirla: cuerpo abierto y limpio + luminosidad propia contenida; ninguna armadura pesada.

Pose de Balder, para no repetirla: manos visibles y bajas; quietud abierta.

Ejes numéricos que ya los separan: dependencia del identificador 8 contra 3, apertura corporal 5 contra 9, angulosidad facial 5 contra 2, contorno superior 5 contra 3.

**Atención: 9 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** varones jóvenes esbeltos y luminosos.
**Filtro numérico:** distancia ponderada 1.413; misma morfología y lectura; riesgo numérico bajo. No sustituye la comparación textual.

- **Separador de silueta:** Apolo: lira separada del torso + línea corporal muy vertical y ligera. Cuerpo: adulto joven; alto y esbelto. Frente a Balder: cuerpo abierto y limpio + luminosidad propia contenida; ninguna armadura pesada. Cuerpo: adulto joven; alto y esbelto. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Apolo: tocando o afinando la lira; gesto artístico, no pose heroica. Frente a Balder: manos visibles y bajas; quietud abierta. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Apolo: luz solar lateral y aire alrededor de la curva de la lira; evitar halo automático. Frente a Balder: fondo claro y limpio, con luz propia que no se convierta en halo solar genérico. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo apolo, comparación Balder; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Helios.**

| | Apolo | Helios |
|---|---|---|
| Cabello | rubio oscuro | rubio cobrizo |
| Textura | ondulado suave | corto barrido |
| Piel | clara dorada | dorada media |
| Ojos | ámbar ⚠ igual | ámbar |

Silueta de Helios, para no repetirla: carro y ruedas formando base curva + líneas de movimiento horizontales + cuerpo erguido sobre el carro.

Pose de Helios, para no repetirla: conduce el carro, erguido y estable.

Ejes numéricos que ya los separan: dinamismo de pose 3 contra 8, densidad visual 5 contra 9, rareza anatómica 1 contra 5, apertura corporal 5 contra 8.

**Por qué se controla este par:** luminosidad solar y varón alto pueden producir un mismo héroe vertical.
**Filtro numérico:** distancia ponderada 2.358; morfología o lectura distinta: control semántico/compositivo, no colisión anatómica. No sustituye la comparación textual.

- **Separador de silueta:** Apolo: lira separada del torso + línea corporal muy vertical y ligera. Cuerpo: adulto joven; alto y esbelto. Frente a Helios: carro y ruedas formando base curva + líneas de movimiento horizontales + cuerpo erguido sobre el carro. Cuerpo: adulto maduro; atlético medio. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Apolo: tocando o afinando la lira; gesto artístico, no pose heroica. Frente a Helios: conduce el carro, erguido y estable. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Apolo: luz solar lateral y aire alrededor de la curva de la lira; evitar halo automático. Frente a Helios: sol grande detrás pero subordinado al rostro; aire delante del carro y ruedas completas cuando sean relevantes. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo apolo, comparación Helios; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Orfeo.**

| | Apolo | Orfeo |
|---|---|---|
| Cabello | rubio oscuro | castaño muy oscuro |
| Textura | ondulado suave | ondulado marcado |
| Piel | clara dorada | oliva clara |
| Ojos | ámbar | avellana |

Silueta de Orfeo, para no repetirla: lira amplia cruzada en diagonal baja + hombros relajados + manos finas activas.

Pose de Orfeo, para no repetirla: sentado o apoyado tocando la lira.

Ejes numéricos que ya los separan: verticalidad 8 contra 4, angulosidad facial 5 contra 2, escala aparente 7 contra 5, oscuridad 2 contra 4.

**Atención: 10 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** músicos jóvenes con lira.
**Filtro numérico:** distancia ponderada 1.385; misma morfología y lectura; riesgo numérico bajo. No sustituye la comparación textual.

- **Separador de silueta:** Apolo: lira separada del torso + línea corporal muy vertical y ligera. Cuerpo: adulto joven; alto y esbelto. Frente a Orfeo: lira amplia cruzada en diagonal baja + hombros relajados + manos finas activas. Cuerpo: adulto joven; delgado. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Apolo: tocando o afinando la lira; gesto artístico, no pose heroica. Frente a Orfeo: sentado o apoyado tocando la lira. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Apolo: luz solar lateral y aire alrededor de la curva de la lira; evitar halo automático. Frente a Orfeo: pequeños elementos del entorno pueden orientarse hacia la música; mantener aire íntimo alrededor de la figura. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo apolo, comparación Orfeo; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Paris.**

| | Apolo | Paris |
|---|---|---|
| Cabello | rubio oscuro | castaño medio |
| Textura | ondulado suave | lacio |
| Piel | clara dorada | oliva media |
| Ojos | ámbar | verde gris |

Silueta de Paris, para no repetirla: manzana dorada separada de la mano + cuerpo girado entre dos direcciones, visualizando una elección.

Pose de Paris, para no repetirla: sostiene la manzana baja y mira lateralmente; gesto de elección, no victoria.

Ejes numéricos que ya los separan: protagonismo de fondo 4 contra 7, angulosidad facial 5 contra 3, dependencia del identificador 8 contra 10.

**Atención: 12 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** varones jóvenes esbeltos de rasgos suaves; par de riesgo alto.
**Filtro numérico:** distancia ponderada 0.855; misma morfología y lectura; riesgo numérico alto. No sustituye la comparación textual.

- **Separador de silueta:** Apolo: lira separada del torso + línea corporal muy vertical y ligera. Cuerpo: adulto joven; alto y esbelto. Frente a Paris: manzana dorada separada de la mano + cuerpo girado entre dos direcciones, visualizando una elección. Cuerpo: adulto joven; contextura media. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Apolo: tocando o afinando la lira; gesto artístico, no pose heroica. Frente a Paris: sostiene la manzana baja y mira lateralmente; gesto de elección, no victoria. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Apolo: luz solar lateral y aire alrededor de la curva de la lira; evitar halo automático. Frente a Paris: la manzana queda aislada del torso; si aparecen las tres diosas, deben permanecer subordinadas y no convertirse en coprotagonistas. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo apolo, comparación Paris; contrastes derivados del ADN y la matriz, sin nuevo diseño.

Criterio de la ficha: Balder, Helios y Orfeo. Separarlo por objeto musical, porte más idealizado y ausencia de carro o intimidad sentada.

La diferencia no puede depender sólo del color, del fondo, del objeto sostenido, del peinado ni de una prenda. Matriz §4.1: el objeto no salva un clon.

## 8. Encuadre

Vertical 3:4. Figura al 70–80% del alto del cuadro. Zona limpia detrás de la cabeza o del foco principal.

Avatar circular, como restricción invisible: Rostro + curva reconocible de la lira. No se dibuja ningún círculo, medallón, marco, inset ni retrato secundario.

## 9. Registro

Cálido, despierto, concentrado. No hace falta que sonría. Sin amenaza, sin crueldad, sin solemnidad genérica repetida de otra carta. La emoción sale de la historia del personaje y de lo que está haciendo.

## 10. Contaminación a evitar

**Investigación externa pendiente.** No se relevaron versiones modernas específicas para este personaje. Aplicar los controles disponibles del repo de [Documentacion/controles_contaminacion_pop_lote_2026-09-28.md](../Documentacion/controles_contaminacion_pop_lote_2026-09-28.md), junto con la identidad, acción, inventario y exclusiones de esta orden. Este pendiente no constituye por sí solo un bloqueo material ni certifica ausencia de contaminación. Las representaciones y sus rasgos concretos siguen sin investigar; no reemplazar ese faltante por asociaciones de memoria.

Nada de Marvel, Disney, DC, anime conocido ni videojuegos, sea o no de esta lista.

## 11. Antes de generar

Mostrar cinco líneas y esperar OK: qué se ve, cuál es el detalle reconocible, el inventario con su fuente, contra quién se separa y con qué diferencia concreta, y de dónde sale el escenario.

Después de generar, declarar cuatro cosas: qué objetos quedaron en la imagen que no estaban en el inventario; **qué elementos exigidos de la §5 no aparecieron y por qué, qué condiciones no se cumplieron y qué alternativas se usaron**; qué campos de esta orden no se cumplieron; y los once puntos del gate de `estilo_visual_aprobado.md` §9, que ahora son doce.

El segundo control es tan importante como el primero y es el que faltaba hasta el 2026-09-14: una imagen puede cumplir el inventario cerrado al pie de la letra y seguir siendo una carta fallada por no mostrar nada de lo que hace reconocible al personaje.
