# Performance-Audit (Ziel: hohe PageSpeed / Core Web Vitals)

Stand: dokumentiert die im Code umgesetzten Maßnahmen. Messung erfolgt extern (PageSpeed Insights, Lighthouse).

## Bilder (`next/image`)

- **Remote-Unsplash-Bilder** über `next.config.ts` → `images.remotePatterns`.
- **LCP (Hero):** erstes großes Büro-Bild auf `/` mit `priority`, `fill`, passenden `sizes`.
- **CLS:** übergeordnete Container mit **festem Seitenverhältnis** (`aspect-[4/3]`, `aspect-[5/4]`).
- **Blur-Placeholder:** `placeholder="blur"` + gemeinsames `blurDataURL` (`lib/image-blur.ts`) für Remote-Src ohne statischen Import.

## Schriften (`next/font/google`)

- **Geist** + **Geist Mono** im Root-Layout mit CSS-Variablen (`--font-geist-sans` / `--font-geist-mono`).
- **`display: "swap"`** — reduziert Render-Blocking / FOIT-Risiko.

## Layout-Stabilität (CLS)

- **„Reinigung 4.0“:** Sektions-Wrapper mit **Mindesthöhe** (`min-h-[38rem]` / `sm:min-h-[40rem]`), Karten mit `min-h` auf Kachel-Ebene.
- **LeadFunnel:** äußere `section` mit **`min-h-[26rem]` / `sm:min-h-[28rem]`**; innerer Schrittbereich mit zusätzlicher `min-h` für wechselnde Steps.
- **Testimonials / Standort-Karten:** reservierte Mindesthöhen auf der Startseite.

## JavaScript-Bundle / Architektur

- **Server Components** als Default; **`"use client"`** nur für:
  - `LeadFunnel` (Formular-State, Fetch),
  - `SiteHeaderNav` (Mobile-Menü, Scroll-Lock, Escape).
- Restliche Seiten (`app/*`) und **Header-Shell** (`SiteHeader`) bleiben serverseitig.

## Drittanbieter & Karte

- **Kontakt-Seite:** OpenStreetMap-**iframe** `loading="lazy"` (kein zusätzliches Analytics-Skript).
- **JSON-LD** bleibt synchrones `<script type="application/ld+json">` im `<head>` (SEO-kritisch, bewusst **kein** `next/script lazyOnload`).

## Header / Sticky UI

- **Sticky Header** (`z-40`) für bessere Erreichbarkeit der Navigation ohne Layout-Sprünge der Seite.
- **Mobile Sticky CTA** (`z-50`) mit **Safe-Area-Padding**; Hauptinhalt erhält **`max-md:pb-[5.75rem]`** im `layout`, damit nichts unter der Leiste verschwindet.

## WCAG & wahrgenommene Performance

- **Kontrast:** angepasste Palette in `app/globals.css` (`--muted`, `--secondary`, `--link-on-primary` für Footer-Links).
- **Fokus-Stile:** sichtbare `focus-visible`-Umrisse auf Logo-Link und CTAs.

## Nächste mögliche Schritte (optional, nicht implementiert)

- `@next/bundle-analyzer` für Bundle-Drilldown.
- `next/script` nur bei **echten** Third-Party-Tags (Analytics, Consent) mit `strategy="lazyOnload"`.
- Self-Hosting kritischer Bilder statt Unsplash, falls TTFB der Image-API limitiert.
