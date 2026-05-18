# SEO-Architektur: Hub-and-Spoke & „Zwiebelschalen“-Strategie

Stand: synchron mit `docs/architecture.md` (Master), `app/` (inkl. **`app/sitemap.ts`**, **`app/robots.ts`**), `lib/routes/*`, `components/StructuredData.tsx`, **`lib/seo/global-jsonld.ts`**, **`lib/seo/site-origin.ts`**, **`lib/seo/leistung-faq.ts`**, **`lib/seo/local-entities.ts`**, **`lib/seo/leistung-sge-tldr.ts`** und den Detaildokumenten `docs/seo_strategy.md`, `docs/site_architecture.md`, `docs/performance_audit.md`, **`docs/competitor_analysis.md`**, **`docs/pSEO_matrix.md`**, **`docs/portfolio_seo_whitepaper.md`**.

## Zielbild

Wir trennen bewusst zwei Ebenen der Nachfrage:

1. **Lokale Dominanz (Innen-Schale)**  
   Standort-URLs (`/standorte/[city]`) sprechen explizit **16 Städte** im Wirtschaftsraum Zollernalb / angrenzend an. Inhalte sind kurz, nutzenorientiert und wiederholen kontrolliert lokale Signale (Stadtname, Region, Einsatzlogistik). Interne Links führen zu Leistungs-Detailseiten und zur **Kontakt-/Anfrage-Route**.  
   **Ergänzung:** **`/standorte/stuttgart`** als **Hyper-Local Hub** mit Stadtteil-/Verkehrs-Entitäten und Q&A-Blöcken (siehe `docs/seo_strategy.md`).

2. **Überregionale / High-End-Leads (Außen-Schale)**  
   Leistungs-URLs (`/leistungen/[slug]`) adressieren fachliche Suchintention (z. B. Bauendreinigung, Glas). Fokus: Vertrauen, Prozess, Qualität.

3. **Corporate & Vertrauen (Mittel-Schale)** — **neu**  
   Statische Kernseiten **`/qualitaetsmanagement`**, **`/ueber-uns`**, **`/karriere`**, **`/kontakt`**, **`/expertise`** stärken E-E-A-T, Recruiting und **SaaS-/QM-USPs** (digitale Protokolle, Plattform-Logik). Siehe Keyword-Matrix in `docs/seo_strategy.md`.

## Hub-and-Spoke Routing

- **Hub Leistungen** (`/leistungen`): Übersichtsseite mit Links zu allen Spokes.  
- **Spokes Leistungen** (`/leistungen/[slug]`): Tiefe Inhalte pro Leistungscluster, statisch vorgerendert (`generateStaticParams`).  
- **Sonder-Landing** (`/leistungen/unterhaltsreinigung`): zusätzlicher SEO-Einstieg.  
- **Spokes Standorte** (`/standorte/[city]`): **16** lokale Landingpages, statisch vorgerendert.  
- **Hyper-Local Hub:** **`/standorte/stuttgart`** (fest, nicht Teil von `[city]`).  
- **Corporate Hubs:** `/qualitaetsmanagement`, `/ueber-uns`, `/karriere`, `/kontakt`, **`/expertise`**.

### Technische Umsetzung (Next.js App Router)

- Seiten sind **serverseitig generiert**, sofern keine **Request-Parameter** die Route dynamisch machen (`/kontakt` mit `searchParams`). Es gibt **keine Datenbank** im UI-Layer.  
- Slugs/Städte sind als Konstanten in `lib/routes/*` zentral gepflegt – das reduziert Tippfehler und hält Metadaten konsistent.  
- `generateMetadata` liefert pro Route Title/Description; das Root-Layout setzt ein **Title-Template** (`%s | Saubermatik Gebäudereinigung`).  
- Kernseiten setzen **`alternates.canonical`**.

### Interne Verlinkung

- **Header** (`SiteHeaderNav`): Leistungen-Dropdown + Corporate-Links + Anruf-CTA; interne `Link`s nutzen **`PrefetchLink`** (Hover-`router.prefetch`, `prefetch={false}`).  
- **Footer** (`SiteFooter`): Leistungen, Unternehmen, **Städte-Grid** (16 Links) **+ Link „Stuttgart (Metropolregion, Spezial-Hub)“** → **`/standorte/stuttgart`** — ebenfalls **`PrefetchLink`** für Kern-Routen.
- **Startseite** → Leistungen-Hub, Standort-Kacheln, Anker `#kontakt-anfrage` (lokaler Funnel).  
- **Unterseiten** → **`/kontakt#kontakt-anfrage`** (Kunden-Leads) bzw. **`/kontakt?type=karriere`** / **`#bewerbung`** (Bewerbungen).  
- **Leistungs-Detail** → Hub + Kontakt.

### Strukturierte Daten (JSON-LD) — **global**

- **Komponente:** `components/StructuredData.tsx` (ruft **`buildGlobalJsonLdString()`** aus **`lib/seo/global-jsonld.ts`**).  
- **Einbindung:** Root-`app/layout.tsx` rendert das Skript im `<head>` (global auf allen Seiten).  
- **Inhalt:** `@graph` mit kombiniertem Schema `LocalBusiness` + `CleaningService` (Hauptsitz laut `lib/config/site.ts` inkl. Geo, Öffnungszeiten Mo–So 08:00–22:00, `priceRange: "$$"`).  
- **`areaServed`:** **16 Städte** als `City` aus `lib/routes/standorte.ts` **plus** drei Metropol-Cluster (**Stuttgart, Reutlingen, Tübingen**) als **`GeoCircle`** mit `geoMidpoint` (WGS84) und **`geoRadius`** in Metern (Point-Radius). Zusätzlich bleibt Baden-Württemberg als `State` und Meßstetten als `City` referenziert.  
- **`hasOfferCatalog`:** aus **`lib/config/services.ts`** — **10** ausführliche **`Service`**-Einträge (u. a. `@id`, `description`, `provider`, `category`, `areaServed`) inkl. **Entrümpelung** (`entruempelung`) und **Sonstiges** (`sonstiges`).
- **Telefon:** optional über `NEXT_PUBLIC_BUSINESS_PHONE`, nur ausgegeben wenn gesetzt (keine Platzhalter-Rufnummer).

### Strukturierte Daten (JSON-LD) — **pro Leistungsspoke**

- **`FAQPage`:** `components/LeistungFaqJsonLd.tsx` auf **`/leistungen/[slug]`**; Fragen/Antworten in **`lib/seo/leistung-faq.ts`** (Intent: PAA / People Also Ask).
- **`BreadcrumbList`:** `components/BreadcrumbJsonLd.tsx` auf **`/leistungen/[slug]`** und **`/standorte/[city]`** (absolute `item`-URLs via `lib/seo/site-origin.ts`).

### Crawling & Bot-Policy (`app/robots.ts`)

- **Standard:** `User-agent: *` mit **`Allow: /`** (öffentlicher Webauftritt bleibt indexierbar).
- **Suchmaschinen:** explizite **`Allow: /`** für **`Googlebot`** und **`Bingbot`** (klare Signale, voller Zugriff).
- **AI-/LLM-Scraper (Defense-in-Depth):** für **`CCBot`**, **`GPTBot`**, **`anthropic-ai`**, **`Claude-Web`** jeweils **`Disallow: /`**. Hinweis: `robots.txt` ist freiwillig und **kein** rechtlicher Schutz vor allen Crawlern; sensibler Inhalt gehört nicht ins öffentliche Web.
- **Sitemap-Verweis:** `Sitemap: {origin}/sitemap.xml` (Origin aus **`NEXT_PUBLIC_SITE_URL`** bzw. Fallback in **`lib/seo/site-origin.ts`**).

### Sitemap (`app/sitemap.ts`)

- **Quelle:** `SERVICES` (`lib/config/services.ts`) für **`/leistungen/{slug}`**, `STANDORT_CITIES` für **`/standorte/{city}`**, plus fest codierte **Core-URLs**.
- **Prioritäten (crawl hints):** Core **1.0 → 0.8** (`/` … `/kontakt`), Leistungsspokes **0.9**, Standortspokes **0.8**.
- **`changeFrequency`:** Startseite `weekly`, übrige Einträge überwiegend `monthly`.
- **Absolute URLs:** Basis wie bei JSON-LD über **`getSiteOrigin()`** (einheitlich mit **`metadataBase`** in `app/layout.tsx`).

## Nächste Ausbaustufen (optional)

- JSON-LD ergänzend für **Stuttgart-Hub** (`WebPage` + `BreadcrumbList`) und weitere Spezial-Hubs.  
- Content-Erweiterung pro Stadt (Referenzprojekte, FAQs) ohne Routing-Bruch.
