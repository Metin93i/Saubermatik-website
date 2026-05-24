# DevOps-Handbuch für Einsteiger — Saubermatik Website auf Hostinger VPS

Stand: Hostinger VPS Deployment mit **PM2**, **Nginx** und **GitHub Actions**.

Dieses Dokument erklärt in einfachem Deutsch, wie die Saubermatik-Website im Internet läuft — ohne Vorkenntnisse vorauszusetzen. Technische Details stehen in `docs/architecture.md`.

---

## Das große Bild in 30 Sekunden

Stellen Sie sich vor:

1. **Der VPS** ist Ihr eigener Computer im Rechenzentrum — nur für Ihre Website.
2. **Next.js** ist das Programm, das die Seiten baut und ausliefert.
3. **PM2** ist der Schichtleiter, der dieses Programm rund um die Uhr am Laufen hält.
4. **Nginx** ist der Türsteher an der Haustür — Besucher klopfen bei ihm an (Port 80), er leitet weiter an PM2 (Port 3000).
5. **GitHub Actions** ist der Kurier: Sobald Sie Code auf GitHub hochladen, fährt er zum Server und aktualisiert alles automatisch.

```
Besucher → Nginx (Port 80) → PM2 → Next.js (Port 3000) → Ihre Website
                ↑
         GitHub Actions aktualisiert den Code auf dem VPS
```

---

## Was ist ein VPS — und warum kein Shared Hosting?

### VPS = Virtual Private Server

Ein **VPS** ist ein virtueller Server: Sie mieten einen festen Anteil an CPU, RAM und Speicher. Sie haben **root-Zugriff** (volle Kontrolle) und können installieren, was Sie brauchen — Node.js, PM2, Nginx, eigene Firewall-Regeln.

**Metapher:** Shared Hosting ist eine WG mit gemeinsamer Küche — jeder stört jeden, Sie dürfen nicht selbst kochen. Ein VPS ist Ihre **eigene Werkstatt** mit Werkzeug an der Wand.

### Warum Saubermatik kein klassisches Shared Hosting nutzt

Die Saubermatik-Website ist eine **Next.js 16**-Anwendung mit:

- über **200 statisch vorgerenderten Seiten** (SEO-Matrix),
- **API-Routen** für Lead- und Bewerbungsformulare (`/api/lead`, `/api/career`),
- **Node.js-Laufzeit** für den Production-Build (`npm run build` + `npm start`).

Klassisches PHP-Webhosting kann das **nicht** nativ ausführen. Sie brauchen:

- **Node.js 20+**
- genug RAM für den Build (empfohlen: mindestens 2 GB)
- einen Prozess-Manager (PM2), der die App nach Neustart wieder startet
- einen Reverse Proxy (Nginx) für Domain und später HTTPS

Ein Hostinger **VPS** erfüllt das. Shared Hosting wäre der falsche Werkzeugkasten.

---

## Was macht PM2? — Der 24/7-Schichtleiter

**PM2** (Process Manager 2) überwacht Ihr Node.js-Programm.

| Ohne PM2 | Mit PM2 |
|----------|---------|
| Terminal schließen → Website aus | Website läuft weiter |
| Absturz → Seite offline bis manuell neu starten | PM2 startet automatisch neu |
| Server-Neustart → alles vergessen | PM2 startet beim Boot mit (`pm2 startup`) |

**Metapher:** PM2 ist der **Schichtleiter in der Reinigungsfirma**. Er stellt sicher, dass immer jemand auf der Baustelle ist — auch nachts, auch wenn jemand krank wird. Er protokolliert Ausfälle (`pm2 logs`) und kann mehrere Mitarbeiter parallel einsetzen (`instances: "max"`).

Konfigurationsdatei im Projekt: **`ecosystem.config.js`** (im Root-Verzeichnis).

Wichtige Befehle auf dem VPS:

```bash
pm2 start ecosystem.config.js    # Erstmaliger Start
pm2 reload ecosystem.config.js   # Sanftes Neuladen nach Deploy
pm2 status                       # Läuft alles?
pm2 logs saubermatik-web         # Live-Protokoll
```

---

## Was macht Nginx? — Der Türsteher

**Nginx** ist ein Webserver — aber bei uns vor allem **Türsteher und Wegweiser**.

- Besucher rufen `www.ihre-domain.de` auf → das ist **Port 80** (HTTP).
- Nginx nimmt die Anfrage entgegen und leitet sie intern an **`http://localhost:3000`** weiter, wo Next.js lauscht.
- Von außen sieht niemand Port 3000 — nur Nginx.

**Metapher:** Nginx ist der **Empfang am Firmengebäude**. Gäste kommen zur Haupttür (Port 80). Der Empfang prüft nicht die Rechnung — er führt sie zum richtigen Büro (Next.js). Später kann derselbe Empfang auch **HTTPS-Zertifikate** (Let's Encrypt) verwalten.

Vorlage im Projekt: **`ops/nginx-template.conf`**

---

## Was macht CI/CD / GitHub Actions? — Der automatische Kurierdienst

**CI/CD** = Continuous Integration / Continuous Deployment  
= „Code rein, Website raus — automatisch“.

**GitHub Actions** ist ein Dienst von GitHub, der bei bestimmten Ereignissen Skripte ausführt — z. B. bei jedem **Push auf `main`**.

**Metapher:** Sie legen einen Brief (Code) in den Briefkasten (GitHub). Der **Kurier** (GitHub Actions) fährt sofort zum Server (VPS), holt die neueste Version (`git pull`), baut die Website neu (`npm run build`) und sagt PM2 Bescheid (`pm2 reload`).

Konfigurationsdatei: **`.github/workflows/deploy.yml`**

### GitHub Secrets (einmalig einrichten)

Unter **GitHub → Repository → Settings → Secrets and variables → Actions**:

| Secret | Beispiel | Bedeutung |
|--------|----------|-----------|
| `SSH_HOST` | `123.45.67.89` | IP-Adresse des VPS |
| `SSH_USER` | `root` oder `deploy` | SSH-Benutzername |
| `SSH_PRIVATE_KEY` | Inhalt der `id_rsa`-Datei | Privater SSH-Schlüssel |
| `SSH_PORT` | `22` | SSH-Port (optional) |
| `DEPLOY_PATH` | `/var/www/saubermatik-website` | Pfad zum Git-Clone auf dem VPS |

---

## Erst-Setup auf dem Hostinger VPS (Checkliste)

1. **VPS bestellen** (Ubuntu 22.04 oder 24.04 empfohlen).
2. **SSH verbinden:** `ssh root@IHRE-IP`
3. **Node.js installieren** (z. B. via [NodeSource](https://github.com/nodesource/distributions) — Version 20 LTS).
4. **PM2 global installieren:** `npm install -g pm2`
5. **Nginx installieren:** `apt update && apt install -y nginx`
6. **Git-Repository klonen:**
   ```bash
   mkdir -p /var/www && cd /var/www
   git clone https://github.com/IHR-ORG/saubermatik-website.git
   cd saubermatik-website
   ```
7. **Umgebungsvariablen anlegen:** `.env.local` oder `.env.production` mit `RESEND_API_KEY`, `NEXT_PUBLIC_BUSINESS_PHONE`, etc.
8. **Erstes Build & Start:**
   ```bash
   npm ci
   npm run build
   pm2 start ecosystem.config.js
   pm2 save
   pm2 startup   # Anweisung ausführen, die PM2 ausgibt
   ```
9. **Nginx konfigurieren** (siehe `ops/nginx-template.conf`), Domain eintragen, `nginx -t && systemctl reload nginx`
10. **GitHub Secrets setzen** — ab dann deployt jeder Push auf `main` automatisch.

---

## Zeile für Zeile: `ecosystem.config.js`

Datei im Projekt-Root. PM2 liest diese Datei und weiß, **was** es starten soll.

```javascript
/** PM2-Konfiguration für Saubermatik Next.js auf dem Hostinger VPS. */
```
→ Kommentar für Menschen. PM2 ignoriert ihn.

```javascript
module.exports = {
```
→ Standard-Node.js-Syntax: „Diese Datei exportiert eine Konfiguration.“

```javascript
  apps: [
```
→ PM2 kann mehrere Apps verwalten. Wir haben eine: `saubermatik-web`.

```javascript
    {
      name: "saubermatik-web",
```
→ **Name** in `pm2 status` und in Logs. Wählen Sie einen eindeutigen Namen.

```javascript
      script: "npm",
      args: "start",
```
→ PM2 startet nicht direkt `node`, sondern **`npm start`**. Das führt in `package.json` zu `next start` — den Production-Server von Next.js.

```javascript
      instances: "max",
      exec_mode: "cluster",
```
→ **`instances: "max"`** = so viele parallele Instanzen wie CPU-Kerne.  
→ **`exec_mode: "cluster"`** = Lastverteilung über mehrere Prozesse (besser bei vielen gleichzeitigen Besuchern).  
→ Hinweis: Bei sehr kleinen VPS (1 GB RAM) ggf. auf `instances: 1` reduzieren.

```javascript
      autorestart: true,
```
→ Absturz? PM2 startet die App automatisch neu.

```javascript
      watch: false,
```
→ Kein automatisches Neuladen bei Dateiänderungen — in Production wollen wir das **nicht** (Deploy läuft über GitHub Actions).

```javascript
      max_memory_restart: "512M",
```
→ Sicherheitsnetz: Prozess wird neu gestartet, wenn er mehr als 512 MB RAM frisst.

```javascript
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
```
→ **Umgebungsvariablen** für die App:  
- `NODE_ENV: "production"` → Next.js optimiert für Live-Betrieb.  
- `PORT: 3000` → Next.js lauscht intern auf Port 3000 (Nginx leitet dorthin weiter).

```javascript
    },
  ],
};
```
→ Ende der Konfiguration.

---

## Zeile für Zeile: `.github/workflows/deploy.yml`

Diese Datei liegt unter `.github/workflows/` in GitHub und wird **automatisch** ausgeführt.

```yaml
name: Deploy to Hostinger VPS
```
→ Anzeigename des Workflows in der GitHub-Oberfläche.

```yaml
on:
  push:
    branches:
      - main
```
→ **Auslöser:** Jedes Mal, wenn jemand Code auf den Branch **`main`** pusht.

```yaml
jobs:
  deploy:
    name: Deploy via SSH
    runs-on: ubuntu-latest
```
→ Ein **Job** namens `deploy`, der auf einem frischen Ubuntu-Computer von GitHub läuft (nicht auf Ihrem VPS — nur der Kurier startet hier).

```yaml
    steps:
      - name: Deploy on VPS
        uses: appleboy/ssh-action@v1.2.0
```
→ Ein Schritt, der eine fertige **SSH-Action** nutzt, um sich auf Ihren VPS einzuloggen.

```yaml
        with:
          host: ${{ secrets.SSH_HOST }}
          username: ${{ secrets.SSH_USER }}
          key: ${{ secrets.SSH_PRIVATE_KEY }}
          port: ${{ secrets.SSH_PORT || 22 }}
```
→ Verbindungsdaten aus **GitHub Secrets** (Passwörter stehen nie im Code!).  
→ `SSH_PORT || 22` = Standard-Port 22, falls kein Secret gesetzt.

```yaml
          script_stop: true
```
→ Wenn ein Befehl fehlschlägt, bricht das Skript ab — halbfertige Deployments werden vermieden.

```yaml
          script: |
            set -euo pipefail
```
→ Shell-Sicherheit: Bei jedem Fehler sofort stoppen (`-e`), undefinierte Variablen sind Fehler (`-u`).

```yaml
            cd "${{ secrets.DEPLOY_PATH }}"
```
→ In den Projektordner auf dem VPS wechseln (z. B. `/var/www/saubermatik-website`).

```yaml
            git pull origin main
```
→ Neuesten Code von GitHub holen.

```yaml
            npm ci
```
→ Abhängigkeiten **sauber** installieren (exakt wie in `package-lock.json` — wichtig für reproduzierbare Builds).

```yaml
            npm run build
```
→ Next.js Production-Build (~200 statische Seiten). Das braucht auf dem VPS etwas Zeit und RAM.

```yaml
            pm2 reload ecosystem.config.js --update-env
```
→ PM2 lädt die App **ohne lange Offline-Zeit** neu und übernimmt aktualisierte Umgebungsvariablen.

---

## Zeile für Zeile: `ops/nginx-template.conf` (Kurzfassung)

| Block | Bedeutung |
|-------|-----------|
| `upstream saubermatik_nextjs` | Definiert das „Ziel-Büro“ — Next.js auf Port 3000 |
| `listen 80` | Nginx hört auf HTTP (Port 80) |
| `server_name www.example.de` | Ihre Domain — **muss ersetzt werden** |
| `location /` | Alle URL-Pfade |
| `proxy_pass http://saubermatik_nextjs` | Weiterleitung an Next.js |
| `proxy_set_header Host $host` | Original-Domain an Next.js durchreichen |
| `X-Forwarded-For / Proto` | Wichtig für Logs und später HTTPS |

---

## Häufige Probleme

| Symptom | Wahrscheinliche Ursache | Lösung |
|---------|-------------------------|--------|
| Website offline nach SSH-Logout | PM2 nicht gestartet / nicht gespeichert | `pm2 save` + `pm2 startup` |
| 502 Bad Gateway | Next.js läuft nicht auf 3000 | `pm2 status`, `pm2 logs` |
| Build schlägt fehl (Out of Memory) | VPS zu klein | Swap aktivieren oder VPS-RAM erhöhen |
| Deploy schlägt fehl | SSH Secret falsch | GitHub Secrets prüfen |
| Formulare senden keine Mail | `RESEND_API_KEY` fehlt auf VPS | `.env.local` auf Server prüfen |

---

## Weiterführend

- Technische Architektur: `docs/architecture.md`
- Dateistruktur inkl. Ops-Dateien: `docs/project_structure.md`
- Lead-API & Umgebungsvariablen: `docs/lead_funnel_spec.md`
