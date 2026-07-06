# Héroes y Dioses — Cartas de Mitología para Feli

Juego web de colección de cartas de héroes y dioses de la mitología griega, nórdica y romana.
Sin backend, sin build, sin dependencias: HTML, CSS y JavaScript puros.

## Cómo jugarlo

Necesita servirse por HTTP (el `fetch` de `personajes.json` no funciona abriendo el
archivo directo). Cualquiera de estas opciones sirve:

```bash
# Opción 1: Python (viene instalado en casi cualquier máquina)
python3 -m http.server 8000
# y abrir http://localhost:8000

# Opción 2: Node
npx serve .
```

O publicarlo en **GitHub Pages**: Settings → Pages → Deploy from a branch → rama
principal, carpeta `/ (root)`. Queda online en `https://<usuario>.github.io/JuegoMitosFeli/`
y funciona offline después de la primera carga (tiene service worker).

## Cómo se juega

- La colección arranca con **3 cartas desbloqueadas**: Teseo, Heracles y Thor.
- Las demás aparecen veladas (silueta con `???`).
- Al tocar una carta velada, hay que responder una **pregunta sobre una carta que ya
  está en la colección**. Respuesta correcta = carta nueva desbloqueada, para siempre.
- Cada carta tiene su historia, sus dones, sus atributos y la sección **"¿Por qué?"**:
  qué explicaba o enseñaba ese mito.
- El progreso se guarda solo en el navegador (`localStorage`, key `feli-cartas-v1`).
- El engranaje ⚙️ de abajo a la derecha abre el menú de opciones con el botón de
  reinicio (para Willy, no para Feli 😄).

## Cómo agregar un personaje nuevo

1. Agregar un objeto a `personajes.json` con la misma estructura que los existentes
   (ver la ficha modelo en `spec_funcional.md`). Incluye la `pregunta` de desbloqueo.
2. Si se quiere un dibujo propio, agregar una entrada en `ICONOS` dentro de
   `iconos.js` y referenciarla en el campo `icono`. Si el icono no existe, la carta
   muestra el comodín de misterio.
3. Subir la constante `VERSION` en `sw.js` para que los navegadores actualicen la caché.

**Antes de agregar contenido, leer las reglas de contenido en `CLAUDE.md`** (suavizado
obligatorio, sección "¿Por qué?" obligatoria, registro cálido sin infantilizar).

## Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | Estructura de la app (galería, detalle, modales) |
| `estilos.css` | Estilos mobile-first |
| `app.js` | Lógica: galería, filtros, búsqueda, desbloqueo, persistencia |
| `iconos.js` | Ilustraciones SVG generadas en código, una por personaje |
| `personajes.json` | **Los datos.** Agregar héroes = editar solo este archivo |
| `sw.js` | Service worker para que funcione offline |
| `CLAUDE.md` | Contexto del proyecto y reglas de contenido (no negociables) |
| `roster_personajes.md` | Roster completo con fichas y pool de expansión |
| `spec_funcional.md` | Spec funcional del MVP |

## Roadmap (post-MVP, no construido)

- Fase 2: modo duelo tipo Top Trumps (los atributos ya están en el JSON).
- Fase 3: modo historia / elegí-tu-camino.
- Fase 4: editor de cartas para que Feli cree sus propios héroes.
