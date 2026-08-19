# STATUS · saubermatik-website

Living Doc nach Bau-Schritten. Stand: **2026-08-19** · Branch `feat/e2-raffstore-lp`.

## Live-Stand

- `main`: E1 gemerged (Claims, Nav, Slogan, KI-Crawler, Stubs).
- Diese Welle (E2): Landingpage Raffstore- & Lamellenreinigung + Matrix-Ausschluss.

## Erledigt (E1)

- EngagementCalculator entfernt; Claims bereinigt; Einsatzgebiete-Wording; Hero-Slogan; Stubs; robots offen.

## Erledigt (E2)

- Service `raffstore-lamellenreinigung` in `lib/config/services.ts` mit `includeInMatrix: false`.
- Matrix: `MATRIX_SERVICES` / `MatrixServiceSlug` — neue Leistung **nicht** in Stadt×Service-Matrix (bleibt 16×10).
- Seite `/leistungen/raffstore-lamellenreinigung` mit wortgetreuen Texten, FAQ + FAQPage-JSON-LD.
- Sitemap/Nav/Hub ziehen den Service aus `SERVICES` (automatisch).
- Querverweis von Fenster-/Glasreinigung; llms.txt-Zeile ergänzt.

## Nächste Schritte

- Hero-Banner-Asset (Startseite) freigeben.
- E3: Städte-Kuration / ggf. Matrix für Raffstore später.
- Branchen-/SecureOps-Inhaltsseiten.

## Offen & Risiken

- Raffstore-Hero: Übergangs-Unsplash + TODO „durch echtes Einsatzfoto ersetzen“.
- DNS/Horizons vs. VPS: aus Repo allein unklar.
