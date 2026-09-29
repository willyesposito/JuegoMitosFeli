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

Uso: python3 herramientas/generar-ordenes.py --control control.json --ids thor tyr
Sólo escribe los destinos seleccionados del control, si cambian. No actualiza el índice.
Si editaste una orden a mano, el cambio se pierde: la edición va en la fuente.
"""
import argparse, json, re, sys, os, unicodedata
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
 'Vestimenta autorizada':'vestimenta',
 'Avatar circular':'avatar','Riesgos de parecido':'riesgos'}

# Estos controles son opcionales: se compilan sólo cuando la ficha los documenta.
CAMPOS_OPCIONALES = {'Separadores de parecido':'separadores',
 'Contaminación pop documentada':'contaminacion', 'Controles de acabado':'acabado'}

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
    with open(r('Documentacion','adn_visual_personajes_v1.md'), encoding='utf-8') as archivo:
        txt = archivo.read()
    adn = {}
    for b in re.split(r'\n### ', txt)[1:]:
        nombre = b.split('\n')[0].strip()
        if nombre.startswith('Pruebas'): continue
        d = {'nombre': nombre}
        for m in re.finditer(r'- \*\*(.+?):\*\*[ \t]*(.*?)(?=\n- \*\*|\n#|\n---|\Z)', b.split('\n---\n')[0], re.S):
            k = m.group(1).strip()
            if k in CAMPOS: d[CAMPOS[k]] = ' '.join(m.group(2).split())
            elif k in CAMPOS_OPCIONALES: d[CAMPOS_OPCIONALES[k]] = ' '.join(m.group(2).split())
        adn[nombre] = d
    mat = {}
    with open(r('Documentacion','matriz_adn_visual_numerica_v1.md'), encoding='utf-8') as archivo:
        lineas_matriz = archivo.readlines()
    for line in lineas_matriz:
        if not line.startswith('| '): continue
        c = [x.strip() for x in line.strip().strip('|').split('|')]
        if len(c) != 20 or c[1] not in ('Dorado','Plateado','Normal'): continue
        try: nums = [int(x) for x in c[5:20]]
        except ValueError: continue
        mat[c[0]] = {'tier':c[1],'mit':c[2],'morf':c[3],'lect':c[4], **dict(zip(EJES, nums))}
    with open(r('personajes.json'), encoding='utf-8') as archivo:
        pj = {c['nombre']: c for c in json.load(archivo)}
    regla = leer_regla_vestimenta(txt)
    if regla:
        for nombre, ficha in adn.items():
            if pj.get(nombre, {}).get('id') in regla['aplica_ids']:
                # La decisión vive en el bloque común, no en 57 fichas duplicadas.
                ficha['_regla_vestimenta_funcional'] = regla
    cargar_anti_clonacion(adn, mat, pj)
    cargar_revision_identificadores(adn, pj)
    return adn, mat, pj

def leer_regla_vestimenta(texto):
    """Lee sólo el bloque común aprobado; una fuente mal formada no se ignora."""
    inicio = '<!-- regla-vestimenta-funcional-lote:inicio -->'
    fin = '<!-- regla-vestimenta-funcional-lote:fin -->'
    if inicio not in texto and fin not in texto:
        return None
    if texto.count(inicio) != 1 or texto.count(fin) != 1:
        raise ValueError('Bloque común de vestimenta ausente, duplicado o incompleto')
    bloque = texto.split(inicio, 1)[1].split(fin, 1)[0]
    contenido = re.fullmatch(r'\s*```json\s*\n(.*?)\n```\s*', bloque, re.S)
    if not contenido:
        raise ValueError('Formato inválido de la regla común de vestimenta')
    regla = json.loads(contenido.group(1))
    ids = regla['aplica_ids']
    if not ids or len(ids) != len(set(ids)):
        raise ValueError('IDs vacíos o duplicados en la regla de vestimenta')
    if not set(regla['excepciones']).issubset(ids):
        raise ValueError('Excepción de vestimenta fuera del alcance aprobado')
    return regla

def vestimenta_funcional(ficha, personaje, es_no_humano):
    """Resuelve prendas y calzado desde la decisión común, sin crear anatomía."""
    regla = ficha.get('_regla_vestimenta_funcional')
    if not regla or personaje['id'] not in regla['aplica_ids']:
        return []
    decision = dict(regla['bases'][personaje['mitologia']])
    decision.update(regla['excepciones'].get(personaje['id'], {}))
    numero = 3 if es_no_humano else 4
    lineas = [f'{numero}. **Resolución funcional de vestimenta y calzado:** '
              '`Documentacion/adn_visual_personajes_v1.md`, sección '
              '«Regla común de vestimenta funcional y calzado — lote del 2026-09-28». '
              + regla['origen']]
    for campo, etiqueta in (('vestimenta', 'Vestimenta funcional'), ('calzado', 'Calzado')):
        if decision.get(campo):
            lineas.append('   - **' + etiqueta + ':** ' + decision[campo])
    if not es_no_humano:
        lineas.append('   - **Alcance:** ' + regla['comun'])
    if decision.get('notas'):
        lineas.append('   - **Excepción anatómica:** ' + decision['notas'])
    for pendiente in decision.get('pendientes', []):
        lineas.append('   - [FALTA: ' + pendiente + ']')
    return lineas

GENTILICIO = {'griega':'griego', 'nordica':'nórdico', 'romana':'romano'}

def may(s):
    """Los campos del ADN arrancan en minúscula porque seguían a una etiqueta en negrita."""
    return s[:1].upper() + s[1:] if s else s

def limpiar_fuente(s):
    """Saca las notas de Criterio de fuente, que van citadas aparte."""
    texto = re.sub(r'\*\*Criterio de fuente:\*\*.*', '', s).strip().rstrip('.').strip()
    return texto + '.' if texto else ''

def problemas_mecanicos(nombre, adn, mat, pj):
    """Comprueba datos y referencias; no aprueba decisiones ni pruebas visuales."""
    problemas = []
    for etiqueta, datos in (('ADN', adn), ('matriz', mat), ('personajes.json', pj)):
        if nombre not in datos:
            problemas.append('registro ausente en ' + etiqueta)
    if problemas:
        return problemas
    f, m, c = adn[nombre], mat[nombre], pj[nombre]
    for campo in CAMPOS.values():
        if campo != 'vestimenta' and (not limpiar_fuente(f.get(campo, ''))
                                     or '[FALTA:' in f.get(campo, '')):
            problemas.append('campo ADN vacío: ' + campo)
    for campo in ('id', 'nombre', 'mitologia', 'tier'):
        if not str(c.get(campo, '')).strip():
            problemas.append('campo de personaje vacío: ' + campo)
    for eje in EJES:
        if type(m.get(eje)) is not int or not 1 <= m[eje] <= 10:
            problemas.append('eje inválido: ' + eje)
    if c.get('mitologia') not in GENTILICIO:
        problemas.append('mitología sin vocabulario definido')
    if str(m.get('tier', '')).lower() != c.get('tier'):
        problemas.append('tier desalineado entre matriz y personaje')
    if m.get('mit') != c.get('mitologia'):
        # La matriz usa los nombres con mayúscula y acento.
        if slug(str(m.get('mit', ''))) != c.get('mitologia'):
            problemas.append('mitología desalineada entre matriz y personaje')
    ident = IV.IDENTIDAD.get(nombre)
    grupo = IV.INTEGRANTES.get(nombre)
    if ident is not None:
        if len(ident) != 5 or not all(str(v).strip() for v in ident) or ident[-1] not in IV.ORIGEN_TEXTO:
            problemas.append('identidad incompleta o sin origen válido')
    elif grupo is not None:
        if not grupo or any(len(g) != 5 or not all(str(v).strip() for v in g) for g in grupo):
            problemas.append('integrantes incompletos')
    elif nombre not in IV.NO_HUMANOS:
        problemas.append('identidad sin asignar')
    referencias = riesgos_nombrados(f.get('riesgos', ''), set(adn))
    referencias += [x for x, _ in IV.RIESGOS_OBSERVADOS.get(nombre, [])]
    espejo = c.get('espejo')
    if espejo:
        contraparte = next((n for n in pj if pj[n].get('id') == espejo), None)
        if contraparte:
            referencias.append(contraparte)
        else:
            problemas.append('referencia de espejo ausente: ' + espejo)
    for referencia in sorted(set(referencias) - {nombre}):
        if referencia not in adn or referencia not in mat:
            problemas.append('referencia de separación ausente: ' + referencia)
            continue
        for campo in ('silueta', 'accion'):
            if not limpiar_fuente(adn[referencia].get(campo, '')):
                problemas.append('referencia incompleta: ' + referencia + '/' + campo)
        if any(type(mat[referencia].get(e)) is not int or not 1 <= mat[referencia][e] <= 10 for e in EJES):
            problemas.append('matriz de referencia inválida: ' + referencia)
        identidad = IV.IDENTIDAD.get(referencia)
        if identidad is not None and (len(identidad) != 5 or not all(str(v).strip() for v in identidad)):
            problemas.append('identidad de referencia incompleta: ' + referencia)
    return problemas

FUENTE_REVISION_IDENTIFICADORES = 'Documentacion/revision_identificadores_lote_2026-09-28.json'
CAMPOS_RECONOCIMIENTO = ('identificador', 'accion', 'direccion', 'silueta',
                         'composicion', 'pistas', 'avatar')

def cargar_revision_identificadores(adn, pj):
    """Carga las revisiones textuales; una ficha cambiada vuelve a control pendiente."""
    ruta = r(*FUENTE_REVISION_IDENTIFICADORES.split('/'))
    if not os.path.exists(ruta):
        return
    with open(ruta, encoding='utf-8') as archivo:
        fuente = json.load(archivo)
    if fuente.get('version') != 1:
        raise ValueError('Versión inválida de revisión de identificadores')
    for sid, revision in fuente['objetivos'].items():
        nombre = revision['nombre']
        if nombre not in adn or pj.get(nombre, {}).get('id') != sid:
            raise ValueError('Revisión de identificador desalineada: ' + sid)
        if revision['estado'] not in ('DOCUMENTADO', 'CONTROL_PENDIENTE'):
            raise ValueError('Estado inválido de revisión: ' + sid)
        if (not revision['conclusion'].strip()
                or set(revision['campos_revisados']) != set(CAMPOS_RECONOCIMIENTO)):
            raise ValueError('Revisión sin evidencia completa: ' + sid)
        cambios = [campo for campo in CAMPOS_RECONOCIMIENTO
                   if limpiar_fuente(adn[nombre].get(campo, ''))
                   != limpiar_fuente(revision['campos_revisados'][campo])]
        control = dict(revision)
        control['id'] = sid
        if cambios:
            control['estado'] = 'CONTROL_PENDIENTE'
            control['conclusion'] = ('La evidencia revisada cambió en: ' + ', '.join(cambios)
                                     + '. Repetir el control textual; no conservar la conclusión anterior.')
        adn[nombre]['_revision_identificador'] = control

def control_identificador(ficha):
    """Una palabra sólo selecciona candidatos; no demuestra falta de identidad."""
    if '_revision_identificador' in ficha:
        return ficha['_revision_identificador']
    identificador = limpiar_fuente(ficha.get('identificador', ''))
    if re.search(r'expresad|expresión|condición|capacidad|mediante|por contexto', identificador, re.I):
        return {'estado': 'CONTROL_PENDIENTE',
                'conclusion': 'Coincidencia léxica sin evaluación textual documentada. Revisar acción, '
                              'silueta, ambiente, pistas y avatar antes de concluir si hay un faltante '
                              'material. No exige un objeto nuevo ni investigación externa.'}
    return None

def lineas_control_identificador(control):
    """Muestra la evidencia y separa preparación textual de validación visual."""
    etiqueta = ('**Reconocimiento textual: DOCUMENTADO.**' if control['estado'] == 'DOCUMENTADO'
                else '**[REVISAR] Control de reconocimiento pendiente.**')
    lineas = ['> ' + etiqueta + ' ' + control['conclusion']
              + ' La validación visual sigue pendiente.']
    if control.get('id'):
        lineas.append('> Fuente de la revisión: `' + FUENTE_REVISION_IDENTIFICADORES
                      + '`, objetivo `' + control['id']
                      + '`. Evidencia de acción, silueta, composición, pistas y avatar del ADN.')
    return lineas

FUENTE_ANTI_CLONACION = 'Documentacion/anti_clonacion_lote_2026-09-28.json'

def cargar_anti_clonacion(adn, mat, pj):
    """Carga sólo las decisiones editoriales del lote y comprueba sus fuentes."""
    ruta = r(*FUENTE_ANTI_CLONACION.split('/'))
    if not os.path.exists(ruta):
        return
    with open(ruta, encoding='utf-8') as archivo:
        fuente = json.load(archivo)
    for sid, decision in fuente['objetivos'].items():
        nombre = decision['nombre']
        if nombre not in adn or pj.get(nombre, {}).get('id') != sid:
            raise ValueError('Objetivo anti-clonación desalineado: ' + sid)
        pares = decision['comparaciones']
        riesgos = [p['riesgo'] for p in pares]
        if len(riesgos) < 3 or len(set(riesgos)) != len(riesgos) or nombre in riesgos:
            raise ValueError('Se requieren tres riesgos distintos: ' + nombre)
        for par in pares:
            rival = par['riesgo']
            if rival not in adn or rival not in mat:
                raise ValueError('Comparador ausente: ' + rival)
            if not par['motivo'].strip():
                raise ValueError('Riesgo sin justificar: ' + nombre + '/' + rival)
            for eje in ('silueta', 'pose', 'composicion'):
                if not par['separadores'].get(eje, '').strip():
                    raise ValueError('Separador ausente: ' + nombre + '/' + rival + '/' + eje)
            # Una fuente cambiada obliga a revisar el par, no conserva un falso SÍ.
            for sujeto in (nombre, rival):
                ficha = adn[sujeto]
                for campo, esperado in fuente['fichas'][sujeto]['campos'].items():
                    actual = limpiar_fuente(ficha.get(campo, ''))
                    if actual != limpiar_fuente(esperado):
                        raise ValueError('Evidencia anti-clonación cambió: ' + sujeto + '/' + campo)
                for eje, esperado in fuente['fichas'][sujeto]['matriz'].items():
                    if mat[sujeto][eje] != esperado:
                        raise ValueError('Matriz anti-clonación cambió: ' + sujeto + '/' + eje)
        adn[nombre]['_anti_clonacion'] = decision

def detalle_separacion_documentada(nombre, riesgo, adn):
    """Compila la justificación y los tres contrastes positivos ya documentados."""
    decision = adn[nombre].get('_anti_clonacion')
    if not decision:
        return ''
    par = next((p for p in decision['comparaciones'] if p['riesgo'] == riesgo), None)
    if par is None:
        raise ValueError('Riesgo vigente sin separadores documentados: ' + nombre + '/' + riesgo)
    lineas = [
        '**Por qué se controla este par:** ' + par['motivo'] + '.',
        '**Filtro numérico:** distancia ponderada ' + format(par['distancia'], '.3f') +
        '; ' + par['lectura_filtro'] + '. No sustituye la comparación textual.',
        '',
    ]
    for campo, etiqueta in (('silueta', 'Separador de silueta'),
                           ('pose', 'Separador de pose'),
                           ('composicion', 'Separador de composición')):
        lineas.append('- **' + etiqueta + ':** ' + par['separadores'][campo])
    lineas += ['', '**Fuente de los separadores:** ' + chr(96) + FUENTE_ANTI_CLONACION +
               chr(96) + ', objetivo ' + decision['id'] + ', comparación ' + riesgo +
               '; contrastes derivados del ADN y la matriz, sin nuevo diseño.']
    return '\n'.join(lineas)

def riesgos_nombrados(texto, todos):
    hallados = []
    for n in sorted(todos, key=lambda n: (-len(n), n)):
        if re.search(r'\b' + re.escape(n) + r'\b', texto) and not any(n in h for h in hallados):
            hallados.append(n)
    # Respeta el orden de la fuente; no depende del orden aleatorio de un conjunto.
    return sorted(hallados, key=lambda n: re.search(r'\b' + re.escape(n) + r'\b', texto).start())

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
    detalle = detalle_separacion_documentada(nombre, riesgo, adn)
    if detalle:
        l += ['', detalle]
    return '\n'.join(l)

def cuerpo_en_palabras(m):
    """Traduce los ejes de cuerpo a español ejecutable.

    La tabla de siglas de la §4 no la puede ejecutar un generador: "MC 3" no es una
    instrucción. Hermes salió musculoso tres veces seguidas teniendo masa 3 y hombros 3
    declarados en la matriz. Los números estaban; lo que faltaba era decirlos.
    """
    mc, an, ea, ev = m['MC'], m['AN'], m['EA'], m['EV']
    masa = ('muy delgado, de contextura frágil' if mc <= 2 else
            'delgado y liviano, sin masa muscular marcada' if mc <= 4 else
            'de contextura media, atlética sin volumen' if mc <= 6 else
            'corpulento, con masa evidente' if mc <= 8 else
            'de masa enorme, muy por encima de lo humano')
    hombros = ('hombros estrechos' if an <= 3 else
               'hombros de ancho medio' if an <= 6 else
               'hombros anchos' if an <= 8 else
               'hombros muy anchos, que dominan la silueta')
    escala = ('de escala menor que una persona común' if ea <= 3 else
              'de escala humana' if ea <= 6 else
              'de escala algo mayor que humana' if ea <= 8 else
              'de escala claramente sobrehumana')
    edad = ('muy joven' if ev <= 2 else
            'joven' if ev <= 4 else
            'de edad media' if ev <= 6 else
            'entrado en años' if ev <= 8 else
            'anciano')
    return masa, hombros, escala, edad


def orden(nombre, adn, mat, pj):
    problemas = problemas_mecanicos(nombre, adn, mat, pj)
    if problemas:
        return slug(nombre), '\n'.join([
            f'# Orden de producción — {nombre}', '',
            '**Completitud mecánica: INCOMPLETA.**',
            '**Validación visual: PENDIENTE.** No generar a partir de esta salida incompleta.', '',
            '> Generada por `herramientas/generar-ordenes.py`. Corregir las fuentes y recompilar.', '',
            *('[FALTA: ' + problema + ']' for problema in problemas), ''])
    f, m = adn[nombre], mat[nombre]
    c = pj[nombre]
    sid = slug(nombre)
    es_nh = nombre in IV.NO_HUMANOS
    grupo = IV.INTEGRANTES.get(nombre)
    ident = IV.IDENTIDAD.get(nombre)
    img = c.get('imagen')

    L = [f'# Orden de producción — {nombre}', '']
    L.append('**Completitud mecánica: COMPLETA.** Campos obligatorios y referencias comprobados; '
             'vestimenta opcional con alternativa general cuando falta.')
    L.append('**Validación visual: PENDIENTE.** Compilar no acredita silueta, pose, composición, '
             'avatar ni colisión; tampoco aprueba identidad, inventario o separación.')
    L.append('')
    if img:
        L.append(f'**Imagen actual:** `{img}`, **a reemplazar.** Es de un estilo anterior: la '
                 'colección quedó en cine de animación 3D el 2026-09-14, con el acabado calibrado '
                 'por `imagenes/teseo.jpg` y el registro emocional por `imagenes/hermes.jpg`.')
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
    control_reconocimiento = control_identificador(f)
    L.append(f'**{may(idt)}**')
    L.append('')
    if c.get('dones'):
        L.append('Dones declarados en `personajes.json`: ' + '; '.join(c['dones']) + '.')
        L.append('')
    L.append(f"Ícono de la carta en la colección: `{c.get('icono','—')}`. Dependencia del "
             f"identificador en la matriz: {m['DI']} de 10.")
    L.append('')
    if control_reconocimiento:
        L.extend(lineas_control_identificador(control_reconocimiento))
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
    L.append('**Y al revés, que es el caso que falló tres veces:** si un objeto exigido de la §5 '
             'no entra en la pose tal como está descripta, **el objeto no se descarta**. Se ajusta '
             'la pose lo mínimo para que entre, conservando la dirección corporal y la diagonal. '
             'Una silueta de carrera con los dos puños cerrados no deja mano para un bastón, y la '
             'salida no es correr sin el bastón: es que una mano lo lleve. Declarar el ajuste en el '
             'preflight. Una pista condicional sólo se exige si se cumple su condición; '
             'las alternativas con «o» se conservan como alternativas, sin exigir todas a la vez.')
    L.append('')

    # 4. Silueta
    L.append('## 4. Silueta y composición')
    L.append('')
    L.append(f"- **Firma de silueta:** {may(limpiar_fuente(f['silueta']))}")
    L.append(f"- **Composición:** {may(limpiar_fuente(f['composicion']))}")
    L.append(f"- **Densidad visual:** {f['densidad'].rstrip('.')} (matriz: {m['DV']} de 10).")
    L.append('')
    masa, hombros, escala, edad = cuerpo_en_palabras(m)
    L.append(f'- **Cuerpo, y esto manda sobre cualquier intuición:** {edad}, {masa}, {hombros}, '
             f'{escala}.')
    L.append('')
    L.append('La contextura sale de acá y no de lo que el personaje representa. Un dios no es '
             'corpulento por ser dios, ni un héroe es musculoso por ser héroe: si estos valores '
             'piden un cuerpo liviano, va un cuerpo liviano. **Sin abdominales marcados, sin '
             'deltoides separados, sin bíceps de gimnasio y sin espalda en V** salvo que la masa '
             'y los hombros de arriba lo pidan expresamente.')
    L.append('')
    L.append('Los quince ejes completos, como límites de diseño y no como sugerencia '
             '(EV edad visual, MC masa corporal, EA escala aparente, AF angulosidad facial, '
             'CO contorno superior, AC apertura corporal, DP dinamismo de pose, VD verticalidad, '
             'DV densidad visual, OV oscuridad, DI dependencia del identificador, AN anchura de '
             'hombros, PF protagonismo de fondo, RM rigidez de materiales, RA rareza anatómica):')
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
    hay_pistas = bool(pistas) and not pistas.lower().startswith(('ning', 'no aplica'))
    if hay_pistas:
        L.append(f'2. **Pistas secundarias autorizadas:** {pistas} ADN. '
                 'Subordinadas al identificador. Respetar las condiciones y alternativas del texto: '
                 '«si hace falta» y «cuando corresponda» no exigen presencia incondicional; '
                 '«o» no exige ambas opciones.')
    else:
        L.append('2. Sin pistas secundarias autorizadas.')
    if not es_nh:
        vest = limpiar_fuente(f.get('vestimenta', ''))
        if vest:
            L.append(f'3. **Vestimenta autorizada:** {may(vest)} ADN. Sin adornos más allá de lo que '
                     'dice esa línea.')
        else:
            L.append(f"3. **Vestimenta lisa del vocabulario {GENTILICIO.get(c['mitologia'], c['mitologia'])}**, sin ornamento. Necesaria para "
                     'vestir al personaje; sin autorización de ningún adorno concreto, va lisa.')
    L.extend(vestimenta_funcional(f, c, es_nh))
    L.append('')
    L.append('Nada más. En particular, y porque ya pasó en la tanda anterior: **sin** broche, **sin** '
             'medallón, **sin** insignia, **sin** emblema, **sin** remaches decorativos, **sin** joyas, '
             '**sin** flores en el pelo, **sin** tatuajes, **sin** cuernos, **sin** alas que la ficha no '
             'pida, **sin** animal acompañante que no esté arriba, **sin** efecto mágico decorativo '
             'agregado por fuera del identificador, **sin** runas, '
             '**sin** pseudo-texto, **sin** calzado con decisión no trazada.')
    L.append('')
    if hay_pistas:
        L.append('**Inventario por exceso y por omisión.** Lo que no figura no entra. '
                 'Mostrar los elementos exigidos por el ADN, aplicar las pistas condicionales '
                 'sólo cuando se cumpla su condición y conservar las alternativas como tales. '
                 'El identificador principal manda, las pistas acompañan y nada tapa la cara '
                 'ni el identificador. En el preflight, declarar qué condiciones se cumplen '
                 'y qué alternativa se usa, sin agregar decisiones ajenas a la fuente.')
        L.append('')

    L.append('**La magia es obligatoria y sale del identificador.** El detalle reconocible de la '
             '§2 no se muestra apoyado y quieto: se muestra funcionando, el entorno reacciona, y el '
             'don produce su fenómeno visible. Estela, chispas, partículas, luz propia que ilumina '
             'de verdad, deformación del aire, materia que responde: todo eso está autorizado y va '
             'sin timidez. Esto no agrega ningún objeto al inventario de arriba, porque lo que se '
             'enciende es lo que el personaje ya tiene.')
    L.append('')
    L.append('Las tres capas y las cuatro reglas están en `estilo_visual_aprobado.md` §7, que '
             'gobierna. En resumen: el efecto nace del don y se puede señalar de dónde salió; no '
             'tapa la cara ni el identificador; el color sale del don o del material y nunca es el '
             'dorado por default; y el fenómeno es propio de este personaje y no el mismo de las '
             'otras 84. Queda afuera el aura que envuelve el cuerpo y disuelve la silueta, el halo '
             'detrás de la cabeza, las runas o pseudo-texto flotando, y cualquier efecto que no se '
             'pueda trazar al don. Si el identificador no da para un fenómeno, la carta va con el '
             'objeto en actividad y el entorno reaccionando, y no se inventa uno.')
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
    for par in f.get('_anti_clonacion', {}).get('comparaciones', []):
        if par['riesgo'] not in rs:
            rs.append(par['riesgo'])
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
    if f.get('_anti_clonacion'):
        L.append('**Preparación textual anti-clonación: DOCUMENTADA.** Tres o más riesgos '
                 'justificados y separadores de silueta, pose y composición; la prueba visual '
                 'de silueta, pose y avatar sigue pendiente.')
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
    if limpiar_fuente(f.get('separadores', '')):
        L.append('**Separadores documentados:** ' + limpiar_fuente(f['separadores']))
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

    if limpiar_fuente(f.get('acabado', '')):
        L.append('**Controles de acabado documentados:** ' + limpiar_fuente(f['acabado']))
        L.append('')

    # 10. Contaminación
    L.append('## 10. Contaminación a evitar')
    L.append('')
    if limpiar_fuente(f.get('contaminacion', '')):
        L.append(limpiar_fuente(f['contaminacion']))
    elif nombre in POP:
        L.append(may(POP[nombre]))
    else:
        L.append('**Investigación externa pendiente.** No se relevaron versiones modernas '
                 'específicas para este personaje. Aplicar los controles disponibles del repo de '
                 '[Documentacion/controles_contaminacion_pop_lote_2026-09-28.md]'
                 '(../Documentacion/controles_contaminacion_pop_lote_2026-09-28.md), junto con '
                 'la identidad, acción, inventario y exclusiones de esta orden. '
                 'Este pendiente no constituye por sí solo un bloqueo material ni certifica '
                 'ausencia de contaminación. Las representaciones y sus rasgos concretos siguen '
                 'sin investigar; no reemplazar ese faltante por asociaciones de memoria.')
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
    L.append('Después de generar, declarar cuatro cosas: qué objetos quedaron en la imagen que no '
             'estaban en el inventario; **qué elementos exigidos de la §5 no aparecieron y por '
             'qué, qué condiciones no se cumplieron y qué alternativas se usaron**; qué campos '
             'de esta orden no se cumplieron; y los once puntos del gate de '
             '`estilo_visual_aprobado.md` §9, que ahora son doce.')
    L.append('')
    L.append('El segundo control es tan importante como el primero y es el que faltaba hasta el '
             '2026-09-14: una imagen puede cumplir el inventario cerrado al pie de la letra y '
             'seguir siendo una carta fallada por no mostrar nada de lo que hace reconocible al '
             'personaje.')
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
    n_rev = n_doc = n_pop = 0
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
        control = control_identificador(f)
        if control:
            if control['estado'] == 'DOCUMENTADO':
                notas.append('reconocimiento textual documentado'); n_doc += 1
            else:
                notas.append('control de reconocimiento pendiente'); n_rev += 1
        if nombre not in POP and not limpiar_fuente(f.get('contaminacion', '')):
            notas.append('contaminación pop pendiente'); n_pop += 1
        if nombre in IV.RIESGOS_OBSERVADOS:
            notas.append('clon comprobado')
        img = 'sí, a reemplazar' if c.get('imagen') else 'no'
        L.append(f"| [{nombre}](../Produccion/{sid}.md) | {c['tier']} | {c['mitologia']} | {col} | "
                 f"{tex} | {piel} | {ojos} | {org} | {img} | {'; '.join(notas) or '—'} |")
    L += ['', '---', '',
          f'**{n_rev} controles de reconocimiento pendientes.** Una coincidencia léxica no '
          'demuestra un faltante material ni obliga a incorporar un objeto o investigar.', '',
          f'**{n_doc} reconocimientos textuales documentados.** La validación visual sigue pendiente.', '',
          f'**{n_pop} contaminaciones pop pendientes** de la investigación. No bloquean, pero dejarlas '
          'vacías es aceptar el riesgo a ciegas: fue la falla más frecuente de la tanda anterior.', '',
          '**15 pares de clon comprobados** en la auditoría del 2026-09-14, ninguno de los cuales '
          'figuraba en el campo de riesgos del ADN. Van en la §7 de cada orden afectada.']
    return '\n'.join(L)

def seleccionar(control, ids, pj):
    """Valida toda la selección antes de escribir; usa el destino declarado en el lote."""
    entradas = control.get('personajes', [])
    por_id = {e['id']: e for e in entradas}
    if len(por_id) != len(entradas) or len(ids) != len(set(ids)):
        raise ValueError('IDs duplicados en el control o la selección')
    if not ids or any(i not in por_id for i in ids):
        raise ValueError('La selección debe contener sólo IDs explícitos del control')
    nombres = {c['id']: n for n, c in pj.items()}
    seleccion = []
    for sid in ids:
        entrada = por_id[sid]
        destino = entrada['orden_produccion']
        if (not re.fullmatch(r'Produccion/[a-z0-9_]+\.md', destino)
                or sid not in nombres or entrada['nombre'] != nombres[sid]):
            raise ValueError('Entrada desalineada o destino inválido: ' + sid)
        seleccion.append((nombres[sid], destino))
    if len({destino for _, destino in seleccion}) != len(seleccion):
        raise ValueError('Destinos duplicados en la selección')
    return seleccion

def main(argv=None):
    parser = argparse.ArgumentParser(description='Compila sólo una selección explícita de un control.')
    parser.add_argument('--control', required=True, help='JSON de control; se lee sin modificarlo')
    parser.add_argument('--ids', nargs='+', required=True, help='IDs del control que se recompilan')
    args = parser.parse_args(argv)
    adn, mat, pj = cargar()
    with open(args.control, encoding='utf-8') as archivo:
        control = json.load(archivo)
    try:
        seleccion = seleccionar(control, args.ids, pj)
    except (ValueError, KeyError) as error:
        parser.error(str(error))
    # Primero compila en memoria; un error no deja una tanda escrita a medias.
    salidas = [(destino, orden(nombre, adn, mat, pj)[1]) for nombre, destino in seleccion]
    os.makedirs(r('Produccion'), exist_ok=True)
    n = 0
    for destino, texto in salidas:
        ruta = r(*destino.split('/'))
        if os.path.exists(ruta):
            with open(ruta, encoding='utf-8') as archivo:
                if archivo.read() == texto:
                    continue
        with open(ruta, 'w', encoding='utf-8', newline='\n') as archivo:
            archivo.write(texto)
        n += 1
    print(f'{n} órdenes actualizadas de {len(seleccion)} seleccionadas. Índice sin cambios.')

if __name__ == '__main__':
    main()
