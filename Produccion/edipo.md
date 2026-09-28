# Orden de producción — Edipo

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
| Familia de encuadre | figura humana | ADN |
| Edad y contextura | Adulto maduro; contextura media. | ADN |
| Rostro y cabello | Rostro cuadrado estrecho y cabello corto oscuro. | ADN |
| Cabello, color | negro | ya declarado en el ADN, precisado sin contradecirlo |
| Cabello, textura | lacio | ya declarado en el ADN, precisado sin contradecirlo |
| Piel | oliva media | ya declarado en el ADN, precisado sin contradecirlo |
| Ojos | marrón muy oscuro | ya declarado en el ADN, precisado sin contradecirlo |

## 2. Detalle reconocible

**Esfinge/acertijo como segundo foco de lectura.**

Dones declarados en `personajes.json`: Ingenio agudo para resolver acertijos; Rey de Tebas por mérito propio.

Ícono de la carta en la colección: `llave_acertijo`. Dependencia del identificador en la matriz: 6 de 10.

## 3. Acción y pose

Observa y resuelve; postura estática de pregunta, no viaje ni amenaza.

Dirección corporal: Perfil tres cuartos dirigido hacia la Esfinge.

Es la acción de la ficha y no se cambia. Si la acción no se puede representar sin agregar un objeto que no está en el inventario de la §5, frenar y avisar.

**Y al revés, que es el caso que falló tres veces:** si un objeto exigido de la §5 no entra en la pose tal como está descripta, **el objeto no se descarta**. Se ajusta la pose lo mínimo para que entre, conservando la dirección corporal y la diagonal. Una silueta de carrera con los dos puños cerrados no deja mano para un bastón, y la salida no es correr sin el bastón: es que una mano lo lleve. Declarar el ajuste en el preflight. Una pista condicional sólo se exige si se cumple su condición; las alternativas con «o» se conservan como alternativas, sin exigir todas a la vez.

## 4. Silueta y composición

- **Firma de silueta:** Figura pensante de pie + mano en mentón y Esfinge fuera de eje; bastón sólo si funciona como símbolo general del acertijo humano y no como atributo personal inventado.
- **Composición:** Distancia clara entre Edipo y Esfinge; el vacío entre ambos funciona como espacio del acertijo.
- **Densidad visual:** media (matriz: 5 de 10).

- **Cuerpo, y esto manda sobre cualquier intuición:** entrado en años, de contextura media, atlética sin volumen, hombros de ancho medio, de escala humana.

La contextura sale de acá y no de lo que el personaje representa. Un dios no es corpulento por ser dios, ni un héroe es musculoso por ser héroe: si estos valores piden un cuerpo liviano, va un cuerpo liviano. **Sin abdominales marcados, sin deltoides separados, sin bíceps de gimnasio y sin espalda en V** salvo que la masa y los hombros de arriba lo pidan expresamente.

Los quince ejes completos, como límites de diseño y no como sugerencia (EV edad visual, MC masa corporal, EA escala aparente, AF angulosidad facial, CO contorno superior, AC apertura corporal, DP dinamismo de pose, VD verticalidad, DV densidad visual, OV oscuridad, DI dependencia del identificador, AN anchura de hombros, PF protagonismo de fondo, RM rigidez de materiales, RA rareza anatómica):

| EV | MC | EA | AF | CO | AC | DP | VD | DV | OV | DI | AN | PF | RM | RA |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 7 | 5 | 6 | 7 | 2 | 3 | 1 | 7 | 5 | 6 | 6 | 5 | 7 | 4 | 1 |

Prueba de silueta: reducida a mancha negra, tiene que seguir distinguiéndose de los personajes de la §7.

## 5. Inventario cerrado

Lo único que puede verse:

1. **Esfinge/acertijo como segundo foco de lectura** — identificador principal. ADN.
2. **Pistas secundarias autorizadas:** geometría del camino o del acertijo; no usar material de la tragedia excluida. ADN. Subordinadas al identificador. Respetar las condiciones y alternativas del texto: «si hace falta» y «cuando corresponda» no exigen presencia incondicional; «o» no exige ambas opciones.
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

Protagonismo de fondo asignado: 7 de 10, o sea que el contexto acompaña sin llevar peso.

**Sin** pedestal de roca ni acantilado heroico, **sin** templo griego de decoración, **sin** Olimpo, **sin** cielo azul con nubes por defecto, **sin** arquitectura de fantasía, **sin** paisaje panorámico que compita en nitidez. Quince de las treinta y una imágenes anteriores tenían el pedestal y once el templo.

El fondo va con profundidad de campo real: menos nitidez y menos contraste que el personaje. Es el recurso principal para cumplir la jerarquía personaje → identificador → contexto.

## 7. Separación obligatoria

**Preparación textual anti-clonación: DOCUMENTADA.** Tres o más riesgos justificados y separadores de silueta, pose y composición; la prueba visual de silueta, pose y avatar sigue pendiente.

**Contra Odiseo.**

| | Edipo | Odiseo |
|---|---|---|
| Cabello | negro | castaño oscuro con canas |
| Textura | lacio | ondulado marcado |
| Piel | oliva media | canela curtida |
| Ojos | marrón muy oscuro | gris verdoso |

Silueta de Odiseo, para no repetirla: capa o tela de viaje inclinada + postura levemente adelantada + mano activa señalando o calculando.

Pose de Odiseo, para no repetirla: gesto mental y de cálculo; mano activa antes que arma protagonista.

Ejes numéricos que ya los separan: dinamismo de pose 1 contra 4, dependencia del identificador 6 contra 3, contorno superior 2 contra 4, apertura corporal 3 contra 5.

**Atención: 11 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** adultos pensantes de pie; cercanía numérica.
**Filtro numérico:** distancia ponderada 0.933; misma morfología y lectura; riesgo numérico medio. No sustituye la comparación textual.

- **Separador de silueta:** Edipo: figura pensante de pie + mano en mentón y Esfinge fuera de eje; bastón sólo si funciona como símbolo general del acertijo humano y no como atributo personal inventado. Cuerpo: adulto maduro; contextura media. Frente a Odiseo: capa o tela de viaje inclinada + postura levemente adelantada + mano activa señalando o calculando. Cuerpo: adulto maduro; cuerpo fibroso, viajado y menos ceremonial que otros héroes. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Edipo: observa y resuelve; postura estática de pregunta, no viaje ni amenaza. Frente a Odiseo: gesto mental y de cálculo; mano activa antes que arma protagonista. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Edipo: distancia clara entre Edipo y Esfinge; el vacío entre ambos funciona como espacio del acertijo. Frente a Odiseo: reservar aire hacia la dirección donde piensa avanzar; menos armadura y menos frontalidad que los héroes guerreros. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo edipo, comparación Odiseo; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Heimdall.**

| | Edipo | Heimdall |
|---|---|---|
| Cabello | negro | rubio ceniza |
| Textura | lacio | recogido atrás |
| Piel | oliva media | clara dorada |
| Ojos | marrón muy oscuro | ámbar |

Silueta de Heimdall, para no repetirla: cuerno largo en diagonal + cuerpo erguido de centinela + arco de Bifröst en fondo.

Pose de Heimdall, para no repetirla: mano en el cuerno pero sin tocarlo obligatoriamente; inmovilidad vigilante.

Ejes numéricos que ya los separan: rigidez de materiales 4 contra 9, dependencia del identificador 6 contra 10, verticalidad 7 contra 10, oscuridad 6 contra 4.

**Atención: 11 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** adultos angulares de postura contenida y vigilancia; cercanía numérica.
**Filtro numérico:** distancia ponderada 0.944; misma morfología y lectura; riesgo numérico medio. No sustituye la comparación textual.

- **Separador de silueta:** Edipo: figura pensante de pie + mano en mentón y Esfinge fuera de eje; bastón sólo si funciona como símbolo general del acertijo humano y no como atributo personal inventado. Cuerpo: adulto maduro; contextura media. Frente a Heimdall: cuerno largo en diagonal + cuerpo erguido de centinela + arco de Bifröst en fondo. Cuerpo: adulto maduro; alto y de contextura contenida. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Edipo: observa y resuelve; postura estática de pregunta, no viaje ni amenaza. Frente a Heimdall: mano en el cuerno pero sin tocarlo obligatoriamente; inmovilidad vigilante. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Edipo: distancia clara entre Edipo y Esfinge; el vacío entre ambos funciona como espacio del acertijo. Frente a Heimdall: diagonal del cuerno cruza sin tapar rostro; Bifröst queda atrás y deja respirar la silueta. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo edipo, comparación Heimdall; contrastes derivados del ADN y la matriz, sin nuevo diseño.

**Contra Tyr.**

| | Edipo | Tyr |
|---|---|---|
| Cabello | negro | rubio oscuro |
| Textura | lacio | corto |
| Piel | oliva media | clara rosada |
| Ojos | marrón muy oscuro | azul gris |

Silueta de Tyr, para no repetirla: asimetría clara de brazos sin detalle gráfico + cinta de Fenrir formando una curva externa.

Pose de Tyr, para no repetirla: postura firme y voluntaria junto al lobo; no ataque ni herida explícita.

Ejes numéricos que ya los separan: dependencia del identificador 6 contra 9, rigidez de materiales 4 contra 7, dinamismo de pose 1 contra 3, protagonismo de fondo 7 contra 5.

**Atención: 11 de 15 ejes están dentro de un punto.** Son personajes genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, no de los números.

**Por qué se controla este par:** adultos sobrios junto a segundo sujeto; cercanía numérica.
**Filtro numérico:** distancia ponderada 0.978; misma morfología y lectura; riesgo numérico medio. No sustituye la comparación textual.

- **Separador de silueta:** Edipo: figura pensante de pie + mano en mentón y Esfinge fuera de eje; bastón sólo si funciona como símbolo general del acertijo humano y no como atributo personal inventado. Cuerpo: adulto maduro; contextura media. Frente a Tyr: asimetría clara de brazos sin detalle gráfico + cinta de Fenrir formando una curva externa. Cuerpo: adulto maduro; fuerte pero seco. Conservar este contraste anatómico/corporal además del atributo; no resolverlo sólo por color u objeto.
- **Separador de pose:** Edipo: observa y resuelve; postura estática de pregunta, no viaje ni amenaza. Frente a Tyr: postura firme y voluntaria junto al lobo; no ataque ni herida explícita. No sustituir la acción del objetivo por la del comparador.
- **Separador de composición:** Edipo: distancia clara entre Edipo y Esfinge; el vacío entre ambos funciona como espacio del acertijo. Frente a Tyr: curva de la cinta separada del torso y espacio limpio entre Tyr y Fenrir. Conservar la distribución y el espacio negativo del objetivo, no copiar los del comparador.

**Fuente de los separadores:** `Documentacion/anti_clonacion_lote_2026-09-28.json`, objetivo edipo, comparación Tyr; contrastes derivados del ADN y la matriz, sin nuevo diseño.

Criterio de la ficha: Odiseo. Diferenciar por escena estática de pregunta y diálogo visual, no estrategia en viaje.

La diferencia no puede depender sólo del color, del fondo, del objeto sostenido, del peinado ni de una prenda. Matriz §4.1: el objeto no salva un clon.

## 8. Encuadre

Vertical 3:4. Figura al 70–80% del alto del cuadro. Zona limpia detrás de la cabeza o del foco principal.

Avatar circular, como restricción invisible: Rostro concentrado + fragmento reconocible de la Esfinge o geometría del acertijo. No se dibuja ningún círculo, medallón, marco, inset ni retrato secundario.

## 9. Registro

Cálido, despierto, concentrado. No hace falta que sonría. Sin amenaza, sin crueldad, sin solemnidad genérica repetida de otra carta. La emoción sale de la historia del personaje y de lo que está haciendo.

## 10. Contaminación a evitar

**Pendiente de la investigación** del lote correspondiente de `Documentacion/prompt_investigacion_85.md`, campo `contaminacion_pop`. No bloquea la generación, pero dejarlo vacío es aceptar el riesgo a ciegas: la contaminación de cultura pop fue la falla más frecuente de la tanda anterior y la más difícil de ver desde adentro.

Nada de Marvel, Disney, DC, anime conocido ni videojuegos, sea o no de esta lista.

## 11. Antes de generar

Mostrar cinco líneas y esperar OK: qué se ve, cuál es el detalle reconocible, el inventario con su fuente, contra quién se separa y con qué diferencia concreta, y de dónde sale el escenario.

Después de generar, declarar cuatro cosas: qué objetos quedaron en la imagen que no estaban en el inventario; **qué elementos exigidos de la §5 no aparecieron y por qué, qué condiciones no se cumplieron y qué alternativas se usaron**; qué campos de esta orden no se cumplieron; y los once puntos del gate de `estilo_visual_aprobado.md` §9, que ahora son doce.

El segundo control es tan importante como el primero y es el que faltaba hasta el 2026-09-14: una imagen puede cumplir el inventario cerrado al pie de la letra y seguir siendo una carta fallada por no mostrar nada de lo que hace reconocible al personaje.
