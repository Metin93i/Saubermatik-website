# STATUS · saubermatik-website

Living Doc nach Bau-Schritten. Stand: **2026-08-20** · Branch `fix/header-kunden-login-ausblenden`.

## Live-Stand

- Diese Welle: Kunden-Login im Header vorübergehend ausgeblendet (`SHOW_HEADER_CLIENT_LOGIN = false`).

## Erledigt (Header Kunden-Login, dieser PR)

- `ClientLoginButton` im Desktop-Header und im Mobil-Menü hinter `SHOW_HEADER_CLIENT_LOGIN = false` (Komponente bleibt).

## Erledigt (Design & Bildqualität)

- Bild-Fallback-Regel in `AGENTS.md`: ohne echtes Bild kein Bildbereich (keine Deko-Flächen, keine UI-TODOs).
- Leerflächen entfernt: Plattform-Kachel, „Warum wir“, Über uns, Karriere, Stuttgart, Leistungs-Hero ohne Foto.
- Branchen-Karten ohne Bildplatzhalter; drei Kurzzeilen wortgetreu.
- Hero `object-position: 60% 75%`, Verlauf von links, Text links (`max-w-2xl`), Person rechts frei.
- Abschluss-CTA (Anfrage / Anrufen / WhatsApp) am Ende der Startseite; `MobileStickyCta` bleibt `md:hidden`.
- HQ-Einsatzfotos ersetzt; Hero `quality={85}` `sizes="100vw"`; Leistungsbilder `quality={80}` `sizes="(max-width: 768px) 100vw, 50vw"`; `images.formats` avif+webp.

### OG prüfen (View-Source)

`og:image` → `https://www.saubermatik-reinigung.de/images/og-image.jpg`. `/secureops` analog `og-secureops.jpg`.

## Erledigt (Startseite Power + Bildbereinigung)

- Hover-Nav, größerer Hero, Marken- + SecureOps-HTML-Sektionen, Fremdbilder raus.

## Erledigt (Bilder / Favicon / PSA)

- Einsatzfotos, OG-Bilder, Wortmarken-Favicon, PSA-Hinweis DGUV 112-198/199.

## Erledigt (E1–E5)

- Claims, Raffstore-LP, SecureOps-Erklärseite, Lead-Weg/Branchen/Städte/Schema.

## Nächste Schritte

- Metin validiert City-Tiers (Rottenburg 33 km Grenzwert; Tuttlingen 24 km = radius).
- WhatsApp auf +49 1512 9860059 bestätigen.
- SecureOps-Screenshots mit Demo-Daten.
- Domain-Umstellung www.saubermatik-reinigung.de nach Merge.
- Kunden-Login im Header wieder einblenden (`SHOW_HEADER_CLIENT_LOGIN = true`), sobald das Portal live ist.

## Offen & Risiken

- Kunden-Login im Header ist vorübergehend ausgeblendet; Komponente und URL bleiben.
- DNS/Horizons vs. VPS: aus Repo allein unklar.
- Chat-Upload der HQ-Fotos kam mit 984×1024 / 768×1024 an (angegeben waren 2462×2560 / 1800×2400).
