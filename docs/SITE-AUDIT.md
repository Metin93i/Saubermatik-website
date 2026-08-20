# SITE-AUDIT · saubermatik-website

Stand: **2026-08-20** · Branch `feat/vertrieb-identitaet-audit`  
Methode: Unikate vollständig; Templates `standorte/[city]` und `standorte/[city]/[service]` plus Stichproben Meßstetten (radius/HQ) und Tübingen (projekt).  
Kategorien: **a** Widerspruch/Dopplung · **b** Claim-Verdacht · **c** Überflüssig  
Empfehlungen sind Vorschläge; außer FIX-SOFORT (b/Streichliste) in diesem PR nichts eigenmächtig geändert.

## Top-10

1. Start-FAQ nennt Tübingen bei **regelmäßiger** Reinigung; `CITY_TIERS.tuebingen` = **projekt** (38 km). — a · umformulieren (FAQ vs. Zwei-Radien)
2. HV-H1 „digitalem **Echtzeit**-Nachweis“ vs. „Umfang je Objekt“. — b · umformulieren
3. Startseite: `B2BOnboardingProcess` **und** neue Drei-Schritte-Leiste. — a · kürzen (eine Prozessstrecke)
4. `HeroQuickSearch.tsx` + `lib/hero/quick-search.ts` ohne Import. — c · entfernen
5. Drei Wege zu `/leistungen` auf der Startseite (Hero, Grid-Link, Markenband). — a · kürzen
6. Trust-Chip „Betriebshaftpflicht bis **10 Mio. €**“ (beauftragt; Nachweis intern). — b · behalten, Nachweis hinterlegen
7. `/expertise`: „**Echtzeit**-Monitoring“, Ausfälle „bevor sie zum Stillstand werden“. — b · umformulieren
8. Standort-Karten Startseite: einheitlich „Gebäudereinigung & Objektbetreuung“ auch für Projekt-Städte. — a · kürzen/differenzieren
9. HV-Seite: QR-Einstiegssatz **plus** bestehender QR-Absatz im Fließtext. — a · kürzen (eine QR-Erklärung)
10. `AppMockup` (Plattform-Text) überlappt SecureOps-Band. — a/c · kürzen

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

| Route | Befund | Kat. | Zitat/Fundstelle | Empfehlung |
|---|---|---|---|---|
| `/` | FAQ: Tübingen bei regelmäßiger Reinigung vs. `city-tiers` projekt | a | `lib/seo/startseite-faq.ts` F3; `lib/config/city-tiers.ts` tuebingen | umformulieren · Zwei-Radien |
| `/` | Onboarding-Komponente + „So einfach geht's“ | a | `B2BOnboardingProcess` und `StartHowItWorks` | kürzen · eine Strecke |
| `/` | Drei Leistungs-Einstiege | a | Hero-CTA, Grid „Alle Leistungen“, Markenband | kürzen · ein Hub-Link |
| `/` | Standort-Kacheln gleicher Text für Radius- und Projektstädte | a | `app/page.tsx` „Gebäudereinigung & Objektbetreuung“ | umformulieren · Zwei-Radien |
| `/` | Galerie ohne Bildunterschrift, nach SecureOps | c | `galleryImages` | behalten · echte Fotos, oder kürzen wenn Funnel zu lang |
| `/` | Trust 10 Mio. € | b | `StartTrustBar` | behalten · Nachweis intern |
| `/` | DGUV 112-198/199 | b | Trust-Leiste (beauftragt; auch Über-uns) | behalten |
| `/` | „Protokolle, die **jede Tour** dokumentieren“ | b | Reinigung-4.0-H2 | umformulieren · Absolutheit |
| `/` | AppMockup vs. SecureOps | a | `AppMockup.tsx` | kürzen |
| `/zielgruppen` | Drei Karten + AnfrageCta ohne Kostenlos-Zeile (nur Branchenseiten laut L) | — | `app/zielgruppen/page.tsx` | behalten |
| `/zielgruppen/hausverwaltungen` | H1 „All-in-One“ + „Echtzeit-Nachweis“ | b | Hero-H1 | umformulieren · Superlativ/Absolutheit |
| `/zielgruppen/hausverwaltungen` | QR-Sektion + QR im folgenden Artikel | a | neue Sektion + erster Artikel | kürzen |
| `/zielgruppen/hausverwaltungen` | „Sie kaufen ein System, nicht nur Stunden.“ | b | Abschnitt Mieterzufriedenheit | umformulieren |
| `/zielgruppen/praxen-gesundheitswesen` | FAQ + Onboarding + CTA | a | konkurrierende Abschlüsse | behalten · übliches LP-Muster |
| `/zielgruppen/buero-gewerbe` | analog Praxen | a | analog | behalten |
| `/leistungen` | Reihenfolge folgt `SERVICES` (Unterhalt, Glas, Raffstore, Grund, Rest) | — | `lib/config/services.ts` | behalten |
| `/leistungen/unterhaltsreinigung` | Neuer Raffstore-Querverweis + bestehende Branchen-Links | — | Hero | behalten |
| `/leistungen/fenster-glasreinigung` | FIX Glanzgarantie | b | Deep Dive Reinwasser | FIX-SOFORT erledigt |
| `/leistungen/raffstore-lamellenreinigung` | Privat + Gewerbe, überregional | a | vs. Kernradius | behalten · Projekt-Logik |
| `/leistungen/grundreinigung` | Template `LeistungDeepPage` | — | | behalten |
| `/leistungen/treppenhausreinigung` | „SLA-fähiges Angebot“ | b | funnelSubtitle | umformulieren · Jargon |
| `/leistungen/hausmeisterservice` | FIX „Jeder Einsatz“ | b | Intro | FIX-SOFORT erledigt |
| `/leistungen/gruenanlagenpflege` | „optisch auf Top-Niveau“ in `services.ts` | b | `SERVICES.summary/body` | umformulieren |
| `/leistungen/winterdienst` | „in der Saison nach vereinbarten Reaktionszeiten“ | — | | behalten · Umfang je Objekt |
| `/leistungen/fassadenreinigung` | TRBS/BG-BAU, DGUV | b | Deep Content | behalten · fachlich, nicht Streichliste |
| `/leistungen/entruempelung` | „versichert“ | b | `services.ts` summary | umformulieren/prüfen |
| `/leistungen/sonstiges` | Auffang-Kachel | c | Hub | behalten · Lead-Weg |
| `/leistungen/[slug]` | `notFound()` (alle Slugs dediziert) | c | `app/leistungen/[slug]/page.tsx` | behalten · Catch-all |
| `/secureops` | FAQ „selbst entwickelt“ / „täglich nutzen“ | b | `lib/seo/secureops-faq.ts` | behalten · Inhaber-Wahrheit prüfen |
| `/secureops` | „Wie Sie starten“ vs. Startseiten-3-Schritte | a | Dopplung Prozess | kürzen auf einer der beiden |
| `/qualitaetsmanagement` | Garantie verneinend | — | | behalten |
| `/expertise` | Echtzeit-Monitoring, Trustworthiness | b | pillars | umformulieren |
| `/ueber-uns` | DGUV-Datum 07/2026 | b | | behalten · Datum prüfen |
| `/karriere` | BrandSurface entfernt, keine Bildfläche | — | | behalten |
| `/kontakt` | Neue Erreichbarkeitszeile Mo–Sa 08–22 | — | Paket G | behalten |
| `/impressum` | NAP | — | | behalten |
| `/datenschutz` | | — | | behalten |
| `/wissen` + `/wissen/[term]` | Lexikon | c | teils dünn | behalten/kürzen je Term |
| `/standorte` | Hub | — | | behalten |
| `/standorte/stuttgart` | Projekt-Hub, B14/B27 | a | vs. Kernradius | behalten · explizit Projekt |
| Template `/standorte/[city]` | `ProjektRahmen` nur bei tier=projekt | — | `ProjektRahmen.tsx` | behalten |
| Template `/standorte/[city]` Stichprobe **Meßstetten** | HQ-Text, kürzeste Wege | — | `standort-deep-content` | behalten |
| Template `/standorte/[city]` Stichprobe **Tübingen** | ProjektRahmen + FAQ Startseite „regelmäßig Tübingen“ | a | Zwei-Radien vs. FAQ | umformulieren FAQ oder Tier |
| Template `/standorte/[city]/[service]` Stichprobe **messstetten/unterhaltsreinigung** | Radius-Logik | — | `MatrixDeepPage` | behalten |
| Template `/standorte/[city]/[service]` Stichprobe **tuebingen/fenster-glasreinigung** | Projekt + Glas passt | — | | behalten |
| Global Header | Kundenportal sichtbar, URL unverändert | — | Paket D | behalten · Portal-URL intern prüfen |
| Global Footer | Gebietstext analog B | — | `SiteFooter.tsx` | behalten |
| Global | `HeroQuickSearch` tot | c | keine Imports | entfernen |
| Global | `lib/hero/quick-search.ts` tot | c | nur Selbstbezug | entfernen |
| Docs | `docs/AUDIT-WEBSEITE.md` / `docs/seo_strategy.md` noch „Schwarzwald-Baar-Heuberg“ | — | historisches IST | behalten als Alt-Audit oder nachziehen |

## Hinweise

- Sichtbare Platzhalter (Bild folgt / TODO / folgt in Kürze / dashed Bildbox): in `app/` + `components/` nicht gefunden. `KontaktFormFallback` nutzt `border-dashed` als **Formular-Ladezustand**, kein Bildplatzhalter.
- JSON-LD FAQ auf `/` entspricht den vier sichtbaren Einträgen (`FaqPageJsonLd` + `startseite-faq.ts`).
- Keine Ratings/Sterne/Kundenlogos in diesem Schritt.
