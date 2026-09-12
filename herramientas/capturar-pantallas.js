#!/usr/bin/env node
/*
 * Capturar pantallas — herramienta de revisión visual de Mundo de Mitos.
 *
 * Qué hace: levanta el juego en un servidor estático local, siembra
 * localStorage con un perfil de prueba (nada de datos reales — es un
 * personaje inventado, "Jugadora", con progreso sintético) y saca capturas
 * de pantalla de las pantallas principales: hub (con progreso y vacío),
 * colección (grilla, lista, mobile y desktop), las tres caras de una carta
 * abierta, y los módulos (Oráculo, Cielo, Mapa, Ordená el Mito, Espejo).
 *
 * Para qué sirve: cualquier revisión visual futura arranca viendo estas
 * capturas en vez de releer CSS a ciegas. No reemplaza abrir el juego de
 * verdad, pero da un punto de partida rápido y reproducible.
 *
 * Quién lo corre: pensado para que lo ejecute Claude Code dentro de su
 * propia sesión (ya tiene Playwright y Chromium instalados ahí). Willy no
 * necesita correrlo a mano ni instalar nada para pedir una revisión visual.
 *
 * Uso: node herramientas/capturar-pantallas.js [carpeta-de-salida]
 * Por defecto guarda en herramientas/capturas/ (fuera de git, ver .gitignore).
 */

const http = require("http");
const fs = require("fs");
const path = require("path");

const RAIZ = path.resolve(__dirname, "..");
const SALIDA = path.resolve(process.argv[2] || path.join(__dirname, "capturas"));

const TIPOS_MIME = {
  ".html": "text/html", ".js": "application/javascript", ".css": "text/css",
  ".json": "application/json", ".jpg": "image/jpeg", ".jpeg": "image/jpeg",
  ".png": "image/png", ".svg": "image/svg+xml", ".woff": "font/woff",
  ".woff2": "font/woff2", ".ttf": "font/ttf"
};

function requerirPlaywright() {
  // En una sesión de Claude Code, Playwright suele estar instalado global
  // en vez de como dependencia del repo (el repo no tiene package.json:
  // CLAUDE.md §2.5 lo mantiene en cero dependencias de runtime).
  const candidatos = [
    "playwright",
    "/opt/node22/lib/node_modules/playwright",
    "/usr/lib/node_modules/playwright"
  ];
  for (const c of candidatos) {
    try { return require(c); } catch (e) { /* seguir probando */ }
  }
  throw new Error(
    "No encontré el paquete Playwright instalado. Este script está pensado " +
    "para correr dentro de una sesión de Claude Code que ya lo tiene disponible."
  );
}

function servirEstatico() {
  return new Promise((resolve) => {
    const servidor = http.createServer((req, res) => {
      let ruta = decodeURIComponent(req.url.split("?")[0]);
      if (ruta === "/") ruta = "/index.html";
      const archivo = path.join(RAIZ, ruta);
      if (!archivo.startsWith(RAIZ)) { res.writeHead(403); res.end(); return; }
      fs.readFile(archivo, (err, datos) => {
        if (err) { res.writeHead(404); res.end("No encontrado"); return; }
        const ext = path.extname(archivo);
        res.writeHead(200, { "Content-Type": TIPOS_MIME[ext] || "application/octet-stream" });
        res.end(datos);
      });
    });
    servidor.listen(0, "127.0.0.1", () => resolve(servidor));
  });
}

// Arma un perfil de prueba con progreso variado (algunas cartas a mitad de
// camino, algunas completas) a partir de los primeros N personajes del JSON
// real, así cubre los tres tiers sin inventar personajes que no existen.
function armarPerfilDePrueba(personajes, cantidad = 40) {
  const elegidos = personajes.slice(0, cantidad);
  const capitulos = {};
  const completas = [];
  elegidos.forEach((p, i) => {
    const idsCapitulos = (p.capitulos || [])
      .filter(c => c.estado !== "borrador")
      .map(c => c.id);
    if (i % 3 === 0) { capitulos[p.id] = idsCapitulos.slice(); completas.push(p.id); }
    else capitulos[p.id] = idsCapitulos.slice(0, Math.max(1, Math.ceil(idsCapitulos.length / 2)));
  });
  return {
    perfilActivo: 0,
    perfiles: [{
      nombre: "Jugadora", dificultad: "normal", creado: "2026-01-01",
      global: { descubiertos: elegidos.map(p => p.id), capitulos, completas, logros: [] },
      coleccion: { vistas: elegidos.map(p => p.id) },
      oraculo: { fecha: "", modo: "facil", resueltas: [] },
      cielo: { completadas: [] },
      sets: { revelados: [] }
    }]
  };
}

function perfilVacio() {
  return {
    perfilActivo: 0,
    perfiles: [{
      nombre: "Nueva", dificultad: "normal", creado: "2026-01-01",
      global: { descubiertos: [], capitulos: {}, completas: [], logros: [] },
      coleccion: { vistas: [] },
      oraculo: { fecha: "", modo: "facil", resueltas: [] },
      cielo: { completadas: [] },
      sets: { revelados: [] }
    }]
  };
}

async function sembrarPerfil(page, base, estado) {
  await page.goto(base + "index.html");
  await page.evaluate(e => localStorage.setItem("feli-mitos-v2", JSON.stringify(e)), estado);
}

async function capturar(page, base, url, nombreArchivo, accionExtra) {
  await page.goto(base + url);
  await page.waitForTimeout(1000);
  if (accionExtra) {
    try { await accionExtra(page); } catch (e) { console.log(`  (acción extra falló en ${nombreArchivo}: ${e.message})`); }
  }
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(SALIDA, nombreArchivo + ".png") });
  console.log(`  ✓ ${nombreArchivo}.png`);
}

async function main() {
  const { chromium } = requerirPlaywright();
  fs.mkdirSync(SALIDA, { recursive: true });

  const servidor = await servirEstatico();
  const puerto = servidor.address().port;
  const base = `http://127.0.0.1:${puerto}/`;

  const browser = await chromium.launch();

  try {
    // ---- Vista mobile (390×844, la que más importa: mobile-first) ----
    const ctxMobile = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
    const mobile = await ctxMobile.newPage();
    await mobile.goto(base + "index.html");

    const personajes = await mobile.evaluate(async () => {
      const r = await fetch("personajes.json");
      const j = await r.json();
      return Array.isArray(j) ? j : (j.personajes || []);
    });

    console.log("Capturando pantallas mobile...");
    const perfilVar = armarPerfilDePrueba(personajes, 40);
    await sembrarPerfil(mobile, base, perfilVar);

    await capturar(mobile, base, "index.html", "01-hub");
    await capturar(mobile, base, "coleccion.html", "02-coleccion-grilla");
    await capturar(mobile, base, "coleccion.html", "03-carta-frente", p => p.locator(".carta").first().click());
    await capturar(mobile, base, "coleccion.html", "04-carta-dorso", async p => {
      await p.locator(".carta").first().click(); await p.waitForTimeout(400);
      await p.locator('[data-cara="dorso"]').click();
    });
    await capturar(mobile, base, "coleccion.html", "05-carta-capitulos", async p => {
      await p.locator(".carta").first().click(); await p.waitForTimeout(400);
      await p.locator('[data-cara="dorso"]').click(); await p.waitForTimeout(300);
      await p.locator('[data-cara="capitulos"]').click();
    });
    await capturar(mobile, base, "coleccion.html", "06-coleccion-lista", async p => {
      await p.locator("#trigger-vista").click(); await p.waitForTimeout(200);
      await p.locator('[data-vista="lista"]').click();
    });
    await capturar(mobile, base, "oraculo.html", "07-oraculo");
    await capturar(mobile, base, "cielo.html", "08-cielo");
    await capturar(mobile, base, "mapa.html", "09-mapa");
    await capturar(mobile, base, "ordena.html", "10-ordena");
    await capturar(mobile, base, "espejo.html", "11-espejo");

    await sembrarPerfil(mobile, base, perfilVacio());
    await capturar(mobile, base, "index.html", "12-hub-perfil-vacio");
    await capturar(mobile, base, "coleccion.html", "13-coleccion-vacia");

    // ---- Vista desktop, solo colección (para chequear el grid ancho) ----
    console.log("Capturando pantallas desktop...");
    const ctxDesktop = await browser.newContext({ viewport: { width: 1280, height: 800 } });
    const desktop = await ctxDesktop.newPage();
    await sembrarPerfil(desktop, base, perfilVar);
    await capturar(desktop, base, "coleccion.html", "14-coleccion-desktop");

  } finally {
    await browser.close();
    servidor.close();
  }

  console.log(`\nListo. Capturas en: ${SALIDA}`);
}

main().catch(err => { console.error(err); process.exit(1); });
