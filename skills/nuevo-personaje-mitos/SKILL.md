---
name: nuevo-personaje-mitos
display_name: Nuevo personaje Mitos
description: Genera una única ilustración de personaje de Mundo de Mitos estrictamente desde el ADN y canon visual del repo, con preflight anti-clonación y sin inventar rasgos ni escenarios.
---

# Skill — Nuevo personaje Mitos

## 0. Primer paso operativo obligatorio — historial de fallas

Antes de extraer fichas, diseñar, redactar un prompt, preparar el preflight o llamar al generador, **leer completo** [Documentacion/memoria_fallas_generacion_imagenes.md](../../Documentacion/memoria_fallas_generacion_imagenes.md) desde la rama solicitada. Esta lectura también es obligatoria antes de modificar esta skill.

- Si el archivo no está disponible o la salida se trunca, completar la lectura por partes. Si no es posible, **frenar**.
- Extraer las fallas aplicables al personaje y convertirlas en controles verificables del intento actual.
- No usar imágenes fallidas como canon o referencia de estilo.
- No generar para comprobar si una duda se resuelve sola.
- Las instrucciones explícitas de Willy delimitan escritura, cantidad de imágenes y publicación. Esta skill no amplía esos permisos.


## Invocación

Activar esta skill cuando Willy diga una variante equivalente a:

`Usá Nuevo personaje Mitos para <PERSONAJE>`

Si falta el nombre del personaje, pedir únicamente ese dato.

La invocación completa debe bastar. No pedir que el usuario copie prompts, pegue fichas ni reconstruya decisiones ya guardadas en el repo.

---

## Objetivo

Generar **UNA sola imagen** de un personaje de `willyesposito/JuegoMitosFeli` respetando estrictamente el canon y ADN visual del repo.

La prioridad de la skill es, en este orden:

1. fidelidad al personaje definido en el repo;
2. diferenciación real respecto del resto del roster;
3. coherencia con el lenguaje visual aprobado de la colección;
4. atractivo de la ilustración.

Una imagen atractiva pero infiel **es un fallo**.

---

## Principio rector

**La imagen sale del repo, no del conocimiento general del modelo sobre mitología.**

No completar huecos mediante:

- conocimiento mitológico externo;
- arquetipos de fantasía;
- cultura pop;
- películas, series, cómics o videojuegos;
- asociaciones visuales automáticas;
- imágenes generadas previamente de otros personajes.

Si un elemento no está autorizado por las fuentes del repo, no debe aparecer.

---

## 1. Carga obligatoria de fuentes

Antes de redactar el prompt de imagen, leer desde la rama vigente del repo, como mínimo:

1. `CLAUDE.md`
2. `MEMORY.md`
3. `Documentacion/guia_visual_maestra_v2_1.md`
4. `Documentacion/adn_visual_personajes_v1.md`
5. `Documentacion/matriz_adn_visual_numerica_v1.md`
6. `Documentacion/referencia_visual_zeus_aprobada.md`
7. `Documentacion/roster_personajes_v3.md`
8. `personajes.json`

Si existe una referencia visual aprobada específica del personaje objetivo, leerla también y darle precedencia en decisiones puramente visuales de ese personaje.

No afirmar que se leyó un archivo si no se pudo abrir realmente. La descarga y una salida truncada no equivalen a lectura: leer las reglas generales completas y la ficha completa del objetivo y de cada personaje de riesgo. Recuperar por partes cualquier tramo necesario omitido. En el preflight declarar qué fuentes y secciones se leyeron y la rama utilizada.

**Referencia real obligatoria:** abrir e inspeccionar visualmente la imagen aprobada de Zeus antes de redactar el preflight. Leer su Markdown no alcanza. Si existe una referencia aprobada específica del objetivo, inspeccionarla también. Si la imagen necesaria no puede abrirse, frenar y pedir su ubicación o adjunto. No inventar una ruta ni suponer que un adjunto de otro chat es accesible.

### Precedencia

En caso de tensión entre fuentes:

- `personajes.json` y `roster_personajes_v3.md`: canon, identidad, objetos, mitología, tier y contenido funcional;
- ficha individual en `adn_visual_personajes_v1.md`: anatomía, silueta, pose, composición, identificadores y riesgos de parecido;
- referencia visual aprobada específica: apariencia concreta ya validada para ese personaje;
- `guia_visual_maestra_v2_1.md`: lenguaje visual común;
- `matriz_adn_visual_numerica_v1.md`: control comparativo y colisiones;
- referencia aprobada de Zeus: **únicamente nivel de acabado general**, salvo cuando el personaje objetivo sea Zeus.

No inventar una solución para reconciliar contradicciones. Si hay una contradicción real que cambia la imagen, detener la generación y señalarla.

---

## 2. Regla crítica sobre referencias visuales

Las imágenes aprobadas de otros personajes sirven para entender el **nivel de acabado**, nunca como plantilla espacial.

Para generar un personaje nuevo:

- no editar una imagen de otro personaje;
- no usar una imagen de otro personaje como base de transformación;
- no transferir su pose;
- no transferir su fondo;
- no transferir su cámara;
- no transferir su distribución de masas;
- no transferir su paleta;
- no transferir vestuario, cara, cabello o accesorios.

**Especialmente Zeus:** su imagen aprobada transmite calidad, legibilidad, expresividad, acabado pulido y materialidad. No transmite al resto del roster su Olimpo, cielo, templo, roca, perspectiva baja, manto, túnica, oro, brazo abierto ni pose con objeto elevado.

La generación de un personaje nuevo debe comenzar **desde texto y desde cero**, no desde una imagen maestra de otro personaje.

---

## 3. Extracción del ADN del personaje

Antes de generar, construir internamente una ficha de producción con estos campos exactos:

- personaje;
- mitología;
- tier;
- morfología / familia de encuadre;
- firma de silueta;
- densidad visual;
- edad aparente;
- contextura / masa corporal;
- geometría de rostro;
- cabello / anatomía superior equivalente;
- dirección corporal;
- acción y pose;
- apertura corporal;
- composición;
- espacio negativo;
- identificador principal;
- pistas secundarias autorizadas;
- escenario autorizado;
- requisitos del avatar circular;
- riesgos de parecido.

No completar campos ausentes por intuición. Usar `[FALTA: ...]` y frenar si el faltante afecta materialmente la generación.

---

## 4. Whitelist: qué SÍ puede entrar en la imagen

Antes de generar, convertir la ficha en una **lista positiva cerrada**.

El prompt de imagen sólo puede contener elementos derivados de:

1. rasgos obligatorios de la ficha individual;
2. pistas secundarias expresamente autorizadas;
3. ambiente necesario para la acción definida;
4. lenguaje general de acabado de la guía maestra.

Todo objeto, animal, símbolo, arma, tatuaje, tocado, color de cabello, efecto mágico, edificio, vehículo, criatura o decoración debe poder rastrearse a una fuente del repo.

Si no puede rastrearse, se excluye. Esta trazabilidad también alcanza a broches, cierres visibles, remaches ornamentales, insignias, joyas, calzado y dibujos del objeto principal. Un detalle funcional sin contenido identificatorio puede simplificarse; no inventar motivos ni transformar esa simplificación en nuevo canon. Mostrar una lista objeto/detalle → fuente; si falta una decisión material que no pueda omitirse, marcar `[FALTA: ...]` y frenar.

---

## 5. Blacklist: qué NO puede aparecer

Aplicar siempre estas prohibiciones salvo autorización expresa del personaje objetivo:

- Olimpo como fondo automático;
- templo griego como decoración automática;
- cielo azul con nubes como fondo automático;
- acantilado o roca-pedestal heroica automática;
- pose `objeto elevado + otra mano abierta hacia cámara`;
- frontalidad majestuosa genérica;
- túnica blanca + manto azul + oro como uniforme de dioses griegos;
- coronas o laureles inventados;
- tatuajes inventados;
- cuernos inventados;
- alas inventadas;
- armas inventadas;
- animales acompañantes inventados;
- efectos mágicos inventados;
- pelo multicolor porque el personaje se relacione con colores, luz o arcoíris;
- rasgos tomados de Marvel, Disney, DC, anime conocido, videojuegos u otra franquicia;
- iconografía moderna no documentada;
- pseudo-texto o inscripciones;
- el mismo rostro base de otro personaje;
- el mismo cuerpo base con distinto accesorio;
- el mismo fondo usado para indicar simplemente una mitología.

**Regla de escenario:** el escenario debe pertenecer al personaje o a su acción. La mitología por sí sola no autoriza arquitectura, paisaje ni clima.

---

## 6. Control anti-clonación obligatorio

Usar `matriz_adn_visual_numerica_v1.md` y las fichas textuales para detectar al menos los **3 personajes de mayor riesgo visual** para el objetivo.

La comparación no se resuelve sólo por distancia numérica. Cruzar:

- morfología;
- lectura visual;
- edad;
- masa y anchura;
- geometría facial;
- contorno superior;
- apertura corporal;
- dinamismo;
- verticalidad;
- materialidad;
- identificador;
- pose;
- contexto semántico.

Para cada personaje de riesgo, definir al menos:

- un separador de silueta;
- un separador de pose;
- un separador de composición.

El personaje objetivo no pasa a generación si su diferencia depende solamente de:

- color;
- fondo;
- cambiar el objeto sostenido;
- cambiar el peinado;
- cambiar una prenda superficial.

### Prueba de silueta

Imaginar la figura como una mancha negra. Debe seguir diferenciándose de los principales riesgos de parecido.

### Prueba de pose

No reutilizar una pose estructural de una referencia aprobada o de un personaje cercano.

### Prueba de avatar

El tercio superior debe conservar rostro/foco principal + una pista identificatoria sin depender del fondo completo. En el prompt esto se expresa únicamente mediante posiciones y espacio disponible. No pedir un avatar, retrato secundario, círculo, medallón, inset, panel o interfaz como contenido visible. Las duplas/grupos oficiales conservan su número de integrantes; nunca duplicar al mismo sujeto para mostrar una vista secundaria.

---

## 7. Construcción del escenario

El fondo se diseña **después** del personaje, nunca antes.

Orden:

1. acción del personaje;
2. espacio que esa acción necesita;
3. pistas ambientales autorizadas;
4. fondo mínimo suficiente.

El fondo debe ser subordinado y específico.

Ejemplos de lógica correcta:

- si la ficha habla de flota, la flota puede estructurar el fondo;
- si habla de telar, la escena puede ser doméstica;
- si habla de Yggdrasil, la corteza/rama puede dominar el entorno;
- si no habla de Olimpo, no se agrega Olimpo por tratarse de una divinidad griega.

---

## 8. Lenguaje visual común que SÍ se hereda

De la guía maestra y de las referencias aprobadas puede heredarse:

- ilustración digital pulida;
- lectura inmediata;
- alto nivel de terminación;
- volumen claro sin fotorrealismo;
- expresividad facial;
- materialidad diferenciada;
- color y luz limpios;
- formas legibles a tamaño de carta;
- carácter coleccionable;
- aventura y personalidad sin amenaza;
- composición prevista para avatar circular.

No convertir estas propiedades en una composición única.

### Adecuación infantil positiva, independiente de seguridad

Comparar con la imagen real aprobada y exigir por separado:

- rostro expresivo y accesible, con caricatura moderada compatible con la edad del personaje;
- proporciones ilustradas y cabeza levemente agrandada cuando corresponda a su anatomía;
- formas limpias y volumen simplificado, sin anatomía cincelada ni poros o texturas fotográficas;
- materiales distinguibles mediante color, luz y grandes formas; el microdetalle no debe dominar;
- personalidad y aventura sin solemnidad uniforme, amenaza ni militarización adulta.

Una sonrisa y ausencia de violencia no prueban este gate. No imponer sonrisa a personajes cuya ficha exige otra emoción; la lectura infantil se resuelve en el diseño completo. “Adulto maduro”, “robusto” o un valor alto de rigidez no autorizan realismo adulto. La forma rectangular del rostro no exige dureza expresiva.

Ordenar el prompt: acabado infantil → identidad → acción/silueta → inventario cerrado → encuadre/contexto → exclusiones breves. Evitar repetir descripciones anatómicas o materiales que ahoguen el estilo. No usar “stylized realism”, “cinematic realism” ni “proud command” como instrucciones positivas.

---

## 9. Preflight obligatorio antes de llamar al generador

Mostrar al usuario el preflight completo, sin pedir aprobación adicional si todo está resuelto:

**Personaje:** <nombre>

**Debe verse:** 4–8 rasgos esenciales.

**No debe aparecer:** 4–8 contaminaciones principales relevantes para ese personaje.

**Separación:** principal personaje de riesgo + diferencia obligatoria de silueta/pose.

**Escenario:** una frase que explique por qué ese fondo surge del repo.

Añadir fuentes/alcance de lectura, observaciones de la referencia real, ficha de producción, inventario trazable y al menos tres comparaciones con separadores de silueta, pose y composición. Mostrar todos los gates, cada uno con evidencia concreta. Sólo entonces generar si todos pasan.

### Gate de producción

Sólo generar si todas son `SÍ`:

1. ¿La identidad visual está respaldada por el repo?
2. ¿Cada objeto importante está autorizado?
3. ¿El escenario está respaldado por la ficha o la acción?
4. ¿La pose pertenece al personaje y no a una referencia?
5. ¿Hay separadores claros frente a sus riesgos de parecido?
6. ¿El avatar puede conservar identidad?
7. ¿No se está usando otra imagen de personaje como base de transformación?
8. ¿No se agregó cultura pop ni iconografía externa?
9. ¿Se leyó completo el historial de fallas y se tradujeron las aplicables en controles de este intento?
10. ¿Se abrió visualmente la referencia real necesaria y se describió su acabado observado?
11. ¿El prompt exige adecuación infantil positiva en rostro, proporciones, volúmenes y materiales?
12. ¿La cantidad de sujetos es la del personaje oficial, sin duplicados, inset, paneles ni avatar visible?
13. ¿Incluye formato 3:4, encuadre completo y escala de la familia, margen de seguridad y cero texto?
14. ¿Los detalles pequeños también tienen trazabilidad o se omitieron?
15. ¿No hay faltantes materiales ni contradicciones que cambien la imagen?

Un SÍ del preflight confirma la preparación, nunca el resultado futuro. Si alguna respuesta es `NO` o `NO VERIFICADO`, **no generar**. Explicar el bloqueo exacto.

---

## 10. Generación

Una vez superado el preflight:

- generar **una sola ilustración**;
- formato vertical 3:4;
- sin texto visible;
- respetar cuerpo entero cuando la familia de encuadre lo requiera;
- priorizar personaje → identificador → contexto;
- mantener suficiente espacio negativo;
- conservar la zona alta útil para recorte, sólo como restricción invisible de encuadre;
- no generar variantes ni paneles comparativos;
- no mezclar dos personajes en una misma imagen salvo que el personaje oficial sea dupla o grupo.

Nunca generar una segunda imagen automáticamente para “corregir” una primera que salió mal. Si el resultado falla, detenerse y esperar una nueva instrucción del usuario.

---

## 11. Gate posterior obligatorio y criterio de fallo

Después de generar, abrir visualmente la imagen completa y compararla con la referencia real. Revisar también rostro, manos, identificador, cierres/adornos, pies y bordes a suficiente tamaño. No declarar éxito sólo porque se ejecutó el generador.

Mostrar esta tabla con `SÍ`, `NO` o `NO VERIFICADO` y evidencia visible por fila:

1. Formato 3:4 verificado por dimensiones reales.
2. Una escena y cantidad exacta de sujetos del personaje oficial; sin duplicado ni vista secundaria.
3. Cero texto/pseudo-texto, paneles, marcos o interfaz no autorizados.
4. Edad, anatomía, rostro, cabello y firma de silueta fieles.
5. Pose, dirección corporal y relación de la mano/acción con su destino verificables.
6. Identificador correcto, legible y sin iconografía inventada.
7. Vestimenta, objetos, accesorios y detalles pequeños dentro de la lista positiva.
8. Escenario autorizado y subordinado.
9. Cuerpo completo cuando corresponda, escala de encuadre y margen de seguridad.
10. Anti-clonación: comparar por separado rostro/cuerpo, silueta, pose y composición contra los riesgos.
11. Adecuación infantil positiva: comparar por separado rostro, proporciones, volúmenes y materiales con el acabado aprobado.
12. Seguridad emocional: sin amenaza, violencia ni contenido adulto.
13. Recorte de identidad comprobado: rostro/foco y pista propia permanecen completos y legibles.

Para el último control, probar un recorte de inspección en copia mediante una herramienta disponible, sin modificar la imagen ni generar otro activo. No presentar esa copia como ilustración adicional ni insertarla en la imagen. Si no se puede comprobar el recorte, declarar `NO VERIFICADO`, no SÍ por intuición.

**Basta un NO o NO VERIFICADO para detener la ejecución.** Un fallo visible determina `FALLIDO`; si sólo faltan comprobaciones, usar `NO VALIDADO`. No retocar, regenerar ni reinterpretar el canon para salvar el resultado. Sólo cuando todos los controles sean SÍ se puede decir “pasa la revisión”; la aprobación de Willy no se presume.

### Registro al fallar

Agregar una entrada al historial siguiendo su plantilla, preservando las anteriores, cuando la escritura esté autorizada. Registrar también errores de evaluación y falsos SÍ. Si está prohibido editar el repo, mostrar la entrada propuesta sin escribirla. Nunca afirmar que se guardó sin verificar la escritura. Una nueva instrucción para probar de nuevo habilita una única generación adicional, después de releer el historial y resolver los gates.

### Incumplimientos que invalidan la imagen

Una imagen se considera fallida si contiene cualquiera de estos problemas:

- rasgo no autorizado;
- escenario genérico de mitología no respaldado por la ficha;
- contaminación de otro personaje;
- pose clonada;
- cultura pop reconocible;
- identificador equivocado;
- objeto inventado;
- anatomía o edad incompatibles;
- fondo que compite con la identidad;
- pérdida de la firma de silueta;
- imposibilidad de obtener un avatar reconocible.

**Que la imagen sea linda no compensa ninguna de estas fallas.**

---

## 12. Ejemplo de invocación

`Usá Nuevo personaje Mitos para Agamenón.`

La skill debe leer el repo, preparar el preflight y generar una sola carta de Agamenón sin que Willy tenga que pegar ningún prompt adicional.
