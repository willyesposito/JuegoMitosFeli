#!/usr/bin/env bash
# PreToolUse hook (matcher Bash, filtrado por "if": "Bash(git commit*)").
# Bloquea el commit si cambian archivos que sw.js cachea para el modo offline
# (app.js, iconos.js, estilos.css, index.html, personajes.json) sin que la
# constante VERSION de sw.js también haya cambiado. Sin el bump, el navegador
# de Feli puede seguir sirviendo la versión vieja desde la caché offline.
set -euo pipefail

INPUT="$(cat)"
COMMAND="$(printf '%s' "$INPUT" | jq -r '.tool_input.command // empty')"

# Segunda validación además del filtro "if" del hook, por si el comando
# llega encadenado (ej: "cd algo && git commit ...").
if ! printf '%s' "$COMMAND" | grep -qE '(^|[;&|]|&&|\|\|)[[:space:]]*git commit'; then
  exit 0
fi

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  exit 0
fi

ARCHIVOS_CACHEADOS=(app.js iconos.js estilos.css index.html personajes.json)

if [ -n "$(git diff --cached --name-only 2>/dev/null)" ]; then
  DIFF_SCOPE=(--cached)
else
  DIFF_SCOPE=()
fi

CHANGED_FILES="$(git diff "${DIFF_SCOPE[@]}" --name-only 2>/dev/null || true)"

CAMBIADOS=()
for f in "${ARCHIVOS_CACHEADOS[@]}"; do
  if printf '%s\n' "$CHANGED_FILES" | grep -qx "$f"; then
    CAMBIADOS+=("$f")
  fi
done

# Ninguno de los archivos cacheados cambió: no hay nada que revisar.
if [ "${#CAMBIADOS[@]}" -eq 0 ]; then
  exit 0
fi

VERSION_DIFF="$(git diff "${DIFF_SCOPE[@]}" -- sw.js 2>/dev/null | grep -E '^[+-].*const VERSION' || true)"

# sw.js sí actualizó su línea de VERSION: todo bien, dejamos pasar el commit.
if [ -n "$VERSION_DIFF" ]; then
  exit 0
fi

LISTA="$(IFS=', '; echo "${CAMBIADOS[*]}")"

REASON="Este commit modifica $LISTA, que sw.js cachea para el modo offline, pero no subió la constante VERSION en sw.js. Sin ese cambio, el navegador de Feli puede seguir sirviendo la versión vieja cacheada. Subí VERSION en sw.js (y agregá el archivo al commit) antes de confirmar."

jq -n --arg reason "$REASON" '{
  hookSpecificOutput: {
    hookEventName: "PreToolUse",
    permissionDecision: "deny",
    permissionDecisionReason: $reason
  }
}'
