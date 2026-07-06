# Spec funcional — Formato de carta + Ola 1 y 2

## 0. Hub shell

Pantalla principal: título del mundo, contador global ("Descubriste 34 de 68 héroes · 6 con historia completa") y una tarjeta grande por módulo con ícono, nombre y progreso propio. Navegación de una sola profundidad: hub → módulo → volver. Botón volver siempre visible y grande.

Estado en localStorage bajo `feli-mitos-v2`:

```json
{
  "global": {
    "descubiertos": ["teseo", "heracles"],
    "capitulos": { "teseo": ["base", "cielo:corona_boreal"] },
    "doradas": [],
    "logros": []
  },
  "coleccion": { "vistas": [] },
  "oraculo": { "fecha": "", "modo": "facil", "resueltas": [] },
  "cielo": { "completadas": [] },
  "sets": { "revelados": [] }
}
```

`global.capitulos` guarda, por personaje, qué capítulos tiene encendidos. Un personaje entra a `global.doradas` cuando la cantidad de capítulos encendidos iguala al total de capítulos que define su ficha en el JSON.

Al primer arranque, si existe `feli-cartas-v1`, migrar sus cartas desbloqueadas a `global.descubiertos`, darles el capítulo `base`, y borrar la key vieja.

## 1. Formato de carta (el cambio central de esta versión)

La carta deja de tener un texto de historia fijo. Ahora tiene:

**Frente:** ilustración, nombre, título, chip de mitología, dones como badges, atributos como barras **con el número 1-10 visible al lado de cada barra** (necesario para las pistas del Oráculo Difícil y para que ella compare).

**Cuerpo — historia por capítulos:** lista de capítulos del personaje. Cada uno:
- Encendido: título + texto + su "¿Por qué?", legible completo.
- Velado: título en gris, ícono de candado, y la pista de dónde se gana ("Trazá la Corona Boreal en el Cielo de los Mitos"). Tap sobre un capítulo velado lleva directo al módulo que lo enciende.
- Barra de progreso arriba: "Historia: 2 de 4 capítulos".

**Estado dorado:** cuando todos los capítulos están encendidos, toda la carta toma el tratamiento dorado (borde + fondo con gradiente holográfico CSS animado, sin peso de imagen) y aparece un sello "Historia completa". Es el único estado especial; se gana, no se compra ni sale al azar.

Regla de contenido: cada capítulo con contenido que lo pida lleva su "¿Por qué?". Los capítulos de bonificación (los que solo se consiguen en un módulo puntual) se marcan visualmente distinto en la pista para que se note que son "exclusivos de ese juego".

## 2. Módulo Colección (refactor)

El álbum. Muestra, filtra (Todas / Griega / Nórdica) y busca. Ya no desbloquea (eso es del Oráculo y el Cielo). Suma:
- Indicador por carta de progreso de historia (ej. "3/4") y marco dorado si está completa.
- Vitrina de sets revelados (ver punto 6).
- Contador de cartas doradas junto al de descubiertas.

## 3. Módulo Oráculo de Delfos (descubrimiento)

Dos modos, elegibles con un toggle claro al entrar.

**Modo fácil (por defecto):** la carta del día se descubre con una sola pista y un tap correcto sobre una grilla chica de candidatos. Casi regalado. Objetivo: mazo grande rápido. Al acertar, el personaje entra a `descubiertos` con su capítulo `base` encendido, y se muestra su ficha.

**Modo difícil (opcional):** el rompecabezas completo de 3 pistas secuenciales (amplio → numérico → singular) con feedback paramétrico tipo Mastermind entre intentos, según la mecánica #1 del informe de referencia. Acertar sin fallar da la **versión especial** del capítulo base: texto extendido, y la carta nace ya con un capítulo de bonificación encendido. Fallar cierra "las nieblas de Delfos hasta mañana", sin tono punitivo.

Un personaje nuevo por día en cualquiera de los dos modos. Regla de redacción de pistas: no nombrar al personaje ni su objeto en las pistas 1 y 2; la 3 puede ser inequívoca. Formato en JSON: `pistas_deduccion` = array de exactamente 3 strings. Ejemplos que fijan el estándar:

- Penélope: ["La figura oculta jamás cruzó el puente Bifröst.", "Su astucia es cinco veces su fuerza.", "Su mayor victoria fue tejida de día y destejida de noche."]
- Thor: ["El Olimpo nunca fue su hogar.", "Su fuerza es máxima, pero su astucia es de las más bajas.", "Su arma favorita siempre vuelve a su mano."]

## 4. Módulo El Cielo de los Mitos (constelaciones — descubre y enciende capítulos)

Cielo nocturno SVG. Feli conecta estrellas siguiendo el patrón real simplificado de una constelación; al completarla se ilumina, se dibuja la figura, y se revela un capítulo de historia con su "¿Por qué?" (por qué esa historia quedó en el cielo).

- Datos en `constelaciones.json`: id, nombre, coordenadas de estrellas (0-100), orden de trazo, personajeAsociado, capituloQueEnciende, mito suavizado, porque.
- Catálogo inicial (10): Perseo, Andrómeda, Casiopea, Pegaso, Osa Mayor (Calisto), Orión, Escorpio, Leo (→ Heracles), Corona Boreal (→ Ariadna y Teseo), Géminis.
- Doble función: si el personaje asociado no está descubierto, completar la constelación lo **descubre** (capítulo base). Si ya está descubierto, **enciende un capítulo adicional** (ej. Corona Boreal enciende "el hilo de Ariadna" en la carta de Teseo). Sin límite diario: el límite lo pone el catálogo finito.
- Dominancia griega a propósito: los nombres reales de las constelaciones vienen de ahí, y ese es el porqué del módulo. Tolerancia de trazo generosa en táctil; nunca frustrar por precisión.

## 5. Módulo Ordená el Mito (Ola 2 — enciende capítulos)

Las escenas de un mito aparecen desordenadas como mini-tarjetas ilustradas. Feli las secuencia en orden **causal** (qué causa qué, no cronología plana). Al ordenar bien, se enciende un capítulo del personaje protagonista de ese mito.

- Datos: cada mito secuenciable define personaje, escenas (con texto corto e ícono), orden correcto, capituloQueEnciende, y el "¿Por qué?" que se revela al completar (por qué los eventos se encadenan así).
- Es el tutorial encubierto de la estructura narrativa: entrena secuencia causa-efecto, base de todo lo demás.
- Sin castigo: una escena mal puesta vuelve a su lugar con una animación suave y una pista ("¿qué tuvo que pasar antes de esto?").
- Candidato natural a alojar capítulos de bonificación de héroes narrativos (Odiseo, Penélope, Jasón, Orfeo).

## 6. Sets temáticos latentes (mecánica de fondo)

Cada personaje lleva `tags_secretos`. Cuando `global.descubiertos` completa un set, se dispara pantalla de logro con el **Súper ¿Por qué?**: la explicación antropológica del patrón común entre culturas. Sets iniciales (6):

| Set | Integrantes | Súper ¿Por qué? (esencia) |
|---|---|---|
| Mentes Maestras | Odiseo, Loki, Dédalo, Prometeo, Hermes | Toda cultura admira y desconfía del ingenio sin límites |
| Señores del Clima | Zeus, Thor, Poseidón, Njörd | Pueblos lejanos inventaron dioses parecidos para las tormentas |
| Tejedoras del Destino | Penélope, Aracne, Ariadna, Frigg, Las Nornas | Tejer como símbolo de poder y destino en sociedades separadas |
| Guardianes | Heimdall, Cerbero, Atlas, Esfinge | El que custodia un umbral: puertas, puentes, cielos y preguntas |
| Mensajeros | Hermes, Iris, Ratatosk | Cómo viajaban las noticias antes del teléfono |
| Los Más Valientes | Tyr, Atalanta, Brunilda, Aquiles | La valentía con costo, premiada distinto por cada cultura |

Logros en `sets.revelados`, visibles en la vitrina de la Colección.

## Reglas de UI transversales

Botones grandes, tipografía redondeada sin infantilizar, animaciones suaves, cero inglés visible, todo operable con una mano en celular. Ningún módulo castiga: los fallos redirigen con humor o misterio, nunca con "perdiste".

## Definición de listo

**Ola 1:** hub navegable con Colección + Oráculo (2 modos) + Cielo + Sets; migración v1 probada; formato de carta con capítulos y dorada funcionando; Oráculo con pistas de ≥30 personajes; 10 constelaciones trazables en celular real; revisión de todos los textos contra las reglas de contenido.

**Ola 2:** Ordená el Mito encendiendo capítulos en ≥8 mitos; Laboratorio en modo lector.
