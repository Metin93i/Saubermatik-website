# Deploy — CI → VPS → Health → Rollback

Kurzüberblick, wie die Saubermatik-Website auf den Hostinger-VPS kommt.

## Ablauf-Kette

```
Push/Merge auf main
        ↓
   CI-Workflow („CI“)
   lint + build
        ↓ (nur bei conclusion == success)
   Deploy-Workflow („Deploy to Hostinger VPS“)
        ↓ SSH
   Server: git fetch/reset origin/main
        ↓
   ops/deploy.sh
        ├─ Stand sichern (.letzter-guter-stand)
        ├─ npm ci + npm run build
        ├─ pm2 reload saubermatik-web
        ├─ Health-Check http://127.0.0.1:3000/
        └─ bei Misserfolg → Rollback + erneuter Health-Check
```

1. **CI grün auf `main`** — sonst startet kein Deploy.
2. **GitHub Actions SSH** — holt `origin/main` nach `/var/www/saubermatik-web`.
3. **`ops/deploy.sh`** — baut, lädt PM2 neu, prüft Port 3000 lokal.
4. **Health OK** → `DEPLOY OK auf <sha>`, Run bleibt grün.
5. **Health Fail** → Rollback auf gespeicherten SHA, Build + PM2, Run wird **rot**.

## Regel: Skript nur im Repo ändern

**`ops/deploy.sh` NIEMALS direkt auf dem Server editieren** — nur über das GitHub-Repo.
Der Deploy-Workflow lädt zuerst den aktuellen `main` und führt danach das versionierte Skript aus. Manuelle Server-Edits werden beim nächsten Deploy überschrieben und sind nicht reviewbar.

## Roter Deploy-Run — was tun?

Ein roter Deploy bedeutet: Health-Check nach dem Reload ist fehlgeschlagen (oder der Rollback-Pfad hat gemeldet).

| Situation | Bedeutung | Nächster Schritt |
|-----------|-----------|------------------|
| Build-Fehler vor PM2 | Meldung „BUILD FEHLGESCHLAGEN — Live-Stand unberührt“ | Live läuft weiter; Build-Log prüfen, Fix auf Branch/PR |
| Health nach Deploy rot | Rollback wurde ausgeführt | Logs (`pm2 logs saubermatik-web`), Rollback-SHA prüfen, Ursache beheben |
| Auch nach Rollback rot | Live ggf. beeinträchtigt | Sofort auf dem VPS prüfen (PM2-Status, curl 127.0.0.1:3000) — kein Blind-Redeploy |

Details zu PM2/Nginx: `docs/devops_handbuch_fuer_einsteiger.md`.
