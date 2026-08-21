# STATUS · saubermatik-website

Living Doc nach Bau-Schritten. Stand: **2026-08-21** · Branch `fix/audit-top10`.

## Live-Stand

- Diese Welle: Top-10 aus `docs/SITE-AUDIT.md` (Inhaber-Entscheidungen): Tübingen Radius, Echtzeit-Rhetorik raus, B2BOnboarding/AppMockup/HeroQuickSearch entfernt, Markenband ohne Leistungen-CTA, Standort-Kacheln nach Tier, HV-QR gestrafft. Haftpflicht-Chip 10 Mio. € belassen.

## Erledigt (Audit Top-10, dieser PR)

- `CITY_TIERS.tuebingen` → `radius` (FAQ Startseite unverändert).
- Alle sichtbaren „Echtzeit“-Formulierungen in `app/` / `components/` / `lib/` auf Dokumentations-Sprache.
- `B2BOnboardingProcess`, `HeroQuickSearch`, `AppMockup` und zugehörige lib-Reste gelöscht.
- Markenband: CTA „Alle Leistungen ansehen“ entfernt; Kicker/H2/Text bleiben.
- Standort-Kacheln Startseite + Hub: Untertitel nach Tier.
- HV: QR-Einstiegssatz bleibt; Fließtext-Dopplung auf Rückverweis.

## Nächste Schritte

- PR `fix/audit-top10` reviewen/mergen (nicht self-merge).
- Originale Hero-JPEG 2124×2600 nachliefern, falls Chat-Upload (836×1024) nicht reicht.
- WhatsApp-Nummer bestätigen.
- SecureOps-Screenshots mit Demo-Daten.
- Domain-Umstellung www.saubermatik-reinigung.de nach Merge.

## Offen & Risiken

- Historische Docs (`docs/AUDIT-WEBSEITE.md`, `docs/architecture.md`, …) nennen noch gelöschte Komponenten.
- Chat-Upload Hero: 836×1024 statt 2124×2600 (nicht hochskaliert).
- Kundenportal-URL weiter `getPlatformLoginUrl`.
- DNS/Horizons vs. VPS: aus Repo allein unklar.
