# **Especificación de Implementación: Sistema de Tiers (Modelo 2\)**

## **Resumen Ejecutivo**

Este documento detalla las modificaciones necesarias para implementar un sistema de tres niveles jerárquicos (Dorado, Plateado, Normal) en la colección de cartas del proyecto "Mundo de Mitos". El objetivo es reflejar la importancia mitológica de cada personaje y proporcionar una progresión visual diferenciada al completar sus historias.

## **1\. Modificación de la Estructura de Datos (personajes.json)**

Se debe incorporar una nueva clave estática tier a cada objeto de personaje dentro de personajes.json. Esta clave determinará el tratamiento visual máximo que la carta puede alcanzar cuando el usuario desbloquee todos los capítulos de su historia.  
`{`  
  `"id": "teseo",`  
  `"nombre": "Teseo",`  
  `...`  
  `"tier": "dorado", // [NUEVO] Valores posibles: "dorado", "plateado", "normal"`  
  `"capitulos": [ ... ]`  
`}`

## **2\. Clasificación del Roster por Tiers**

La asignación de tiers se basa en la relevancia narrativa y jerárquica del personaje dentro de su respectiva mitología.

### **2.1. Tier Dorado (Dioses Mayores y Héroes Legendarios)**

Personajes centrales que requieren la resolución de múltiples módulos (Oráculo, Cielo, Ordená el Mito, Crisis) para completar sus 3 o 4 capítulos.

| Personaje | Mitología |
| :---- | :---- |
| Zeus | Griega |
| Poseidón | Griega |
| Hades | Griega |
| Atenea | Griega |
| Heracles | Griega |
| Odiseo | Griega |
| Teseo | Griega |
| Aquiles | Griega |
| Odín | Nórdica |
| Thor | Nórdica |
| Loki | Nórdica |
| Sigurd | Nórdica |

### **2.2. Tier Plateado (Dioses Secundarios y Héroes Clave)**

Figuras subordinadas a los dioses principales o protagonistas de mitos secundarios. Requieren la resolución de 2 a 3 capítulos.

| Personaje | Mitología |
| :---- | :---- |
| Apolo | Griega |
| Artemisa | Griega |
| Ares | Griega |
| Hera | Griega |
| Afrodita | Griega |
| Hermes | Griega |
| Perseo | Griega |
| Jasón | Griega |
| Dédalo | Griega |
| Penélope | Griega |
| Prometeo | Griega |
| Freya | Nórdica |
| Frigg | Nórdica |
| Balder | Nórdica |
| Tyr | Nórdica |
| Heimdall | Nórdica |
| Skadi | Nórdica |

### **2.3. Tier Normal (Soporte, Divinidades Conceptuales y Bestias)**

Criaturas, monstruos, aliados, o figuras de un solo evento. Sus historias se componen de 1 a 2 capítulos. Al completar la historia, la carta no recibe insignia de material.

* **Criaturas y Bestias:** Pegaso, Cerbero, Minotauro, Medusa, Esfinge, Sleipnir, Fenrir, Fénix.  
* **Divinidades Conceptuales y Mensajeros:** Iris, Hestia, Nike, Helios, Selene, Pan, Nornas, Valquirias, Ratatosk, Mimir.  
* **Humanos/Héroes de Mitos Únicos:** Ariadna, Quirón, Aracne, Pandora, Midas, Orfeo, Atalanta, Belerofonte, Sif.

## **3\. Lógica de Renderizado Front-End**

La lógica actual asume que cualquier personaje con el 100% de capítulos encendidos adquiere el estado dorado. Debe modificarse para evaluar la clave tier.

1. **Evaluación de Completitud:** Verificar si la longitud del array de capítulos encendidos en \`localStorage\` (global.capitulos\[personajeId\]) es igual a la longitud total de capítulos definidos para ese personaje en personajes.json.  
2. **Asignación de CSS Condicional:** Si la condición del paso 1 se cumple, inyectar una clase CSS basada en el valor de tier:  
   * Si tier \== "dorado", inyectar clase .card-gold (efecto holográfico completo).  
   * Si tier \== "plateado", inyectar clase .card-silver (nuevo efecto visual).  
   * Si tier \== "normal", no inyectar clases de material. Mostrar únicamente el indicador/sello de "Historia Completa".

## **4\. Implementación del Sello de "Historia Completa"**

Para asegurar que todos los personajes (incluso los de Tier Normal) reciban reconocimiento al finalizar su historia, se debe diseñar un sello visual unificado que aparezca en la carta cuando la historia esté completa, independientemente del tier asignado.