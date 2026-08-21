# STATUS · saubermatik-website

Living Doc nach Bau-Schritten. Stand: **2026-08-21** · Branch `fix/header-mobile-menu`.

## Live-Stand

- Mobilmenü: Overlay per Portal auf `document.body`, damit `backdrop-filter` am Header es nicht unsichtbar clippt.
- Header: Button **Kundenportal** (Desktop + Mobil) vorübergehend ausgeblendet (`SHOW_HEADER_CLIENT_LOGIN = false`). Komponente und Portal-URL bleiben; sichtbar nach Freigabe (Flag auf `true`).
- Vorherige Welle (in main): Top-10 aus `docs/SITE-AUDIT.md`.

## Erledigt (vorher: Audit Top-10, in main)

- `CITY_TIERS.tuebingen` → `radius` (FAQ Startseite unverändert).
- Alle sichtbaren „Echtzeit“-Formulierungen in `app/` / `components/` / `lib/` auf Dokumentations-Sprache.
- `B2BOnboardingProcess`, `HeroQuickSearch`, `AppMockup` und zugehörige lib-Reste gelöscht.
- Markenband: CTA „Alle Leistungen ansehen“ entfernt; Kicker/H2/Text bleiben.
- Standort-Kacheln Startseite + Hub: Untertitel nach Tier.
- HV: QR-Einstiegssatz bleibt; Fließtext-Dopplung auf Rückverweis.

## Nächste Schritte

- Kundenportal im Header wieder einblenden, sobald freigegeben (`SHOW_HEADER_CLIENT_LOGIN = true`).
- Originale Hero-JPEG 2124×2600 nachliefern, falls Chat-Upload (836×1024) nicht reicht.
- WhatsApp-Nummer bestätigen.
- SecureOps-Screenshots mit Demo-Daten.
- Domain-Umstellung www.saubermatik-reinigung.de nach Merge.

## Offen & Risiken

- Historische Docs (`docs/AUDIT-WEBSEITE.md`, `docs/architecture.md`, …) nennen noch gelöschte Komponenten.
- Chat-Upload Hero: 836×1024 statt 2124×2600 (nicht hochskaliert).
- Kundenportal-URL weiter `getPlatformLoginUrl`.
- DNS/Horizons vs. VPS: aus Repo allein unklar.
