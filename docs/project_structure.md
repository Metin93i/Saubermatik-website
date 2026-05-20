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
│   │   └── page.tsx              Sonder-Landing (SEO, Deep Content)
│   ├── hausmeisterservice/
│   │   └── page.tsx              Deep Content (SOPs, B2B)
│   ├── gruenanlagenpflege/
│   │   └── page.tsx              Deep Content (Jahresprogramm)
│   └── [slug]/
│       └── page.tsx              Dynamische Leistungs-Detailseiten (SSG) + FAQ JSON-LD
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
│       └── page.tsx              16 lokale Landingpages (SSG)
├── ueber-uns/
│   └── page.tsx                  Marken-Story & Vertrauen
├── globals.css                   Design-Tokens / Tailwind v4 @theme
├── layout.tsx                    Root-Layout, Fonts, Header/Footer, JSON-LD
└── page.tsx                      Startseite (Hero, Reinigung 4.0, Trust, …)
```

## `components/` — UI

```
components/
├── B2BOnboardingProcess.tsx      4-Phasen-Onboarding + HowTo JSON-LD (Server)
├── KeyAccountManager.tsx         One Face to the Customer + Person/Role JSON-LD (Server)
├── BreadcrumbJsonLd.tsx          BreadcrumbList JSON-LD (tiefes Routing)
├── CareerForm.tsx                Bewerber-Formular (`"use client"`) → `/api/career`
├── KontaktFormFallback.tsx      Suspense-Fallback (serverkompatibel)
├── KontaktFormSwitch.tsx       `useSearchParams` Weiche Lead/Karriere (`"use client"`)
├── LeadFunnel.tsx              Multi-Step Kunden-Funnel (`"use client"`)
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
├── image-blur.ts                 blurDataURL für `next/image` (Remote)
├── lead/
│   ├── email.ts                  HTML-Mail Lead inkl. optionaler Objekthinweise
│   └── submission.ts           Validierung / Typen Leads (+ objectNotes)
├── phone.ts                      `buildTelHref` (NEXT_PUBLIC_BUSINESS_PHONE)
├── seo/
│   ├── b2b-onboarding.ts         HowTo-Schritte + `buildB2BOnboardingHowToJsonLd`
│   ├── key-account.ts            Key-Account-Copy + Person/OrganizationRole JSON-LD
│   ├── hausverwaltungen-schema.ts Service JSON-LD für Zielgruppen-Silo
│   ├── global-jsonld.ts          `@graph` LocalBusiness + CleaningService + OfferCatalog
│   ├── leistung-faq.ts           FAQ-Texte pro Leistungsspoke (FAQPage)
│   ├── leistung-sge-tldr.ts      SGE-TL;DR (Problem / Lösung / Zeitrahmen)
│   ├── local-entities.ts         Programmatic Local Entities + Spin
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
├── pSEO_matrix.md               Programmatic-SEO-Matrix (lokale Entitäten)
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
- **`"use client"`** nur dort, wo nötig: `LeadFunnel`, `CareerForm`, `KontaktFormSwitch`, `SiteHeaderNav`.
- **Standorte & Leistungen** werden aus `lib/routes/*` bzw. **`lib/config/services.ts`** gespeist — eine Quelle für Links, SSG und SEO-Texte.
