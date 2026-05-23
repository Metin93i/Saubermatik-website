# Programmatic SEO Matrix: 16×10 Deep Content Engine

Stand: **`lib/seo/matrix-params.ts`**, **`lib/seo/matrix-content.ts`**, **`lib/seo/matrix-service-tech.ts`**, **`lib/seo/matrix-spin.ts`**, **`app/standorte/[city]/[service]/page.tsx`**, **`components/MatrixDeepPage.tsx`**.

## Ziel

- **160 statische Routen** (`STANDORT_CITIES` × `SERVICES`) unter `/standorte/[city]/[service]`.
- **800+ Wörter** Deep Content pro Kombination — kein Thin Content, keine Platzhalter.
- **Anti-Laziness-Engine:** TypeScript kombiniert vier Textblöcke deterministisch; jede Seite ist inhaltlich einzigartig.
- **B2B-Normen:** TRBS 2121, DIN EN 13549, HACCP, RKI, § 2 BetrKV, VOB/C — C-Level-taugliche Fachsprache.

## Matrix-Dimensionen

| Dimension | Quelle | Anzahl |
|-----------|--------|--------|
| Städte | `STANDORT_CITIES` in `lib/routes/standorte.ts` | 16 |
| Leistungen | `SERVICES` in `lib/config/services.ts` | 10 |
| **Kombinationen** | `generateMatrixStaticParams()` | **160** |

## Content-Engine (`buildMatrixDeepContent`)

Vier kombinierte Blöcke pro Route:

| Block | ID | Inhalt |
|-------|-----|--------|
| **A — Local B2B** | `local-b2b` | Wirtschaft & Gewerbe der Stadt (`LOCAL_ENTITIES_BY_CITY` für 5 Kernstädte; regionaler Fallback für 11 Nebenstädte + Meßstetten HQ) |
| **B — Service Tech** | `service-tech`, `compliance`, `operational` | Technische Fakten, Normen, Betriebslogik aus `getMatrixServiceTech()` |
| **C — Synergie** | `synergy` | Warum dieser Service für die lokale Industrie geschäftskritisch ist (pro Service 3 Varianten, rotiert) |
| **D — Digital QM** | `digital-qm` | Saubermatik-Plattform, Ausfallsicherheit, Key Account |

**Spin:** `matrixSpinVariant(city, service, mod)` — stabiler Hash über Slug-Paar, variiert Satzstellung ohne Duplicate Content.

**QA:** `countMatrixWords(content)` — grobe Wortzahl für Build-/Review-Checks.

## UI-Einbindung (`MatrixDeepPage`)

- Full-Width Container: `max-w-[100rem]`, `px-4 sm:px-8 lg:px-16`
- Breadcrumbs + `BreadcrumbJsonLd`
- 6 H2-Sections aus der Engine
- **`EngagementCalculator`** (optional `initialCategory` aus Service-Mapping)
- **`B2BOnboardingProcess`** (HowTo JSON-LD)
- **`LeadFunnel`** mit `initialServiceType`
- **`SeoCrossLinks`** (`type="service"`)
- **`FreshnessBadge`**

## Sitemap

`app/sitemap.ts` — alle 160 Matrix-Routen via `generateMatrixStaticParams()`, Priority `0.75`.

## Hero Quick-Search → Matrix-Routing

`components/HeroQuickSearch.tsx` + `lib/hero/quick-search.ts`:

| Auswahl | Ziel |
|---------|------|
| Stadt + Service | `/standorte/[city]/[service]` |
| Nur Stadt | `/standorte/[city]` |
| Nur Service | `/leistungen/[service]` |
| „Alle Standorte anzeigen“ | `/standorte` |

Dropdown-Städte: alle **16** `STANDORT_CITIES`.

## Standort-Spokes (bestehend)

Einzelne Stadt-Routen `/standorte/[city]` bleiben unverändert:

- **600+ Wörter** via `buildStandortDeepContent`
- **5 Kernstädte** mit Industry Mapping (`PROGRAMMATIC_ENTITY_CITIES`)
- **`LocalCityFaq`** + FAQPage JSON-LD

## Wartung

- Neue Stadt: `STANDORT_CITIES` + Label; optional Profil in `LOCAL_ENTITIES_BY_CITY`.
- Neue Leistung: `SERVICES` — Matrix, Sitemap und Service-Tech-Block automatisch erweitern.
- Fließtext-Tiefe: `lib/seo/matrix-service-tech.ts` (Service-Blöcke), `lib/seo/matrix-content.ts` (Synergie/Local).
