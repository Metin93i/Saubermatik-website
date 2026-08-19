import type { MatrixServiceSlug } from "@/lib/config/services";
export type MatrixServiceTechBlock = {
  breadcrumbLabel: string;
  normRefs: readonly string[];
  technicalTitle: string;
  technicalParagraphs: readonly string[];
  complianceTitle: string;
  complianceParagraphs: readonly string[];
  operationalTitle: string;
  operationalParagraphs: readonly string[];
};

export const MATRIX_SERVICE_TECH: Record<
  MatrixServiceSlug,
  MatrixServiceTechBlock
> = {
  unterhaltsreinigung: {
    breadcrumbLabel: "Unterhalts- & Büroreinigung",
    normRefs: ["DIN EN 13549", "HACCP", "RKI", "VAH"],
    technicalTitle: "Unterhaltsreinigung: 4-Farb-System & ph-Wert-Steuerung",
    technicalParagraphs: [
      "Professionelle Unterhaltsreinigung beginnt bei Saubermatik mit dem 4-Farb-System zur Vermeidung von Kreuzkontamination: Rot für Sanitärbereiche, Gelb für Waschbecken und Armaturen, Blau für Büromöbel und Inventar, Grün für Teeküchen und Aufenthaltszonen. Jede Farbe ist physisch getrennt — eigene Eimer, Mikrofasertücher und Mopp-Systeme pro Objekt. Das ist keine Marketing-Metapher, sondern ein auditierbarer Standard, den Facility Manager in Hygiene- und Qualitätsaudits gegenüber Behörden, ISO-Zertifizierern und Konzern-Einkauf vorlegen können.",
      "Bodenbeläge werden materialspezifisch behandelt: Vinyl, Designboden, Naturstein, Linoleum und Teppich erhalten unterschiedliche pH-Wert-Profile. Alkalische Grundreiniger nur dort, wo das Pflegekonzept es vorsieht; neutrale Unterhaltsreiniger für den Tagesbetrieb. In Praxen und medizinischen Nebenräumen orientieren wir uns an RKI-Empfehlungen und VAH-gelisteten Flächendesinfektionsmitteln — dokumentiert im digitalen Leistungsverzeichnis, nicht als mündliche Zusage.",
      "DIN EN 13549 dient als methodischer Rahmen für messbare Qualität: Leistungsumfang, Intervalle und Abnahmekriterien werden vor Vertragsbeginn schriftlich fixiert. Die Saubermatik-App erfasst Echtzeit-QM, Ausfallmanagement und Ersatzlogistik — wenn eine Tour ausfällt, wird sie neu disponiert, bevor der Auftraggeber es merkt.",
    ],
    complianceTitle: "Compliance: HACCP, RKI & Praxishygiene",
    complianceParagraphs: [
      "Teeküchen und Kantinen in Büro- und Verwaltungsgebäuden unterliegen praktischen HACCP-Anforderungen: Lebensmittelkontaktflächen, Abfallzonen und Spülbecken werden getrennt behandelt. Unsere Teams sind geschult, Mängel (undichte Kühlschränke, Schimmelansätze, defekte Lüftungen) zu melden — ein Frühwarnsystem für Facility und Eigentümer.",
      "In Arztpraxen und medizinischen MVZ kombinieren wir Unterhaltsreinigung mit desinfizierenden Zwischenreinigungen in Behandlungs- und Wartezonen. VAH-Listen und RKI-Leitfäden sind Bestandteil der Objektunterweisung. Für Hausverwaltungen mit gemischten Mieterstrukturen bedeutet das: ein Partner, der Büroflächen und hygiene-sensitive Bereiche im selben Gebäude beherrscht.",
      "Abrechnung und Nachweis erfolgen digital: dokumentierte Einsätze (Umfang je nach Objekt und Vereinbarung), exportierbare Protokolle für Nebenkosten, ISO-Audits und Eigentümerversammlungen. Transparente SLAs ohne versteckte Zusatzpositionen.",
    ],
    operationalTitle: "Betrieb: Intervalle, Touren & Ausfallsicherheit",
    operationalParagraphs: [
      "Unterhaltsreinigung lebt von Konstanz: feste Teams, feste Zeitfenster, feste Checklisten. Saubermatik plant Touren entlang realer Verkehrsachsen — nicht als theoretische Karte, sondern als dispositionstechnische Realität mit Puffer für Ersatzkräfte.",
      "Verbrauchsmaterial (Seifen, Papier, Müllbeutel) kann optional integriert werden — ein Ansprechpartner, eine Rechnung, ein SLA. Für Multi-Objekt-Portfolios skaliert die Plattform ohne Qualitätsverlust: jedes Objekt erhält sein digitales LV, die Zentrale behält den Überblick.",
      "Bei Vertragsverlängerung liefern wir Auswertungen: Reklamationsquote, Ausfallquote, durchschnittliche Reaktionszeit. Das ist B2B-Handwerk mit SaaS-Transparenz — nicht anonyme Subunternehmer-Ketten.",
    ],
  },
  "fenster-glasreinigung": {
    breadcrumbLabel: "Fenster- & Glasreinigung",
    normRefs: ["TRBS 2121", "BG BAU", "DGUV"],
    technicalTitle: "Glasreinigung: Osmose, Teleskop & Arbeitssicherheit",
    technicalParagraphs: [
      "Außenreinigung erfolgt wo möglich mit Reinwasser-Osmose: entmineralisiertes Wasser per Umkehrosmose, Carbon-Teleskopstangen bis etwa 20 Meter, streifenfreier Glanz ohne aggressive Tenside auf der Fassade. Das schont Verglasungen, Rahmen und Umgebungsbegrünung — und reduziert Hubsteiger-Einsätze an vielen Gewerbeobjekten messbar.",
      "Innenbereich: klassisches Einwascher-Abzieher-Verfahren mit Mikrofaser, Falz- und Rahmenreinigung gegen Glas-Korrosion, Kondenswasser-Management in Wintermonaten. Sonnenschutz, Jalousien und Wintergärten werden nach abgestimmtem Turnus einbezogen — nicht als Aufpreis-Überraschung, sondern als LV-Position.",
      "TRBS 2121 und BG-BAU-Vorgaben steuern unsere Arbeitssicherheit: Absturzsicherung, Gerüstkoordination, Sperrungen von Gehwegen. Jeder Höheneinsatz ist dokumentiert — für Facility, Versicherer und Behörden ein belastbarer Nachweis.",
    ],
    complianceTitle: "Normen & Haftung bei Glasflächen",
    complianceParagraphs: [
      "Glasfassaden sind Werbeträger und Haftungsfläche zugleich: verschmierte Scheiben, Korrosion in Falzen und undichte Rahmen mindern Mietwert und Energieeffizienz. Saubermatik definiert Turnus und Methode schriftlich — jährlich, halbjährlich oder quartalsweise je nach Lage (Industrie, Einzelhandel, Verwaltung).",
      "Bei Medizintechnik-Standorten (Medical Mountains, Tuttlingen) gelten erhöhte Anforderungen an Staub- und Schmutzeintrag in Produktionsnähe: wir planen Eingangsbereiche und Schleusenlogik mit ein, nicht nur die Fensterscheibe isoliert.",
      "Kombination mit Fassadenreinigung und Unterhalt aus einem Portfolio reduziert Schnittstellen und Koordinationsaufwand für den Auftraggeber.",
    ],
    operationalTitle: "Disposition & Streifenfrei-Garantie im Betrieb",
    operationalParagraphs: [
      "Glas-Touren sind wetterabhängig: Wind, Frost und Starkregen verschieben Einsätze. Unsere Disposition kommuniziert proaktiv — kein Schweigen bis zur Reklamation. Ersatztermine werden in der App nachvollziehbar.",
      "Für Hochhäuser und Hallenfassaden koordinieren wir Hubsteiger, Seilzugang oder Gerüstbauer — ein Projektleiter, ein SLA. Dokumentierte Einsätze halten den Zustand vor/nach nachvollziehbar, besonders bei Übergaben und Mietvertragswechsel (Umfang je nach Vereinbarung).",
      "Streifenfreiheit ist messbar am Ergebnis, nicht am Versprechen: Reklamationen werden als QM-Signal verarbeitet, nicht als Kundenproblem abgewiesen.",
    ],
  },
  treppenhausreinigung: {
    breadcrumbLabel: "Treppenhausreinigung",
    normRefs: ["§ 2 BetrKV", "Verkehrssicherungspflicht", "DIN EN 13549"],
    technicalTitle: "Treppenhaus: Verkehrssicherung & Trittsicherheit",
    technicalParagraphs: [
      "Treppenhausreinigung ist Verkehrssicherungspflicht in Reinform: Stufen, Podeste, Handläufe, Schmutzfangmatten und Eingangsbereiche müssen so betreut werden, dass Sturz- und Rutschrisiken minimiert werden. Saubermatik arbeitet checklistenbasiert — jede Position im Treppenhaus ist im digitalen LV abgebildet, jeder Einsatz wird protokolliert.",
      "Materialspezifische Pflege: Stein, Granit, PVC, Gummi, Holz und Metall erhalten passende Reinigungs- und Pflegemittel. Feuchtigkeit wird zeitnah entfernt, Streusalzreste in Wintermonaten koordiniert mit unserem Winterdienst — eine durchgängige Logik statt widersprüchlicher Dienstleister.",
      "Für WEG und Hausverwaltungen liefern wir umlagefähige Nachweise nach § 2 BetrKV: transparente Intervalle, objektbezogene Abrechnung, digitale Protokolle für Eigentümerversammlungen.",
    ],
    complianceTitle: "Haftung, BetrKV & Mieterkommunikation",
    complianceParagraphs: [
      "Undokumentierte Treppenhausreinigung ist im Schadensfall wertlos — Versicherer und Gerichte fragen nach Sorgfaltspflicht, nicht nach gutem Willen. Dokumentierte Einsätze schaffen belastbare Belege (Umfang je nach Objekt und Vereinbarung).",
      "Repräsentativität: Eingänge, Spiegel, Glas, Briefkastenzonen und Fahrstuhl-Vorhallen prägen den ersten Eindruck bei Vermietung und Verkauf. Saubermatik plant leise Geräte und störungsarme Zeitfenster — wichtig in Wohnobjekten mit Kinderwagen, Lieferverkehr und Schichtbetrieb.",
      "Mängelmeldung ist Teil des Service: defekte Beleuchtung, lose Geländer, rissige Stufen werden eskaliert — bevor der Mieter stolpert.",
    ],
    operationalTitle: "WEG-Touren & Ausfallsicherheit",
    operationalParagraphs: [
      "Feste Teams pro Stadt-Cluster sichern Wiedererkennung und Qualität. Verwalter sparen Koordinationszeit; Mieter erleben Konstanz. Bei Ausfällen greift die Saubermatik-Plattform — Ersatzkräfte ohne Qualitätsbruch.",
      "Kombination mit Winterdienst, Grünpflege und Hausmeisterservice aus einem Portfolio: ein Ansprechpartner, ein SLA, eine App.",
      "Skalierbar von Einzel-MFH bis zum Verwalter-Portfolio mit dutzenden Liegenschaften in der Region.",
    ],
  },
  hausmeisterservice: {
    breadcrumbLabel: "Hausmeisterservice",
    normRefs: ["DIN EN 13549", "Verkehrssicherungspflicht", "§ 2 BetrKV"],
    technicalTitle: "Hausmeisterservice: Objektbetreuung & Eskalation",
    technicalParagraphs: [
      "Hausmeisterservice bei Saubermatik bedeutet mehr als „mal eben reparieren“: strukturierte Kontrollgänge, definierte Reaktionszeiten, dokumentierte Mängelmeldungen und klare Grenzen zwischen Hausmeister-Light und Gewerke-Beauftragung. Jede Liegenschaft erhält ein digitales Betriebshandbuch — Schlüssel, Zugänge, Notfallkontakte, wiederkehrende Aufgaben.",
      "Typische Leistungen: Beleuchtung prüfen und wechseln, Kleinreparaturen koordinieren, Müllplatz-Hygiene, Zugangskontrolle, Übergabeprotokolle bei Mieterwechsel, Beaufsichtigung von Fremdfirmen auf dem Objekt. Für Hausverwaltungen ist das die Entlastung des technischen Property Managements — ohne Vollzeit-Hausmeister auf der Payroll.",
      "Im MFH-Kontext kombinieren wir Hausmeister-Light mit Treppenhausreinigung, Winterdienst und Grünpflege — ein integriertes Liegenschafts-SLA statt vier getrennter Verträge mit vier Ansprechpartnern.",
    ],
    complianceTitle: "Verkehrssicherung & NK-Abrechnung",
    complianceParagraphs: [
      "Verkehrssicherungspflicht endet nicht am Treppenhaus: Gehwege, Beleuchtung, Spielplätze und Müllplatz-Hygiene gehören zum Gesamtbild. Saubermatik dokumentiert Kontrollen und Maßnahmen — für Abrechnung, Versicherung und Eigentümerversammlung.",
      "Umlagefähige Positionen nach § 2 BetrKV werden transparent ausgewiesen. Digitale Protokolle ersetzen Zettelwirtschaft im Keller — Verwalter und Beirat sehen, was wann erledigt wurde.",
      "Eskalationswege sind vordefiniert: Was erledigt der Hausmeister sofort, was geht an den zuständigen Gewerk? Klare Regeln verhindern teure Verzögerungen.",
    ],
    operationalTitle: "WE-Skalierung & Key Account",
    operationalParagraphs: [
      "Für Mehrfamilienhäuser mit 4 bis 100+ WE staffeln wir Richtwerte und Touren — eine erste Orientierung besprechen wir im Gespräch, das verbindliche Angebot folgt nach Objekt-Audit.",
      "Key Account Manager begleiten Hausverwaltungen über das gesamte Portfolio: ein Gesicht, ein SLA, eine Plattform.",
      "Ausfallsicherheit: Krankheit und Urlaub ersetzen wir über die Disposition — das Objekt bleibt im Rhythmus.",
    ],
  },
  gruenanlagenpflege: {
    breadcrumbLabel: "Grünanlagenpflege",
    normRefs: ["Landschaftspflege", "Verkehrssicherungspflicht"],
    technicalTitle: "Grünanlagen: Werterhalt & Jahresprogramm",
    technicalParagraphs: [
      "Grünanlagenpflege sichert Werterhalt und Verkehrssicherheit zugleich: Rasen, Hecken, Beete, Wege und Bäume müssen so gepflegt werden, dass weder Wildwuchs entsteht noch Passanten durch herabhängende Äste oder ungesicherte Flächen gefährdet werden. Saubermatik plant Jahresprogramme — nicht reaktives Mähen „wenn es aussieht“, sondern saisonale Intervalle mit dokumentierten Einsätzen.",
      "Laubentsorgung im Herbst, Schnitt im Winter, Rasenpflege im Frühjahr, Bewässerungs-Checks im Sommer: alles im digitalen LV. Kombination mit Winterdienst und Gehwegreinigung eliminiert Schnittstellen an Eingängen und Zufahrten.",
      "Für Gewerbeobjekte und WEG: repräsentative Außenwirkung ohne Gärtner-Subunternehmer-Ketten — ein Ansprechpartner, ein SLA.",
    ],
    complianceTitle: "Verkehrssicherung im Außenbereich",
    complianceParagraphs: [
      "Herabfallende Äste, ungesicherte Spielgeräte-Nähe und rutschige Laubschichten sind klassische Haftungsthemen. Kontrollgänge und Protokolle sind Pflicht — nicht Kür.",
      "Pflanzenschutz und Entsorgung erfolgen fachgerecht; Schnittgut und Grüngut werden dokumentiert.",
      "Koordination mit Hausmeister und Reinigung: Außenanlage und Eingangsbereich wirken als Einheit.",
    ],
    operationalTitle: "Saisonplan & Disposition",
    operationalParagraphs: [
      "Wetter und Vegetationsphase steuern Einsätze — unsere Disposition kommuniziert Verschiebungen proaktiv.",
      "Feste Teams pro Region kennen die Objekte — Hecken, Bäume, sensibles Pflaster.",
      "Skalierbar von Einfamilien-WEG bis Gewerbepark mit mehreren Hektar.",
    ],
  },
  winterdienst: {
    breadcrumbLabel: "Winterdienst",
    normRefs: ["Verkehrssicherungspflicht", "§ 2 BetrKV", "BG BAU"],
    technicalTitle: "Winterdienst: Räum- & Streupflicht",
    technicalParagraphs: [
      "Winterdienst ist Haftungsmanagement: Räum- und Streupflicht müssen wettergeführt, nachweisbar und zeitnah erfüllt werden. Saubermatik betreibt ein Meldesystem mit Einsatzplänen, dokumentierten Einsätzen und definierten Streumittel-Strategien (Salz, Splitt, Harnstoff — abhängig von Objektvorgabe und Umweltauflagen).",
      "Gehwege, Zufahrten, Parkplätze, Treppen und Hauszugänge werden im digitalen LV abgebildet — inklusive Prioritäten (Medizin, Schule, WEG-Haupteingang). Bei Glätteereignissen eskalieren wir nach Plan — nicht nach Bauchgefühl.",
      "Kombination mit Treppenhausreinigung und Grünpflege: ein Partner für die gesamte Verkehrssicherungspflicht im Außen- und Übergangsbereich.",
    ],
    complianceTitle: "Haftung & BetrKV-Nachweis",
    complianceParagraphs: [
      "Undokumentierter Winterdienst scheitert im Schadensfall — vor Gericht und Versicherung. Unsere Protokolle zeigen: wann geräumt, wann gestreut, welche Fläche, welches Mittel.",
      "§ 2 BetrKV: umlagefähige, nachvollziehbare Abrechnung für WEG — keine undurchsichtigen Pauschalen.",
      "BG-BAU-orientierte Einsatzsicherheit für Mitarbeiter bei Nacht und Eis.",
    ],
    operationalTitle: "Wetterführung & Bereitschaft laut SLA",
    operationalParagraphs: [
      "Schneefall und Glätte warten nicht auf Bürozeiten — unsere Bereitschaftslogik ist Teil des SLA.",
      "Kommunikation an Verwalter bei Extremwetter: proaktiv, nicht reaktiv.",
      "Regionale Tourenbündelung entlang B27, B14, A81 — effizient für Multi-Objekt-Verwalter.",
    ],
  },
  grundreinigung: {
    breadcrumbLabel: "Grund- & Baureinigung",
    normRefs: ["DIN 18365", "VOB/C", "RKI", "VAH"],
    technicalTitle: "Grundreinigung: Bauabnahme & Tiefenreinigung",
    technicalParagraphs: [
      "Grundreinigung und Bauendreinigung sind meilensteingetrieben: Nach Sanierung, Neubau oder Mieterwechsel muss der Zustand abnahmefähig sein — besenrein reicht selten. Saubermatik entfernt Baustaub, Zementschleier, Folienreste und Feinpartikel materialspezifisch, ohne Oberflächen zu beschädigen.",
      "DIN 18365 und VOB/C-orientierte Übergaben: Bodenbeläge werden eingepflegt, Sanitär desinfiziert, Glas und Rahmen final gereinigt. In Praxen und Laborn: RKI-konforme Desinfektion, VAH-gelistete Mittel, dokumentierte Freigabe.",
      "Projektleitung koordiniert Gewerke, Termine und Zugänge — ein Ansprechpartner bis zur keys-off-Übergabe.",
    ],
    complianceTitle: "Abnahme & Hygiene-Freigabe",
    complianceParagraphs: [
      "Bauabnahme ohne Reinigungsmängel spart Verzug und Nacharbeit. Wir liefern Protokolle für Architekten, Projektsteuerer und Eigentümer.",
      "Medizinische und gewerbliche Nutzer erhalten hygiene-relevante Freigabe-Dokumentation — nicht nur „sauber“ als subjektives Urteil.",
      "Entsorgung von Bauabfällen und Sondermüll koordiniert — rechtssicher, nicht im Hinterhof.",
    ],
    operationalTitle: "Projektphasen & Meilensteine",
    operationalParagraphs: [
      "Großreinigung in Phasen: Grob, Fein, Einpflege, Freigabe — abgestimmt mit Bauleitung.",
      "Skalierbare Teams für Hallen, Bürokomplexe und MFH-Übergaben.",
      "Kombination mit Entrümpelung und Unterhaltsreinigung — nahtloser Übergang in den Betrieb.",
    ],
  },
  fassadenreinigung: {
    breadcrumbLabel: "Fassadenreinigung",
    normRefs: ["TRBS 2121", "BG BAU", "Werterhalt"],
    technicalTitle: "Fassaden: Materialgerecht & werterhaltend",
    technicalParagraphs: [
      "Fassadenreinigung ist Werterhalt, nicht Kosmetik: Naturstein, Klinker, Glas, Metall und Putz reagieren unterschiedlich auf Druck, Chemie und Temperatur. Saubermatik wählt Verfahren materialspezifisch — Algen- und Moosentfernung, Schutz vor Rückbefall, schonende Biozid-Anwendung nur wo fachlich vertretbar.",
      "TRBS 2121 und BG-BAU steuern Höhenarbeit: Seilzugang, Gerüst, Hubsteiger — dokumentiert und versichert. Sperrungen und Fußgänger-Leitung bei urbanen Lagen sind Teil der Planung.",
      "Kombination mit Glasreinigung und Unterhalt: eine Fassade, ein Partner, ein SLA.",
    ],
    complianceTitle: "Denkmalschutz & Energieeffizienz",
    complianceParagraphs: [
      "Historische Bestände (Rottweil, Rottenburg) erfordern besondere Rücksicht — keine aggressiven Verfahren ohne Abstimmung.",
      "Verschmutzte Fassaden mindern Energieeffizienz und Mietwert — dokumentierte Reinigung ist Investition, nicht Kostenstelle.",
      "Umweltauflagen bei Abwasser und Bioziden werden eingehalten — Nachweis für Behörden.",
    ],
    operationalTitle: "Projektplanung & Langfrist-Turnus",
    operationalParagraphs: [
      "Einmal-Grundreinigung oder Wiederholungs-Turnus — beides im LV abbildbar.",
      "Fotodokumentation vor/nach für Facility und Eigentümer.",
      "Regionale Teams mit Erfahrung an Industrie- und Verwaltungsfassaden entlang B27/B14.",
    ],
  },
  entruempelung: {
    breadcrumbLabel: "Entrümpelung",
    normRefs: ["Entsorgungsnachweis", "Datenschutz", "Besenrein"],
    technicalTitle: "Entrümpelung: Haushaltsauflösung & besenreine Übergabe",
    technicalParagraphs: [
      "Entrümpelung und Haushaltsauflösung erfordern Diskretion, Tempo und rechtssichere Entsorgung. Saubermatik koordiniert Sortierung, Wertstofftrennung, Entsorgungsnachweise und Endreinigung — besenreite Übergabe an Eigentümer, Verwalter oder Nachmieter.",
      "Gewerberäumung, Nachlass, Zwangsverwaltung: sensible Daten und persönliche Gegenstände werden nach Vorgabe behandelt — Zerstörung nur dokumentiert und beauftragt.",
      "Kombination mit Grundreinigung und Hausmeisterservice — ein Prozess bis zur Schlüsselübergabe.",
    ],
    complianceTitle: "Entsorgung & Nachweispflicht",
    complianceParagraphs: [
      "Elektroschrott, Farben, Sondermüll — fachgerecht, nicht im Restmüll.",
      "Entsorgungsnachweise für Verwalter und Erben — rechtssicher archiviert.",
      "Versicherung und Haftung bei Transport und Demontage — professionell, nicht „Kumpel mit Transporter“.",
    ],
    operationalTitle: "Termintreue & Diskretion",
    operationalParagraphs: [
      "Feste Termine für Übergaben und Notar — wir halten Meilensteine.",
      "Diskrete Abwicklung bei Nachlass — respektvoller Umgang.",
      "Regionale Kapazität für MFH, Büro und Lagerflächen.",
    ],
  },
  sonstiges: {
    breadcrumbLabel: "Spezialanfrage",
    normRefs: ["DIN EN 13549", "RKI", "VAH", "Ausschreibung"],
    technicalTitle: "Spezialreinigung: Teppich, Events & Sonderdesinfektion",
    technicalParagraphs: [
      "Spezialanfragen — Teppich- und Polsterreinigung, Event-Reinigung, Industrie-Sonderflächen, Ausschreibungsprojekte — werden bei Saubermatik nicht abgewiesen, sondern in messbare Leistungsverzeichnisse übersetzt. Jedes Briefing durchläuft Audit, LV-Erstellung und Kick-Off — identisch zum B2B-Onboarding.",
      "RKI-konforme Sonderdesinfektion und VAH-gelistete Verfahren für Praxen, Labore und Lebensmittel-Nähe. Teppichreinigung mit Werterhalt-Fokus — kein „nass bis in die Dämmung“ ohne Konzept.",
      "Event-SLAs mit definierten Reaktionszeiten und Ausfallsicherheit — Messen, Stadtfeste, Produktionswechsel in Industriezonen.",
    ],
    complianceTitle: "Ausschreibung & Compliance",
    complianceParagraphs: [
      "Öffentliche und konzernweite Ausschreibungen: strukturierte LV-Texte, Referenzen, BG- und TRBS-Nachweise.",
      "DIN EN 13549-orientiertes Echtzeit-QM auch für Sonderprojekte — nicht nur für Standard-Unterhalt.",
      "Datenschutz und Zutrittsregeln in sensiblen Objekten — schriftlich fixiert.",
    ],
    operationalTitle: "Skalierung & Projektleitung",
    operationalParagraphs: [
      "Temporäre Team-Skalierung über die Saubermatik-Plattform — ohne Qualitätsbruch.",
      "Ein Projektleiter pro Sonderauftrag — klare Eskalation.",
      "Regionale Reichweite Zollernalb bis Stuttgart/Bodensee — ein Prozess.",
    ],
  },
};

export function getMatrixServiceTech(
  slug: MatrixServiceSlug,
): MatrixServiceTechBlock {
  return MATRIX_SERVICE_TECH[slug];
}
