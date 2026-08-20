# STATUS · saubermatik-website

Living Doc nach Bau-Schritten. Stand: **2026-08-20** · Branch `feat/bilder-favicon-psa`.

## Live-Stand

- `main`: E1–E5 + Header-/Ansprechpartner-Fix (PR #13).
- Diese Welle: echte Einsatzfotos, OG-Bilder, Marken-Favicon, PSA-Hinweis.

## Erledigt (Bilder / Favicon / PSA, dieser PR)

- Startseiten-Hero: `einsatz-glasfassade-hoehe.jpg` statt gestricheltem Platzhalter; H1/Unterzeile als HTML über dem Bild.
- SecureOps-Teaser: klickbares Banner `banner-secureops-digitalisierung.png` → `/secureops`.
- Leistungsbilder lokal: Fenster, Grünanlagen, Fassade (übrige Unsplash-Einträge unverändert).
- Open Graph: global `og-image.jpg`, `/secureops` → `og-secureops.jpg` (1200×630).
- Favicon: Wortmarken-Logo als `app/icon.png` (500×500) + `app/apple-icon.png` (180×180); Default-`favicon.ico` und das Zwischen-„S“-SVG entfernt.
- PSA-Satz auf Glas- und Fassadenseite; eine Zeile auf Über uns (DGUV 112-198/199, 07/2026).
- `banner-sauber-zuverlaessig.png` nur abgelegt, noch nicht eingebunden.

### OG prüfen (View-Source)

Nach Deploy bzw. lokalem `npm run build && npm start`: Seitenquelltext der Startseite öffnen und nach `og:image` suchen. Erwartet: absolute URL `https://www.saubermatik-reinigung.de/images/og-image.jpg` (bzw. `NEXT_PUBLIC_SITE_URL` + `/images/og-image.jpg`). Auf `/secureops` analog `og-secureops.jpg`.

## Erledigt (E1)

- Claims, Nav, Slogan, KI-Crawler, Stubs, Kalkulator entfernt.

## Erledigt (E2)

- Raffstore-LP; Matrix-Ausschluss `includeInMatrix: false`.

## Erledigt (E4)

- `/secureops` vollwertige Erklärseite (wortgetreue Texte, FAQ + FAQPage-JSON-LD).
- In Sitemap aufgenommen; Nav-Eintrag war bereits vorhanden.
- Querverweise: HV ↔ SecureOps (Mieter-Meldeweg), SecureOps → Leistungen.
- llms.txt um SecureOps-Absatz ergänzt.
- Drei Screenshot-Platzhalter (Portal / Einsatz / Nachweis) — Assets offen.

## Erledigt (E5+E3+Konsolidierung)

- Paket 1: Claims-Review gegen D1–D10 (Vertretung statt 100 %, kein GPS/24/7/direkter Draht, keine Streifenfrei-Garantie, Onboarding-Jargon, VAH-/Zertifizierungsbehauptungen, Cluster-Teams).
- Paket 2: Euro-/Richtwert-/Kalkulator-Reste; „Angebot auf Anfrage“.
- Paket 3: LeadFunnel von allen Nicht-Kontakt-Seiten entfernt; ein Kontaktformular (Name, Firma opt., E-Mail, Telefon opt., Anliegen, Honeypot); CTA „Anfrage stellen“ + Telefon + WhatsApp.
- Paket 4: `/zielgruppen` Hub + `/zielgruppen/praxen-gesundheitswesen` + `/zielgruppen/buero-gewerbe` (wortgetreue Texte, FAQ + JSON-LD); Sitemap +3.
- Paket 5: LocalBusiness Mo–Sa 08–22, Telefon kanonisch, kein aggregateRating; llms Branchensektion; Querverweise Glas→Büro, Unterhalt→Praxis/Büro.
- Paket 6: `lib/config/city-tiers.ts` (16 Matrix-Städte + Stuttgart, Radius vs. Projekt); Rahmen-Absatz auf Projekt-Stadt- und Matrix-Seiten.

## Nächste Schritte

- Metin validiert City-Tiers (Rottenburg 33 km Grenzwert; Tuttlingen 24 km = radius).
- WhatsApp auf +49 1512 9860059 bestätigen.
- SecureOps-Screenshots mit Demo-Daten.
- `banner-sauber-zuverlaessig.png` einbinden (Auftrag ausstehend).
- Domain-Umstellung www.saubermatik-reinigung.de nach Merge.

## Offen & Risiken

- Kunden-Login führt auf SaaS-Portal (`getPlatformLoginUrl` → `{PLATFORM}/login`), nicht auf diese Marketing-Seite.
- DNS/Horizons vs. VPS: aus Repo allein unklar.
- Hero: Foto ist Hochformat; `object-cover` beschneidet. Overlay-Hero statt altem Zwei-Spalten-Platzhalter — Layout-Feinschliff offen, falls Zwei-Spalten gewünscht.
