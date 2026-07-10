# Arquitectura de Personajes - Juego Mitos Feli (v2.0)

## 1. Resumen Ejecutivo
* **Total de Cartas:** 70
* **Distribución:** 20% Nórdicos (14 cartas), 80% Griegos (56 cartas)
* **Público Objetivo:** lectoras fuertes, con tres modos de dificultad (fácil, normal y difícil). Enfoque en deducción, conexiones causales y lectura comprensiva.

## 2. Consideraciones para la Programación (JSON y UI)
* **Estructura del JSON (`personajes.json`):** * Cada personaje debe ser un objeto.
  * Los personajes de Tier Dorado/Plateado que absorbieron historias de entidades menores (ej. Ulises absorbe al Cíclope y a los Lotófagos) deben contener un array `capitulos_desbloqueables`.
* **Estado Guardado (`localStorage`):** * Guardar el progreso por `id_personaje` para persistencia local. 
  * Formato sugerido: `{"id": "ulises", "capitulos_completados": [1, 2], "tier_actual": "dorado"}`
* **UI/UX para foco y legibilidad:** * Para evitar sobrecarga cognitiva o dispersión visual en dispositivos móviles, las cartas de Tier Dorado no deben mostrar toda la densidad textual de golpe. 
  * Implementar un sistema de acordeón (HTML/CSS) o pestañas de navegación horizontal para transicionar entre capítulos.

## 3. Listado Oficial - Mitología Nórdica (14 Cartas - 20%)

### Tier Dorado
* **Odín:** Arquitecto del conocimiento. Comandante del Ragnarok.
* **Thor:** Héroe de fuerza máxima, defensa estructural de Asgard.
* **Loki:** Catalizador de conflictos lógicos y agente del caos.

### Tier Plateado
* **Freya:** Máximo exponente de la magia (seidr).
* **Frigg:** Previsión estratégica, madre de Balder.
* **Tyr:** Valor absoluto, resolución del conflicto con Fenrir.
* **Heimdall:** Percepción hiper-desarrollada, centinela.
* **Skadi:** Autonomía y supervivencia invernal.
* **Njörd:** Elemento pacificador, control marítimo.
* **Balder:** El arquetipo del punto ciego (muérdago).
* **Sigurd:** Epopeya heroica tradicional (enfrentamiento con el dragón).
* **Sif:** Foco del conflicto capilar, detonante de la forja enana.
* **Hel:** Equilibrio biológico y administración del inframundo.

### Tier Normal
* **Fenrir:** Elemento de fuerza bruta contenida. *(Ver Rutas de Ascensión)*

## 4. Listado Oficial - Mitología Griega (56 Cartas - 80%)

### Tier Dorado
*(Alta densidad causal; requieren ≥3 módulos de historias/acertijos para completar)*
1. **Zeus** (Absorbe: Filemón y Baucis)
2. **Poseidón**
3. **Hades**
4. **Atenea**
5. **Heracles** (Absorbe: Trabajos I y II)
6. **Odiseo / Ulises** (Absorbe: Lotófagos, Cíclope, Sirenas)
7. **Teseo**
8. **Aquiles**
9. **Jasón**

### Tier Plateado
*(Agentes de causalidad secundaria y soporte estructural)*
10. Hera
11. Deméter
12. Apolo
13. Artemisa
14. Ares
15. Afrodita
16. Hefesto
17. Hermes
18. Dioniso
19. Cronos *(Miedo al reemplazo, encuadre causal)*
20. Prometeo *(Absorbe: Deucalión y Pirra)*
21. Perséfone
22. Eneas
23. Perseo
24. Belerofonte
25. Orfeo
26. Edipo
27. Penélope
28. Helena
29. Casandra
30. Medea *(Mente táctica de los Argonautas, final acotado)*
31. Circe
32. Rómulo y Remo *(Carta Dual)*
33. Agamenón
34. Héctor

### Tier Normal
*(Variables de evento único, obstáculos o catasterismos)*
35. Hestia
36. Helios
37. Eros (Cupido)
38. Dido
39. Ariadna
40. Andrómeda
41. Nausícaa
42. Calipso
43. Pandora
44. Aracne
45. Psique
46. Dafne
47. Eco
48. Narciso
49. Atalanta
50. Pentesilea
51. Minotauro
52. Medusa
53. Pegaso
54. Cerbero
55. Esfinge
56. Paris

## 5. Fases Posteriores: Rutas de Ascensión de Tier (Sistema Evolutivo)
Aunque el modelo actual establece Tiers estáticos para la Ola 1, la arquitectura del JSON debe prever ascensos para futuras expansiones (Olas 3 y 4) y fomentar el "endgame" de Feli.

1. **Ascensión por Expansiones Temáticas (Módulos DLC):**
   * *Ejemplo:* Al lanzar una actualización del "Laberinto de Creta", la carta del **Minotauro** (Tier Normal) gana 2 capítulos adicionales que explican su origen. Al resolver los acertijos de esos capítulos, el JSON actualiza el estado y la carta evoluciona visualmente a **Tier Plateado**.
   * *Ejemplo 2:* **Fenrir** (Tier Normal) asciende a **Plateado** si se lanza un evento específico del Ragnarok donde Feli deba ordenar cronológicamente la rotura de sus cadenas.
2. **Ascensión por Sinergia de Mazo:**
   * Ciertas cartas de Tier Normal podrían ascender a Plateado si Feli logra reunir (completar) un set específico. 
   * *Ejemplo:* Si Feli completa a Pegaso, Belerofonte, Medusa y Perseo, **Pegaso** y **Medusa** ascienden automáticamente por revelación de historia cruzada.
3. **Requerimiento en Base de Datos:**
   * Añadir en `personajes.json` las variables: `"tier_base": "normal"`, `"tier_maximo_posible": "plateado"`. 
   * Esto permitirá programar una animación CSS (un brillo metálico o aura) en la Colección, notificándole a la jugadora que un personaje que ya estaba completo tiene "nuevo potencial bloqueado".
