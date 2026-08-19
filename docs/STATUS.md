# STATUS · saubermatik-website

Living Doc nach Bau-Schritten. Stand: **2026-08-19** · Branch `chore/mega-e5-e3-konsolidierung`.

## Live-Stand

- `main`: E1 + E2 gemerged.
- E4 (SecureOps-Erklärseite): auf `feat/e4-secureops-seite`, in diesem Konsolidierungs-PR mitgeführt.
- Diese Welle (E5+E3+Konsolidierung): Lead-Weg, Branchen-Hub + 2 Seiten, Städte-Rahmung, Schema, Claims nach D1–D10.

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

## Erledigt (E5+E3+Konsolidierung, dieser PR)

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
- Hero-Banner Startseite.
- Domain-Umstellung www.saubermatik-reinigung.de nach Merge.

## Offen & Risiken

- Kunden-Login führt auf SaaS-Portal (`getPlatformLoginUrl` → `{PLATFORM}/login`), nicht auf diese Marketing-Seite.
- DNS/Horizons vs. VPS: aus Repo allein unklar.
- Untracked Finder-Duplikat `app/leistungen/raffstore-lamellenreinigung/page 2.tsx` nicht Teil dieses PRs.
