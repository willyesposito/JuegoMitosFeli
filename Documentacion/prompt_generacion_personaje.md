# Instrucciones de generación de imagen por personaje

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

## 4. Generación

Una sola imagen. Vertical 3:4. Figura al 70–80% del alto del cuadro, pies incluidos cuando
la familia de encuadre lo pida, zona limpia detrás de la cabeza. Sin texto ni pseudo-texto,
sin marcos, sin paneles, sin inset, sin retrato secundario, sin nada que parezca interfaz.
La preparación para el recorte circular es una restricción invisible de encuadre: **nunca se
pide un avatar como contenido visible.**

No generar una segunda imagen automáticamente para corregir la primera.

## 5. Declaración posterior

Después de generar, con la imagen abierta y mirada de verdad:

1. qué objetos quedaron en la imagen que no estaban en el inventario del preflight;
2. qué campos de la orden no se cumplieron;
3. los diez puntos del gate de estilo de `estilo_visual_aprobado.md` §8.

Un `NO` o un `NO VERIFICADO` en cualquiera detiene la ejecución. No retocar, no regenerar,
no reinterpretar el canon para salvar el resultado.

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
  emblemas, remaches o calzado que no estén en el inventario de la orden;
- alas anatómicas cuando la ficha dice capa de plumas (Freya);
- iconografía moderna o anacrónica: galaxias espirales, Vía Láctea de astrofotografía,
  mapas del tesoro con rosa de los vientos y una X;
- pelo o ropa multicolor porque el personaje se relacione con la luz o el arcoíris (Iris);
- pelo de color inventado sin respaldo en la orden (Poseidón);
- pseudo-texto, runas o inscripciones decorativas.

**Vestuario por mitología.** El vocabulario visual de una mitología no es un uniforme. El kit
"nudo celta más cuello de piel más broche redondo más botas envueltas" se repitió en seis
cartas nórdicas y no puede volver a repetirse.
