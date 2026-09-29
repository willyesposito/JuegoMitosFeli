# Orden de producción — Njörd

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
| Edad y contextura | Adulto mayor; alto y ancho moderado. | ADN |
| Rostro y cabello | Rostro abierto, barba corta gris y cabello barrido por viento. | ADN |
| Cabello, color | gris | ya declarado en el ADN, precisado sin contradecirlo |
| Cabello, textura | barrido por viento | ya declarado en el ADN, precisado sin contradecirlo |
| Piel | clara curtida | ya declarado en el ADN, precisado sin contradecirlo |
| Ojos | azul gris | ya declarado en el ADN, precisado sin contradecirlo |

## 2. Detalle reconocible

**Mar calmo y vientos favorables.**

Dones declarados en `personajes.json`: Dios del mar calmo y los vientos favorables; Protector de navegantes.

Ícono de la carta en la colección: `ola`. Dependencia del identificador en la matriz: 3 de 10.

## 3. Acción y pose

Brazos bajos abiertos; quietud receptiva, no dominio armado.

Dirección corporal: Perfil tres cuartos hacia un mar calmo.

Es la acción de la ficha y no se cambia. Si la acción no se puede representar sin agregar un objeto que no está en el inventario de la §5, frenar y avisar.

**Y al revés, que es el caso que falló tres veces:** si un objeto exigido de la §5 no entra en la pose tal como está descripta, **el objeto no se descarta**. Se ajusta la pose lo mínimo para que entre, conservando la dirección corporal y la diagonal. Una silueta de carrera con los dos puños cerrados no deja mano para un bastón, y la salida no es correr sin el bastón: es que una mano lo lleve. Declarar el ajuste en el preflight. Una pista condicional sólo se exige si se cumple su condición; las alternativas con «o» se conservan como alternativas, sin exigir todas a la vez.

## 4. Silueta y composición

- **Firma de silueta:** Capa horizontal empujada por viento + brazos bajos abiertos hacia el mar; ninguna arma.
- **Composición:** Eje horizontal suave con horizonte marino y gran aire alrededor de la capa movida por viento.
- **Densidad visual:** media (matriz: 5 de 10).

- **Cuerpo, y esto manda sobre cualquier intuición:** entrado en años, de contextura media, atlética sin volumen, hombros de ancho medio, de escala algo mayor que humana.

La contextura sale de acá y no de lo que el personaje representa. Un dios no es corpulento por ser dios, ni un héroe es musculoso por ser héroe: si estos valores piden un cuerpo liviano, va un cuerpo liviano. **Sin abdominales marcados, sin deltoides separados, sin bíceps de gimnasio y sin espalda en V** salvo que la masa y los hombros de arriba lo pidan expresamente.

Los quince ejes completos, como límites de diseño y no como sugerencia (EV edad visual, MC masa corporal, EA escala aparente, AF angulosidad facial, CO contorno superior, AC apertura corporal, DP dinamismo de pose, VD verticalidad, DV densidad visual, OV oscuridad, DI dependencia del identificador, AN anchura de hombros, PF protagonismo de fondo, RM rigidez de materiales, RA rareza anatómica):

| EV | MC | EA | AF | CO | AC | DP | VD | DV | OV | DI | AN | PF | RM | RA |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 8 | 6 | 7 | 4 | 6 | 8 | 2 | 5 | 5 | 2 | 3 | 6 | 8 | 4 | 1 |

Prueba de silueta: reducida a mancha negra, tiene que seguir distinguiéndose de los personajes de la §7.

## 5. Inventario cerrado

Lo único que puede verse:

1. **Mar calmo y vientos favorables** — identificador principal. ADN.
2. **Pistas secundarias autorizadas:** horizonte marino y movimiento de capa. ADN. Subordinadas al identificador. Respetar las condiciones y alternativas del texto: «si hace falta» y «cuando corresponda» no exigen presencia incondicional; «o» no exige ambas opciones.
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

Protagonismo de fondo asignado: 8 de 10, o sea que el contexto es esencial para leer la carta.

**Sin** pedestal de roca ni acantilado heroico, **sin** templo griego de decoración, **sin** Olimpo, **sin** cielo azul con nubes por defecto, **sin** arquitectura de fantasía, **sin** paisaje panorámico que compita en nitidez. Quince de las treinta y una imágenes anteriores tenían el pedestal y once el templo.

El fondo va con profundidad de campo real: menos nitidez y menos contraste que el personaje. Es el recurso principal para cumplir la jerarquía personaje → identificador → contexto.

## 7. Separación obligatoria

**Par de Espejo: Poseidón.** El módulo Espejo de los Mundos los muestra enfrentados en pantalla, así que las dos cartas tienen que separarse solas a simple vista. Es el par donde un parecido cuesta doble.

**Preparación textual anti-clonación: DOCUMENTADA.** Tres o más riesgos justificados y separadores de silueta, pose y composición; la prueba visual de silueta, pose y avatar sigue pendiente.

**Contra Poseidón.**

| | Njörd | Poseidón |
|---|---|---|
| Cabello | gris | gris acero |
| Textura | barrido por viento | ondulado largo barrido |
| Piel | clara curtida | canela |
| Ojos | azul gris | verde gris |

Silueta de Poseidón, para no repetirla: tridente alto fuera del eje corporal + manto o tela empujada lateralmente como por viento marino.

Pose de Poseidón, para no repetirla: pies bien apoyados; sostiene o presenta el tridente en eje alto sin atacar.

Ejes numéricos que ya los separan: dependencia del identificador 3 contra 9, dinamismo de pose 2 contra 7, angulosidad facial 4 contra 8, contorno superior 6 contra 9.

**Por qué se controla este par:** varones maduros marinos; Espejo.
**Filtro numérico:** distancia ponderada 2.268; misma morfología y lectura; riesgo numérico bajo. No sustituye la comparación textual.

- **Separador de silueta:** Njörd: capa horizontal empujada por viento + brazos bajos abiertos hacia el mar; ninguna arma. Cuerpo: adulto mayor; alto y ancho moderado. Frente a Poseidón: tridente alto fuera del eje corporal + manto o tela empujada lateralmente como por viento marino. Cuerpo: adulto maduro; cuerpo largo y robusto, menos compacto que Zeus. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Njörd: brazos bajos abiertos; quietud receptiva, no dominio armado. Frente a Poseidón: pies bien apoyados; sostiene o presenta el tridente en eje alto sin atacar. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Njörd: eje horizontal suave con horizonte marino y gran aire alrededor de la capa movida por viento. Frente a Poseidón: movimiento horizontal de agua en fondo contra la vertical del tridente; aire lateral suficiente para que el arma no se pegue al cuerpo. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo njord, comparación Poseidón; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Jasón.**

| | Njörd | Jasón |
|---|---|---|
| Cabello | gris | castaño claro |
| Textura | barrido por viento | ondulado marcado |
| Piel | clara curtida | dorada media |
| Ojos | azul gris | avellana |

Silueta de Jasón, para no repetirla: Vellocino de Oro como gran masa irregular sobre un brazo/hombro + dirección de capitán hacia un lateral.

Pose de Jasón, para no repetirla: mano libre indicando rumbo; liderazgo colaborativo, no regia estática.

Ejes numéricos que ya los separan: dependencia del identificador 3 contra 9, edad visual 8 contra 5, dinamismo de pose 2 contra 5, verticalidad 5 contra 7.

**Atención: 9 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** varones de contexto de navegación y apertura alta; cercanía numérica.
**Filtro numérico:** distancia ponderada 1.246; misma morfología y lectura; riesgo numérico bajo. No sustituye la comparación textual.

- **Separador de silueta:** Njörd: capa horizontal empujada por viento + brazos bajos abiertos hacia el mar; ninguna arma. Cuerpo: adulto mayor; alto y ancho moderado. Frente a Jasón: Vellocino de Oro como gran masa irregular sobre un brazo/hombro + dirección de capitán hacia un lateral. Cuerpo: adulto joven-maduro; cuerpo atlético medio. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Njörd: brazos bajos abiertos; quietud receptiva, no dominio armado. Frente a Jasón: mano libre indicando rumbo; liderazgo colaborativo, no regia estática. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Njörd: eje horizontal suave con horizonte marino y gran aire alrededor de la capa movida por viento. Frente a Jasón: el Vellocino ocupa una masa clara sin tapar rostro; el Argo queda pequeño en contexto y el aire acompaña la dirección señalada. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo njord, comparación Jasón; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Odín.**

| | Njörd | Odín |
|---|---|---|
| Cabello | gris | blanco |
| Textura | barrido por viento | lacio largo |
| Piel | clara curtida ⚠ igual | clara curtida |
| Ojos | azul gris ⚠ igual | azul gris |

Silueta de Odín, para no repetirla: dos cuervos en alturas distintas + cuerpo vertical fino + capa larga.

Pose de Odín, para no repetirla: una mano cerca del rostro y otra baja; observa más de lo que manda.

Ejes numéricos que ya los separan: angulosidad facial 4 contra 9, apertura corporal 8 contra 3, oscuridad 2 contra 7, verticalidad 5 contra 9.

**Por qué se controla este par:** varones mayores nórdicos con capa y poca acción.
**Filtro numérico:** distancia ponderada 2.279; misma morfología y lectura; riesgo numérico bajo. No sustituye la comparación textual.

- **Separador de silueta:** Njörd: capa horizontal empujada por viento + brazos bajos abiertos hacia el mar; ninguna arma. Cuerpo: adulto mayor; alto y ancho moderado. Frente a Odín: dos cuervos en alturas distintas + cuerpo vertical fino + capa larga. Cuerpo: adulto mayor vigoroso; alto y estrecho. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Njörd: brazos bajos abiertos; quietud receptiva, no dominio armado. Frente a Odín: una mano cerca del rostro y otra baja; observa más de lo que manda. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Njörd: eje horizontal suave con horizonte marino y gran aire alrededor de la capa movida por viento. Frente a Odín: mantener a los cuervos separados entre sí y del rostro; verticalidad fina y aire alrededor de la capa para evitar el triángulo hombros-barba de Zeus. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo njord, comparación Odín; contrastes derivados del ADN y la matriz, sin nuevo diseño.

Criterio de la ficha: Poseidón. Diferenciar por calma, ausencia de tridente y mayor edad aparente.

La diferencia no puede depender sólo del color, del fondo, del objeto sostenido, del peinado ni de una prenda. Matriz §4.1: el objeto no salva un clon.

## 8. Encuadre

Vertical 3:4. Figura al 70–80% del alto del cuadro. Zona limpia detrás de la cabeza o del foco principal.

Avatar circular, como restricción invisible: Rostro + borde de capa al viento + horizonte marino. No se dibuja ningún círculo, medallón, marco, inset ni retrato secundario.

## 9. Registro

Cálido, despierto, concentrado. No hace falta que sonría. Sin amenaza, sin crueldad, sin solemnidad genérica repetida de otra carta. La emoción sale de la historia del personaje y de lo que está haciendo.

## 10. Contaminación a evitar

**Investigación externa pendiente.** No se relevaron versiones modernas específicas para este personaje. Aplicar los controles disponibles del repo de [Documentacion/controles_contaminacion_pop_lote_2026-09-28.md](../Documentacion/controles_contaminacion_pop_lote_2026-09-28.md), junto con la identidad, acción, inventario y exclusiones de esta orden. Este pendiente no constituye por sí solo un bloqueo material ni certifica ausencia de contaminación. Las representaciones y sus rasgos concretos siguen sin investigar; no reemplazar ese faltante por asociaciones de memoria.

Nada de Marvel, Disney, DC, anime conocido ni videojuegos, sea o no de esta lista.

## 11. Antes de generar

Mostrar cinco líneas y esperar OK: qué se ve, cuál es el detalle reconocible, el inventario con su fuente, contra quién se separa y con qué diferencia concreta, y de dónde sale el escenario.

Después de generar, declarar cuatro cosas: qué objetos quedaron en la imagen que no estaban en el inventario; **qué elementos exigidos de la §5 no aparecieron y por qué, qué condiciones no se cumplieron y qué alternativas se usaron**; qué campos de esta orden no se cumplieron; y los once puntos del gate de `estilo_visual_aprobado.md` §9, que ahora son doce.

El segundo control es tan importante como el primero y es el que faltaba hasta el 2026-09-14: una imagen puede cumplir el inventario cerrado al pie de la letra y seguir siendo una carta fallada por no mostrar nada de lo que hace reconocible al personaje.
