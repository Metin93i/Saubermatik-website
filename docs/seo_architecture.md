# SEO-Architektur: Hub-and-Spoke & „Zwiebelschalen“-Strategie

## Zielbild

Wir trennen bewusst zwei Ebenen der Nachfrage:

1. **Lokale Dominanz (Innen-Schale)**  
   Standort-URLs (`/standorte/[city]`) sprechen explizit Städte in der Region Zollernalb an. Inhalte sind kurz, nutzenorientiert und wiederholen kontrolliert lokale Signale (Stadtname, Region, Einsatzlogistik). Interne Links führen zu Leistungs-Detailseiten und zur Anfrage – damit verteilen wir Autorität sinnvoll im Silo.

2. **Überregionale / High-End-Leads (Außen-Schale)**  
   Leistungs-URLs (`/leistungen/[slug]`) adressieren fachliche Suchintention (z. B. Bauendreinigung, Glas). Hier liegt der Fokus auf Vertrauen, Prozess und Qualität – weniger „Stadtsatz“, mehr Kompetenznachweis. So können wir später gezielt erweitern (weitere Städte, Branchen-LPs), ohne die lokale Klarheit zu verwässern.

## Hub-and-Spoke Routing

- **Hub Leistungen** (`/leistungen`): Übersichtsseite mit Links zu allen Spokes.  
- **Spokes Leistungen** (`/leistungen/[slug]`): Tiefe Inhalte pro Leistungscluster, statisch vorgerendert (`generateStaticParams`).  
- **Spokes Standorte** (`/standorte/[city]`): Lokale Landingpages, ebenfalls statisch vorgerendert.

### Technische Umsetzung (Next.js App Router)

- Seiten sind **serverseitig generiert** und enthalten **keine Datenbankanbindung im UI-Layer**.  
- Slugs/Städte sind als Konstanten in `lib/routes/*` zentral gepflegt – das reduziert Tippfehler und hält Metadaten konsistent.  
- `generateMetadata` liefert pro Route Title/Description; das Root-Layout setzt ein **Title-Template** (`%s | Saubermatik Gebäudereinigung`).

### Interne Verlinkung

- Startseite → Leistungen-Hub, Standort-Kacheln, Anker zur Lead-Anfrage.  
- Leistungs-Detail → Hub + Anfrage.  
- Footer → wiederholte Querverlinkung (Crawl-Pfade, Nutzer-Orientierung).

## Nächste Ausbaustufen (optional)

- JSON-LD (`LocalBusiness`, `Service`) pro Hub/Spoke.  
- `sitemap.xml` / `robots.txt` generieren.  
- Content-Erweiterung pro Stadt (Referenzprojekte, FAQs) ohne Routing-Bruch.
