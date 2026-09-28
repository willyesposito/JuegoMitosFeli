# Orden de producción — Balder

**Completitud mecánica: COMPLETA.** Campos obligatorios y referencias comprobados; vestimenta opcional con alternativa general cuando falta.
**Validación visual: PENDIENTE.** Compilar no acredita silueta, pose, composición, avatar ni colisión; tampoco aprueba identidad, inventario o separación.

**Imagen actual:** ninguna. La carta funciona igual, mostrando el nombre con el tratamiento de su mitología.

**Se lee junto con:** `Documentacion/estilo_visual_aprobado.md`. Nada más.

> Generada por `herramientas/generar-ordenes.py`. Para cambiarla, editar la fuente (el ADN, la matriz, `personajes.json` o `herramientas/identidad_visual.py`) y volver a generar. Editar este archivo a mano se pierde.

---

## 1. Identidad

| Campo | Valor | Origen |
|---|---|---|
| Mitología | nordica | `personajes.json` |
| Tier | plateado | `personajes.json` |
| Familia de encuadre | figura humana | ADN |
| Edad y contextura | Adulto joven; alto y esbelto. | ADN |
| Rostro y cabello | Rostro redondeado luminoso y cabello claro corto-medio. | ADN |
| Cabello, color | rubio claro | ya declarado en el ADN, precisado sin contradecirlo |
| Cabello, textura | corto-medio | ya declarado en el ADN, precisado sin contradecirlo |
| Piel | clara luminosa | ya declarado en el ADN, precisado sin contradecirlo |
| Ojos | azul claro | ya declarado en el ADN, precisado sin contradecirlo |

## 2. Detalle reconocible

**Luminosidad propia y protección universal expresadas visualmente.**

Dones declarados en `personajes.json`: El dios más querido y luminoso; Brillaba con luz propia.

Ícono de la carta en la colección: `muerdago`. Dependencia del identificador en la matriz: 3 de 10.

> **[REVISAR] Identificador abstracto.** Esta ficha no nombra un objeto concreto: el reconocimiento depende del ambiente o del comportamiento. Es el caso más frágil del roster, porque una carta sin objeto propio se vuelve genérica. Antes de generar, confirmar con el lote correspondiente de `Documentacion/prompt_investigacion_85.md` si hay un detalle mundialmente reconocible atestiguado que convenga incorporar a la ficha. No inventarlo acá.

## 3. Acción y pose

Manos visibles y bajas; quietud abierta.

Dirección corporal: Frontal relajada.

Es la acción de la ficha y no se cambia. Si la acción no se puede representar sin agregar un objeto que no está en el inventario de la §5, frenar y avisar.

**Y al revés, que es el caso que falló tres veces:** si un objeto exigido de la §5 no entra en la pose tal como está descripta, **el objeto no se descarta**. Se ajusta la pose lo mínimo para que entre, conservando la dirección corporal y la diagonal. Una silueta de carrera con los dos puños cerrados no deja mano para un bastón, y la salida no es correr sin el bastón: es que una mano lo lleve. Declarar el ajuste en el preflight. Una pista condicional sólo se exige si se cumple su condición; las alternativas con «o» se conservan como alternativas, sin exigir todas a la vez.

## 4. Silueta y composición

- **Firma de silueta:** Cuerpo abierto y limpio + luminosidad propia contenida; ninguna armadura pesada.
- **Composición:** Fondo claro y limpio, con luz propia que no se convierta en halo solar genérico.
- **Densidad visual:** baja-media (matriz: 3 de 10).

- **Cuerpo, y esto manda sobre cualquier intuición:** joven, delgado y liviano, sin masa muscular marcada, hombros de ancho medio, de escala algo mayor que humana.

La contextura sale de acá y no de lo que el personaje representa. Un dios no es corpulento por ser dios, ni un héroe es musculoso por ser héroe: si estos valores piden un cuerpo liviano, va un cuerpo liviano. **Sin abdominales marcados, sin deltoides separados, sin bíceps de gimnasio y sin espalda en V** salvo que la masa y los hombros de arriba lo pidan expresamente.

Los quince ejes completos, como límites de diseño y no como sugerencia (EV edad visual, MC masa corporal, EA escala aparente, AF angulosidad facial, CO contorno superior, AC apertura corporal, DP dinamismo de pose, VD verticalidad, DV densidad visual, OV oscuridad, DI dependencia del identificador, AN anchura de hombros, PF protagonismo de fondo, RM rigidez de materiales, RA rareza anatómica):

| EV | MC | EA | AF | CO | AC | DP | VD | DV | OV | DI | AN | PF | RM | RA |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 3 | 4 | 7 | 2 | 3 | 9 | 1 | 8 | 3 | 1 | 3 | 4 | 3 | 2 | 1 |

Prueba de silueta: reducida a mancha negra, tiene que seguir distinguiéndose de los personajes de la §7.

## 5. Inventario cerrado

Lo único que puede verse:

1. **Luminosidad propia y protección universal expresadas visualmente** — identificador principal. ADN.
2. **Pistas secundarias autorizadas:** pequeño muérdago. ADN. Subordinadas al identificador. Respetar las condiciones y alternativas del texto: «si hace falta» y «cuando corresponda» no exigen presencia incondicional; «o» no exige ambas opciones.
3. **Vestimenta lisa del vocabulario nórdico**, sin ornamento. Necesaria para vestir al personaje; sin autorización de ningún adorno concreto, va lisa.
4. **Resolución funcional de vestimenta y calzado:** `Documentacion/adn_visual_personajes_v1.md`, sección «Regla común de vestimenta funcional y calzado — lote del 2026-09-28». Decisión de diseño de Willy aprobada el 2026-09-28; no es una atestación histórica.
   - **Vestimenta funcional:** Túnica lisa de manga larga y pantalón sencillo.
   - **Calzado:** Botas simples de cuero, sin pieles, tiras envolventes ni herrajes decorativos agregados.
   - **Alcance:** Conservar prendas y armaduras expresamente autorizadas; la base lisa sólo completa las partes que requieren vestimenta funcional, sin reemplazar ni tapar la firma de silueta. No imponer un color común: conservar los colores autorizados. Cierres funcionales discretos, sin broches, emblemas, joyas ni adornos nuevos.

Nada más. En particular, y porque ya pasó en la tanda anterior: **sin** broche, **sin** medallón, **sin** insignia, **sin** emblema, **sin** remaches decorativos, **sin** joyas, **sin** flores en el pelo, **sin** tatuajes, **sin** cuernos, **sin** alas que la ficha no pida, **sin** animal acompañante que no esté arriba, **sin** efecto mágico decorativo agregado por fuera del identificador, **sin** runas, **sin** pseudo-texto, **sin** calzado con decisión no trazada.

**Inventario por exceso y por omisión.** Lo que no figura no entra. Mostrar los elementos exigidos por el ADN, aplicar las pistas condicionales sólo cuando se cumpla su condición y conservar las alternativas como tales. El identificador principal manda, las pistas acompañan y nada tapa la cara ni el identificador. En el preflight, declarar qué condiciones se cumplen y qué alternativa se usa, sin agregar decisiones ajenas a la fuente.

**La magia es obligatoria y sale del identificador.** El detalle reconocible de la §2 no se muestra apoyado y quieto: se muestra funcionando, el entorno reacciona, y el don produce su fenómeno visible. Estela, chispas, partículas, luz propia que ilumina de verdad, deformación del aire, materia que responde: todo eso está autorizado y va sin timidez. Esto no agrega ningún objeto al inventario de arriba, porque lo que se enciende es lo que el personaje ya tiene.

Las tres capas y las cuatro reglas están en `estilo_visual_aprobado.md` §7, que gobierna. En resumen: el efecto nace del don y se puede señalar de dónde salió; no tapa la cara ni el identificador; el color sale del don o del material y nunca es el dorado por default; y el fenómeno es propio de este personaje y no el mismo de las otras 84. Queda afuera el aura que envuelve el cuerpo y disuelve la silueta, el halo detrás de la cabeza, las runas o pseudo-texto flotando, y cualquier efecto que no se pueda trazar al don. Si el identificador no da para un fenómeno, la carta va con el objeto en actividad y el entorno reaccionando, y no se inventa uno.

**Kit nórdico prohibido:** nudo celta, cuello o ribete de piel, broche redondo, medallón, botas envueltas con tiras, cinturón de hebilla decorada, trenzas con anillos de metal. Ese conjunto se repitió en seis cartas nórdicas y es la razón por la que parecen del mismo disfraz. Una mitología aporta vocabulario, no uniforme.

## 6. Escenario

Sale de la acción de la §3 y de las pistas autorizadas de la §5, en ese orden. El fondo se diseña después del personaje, nunca antes.

Protagonismo de fondo asignado: 3 de 10, o sea que el fondo es prescindible: mínimo suficiente y nada más.

**Sin** pedestal de roca ni acantilado heroico, **sin** templo griego de decoración, **sin** Olimpo, **sin** cielo azul con nubes por defecto, **sin** arquitectura de fantasía, **sin** paisaje panorámico que compita en nitidez. Quince de las treinta y una imágenes anteriores tenían el pedestal y once el templo.

El fondo va con profundidad de campo real: menos nitidez y menos contraste que el personaje. Es el recurso principal para cumplir la jerarquía personaje → identificador → contexto.

## 7. Separación obligatoria

**Par de Espejo: Apolo.** El módulo Espejo de los Mundos los muestra enfrentados en pantalla, así que las dos cartas tienen que separarse solas a simple vista. Es el par donde un parecido cuesta doble.

**Preparación textual anti-clonación: DOCUMENTADA.** Tres o más riesgos justificados y separadores de silueta, pose y composición; la prueba visual de silueta, pose y avatar sigue pendiente.

**Contra Apolo.**

| | Balder | Apolo |
|---|---|---|
| Cabello | rubio claro | rubio oscuro |
| Textura | corto-medio | ondulado suave |
| Piel | clara luminosa | clara dorada |
| Ojos | azul claro | ámbar |

Silueta de Apolo, para no repetirla: lira separada del torso + línea corporal muy vertical y ligera.

Pose de Apolo, para no repetirla: tocando o afinando la lira; gesto artístico, no pose heroica.

Ejes numéricos que ya los separan: dependencia del identificador 3 contra 8, apertura corporal 9 contra 5, angulosidad facial 2 contra 5, contorno superior 3 contra 5.

**Atención: 9 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** varones jóvenes esbeltos luminosos.
**Filtro numérico:** distancia ponderada 1.413; misma morfología y lectura; riesgo numérico bajo. No sustituye la comparación textual.

- **Separador de silueta:** Balder: cuerpo abierto y limpio + luminosidad propia contenida; ninguna armadura pesada. Cuerpo: adulto joven; alto y esbelto. Frente a Apolo: lira separada del torso + línea corporal muy vertical y ligera. Cuerpo: adulto joven; alto y esbelto. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Balder: manos visibles y bajas; quietud abierta. Frente a Apolo: tocando o afinando la lira; gesto artístico, no pose heroica. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Balder: fondo claro y limpio, con luz propia que no se convierta en halo solar genérico. Frente a Apolo: luz solar lateral y aire alrededor de la curva de la lira; evitar halo automático. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo balder, comparación Apolo; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Paris.**

| | Balder | Paris |
|---|---|---|
| Cabello | rubio claro | castaño medio |
| Textura | corto-medio | lacio |
| Piel | clara luminosa | oliva media |
| Ojos | azul claro | verde gris |

Silueta de Paris, para no repetirla: manzana dorada separada de la mano + cuerpo girado entre dos direcciones, visualizando una elección.

Pose de Paris, para no repetirla: sostiene la manzana baja y mira lateralmente; gesto de elección, no victoria.

Ejes numéricos que ya los separan: dependencia del identificador 3 contra 10, apertura corporal 9 contra 4, protagonismo de fondo 3 contra 7, densidad visual 3 contra 5.

**Atención: 9 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** varones jóvenes de rasgos suaves y baja acción.
**Filtro numérico:** distancia ponderada 1.654; misma morfología y lectura; riesgo numérico bajo. No sustituye la comparación textual.

- **Separador de silueta:** Balder: cuerpo abierto y limpio + luminosidad propia contenida; ninguna armadura pesada. Cuerpo: adulto joven; alto y esbelto. Frente a Paris: manzana dorada separada de la mano + cuerpo girado entre dos direcciones, visualizando una elección. Cuerpo: adulto joven; contextura media. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Balder: manos visibles y bajas; quietud abierta. Frente a Paris: sostiene la manzana baja y mira lateralmente; gesto de elección, no victoria. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Balder: fondo claro y limpio, con luz propia que no se convierta en halo solar genérico. Frente a Paris: la manzana queda aislada del torso; si aparecen las tres diosas, deben permanecer subordinadas y no convertirse en coprotagonistas. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo balder, comparación Paris; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Eros.**

| | Balder | Eros |
|---|---|---|
| Cabello | rubio claro | castaño claro |
| Textura | corto-medio | rizado abierto |
| Piel | clara luminosa | clara neutra |
| Ojos | azul claro ⚠ igual | azul claro |

Silueta de Eros, para no repetirla: arco curvo + flecha diagonal + cuerpo ligero; alas sólo si ya están autorizadas por la implementación visual del personaje.

Pose de Eros, para no repetirla: apunta sin tensión bélica; gesto travieso-amable.

Ejes numéricos que ya los separan: dependencia del identificador 3 contra 9, dinamismo de pose 1 contra 6, masa corporal 4 contra 2, escala aparente 7 contra 5.

**Por qué se controla este par:** varones juveniles livianos y abiertos.
**Filtro numérico:** distancia ponderada 1.754; misma morfología y lectura; riesgo numérico bajo. No sustituye la comparación textual.

- **Separador de silueta:** Balder: cuerpo abierto y limpio + luminosidad propia contenida; ninguna armadura pesada. Cuerpo: adulto joven; alto y esbelto. Frente a Eros: arco curvo + flecha diagonal + cuerpo ligero; alas sólo si ya están autorizadas por la implementación visual del personaje. Cuerpo: adulto joven de aspecto claramente juvenil pero no infantil; delgado. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Balder: manos visibles y bajas; quietud abierta. Frente a Eros: apunta sin tensión bélica; gesto travieso-amable. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Balder: fondo claro y limpio, con luz propia que no se convierta en halo solar genérico. Frente a Eros: dejar aire delante de la flecha; evitar que arco y cuerpo formen una masa cerrada. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo balder, comparación Eros; contrastes derivados del ADN y la matriz, sin nuevo diseño.

Criterio de la ficha: Apolo. Diferenciar por ausencia de lira/sol, frontalidad relajada y foco en luminosidad propia.

La diferencia no puede depender sólo del color, del fondo, del objeto sostenido, del peinado ni de una prenda. Matriz §4.1: el objeto no salva un clon.

## 8. Encuadre

Vertical 3:4. Figura al 70–80% del alto del cuadro. Zona limpia detrás de la cabeza o del foco principal.

Avatar circular, como restricción invisible: Rostro luminoso + detalle de muérdago. No se dibuja ningún círculo, medallón, marco, inset ni retrato secundario.

## 9. Registro

Cálido, despierto, concentrado. No hace falta que sonría. Sin amenaza, sin crueldad, sin solemnidad genérica repetida de otra carta. La emoción sale de la historia del personaje y de lo que está haciendo.

## 10. Contaminación a evitar

**Pendiente de la investigación** del lote correspondiente de `Documentacion/prompt_investigacion_85.md`, campo `contaminacion_pop`. No bloquea la generación, pero dejarlo vacío es aceptar el riesgo a ciegas: la contaminación de cultura pop fue la falla más frecuente de la tanda anterior y la más difícil de ver desde adentro.

Nada de Marvel, Disney, DC, anime conocido ni videojuegos, sea o no de esta lista.

## 11. Antes de generar

Mostrar cinco líneas y esperar OK: qué se ve, cuál es el detalle reconocible, el inventario con su fuente, contra quién se separa y con qué diferencia concreta, y de dónde sale el escenario.

Después de generar, declarar cuatro cosas: qué objetos quedaron en la imagen que no estaban en el inventario; **qué elementos exigidos de la §5 no aparecieron y por qué, qué condiciones no se cumplieron y qué alternativas se usaron**; qué campos de esta orden no se cumplieron; y los once puntos del gate de `estilo_visual_aprobado.md` §9, que ahora son doce.

El segundo control es tan importante como el primero y es el que faltaba hasta el 2026-09-14: una imagen puede cumplir el inventario cerrado al pie de la letra y seguir siendo una carta fallada por no mostrar nada de lo que hace reconocible al personaje.
