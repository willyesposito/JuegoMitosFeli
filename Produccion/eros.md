# Orden de producción — Eros

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
| Tier | normal | `personajes.json` |
| Familia de encuadre | figura humana | ADN |
| Edad y contextura | Adulto joven de aspecto claramente juvenil pero no infantil; delgado. | ADN |
| Rostro y cabello | Rostro pequeño y cabello corto rizado. | ADN |
| Cabello, color | castaño claro | ya declarado en el ADN, precisado sin contradecirlo |
| Cabello, textura | rizado abierto | ya declarado en el ADN, precisado sin contradecirlo |
| Piel | clara neutra | ya declarado en el ADN, precisado sin contradecirlo |
| Ojos | azul claro | ya declarado en el ADN, precisado sin contradecirlo |

## 2. Detalle reconocible

**Arco y flechas del amor.**

Dones declarados en `personajes.json`: Flechas que despiertan el amor; Hijo de Afrodita.

Ícono de la carta en la colección: `flecha_amor`. Dependencia del identificador en la matriz: 9 de 10.

## 3. Acción y pose

Apunta sin tensión bélica; gesto travieso-amable.

Dirección corporal: Perfil tres cuartos hacia fuera de cuadro.

Es la acción de la ficha y no se cambia. Si la acción no se puede representar sin agregar un objeto que no está en el inventario de la §5, frenar y avisar.

**Y al revés, que es el caso que falló tres veces:** si un objeto exigido de la §5 no entra en la pose tal como está descripta, **el objeto no se descarta**. Se ajusta la pose lo mínimo para que entre, conservando la dirección corporal y la diagonal. Una silueta de carrera con los dos puños cerrados no deja mano para un bastón, y la salida no es correr sin el bastón: es que una mano lo lleve. Declarar el ajuste en el preflight. Una pista condicional sólo se exige si se cumple su condición; las alternativas con «o» se conservan como alternativas, sin exigir todas a la vez.

## 4. Silueta y composición

- **Firma de silueta:** Arco curvo + flecha diagonal + cuerpo ligero; alas sólo si ya están autorizadas por la implementación visual del personaje.
- **Composición:** Dejar aire delante de la flecha; evitar que arco y cuerpo formen una masa cerrada.
- **Densidad visual:** media (matriz: 5 de 10).

- **Cuerpo, y esto manda sobre cualquier intuición:** joven, muy delgado, de contextura frágil, hombros estrechos, de escala humana.

La contextura sale de acá y no de lo que el personaje representa. Un dios no es corpulento por ser dios, ni un héroe es musculoso por ser héroe: si estos valores piden un cuerpo liviano, va un cuerpo liviano. **Sin abdominales marcados, sin deltoides separados, sin bíceps de gimnasio y sin espalda en V** salvo que la masa y los hombros de arriba lo pidan expresamente.

Los quince ejes completos, como límites de diseño y no como sugerencia (EV edad visual, MC masa corporal, EA escala aparente, AF angulosidad facial, CO contorno superior, AC apertura corporal, DP dinamismo de pose, VD verticalidad, DV densidad visual, OV oscuridad, DI dependencia del identificador, AN anchura de hombros, PF protagonismo de fondo, RM rigidez de materiales, RA rareza anatómica):

| EV | MC | EA | AF | CO | AC | DP | VD | DV | OV | DI | AN | PF | RM | RA |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 3 | 2 | 5 | 2 | 4 | 7 | 6 | 6 | 5 | 1 | 9 | 2 | 2 | 3 | 1 |

Prueba de silueta: reducida a mancha negra, tiene que seguir distinguiéndose de los personajes de la §7.

## 5. Inventario cerrado

Lo único que puede verse:

1. **Arco y flechas del amor** — identificador principal. ADN.
2. **Pistas secundarias autorizadas:** alas sólo si ya están autorizadas; vínculo con Psique como contexto cuando corresponda. ADN. Subordinadas al identificador. Respetar las condiciones y alternativas del texto: «si hace falta» y «cuando corresponda» no exigen presencia incondicional; «o» no exige ambas opciones.
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

Protagonismo de fondo asignado: 2 de 10, o sea que el fondo es prescindible: mínimo suficiente y nada más.

**Sin** pedestal de roca ni acantilado heroico, **sin** templo griego de decoración, **sin** Olimpo, **sin** cielo azul con nubes por defecto, **sin** arquitectura de fantasía, **sin** paisaje panorámico que compita en nitidez. Quince de las treinta y una imágenes anteriores tenían el pedestal y once el templo.

El fondo va con profundidad de campo real: menos nitidez y menos contraste que el personaje. Es el recurso principal para cumplir la jerarquía personaje → identificador → contexto.

## 7. Separación obligatoria

**Preparación textual anti-clonación: DOCUMENTADA.** Tres o más riesgos justificados y separadores de silueta, pose y composición; la prueba visual de silueta, pose y avatar sigue pendiente.

**Contra Artemisa.**

| | Eros | Artemisa |
|---|---|---|
| Cabello | castaño claro | castaño muy oscuro |
| Textura | rizado abierto | lacio recogido alto |
| Piel | clara neutra | canela |
| Ojos | azul claro | ámbar |

Silueta de Artemisa, para no repetirla: arco largo rompiendo un lateral + cuerpo de cazadora en eje diagonal + capa corta o faldón práctico.

Pose de Artemisa, para no repetirla: arco en reposo hacia abajo; calma vigilante, no disparo ni combate.

Ejes numéricos que ya los separan: protagonismo de fondo 2 contra 6, angulosidad facial 2 contra 5, apertura corporal 7 contra 4, dinamismo de pose 6 contra 3.

**Por qué se controla este par:** arco en figura humana ligera.
**Filtro numérico:** distancia ponderada 1.821; morfología o lectura distinta: control semántico/compositivo, no colisión anatómica. No sustituye la comparación textual.

- **Separador de silueta:** Eros: arco curvo + flecha diagonal + cuerpo ligero; alas sólo si ya están autorizadas por la implementación visual del personaje. Cuerpo: adulto joven de aspecto claramente juvenil pero no infantil; delgado. Frente a Artemisa: arco largo rompiendo un lateral + cuerpo de cazadora en eje diagonal + capa corta o faldón práctico. Cuerpo: adulta joven; atlética ligera. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Eros: apunta sin tensión bélica; gesto travieso-amable. Frente a Artemisa: arco en reposo hacia abajo; calma vigilante, no disparo ni combate. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Eros: dejar aire delante de la flecha; evitar que arco y cuerpo formen una masa cerrada. Frente a Artemisa: espacio negativo claro delante de la mirada; el arco debe romper el contorno sin encerrarla. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo eros, comparación Artemisa; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Psique.**

| | Eros | Psique |
|---|---|---|
| Cabello | castaño claro | castaño oscuro |
| Textura | rizado abierto | ondulado marcado |
| Piel | clara neutra | oliva clara |
| Ojos | azul claro | marrón cálido |

Silueta de Psique, para no repetirla: mariposa o motivo de mariposa cerca del hombro + postura de avance cauteloso.

Pose de Psique, para no repetirla: avanza entre pruebas con cautela y perseverancia.

Ejes numéricos que ya los separan: protagonismo de fondo 2 contra 7, contorno superior 4 contra 6, apertura corporal 7 contra 5, dinamismo de pose 6 contra 4.

**Atención: 11 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** juventud ligera y vínculo narrativo; Espejo.
**Filtro numérico:** distancia ponderada 1.050; morfología o lectura distinta: control semántico/compositivo, no colisión anatómica. No sustituye la comparación textual.

- **Separador de silueta:** Eros: arco curvo + flecha diagonal + cuerpo ligero; alas sólo si ya están autorizadas por la implementación visual del personaje. Cuerpo: adulto joven de aspecto claramente juvenil pero no infantil; delgado. Frente a Psique: mariposa o motivo de mariposa cerca del hombro + postura de avance cauteloso. Cuerpo: adulta joven; delgada. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Eros: apunta sin tensión bélica; gesto travieso-amable. Frente a Psique: avanza entre pruebas con cautela y perseverancia. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Eros: dejar aire delante de la flecha; evitar que arco y cuerpo formen una masa cerrada. Frente a Psique: dejar aire en la dirección de avance; pruebas se sugieren de forma abstracta y no saturan el fondo. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo eros, comparación Psique; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Hermes.**

| | Eros | Hermes |
|---|---|---|
| Cabello | castaño claro | cobrizo |
| Textura | rizado abierto ⚠ igual | rizado abierto |
| Piel | clara neutra | clara dorada con pecas |
| Ojos | azul claro | verde oliva |

Silueta de Hermes, para no repetirla: sandalias aladas abajo + paso largo + caduceo en alto en la mano adelantada mientras el otro brazo va en carrera, con diagonal corporal limpia. **Corrección del 2026-09-14:** decía "brazos opuestos en carrera", o sea los dos puños cerrados, y eso dejaba a Hermes sin mano para el caduceo. Tres imágenes seguidas salieron sin él resolviendo el choque a favor de la silueta, que es lo que la orden manda. El brazo que lleva el caduceo conserva el contrabalanceo de la carrera; no es una pose de presentación.

Pose de Hermes, para no repetirla: carrera terrestre, no vuelo frontal.

Ejes numéricos que ya los separan: dinamismo de pose 6 contra 10.

**Atención: 14 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** varones juveniles ligeros de acción dinámica.
**Filtro numérico:** distancia ponderada 0.933; misma morfología y lectura; riesgo numérico medio. No sustituye la comparación textual.

- **Separador de silueta:** Eros: arco curvo + flecha diagonal + cuerpo ligero; alas sólo si ya están autorizadas por la implementación visual del personaje. Cuerpo: adulto joven de aspecto claramente juvenil pero no infantil; delgado. Frente a Hermes: sandalias aladas abajo + paso largo + caduceo en alto en la mano adelantada mientras el otro brazo va en carrera, con diagonal corporal limpia. Cuerpo: adulto joven; delgado y elástico. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Eros: apunta sin tensión bélica; gesto travieso-amable. Frente a Hermes: carrera terrestre, no vuelo frontal. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Eros: dejar aire delante de la flecha; evitar que arco y cuerpo formen una masa cerrada. Frente a Hermes: fondo barrido y simple; aire por delante de la carrera y suficiente margen abajo para que las sandalias entren completas. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo eros, comparación Hermes; contrastes derivados del ADN y la matriz, sin nuevo diseño.

Criterio de la ficha: Artemisa y Psique. Diferenciar de Artemisa por escala corporal y energía juguetona; de Psique por arco protagonista.

La diferencia no puede depender sólo del color, del fondo, del objeto sostenido, del peinado ni de una prenda. Matriz §4.1: el objeto no salva un clon.

## 8. Encuadre

Vertical 3:4. Figura al 70–80% del alto del cuadro. Zona limpia detrás de la cabeza o del foco principal.

Avatar circular, como restricción invisible: Rostro + arco/flecha inequívoca. No se dibuja ningún círculo, medallón, marco, inset ni retrato secundario.

## 9. Registro

Cálido, despierto, concentrado. No hace falta que sonría. Sin amenaza, sin crueldad, sin solemnidad genérica repetida de otra carta. La emoción sale de la historia del personaje y de lo que está haciendo.

## 10. Contaminación a evitar

El Cupido de tarjeta de San Valentín: bebé alado con arco.

Nada de Marvel, Disney, DC, anime conocido ni videojuegos, sea o no de esta lista.

## 11. Antes de generar

Mostrar cinco líneas y esperar OK: qué se ve, cuál es el detalle reconocible, el inventario con su fuente, contra quién se separa y con qué diferencia concreta, y de dónde sale el escenario.

Después de generar, declarar cuatro cosas: qué objetos quedaron en la imagen que no estaban en el inventario; **qué elementos exigidos de la §5 no aparecieron y por qué, qué condiciones no se cumplieron y qué alternativas se usaron**; qué campos de esta orden no se cumplieron; y los once puntos del gate de `estilo_visual_aprobado.md` §9, que ahora son doce.

El segundo control es tan importante como el primero y es el que faltaba hasta el 2026-09-14: una imagen puede cumplir el inventario cerrado al pie de la letra y seguir siendo una carta fallada por no mostrar nada de lo que hace reconocible al personaje.
