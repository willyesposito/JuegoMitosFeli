# Orden de producción — Poseidón

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
| Edad y contextura | Adulto maduro; cuerpo largo y robusto, menos compacto que Zeus. | ADN |
| Rostro y cabello | Rostro anguloso; cabello más suelto, largo visualmente y barrido que el de Zeus. | ADN |
| Cabello, color | gris acero | decisión de diseño visual, sin atestación localizada; revisable por la investigación |
| Cabello, textura | ondulado largo barrido | decisión de diseño visual, sin atestación localizada; revisable por la investigación |
| Piel | canela | decisión de diseño visual, sin atestación localizada; revisable por la investigación |
| Ojos | verde gris | decisión de diseño visual, sin atestación localizada; revisable por la investigación |

## 2. Detalle reconocible

**Tridente.**

Dones declarados en `personajes.json`: El tridente; Señor del mar; Creador de los caballos.

Ícono de la carta en la colección: `tridente`. Dependencia del identificador en la matriz: 9 de 10.

## 3. Acción y pose

Pies bien apoyados; sostiene o presenta el tridente en eje alto sin atacar.

Dirección corporal: Diagonal baja, con torso girado hacia el tridente.

Es la acción de la ficha y no se cambia. Si la acción no se puede representar sin agregar un objeto que no está en el inventario de la §5, frenar y avisar.

**Y al revés, que es el caso que falló tres veces:** si un objeto exigido de la §5 no entra en la pose tal como está descripta, **el objeto no se descarta**. Se ajusta la pose lo mínimo para que entre, conservando la dirección corporal y la diagonal. Una silueta de carrera con los dos puños cerrados no deja mano para un bastón, y la salida no es correr sin el bastón: es que una mano lo lleve. Declarar el ajuste en el preflight. Una pista condicional sólo se exige si se cumple su condición; las alternativas con «o» se conservan como alternativas, sin exigir todas a la vez.

## 4. Silueta y composición

- **Firma de silueta:** Tridente alto fuera del eje corporal + manto o tela empujada lateralmente como por viento marino.
- **Composición:** Movimiento horizontal de agua en fondo contra la vertical del tridente; aire lateral suficiente para que el arma no se pegue al cuerpo.
- **Densidad visual:** alta (matriz: 8 de 10).

- **Cuerpo, y esto manda sobre cualquier intuición:** entrado en años, corpulento, con masa evidente, hombros anchos, de escala algo mayor que humana.

La contextura sale de acá y no de lo que el personaje representa. Un dios no es corpulento por ser dios, ni un héroe es musculoso por ser héroe: si estos valores piden un cuerpo liviano, va un cuerpo liviano. **Sin abdominales marcados, sin deltoides separados, sin bíceps de gimnasio y sin espalda en V** salvo que la masa y los hombros de arriba lo pidan expresamente.

Los quince ejes completos, como límites de diseño y no como sugerencia (EV edad visual, MC masa corporal, EA escala aparente, AF angulosidad facial, CO contorno superior, AC apertura corporal, DP dinamismo de pose, VD verticalidad, DV densidad visual, OV oscuridad, DI dependencia del identificador, AN anchura de hombros, PF protagonismo de fondo, RM rigidez de materiales, RA rareza anatómica):

| EV | MC | EA | AF | CO | AC | DP | VD | DV | OV | DI | AN | PF | RM | RA |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 7 | 8 | 8 | 8 | 9 | 6 | 7 | 6 | 8 | 5 | 9 | 8 | 8 | 5 | 1 |

Prueba de silueta: reducida a mancha negra, tiene que seguir distinguiéndose de los personajes de la §7.

## 5. Inventario cerrado

Lo único que puede verse:

1. **Tridente** — identificador principal. ADN.
2. **Pistas secundarias autorizadas:** mar agitado y caballo. ADN. Subordinadas al identificador. Respetar las condiciones y alternativas del texto: «si hace falta» y «cuando corresponda» no exigen presencia incondicional; «o» no exige ambas opciones.
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

Protagonismo de fondo asignado: 8 de 10, o sea que el contexto es esencial para leer la carta.

**Sin** pedestal de roca ni acantilado heroico, **sin** templo griego de decoración, **sin** Olimpo, **sin** cielo azul con nubes por defecto, **sin** arquitectura de fantasía, **sin** paisaje panorámico que compita en nitidez. Quince de las treinta y una imágenes anteriores tenían el pedestal y once el templo.

El fondo va con profundidad de campo real: menos nitidez y menos contraste que el personaje. Es el recurso principal para cumplir la jerarquía personaje → identificador → contexto.

## 7. Separación obligatoria

**Par de Espejo: Njörd.** El módulo Espejo de los Mundos los muestra enfrentados en pantalla, así que las dos cartas tienen que separarse solas a simple vista. Es el par donde un parecido cuesta doble.

**Preparación textual anti-clonación: DOCUMENTADA.** Tres o más riesgos justificados y separadores de silueta, pose y composición; la prueba visual de silueta, pose y avatar sigue pendiente.

**Contra Zeus.**

| | Poseidón | Zeus |
|---|---|---|
| Cabello | gris acero | blanco |
| Textura | ondulado largo barrido | ondulado abundante |
| Piel | canela | clara dorada |
| Ojos | verde gris | marrón cálido |

Silueta de Zeus, para no repetirla: hombros amplios + brazo del rayo separado del torso + manto que cae en una sola masa lateral.

Pose de Zeus, para no repetirla: una mano baja estabiliza y la otra presenta el rayo hacia afuera; gesto de mando abierto, no pose estática con objeto al pecho.

Ejes numéricos que ya los separan: contorno superior 9 contra 5, verticalidad 6 contra 10, protagonismo de fondo 8 contra 4, apertura corporal 6 contra 9.

**Atención: 9 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** adultos robustos con atributo alto y gesto de autoridad.
**Filtro numérico:** distancia ponderada 1.385; misma morfología y lectura; riesgo numérico bajo. No sustituye la comparación textual.

- **Separador de silueta:** Poseidón: tridente alto fuera del eje corporal + manto o tela empujada lateralmente como por viento marino. Cuerpo: adulto maduro; cuerpo largo y robusto, menos compacto que Zeus. Frente a Zeus: hombros amplios + brazo del rayo separado del torso + manto que cae en una sola masa lateral. Cuerpo: adulto maduro; torso ancho, compacto y de presencia dominante sin llegar a la masa extrema de Heracles. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Poseidón: pies bien apoyados; sostiene o presenta el tridente en eje alto sin atacar. Frente a Zeus: una mano baja estabiliza y la otra presenta el rayo hacia afuera; gesto de mando abierto, no pose estática con objeto al pecho. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Poseidón: movimiento horizontal de agua en fondo contra la vertical del tridente; aire lateral suficiente para que el arma no se pegue al cuerpo. Frente a Zeus: figura centrada pero asimétrica, con aire claro sobre y alrededor del lado del rayo para que éste tenga lectura propia. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo poseidon, comparación Zeus; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Njörd.**

| | Poseidón | Njörd |
|---|---|---|
| Cabello | gris acero | gris |
| Textura | ondulado largo barrido | barrido por viento |
| Piel | canela | clara curtida |
| Ojos | verde gris | azul gris |

Silueta de Njörd, para no repetirla: capa horizontal empujada por viento + brazos bajos abiertos hacia el mar; ninguna arma.

Pose de Njörd, para no repetirla: brazos bajos abiertos; quietud receptiva, no dominio armado.

Ejes numéricos que ya los separan: dependencia del identificador 9 contra 3, dinamismo de pose 7 contra 2, angulosidad facial 8 contra 4, contorno superior 9 contra 6.

**Por qué se controla este par:** varones maduros asociados al mar y telas al viento; Espejo.
**Filtro numérico:** distancia ponderada 2.268; misma morfología y lectura; riesgo numérico bajo. No sustituye la comparación textual.

- **Separador de silueta:** Poseidón: tridente alto fuera del eje corporal + manto o tela empujada lateralmente como por viento marino. Cuerpo: adulto maduro; cuerpo largo y robusto, menos compacto que Zeus. Frente a Njörd: capa horizontal empujada por viento + brazos bajos abiertos hacia el mar; ninguna arma. Cuerpo: adulto mayor; alto y ancho moderado. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Poseidón: pies bien apoyados; sostiene o presenta el tridente en eje alto sin atacar. Frente a Njörd: brazos bajos abiertos; quietud receptiva, no dominio armado. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Poseidón: movimiento horizontal de agua en fondo contra la vertical del tridente; aire lateral suficiente para que el arma no se pegue al cuerpo. Frente a Njörd: eje horizontal suave con horizonte marino y gran aire alrededor de la capa movida por viento. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo poseidon, comparación Njörd; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Thor.**

| | Poseidón | Thor |
|---|---|---|
| Cabello | gris acero | cobrizo |
| Textura | ondulado largo barrido | ondulado grueso |
| Piel | canela | clara rosada curtida |
| Ojos | verde gris | azul claro |

Silueta de Thor, para no repetirla: Mjölnir separado del cuerpo + capa corta o pieles que ensanchan la parte alta + piernas firmes.

Pose de Thor, para no repetirla: martillo bajo o lateral listo pero sin golpear; cuerpo preparado, no agresivo hacia cámara.

Ejes numéricos que ya los separan: protagonismo de fondo 8 contra 4, rigidez de materiales 5 contra 8, angulosidad facial 8 contra 6, contorno superior 9 contra 7.

**Atención: 11 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** hombros y masa altos, contorno amplio y objeto exterior.
**Filtro numérico:** distancia ponderada 0.922; misma morfología y lectura; riesgo numérico medio. No sustituye la comparación textual.

- **Separador de silueta:** Poseidón: tridente alto fuera del eje corporal + manto o tela empujada lateralmente como por viento marino. Cuerpo: adulto maduro; cuerpo largo y robusto, menos compacto que Zeus. Frente a Thor: Mjölnir separado del cuerpo + capa corta o pieles que ensanchan la parte alta + piernas firmes. Cuerpo: adulto maduro; muy ancho de hombros, masa alta pero menor que Heracles. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Poseidón: pies bien apoyados; sostiene o presenta el tridente en eje alto sin atacar. Frente a Thor: martillo bajo o lateral listo pero sin golpear; cuerpo preparado, no agresivo hacia cámara. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Poseidón: movimiento horizontal de agua en fondo contra la vertical del tridente; aire lateral suficiente para que el arma no se pegue al cuerpo. Frente a Thor: separar la cabeza del martillo de la masa del torso y reservar aire lateral; electricidad ambiental controlada. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo poseidon, comparación Thor; contrastes derivados del ADN y la matriz, sin nuevo diseño.

Criterio de la ficha: Zeus y Njörd. No repetir el encuadre frontal majestuoso de Zeus ni la calma marítima y ausencia de arma de Njörd.

La diferencia no puede depender sólo del color, del fondo, del objeto sostenido, del peinado ni de una prenda. Matriz §4.1: el objeto no salva un clon.

## 8. Encuadre

Vertical 3:4. Figura al 70–80% del alto del cuadro. Zona limpia detrás de la cabeza o del foco principal.

Avatar circular, como restricción invisible: Cabeza + al menos dos puntas visibles del tridente + una franja de espuma. No se dibuja ningún círculo, medallón, marco, inset ni retrato secundario.

## 9. Registro

Cálido, despierto, concentrado. No hace falta que sonría. Sin amenaza, sin crueldad, sin solemnidad genérica repetida de otra carta. La emoción sale de la historia del personaje y de lo que está haciendo.

## 10. Contaminación a evitar

Aquaman (DC) y el Poseidón de *Percy Jackson*. El pelo azul verdoso de su imagen anterior vino de ahí.

Nada de Marvel, Disney, DC, anime conocido ni videojuegos, sea o no de esta lista.

## 11. Antes de generar

Mostrar cinco líneas y esperar OK: qué se ve, cuál es el detalle reconocible, el inventario con su fuente, contra quién se separa y con qué diferencia concreta, y de dónde sale el escenario.

Después de generar, declarar cuatro cosas: qué objetos quedaron en la imagen que no estaban en el inventario; **qué elementos exigidos de la §5 no aparecieron y por qué, qué condiciones no se cumplieron y qué alternativas se usaron**; qué campos de esta orden no se cumplieron; y los once puntos del gate de `estilo_visual_aprobado.md` §9, que ahora son doce.

El segundo control es tan importante como el primero y es el que faltaba hasta el 2026-09-14: una imagen puede cumplir el inventario cerrado al pie de la letra y seguir siendo una carta fallada por no mostrar nada de lo que hace reconocible al personaje.
