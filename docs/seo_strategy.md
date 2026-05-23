# SEO-Strategie: Keywords, Silos & USPs

Stand: abgestimmt auf die implementierten Routen und Inhalte (`app/` + `lib/routes/`).

## Markt- & Regionsfokus

- **Primärregion:** Zollernalbkreis (Meßstetten) mit Ausstrahlung nach **Tübingen**, **Reutlingen**, **Rottweil**, **Schwarzwald-Baar-Heuberg**.
- **Positionierung:** B2B-Gebäudereinigung mit **digitaler Objektsteuerung** („Reinigung 4.0“), nicht Preisdumping.

## Keyword-Silos

### 1. Leistungen (`/leistungen`, `/leistungen/[slug]`)

Intent: transaktional / vergleichend.

Beispiel-Cluster: *Unterhaltsreinigung Zollernalb*, *Glasreinigung Gewerbe*, *Treppenhausreinigung*, *Winterdienst Objekt*, *Grundreinigung Übergabe*, *Fassadenreinigung*, *Hausmeisterservice*, *Grünanlagenpflege*, **Entrümpelung Haushaltsauflösung**, **Spezialanfrage / Sonstiges** (Slug `sonstiges`).

**Hub & Spoke (intern):** Leistungsdetailseiten rendern **`SeoCrossLinks`** (`type="location"`) mit priorisierten Standort-Deep-Links (u. a. Stuttgart, Balingen, Tuttlingen) plus Link auf den **Standort-Hub** `/standorte`.

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

**Standort-Hub:** **`/standorte`** listet alle City-Spokes plus **Stuttgart-Spezial** — Sitemap-Eintrag inklusive.

**Hub & Spoke (intern):** Standortseiten und **Stuttgart-Hub** rendern **`SeoCrossLinks`** (`type="service"`) mit Top-Leistungs-Deep-Links (Unterhalt, Glas, Entrümpelung) plus Leistungsübersicht.

**Programmatic Local Entities (Kernstädte):** Für **Balingen, Tuttlingen, Albstadt, Rottweil, Hechingen** injiziert `lib/seo/local-entities.ts` zusätzliche Absätze mit **Industrie-/Verkehrs-Clustern** (Platzhalter, später verifiziert) plus **deterministischem Spin** zur Duplicate-Vermeidung — siehe `docs/pSEO_matrix.md`.

### 5. Hyper-Local Entity Injection — **Stuttgart-Hub** (`/standorte/stuttgart`)

Zusätzlich zur generischen Matrix **`/standorte/[city]`** existiert eine **editoriale Spezialseite** für den Ballungsraum Stuttgart (Zielintention u. a. *Fensterreinigung Stuttgart*, *Glasreinigung Stuttgart*, *Gebäudereinigung mit Logistik in die Region*):

- **Lokale Entitäten:** Stadtteile (z. B. Degerloch, Vaihingen, Bad Cannstatt), Gewerbe-/Industriekontexte (Feuerbach, Möhringen, Achsen), **B14/B27** als reale Einsatzkorridore.
- **Semantische Blöcke (~150 Wörter):** Frage-orientierte H2s (z. B. Verfügbarkeit Glas in Stuttgart-Mitte), direkte Nutzerantworten statt generischer Floskeln.
- **Interne Links:** Fenster/Glas-Leistung, Kontakt-Funnel, **`/expertise`** (Trust-Layer).

### 6. EEAT-Authority-Silo (`/expertise`)

Statische **Beweis-Seite** für Zertifizierungspfad, Arbeitssicherheit, Hygiene und **Saubermatik-Software** (Echtzeit-Monitoring, Eskalationen). Verknüpft QM, Stuttgart-Hub und Kontakt — erhöht domainweite **Trustworthiness** ohne Keyword-Stuffing.

### 7. SGE-Targeting (AI Overviews / generative SERPs)

- **TL;DR-Block** auf **`/leistungen/[slug]`**: `components/LeistungSgeTldr.tsx` + Daten **`lib/seo/leistung-sge-tldr.ts`** — semantisch `<section aria-label="Zusammenfassung">` mit Bullets **Problem → Saubermatik-Lösung → Zeitrahmen** (maschinen- und menschenlesbar).
- **Kombination** mit bestehendem **FAQPage** JSON-LD (`LeistungFaqJsonLd`) erhöht die Dichte **extrahierbarer Fakten** für PAA/SGE-Kandidaten — ohne Fließtext-Spam.

### 8. Navboost / Engagement (Dwell-Time)

- **`components/EngagementCalculator.tsx`**: 3-Schritt-Rechner (Objekttyp → m² bzw. **WE** → Richtpreis) auf **`/`**, **`/leistungen/unterhaltsreinigung`**, **`/zielgruppen/hausverwaltungen`** und dedizierten Leistungsseiten — Scroll in den **Lead-Funnel** (`#kontakt-anfrage`) inkl. **sessionStorage-Prefill** für Objekthinweise.
- **B2B-Kategorie „Hausverwaltung / Wohnanlage (MFH)“:** Slider **4–100 WE**, gestaffelter Monats-Richtwert pro WE; CTA verlinkt auf **`/zielgruppen/hausverwaltungen`**.

### 8b. Deep Content Silo — Hausverwaltungen (`/zielgruppen/hausverwaltungen`)

Intent: **B2B-Entscheider** (Geschäftsführung Verwaltung, Einkauf, WEG-Beirat).

| Block | Keywords / Pain-Points |
|-------|------------------------|
| Hero | All-in-One Liegenschaftspflege, digitaler Echtzeit-Nachweis |
| Deep Dive 1 | **Verkehrssicherungspflicht**, Winterdienst, Glatteis, Gehwegreinigung, **Haftung**, GPS-Fotoprotokolle |
| Deep Dive 2 | **§ 2 BetrKV**, umlagefähige Betriebskosten, Leistungsprotokolle, Nebenkostenabrechnung |
| Deep Dive 3 | Mieterzufriedenheit, feste Intervalle, proaktives Mängelmanagement |
| Trust | **`KeyAccountManager`**, **`B2BOnboardingProcess`**, **`LeadFunnel`** |
| Schema | **`Service`** JSON-LD „Property Management Maintenance Services“ (`lib/seo/hausverwaltungen-schema.ts`) |

**Sitemap:** `priority: 0.95`, `changeFrequency: weekly` in **`app/sitemap.ts`**.

**Verwandte Deep-Leistungen:** **`/leistungen/hausmeisterservice`**, **`/leistungen/gruenanlagenpflege`** (je 500+ Wörter, SOPs / Jahresprogramm).

### 8c. Deep Content Silo — Glas- & Fensterreinigung (`/leistungen/fenster-glasreinigung`)

Intent: **B2B-Gewerbe/Industrie**, transaktional + Expertise (Ausschreibung, Facility).

| Block | Inhalt / TF-IDF-Entitäten |
|-------|---------------------------|
| Hero | Streifenfreie Sicht, Werterhalt; **`GeoImage`** mit `contentLocation` Zollernalbkreis |
| Deep Dive 1 | **Entmineralisiertes Wasser**, **Osmose-Verfahren**, Schmutzlösevermögen, **Carbon-Teleskopstangen**, **Hubsteiger-Verzicht**, Umweltschutz |
| Deep Dive 2 | Einwascher & Abzieher, **Rahmen- und Falzreinigung**, **Glas-Korrosion**, **Fassaden-Ergonomie**, Showrooms |
| Deep Dive 3 | **TRBS 2121**, BG BAU, Arbeitssicherheit in der Höhe |
| Snippet | **`SnippetBaitTable`** (Variante `glas`): Ladengeschäfte, Büro/Kanzlei, Industriehallen, PV-Module |
| Conversion | **`EngagementCalculator`** (`initialCategory="glas"`), **`B2BOnboardingProcess`**, **`LeadFunnel`** |

**Alias-Redirect:** `/leistungen/glasreinigung` → `/leistungen/fenster-glasreinigung` (301, `next.config.ts`).

**SGE-Entitäten (organisch im Fließtext):** *entmineralisiertes Wasser, osmose-verfahren, carbon-teleskopstangen, fassaden-ergonomie, trbs 2121, glas-korrosion, rahmen- und falzreinigung, hubsteiger-verzicht, streifenfreie glanzgarantie.*

### 8d. Deep Content Silo — Unterhaltsreinigung (`/leistungen/unterhaltsreinigung`)

Intent: **B2B-Gewerbe/Büro/Praxis**, transaktional + Compliance (Facility, Einkauf, Geschäftsführung).

| Block | Inhalt / TF-IDF-Entitäten |
|-------|---------------------------|
| Hero | Zertifizierte Unterhaltsreinigung, messbare Qualität, **100 % Ausfallsicherheit** |
| Deep Dive 1 | **4-Farb-System**, **Kreuzkontamination**, Zonentrennung (Rot/Gelb/Blau/Grün) |
| Deep Dive 2 | **DIN EN 13549**, **digitales Leistungsverzeichnis (LV)**, **Echtzeit-QM**, **SLA**, **Ausfallsicherheit** |
| Deep Dive 3 | **HACCP-Richtlinien**, Teeküchen/Pausenräume, **Flächenleistung** |
| Snippet | **`SnippetBaitTable`** (Variante `unterhalt`): LV täglich/wöchentlich/monatlich/quartalsweise |
| Conversion | **`EngagementCalculator`** (`initialCategory="buero"`), **`B2BOnboardingProcess`**, **`LeadFunnel`** |

**SGE-Entitäten:** *4-farb-system, kreuzkontamination, din en 13549, digitales leistungsverzeichnis, service level agreement, haccp-richtlinien, flächenleistung, ausfallsicherheit, echtzeit-qm.*

**Interne Verlinkung:** `/wissen/farbcode-system`, `/qualitaetsmanagement`, Standort-Spokes.

### 9. AEO — Answer Engine Optimization

- **`/llms.txt`** via **`app/llms.txt/route.ts`** + Generator **`lib/seo/llms-content.ts`**: maschinenlesbare USPs, Leistungen und Standorte für LLM-Crawler (ChatGPT, Perplexity).

### 10. Topical Map — Wiki 2.0 (`/wissen`)

- Hub **`/wissen`** + Spokes **`/wissen/[term]`** aus **`lib/config/lexikon.ts`** — **8 Fachartikel** (HACCP, pH-Werte, DIN 13063, **CAFM**, **DIN 31051**, **SLA**, **Farbcode-System**, **Unterhalt vs. Grundreinigung**), jeweils **300–400+ Wörter** B2B-Fließtext.
- **Topical Authority:** Konkurrenz-Wikis algorithmisch überholen durch Tiefe + interne Verlinkung (Footer „Wissen & Lexikon“, CTA-Boxen auf Term-Seiten).
- **Sitemap:** alle `LEXIKON_TERMS` automatisch in **`app/sitemap.ts`** (kein manueller Pflegeaufwand).

### 10b. HowTo Rich Snippets — B2B-Onboarding

- **`components/B2BOnboardingProcess.tsx`** auf **`/`** und **`/qualitaetsmanagement`** — 4 Phasen (Bedarfsanalyse → Audit → SLA → Kick-Off).
- **JSON-LD `HowTo`** aus **`lib/seo/b2b-onboarding.ts`** (`buildB2BOnboardingHowToJsonLd`) mit `HowToStep`-URLs (`#onboarding-*`) für Google Rich Results.

### 11. Position-0 Bait & TF-IDF

- **`components/SnippetBaitTable.tsx`**: semantische HTML-Tabellen („Reinigungsintervalle nach Gebäudeart“) auf Leistungsseiten.
- **`lib/seo/leistung-entity-facts.ts`**: ISO 9001, DIN, umweltfreundliche Tenside für Unterhalt/Glas.

## Technische SEO-Bausteine (kurz)

- **Title-Template** im Root-Layout (`%s | Saubermatik Gebäudereinigung`).
- **`alternates.canonical`** auf neuen Kernseiten gesetzt.
- **JSON-LD global** (`components/StructuredData.tsx` → **`lib/seo/global-jsonld.ts`**): `LocalBusiness` + `CleaningService`, **`areaServed`** = 16 Städte (`City`) **plus** Metropol-Cluster **Stuttgart, Reutlingen, Tübingen** als **`GeoCircle`** (Midpoint + Radius in Metern); **`OfferCatalog`** mit ausführlichen **`Service`**-Objekten (inkl. `description`, `category`, `areaServed`). Details: `docs/seo_architecture.md`.
- **FAQPage JSON-LD pro Leistung:** `components/LeistungFaqJsonLd.tsx` + Q/A-Katalog **`lib/seo/leistung-faq.ts`** auf **`/leistungen/[slug]`** (PAA-orientiert).
- **`BreadcrumbList` JSON-LD** auf **`/leistungen/[slug]`** und **`/standorte/[city]`** (dort inkl. Hub-Krümel **`/standorte`**): `components/BreadcrumbJsonLd.tsx`.
- **`LocalBusiness` / `CleaningService`:** global **`aggregateRating`** (`AggregateRating` mit `ratingValue`, `reviewCount`, `bestRating`/`worstRating`, siehe **`lib/seo/global-jsonld.ts`**) — nur verwenden, wenn die Zahlen **sachlich belegbar** sind (Recht/EEAT).
- **Zero-Latency Navigation (kontrolliert):** `components/PrefetchLink.tsx` — Hover-`router.prefetch` für Kern-Routen in **`SiteHeaderNav`** / **`SiteFooter`** (`prefetch={false}` auf `Link`, kein aggressives Dropdown-Prefetch).
- **Dynamic Freshness:** **`components/FreshnessBadge.tsx`** + **`lib/utils/date.ts`** auf Startseite/Standorten; JSON-LD **`dateModified`** (1. des Monats) in **`global-jsonld.ts`**.
- **Hyper-Local Schema:** pro Stadt ein **`LocalBusiness`/`CleaningService`** mit **`GeoCircle`** in **`lib/seo/standort-geo.ts`** (im `@graph`).
- **`GeoImage`:** **`components/GeoImage.tsx`** — `ImageObject` + `contentLocation` für Local Image Search / Lens-Vorbereitung.
- **Interne Links:** Header, Footer, Startseite-Standort-Grid, Leistungs-CTAs, **`SeoCrossLinks`** (Leistung ↔ Standort) → **`/kontakt#kontakt-anfrage`** (Kunde) bzw. **`/kontakt?type=karriere`** (Bewerber).
- **Key Account Trust:** **`components/KeyAccountManager.tsx`** auf **`/ueber-uns`** und **`/kontakt`** — **`OrganizationRole`** + **`Person`** JSON-LD via **`lib/seo/key-account.ts`** („One Face to the Customer“).

## Content-Prinzipien

1. **Nutzen vor Superlative** – messbare Aussagen (Protokolle, Intervalle, Ansprechpartner).
2. **SaaS-USP** klar benennen, aber **rechtlich sauber** (keine unrealistischen Garantien ohne Kontext).
3. **Stadtseiten** kurz, mit Wiederholung des Ortsnamens in Headline + Fließtext (kontrolliert).
4. **Entity-Density** gezielt: nur dort, wo **Nutzerfrage + Geo** zusammenpassen (Hub-Seiten wie Stuttgart), nicht flächendeckend duplizieren.
5. **Programmatic matrix:** siehe `docs/pSEO_matrix.md`; strategischer Deep-Dive: `docs/portfolio_seo_whitepaper.md`.
