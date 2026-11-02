# Avance de imágenes — 2026-11-02

## Tanda 1 — INCOMPLETA

Tres llamadas de generación, cero reintentos. No se modificaron personajes.json ni historias. No hay imágenes nuevas subidas ni pruebas visuales del juego realizadas.

| Personaje | Estado | Ruta prevista | Resultado / prueba | Commit de imagen |
|---|---|---|---|---|
| andromeda | pendiente | imagenes/andromeda.png | Generación rechazada HTTP 400 moderation_blocked en salida; sin archivo | ninguno |
| aquiles | generado, requiere corrección | imagenes/aquiles.png | Inspección visual: demasiado fotográfico; sandalia no muestra claramente muesca pedida. No integrado | ninguno |
| aracne | generado, revisión pendiente de integración | imagenes/aracne.png | Inspección visual: telar diagonal, hilos radiales, araña y figura completa presentes; materiales demasiado realistas y objetos de taller extra. No integrado | ninguno |

Los dos resultados están en la conversación de esta ejecución; NO están preservados en el repositorio y no deben contarse como terminados. No depender de rutas temporales para recuperación.

Bloqueo técnico comprobado: git clone funciona, git push --dry-run falla con `could not read Username for https://github.com`. El conector GitHub disponible escribe archivos UTF-8, no admite carga binaria PNG. Falta un canal autenticado de escritura binaria para completar subida y verificación remota. No se intentó eludir autenticación.

Pendientes de campaña: 54 imágenes ausentes en repo y revisión de las 3 integraciones existentes. Tarea pausada por bloqueo de entrega; no por finalización. Sin prueba local ni publicada acreditada.

## Acceso restablecido y método verificado

El conector GitHub admite escritura binaria mediante create_blob con encoding base64: prueba exitosa SHA a4b25763a3e395090f027ca04a7eccdc214ee3b7, sin incorporar el objeto de prueba al árbol de la rama. La afirmación anterior de que el conector solo escribe texto era incorrecta. Usar create_blob + create_tree + create_commit + update_ref para subir ilustraciones reales; no requiere autenticación del git local. Tarea reactivada con instrucciones corregidas y recuperación de tanda 1. No se cuenta ninguna imagen nueva como subida ni verificada por esta prueba.

## Recuperación de tanda 1 — 2026-11-02 00:57 -03:00

Generación e integración local verificadas para Andrómeda, Aquiles y Aracne. También se inspeccionaron y enlazaron las imágenes existentes de Odiseo, Apolo y Ares. Sin modificaciones de historias ni módulos. Base remota leída: `ee45bba5e9581b9fc4f2c847c175bf5db997a013`.

Tres llamadas nuevas secuenciales: Andrómeda alternativa familiar rechazada HTTP 400 `moderation_blocked`; segunda alternativa de paseo costero sin cadenas generada; Aquiles editado desde su propio resultado para corregir acabado fotográfico. Aracne reutilizada sin generación nueva. Sumadas a las tres llamadas previas: seis llamadas de campaña; dos rechazos, cuatro resultados generados de los cuales tres se integran y el Aquiles anterior queda descartado. Sin HTTP 429 ni indicador de cuota disponible.

### Preflight y revisión

- Andrómeda: adulta de piel castaña oscura y pelo negro crespo, mirada hacia las estrellas, roca costera, vestido verde azulado y sandalias. Separación frente a Helena/Psique por identidad, mirada celeste y costa. Por seguridad se omiten cadenas y criatura marina; constelación como identificador alternativo. Apareció pequeño templo al fondo no solicitado, registrado como desviación editorial provisional.
- Aquiles: cuerpo corpulento según §4, cabello rubio miel, escudo lateral, talón visible y eje hacia delante, polvo por velocidad. Se editó el mismo personaje, sin referencia a otros. Sin objetos nuevos; la muesca del escudo se lee, la del calzado no queda acreditada. Pose más dinámica que pausa tensa. La cara y superficies ya se leen como animación 3D.
- Aracne: figura pequeña y liviana con rodete alto, manos separadas ante telar diagonal, hilos radiales y araña, taller subordinado. Separación de Penélope por geometría radial, edad y rostro anguloso. Se conserva resultado recuperado; jarras y banco incidentales y microtextura excesiva se registran como desviaciones. Transformación insinuada por telaraña/araña, sin horror.

Gate de 12 puntos revisado por inspección de los tres archivos y sus cartas: sin foto/óleo/2D plano, sin proporciones de muñeco, contextura conforme a §4, identidad textual diferenciada, fondo subordinado, actividad o fenómeno reconocible, sin aura/halo/runas, expresión accesible y sin dorado genérico. Excepciones de inventario, omisiones y materiales arriba y en archivo único de dudas. Esto es aceptación provisional para esta campaña, no aprobación estética del usuario ni certificación de exactitud astronómica de las estrellas.

### Prueba concreta

Servidor estático Node y Chromium local, viewport móvil 390×844. Perfil sintético aislado con las seis cartas descubiertas. Se abrió cada carta mediante click real en `.carta[data-id]`, se esperó `img.decode()` y se inspeccionó su captura individual. Se desactivaron animaciones únicamente en el navegador de prueba para capturar el estado final. Las seis imágenes cargaron completas, dimensiones naturales 1086×1448 (3:4), caja visible 352.5×470 (3:4), sin recorte material de figura ni errores JS o HTTP. Evidencia: `Documentacion/pruebas_imagenes_2026-11-02/<id>.png` y `resultado_local.json`.

Auditoría de datos: JSON válido, 85 personajes, 34 referencias a imágenes existentes y decodificables, cero rutas rotas; quedan 51 sin imagen. `sw.js`: v3.5.10. Prueba publicada todavía no realizada; no confundir prueba local con sitio en vivo.

| Personaje | Estado local | Ruta | Llamadas campaña / reintentos | Commit |
|---|---|---|---|---|
| andromeda | generado y verificado local; publicación pendiente | imagenes/andromeda.png | 3 / 2 alternativas (2 rechazos) | pendiente |
| aquiles | generado y verificado local; publicación pendiente | imagenes/aquiles.png | 2 / 1 edición | pendiente |
| aracne | generado recuperado y verificado local; publicación pendiente | imagenes/aracne.png | 1 / 0 | pendiente |
| odiseo | existente, integración y verificación local | imagenes/odiseo.png | 0 / 0 | pendiente |
| apolo | existente, integración y verificación local | imagenes/apolo.png | 0 / 0 | pendiente |
| ares | existente, integración y verificación local | imagenes/ares.png | 0 / 0 | pendiente |

### Pendientes reales de generación al cierre de esta recuperación

| Personaje | Estado | Ruta prevista | Commit/prueba |
|---|---|---|---|
| dedalo | pendiente | imagenes/dedalo.png | sin generación/subida/prueba |
| thor | pendiente | imagenes/thor.png | sin generación/subida/prueba |
| tyr | pendiente | imagenes/tyr.png | sin generación/subida/prueba |
| poseidon | pendiente | imagenes/poseidon.png | sin generación/subida/prueba |
| hestia | pendiente | imagenes/hestia.png | sin generación/subida/prueba |
| hefesto | pendiente | imagenes/hefesto.png | sin generación/subida/prueba |
| dioniso | pendiente | imagenes/dioniso.png | sin generación/subida/prueba |
| nike | pendiente | imagenes/nike.png | sin generación/subida/prueba |
| helios | pendiente | imagenes/helios.png | sin generación/subida/prueba |
| selene | pendiente | imagenes/selene.png | sin generación/subida/prueba |
| pan | pendiente | imagenes/pan.png | sin generación/subida/prueba |
| prometeo | pendiente | imagenes/prometeo.png | sin generación/subida/prueba |
| hector | pendiente | imagenes/hector.png | sin generación/subida/prueba |
| jason | pendiente | imagenes/jason.png | sin generación/subida/prueba |
| orfeo | pendiente | imagenes/orfeo.png | sin generación/subida/prueba |
| ariadna | pendiente | imagenes/ariadna.png | sin generación/subida/prueba |
| atalanta | pendiente | imagenes/atalanta.png | sin generación/subida/prueba |
| belerofonte | pendiente | imagenes/belerofonte.png | sin generación/subida/prueba |
| midas | pendiente | imagenes/midas.png | sin generación/subida/prueba |
| pegaso | pendiente | imagenes/pegaso.png | sin generación/subida/prueba |
| quiron | pendiente | imagenes/quiron.png | sin generación/subida/prueba |
| fenix | pendiente | imagenes/fenix.png | sin generación/subida/prueba |
| cerbero | pendiente | imagenes/cerbero.png | sin generación/subida/prueba |
| medusa | pendiente | imagenes/medusa.png | sin generación/subida/prueba |
| esfinge | pendiente | imagenes/esfinge.png | sin generación/subida/prueba |
| minotauro | pendiente | imagenes/minotauro.png | sin generación/subida/prueba |
| frigg | pendiente | imagenes/frigg.png | sin generación/subida/prueba |
| balder | pendiente | imagenes/balder.png | sin generación/subida/prueba |
| njord | pendiente | imagenes/njord.png | sin generación/subida/prueba |
| skadi | pendiente | imagenes/skadi.png | sin generación/subida/prueba |
| ratatosk | pendiente | imagenes/ratatosk.png | sin generación/subida/prueba |
| fenrir | pendiente | imagenes/fenrir.png | sin generación/subida/prueba |
| cronos | pendiente | imagenes/cronos.png | sin generación/subida/prueba |
| medea | pendiente | imagenes/medea.png | sin generación/subida/prueba |
| hel | pendiente | imagenes/hel.png | sin generación/subida/prueba |
| eneas | pendiente | imagenes/eneas.png | sin generación/subida/prueba |
| edipo | pendiente | imagenes/edipo.png | sin generación/subida/prueba |
| casandra | pendiente | imagenes/casandra.png | sin generación/subida/prueba |
| circe | pendiente | imagenes/circe.png | sin generación/subida/prueba |
| eros | pendiente | imagenes/eros.png | sin generación/subida/prueba |
| dido | pendiente | imagenes/dido.png | sin generación/subida/prueba |
| nausicaa | pendiente | imagenes/nausicaa.png | sin generación/subida/prueba |
| dafne | pendiente | imagenes/dafne.png | sin generación/subida/prueba |
| eco | pendiente | imagenes/eco.png | sin generación/subida/prueba |
| narciso | pendiente | imagenes/narciso.png | sin generación/subida/prueba |
| pentesilea | pendiente | imagenes/pentesilea.png | sin generación/subida/prueba |
| paris | pendiente | imagenes/paris.png | sin generación/subida/prueba |
| calisto | pendiente | imagenes/calisto.png | sin generación/subida/prueba |
| casiopea | pendiente | imagenes/casiopea.png | sin generación/subida/prueba |
| orion | pendiente | imagenes/orion.png | sin generación/subida/prueba |
| castor_polux | pendiente | imagenes/castor_polux.png | sin generación/subida/prueba |
