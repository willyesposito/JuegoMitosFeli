# -*- coding: utf-8 -*-
"""Precompila Produccion/<id>.md para los 85 personajes.

No es parte del juego. Cruza las cuatro fuentes del repo en un archivo chico y cerrado
por personaje, para que el circuito de generación no tenga que reconstruir el canon
desde ~500 KB en cada ejecución, que es lo que producía truncamiento silencioso.

Fuentes:
  Documentacion/adn_visual_personajes_v1.md      los 12 campos de diseño
  Documentacion/matriz_adn_visual_numerica_v1.md los 15 ejes numéricos
  personajes.json                                canon, tier, ícono, dones, historia
  herramientas/identidad_visual.py               pelo, piel y ojos coordinados

Uso: python3 herramientas/generar-ordenes.py
Reescribe todas las órdenes. Si editaste una a mano, el cambio se pierde: la edición
va en la fuente, no en la salida.
"""
import json, re, sys, os, unicodedata
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import identidad_visual as IV

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
def r(*p): return os.path.join(RAIZ, *p)

EJES = ['EV','MC','EA','AF','CO','AC','DP','VD','DV','OV','DI','AN','PF','RM','RA']
EJE_NOMBRE = {'EV':'edad visual','MC':'masa corporal','EA':'escala aparente',
 'AF':'angulosidad facial','CO':'contorno superior','AC':'apertura corporal',
 'DP':'dinamismo de pose','VD':'verticalidad','DV':'densidad visual','OV':'oscuridad',
 'DI':'dependencia del identificador','AN':'anchura de hombros','PF':'protagonismo de fondo',
 'RM':'rigidez de materiales','RA':'rareza anatómica'}

CAMPOS = {'Firma de silueta':'silueta','Familia de encuadre':'familia','Densidad visual':'densidad',
 'Edad aparente y contextura':'edad','Geometría general de rostro y cabello':'rostro',
 'Dirección corporal':'direccion','Acción y pose':'accion','Composición y espacio negativo':'composicion',
 'Identificador principal':'identificador','Pistas secundarias autorizadas':'pistas',
 'Avatar circular':'avatar','Riesgos de parecido':'riesgos'}

# Contaminación pop de alta confianza. El resto queda pendiente de la investigación:
# marcarlo pendiente es honesto, inventarlo no.
POP = {
 'Thor':'Thor de Marvel (capa roja, martillo al hombro, rubio de pelo corto). Ya contaminó su imagen anterior.',
 'Loki':'Loki de Marvel (pelo largo negro, verde y oro, cara alargada). Ya contaminó su imagen anterior.',
 'Sif':'Rapunzel de *Enredados* (Disney, 2010). Ya contaminó su imagen anterior.',
 'Las Valquirias':'Merida de *Valiente* (Pixar, 2012) en la pelirroja; ya contaminó la imagen anterior. También la brünnhilde operática con casco alado, que no es nórdica.',
 'Heracles':'*Hércules* (Disney, 1997) y el fisicoculturista de peplum italiano.',
 'Hades':'Hades de *Hércules* (Disney, 1997): azul, llamas, malvado. Su ficha dice expresamente que no es el malo.',
 'Zeus':'Zeus de *Hércules* (Disney, 1997) y el abuelo bonachón de nube.',
 'Poseidón':'Aquaman (DC) y el Poseidón de *Percy Jackson*. El pelo azul verdoso de su imagen anterior vino de ahí.',
 'Odín':'Odín de Marvel (parche, armadura dorada). La lanza y el parche de su imagen anterior vinieron de ahí.',
 'Perseo':'*Furia de titanes* (2010): armadura de cuero y espada brillante.',
 'Aquiles':'*Troya* (2004).',
 'Helena':'*Troya* (2004).',
 'Medusa':'*Percy Jackson* y *Furia de titanes*: monstruo verde de colmillos. Su ficha pide rostro fuerte no monstruoso.',
 'Minotauro':'*God of War* y *Percy Jackson*: bestia musculosa agresiva.',
 'Cerbero':'Fluffy de *Harry Potter*.',
 'Pegaso':'el Pegaso de *Hércules* (Disney, 1997), con cara de cachorro.',
 'Fénix':'Fawkes de *Harry Potter*.',
 'Quirón':'el Quirón de *Percy Jackson*.',
 'Freya':'Freya de *God of War* (2018).',
 'Tyr':'Týr de *God of War Ragnarök*.',
 'Heimdall':'Heimdall de Marvel.',
 'Fenrir':'los lobos de *God of War* y *Skyrim*.',
 'Afrodita':'*El nacimiento de Venus* de Botticelli. La valva de vieira de su imagen anterior vino de ahí y no está en su ficha.',
 'Atenea':'las armaduras de *Saint Seiya* y *God of War*.',
 'Eros':'el Cupido de tarjeta de San Valentín: bebé alado con arco.',
 'Hermes':'el logo de Hermès y el Mercurio de las floristerías.',
 'Prometeo':'la película *Prometheus* (2012).',
 'Sigurd':'el Siegfried wagneriano con casco cornudo, y *Skyrim*.',
 'Rómulo y Remo':'la Loba Capitolina. La escultura los muestra bebés y es lo que produjo la imagen anterior, que contradice la ficha: la ficha pide gemelos adultos jóvenes fundando la ciudad.',
 'Esfinge':'la Gran Esfinge de Guiza, que es egipcia y no griega.',
 'Circe':'la bruja de nariz aguileña de cuento infantil.',
 'Hel':'las villanas góticas de media cara podrida de videojuego.',
 'Dioniso':'el Baco gordo y borracho de la pintura barroca.',
}

# Kit que se repitió en seis cartas nórdicas y no puede volver a repetirse.
KIT_NORDICO = ('nudo celta, cuello o ribete de piel, broche redondo, medallón, botas '
 'envueltas con tiras, cinturón de hebilla decorada, trenzas con anillos de metal')

def slug(s):
    s = unicodedata.normalize('NFD', s).encode('ascii','ignore').decode()
    return re.sub(r'[^a-z0-9]+','_', s.lower()).strip('_')

def cargar():
    txt = open(r('Documentacion','adn_visual_personajes_v1.md'), encoding='utf-8').read()
    adn = {}
    for b in re.split(r'\n### ', txt)[1:]:
        nombre = b.split('\n')[0].strip()
        if nombre.startswith('Pruebas'): continue
        d = {'nombre': nombre}
        for m in re.finditer(r'- \*\*(.+?):\*\* (.+?)(?=\n- \*\*|\n#|\n---|\Z)', b.split('\n---\n')[0], re.S):
            k = m.group(1).strip()
            if k in CAMPOS: d[CAMPOS[k]] = ' '.join(m.group(2).split())
        adn[nombre] = d
    mat = {}
    for line in open(r('Documentacion','matriz_adn_visual_numerica_v1.md'), encoding='utf-8'):
        if not line.startswith('| '): continue
        c = [x.strip() for x in line.strip().strip('|').split('|')]
        if len(c) != 20 or c[1] not in ('Dorado','Plateado','Normal'): continue
        try: nums = [int(x) for x in c[5:20]]
        except ValueError: continue
        mat[c[0]] = {'tier':c[1],'mit':c[2],'morf':c[3],'lect':c[4], **dict(zip(EJES, nums))}
    pj = {c['nombre']: c for c in json.load(open(r('personajes.json'), encoding='utf-8'))}
    return adn, mat, pj

GENTILICIO = {'griega':'griego', 'nordica':'nórdico', 'romana':'romano'}

def may(s):
    """Los campos del ADN arrancan en minúscula porque seguían a una etiqueta en negrita."""
    return s[:1].upper() + s[1:] if s else s

def limpiar_fuente(s):
    """Saca las notas de Criterio de fuente, que van citadas aparte."""
    return re.sub(r'\*\*Criterio de fuente:\*\*.*', '', s).strip().rstrip('.').strip() + '.'

def riesgos_nombrados(texto, todos):
    hallados = []
    for n in sorted(todos, key=len, reverse=True):
        if re.search(r'\b' + re.escape(n) + r'\b', texto) and not any(n in h for h in hallados):
            hallados.append(n)
    return hallados

def tabla_separacion(nombre, riesgo, mat, adn):
    a, b = mat[nombre], mat[riesgo]
    sueltos = [e for e in sorted(EJES, key=lambda e: -abs(a[e]-b[e])) if abs(a[e]-b[e]) >= 2][:4]
    pegados = [e for e in EJES if abs(a[e]-b[e]) <= 1]
    ia, ib = IV.IDENTIDAD.get(nombre), IV.IDENTIDAD.get(riesgo)
    l = [f'**Contra {riesgo}.**', '']
    # El separador de identidad va primero y en positivo: es lo que faltaba y lo que
    # produjo tres héroes jóvenes con la misma cara.
    if ia and ib:
        l.append('| | ' + nombre + ' | ' + riesgo + ' |')
        l.append('|---|---|---|')
        for etiq, i in (('Cabello', 0), ('Textura', 1), ('Piel', 2), ('Ojos', 3)):
            marca = '' if ia[i] != ib[i] else ' ⚠ igual'
            l.append(f'| {etiq} | {ia[i]}{marca} | {ib[i]} |')
        l.append('')
    l.append(f'Silueta de {riesgo}, para no repetirla: ' + limpiar_fuente(adn[riesgo]['silueta']))
    l.append('')
    l.append(f'Pose de {riesgo}, para no repetirla: ' + limpiar_fuente(adn[riesgo]['accion']))
    if sueltos:
        l.append('')
        l.append('Ejes numéricos que ya los separan: ' +
                 ', '.join(f'{EJE_NOMBRE[e]} {a[e]} contra {b[e]}' for e in sueltos) + '.')
    if len(pegados) >= 8:
        l.append('')
        l.append(f'**Atención: {len(pegados)} de 15 ejes están dentro de un punto.** Son personajes '
                 'genuinamente cercanos y la diferencia tiene que venir de identidad, silueta y pose, '
                 'no de los números.')
    return '\n'.join(l)

def orden(nombre, adn, mat, pj):
    f, m = adn[nombre], mat[nombre]
    c = pj[nombre]
    sid = slug(nombre)
    es_nh = nombre in IV.NO_HUMANOS
    grupo = IV.INTEGRANTES.get(nombre)
    ident = IV.IDENTIDAD.get(nombre)
    img = c.get('imagen')

    L = [f'# Orden de producción — {nombre}', '']
    L.append('**Estado: LISTA.** Identidad cerrada, inventario cerrado, separación resuelta.')
    L.append('')
    if img:
        L.append(f'**Imagen actual:** `{img}`, **a reemplazar.** Es de un estilo anterior: la '
                 'colección pasó a semirrealista el 2026-09-14.')
    else:
        L.append('**Imagen actual:** ninguna. La carta funciona igual, mostrando el nombre con el '
                 'tratamiento de su mitología.')
    L.append('')
    L.append('**Se lee junto con:** `Documentacion/estilo_visual_aprobado.md`. Nada más.')
    L.append('')
    L.append('> Generada por `herramientas/generar-ordenes.py`. Para cambiarla, editar la fuente '
             '(el ADN, la matriz, `personajes.json` o `herramientas/identidad_visual.py`) y volver '
             'a generar. Editar este archivo a mano se pierde.')
    L.append('')
    L.append('---')
    L.append('')

    # 1. Identidad
    L.append('## 1. Identidad')
    L.append('')
    L.append('| Campo | Valor | Origen |')
    L.append('|---|---|---|')
    L.append(f"| Mitología | {c['mitologia']} | `personajes.json` |")
    L.append(f"| Tier | {c['tier']} | `personajes.json` |")
    L.append(f"| Familia de encuadre | {f['familia'].rstrip('.')} | ADN |")
    L.append(f"| Edad y contextura | {may(limpiar_fuente(f['edad']))} | ADN |")
    L.append(f"| Rostro y cabello | {may(limpiar_fuente(f['rostro']))} | ADN |")
    if ident:
        col, tex, piel, ojos, org = ident
        o = IV.ORIGEN_TEXTO[org]
        L.append(f'| Cabello, color | {col} | {o} |')
        L.append(f'| Cabello, textura | {tex} | {o} |')
        L.append(f'| Piel | {piel} | {o} |')
        L.append(f'| Ojos | {ojos} | {o} |')
    elif grupo:
        L.append('| Cabello, piel y ojos | por integrante, ver abajo | decisión de diseño coordinada |')
    else:
        L.append('| Cabello, piel y ojos | no aplica: la identidad es anatómica, ver ADN | ADN |')
    L.append('')
    if grupo:
        L.append('**Integrantes.** Parentesco o pertenencia visible, sin clonación. Cada uno cambia '
                 'al menos dos de los cuatro valores.')
        L.append('')
        L.append('| Integrante | Cabello | Textura | Piel | Ojos |')
        L.append('|---|---|---|---|---|')
        for g in grupo:
            L.append('| ' + ' | '.join(g) + ' |')
        L.append('')
    if es_nh:
        L.append('**No humano.** Pelo, piel y ojos no se aplican. La geometría de la ficha manda y '
                 'no se le agregan rasgos humanos que el repo no autorice.')
        L.append('')

    # 2. Detalle reconocible
    L.append('## 2. Detalle reconocible')
    L.append('')
    idt = limpiar_fuente(f['identificador'])
    abstracto = bool(re.search(r'expresad|expresión|condición|capacidad|mediante|por contexto', idt, re.I))
    L.append(f'**{may(idt)}**')
    L.append('')
    if c.get('dones'):
        L.append('Dones declarados en `personajes.json`: ' + '; '.join(c['dones']) + '.')
        L.append('')
    L.append(f"Ícono de la carta en la colección: `{c.get('icono','—')}`. Dependencia del "
             f"identificador en la matriz: {m['DI']} de 10.")
    L.append('')
    if abstracto:
        L.append('> **[REVISAR] Identificador abstracto.** Esta ficha no nombra un objeto concreto: '
                 'el reconocimiento depende del ambiente o del comportamiento. Es el caso más frágil '
                 'del roster, porque una carta sin objeto propio se vuelve genérica. Antes de generar, '
                 'confirmar con el lote correspondiente de `Documentacion/prompt_investigacion_85.md` '
                 'si hay un detalle mundialmente reconocible atestiguado que convenga incorporar a la '
                 'ficha. No inventarlo acá.')
        L.append('')

    # 3. Acción
    L.append('## 3. Acción y pose')
    L.append('')
    L.append(may(limpiar_fuente(f['accion'])))
    L.append('')
    L.append(f"Dirección corporal: {may(limpiar_fuente(f['direccion']))}")
    L.append('')
    L.append('Es la acción de la ficha y no se cambia. Si la acción no se puede representar sin '
             'agregar un objeto que no está en el inventario de la §5, frenar y avisar.')
    L.append('')

    # 4. Silueta
    L.append('## 4. Silueta y composición')
    L.append('')
    L.append(f"- **Firma de silueta:** {may(limpiar_fuente(f['silueta']))}")
    L.append(f"- **Composición:** {may(limpiar_fuente(f['composicion']))}")
    L.append(f"- **Densidad visual:** {f['densidad'].rstrip('.')} (matriz: {m['DV']} de 10).")
    L.append('')
    L.append('Números de la matriz, como límites de diseño y no como sugerencia:')
    L.append('')
    L.append('| ' + ' | '.join(EJES) + ' |')
    L.append('|' + '---|'*len(EJES))
    L.append('| ' + ' | '.join(str(m[e]) for e in EJES) + ' |')
    L.append('')
    L.append('Prueba de silueta: reducida a mancha negra, tiene que seguir distinguiéndose de los '
             'personajes de la §7.')
    L.append('')

    # 5. Inventario
    L.append('## 5. Inventario cerrado')
    L.append('')
    L.append('Lo único que puede verse:')
    L.append('')
    L.append(f"1. **{may(idt).rstrip('.')}** — identificador principal. ADN.")
    pistas = limpiar_fuente(f['pistas'])
    if pistas.lower().startswith('ning') or 'no aplica' in pistas.lower():
        L.append('2. Sin pistas secundarias autorizadas.')
    else:
        L.append(f'2. **Pistas secundarias autorizadas:** {may(pistas)} ADN. Subordinadas, nunca compitiendo '
                 'con el identificador.')
    if not es_nh:
        L.append(f"3. **Vestimenta lisa del vocabulario {GENTILICIO.get(c['mitologia'], c['mitologia'])}**, sin ornamento. Necesaria para "
                 'vestir al personaje; sin autorización de ningún adorno concreto, va lisa.')
    L.append('')
    L.append('Nada más. En particular, y porque ya pasó en la tanda anterior: **sin** broche, **sin** '
             'medallón, **sin** insignia, **sin** emblema, **sin** remaches decorativos, **sin** joyas, '
             '**sin** flores en el pelo, **sin** tatuajes, **sin** cuernos, **sin** alas que la ficha no '
             'pida, **sin** animal acompañante que no esté arriba, **sin** efecto mágico, **sin** runas, '
             '**sin** pseudo-texto, **sin** calzado con decisión no trazada.')
    L.append('')
    if c['mitologia'] == 'nordica':
        L.append(f'**Kit nórdico prohibido:** {KIT_NORDICO}. Ese conjunto se repitió en seis cartas '
                 'nórdicas y es la razón por la que parecen del mismo disfraz. Una mitología aporta '
                 'vocabulario, no uniforme.')
        L.append('')

    # 6. Escenario
    L.append('## 6. Escenario')
    L.append('')
    L.append('Sale de la acción de la §3 y de las pistas autorizadas de la §5, en ese orden. El fondo '
             'se diseña después del personaje, nunca antes.')
    L.append('')
    L.append(f"Protagonismo de fondo asignado: {m['PF']} de 10" +
             (', o sea que el contexto es esencial para leer la carta.' if m['PF'] >= 8
              else ', o sea que el contexto acompaña sin llevar peso.' if m['PF'] >= 5
              else ', o sea que el fondo es prescindible: mínimo suficiente y nada más.'))
    L.append('')
    L.append('**Sin** pedestal de roca ni acantilado heroico, **sin** templo griego de decoración, '
             '**sin** Olimpo, **sin** cielo azul con nubes por defecto, **sin** arquitectura de fantasía, '
             '**sin** paisaje panorámico que compita en nitidez. Quince de las treinta y una imágenes '
             'anteriores tenían el pedestal y once el templo.')
    L.append('')
    L.append('El fondo va con profundidad de campo real: menos nitidez y menos contraste que el '
             'personaje. Es el recurso principal para cumplir la jerarquía personaje → identificador → '
             'contexto.')
    L.append('')

    # 7. Separación
    L.append('## 7. Separación obligatoria')
    L.append('')
    rs = riesgos_nombrados(f['riesgos'], set(adn))
    rs = [x for x in rs if x != nombre]
    obs = [(x, por) for x, por in IV.RIESGOS_OBSERVADOS.get(nombre, []) if x in adn]
    esp = pj.get(nombre, {}).get('espejo')
    esp_nombre = next((n for n in adn if slug(n) == esp), None) if esp else None
    for x, por in obs:
        if x not in rs:
            rs.append(x)
    if esp_nombre and esp_nombre not in rs:
        rs.append(esp_nombre)
    if obs:
        L.append('**Clones comprobados en la auditoría del 2026-09-14.** Estos pares salieron de mirar '
                 'las imágenes reales y **no figuraban en el campo de riesgos de la ficha**: la lista del '
                 'ADN se armó sobre el papel y no vio los pares que después fallaron.')
        L.append('')
        for x, por in obs:
            L.append(f'- **{x}**: {por}.')
        L.append('')
    if esp_nombre:
        L.append(f'**Par de Espejo: {esp_nombre}.** El módulo Espejo de los Mundos los muestra '
                 'enfrentados en pantalla, así que las dos cartas tienen que separarse solas a simple '
                 'vista. Es el par donde un parecido cuesta doble.')
        L.append('')
    if rs:
        for x in rs:
            L.append(tabla_separacion(nombre, x, mat, adn))
            L.append('')
        L.append('Criterio de la ficha: ' + may(limpiar_fuente(f['riesgos'])))
        L.append('')
    else:
        L.append('La ficha no nombra un riesgo de parecido concreto: ' + may(limpiar_fuente(f['riesgos'])))
        L.append('')
    L.append('La diferencia no puede depender sólo del color, del fondo, del objeto sostenido, del '
             'peinado ni de una prenda. Matriz §4.1: el objeto no salva un clon.')
    L.append('')

    # 8. Encuadre
    L.append('## 8. Encuadre')
    L.append('')
    L.append('Vertical 3:4. Figura al 70–80% del alto del cuadro. Zona limpia detrás de la cabeza o del '
             'foco principal.')
    L.append('')
    L.append(f"Avatar circular, como restricción invisible: {may(limpiar_fuente(f['avatar']))} No se dibuja "
             'ningún círculo, medallón, marco, inset ni retrato secundario.')
    L.append('')

    # 9. Registro
    L.append('## 9. Registro')
    L.append('')
    L.append('Cálido, despierto, concentrado. No hace falta que sonría. Sin amenaza, sin crueldad, sin '
             'solemnidad genérica repetida de otra carta. La emoción sale de la historia del personaje y '
             'de lo que está haciendo.')
    L.append('')

    # 10. Contaminación
    L.append('## 10. Contaminación a evitar')
    L.append('')
    if nombre in POP:
        L.append(may(POP[nombre]))
    else:
        L.append('**Pendiente de la investigación** del lote correspondiente de '
                 '`Documentacion/prompt_investigacion_85.md`, campo `contaminacion_pop`. No bloquea la '
                 'generación, pero dejarlo vacío es aceptar el riesgo a ciegas: la contaminación de '
                 'cultura pop fue la falla más frecuente de la tanda anterior y la más difícil de ver '
                 'desde adentro.')
    L.append('')
    L.append('Nada de Marvel, Disney, DC, anime conocido ni videojuegos, sea o no de esta lista.')
    L.append('')

    # 11. Antes de generar
    L.append('## 11. Antes de generar')
    L.append('')
    L.append('Mostrar cinco líneas y esperar OK: qué se ve, cuál es el detalle reconocible, el '
             'inventario con su fuente, contra quién se separa y con qué diferencia concreta, y de dónde '
             'sale el escenario.')
    L.append('')
    L.append('Después de generar, declarar qué objetos quedaron en la imagen que no estaban en el '
             'inventario, qué campos de esta orden no se cumplieron, y los siete puntos del gate de '
             '`estilo_visual_aprobado.md` §7.')
    L.append('')
    return sid, '\n'.join(L)

def indice(adn, mat, pj):
    """Una tabla con los 85 para revisar de un saque las decisiones de identidad."""
    L = ['# Índice de órdenes de producción', '',
         'Generado por `herramientas/generar-ordenes.py`. No editar a mano.', '',
         'Una fila por personaje, para revisar de un saque las decisiones de identidad que antes no '
         'existían en ninguna fuente. **Origen** dice de dónde sale el color de pelo, la piel y los ojos:',
         '',
         '- **aprobada** — de una imagen que Willy ya aprobó, no se toca.',
         '- **fuente** — hay atestación citada en la ficha del ADN.',
         '- **ADN** — ya estaba declarado, se precisó sin contradecirlo.',
         '- **diseño** — decisión de diseño visual, sin atestación localizada. Es la mayoría, y es '
         'revisable: si la investigación de `Documentacion/prompt_investigacion_85.md` trae una '
         'atestación, gana la atestación.',
         '',
         'Para cambiar cualquier valor: editar `herramientas/identidad_visual.py` y volver a generar.',
         '', '---', '',
         '| Personaje | Tier | Mit. | Cabello | Textura | Piel | Ojos | Origen | Imagen | Notas |',
         '|---|---|---|---|---|---|---|---|---|---|']
    ETQ = {'ADN':'ADN','APROBADA':'aprobada','FUENTE':'fuente','DISENO':'diseño'}
    n_rev = n_pop = 0
    for nombre in adn:
        f, m, c = adn[nombre], mat[nombre], pj[nombre]
        sid = slug(nombre)
        ide = IV.IDENTIDAD.get(nombre)
        if ide:
            col, tex, piel, ojos, org = ide
            org = ETQ[org]
        elif nombre in IV.INTEGRANTES:
            col = tex = piel = ojos = 'por integrante'
            org = 'diseño'
        else:
            col = tex = piel = ojos = 'no aplica'
            org = 'ADN'
        notas = []
        idt = limpiar_fuente(f['identificador'])
        if re.search(r'expresad|expresión|condición|capacidad|mediante|por contexto', idt, re.I):
            notas.append('identificador abstracto'); n_rev += 1
        if nombre not in POP:
            notas.append('contaminación pop pendiente'); n_pop += 1
        if nombre in IV.RIESGOS_OBSERVADOS:
            notas.append('clon comprobado')
        img = 'sí, a reemplazar' if c.get('imagen') else 'no'
        L.append(f"| [{nombre}](../Produccion/{sid}.md) | {c['tier']} | {c['mitologia']} | {col} | "
                 f"{tex} | {piel} | {ojos} | {org} | {img} | {'; '.join(notas) or '—'} |")
    L += ['', '---', '',
          f'**{n_rev} identificadores abstractos.** No nombran un objeto concreto: el reconocimiento '
          'depende del ambiente o del comportamiento. Es el caso más frágil del roster, porque una carta '
          'sin objeto propio se vuelve genérica. Cada orden lo marca con `[REVISAR]`.', '',
          f'**{n_pop} contaminaciones pop pendientes** de la investigación. No bloquean, pero dejarlas '
          'vacías es aceptar el riesgo a ciegas: fue la falla más frecuente de la tanda anterior.', '',
          '**15 pares de clon comprobados** en la auditoría del 2026-09-14, ninguno de los cuales '
          'figuraba en el campo de riesgos del ADN. Van en la §7 de cada orden afectada.']
    return '\n'.join(L)

def main():
    adn, mat, pj = cargar()
    faltan = [n for n in adn if n not in mat or n not in pj]
    if faltan:
        sys.exit('Fuentes desalineadas: ' + ', '.join(faltan))
    sin_ident = [n for n in adn if n not in IV.IDENTIDAD and n not in IV.INTEGRANTES and n not in IV.NO_HUMANOS]
    if sin_ident:
        sys.exit('Sin identidad asignada en identidad_visual.py: ' + ', '.join(sin_ident))
    os.makedirs(r('Produccion'), exist_ok=True)
    n = 0
    for nombre in adn:
        sid, texto = orden(nombre, adn, mat, pj)
        open(r('Produccion', sid + '.md'), 'w', encoding='utf-8').write(texto)
        n += 1
    open(r('Documentacion', 'indice_ordenes_produccion.md'), 'w', encoding='utf-8').write(
        indice(adn, mat, pj) + '\n')
    print(f'{n} órdenes escritas en Produccion/ + Documentacion/indice_ordenes_produccion.md')

if __name__ == '__main__':
    main()
