# Orden de producción — Frigg

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
| Edad y contextura | Adulta madura; alta y de presencia serena. | ADN |
| Rostro y cabello | Rostro largo sereno; cabello recogido en trenzas simples. | ADN |
| Cabello, color | rubio ceniza con canas | decisión de diseño visual, sin atestación localizada; revisable por la investigación |
| Cabello, textura | trenzas simples | decisión de diseño visual, sin atestación localizada; revisable por la investigación |
| Piel | clara rosada | decisión de diseño visual, sin atestación localizada; revisable por la investigación |
| Ojos | azul gris | decisión de diseño visual, sin atestación localizada; revisable por la investigación |

## 2. Detalle reconocible

**Conocimiento del destino expresado por comportamiento.**

Dones declarados en `personajes.json`: Reina de Asgard; Conoce el destino de todos, aunque nunca lo revela.

Ícono de la carta en la colección: `rueca`. Dependencia del identificador en la matriz: 2 de 10.

> **[REVISAR] Control de reconocimiento pendiente.** La ausencia de objeto profético es deliberada. Manto limpio, manos controladas y mirada lateral definen la puesta; comprobar que el conocimiento silencioso se lea frente a otras figuras de autoridad. No hay un faltante material confirmado ni autorización para agregar objetos de adivinación. La validación visual sigue pendiente.
> Fuente de la revisión: `Documentacion/revision_identificadores_lote_2026-09-28.json`, objetivo `frigg`. Evidencia de acción, silueta, composición, pistas y avatar del ADN.

## 3. Acción y pose

Parece saber algo que no va a decir; manos controladas y ausencia de objeto profético.

Dirección corporal: Frontal tres cuartos con mirada lateral.

Es la acción de la ficha y no se cambia. Si la acción no se puede representar sin agregar un objeto que no está en el inventario de la §5, frenar y avisar.

**Y al revés, que es el caso que falló tres veces:** si un objeto exigido de la §5 no entra en la pose tal como está descripta, **el objeto no se descarta**. Se ajusta la pose lo mínimo para que entre, conservando la dirección corporal y la diagonal. Una silueta de carrera con los dos puños cerrados no deja mano para un bastón, y la salida no es correr sin el bastón: es que una mano lo lleve. Declarar el ajuste en el preflight. Una pista condicional sólo se exige si se cumple su condición; las alternativas con «o» se conservan como alternativas, sin exigir todas a la vez.

## 4. Silueta y composición

- **Firma de silueta:** Figura vertical cerrada + manos juntas o una cubriendo parcialmente la otra + manto largo limpio.
- **Composición:** Fondo muy simple y amplio alrededor del eje vertical.
- **Densidad visual:** baja-media (matriz: 3 de 10).

- **Cuerpo, y esto manda sobre cualquier intuición:** entrado en años, delgado y liviano, sin masa muscular marcada, hombros de ancho medio, de escala algo mayor que humana.

La contextura sale de acá y no de lo que el personaje representa. Un dios no es corpulento por ser dios, ni un héroe es musculoso por ser héroe: si estos valores piden un cuerpo liviano, va un cuerpo liviano. **Sin abdominales marcados, sin deltoides separados, sin bíceps de gimnasio y sin espalda en V** salvo que la masa y los hombros de arriba lo pidan expresamente.

Los quince ejes completos, como límites de diseño y no como sugerencia (EV edad visual, MC masa corporal, EA escala aparente, AF angulosidad facial, CO contorno superior, AC apertura corporal, DP dinamismo de pose, VD verticalidad, DV densidad visual, OV oscuridad, DI dependencia del identificador, AN anchura de hombros, PF protagonismo de fondo, RM rigidez de materiales, RA rareza anatómica):

| EV | MC | EA | AF | CO | AC | DP | VD | DV | OV | DI | AN | PF | RM | RA |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 7 | 4 | 7 | 7 | 1 | 2 | 1 | 9 | 3 | 4 | 2 | 4 | 2 | 5 | 1 |

Prueba de silueta: reducida a mancha negra, tiene que seguir distinguiéndose de los personajes de la §7.

## 5. Inventario cerrado

Lo único que puede verse:

1. **Conocimiento del destino expresado por comportamiento** — identificador principal. ADN.
2. **Pistas secundarias autorizadas:** manto y gesto silencioso; no inventar objetos de adivinación. ADN. Subordinadas al identificador. Respetar las condiciones y alternativas del texto: «si hace falta» y «cuando corresponda» no exigen presencia incondicional; «o» no exige ambas opciones.
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

Protagonismo de fondo asignado: 2 de 10, o sea que el fondo es prescindible: mínimo suficiente y nada más.

**Sin** pedestal de roca ni acantilado heroico, **sin** templo griego de decoración, **sin** Olimpo, **sin** cielo azul con nubes por defecto, **sin** arquitectura de fantasía, **sin** paisaje panorámico que compita en nitidez. Quince de las treinta y una imágenes anteriores tenían el pedestal y once el templo.

El fondo va con profundidad de campo real: menos nitidez y menos contraste que el personaje. Es el recurso principal para cumplir la jerarquía personaje → identificador → contexto.

## 7. Separación obligatoria

**Par de Espejo: Hera.** El módulo Espejo de los Mundos los muestra enfrentados en pantalla, así que las dos cartas tienen que separarse solas a simple vista. Es el par donde un parecido cuesta doble.

**Preparación textual anti-clonación: DOCUMENTADA.** Tres o más riesgos justificados y separadores de silueta, pose y composición; la prueba visual de silueta, pose y avatar sigue pendiente.

**Contra Hera.**

| | Frigg | Hera |
|---|---|---|
| Cabello | rubio ceniza con canas | castaño oscuro |
| Textura | trenzas simples | pesado y estructurado |
| Piel | clara rosada | oliva clara |
| Ojos | azul gris | ámbar |

Silueta de Hera, para no repetirla: tocado o peinado elevado + manto vertical + pavo real rompiendo un lateral del contorno.

Pose de Hera, para no repetirla: una mano relajada y otra sobre el manto; cero gesto de combate.

Ejes numéricos que ya los separan: densidad visual 3 contra 8, dependencia del identificador 2 contra 7, apertura corporal 2 contra 5, protagonismo de fondo 2 contra 5.

**Atención: 10 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** autoridad femenina madura de eje vertical.
**Filtro numérico:** distancia ponderada 1.341; misma morfología y lectura; riesgo numérico bajo. No sustituye la comparación textual.

- **Separador de silueta:** Frigg: figura vertical cerrada + manos juntas o una cubriendo parcialmente la otra + manto largo limpio. Cuerpo: adulta madura; alta y de presencia serena. Frente a Hera: tocado o peinado elevado + manto vertical + pavo real rompiendo un lateral del contorno. Cuerpo: adulta madura; alta y de postura regia. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Frigg: parece saber algo que no va a decir; manos controladas y ausencia de objeto profético. Frente a Hera: una mano relajada y otra sobre el manto; cero gesto de combate. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Frigg: fondo muy simple y amplio alrededor del eje vertical. Frente a Hera: pavo real lateral para quebrar la verticalidad sin competir con el rostro; fondo contenido. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo frigg, comparación Hera; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Casiopea.**

| | Frigg | Casiopea |
|---|---|---|
| Cabello | rubio ceniza con canas | negro |
| Textura | trenzas simples | estructurado alto |
| Piel | clara rosada | castaña media |
| Ojos | azul gris | ámbar |

Silueta de Casiopea, para no repetirla: trono dominando la forma exterior y sugiriendo una W con respaldo/brazos, sin letras visibles.

Pose de Casiopea, para no repetirla: quietud orgullosa sobre el trono.

Ejes numéricos que ya los separan: protagonismo de fondo 2 contra 9, dependencia del identificador 2 contra 7, densidad visual 3 contra 7, verticalidad 9 contra 6.

**Atención: 11 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** mujeres maduras contenidas; cercanía numérica.
**Filtro numérico:** distancia ponderada 1.168; misma morfología y lectura; riesgo numérico bajo. No sustituye la comparación textual.

- **Separador de silueta:** Frigg: figura vertical cerrada + manos juntas o una cubriendo parcialmente la otra + manto largo limpio. Cuerpo: adulta madura; alta y de presencia serena. Frente a Casiopea: trono dominando la forma exterior y sugiriendo una W con respaldo/brazos, sin letras visibles. Cuerpo: adulta madura; alta. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Frigg: parece saber algo que no va a decir; manos controladas y ausencia de objeto profético. Frente a Casiopea: quietud orgullosa sobre el trono. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Frigg: fondo muy simple y amplio alrededor del eje vertical. Frente a Casiopea: estrellas giran alrededor como contexto; el trono crea la geometría principal y debe quedar separado del contorno del cabello. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo frigg, comparación Casiopea; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Hel.**

| | Frigg | Hel |
|---|---|---|
| Cabello | rubio ceniza con canas | negro |
| Textura | trenzas simples | lacio contenido |
| Piel | clara rosada | muy pálida |
| Ojos | azul gris | gris muy claro |

Silueta de Hel, para no repetirla: cuerpo vertical casi inmóvil + manto oscuro cerrado + arquitectura del salón como marco.

Pose de Hel, para no repetirla: manos bajas y ordenadas; sensación administrativa y justa, no siniestra.

Ejes numéricos que ya los separan: oscuridad 4 contra 9, protagonismo de fondo 2 contra 6, masa corporal 4 contra 2, angulosidad facial 7 contra 9.

**Atención: 8 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** mujeres maduras cerradas y verticales; cercanía numérica.
**Filtro numérico:** distancia ponderada 1.279; misma morfología y lectura; riesgo numérico bajo. No sustituye la comparación textual.

- **Separador de silueta:** Frigg: figura vertical cerrada + manos juntas o una cubriendo parcialmente la otra + manto largo limpio. Cuerpo: adulta madura; alta y de presencia serena. Frente a Hel: cuerpo vertical casi inmóvil + manto oscuro cerrado + arquitectura del salón como marco. Cuerpo: adulta madura; alta y muy delgada. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Frigg: parece saber algo que no va a decir; manos controladas y ausencia de objeto profético. Frente a Hel: manos bajas y ordenadas; sensación administrativa y justa, no siniestra. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Frigg: fondo muy simple y amplio alrededor del eje vertical. Frente a Hel: arquitectura del salón estructura sin aprisionar; sombras funcionan como lenguaje gráfico, nunca horror. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo frigg, comparación Hel; contrastes derivados del ADN y la matriz, sin nuevo diseño.

Criterio de la ficha: Hera. Diferenciar por ausencia de animal/regalia, menor densidad y energía silenciosa.

La diferencia no puede depender sólo del color, del fondo, del objeto sostenido, del peinado ni de una prenda. Matriz §4.1: el objeto no salva un clon.

## 8. Encuadre

Vertical 3:4. Figura al 70–80% del alto del cuadro. Zona limpia detrás de la cabeza o del foco principal.

Avatar circular, como restricción invisible: Rostro + mirada lateral claramente legible. No se dibuja ningún círculo, medallón, marco, inset ni retrato secundario.

## 9. Registro

Cálido, despierto, concentrado. No hace falta que sonría. Sin amenaza, sin crueldad, sin solemnidad genérica repetida de otra carta. La emoción sale de la historia del personaje y de lo que está haciendo.

## 10. Contaminación a evitar

**Investigación externa pendiente.** No se relevaron versiones modernas específicas para este personaje. Aplicar los controles disponibles del repo de [Documentacion/controles_contaminacion_pop_lote_2026-09-28.md](../Documentacion/controles_contaminacion_pop_lote_2026-09-28.md), junto con la identidad, acción, inventario y exclusiones de esta orden. Este pendiente no constituye por sí solo un bloqueo material ni certifica ausencia de contaminación. Las representaciones y sus rasgos concretos siguen sin investigar; no reemplazar ese faltante por asociaciones de memoria.

Nada de Marvel, Disney, DC, anime conocido ni videojuegos, sea o no de esta lista.

## 11. Antes de generar

Mostrar cinco líneas y esperar OK: qué se ve, cuál es el detalle reconocible, el inventario con su fuente, contra quién se separa y con qué diferencia concreta, y de dónde sale el escenario.

Después de generar, declarar cuatro cosas: qué objetos quedaron en la imagen que no estaban en el inventario; **qué elementos exigidos de la §5 no aparecieron y por qué, qué condiciones no se cumplieron y qué alternativas se usaron**; qué campos de esta orden no se cumplieron; y los once puntos del gate de `estilo_visual_aprobado.md` §9, que ahora son doce.

El segundo control es tan importante como el primero y es el que faltaba hasta el 2026-09-14: una imagen puede cumplir el inventario cerrado al pie de la letra y seguir siendo una carta fallada por no mostrar nada de lo que hace reconocible al personaje.
