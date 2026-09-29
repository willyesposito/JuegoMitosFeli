# Controles de contaminación pop disponibles — lote 2026-09-28

## Alcance y evidencia

Decisión de Willy: opción A, trabajar sólo con las fuentes existentes del repo. No se hizo investigación externa para este documento, ni se abrieron imágenes. No se agregan rasgos, objetos ni decisiones de diseño.

Universo cerrado: 57 órdenes del control local imagenes-faltantes-2026-09-28.json, en la rama claude/game-setup-v98pr1. Al revisar la sección 10 había 39 anotaciones pendientes y 18 específicas; Ares ya incorporaba investigación textual acotada previa. La auditoría anterior que contaba 40 pendientes quedó superada por esa incorporación.

Este documento ordena los controles del repo; no acredita que se hayan aplicado a una imagen. La preparación de controles y la inspección del resultado son comprobaciones distintas. La ausencia de una investigación específica no es por sí sola un bloqueo material, y tampoco confirma ausencia de contaminación.

## Controles que ya se pueden aplicar

1. **Identidad del objetivo.** Conservar anatomía, edad, rostro, cabello y cantidad de integrantes definidos en la sección 1. No sustituirlos por la apariencia de una versión moderna. Una contradicción de la propia orden sigue pendiente hasta su resolución.
2. **Acción y silueta.** Usar las secciones 3 y 4 para impedir que una pose, un cuerpo o una composición conocidos de otra obra reemplacen el diseño autorizado.
3. **Inventario trazable.** Aplicar la sección 5: no agregar armas, accesorios, emblemas, joyas, tatuajes, cuernos, alas, animales ni equipamiento ajenos a las fuentes. Conservar las alternativas y condiciones que la orden declara. No eliminar un atributo autorizado sólo porque también exista en una franquicia.
4. **Escenario y efectos.** Mantener el escenario derivado de la acción y los efectos trazables al identificador. Evitar fondos de mitología por defecto, arquitectura de fantasía, runas y efectos decorativos no autorizados conforme a las secciones 5 y 6.
5. **Separación interna.** Las comparaciones de la sección 7 controlan semejanzas entre personajes del repo. No equivalen a un relevamiento de versiones de películas, cómics o videojuegos.
6. **Exclusión de franquicias.** Mantener la sección 10: nada de Marvel, Disney, DC, anime conocido ni videojuegos. No copiar su rostro, vestuario, objetos o composición. Esta exclusión general no identifica qué representación externa es relevante para cada personaje.

Fuentes de estos controles: secciones 1, 3, 4, 5, 6, 7 y 10 de las órdenes enlazadas abajo. El acabado y el registro emocional siguen regidos por [estilo_visual_aprobado.md](estilo_visual_aprobado.md). La fuente compiladora es [generar-ordenes.py](../herramientas/generar-ordenes.py).

## Ejemplos respaldados por las órdenes

- **Pan:** no incorporar anatomía caprina, patas o cuernos no autorizados. Es una restricción positiva del diseño del repo, no una afirmación sobre una franquicia específica.
- **Dédalo:** alas construidas y postura de trabajo en tierra; no convertirlo en un sujeto con vuelo mágico o anatómico.
- **Hestia:** cuidar el fuego doméstico, con cuerpo compacto y sin objetos de poder; no sustituir esa acción por una pose heroica genérica.
- **Odiseo:** viajero con acción de cálculo y estrategia; conservar su identidad y separación frente a Teseo y Edipo.

Estos ejemplos no cierran el relevamiento de contaminación pop. Sólo explicitan controles que ya estaban escritos.

## Qué continúa faltando

Para los 39 personajes de la tabla no se documentó en esta tarea una representación moderna específica, su fuente verificable y sus rasgos visuales concretos a evitar. No completar esos campos desde conocimiento general ni eliminar el pendiente para declarar la orden terminada.

Las 18 anotaciones específicas restantes se conservan sin cambios. Algunas sólo nombran una obra; no se les atribuye una investigación exhaustiva ni validación visual. Ares contiene su propio alcance y sus fuentes previas.

El [prompt de investigación documental](prompt_investigacion_85.md) define el campo contaminacion_pop. Una futura investigación de este tema debe limitarse a ese campo si no se autoriza ampliar el alcance; no implica investigar atestación antigua ni cambiar el diseño.

## Órdenes alcanzadas por este documento

| Personaje | Fuente de controles | Estado de investigación |
|---|---|---|
| Odiseo | [orden](../Produccion/odiseo.md) | Investigación externa pendiente |
| Dédalo | [orden](../Produccion/dedalo.md) | Investigación externa pendiente |
| Hestia | [orden](../Produccion/hestia.md) | Investigación externa pendiente |
| Apolo | [orden](../Produccion/apolo.md) | Investigación externa pendiente |
| Hefesto | [orden](../Produccion/hefesto.md) | Investigación externa pendiente |
| Nike | [orden](../Produccion/nike.md) | Investigación externa pendiente |
| Helios | [orden](../Produccion/helios.md) | Investigación externa pendiente |
| Selene | [orden](../Produccion/selene.md) | Investigación externa pendiente |
| Pan | [orden](../Produccion/pan.md) | Investigación externa pendiente |
| Héctor | [orden](../Produccion/hector.md) | Investigación externa pendiente |
| Jasón | [orden](../Produccion/jason.md) | Investigación externa pendiente |
| Orfeo | [orden](../Produccion/orfeo.md) | Investigación externa pendiente |
| Ariadna | [orden](../Produccion/ariadna.md) | Investigación externa pendiente |
| Atalanta | [orden](../Produccion/atalanta.md) | Investigación externa pendiente |
| Belerofonte | [orden](../Produccion/belerofonte.md) | Investigación externa pendiente |
| Aracne | [orden](../Produccion/aracne.md) | Investigación externa pendiente |
| Midas | [orden](../Produccion/midas.md) | Investigación externa pendiente |
| Frigg | [orden](../Produccion/frigg.md) | Investigación externa pendiente |
| Balder | [orden](../Produccion/balder.md) | Investigación externa pendiente |
| Njörd | [orden](../Produccion/njord.md) | Investigación externa pendiente |
| Skadi | [orden](../Produccion/skadi.md) | Investigación externa pendiente |
| Ratatosk | [orden](../Produccion/ratatosk.md) | Investigación externa pendiente |
| Cronos | [orden](../Produccion/cronos.md) | Investigación externa pendiente |
| Medea | [orden](../Produccion/medea.md) | Investigación externa pendiente |
| Eneas | [orden](../Produccion/eneas.md) | Investigación externa pendiente |
| Edipo | [orden](../Produccion/edipo.md) | Investigación externa pendiente |
| Casandra | [orden](../Produccion/casandra.md) | Investigación externa pendiente |
| Dido | [orden](../Produccion/dido.md) | Investigación externa pendiente |
| Andrómeda | [orden](../Produccion/andromeda.md) | Investigación externa pendiente |
| Nausícaa | [orden](../Produccion/nausicaa.md) | Investigación externa pendiente |
| Dafne | [orden](../Produccion/dafne.md) | Investigación externa pendiente |
| Eco | [orden](../Produccion/eco.md) | Investigación externa pendiente |
| Narciso | [orden](../Produccion/narciso.md) | Investigación externa pendiente |
| Pentesilea | [orden](../Produccion/pentesilea.md) | Investigación externa pendiente |
| Paris | [orden](../Produccion/paris.md) | Investigación externa pendiente |
| Calisto | [orden](../Produccion/calisto.md) | Investigación externa pendiente |
| Casiopea | [orden](../Produccion/casiopea.md) | Investigación externa pendiente |
| Orión | [orden](../Produccion/orion.md) | Investigación externa pendiente |
| Cástor y Pólux | [orden](../Produccion/castor_y_polux.md) | Investigación externa pendiente |

## Continuidad

La sección 10 de estas 39 órdenes se compila desde la alternativa pendiente de herramientas/generar-ordenes.py y remite a este documento. No se alteraron las secciones restantes ni las 18 anotaciones específicas.

La fuente individual **Contaminación pop documentada** del ADN tiene prioridad sobre el diccionario POP del generador; ambos tienen prioridad sobre la alternativa pendiente. Si una investigación futura aporta evidencia, guardar su fuente y alcance antes de recompilar únicamente las órdenes afectadas.

No se modificaron canon, skill, imágenes, control local, estados ni automatizaciones. Antes de una futura generación siguen correspondiendo todos los controles aplicables y la lectura completa del historial de fallas.
