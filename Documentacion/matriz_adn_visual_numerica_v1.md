# MATRIZ NUMÉRICA DE ADN VISUAL v1 — 85 personajes

Documento de control comparativo derivado de `Documentacion/adn_visual_personajes_v1.md` y gobernado por `Documentacion/guia_visual_maestra_v2_1.md`.

**Roster fuente de verdad:** `Documentacion/roster_personajes_v3.md` y `personajes.json`.

Esta matriz no agrega canon mitológico. Los valores son **coordenadas de diseño visual** para comparar personajes y detectar colisiones antes de generar imágenes. No sustituyen las fichas textuales: las complementan.

## 1. Escalas cerradas

Todos los valores usan escala 1–10. Los extremos tienen significado fijo; 5 representa una posición intermedia. Para criaturas, híbridos, duplas y grupos se interpreta el equivalente anatómico/compositivo en lugar de inventar rasgos humanos.

| Código | Variable | 1 | 5 | 10 | Peso auditoría |
|---|---|---|---|---|---:|
| EV | Edad visual | muy joven | adulto/a medio | muy mayor | 1,1 |
| MC | Masa corporal | muy liviano/a | media | máxima/masiva | 1,5 |
| EA | Escala aparente | muy pequeño/a | escala humana media | monumental | 1,2 |
| AF | Angulosidad facial/cefálica | redondo/suave | mixto | largo/angular/duro | 1,4 |
| CO | Contorno orgánico superior | compacto/controlado | moderado | expansivo/irregular | 1,2 |
| AC | Apertura corporal | cerrado | neutral | muy expansivo | 1,4 |
| DP | Dinamismo de pose | inmóvil | acción moderada | movimiento máximo | 1,5 |
| VD | Verticalidad dominante | horizontal/bajo | diagonal/neutro | vertical/ascendente | 1,3 |
| DV | Densidad visual | muy limpia | media | muy cargada | 1,0 |
| OV | Oscuridad visual | muy luminosa | neutral | muy oscura/severa | 0,8 |
| DI | Dependencia del identificador | anatomía/pose bastan | mixta | objeto/atributo crítico | 0,9 |
| AN | Anchura corporal/hombros | muy estrecha | media | máxima | 1,4 |
| PF | Protagonismo de fondo/contexto | prescindible | acompaña | esencial | 0,8 |
| RM | Rigidez de materiales/vestuario | blando/orgánico | mixto | muy rígido/armado | 0,9 |
| RA | Rareza anatómica/compositiva | humano estándar | adición/montura/vehículo | extrema: grupo/múltiple/híbrido fuerte | 1,5 |

### Metadatos no numéricos

- **Morf.**: morfología compositiva principal. No consume una de las 15 variables.
- **Lect.**: lectura visual general (`M`, `F`, `NH`, dupla o grupo). Se usa para separar falsos positivos del cálculo numérico, no como juicio de identidad.
- **Tier / Mit.**: sólo permiten filtrar la matriz; no alteran la distancia visual.

---

## 2. Matriz cerrada de los 85

| Personaje | Tier | Mit. | Morf. | Lect. | EV | MC | EA | AF | CO | AC | DP | VD | DV | OV | DI | AN | PF | RM | RA |
|---|---|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Zeus | Dorado | Griega | Humano | M | 7 | 8 | 8 | 8 | 5 | 9 | 5 | 10 | 7 | 3 | 8 | 8 | 4 | 6 | 1 |
| Poseidón | Dorado | Griega | Humano | M | 7 | 8 | 8 | 8 | 9 | 6 | 7 | 6 | 8 | 5 | 9 | 8 | 8 | 5 | 1 |
| Hades | Dorado | Griega | Humano | M | 7 | 6 | 8 | 8 | 3 | 2 | 1 | 10 | 4 | 8 | 6 | 6 | 6 | 7 | 1 |
| Atenea | Dorado | Griega | Humano | F | 5 | 5 | 6 | 7 | 2 | 4 | 4 | 7 | 7 | 3 | 7 | 5 | 3 | 9 | 1 |
| Heracles | Dorado | Griega | Humano | M | 6 | 10 | 8 | 6 | 7 | 7 | 8 | 4 | 8 | 4 | 6 | 10 | 3 | 4 | 1 |
| Odiseo | Dorado | Griega | Humano | M | 7 | 5 | 6 | 8 | 4 | 5 | 4 | 6 | 5 | 5 | 3 | 5 | 6 | 4 | 1 |
| Teseo | Dorado | Griega | Humano | M | 4 | 6 | 6 | 4 | 5 | 6 | 6 | 4 | 5 | 3 | 7 | 6 | 6 | 4 | 1 |
| Aquiles | Dorado | Griega | Humano | M | 4 | 7 | 7 | 7 | 6 | 6 | 7 | 5 | 7 | 4 | 7 | 7 | 4 | 8 | 1 |
| Jasón | Dorado | Griega | Humano | M | 5 | 6 | 7 | 4 | 5 | 8 | 5 | 7 | 7 | 3 | 9 | 6 | 6 | 5 | 1 |
| Perseo | Dorado | Griega | Humano | M | 4 | 5 | 6 | 4 | 4 | 7 | 8 | 8 | 8 | 3 | 9 | 5 | 4 | 6 | 1 |
| Odín | Dorado | Nórdica | Humano | M | 9 | 5 | 8 | 9 | 8 | 3 | 2 | 9 | 8 | 7 | 7 | 5 | 6 | 6 | 1 |
| Thor | Dorado | Nórdica | Humano | M | 6 | 9 | 8 | 6 | 7 | 7 | 7 | 6 | 8 | 5 | 9 | 9 | 4 | 8 | 1 |
| Loki | Dorado | Nórdica | Humano | M | 5 | 3 | 6 | 8 | 8 | 4 | 7 | 5 | 6 | 6 | 3 | 3 | 4 | 4 | 1 |
| Hera | Plateado | Griega | Humano | F | 7 | 5 | 8 | 7 | 2 | 5 | 1 | 9 | 8 | 3 | 7 | 5 | 5 | 7 | 1 |
| Deméter | Plateado | Griega | Humano | F | 7 | 6 | 6 | 3 | 2 | 5 | 3 | 5 | 6 | 3 | 6 | 6 | 7 | 3 | 1 |
| Apolo | Plateado | Griega | Humano | M | 4 | 4 | 7 | 5 | 5 | 5 | 3 | 8 | 5 | 2 | 8 | 4 | 4 | 3 | 1 |
| Artemisa | Plateado | Griega | Humano | F | 4 | 4 | 6 | 5 | 2 | 4 | 3 | 6 | 5 | 4 | 8 | 4 | 6 | 6 | 1 |
| Ares | Plateado | Griega | Humano | M | 6 | 9 | 7 | 8 | 1 | 4 | 4 | 8 | 8 | 6 | 6 | 9 | 2 | 10 | 1 |
| Afrodita | Plateado | Griega | Humano | F | 5 | 4 | 6 | 2 | 9 | 7 | 2 | 6 | 5 | 1 | 6 | 4 | 6 | 2 | 1 |
| Hefesto | Plateado | Griega | Humano | M | 7 | 8 | 6 | 7 | 3 | 4 | 5 | 4 | 8 | 6 | 7 | 8 | 7 | 8 | 1 |
| Hermes | Plateado | Griega | Humano | M | 3 | 3 | 6 | 3 | 4 | 8 | 10 | 5 | 5 | 2 | 9 | 3 | 3 | 4 | 1 |
| Dioniso | Plateado | Griega | Humano | M | 5 | 5 | 6 | 2 | 9 | 9 | 3 | 4 | 8 | 3 | 6 | 5 | 6 | 2 | 1 |
| Cronos | Plateado | Griega | Humano | M | 9 | 9 | 10 | 9 | 7 | 2 | 1 | 9 | 8 | 8 | 3 | 9 | 5 | 7 | 2 |
| Prometeo | Plateado | Griega | Humano | M | 7 | 5 | 7 | 8 | 5 | 8 | 6 | 5 | 6 | 5 | 9 | 5 | 5 | 4 | 1 |
| Perséfone | Plateado | Griega | Humano | F | 4 | 4 | 6 | 3 | 5 | 3 | 1 | 8 | 7 | 6 | 6 | 4 | 10 | 5 | 1 |
| Belerofonte | Plateado | Griega | Montura | M | 4 | 5 | 7 | 5 | 3 | 7 | 8 | 8 | 8 | 3 | 10 | 5 | 7 | 6 | 7 |
| Orfeo | Plateado | Griega | Humano | M | 5 | 3 | 5 | 2 | 6 | 4 | 2 | 4 | 4 | 4 | 9 | 3 | 6 | 2 | 1 |
| Edipo | Plateado | Griega | Humano | M | 7 | 5 | 6 | 7 | 2 | 3 | 1 | 7 | 5 | 6 | 6 | 5 | 7 | 4 | 1 |
| Penélope | Plateado | Griega | Humano | F | 7 | 4 | 5 | 2 | 2 | 3 | 3 | 6 | 5 | 3 | 8 | 4 | 6 | 2 | 1 |
| Helena | Plateado | Griega | Humano | F | 5 | 4 | 7 | 3 | 7 | 3 | 1 | 9 | 5 | 4 | 3 | 4 | 7 | 4 | 1 |
| Casandra | Plateado | Griega | Humano | F | 4 | 3 | 6 | 8 | 6 | 8 | 6 | 6 | 5 | 7 | 3 | 3 | 7 | 3 | 1 |
| Medea | Plateado | Griega | Humano | F | 5 | 3 | 6 | 8 | 3 | 3 | 5 | 3 | 7 | 7 | 5 | 3 | 6 | 4 | 1 |
| Circe | Plateado | Griega | Humano | F | 7 | 4 | 7 | 7 | 9 | 7 | 4 | 9 | 8 | 6 | 9 | 4 | 7 | 3 | 1 |
| Agamenón | Plateado | Griega | Humano | M | 7 | 8 | 7 | 8 | 2 | 7 | 3 | 8 | 8 | 5 | 8 | 8 | 8 | 8 | 1 |
| Héctor | Plateado | Griega | Humano | M | 6 | 7 | 7 | 4 | 2 | 6 | 3 | 6 | 7 | 5 | 7 | 7 | 8 | 8 | 1 |
| Atlas | Plateado | Griega | Humano | M | 8 | 10 | 10 | 7 | 4 | 3 | 5 | 9 | 9 | 7 | 10 | 10 | 8 | 5 | 3 |
| Dédalo | Plateado | Griega | Humano | M | 9 | 3 | 6 | 8 | 4 | 3 | 4 | 4 | 7 | 4 | 9 | 3 | 6 | 4 | 3 |
| Orión | Plateado | Griega | Humano | M | 6 | 7 | 9 | 6 | 2 | 5 | 2 | 5 | 6 | 5 | 8 | 7 | 8 | 5 | 2 |
| Freya | Plateado | Nórdica | Humano | F | 5 | 5 | 7 | 3 | 9 | 8 | 7 | 8 | 8 | 3 | 8 | 5 | 5 | 3 | 2 |
| Frigg | Plateado | Nórdica | Humano | F | 7 | 4 | 7 | 7 | 1 | 2 | 1 | 9 | 3 | 4 | 2 | 4 | 2 | 5 | 1 |
| Tyr | Plateado | Nórdica | Humano | M | 6 | 6 | 7 | 7 | 2 | 3 | 3 | 6 | 6 | 6 | 9 | 6 | 5 | 7 | 1 |
| Heimdall | Plateado | Nórdica | Humano | M | 6 | 5 | 7 | 7 | 2 | 3 | 1 | 10 | 6 | 4 | 10 | 5 | 7 | 9 | 1 |
| Skadi | Plateado | Nórdica | Humano | F | 7 | 6 | 8 | 8 | 2 | 7 | 8 | 3 | 7 | 5 | 8 | 6 | 9 | 9 | 1 |
| Njörd | Plateado | Nórdica | Humano | M | 8 | 6 | 7 | 4 | 6 | 8 | 2 | 5 | 5 | 2 | 3 | 6 | 8 | 4 | 1 |
| Balder | Plateado | Nórdica | Humano | M | 3 | 4 | 7 | 2 | 3 | 9 | 1 | 8 | 3 | 1 | 3 | 4 | 3 | 2 | 1 |
| Sigurd | Plateado | Nórdica | Humano | M | 5 | 6 | 7 | 7 | 4 | 4 | 2 | 5 | 7 | 5 | 5 | 6 | 7 | 7 | 1 |
| Sif | Plateado | Nórdica | Humano | F | 5 | 5 | 6 | 3 | 10 | 5 | 2 | 7 | 6 | 2 | 10 | 5 | 4 | 2 | 1 |
| Hel | Plateado | Nórdica | Humano | F | 7 | 2 | 8 | 9 | 1 | 2 | 1 | 10 | 4 | 9 | 4 | 2 | 6 | 7 | 1 |
| Eneas | Plateado | Romana | Humano | M | 7 | 7 | 7 | 7 | 2 | 5 | 6 | 5 | 7 | 4 | 5 | 7 | 8 | 8 | 1 |
| Rómulo y Remo | Plateado | Romana | Dupla | M-Dupla | 4 | 6 | 7 | 5 | 3 | 8 | 5 | 6 | 9 | 3 | 9 | 6 | 9 | 5 | 8 |
| Andrómeda | Normal | Griega | Humano | F | 4 | 3 | 6 | 3 | 9 | 4 | 2 | 7 | 5 | 5 | 8 | 3 | 9 | 2 | 1 |
| Aracne | Normal | Griega | Transformación | F | 4 | 3 | 5 | 7 | 1 | 4 | 4 | 5 | 7 | 6 | 8 | 3 | 6 | 3 | 4 |
| Ariadna | Normal | Griega | Humano | F | 4 | 4 | 5 | 4 | 4 | 8 | 4 | 5 | 5 | 3 | 9 | 4 | 8 | 3 | 1 |
| Calisto | Normal | Griega | Criatura | NH | 6 | 8 | 6 | 3 | 7 | 4 | 1 | 4 | 6 | 4 | 7 | 8 | 8 | 2 | 8 |
| Medusa | Normal | Griega | Transformación | F | 7 | 5 | 6 | 8 | 10 | 4 | 2 | 7 | 9 | 7 | 2 | 5 | 5 | 2 | 7 |
| Minotauro | Normal | Griega | Híbrido | NH | 6 | 10 | 8 | 7 | 5 | 4 | 2 | 7 | 8 | 6 | 1 | 10 | 6 | 3 | 9 |
| Pandora | Normal | Griega | Humano | F | 4 | 4 | 5 | 2 | 4 | 5 | 4 | 2 | 7 | 4 | 10 | 4 | 5 | 3 | 1 |
| Pegaso | Normal | Griega | Criatura | NH | 5 | 6 | 7 | 3 | 7 | 8 | 8 | 8 | 8 | 2 | 1 | 6 | 4 | 2 | 8 |
| Quirón | Normal | Griega | Híbrido | NH | 8 | 7 | 8 | 5 | 5 | 7 | 2 | 6 | 8 | 3 | 2 | 7 | 5 | 4 | 9 |
| Atalanta | Normal | Griega | Humano | F | 4 | 4 | 6 | 4 | 2 | 8 | 10 | 4 | 7 | 3 | 8 | 4 | 4 | 6 | 1 |
| Calipso | Normal | Griega | Humano | F | 7 | 4 | 6 | 2 | 9 | 3 | 1 | 7 | 3 | 3 | 2 | 4 | 10 | 1 | 1 |
| Casiopea | Normal | Griega | Humano | F | 7 | 4 | 7 | 7 | 2 | 2 | 1 | 6 | 7 | 5 | 7 | 4 | 9 | 6 | 1 |
| Cerbero | Normal | Griega | Criatura | NH | 6 | 10 | 7 | 5 | 7 | 4 | 1 | 5 | 9 | 7 | 1 | 10 | 6 | 2 | 10 |
| Cástor y Pólux | Normal | Griega | Dupla | M-Dupla | 4 | 5 | 6 | 4 | 3 | 6 | 2 | 8 | 7 | 2 | 6 | 5 | 6 | 5 | 8 |
| Dafne | Normal | Griega | Transformación | F | 4 | 3 | 6 | 3 | 9 | 7 | 6 | 9 | 8 | 3 | 2 | 3 | 6 | 2 | 7 |
| Eco | Normal | Griega | Humano | F | 4 | 2 | 4 | 2 | 5 | 4 | 2 | 5 | 4 | 4 | 6 | 2 | 9 | 2 | 1 |
| Eros | Normal | Griega | Humano | M | 3 | 2 | 5 | 2 | 4 | 7 | 6 | 6 | 5 | 1 | 9 | 2 | 2 | 3 | 1 |
| Esfinge | Normal | Griega | Híbrido | NH | 7 | 7 | 6 | 5 | 5 | 3 | 1 | 7 | 8 | 6 | 1 | 7 | 6 | 5 | 9 |
| Fénix | Normal | Griega | Criatura | NH | 5 | 5 | 7 | 6 | 10 | 9 | 9 | 10 | 9 | 3 | 1 | 6 | 5 | 2 | 8 |
| Helios | Normal | Griega | Vehículo | M | 6 | 6 | 8 | 4 | 6 | 8 | 8 | 6 | 9 | 1 | 10 | 6 | 5 | 6 | 5 |
| Hestia | Normal | Griega | Humano | F | 7 | 4 | 4 | 2 | 1 | 2 | 1 | 3 | 3 | 1 | 9 | 4 | 4 | 2 | 1 |
| Iris | Normal | Griega | Humano | F | 4 | 3 | 6 | 2 | 7 | 9 | 9 | 8 | 7 | 1 | 10 | 3 | 4 | 2 | 1 |
| Midas | Normal | Griega | Humano | M | 6 | 5 | 6 | 4 | 2 | 6 | 4 | 6 | 6 | 4 | 10 | 5 | 5 | 4 | 1 |
| Narciso | Normal | Griega | Humano | M | 3 | 3 | 5 | 2 | 4 | 2 | 1 | 2 | 3 | 2 | 7 | 3 | 7 | 2 | 1 |
| Nausícaa | Normal | Griega | Humano | F | 4 | 4 | 5 | 2 | 1 | 8 | 5 | 6 | 4 | 1 | 4 | 4 | 6 | 2 | 1 |
| Nike | Normal | Griega | Humano | F | 4 | 4 | 6 | 5 | 6 | 9 | 9 | 9 | 8 | 1 | 2 | 4 | 3 | 3 | 7 |
| Pan | Normal | Griega | Humano | M | 6 | 6 | 4 | 3 | 9 | 5 | 1 | 3 | 6 | 3 | 9 | 6 | 8 | 2 | 1 |
| Paris | Normal | Griega | Humano | M | 4 | 4 | 6 | 3 | 4 | 4 | 2 | 7 | 5 | 3 | 10 | 4 | 7 | 4 | 1 |
| Pentesilea | Normal | Griega | Humano | F | 7 | 7 | 7 | 7 | 1 | 7 | 4 | 6 | 8 | 5 | 8 | 7 | 4 | 9 | 1 |
| Psique | Normal | Griega | Humano | F | 4 | 3 | 5 | 2 | 6 | 5 | 4 | 6 | 5 | 2 | 8 | 3 | 7 | 2 | 1 |
| Selene | Normal | Griega | Vehículo | F | 7 | 4 | 8 | 4 | 8 | 7 | 6 | 6 | 8 | 4 | 10 | 4 | 6 | 4 | 5 |
| Fenrir | Normal | Nórdica | Criatura | NH | 6 | 9 | 7 | 8 | 8 | 4 | 2 | 4 | 8 | 8 | 2 | 9 | 5 | 2 | 8 |
| Las Valquirias | Normal | Nórdica | Grupo | F-Grupo | 5 | 6 | 8 | 6 | 6 | 9 | 9 | 9 | 10 | 3 | 5 | 6 | 8 | 9 | 10 |
| Ratatosk | Normal | Nórdica | Criatura | NH | 3 | 1 | 2 | 2 | 10 | 8 | 9 | 9 | 6 | 2 | 2 | 1 | 7 | 1 | 8 |
| Dido | Normal | Romana | Humano | F | 7 | 5 | 7 | 7 | 2 | 8 | 4 | 8 | 7 | 4 | 4 | 5 | 9 | 5 | 1 |

---

## 3. Auditoría de colisiones

### Método

Se comparan los 15 valores mediante distancia media absoluta ponderada. Los pesos más altos se asignan a los factores que más cambian la lectura a simple vista: masa, anatomía, anchura, cara, apertura y dinamismo. Fondo, oscuridad y dependencia del objeto pesan menos porque no deben ser el único mecanismo de diferenciación.

La distancia numérica se interpreta junto con **Morf.** y **Lect.**. Dos personajes con anatomías radicalmente distintas pueden tener coordenadas numéricas cercanas sin ser un clon real. A la inversa, dos humanos del mismo tipo visual con distancia baja son un riesgo mucho más serio.

Umbrales operativos:

- **< 0,80 — colisión crítica:** no se permite pasar a producción sin rediseñar el ADN.
- **0,80 a < 0,90 — riesgo alto:** requiere regla dura de separación y revisión lado a lado.
- **0,90 a < 1,05 — riesgo medio:** se controla en la tanda y en avatar.
- **≥ 1,05 — riesgo numérico bajo:** no exime de revisar colisiones semánticas.

### Resultado después de ajustar la lógica

- 85 personajes evaluados.
- 15 variables por personaje.
- 3.570 pares posibles.
- **0 vectores numéricos duplicados.**
- **0 colisiones críticas (<0,80) entre personajes de la misma morfología y lectura visual.**
- 12 pares de la misma morfología/lectura quedan en riesgo alto (0,80–0,90).
- El resto se reparte en riesgo medio o bajo; la matriz no se forzó a una distribución artificial de puntajes.

La corrección se hizo sólo cuando el ADN textual ya justificaba una diferencia. No se movieron números para “ganarle” al cálculo.

### Pares de riesgo alto que quedan deliberadamente vigilados

| Par | Distancia | Por qué pueden converger | Separador obligatorio |
|---|---:|---|---|
| Artemisa ↔ Penélope | 0,81 | cuerpos contenidos, cabello controlado, densidad media | edad + actividad: cazadora vigilante vs trabajo con telar; jamás compartir pose base |
| Hefesto ↔ Eneas | 0,82 | adultos robustos con materiales rígidos | Hefesto lateral/asimétrico trabajando; Eneas en marcha hacia destino |
| Tyr ↔ Sigurd | 0,82 | varones nórdicos fuertes, angulares y sobrios | Tyr = asimetría de brazos + cinta; Sigurd = escucha de aves, sin guardia simétrica |
| Heracles ↔ Thor | 0,83 | máximos volúmenes masculinos del elenco | jerarquía de masa y centro de gravedad; Heracles 10/10, Thor 9/10 |
| Héctor ↔ Eneas | 0,84 | varones maduros, fuertes, equipamiento antiguo | Héctor protege hacia atrás; Eneas marcha hacia adelante |
| Teseo ↔ Jasón | 0,85 | héroes griegos jóvenes de masa media | Teseo bajo/descendente con hilo; Jasón abierto, capitán y direccional |
| Apolo ↔ Paris | 0,85 | varones jóvenes, esbeltos, rasgos suaves | Apolo vertical/artístico; Paris dividido entre dos direcciones con manzana baja |
| Agamenón ↔ Héctor | 0,87 | líderes maduros con equipamiento rígido | Agamenón frontal/comando; Héctor perfil/protección |
| Héctor ↔ Orión | 0,87 | varones altos, maduros, fuertes | Héctor escudo/muralla; Orión silueta larga y cinturón estelar, sin masa de defensa |
| Perséfone ↔ Helena | 0,87 | mujeres esbeltas, serias y verticales | Perséfone vive en frontera de dos ambientes; Helena en una escena austera única |
| Andrómeda ↔ Psique | 0,89 | mujeres jóvenes, ligeras y de lectura aérea | Andrómeda tensión estática/cadenas; Psique avance cauteloso/mariposa |
| Aquiles ↔ Eneas | 0,89 | héroes atléticos con equipamiento | Aquiles joven, impulsivo y rápido; Eneas mayor, viajero y orientado al destino |

### Falsos positivos y riesgo semántico

La matriz numérica no captura por sí sola el significado de un objeto. Ejemplo: `Perseo` y `Belerofonte` comparten bastante dinamismo y verticalidad, pero uno vuela por equipamiento propio y el otro depende de una montura. Esa diferencia vive en `Morf.` y en la ficha textual.

Por eso **una distancia alta tampoco garantiza seguridad**: modelos generativos pueden converger por arquetipo verbal. “Dios barbudo poderoso”, “heroína joven con arco”, “mujer elegante de cabello largo” o “guerrero antiguo con escudo” son riesgos semánticos que necesitan reglas adicionales.

---

## 4. Reglas duras de separación

Estas reglas se fijan **después** de la auditoría y gobiernan la futura producción. No sustituyen los 12 campos del ADN textual.

### 4.1 Reglas globales

1. **Bloqueo por distancia:** si dos personajes de la misma morfología y lectura visual quedan por debajo de 0,80 después de una futura edición, se corrige el ADN antes de generar.
2. **Zona 0,80–0,90:** todo par en esta zona debe tener al menos un separador de silueta y uno de pose que sobrevivan sin color, fondo ni texto.
3. **El objeto no salva un clon:** si dos personajes se diferencian principalmente por identificadores externos (`DI >= 8` en ambos), deben diferir además de forma visible en cuerpo/rostro y pose.
4. **Pose estructural:** un par de riesgo alto no puede compartir simultáneamente dirección corporal, apertura y dinamismo dentro de ±1 punto.
5. **Cuerpo estructural:** un par de riesgo alto no puede depender de vestuario para separarse si masa, anchura y geometría cefálica están dentro de ±1 punto.
6. **Avatar:** cada par de riesgo alto debe conservar en el círculo al menos un separador que no sea sólo color. Si el avatar elimina la diferencia, la composición completa se considera fallida.
7. **No corregir con fondo:** `PF` y `OV` nunca pueden ser los únicos ejes que separan dos personajes humanos parecidos.
8. **Los números son límites de diseño:** durante generación no se permite “embellecer” un personaje empujándolo hacia la media del elenco si eso rompe sus extremos asignados.

### 4.2 Jerarquía fija de los hombres de gran potencia

Para evitar el arquetipo único de “dios/héroe grandote barbudo”:

- **Heracles:** máximo humano de masa y anchura (`MC 10`, `AN 10`), centro de gravedad bajo, `VD 4`. No debe verse regio.
- **Thor:** segundo escalón (`MC 9`, `AN 9`), martillo corto/pesado, `VD 6`. No puede igualar el volumen de Heracles.
- **Zeus:** `MC 8`, `AN 8`, máximo énfasis vertical (`VD 10`) y apertura (`AC 9`). Debe leer autoridad vertical, no peso físico.
- **Poseidón:** misma masa base que Zeus pero contorno mucho más libre (`CO 9`), `VD 6`, fondo marino más protagonista (`PF 8`).
- **Odín:** cuerpo estrecho (`MC 5`, `AN 5`), edad máxima del grupo (`EV 9`) y dinamismo muy bajo. La barba no puede ser su único diferenciador.

### 4.3 Guerreros y comandantes

- **Ares** debe ser el más rígido del grupo (`RM 10`) y casi sin fondo (`PF 2`).
- **Agamenón** se lee por comando frontal y contexto de flota (`PF 8`), no por agresividad física.
- **Héctor** debe poner el cuerpo entre ciudad y exterior: protección, no avance.
- **Eneas** debe tener dirección de marcha inequívoca y destino fuera de cuadro; no puede adoptar la guardia de Héctor.
- **Tyr** conserva asimetría corporal explícita y cinta; nunca una pose bilateral de guerrero estándar.
- **Sigurd** necesita una interacción alta con aves cerca del rostro; no debe resolverse como otro hombre armado mirando al frente.
- **Pentesilea** mantiene mayor apertura y masa que Atenea y nunca copia su geometría estratégica/arquitectónica.

### 4.4 Héroes jóvenes griegos

- **Teseo:** movimiento bajo/descendente y curva de hilo; jamás pose de capitán abierta.
- **Jasón:** apertura alta y dirección de liderazgo; el Vellocino forma una masa irregular grande.
- **Aquiles:** eje de velocidad hacia adelante; más fino que Heracles y más joven que Eneas/Héctor.
- **Perseo:** vuelo propio + escudo circular; la silueta no puede leerse como jinete.
- **Belerofonte:** siempre lectura conjunta jinete–Pegaso; el avatar debe incluir ambos.
- **Apolo:** verticalidad artística y lira; no postura de elección ni combate.
- **Paris:** cuerpo dividido entre direcciones y manzana baja; nunca la verticalidad limpia de Apolo.
- **Hermes:** máximo dinamismo terrestre (`DP 10`) con eje limpio.
- **Eros:** escala y masa menores que Hermes, con gesto juguetón, no carrera.
- **Orfeo:** baja acción, composición íntima y lira; no idealización vertical de Apolo.
- **Narciso:** composición descendente/reflejada; no instrumento, viaje ni gesto heroico.

### 4.5 Mujeres jóvenes/esbeltas

- **Artemisa:** cabello muy controlado, arco en reposo, vigilancia; nunca carrera de Atalanta ni escudo de Atenea.
- **Atalanta:** velocidad máxima (`DP 10`) y composición baja/horizontal.
- **Ariadna:** apertura alta y gesto de guía con hilo; no exploración física de Teseo.
- **Pandora:** eje descendente hacia la jarra; la curiosidad debe dirigir la pose.
- **Andrómeda:** tensión estática, cadenas y roca; no avance de aventura.
- **Psique:** avance cauteloso; mariposa cerca del rostro y sin sensualidad heredada de Afrodita.
- **Nausícaa:** gesto cotidiano de ayuda, muy abierto; cero aura divina.
- **Perséfone:** frontera visual entre dos ambientes, `PF 10`; no puede convertirse en “mujer elegante con flores”.
- **Helena:** vertical, austera y casi inmóvil; no dualidad estacional/divina.
- **Casandra:** manos y torso proyectados hacia la advertencia; nunca calma contemplativa de Helena.

### 4.6 Cabellos y contornos femeninos de alto riesgo

El cabello largo no puede transformarse en una plantilla común:

- **Sif:** único caso con `CO 10`; el cabello es masa protagonista absoluta.
- **Afrodita:** `CO 9` pero de curvas suaves y baja rigidez; el pelo acompaña, no domina toda la carta.
- **Freya:** `CO 9` compartido con la capa de halcón; las plumas deben romper el contorno para que no parezca Sif.
- **Circe:** `CO 9` + verticalidad alta + vara; teatralidad controlada.
- **Calipso:** `CO 9` pero densidad mínima y muchísimo contexto marino (`PF 10`); ninguna magia activa.
- **Selene:** contorno largo empujado por movimiento del carro; lectura fría y vehicular.

### 4.7 Vuelo y movimiento ascendente

No usar una única pose diagonal flotando para todo lo que vuela:

- **Perseo:** vuelo corporal por equipamiento.
- **Belerofonte:** vuelo montado.
- **Iris:** trayectoria aérea continua sin alas anatómicas como identificador principal.
- **Nike:** alas anatómicas y gesto de llegada.
- **Pegaso:** anatomía completamente equina/alada, sin jinete.
- **Fénix:** ascenso desde ceniza, anatomía aviar.
- **Helios / Selene:** movimiento vehicular lateral, no vuelo corporal.
- **Las Valquirias:** lectura de grupo y monturas en alturas distintas.

### 4.8 Inframundo y figuras severas

- **Hades:** más ancho y regio, con objetos/riqueza mineral; no silueta extremadamente delgada.
- **Hel:** máxima delgadez y cierre del grupo (`MC 2`, `AN 2`, `AC 2`), oscuridad alta (`OV 9`) pero sin horror.
- **Perséfone:** no pertenece visualmente al mismo arquetipo oscuro: conserva dualidad, juventud y transición de ambientes.

### 4.9 Duplas y colectivos

- **Rómulo y Remo:** asimetría de roles y presencia de la loba; los gemelos no son espejo exacto.
- **Cástor y Pólux:** vínculo celeste y composición más afectivamente simétrica; dos estrellas deben sobrevivir en avatar.
- **Las Valquirias:** el avatar nunca puede reducir el grupo a una sola guerrera; mínimo dos rostros + tercera silueta inequívoca.

### 4.10 Criaturas e híbridos

La especie/anatomía manda sobre cualquier cercanía numérica:

- **Calisto** = osa pesada y protectora; **Fenrir** = lobo largo/áspero; nunca compartir cabeza/hocico genérico.
- **Cerbero** debe conservar las tres cabezas incluso en avatar.
- **Minotauro** depende de cuernos + masa taurina; no anatomía caprina genérica.
- **Quirón** debe mostrar transición centauro completa y conducta docente.
- **Esfinge** conserva cuerpo leonino en reposo y rostro humano; no postura/contorno de Quirón.

---

## 5. Estado después de esta revisión

La matriz queda **cerrada como v1** para los 85 personajes. No corresponde generar imágenes todavía.

El próximo bloque lógico es definir con el mismo nivel de precisión el **estilo común de producción**: proporciones base, tratamiento facial, nivel de caricatura, render, textura, luz, color, fondos y materiales. Recién después conviene hacer una tanda pequeña que pruebe simultáneamente estilo común + ADN individual + reglas de separación.
