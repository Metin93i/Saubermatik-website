# STATUS · saubermatik-website

Living Doc nach Bau-Schritten. Stand: **2026-08-20** · Branch `feat/startseite-power-bildbereinigung`.

## Live-Stand

- `main`: E1–E5 + Header-/Ansprechpartner-Fix (PR #13).
- Offener Vorgänger-PR #14 (`feat/bilder-favicon-psa`) wird von diesem Branch mitgeführt (Assets, OG, Favicon, PSA).
- Diese Welle: Hover-Nav, größerer Hero, Marken- + SecureOps-HTML-Sektionen, Fremdbilder raus.

## Erledigt (Startseite Power + Bildbereinigung, dieser PR)

- Desktop-Nav „Leistungen“: Hover öffnet, 150 ms Delay beim Schließen; Klick, Fokus, Escape bleiben.
- Fremdbilder entfernt: nur noch lokale Einsatzfotos (Fenster, Grün, Fassade). Sonst Markenfläche `#13181d` mit Orangestreifen. Externe `images.remotePatterns` entfernt.
- SecureOps: drei gestrichelte Screenshot-Platzhalter entfernt (Screenshots folgen separat).
- Startseite: Eyebrow-Einsatzgebiete, Hero ~80vh Desktop / 60vh mobil, CTAs im Hero; HTML-Markenband + SecureOps-Band (kein PNG-Banner mehr auf der Startseite).
- Claim: „Dokumentierte Qualitätsstandards“ (FreshnessBadge); weitere `ertifiz`-Stellen in app/components/lib umgestellt.
- Next-Boilerplate-SVGs unter `public/` gelöscht.

### OG prüfen (View-Source)

Seitenquelltext der Startseite: `og:image` → `https://www.saubermatik-reinigung.de/images/og-image.jpg`. Auf `/secureops` analog `og-secureops.jpg`.

## Erledigt (Bilder / Favicon / PSA, mitgeführt)

- Einsatzfotos, OG-Bilder, Wortmarken-Favicon (`icon.png` + `apple-icon.png`), PSA-Hinweis DGUV 112-198/199.
- `banner-sauber-zuverlaessig.png` / `banner-secureops-digitalisierung.png` liegen in `public/images/` (OG bzw. Vorlage), Startseite bindet die PNGs nicht mehr ein.

## Erledigt (E1)

- Claims, Nav, Slogan, KI-Crawler, Stubs, Kalkulator entfernt.

## Erledigt (E2)

- Raffstore-LP; Matrix-Ausschluss `includeInMatrix: false`.

## Erledigt (E4)

- `/secureops` vollwertige Erklärseite (wortgetreue Texte, FAQ + FAQPage-JSON-LD).
- In Sitemap aufgenommen; Nav-Eintrag war bereits vorhanden.
- Querverweise: HV ↔ SecureOps (Mieter-Meldeweg), SecureOps → Leistungen.
- llms.txt um SecureOps-Absatz ergänzt.
- Screenshot-Platzhalter entfernt; echte Demo-Screenshots noch offen.

## Erledigt (E5+E3+Konsolidierung)

- Paket 1: Claims-Review gegen D1–D10 (Vertretung statt 100 %, kein GPS/24/7/direkter Draht, keine Streifenfrei-Garantie, Onboarding-Jargon, VAH-/Prüfzeichen-Behauptungen, Cluster-Teams).
- Paket 2: Euro-/Richtwert-/Kalkulator-Reste; „Angebot auf Anfrage“.
- Paket 3: LeadFunnel von allen Nicht-Kontakt-Seiten entfernt; ein Kontaktformular (Name, Firma opt., E-Mail, Telefon opt., Anliegen, Honeypot); CTA „Anfrage stellen“ + Telefon + WhatsApp.
- Paket 4: `/zielgruppen` Hub + `/zielgruppen/praxen-gesundheitswesen` + `/zielgruppen/buero-gewerbe` (wortgetreue Texte, FAQ + JSON-LD); Sitemap +3.
- Paket 5: LocalBusiness Mo–Sa 08–22, Telefon kanonisch, kein aggregateRating; llms Branchensektion; Querverweise Glas→Büro, Unterhalt→Praxis/Büro.
- Paket 6: `lib/config/city-tiers.ts` (16 Matrix-Städte + Stuttgart, Radius vs. Projekt); Rahmen-Absatz auf Projekt-Stadt- und Matrix-Seiten.

## Nächste Schritte

- Metin validiert City-Tiers (Rottenburg 33 km Grenzwert; Tuttlingen 24 km = radius).
- WhatsApp auf +49 1512 9860059 bestätigen.
- SecureOps-Screenshots mit Demo-Daten.
- Domain-Umstellung www.saubermatik-reinigung.de nach Merge.

## Offen & Risiken

- Kunden-Login führt auf SaaS-Portal (`getPlatformLoginUrl` → `{PLATFORM}/login`), nicht auf diese Marketing-Seite.
- DNS/Horizons vs. VPS: aus Repo allein unklar.
- Hero `object-position: center 62 %` — Teleskopstange/Mitarbeiter vs. Text-Overlay visuell prüfen.
