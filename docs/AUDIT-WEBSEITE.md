# IST-Audit: Saubermatik Marketing-Webseite (saubermatik-website)

**Stand:** Repo-Analyse 2026-07-12 (READ-ONLY, kein Live-Build)  
**Repo:** `saubermatik-website` (bestätigt via `package.json` → `"name": "saubermatik-website"`)  
**Zweck:** Ground Truth für SEO-/GEO-/Lead-Gen-Planung ohne Code-Zugriff

---

## A · STECKBRIEF & STACK

### Framework, Sprache, Styling, Paketmanager

| Aspekt | IST-Zustand | Beleg |
|--------|-------------|-------|
| Framework | **Next.js 16.2.6** (App Router) | `package.json`, `package-lock.json` |
| UI | **React 19.2.4** | `package.json` |
| Sprache | **TypeScript 5** | `package.json`, `tsconfig.json` |
| Styling | **Tailwind CSS 4** (`@tailwindcss/postcss`) | `package.json`, `postcss.config.mjs`, `app/globals.css` |
| Fonts | **Geist Sans + Geist Mono** via `next/font/google` | `app/layout.tsx` |
| Paketmanager | **npm** (Lockfile vorhanden) | `package-lock.json` |
| E-Mail (Server) | **Resend** ^6.12.3 | `package.json`, `app/api/lead/route.ts` |

### Rendering PRO ROUTE (SSG / SSR / ISR / Client-only)

**Global:** Kein `output: 'export'` in `next.config.ts` → Standard-Next.js-Modus (Hybrid). Kein `export const revalidate`, kein `export const dynamic` in App-Routen gefunden → **kein explizites ISR**.

| Routentyp | Rendering | Beleg |
|-----------|-----------|-------|
| Statische Seiten (`app/page.tsx`, `app/kontakt/page.tsx`, dedizierte Leistungsseiten, Hub-Seiten) | **SSG** (Server Components, kein `'use client'` in `page.tsx`) | Alle `app/**/page.tsx` ohne `'use client'` |
| Dynamische Routen mit `generateStaticParams` | **SSG zur Build-Zeit** (alle Kombinationen vorgerendert) | `app/standorte/[city]/page.tsx`, `app/standorte/[city]/[service]/page.tsx`, `app/wissen/[term]/page.tsx` |
| Matrix-Routen | **160 statische Seiten** (16 Städte × 10 Leistungen) | `lib/seo/matrix-params.ts` (`MATRIX_ROUTE_COUNT`), `generateMatrixStaticParams()` |
| `app/leistungen/[slug]/page.tsx` | **SSG-Params leer** (alle Slugs haben dedizierte Seiten); Route ruft immer `notFound()` | `lib/seo/leistung-deep-content.ts` → `ALL_DEDICATED_LEISTUNG_SLUGS`, `app/leistungen/[slug]/page.tsx` |
| `app/robots.ts`, `app/sitemap.ts` | **Generiert** (Metadata Route) | `app/robots.ts`, `app/sitemap.ts` |
| `app/llms.txt/route.ts` | **Route Handler** (GET, dynamisch aus Config) | `app/llms.txt/route.ts` |
| `app/api/lead/route.ts`, `app/api/career/route.ts` | **Server/API** (`runtime = "nodejs"`) | jeweilige `route.ts` |
| Client-only-Inseln | **Teilhydration** in sonst SSG-Seiten | `'use client'` in: `components/LeadFunnel.tsx`, `components/CareerForm.tsx`, `components/KontaktFormSwitch.tsx`, `components/EngagementCalculator.tsx`, `components/HeroQuickSearch.tsx`, `components/SiteHeaderNav.tsx`, `components/MobileStickyCta.tsx` (indirekt), `components/ClientLoginButton.tsx`, `components/JobListings.tsx`, `components/PrefetchLink.tsx` |
| 404 | **Next.js-Standard** (keine `not-found.tsx` im Repo) | Glob-Suche: 0 Treffer für `app/**/not-found*` |

**SEO-relevant:** Sichtbarer Fließtext, H1–H3, JSON-LD in Server Components landen im **initialen HTML**. Formularschritte (`LeadFunnel`, `CareerForm`) und Mobile-Nav rendern Client-seitig; Hero-Text, Leistungs-Deep-Content, Standort-Texte sind serverseitig.

### Build & Start, Deploy

| Aspekt | IST | Beleg |
|--------|-----|-------|
| Dev | `npm run dev` → `next dev` | `package.json` |
| Build | `npm run build` → `next build` | `package.json` |
| Prod-Start | `npm run start` → `next start` (Port 3000) | `package.json`, `ecosystem.config.js` |
| PM2 | App-Name **`saubermatik-web`**, Cluster `instances: "max"`, `npm start`, 512M RAM-Limit | `ecosystem.config.js` |
| CI/CD | Push auf **`main`** → SSH auf Hostinger VPS → `git pull`, `npm ci`, `npm run build`, `pm2 reload ecosystem.config.js` | `.github/workflows/deploy.yml` |
| Reverse Proxy | Nginx-Template → Upstream `127.0.0.1:3000` | `ops/nginx-template.conf` |
| Dockerfile | **nicht vorhanden** | Repo-Glob |

**Live-Domain, DNS, TLS, tatsächliche Env-Werte auf VPS:** **unklar** (nur Defaults/Fallbacks im Code).

### Im Code referenzierte Domains / URLs

| URL / Domain | Verwendung | Beleg |
|--------------|------------|-------|
| `https://www.saubermatik-reinigung.de` | Default `metadataBase`, JSON-LD, Sitemap, robots, llms.txt | `app/layout.tsx`, `lib/seo/site-origin.ts` |
| `http://localhost:3000` | Dev-Fallback `NEXT_PUBLIC_SITE_URL` | `.env.example` |
| `anfragen@mail.saubermatik-reinigung.de` | Resend-Absender (Live) | `lib/lead/email.ts` → `RESEND_FROM_LIVE` |
| `info@saubermatik-reinigung.de` | Karriere mailto-Fallback | `.env.example` → `NEXT_PUBLIC_CAREER_EMAIL` |
| `http://72.62.88.65:3001` | SaaS-Kundenplattform-Fallback | `lib/config/platform.ts` → `PLATFORM_URL_FALLBACK` |
| `http://localhost:8000` | Optionales separates Backend | `.env.example` → `NEXT_PUBLIC_API_URL` |
| `https://www.openstreetmap.org/...` | Karten-Embed + externer Link | `lib/config/site.ts`, `app/kontakt/page.tsx` |
| `https://schema.org` | JSON-LD `@context` | diverse `lib/seo/*.ts`, Komponenten |
| `www.example.de` | Platzhalter in Nginx-Template | `ops/nginx-template.conf` |
| `{hostname}:3001` | Browser-Dynamik Kunden-Login | `lib/config/platform.ts` |

---

## B · SEITEN-INVENTAR

**Gesamt indexierbare Routen laut `app/sitemap.ts`:** ca. **207 URLs** (8 Kern + 4 Extra + 10 Leistungen + 16 Standorte + 160 Matrix + 9 Wissen).

**Title-Template:** `%s | Saubermatik Gebäudereinigung` (`app/layout.tsx`). Seiten ohne eigenes `title` erben Default.

**404:** Keine Custom-Seite; unbekannte Pfade → Next.js-Standard-404 (**unklar:** exakter Wortlaut live).

**Impressum / Datenschutz:** **Vorhanden** — `/impressum`, `/datenschutz` (Server Components); Footer-Links in `components/SiteFooter.tsx`; Sitemap-Einträge.

### B.1 Kern- & Hub-Seiten

| Pfad | Zweck | `<title>` (wörtlich / abgeleitet) | Meta-Description (wörtlich oder „fehlt") | H1 (wörtlich) | Wortzahl (grob) | Haupt-CTAs | Keywords (auffällig) |
|------|-------|-----------------------------------|------------------------------------------|---------------|-----------------|------------|----------------------|
| `/` | Startseite, Lead-Funnel, Trust | **Default:** „Saubermatik Gebäudereinigung \| Meßstetten & Zollernalb" (kein page-title) | „Saubermatik aus Meßstetten: Facility & Reinigung für die Zollernalb und den Schwarzwald-Baar-Heuberg-Kreis – mit festem Ansprechpartner vor Ort und digitaler Objektsteuerung." | „Reinigung, die hält, was sie verspricht – mit Kopf, nicht nur mit dem Wischmob." | ~1.200+ | Leistungen ansehen, Direkt anfragen, Engagement-Rechner, Lead-Funnel | Zollernalb, Schwarzwald-Baar-Heuberg, digitale Objektsteuerung, SLA |
| `/ueber-uns` | Unternehmensstory | „Über uns \| Saubermatik Gebäudereinigung" | „Saubermatik aus Meßstetten: regionale Wurzeln, digitale Objektsteuerung und B2B-Reinigung mit festen Ansprechpartnern für Zollernalb, Tübingen und den Schwarzwald-Baar-Heuberg." | „Regional verwurzelt. Digital vorbereitet." | ~450 | Kennenlernen vereinbaren, Qualitätsmanagement, Anrufen | Verlässlichkeit, Plattform, Meßstetten |
| `/qualitaetsmanagement` | QM / Garantie | „Qualitätsmanagement \| …" | „Saubermatik-Garantie: digitale Objektüberwachung, Echtzeit-Checks, DIN-orientierte Standards und nachvollziehbare Protokolle für B2B-Reinigung in der Zollernalb." | „Qualität, die Sie messen können – nicht nur riechen." | ~550 | Links zu Kontakt/Leistungen (Seitenende) | SaaS-Überwachung, DIN, Echtzeit-Checks |
| `/expertise` | EEAT-Hub | „Expertise, Zertifizierung & technische Standards \| …" | „EEAT-Hub von Saubermatik: Arbeitssicherheit, Qualitätsstandards, Echtzeit-Monitoring und digitale Objektprotokolle – für messbare Gebäudereinigung in der Zollernalb und darüber hinaus." | „Beweis-Zentrum: Standards, Sicherheit & digitale Objektsteuerung" | ~500 | Beratung/Kontakt-Links | E-E-A-T, Zertifizierung, TRBS |
| `/karriere` | Recruiting | „Karriere \| …" | „Karriere bei Saubermatik Meßstetten: faire Bezahlung, moderne digitale Arbeitsmittel und Tablets im Objekt, Teamkultur in der Zollernalb – jetzt initiativ bewerben." | „Werden Sie Teil eines Teams, das digital denkt und handwerklich liefert." | ~600 | Bewerbung → `/kontakt?type=karriere`, Job-Listings (API) | Tablets, Zollernalb, Reinigungskraft |
| `/kontakt` | NAP, Karte, Lead/Karriere-Formular | „Kontakt \| …" | „Saubermatik Meßstetten: Adresse, Anfahrt, Kundenanfrage (Lead) und Bewerbungen – digital und persönlich für die Zollernalb und Region Tübingen." | Kunde: „Sprechen wir über Ihr Objekt." / Karriere (`?type=karriere`): „Bewerbung & erste Fragen zum Job." | ~350 (+ Formular-UI) | Tel-Link, LeadFunnel, CareerForm, Karte | Meßstetten, 72469, Schelmenwasenstraße 11 |
| `/kontakt?type=karriere` | Bewerbungsformular | wie `/kontakt` | wie `/kontakt` | „Bewerbung & erste Fragen zum Job." | wie oben | CareerForm → `/api/career` | Karriere |
| `/impressum` | Pflichtangaben § 5 DDG | „Impressum \| Saubermatik Gebäudereinigung" | „Impressum der Saubermatik Reinigungsservice, Inhaber Metin Altinsoy, mit Angaben gemäß § 5 DDG." | „Impressum" | ~200 | — | DDG, USt-IdNr., HWK Reutlingen |
| `/datenschutz` | Datenschutzerklärung | „Datenschutzerklärung \| Saubermatik Gebäudereinigung" | „Datenschutzerklärung der Saubermatik Reinigungsservice: Informationen zur Verarbeitung personenbezogener Daten auf dieser Website." | „Datenschutzerklärung" | ~1.200 | — | DSGVO, Resend, OSM |
| `/zielgruppen/hausverwaltungen` | HV/WEG-Landing (nicht in Header-Nav) | „Hausverwaltungen & WEG \| …" | „All-in-One für Hausverwaltungen: Treppenhaus, Hausmeister, Grünpflege, Winterdienst mit GPS-Nachweisen. Verkehrssicherungspflicht, § 2 BetrKV-Umlagefähigkeit, Mieterzufriedenheit." | „Die All-in-One Lösung für Hausverwaltungen: Treppenhaus, Hausmeister & Grünpflege mit digitalem Echtzeit-Nachweis." | ~900+ | Liegenschaft anfragen, Lead-Funnel | BetrKV, GPS, Verkehrssicherungspflicht |
| `/leistungen` | Leistungs-Hub | „Leistungen \| …" | „Facility & Reinigung in der Zollernalb: Unterhalts- & Büroreinigung, Glas, Treppenhaus, Hausmeister, Grünanlagen, Winterdienst, Grund-/Bau- und Fassadenreinigung." | „Reinigung, die zu Ihrem Objekt passt" | ~350 | 10 Leistungs-Karten | Facility, Intervalle |
| `/standorte` | Standort-Hub | „Standorte & Region \| …" | „Gebäudereinigung in der Zollernalb und angrenzenden Städten — Übersicht aller lokalen Saubermatik-Standortseiten inklusive Stuttgart-Metropolregion." | „Standorte & Einsatzgebiete" | ~200 | Stadt-Links, Objekt anfragen | Zollernalb, Stuttgart |
| `/standorte/stuttgart` | Spezial-Hub Metropolregion | „Fensterreinigung & Gebäudereinigung Stuttgart \| …" | „Professionelle Fenster- und Glasreinigung sowie Gebäudereinigung für Stuttgart – mit Logistik über B14/B27, Stadtteile wie Degerloch, Vaihingen und Bad Cannstatt, digitaler Objektsteuerung aus der Zollernalb." | „Fensterreinigung Stuttgart & Gebäudereinigung mit Zollernalb-Logistik" | ~800 | Leistungslinks, Kontakt | B14, B27, Degerloch, Vaihingen |
| `/wissen` | Lexikon-Hub | „Wissen & Lexikon \| …" | „Fachwissen zu Reinigung, Hygiene und Normen – HACCP, CAFM, DIN 31051, SLA, Farbcode-System und mehr von Saubermatik." | „Wissen für Facility, Verwaltung & Geschäftsführung" | ~250 | 8 Lexikon-Artikel | HACCP, CAFM, DIN |
| **404** | Fehlerseite | **unklar** (Next-Default) | **fehlt** (keine `not-found.tsx`) | **unklar** | — | — | — |

### B.2 Leistungsseiten (`/leistungen/{slug}`)

Alle 10 Slugs aus `lib/config/services.ts` haben **dedizierte** `page.tsx`-Routen.

| Pfad | `<title>` (meta) | Meta-Description (wörtlich) | H1 (wörtlich) | Wortzahl (grob) | Haupt-CTAs |
|------|------------------|----------------------------|---------------|-----------------|------------|
| `/leistungen/unterhaltsreinigung` | „Unterhaltsreinigung & Büroreinigung Gewerbe \| …" | „Zertifizierte Unterhaltsreinigung für Gewerbe und Büros: 4-Farb-System, DIN EN 13549, digitales LV, HACCP, Echtzeit-QM und 100% Ausfallsicherheit in der Zollernalb." | „Zertifizierte Unterhaltsreinigung für Gewerbe und Büros. Maximale Hygiene, messbare Qualität und 100 % Ausfallsicherheit." | ~2.000+ | Analyse anfordern, Rechner, Lead-Funnel |
| `/leistungen/fenster-glasreinigung` | „Glas- & Fensterreinigung Gewerbe \| …" | „Streifenfreie Glas- und Fassadenreinigung für Gewerbe und Industrie: Reinwasser-Osmose, Carbon-Teleskopstangen, TRBS 2121, klassisches Handwerk – Zollernalb & Region." | „Streifenfreie Sicht, maximale Werterhaltung. Professionelle Glas- und Fassadenreinigung für Gewerbe und Industrie." | ~2.000+ | wie oben |
| `/leistungen/treppenhausreinigung` | „Treppenhausreinigung WEG & Gewerbe \| …" | „Treppenhausreinigung mit Verkehrssicherungspflicht, Trittsicherheit, § 2 BetrKV-Umlagefähigkeit und digitalem Nachweis – Saubermatik Zollernalb." | „Repräsentative Treppenhäuser, sichere Wege. Professionelle Treppenhausreinigung für WEG, Hausverwaltungen und Gewerbe." | ~1.800+ | Lead-Funnel, Hausverwaltungen-Link |
| `/leistungen/hausmeisterservice` | „Hausmeisterservice & Objektbetreuung \| …" | „Hausmeisterservice für Hausverwaltungen und Gewerbe: SOPs für Kleinreparaturen, Kontrollgänge, Leuchtmittel, Mülllogistik, Zählerstände – digital dokumentiert in der Zollernalb." | „Hausmeisterservice & Objektbetreuung – SOPs statt Improvisation." | ~1.500+ | Lead-Funnel |
| `/leistungen/gruenanlagenpflege` | „Grünanlagenpflege \| …" | „Grünanlagenpflege für Wohnanlagen und Gewerbe: Frühjahr, Sommer, Herbst – Rasen, Hecken, Laub, Unkraut. Repräsentative Außenanlagen in der Zollernalb." | „Grünanlagenpflege – repräsentative Außenanlagen für Wohnkomplexe & Gewerbe." | ~1.200+ | Lead-Funnel |
| `/leistungen/winterdienst` | „Winterdienst & Räum- und Streupflicht \| …" | „Professioneller Winterdienst: Räum- und Streupflicht, Verkehrssicherungspflicht, Wetterführung, GPS-Nachweise – haftungssicher für WEG und Gewerbe." | „Haftungssicher durch den Winter. Professioneller Winterdienst mit Wetterführung und Echtzeit-Nachweis." | ~1.800+ | Lead-Funnel |
| `/leistungen/grundreinigung` | „Grundreinigung & Bauendreinigung \| …" | „Grundreinigung und Bauendreinigung: VOB/C, Bauabnahme, DIN 18365, Polymerbeschichtung, Zementschleierentfernung – besenreine Übergabe in der Zollernalb." | „Werterhalt durch Tiefe. Grundreinigung, Bauendreinigung und Sonderreinigung für Gewerbe und Neubau." | ~1.800+ | Lead-Funnel |
| `/leistungen/fassadenreinigung` | „Fassadenreinigung Gewerbe & Industrie \| …" | „Fassadenreinigung materialschonend: Naturstein, Metall, Glas, Algen/Moos, TRBS 2121, Werterhalt – Saubermatik Zollernalb." | „Substanz schützen, Image stärken. Professionelle Fassadenreinigung für Gewerbe, Industrie und Wohnanlagen." | ~1.800+ | Lead-Funnel |
| `/leistungen/entruempelung` | „Entrümpelung & Haushaltsauflösung \| …" | „Entrümpelung und Haushaltsauflösung: besenreine Übergabe, fachgerechte Entsorgung, Endreinigung – für Erben, Verwalter und Gewerbe in der Zollernalb." | „Besenreine Übergabe, stressfreier Abschluss. Entrümpelung & Haushaltsauflösung mit Endreinigung." | ~1.500+ | Lead-Funnel |
| `/leistungen/sonstiges` | „Spezialreinigung & Sonderprojekte \| …" | „Individuelle Reinigungsprojekte: Teppichreinigung, Praxis-Sonderdesinfektion, Events, Ausschreibungen – Saubermatik strukturiert Ihr Briefing in ein SLA-fähiges LV." | „Kein Standardfall? Kein Problem. Spezialreinigung & Sonderprojekte mit klarem Leistungsverzeichnis." | ~1.500+ | Lead-Funnel |

**Redirect:** `/leistungen/glasreinigung` → `/leistungen/fenster-glasreinigung` (301). Beleg: `next.config.ts`.

**Tote Route:** `/leistungen/[slug]` existiert, liefert für alle gültigen Slugs `notFound()` — nur Fallback-Mechanismus.

### B.3 Standort-Stadtseiten (`/standorte/{city}`)

16 Städte aus `lib/routes/standorte.ts` → `STANDORT_CITIES`.

| Pfad | `<title>`-Muster | Meta-Description | H1-Muster | Wortzahl (grob) | CTAs |
|------|------------------|------------------|-----------|-----------------|------|
| `/standorte/messstetten` … `/standorte/ueberlingen` | „{Stadt}: Facility & Gebäudereinigung \| …" | Erste 160 Zeichen von `heroSubtitle` (`buildStandortDeepContent`) | „Facility Management & Gebäudereinigung in {Stadt}. Ihr Partner …" (variantenabhängig, `lib/seo/standort-deep-content.ts`) | ~900–1.400 pro Stadt (QA-Hilfsfunktion `countStandortWords`) | Objekt anfragen, Leistungen, FAQ, Cross-Links |

Städte: Meßstetten, Albstadt, Balingen, Hechingen, Sigmaringen, Mössingen, Tübingen, Schömberg, Tuttlingen, Rottweil, Villingen-Schwenningen, Spaichingen, Burladingen, Rottenburg, Reutlingen, Überlingen.

### B.4 Matrix-Seiten (`/standorte/{city}/{service}`)

**160 Seiten** (16 × 10). Beleg: `lib/seo/matrix-params.ts`.

| Pfad-Muster | `<title>`-Muster | Meta-Description | H1-Muster | Wortzahl (grob) | CTAs |
|-------------|------------------|------------------|-----------|-----------------|------|
| `/standorte/{city}/{service}` | `{LeistungLabel} {Stadt} \| Saubermatik` | Aus `matrix-service-tech.ts` / Spin-Varianten | `{LeistungLabel} in {Stadt} — regional, digital, verbindlich.` | ~700–1.100 | Analyse anfordern, Leistungsdetails, Lead-Funnel, B2B-Onboarding |

Beispiel Pfad: `/standorte/balingen/unterhaltsreinigung` — Beleg: `lib/seo/matrix-content.ts` Zeilen 313–315.

### B.5 Wissen / Lexikon (`/wissen/{term}`)

8 Terme aus `lib/config/lexikon.ts` → `LEXIKON_TERMS`.

| Pfad | `<title>` | Meta-Description (= summary) | H1 | Wortzahl (grob) |
|------|-----------|------------------------------|-----|-----------------|
| `/wissen/haccp-reinigung` | „HACCP-Reinigung \| …" | „Hygienepläne nach HACCP für Lebensmittelbetriebe…" | „HACCP-Reinigung" | ~450 |
| `/wissen/ph-werte-bodenreinigung` | „pH-Werte in der Bodenreinigung \| …" | „Warum der pH-Wert über Materialschutz…" | „pH-Werte in der Bodenreinigung" | ~400 |
| `/wissen/din-13063-krankenhausreinigung` | „DIN 13063 (Krankenhausreinigung) \| …" | „Orientierung an DIN 13063…" | „DIN 13063 (Krankenhausreinigung)" | ~400 |
| `/wissen/facility-management-software-cafm` | „Facility Management Software (CAFM) \| …" | „Computer Aided Facility Management…" | „Facility Management Software (CAFM)" | ~550 |
| `/wissen/din-31051-instandhaltung-reinigung` | „DIN 31051 (Grundlagen der Instandhaltung) \| …" | „DIN 31051 als Rahmen…" | „DIN 31051 (Grundlagen der Instandhaltung)" | ~500 |
| `/wissen/sla-service-level-agreement` | „SLA (Service Level Agreement) \| …" | „Service Level Agreements in der Gebäudereinigung…" | „SLA (Service Level Agreement)" | ~500 |
| `/wissen/farbcode-system-hygiene` | „Farbcode-System (Hygienestandards) \| …" | „Farbcodierte Reinigungssysteme…" | „Farbcode-System (Hygienestandards)" | ~500 |
| `/wissen/unterhaltsreinigung-vs-grundreinigung` | „Unterhaltsreinigung vs. Grundreinigung \| …" | „Definition, Intervalle und wirtschaftliche Logik…" | „Unterhaltsreinigung vs. Grundreinigung" | ~500 |

---

## C · SEO-TECHNIK

### robots.txt + sitemap.xml

| Asset | Vorhanden | Art | Inhalt (Kurz) |
|-------|-----------|-----|---------------|
| `robots.txt` | **Ja** (generiert) | `app/robots.ts` | AI-Crawler (`GPTBot`, `CCBot`, `anthropic-ai`, `Claude-Web`) → `Disallow: /`. `Googlebot`/`Bingbot`/`*` → `Allow: /`. Sitemap-URL: `{origin}/sitemap.xml` |
| `sitemap.xml` | **Ja** (generiert) | `app/sitemap.ts` | ~205 URLs, Prioritäten 0.7–1.0, `lastModified: now` bei Generierung |

**Kein** statisches `public/robots.txt` oder `public/sitemap.xml`.

### Canonicals, Meta-Robots, Open Graph, Twitter

| Thema | IST | Beleg |
|-------|-----|-------|
| Canonical | Auf den meisten Unterseiten via `alternates.canonical` | Grep in `app/**/page.tsx` |
| **Fehlt Canonical** | `/` (Startseite), `/leistungen` (Hub) | `app/page.tsx`, `app/leistungen/page.tsx` |
| Global robots | `index: true`, `follow: true` | `app/layout.tsx` |
| noindex | **Keine Vorkommen** gefunden | Grep |
| Open Graph | Global: `type: website`, `locale: de_DE`, `siteName` | `app/layout.tsx` |
| og:image / page-spezifisches OG | **fehlt** im Repo | `app/layout.tsx` |
| Twitter Cards | **fehlt** | Grep: 0 Treffer |

### Strukturierte Daten (JSON-LD)

| Schema-Typ | Felder (zusammengefasst) | Einbindungsort |
|------------|--------------------------|----------------|
| **LocalBusiness + CleaningService** (Organisation) | name, url, address (Schelmenwasenstraße 11, Meßstetten 72469), geo, areaServed (16 Städte + 3 GeoCircle-Hubs), openingHours 08:00–22:00 täglich, hasOfferCatalog (10 Services) — *aggregateRating entfernt am 2026-07-12* | `lib/seo/global-jsonld.ts` → `components/StructuredData.tsx` in `app/layout.tsx` (global) |
| **LocalBusiness + CleaningService** (pro Stadt) | name, url, geo, GeoCircle areaServed, parentOrganization | `lib/seo/standort-geo.ts` → global `@graph` |
| **LocalBusiness** (Stuttgart) | wie oben, Radius 28 km | `buildStuttgartCleaningServiceNode` |
| **OfferCatalog + Service** | 10 Leistungen mit URL, CleaningService category | global JSON-LD |
| **BreadcrumbList** | itemListElement mit position, name, item URL | `components/BreadcrumbJsonLd.tsx` auf Leistungs-, Standort-, Wissen-Seiten |
| **FAQPage** | Question/Answer-Paare pro Leistung | `components/LeistungFaqJsonLd.tsx` + `lib/seo/leistung-faq.ts` |
| **FAQPage** | Standort-FAQ | `components/LocalCityFaq.tsx` + `lib/seo/standort-faq.ts` |
| **HowTo** (B2B-Onboarding, 4 Schritte) | name, totalTime P14D, HowToStep mit URL-Anker | `components/B2BOnboardingProcess.tsx` auf `/`, Leistungsseiten, Matrix, HV-Seite |
| **Person + OrganizationRole** (KAM Metin Altinsoy) | name, jobTitle, worksFor, knowsAbout | `lib/seo/kam-profile.ts` → `components/KamProfileCard.tsx` |
| **OrganizationRole + Organization** (Key Account) | roleName, employee Person | `lib/seo/key-account.ts` → `components/KeyAccountManager.tsx` |
| **Service** (Hausverwaltungen) | serviceType, audience BusinessAudience, offers | `lib/seo/hausverwaltungen-schema.ts` → `app/zielgruppen/hausverwaltungen/page.tsx` |
| **ImageObject + Place** | contentUrl, contentLocation, author | `components/GeoImage.tsx` (Startseite „Warum wir"-Bild) |

**Auffälligkeit (historisch):** `aggregateRating` (4.9, 124 Reviews) war im globalen Schema — **entfernt am 2026-07-12** (`lib/seo/global-jsonld.ts`).

### Redirects / Rewrites / 404

| Mechanismus | IST | Beleg |
|-------------|-----|-------|
| Redirect 301 | `/leistungen/glasreinigung` → `/leistungen/fenster-glasreinigung` | `next.config.ts` |
| Rewrites | **keine** | `next.config.ts` |
| 404 | `notFound()` bei ungültigen dynamic params; keine custom UI | diverse `page.tsx`, kein `not-found.tsx` |
| Security Headers | X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, X-DNS-Prefetch-Control | `next.config.ts` |

### Interne Verlinkung

**Header-Nav** (`components/SiteHeaderNav.tsx`):
- Logo → `/`
- Dropdown Leistungen → 10 `/leistungen/{slug}` + Hub
- Qualitätsmanagement, Expertise, Über uns, Karriere, Kontakt
- Kunden-Login (extern)

**Nicht in Header-Nav:** `/standorte`, `/wissen`, `/zielgruppen/hausverwaltungen`, Startseite explizit (nur Logo).

**Footer** (`components/SiteFooter.tsx`):
- Alle 10 Leistungen
- Unternehmen: QM, Expertise, Über uns, Karriere, Kontakt
- 16 Standort-Städte + Stuttgart-Spezial
- Leistungsübersicht, Kontakt, Wissen

**Cross-Links:** `components/SeoCrossLinks.tsx` auf Standort-/Leistungsseiten (Top-3-Leistungen bzw. Stuttgart/Balingen/Tuttlingen).

**Potenziell schwach verlinkt:** 160 Matrix-Seiten (nur über Stadtseiten/SEO, nicht Nav); `/zielgruppen/hausverwaltungen` (nur Sitemap + interne Links von Treppenhaus-Seite).

### Bilder

| Aspekt | IST | Beleg |
|--------|-----|-------|
| Formate | PNG/JPG via **next/image**, Remote Unsplash | `next.config.ts` `remotePatterns`, diverse Komponenten |
| Optimierung | next/image mit `sizes`, `placeholder="blur"`, blurDataURL | `app/page.tsx`, `lib/image-blur.ts` |
| Alt-Texte | **Zentral gepflegt** für Leistungs-Heros (`lib/config/leistung-images.ts`, 10/10 mit alt); Startseite 4/4; Über uns, Karriere, Stuttgart, App-Mockup, Logo | Grep `alt=` |
| Stichprobe | ~15 explizite `alt`-Attribute in TSX; Leistungsseiten über `LeistungHeroImage` | `components/LeistungHeroImage.tsx` |
| Schätzung Alt-Abdeckung | **~90 %+** der sichtbaren `<Image>`/`<GeoImage>` mit alt; keine leeren alt gefunden | Repo-Grep |

### Fonts, Third-Party, Performance-Risiken

| Risiko | Detail | Beleg |
|--------|--------|-------|
| Fonts | Geist via Google Fonts, `display: swap` | `app/layout.tsx` |
| Third-Party Bilder | Unsplash CDN (Blocking durch next/image-Optimierung **unklar** live) | Remote URLs |
| OSM iframe | Lazy-loaded Karte auf Kontakt | `app/kontakt/page.tsx` |
| Analytics/Pixel | **Keine** gtag/GTM/Matomo/Hotjar im Repo | Grep |
| Client-Bundles | LeadFunnel, HeaderNav, EngagementCalculator, JobListings | `'use client'`-Dateien |
| Große Assets | Keine lokalen Hero-Bilder; alles remote Unsplash | `public/` nur 3 Default-SVGs |
| Favicon | **Kein** `favicon.ico`, `icon.png` oder `app/icon.*` | Glob |
| Hardcoded inline CSS | Brand-color lock in `<head>` | `app/layout.tsx` |

### Sprachen / hreflang

| Aspekt | IST |
|--------|-----|
| HTML lang | `de` | `app/layout.tsx` |
| hreflang | **fehlt** | Grep: 0 Treffer |
| Mehrsprachigkeit | **nein** (nur Deutsch) |

---

## D · CONTENT-INVENTAR

### Leistungen / Themen & Tiefe

| Cluster | Abdeckung | Tiefe | Beleg |
|---------|-----------|-------|-------|
| Unterhalts-/Büroreinigung | Eigene Long-Form-Seite + Matrix | Sehr hoch (4-Farb-System, DIN, HACCP, Tabellen) | `app/leistungen/unterhaltsreinigung/page.tsx` |
| Glas/Fenster | Long-Form + Stuttgart-Fokus | Hoch (TRBS, Osmose) | `app/leistungen/fenster-glasreinigung/page.tsx` |
| Treppenhaus / HV | Long-Form + HV-Landing | Hoch (BetrKV, Verkehrssicherung) | `leistung-deep-content.ts`, `hausverwaltungen/page.tsx` |
| Hausmeister | Long-Form + SOP-Module | Hoch | `app/leistungen/hausmeisterservice/page.tsx` |
| Grün / Winter / Grund / Fassade / Entrümpelung / Sonstiges | Je Long-Form (DeepPage oder custom) | Hoch (3 Deep-Dives je Leistung) | `lib/seo/leistung-deep-content.ts` |
| Lokale SEO | 16 Städte + Stuttgart + 160 Matrix | Mittel–hoch (programmatisch angereichert) | `lib/seo/standort-deep-content.ts`, `local-entities.ts` |
| Fach-Lexikon | 8 B2B-Artikel | Mittel (~400–550 Wörter) | `lib/config/lexikon.ts` |

### USPs & Kernbotschaften (wörtlich + Fundort)

| Botschaft | Fundort |
|-----------|---------|
| „Reinigung, die hält, was sie verspricht – mit Kopf, nicht nur mit dem Wischmob." | `app/page.tsx` H1 |
| „Fester Ansprechpartner vor Ort – kein anonymes Weiterreichen" | `app/page.tsx` trustItems |
| „Digitale Objektsteuerung: Ausfälle werden abgefangen, bevor Sie es merken" | `app/page.tsx` trustItems |
| „Regional verwurzelt: Zollernalb & Schwarzwald-Baar-Heuberg, kurze Wege" | `app/page.tsx` trustItems |
| „Software-Vorteil statt Zufall: Protokolle, die jede Tour dokumentieren." | `app/page.tsx` H2 |
| „Kein Callcenter. Ihr direkter Draht in die Geschäftsführung." | `lib/seo/kam-profile.ts` KAM_PROFILE.usp |
| „Saubermatik ist das führende, technologiegestützte Reinigungsunternehmen im Zollernalbkreis" | `lib/seo/llms-content.ts` |
| „100% Zuverlässigkeit durch feste Ansprechpartner und Ersatzlogistik" | `lib/seo/llms-content.ts` |

### Blog / Ratgeber / FAQ / Glossar

| Format | Vorhanden | Beleg |
|--------|-----------|-------|
| Blog | **Nein** | Keine `/blog`-Route |
| Ratgeber | **Nein** (nur Lexikon) | — |
| FAQ (sichtbar) | **Ja** — Standort-FAQ (`LocalCityFaq`), Leistungs-FAQ in JSON-LD | `components/LocalCityFaq.tsx` |
| Glossar/Lexikon | **Ja** — `/wissen`, 8 Terme | `lib/config/lexikon.ts` |
| Lexikon-Potenzial | Struktur vorhanden, erweiterbar über `LEXIKON_TERMS` | `lib/config/lexikon.ts` |

### Lokaler Bezug

| Ebene | Orte/Regionen | Beleg |
|-------|---------------|-------|
| Firmensitz | Schelmenwasenstraße 11, 72469 Meßstetten, Baden-Württemberg | `lib/config/site.ts` |
| Kernregion | Zollernalb, Schwarzwald-Baar-Heuberg | `app/page.tsx`, `app/layout.tsx` |
| 16 Stadt-Landingpages | siehe B.3 | `lib/routes/standorte.ts` |
| Metropolregion | Stuttgart (+ Degerloch, Vaihingen, Bad Cannstatt, B14/B27) | `app/standorte/stuttgart/page.tsx` |
| Geo-Hubs im Schema | Stuttgart, Reutlingen, Tübingen Umland | `lib/seo/global-jsonld.ts` |
| JSON-LD areaServed | Alle 16 Städte + BW | `lib/seo/global-jsonld.ts` |

### NAP (Name, Adresse, Telefon)

| Feld | Wert im Repo | Vorkommen | Konsistenz |
|------|--------------|-----------|------------|
| Name | „Saubermatik Gebäudereinigung" | Footer, JSON-LD, Adressblock, Metadata | **Konsistent** |
| Adresse | „Schelmenwasenstraße 11", „72469 Meßstetten", „Baden-Württemberg, Deutschland" | `lib/config/site.ts`, `app/kontakt/page.tsx`, JSON-LD `streetAddress` | **Konsistent (PLZ 72469 + Straße)** |
| Telefon | `NEXT_PUBLIC_BUSINESS_PHONE` (Beispiel: `+497123456789`) | Kontakt, Über uns, QM, MobileStickyCta, JSON-LD (wenn gesetzt) | **Abhängig von Env — Live-Wert unklar** |
| E-Mail | Nicht als sichtbare Mail auf Kontaktseite; nur Formular/Resend | `.env.example`, Resend | **Kein öffentliches mailto auf Kontakt (außer Karriere-Fallback)** |

---

## E · LEAD-GENERIERUNG

### Formulare

| Formular | Felder | Pflicht | Submit-Ziel | Beleg |
|----------|--------|---------|-------------|-------|
| **LeadFunnel** (4 Schritte) | (1) serviceType (2) areaSize: bis-100/100-500/ueber-500 (3) timing: sofort/naechster-monat/preisvergleich (4) name, email, phone; optional: company, objectNotes | name, email, phone + Schritte 1–3 | `POST /api/lead` → Resend an `LEAD_EMAIL_RECIPIENT` | `components/LeadFunnel.tsx`, `app/api/lead/route.ts` |
| **CareerForm** | name, email, phone, about | alle | `POST /api/career` → Resend an `CAREER_EMAIL_RECIPIENT` oder Lead-Recipient | `components/CareerForm.tsx`, `app/api/career/route.ts` |
| **EngagementCalculator** | Interaktiver Rechner → prefill in LeadFunnel via sessionStorage | — | indirekt Lead-Funnel | `components/EngagementCalculator.tsx`, `CALC_PREFILL_KEY` |
| **HeroQuickSearch** | Schnellsuche Leistung | — | Navigation/Scroll | `components/HeroQuickSearch.tsx` |

**Fallback ohne Resend:** API antwortet `ok: true`, `emailed: false`, loggt Lead in Konsole (`app/api/lead/route.ts`).

### Kontaktpunkte

| Kanal | Platzierung | Beleg |
|-------|-------------|-------|
| Telefon (`tel:`) | Kontakt, Über uns, QM, Mobile Sticky CTA (mobil) | `app/kontakt/page.tsx`, `components/MobileStickyCta.tsx` |
| Formular | Startseite `#kontakt-anfrage`, Kontakt, alle Leistungs-/Matrix-/HV-Seiten | diverse Seiten |
| Adresse + OSM-Karte | Kontakt | `app/kontakt/page.tsx` |
| Kunden-Login (extern) | Header | `components/ClientLoginButton.tsx` → Plattform :3001 |
| WhatsApp | **nicht vorhanden** | Grep |
| Karriere mailto | JobListings-Fallback | `lib/jobs/public-jobs.ts` |

### Tracking / Analytics / Pixel

**Keine** Analytics-, Tag-Manager- oder Pixel-Integration im Quellcode gefunden (Grep nach gtag, GTM, analytics, pixel, plausible, matomo, hotjar, clarity).

### Trust-Elemente

| Element | IST | Beleg |
|---------|-----|-------|
| Testimonials | **Entfernt am 2026-07-12** — zuvor 3 Beispielzitate auf Startseite (`app/page.tsx`) | `app/page.tsx` (historisch) |
| AggregateRating JSON-LD | **Entfernt am 2026-07-12** — zuvor 4.9 / 124 im globalen Schema | `lib/seo/global-jsonld.ts` (historisch) |
| KAM-Profil Metin Altinsoy | Hero, Kontakt, JSON-LD Person | `lib/seo/kam-profile.ts` |
| ESG-Statement | Startseite | `components/EsgComplianceStatement.tsx` |
| FreshnessBadge | Startseite, Standort, Matrix, Stuttgart | `components/FreshnessBadge.tsx` |
| App-Mockup / QM-App | Startseite | `components/AppMockup.tsx` |
| Zertifikate/Siegel-Bilder | **Keine** echten Badge-Assets | — |
| Job-Listings | Dynamisch via `NEXT_PUBLIC_API_URL` + `/jobs/public` | `components/JobListings.tsx` |

### Conversion-Pfad

```
Einstieg (SEO/Nav/Home)
  → Leistungs-/Standort-/HV-Seite (Informationsphase, CTAs „Analyse anfordern")
  → #kontakt-anfrage LeadFunnel (4 Schritte) ODER /kontakt
  → POST /api/lead
  → E-Mail via Resend an LEAD_EMAIL_RECIPIENT
  → Success: „Wir melden uns innerhalb von 60 Minuten"
```

Alternativer Pfad: Mobile „Jetzt anrufen" → `tel:` (`components/MobileStickyCta.tsx`).

Karriere: `/karriere` → `/kontakt?type=karriere` → CareerForm → `/api/career`.

---

## F · LLM-/GEO-LESBARKEIT

### Sichtbarer Text im initialen Server-HTML

| Seitentyp | Server-HTML mit Fließtext | Beleg |
|-----------|----------------------------|-------|
| Startseite, Leistungs-Deep-Pages, Standort, Matrix, Lexikon, statische Infoseiten | **Ja** — Server Components | Architektur |
| LeadFunnel / CareerForm Labels | **Teilweise** — Formular-UI client-seitig; umgebender Copy serverseitig | `'use client'` in Formularen |
| JobListings | **Client-fetch** — Stellenliste nicht im initialen HTML | `components/JobListings.tsx` |
| EngagementCalculator | **Client** — Rechner-UI | `components/EngagementCalculator.tsx` |

### Semantik

| Kriterium | IST | Beleg |
|-----------|-----|-------|
| Heading-Hierarchie | H1 pro Seite, H2/H3 für Sektionen, FAQ mit h2+h3 | Seitenstruktur |
| Listen | `<ul>`/`<li>` für Trust, Benefits, Footer, Lexikon | diverse |
| Tabellen | SnippetBaitTable auf Unterhaltsreinigung (4-Farb-System) | `components/SnippetBaitTable.tsx` |
| FAQ-Markup | Sichtbare FAQ auf Standortseiten (`<h3>` + `<p>`) | `LocalCityFaq.tsx` |
| address-Element | Kontaktseite | `app/kontakt/page.tsx` |

### llms.txt

| Aspekt | IST |
|--------|-----|
| Vorhanden | **Ja** — Route `/llms.txt` |
| Generator | `lib/seo/llms-content.ts`, `app/llms.txt/route.ts` |
| Inhalt | Firmenbeschreibung, USPs, Links zu Leistungen, Standorten, QM, Expertise, Wissen, Kontakt |

**Widerspruch:** `robots.ts` blockiert `GPTBot`/`Claude-Web` etc. mit `Disallow: /`, während `llms.txt` explizit „Hinweis für KI-Systeme" enthält.

### Maschinelle Extraktion Kernfakten

| Fakt | Extrahierbar | Quelle |
|------|--------------|--------|
| Firma | Ja | JSON-LD, llms.txt, Footer |
| Leistungen (10) | Ja | `services.ts`, JSON-LD OfferCatalog, llms.txt |
| Einzugsgebiet | Ja | JSON-LD areaServed, Standortseiten, llms.txt |
| Kontakt/Anfrage | Ja | `/kontakt`, Lead-API |
| Telefon | Nur wenn Env gesetzt | `NEXT_PUBLIC_BUSINESS_PHONE` |
| Straßenadresse | **Ja** — Schelmenwasenstraße 11 | `lib/config/site.ts`, JSON-LD, Kontakt, Impressum/Datenschutz |

---

## G · TOP-FINDINGS (max. 10)

| # | Schwere | Beobachtung | Beleg |
|---|---------|-------------|-------|
| 1 | **hoch** | ~~**Keine Impressum- und Datenschutz-Seiten**~~ — **erledigt 2026-08-10** (`/impressum`, `/datenschutz`, Footer, Sitemap) | `app/impressum/page.tsx`, `app/datenschutz/page.tsx` |
| 2 | **hoch** | **AI-Crawler in robots.txt blockiert** (`GPTBot`, `Claude-Web`, …), parallel existiert `/llms.txt` für KI — widersprüchliche GEO-Strategie | `app/robots.ts`, `lib/seo/llms-content.ts` |
| 3 | **hoch** | **Kein Analytics/Tracking** im Code — Conversion-Messung live **unklar** | Grep Analytics |
| 4 | **mittel** | **Canonical fehlt** auf `/` und `/leistungen` | `app/page.tsx`, `app/leistungen/page.tsx` |
| 5 | **mittel** | **Kein Favicon/App-Icon** im Repo | Glob `favicon*`, `icon.*` |
| 6 | **mittel** | **NAP teilweise offen:** Straße + PLZ 72469 korrigiert; Telefon nur via Env, keine sichtbare E-Mail auf Kontakt | `lib/config/site.ts`, `app/kontakt/page.tsx` |
| 7 | **mittel** | ~~**aggregateRating 4.9/124** im JSON-LD~~ — **entfernt am 2026-07-12** | `lib/seo/global-jsonld.ts` |
| 8 | **mittel** | ~~**Testimonials als „Beispielzitate"**~~ — **entfernt am 2026-07-12** | `app/page.tsx` |
| 9 | **niedrig** | **`/zielgruppen/hausverwaltungen` nicht in Header-Nav**, nur Footer/Sitemap/interne Links | `components/SiteHeaderNav.tsx` vs. `app/sitemap.ts` |
| 10 | **niedrig** | **Open Graph/Twitter unvollständig** — kein og:image, keine Twitter Cards | `app/layout.tsx` |

---

## Anhang: Repo-Dokumentation (Kontext, nicht Live-IST)

Vorhandene Planungsdocs unter `/docs`: `seo_strategy.md`, `seo_architecture.md`, `pSEO_matrix.md`, `lead_funnel_spec.md`, `performance_audit.md`, u.a. — beschreiben Soll-Konzepte, nicht automatisch produktiven IST.

**README.md** ist noch Create-Next-App-Standard (`README.md`) — projektspezifische Deploy-Doku liegt in `ecosystem.config.js`, `.github/workflows/deploy.yml`, `ops/nginx-template.conf`.

---

*Ende IST-Audit — erstellt ausschließlich aus Repository-Inhalten. Live-Verifikation (Build-Output, gerendertes HTML, DNS, Search Console) nicht durchgeführt.*
