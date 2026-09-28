# Orden de producción — Aracne

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
| Familia de encuadre | figura humana con transformación insinuada | ADN |
| Edad y contextura | Adulta joven; contextura pequeña. | ADN |
| Rostro y cabello | Rostro fino y cabello recogido alto. | ADN |
| Cabello, color | castaño oscuro | decisión de diseño visual, sin atestación localizada; revisable por la investigación |
| Cabello, textura | recogido alto | decisión de diseño visual, sin atestación localizada; revisable por la investigación |
| Piel | oliva clara | decisión de diseño visual, sin atestación localizada; revisable por la investigación |
| Ojos | gris | decisión de diseño visual, sin atestación localizada; revisable por la investigación |

## 2. Detalle reconocible

**Tejido perfecto y transformación en araña.**

Dones declarados en `personajes.json`: La mejor tejedora del mundo mortal.

Ícono de la carta en la colección: `telarana`. Dependencia del identificador en la matriz: 8 de 10.

## 3. Acción y pose

Trabaja con precisión, con manos separadas en tareas distintas.

Dirección corporal: Lateral hacia el telar.

Es la acción de la ficha y no se cambia. Si la acción no se puede representar sin agregar un objeto que no está en el inventario de la §5, frenar y avisar.

**Y al revés, que es el caso que falló tres veces:** si un objeto exigido de la §5 no entra en la pose tal como está descripta, **el objeto no se descarta**. Se ajusta la pose lo mínimo para que entre, conservando la dirección corporal y la diagonal. Una silueta de carrera con los dos puños cerrados no deja mano para un bastón, y la salida no es correr sin el bastón: es que una mano lo lleve. Declarar el ajuste en el preflight. Una pista condicional sólo se exige si se cumple su condición; las alternativas con «o» se conservan como alternativas, sin exigir todas a la vez.

## 4. Silueta y composición

- **Firma de silueta:** Telar diagonal + hilos saliendo del marco corporal + pequeña araña/patrón radial rompiendo el contorno.
- **Composición:** Hilos crean geometría radial sin tapar rostro; telar ocupa una diagonal y deja un área limpia opuesta.
- **Densidad visual:** media-alta (matriz: 7 de 10).

- **Cuerpo, y esto manda sobre cualquier intuición:** joven, delgado y liviano, sin masa muscular marcada, hombros estrechos, de escala humana.

La contextura sale de acá y no de lo que el personaje representa. Un dios no es corpulento por ser dios, ni un héroe es musculoso por ser héroe: si estos valores piden un cuerpo liviano, va un cuerpo liviano. **Sin abdominales marcados, sin deltoides separados, sin bíceps de gimnasio y sin espalda en V** salvo que la masa y los hombros de arriba lo pidan expresamente.

Los quince ejes completos, como límites de diseño y no como sugerencia (EV edad visual, MC masa corporal, EA escala aparente, AF angulosidad facial, CO contorno superior, AC apertura corporal, DP dinamismo de pose, VD verticalidad, DV densidad visual, OV oscuridad, DI dependencia del identificador, AN anchura de hombros, PF protagonismo de fondo, RM rigidez de materiales, RA rareza anatómica):

| EV | MC | EA | AF | CO | AC | DP | VD | DV | OV | DI | AN | PF | RM | RA |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 4 | 3 | 5 | 7 | 1 | 4 | 4 | 5 | 7 | 6 | 8 | 3 | 6 | 3 | 4 |

Prueba de silueta: reducida a mancha negra, tiene que seguir distinguiéndose de los personajes de la §7.

## 5. Inventario cerrado

Lo único que puede verse:

1. **Tejido perfecto y transformación en araña** — identificador principal. ADN.
2. **Pistas secundarias autorizadas:** araña y patrón de telaraña. ADN. Subordinadas al identificador. Respetar las condiciones y alternativas del texto: «si hace falta» y «cuando corresponda» no exigen presencia incondicional; «o» no exige ambas opciones.
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

**Contra Penélope.**

| | Aracne | Penélope |
|---|---|---|
| Cabello | castaño oscuro | castaño oscuro con hilos grises |
| Textura | recogido alto | recogido bajo |
| Piel | oliva clara | oliva media |
| Ojos | gris | marrón cálido |

Silueta de Penélope, para no repetirla: telar formando un marco vertical parcial + brazos ocupados a distinta altura.

Pose de Penélope, para no repetirla: trabajando con el hilo, sentada o de pie lateral; mirada fuera de cuadro en una pausa pensativa.

Ejes numéricos que ya los separan: angulosidad facial 7 contra 2, edad visual 4 contra 7, oscuridad 6 contra 3, rareza anatómica 4 contra 1.

**Atención: 10 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** trabajo de manos ante telar.
**Filtro numérico:** distancia ponderada 1.587; morfología o lectura distinta: control semántico/compositivo, no colisión anatómica. No sustituye la comparación textual.

- **Separador de silueta:** Aracne: telar diagonal + hilos saliendo del marco corporal + pequeña araña/patrón radial rompiendo el contorno. Cuerpo: adulta joven; contextura pequeña. Frente a Penélope: telar formando un marco vertical parcial + brazos ocupados a distinta altura. Cuerpo: adulta madura; contextura media-pequeña. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Aracne: trabaja con precisión, con manos separadas en tareas distintas. Frente a Penélope: trabajando con el hilo, sentada o de pie lateral; mirada fuera de cuadro en una pausa pensativa. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Aracne: hilos crean geometría radial sin tapar rostro; telar ocupa una diagonal y deja un área limpia opuesta. Frente a Penélope: telar estructura la imagen sin encerrar por completo el cuerpo; escena doméstica activa, no pasiva. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo aracne, comparación Penélope; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Dafne.**

| | Aracne | Dafne |
|---|---|---|
| Cabello | castaño oscuro | castaño claro |
| Textura | recogido alto | largo mezclándose con hojas |
| Piel | oliva clara | clara dorada |
| Ojos | gris | verde oliva |

Silueta de Dafne, para no repetirla: brazos convertidos en ramas + pies/parte baja en raíces, con transición clara y no terrorífica.

Pose de Dafne, para no repetirla: el cuerpo crece y se transforma, en vez de huir.

Ejes numéricos que ya los separan: contorno superior 1 contra 9, dependencia del identificador 8 contra 2, angulosidad facial 7 contra 3, verticalidad 5 contra 9.

**Por qué se controla este par:** transformación femenina y contorno orgánico añadido.
**Filtro numérico:** distancia ponderada 2.402; misma morfología y lectura; riesgo numérico bajo. No sustituye la comparación textual.

- **Separador de silueta:** Aracne: telar diagonal + hilos saliendo del marco corporal + pequeña araña/patrón radial rompiendo el contorno. Cuerpo: adulta joven; contextura pequeña. Frente a Dafne: brazos convertidos en ramas + pies/parte baja en raíces, con transición clara y no terrorífica. Cuerpo: adulta joven; delgada. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Aracne: trabaja con precisión, con manos separadas en tareas distintas. Frente a Dafne: el cuerpo crece y se transforma, en vez de huir. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Aracne: hilos crean geometría radial sin tapar rostro; telar ocupa una diagonal y deja un área limpia opuesta. Frente a Dafne: río/bosque simple; ramas deben abrirse hacia aire limpio y raíces quedar completas en la imagen maestra. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo aracne, comparación Dafne; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Medusa.**

| | Aracne | Medusa |
|---|---|---|
| Cabello | castaño oscuro | serpientes en lugar de cabello |
| Textura | recogido alto | volúmenes y direcciones diferenciadas |
| Piel | oliva clara | oliva media |
| Ojos | gris | ámbar |

Silueta de Medusa, para no repetirla: cabello de serpientes como firma total, con cabezas orientadas en direcciones variadas para evitar casco simétrico.

Pose de Medusa, para no repetirla: quietud controlada; nunca amenaza dirigida a cámara.

Ejes numéricos que ya los separan: contorno superior 1 contra 10, dependencia del identificador 8 contra 2, edad visual 4 contra 7, rareza anatómica 4 contra 7.

**Por qué se controla este par:** figura femenina con transformación anatómica identificatoria.
**Filtro numérico:** distancia ponderada 2.374; misma morfología y lectura; riesgo numérico bajo. No sustituye la comparación textual.

- **Separador de silueta:** Aracne: telar diagonal + hilos saliendo del marco corporal + pequeña araña/patrón radial rompiendo el contorno. Cuerpo: adulta joven; contextura pequeña. Frente a Medusa: cabello de serpientes como firma total, con cabezas orientadas en direcciones variadas para evitar casco simétrico. Cuerpo: adulta madura; contextura media. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Aracne: trabaja con precisión, con manos separadas en tareas distintas. Frente a Medusa: quietud controlada; nunca amenaza dirigida a cámara. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Aracne: hilos crean geometría radial sin tapar rostro; telar ocupa una diagonal y deja un área limpia opuesta. Frente a Medusa: piedras en fondo como pista y aire alrededor de las serpientes para que cada masa se lea; cero horror. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo aracne, comparación Medusa; contrastes derivados del ADN y la matriz, sin nuevo diseño.

Criterio de la ficha: Penélope. Diferenciar por tensión competitiva, geometría radial y araña.

La diferencia no puede depender sólo del color, del fondo, del objeto sostenido, del peinado ni de una prenda. Matriz §4.1: el objeto no salva un clon.

## 8. Encuadre

Vertical 3:4. Figura al 70–80% del alto del cuadro. Zona limpia detrás de la cabeza o del foco principal.

Avatar circular, como restricción invisible: Rostro + hilos formando una lectura de telaraña. No se dibuja ningún círculo, medallón, marco, inset ni retrato secundario.

## 9. Registro

Cálido, despierto, concentrado. No hace falta que sonría. Sin amenaza, sin crueldad, sin solemnidad genérica repetida de otra carta. La emoción sale de la historia del personaje y de lo que está haciendo.

## 10. Contaminación a evitar

**Pendiente de la investigación** del lote correspondiente de `Documentacion/prompt_investigacion_85.md`, campo `contaminacion_pop`. No bloquea la generación, pero dejarlo vacío es aceptar el riesgo a ciegas: la contaminación de cultura pop fue la falla más frecuente de la tanda anterior y la más difícil de ver desde adentro.

Nada de Marvel, Disney, DC, anime conocido ni videojuegos, sea o no de esta lista.

## 11. Antes de generar

Mostrar cinco líneas y esperar OK: qué se ve, cuál es el detalle reconocible, el inventario con su fuente, contra quién se separa y con qué diferencia concreta, y de dónde sale el escenario.

Después de generar, declarar cuatro cosas: qué objetos quedaron en la imagen que no estaban en el inventario; **qué elementos exigidos de la §5 no aparecieron y por qué, qué condiciones no se cumplieron y qué alternativas se usaron**; qué campos de esta orden no se cumplieron; y los once puntos del gate de `estilo_visual_aprobado.md` §9, que ahora son doce.

El segundo control es tan importante como el primero y es el que faltaba hasta el 2026-09-14: una imagen puede cumplir el inventario cerrado al pie de la letra y seguir siendo una carta fallada por no mostrar nada de lo que hace reconocible al personaje.
