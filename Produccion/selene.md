# Orden de producción — Selene

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
| Familia de encuadre | figura humana con carro | ADN |
| Edad y contextura | Adulta madura; alta y esbelta. | ADN |
| Rostro y cabello | Rostro oval largo y cabello oscuro largo empujado hacia atrás. | ADN |
| Cabello, color | negro azulado | ya declarado en el ADN, precisado sin contradecirlo |
| Cabello, textura | largo lacio | ya declarado en el ADN, precisado sin contradecirlo |
| Piel | muy pálida | ya declarado en el ADN, precisado sin contradecirlo |
| Ojos | gris plata | ya declarado en el ADN, precisado sin contradecirlo |

## 2. Detalle reconocible

**Carro de la luna.**

Dones declarados en `personajes.json`: Conduce el carro plateado de la luna por el cielo nocturno.

Ícono de la carta en la colección: `carrolunar`. Dependencia del identificador en la matriz: 10 de 10.

## 3. Acción y pose

Conduce el carro con ritmo elegante y silencioso.

Dirección corporal: Movimiento lateral nocturno, más lento que Helios.

Es la acción de la ficha y no se cambia. Si la acción no se puede representar sin agregar un objeto que no está en el inventario de la §5, frenar y avisar.

**Y al revés, que es el caso que falló tres veces:** si un objeto exigido de la §5 no entra en la pose tal como está descripta, **el objeto no se descarta**. Se ajusta la pose lo mínimo para que entre, conservando la dirección corporal y la diagonal. Una silueta de carrera con los dos puños cerrados no deja mano para un bastón, y la salida no es correr sin el bastón: es que una mano lo lleve. Declarar el ajuste en el preflight. Una pista condicional sólo se exige si se cumple su condición; las alternativas con «o» se conservan como alternativas, sin exigir todas a la vez.

## 4. Silueta y composición

- **Firma de silueta:** Carro plateado + creciente lunar grande desplazado + telas horizontales nocturnas.
- **Composición:** Creciente desplazado y telas horizontales; aire delante del carro y temperatura fría coherente.
- **Densidad visual:** media-alta (matriz: 8 de 10).

- **Cuerpo, y esto manda sobre cualquier intuición:** entrado en años, delgado y liviano, sin masa muscular marcada, hombros de ancho medio, de escala algo mayor que humana.

La contextura sale de acá y no de lo que el personaje representa. Un dios no es corpulento por ser dios, ni un héroe es musculoso por ser héroe: si estos valores piden un cuerpo liviano, va un cuerpo liviano. **Sin abdominales marcados, sin deltoides separados, sin bíceps de gimnasio y sin espalda en V** salvo que la masa y los hombros de arriba lo pidan expresamente.

Los quince ejes completos, como límites de diseño y no como sugerencia (EV edad visual, MC masa corporal, EA escala aparente, AF angulosidad facial, CO contorno superior, AC apertura corporal, DP dinamismo de pose, VD verticalidad, DV densidad visual, OV oscuridad, DI dependencia del identificador, AN anchura de hombros, PF protagonismo de fondo, RM rigidez de materiales, RA rareza anatómica):

| EV | MC | EA | AF | CO | AC | DP | VD | DV | OV | DI | AN | PF | RM | RA |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 7 | 4 | 8 | 4 | 8 | 7 | 6 | 6 | 8 | 4 | 10 | 4 | 6 | 4 | 5 |

Prueba de silueta: reducida a mancha negra, tiene que seguir distinguiéndose de los personajes de la §7.

## 5. Inventario cerrado

Lo único que puede verse:

1. **Carro de la luna** — identificador principal. ADN.
2. **Pistas secundarias autorizadas:** creciente lunar y luz plateada. ADN. Subordinadas al identificador. Respetar las condiciones y alternativas del texto: «si hace falta» y «cuando corresponda» no exigen presencia incondicional; «o» no exige ambas opciones.
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

**Contra Artemisa.**

| | Selene | Artemisa |
|---|---|---|
| Cabello | negro azulado | castaño muy oscuro |
| Textura | largo lacio | lacio recogido alto |
| Piel | muy pálida | canela |
| Ojos | gris plata | ámbar |

Silueta de Artemisa, para no repetirla: arco largo rompiendo un lateral + cuerpo de cazadora en eje diagonal + capa corta o faldón práctico.

Pose de Artemisa, para no repetirla: arco en reposo hacia abajo; calma vigilante, no disparo ni combate.

Ejes numéricos que ya los separan: contorno superior 8 contra 2, rareza anatómica 5 contra 1, edad visual 7 contra 4, apertura corporal 7 contra 4.

**Por qué se controla este par:** mujeres altas de lectura lunar y cuerpo contenido.
**Filtro numérico:** distancia ponderada 1.989; morfología o lectura distinta: control semántico/compositivo, no colisión anatómica. No sustituye la comparación textual.

- **Separador de silueta:** Selene: carro plateado + creciente lunar grande desplazado + telas horizontales nocturnas. Cuerpo: adulta madura; alta y esbelta. Frente a Artemisa: arco largo rompiendo un lateral + cuerpo de cazadora en eje diagonal + capa corta o faldón práctico. Cuerpo: adulta joven; atlética ligera. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Selene: conduce el carro con ritmo elegante y silencioso. Frente a Artemisa: arco en reposo hacia abajo; calma vigilante, no disparo ni combate. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Selene: creciente desplazado y telas horizontales; aire delante del carro y temperatura fría coherente. Frente a Artemisa: espacio negativo claro delante de la mirada; el arco debe romper el contorno sin encerrarla. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo selene, comparación Artemisa; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Helios.**

| | Selene | Helios |
|---|---|---|
| Cabello | negro azulado | rubio cobrizo |
| Textura | largo lacio | corto barrido |
| Piel | muy pálida | dorada media |
| Ojos | gris plata | ámbar |

Silueta de Helios, para no repetirla: carro y ruedas formando base curva + líneas de movimiento horizontales + cuerpo erguido sobre el carro.

Pose de Helios, para no repetirla: conduce el carro, erguido y estable.

Ejes numéricos que ya los separan: oscuridad 4 contra 1, masa corporal 4 contra 6, contorno superior 8 contra 6, dinamismo de pose 6 contra 8.

**Atención: 9 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** vehículo celeste lateral.
**Filtro numérico:** distancia ponderada 1.101; morfología o lectura distinta: control semántico/compositivo, no colisión anatómica. No sustituye la comparación textual.

- **Separador de silueta:** Selene: carro plateado + creciente lunar grande desplazado + telas horizontales nocturnas. Cuerpo: adulta madura; alta y esbelta. Frente a Helios: carro y ruedas formando base curva + líneas de movimiento horizontales + cuerpo erguido sobre el carro. Cuerpo: adulto maduro; atlético medio. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Selene: conduce el carro con ritmo elegante y silencioso. Frente a Helios: conduce el carro, erguido y estable. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Selene: creciente desplazado y telas horizontales; aire delante del carro y temperatura fría coherente. Frente a Helios: sol grande detrás pero subordinado al rostro; aire delante del carro y ruedas completas cuando sean relevantes. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo selene, comparación Helios; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Circe.**

| | Selene | Circe |
|---|---|---|
| Cabello | negro azulado | castaño muy oscuro rojizo |
| Textura | largo lacio | largo con volumen lateral |
| Piel | muy pálida | oliva clara |
| Ojos | gris plata | ámbar |

Silueta de Circe, para no repetirla: vara mágica fuera del eje + manto amplio + mano libre en gesto de transformación.

Pose de Circe, para no repetirla: cuerpo casi quieto mientras la magia produce cambio alrededor.

Ejes numéricos que ya los separan: rareza anatómica 5 contra 1, angulosidad facial 4 contra 7, verticalidad 6 contra 9, dinamismo de pose 6 contra 4.

**Atención: 10 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** mujeres maduras con contorno largo expansivo y gesto vertical.
**Filtro numérico:** distancia ponderada 1.324; morfología o lectura distinta: control semántico/compositivo, no colisión anatómica. No sustituye la comparación textual.

- **Separador de silueta:** Selene: carro plateado + creciente lunar grande desplazado + telas horizontales nocturnas. Cuerpo: adulta madura; alta y esbelta. Frente a Circe: vara mágica fuera del eje + manto amplio + mano libre en gesto de transformación. Cuerpo: adulta madura; alta y esbelta. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Selene: conduce el carro con ritmo elegante y silencioso. Frente a Circe: cuerpo casi quieto mientras la magia produce cambio alrededor. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Selene: creciente desplazado y telas horizontales; aire delante del carro y temperatura fría coherente. Frente a Circe: isla remota en fondo; espacio alrededor de la vara y de la mano libre para sostener la teatralidad sin saturar. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo selene, comparación Circe; contrastes derivados del ADN y la matriz, sin nuevo diseño.

Criterio de la ficha: Artemisa y Helios. Diferenciar de Artemisa por carro; de Helios por luz fría y ritmo pausado.

La diferencia no puede depender sólo del color, del fondo, del objeto sostenido, del peinado ni de una prenda. Matriz §4.1: el objeto no salva un clon.

## 8. Encuadre

Vertical 3:4. Figura al 70–80% del alto del cuadro. Zona limpia detrás de la cabeza o del foco principal.

Avatar circular, como restricción invisible: Rostro + creciente lunar plateado. No se dibuja ningún círculo, medallón, marco, inset ni retrato secundario.

## 9. Registro

Cálido, despierto, concentrado. No hace falta que sonría. Sin amenaza, sin crueldad, sin solemnidad genérica repetida de otra carta. La emoción sale de la historia del personaje y de lo que está haciendo.

## 10. Contaminación a evitar

**Investigación externa pendiente.** No se relevaron versiones modernas específicas para este personaje. Aplicar los controles disponibles del repo de [Documentacion/controles_contaminacion_pop_lote_2026-09-28.md](../Documentacion/controles_contaminacion_pop_lote_2026-09-28.md), junto con la identidad, acción, inventario y exclusiones de esta orden. Este pendiente no constituye por sí solo un bloqueo material ni certifica ausencia de contaminación. Las representaciones y sus rasgos concretos siguen sin investigar; no reemplazar ese faltante por asociaciones de memoria.

Nada de Marvel, Disney, DC, anime conocido ni videojuegos, sea o no de esta lista.

## 11. Antes de generar

Mostrar cinco líneas y esperar OK: qué se ve, cuál es el detalle reconocible, el inventario con su fuente, contra quién se separa y con qué diferencia concreta, y de dónde sale el escenario.

Después de generar, declarar cuatro cosas: qué objetos quedaron en la imagen que no estaban en el inventario; **qué elementos exigidos de la §5 no aparecieron y por qué, qué condiciones no se cumplieron y qué alternativas se usaron**; qué campos de esta orden no se cumplieron; y los once puntos del gate de `estilo_visual_aprobado.md` §9, que ahora son doce.

El segundo control es tan importante como el primero y es el que faltaba hasta el 2026-09-14: una imagen puede cumplir el inventario cerrado al pie de la letra y seguir siendo una carta fallada por no mostrar nada de lo que hace reconocible al personaje.
