# Portfolio Case Study: Algorithmische Lokalseite & Headless-Performance

**Audience:** CTOs, Heads of Digital, IT-affine Geschäftsführung  
**Klassifikation:** Referenzarchitektur Web-SEO / Conversion (2026)  
**Codebase:** Next.js 16 (App Router), TypeScript strict, deployment-neutral (Vercel-kompatibel)

---

## Executive Summary

Dieses Whitepaper beschreibt die **symbiotische Architektur** aus (a) **headless-fähigem Frontend** ohne Datenbank im UI-Pfad, (b) **programmatischer SEO-Matrix** für lokale Entitäten mit kontrollierter Text-Entropie, und (c) **SGE-orientierter Informationsarchitektur** (Search Generative Experience / AI Overviews): strukturierte Kurzfakten, JSON-LD auf Seiten- und Graph-Ebene, sowie navigationsseitiges **Prefetch-on-Intent** statt blindem Bulk-Prefetch.

Das Ergebnis ist keine „Landingpage mit Keywords“, sondern ein **messbar skalierbares System**: gleiche technische Pipeline für 16+ Standort-Spokes und N Spezial-Hubs, differenziert durch Datenobjekte (`lib/seo/*`, `lib/routes/*`) statt durch manuelle HTML-Duplikate.

---

## The Challenge: Lokaler Wettbewerb & Informationsökonomie

### Marktfragmentierung

Gebäudereinigung ist hyperlokal und preissensitiv wahrgenommen. Wettbewerber dominieren oft SERPs durch **Volumen simpler Seiten** — wenig semantische Tiefe, kaum differenzierte `Service`-Signale, selten konsistente strukturierte Daten über das gesamte Portfolio.

### SGE-Shift

Generative Suchoberflächen bevorzugen **extrahierbare, konsistente Faktenblöcke** (Problem–Lösung–Zeitrahmen) statt marketinglastiger Fließtexte. Klassische „SEO-Texte“ ohne maschinenlesbare Struktur verlieren an Kantenlänge gegenüber Domains, die **EEAT + strukturierte Kurzargumentation** kombinieren.

### Performance als Ranking- und Conversion-Faktor

Core Web Vitals und wahrgenommene Latenz korrelieren mit Absprung und Trust. **Unkontrolliertes Link-Prefetching** (z. B. große Dropdowns) kann hingegen Bandbreite und Hauptthread unnötig belasten.

---

## The Solution

### 1. Programmatic SEO Matrix (lokale Entitäten)

Wir kapseln stadtspezifische **Industrie- und Verkehrs-Entitäten** in `lib/seo/local-entities.ts` und injizieren sie **nur für definierte Kernstädte** in `app/standorte/[city]/page.tsx`. Ein **deterministischer Spin** variiert Satzbau und Cluster-Reihenfolge pro Slug — semantische Nähe bei reduziertem Duplicate-Risiko.

Details: `docs/pSEO_matrix.md`.

### 2. SGE-Targeting (TL;DR-Komponente)

Auf `app/leistungen/[slug]/page.tsx` liefert `components/LeistungSgeTldr.tsx` eine **semantisch gekapselte Zusammenfassung** (`<section aria-label="Zusammenfassung">`) mit Bullet-Kette **Problem → Saubermatik-Lösung → Zeitrahmen**. Inhalte liegen typisiert in `lib/seo/leistung-sge-tldr.ts` und sind damit versionierbar, A/B-testbar und auditierbar.

### 3. PageRank-Signaling via BreadcrumbList

`components/BreadcrumbJsonLd.tsx` emittiert striktes **Schema.org `BreadcrumbList`** mit absoluten `item`-URLs (Basis: `getSiteOrigin()` / `NEXT_PUBLIC_SITE_URL`). Eingebunden auf **Leistungs-** und **Standort-Spokes** — klare hierarchische Signale an Crawler und Rich-Result-Pipeline.

### 4. Next.js 16 „Zero-Latency“ Routing (kontrolliert)

`components/PrefetchLink.tsx` kapselt **`next/link` mit `prefetch={false}`** und triggert **`router.prefetch()` auf `pointerenter`**. Damit priorisieren Header/Footer **Intent-gestütztes Vorladen** kritischer Routen (`/leistungen/*`, `/standorte/*`, `/kontakt`, Corporate-Hubs) ohne aggressives Default-Prefetch der gesamten Dropdown-Fläche.

### 5. Headless-Architektur & algorithmische Dominanz

- **Headless-Prinzip:** UI konsumiert **konfigurierte Artefakte** (`lib/config/services.ts`, `lib/routes/standorte.ts`) statt CMS-SQL im Request-Pfad.  
- **Algorithmische Dominanz:** SEO wird zu einem **Software-Problem** — neue Städte/Leistungen propagieren über Single Source of Truth in SSG, Sitemaps (Roadmap) und JSON-LD.

---

## Business Impact (qualitativ / messbar geplant)

| Hebel | Erwarteter Effekt |
|--------|-------------------|
| Strukturierte TL;DR + FAQ JSON-LD | Höhere Chance auf **Snippet-Reichtum** und Kandidaten für generative Antworten |
| Lokale Entity-Matrix | Relevanz-Gewinn für **Long-Tail Geo-Queries** ohne manuelle Copy-Armada |
| BreadcrumbList | Klarere **Hierarchie-Signale**, bessere interne Kohärenz |
| Intent-Prefetch | **Niedrigere wahrgenommene Navigationslatenz** bei kontrolliertem Ressourcenbudget |

Quantitative KPIs sollten über **Google Search Console** (Impression/CTR pro Cluster), **CRUX** und **Funnel-Completion** (`/api/lead`) nachgehalten werden — die Architektur trennt bereits Traffic- von Lead-Ebene sauber.

---

## Fazit für technische Entscheider

Saubermatik behandelt Web-SEO nicht als Content-Projekt, sondern als **Release-fähiges Teilprodukt**: typisierte SEO-Module, statische Generierung dort, wo möglich, und Client-Interaktion nur dort, wo UX-Vorteile den Bundle-Kosten entsprechen. Diese Denkweise skaliert von regionaler Präsenz zu **mehrstädtigen Rollouts**, ohne die Codebasis fragmentieren zu lassen.

---

*Internes Portfolio-Dokument — keine rechtsverbindlichen Zusicherungen gegenüber Suchmaschinen-Betreibern.*
