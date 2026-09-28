"""Evita alertas sin evidencia y conclusiones que sobrevivan a un ADN cambiado."""
import copy
import importlib.util
import json
import tempfile
import unittest
from pathlib import Path

RUTA = Path(__file__).with_name('generar-ordenes.py')
spec = importlib.util.spec_from_file_location('generador_identificadores', RUTA)
g = importlib.util.module_from_spec(spec)
spec.loader.exec_module(g)

class RevisionIdentificadores(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.adn, cls.mat, cls.pj = g.cargar()
        cls.fuente = json.loads(Path(g.r(*g.FUENTE_REVISION_IDENTIFICADORES.split('/'))).read_text(encoding='utf-8'))

    def test_las_siete_revisiones_no_aprueban_imagenes(self):
        esperados = {'frigg': 'CONTROL_PENDIENTE', 'balder': 'DOCUMENTADO',
                     'cronos': 'CONTROL_PENDIENTE', 'hel': 'DOCUMENTADO',
                     'eneas': 'DOCUMENTADO', 'dido': 'DOCUMENTADO', 'nausicaa': 'DOCUMENTADO'}
        self.assertEqual(set(self.fuente['objetivos']), set(esperados))
        for sid, estado in esperados.items():
            nombre = self.fuente['objetivos'][sid]['nombre']
            self.assertEqual(g.control_identificador(self.adn[nombre])['estado'], estado)
            texto = g.orden(nombre, self.adn, self.mat, self.pj)[1]
            self.assertNotIn('Identificador abstracto.', texto)
            self.assertNotIn('detalle mundialmente reconocible', texto)
            self.assertIn('La validación visual sigue pendiente.', texto)

    def test_una_palabra_no_declara_faltante_material(self):
        control = g.control_identificador({'identificador': 'Hospitalidad expresada mediante acción.'})
        self.assertEqual(control['estado'], 'CONTROL_PENDIENTE')
        self.assertIn('Coincidencia léxica', control['conclusion'])
        self.assertNotIn('no nombra un objeto', control['conclusion'])
        self.assertIsNone(g.control_identificador({'identificador': 'Lira.'}))

    def test_indice_y_ordenes_comparten_el_diagnostico(self):
        nombres = [v['nombre'] for v in self.fuente['objetivos'].values()]
        texto = g.indice({n: self.adn[n] for n in nombres}, self.mat, self.pj)
        self.assertIn('**2 controles de reconocimiento pendientes.**', texto)
        self.assertIn('**5 reconocimientos textuales documentados.**', texto)
        self.assertNotIn('identificador abstracto', texto)

    def test_cada_campo_modificado_invalida_la_revision(self):
        for campo in g.CAMPOS_RECONOCIMIENTO:
            adn = copy.deepcopy(self.adn)
            adn['Balder'][campo] += ' Cambio de prueba.'
            g.cargar_revision_identificadores(adn, self.pj)
            control = g.control_identificador(adn['Balder'])
            self.assertEqual(control['estado'], 'CONTROL_PENDIENTE')
            self.assertIn(campo, control['conclusion'])
            self.assertNotIn('muérdago forman', control['conclusion'])

    def test_fuente_mal_formada_no_silencia_alertas(self):
        raiz_anterior = g.RAIZ
        try:
            with tempfile.TemporaryDirectory() as carpeta:
                g.RAIZ = carpeta
                ruta = Path(g.r(*g.FUENTE_REVISION_IDENTIFICADORES.split('/')))
                ruta.parent.mkdir(parents=True)
                fuente = copy.deepcopy(self.fuente)
                fuente['objetivos']['balder']['campos_revisados'].pop('avatar')
                ruta.write_text(json.dumps(fuente), encoding='utf-8')
                with self.assertRaises(ValueError):
                    g.cargar_revision_identificadores(copy.deepcopy(self.adn), self.pj)
        finally:
            g.RAIZ = raiz_anterior

if __name__ == '__main__':
    unittest.main()
