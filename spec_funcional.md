# Spec funcional — MVP Colección de Cartas

## Stack

React + Tailwind (o HTML/CSS/JS vanilla en un solo archivo si se prioriza portabilidad total). Datos en `personajes.json`. Sin backend, sin dependencias de red. Persistencia: localStorage.

## Modelo de datos (personajes.json)

```json
{
  "id": "teseo",
  "nombre": "Teseo",
  "mitologia": "griega",
  "titulo": "El héroe del laberinto",
  "dones": ["Ingenio para resolver laberintos", "Coraje frente a lo desconocido"],
  "historia": "Texto suavizado, 3-5 oraciones.",
  "porque": "La sección '¿Por qué?' del mito, 2-3 oraciones.",
  "atributos": { "fuerza": 6, "astucia": 9, "valentia": 9, "magia": 1 },
  "colorCarta": "#4A7C59",
  "icono": "laberinto"
}
```

El campo `icono` mapea a una ilustración SVG inline definida en el código (una por personaje o por concepto). `colorCarta` define la paleta de la carta: verde oliva para griegos, azul hielo para nórdicos como base, con variación por personaje.

## Pantallas

### 1. Galería (home)
- Grilla responsive: 2 columnas en celular, 3 en tablet, 4-5 en desktop.
- Cada carta muestra: ilustración, nombre, chip de mitología (🏛️ griega / ⚡ nórdica).
- Cartas no desbloqueadas: silueta oscura con signo de pregunta y el nombre oculto ("???").
- Filtros arriba: Todas / Griega / Nórdica. Buscador por nombre (solo encuentra desbloqueadas).
- Contador de colección visible: "Tenés 5 de 12 héroes".

### 2. Detalle de carta
- Se abre al tocar una carta. Si estaba velada, animación de "revelado" (flip o brillo) y queda desbloqueada para siempre.
- Contenido: ilustración grande, nombre y título, dones como badges, atributos como barras visuales (sin números fríos: barras con iconos ⚔️🧠🦁✨), historia, y la sección "¿Por qué?" con diseño destacado (es el diferencial del juego).
- Botón volver claro y grande.

### 3. Mecánica de desbloqueo del MVP
- Simple: al entrar por primera vez hay 3 cartas ya desbloqueadas (Teseo, Heracles, Thor o las que Willy defina). El resto se desbloquea una por día de juego ("carta del día") o al responder una pregunta corta sobre una carta que ya tiene ("¿Quién le dio el hilo a Teseo?"). Elegir UNA de las dos mecánicas al implementar; la pregunta-para-desbloquear es la recomendada porque refuerza el "porqué" y le da desafío acorde a su edad mental.
- Todo el progreso en localStorage bajo una sola key (`feli-cartas-v1`), con botón de reset escondido en un menú para Willy.

## Reglas de UI

- Mobile-first, botones grandes, tipografía legible y con personalidad (redondeada, no infantilizada).
- Animaciones suaves en revelado y navegación; nada que maree.
- Cero texto en inglés visible.
- Accesible offline una vez cargado (sin llamadas de red en runtime).

## Fuera de alcance del MVP

Duelo, puntajes, sonido, editor de cartas, multi-perfil. La estructura del JSON ya los soporta; no construirlos ahora.

## Definición de listo para entregar

1. Las cartas CONFIRMADAS del roster cargadas y navegables.
2. Desbloqueo funcionando con persistencia.
3. Probado en celular real además de desktop.
4. Revisión final de todos los textos contra las reglas de contenido del CLAUDE.md antes de que lo vea Feli.
