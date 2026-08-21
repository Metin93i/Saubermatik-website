# STATUS · saubermatik-website

Living Doc nach Bau-Schritten. Stand: **2026-08-20** · Branch `feat/vertrieb-identitaet-audit`.

## Live-Stand

- Diese Welle: Vertriebs-/Identitäts-Ausbau (Split-Hero, Trust, Grid, FAQ, Formular), Gebietstexte, Site-Audit.

## Erledigt (Identität + Vertrieb, dieser PR)

- Split-Hero: Text `#13181d` + `einsatz-fensterreinigung-hero.jpg` (`object-top`, `quality={85}`).
- Trust-Leiste, Leistungs-Grid (8 Kacheln, Lucide-inline), USP/Gebietstexte, SecureOps-Satz, Drei-Schritte, Start-FAQ + JSON-LD, Abschluss-CTA mit Kostenlos-Zeile.
- Header-Button **Kundenportal** (wieder sichtbar). HV: QR-Sektion zuerst. Hub-Reihenfolge Unterhalt → Glas → Raffstore → Grund.
- Kontakt: Mo–Sa 08–22. Formular: optionale Felder `topic` / `location` in der Lead-Mail.
- `docs/SITE-AUDIT.md` neu.

### Lead-Mail prüfen (Inhaber)

1. `/kontakt` öffnen, Pflichtfelder plus „Worum geht es?“ und „Ort oder PLZ“ füllen, absenden.
2. Eingangsmail: Zeile **Worum geht es?** und **Ort oder PLZ** (leer = „—“).
3. Lokal ohne `RESEND_API_KEY`: Server-Konsole `[lead] … console.dir` mit `topic`/`location`.

### OG prüfen (View-Source)

`og:image` → `https://www.saubermatik-reinigung.de/images/og-image.jpg`. `/secureops` analog `og-secureops.jpg`.

## Nächste Schritte

- Top-10 aus `docs/SITE-AUDIT.md` entscheiden (FAQ vs. Zwei-Radien Tübingen, Onboarding-Doppel, tote HeroQuickSearch).
- Originale Hero-JPEG 2124×2600 nachliefern, falls Chat-Upload (836×1024) nicht reicht.
- WhatsApp-Nummer bestätigen.
- SecureOps-Screenshots mit Demo-Daten.
- Domain-Umstellung www.saubermatik-reinigung.de nach Merge.

## Offen & Risiken

- Chat-Upload Hero: 836×1024 statt 2124×2600 (nicht hochskaliert).
- Kundenportal-URL weiter `getPlatformLoginUrl`.
- DNS/Horizons vs. VPS: aus Repo allein unklar.
