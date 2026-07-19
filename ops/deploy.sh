#!/usr/bin/env bash
# =============================================================================
# ops/deploy.sh — Deploy der Saubermatik-Website auf dem Hostinger-VPS
# =============================================================================
#
# Ablauf: Stand sichern → Code holen → bauen → PM2 neu laden → Health-Check
# Bei fehlgeschlagenem Health-Check: automatischer Rollback auf den letzten
# guten Stand.
#
# WICHTIG: Diese Datei NIEMALS direkt auf dem Server editieren.
#          Änderungen nur im Repo, Deploy holt die versionierte Fassung.
# =============================================================================

set -euo pipefail

APP_DIR="/var/www/saubermatik-web"
PM2_APP="saubermatik-web"
HEALTH_URL="http://127.0.0.1:3000/"
MAX_HEALTH_ATTEMPTS=10
HEALTH_SLEEP_SEC=3
STAND_DATEI=".letzter-guter-stand"

cd "${APP_DIR}"

# ---------------------------------------------------------------------------
# 1) Letzten guten Stand sichern (für möglichen Rollback)
# ---------------------------------------------------------------------------
# Der Workflow resettet bereits vor dem Skript-Aufruf auf origin/main
# (damit die frische ops/deploy.sh läuft). Dabei setzt Git ORIG_HEAD auf den
# vorherigen Live-SHA. Den nutzen wir als Rollback-Ziel.
# Fallback: HEAD — falls das Skript manuell ohne Vor-Reset gestartet wird.
if git rev-parse --verify ORIG_HEAD >/dev/null 2>&1 \
  && [ "$(git rev-parse ORIG_HEAD)" != "$(git rev-parse HEAD)" ]; then
  git rev-parse ORIG_HEAD > "${STAND_DATEI}"
else
  git rev-parse HEAD > "${STAND_DATEI}"
fi
LETZTER_GUTER_STAND="$(cat "${STAND_DATEI}")"

# ---------------------------------------------------------------------------
# 2) Neuesten main vom Remote holen und hart darauf setzen
# ---------------------------------------------------------------------------
# Idempotent, falls der Workflow schon resettet hat; nötig bei manuellem Lauf.
git fetch origin main
git reset --hard origin/main

NEUER_SHA="$(git rev-parse HEAD)"

# ---------------------------------------------------------------------------
# 3) Dependencies installieren und Production-Build
# ---------------------------------------------------------------------------
# Schlägt der Build fehl, wurde PM2 noch nicht angefasst → Live-Prozess
# läuft weiter mit dem bisherigen .next-Artefakt (keine Downtime).
npm ci

if ! npm run build; then
  echo "BUILD FEHLGESCHLAGEN — Live-Stand unberührt"
  exit 1
fi

# ---------------------------------------------------------------------------
# 4) PM2 sanft neu laden (Zero-Downtime-Reload im Cluster-Modus)
# ---------------------------------------------------------------------------
pm2 reload "${PM2_APP}" --update-env

# ---------------------------------------------------------------------------
# 5) Health-Check gegen lokalen Port 3000 (nicht gegen die Domain)
# ---------------------------------------------------------------------------
health_check() {
  local attempt
  for attempt in $(seq 1 "${MAX_HEALTH_ATTEMPTS}"); do
    if curl -sf -o /dev/null "${HEALTH_URL}"; then
      return 0
    fi
    echo "Health-Check Versuch ${attempt}/${MAX_HEALTH_ATTEMPTS} fehlgeschlagen — warte ${HEALTH_SLEEP_SEC}s …"
    sleep "${HEALTH_SLEEP_SEC}"
  done
  return 1
}

if health_check; then
  echo "DEPLOY OK auf ${NEUER_SHA}"
  exit 0
fi

# ---------------------------------------------------------------------------
# 6) Rollback: alter Stand, neu bauen, PM2 laden, erneut Health-Check
# ---------------------------------------------------------------------------
echo "Health-Check fehlgeschlagen — starte Rollback auf ${LETZTER_GUTER_STAND} …"

git reset --hard "${LETZTER_GUTER_STAND}"
npm ci
npm run build
pm2 reload "${PM2_APP}" --update-env

# Erneuter Health-Check nach Rollback (Bestätigung, dass Live wieder antwortet)
if ! health_check; then
  echo "ROLLBACK auf ${LETZTER_GUTER_STAND} — Deploy fehlgeschlagen (Health-Check nach Rollback ebenfalls rot)"
  exit 1
fi

echo "ROLLBACK auf ${LETZTER_GUTER_STAND} — Deploy fehlgeschlagen"
exit 1
