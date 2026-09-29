# Orden de producción — Cronos

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
| Familia de encuadre | escala grande / figura humana | ADN |
| Edad y contextura | Titán adulto mayor; muy alto y pesado. | ADN |
| Rostro y cabello | Rostro largo severo y cabello gris oscuro amplio. | ADN |
| Cabello, color | gris oscuro | ya declarado en el ADN, precisado sin contradecirlo |
| Cabello, textura | amplio | ya declarado en el ADN, precisado sin contradecirlo |
| Piel | oliva clara | ya declarado en el ADN, precisado sin contradecirlo |
| Ojos | negro | ya declarado en el ADN, precisado sin contradecirlo |

## 2. Detalle reconocible

**Titán del conflicto generacional, identificado por escala monumental y hoz de mango corto en reposo.**

Dones declarados en `personajes.json`: Titán del tiempo; Gobernó el mundo antes que los dioses del Olimpo.

Ícono de la carta en la colección: `reloj_arena`. Dependencia del identificador en la matriz: 3 de 10.

> **Reconocimiento textual: DOCUMENTADO.** La hoz del conflicto generacional está respaldada por Teogonía 154-182 y autorizada por la decisión delegada. Mango corto y posición baja en reposo son decisiones de adaptación visual; no se usa iconografía del tiempo. Reconocimiento en imagen pendiente. La validación visual sigue pendiente.
> Fuente de la revisión: `Documentacion/revision_identificadores_lote_2026-09-28.json`, objetivo `cronos`. Evidencia de acción, silueta, composición, pistas y avatar del ADN.

## 3. Acción y pose

Cuerpo quieto, autoridad cerrada; una mano baja sostiene la hoz en reposo, con filo apartado del cuerpo y de cualquier otra figura; sin ataque ni escena violenta.

Dirección corporal: Frontal desplazado con eje vertical pesado.

Es la acción de la ficha y no se cambia. Si la acción no se puede representar sin agregar un objeto que no está en el inventario de la §5, frenar y avisar.

**Y al revés, que es el caso que falló tres veces:** si un objeto exigido de la §5 no entra en la pose tal como está descripta, **el objeto no se descarta**. Se ajusta la pose lo mínimo para que entre, conservando la dirección corporal y la diagonal. Una silueta de carrera con los dos puños cerrados no deja mano para un bastón, y la salida no es correr sin el bastón: es que una mano lo lleve. Declarar el ajuste en el preflight. Una pista condicional sólo se exige si se cumple su condición; las alternativas con «o» se conservan como alternativas, sin exigir todas a la vez.

## 4. Silueta y composición

- **Firma de silueta:** Gran masa de hombros + manto antiguo cayendo en bloque + cabeza relativamente pequeña para enfatizar escala + hoz de mango corto separada del manto en un lateral bajo.
- **Composición:** Manto monumental domina abajo y laterales; evitar relojes, arena o símbolos de tiempo.
- **Densidad visual:** alta (matriz: 8 de 10).

- **Cuerpo, y esto manda sobre cualquier intuición:** anciano, de masa enorme, muy por encima de lo humano, hombros muy anchos, que dominan la silueta, de escala claramente sobrehumana.

La contextura sale de acá y no de lo que el personaje representa. Un dios no es corpulento por ser dios, ni un héroe es musculoso por ser héroe: si estos valores piden un cuerpo liviano, va un cuerpo liviano. **Sin abdominales marcados, sin deltoides separados, sin bíceps de gimnasio y sin espalda en V** salvo que la masa y los hombros de arriba lo pidan expresamente.

Los quince ejes completos, como límites de diseño y no como sugerencia (EV edad visual, MC masa corporal, EA escala aparente, AF angulosidad facial, CO contorno superior, AC apertura corporal, DP dinamismo de pose, VD verticalidad, DV densidad visual, OV oscuridad, DI dependencia del identificador, AN anchura de hombros, PF protagonismo de fondo, RM rigidez de materiales, RA rareza anatómica):

| EV | MC | EA | AF | CO | AC | DP | VD | DV | OV | DI | AN | PF | RM | RA |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 9 | 9 | 10 | 9 | 7 | 2 | 1 | 9 | 8 | 8 | 3 | 9 | 5 | 7 | 2 |

Prueba de silueta: reducida a mancha negra, tiene que seguir distinguiéndose de los personajes de la §7.

## 5. Inventario cerrado

Lo único que puede verse:

1. **Titán del conflicto generacional, identificado por escala monumental y hoz de mango corto en reposo** — identificador principal. ADN.
2. **Pistas secundarias autorizadas:** hoz de mango corto y hoja curva gris con dientes simplificados, vinculada al derrocamiento de Urano; sin guadaña de mango largo, relojes, arena ni símbolos de tiempo. ADN. Subordinadas al identificador. Respetar las condiciones y alternativas del texto: «si hace falta» y «cuando corresponda» no exigen presencia incondicional; «o» no exige ambas opciones.
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

Protagonismo de fondo asignado: 5 de 10, o sea que el contexto acompaña sin llevar peso.

**Sin** pedestal de roca ni acantilado heroico, **sin** templo griego de decoración, **sin** Olimpo, **sin** cielo azul con nubes por defecto, **sin** arquitectura de fantasía, **sin** paisaje panorámico que compita en nitidez. Quince de las treinta y una imágenes anteriores tenían el pedestal y once el templo.

El fondo va con profundidad de campo real: menos nitidez y menos contraste que el personaje. Es el recurso principal para cumplir la jerarquía personaje → identificador → contexto.

## 7. Separación obligatoria

**Preparación textual anti-clonación: DOCUMENTADA.** Tres o más riesgos justificados y separadores de silueta, pose y composición; la prueba visual de silueta, pose y avatar sigue pendiente.

**Contra Atlas.**

| | Cronos | Atlas |
|---|---|---|
| Cabello | gris oscuro | castaño grisáceo |
| Textura | amplio | subordinado a la escala |
| Piel | oliva clara | canela |
| Ojos | negro | ámbar |

Silueta de Atlas, para no repetirla: arco de la bóveda celeste sobre hombros/brazos, una forma única que domina el contorno.

Pose de Atlas, para no repetirla: piernas muy separadas y brazos sosteniendo físicamente la bóveda.

Ejes numéricos que ya los separan: dependencia del identificador 3 contra 10, dinamismo de pose 1 contra 5, contorno superior 7 contra 4, protagonismo de fondo 5 contra 8.

**Atención: 9 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** figuras monumentales pesadas.
**Filtro numérico:** distancia ponderada 1.765; misma morfología y lectura; riesgo numérico bajo. No sustituye la comparación textual.

- **Separador de silueta:** Cronos: gran masa de hombros + manto antiguo cayendo en bloque + cabeza relativamente pequeña para enfatizar escala + hoz de mango corto separada del manto en un lateral bajo. Cuerpo: titán adulto mayor; muy alto y pesado. Frente a Atlas: arco de la bóveda celeste sobre hombros/brazos, una forma única que domina el contorno. Cuerpo: titán enorme; torso y brazos masivos, cabeza relativamente pequeña. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Cronos: cuerpo quieto, autoridad cerrada; una mano baja sostiene la hoz en reposo, con filo apartado del cuerpo y de cualquier otra figura; sin ataque ni escena violenta. Frente a Atlas: piernas muy separadas y brazos sosteniendo físicamente la bóveda. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Cronos: manto monumental domina abajo y laterales; evitar relojes, arena o símbolos de tiempo. Frente a Atlas: paisaje pequeño refuerza escala; la curva celeste debe quedar separada del cráneo para conservar la firma en negro puro. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo cronos, comparación Atlas; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Odín.**

| | Cronos | Odín |
|---|---|---|
| Cabello | gris oscuro | blanco |
| Textura | amplio | lacio largo |
| Piel | oliva clara | clara curtida |
| Ojos | negro | azul gris |

Silueta de Odín, para no repetirla: dos cuervos en alturas distintas + cuerpo vertical fino + capa larga.

Pose de Odín, para no repetirla: una mano cerca del rostro y otra baja; observa más de lo que manda.

Ejes numéricos que ya los separan: masa corporal 9 contra 5, dependencia del identificador 3 contra 7, anchura de hombros 9 contra 5, escala aparente 10 contra 8.

**Atención: 11 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** varones ancianos verticales de baja acción.
**Filtro numérico:** distancia ponderada 1.436; misma morfología y lectura; riesgo numérico bajo. No sustituye la comparación textual.

- **Separador de silueta:** Cronos: gran masa de hombros + manto antiguo cayendo en bloque + cabeza relativamente pequeña para enfatizar escala + hoz de mango corto separada del manto en un lateral bajo. Cuerpo: titán adulto mayor; muy alto y pesado. Frente a Odín: dos cuervos en alturas distintas + cuerpo vertical fino + capa larga. Cuerpo: adulto mayor vigoroso; alto y estrecho. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Cronos: cuerpo quieto, autoridad cerrada; una mano baja sostiene la hoz en reposo, con filo apartado del cuerpo y de cualquier otra figura; sin ataque ni escena violenta. Frente a Odín: una mano cerca del rostro y otra baja; observa más de lo que manda. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Cronos: manto monumental domina abajo y laterales; evitar relojes, arena o símbolos de tiempo. Frente a Odín: mantener a los cuervos separados entre sí y del rostro; verticalidad fina y aire alrededor de la capa para evitar el triángulo hombros-barba de Zeus. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo cronos, comparación Odín; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Hades.**

| | Cronos | Hades |
|---|---|---|
| Cabello | gris oscuro | negro |
| Textura | amplio | lacio ordenado |
| Piel | oliva clara | clara neutra |
| Ojos | negro | gris |

Silueta de Hades, para no repetirla: cuerpo casi columnar + manto pesado cerrado + casco de invisibilidad sostenido a un costado cuando llevarlo puesto perjudique el rostro.

Pose de Hades, para no repetirla: manos controladas y cuerpo quieto; autoridad cerrada sin gesto expansivo.

Ejes numéricos que ya los separan: contorno superior 7 contra 3, densidad visual 8 contra 4, masa corporal 9 contra 6, dependencia del identificador 3 contra 6.

**Atención: 8 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** autoridad masculina cerrada, vertical y severa.
**Filtro numérico:** distancia ponderada 1.665; misma morfología y lectura; riesgo numérico bajo. No sustituye la comparación textual.

- **Separador de silueta:** Cronos: gran masa de hombros + manto antiguo cayendo en bloque + cabeza relativamente pequeña para enfatizar escala + hoz de mango corto separada del manto en un lateral bajo. Cuerpo: titán adulto mayor; muy alto y pesado. Frente a Hades: cuerpo casi columnar + manto pesado cerrado + casco de invisibilidad sostenido a un costado cuando llevarlo puesto perjudique el rostro. Cuerpo: adulto maduro; alto pero menos ancho que Zeus y Poseidón. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Cronos: cuerpo quieto, autoridad cerrada; una mano baja sostiene la hoz en reposo, con filo apartado del cuerpo y de cualquier otra figura; sin ataque ni escena violenta. Frente a Hades: manos controladas y cuerpo quieto; autoridad cerrada sin gesto expansivo. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Cronos: manto monumental domina abajo y laterales; evitar relojes, arena o símbolos de tiempo. Frente a Hades: fondo subterráneo simple, luminosidad mineral baja y espacio limpio alrededor de la figura; nada terrorífico. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo cronos, comparación Hades; contrastes derivados del ADN y la matriz, sin nuevo diseño.

Criterio de la ficha: Atlas. Diferenciar por no cargar el cielo, postura cerrada de autoridad y silueta más bloque que arco de esfuerzo.

La diferencia no puede depender sólo del color, del fondo, del objeto sostenido, del peinado ni de una prenda. Matriz §4.1: el objeto no salva un clon.

## 8. Encuadre

Vertical 3:4. Figura al 70–80% del alto del cuadro. Zona limpia detrás de la cabeza o del foco principal.

Avatar circular, como restricción invisible: Rostro severo + borde monumental del manto + pequeño arco legible de la hoja de la hoz en el borde lateral, sin tapar la cara. No se dibuja ningún círculo, medallón, marco, inset ni retrato secundario.

## 9. Registro

Cálido, despierto, concentrado. No hace falta que sonría. Sin amenaza, sin crueldad, sin solemnidad genérica repetida de otra carta. La emoción sale de la historia del personaje y de lo que está haciendo.

## 10. Contaminación a evitar

**Investigación externa pendiente.** No se relevaron versiones modernas específicas para este personaje. Aplicar los controles disponibles del repo de [Documentacion/controles_contaminacion_pop_lote_2026-09-28.md](../Documentacion/controles_contaminacion_pop_lote_2026-09-28.md), junto con la identidad, acción, inventario y exclusiones de esta orden. Este pendiente no constituye por sí solo un bloqueo material ni certifica ausencia de contaminación. Las representaciones y sus rasgos concretos siguen sin investigar; no reemplazar ese faltante por asociaciones de memoria.

Nada de Marvel, Disney, DC, anime conocido ni videojuegos, sea o no de esta lista.

## 11. Antes de generar

Mostrar cinco líneas y esperar OK: qué se ve, cuál es el detalle reconocible, el inventario con su fuente, contra quién se separa y con qué diferencia concreta, y de dónde sale el escenario.

Después de generar, declarar cuatro cosas: qué objetos quedaron en la imagen que no estaban en el inventario; **qué elementos exigidos de la §5 no aparecieron y por qué, qué condiciones no se cumplieron y qué alternativas se usaron**; qué campos de esta orden no se cumplieron; y los once puntos del gate de `estilo_visual_aprobado.md` §9, que ahora son doce.

El segundo control es tan importante como el primero y es el que faltaba hasta el 2026-09-14: una imagen puede cumplir el inventario cerrado al pie de la letra y seguir siendo una carta fallada por no mostrar nada de lo que hace reconocible al personaje.
