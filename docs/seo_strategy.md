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

### 5. Hyper-Local Entity Injection — **Stuttgart-Hub** (`/standorte/stuttgart`)

Zusätzlich zur generischen Matrix **`/standorte/[city]`** existiert eine **editoriale Spezialseite** für den Ballungsraum Stuttgart (Zielintention u. a. *Fensterreinigung Stuttgart*, *Glasreinigung Stuttgart*, *Gebäudereinigung mit Logistik in die Region*):

- **Lokale Entitäten:** Stadtteile (z. B. Degerloch, Vaihingen, Bad Cannstatt), Gewerbe-/Industriekontexte (Feuerbach, Möhringen, Achsen), **B14/B27** als reale Einsatzkorridore.
- **Semantische Blöcke (~150 Wörter):** Frage-orientierte H2s (z. B. Verfügbarkeit Glas in Stuttgart-Mitte), direkte Nutzerantworten statt generischer Floskeln.
- **Interne Links:** Fenster/Glas-Leistung, Kontakt-Funnel, **`/expertise`** (Trust-Layer).

### 6. EEAT-Authority-Silo (`/expertise`)

Statische **Beweis-Seite** für Zertifizierungspfad, Arbeitssicherheit, Hygiene und **Saubermatik-Software** (Echtzeit-Monitoring, Eskalationen). Verknüpft QM, Stuttgart-Hub und Kontakt — erhöht domainweite **Trustworthiness** ohne Keyword-Stuffing.

## Technische SEO-Bausteine (kurz)

- **Title-Template** im Root-Layout (`%s | Saubermatik Gebäudereinigung`).
- **`alternates.canonical`** auf neuen Kernseiten gesetzt.
- **JSON-LD global** (`components/StructuredData.tsx` → **`lib/seo/global-jsonld.ts`**): `LocalBusiness` + `CleaningService`, **`areaServed`** = 16 Städte (`City`) **plus** Metropol-Cluster **Stuttgart, Reutlingen, Tübingen** als **`GeoCircle`** (Midpoint + Radius in Metern); **`OfferCatalog`** mit ausführlichen **`Service`**-Objekten (inkl. `description`, `category`, `areaServed`). Details: `docs/seo_architecture.md`.
- **FAQPage JSON-LD pro Leistung:** `components/LeistungFaqJsonLd.tsx` + Q/A-Katalog **`lib/seo/leistung-faq.ts`** auf **`/leistungen/[slug]`** (PAA-orientiert).
- **Interne Links:** Header, Footer, Startseite-Standort-Grid, Leistungs-CTAs → **`/kontakt#kontakt-anfrage`** (Kunde) bzw. **`/kontakt?type=karriere`** (Bewerber).

## Content-Prinzipien

1. **Nutzen vor Superlative** – messbare Aussagen (Protokolle, Intervalle, Ansprechpartner).
2. **SaaS-USP** klar benennen, aber **rechtlich sauber** (keine unrealistischen Garantien ohne Kontext).
3. **Stadtseiten** kurz, mit Wiederholung des Ortsnamens in Headline + Fließtext (kontrolliert).
4. **Entity-Density** gezielt: nur dort, wo **Nutzerfrage + Geo** zusammenpassen (Hub-Seiten wie Stuttgart), nicht flächendeckend duplizieren.
