# Orden de producción — Fenrir

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
| Tier | normal | `personajes.json` |
| Familia de encuadre | criatura | ADN |
| Edad y contextura | Lobo adulto gigante; cuerpo largo, musculoso y de cabeza grande. | ADN |
| Rostro y cabello | No aplica geometría humana; hocico largo, pelaje áspero y silueta más afilada que Calisto. | ADN |
| Cabello, piel y ojos | no aplica: la identidad es anatómica, ver ADN | ADN |

**No humano.** Pelo, piel y ojos no se aplican. La geometría de la ficha manda y no se le agregan rasgos humanos que el repo no autorice.

## 2. Detalle reconocible

**Lobo gigante + cinta imposible.**

Dones declarados en `personajes.json`: El lobo gigante; Ninguna cadena común podía sujetarlo.

Ícono de la carta en la colección: `fenrir`. Dependencia del identificador en la matriz: 2 de 10.

## 3. Acción y pose

Detenido y observando; nunca abalanzándose.

Dirección corporal: Perfil tres cuartos hacia la cinta o Tyr.

Es la acción de la ficha y no se cambia. Si la acción no se puede representar sin agregar un objeto que no está en el inventario de la §5, frenar y avisar.

**Y al revés, que es el caso que falló tres veces:** si un objeto exigido de la §5 no entra en la pose tal como está descripta, **el objeto no se descarta**. Se ajusta la pose lo mínimo para que entre, conservando la dirección corporal y la diagonal. Una silueta de carrera con los dos puños cerrados no deja mano para un bastón, y la salida no es correr sin el bastón: es que una mano lo lleve. Declarar el ajuste en el preflight. Una pista condicional sólo se exige si se cumple su condición; las alternativas con «o» se conservan como alternativas, sin exigir todas a la vez.

## 4. Silueta y composición

- **Firma de silueta:** Lomo horizontal + cinta mágica fina contrastando con el gran tamaño + patas separadas y firmes.
- **Composición:** La cinta debe verse claramente contra la masa del lobo y existir aire delante del hocico.
- **Densidad visual:** alta (matriz: 8 de 10).

- **Cuerpo, y esto manda sobre cualquier intuición:** de edad media, de masa enorme, muy por encima de lo humano, hombros muy anchos, que dominan la silueta, de escala algo mayor que humana.

La contextura sale de acá y no de lo que el personaje representa. Un dios no es corpulento por ser dios, ni un héroe es musculoso por ser héroe: si estos valores piden un cuerpo liviano, va un cuerpo liviano. **Sin abdominales marcados, sin deltoides separados, sin bíceps de gimnasio y sin espalda en V** salvo que la masa y los hombros de arriba lo pidan expresamente.

Los quince ejes completos, como límites de diseño y no como sugerencia (EV edad visual, MC masa corporal, EA escala aparente, AF angulosidad facial, CO contorno superior, AC apertura corporal, DP dinamismo de pose, VD verticalidad, DV densidad visual, OV oscuridad, DI dependencia del identificador, AN anchura de hombros, PF protagonismo de fondo, RM rigidez de materiales, RA rareza anatómica):

| EV | MC | EA | AF | CO | AC | DP | VD | DV | OV | DI | AN | PF | RM | RA |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 6 | 9 | 7 | 8 | 8 | 4 | 2 | 4 | 8 | 8 | 2 | 9 | 5 | 2 | 8 |

Prueba de silueta: reducida a mancha negra, tiene que seguir distinguiéndose de los personajes de la §7.

## 5. Inventario cerrado

Lo único que puede verse:

1. **Lobo gigante + cinta imposible** — identificador principal. ADN.
2. **Pistas secundarias autorizadas:** Tyr como contexto cuando corresponda y vocabulario de paisaje nórdico. ADN. Subordinadas al identificador. Respetar las condiciones y alternativas del texto: «si hace falta» y «cuando corresponda» no exigen presencia incondicional; «o» no exige ambas opciones.
3. **Resolución funcional de vestimenta y calzado:** `Documentacion/adn_visual_personajes_v1.md`, sección «Regla común de vestimenta funcional y calzado — lote del 2026-09-28». Decisión de diseño de Willy aprobada el 2026-09-28; no es una atestación histórica.
   - **Calzado:** No corresponde: conservar la anatomía de criatura autorizada, sin ropa ni calzado humano.

Nada más. En particular, y porque ya pasó en la tanda anterior: **sin** broche, **sin** medallón, **sin** insignia, **sin** emblema, **sin** remaches decorativos, **sin** joyas, **sin** flores en el pelo, **sin** tatuajes, **sin** cuernos, **sin** alas que la ficha no pida, **sin** animal acompañante que no esté arriba, **sin** efecto mágico decorativo agregado por fuera del identificador, **sin** runas, **sin** pseudo-texto, **sin** calzado con decisión no trazada.

**Inventario por exceso y por omisión.** Lo que no figura no entra. Mostrar los elementos exigidos por el ADN, aplicar las pistas condicionales sólo cuando se cumpla su condición y conservar las alternativas como tales. El identificador principal manda, las pistas acompañan y nada tapa la cara ni el identificador. En el preflight, declarar qué condiciones se cumplen y qué alternativa se usa, sin agregar decisiones ajenas a la fuente.

**La magia es obligatoria y sale del identificador.** El detalle reconocible de la §2 no se muestra apoyado y quieto: se muestra funcionando, el entorno reacciona, y el don produce su fenómeno visible. Estela, chispas, partículas, luz propia que ilumina de verdad, deformación del aire, materia que responde: todo eso está autorizado y va sin timidez. Esto no agrega ningún objeto al inventario de arriba, porque lo que se enciende es lo que el personaje ya tiene.

Las tres capas y las cuatro reglas están en `estilo_visual_aprobado.md` §7, que gobierna. En resumen: el efecto nace del don y se puede señalar de dónde salió; no tapa la cara ni el identificador; el color sale del don o del material y nunca es el dorado por default; y el fenómeno es propio de este personaje y no el mismo de las otras 84. Queda afuera el aura que envuelve el cuerpo y disuelve la silueta, el halo detrás de la cabeza, las runas o pseudo-texto flotando, y cualquier efecto que no se pueda trazar al don. Si el identificador no da para un fenómeno, la carta va con el objeto en actividad y el entorno reaccionando, y no se inventa uno.

**Kit nórdico prohibido:** nudo celta, cuello o ribete de piel, broche redondo, medallón, botas envueltas con tiras, cinturón de hebilla decorada, trenzas con anillos de metal. Ese conjunto se repitió en seis cartas nórdicas y es la razón por la que parecen del mismo disfraz. Una mitología aporta vocabulario, no uniforme.

## 6. Escenario

Sale de la acción de la §3 y de las pistas autorizadas de la §5, en ese orden. El fondo se diseña después del personaje, nunca antes.

Protagonismo de fondo asignado: 5 de 10, o sea que el contexto acompaña sin llevar peso.

**Sin** pedestal de roca ni acantilado heroico, **sin** templo griego de decoración, **sin** Olimpo, **sin** cielo azul con nubes por defecto, **sin** arquitectura de fantasía, **sin** paisaje panorámico que compita en nitidez. Quince de las treinta y una imágenes anteriores tenían el pedestal y once el templo.

El fondo va con profundidad de campo real: menos nitidez y menos contraste que el personaje. Es el recurso principal para cumplir la jerarquía personaje → identificador → contexto.

## 7. Separación obligatoria

**Preparación textual anti-clonación: DOCUMENTADA.** Tres o más riesgos justificados y separadores de silueta, pose y composición; la prueba visual de silueta, pose y avatar sigue pendiente.

**Contra Calisto.**

Silueta de Calisto, para no repetirla: gran cuerpo de osa + arco de estrellas de Osa Mayor arriba + perfil ancho y patas firmes.

Pose de Calisto, para no repetirla: quieta mirando las estrellas, nunca rugiendo.

Ejes numéricos que ya los separan: angulosidad facial 8 contra 3, dependencia del identificador 2 contra 7, oscuridad 8 contra 4, protagonismo de fondo 5 contra 8.

**Atención: 10 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** grandes cuadrúpedos peludos.
**Filtro numérico:** distancia ponderada 1.447; misma morfología y lectura; riesgo numérico bajo. No sustituye la comparación textual.

- **Separador de silueta:** Fenrir: lomo horizontal + cinta mágica fina contrastando con el gran tamaño + patas separadas y firmes. Cuerpo: lobo adulto gigante; cuerpo largo, musculoso y de cabeza grande. Frente a Calisto: gran cuerpo de osa + arco de estrellas de Osa Mayor arriba + perfil ancho y patas firmes. Cuerpo: osa adulta, amable e imponente; cuerpo pesado y estable. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Fenrir: detenido y observando; nunca abalanzándose. Frente a Calisto: quieta mirando las estrellas, nunca rugiendo. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Fenrir: la cinta debe verse claramente contra la masa del lobo y existir aire delante del hocico. Frente a Calisto: paisaje nocturno limpio y arco estelar por encima, con aire suficiente entre lomo y constelación. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo fenrir, comparación Calisto; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Cerbero.**

Silueta de Cerbero, para no repetirla: tres perfiles de cabeza escalonados en altura + cuerpo único ancho.

Pose de Cerbero, para no repetirla: sentado o quieto ante una entrada.

Ejes numéricos que ya los separan: angulosidad facial 8 contra 5, rareza anatómica 8 contra 10.

**Atención: 13 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** caninos de masa enorme detenidos.
**Filtro numérico:** distancia ponderada 0.983; misma morfología y lectura; riesgo numérico medio. No sustituye la comparación textual.

- **Separador de silueta:** Fenrir: lomo horizontal + cinta mágica fina contrastando con el gran tamaño + patas separadas y firmes. Cuerpo: lobo adulto gigante; cuerpo largo, musculoso y de cabeza grande. Frente a Cerbero: tres perfiles de cabeza escalonados en altura + cuerpo único ancho. Cuerpo: perro adulto enorme, robusto y de patas pesadas. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Fenrir: detenido y observando; nunca abalanzándose. Frente a Cerbero: sentado o quieto ante una entrada. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Fenrir: la cinta debe verse claramente contra la masa del lobo y existir aire delante del hocico. Frente a Cerbero: escalonar las tres cabezas para evitar solapamiento; entrada subordinada y aire suficiente entre perfiles. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo fenrir, comparación Cerbero; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Minotauro.**

Silueta de Minotauro, para no repetirla: cuernos largos + hombros enormes + postura ligeramente encorvada sobre anatomía toro-humano.

Pose de Minotauro, para no repetirla: observa o decide camino; no carga hacia cámara.

Ejes numéricos que ya los separan: contorno superior 8 contra 5, verticalidad 4 contra 7, oscuridad 8 contra 6.

**Atención: 12 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** criatura enorme y pesada en pausa; riesgo de bloque cefálico genérico.
**Filtro numérico:** distancia ponderada 1.045; morfología o lectura distinta: control semántico/compositivo, no colisión anatómica. No sustituye la comparación textual.

- **Separador de silueta:** Fenrir: lomo horizontal + cinta mágica fina contrastando con el gran tamaño + patas separadas y firmes. Cuerpo: lobo adulto gigante; cuerpo largo, musculoso y de cabeza grande. Frente a Minotauro: cuernos largos + hombros enormes + postura ligeramente encorvada sobre anatomía toro-humano. Cuerpo: adulto híbrido; torso humanoide muy ancho y pesado, con piernas taurinas terminadas en pezuñas. Sin piernas ni pies humanos. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Fenrir: detenido y observando; nunca abalanzándose. Frente a Minotauro: observa o decide camino; no carga hacia cámara. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Fenrir: la cinta debe verse claramente contra la masa del lobo y existir aire delante del hocico. Frente a Minotauro: transición anatómica completa en imagen maestra; laberinto subordinado y aire alrededor de ambos cuernos. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo fenrir, comparación Minotauro; contrastes derivados del ADN y la matriz, sin nuevo diseño.

Criterio de la ficha: Calisto y Cerbero. Diferenciar por hocico más largo, pelaje más áspero, cuerpo único y lenguaje nórdico.

La diferencia no puede depender sólo del color, del fondo, del objeto sostenido, del peinado ni de una prenda. Matriz §4.1: el objeto no salva un clon.

## 8. Encuadre

Vertical 3:4. Figura al 70–80% del alto del cuadro. Zona limpia detrás de la cabeza o del foco principal.

Avatar circular, como restricción invisible: Cabeza de lobo + cinta claramente visible. No se dibuja ningún círculo, medallón, marco, inset ni retrato secundario.

## 9. Registro

Cálido, despierto, concentrado. No hace falta que sonría. Sin amenaza, sin crueldad, sin solemnidad genérica repetida de otra carta. La emoción sale de la historia del personaje y de lo que está haciendo.

## 10. Contaminación a evitar

Los lobos de *God of War* y *Skyrim*.

Nada de Marvel, Disney, DC, anime conocido ni videojuegos, sea o no de esta lista.

## 11. Antes de generar

Mostrar cinco líneas y esperar OK: qué se ve, cuál es el detalle reconocible, el inventario con su fuente, contra quién se separa y con qué diferencia concreta, y de dónde sale el escenario.

Después de generar, declarar cuatro cosas: qué objetos quedaron en la imagen que no estaban en el inventario; **qué elementos exigidos de la §5 no aparecieron y por qué, qué condiciones no se cumplieron y qué alternativas se usaron**; qué campos de esta orden no se cumplieron; y los once puntos del gate de `estilo_visual_aprobado.md` §9, que ahora son doce.

El segundo control es tan importante como el primero y es el que faltaba hasta el 2026-09-14: una imagen puede cumplir el inventario cerrado al pie de la letra y seguir siendo una carta fallada por no mostrar nada de lo que hace reconocible al personaje.
