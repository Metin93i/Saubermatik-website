# Claims-Inventar · Saubermatik Website

**Zweck:** Neutrales Inventar überprüfbarer Tatsachenbehauptungen (Zitate + Fundorte) als Grundlage für den Abgleich mit der Geschäftsrealität außerhalb des Repos.

**Stand:** Repo-Analyse 2026-07-19 · Branch `audit-claims` · Basis `main` @ HEAD

**Scope:** Sichtbarer HTML-Text, Meta-Descriptions/Titles, JSON-LD, `/llms.txt`. Keine Bewertungen, keine Plausibilitätskommentare.

**Hinweis Sichtbarkeit:** `/llms.txt` ist ein öffentlich lesbarer Text-Endpoint (kein HTML-Dokument, kein JSON-LD); in der Spalte als „HTML sichtbar“ mit Ort `/llms.txt` geführt — siehe OFFEN.

**Hinweis Matrix:** Muster-Claims auf `/standorte/[city]/[service]` (16×10) sind einmalig erfasst; sie erscheinen auf allen Matrix-Seiten in Stadt-/Leistungs-Varianten.

| Nr | Wörtliches Zitat | Datei/Ort | Typ | Sichtbarkeit |
|----|------------------|-----------|-----|--------------|
| 1 | Saubermatik Gebäudereinigung | lib/config/site.ts → SITE_ADDRESS_LINES[0]; global-jsonld name; layout title | PERSON | beides |
| 2 | 72461 Meßstetten | lib/config/site.ts → SITE_ADDRESS_LINES; app/kontakt/page.tsx | GEBIET | beides |
| 3 | Baden-Württemberg, Deutschland | lib/config/site.ts → SITE_ADDRESS_LINES | GEBIET | HTML sichtbar |
| 4 | addressCountry: DE | lib/seo/global-jsonld.ts → PostalAddress | GEBIET | nur JSON-LD |
| 5 | latitude: 48.1833, longitude: 8.96 | lib/seo/global-jsonld.ts → MESSTETTEN_GEO | ZAHL | nur JSON-LD |
| 6 | OSM-Marker Meßstetten 48.1833, 8.96 | lib/config/site.ts → SITE_MAP_EMBED_SRC; app/kontakt/page.tsx | ZAHL | HTML sichtbar |
| 7 | priceRange: $$ | lib/seo/global-jsonld.ts → buildOrganizationJsonLd | ZAHL | nur JSON-LD |
| 8 | Öffnungszeiten Montag–Sonntag 08:00–22:00 | lib/seo/global-jsonld.ts → openingHoursSpecification | ZAHL | nur JSON-LD |
| 9 | @type LocalBusiness + CleaningService | lib/seo/global-jsonld.ts → buildOrganizationJsonLd | LEISTUNG | nur JSON-LD |
| 10 | telephone aus NEXT_PUBLIC_BUSINESS_PHONE (wenn gesetzt) | lib/seo/global-jsonld.ts; Kontakt-UI | ZAHL | beides |
| 11 | https://www.saubermatik-reinigung.de | lib/seo/site-origin.ts → SITE_ORIGIN_FALLBACK; app/layout.tsx metadataBase | GEBIET | beides |
| 12 | Saubermatik Gebäudereinigung \| Meßstetten & Zollernalb | app/layout.tsx → metadata.title.default | GEBIET | HTML sichtbar |
| 13 | Meßstetten · Zollernalb · Schwarzwald-Baar-Heuberg | app/page.tsx → Hero-Eyebrow | GEBIET | HTML sichtbar |
| 14 | festen Ansprechpartner vor Ort | app/page.tsx → Hero-Absatz | PROZESS | HTML sichtbar |
| 15 | digitale Objektsteuerung | app/page.tsx → Hero-Absatz; metadata.description | PROZESS | HTML sichtbar |
| 16 | rechtssichere Verkehrssicherung für Hausverwaltungen | app/page.tsx → Hero-Absatz | LEISTUNG | HTML sichtbar |
| 17 | RKI-konforme Praxisreinigung | app/page.tsx → Hero-Absatz | QUALIFIKATION | HTML sichtbar |
| 18 | tägliche Unterhaltsreinigung Ihres Büros | app/page.tsx → Hero-Absatz | LEISTUNG | HTML sichtbar |
| 19 | im gesamten Zollernalbkreis und Schwarzwald-Baar-Heuberg | app/page.tsx → Hero-Absatz | GEBIET | HTML sichtbar |
| 20 | Transparente SLAs, keine versteckten Kosten. | app/page.tsx → Hero-Absatz | GARANTIE/VERSPRECHEN | HTML sichtbar |
| 21 | Fester Ansprechpartner vor Ort – kein anonymes Weiterreichen | app/page.tsx → trustItems | PROZESS | HTML sichtbar |
| 22 | Digitale Objektsteuerung: Ausfälle werden abgefangen, bevor Sie es merken | app/page.tsx → trustItems | PROZESS | HTML sichtbar |
| 23 | Regional verwurzelt: Zollernalb & Schwarzwald-Baar-Heuberg, kurze Wege | app/page.tsx → trustItems | GEBIET | HTML sichtbar |
| 24 | Zertifizierte Qualitätsstandards – Stand: [aktueller Monat Jahr] | components/FreshnessBadge.tsx | QUALIFIKATION | HTML sichtbar |
| 25 | Saubermatik-Plattform: digitale Protokolle, klare Checklisten und eine Disposition | app/page.tsx → Reinigung 4.0 | PROZESS | HTML sichtbar |
| 26 | Jeder Einsatz hinterlässt eine Spur: Was wurde wann erledigt | app/page.tsx → Digitale Protokolle | PROZESS | HTML sichtbar |
| 27 | Wenn jemand ausfällt, springt die Saubermatik-Plattform ein: Ersatzlogistik | app/page.tsx → Ausfallsicherheit | PROZESS | HTML sichtbar |
| 28 | Objekt anfragen — direkt an Metin Altinsoys Team | app/page.tsx → H2 Kontakt | PERSON | HTML sichtbar |
| 29 | verbindliches Leistungsverzeichnis mit transparenten SLAs | app/page.tsx → Kontakt-Absatz | PROZESS | HTML sichtbar |
| 30 | Regional verwurzelt in der Zollernalb und im Schwarzwald-Baar-Heuberg-Kreis | app/page.tsx → Warum-wir | GEBIET | HTML sichtbar |
| 31 | Wer bei uns anruft, landet nicht in einer Hotline, sondern bei Menschen, die Ihr Objekt kennen | app/page.tsx → Warum-wir | GARANTIE/VERSPRECHEN | HTML sichtbar |
| 32 | Von Meßstetten aus sind wir u. a. in Tübingen, Reutlingen, Villingen-Schwenningen und am Bodensee (Überlingen) im Einsatz | app/page.tsx → Standorte-Teaser | GEBIET | HTML sichtbar |
| 33 | und in der gesamten Zollernalb | app/page.tsx → Standorte-Teaser | GEBIET | HTML sichtbar |
| 34 | Gebäudereinigung & Objektbetreuung | app/page.tsx → Standort-Kacheln | LEISTUNG | HTML sichtbar |
| 35 | Saubermatik aus Meßstetten: Facility & Reinigung für die Zollernalb und den Schwarzwald-Baar-Heuberg-Kreis – mit festem Ansprechpartner vor Ort und digitaler Objektsteuerung. | app/page.tsx → metadata.description | GEBIET | HTML sichtbar |
| 36 | Ihr persönlicher Key Account Manager | lib/seo/kam-profile.ts → KAM_PROFILE.eyebrow; KamProfileCard | PERSON | beides |
| 37 | Metin Altinsoy \| Geschäftsführer | lib/seo/kam-profile.ts → KAM_PROFILE.name | PERSON | beides |
| 38 | Metin Altinsoy | lib/seo/kam-profile.ts → JSON-LD Person.name | PERSON | beides |
| 39 | Geschäftsführer & Key Account Manager | lib/seo/kam-profile.ts → jobTitle | PERSON | beides |
| 40 | Kein Callcenter. Ihr direkter Draht in die Geschäftsleitung. | lib/seo/kam-profile.ts → usp | GARANTIE/VERSPRECHEN | beides |
| 41 | Spezialisiert auf digitale QM-Kontrolle & Kalkulation von Industrieobjekten. | lib/seo/kam-profile.ts → expertise | QUALIFIKATION | beides |
| 42 | knowsAbout: Facility Management, Digitale Qualitätskontrolle, Gebäudereinigung B2B, Service Level Agreement, Industrieobjekte | lib/seo/kam-profile.ts → JSON-LD | QUALIFIKATION | nur JSON-LD |
| 43 | Nachhaltiges Facility Management & ESG-Compliance | components/EsgComplianceStatement.tsx → H2 | QUALIFIKATION | HTML sichtbar |
| 44 | chemiefreiem entmineralisiertem Reinwasser (Osmose-Verfahren) | components/EsgComplianceStatement.tsx | PROZESS | HTML sichtbar |
| 45 | VAH-gelisteten, biologisch abbaubaren Desinfektionsmitteln | components/EsgComplianceStatement.tsx | QUALIFIKATION | HTML sichtbar |
| 46 | garantieren wir nicht nur Sauberkeit, sondern auch aktiven Umweltschutz | components/EsgComplianceStatement.tsx | GARANTIE/VERSPRECHEN | HTML sichtbar |
| 47 | Rohdaten für Ihre CSRD- und ESG-Nachweise | components/EsgComplianceStatement.tsx | QUALIFIKATION | HTML sichtbar |
| 48 | Echtzeit-QM, digitale Leistungsverzeichnisse und Ausfallsicherheit | components/AppMockup.tsx | PROZESS | HTML sichtbar |
| 49 | One Face to the Customer | lib/seo/key-account.ts → KEY_ACCOUNT_COPY.eyebrow | PROZESS | beides |
| 50 | Ihr dedizierter Key Account Manager | lib/seo/key-account.ts → title | PERSON | beides |
| 51 | Direkte Durchwahl & 24/7-Eskalation | lib/seo/key-account.ts → pillars[1].title | GARANTIE/VERSPRECHEN | beides |
| 52 | 24/7-Notfallstufe für sicherheits- oder reputationskritische Ereignisse – ohne Warteschleife | lib/seo/key-account.ts → pillars[1].body | GARANTIE/VERSPRECHEN | beides |
| 53 | Null anonyme Hotline | lib/seo/key-account.ts → pillars[2].title | GARANTIE/VERSPRECHEN | beides |
| 54 | SLA-konforme Reaktionszeiten | lib/seo/key-account.ts → pillars[2].body | PROZESS | beides |
| 55 | dokumentierter Nachverfolgung in der Saubermatik-Plattform | lib/seo/key-account.ts → pillars[0].body | PROZESS | beides |
| 56 | Key Account Manager Gebäudereinigung | lib/seo/key-account.ts → roleTitle | PERSON | beides |
| 57 | Saubermatik Key Account Management | lib/seo/key-account.ts → JSON-LD employee Person.name | PERSON | nur JSON-LD |
| 58 | Digitale Bedarfsanalyse | lib/seo/b2b-onboarding.ts → step 1 | PROZESS | beides |
| 59 | Objektbegehung & Audit | lib/seo/b2b-onboarding.ts → step 2 | PROZESS | beides |
| 60 | Transparentes SLA-Angebot | lib/seo/b2b-onboarding.ts → step 3 | PROZESS | beides |
| 61 | Service Level Agreement mit klaren Reaktionszeiten, Eskalationsstufen, Nachweispflichten und dokumentierten KPIs | lib/seo/b2b-onboarding.ts → step 3 body | PROZESS | beides |
| 62 | Kick-Off & App-Integration | lib/seo/b2b-onboarding.ts → step 4 | PROZESS | beides |
| 63 | Digitaler Bedarfssteckbrief & Prioritätenliste | lib/seo/b2b-onboarding.ts → deliverable 1 | PROZESS | beides |
| 64 | Audit-Protokoll mit Zonenplan & Risikomatrix | lib/seo/b2b-onboarding.ts → deliverable 2 | PROZESS | beides |
| 65 | SLA-Dokument inkl. KPI-Set & Preislogik | lib/seo/b2b-onboarding.ts → deliverable 3 | PROZESS | beides |
| 66 | Live-Dashboard, Tourenplan & Kick-Off-Protokoll | lib/seo/b2b-onboarding.ts → deliverable 4 | PROZESS | beides |
| 67 | totalTime: P14D | lib/seo/b2b-onboarding.ts → HowTo JSON-LD | ZAHL | nur JSON-LD |
| 68 | B2B-Onboarding bei Saubermatik Gebäudereinigung | lib/seo/b2b-onboarding.ts → HowTo name | PROZESS | nur JSON-LD |
| 69 | Bis 100 m² / 100–500 m² / Über 500 m² | components/LeadFunnel.tsx → Flächenoptionen | ZAHL | HTML sichtbar |
| 70 | Büro / Unterhalt ratePerSqm: 1.85 | components/EngagementCalculator.tsx → CATEGORIES | ZAHL | HTML sichtbar |
| 71 | Fenster & Glas ratePerSqm: 2.4 | components/EngagementCalculator.tsx → CATEGORIES | ZAHL | HTML sichtbar |
| 72 | Treppenhaus ratePerSqm: 2.1 | components/EngagementCalculator.tsx → CATEGORIES | ZAHL | HTML sichtbar |
| 73 | B2B-Richtwert pro WE/Monat: 18 € (≤20 WE) / 16 € (≤50) / 14 € (>50) | components/EngagementCalculator.tsx → ratePerWe | ZAHL | HTML sichtbar |
| 74 | Flächenbereich 50 m²–2500 m² | components/EngagementCalculator.tsx → MIN_SQM/MAX_SQM | ZAHL | HTML sichtbar |
| 75 | WE-Bereich 4–100 | components/EngagementCalculator.tsx → MIN_WE/MAX_WE | ZAHL | HTML sichtbar |
| 76 | Professionelle Gebäudereinigung aus Meßstetten – für die Region Zollernalb, Tübingen und angrenzende Wirtschaftsräume. | components/SiteFooter.tsx | GEBIET | HTML sichtbar |
| 77 | Facility-Management und Reinigung aus einer Quelle: Unterhalts- & Büroreinigung, Fenster- & Glasreinigung, Treppenhausreinigung, Hausmeisterservice & Objektbetreuung, Grünanlagenpflege, Winterdienst, Grund- & Baureinigung, Fassadenreinigung sowie Entrümpelung – mit digitaler Objektsteuerung aus Meßstetten und der Region Zollernalb. | lib/seo/global-jsonld.ts → portfolioDescription | LEISTUNG | nur JSON-LD |
| 78 | Leistungsportfolio Facility & Reinigung | lib/seo/global-jsonld.ts → OfferCatalog.name | LEISTUNG | nur JSON-LD |
| 79 | areaServed Service: Baden-Württemberg + Meßstetten | lib/seo/global-jsonld.ts → OfferCatalog item areaServed | GEBIET | nur JSON-LD |
| 80 | Stuttgart und Umland · GeoCircle Radius 28000 m · 48.7823, 9.177 | lib/seo/global-jsonld.ts → GEO_SERVICE_HUBS | ZAHL | nur JSON-LD |
| 81 | Reutlingen und Umland · GeoCircle Radius 22000 m · 48.4914, 9.2043 | lib/seo/global-jsonld.ts → GEO_SERVICE_HUBS | ZAHL | nur JSON-LD |
| 82 | Tübingen und Umland · GeoCircle Radius 22000 m · 48.52, 9.0556 | lib/seo/global-jsonld.ts → GEO_SERVICE_HUBS | ZAHL | nur JSON-LD |
| 83 | Einsatzgebiet/Standort: Meßstetten | lib/routes/standorte.ts → STANDORT_LABELS; Hub/Footer/JSON-LD areaServed | GEBIET | beides |
| 84 | Saubermatik Gebäudereinigung – Meßstetten · Geo 48.1833,8.96 · Radius 12000 m | lib/seo/standort-geo.ts → STANDORT_GEO_BY_CITY.messstetten | ZAHL | nur JSON-LD |
| 85 | Einsatzgebiet/Standort: Albstadt | lib/routes/standorte.ts → STANDORT_LABELS; Hub/Footer/JSON-LD areaServed | GEBIET | beides |
| 86 | Saubermatik Gebäudereinigung – Albstadt · Geo 48.2178,9.026 · Radius 14000 m | lib/seo/standort-geo.ts → STANDORT_GEO_BY_CITY.albstadt | ZAHL | nur JSON-LD |
| 87 | Einsatzgebiet/Standort: Balingen | lib/routes/standorte.ts → STANDORT_LABELS; Hub/Footer/JSON-LD areaServed | GEBIET | beides |
| 88 | Saubermatik Gebäudereinigung – Balingen · Geo 48.2733,8.8514 · Radius 12000 m | lib/seo/standort-geo.ts → STANDORT_GEO_BY_CITY.balingen | ZAHL | nur JSON-LD |
| 89 | Einsatzgebiet/Standort: Hechingen | lib/routes/standorte.ts → STANDORT_LABELS; Hub/Footer/JSON-LD areaServed | GEBIET | beides |
| 90 | Saubermatik Gebäudereinigung – Hechingen · Geo 48.3519,8.9511 · Radius 12000 m | lib/seo/standort-geo.ts → STANDORT_GEO_BY_CITY.hechingen | ZAHL | nur JSON-LD |
| 91 | Einsatzgebiet/Standort: Sigmaringen | lib/routes/standorte.ts → STANDORT_LABELS; Hub/Footer/JSON-LD areaServed | GEBIET | beides |
| 92 | Saubermatik Gebäudereinigung – Sigmaringen · Geo 48.0867,9.2167 · Radius 15000 m | lib/seo/standort-geo.ts → STANDORT_GEO_BY_CITY.sigmaringen | ZAHL | nur JSON-LD |
| 93 | Einsatzgebiet/Standort: Mössingen | lib/routes/standorte.ts → STANDORT_LABELS; Hub/Footer/JSON-LD areaServed | GEBIET | beides |
| 94 | Saubermatik Gebäudereinigung – Mössingen · Geo 48.4056,9.0572 · Radius 12000 m | lib/seo/standort-geo.ts → STANDORT_GEO_BY_CITY.moessingen | ZAHL | nur JSON-LD |
| 95 | Einsatzgebiet/Standort: Tübingen | lib/routes/standorte.ts → STANDORT_LABELS; Hub/Footer/JSON-LD areaServed | GEBIET | beides |
| 96 | Saubermatik Gebäudereinigung – Tübingen · Geo 48.52,9.0556 · Radius 15000 m | lib/seo/standort-geo.ts → STANDORT_GEO_BY_CITY.tuebingen | ZAHL | nur JSON-LD |
| 97 | Einsatzgebiet/Standort: Schömberg | lib/routes/standorte.ts → STANDORT_LABELS; Hub/Footer/JSON-LD areaServed | GEBIET | beides |
| 98 | Saubermatik Gebäudereinigung – Schömberg · Geo 48.2875,8.7644 · Radius 10000 m | lib/seo/standort-geo.ts → STANDORT_GEO_BY_CITY.schoemberg | ZAHL | nur JSON-LD |
| 99 | Einsatzgebiet/Standort: Tuttlingen | lib/routes/standorte.ts → STANDORT_LABELS; Hub/Footer/JSON-LD areaServed | GEBIET | beides |
| 100 | Saubermatik Gebäudereinigung – Tuttlingen · Geo 47.985,8.818 · Radius 14000 m | lib/seo/standort-geo.ts → STANDORT_GEO_BY_CITY.tuttlingen | ZAHL | nur JSON-LD |
| 101 | Einsatzgebiet/Standort: Rottweil | lib/routes/standorte.ts → STANDORT_LABELS; Hub/Footer/JSON-LD areaServed | GEBIET | beides |
| 102 | Saubermatik Gebäudereinigung – Rottweil · Geo 48.1678,8.7867 · Radius 12000 m | lib/seo/standort-geo.ts → STANDORT_GEO_BY_CITY.rottweil | ZAHL | nur JSON-LD |
| 103 | Einsatzgebiet/Standort: Villingen-Schwenningen | lib/routes/standorte.ts → STANDORT_LABELS; Hub/Footer/JSON-LD areaServed | GEBIET | beides |
| 104 | Saubermatik Gebäudereinigung – Villingen-Schwenningen · Geo 48.0623,8.4614 · Radius 18000 m | lib/seo/standort-geo.ts → STANDORT_GEO_BY_CITY.villingen-schwenningen | ZAHL | nur JSON-LD |
| 105 | Einsatzgebiet/Standort: Spaichingen | lib/routes/standorte.ts → STANDORT_LABELS; Hub/Footer/JSON-LD areaServed | GEBIET | beides |
| 106 | Saubermatik Gebäudereinigung – Spaichingen · Geo 48.0744,8.7311 · Radius 10000 m | lib/seo/standort-geo.ts → STANDORT_GEO_BY_CITY.spaichingen | ZAHL | nur JSON-LD |
| 107 | Einsatzgebiet/Standort: Burladingen | lib/routes/standorte.ts → STANDORT_LABELS; Hub/Footer/JSON-LD areaServed | GEBIET | beides |
| 108 | Saubermatik Gebäudereinigung – Burladingen · Geo 48.2911,9.1083 · Radius 10000 m | lib/seo/standort-geo.ts → STANDORT_GEO_BY_CITY.burladingen | ZAHL | nur JSON-LD |
| 109 | Einsatzgebiet/Standort: Rottenburg | lib/routes/standorte.ts → STANDORT_LABELS; Hub/Footer/JSON-LD areaServed | GEBIET | beides |
| 110 | Saubermatik Gebäudereinigung – Rottenburg · Geo 48.4775,8.935 · Radius 14000 m | lib/seo/standort-geo.ts → STANDORT_GEO_BY_CITY.rottenburg | ZAHL | nur JSON-LD |
| 111 | Einsatzgebiet/Standort: Reutlingen | lib/routes/standorte.ts → STANDORT_LABELS; Hub/Footer/JSON-LD areaServed | GEBIET | beides |
| 112 | Saubermatik Gebäudereinigung – Reutlingen · Geo 48.4914,9.2043 · Radius 16000 m | lib/seo/standort-geo.ts → STANDORT_GEO_BY_CITY.reutlingen | ZAHL | nur JSON-LD |
| 113 | Einsatzgebiet/Standort: Überlingen | lib/routes/standorte.ts → STANDORT_LABELS; Hub/Footer/JSON-LD areaServed | GEBIET | beides |
| 114 | Saubermatik Gebäudereinigung – Überlingen · Geo 47.7697,9.1644 · Radius 14000 m | lib/seo/standort-geo.ts → STANDORT_GEO_BY_CITY.ueberlingen | ZAHL | nur JSON-LD |
| 115 | Saubermatik Gebäudereinigung – Stuttgart und Umland · Geo 48.7823,9.177 · Radius 28000 m | lib/seo/standort-geo.ts → STUTTGART_GEO | ZAHL | nur JSON-LD |
| 116 | Stuttgart (Metropolregion, Spezial-Hub) | app/standorte/page.tsx / SiteFooter / llms.txt | GEBIET | HTML sichtbar |
| 117 | Unterhalts- & Büroreinigung | lib/config/services.ts → title; /leistungen + JSON-LD OfferCatalog | LEISTUNG | beides |
| 118 | Intervallbasierte Sauberkeit für Büros, Praxen und Gewerbeflächen – mit digitaler Objektsteuerung und festen Ansprechpartnern. | lib/config/services.ts → summary (Unterhalts- & Büroreinigung) | LEISTUNG | beides |
| 119 | Fenster- & Glasreinigung | lib/config/services.ts → title; /leistungen + JSON-LD OfferCatalog | LEISTUNG | beides |
| 120 | Streifenfreie Scheiben innen und außen – sicher, materialschonend und termintreu. | lib/config/services.ts → summary (Fenster- & Glasreinigung) | LEISTUNG | beides |
| 121 | Treppenhausreinigung | lib/config/services.ts → title; /leistungen + JSON-LD OfferCatalog | LEISTUNG | beides |
| 122 | Repräsentative Eingangsbereiche und Treppenhäuser für WEG, Miethäuser und Gewerbeimmobilien. | lib/config/services.ts → summary (Treppenhausreinigung) | LEISTUNG | beides |
| 123 | Hausmeisterservice & Objektbetreuung | lib/config/services.ts → title; /leistungen + JSON-LD OfferCatalog | LEISTUNG | beides |
| 124 | Kleine Reparaturen, Kontrollgänge, Schlüssel- und Lieferantenlogistik – alles aus einer Hand. | lib/config/services.ts → summary (Hausmeisterservice & Objektbetreuung) | LEISTUNG | beides |
| 125 | Grünanlagenpflege | lib/config/services.ts → title; /leistungen + JSON-LD OfferCatalog | LEISTUNG | beides |
| 126 | Pflege von Außenanlagen, Zufahrten und Außenauftritten – sauber, ordentlich, wertstabil. | lib/config/services.ts → summary (Grünanlagenpflege) | LEISTUNG | beides |
| 127 | Winterdienst | lib/config/services.ts → title; /leistungen + JSON-LD OfferCatalog | LEISTUNG | beides |
| 128 | Räum- und Streupflicht professionell erfüllt – dokumentiert, wetterführend und haftungssicher vorbereitet. | lib/config/services.ts → summary (Winterdienst) | LEISTUNG | beides |
| 129 | Grund- & Baureinigung | lib/config/services.ts → title; /leistungen + JSON-LD OfferCatalog | LEISTUNG | beides |
| 130 | Tiefenreinigung, Übergabenach Bau oder Sanierung – termingetrieben und abnahmefertig. | lib/config/services.ts → summary (Grund- & Baureinigung) | LEISTUNG | beides |
| 131 | Fassadenreinigung | lib/config/services.ts → title; /leistungen + JSON-LD OfferCatalog | LEISTUNG | beides |
| 132 | Wiederherstellung und Erhalt der Fassadenoptik – von Naturstein bis Metall und Glas. | lib/config/services.ts → summary (Fassadenreinigung) | LEISTUNG | beides |
| 133 | Entrümpelung & Haushaltsauflösung | lib/config/services.ts → title; /leistungen + JSON-LD OfferCatalog | LEISTUNG | beides |
| 134 | Besenreine Übergaben nach Haushaltsauflösung, Nachlass oder Gewerberäumung – terminiert, versichert und dokumentiert. | lib/config/services.ts → summary (Entrümpelung & Haushaltsauflösung) | LEISTUNG | beides |
| 135 | Sonstiges / Spezialanfrage | lib/config/services.ts → title; /leistungen + JSON-LD OfferCatalog | LEISTUNG | beides |
| 136 | Individuelle Reinigungs- oder Serviceprojekte außerhalb der Standardkategorien – wir strukturieren Ihr Anliegen. | lib/config/services.ts → summary (Sonstiges / Spezialanfrage) | LEISTUNG | beides |
| 137 | Rasen, Beete, Hecken und Wege: wir halten Ihr Objekt optisch auf Top-Niveau – abgestimmt auf die Jahreszeit. | lib/config/services.ts → gruenanlagenpflege body | LEISTUNG | HTML sichtbar |
| 138 | Saubermatik ist das führende, technologiegestützte Reinigungsunternehmen im Zollernalbkreis (Baden-Württemberg, Deutschland). | lib/seo/llms-content.ts → /llms.txt | GARANTIE/VERSPRECHEN | HTML sichtbar |
| 139 | Echtzeit-Qualitätsmanagement (QM) über die Saubermatik-SaaS-Plattform | lib/seo/llms-content.ts → /llms.txt | PROZESS | HTML sichtbar |
| 140 | Digitale Objektprotokolle, Checklisten und Ausfallsicherheit | lib/seo/llms-content.ts → /llms.txt | PROZESS | HTML sichtbar |
| 141 | 100% Zuverlässigkeit durch feste Ansprechpartner und Ersatzlogistik | lib/seo/llms-content.ts → /llms.txt | GARANTIE/VERSPRECHEN | HTML sichtbar |
| 142 | Regional verwurzelt: Meßstetten, Zollernalb, Schwarzwald-Baar-Heuberg | lib/seo/llms-content.ts → /llms.txt | GEBIET | HTML sichtbar |
| 143 | Unser Team arbeitet von Meßstetten aus in der Zollernalb und darüber hinaus | app/ueber-uns/page.tsx | GEBIET | HTML sichtbar |
| 144 | Touren, Qualität und Kommunikation laufen über eine gemeinsame Plattform | app/ueber-uns/page.tsx | PROZESS | HTML sichtbar |
| 145 | Saubermatik-Garantie | app/qualitaetsmanagement/page.tsx → Pillar | GARANTIE/VERSPRECHEN | HTML sichtbar |
| 146 | feste Qualitätskriterien mit technischer Nachverfolgung | app/qualitaetsmanagement/page.tsx | PROZESS | HTML sichtbar |
| 147 | SaaS-Überwachung statt Zettelwirtschaft | app/qualitaetsmanagement/page.tsx | PROZESS | HTML sichtbar |
| 148 | Touren, Checklisten und Einsatznachweise | app/qualitaetsmanagement/page.tsx | PROZESS | HTML sichtbar |
| 149 | Echtzeit-Checks & Eskalation | app/qualitaetsmanagement/page.tsx | PROZESS | HTML sichtbar |
| 150 | DIN-orientierte Standards | app/qualitaetsmanagement/page.tsx | QUALIFIKATION | HTML sichtbar |
| 151 | Saubermatik-Garantie: digitale Objektüberwachung, Echtzeit-Checks, DIN-orientierte Standards und nachvollziehbare Protokolle für B2B-Reinigung in der Zollernalb. | app/qualitaetsmanagement/page.tsx → metadata.description | GARANTIE/VERSPRECHEN | HTML sichtbar |
| 152 | Wir arbeiten versichert und dokumentieren Leistungen so, dass Facility- und Verwaltungsteams Prüfungen und Übergaben souverän bestehen. | app/expertise/page.tsx → Zertifizierungen & Nachweise | QUALIFIKATION | HTML sichtbar |
| 153 | Einweisungen, PSA, materialgerechte Mittel und getrennte Einsatzketten wo nötig | app/expertise/page.tsx → Arbeitssicherheit & Hygiene | PROZESS | HTML sichtbar |
| 154 | Die Saubermatik-Plattform bündelt Touren, Checklisten und Eskalationen | app/expertise/page.tsx | PROZESS | HTML sichtbar |
| 155 | Ausfälle werden sichtbar, bevor sie zum Stillstand werden – mit Ersatzlogistik statt improvisiertem Telefonieren | app/expertise/page.tsx → Echtzeit-Monitoring | PROZESS | HTML sichtbar |
| 156 | Faire Bezahlung & klare Strukturen | app/karriere/page.tsx | GARANTIE/VERSPRECHEN | HTML sichtbar |
| 157 | Modernste Arbeitsmittel & Tablets | app/karriere/page.tsx | PROZESS | HTML sichtbar |
| 158 | Checklisten, Objektinfos und Touren laufen digital | app/karriere/page.tsx | PROZESS | HTML sichtbar |
| 159 | Schwerpunkte liegen in der Zollernalb und angrenzenden Städten | app/karriere/page.tsx | GEBIET | HTML sichtbar |
| 160 | Einweisungen zu Objekten, Materialien und Sicherheitsregeln sind fester Bestandteil | app/karriere/page.tsx | PROZESS | HTML sichtbar |
| 161 | Karriere bei Saubermatik Meßstetten: faire Bezahlung, moderne digitale Arbeitsmittel und Tablets im Objekt, Teamkultur in der Zollernalb | app/karriere/page.tsx → metadata.description | GEBIET | HTML sichtbar |
| 162 | Zertifizierte Unterhaltsreinigung für Gewerbe und Büros. Maximale Hygiene, messbare Qualität und 100 % Ausfallsicherheit. | app/leistungen/unterhaltsreinigung/page.tsx → H1 | GARANTIE/VERSPRECHEN | HTML sichtbar |
| 163 | 4-Farb-Hygiene, digitalem Leistungsverzeichnis und Echtzeit-QM | app/leistungen/unterhaltsreinigung/page.tsx → Hero-Sub | PROZESS | HTML sichtbar |
| 164 | in der Zollernalb und angrenzenden Regionen | app/leistungen/unterhaltsreinigung/page.tsx | GEBIET | HTML sichtbar |
| 165 | 4-Farb-System: Rot Sanitär / Gelb Waschbecken / Blau Inventar / Grün Teeküchen | app/leistungen/unterhaltsreinigung/page.tsx; lib/seo/matrix-service-tech.ts | PROZESS | HTML sichtbar |
| 166 | DIN EN 13549 | app/leistungen/unterhaltsreinigung/page.tsx; leistung-deep-content; matrix | QUALIFIKATION | HTML sichtbar |
| 167 | digitales Leistungsverzeichnis (LV) … mit Zeitstempel, Mitarbeiter-ID und optionalen Fotos | app/leistungen/unterhaltsreinigung/page.tsx | PROZESS | HTML sichtbar |
| 168 | Echtzeit-QM | app/leistungen/unterhaltsreinigung/page.tsx | PROZESS | HTML sichtbar |
| 169 | HACCP-Richtlinien | app/leistungen/unterhaltsreinigung/page.tsx | QUALIFIKATION | HTML sichtbar |
| 170 | RKI-konforme Verfahren und VAH-gelistete Flächendesinfektion | app/leistungen/unterhaltsreinigung/page.tsx | QUALIFIKATION | HTML sichtbar |
| 171 | SLA mit 100 % Ausfallsicherheit und festem Ansprechpartner | app/leistungen/unterhaltsreinigung/page.tsx → Vorteil-Liste | GARANTIE/VERSPRECHEN | HTML sichtbar |
| 172 | Pilotabstimmung typischerweise innerhalb von 5–10 Werktagen | lib/seo/leistung-sge-tldr.ts → unterhaltsreinigung.zeitrahmen | ZAHL | HTML sichtbar |
| 173 | Reinwasser-Osmose / entmineralisiertem Wasser | app/leistungen/fenster-glasreinigung/page.tsx | PROZESS | HTML sichtbar |
| 174 | Carbon-Teleskopstangen … bis zu rund 20 Metern Höhe | app/leistungen/fenster-glasreinigung/page.tsx | ZAHL | HTML sichtbar |
| 175 | Hubsteiger-Verzicht an vielen Objekten | app/leistungen/fenster-glasreinigung/page.tsx | PROZESS | HTML sichtbar |
| 176 | streifenfreie Glanzgarantie | app/leistungen/fenster-glasreinigung/page.tsx | GARANTIE/VERSPRECHEN | HTML sichtbar |
| 177 | BG BAU | app/leistungen/fenster-glasreinigung/page.tsx; matrix-service-tech | QUALIFIKATION | HTML sichtbar |
| 178 | TRBS 2121 | app/leistungen/fenster-glasreinigung/page.tsx; matrix; fassade | QUALIFIKATION | HTML sichtbar |
| 179 | Gefährdungsbeurteilung, Unterweisung, geprüfte PSA | app/leistungen/fenster-glasreinigung/page.tsx | PROZESS | HTML sichtbar |
| 180 | Versicherungs- und Unterweisungsnachweise | app/leistungen/fenster-glasreinigung/page.tsx | QUALIFIKATION | HTML sichtbar |
| 181 | Ladengeschäfte: 1× bis 2× monatlich | app/leistungen/fenster-glasreinigung/page.tsx → Snippet-Tabelle | ZAHL | HTML sichtbar |
| 182 | Büro/Kanzleien: 1× pro Quartal | app/leistungen/fenster-glasreinigung/page.tsx → Snippet-Tabelle | ZAHL | HTML sichtbar |
| 183 | Industriehallen: 2× jährlich | app/leistungen/fenster-glasreinigung/page.tsx → Snippet-Tabelle | ZAHL | HTML sichtbar |
| 184 | Solaranlagen/PV: 1× jährlich | app/leistungen/fenster-glasreinigung/page.tsx → Snippet-Tabelle | ZAHL | HTML sichtbar |
| 185 | Ersttermin nach Kapazität oft innerhalb von 1–2 Wochen | lib/seo/leistung-sge-tldr.ts → fenster-glasreinigung | ZAHL | HTML sichtbar |
| 186 | Streifenfrei-Garantie | lib/seo/matrix-service-tech.ts → fenster-glasreinigung operationalTitle | GARANTIE/VERSPRECHEN | HTML sichtbar |
| 187 | Streifenfreiheit ist messbar am Ergebnis, nicht am Versprechen | lib/seo/matrix-service-tech.ts | GARANTIE/VERSPRECHEN | HTML sichtbar |
| 188 | Verkehrssicherungspflicht, Trittsicherheit … umlagefähig nach § 2 BetrKV | lib/seo/leistung-deep-content.ts → treppenhausreinigung | QUALIFIKATION | HTML sichtbar |
| 189 | GPS-gestützte Protokolle in der Saubermatik-App | lib/seo/leistung-deep-content.ts → treppenhausreinigung | PROZESS | HTML sichtbar |
| 190 | Feste Teams pro Cluster (z. B. Balingen, Tuttlingen, Albstadt) | lib/seo/leistung-deep-content.ts → treppenhausreinigung | GEBIET | HTML sichtbar |
| 191 | Bei Ausfällen greift unsere Ausfallsicherheit – Ersatzkräfte ohne Qualitätsbruch | lib/seo/leistung-deep-content.ts → treppenhausreinigung | GARANTIE/VERSPRECHEN | HTML sichtbar |
| 192 | Objektbegehung und Startfenster meist in 1–2 Wochen | lib/seo/leistung-sge-tldr.ts → treppenhausreinigung | ZAHL | HTML sichtbar |
| 193 | SOPs statt Improvisation / Saubermatik-App | app/leistungen/hausmeisterservice/page.tsx | PROZESS | HTML sichtbar |
| 194 | Kleinreparaturen & Instandsetzung … Foto-Nachweis | app/leistungen/hausmeisterservice/page.tsx | LEISTUNG | HTML sichtbar |
| 195 | Leuchtmittelwechsel & Sicherheitsbeleuchtung | app/leistungen/hausmeisterservice/page.tsx | LEISTUNG | HTML sichtbar |
| 196 | Mülltonnen-Bereitstellung & Entsorgungslogistik | app/leistungen/hausmeisterservice/page.tsx | LEISTUNG | HTML sichtbar |
| 197 | Zählerstände ablesen … mit Zeitstempel | app/leistungen/hausmeisterservice/page.tsx | LEISTUNG | HTML sichtbar |
| 198 | Visuelle Objektkontrolle | app/leistungen/hausmeisterservice/page.tsx | LEISTUNG | HTML sichtbar |
| 199 | Schlüssel- & Zutrittslogistik | app/leistungen/hausmeisterservice/page.tsx | LEISTUNG | HTML sichtbar |
| 200 | Leistungsbild und SLA-Fenster in der Regel innerhalb von 7–14 Werktagen | lib/seo/leistung-sge-tldr.ts → hausmeisterservice | ZAHL | HTML sichtbar |
| 201 | jahreszeitlich strukturiert, dokumentiert | app/leistungen/gruenanlagenpflege/page.tsx / deep-content | PROZESS | HTML sichtbar |
| 202 | Dokumentierte Einsätze für umlagefähige Betriebskosten (§ 2 BetrKV) | lib/seo/leistung-deep-content / gruen | QUALIFIKATION | HTML sichtbar |
| 203 | Erstkonzept oft in 1–2 Wochen | lib/seo/leistung-sge-tldr.ts → gruenanlagenpflege | ZAHL | HTML sichtbar |
| 204 | Wetterführung und Echtzeit-Nachweis | lib/seo/leistung-deep-content.ts → winterdienst | PROZESS | HTML sichtbar |
| 205 | GPS-gestützten Fotoprotokollen | lib/seo/leistung-deep-content.ts → winterdienst | PROZESS | HTML sichtbar |
| 206 | Reaktionszeiten ab Wetterauslösung – schriftlich im Winterdienstplan | lib/seo/leistung-deep-content.ts → winterdienst | PROZESS | HTML sichtbar |
| 207 | Wetterdienst-Trigger / Cluster Zollernalb, Schwarzwald-Baar | lib/seo/leistung-deep-content.ts → winterdienst | GEBIET | HTML sichtbar |
| 208 | BG-BAU-orientierte Arbeitssicherheit | lib/seo/leistung-deep-content.ts → winterdienst | QUALIFIKATION | HTML sichtbar |
| 209 | § 2 BetrKV-transparente Abrechnung | lib/seo/leistung-deep-content.ts → winterdienst | QUALIFIKATION | HTML sichtbar |
| 210 | Wetterführung & 24/7-Bereitschaft | lib/seo/matrix-service-tech.ts → winterdienst operationalTitle | GARANTIE/VERSPRECHEN | HTML sichtbar |
| 211 | unsere Bereitschaftslogik ist Teil des SLA | lib/seo/matrix-service-tech.ts → winterdienst | PROZESS | HTML sichtbar |
| 212 | Regionale Tourenbündelung entlang B27, B14, A81 | lib/seo/matrix-service-tech.ts → winterdienst | GEBIET | HTML sichtbar |
| 213 | Vertrags- und Streugüter-Setup vor Saisonbeginn (Sept.–Nov.) | lib/seo/leistung-sge-tldr.ts → winterdienst | ZAHL | HTML sichtbar |
| 214 | VOB/C-konforme Bauübergaben / DIN 18365 | lib/seo/leistung-deep-content.ts → grundreinigung | QUALIFIKATION | HTML sichtbar |
| 215 | Baugrob- und Baufeinreinigung / besenreine Übergabe | lib/seo/leistung-deep-content.ts → grundreinigung | LEISTUNG | HTML sichtbar |
| 216 | Zementschleierentfernung | lib/seo/leistung-deep-content.ts → grundreinigung | LEISTUNG | HTML sichtbar |
| 217 | Polymerdispersion / Polymerbeschichtung nach DIN 18365 | lib/seo/leistung-deep-content.ts → grundreinigung | PROZESS | HTML sichtbar |
| 218 | Absolute Diskretion und DSGVO-bewusste Abläufe | lib/seo/leistung-deep-content.ts → grundreinigung | PROZESS | HTML sichtbar |
| 219 | Start meist innerhalb von 3–10 Werktagen nach Zugang und Oberflächenfreigabe | lib/seo/leistung-sge-tldr.ts → grundreinigung | ZAHL | HTML sichtbar |
| 220 | TRBS 2121, BG-BAU-Vorgaben / Hubsteiger, Seiltechnik, Reinwasser-Osmose | lib/seo/leistung-deep-content.ts → fassadenreinigung | QUALIFIKATION | HTML sichtbar |
| 221 | Naturstein, Metall, Glas, Klinker | lib/seo/leistung-deep-content.ts → fassadenreinigung | LEISTUNG | HTML sichtbar |
| 222 | Angebot und Terminierung typischerweise 2–4 Wochen | lib/seo/leistung-sge-tldr.ts → fassadenreinigung | ZAHL | HTML sichtbar |
| 223 | TRBS 2121 und BG-BAU steuern Höhenarbeit: Seilzugang, Gerüst, Hubsteiger — dokumentiert und versichert. | lib/seo/matrix-service-tech.ts → fassadenreinigung | GARANTIE/VERSPRECHEN | HTML sichtbar |
| 224 | besenreine Übergabe … Endreinigung | lib/seo/leistung-deep-content.ts → entruempelung | LEISTUNG | HTML sichtbar |
| 225 | Entsorgung nach KrWG und lokalen Vorgaben | lib/seo/leistung-deep-content.ts → entruempelung | QUALIFIKATION | HTML sichtbar |
| 226 | Fachgerechte Entsorgung & Sortierung / Entsorgungsnachweise | lib/seo/leistung-deep-content.ts → entruempelung | PROZESS | HTML sichtbar |
| 227 | terminiert, versichert und dokumentiert | lib/config/services.ts → entruempelung summary | GARANTIE/VERSPRECHEN | beides |
| 228 | Termin nach Umfang oft innerhalb von 1–3 Wochen | lib/seo/leistung-sge-tldr.ts → entruempelung | ZAHL | HTML sichtbar |
| 229 | Teppichreinigung, Praxis-Sonderdesinfektion, Events, Ausschreibungen | lib/seo/leistung-deep-content.ts → sonstiges | LEISTUNG | HTML sichtbar |
| 230 | Normen RKI, VAH, DIN EN 13549, VOB vertraglich fixierbar | lib/seo/leistung-deep-content.ts → sonstiges | QUALIFIKATION | HTML sichtbar |
| 231 | Teams skaliert … Zollernalb, Stuttgart, Schwarzwald-Baar | lib/seo/leistung-deep-content.ts → sonstiges | GEBIET | HTML sichtbar |
| 232 | Compliance-Nachweise (BG, TRBS, DIN EN 13549) / Referenzobjekte | lib/seo/leistung-deep-content.ts → sonstiges | QUALIFIKATION | HTML sichtbar |
| 233 | Erste Einordnung meist innerhalb von 2–5 Werktagen | lib/seo/leistung-sge-tldr.ts → sonstiges | ZAHL | HTML sichtbar |
| 234 | Ja, mit abgestimmter Zuwegung, Arbeitssicherheit und geprüfter Technik. | lib/seo/leistung-faq.ts → Glas FAQ | PROZESS | nur JSON-LD |
| 235 | Glas-Intervalle typisch 4 bis 12 Wochen | lib/seo/leistung-faq.ts | ZAHL | nur JSON-LD |
| 236 | Wir arbeiten versichert und materialgerecht. | lib/seo/leistung-faq.ts | GARANTIE/VERSPRECHEN | nur JSON-LD |
| 237 | von Meßstetten aus mit kurzer Anbindung an Ihre Region | lib/seo/leistung-faq.ts | GEBIET | nur JSON-LD |
| 238 | Treppenhaus WEG: 1- bis 2-wöchig, ggf. wöchentlich | lib/seo/leistung-faq.ts | ZAHL | nur JSON-LD |
| 239 | Die All-in-One Lösung für Hausverwaltungen: Treppenhaus, Hausmeister & Grünpflege mit digitalem Echtzeit-Nachweis. | app/zielgruppen/hausverwaltungen/page.tsx → H1 | LEISTUNG | HTML sichtbar |
| 240 | dokumentierten Touren, GPS-gestützten Fotoprotokollen und einem Key Account | app/zielgruppen/hausverwaltungen/page.tsx → Hero | PROZESS | HTML sichtbar |
| 241 | Saubermatik-App erzeugt GPS-gestempelte Fotoprotokolle pro Einsatz – Zeitstempel, Objektzuordnung, Leistungsart | app/zielgruppen/hausverwaltungen/page.tsx | PROZESS | HTML sichtbar |
| 242 | monatliche Compliance-Reports – exportierbar für Eigentümerversammlungen und Versicherungsunterlagen | app/zielgruppen/hausverwaltungen/page.tsx | PROZESS | HTML sichtbar |
| 243 | Betriebskosten (§ 2 BetrKV): 100 % umlagefähig dokumentieren | app/zielgruppen/hausverwaltungen/page.tsx → H2 | GARANTIE/VERSPRECHEN | HTML sichtbar |
| 244 | transparente Rechnungen mit leistungsbezogenen Positionen: Objekt-ID, Leistungsart, Intervall | app/zielgruppen/hausverwaltungen/page.tsx | PROZESS | HTML sichtbar |
| 245 | messbar weniger Eskalationen pro 100 Wohneinheiten | app/zielgruppen/hausverwaltungen/page.tsx | ZAHL | HTML sichtbar |
| 246 | Gebäudereinigung, Hausmeisterservice, Grünanlagenpflege und Winterdienst für Hausverwaltungen | lib/seo/hausverwaltungen-schema.ts → serviceType | LEISTUNG | beides |
| 247 | GPS-gestützten Echtzeit-Nachweisen über die Saubermatik-Plattform | lib/seo/hausverwaltungen-schema.ts → description | PROZESS | beides |
| 248 | areaServed: Zollernalb, Schwarzwald-Baar-Heuberg, Stuttgart Metropolregion | lib/seo/hausverwaltungen-schema.ts | GEBIET | beides |
| 249 | Offer availability: InStock | lib/seo/hausverwaltungen-schema.ts | GARANTIE/VERSPRECHEN | nur JSON-LD |
| 250 | Meßstetten ist unser Firmensitz | lib/seo/standort-deep-content.ts → HQ-Variante | GEBIET | HTML sichtbar |
| 251 | Sitz in Meßstetten im Herzen der Zollernalb | lib/seo/standort-deep-content.ts | GEBIET | HTML sichtbar |
| 252 | messbarer Qualität (DIN EN 13549-orientiert) | lib/seo/standort-deep-content.ts | QUALIFIKATION | HTML sichtbar |
| 253 | umlagefähige Nachweise nach § 2 BetrKV | lib/seo/standort-deep-content.ts | QUALIFIKATION | HTML sichtbar |
| 254 | Unterhaltsreinigung mit 4-Farb-System und HACCP | lib/seo/standort-deep-content.ts | PROZESS | HTML sichtbar |
| 255 | GPS-protokollierte Winterdienste | lib/seo/standort-deep-content.ts | PROZESS | HTML sichtbar |
| 256 | direkter Draht zur Geschäftsführung | lib/seo/standort-deep-content.ts → Meßstetten | PERSON | HTML sichtbar |
| 257 | Saubermatik plant Unterhaltsreinigung … mit digitalem Leistungsverzeichnis, 4-Farb-Hygiene und festen Intervallen – täglich bis wöchentlich | lib/seo/standort-faq.ts → FAQ1 | LEISTUNG | beides |
| 258 | typischerweise am selben Werktag, bei akuten Verkehrssicherungs-Themen schneller | lib/seo/standort-faq.ts → FAQ2 Notfälle | ZAHL | beides |
| 259 | Winterdienst … wettergeführt, mit GPS-Fotoprotokollen und umlagefähiger Dokumentation nach § 2 BetrKV | lib/seo/standort-faq.ts → FAQ3 | PROZESS | beides |
| 260 | Ein Key Account koordiniert Touren aus Meßstetten | lib/seo/standort-faq.ts → FAQ1 | PERSON | beides |
| 261 | Balingen: Gewerbegebiete Gehrn, Auf dem Kies; Infrastruktur B27 | lib/seo/local-entities.ts | GEBIET | HTML sichtbar |
| 262 | Tuttlingen: Gänsäcker, Industriepark; B14, B311; Medizintechnik (Medical Mountains) | lib/seo/local-entities.ts | GEBIET | HTML sichtbar |
| 263 | Albstadt: Ebingen, Tailfingen; B463; Maschinenbau/Textil | lib/seo/local-entities.ts | GEBIET | HTML sichtbar |
| 264 | Rottweil: Berner Feld, IN⊙VATOR; A81, B27 | lib/seo/local-entities.ts | GEBIET | HTML sichtbar |
| 265 | Hechingen: Lotzenäcker, Nasswasen; B27; Medizintechnik/High-Tech | lib/seo/local-entities.ts | GEBIET | HTML sichtbar |
| 266 | Stuttgart ist … über die B14 und B27 eng mit dem Zollernalbkreis und unserem Stützpunkt Meßstetten verbunden | app/standorte/stuttgart/page.tsx | GEBIET | HTML sichtbar |
| 267 | Stadtteile Degerloch, Vaihingen oder Bad Cannstatt | app/standorte/stuttgart/page.tsx | GEBIET | HTML sichtbar |
| 268 | Industriegebiete Feuerbach, Möhringen | app/standorte/stuttgart/page.tsx | GEBIET | HTML sichtbar |
| 269 | Glasreinigung Mitte: Vorlauf wenige Werktage bis zwei Wochen | app/standorte/stuttgart/page.tsx | ZAHL | HTML sichtbar |
| 270 | Saubermatik-Plattform verteilt Aufgaben neu bei Ausfall | app/standorte/stuttgart/page.tsx | PROZESS | HTML sichtbar |
| 271 | von Meßstetten aus, mit DIN EN 13549-orientiertem QM, Ausfallsicherheit und festem Key Account | lib/seo/matrix-content.ts → Hero-Muster (alle Matrix-Seiten) | PROZESS | HTML sichtbar |
| 272 | GPS-gestützte Check-ins, Fotodokumentation … für … ISO-Audits | lib/seo/matrix-service-tech.ts → unterhalt compliance | PROZESS | HTML sichtbar |
| 273 | Versicherungsnachweise und Unterweisungsbelege sind jederzeit abrufbar | lib/seo/matrix-content.ts / matrix-service-tech | QUALIFIKATION | HTML sichtbar |
| 274 | Transparente SLAs, keine versteckten Kosten | lib/seo/matrix-content.ts | GARANTIE/VERSPRECHEN | HTML sichtbar |
| 275 | kein Vermittler anonyme Subunternehmer / feste Teams | lib/seo/matrix-content.ts | GARANTIE/VERSPRECHEN | HTML sichtbar |
| 276 | DGUV (neben TRBS 2121 / BG BAU) | lib/seo/matrix-service-tech.ts → glas normRefs | QUALIFIKATION | HTML sichtbar |
| 277 | Meßstetten ist Firmensitz … Referenzmarkt für Ausfallsicherheit | lib/seo/matrix-city-extended.ts → messstetten | GEBIET | HTML sichtbar |
| 278 | Überlingen am Rand unseres Kerngebiets / regionalen Schwerpunkts | lib/seo/matrix-city-extended.ts / standorte | GEBIET | HTML sichtbar |
| 279 | Reutlingen einer der größten Standorte in unserem Einzugsgebiet | lib/seo/matrix-city-extended.ts | GEBIET | HTML sichtbar |
| 280 | Hausmeister skaliert von 4 WE bis zum Verwalter-Portfolio | lib/seo/matrix-content.ts | ZAHL | HTML sichtbar |
| 281 | auditierbarer Standard … gegenüber Behörden, ISO-Zertifizierern und Konzern-Einkauf | lib/seo/matrix-service-tech.ts → 4-Farb-System | QUALIFIKATION | HTML sichtbar |
| 282 | Saubermatik verknüpft HACCP-orientierte Checklisten mit der digitalen Objektsteuerung | lib/config/lexikon.ts → HACCP | PROZESS | HTML sichtbar |
| 283 | Unsere Teams arbeiten mit freigegebenen Tensid- und Pflegesystemen – dokumentiert pro Objekt | lib/config/lexikon.ts → pH | PROZESS | HTML sichtbar |
| 284 | Saubermatik übersetzt Normen in umsetzbare Tourenpläne | lib/config/lexikon.ts → DIN 13063 | QUALIFIKATION | HTML sichtbar |
| 285 | unsere Plattform exportiert strukturierte Einsatz- und Qualitätsdaten | lib/config/lexikon.ts → CAFM | PROZESS | HTML sichtbar |
| 286 | skaliert über 50.000 m² ohne Qualitätsverlust | lib/config/lexikon.ts → CAFM | ZAHL | HTML sichtbar |
| 287 | Saubermatik übersetzt diese Anforderungen in SLA-KPIs und digitale Nachweise | lib/config/lexikon.ts → DIN 31051 | PROZESS | HTML sichtbar |
| 288 | Abweichungen innerhalb von 24/7-Fenstern | lib/config/lexikon.ts → SLA | ZAHL | HTML sichtbar |
| 289 | Manuelle Zettelwirtschaft scheitert bei Flächen über 10.000 m² | lib/config/lexikon.ts → SLA | ZAHL | HTML sichtbar |
| 290 | Saubermatik verankert Farbzonen in digitalen Checklisten und Touren | lib/config/lexikon.ts → Farbcode | PROZESS | HTML sichtbar |
| 291 | Saubermatik modelliert beide Stränge im SLA | lib/config/lexikon.ts → Unterhalt vs Grund | PROZESS | HTML sichtbar |
| 292 | Lexikon-Thema: HACCP | lib/config/lexikon.ts; app/wissen | QUALIFIKATION | HTML sichtbar |
| 293 | Lexikon-Thema: pH-Werte | lib/config/lexikon.ts; app/wissen | QUALIFIKATION | HTML sichtbar |
| 294 | Lexikon-Thema: DIN 13063 | lib/config/lexikon.ts; app/wissen | QUALIFIKATION | HTML sichtbar |
| 295 | Lexikon-Thema: CAFM | lib/config/lexikon.ts; app/wissen | QUALIFIKATION | HTML sichtbar |
| 296 | Lexikon-Thema: DIN 31051 | lib/config/lexikon.ts; app/wissen | QUALIFIKATION | HTML sichtbar |
| 297 | Lexikon-Thema: SLA | lib/config/lexikon.ts; app/wissen | QUALIFIKATION | HTML sichtbar |
| 298 | Lexikon-Thema: Farbcode-System | lib/config/lexikon.ts; app/wissen | QUALIFIKATION | HTML sichtbar |
| 299 | Lexikon-Thema: Unterhalt vs. Grundreinigung | lib/config/lexikon.ts; app/wissen | QUALIFIKATION | HTML sichtbar |
| 300 | Gründliche Gebäudereinigung in der Region Zollernalb: Büro, Glas, Außenanlagen und Bauendreinigung – mit digitaler Objektsteuerung und festen Ansprechpartnern. | app/layout.tsx → metadata.description | LEISTUNG | HTML sichtbar |
| 301 | Kunden-Login / SaaS-Plattform (Pfad /login) | lib/config/platform.ts; ClientLoginButton | PROZESS | HTML sichtbar |
| 302 | haftungssicher vorbereitet | lib/config/services.ts → winterdienst summary | GARANTIE/VERSPRECHEN | beides |
| 303 | alles aus einer Hand | lib/config/services.ts → hausmeisterservice summary | GARANTIE/VERSPRECHEN | beides |
| 304 | Intervallen und Festpreis-Modellen | app/leistungen/page.tsx → Hub-Intro | PROZESS | HTML sichtbar |
| 305 | Vier Phasen. Ein verbindlicher Qualitätsstandard. | components/B2BOnboardingProcess.tsx | PROZESS | HTML sichtbar |
| 306 | Ihr dedizierter Key Account Manager koordiniert Übergabe, Schulung vor Ort und die erste Review-Phase | lib/seo/b2b-onboarding.ts → step 4 body | PERSON | beides |
| 307 | Ab dem ersten Einsatz liegen Protokolle, Ausfallabsicherung und Eskalationswege digital vor | lib/seo/b2b-onboarding.ts → step 4 body | PROZESS | beides |
| 308 | Fensterreinigung Stuttgart & Gebäudereinigung mit Zollernalb-Logistik | app/standorte/stuttgart/page.tsx → H1 | GEBIET | HTML sichtbar |
| 309 | Professionelle Fenster- und Glasreinigung sowie Gebäudereinigung für Stuttgart – mit Logistik über B14/B27 | app/standorte/stuttgart/page.tsx → metadata.description | GEBIET | HTML sichtbar |
| 310 | Regional verwurzelt. Digital vorbereitet. | app/ueber-uns/page.tsx → H1 | PROZESS | HTML sichtbar |
| 311 | Saubermatik aus Meßstetten: regionale Wurzeln, digitale Objektsteuerung und B2B-Reinigung mit festen Ansprechpartnern für Zollernalb, Tübingen und den Schwarzwald-Baar-Heuberg. | app/ueber-uns/page.tsx → metadata.description | GEBIET | HTML sichtbar |
| 312 | Qualität, die Sie messen können – nicht nur riechen. | app/qualitaetsmanagement/page.tsx → H1 | GARANTIE/VERSPRECHEN | HTML sichtbar |
| 313 | Beweis-Zentrum: Standards, Sicherheit & digitale Objektsteuerung | app/expertise/page.tsx → H1 | PROZESS | HTML sichtbar |
| 314 | EEAT-Hub von Saubermatik: Arbeitssicherheit, Qualitätsstandards, Echtzeit-Monitoring und digitale Objektprotokolle | app/expertise/page.tsx → metadata.description | PROZESS | HTML sichtbar |
| 315 | Reinigung, die zu Ihrem Objekt passt | app/leistungen/page.tsx → H1 | LEISTUNG | HTML sichtbar |
| 316 | Facility & Reinigung in der Zollernalb: Unterhalts- & Büroreinigung, Glas, Treppenhaus, Hausmeister, Grünanlagen, Winterdienst, Grund-/Bau- und Fassadenreinigung. | app/leistungen/page.tsx → metadata.description | LEISTUNG | HTML sichtbar |
| 317 | Standorte & Einsatzgebiete | app/standorte/page.tsx → H1 | GEBIET | HTML sichtbar |
| 318 | Gebäudereinigung in der Zollernalb und angrenzenden Städten — Übersicht aller lokalen Saubermatik-Standortseiten inklusive Stuttgart-Metropolregion. | app/standorte/page.tsx → metadata.description | GEBIET | HTML sichtbar |
| 319 | Wissen für Facility, Verwaltung & Geschäftsführung | app/wissen/page.tsx → H1 | QUALIFIKATION | HTML sichtbar |
| 320 | Fachwissen zu Reinigung, Hygiene und Normen – HACCP, CAFM, DIN 31051, SLA, Farbcode-System und mehr von Saubermatik. | app/wissen/page.tsx → metadata.description | QUALIFIKATION | HTML sichtbar |
| 321 | Saubermatik Meßstetten: Adresse, Anfahrt, Kundenanfrage (Lead) und Bewerbungen | app/kontakt/page.tsx → metadata.description | GEBIET | HTML sichtbar |
| 322 | pH-Wert-Profile / materialspezifische Bodenbehandlung | lib/seo/matrix-service-tech.ts → unterhalt | PROZESS | HTML sichtbar |
| 323 | Streumittel: Salz, Splitt, Harnstoff | lib/seo/matrix-service-tech.ts → winterdienst | PROZESS | HTML sichtbar |
| 324 | Event-SLAs mit definierten Reaktionszeiten und Ausfallsicherheit | lib/seo/matrix-service-tech.ts → sonstiges | GARANTIE/VERSPRECHEN | HTML sichtbar |
| 325 | Ausfallsicherheit: Krankheit und Urlaub ersetzen wir über die Disposition — das Objekt bleibt im Rhythmus. | lib/seo/matrix-service-tech.ts → hausmeister | GARANTIE/VERSPRECHEN | HTML sichtbar |
| 326 | Grünanlagenpflege sichert Werterhalt und Verkehrssicherheit zugleich | lib/seo/matrix-service-tech.ts → gruen | LEISTUNG | HTML sichtbar |
| 327 | Saubermatik plant Jahresprogramme — nicht reaktives Mähen | lib/seo/matrix-service-tech.ts → gruen | PROZESS | HTML sichtbar |
| 328 | Undokumentierter Winterdienst scheitert im Schadensfall — vor Gericht und Versicherung. Unsere Protokolle zeigen: wann geräumt, wann gestreut, welche Fläche, welches Mittel. | lib/seo/matrix-service-tech.ts → winterdienst | PROZESS | HTML sichtbar |
| 329 | Digitale Objektsteuerung und Ausfallsicherheit sind bei uns Betriebslogik | lib/seo/matrix-content.ts / standort-deep-content | PROZESS | HTML sichtbar |
| 330 | Einzugsgebiet Schwarzwald-Baar-Heuberg und Zollernalbkreis | lib/seo/standort-deep-content.ts | GEBIET | HTML sichtbar |
| 331 | RKI- und HACCP-orientierte Prozesse für Praxen/Kanzleien | lib/seo/standort-deep-content.ts | QUALIFIKATION | HTML sichtbar |
| 332 | Notfall-Reaktionszeiten vertraglich steuerbar | lib/seo/standort-deep-content.ts | GARANTIE/VERSPRECHEN | HTML sichtbar |
| 333 | Handwerk mit SaaS-Transparenz | lib/seo/matrix-content.ts → Hero | PROZESS | HTML sichtbar |
| 334 | Protokolle stehen für Abrechnung, ISO-Audits, BetrKV und Eigentümer-Reports bereit | lib/seo/matrix-content.ts | PROZESS | HTML sichtbar |
| 335 | B2B-Richtwert für Mehrfamilienhäuser (Treppenhaus, Hausmeister, Grünpflege-Basis) | components/EngagementCalculator.tsx | LEISTUNG | HTML sichtbar |
| 336 | Volle Transparenz, rechtssicher kalkuliert. | components/EsgComplianceStatement.tsx | GARANTIE/VERSPRECHEN | HTML sichtbar |
| 337 | strategischen Partner mit direkter Erreichbarkeit, klaren Eskalationsstufen und Verantwortung bis zur Geschäftsführungsebene | lib/seo/key-account.ts → intro | GARANTIE/VERSPRECHEN | beides |
| 338 | Quartalsreviews | lib/seo/key-account.ts → pillars[1].body | PROZESS | beides |
| 339 | feste Eskalationsmatrix: operativer Tageskontakt | lib/seo/key-account.ts → pillars[1].body | PROZESS | beides |

## OFFEN · Grenzfälle & Abgrenzungen

| Nr | Thema |
|----|--------|
| O1 | `/llms.txt`: Sichtbarkeit weder typische HTML-Page noch JSON-LD — in Tabelle als „HTML sichtbar“ mit Ort `llms-content.ts → /llms.txt`. |
| O2 | `lib/seo/leistung-entity-facts.ts`: Claims im Quellcode, aber **nicht** an Seiten/JSON-LD angebunden → nicht in der Haupttabelle. |
| O3 | `lib/routes/standorte.ts` → `STANDORTE_BY_CITY`: ältere Standorttexte; aktuelle `[city]`-Seiten nutzen `buildStandortDeepContent` — `STANDORTE_BY_CITY` nicht als live-sichtbar gewertet. |
| O4 | Telefonnummer nur via Env `NEXT_PUBLIC_BUSINESS_PHONE` — Wert nicht hardcodiert; Claim „Telefon vorhanden“ bedingt. |
| O5 | Keine Straßenadresse (`streetAddress`) im Repo — NAP unvollständig als Abwesenheit, kein Zitat. |
| O6 | Kein Gründungsjahr / `foundingDate` im Repo. |
| O7 | „SecureOps“ als Markenname: **nicht** im Repo; äquivalente Claims unter Saubermatik-Plattform/-App. |
| O8 | „Zertifizierte Qualitätsstandards“ (FreshnessBadge) ohne benanntes Zertifikat (ISO o. Ä.) — Grenzfall QUALIFIKATION vs. Floskel; aufgenommen. |
| O9 | EngagementCalculator-Raten: intern als Zahlen, Ergebnis als Richtwert im UI sichtbar — aufgenommen als ZAHL. |
| O10 | Lexikon-Artikel: generische Normdefinitionen ohne Saubermatik-Bezug nicht einzeln; nur Sätze mit Saubermatik-Bezug + Themenliste. |
| O11 | „Reinigung, die hält, was sie verspricht – mit Kopf, nicht nur mit dem Wischmob.“ — reine Stimmung, **nicht** aufgenommen. |
| O12 | H1 „Qualität, die Sie messen können – nicht nur riechen.“ — Grenzfall Versprechen; aufgenommen. |
| O13 | Farbcode-Farben im Lexikon vs. 4-Farb-System auf Leistungsseiten können abweichen — beide als separate Claimsquellen. |
| O14 | JSON-LD `priceRange: $$` und Öffnungszeiten 08:00–22:00 inkl. Wochenende — aufgenommen, ohne Bewertung. |
| O15 | Matrix-/Standort-Fließtexte wiederholen Kernclaims (Ausfallsicherheit, GPS, BetrKV, DIN EN 13549) vielfach; Vollständigkeit der *Muster* priorisiert gegenüber 160× Kopie. |

## Verteilung nach Typ (Haupttabelle)

- **ZAHL:** 57
- **LEISTUNG:** 46
- **GEBIET:** 62
- **PROZESS:** 87
- **QUALIFIKATION:** 41
- **PERSON:** 12
- **GARANTIE/VERSPRECHEN:** 34
- **Summe:** 339

## Verteilung nach Sichtbarkeit

- **HTML sichtbar:** 223
- **nur JSON-LD:** 38
- **beides:** 78
