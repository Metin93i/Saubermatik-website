# SITE-AUDIT · saubermatik-website

Stand: **2026-08-21** · Branch `fix/audit-top10` (Top-10-Umsetzung)  
Methode: Unikate vollständig; Templates `standorte/[city]` und `standorte/[city]/[service]` plus Stichproben Meßstetten (radius/HQ) und Tübingen (jetzt **radius**).  
Kategorien: **a** Widerspruch/Dopplung · **b** Claim-Verdacht · **c** Überflüssig  
Empfehlungen sind Vorschläge; außer FIX-SOFORT (b/Streichliste) im Identitäts-PR nichts eigenmächtig geändert. Top-10: Inhaber-Entscheidungen 2026-08-21.

## Top-10

| # | Befund | Kat. | Status |
|---|---|---|---|
| 1 | Start-FAQ nennt Tübingen bei regelmäßiger Reinigung; `CITY_TIERS.tuebingen` war **projekt** (38 km). | a | **ERLEDIGT** — Tier → `radius` (FAQ wortgetreu belassen) |
| 2 | HV-H1 „digitalem **Echtzeit**-Nachweis“ vs. „Umfang je Objekt“. | b | **ERLEDIGT** |
| 3 | Startseite: `B2BOnboardingProcess` und neue Drei-Schritte-Leiste. | a | **ERLEDIGT** — Komponente + Einbindungen entfernt |
| 4 | `HeroQuickSearch.tsx` + `lib/hero/quick-search.ts` ohne Import. | c | **ERLEDIGT** |
| 5 | Drei Wege zu `/leistungen` auf der Startseite (Hero, Grid-Link, Markenband). | a | **ERLEDIGT** — nur Markenband-CTA entfernt |
| 6 | Trust-Chip „Betriebshaftpflicht bis **10 Mio. €**“ (beauftragt; Police bestätigt). | b | **BESTÄTIGT/BEHALTEN** |
| 7 | `/expertise`: „**Echtzeit**-Monitoring“, Ausfälle „bevor sie zum Stillstand werden“. | b | **ERLEDIGT** |
| 8 | Standort-Karten einheitlich „Gebäudereinigung & Objektbetreuung“ auch für Projekt-Städte. | a | **ERLEDIGT** — Untertitel nach Tier |
| 9 | HV-Seite: QR-Einstiegssatz plus bestehender QR-Absatz im Fließtext. | a | **ERLEDIGT** |
| 10 | `AppMockup` (Plattform-Text) überlappt SecureOps-Band. | a/c | **ERLEDIGT** |

## FIX-SOFORT (dieser PR, Kategorie b)

| Route/Datei | Alt | Neu |
|---|---|---|
| `/` `app/page.tsx` | „Jeder Einsatz hinterlässt eine Spur“ | „Dokumentierte Einsätze hinterlassen eine Spur“ |
| `/leistungen/hausmeisterservice` | „Jeder Einsatz wird in der App dokumentiert“ | „Einsätze werden in der App dokumentiert“ |
| Template Stadt `lib/seo/standort-deep-content.ts` | „Jeder Einsatz in {Stadt} kann digital…“ | „Einsätze in {Stadt} können digital…“ |
| Template Leistung `lib/seo/leistung-deep-content.ts` | „Jeder Einsatz wird digital dokumentiert“ / „Jeder Einsatz wird unter Berücksichtigung von TRBS…“ | „Einsätze werden…“ |
| Matrix `lib/seo/matrix-service-tech.ts` | „jeder Einsatz wird protokolliert“ | „Einsätze werden protokolliert“ |
| `/leistungen/fenster-glasreinigung` + `SnippetBaitTable` | „streifenfreie Glanzgarantie“ | „streifenfreie Optik“ (+ verneinende Garantiezeile auf der Glas-LP) |

Verneinte Garantie (Glas/QM) belassen.

## Tabelle

| Route | Befund | Kat. | Zitat/Fundstelle | Empfehlung | Status |
|---|---|---|---|---|---|
| `/` | FAQ: Tübingen bei regelmäßiger Reinigung vs. `city-tiers` projekt | a | `lib/seo/startseite-faq.ts` F3; `lib/config/city-tiers.ts` tuebingen | umformulieren · Zwei-Radien | **ERLEDIGT** (Tier radius) |
| `/` | Onboarding-Komponente + „So einfach geht's“ | a | `B2BOnboardingProcess` und `StartHowItWorks` | kürzen · eine Strecke | **ERLEDIGT** |
| `/` | Drei Leistungs-Einstiege | a | Hero-CTA, Grid „Alle Leistungen“, Markenband | kürzen · ein Hub-Link | **ERLEDIGT** (Markenband-CTA raus) |
| `/` | Standort-Kacheln gleicher Text für Radius- und Projektstädte | a | `app/page.tsx` „Gebäudereinigung & Objektbetreuung“ | umformulieren · Zwei-Radien | **ERLEDIGT** |
| `/` | Galerie ohne Bildunterschrift, nach SecureOps | c | `galleryImages` | behalten · echte Fotos, oder kürzen wenn Funnel zu lang | behalten |
| `/` | Trust 10 Mio. € | b | `StartTrustBar` | behalten · Nachweis intern | **BESTÄTIGT/BEHALTEN** |
| `/` | DGUV 112-198/199 | b | Trust-Leiste (beauftragt; auch Über-uns) | behalten | behalten |
| `/` | „Protokolle, die **jede Tour** dokumentieren“ | b | Reinigung-4.0-H2 | umformulieren · Absolutheit | offen |
| `/` | AppMockup vs. SecureOps | a | `AppMockup.tsx` | kürzen | **ERLEDIGT** |
| `/zielgruppen` | Drei Karten + AnfrageCta ohne Kostenlos-Zeile (nur Branchenseiten laut L) | — | `app/zielgruppen/page.tsx` | behalten | behalten |
| `/zielgruppen/hausverwaltungen` | H1 „All-in-One“ + „Echtzeit-Nachweis“ | b | Hero-H1 | umformulieren · Superlativ/Absolutheit | **ERLEDIGT** (Echtzeit) |
| `/zielgruppen/hausverwaltungen` | QR-Sektion + QR im folgenden Artikel | a | neue Sektion + erster Artikel | kürzen | **ERLEDIGT** |
| `/zielgruppen/hausverwaltungen` | „Sie kaufen ein System, nicht nur Stunden.“ | b | Abschnitt Mieterzufriedenheit | umformulieren | offen |
| `/zielgruppen/praxen-gesundheitswesen` | FAQ + Onboarding + CTA | a | konkurrierende Abschlüsse | behalten · übliches LP-Muster | behalten |
| `/zielgruppen/buero-gewerbe` | analog Praxen | a | analog | behalten | behalten |
| `/leistungen` | Reihenfolge folgt `SERVICES` (Unterhalt, Glas, Raffstore, Grund, Rest) | — | `lib/config/services.ts` | behalten | behalten |
| `/leistungen/unterhaltsreinigung` | Neuer Raffstore-Querverweis + bestehende Branchen-Links | — | Hero | behalten | behalten |
| `/leistungen/fenster-glasreinigung` | FIX Glanzgarantie | b | Deep Dive Reinwasser | FIX-SOFORT erledigt | erledigt |
| `/leistungen/raffstore-lamellenreinigung` | Privat + Gewerbe, überregional | a | vs. Kernradius | behalten · Projekt-Logik | behalten |
| `/leistungen/grundreinigung` | Template `LeistungDeepPage` | — | | behalten | behalten |
| `/leistungen/treppenhausreinigung` | „SLA-fähiges Angebot“ | b | funnelSubtitle | umformulieren · Jargon | offen |
| `/leistungen/hausmeisterservice` | FIX „Jeder Einsatz“ | b | Intro | FIX-SOFORT erledigt | erledigt |
| `/leistungen/gruenanlagenpflege` | „optisch auf Top-Niveau“ in `services.ts` | b | `SERVICES.summary/body` | umformulieren | offen |
| `/leistungen/winterdienst` | „in der Saison nach vereinbarten Reaktionszeiten“ | — | | behalten · Umfang je Objekt | behalten |
| `/leistungen/fassadenreinigung` | TRBS/BG-BAU, DGUV | b | Deep Content | behalten · fachlich, nicht Streichliste | behalten |
| `/leistungen/entruempelung` | „versichert“ | b | `services.ts` summary | umformulieren/prüfen | offen |
| `/leistungen/sonstiges` | Auffang-Kachel | c | Hub | behalten · Lead-Weg | behalten |
| `/leistungen/[slug]` | `notFound()` (alle Slugs dediziert) | c | `app/leistungen/[slug]/page.tsx` | behalten · Catch-all | behalten |
| `/secureops` | FAQ „selbst entwickelt“ / „täglich nutzen“ | b | `lib/seo/secureops-faq.ts` | behalten · Inhaber-Wahrheit prüfen | behalten |
| `/secureops` | „Wie Sie starten“ vs. Startseiten-3-Schritte | a | Dopplung Prozess | kürzen auf einer der beiden | offen |
| `/qualitaetsmanagement` | Garantie verneinend | — | | behalten | behalten |
| `/expertise` | Echtzeit-Monitoring, Trustworthiness | b | pillars | umformulieren | **ERLEDIGT** |
| `/ueber-uns` | DGUV-Datum 07/2026 | b | | behalten · Datum prüfen | behalten |
| `/karriere` | BrandSurface entfernt, keine Bildfläche | — | | behalten | behalten |
| `/kontakt` | Neue Erreichbarkeitszeile Mo–Sa 08–22 | — | Paket G | behalten | behalten |
| `/impressum` | NAP | — | | behalten | behalten |
| `/datenschutz` | | — | | behalten | behalten |
| `/wissen` + `/wissen/[term]` | Lexikon | c | teils dünn | behalten/kürzen je Term | behalten |
| `/standorte` | Hub | — | | behalten | **ERLEDIGT** (Kachel-Untertitel nach Tier) |
| `/standorte/stuttgart` | Projekt-Hub, B14/B27 | a | vs. Kernradius | behalten · explizit Projekt | behalten |
| Template `/standorte/[city]` | `ProjektRahmen` nur bei tier=projekt | — | `ProjektRahmen.tsx` | behalten | behalten |
| Template `/standorte/[city]` Stichprobe **Meßstetten** | HQ-Text, kürzeste Wege | — | `standort-deep-content` | behalten | behalten |
| Template `/standorte/[city]` Stichprobe **Tübingen** | ProjektRahmen + FAQ Startseite „regelmäßig Tübingen“ | a | Zwei-Radien vs. FAQ | umformulieren FAQ oder Tier | **ERLEDIGT** (Tier radius; FAQ unverändert) |
| Template `/standorte/[city]/[service]` Stichprobe **messstetten/unterhaltsreinigung** | Radius-Logik | — | `MatrixDeepPage` | behalten | behalten |
| Template `/standorte/[city]/[service]` Stichprobe **tuebingen/fenster-glasreinigung** | Projekt + Glas passt | — | | behalten | behalten (jetzt Radius wie Balingen) |
| Global Header | Kundenportal sichtbar, URL unverändert | — | Paket D | behalten · Portal-URL intern prüfen | behalten |
| Global Footer | Gebietstext analog B | — | `SiteFooter.tsx` | behalten | behalten |
| Global | `HeroQuickSearch` tot | c | keine Imports | entfernen | **ERLEDIGT** |
| Global | `lib/hero/quick-search.ts` tot | c | nur Selbstbezug | entfernen | **ERLEDIGT** |
| Docs | `docs/AUDIT-WEBSEITE.md` / `docs/seo_strategy.md` noch „Schwarzwald-Baar-Heuberg“ | — | historisches IST | behalten als Alt-Audit oder nachziehen | behalten |

## Hinweise

- Sichtbare Platzhalter (Bild folgt / TODO / folgt in Kürze / dashed Bildbox): in `app/` + `components/` nicht gefunden. `KontaktFormFallback` nutzt `border-dashed` als **Formular-Ladezustand**, kein Bildplatzhalter.
- JSON-LD FAQ auf `/` entspricht den vier sichtbaren Einträgen (`FaqPageJsonLd` + `startseite-faq.ts`).
- Keine Ratings/Sterne/Kundenlogos in diesem Schritt.
