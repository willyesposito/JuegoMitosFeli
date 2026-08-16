# ROADMAP — Mundo de Mitos

> Este archivo es el seguimiento vivo: qué está en vivo, qué está a medias, y qué ideas están abiertas esperando decisión.
>
> El detalle mecánico de cada ola (fuentes de capítulos, presupuesto, recetas por tier) vive en `Documentacion/olas_y_fuentes_de_capitulos.md` y **gana sobre este archivo donde haya conflicto**. Acá va el estado y las ideas.
>
> **Regla:** cada vez que algo sale en vivo, repasar la sección 4 (Ideas abiertas) y actualizar lo que ese cambio haya resuelto, invalidado o habilitado, en el mismo commit.

---

## 1. Estado por ola

| Ola | Alcance | Estado |
|---|---|---|
| **1** | Hub · Perfiles (5 slots) · Colección · Oráculo (fácil + difícil) · El Cielo de los Mitos · Sets latentes · Vínculos | **Cerrada** |
| **2** | Mapa del Héroe · Ordená el Mito · Espejo de los Mundos · Laboratorio de Mitos (modo lector) | **Cerrada en lo mecánico.** Laboratorio sin construir. Falta contenido incremental. |
| **3** | Las Reliquias · La Encrucijada | **No empezada.** Bloqueada por producción de contenido. |
| **4** | Escritura propia de capítulos · Taller de creación de personajes | **No empezada.** Sin decisión de si entra. |

## 2. Módulos en vivo

| Módulo | Fuente | Contenido | En el hub |
|---|---|---|---|
| Colección | — | completo | sí |
| Oráculo (fácil + difícil) | `descubrimiento` | completo | sí |
| El Cielo de los Mitos | `cielo:` | 10 constelaciones | sí |
| Vínculos entre personajes | `vinculo:` | 25 de ~35 | sin UI, es automático |
| Sets temáticos latentes | — | completo | sí |
| El Mapa del Héroe | `mapa:` | 12 viajes | sí |
| Ordená el Mito | `ordena:` | 18 de ~49 mitos | sí |
| Espejo de los Mundos | `espejo:` | 12 pares / 24 capítulos | sí |

Presupuesto vigente: 85 personajes (13 dorados, 37 plateados, 35 normales) ≈ 190+ capítulos, de los cuales 85 son el capítulo base del descubrimiento.

## 3. Deuda de contenido (no bloquea, se salda en lotes)

* **Ordená el Mito:** ~31 fuentes `ordena:` sin su mito escrito. Anotados aparte: el telar de Penélope, y reemplazar `ordena:forja_enana` de Freya por el robo del Brisingamen.
* **Vínculos:** faltan ~10 para llegar al presupuesto y cubrir plateados y normales.
* **Ola 3:** antes de construir cualquiera de los dos módulos hay que producir su catálogo: ~14 reliquias, ~13 encrucijadas.
* **Reparaciones nórdicas pendientes:** Bragi, Sleipnir, Las Nornas, Brunilda.

## 4. Ideas abiertas (esperando decisión de Willy)

Nada de acá se construye sin instrucción explícita.

**Decididas, esperando su ola:**

* **Absorción de mitos menores.** Personajes grandes incorporan mitos satélite como capítulos propios: Odiseo ← Cíclope / Lotófagos / Sirenas, Zeus ← Filemón y Baucis, Prometeo ← Deucalión y Pirra. Se resuelve redefiniendo capítulos existentes, no requiere campo nuevo en el JSON.
* **Rutas de ascensión de tier.** Minotauro y Fenrir a plateado vía expansiones temáticas; Pegaso y Medusa vía sinergia de set (Perseo + Andrómeda + Medusa + Pegaso). Al implementarlo, agregar `tier_base` y `tier_maximo_posible`. Por ahora el tier es estático.

**En evaluación:**

* **Expansión del roster a nuevas mitologías.** Egipcia (Ra, Anubis, Isis, Horus, Bastet, Thot), japonesa (Amaterasu como ancla, Susanoo, Raijin/Fujin, Momotarō), azteca/mexica (Quetzalcóatl, Conejo de la Luna), celta/escocesa (Fionn mac Cumhaill, selkies, Cú Chulainn, kelpie). Sin decisión de cuándo ni de cuántas entran.
* **Modular la exigencia del guardián de la consulta dorada por dificultad.** Hoy funciona igual en las tres. Anotado como fuera de alcance por ahora.
* **Laboratorio de Mitos en modo lector.** Estaba en Ola 2 y quedó sin construir. Definir si sigue vivo o se descarta.

**Rotas, hay que redefinirlas:**

* Dos sets temáticos quedaron sin sentido tras cambios de roster: "Tejedoras del Destino" y "Los Más Valientes".

## 5. Checklist antes de publicar algo en vivo

1. El contenido pasó de `"borrador"` a `"publicado"` **solo con instrucción textual de Willy**.
2. `VERSION` de `sw.js` subida, si no la caché sirve la versión vieja.
3. Ningún capítulo velado quedó apuntando a un ancla inexistente.
4. Ningún dato personal entró al repo en este cambio (ver `CLAUDE.md` §2.1).
5. Sección 1, 2 y 3 de este archivo actualizadas.
6. Sección 4 repasada: marcar lo que este cambio resolvió o invalidó.
7. Toda corrección de Willy de esta sesión, registrada en `MEMORY.md`.
