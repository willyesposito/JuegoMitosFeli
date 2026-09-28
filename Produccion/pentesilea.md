# Orden de producción — Pentesilea

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
| Edad y contextura | Adulta madura; atlética fuerte. | ADN |
| Rostro y cabello | Rostro cuadrado; cabello recogido alto o trenzado corto para despejar silueta. | ADN |
| Cabello, color | negro | decisión de diseño visual, sin atestación localizada; revisable por la investigación |
| Cabello, textura | trenzado corto | decisión de diseño visual, sin atestación localizada; revisable por la investigación |
| Piel | oliva media | decisión de diseño visual, sin atestación localizada; revisable por la investigación |
| Ojos | gris oscuro | decisión de diseño visual, sin atestación localizada; revisable por la investigación |

## 2. Detalle reconocible

**Reina de las amazonas + escudo.**

Dones declarados en `personajes.json`: Reina de las amazonas; Guerrera legendaria sin miedo al combate.

Ícono de la carta en la colección: `escudo_amazona`. Dependencia del identificador en la matriz: 8 de 10.

## 3. Acción y pose

Mirada hacia fuera de cuadro y postura de campo; no combate explícito.

Dirección corporal: Perfil tres cuartos de defensa.

Es la acción de la ficha y no se cambia. Si la acción no se puede representar sin agregar un objeto que no está en el inventario de la §5, frenar y avisar.

**Y al revés, que es el caso que falló tres veces:** si un objeto exigido de la §5 no entra en la pose tal como está descripta, **el objeto no se descarta**. Se ajusta la pose lo mínimo para que entre, conservando la dirección corporal y la diagonal. Una silueta de carrera con los dos puños cerrados no deja mano para un bastón, y la salida no es correr sin el bastón: es que una mano lo lleve. Declarar el ajuste en el preflight. Una pista condicional sólo se exige si se cumple su condición; las alternativas con «o» se conservan como alternativas, sin exigir todas a la vez.

## 4. Silueta y composición

- **Firma de silueta:** Escudo de amazona separado del torso + postura amplia + armadura con geometría distinta a Atenea.
- **Composición:** Escudo ocupa un lateral y la postura amplia abre la base; evitar simetría arquitectónica de Atenea.
- **Densidad visual:** alta (matriz: 8 de 10).

- **Cuerpo, y esto manda sobre cualquier intuición:** entrado en años, corpulento, con masa evidente, hombros anchos, de escala algo mayor que humana.

La contextura sale de acá y no de lo que el personaje representa. Un dios no es corpulento por ser dios, ni un héroe es musculoso por ser héroe: si estos valores piden un cuerpo liviano, va un cuerpo liviano. **Sin abdominales marcados, sin deltoides separados, sin bíceps de gimnasio y sin espalda en V** salvo que la masa y los hombros de arriba lo pidan expresamente.

Los quince ejes completos, como límites de diseño y no como sugerencia (EV edad visual, MC masa corporal, EA escala aparente, AF angulosidad facial, CO contorno superior, AC apertura corporal, DP dinamismo de pose, VD verticalidad, DV densidad visual, OV oscuridad, DI dependencia del identificador, AN anchura de hombros, PF protagonismo de fondo, RM rigidez de materiales, RA rareza anatómica):

| EV | MC | EA | AF | CO | AC | DP | VD | DV | OV | DI | AN | PF | RM | RA |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 7 | 7 | 7 | 7 | 1 | 7 | 4 | 6 | 8 | 5 | 8 | 7 | 4 | 9 | 1 |

Prueba de silueta: reducida a mancha negra, tiene que seguir distinguiéndose de los personajes de la §7.

## 5. Inventario cerrado

Lo único que puede verse:

1. **Reina de las amazonas + escudo** — identificador principal. ADN.
2. **Pistas secundarias autorizadas:** armadura de campo y vocabulario amazona ya definido. ADN. Subordinadas al identificador. Respetar las condiciones y alternativas del texto: «si hace falta» y «cuando corresponda» no exigen presencia incondicional; «o» no exige ambas opciones.
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

Protagonismo de fondo asignado: 4 de 10, o sea que el fondo es prescindible: mínimo suficiente y nada más.

**Sin** pedestal de roca ni acantilado heroico, **sin** templo griego de decoración, **sin** Olimpo, **sin** cielo azul con nubes por defecto, **sin** arquitectura de fantasía, **sin** paisaje panorámico que compita en nitidez. Quince de las treinta y una imágenes anteriores tenían el pedestal y once el templo.

El fondo va con profundidad de campo real: menos nitidez y menos contraste que el personaje. Es el recurso principal para cumplir la jerarquía personaje → identificador → contexto.

## 7. Separación obligatoria

**Preparación textual anti-clonación: DOCUMENTADA.** Tres o más riesgos justificados y separadores de silueta, pose y composición; la prueba visual de silueta, pose y avatar sigue pendiente.

**Contra Atenea.**

| | Pentesilea | Atenea |
|---|---|---|
| Cabello | negro | castaño ceniza |
| Textura | trenzado corto | ondulado recogido compacto |
| Piel | oliva media | oliva clara |
| Ojos | gris oscuro | gris claro |

Silueta de Atenea, para no repetirla: casco/cresta + escudo desplazado + línea de lanza o arma defensiva sólo si la referencia aprobada la conserva.

Pose de Atenea, para no repetirla: escudo en diagonal baja y mano libre indicando estrategia; no combate ni simetría de estatua.

Ejes numéricos que ya los separan: apertura corporal 7 contra 4, edad visual 7 contra 5, masa corporal 7 contra 5, oscuridad 5 contra 3.

**Atención: 10 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** figuras femeninas armadas y defensivas.
**Filtro numérico:** distancia ponderada 1.128; misma morfología y lectura; riesgo numérico bajo. No sustituye la comparación textual.

- **Separador de silueta:** Pentesilea: escudo de amazona separado del torso + postura amplia + armadura con geometría distinta a Atenea. Cuerpo: adulta madura; atlética fuerte. Frente a Atenea: casco/cresta + escudo desplazado + línea de lanza o arma defensiva sólo si la referencia aprobada la conserva. Cuerpo: adulta joven-madura; atlética sin hipermusculatura. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Pentesilea: mirada hacia fuera de cuadro y postura de campo; no combate explícito. Frente a Atenea: escudo en diagonal baja y mano libre indicando estrategia; no combate ni simetría de estatua. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Pentesilea: escudo ocupa un lateral y la postura amplia abre la base; evitar simetría arquitectónica de Atenea. Frente a Atenea: arquitectura corporal firme con aire alrededor del escudo y de la mano que guía la lectura. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo pentesilea, comparación Atenea; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Artemisa.**

| | Pentesilea | Artemisa |
|---|---|---|
| Cabello | negro | castaño muy oscuro |
| Textura | trenzado corto | lacio recogido alto |
| Piel | oliva media | canela |
| Ojos | gris oscuro | ámbar |

Silueta de Artemisa, para no repetirla: arco largo rompiendo un lateral + cuerpo de cazadora en eje diagonal + capa corta o faldón práctico.

Pose de Artemisa, para no repetirla: arco en reposo hacia abajo; calma vigilante, no disparo ni combate.

Ejes numéricos que ya los separan: edad visual 7 contra 4, masa corporal 7 contra 4, apertura corporal 7 contra 4, densidad visual 8 contra 5.

**Por qué se controla este par:** figuras femeninas de campo con armamento.
**Filtro numérico:** distancia ponderada 1.732; misma morfología y lectura; riesgo numérico bajo. No sustituye la comparación textual.

- **Separador de silueta:** Pentesilea: escudo de amazona separado del torso + postura amplia + armadura con geometría distinta a Atenea. Cuerpo: adulta madura; atlética fuerte. Frente a Artemisa: arco largo rompiendo un lateral + cuerpo de cazadora en eje diagonal + capa corta o faldón práctico. Cuerpo: adulta joven; atlética ligera. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Pentesilea: mirada hacia fuera de cuadro y postura de campo; no combate explícito. Frente a Artemisa: arco en reposo hacia abajo; calma vigilante, no disparo ni combate. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Pentesilea: escudo ocupa un lateral y la postura amplia abre la base; evitar simetría arquitectónica de Atenea. Frente a Artemisa: espacio negativo claro delante de la mirada; el arco debe romper el contorno sin encerrarla. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo pentesilea, comparación Artemisa; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Skadi.**

| | Pentesilea | Skadi |
|---|---|---|
| Cabello | negro | castaño muy oscuro |
| Textura | trenzado corto | trenzado contenido |
| Piel | oliva media | clara pálida |
| Ojos | gris oscuro | gris hielo |

Silueta de Skadi, para no repetirla: esquís/tablas largos en diagonal + arco en reposo + piernas muy definidas por postura de montaña.

Pose de Skadi, para no repetirla: como frenando sobre nieve; arco en reposo.

Ejes numéricos que ya los separan: protagonismo de fondo 4 contra 9, dinamismo de pose 4 contra 8, verticalidad 6 contra 3.

**Atención: 12 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** mujeres fuertes de equipo de campo.
**Filtro numérico:** distancia ponderada 1.207; misma morfología y lectura; riesgo numérico bajo. No sustituye la comparación textual.

- **Separador de silueta:** Pentesilea: escudo de amazona separado del torso + postura amplia + armadura con geometría distinta a Atenea. Cuerpo: adulta madura; atlética fuerte. Frente a Skadi: esquís/tablas largos en diagonal + arco en reposo + piernas muy definidas por postura de montaña. Cuerpo: adulta madura; atlética alta y de mayor masa que Artemisa. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Pentesilea: mirada hacia fuera de cuadro y postura de campo; no combate explícito. Frente a Skadi: como frenando sobre nieve; arco en reposo. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Pentesilea: escudo ocupa un lateral y la postura amplia abre la base; evitar simetría arquitectónica de Atenea. Frente a Skadi: gran espacio negativo de montaña, con diagonales largas que no choquen con el borde 3:4. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo pentesilea, comparación Skadi; contrastes derivados del ADN y la matriz, sin nuevo diseño.

Criterio de la ficha: Atenea y Artemisa. Diferenciar por mayor masa física, menos simetría y energía de campo.

La diferencia no puede depender sólo del color, del fondo, del objeto sostenido, del peinado ni de una prenda. Matriz §4.1: el objeto no salva un clon.

## 8. Encuadre

Vertical 3:4. Figura al 70–80% del alto del cuadro. Zona limpia detrás de la cabeza o del foco principal.

Avatar circular, como restricción invisible: Rostro + borde característico del escudo. No se dibuja ningún círculo, medallón, marco, inset ni retrato secundario.

## 9. Registro

Cálido, despierto, concentrado. No hace falta que sonría. Sin amenaza, sin crueldad, sin solemnidad genérica repetida de otra carta. La emoción sale de la historia del personaje y de lo que está haciendo.

## 10. Contaminación a evitar

**Pendiente de la investigación** del lote correspondiente de `Documentacion/prompt_investigacion_85.md`, campo `contaminacion_pop`. No bloquea la generación, pero dejarlo vacío es aceptar el riesgo a ciegas: la contaminación de cultura pop fue la falla más frecuente de la tanda anterior y la más difícil de ver desde adentro.

Nada de Marvel, Disney, DC, anime conocido ni videojuegos, sea o no de esta lista.

## 11. Antes de generar

Mostrar cinco líneas y esperar OK: qué se ve, cuál es el detalle reconocible, el inventario con su fuente, contra quién se separa y con qué diferencia concreta, y de dónde sale el escenario.

Después de generar, declarar cuatro cosas: qué objetos quedaron en la imagen que no estaban en el inventario; **qué elementos exigidos de la §5 no aparecieron y por qué, qué condiciones no se cumplieron y qué alternativas se usaron**; qué campos de esta orden no se cumplieron; y los once puntos del gate de `estilo_visual_aprobado.md` §9, que ahora son doce.

El segundo control es tan importante como el primero y es el que faltaba hasta el 2026-09-14: una imagen puede cumplir el inventario cerrado al pie de la letra y seguir siendo una carta fallada por no mostrar nada de lo que hace reconocible al personaje.
