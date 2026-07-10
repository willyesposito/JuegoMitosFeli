# Spec funcional — Formato de carta + Ola 1 y 2 (v3: tiers + perfiles)

## 0. Hub shell

Pantalla principal: título del mundo, contador global ("Descubriste 34 de 80 héroes · 6 con historia completa") y una tarjeta grande por módulo con ícono, nombre y progreso propio. Navegación de una sola profundidad: hub → módulo → volver. Botón volver siempre visible y grande.

### 0.1 Perfiles de partida (5 slots)

`feli-mitos-v2` pasa a contener hasta 5 perfiles independientes:

```json
{
  "perfilActivo": 0,
  "perfiles": [
    {
      "nombre": "Feli",
      "dificultad": "normal",
      "creado": "2026-07-06",
      "global": {
        "descubiertos": ["teseo", "heracles"],
        "capitulos": { "teseo": ["base", "cielo:corona_boreal"] },
        "completas": [],
        "logros": []
      },
      "coleccion": { "vistas": [] },
      "oraculo": { "fecha": "", "modo": "facil", "resueltas": [] },
      "cielo": { "completadas": [] },
      "sets": { "revelados": [] }
    }
  ]
}
```

- Selector de perfil al abrir el hub solo si hay más de un perfil; con uno solo, entra directo.
- Crear perfil: nombre + dificultad (fácil / normal / difícil) + confirmar. La dificultad es **de la partida**: se elige al crearla y no se puede cambiar después — para otra dificultad se crea otro perfil (ver CLAUDE.md "Dificultad por partida"). Borrar perfil: solo desde el menú de utilidades de Willy, con doble confirmación.
- Todos los módulos leen y escriben únicamente sobre `perfiles[perfilActivo]`.
- `global.completas` reemplaza al viejo `global.doradas`: guarda los personajes con historia completa, sin importar el tier. El tratamiento visual lo decide el `tier` del JSON en render, no el estado guardado.

**Migración:** al primer arranque, si existe `feli-cartas-v1`, crear el perfil 0 con sus cartas desbloqueadas en `global.descubiertos`, capítulo `base` encendido para cada una, y borrar la key vieja. Si existe un `feli-mitos-v2` con el formato anterior (objeto único sin `perfiles`), envolverlo como perfil 0 y renombrar `doradas` → `completas`. Los perfiles guardados antes del sistema de dificultad quedan en `"normal"` sin perder progreso.

## 1. Formato de carta

La carta tiene:

**Frente:** ilustración, nombre, título, chip de mitología, dones como badges, atributos como barras **con el número 1-10 visible al lado de cada barra** (necesario para las pistas del Oráculo Difícil y para que ella compare).

**Cuerpo — historia por capítulos:** lista de capítulos del personaje. Cada uno:
- Encendido: título + texto + su "¿Por qué?", legible completo.
- Velado: título en gris, ícono de candado, y la pista de dónde se gana ("Trazá la Corona Boreal en el Cielo de los Mitos"). Tap sobre un capítulo velado lleva directo al módulo que lo enciende.
- Barra de progreso arriba: "Historia: 2 de 4 capítulos".
- Los capítulos con `estado: "borrador"` no se muestran ni cuentan para el total (regla de despliegue de CLAUDE.md).

**Estados de completitud por tier (reemplaza al estado dorado binario):**

1. **Evaluación:** un personaje está completo cuando la cantidad de capítulos encendidos en `global.capitulos[id]` iguala al total de capítulos **publicados** en su ficha del JSON.
2. **Render condicional según `tier`:**
   - `"dorado"` → clase `.card-gold`: marco metálico dorado + gradiente holográfico CSS animado, sin peso de imagen.
   - `"plateado"` → clase `.card-silver`: marco metálico plateado, efecto propio de menor intensidad (definir en Claude Design).
   - `"normal"` → sin clase de material.
3. **Sello "Historia completa":** aparece en toda carta completa, en los tres tiers. Es el reconocimiento universal; el material es la jerarquía.

Regla de contenido: cada capítulo con contenido que lo pida lleva su "¿Por qué?". Los capítulos de bonificación se marcan visualmente distinto en la pista.

## 2. Módulo Colección (refactor)

El álbum. Muestra, filtra (Todas / Griega / Nórdica / Romana — confirmado, 3 cartas) y busca. Ya no desbloquea (eso es del Oráculo y el Cielo). Suma:
- Indicador por carta de progreso de historia (ej. "3/4") y marco de material según tier si está completa.
- **Cuatro estados visuales en grilla:** velada (apagada, misteriosa) · descubierta (color del personaje) · completa plateada (marco plateado) · completa dorada (marco dorado con brillo). Las normales completas muestran solo el sello. Pendiente en Claude Design: el tratamiento plateado (hoy existen velada/descubierta/dorada).
- Vitrina de sets revelados (ver punto 6).
- Contador de historias completas junto al de descubiertas.

## 3. Módulo Oráculo de Delfos (descubrimiento)

Dos modos, elegibles con un toggle claro al entrar.

**Modo fácil (por defecto):** la carta del día se descubre con una sola pista y un tap correcto sobre una grilla chica de candidatos. Casi regalado. Objetivo: mazo grande rápido. Al acertar, el personaje entra a `descubiertos` con su capítulo `base` encendido, y se muestra su ficha.

**Modo difícil (opcional):** el rompecabezas completo de 3 pistas secuenciales (amplio → numérico → singular) con feedback paramétrico tipo Mastermind entre intentos. Acertar sin fallar da la **versión especial** del capítulo base: texto extendido, y la carta nace ya con un capítulo de bonificación encendido. Fallar cierra "las nieblas de Delfos hasta mañana", sin tono punitivo.

Un personaje nuevo por día en cualquiera de los dos modos. Regla de redacción de pistas: no nombrar al personaje ni su objeto en las pistas 1 y 2; la 3 puede ser inequívoca. Formato en JSON: `pistas_deduccion` = array de exactamente 3 strings. Ejemplos que fijan el estándar:

- Penélope: ["La figura oculta jamás cruzó el puente Bifröst.", "Su astucia es cinco veces su fuerza.", "Su mayor victoria fue tejida de día y destejida de noche."]
- Thor: ["El Olimpo nunca fue su hogar.", "Su fuerza es máxima, pero su astucia es de las más bajas.", "Su arma favorita siempre vuelve a su mano."]

## 4. Módulo El Cielo de los Mitos (constelaciones — descubre y enciende capítulos)

Cielo nocturno SVG. Feli conecta estrellas siguiendo el patrón real simplificado de una constelación; al completarla se ilumina, se dibuja la figura, y se revela un capítulo de historia con su "¿Por qué?" (por qué esa historia quedó en el cielo).

- Datos en `constelaciones.json`: id, nombre, coordenadas de estrellas (0-100), orden de trazo, personajeAsociado, capituloQueEnciende, mito suavizado, porque, estado (borrador/publicado).
- Catálogo inicial (10): Perseo, Andrómeda, Casiopea, Pegaso, Osa Mayor (Calisto), Orión, Escorpio, Leo (→ Heracles), Corona Boreal (→ Ariadna y Teseo), Géminis. Nota v3: 4 de las 10 tocan el ciclo de Perseo — por eso Perseo es tier dorado.
- Doble función: si el personaje asociado no está descubierto, completar la constelación lo **descubre** (capítulo base). Si ya está descubierto, **enciende un capítulo adicional**. Sin límite diario: el límite lo pone el catálogo finito.
- Dominancia griega a propósito: los nombres reales de las constelaciones vienen de ahí, y ese es el porqué del módulo. Tolerancia de trazo generosa en táctil; nunca frustrar por precisión.

## 5. Módulo Ordená el Mito (Ola 2 — enciende capítulos)

Las escenas de un mito aparecen desordenadas como mini-tarjetas ilustradas. Feli las secuencia en orden **causal** (qué causa qué, no cronología plana). Al ordenar bien, se enciende un capítulo del personaje protagonista de ese mito.

- Datos: cada mito secuenciable define personaje, escenas (con texto corto e ícono), orden correcto, capituloQueEnciende, estado (borrador/publicado), y el "¿Por qué?" que se revela al completar.
- Es el tutorial encubierto de la estructura narrativa: entrena secuencia causa-efecto, base de todo lo demás.
- Sin castigo: una escena mal puesta vuelve a su lugar con una animación suave y una pista ("¿qué tuvo que pasar antes de esto?").
- Candidato natural a alojar capítulos de bonificación de héroes narrativos (Odiseo, Penélope, Jasón, Orfeo) y, en Ola 2+, la mecánica de absorción de mitos menores (ver CLAUDE.md).

## 6. Sets temáticos latentes (mecánica de fondo)

Cada personaje lleva `tags_secretos`. Cuando `global.descubiertos` completa un set, se dispara pantalla de logro con el **Súper ¿Por qué?**: la explicación antropológica del patrón común entre culturas.

**Pendiente de redefinición (v3):** la salida de Las Nornas y Ratatosk del roster rompe dos sets. Estado actual:

| Set | Integrantes | Estado |
|---|---|---|
| Mentes Maestras | Odiseo, Loki, Dédalo, Prometeo, Hermes | OK |
| Señores del Clima | Zeus, Thor, Poseidón, Njörd | OK |
| Tejedoras del Destino | Penélope, Aracne, Ariadna, Frigg, ~~Las Nornas~~ | Redefinir: queda viable con 4, pero pierde a las tejedoras nórdicas por excelencia |
| Guardianes | Heimdall, Cerbero, Atlas, Esfinge | OK |
| Mensajeros | Hermes, Iris, Ratatosk | Resuelto: Ratatosk reincorporado puntualmente, sostiene el contraste entre culturas |
| Los Más Valientes | Tyr, Atalanta, ~~Brunilda~~, Aquiles | Redefinir: candidata de reemplazo natural, Las Valquirias o Pentesilea |

Los Más Valientes sigue sin resolver — no es parte de la publicación de hoy. Logros en `sets.revelados`, visibles en la vitrina de la Colección.

## Reglas de UI transversales

Botones grandes, tipografía redondeada sin infantilizar, animaciones suaves, cero inglés visible, todo operable con una mano en celular. Ningún módulo castiga: los fallos redirigen con humor o misterio, nunca con "perdiste".

## Definición de listo

**Ola 1:** hub navegable con Colección + Oráculo (2 modos) + Cielo + Sets; perfiles de partida (5 slots) con selector; migración v1 y migración de formato v2 probadas; formato de carta con capítulos y tiers (dorado/plateado/normal + sello universal) funcionando; Oráculo con pistas de ≥30 personajes; 10 constelaciones trazables en celular real; revisión de todos los textos contra las reglas de contenido.

**Ola 2:** Ordená el Mito encendiendo capítulos en ≥8 mitos; Laboratorio en modo lector; evaluación de absorción de mitos menores.
