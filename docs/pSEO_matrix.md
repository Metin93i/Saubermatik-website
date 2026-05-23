# Programmatic SEO Matrix: Lokale Entitäten

Stand: **`lib/seo/local-entities.ts`**, **`lib/seo/standort-deep-content.ts`**, **`app/standorte/[city]/page.tsx`**, **`components/LocalCityFaq.tsx`**.

## Ziel

- **600+ Wörter** Deep Local Content pro Stadt (16 `STANDORT_CITIES`) — kein Thin Content.
- **Industry Mapping** für 5 Kernstädte: echte Gewerbegebiete, Infrastruktur, Wirtschaftsfokus → Vermeidung von Doorway-Pages.
- **Deterministischer Spin** für Nebenstädte: unterschiedliche Satzstellung bei gleicher regionaler Logik.
- **FAQPage JSON-LD** pro Stadt (3 B2B-FAQs).

## Kernstädte (`PROGRAMMATIC_ENTITY_CITIES`)

| Stadt | Gewerbegebiete | Infrastruktur | Wirtschaftsfokus |
|-------|----------------|---------------|-------------------|
| `balingen` | Gehrn, Auf dem Kies | B27 | Mittelstand, Verwaltung & Handel |
| `tuttlingen` | Gänsäcker, Industriepark | B14, B311 | Medizintechnik (Medical Mountains) |
| `albstadt` | Ebingen, Tailfingen | B463 | Maschinenbau, Textil, Produktionshallen |
| `rottweil` | Berner Feld, IN⊙VATOR | A81, B27 | Gewerbeparks, historische Gebäude |
| `hechingen` | Lotzenäcker, Nasswasen | B27 | Medizintechnik, High-Tech |

## Nebenstädte (11 + Meßstetten HQ)

- **`buildStandortDeepContent`** in `standort-deep-content.ts` liefert regionalen Fallback: Schwarzwald-Baar-Heuberg, Zollernalbkreis, Verkehrssicherungspflicht, schnelle Notfall-Reaktion.
- Meßstetten: HQ-Sonderlogik (Firmensitz, kürzeste Wege).

## Spin-Algorithmus

`spinVariant(city, mod)` — FNV-1a-ähnlicher Hash über Slug, stabil über Builds. Variiert Einleitungen und Infrastruktur-Formulierungen.

## UI-Einbindung

- Hero: „Facility Management … Ihr Partner an der [Infrastruktur]“
- 5–6 H2-Sections aus `deep.sections`
- **`LocalCityFaq`** mit sichtbaren FAQs + JSON-LD
- **`SeoCrossLinks`** (`type="service"`)

## Wartung

- Neue Kernstadt: Profil in `LOCAL_ENTITIES_BY_CITY` + `PROGRAMMATIC_ENTITY_CITIES`.
- FAQ-Anpassung: `lib/seo/standort-faq.ts`.
- Fließtext-Schablonen: `lib/seo/standort-deep-content.ts`.
