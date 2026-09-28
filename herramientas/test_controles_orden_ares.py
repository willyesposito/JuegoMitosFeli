# -*- coding: utf-8 -*-
"""Valida los controles documentados sin generar imágenes ni escribir órdenes."""
import copy
import importlib.util
from pathlib import Path
import unittest

RAIZ = Path(__file__).resolve().parent.parent
spec = importlib.util.spec_from_file_location("compilador_controles_ares", RAIZ / "herramientas/generar-ordenes.py")
compilador = importlib.util.module_from_spec(spec)
spec.loader.exec_module(compilador)


class ControlesAres(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.adn, cls.matriz, cls.personajes = compilador.cargar()
        cls.orden = compilador.orden("Ares", cls.adn, cls.matriz, cls.personajes)[1]

    def test_fuente_compila_los_tres_controles(self):
        for campo in ("separadores", "contaminacion", "acabado"):
            valor = compilador.limpiar_fuente(self.adn["Ares"][campo])
            self.assertTrue(valor)
            self.assertIn(valor, self.orden)

    def test_comparaciones_y_separadores_completos(self):
        campo = self.adn["Ares"]["separadores"]
        for nombre in ("Atenea", "Pentesilea", "Agamenón", "Héctor", "Tyr"):
            self.assertIn("**Contra " + nombre + ".**", self.orden)
            texto = campo.split("Contra " + nombre + ":", 1)[1].split("Contra ", 1)[0]
            self.assertIn("pose" if nombre == "Atenea" else "composición", texto)
            self.assertIn("composición", texto)
        self.assertIn("ambos lo llevan", campo)

    def test_contaminacion_con_fuentes_y_alcance_honesto(self):
        seccion = self.orden.split("## 10. Contaminación a evitar", 1)[1].split("## 11.", 1)[0]
        self.assertIn("blog.playstation.com", seccion)
        self.assertIn("www.dc.com/characters/ares", seccion)
        self.assertNotIn("Pendiente de la investigación", seccion)
        self.assertIn("NO VERIFICADO", seccion)
        self.assertIn("La búsqueda no es exhaustiva", seccion)

    def test_controles_opcionales_no_se_vuelven_obligatorios(self):
        adn = copy.deepcopy(self.adn)
        for campo in compilador.CAMPOS_OPCIONALES.values():
            adn["Ares"].pop(campo, None)
        self.assertEqual(compilador.problemas_mecanicos("Ares", adn, self.matriz, self.personajes), [])
        salida = compilador.orden("Ares", adn, self.matriz, self.personajes)[1]
        self.assertNotIn("Separadores documentados", salida)
        self.assertNotIn("Controles de acabado documentados", salida)
        self.assertIn("Pendiente de la investigación", salida)

    def test_salida_no_acredita_un_resultado_visual(self):
        self.assertIn("Validación visual: PENDIENTE", self.orden)
        self.assertIn("Resultado visual: NO VERIFICADO", self.orden)
        self.assertIn("microtextura", self.orden)
        self.assertIn("historial de fallas", self.orden)
        self.assertNotIn("**Estado: LISTA", self.orden)

    def test_orden_guardada_es_reproducible(self):
        self.assertEqual((RAIZ / "Produccion/ares.md").read_text(encoding="utf-8"), self.orden)


if __name__ == "__main__":
    unittest.main()
