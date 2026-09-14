# Prompt de investigación documental — los 85 personajes

**Para qué es.** Juntar, con fuente citada, los datos externos que hacen falta para cerrar
las órdenes de producción de `Produccion/`. Hoy las fichas de `adn_visual_personajes_v1.md`
no declaran color de pelo, tono de piel ni detalle reconocible para la mayoría del roster, y
ese vacío es la causa mecánica de que doce personajes hayan salido castaños de rostro oval.

**Qué NO es.** No es un prompt de diseño. GPT trae evidencia; las decisiones visuales se
toman después, acá, y se escriben en la ficha. El precedente del repo es la ficha de
Agamenón, donde el rubio quedó documentado con su fuente y con la aclaración de que es
decisión visual y no dato homérico.

**Cómo se usa.** Un lote de 10 por vez, en chats separados. Los 85 juntos se truncan; es una
falla ya registrada en `memoria_fallas_generacion_imagenes.md`. La salida es JSON y se
guarda en `Documentacion/investigacion/lote-N.json`.

---

## Prompt (pegar tal cual, cambiando sólo el lote final)

```text
Necesito investigación documental para un proyecto de ilustración de personajes de
mitología griega, nórdica y romana. No estás diseñando nada ni generando imágenes: estás
juntando evidencia con fuente citada. Las decisiones de diseño las tomo yo después.

Para cada personaje de la lista te pido cuatro cosas, en este orden de importancia:

1. DETALLE RECONOCIBLE. El rasgo visual por el que una persona común identifica a ese
personaje sin que le digan el nombre. El que dibujaría alguien a quien le pedís "dibujá a
X". Uno solo, el más fuerte. Si el personaje no tiene ninguno, decilo: es un dato valioso,
no un hueco a rellenar.

2. ATESTACIÓN FÍSICA ANTIGUA. Cualquier descripción del cuerpo, la cara, el pelo, el color
de pelo, la edad o una marca distintiva que aparezca en una fuente antigua. Citá obra,
pasaje y enlace. Marcá si la fuente es temprana, tardía o dudosa. Si no hay ninguna
descripción atestiguada, escribí exactamente SIN ATESTACIÓN. No completes con lo que se
suele representar, no infieras desde otro personaje, no deduzcas desde la etimología del
nombre. Que un campo quede vacío es un resultado correcto y esperable en la mayoría de los
casos.

3. ICONOGRAFÍA ANTIGUA. Cómo lo representaba el arte griego, romano o nórdico de la época:
cerámica, escultura, relieve, piedras rúnicas. Esto suele diferir de la imagen popular
moderna, y me interesa justamente esa diferencia. Con fuente y enlace.

4. CONTAMINACIÓN POP. La representación moderna famosa que un modelo de imágenes va a
copiar si no se lo impide: película, serie, cómic, videojuego. Nombrá la obra, el rasgo
concreto que arrastra y por qué es riesgo. Esto no es fuente de verdad, es lista de cosas a
evitar.

Reglas duras:
- No inventes. Ante la duda, SIN ATESTACIÓN.
- No uses una representación moderna como si fuera evidencia antigua.
- Distinguí siempre entre lo que dice una fuente y lo que es consenso visual posterior.
- Cada dato con fuente y enlace verificable. Sin enlace, no lo incluyas.
- Si dos fuentes se contradicen, poné las dos y marcá la contradicción. No elijas.

Formato de salida: sólo JSON, un objeto por personaje dentro de un array, sin texto antes
ni después. Este esquema exacto:

{
  "id": "sif",
  "nombre": "Sif",
  "mitologia": "nórdica",
  "detalle_reconocible": {
    "rasgo": "",
    "por_que_es_universal": "",
    "fuente": "",
    "url": ""
  },
  "atestacion_fisica": [
    { "campo": "cabello|piel|rostro|cuerpo|edad|marca", "valor": "", "fuente": "", "url": "", "solidez": "temprana|tardía|dudosa" }
  ],
  "iconografia_antigua": { "descripcion": "", "soporte": "", "fuente": "", "url": "" },
  "contaminacion_pop": [
    { "obra": "", "anio": "", "rasgo_que_arrastra": "", "riesgo": "" }
  ],
  "vacios": ""
}

atestacion_fisica puede venir como array vacío. vacios es texto libre para decirme qué
buscaste y no encontraste.

Lote a investigar:
<PEGAR ACÁ EL LOTE>
```

---

## Los nueve lotes

Siguen el orden de `adn_visual_personajes_v1.md`, o sea por tier y mitología. Los lotes 1 a 5
cubren dorado y plateado, que son los que primero necesitan imagen.

1. Zeus, Poseidón, Hades, Atenea, Heracles, Odiseo, Teseo, Aquiles, Jasón, Perseo
2. Odín, Thor, Loki, Hera, Deméter, Apolo, Artemisa, Ares, Afrodita, Hefesto
3. Hermes, Dioniso, Cronos, Prometeo, Perséfone, Belerofonte, Orfeo, Edipo, Penélope, Helena
4. Casandra, Medea, Circe, Agamenón, Héctor, Atlas, Dédalo, Orión, Freya, Frigg
5. Tyr, Heimdall, Skadi, Njörd, Balder, Sigurd, Sif, Hel, Eneas, Rómulo y Remo
6. Andrómeda, Aracne, Ariadna, Calisto, Medusa, Minotauro, Pandora, Pegaso, Quirón, Atalanta
7. Calipso, Casiopea, Cerbero, Cástor y Pólux, Dafne, Eco, Eros, Esfinge, Fénix, Helios
8. Hestia, Iris, Midas, Narciso, Nausícaa, Nike, Pan, Paris, Pentesilea, Psique
9. Selene, Fenrir, Las Valquirias, Ratatosk, Dido

## Qué se hace con la salida

1. Guardar el JSON crudo, sin editar, en `Documentacion/investigacion/lote-N.json`.
2. Decidir, personaje por personaje, pelo, piel, rostro y detalle reconocible. Un
   `SIN ATESTACIÓN` habilita una decisión de diseño libre, que se escribe igual con la
   etiqueta **Criterio de fuente: decisión de diseño, sin atestación localizada**.
3. Volcar lo decidido a la ficha de `adn_visual_personajes_v1.md` y a la matriz numérica.
4. Recién entonces armar la orden de producción en `Produccion/<id>.md`.

**El paso 2 no lo hace GPT.** Si la investigación decide, vuelven las invenciones: la valva
de Botticelli en Afrodita y la Vía Láctea de astrofotografía en Atlas entraron por ahí.
