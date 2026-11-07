# Seguimiento de imágenes de personajes

Actualizado: **2026-11-07** (America/Buenos_Aires).
Rama de referencia: `claude/game-setup-v98pr1`.
Inventario contrastado con el árbol y `personajes.json` del commit [`bc4d3e4`](https://github.com/willyesposito/JuegoMitosFeli/commit/bc4d3e4208f0e5309ecdd1cf3fdf954debd6345d).

Este es el punto de entrada para retomar la producción visual en un chat nuevo. Reúne la imagen integrada, la última propuesta localizada y la aprobación registrada de cada personaje. Las rutas son relativas a la raíz del repo; los enlaces se pueden abrir desde este documento.

## Estado general

- **85/85 personajes tienen imagen integrada y archivo existente.** El cierre del 2026-11-04 acredita carga y decodificación de las 85 cartas en local y en el sitio publicado, y 57/57 verificaciones visuales de la campaña. Esta reconciliación comprobó rutas y registros; no repitió aquellas pruebas.
- **Dos aprobaciones con fecha documentada:** Zeus y Apolo. En Apolo, el blob actual coincide exactamente con el aprobado.
- **Tres menciones históricas a imágenes aprobadas sin acta individual ni fecha verificable:** Atenea, Iris y Teseo. No se convierten en una aprobación nueva ni en una fecha inferida.
- **Cinco personajes tienen propuestas pendientes:** Andrómeda, Casiopea, Eneas, Frigg y Selene. Sus imágenes del juego siguen siendo las anteriores.
- El resto tiene imagen integrada, pero no se encontró aprobación estética explícita en las fuentes revisadas. **Integrada no equivale a aprobada ni a terminada.**

El acabado vigente desde el 2026-11-05 es el de [Frigg como referencia común](estilo_visual_aprobado.md). La aprobación histórica de una imagen no certifica su adecuación a este criterio posterior. No dar por terminada la revisión de estilo del resto del roster.

## Cómo leer los estados

**Integrada:** ruta presente en `personajes.json` y archivo existente. **Aprobada documentada:** existe decisión explícita y fuente identificada; se refiere a esa versión. **Mención histórica:** una fuente antigua la llama aprobada, sin fecha ni identificación suficiente para certificar la versión actual. **Pendiente:** propuesta guardada que aún requiere decisión. **Sin constancia:** no se localizó una aprobación en las fuentes revisadas; no significa rechazo.

La fecha de generación, subida, prueba o elección de estilo nunca sustituye la fecha de aprobación. `—` significa sin fecha documentada. Para Frigg, elegir el acabado como referencia no aprueba integralmente la nueva variante.

## Registro completo

Todas las imágenes de la columna «Imagen integrada» están integradas. La columna de estado se refiere a la aprobación de esa imagen o, si hay propuesta, a la propuesta indicada.

| Personaje (ID) | Imagen integrada | Última propuesta adicional localizada | Estado de aprobación | Fecha de aprobación (Buenos Aires) | Fuente |
|---|---|---|---|---|---|
| Afrodita (`afrodita`) | [imagenes/afrodita.jpg](../imagenes/afrodita.jpg) | — | Sin constancia | — | [C] |
| Agamenón (`agamenon`) | [imagenes/agamenon.jpg](../imagenes/agamenon.jpg) | — | Sin constancia | — | [C] |
| Andrómeda (`andromeda`) | [imagenes/andromeda.png](../imagenes/andromeda.png) | [Produccion/revision_coherencia_2026-11-05/andromeda/propuesta.png](../Produccion/revision_coherencia_2026-11-05/andromeda/propuesta.png) | Propuesta pendiente de aprobación | — | [R] |
| Apolo (`apolo`) | [imagenes/apolo.png](../imagenes/apolo.png) | — | Aprobada documentada; mismo blob | 2026-10-02 23:23:45 (UTC−03) | [A] |
| Aquiles (`aquiles`) | [imagenes/aquiles.png](../imagenes/aquiles.png) | — | Sin constancia | — | [C] |
| Aracne (`aracne`) | [imagenes/aracne.png](../imagenes/aracne.png) | — | Sin constancia | — | [C] |
| Ares (`ares`) | [imagenes/ares.png](../imagenes/ares.png) | — | Sin constancia | — | [C] |
| Ariadna (`ariadna`) | [imagenes/ariadna.png](../imagenes/ariadna.png) | — | Sin constancia | — | [C] |
| Artemisa (`artemisa`) | [imagenes/artemisa.jpg](../imagenes/artemisa.jpg) | — | Sin constancia | — | [C] |
| Atalanta (`atalanta`) | [imagenes/atalanta.png](../imagenes/atalanta.png) | — | Sin constancia | — | [C] |
| Atenea (`atenea`) | [imagenes/atenea.jpg](../imagenes/atenea.jpg) | — | Mención histórica; sin acta individual | — | [H] |
| Atlas (`atlas`) | [imagenes/atlas.jpg](../imagenes/atlas.jpg) | — | Sin constancia | — | [C] |
| Balder (`balder`) | [imagenes/balder.png](../imagenes/balder.png) | — | Sin constancia | — | [C] |
| Belerofonte (`belerofonte`) | [imagenes/belerofonte.png](../imagenes/belerofonte.png) | — | Sin constancia | — | [C] |
| Calipso (`calipso`) | [imagenes/calipso.jpg](../imagenes/calipso.jpg) | — | Sin constancia | — | [C] |
| Calisto (`calisto`) | [imagenes/calisto.png](../imagenes/calisto.png) | — | Sin constancia | — | [C] |
| Casandra (`casandra`) | [imagenes/casandra.png](../imagenes/casandra.png) | — | Sin constancia | — | [C] |
| Casiopea (`casiopea`) | [imagenes/casiopea.png](../imagenes/casiopea.png) | [Produccion/revision_coherencia_2026-11-05/casiopea/propuesta.png](../Produccion/revision_coherencia_2026-11-05/casiopea/propuesta.png) | Propuesta pendiente de aprobación | — | [R] |
| Cástor y Pólux (`castor_polux`) | [imagenes/castor_polux.png](../imagenes/castor_polux.png) | — | Sin constancia | — | [C] |
| Cerbero (`cerbero`) | [imagenes/cerbero.png](../imagenes/cerbero.png) | — | Sin constancia | — | [C] |
| Circe (`circe`) | [imagenes/circe.png](../imagenes/circe.png) | — | Sin constancia | — | [C] |
| Cronos (`cronos`) | [imagenes/cronos.png](../imagenes/cronos.png) | — | Sin constancia | — | [C] |
| Dafne (`dafne`) | [imagenes/dafne.png](../imagenes/dafne.png) | — | Sin constancia | — | [C] |
| Dédalo (`dedalo`) | [imagenes/dedalo.png](../imagenes/dedalo.png) | — | Sin constancia | — | [C] |
| Deméter (`demeter`) | [imagenes/demeter.jpg](../imagenes/demeter.jpg) | — | Sin constancia | — | [C] |
| Dido (`dido`) | [imagenes/dido.png](../imagenes/dido.png) | — | Sin constancia | — | [C] |
| Dioniso (`dioniso`) | [imagenes/dioniso.png](../imagenes/dioniso.png) | — | Sin constancia | — | [C] |
| Eco (`eco`) | [imagenes/eco.png](../imagenes/eco.png) | — | Sin constancia | — | [C] |
| Edipo (`edipo`) | [imagenes/edipo.png](../imagenes/edipo.png) | — | Sin constancia | — | [C] |
| Eneas (`eneas`) | [imagenes/eneas.png](../imagenes/eneas.png) | [Produccion/revision_coherencia_2026-11-05/eneas/propuesta.png](../Produccion/revision_coherencia_2026-11-05/eneas/propuesta.png) | Propuesta pendiente de aprobación | — | [R] |
| Eros (`eros`) | [imagenes/eros.png](../imagenes/eros.png) | — | Sin constancia | — | [C] |
| Esfinge (`esfinge`) | [imagenes/esfinge.png](../imagenes/esfinge.png) | — | Sin constancia | — | [C] |
| Fénix (`fenix`) | [imagenes/fenix.png](../imagenes/fenix.png) | — | Sin constancia | — | [C] |
| Fenrir (`fenrir`) | [imagenes/fenrir.png](../imagenes/fenrir.png) | — | Sin constancia | — | [C] |
| Freya (`freya`) | [imagenes/freya.jpg](../imagenes/freya.jpg) | — | Sin constancia | — | [C] |
| Frigg (`frigg`) | [imagenes/frigg.png](../imagenes/frigg.png) | [Produccion/revision_coherencia_2026-11-05/frigg/referencia.png](../Produccion/revision_coherencia_2026-11-05/frigg/referencia.png) | Propuesta pendiente; referencia de acabado | — | [R] |
| Hades (`hades`) | [imagenes/hades.jpg](../imagenes/hades.jpg) | — | Sin constancia | — | [C] |
| Héctor (`hector`) | [imagenes/hector.png](../imagenes/hector.png) | — | Sin constancia | — | [C] |
| Hefesto (`hefesto`) | [imagenes/hefesto.png](../imagenes/hefesto.png) | — | Sin constancia | — | [C] |
| Heimdall (`heimdall`) | [imagenes/heimdall.jpg](../imagenes/heimdall.jpg) | — | Sin constancia | — | [C] |
| Hel (`hel`) | [imagenes/hel.png](../imagenes/hel.png) | — | Sin constancia | — | [C] |
| Helena (`helena`) | [imagenes/helena.jpg](../imagenes/helena.jpg) | — | Sin constancia | — | [C] |
| Helios (`helios`) | [imagenes/helios.png](../imagenes/helios.png) | — | Sin constancia | — | [C] |
| Hera (`hera`) | [imagenes/hera.jpg](../imagenes/hera.jpg) | — | Sin constancia | — | [C] |
| Heracles (`heracles`) | [imagenes/heracles.jpg](../imagenes/heracles.jpg) | — | Sin constancia | — | [C] |
| Hermes (`hermes`) | [imagenes/hermes.jpg](../imagenes/hermes.jpg) | — | Sin constancia | — | [C] |
| Hestia (`hestia`) | [imagenes/hestia.png](../imagenes/hestia.png) | — | Sin constancia | — | [C] |
| Iris (`iris`) | [imagenes/iris.jpg](../imagenes/iris.jpg) | — | Mención histórica; sin acta individual | — | [H] |
| Jasón (`jason`) | [imagenes/jason.png](../imagenes/jason.png) | — | Sin constancia | — | [C] |
| Las Valquirias (`valquirias`) | [imagenes/valquirias.jpg](../imagenes/valquirias.jpg) | — | Sin constancia | — | [C] |
| Loki (`loki`) | [imagenes/loki.jpg](../imagenes/loki.jpg) | — | Sin constancia | — | [C] |
| Medea (`medea`) | [imagenes/medea.png](../imagenes/medea.png) | — | Sin constancia | — | [C] |
| Medusa (`medusa`) | [imagenes/medusa.png](../imagenes/medusa.png) | — | Sin constancia | — | [C] |
| Midas (`midas`) | [imagenes/midas.png](../imagenes/midas.png) | — | Sin constancia | — | [C] |
| Minotauro (`minotauro`) | [imagenes/minotauro.png](../imagenes/minotauro.png) | — | Sin constancia | — | [C] |
| Narciso (`narciso`) | [imagenes/narciso.png](../imagenes/narciso.png) | — | Sin constancia | — | [C] |
| Nausícaa (`nausicaa`) | [imagenes/nausicaa.png](../imagenes/nausicaa.png) | — | Sin constancia | — | [C] |
| Nike (`nike`) | [imagenes/nike.png](../imagenes/nike.png) | — | Sin constancia | — | [C] |
| Njörd (`njord`) | [imagenes/njord.png](../imagenes/njord.png) | — | Sin constancia | — | [C] |
| Odín (`odin`) | [imagenes/odin.jpg](../imagenes/odin.jpg) | — | Sin constancia | — | [C] |
| Odiseo (`odiseo`) | [imagenes/odiseo.png](../imagenes/odiseo.png) | — | Sin constancia | — | [C] |
| Orfeo (`orfeo`) | [imagenes/orfeo.png](../imagenes/orfeo.png) | — | Sin constancia | — | [C] |
| Orión (`orion`) | [imagenes/orion.png](../imagenes/orion.png) | — | Sin constancia | — | [C] |
| Pan (`pan`) | [imagenes/pan.png](../imagenes/pan.png) | — | Sin constancia | — | [C] |
| Pandora (`pandora`) | [imagenes/pandora.jpg](../imagenes/pandora.jpg) | — | Sin constancia | — | [C] |
| Paris (`paris`) | [imagenes/paris.png](../imagenes/paris.png) | — | Sin constancia | — | [C] |
| Pegaso (`pegaso`) | [imagenes/pegaso.png](../imagenes/pegaso.png) | — | Sin constancia | — | [C] |
| Penélope (`penelope`) | [imagenes/penelope.jpg](../imagenes/penelope.jpg) | — | Sin constancia | — | [C] |
| Pentesilea (`pentesilea`) | [imagenes/pentesilea.png](../imagenes/pentesilea.png) | — | Sin constancia | — | [C] |
| Perséfone (`persefone`) | [imagenes/persefone.jpg](../imagenes/persefone.jpg) | — | Sin constancia | — | [C] |
| Perseo (`perseo`) | [imagenes/perseo.jpg](../imagenes/perseo.jpg) | — | Sin constancia | — | [C] |
| Poseidón (`poseidon`) | [imagenes/poseidon.png](../imagenes/poseidon.png) | — | Sin constancia | — | [C] |
| Prometeo (`prometeo`) | [imagenes/prometeo.png](../imagenes/prometeo.png) | — | Sin constancia | — | [C] |
| Psique (`psique`) | [imagenes/psique.jpg](../imagenes/psique.jpg) | — | Sin constancia | — | [C] |
| Quirón (`quiron`) | [imagenes/quiron.png](../imagenes/quiron.png) | — | Sin constancia | — | [C] |
| Ratatosk (`ratatosk`) | [imagenes/ratatosk.png](../imagenes/ratatosk.png) | — | Sin constancia | — | [C] |
| Rómulo y Remo (`romulo_remo`) | [imagenes/romulo_remo.jpg](../imagenes/romulo_remo.jpg) | — | Sin constancia | — | [C] |
| Selene (`selene`) | [imagenes/selene.png](../imagenes/selene.png) | [Produccion/revision_coherencia_2026-11-05/selene/propuesta.png](../Produccion/revision_coherencia_2026-11-05/selene/propuesta.png) | Propuesta pendiente de aprobación | — | [R] |
| Sif (`sif`) | [imagenes/sif.jpg](../imagenes/sif.jpg) | — | Sin constancia | — | [C] |
| Sigurd (`sigurd`) | [imagenes/sigurd.jpg](../imagenes/sigurd.jpg) | — | Sin constancia | — | [C] |
| Skadi (`skadi`) | [imagenes/skadi.png](../imagenes/skadi.png) | — | Sin constancia | — | [C] |
| Teseo (`teseo`) | [imagenes/teseo.jpg](../imagenes/teseo.jpg) | — | Mención histórica; sin acta individual | — | [H] |
| Thor (`thor`) | [imagenes/thor.png](../imagenes/thor.png) | — | Sin constancia | — | [C] |
| Tyr (`tyr`) | [imagenes/tyr.png](../imagenes/tyr.png) | — | Sin constancia | — | [C] |
| Zeus (`zeus`) | [imagenes/zeus.jpg](../imagenes/zeus.jpg) | — | Aprobada histórica; revisar estilo vigente | 2026-09-04 (sin hora/zona en fuente) | [Z] |

## Propuestas pendientes: qué queda por decidir

| Personaje | Fecha de la propuesta | Pendiente documentado |
|---|---|---|
| Andrómeda | 2026-11-05 | Aprobar rostro humano, liberación y fuerza fantástica; la evocación celeste no acredita exactitud de Cetus. |
| Casiopea | 2026-11-05 | Aprobar W de cinco estrellas aisladas, rostro, tono de piel y madurez. No se localizó otra versión humana mencionada fuera de este registro. |
| Eneas | 2026-11-05 | Aprobar rostro, resistencia y equipo de viaje; los detalles de equipo son diseño artístico autorizado. |
| Frigg | 2026-11-04; conservada el 2026-11-05 | Aprobar la variante de tejido grueso y porte regio. La copia `referencia.png` es el mismo blob que `reconstrucciones_2026-11-04/frigg/propuesta.png`; no es otra generación. |
| Selene | 2026-11-05 | Aprobar acabado, vestido y carro; perspectiva del eje y recorte de estola siguen observados. |

Las revisiones individuales y hashes están en [el registro de coherencia][R] y su [manifest](../Produccion/revision_coherencia_2026-11-05/manifest.json). Las propuestas del 4/11 de Andrómeda y Casiopea se conservan como antecedentes en [reconstrucciones](../Produccion/reconstrucciones_2026-11-04/); las últimas localizadas son las del 5/11 de la tabla. No se localizaron propuestas adicionales de Selene o Eneas del 4/11.

## Evidencias y límites

[C]: avance_imagenes_2026-11-02.md
[A]: ../Produccion/resultados_individuales_2026-10-02/apolo/revision.md
[Z]: referencia_visual_zeus_aprobada.md
[H]: memoria_fallas_generacion_imagenes.md
[R]: ../Produccion/revision_coherencia_2026-11-05/README.md

- **[C — Integración y cierre](avance_imagenes_2026-11-02.md#cierre-completo--2026-11-04):** el cierre del 4/11 supera los bloqueos y pendientes operativos anteriores, incluidos los de [continuidad del lote](continuidad_lote_57.md). No reabrir esa cola histórica como si siguiera sin imágenes. [Trazabilidad de las 57 verificaciones](pruebas_imagenes_2026-11-02/trazabilidad_57_cierre_20261104.json).
- **[A — Apolo][A]:** aprobación textual «Aprobar esta versión», 2026-10-03 02:23:45 UTC, equivalente al 2026-10-02 23:23:45 en Buenos Aires. Blob aprobado y actual: `5d26376528e428118b96a6cbf4d9fcfe6e95c5b2`. La aprobación se conserva; el criterio de estilo cambió después.
- **[Z — Zeus][Z]:** aprobación visual documentada el 2026-09-04. Alcance histórico de identidad; el documento contiene normas de acabado superadas. Para el estilo actual, leer siempre [estilo_visual_aprobado.md](estilo_visual_aprobado.md).
- **[H — Atenea, Iris y Teseo][H]:** la sección «Causa raíz 1: el punto 6 del prompt maestro» cita el texto antiguo «imágenes aprobadas de Zeus, Atenea, Iris y Teseo» y advierte que tres archivos entraron después. Esa cita no permite fechar una aprobación ni asociarla con certeza a los bytes actuales.
- **[R — Últimas propuestas][R]:** pendientes explícitas; no sustituyen automáticamente las imágenes integradas.
- **[Dudas editoriales](dudas_imagenes_2026-11-02.md):** conserva desviaciones y decisiones provisionales por personaje. No trasladar como restricciones vigentes de estilo las normas anteriores al 5/11.

Este inventario se limita a archivos y decisiones persistidos en la rama indicada. No atribuye aprobaciones de chats externos que no estén registradas, ni certifica visualmente las 85 imágenes bajo la norma nueva.

## Mantenimiento obligatorio al trabajar imágenes

1. Leer este archivo antes de investigar o generar; consultar la fuente enlazada de la fila y el estilo vigente.
2. Al guardar una variante, actualizar su fila en el mismo cambio con la ruta exacta y estado pendiente; conservar versiones anteriores.
3. Al recibir aprobación explícita, registrar fecha `AAAA-MM-DD`, hora/zona si existen, cita breve o enlace a la decisión y blob o hash de la versión aprobada. Si falta la fecha histórica, dejarla sin constancia.
4. Si se integra una versión distinta, actualizar imagen integrada y comprobar su ruta contra `personajes.json`. La aprobación anterior no se hereda a bytes nuevos.
5. Actualizar fecha de revisión, resumen y fuentes. No reiniciar trabajo por una reserva antigua ni marcar terminada una imagen sólo por estar subida o superar una prueba técnica.
