# Site-Architektur: Navigation & Seitenhierarchie

Stand: synchron mit `components/SiteHeader.tsx`, `components/SiteHeaderNav.tsx` und `components/SiteFooter.tsx`.

## Primäre Navigation (Desktop)

| Eintrag | Verhalten | Ziel |
|--------|-----------|------|
| **Logo (SAUBERMATIK)** | Link | `/` |
| **Leistungen** | Dropdown (`<details>`) | Einzel-`/leistungen/[slug]` + Link „Zur Leistungsübersicht“ → `/leistungen` |
| **Qualitätsmanagement** | Link | `/qualitaetsmanagement` |
| **Über uns** | Link | `/ueber-uns` |
| **Karriere** | Link | `/karriere` |
| **Kontakt** | Link | `/kontakt` |
| **📞 Jetzt anrufen** | Primär-CTA (`tel:`) | aus `NEXT_PUBLIC_BUSINESS_PHONE`; Fallback: Link „Kontakt aufnehmen“ → `/kontakt` |

## Mobile Navigation

- **Hamburger** öffnet ein **rechts einfahrendes Flyout** (`role="dialog"`, Fokus-Hintergrund schließt, **Escape** schließt).
- Oben: **prominenter Anruf-Button** (oder Kontakt-Link ohne Telefon-Env).
- Darunter: alle **Unternehmens-Links** + aufklappbare **Leistungen**-Liste mit Deep-Links.
- **Body-Scroll-Lock**, solange das Menü offen ist.

## Footer

- Spalte **Leistungen** (alle Slugs).
- Spalte **Unternehmen** (QM, Über uns, Karriere, Kontakt).
- **Standorte & Region**: Grid aller **16** Städte (`/standorte/[city]`).
- Unterzeile: Copyright, Leistungsübersicht, Kontakt.

## Seitenhierarchie (B2B)

```
/  (Startseite: Hero, Reinigung 4.0, Trust, Galerie, Testimonials, Standort-Kacheln, LeadFunnel)
├── /leistungen                    (Hub)
├── /leistungen/[slug]             (Spokes)
├── /leistungen/unterhaltsreinigung (SEO-Sonderseite)
├── /standorte/[city]              (16 lokale Spokes)
├── /qualitaetsmanagement          (QM / Garantie / DIN / SaaS-USP)
├── /ueber-uns                     (Story, Region, Innovation)
├── /karriere                      (Recruiting, Benefits)
├── /kontakt                       (Adresse, Karte, LeadFunnel)
└── /api/lead                      (Lead-Submission, nicht im Menü)
```

## Deep-Link-Konvention

- Lead-Formular-Anker: **`#kontakt-anfrage`** (ID auf `LeadFunnel`).
- Von Unterseiten: **`/kontakt#kontakt-anfrage`** für zentrale Conversion.
- Startseite kann weiterhin lokal `#kontakt-anfrage` nutzen (Funnel im Hero-Bereich).

## Sticky Mobile CTA (zusätzlich)

Unterhalb von `md`: Leiste **Anrufen** / **Angebot** → `/kontakt#kontakt-anfrage` (siehe `MobileStickyCta.tsx`).
