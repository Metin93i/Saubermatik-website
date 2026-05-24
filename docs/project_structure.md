# Projektstruktur (App Router)

Stand: **Master-Übersicht** ist `docs/architecture.md` (Datenflüsse, Routing). Diese Datei beschreibt die **Dateistruktur** und verweist bei Logikfragen dorthin.

## Wurzel

```
├── AGENTS.md
├── CLAUDE.md
├── app/
├── components/
├── docs/
├── lib/
├── public/                 (statische Assets, falls vorhanden)
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── eslint.config.mjs
```

## `app/` — Routen & Layout

```
app/
├── api/
│   ├── career/
│   │   └── route.ts              POST Bewerbungen → Resend (HR-Mail)
│   └── lead/
│       └── route.ts              POST Kunden-Leads → Resend
├── expertise/
│   └── page.tsx                  EEAT-Hub (Zertifizierung, Sicherheit, Monitoring)
├── karriere/
│   └── page.tsx                  Recruiting-Hub
├── kontakt/
│   └── page.tsx                  Adresse, Karte, Weiche Lead vs. Karriere (Suspense)
├── leistungen/
│   ├── page.tsx                  Hub „Leistungen“
│   ├── unterhaltsreinigung/
│   │   └── page.tsx              Deep Content (4-Farb-System, DIN EN 13549, HACCP)
│   ├── fenster-glasreinigung/
│   │   └── page.tsx              Deep Content Glas/Osmose/TRBS 2121 + GeoImage
│   ├── hausmeisterservice/
│   │   └── page.tsx              Deep Content (SOPs, B2B)
│   ├── gruenanlagenpflege/
│   │   └── page.tsx              Deep Content (Jahresprogramm)
│   ├── treppenhausreinigung/
│   │   └── page.tsx              Deep Content (Verkehrssicherung, BetrKV)
│   ├── winterdienst/
│   │   └── page.tsx              Deep Content (Räum-/Streupflicht)
│   ├── grundreinigung/
│   │   └── page.tsx              Deep Content (VOB/C, DIN 18365)
│   ├── fassadenreinigung/
│   │   └── page.tsx              Deep Content (Werterhalt, TRBS)
│   ├── entruempelung/
│   │   └── page.tsx              Deep Content (Haushaltsauflösung)
│   ├── sonstiges/
│   │   └── page.tsx              Deep Content (Spezialprojekte)
│   └── [slug]/
│       └── page.tsx              Fallback (notFound) – alle Services dediziert
├── zielgruppen/
│   └── hausverwaltungen/
│       └── page.tsx              B2B-Silo Hausverwaltungen + Service JSON-LD
├── qualitaetsmanagement/
│   └── page.tsx                  QM / Saubermatik-Garantie
├── standorte/
│   ├── page.tsx                  Standort-Hub (Liste aller Städte + Stuttgart)
│   ├── stuttgart/
│   │   └── page.tsx              Hyper-Local Stuttgart-Hub (SSG)
│   └── [city]/
│       ├── page.tsx              16 lokale Landingpages (SSG, 600+ Wörter)
│       └── [service]/
│           └── page.tsx          160 Matrix-Landingpages (16×10, 800+ Wörter, SSG)
├── ueber-uns/
│   └── page.tsx                  Marken-Story & Vertrauen
├── globals.css                   Design-Tokens / Tailwind v4 @theme
├── layout.tsx                    Root-Layout, Fonts, Header/Footer, JSON-LD
└── page.tsx                      Startseite (breiter 2XL-Container, HeroQuickSearch, …)
```

## `components/` — UI

```
components/
├── B2BOnboardingProcess.tsx      4-Phasen-Onboarding + HowTo JSON-LD (Server)
├── KamProfileCard.tsx            Kompaktes KAM-Profil Metin Altinsoy + Person JSON-LD (Hero, Kontakt)
├── KamPortrait.tsx               Generischer Industrial-Avatar (SVG, bg-zinc-800)
├── EsgComplianceStatement.tsx    ESG/CSRD-Compliance-Block (Hero)
├── AppMockup.tsx                 Geneigtes App-/Dashboard-Mockup (Hero)
├── KeyAccountManager.tsx         One Face to the Customer + Person/Role JSON-LD (Über-uns, Langform)
├── BreadcrumbJsonLd.tsx          BreadcrumbList JSON-LD (tiefes Routing)
├── CareerForm.tsx                Bewerber-Formular (`"use client"`) → `/api/career`
├── EngagementCalculator.tsx      3-Schritt-Kostenrechner (`"use client"`)
├── HeroQuickSearch.tsx           B2B Quick-Search Startseite (`"use client"`) → App-Router (`/standorte/[city]/[service]`, …)
├── MatrixDeepPage.tsx            Matrix Deep-Content-Template (800+ Wörter, Calculator, Funnel)
├── KontaktFormFallback.tsx      Suspense-Fallback (serverkompatibel)
├── KontaktFormSwitch.tsx       `useSearchParams` Weiche Lead/Karriere (`"use client"`)
├── LeadFunnel.tsx              Multi-Step Kunden-Funnel (`"use client"`)
├── LocalCityFaq.tsx              Standort-FAQ + FAQPage JSON-LD (16 Städte)
├── LeistungDeepPage.tsx          Deep-Content-Template (800+ Wörter, alle Module)
├── LeistungFaqJsonLd.tsx       FAQPage JSON-LD pro Leistungsspoke (Server)
├── LeistungSgeTldr.tsx         SGE-TL;DR-Zusammenfassung pro Leistungsspoke (Server)
├── MobileStickyCta.tsx         Mobile Schnellaktionen (Anruf / Angebot)
├── PrefetchLink.tsx            Hover-Prefetch um `next/link` (`"use client"`)
├── SeoCrossLinks.tsx           Hub-&-Spoke-Querverweise Leistung ↔ Standort (Server)
├── SaubermatikLogo.tsx           Logo `/public/logo.png` (next/image)
├── SiteFooter.tsx                Footer inkl. Städte-Grid & Unternehmens-Links
├── SiteHeader.tsx                Shell (sticky) + Logo
├── SiteHeaderNav.tsx             Hauptnavigation + Mobile-Flyout (`"use client"`)
└── StructuredData.tsx            Globales JSON-LD (LocalBusiness, OfferCatalog; Logik in `lib/seo/global-jsonld.ts`)
```

## `lib/` — Konfiguration & Logik

```
lib/
├── career/
│   ├── email.ts                  HTML-Mail Bewerbung (HR-Layout)
│   └── submission.ts             parseCareerSubmission
├── config/
│   ├── lexikon.ts                Wiki 2.0 — 8 Lexikon-Einträge (LEXIKON_TERMS)
│   ├── services.ts               Leistungsportfolio (10 Slugs inkl. Entrümpelung & Sonstiges)
│   └── site.ts                   Firmenadresse, OSM-Embed (Single Source)
├── hero/
│   └── quick-search.ts           16 Städte + `resolveQuickSearchRoute` (Matrix/Standort/Leistung)
├── image-blur.ts                 blurDataURL für `next/image` (Remote)
├── lead/
│   ├── email.ts                  HTML-Mail Lead inkl. optionaler Objekthinweise
│   └── submission.ts           Validierung / Typen Leads (+ objectNotes)
├── phone.ts                      `buildTelHref` (NEXT_PUBLIC_BUSINESS_PHONE)
├── seo/
│   ├── b2b-onboarding.ts         HowTo-Schritte + `buildB2BOnboardingHowToJsonLd`
│   ├── kam-profile.ts            Metin Altinsoy KAM-Copy + Person JSON-LD
│   ├── key-account.ts            Key-Account-Langform + OrganizationRole JSON-LD
│   ├── hausverwaltungen-schema.ts Service JSON-LD für Zielgruppen-Silo
│   ├── global-jsonld.ts          `@graph` LocalBusiness + CleaningService + OfferCatalog
│   ├── leistung-faq.ts           FAQ-Texte pro Leistungsspoke (FAQPage)
│   ├── leistung-deep-content.ts  Deep-Dive-Copy (6 Leistungen, Config)
│   ├── leistung-entity-facts.ts  TF-IDF-Entity-Absätze pro Leistung
│   ├── leistung-sge-tldr.ts      SGE-TL;DR (Problem / Lösung / Zeitrahmen)
│   ├── local-entities.ts         Industry Profiles (5 Kernstädte)
│   ├── matrix-params.ts          160 Matrix-Routen, `generateMatrixStaticParams`
│   ├── matrix-content.ts         Anti-Laziness Deep-Content-Engine (800+ Wörter)
│   ├── matrix-service-tech.ts    Service-Tech-Blöcke (Normen, Compliance, Betrieb)
│   ├── matrix-city-extended.ts   Wirtschaftsprofile aller 16 Städte
│   ├── matrix-spin.ts            Deterministischer Spin city×service
│   ├── standort-deep-content.ts  600+ Wörter Deep Local Content Generator
│   ├── standort-faq.ts           3 B2B-FAQs pro Standortstadt
│   └── site-origin.ts            `getSiteOrigin()` für absolute JSON-LD-URLs
└── routes/
    ├── leistungen.ts             LEISTUNG_SLUGS, Inhalte (aus SERVICES abgeleitet)
    └── standorte.ts              16 Städte, Labels, Fließtexte
```

## `docs/` — Spezifikation (DDD)

```
docs/
├── architecture.md             Technisches Gehirn: Stack, Datenflüsse, Routing, Formular-Weiche
├── competitor_analysis.md      Wettbewerbs-/Gap-Analyse (SEO & Funnel)
├── pSEO_matrix.md               16×10 Matrix-Engine (160 Routen, 800+ Wörter)
├── portfolio_seo_whitepaper.md Portfolio-Case-Study (CTO-Tonalität)
├── lead_funnel_spec.md           API & UI Lead-Funnel + Kontakt-Dual-Funnel
├── performance_audit.md          Speed-Maßnahmen (LCP, CLS, Fonts, Client-Bundle)
├── project_structure.md          Diese Datei (Baumstruktur)
├── seo_architecture.md           Hub-and-Spoke, Routing, JSON-LD
├── seo_strategy.md               Keywords, Silos, interne Verlinkung
└── site_architecture.md          Navigationslogik & Seitenhierarchie
```

## Konventionen

- **Routen-Inhalte** liegen bevorzugt als **Server Components** unter `app/`.
- **`"use client"`** nur dort, wo nötig: `HeroQuickSearch`, `LeadFunnel`, `CareerForm`, `KontaktFormSwitch`, `SiteHeaderNav`, `EngagementCalculator`.
- **Standorte & Leistungen** werden aus `lib/routes/*` bzw. **`lib/config/services.ts`** gespeist — eine Quelle für Links, SSG und SEO-Texte.
