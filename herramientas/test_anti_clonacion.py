"""Pruebas de la fuente editorial anti-clonación; no generan imágenes."""
import copy
import importlib.util
import json
from pathlib import Path
import tempfile
import unittest
from unittest.mock import patch

RUTA = Path(__file__).with_name('generar-ordenes.py')
spec = importlib.util.spec_from_file_location('generador_anti_clonacion', RUTA)
g = importlib.util.module_from_spec(spec)
spec.loader.exec_module(g)

class AntiClonacion(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.adn, cls.mat, cls.pj = g.cargar()
        cls.fuente = json.loads(Path(g.r(*g.FUENTE_ANTI_CLONACION.split('/'))).read_text(encoding='utf-8'))

    def cargar_fuente_prueba(self, fuente, adn=None):
        # La copia temporal permite simular un error sin modificar el repo.
        with tempfile.TemporaryDirectory() as carpeta:
            ruta = Path(carpeta)/'comparaciones.json'
            ruta.write_text(json.dumps(fuente, ensure_ascii=False), encoding='utf-8')
            with patch.object(g, 'r', return_value=str(ruta)):
                g.cargar_anti_clonacion(copy.deepcopy(adn or self.adn), self.mat, self.pj)

    def test_cobertura_y_tres_separadores(self):
        objetivos = self.fuente['objetivos']
        self.assertEqual(len(objetivos), 57)
        for sid, objetivo in objetivos.items():
            self.assertEqual(objetivo['id'], sid)
            texto = g.orden(objetivo['nombre'], self.adn, self.mat, self.pj)[1]
            pares = objetivo['comparaciones']
            self.assertGreaterEqual(len(pares), 3)
            for etiqueta in ('Separador de silueta', 'Separador de pose', 'Separador de composición'):
                self.assertEqual(texto.count('**'+etiqueta+':**'), len(pares))
            self.assertIn('**Validación visual: PENDIENTE.**', texto)

    def test_rechaza_riesgo_duplicado(self):
        fuente = copy.deepcopy(self.fuente)
        pares = fuente['objetivos']['tyr']['comparaciones']
        pares[1] = copy.deepcopy(pares[0])
        with self.assertRaisesRegex(ValueError, 'tres riesgos distintos'):
            self.cargar_fuente_prueba(fuente)

    def test_rechaza_separador_ausente(self):
        fuente = copy.deepcopy(self.fuente)
        fuente['objetivos']['tyr']['comparaciones'][0]['separadores']['composicion'] = ''
        with self.assertRaisesRegex(ValueError, 'Separador ausente'):
            self.cargar_fuente_prueba(fuente)

    def test_rechaza_evidencia_obsoleta(self):
        adn = copy.deepcopy(self.adn)
        adn['Tyr']['silueta'] = 'Dato alterado únicamente para esta prueba'
        with self.assertRaisesRegex(ValueError, 'Evidencia anti-clonación cambió'):
            self.cargar_fuente_prueba(self.fuente, adn)

    def test_rechaza_objetivo_desalineado(self):
        fuente = copy.deepcopy(self.fuente)
        fuente['objetivos']['tyr']['nombre'] = 'Thor'
        with self.assertRaisesRegex(ValueError, 'Objetivo anti-clonación desalineado'):
            self.cargar_fuente_prueba(fuente)

if __name__ == '__main__':
    unittest.main()

