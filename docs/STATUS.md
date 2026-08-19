# STATUS · saubermatik-website

Living Doc nach Bau-Schritten. Stand: **2026-08-19** · PR-Branch `chore/e1-fundament`.

## Live-Stand

- `main` vor diesem PR: Rechtsfundament (Impressum/Datenschutz, NAP 72469) live.
- Diese Welle (E1): Claims-Bereinigung, Nav-Umbau, Hero-Slogan, KI-Crawler offen, Kalkulator entfernt, Stubs `/secureops` + `/zielgruppen`.

## Erledigt (E1)

- EngagementCalculator entfernt (Einbettungen + Datei); Prefill-Keys aus `lib/hero/quick-search.ts` / LeadFunnel.
- Unbelegte Claims (GPS-/Foto-Zwang, 24/7, „direkter Draht“) in `app/`, `components/`, `lib/` bereinigt.
- Sichtbares Wording „Standorte“ → „Einsatzgebiete“ (URLs unverändert).
- Hero-Slogan: „Wir digitalisieren die Reinigung.“ + Unterzeile „Beweis statt Versprechen.“; Banner-Platzhalter mit TODO.
- Stubs: `/secureops`, `/zielgruppen` (nicht in Sitemap).
- Nav: Leistungen · Branchen · SecureOps · QM · Über uns · Karriere · Kontakt; Expertise nur noch Footer.
- `robots.ts`: alle Crawler erlaubt.
- `docs/CLAIMS-INVENTAR.md` auf `main` fehlte — Claims per Volltextsuche.

## Nächste Schritte

- Hero-Banner-Asset freigeben und einbinden.
- Leistungs-/Branchen-/SecureOps-Inhaltsseiten (spätere Wellen).
- Städte-Kuration / Claims-Inventar ggf. von `audit-claims` auf `main` bringen.

## Offen & Risiken

- DNS/Horizons vs. dieses VPS-Deploy: aus Repo allein unklar.
- Stubs sind bewusst dünn — keine Feature-Versprechen.
- Interne Docs (`docs/*.md` außer STATUS/CHANGELOG) können noch alte Claims/Standorte-Wording enthalten (bewusst nicht in E1 umgeschrieben).
