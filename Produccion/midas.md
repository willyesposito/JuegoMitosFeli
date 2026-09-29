# Orden de producción — Midas

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
| Edad y contextura | Adulto maduro; contextura media. | ADN |
| Rostro y cabello | Rostro ancho con sorpresa contenida, cabello corto y barba breve. | ADN |
| Cabello, color | castaño ceniza | decisión de diseño visual, sin atestación localizada; revisable por la investigación |
| Cabello, textura | corto | decisión de diseño visual, sin atestación localizada; revisable por la investigación |
| Piel | oliva media | decisión de diseño visual, sin atestación localizada; revisable por la investigación |
| Ojos | gris | decisión de diseño visual, sin atestación localizada; revisable por la investigación |

## 2. Detalle reconocible

**Toque de oro.**

Dones declarados en `personajes.json`: El toque de oro: todo lo que tocaba se convertía en oro.

Ícono de la carta en la colección: `corona`. Dependencia del identificador en la matriz: 10 de 10.

## 3. Acción y pose

Mira comida/agua convertida en oro con gesto de comprender el problema.

Dirección corporal: Tres cuartos hacia los objetos transformados.

Es la acción de la ficha y no se cambia. Si la acción no se puede representar sin agregar un objeto que no está en el inventario de la §5, frenar y avisar.

**Y al revés, que es el caso que falló tres veces:** si un objeto exigido de la §5 no entra en la pose tal como está descripta, **el objeto no se descarta**. Se ajusta la pose lo mínimo para que entre, conservando la dirección corporal y la diagonal. Una silueta de carrera con los dos puños cerrados no deja mano para un bastón, y la salida no es correr sin el bastón: es que una mano lo lleve. Declarar el ajuste en el preflight. Una pista condicional sólo se exige si se cumple su condición; las alternativas con «o» se conservan como alternativas, sin exigir todas a la vez.

## 4. Silueta y composición

- **Firma de silueta:** Una mano extendida separada del torso + objetos parcialmente dorados creando ritmo lateral.
- **Composición:** Mano y objetos quedan separados del torso; el oro aparece por transformación parcial y no como fondo decorativo.
- **Densidad visual:** media (matriz: 6 de 10).

- **Cuerpo, y esto manda sobre cualquier intuición:** de edad media, de contextura media, atlética sin volumen, hombros de ancho medio, de escala humana.

La contextura sale de acá y no de lo que el personaje representa. Un dios no es corpulento por ser dios, ni un héroe es musculoso por ser héroe: si estos valores piden un cuerpo liviano, va un cuerpo liviano. **Sin abdominales marcados, sin deltoides separados, sin bíceps de gimnasio y sin espalda en V** salvo que la masa y los hombros de arriba lo pidan expresamente.

Los quince ejes completos, como límites de diseño y no como sugerencia (EV edad visual, MC masa corporal, EA escala aparente, AF angulosidad facial, CO contorno superior, AC apertura corporal, DP dinamismo de pose, VD verticalidad, DV densidad visual, OV oscuridad, DI dependencia del identificador, AN anchura de hombros, PF protagonismo de fondo, RM rigidez de materiales, RA rareza anatómica):

| EV | MC | EA | AF | CO | AC | DP | VD | DV | OV | DI | AN | PF | RM | RA |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 6 | 5 | 6 | 4 | 2 | 6 | 4 | 6 | 6 | 4 | 10 | 5 | 5 | 4 | 1 |

Prueba de silueta: reducida a mancha negra, tiene que seguir distinguiéndose de los personajes de la §7.

## 5. Inventario cerrado

Lo único que puede verse:

1. **Toque de oro** — identificador principal. ADN.
2. **Pistas secundarias autorizadas:** objetos simples parcialmente dorados. ADN. Subordinadas al identificador. Respetar las condiciones y alternativas del texto: «si hace falta» y «cuando corresponda» no exigen presencia incondicional; «o» no exige ambas opciones.
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

**Contra Jasón.**

| | Midas | Jasón |
|---|---|---|
| Cabello | castaño ceniza | castaño claro |
| Textura | corto | ondulado marcado |
| Piel | oliva media | dorada media |
| Ojos | gris | avellana |

Silueta de Jasón, para no repetirla: Vellocino de Oro como gran masa irregular sobre un brazo/hombro + dirección de capitán hacia un lateral.

Pose de Jasón, para no repetirla: mano libre indicando rumbo; liderazgo colaborativo, no regia estática.

Ejes numéricos que ya los separan: contorno superior 2 contra 5, apertura corporal 6 contra 8.

**Atención: 13 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** masa dorada lateral y cuerpo abierto; Espejo.
**Filtro numérico:** distancia ponderada 1.050; misma morfología y lectura; riesgo numérico bajo. No sustituye la comparación textual.

- **Separador de silueta:** Midas: una mano extendida separada del torso + objetos parcialmente dorados creando ritmo lateral. Cuerpo: adulto maduro; contextura media. Frente a Jasón: Vellocino de Oro como gran masa irregular sobre un brazo/hombro + dirección de capitán hacia un lateral. Cuerpo: adulto joven-maduro; cuerpo atlético medio. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Midas: mira comida/agua convertida en oro con gesto de comprender el problema. Frente a Jasón: mano libre indicando rumbo; liderazgo colaborativo, no regia estática. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Midas: mano y objetos quedan separados del torso; el oro aparece por transformación parcial y no como fondo decorativo. Frente a Jasón: el Vellocino ocupa una masa clara sin tapar rostro; el Argo queda pequeño en contexto y el aire acompaña la dirección señalada. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo midas, comparación Jasón; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Paris.**

| | Midas | Paris |
|---|---|---|
| Cabello | castaño ceniza | castaño medio |
| Textura | corto | lacio |
| Piel | oliva media ⚠ igual | oliva media |
| Ojos | gris | verde gris |

Silueta de Paris, para no repetirla: manzana dorada separada de la mano + cuerpo girado entre dos direcciones, visualizando una elección.

Pose de Paris, para no repetirla: sostiene la manzana baja y mira lateralmente; gesto de elección, no victoria.

Ejes numéricos que ya los separan: edad visual 6 contra 4, contorno superior 2 contra 4, apertura corporal 6 contra 4, dinamismo de pose 4 contra 2.

**Atención: 10 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** manzana/objeto dorado en mano de varón.
**Filtro numérico:** distancia ponderada 1.084; misma morfología y lectura; riesgo numérico bajo. No sustituye la comparación textual.

- **Separador de silueta:** Midas: una mano extendida separada del torso + objetos parcialmente dorados creando ritmo lateral. Cuerpo: adulto maduro; contextura media. Frente a Paris: manzana dorada separada de la mano + cuerpo girado entre dos direcciones, visualizando una elección. Cuerpo: adulto joven; contextura media. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Midas: mira comida/agua convertida en oro con gesto de comprender el problema. Frente a Paris: sostiene la manzana baja y mira lateralmente; gesto de elección, no victoria. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Midas: mano y objetos quedan separados del torso; el oro aparece por transformación parcial y no como fondo decorativo. Frente a Paris: la manzana queda aislada del torso; si aparecen las tres diosas, deben permanecer subordinadas y no convertirse en coprotagonistas. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo midas, comparación Paris; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Héctor.**

| | Midas | Héctor |
|---|---|---|
| Cabello | castaño ceniza | castaño oscuro |
| Textura | corto ⚠ igual | corto |
| Piel | oliva media ⚠ igual | oliva media |
| Ojos | gris | marrón cálido |

Silueta de Héctor, para no repetirla: gran escudo defensivo hacia un lateral + cuerpo colocado entre ciudad y exterior.

Pose de Héctor, para no repetirla: protege y contiene, no avanza ni ataca.

Ejes numéricos que ya los separan: rigidez de materiales 4 contra 8, dependencia del identificador 10 contra 7, protagonismo de fondo 5 contra 8, masa corporal 5 contra 7.

**Atención: 10 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** adultos de contextura media-fuerte y acción contenida; cercanía numérica.
**Filtro numérico:** distancia ponderada 1.061; misma morfología y lectura; riesgo numérico bajo. No sustituye la comparación textual.

- **Separador de silueta:** Midas: una mano extendida separada del torso + objetos parcialmente dorados creando ritmo lateral. Cuerpo: adulto maduro; contextura media. Frente a Héctor: gran escudo defensivo hacia un lateral + cuerpo colocado entre ciudad y exterior. Cuerpo: adulto maduro; atlético fuerte pero no enorme. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Midas: mira comida/agua convertida en oro con gesto de comprender el problema. Frente a Héctor: protege y contiene, no avanza ni ataca. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Midas: mano y objetos quedan separados del torso; el oro aparece por transformación parcial y no como fondo decorativo. Frente a Héctor: murallas de Troya subordinadas detrás; el escudo ocupa un lateral y el cuerpo cierra visualmente el paso. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo midas, comparación Héctor; contrastes derivados del ADN y la matriz, sin nuevo diseño.

Criterio de la ficha: Jasón y Paris. Diferenciar por oro problemático en varios objetos, no vellocino heroico ni una única manzana de elección.

La diferencia no puede depender sólo del color, del fondo, del objeto sostenido, del peinado ni de una prenda. Matriz §4.1: el objeto no salva un clon.

## 8. Encuadre

Vertical 3:4. Figura al 70–80% del alto del cuadro. Zona limpia detrás de la cabeza o del foco principal.

Avatar circular, como restricción invisible: Rostro + mano dorando un objeto simple. No se dibuja ningún círculo, medallón, marco, inset ni retrato secundario.

## 9. Registro

Cálido, despierto, concentrado. No hace falta que sonría. Sin amenaza, sin crueldad, sin solemnidad genérica repetida de otra carta. La emoción sale de la historia del personaje y de lo que está haciendo.

## 10. Contaminación a evitar

**Investigación externa pendiente.** No se relevaron versiones modernas específicas para este personaje. Aplicar los controles disponibles del repo de [Documentacion/controles_contaminacion_pop_lote_2026-09-28.md](../Documentacion/controles_contaminacion_pop_lote_2026-09-28.md), junto con la identidad, acción, inventario y exclusiones de esta orden. Este pendiente no constituye por sí solo un bloqueo material ni certifica ausencia de contaminación. Las representaciones y sus rasgos concretos siguen sin investigar; no reemplazar ese faltante por asociaciones de memoria.

Nada de Marvel, Disney, DC, anime conocido ni videojuegos, sea o no de esta lista.

## 11. Antes de generar

Mostrar cinco líneas y esperar OK: qué se ve, cuál es el detalle reconocible, el inventario con su fuente, contra quién se separa y con qué diferencia concreta, y de dónde sale el escenario.

Después de generar, declarar cuatro cosas: qué objetos quedaron en la imagen que no estaban en el inventario; **qué elementos exigidos de la §5 no aparecieron y por qué, qué condiciones no se cumplieron y qué alternativas se usaron**; qué campos de esta orden no se cumplieron; y los once puntos del gate de `estilo_visual_aprobado.md` §9, que ahora son doce.

El segundo control es tan importante como el primero y es el que faltaba hasta el 2026-09-14: una imagen puede cumplir el inventario cerrado al pie de la letra y seguir siendo una carta fallada por no mostrar nada de lo que hace reconocible al personaje.
