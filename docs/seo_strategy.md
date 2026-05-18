# SEO-Strategie: Keywords, Silos & USPs

Stand: abgestimmt auf die implementierten Routen und Inhalte (`app/` + `lib/routes/`).

## Markt- & Regionsfokus

- **Primärregion:** Zollernalbkreis (Meßstetten) mit Ausstrahlung nach **Tübingen**, **Reutlingen**, **Rottweil**, **Schwarzwald-Baar-Heuberg**.
- **Positionierung:** B2B-Gebäudereinigung mit **digitaler Objektsteuerung** („Reinigung 4.0“), nicht Preisdumping.

## Keyword-Silos

### 1. Leistungen (`/leistungen`, `/leistungen/[slug]`)

Intent: transaktional / vergleichend.

Beispiel-Cluster: *Unterhaltsreinigung Zollernalb*, *Glasreinigung Gewerbe*, *Treppenhausreinigung*, *Winterdienst Objekt*, *Grundreinigung Übergabe*, *Fassadenreinigung*, *Hausmeisterservice*, *Grünanlagenpflege*, **Entrümpelung Haushaltsauflösung**, **Spezialanfrage / Sonstiges** (Slug `sonstiges`).

### 2. Qualitätsmanagement (`/qualitaetsmanagement`)

Intent: Vertrauen / Compliance / Ausschreibung.

Kernbegriffe: **Saubermatik-Garantie**, **digitale Protokolle**, **Echtzeit-Checks**, **DIN-orientierte Reinigung**, **SaaS-Überwachung**, **Ausfallsicherheit Plattform**, **Objektdokumentation**, **Facility**.

### 3. Corporate & Recruiting

| Route | Schwerpunkt-Keywords |
|-------|----------------------|
| `/ueber-uns` | Regional verwurzelt, Meßstetten, Zuverlässigkeit, Ansprechpartner, Innovation |
| `/karriere` | Reinigungskraft Jobs Zollernalb, faire Bezahlung, Tablets im Objekt, moderne Arbeitsmittel |
| `/kontakt` | Gebäudereinigung anfragen, Adresse Meßstetten, Rückruf; **`?type=karriere`** für Bewerbungen |

### 4. Local SEO (`/standorte/[city]` — 16 Städte)

Explizite Orts-Landingpages für:

Meßstetten, Albstadt, Balingen, Hechingen, Sigmaringen, Mössingen, Tübingen, Schömberg, Tuttlingen, Rottweil, Villingen-Schwenningen, Spaichingen, Burladingen, Rottenburg, Reutlingen, Überlingen.

Jeweils: *Gebäudereinigung in [Stadt]*, Kombination mit *Büro*, *Praxis*, *Liegenschaft*, *Zollernalb* / *Region*.

## Technische SEO-Bausteine (kurz)

- **Title-Template** im Root-Layout (`%s | Saubermatik Gebäudereinigung`).
- **`alternates.canonical`** auf neuen Kernseiten gesetzt.
- **JSON-LD** (`StructuredData.tsx`): `LocalBusiness` + `CleaningService`, **`areaServed`** = alle 16 Städte aus `lib/routes/standorte.ts` (siehe `docs/seo_architecture.md`).
- **Interne Links:** Header, Footer, Startseite-Standort-Grid, Leistungs-CTAs → **`/kontakt#kontakt-anfrage`** (Kunde) bzw. **`/kontakt?type=karriere`** (Bewerber).

## Content-Prinzipien

1. **Nutzen vor Superlative** – messbare Aussagen (Protokolle, Intervalle, Ansprechpartner).
2. **SaaS-USP** klar benennen, aber **rechtlich sauber** (keine unrealistischen Garantien ohne Kontext).
3. **Stadtseiten** kurz, mit Wiederholung des Ortsnamens in Headline + Fließtext (kontrolliert).
