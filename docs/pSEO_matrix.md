# Programmatic SEO Matrix: Lokale Entitäten

Stand: Implementierung in **`lib/seo/local-entities.ts`** + Einbindung in **`app/standorte/[city]/page.tsx`**.

## Ziel

- **Entity-Density** für ausgewählte Kernstädte erhöhen, ohne die 16er-Matrix mit identischem Fließtext zu fluten.
- **Deterministischer Spin** pro Stadt-Slug: unterschiedliche Satzstellung und Cluster-Reihenfolge bei gleicher Datenbasis → geringeres Duplicate-Content-Risiko.
- **Platzhalter-Cluster** explizit markiert (`Platzhalter`) – vor Produktions-Live mit Geo-/Branchendaten ersetzen.

## Abgedeckte Städte (`PROGRAMMATIC_ENTITY_CITIES`)

| `StandortCity` | Beispiel-Cluster (Auszug) |
|----------------|---------------------------|
| `balingen` | Neckartal-Gewerbeflächen, B27-Achse, Mittelstandspark |
| `tuttlingen` | Medizintechnik-Cluster Donautal, B311/B14, Industriegebiet Nord |
| `albstadt` | Neckartal-Logistikband, B463-Transitkorridor, Textilzone |
| `rottweil` | Neckar-Industrieachse, SB-Hub, Gewerbepark Neckarburg |
| `hechingen` | Hohenzollern-Korridor, B27-Süd-Gewerbe, MedTech-Randlage |

Alle übrigen Städte der **`STANDORT_CITIES`**-Liste bleiben bei den bestehenden zwei Basis-Absätzen aus `STANDORTE_BY_CITY` (keine automatische Injektion).

## Spin-Algorithmus

1. `spinVariant(city, mod)` — FNV-1a-ähnliche Hash-Funktion über den Slug (`StandortCity`), Ergebnis stabil über Builds.
2. **Primärabsatz:** eine von drei Textschablonen + dynamische Cluster-Reihenfolge (`clusterList`, binärer Flip).
3. **Sekundärabsatz:** andere Schablone, Lead-Cluster rotiert über `spinVariant(city, clusters.length)`.

## UI-Einbindung

- Zusatz-Section nur wenn `getLocalEntityAugmentation(city, label) !== null`.
- Semantik: `<section aria-labelledby="local-entities-{city}">` mit H2 **„Regionale Schwerpunkte & Wirtschaftsadern“**.

## Wartung

- Neue Kernstadt: Eintrag in `LOCAL_ENTITIES_BY_CITY` + Slug in `PROGRAMMATIC_ENTITY_CITIES`.
- Nach Feldforschung: Platzhalter-Strings durch verifizierte Gewerbegebiete / offizielle Bezeichnungen ersetzen; ggf. `spinVariant`-Moduli erhöhen für mehr Entropie.
