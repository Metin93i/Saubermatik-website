# Projektstruktur (App Router)

Stand: synchron mit dem Repository (`feat(core)`-Expansion). Pfade relativ zum Projektroot.

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
│   └── lead/
│       └── route.ts              POST Lead-API (Resend)
├── karriere/
│   └── page.tsx                  Recruiting-Hub
├── kontakt/
│   └── page.tsx                  Adresse, Karte, LeadFunnel
├── leistungen/
│   ├── page.tsx                  Hub „Leistungen“
│   ├── unterhaltsreinigung/
│   │   └── page.tsx              Sonder-Landing (SEO)
│   └── [slug]/
│       └── page.tsx              Dynamische Leistungs-Detailseiten (SSG)
├── qualitaetsmanagement/
│   └── page.tsx                  QM / Saubermatik-Garantie
├── standorte/
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
├── LeadFunnel.tsx                Multi-Step-Formular (`"use client"`)
├── MobileStickyCta.tsx           Mobile Schnellaktionen (Anruf / Angebot)
├── SaubermatikLogo.tsx           CSS-Wordmark SAUBERMATIK
├── SiteFooter.tsx                Footer inkl. Städte-Grid & Unternehmens-Links
├── SiteHeader.tsx                Shell (sticky) + Logo
├── SiteHeaderNav.tsx             Hauptnavigation + Mobile-Flyout (`"use client"`)
└── StructuredData.tsx            Globales JSON-LD (LocalBusiness)
```

## `lib/` — Konfiguration & Logik

```
lib/
├── config/
│   ├── services.ts               Leistungsportfolio (Slugs, Emojis, Funnel)
│   └── site.ts                   Firmenadresse, OSM-Embed (Single Source)
├── image-blur.ts                 blurDataURL für `next/image` (Remote)
├── lead/
│   ├── email.ts                  HTML-Mail Resend
│   └── submission.ts             Validierung / Typen Leads
├── phone.ts                      `buildTelHref` (NEXT_PUBLIC_BUSINESS_PHONE)
└── routes/
    ├── leistungen.ts             LEISTUNG_SLUGS, Inhalte
    └── standorte.ts              16 Städte, Labels, Fließtexte
```

## `docs/` — Spezifikation (DDD)

```
docs/
├── lead_funnel_spec.md           API & UI des Lead-Funnels
├── performance_audit.md          Speed-Maßnahmen (LCP, CLS, Fonts, Client-Bundle)
├── project_structure.md          Diese Datei (Baumstruktur)
├── seo_architecture.md           Hub-and-Spoke, Routing, JSON-LD
├── seo_strategy.md               Keywords, Silos, interne Verlinkung
└── site_architecture.md          Navigationslogik & Seitenhierarchie
```

## Konventionen

- **Routen-Inhalte** liegen bevorzugt als **Server Components** unter `app/`.
- **`"use client"`** nur dort, wo nötig: `LeadFunnel`, `SiteHeaderNav` (Mobile-Menü / Interaktion).
- **Standorte & Leistungen** werden aus `lib/routes/*` gespeist — eine Quelle für Links, SSG und SEO-Texte.
