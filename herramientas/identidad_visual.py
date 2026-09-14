# -*- coding: utf-8 -*-
"""Asignación coordinada de identidad facial y cromática de los 85.

No es parte del juego. Es la tabla editorial que llenó el hueco detectado en la
auditoría del 2026-09-14: ninguno de los 15 ejes de la matriz cubre color de pelo,
tono de piel ni color de ojos, y sólo 15 de 85 fichas declaraban algo. Sin ese dato
el generador pone castaño de rostro oval por defecto, y puso ocho.

Cada valor lleva su origen:
  ADN      -> ya estaba declarado en adn_visual_personajes_v1.md, se precisa sin contradecirlo
  APROBADA -> sale de una imagen ya aprobada por Willy, no se toca
  FUENTE   -> hay atestación citada en la ficha
  DISENO   -> decisión de diseño visual, sin atestación localizada. Revisable por la
              investigación de Documentacion/prompt_investigacion_85.md
"""

# pelo: (color, textura) | piel | ojos | origen
IDENTIDAD = {
    # --- Hombres de gran potencia. Matriz 4.2 exige jerarquía; acá se agrega
    #     separación cromática para que no dependan de la barba.
    "Zeus":      ("blanco", "ondulado abundante", "clara dorada", "marrón cálido", "APROBADA"),
    "Poseidón":  ("gris acero", "ondulado largo barrido", "canela", "verde gris", "DISENO"),
    "Hades":     ("negro", "lacio ordenado", "clara neutra", "gris", "ADN"),
    "Heracles":  ("castaño oscuro", "rizado abierto corto", "canela", "ámbar", "DISENO"),
    "Odín":      ("blanco", "lacio largo", "clara curtida", "azul gris", "ADN"),
    # Thor cobrizo y no rubio: la barba roja es el rasgo atestiguado, y de paso es la
    # defensa más fuerte contra el Thor de Marvel, que ya contaminó su imagen.
    "Thor":      ("cobrizo", "ondulado grueso", "clara rosada curtida", "azul claro", "DISENO"),

    # --- Héroes jóvenes griegos. Es el cluster que produjo Teseo = Hermes = Perseo.
    #     Cada uno cambia color, textura, piel y ojos respecto de los otros dos.
    "Teseo":     ("castaño oscuro", "rizado cerrado", "oliva media", "marrón cálido", "APROBADA"),
    "Hermes":    ("cobrizo", "rizado abierto", "clara dorada con pecas", "verde oliva", "DISENO"),
    "Perseo":    ("negro", "ondulado marcado", "canela", "negro", "DISENO"),
    "Aquiles":   ("rubio miel", "ondulado suave", "clara dorada", "gris", "ADN"),
    "Jasón":     ("castaño claro", "ondulado marcado", "dorada media", "avellana", "ADN"),
    # Odiseo separado de Teseo, que está lockeado por su imagen aprobada: la piel curtida
    # por veinte años de mar es además lo que lo distingue de los héroes jóvenes.
    "Odiseo":    ("castaño oscuro con canas", "ondulado marcado", "canela curtida", "gris verdoso", "ADN"),
    "Belerofonte":("castaño ceniza", "lacio", "oliva clara", "azul gris", "DISENO"),
    "Apolo":     ("rubio oscuro", "ondulado suave", "clara dorada", "ámbar", "ADN"),
    "Paris":     ("castaño medio", "lacio", "oliva media", "verde gris", "DISENO"),
    "Eros":      ("castaño claro", "rizado abierto", "clara neutra", "azul claro", "ADN"),
    "Orfeo":     ("castaño muy oscuro", "ondulado marcado", "oliva clara", "avellana", "ADN"),
    "Narciso":   ("castaño oscuro", "ondulado suave", "clara dorada", "verde oliva", "ADN"),
    "Edipo":     ("negro", "lacio", "oliva media", "marrón muy oscuro", "ADN"),

    # --- Guerreros y comandantes. Matriz 4.3.
    "Ares":      ("negro", "muy corto", "oliva media", "marrón muy oscuro", "ADN"),
    "Agamenón":  ("rubio", "corto", "oliva clara", "avellana", "FUENTE"),
    "Héctor":    ("castaño oscuro", "corto", "oliva media", "marrón cálido", "ADN"),
    # Eneas separado de Agamenón, lockeado por Pseudo-Dares, y de Héctor.
    "Eneas":     ("castaño muy oscuro", "corto", "canela", "gris oscuro", "ADN"),
    "Tyr":       ("rubio oscuro", "corto", "clara rosada", "azul gris", "DISENO"),
    # Sigurd deja de ser rubio: así salía príncipe Disney y compartía lectura con el cluster.
    "Sigurd":    ("castaño claro", "medio práctico", "clara dorada", "verde gris", "DISENO"),
    "Orión":     ("negro", "corto áspero", "castaña media", "gris", "DISENO"),
    "Pentesilea":("negro", "trenzado corto", "oliva media", "gris oscuro", "DISENO"),

    # --- Mujeres jóvenes y esbeltas. Matriz 4.5. Ocho de estas salieron castañas de
    #     rostro oval por falta de dato; acá ninguna repite la terna completa.
    "Atenea":    ("castaño ceniza", "ondulado recogido compacto", "oliva clara", "gris claro", "DISENO"),
    "Artemisa":  ("castaño muy oscuro", "lacio recogido alto", "canela", "ámbar", "DISENO"),
    "Atalanta":  ("negro", "crespo recogido alto", "castaña media", "marrón muy oscuro", "DISENO"),
    "Ariadna":   ("castaño claro", "ondulado medio", "oliva media", "avellana", "DISENO"),
    "Pandora":   ("pelirrojo", "rizado abierto", "clara rosada con pecas", "verde oliva", "DISENO"),
    # Andrómeda: el mito la ubica en Etiopía, así que esto la acerca a la fuente, no la aleja.
    "Andrómeda": ("negro", "crespo largo", "castaña oscura", "marrón muy oscuro", "DISENO"),
    "Psique":    ("castaño oscuro", "ondulado marcado", "oliva clara", "marrón cálido", "DISENO"),
    "Nausícaa":  ("castaño medio", "rizado cerrado", "dorada media", "verde gris", "DISENO"),
    "Perséfone": ("rubio miel oscuro", "ondulado suave", "clara dorada", "verde oliva", "DISENO"),
    "Helena":    ("castaño claro dorado", "ondas pesadas", "clara dorada", "gris", "DISENO"),
    "Casandra":  ("negro", "lacio largo de poco volumen", "oliva media", "marrón muy oscuro", "ADN"),

    # --- Cabellos largos femeninos de alto riesgo. Matriz 4.6.
    "Sif":       ("oro verdadero", "extremadamente largo y pesado", "clara dorada", "ámbar", "FUENTE"),
    "Afrodita":  ("rubio ceniza", "ondulado amplio", "clara neutra", "verde gris", "DISENO"),
    "Freya":     ("cobrizo oscuro", "largo voluminoso", "clara dorada", "verde oliva", "DISENO"),
    "Circe":     ("castaño muy oscuro rojizo", "largo con volumen lateral", "oliva clara", "ámbar", "ADN"),
    "Calipso":   ("castaño medio", "largo suelto ondulado por humedad", "canela", "marrón cálido", "DISENO"),
    "Selene":    ("negro azulado", "largo lacio", "muy pálida", "gris plata", "ADN"),

    # --- Matronas y figuras de autoridad femenina.
    "Hera":      ("castaño oscuro", "pesado y estructurado", "oliva clara", "ámbar", "DISENO"),
    "Deméter":   ("castaño ceniza con canas", "recogido bajo", "dorada media", "avellana", "DISENO"),
    "Penélope":  ("castaño oscuro con hilos grises", "recogido bajo", "oliva media", "marrón cálido", "DISENO"),
    "Medea":     ("castaño muy oscuro", "grueso recogido práctico", "oliva media", "negro", "ADN"),
    "Hestia":    ("castaño ceniza", "recogido simple", "dorada media", "marrón cálido", "DISENO"),
    "Casiopea":  ("negro", "estructurado alto", "castaña media", "ámbar", "DISENO"),
    "Frigg":     ("rubio ceniza con canas", "trenzas simples", "clara rosada", "azul gris", "DISENO"),
    # Dido es fenicia de Cartago; el tono la ancla en su origen en vez de uniformarla.
    "Dido":      ("negro", "recogido de volumen controlado", "castaña media", "marrón muy oscuro", "ADN"),

    # --- Resto griego.
    "Hefesto":   ("castaño muy oscuro", "corto áspero", "canela con hollín", "ámbar", "DISENO"),
    "Dioniso":   ("negro", "largo rizado suelto", "oliva media", "marrón cálido", "ADN"),
    "Cronos":    ("gris oscuro", "amplio", "oliva clara", "negro", "ADN"),
    "Prometeo":  ("castaño muy oscuro", "medio", "oliva media", "gris", "ADN"),
    "Atlas":     ("castaño grisáceo", "subordinado a la escala", "canela", "ámbar", "DISENO"),
    "Dédalo":    ("gris", "corto desordenado", "oliva clara", "avellana", "ADN"),
    "Helios":    ("rubio cobrizo", "corto barrido", "dorada media", "ámbar", "DISENO"),
    "Midas":     ("castaño ceniza", "corto", "oliva media", "gris", "DISENO"),
    "Aracne":    ("castaño oscuro", "recogido alto", "oliva clara", "gris", "DISENO"),
    "Dafne":     ("castaño claro", "largo mezclándose con hojas", "clara dorada", "verde oliva", "ADN"),
    "Eco":       ("castaño medio", "corto en capas", "oliva media", "gris", "ADN"),
    "Nike":      ("rubio oscuro", "corto barrido", "clara dorada", "gris", "DISENO"),
    # Iris: pelo y ropa de color natural. El arcoíris es el camino que recorre, no su
    # paleta personal. Su imagen anterior lo resolvió con telas multicolor, que es la
    # misma prohibición del pelo multicolor mudada a la tela.
    "Iris":      ("castaño claro", "largo recogido parcialmente", "canela", "avellana", "DISENO"),
    "Pan":       ("castaño muy oscuro", "rizado abundante", "canela", "ámbar", "ADN"),
    "Medusa":    ("serpientes en lugar de cabello", "volúmenes y direcciones diferenciadas", "oliva media", "ámbar", "ADN"),

    # --- Resto nórdico.
    "Loki":      ("castaño rojizo oscuro", "medio asimétrico", "clara pálida", "verde", "DISENO"),
    "Heimdall":  ("rubio ceniza", "recogido atrás", "clara dorada", "ámbar", "ADN"),
    "Njörd":     ("gris", "barrido por viento", "clara curtida", "azul gris", "ADN"),
    "Balder":    ("rubio claro", "corto-medio", "clara luminosa", "azul claro", "ADN"),
    "Skadi":     ("castaño muy oscuro", "trenzado contenido", "clara pálida", "gris hielo", "DISENO"),
    "Hel":       ("negro", "lacio contenido", "muy pálida", "gris muy claro", "ADN"),
}

# Duplas y grupos: parentesco real sin clonación. Es exactamente lo que falló en
# Rómulo y Remo, que salieron dos nenes casi idénticos.
INTEGRANTES = {
    "Rómulo y Remo": [
        ("Rómulo", "castaño oscuro", "rizado cerrado", "oliva media", "marrón muy oscuro"),
        ("Remo",   "castaño claro",  "ondulado medio", "oliva media", "avellana"),
    ],
    "Cástor y Pólux": [
        ("Cástor", "negro", "lacio",          "oliva clara", "gris"),
        ("Pólux",  "negro", "rizado abierto", "oliva clara", "marrón cálido"),
    ],
    "Las Valquirias": [
        ("la que dirige",   "pelirrojo",         "crespo suelto",     "clara rosada con pecas", "verde oliva"),
        ("la más joven",    "negro",             "lacio",             "castaña oscura",         "marrón muy oscuro"),
        ("la de más edad",  "rubio ceniza",      "trenzas gruesas",   "clara rosada",           "azul gris"),
    ],
}

# No humanos: la identidad no se resuelve por pelo, piel y ojos. La ficha del ADN ya
# da la geometría anatómica y es la que manda.
NO_HUMANOS = ["Calisto", "Minotauro", "Pegaso", "Quirón", "Cerbero", "Esfinge",
              "Fénix", "Fenrir", "Ratatosk"]

ORIGEN_TEXTO = {
    "ADN":      "ya declarado en el ADN, precisado sin contradecirlo",
    "APROBADA": "sale de la imagen ya aprobada por Willy, no se toca",
    "FUENTE":   "atestación citada en la ficha del ADN",
    "DISENO":   "decisión de diseño visual, sin atestación localizada; revisable por la investigación",
}


# Pares de clon comprobados en la auditoría del 2026-09-14, mirando las imágenes reales.
# Ninguno de estos figuraba en el campo "riesgos de parecido" del ADN: la lista de riesgos
# se armó sobre el papel y no vio los pares que después fallaron de verdad. Van a las órdenes
# además de los riesgos de la ficha, no en lugar de ellos.
RIESGOS_OBSERVADOS = {
    "Teseo":     [("Hermes", "misma cara y mismo pelo en las imágenes anteriores"),
                  ("Perseo", "misma cara y mismo pelo en las imágenes anteriores")],
    "Hermes":    [("Teseo",  "misma cara y mismo pelo en las imágenes anteriores"),
                  ("Perseo", "misma cara y mismo pelo en las imágenes anteriores"),
                  ("Sigurd", "misma construcción facial, separados sólo por el color de pelo")],
    "Perseo":    [("Teseo",  "misma cara y mismo pelo en las imágenes anteriores"),
                  ("Hermes", "misma cara y mismo pelo en las imágenes anteriores")],
    "Sigurd":    [("Hermes", "misma construcción facial, separados sólo por el color de pelo")],
    "Calipso":   [("Helena",   "misma mujer con otro objeto al lado"),
                  ("Penélope", "misma mujer con otro objeto al lado")],
    "Helena":    [("Calipso",  "misma mujer con otro objeto al lado"),
                  ("Penélope", "misma mujer con otro objeto al lado")],
    "Penélope":  [("Calipso", "misma mujer con otro objeto al lado"),
                  ("Helena",  "misma mujer con otro objeto al lado")],
    "Psique":    [("Perséfone", "mismo rostro de ojos enormes en las imágenes anteriores")],
    "Perséfone": [("Psique",    "mismo rostro de ojos enormes en las imágenes anteriores")],
    "Sif":       [("Deméter", "la imagen anterior de Sif ejecutaba la acción de Deméter")],
    "Deméter":   [("Sif",     "la imagen anterior de Sif ejecutaba la acción de Deméter")],
    "Loki":      [("Thor", "mismo castillo de fantasía con cascada al fondo")],
    "Thor":      [("Loki", "mismo castillo de fantasía con cascada al fondo")],
    "Heimdall":  [("Iris", "el arcoíris dominaba las dos imágenes por igual")],
    "Iris":      [("Heimdall", "el arcoíris dominaba las dos imágenes por igual")],
}
