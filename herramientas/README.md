# Herramientas

Scripts de apoyo para el desarrollo del juego. No son parte del juego en sí
(no se sirven ni se cargan desde `index.html` ni ningún módulo): corren
aparte, dentro de una sesión de Claude Code, para ayudar a revisar o probar
el repo.

## `capturar-pantallas.js`

Levanta el juego en un servidor local, siembra un perfil de prueba (progreso
sintético, ningún dato real) y saca capturas de las pantallas principales:
hub, colección (grilla/lista, con cartas y vacía), las tres caras de una
carta abierta, y los módulos (Oráculo, Cielo, Mapa, Ordená el Mito, Espejo).

**Para qué sirve:** que una revisión visual arranque viendo cómo se ve el
juego de verdad, no releyendo CSS a ciegas.

**Cómo correrlo** (dentro de una sesión de Claude Code, que ya tiene
Playwright y Chromium instalados):

```
node herramientas/capturar-pantallas.js
```

Las capturas quedan en `herramientas/capturas/` (carpeta ignorada por git,
se regeneran en cada corrida). Se puede pasar otra carpeta de salida como
primer argumento.

Willy no necesita instalar nada ni correrlo a mano: es una herramienta para
que Claude Code la use al pedirle una revisión visual.
