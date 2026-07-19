# Agenten-Regeln · saubermatik-website

## Stack

- **Next.js 16.2.6** (App Router), **React 19**, **TypeScript 5**, **Tailwind CSS 4**, **npm**
- Deploy: Hostinger-VPS, PM2-App **`saubermatik-web`** auf Port **3000**
  (siehe `ecosystem.config.js`, `.github/workflows/deploy.yml`)
- Next.js 16 weicht von älterem Wissen ab — bei Unklarheit
  `node_modules/next/dist/docs/` lesen und Deprecations beachten

## Ground Truth

| Quelle | Rolle |
|--------|--------|
| `docs/AUDIT-WEBSEITE.md` | **IST**-Zustand. Bei Widerspruch zum Code: Audit nachführen. |
| `docs/CHANGELOG.md` | **1 Zeile pro Schritt** (Pflicht): `YYYY-MM-DD · thema · Kurzbeschreibung` |

## Arbeitsregeln

1. **Nur beauftragter Scope** — nichts „nebenbei“ erweitern.
2. **Branch + PR** — jede Änderung entsteht auf einem Arbeits-Branch; PR öffnen.
3. **NIEMALS self-merge.**
4. **NIEMALS direkt auf `main` committen** — auch nicht lokal; immer Arbeits-Branch.
5. **NIEMALS Scope erweitern** ohne ausdrücklichen Auftrag.
6. Unklares als **TODO** melden statt raten oder „mitzudenken“.
7. Abschluss-Output im **Teil-B-Format**:
   - `STATUS` / `GEBAUT` / `DATEIEN` / `ENTSCHEIDUNGEN`
   - `OFFEN-TODO-UNKLAR` / `FEHLER-WARNUNGEN` / `NÄCHSTER SCHRITT`

## Inhalts-Regeln

- Keine erfundenen Bewertungen, Sterne, Zahlen oder Testimonials.
- JSON-LD nur für sichtbar Vorhandenes und Wahres (keine Fake-`aggregateRating`).
- Firmenspezifische Angaben (Preise, interne Daten) als **`[INTERN]`**-Platzhalter lassen.

## CI

- `.github/workflows/ci.yml`: PR (alle Branches) + Push auf `main`
  → `npm ci` → `npm run lint` → `npm run build` (hart, kein `continue-on-error`)
- Scripts exakt wie in `package.json`: `lint` / `build` — nicht umbenennen
- Deploy-Workflow (`.github/workflows/deploy.yml`) ist getrennt; nicht mit CI vermischen
