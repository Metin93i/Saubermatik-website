# SEO-Architektur: Hub-and-Spoke & „Zwiebelschalen“-Strategie

Stand: synchron mit `docs/architecture.md` (Master), `app/`, `lib/routes/*`, `components/StructuredData.tsx` und den Detaildokumenten `docs/seo_strategy.md`, `docs/site_architecture.md`, `docs/performance_audit.md`.

## Zielbild

Wir trennen bewusst zwei Ebenen der Nachfrage:

1. **Lokale Dominanz (Innen-Schale)**  
   Standort-URLs (`/standorte/[city]`) sprechen explizit **16 Städte** im Wirtschaftsraum Zollernalb / angrenzend an. Inhalte sind kurz, nutzenorientiert und wiederholen kontrolliert lokale Signale (Stadtname, Region, Einsatzlogistik). Interne Links führen zu Leistungs-Detailseiten und zur **Kontakt-/Anfrage-Route**.

2. **Überregionale / High-End-Leads (Außen-Schale)**  
   Leistungs-URLs (`/leistungen/[slug]`) adressieren fachliche Suchintention (z. B. Bauendreinigung, Glas). Fokus: Vertrauen, Prozess, Qualität.

3. **Corporate & Vertrauen (Mittel-Schale)** — **neu**  
   Statische Kernseiten **`/qualitaetsmanagement`**, **`/ueber-uns`**, **`/karriere`**, **`/kontakt`** stärken E-E-A-T, Recruiting und **SaaS-/QM-USPs** (digitale Protokolle, Plattform-Logik). Siehe Keyword-Matrix in `docs/seo_strategy.md`.

## Hub-and-Spoke Routing

- **Hub Leistungen** (`/leistungen`): Übersichtsseite mit Links zu allen Spokes.  
- **Spokes Leistungen** (`/leistungen/[slug]`): Tiefe Inhalte pro Leistungscluster, statisch vorgerendert (`generateStaticParams`).  
- **Sonder-Landing** (`/leistungen/unterhaltsreinigung`): zusätzlicher SEO-Einstieg.  
- **Spokes Standorte** (`/standorte/[city]`): **16** lokale Landingpages, statisch vorgerendert.  
- **Corporate Hubs:** `/qualitaetsmanagement`, `/ueber-uns`, `/karriere`, `/kontakt`.

### Technische Umsetzung (Next.js App Router)

- Seiten sind **serverseitig generiert** und enthalten **keine Datenbankanbindung im UI-Layer**.  
- Slugs/Städte sind als Konstanten in `lib/routes/*` zentral gepflegt – das reduziert Tippfehler und hält Metadaten konsistent.  
- `generateMetadata` liefert pro Route Title/Description; das Root-Layout setzt ein **Title-Template** (`%s | Saubermatik Gebäudereinigung`).  
- Kernseiten setzen **`alternates.canonical`**.

### Interne Verlinkung

- **Header** (`SiteHeaderNav`): Leistungen-Dropdown + Corporate-Links + Anruf-CTA.  
- **Footer** (`SiteFooter`): Leistungen, Unternehmen, **Städte-Grid** (16 Links).  
- **Startseite** → Leistungen-Hub, Standort-Kacheln, Anker `#kontakt-anfrage` (lokaler Funnel).  
- **Unterseiten** → **`/kontakt#kontakt-anfrage`** als zentraler Conversion-Pfad.  
- **Leistungs-Detail** → Hub + Kontakt.

### Strukturierte Daten (JSON-LD) — **global**

- **Komponente:** `components/StructuredData.tsx`  
- **Einbindung:** Root-`app/layout.tsx` rendert das Skript im `<head>` (global auf allen Seiten).  
- **Inhalt:** `@graph` mit kombiniertem Schema `LocalBusiness` + `CleaningService` (Hauptsitz laut `lib/config/site.ts` inkl. Geo, **`areaServed` = alle 16 Städte** aus `lib/routes/standorte.ts`, Öffnungszeiten Mo–So 08:00–22:00, `priceRange: "$$"`).  
- **`hasOfferCatalog`:** wird aus **`lib/config/services.ts`** generiert — aktuell **10** `Service`-Einträge inkl. **Entrümpelung** (`entruempelung`) und **Sonstiges** (`sonstiges`).
- **Telefon:** optional über `NEXT_PUBLIC_BUSINESS_PHONE`, nur ausgegeben wenn gesetzt (keine Platzhalter-Rufnummer).

## Nächste Ausbaustufen (optional)

- JSON-LD ergänzend pro Hub/Spoke (`Service`, `FAQPage`).  
- `sitemap.xml` / `robots.txt` generieren.  
- Content-Erweiterung pro Stadt (Referenzprojekte, FAQs) ohne Routing-Bruch.
