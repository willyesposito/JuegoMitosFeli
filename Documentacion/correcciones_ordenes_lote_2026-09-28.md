# Correcciones estructurales de órdenes — lote 2026-09-28

Rama: `claude/game-setup-v98pr1`. Base verificada: `87aef2294a1a54e4b8539b6884c18dd71681f572`.
Selección: exclusivamente las 57 entradas del control `imagenes-faltantes-2026-09-28.json`.

## Corrección y alcance

- `limpiar_fuente` conserva el vacío como vacío, incluso si sólo contiene una nota de fuente. El parser también conserva campos vacíos sin absorber el campo siguiente.
- Las 48 órdenes con vestimenta vacía recuperan la alternativa general autorizada por ADN, líneas 39–43: vestimenta lisa del vocabulario de la mitología, sin ornamento. No se eligieron prendas ni calzado.
- Las 57 órdenes reemplazan `LISTA` por completitud mecánica comprobada y validación visual pendiente. La compilación no acredita identidad cerrada, inventario aprobado o separación resuelta.
- Se conserva literalmente el contenido de las pistas, incluidas condiciones y alternativas. Las instrucciones de inventario, ajuste de pose y control de omisiones respetan esas condiciones.
- La CLI exige `--control` y `--ids`; rechaza selecciones ajenas, duplicadas o con destinos inválidos. Usa las rutas del control (incluida `castor_y_polux.md`), no escribe las restantes ni el índice, y omite salidas idénticas.
- Los bloques de riesgos siguen el orden de aparición en la fuente; se elimina el desempate aleatorio de un conjunto, sin cambiar el contenido de las comparaciones.

No se modificaron ADN, matriz, personajes, identidad visual, skill, control, estados, automatizaciones, índice ni revisiones históricas. No se generaron imágenes ni prompts.

## Qué demuestra el script

**COMPLETA** significa exclusivamente que hay registros fuente, doce campos obligatorios con contenido, identidad aplicable con datos y origen, ejes enteros entre 1 y 10, correspondencia de tier/mitología y referencias usadas disponibles. Vestimenta es opcional y usa la regla general cuando falta.
**INCOMPLETA** enumera `[FALTA: ...]` y emite una salida diagnóstica que no debe usarse para generar. No completa datos por su cuenta.
**Validación visual: PENDIENTE** se declara siempre. Las pruebas de silueta, pose, composición, avatar y colisión, la pertinencia de decisiones de identidad y las revisiones de investigación requieren revisión posterior.

## Validación realizada

- Ocho pruebas unittest: limpieza vacía; alternativa y vestimenta explícita; condiciones y alternativas; sin pistas y no humanos; incompletitud y referencia faltante; parser con campo vacío; selección aislada, destino de Cástor y Pólux e idempotencia; orden estable de riesgos.
- Compilación explícita de las 57: sin faltantes mecánicos detectados, sin `LISTA`, sin vestimenta «. ADN.», texto de pistas conservado y validación visual pendiente.
- Segunda compilación: cero escrituras. Control de lectura y cuatro fuentes de datos sin cambios de contenido.

Para ejecutar las pruebas: `python herramientas/test_generar_ordenes.py`.
Ejemplo de selección, con la ruta real del control: `python herramientas/generar-ordenes.py --control <ruta-del-control.json> --ids thor tyr`.

## Continuidad: controles pendientes

La corrección mecánica no cambia los estados del control ni invalida las revisiones históricas. La regla general de vestimenta vuelve a estar compilada, pero no resuelve decisiones concretas pendientes de prendas/calzado.

| Personaje | Estado registrado | Pendiente registrado |
|---|---|---|
| `odiseo` | bloqueada | Vestimenta de cuerpo completo y resolución del calzado. Revisar contra la alternativa general restaurada; no presumir aprobado. |
| `dedalo` | bloqueada | Vestimenta de cuerpo completo y resolución del calzado. Revisar contra la alternativa general restaurada; no presumir aprobado. |
| `thor` | bloqueada | Vestimenta de cuerpo completo y resolución del calzado. Revisar contra la alternativa general restaurada; no presumir aprobado. |

**Identificadores abstractos (7):** `frigg`, `balder`, `cronos`, `hel`, `eneas`, `dido`, `nausicaa`. Las órdenes conservan `[REVISAR]`; confirmar reconocimiento y fuente sin inventar objetos.

**Investigación de contaminación pendiente (40):** `odiseo`, `dedalo`, `hestia`, `apolo`, `ares`, `hefesto`, `nike`, `helios`, `selene`, `pan`, `hector`, `jason`, `orfeo`, `ariadna`, `atalanta`, `belerofonte`, `aracne`, `midas`, `frigg`, `balder`, `njord`, `skadi`, `ratatosk`, `cronos`, `medea`, `eneas`, `edipo`, `casandra`, `dido`, `andromeda`, `nausicaa`, `dafne`, `eco`, `narciso`, `pentesilea`, `paris`, `calisto`, `casiopea`, `orion`, `castor_polux`. La compilación no realiza ni da por cerrada esa investigación.

**Pistas con condiciones o alternativas que deben respetarse en los siguientes chats:**

| ID | Texto de fuente conservado |
|---|---|
| `odiseo` | caballo de Troya o elemento de viaje/navegación, sólo como contexto. |
| `prometeo` | herramientas o cocina como pistas muy secundarias si hacen falta. |
| `hector` | murallas de Troya y contexto familiar/protector cuando ya esté definido. |
| `quiron` | arquería o instrumento de enseñanza autorizado. |
| `ratatosk` | corteza/rama de Yggdrasil; águila/dragón sólo como pistas lejanas si aparecen. |
| `fenrir` | Tyr como contexto cuando corresponda y vocabulario de paisaje nórdico. |
| `cronos` | sólo contexto ya existente; no agregar hoz ni objeto canónico externo si no está autorizado en el repo. |
| `medea` | brillo controlado de magia o silueta dormida del dragón; evitar material del mito excluido por suavizado. |
| `edipo` | geometría del camino o del acertijo; no usar material de la tragedia excluida. |
| `casandra` | muralla o arquitectura de Troya; no herramientas proféticas inventadas. |
| `eros` | alas sólo si ya están autorizadas; vínculo con Psique como contexto cuando corresponda. |
| `paris` | contexto de elección y presencia subordinada de las tres diosas cuando corresponda. |
| `calisto` | cielo nocturno griego; si se conserva rasgo humano debe ser sólo ambiental y no una mitad-humana inventada. |

En los siguientes chats, resolver sólo las condiciones y alternativas necesarias, registrar su trazabilidad y realizar los controles visuales. La cantidad de puntos del gate citada por el generador es heredada (once/doce); verificar la numeración vigente en el documento de estilo antes de usarla. No fue auditada en esta corrección estructural.
