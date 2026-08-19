# STATUS · saubermatik-website

Living Doc nach Bau-Schritten. Stand: **2026-08-19** · Branch `feat/e4-secureops-seite`.

## Live-Stand

- `main`: E1 + E2 gemerged.
- Diese Welle (E4): SecureOps-Erklärseite (Stub ersetzt).

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

## Nächste Schritte

- SecureOps-Screenshots mit Demo-Daten.
- Hero-Banner Startseite.
- E3 Städte-Kuration / ggf. weitere Branchen.

## Offen & Risiken

- Kunden-Login führt auf SaaS-Portal (`getPlatformLoginUrl` → `{PLATFORM}/login`), nicht auf diese Marketing-Seite.
- DNS/Horizons vs. VPS: aus Repo allein unklar.
