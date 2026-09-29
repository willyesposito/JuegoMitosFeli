# Orden de producción — Odiseo

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
| Tier | dorado | `personajes.json` |
| Familia de encuadre | figura humana | ADN |
| Edad y contextura | Adulto maduro; cuerpo fibroso, viajado y menos ceremonial que otros héroes. | ADN |
| Rostro y cabello | Rostro alargado, nariz marcada y cabello ondulado corto con desgaste visible. | ADN |
| Cabello, color | castaño oscuro con canas | ya declarado en el ADN, precisado sin contradecirlo |
| Cabello, textura | ondulado marcado | ya declarado en el ADN, precisado sin contradecirlo |
| Piel | canela curtida | ya declarado en el ADN, precisado sin contradecirlo |
| Ojos | gris verdoso | ya declarado en el ADN, precisado sin contradecirlo |

## 2. Detalle reconocible

**Comportamiento estratégico de viajero y navegación/retorno como núcleo visual.**

Dones declarados en `personajes.json`: Maestro de los planes; Un truco nuevo para cada problema.

Ícono de la carta en la colección: `barco`. Dependencia del identificador en la matriz: 3 de 10.

## 3. Acción y pose

Gesto mental y de cálculo; mano activa antes que arma protagonista.

Dirección corporal: Tres cuartos lateral orientado hacia un problema fuera de cuadro.

Es la acción de la ficha y no se cambia. Si la acción no se puede representar sin agregar un objeto que no está en el inventario de la §5, frenar y avisar.

**Y al revés, que es el caso que falló tres veces:** si un objeto exigido de la §5 no entra en la pose tal como está descripta, **el objeto no se descarta**. Se ajusta la pose lo mínimo para que entre, conservando la dirección corporal y la diagonal. Una silueta de carrera con los dos puños cerrados no deja mano para un bastón, y la salida no es correr sin el bastón: es que una mano lo lleve. Declarar el ajuste en el preflight. Una pista condicional sólo se exige si se cumple su condición; las alternativas con «o» se conservan como alternativas, sin exigir todas a la vez.

## 4. Silueta y composición

- **Firma de silueta:** Capa o tela de viaje inclinada + postura levemente adelantada + mano activa señalando o calculando.
- **Composición:** Reservar aire hacia la dirección donde piensa avanzar; menos armadura y menos frontalidad que los héroes guerreros.
- **Densidad visual:** media (matriz: 5 de 10).

- **Cuerpo, y esto manda sobre cualquier intuición:** entrado en años, de contextura media, atlética sin volumen, hombros de ancho medio, de escala humana.

La contextura sale de acá y no de lo que el personaje representa. Un dios no es corpulento por ser dios, ni un héroe es musculoso por ser héroe: si estos valores piden un cuerpo liviano, va un cuerpo liviano. **Sin abdominales marcados, sin deltoides separados, sin bíceps de gimnasio y sin espalda en V** salvo que la masa y los hombros de arriba lo pidan expresamente.

Los quince ejes completos, como límites de diseño y no como sugerencia (EV edad visual, MC masa corporal, EA escala aparente, AF angulosidad facial, CO contorno superior, AC apertura corporal, DP dinamismo de pose, VD verticalidad, DV densidad visual, OV oscuridad, DI dependencia del identificador, AN anchura de hombros, PF protagonismo de fondo, RM rigidez de materiales, RA rareza anatómica):

| EV | MC | EA | AF | CO | AC | DP | VD | DV | OV | DI | AN | PF | RM | RA |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 7 | 5 | 6 | 8 | 4 | 5 | 4 | 6 | 5 | 5 | 3 | 5 | 6 | 4 | 1 |

Prueba de silueta: reducida a mancha negra, tiene que seguir distinguiéndose de los personajes de la §7.

## 5. Inventario cerrado

Lo único que puede verse:

1. **Comportamiento estratégico de viajero y navegación/retorno como núcleo visual** — identificador principal. ADN.
2. **Pistas secundarias autorizadas:** caballo de Troya o elemento de viaje/navegación, sólo como contexto. ADN. Subordinadas al identificador. Respetar las condiciones y alternativas del texto: «si hace falta» y «cuando corresponda» no exigen presencia incondicional; «o» no exige ambas opciones.
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

Protagonismo de fondo asignado: 6 de 10, o sea que el contexto acompaña sin llevar peso.

**Sin** pedestal de roca ni acantilado heroico, **sin** templo griego de decoración, **sin** Olimpo, **sin** cielo azul con nubes por defecto, **sin** arquitectura de fantasía, **sin** paisaje panorámico que compita en nitidez. Quince de las treinta y una imágenes anteriores tenían el pedestal y once el templo.

El fondo va con profundidad de campo real: menos nitidez y menos contraste que el personaje. Es el recurso principal para cumplir la jerarquía personaje → identificador → contexto.

## 7. Separación obligatoria

**Preparación textual anti-clonación: DOCUMENTADA.** Tres o más riesgos justificados y separadores de silueta, pose y composición; la prueba visual de silueta, pose y avatar sigue pendiente.

**Contra Teseo.**

| | Odiseo | Teseo |
|---|---|---|
| Cabello | castaño oscuro con canas | castaño oscuro |
| Textura | ondulado marcado | rizado cerrado |
| Piel | canela curtida | oliva media |
| Ojos | gris verdoso | marrón cálido |

Silueta de Teseo, para no repetirla: hilo visible que sale de una mano y dibuja una curva externa + cuerpo ágil de explorador.

Pose de Teseo, para no repetirla: una mano guía el hilo y la otra queda libre; exploración activa, no pose heroica frontal.

Ejes numéricos que ya los separan: angulosidad facial 8 contra 4, dependencia del identificador 3 contra 7, edad visual 7 contra 4, dinamismo de pose 4 contra 6.

**Atención: 9 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** héroes de viaje/exploración con mano activa.
**Filtro numérico:** distancia ponderada 1.408; misma morfología y lectura; riesgo numérico bajo. No sustituye la comparación textual.

- **Separador de silueta:** Odiseo: capa o tela de viaje inclinada + postura levemente adelantada + mano activa señalando o calculando. Cuerpo: adulto maduro; cuerpo fibroso, viajado y menos ceremonial que otros héroes. Frente a Teseo: hilo visible que sale de una mano y dibuja una curva externa + cuerpo ágil de explorador. Cuerpo: adulto joven; atlético medio y ágil. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Odiseo: gesto mental y de cálculo; mano activa antes que arma protagonista. Frente a Teseo: una mano guía el hilo y la otra queda libre; exploración activa, no pose heroica frontal. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Odiseo: reservar aire hacia la dirección donde piensa avanzar; menos armadura y menos frontalidad que los héroes guerreros. Frente a Teseo: laberinto subordinado en fondo; aire en la dirección del hilo para que su curva sea legible. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo odiseo, comparación Teseo; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Edipo.**

| | Odiseo | Edipo |
|---|---|---|
| Cabello | castaño oscuro con canas | negro |
| Textura | ondulado marcado | lacio |
| Piel | canela curtida | oliva media |
| Ojos | gris verdoso | marrón muy oscuro |

Silueta de Edipo, para no repetirla: figura pensante de pie + mano en mentón y Esfinge fuera de eje; bastón sólo si funciona como símbolo general del acertijo humano y no como atributo personal inventado.

Pose de Edipo, para no repetirla: observa y resuelve; postura estática de pregunta, no viaje ni amenaza.

Ejes numéricos que ya los separan: dinamismo de pose 4 contra 1, dependencia del identificador 3 contra 6, contorno superior 4 contra 2, apertura corporal 5 contra 3.

**Atención: 11 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** adultos pensantes de pie; cercanía numérica y gesto de cálculo.
**Filtro numérico:** distancia ponderada 0.933; misma morfología y lectura; riesgo numérico medio. No sustituye la comparación textual.

- **Separador de silueta:** Odiseo: capa o tela de viaje inclinada + postura levemente adelantada + mano activa señalando o calculando. Cuerpo: adulto maduro; cuerpo fibroso, viajado y menos ceremonial que otros héroes. Frente a Edipo: figura pensante de pie + mano en mentón y Esfinge fuera de eje; bastón sólo si funciona como símbolo general del acertijo humano y no como atributo personal inventado. Cuerpo: adulto maduro; contextura media. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Odiseo: gesto mental y de cálculo; mano activa antes que arma protagonista. Frente a Edipo: observa y resuelve; postura estática de pregunta, no viaje ni amenaza. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Odiseo: reservar aire hacia la dirección donde piensa avanzar; menos armadura y menos frontalidad que los héroes guerreros. Frente a Edipo: distancia clara entre Edipo y Esfinge; el vacío entre ambos funciona como espacio del acertijo. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo odiseo, comparación Edipo; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Prometeo.**

| | Odiseo | Prometeo |
|---|---|---|
| Cabello | castaño oscuro con canas | castaño muy oscuro |
| Textura | ondulado marcado | medio |
| Piel | canela curtida | oliva media |
| Ojos | gris verdoso | gris |

Silueta de Prometeo, para no repetirla: llama separada de la mano + cuerpo inclinado protegiéndola del viento + manto corto hacia atrás.

Pose de Prometeo, para no repetirla: brazo extendido ofreciendo el fuego, nunca objeto al pecho.

Ejes numéricos que ya los separan: dependencia del identificador 3 contra 9, apertura corporal 5 contra 8, dinamismo de pose 4 contra 6.

**Atención: 12 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** adultos fibrosos de rostro largo inclinados y con un brazo activo.
**Filtro numérico:** distancia ponderada 1.011; misma morfología y lectura; riesgo numérico medio. No sustituye la comparación textual.

- **Separador de silueta:** Odiseo: capa o tela de viaje inclinada + postura levemente adelantada + mano activa señalando o calculando. Cuerpo: adulto maduro; cuerpo fibroso, viajado y menos ceremonial que otros héroes. Frente a Prometeo: llama separada de la mano + cuerpo inclinado protegiéndola del viento + manto corto hacia atrás. Cuerpo: adulto maduro; alto y fibroso. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Odiseo: gesto mental y de cálculo; mano activa antes que arma protagonista. Frente a Prometeo: brazo extendido ofreciendo el fuego, nunca objeto al pecho. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Odiseo: reservar aire hacia la dirección donde piensa avanzar; menos armadura y menos frontalidad que los héroes guerreros. Frente a Prometeo: aire delante de la llama y del brazo extendido; el fuego pequeño debe leerse sin transformarse en sol monumental. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo odiseo, comparación Prometeo; contrastes derivados del ADN y la matriz, sin nuevo diseño.

Criterio de la ficha: Teseo y Edipo. Separarlo por mayor edad, movimiento de viaje y gesto de estrategia antes que exploración o acertijo estático.

La diferencia no puede depender sólo del color, del fondo, del objeto sostenido, del peinado ni de una prenda. Matriz §4.1: el objeto no salva un clon.

## 8. Encuadre

Vertical 3:4. Figura al 70–80% del alto del cuadro. Zona limpia detrás de la cabeza o del foco principal.

Avatar circular, como restricción invisible: Rostro expresivo + borde de capa + una pista de navegación. No se dibuja ningún círculo, medallón, marco, inset ni retrato secundario.

## 9. Registro

Cálido, despierto, concentrado. No hace falta que sonría. Sin amenaza, sin crueldad, sin solemnidad genérica repetida de otra carta. La emoción sale de la historia del personaje y de lo que está haciendo.

## 10. Contaminación a evitar

**Investigación externa pendiente.** No se relevaron versiones modernas específicas para este personaje. Aplicar los controles disponibles del repo de [Documentacion/controles_contaminacion_pop_lote_2026-09-28.md](../Documentacion/controles_contaminacion_pop_lote_2026-09-28.md), junto con la identidad, acción, inventario y exclusiones de esta orden. Este pendiente no constituye por sí solo un bloqueo material ni certifica ausencia de contaminación. Las representaciones y sus rasgos concretos siguen sin investigar; no reemplazar ese faltante por asociaciones de memoria.

Nada de Marvel, Disney, DC, anime conocido ni videojuegos, sea o no de esta lista.

## 11. Antes de generar

Mostrar cinco líneas y esperar OK: qué se ve, cuál es el detalle reconocible, el inventario con su fuente, contra quién se separa y con qué diferencia concreta, y de dónde sale el escenario.

Después de generar, declarar cuatro cosas: qué objetos quedaron en la imagen que no estaban en el inventario; **qué elementos exigidos de la §5 no aparecieron y por qué, qué condiciones no se cumplieron y qué alternativas se usaron**; qué campos de esta orden no se cumplieron; y los once puntos del gate de `estilo_visual_aprobado.md` §9, que ahora son doce.

El segundo control es tan importante como el primero y es el que faltaba hasta el 2026-09-14: una imagen puede cumplir el inventario cerrado al pie de la letra y seguir siendo una carta fallada por no mostrar nada de lo que hace reconocible al personaje.
