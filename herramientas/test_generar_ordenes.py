# -*- coding: utf-8 -*-
"""Validaciones mecánicas: python herramientas/test_generar_ordenes.py."""
import copy
import importlib.util
import json
from pathlib import Path
import tempfile
import unittest
from unittest.mock import patch

spec = importlib.util.spec_from_file_location('generar_ordenes', Path(__file__).with_name('generar-ordenes.py'))
g = importlib.util.module_from_spec(spec)
spec.loader.exec_module(g)


class CompilacionTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.fuentes = g.cargar()

    def setUp(self):
        self.adn, self.mat, self.pj = copy.deepcopy(self.fuentes)

    def orden(self):
        return g.orden('Thor', self.adn, self.mat, self.pj)[1]

    def test_vacio_no_se_convierte_en_punto(self):
        for texto in ('', '   ', '.', '**Criterio de fuente:** nota sin contenido'):
            self.assertEqual(g.limpiar_fuente(texto), '')
        self.assertEqual(g.limpiar_fuente('martillo. **Criterio de fuente:** nota'), 'martillo.')

    def test_vestimenta_opcional_y_explicita(self):
        for valor in (None, '', '  ', '**Criterio de fuente:** nota'):
            if valor is None:
                self.adn['Thor'].pop('vestimenta', None)
            else:
                self.adn['Thor']['vestimenta'] = valor
            texto = self.orden()
            self.assertIn('Vestimenta lisa del vocabulario nórdico', texto)
            self.assertNotIn('Vestimenta autorizada:** .', texto)
            self.assertIn('Completitud mecánica: COMPLETA', texto)
        self.adn['Thor']['vestimenta'] = 'prenda de prueba sin ornamento'
        texto = self.orden()
        self.assertIn('Vestimenta autorizada:** Prenda de prueba sin ornamento.', texto)
        self.assertNotIn('Vestimenta lisa del vocabulario', texto)

    def test_condiciones_y_alternativas_no_se_imponen(self):
        for pistas in ('cabras si hace falta', 'rayos cuando corresponda', 'capa corta o pieles'):
            self.adn['Thor']['pistas'] = pistas
            texto = self.orden()
            self.assertIn(pistas + '.', texto)
            for orden_vieja in ('y van en la imagen', 'pero presentes', 'van los tres', 'lo que figura tiene que entrar'):
                self.assertNotIn(orden_vieja, texto)
            self.assertIn('si un objeto exigido', texto)

    def test_sin_pistas_y_no_humano(self):
        self.adn['Thor']['pistas'] = 'ninguna'
        self.assertIn('Sin pistas secundarias autorizadas', self.orden())
        texto = g.orden('Pegaso', self.adn, self.mat, self.pj)[1]
        self.assertNotIn('Vestimenta lisa', texto)
        self.assertNotIn('Vestimenta autorizada:', texto)

    def test_regla_funcional_limitada_al_lote(self):
        regla = self.adn['Thor']['_regla_vestimenta_funcional']
        self.assertEqual(len(regla['aplica_ids']), 57)
        self.assertNotIn('_regla_vestimenta_funcional', self.adn['Zeus'])
        texto = g.orden('Zeus', self.adn, self.mat, self.pj)[1]
        self.assertNotIn('Resolución funcional de vestimenta y calzado', texto)
        self.assertIn('Botas simples de cuero', self.orden())
        texto = g.orden('Odiseo', self.adn, self.mat, self.pj)[1]
        self.assertIn('Sandalias simples de cuero', texto)

    def test_excepciones_conservan_anatomia_y_pendientes(self):
        for nombre in ('Pegaso', 'Quirón', 'Esfinge', 'Minotauro', 'Fénix',
                       'Cerbero', 'Ratatosk', 'Fenrir', 'Calisto'):
            texto = g.orden(nombre, self.adn, self.mat, self.pj)[1]
            self.assertNotIn('**Vestimenta funcional:** Túnica', texto)
            self.assertNotIn('**Calzado:** Sandalias', texto)
            self.assertNotIn('**Calzado:** Botas', texto)
        for nombre, pendiente in (('Aquiles', 'Detalle identificatorio repetido del talón'),
                                   ('Quirón', 'Vestimenta superior del torso humano'),
                                   ('Minotauro', 'Anatomía inferior y cobertura')):
            texto = g.orden(nombre, self.adn, self.mat, self.pj)[1]
            self.assertIn('[FALTA: ' + pendiente, texto)
            self.assertIn('Validación visual: PENDIENTE', texto)
        texto = g.orden('Dafne', self.adn, self.mat, self.pj)[1]
        self.assertIn('raíces visibles en la parte baja', texto)
        self.assertNotIn('**Calzado:** Sandalias', texto)
        texto = g.orden('Skadi', self.adn, self.mat, self.pj)[1]
        self.assertIn('Botas funcionales simples compatibles con los esquís', texto)

    def test_excepciones_culturales_no_heredan_estetica_imperial(self):
        for nombre, vocabulario in (('Eneas', 'Edad del Bronce'), ('Dido', 'fenicio')):
            texto = g.orden(nombre, self.adn, self.mat, self.pj)[1]
            self.assertIn(vocabulario, texto)
            self.assertIn('**Calzado:** Sandalias simples de cuero', texto)
        for nombre in ('Pan', 'Medusa'):
            texto = g.orden(nombre, self.adn, self.mat, self.pj)[1]
            self.assertIn('**Excepción anatómica:**', texto)

    def test_regla_corrupta_no_desaparece_silenciosamente(self):
        for texto in ('<!-- regla-vestimenta-funcional-lote:inicio -->',
                      '<!-- regla-vestimenta-funcional-lote:fin -->'):
            with self.assertRaises(ValueError):
                g.leer_regla_vestimenta(texto)
        self.assertIsNone(g.leer_regla_vestimenta('fuente anterior sin regla'))

    def test_incompleta_y_visual_pendiente(self):
        for campo in ('accion', 'pistas', 'avatar'):
            with self.subTest(campo=campo):
                fuentes = copy.deepcopy(self.adn)
                fuentes['Thor'][campo] = ''
                texto = g.orden('Thor', fuentes, self.mat, self.pj)[1]
                self.assertIn('Completitud mecánica: INCOMPLETA', texto)
                self.assertIn('[FALTA: campo ADN vacío: ' + campo + ']', texto)
                self.assertIn('Validación visual: PENDIENTE', texto)
                self.assertNotIn('LISTA', texto)
        self.mat['Thor']['MC'] = 11
        self.assertIn('INCOMPLETA', self.orden())
        del self.mat['Zeus']
        self.assertIn('referencia de separación ausente: Zeus', self.orden())

    def test_parser_no_absorbe_el_campo_siguiente(self):
        with tempfile.TemporaryDirectory() as carpeta:
            raiz = Path(carpeta)
            (raiz / 'Documentacion').mkdir()
            (raiz / 'Documentacion/adn_visual_personajes_v1.md').write_text(
                '\n### Thor\n- **Acción y pose:**\n- **Dirección corporal:** lateral\n', encoding='utf-8')
            (raiz / 'Documentacion/matriz_adn_visual_numerica_v1.md').write_text('', encoding='utf-8')
            (raiz / 'personajes.json').write_text('[]', encoding='utf-8')
            with patch.object(g, 'RAIZ', carpeta):
                adn, _, _ = g.cargar()
            self.assertEqual(adn['Thor']['accion'], '')
            self.assertEqual(adn['Thor']['direccion'], 'lateral')

    def test_riesgos_siguen_el_orden_de_la_fuente(self):
        for nombres in (['Edipo', 'Teseo'], ['Teseo', 'Edipo'], {'Edipo', 'Teseo'}):
            self.assertEqual(g.riesgos_nombrados('Separar de Teseo y de Edipo.', nombres), ['Teseo', 'Edipo'])

    def test_seleccion_no_sobrescribe_otros_archivos(self):
        with tempfile.TemporaryDirectory() as carpeta:
            raiz = Path(carpeta)
            (raiz / 'Produccion').mkdir()
            (raiz / 'Documentacion').mkdir()
            otra = raiz / 'Produccion/tyr.md'
            otra.write_text('conservar orden', encoding='utf-8')
            indice = raiz / 'Documentacion/indice_ordenes_produccion.md'
            indice.write_text('conservar índice', encoding='utf-8')
            control = raiz / 'control.json'
            datos = {'personajes': [
                {'id': 'thor', 'nombre': 'Thor', 'orden_produccion': 'Produccion/thor.md'},
                {'id': 'castor_polux', 'nombre': 'Cástor y Pólux', 'orden_produccion': 'Produccion/castor_y_polux.md'}]}
            control.write_text(json.dumps(datos), encoding='utf-8')
            original = control.read_bytes()
            with patch.object(g, 'RAIZ', carpeta), patch.object(g, 'cargar', return_value=self.fuentes):
                g.main(['--control', str(control), '--ids', 'thor', 'castor_polux'])
                primera = (raiz / 'Produccion/thor.md').stat().st_mtime_ns
                g.main(['--control', str(control), '--ids', 'thor', 'castor_polux'])
                self.assertEqual(primera, (raiz / 'Produccion/thor.md').stat().st_mtime_ns)
                with self.assertRaises(SystemExit):
                    g.main(['--control', str(control), '--ids', 'zeus'])
            self.assertTrue((raiz / 'Produccion/castor_y_polux.md').exists())
            self.assertFalse((raiz / 'Produccion/castor_polux.md').exists())
            self.assertEqual(otra.read_text(encoding='utf-8'), 'conservar orden')
            self.assertEqual(indice.read_text(encoding='utf-8'), 'conservar índice')
            self.assertEqual(control.read_bytes(), original)
            for ids in (['thor', 'thor'], ['zeus']):
                with self.assertRaises(ValueError):
                    g.seleccionar(datos, ids, self.pj)
            datos['personajes'][0]['orden_produccion'] = '../fuera.md'
            with self.assertRaises(ValueError):
                g.seleccionar(datos, ['thor'], self.pj)


if __name__ == '__main__':
    unittest.main()
