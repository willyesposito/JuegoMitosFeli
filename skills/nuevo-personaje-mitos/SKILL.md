---
name: nuevo-personaje-mitos
display_name: Nuevo personaje Mitos
description: Genera una única ilustración de personaje de Mundo de Mitos estrictamente desde el ADN y canon visual del repo, con preflight anti-clonación y sin inventar rasgos ni escenarios.
---

# Skill — Nuevo personaje Mitos

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

No afirmar que se leyó un archivo si no se pudo abrir realmente.

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

Si no puede rastrearse, se excluye.

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

El tercio superior debe conservar rostro/foco principal + una pista identificatoria sin depender del fondo completo.

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

---

## 9. Preflight obligatorio antes de llamar al generador

Mostrar al usuario un bloque breve de control, sin pedir aprobación si todo está resuelto:

**Personaje:** <nombre>

**Debe verse:** 4–8 rasgos esenciales.

**No debe aparecer:** 4–8 contaminaciones principales relevantes para ese personaje.

**Separación:** principal personaje de riesgo + diferencia obligatoria de silueta/pose.

**Escenario:** una frase que explique por qué ese fondo surge del repo.

Después ejecutar automáticamente la generación.

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

Si alguna respuesta es `NO`, **no generar**. Explicar el bloqueo exacto.

---

## 10. Generación

Una vez superado el preflight:

- generar **una sola ilustración**;
- formato vertical 3:4;
- sin texto visible;
- respetar cuerpo entero cuando la familia de encuadre lo requiera;
- priorizar personaje → identificador → contexto;
- mantener suficiente espacio negativo;
- conservar la zona alta útil para avatar;
- no generar variantes ni paneles comparativos;
- no mezclar dos personajes en una misma imagen salvo que el personaje oficial sea dupla o grupo.

Nunca generar una segunda imagen automáticamente para “corregir” una primera que salió mal. Si el resultado falla, detenerse y esperar una nueva instrucción del usuario.

---

## 11. Criterio de fallo

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
