# Site-Architektur: Navigation & Seitenhierarchie

Stand: synchron mit `components/SiteHeader.tsx`, `components/SiteHeaderNav.tsx` und `components/SiteFooter.tsx`.

## Primäre Navigation (Desktop)

| Eintrag | Verhalten | Ziel |
|--------|-----------|------|
| **Logo (SAUBERMATIK)** | Link | `/` |
| **Leistungen** | Dropdown (`<details>`) | Einzel-`/leistungen/[slug]` + Link „Zur Leistungsübersicht“ → `/leistungen` |
| **Qualitätsmanagement** | Link | `/qualitaetsmanagement` |
| **Expertise** | Link | `/expertise` |
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
- Spalte **Unternehmen** (QM, Expertise, Über uns, Karriere, Kontakt).
- **Standorte & Region**: Grid aller **16** Städte (`/standorte/[city]`) **plus** Link **„Stuttgart (Metropolregion, Spezial-Hub)“** → **`/standorte/stuttgart`**.
- Unterzeile: Copyright, Leistungsübersicht, Kontakt.

## Seitenhierarchie (B2B)

```
/  (Startseite: Hero, Reinigung 4.0, Trust, Galerie, Testimonials, Standort-Kacheln, LeadFunnel)
├── /leistungen                    (Hub)
├── /leistungen/[slug]             (Spokes)
├── /leistungen/unterhaltsreinigung (SEO-Sonderseite)
├── /standorte/[city]              (16 lokale Spokes)
├── /standorte/stuttgart           (Hyper-Local Hub, SSG)
├── /expertise                     (EEAT / Standards / Software-Monitoring)
├── /qualitaetsmanagement          (QM / Garantie / DIN / SaaS-USP)
├── /ueber-uns                     (Story, Region, Innovation)
├── /karriere                      (Recruiting, Benefits)
├── /kontakt                       (Adresse, Karte, Dual-Funnel — siehe unten)
├── /api/lead                      (Kunden-Leads, nicht im Menü)
└── /api/career                    (Bewerbungen, nicht im Menü)
```

## Kontakt: Dual-Funnel (`/kontakt`)

| URL | Rechte Spalte |
|-----|----------------|
| `/kontakt` | **`LeadFunnel`** (Kunden-Leads, Anker **`#kontakt-anfrage`**) |
| `/kontakt?type=karriere` | **`CareerForm`** (Bewerbung, Anker **`#bewerbung`**) |

- **Server:** `app/kontakt/page.tsx` wertet **`searchParams`** aus (Überschriften, Toggle-Link Karriere ↔ Kunde).
- **Client:** `components/KontaktFormSwitch.tsx` nutzt **`useSearchParams`** innerhalb von **`<Suspense>`** (Next.js-Vorgabe), gerendert mit **`KontaktFormFallback`** passend zu `isCareer` aus dem Server-Snapshot.

## Deep-Link-Konvention

- Lead-Formular-Anker: **`#kontakt-anfrage`** (ID auf `LeadFunnel`).
- Von Unterseiten: **`/kontakt#kontakt-anfrage`** für zentrale Conversion (Kunde).
- Bewerbung: **`/kontakt?type=karriere#bewerbung`** (z. B. von `/karriere`).
- Startseite kann weiterhin lokal **`#kontakt-anfrage`** nutzen (Funnel im Hero-Bereich).

## Sticky Mobile CTA (zusätzlich)

Unterhalb von `md`: Leiste **Anrufen** / **Angebot** → `/kontakt#kontakt-anfrage` (siehe `MobileStickyCta.tsx`).
