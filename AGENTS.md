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
8. Deploy-Logik lebt in `ops/deploy.sh` (versioniert) — Server-Dateien nie manuell ändern.

## Inhalts-Regeln

- Keine erfundenen Bewertungen, Sterne, Zahlen oder Testimonials.
- JSON-LD nur für sichtbar Vorhandenes und Wahres (keine Fake-`aggregateRating`).
- Firmenspezifische Angaben (Preise, interne Daten) als **`[INTERN]`**-Platzhalter lassen.

## Bild-Fallback

Existiert für eine Stelle **kein echtes Bild**, wird **kein Bildbereich** gerendert.

Verboten im sichtbaren Frontend: leere Farb-/Deko-Flächen, rotierte Panels, gestrichelte Rahmen, graue Boxen, Texte wie „Bild folgt“, „TODO“, „folgt in Kürze“.

Das Layout muss ohne Bild vollständig aussehen: Sektion einspaltig bzw. Text über die volle Inhaltsbreite. TODO-Vermerke gehören ausschließlich in Code-Kommentare oder `docs/`, nie ins UI.

## Design-System Leitstand

Tokens (CSS-Variablen + Tailwind `@theme`):

| Token | Wert | Rolle |
|-------|------|--------|
| `--nacht` | `#13181d` | Basis dunkel, Footer, dunkle Klammern |
| `--anthrazit` | `#1e242e` | Karten / Verlauf auf dunkel |
| `--navy` | `#0d2745` | SecureOps-Flächen |
| `--secureops` | `#0066b3` | SecureOps-Interaktion |
| `--glow` | `#67bfff` | Akzent hellblau, sparsam |
| `--orange` | `#f47920` | CTA/Signal, **nur für Aktionen** |
| `--text-dunkel` | `#cfd2d8` | Sekundärtext auf dunkel (Kontrast-Minimum) |
| `--hell` | `#f6f7f9` | Helle Sektionsfläche |

Regeln:

- **Orange nur für Aktionen** (Buttons, aktive Signale, Spezialität-Badge).
- **Navy = SecureOps-Welt** (Statuskarte, SecureOps-Sektionen, `/secureops`-Hero).
- **Raster** (`.bg-blueprint`) nur auf dunklen Flächen.
- Fonts: Space Grotesk (500/700) für alle Überschriften; Inter (400/500/600) als Body.
- Buttons: `.btn-primary` (Orange, radius 10px), `.btn-secondary` / `.btn-secondary-on-dark`, `.btn-secureops`.
- Bild-Fallback-Regel gilt weiter (kein Bildbereich ohne echtes Asset).

## CI

- `.github/workflows/ci.yml`: PR (alle Branches) + Push auf `main`
  → `npm ci` → `npm run lint` → `npm run build` (hart, kein `continue-on-error`)
- Scripts exakt wie in `package.json`: `lint` / `build` — nicht umbenennen
- Deploy-Workflow (`.github/workflows/deploy.yml`) ist getrennt; nicht mit CI vermischen
