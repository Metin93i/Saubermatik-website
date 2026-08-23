# STATUS · saubermatik-website

Living Doc nach Bau-Schritten. Stand: **2026-08-23** · Branch `feat/design-system-leitstand`.

## Live-Stand

- Design-System **Leitstand** Phase 1: Tokens, Space Grotesk + Inter, Hero C+A mit SecureOps-Statuskarte, weiße Trust-Karte, Navy-SecureOps, dunkle Footer-/CTA-Klammer.
- Header: Kundenportal vorübergehend ausgeblendet. Mobilmenü per Portal.

## Erledigt (dieser PR)

- Tokens `--nacht` / `--anthrazit` / `--navy` / `--secureops` / `--glow` / `--orange` / `--text-dunkel` / `--hell`.
- Fonts global: Space Grotesk Überschriften, Inter Body.
- Start-Hero kompakt dunkel + Blueprint + Foto-Karte + Statuskarte (Schild-Icon, keine Metriken).
- Trust-Karte überlappt Hero; Haftpflicht-Chip entfernt (3 Chips).
- Helle Sektionen `--hell`, Kartenradius 14/18, Raffstore-Badge Orange.
- SecureOps Start + `/secureops` Navy-System.
- Motion: Puls 2.4s, RevealOnScroll, `prefers-reduced-motion`.

## Nächste Schritte

- Kundenportal im Header wieder einblenden, sobald freigegeben.
- Originale Hero-JPEG 2124×2600 nachliefern, falls nötig.
- WhatsApp-Nummer bestätigen.
- Domain-Umstellung www.saubermatik-reinigung.de nach Merge.

## Offen & Risiken

- Hochgeladenes SecureOps-Asset war das volle Wortmarken-Logo (1024×188, schwarzer Grund); Schild 157×156 daraus links beschnitten.
- Historische Docs nennen noch gelöschte Komponenten.
- Kundenportal-URL weiter `getPlatformLoginUrl`.
