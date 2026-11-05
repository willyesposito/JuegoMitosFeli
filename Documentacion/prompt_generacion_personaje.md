# Instrucciones de generación de imagen por personaje

> **Criterio visual vigente — 2026-11-05: coherencia con Frigg.** Todos los personajes deben tener apariencia humana creíble, cercana a una persona real, con el mismo grado de realismo de Frigg en rostros, anatomía, materiales e iluminación. Mantener magia, edad e identidad individual. Frigg es la referencia común, no una excepción. Quedan reemplazadas las instrucciones anteriores de acabado de animación 3D, ojos grandes, piel plástica y rechazo del realismo; no copiarlas al prompt aunque aparezcan en órdenes generadas o notas históricas. Leer `Documentacion/estilo_visual_aprobado.md`, abrir la imagen del personaje y `Produccion/reconstrucciones_2026-11-04/frigg/propuesta.png` antes de editar. Casiopea: cinco estrellas principales aisladas en W inequívoca; la constelación tiene prioridad sobre la forma del respaldo. Las nuevas versiones quedan pendientes de aprobación y las anteriores se conservan. Registro: `Produccion/revision_coherencia_2026-11-05/README.md`.


**Regla vigente — 2026-11-04: riqueza narrativa e identidad mítica.** Priorizar que se entienda quién es el personaje y qué episodio representa. Se permiten prendas de cortes distintos, capas, tejidos, bordados, cierres, equipo, desgaste y objetos narrativos cuando aporten identidad o sentido a la escena; no hay un máximo fijo de prendas ni de detalles. Antes de generar, registrar los detalles elegidos en la ficha o el preflight y distinguir: (a) atributo o episodio respaldado, citando fuente; (b) interpretación artística autorizada, sin presentarla como dato del mito. La autorización general de Willy permite estas decisiones de diseño sin pedir aprobación por cada cierre o material. Para nuevos poderes, animales, símbolos de identidad o hechos narrativos, verificar la fuente y actualizar la ficha antes de dibujarlos. No agregar por rutina ni copiar el mismo kit entre personajes. Mantener rostro, identificador, acción, silueta y jerarquía legibles. Revisar también las omisiones de elementos exigidos; respetar condiciones y alternativas. Esta regla reemplaza las prohibiciones generales de adornos, el inventario cerrado absoluto y la base lisa obligatoria. Las exclusiones específicas contra errores míticos, anacronismos y clones siguen vigentes salvo decisión posterior expresa. La calibración común de acabado se actualizó el 2026-11-05: seguir Documentacion/estilo_visual_aprobado.md.

Detalle y decisiones individuales: `Documentacion/criterio_riqueza_narrativa_2026-11-04.md`. Ante contradicción con restricciones anteriores de detalle, rige esta decisión.

**Reescrito 2026-09-14.** Reemplaza la versión anterior, cuyo punto 6 mandaba usar las
imágenes aprobadas de Zeus, Atenea, Iris y Teseo como referencia visual. Esa instrucción
produjo el clon Teseo → Hermes → Perseo y queda derogada. Ver `memoria_fallas_generacion_imagenes.md`.

---

## 0. Cómo funciona esto, y por qué el formato es el que es

Intervienen **dos modelos, no uno**:

1. el que lee el repo y escribe un párrafo de texto;
2. el generador de imágenes, que recibe ese párrafo **y nada más**. No ve el repo, no vio
   las otras cartas, no leyó ninguna guía.

Todo lo que el repo diga tiene que sobrevivir el achique a ese párrafo. De ahí salen las
tres reglas de método que gobiernan este archivo:

- **Nada de indirección.** El lector abre dos archivos chicos y ninguno más. Apuntarlo a
  `personajes.json` (334 KB) o al ADN completo (97 KB) garantiza truncamiento silencioso.
- **Nada de referencias visuales.** No se le pasa ni se le hace abrir ninguna imagen de otro
  personaje. Para no repetir una cara hay que mirarla, y lo que sobrevive al párrafo es el
  vocabulario, no la intención de evitarla.
- **Todo en positivo.** "Que no se parezca a Perseo" no es ejecutable: el generador no tiene
  a Perseo. Sí es ejecutable "pelo castaño ceniza lacio recogido en rodete bajo, 40 años".
  Las prohibiciones existen igual, pero como control de quien revisa, no como plan de dibujo.

## 1. Qué se lee, y nada más

1. `Produccion/<id>.md` — la orden de producción del personaje. Cerrada, sin decisiones
   pendientes, ~2 páginas.
2. `Documentacion/estilo_visual_aprobado.md` — el estilo, en prosa, ~3 páginas.

Las 85 órdenes ya están precompiladas. `Documentacion/indice_ordenes_produccion.md` las lista
con su estado y las decisiones de identidad de cada una.

Si alguna orden dejara de existir, **no se genera**: se arma primero, con los 20 campos de la §3
de `skills/nuevo-personaje-mitos/SKILL.md`, o se corre `herramientas/generar-ordenes.py`.

## 2. Prohibido completar huecos

Si la orden tiene un `[FALTA: ...]`, o algo resulta ambiguo o contradictorio, **frenar y
avisar**. No completar con conocimiento mitológico general, arquetipos de fantasía, cultura
pop ni analogía con otro personaje. `CLAUDE.md` §2.4.

## 3. Preflight: cinco líneas antes de generar

Antes de llamar al generador, mostrar y **esperar OK**:

- **Se ve:** los 4 a 6 rasgos esenciales.
- **Detalle reconocible:** cuál es y cómo entra en la composición.
- **Inventario:** todo objeto visible, con su fuente en la orden.
- **Separación:** contra qué personaje y con qué diferencia concreta de silueta y pose.
- **Escenario:** qué es y por qué sale de la ficha.

Es el control más barato del proceso. Cinco líneas leídas evitan una generación gastada.

**Ejecuciones automatizadas con aprobación preautorizada:** si la tarea que invoca este archivo
declara de forma explícita que el OK ya está otorgado, el preflight se hace igual pero no se
detiene la ejecución para esperar respuesta.

### 3.1. Compilar antes de generar

La orden de producción es la fuente de verdad, pero **no se copia entera al generador**. El modelo
que lee el repo la comprime primero en un prompt visual corto. El generador recibe sólo lo que
tiene que dibujar, en este orden:

1. estilo fijo de la colección, en 2 o 3 frases;
2. cuerpo, edad, rostro y cabello;
3. pose, silueta y encuadre;
4. identificador principal y hasta dos pistas secundarias;
5. vestimenta, en **una sola frase corta**;
6. escenario y fenómeno mágico;
7. hasta cinco prohibiciones críticas que hayan fallado de verdad en ese personaje.

No volcar al prompt tablas, historia del método, comparaciones numéricas, listas largas de
prohibiciones ni explicaciones de por qué existe una regla. Eso sirve para decidir y auditar,
no para dibujar.

### 3.2. Vestimenta con identidad y función

Aplicar la regla narrativa vigente. Definir prendas, cortes, tejidos, desgaste, cierres y detalles por personaje; evitar repetir la misma túnica cambiando el color. No hay máximo fijo de prendas ni accesorios. Conservar jerarquía visual y explicar qué aporta cada detalle. Registrar en el preflight cuáles provienen de fuentes y cuáles son diseño artístico autorizado. Nuevos poderes, animales o episodios requieren verificación e incorporación a la ficha. La ropa puede contribuir al reconocimiento sin sustituir rostro, pose y acción propios.

## 4. Generación

Cada intento produce una sola imagen. Vertical 3:4. Figura al 70–80% del alto del cuadro, pies
incluidos cuando la familia de encuadre lo pida, zona limpia detrás de la cabeza. Sin texto ni
pseudo-texto, sin marcos, sin paneles, sin inset, sin retrato secundario, sin nada que parezca
interfaz. La preparación para el recorte circular es una restricción invisible de encuadre:
**nunca se pide un avatar como contenido visible.**

El objetivo de una sesión es **terminar un personaje**, no terminar un intento. Si la imagen
falla el control posterior por un problema corregible de generación, ajustar sólo las
instrucciones responsables del fallo y generar otro intento del **mismo personaje**. No pasar a
otro personaje hasta aprobar éste.

No regenerar a ciegas con el mismo prompt. Cada reintento tiene que declarar internamente qué
falló y qué cambió. Frenar sólo ante una contradicción real de las fuentes, un [FALTA] necesario
o una limitación técnica que impida continuar.

## 5. Declaración posterior

Después de generar, con la imagen abierta y mirada de verdad:

1. qué objetos quedaron en la imagen que no estaban en el inventario del preflight;
2. qué campos de la orden no se cumplieron;
3. los doce puntos del gate de estilo de `estilo_visual_aprobado.md` §9.
4. qué elementos autorizados de la orden no aparecieron en la imagen, y por qué.

Un `NO` o un `NO VERIFICADO` impide aprobar esa imagen, pero **no detiene por sí solo la
sesión**. Si el fallo es corregible desde el prompt o mediante edición de la misma imagen,
corregir y volver a evaluar al mismo personaje. No reinterpretar el canon para salvar el
resultado ni pasar a otro personaje. La sesión se detiene sin imagen aprobada sólo por un
bloqueo real de fuente o una limitación técnica.

## 6. Blacklist permanente

Aplica siempre, salvo autorización expresa en la orden del personaje. Sale de las fallas
efectivamente observadas en las 31 imágenes producidas hasta hoy, con la cuenta de cuántas
incurrieron en cada una.

**Composición y escenario**

- roca o acantilado como pedestal heroico (15 de 31);
- templo griego en acantilado como decoración de fondo (11 de 31);
- Olimpo, nubes y cielo azul como fondo automático por ser una divinidad griega;
- castillo o arquitectura de fantasía tipo cine épico (Loki, Thor);
- paisaje panorámico que compite en nitidez y contraste con el personaje;
- pose de objeto elevado más otra mano abierta hacia la cámara;
- frontalidad majestuosa genérica.

**Identidad**

- la misma cara con otro peinado, otro casco, otra barba o otro accesorio;
- el mismo cuerpo con otro objeto en la mano;
- rostro oval castaño por defecto: si la orden no declara pelo y piel, la orden está incompleta;
- clonación facial dentro de una dupla o un grupo.

**Cultura pop.** Es la contaminación más frecuente y la más difícil de ver desde adentro.
Casos ya ocurridos: Thor de Marvel, Loki de Marvel, Sif como Rapunzel de *Enredados*, una
valquiria como Merida de *Valiente*. Nada de Marvel, Disney, DC, anime conocido ni videojuegos.

**Invenciones**

- objetos, animales, símbolos, armas, tatuajes, cuernos, alas, tocados, joyas, broches,
  emblemas, remaches o calzado sin traza a la ficha o al diseño narrativo documentado en el preflight;
- alas anatómicas cuando la ficha dice capa de plumas (Freya);
- iconografía moderna o anacrónica: galaxias espirales, Vía Láctea de astrofotografía,
  mapas del tesoro con rosa de los vientos y una X;
- pelo o ropa multicolor porque el personaje se relacione con la luz o el arcoíris (Iris);
- pelo de color inventado sin respaldo en la orden (Poseidón);
- pseudo-texto, runas o inscripciones decorativas.

**Vestuario por mitología.** El vocabulario visual de una mitología no es un uniforme. El kit
"nudo celta más cuello de piel más broche redondo más botas envueltas" se repitió en seis
cartas nórdicas y no puede volver a repetirse.
