# Orden de producción — Dido

**Completitud mecánica: COMPLETA.** Campos obligatorios y referencias comprobados; vestimenta opcional con alternativa general cuando falta.
**Validación visual: PENDIENTE.** Compilar no acredita silueta, pose, composición, avatar ni colisión; tampoco aprueba identidad, inventario o separación.

**Imagen actual:** ninguna. La carta funciona igual, mostrando el nombre con el tratamiento de su mitología.

**Se lee junto con:** `Documentacion/estilo_visual_aprobado.md`. Nada más.

> Generada por `herramientas/generar-ordenes.py`. Para cambiarla, editar la fuente (el ADN, la matriz, `personajes.json` o `herramientas/identidad_visual.py`) y volver a generar. Editar este archivo a mano se pierde.

---

## 1. Identidad

| Campo | Valor | Origen |
|---|---|---|
| Mitología | romana | `personajes.json` |
| Tier | normal | `personajes.json` |
| Familia de encuadre | figura humana | ADN |
| Edad y contextura | Adulta madura; alta y de contextura media. | ADN |
| Rostro y cabello | Rostro largo decidido y cabello oscuro recogido con volumen controlado. | ADN |
| Cabello, color | negro | ya declarado en el ADN, precisado sin contradecirlo |
| Cabello, textura | recogido de volumen controlado | ya declarado en el ADN, precisado sin contradecirlo |
| Piel | castaña media | ya declarado en el ADN, precisado sin contradecirlo |
| Ojos | marrón muy oscuro | ya declarado en el ADN, precisado sin contradecirlo |

## 2. Detalle reconocible

**Fundación de Cartago expresada mediante construcción y acción.**

Dones declarados en `personajes.json`: Reina astuta y decidida; Fundadora de la ciudad de Cartago.

Ícono de la carta en la colección: `muralla_cartago`. Dependencia del identificador en la matriz: 4 de 10.

> **Reconocimiento textual: DOCUMENTADO.** Planificación o supervisión de obra, manto/púrpura de Tiro, muralla y puerto concretan la fundación. El avatar conserva borde púrpura y muralla/puerto; no hace falta regalia ni un objeto nuevo. La validación visual sigue pendiente.
> Fuente de la revisión: `Documentacion/revision_identificadores_lote_2026-09-28.json`, objetivo `dido`. Evidencia de acción, silueta, composición, pistas y avatar del ADN.

## 3. Acción y pose

Señala el trazado de Cartago o supervisa obra; actividad fundadora, no pose regia estática.

Dirección corporal: Tres cuartos orientada hacia el trazado o construcción.

Es la acción de la ficha y no se cambia. Si la acción no se puede representar sin agregar un objeto que no está en el inventario de la §5, frenar y avisar.

**Y al revés, que es el caso que falló tres veces:** si un objeto exigido de la §5 no entra en la pose tal como está descripta, **el objeto no se descarta**. Se ajusta la pose lo mínimo para que entre, conservando la dirección corporal y la diagonal. Una silueta de carrera con los dos puños cerrados no deja mano para un bastón, y la salida no es correr sin el bastón: es que una mano lo lleve. Declarar el ajuste en el preflight. Una pista condicional sólo se exige si se cumple su condición; las alternativas con «o» se conservan como alternativas, sin exigir todas a la vez.

## 4. Silueta y composición

- **Firma de silueta:** Manto/púrpura de Tiro + gesto de planificación + muralla en construcción como forma secundaria; evitar estética de emperatriz romana.
- **Composición:** Muralla/puerto mediterráneo subordinados; aire en la dirección del gesto de planificación.
- **Densidad visual:** media-alta (matriz: 7 de 10).

- **Cuerpo, y esto manda sobre cualquier intuición:** entrado en años, de contextura media, atlética sin volumen, hombros de ancho medio, de escala algo mayor que humana.

La contextura sale de acá y no de lo que el personaje representa. Un dios no es corpulento por ser dios, ni un héroe es musculoso por ser héroe: si estos valores piden un cuerpo liviano, va un cuerpo liviano. **Sin abdominales marcados, sin deltoides separados, sin bíceps de gimnasio y sin espalda en V** salvo que la masa y los hombros de arriba lo pidan expresamente.

Los quince ejes completos, como límites de diseño y no como sugerencia (EV edad visual, MC masa corporal, EA escala aparente, AF angulosidad facial, CO contorno superior, AC apertura corporal, DP dinamismo de pose, VD verticalidad, DV densidad visual, OV oscuridad, DI dependencia del identificador, AN anchura de hombros, PF protagonismo de fondo, RM rigidez de materiales, RA rareza anatómica):

| EV | MC | EA | AF | CO | AC | DP | VD | DV | OV | DI | AN | PF | RM | RA |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 7 | 5 | 7 | 7 | 2 | 8 | 4 | 8 | 7 | 4 | 4 | 5 | 9 | 5 | 1 |

Prueba de silueta: reducida a mancha negra, tiene que seguir distinguiéndose de los personajes de la §7.

## 5. Inventario cerrado

Lo único que puede verse:

1. **Fundación de Cartago expresada mediante construcción y acción** — identificador principal. ADN.
2. **Pistas secundarias autorizadas:** manto/púrpura de Tiro, muralla, puerto y vocabulario fenicio autorizado por la guía. ADN. Subordinadas al identificador. Respetar las condiciones y alternativas del texto: «si hace falta» y «cuando corresponda» no exigen presencia incondicional; «o» no exige ambas opciones.
3. **Vestimenta lisa del vocabulario romano**, sin ornamento. Necesaria para vestir al personaje; sin autorización de ningún adorno concreto, va lisa.
4. **Resolución funcional de vestimenta y calzado:** `Documentacion/adn_visual_personajes_v1.md`, sección «Regla común de vestimenta funcional y calzado — lote del 2026-09-28». Decisión de diseño de Willy aprobada el 2026-09-28; no es una atestación histórica.
   - **Vestimenta funcional:** Base funcional lisa subordinada al vocabulario fenicio autorizado y al manto/púrpura de Tiro; no introducir estética de emperatriz romana.
   - **Calzado:** Sandalias simples de cuero, sin motivos ornamentales.
   - **Alcance:** Conservar prendas y armaduras expresamente autorizadas; la base lisa sólo completa las partes que requieren vestimenta funcional, sin reemplazar ni tapar la firma de silueta. No imponer un color común: conservar los colores autorizados. Cierres funcionales discretos, sin broches, emblemas, joyas ni adornos nuevos.

Nada más. En particular, y porque ya pasó en la tanda anterior: **sin** broche, **sin** medallón, **sin** insignia, **sin** emblema, **sin** remaches decorativos, **sin** joyas, **sin** flores en el pelo, **sin** tatuajes, **sin** cuernos, **sin** alas que la ficha no pida, **sin** animal acompañante que no esté arriba, **sin** efecto mágico decorativo agregado por fuera del identificador, **sin** runas, **sin** pseudo-texto, **sin** calzado con decisión no trazada.

**Inventario por exceso y por omisión.** Lo que no figura no entra. Mostrar los elementos exigidos por el ADN, aplicar las pistas condicionales sólo cuando se cumpla su condición y conservar las alternativas como tales. El identificador principal manda, las pistas acompañan y nada tapa la cara ni el identificador. En el preflight, declarar qué condiciones se cumplen y qué alternativa se usa, sin agregar decisiones ajenas a la fuente.

**La magia es obligatoria y sale del identificador.** El detalle reconocible de la §2 no se muestra apoyado y quieto: se muestra funcionando, el entorno reacciona, y el don produce su fenómeno visible. Estela, chispas, partículas, luz propia que ilumina de verdad, deformación del aire, materia que responde: todo eso está autorizado y va sin timidez. Esto no agrega ningún objeto al inventario de arriba, porque lo que se enciende es lo que el personaje ya tiene.

Las tres capas y las cuatro reglas están en `estilo_visual_aprobado.md` §7, que gobierna. En resumen: el efecto nace del don y se puede señalar de dónde salió; no tapa la cara ni el identificador; el color sale del don o del material y nunca es el dorado por default; y el fenómeno es propio de este personaje y no el mismo de las otras 84. Queda afuera el aura que envuelve el cuerpo y disuelve la silueta, el halo detrás de la cabeza, las runas o pseudo-texto flotando, y cualquier efecto que no se pueda trazar al don. Si el identificador no da para un fenómeno, la carta va con el objeto en actividad y el entorno reaccionando, y no se inventa uno.

## 6. Escenario

Sale de la acción de la §3 y de las pistas autorizadas de la §5, en ese orden. El fondo se diseña después del personaje, nunca antes.

Protagonismo de fondo asignado: 9 de 10, o sea que el contexto es esencial para leer la carta.

**Sin** pedestal de roca ni acantilado heroico, **sin** templo griego de decoración, **sin** Olimpo, **sin** cielo azul con nubes por defecto, **sin** arquitectura de fantasía, **sin** paisaje panorámico que compita en nitidez. Quince de las treinta y una imágenes anteriores tenían el pedestal y once el templo.

El fondo va con profundidad de campo real: menos nitidez y menos contraste que el personaje. Es el recurso principal para cumplir la jerarquía personaje → identificador → contexto.

## 7. Separación obligatoria

**Preparación textual anti-clonación: DOCUMENTADA.** Tres o más riesgos justificados y separadores de silueta, pose y composición; la prueba visual de silueta, pose y avatar sigue pendiente.

**Contra Hera.**

| | Dido | Hera |
|---|---|---|
| Cabello | negro | castaño oscuro |
| Textura | recogido de volumen controlado | pesado y estructurado |
| Piel | castaña media | oliva clara |
| Ojos | marrón muy oscuro | ámbar |

Silueta de Hera, para no repetirla: tocado o peinado elevado + manto vertical + pavo real rompiendo un lateral del contorno.

Pose de Hera, para no repetirla: una mano relajada y otra sobre el manto; cero gesto de combate.

Ejes numéricos que ya los separan: protagonismo de fondo 9 contra 5, apertura corporal 8 contra 5, dinamismo de pose 4 contra 1, dependencia del identificador 4 contra 7.

**Atención: 10 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** autoridad femenina madura.
**Filtro numérico:** distancia ponderada 1.156; misma morfología y lectura; riesgo numérico bajo. No sustituye la comparación textual.

- **Separador de silueta:** Dido: manto/púrpura de Tiro + gesto de planificación + muralla en construcción como forma secundaria; evitar estética de emperatriz romana. Cuerpo: adulta madura; alta y de contextura media. Frente a Hera: tocado o peinado elevado + manto vertical + pavo real rompiendo un lateral del contorno. Cuerpo: adulta madura; alta y de postura regia. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Dido: señala el trazado de Cartago o supervisa obra; actividad fundadora, no pose regia estática. Frente a Hera: una mano relajada y otra sobre el manto; cero gesto de combate. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Dido: muralla/puerto mediterráneo subordinados; aire en la dirección del gesto de planificación. Frente a Hera: pavo real lateral para quebrar la verticalidad sin competir con el rostro; fondo contenido. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo dido, comparación Hera; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Atenea.**

| | Dido | Atenea |
|---|---|---|
| Cabello | negro | castaño ceniza |
| Textura | recogido de volumen controlado | ondulado recogido compacto |
| Piel | castaña media | oliva clara |
| Ojos | marrón muy oscuro | gris claro |

Silueta de Atenea, para no repetirla: casco/cresta + escudo desplazado + línea de lanza o arma defensiva sólo si la referencia aprobada la conserva.

Pose de Atenea, para no repetirla: escudo en diagonal baja y mano libre indicando estrategia; no combate ni simetría de estatua.

Ejes numéricos que ya los separan: protagonismo de fondo 9 contra 3, apertura corporal 8 contra 4, rigidez de materiales 5 contra 9, dependencia del identificador 4 contra 7.

**Atención: 10 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** figuras femeninas de planificación estratégica; cercanía numérica.
**Filtro numérico:** distancia ponderada 1.240; misma morfología y lectura; riesgo numérico bajo. No sustituye la comparación textual.

- **Separador de silueta:** Dido: manto/púrpura de Tiro + gesto de planificación + muralla en construcción como forma secundaria; evitar estética de emperatriz romana. Cuerpo: adulta madura; alta y de contextura media. Frente a Atenea: casco/cresta + escudo desplazado + línea de lanza o arma defensiva sólo si la referencia aprobada la conserva. Cuerpo: adulta joven-madura; atlética sin hipermusculatura. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Dido: señala el trazado de Cartago o supervisa obra; actividad fundadora, no pose regia estática. Frente a Atenea: escudo en diagonal baja y mano libre indicando estrategia; no combate ni simetría de estatua. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Dido: muralla/puerto mediterráneo subordinados; aire en la dirección del gesto de planificación. Frente a Atenea: arquitectura corporal firme con aire alrededor del escudo y de la mano que guía la lectura. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo dido, comparación Atenea; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Casiopea.**

| | Dido | Casiopea |
|---|---|---|
| Cabello | negro ⚠ igual | negro |
| Textura | recogido de volumen controlado | estructurado alto |
| Piel | castaña media ⚠ igual | castaña media |
| Ojos | marrón muy oscuro | ámbar |

Silueta de Casiopea, para no repetirla: trono dominando la forma exterior y sugiriendo una W con respaldo/brazos, sin letras visibles.

Pose de Casiopea, para no repetirla: quietud orgullosa sobre el trono.

Ejes numéricos que ya los separan: apertura corporal 8 contra 2, dinamismo de pose 4 contra 1, dependencia del identificador 4 contra 7, verticalidad 8 contra 6.

**Atención: 11 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** autoridad femenina madura de arquitectura/trono; cercanía numérica.
**Filtro numérico:** distancia ponderada 1.274; misma morfología y lectura; riesgo numérico bajo. No sustituye la comparación textual.

- **Separador de silueta:** Dido: manto/púrpura de Tiro + gesto de planificación + muralla en construcción como forma secundaria; evitar estética de emperatriz romana. Cuerpo: adulta madura; alta y de contextura media. Frente a Casiopea: trono dominando la forma exterior y sugiriendo una W con respaldo/brazos, sin letras visibles. Cuerpo: adulta madura; alta. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Dido: señala el trazado de Cartago o supervisa obra; actividad fundadora, no pose regia estática. Frente a Casiopea: quietud orgullosa sobre el trono. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Dido: muralla/puerto mediterráneo subordinados; aire en la dirección del gesto de planificación. Frente a Casiopea: estrellas giran alrededor como contexto; el trono crea la geometría principal y debe quedar separado del contorno del cabello. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo dido, comparación Casiopea; contrastes derivados del ADN y la matriz, sin nuevo diseño.

Criterio de la ficha: Hera. Diferenciar por actividad fundadora, gesto de planificación y lenguaje fenicio, no regalia olímpica.

La diferencia no puede depender sólo del color, del fondo, del objeto sostenido, del peinado ni de una prenda. Matriz §4.1: el objeto no salva un clon.

## 8. Encuadre

Vertical 3:4. Figura al 70–80% del alto del cuadro. Zona limpia detrás de la cabeza o del foco principal.

Avatar circular, como restricción invisible: Rostro + borde púrpura + fragmento de muralla/puerto. No se dibuja ningún círculo, medallón, marco, inset ni retrato secundario.

## 9. Registro

Cálido, despierto, concentrado. No hace falta que sonría. Sin amenaza, sin crueldad, sin solemnidad genérica repetida de otra carta. La emoción sale de la historia del personaje y de lo que está haciendo.

## 10. Contaminación a evitar

**Investigación externa pendiente.** No se relevaron versiones modernas específicas para este personaje. Aplicar los controles disponibles del repo de [Documentacion/controles_contaminacion_pop_lote_2026-09-28.md](../Documentacion/controles_contaminacion_pop_lote_2026-09-28.md), junto con la identidad, acción, inventario y exclusiones de esta orden. Este pendiente no constituye por sí solo un bloqueo material ni certifica ausencia de contaminación. Las representaciones y sus rasgos concretos siguen sin investigar; no reemplazar ese faltante por asociaciones de memoria.

Nada de Marvel, Disney, DC, anime conocido ni videojuegos, sea o no de esta lista.

## 11. Antes de generar

Mostrar cinco líneas y esperar OK: qué se ve, cuál es el detalle reconocible, el inventario con su fuente, contra quién se separa y con qué diferencia concreta, y de dónde sale el escenario.

Después de generar, declarar cuatro cosas: qué objetos quedaron en la imagen que no estaban en el inventario; **qué elementos exigidos de la §5 no aparecieron y por qué, qué condiciones no se cumplieron y qué alternativas se usaron**; qué campos de esta orden no se cumplieron; y los once puntos del gate de `estilo_visual_aprobado.md` §9, que ahora son doce.

El segundo control es tan importante como el primero y es el que faltaba hasta el 2026-09-14: una imagen puede cumplir el inventario cerrado al pie de la letra y seguir siendo una carta fallada por no mostrar nada de lo que hace reconocible al personaje.
