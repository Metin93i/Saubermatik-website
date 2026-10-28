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
      "Professionelle Unterhaltsreinigung beginnt bei Saubermatik mit dem 4-Farb-System zur Vermeidung von Kreuzkontamination: Rot für Sanitärbereiche, Gelb für Waschbecken und Armaturen, Blau für Büromöbel und Inventar, Grün für Teeküchen und Aufenthaltszonen. Jede Farbe ist physisch getrennt — eigene Eimer, Mikrofasertücher und Mopp-Systeme pro Objekt.",
      "Bodenbeläge werden materialspezifisch behandelt: Vinyl, Designboden, Naturstein, Linoleum und Teppich erhalten unterschiedliche pH-Wert-Profile. Alkalische Grundreiniger nur dort, wo das Pflegekonzept es vorsieht; neutrale Unterhaltsreiniger für den Tagesbetrieb. In Praxen und medizinischen Nebenräumen stimmen wir Desinfektionsmittel und Ablauf mit Ihrem Hygieneplan ab — Mittel nach anerkannten Standards, dokumentiert im Leistungsverzeichnis.",
      "In Anlehnung an DIN EN 13549 definieren wir messbare Qualität: Leistungsumfang, Intervalle und Abnahmekriterien werden vor Vertragsbeginn schriftlich fixiert. Vertretung und Kapazität regeln wir vor Leistungsbeginn schriftlich; Nachweise erhalten Sie als Protokoll (PDF).",
    ],
    complianceTitle: "Compliance: HACCP, RKI & Praxishygiene",
    complianceParagraphs: [
      "Teeküchen und Kantinen in Büro- und Verwaltungsgebäuden unterliegen praktischen HACCP-Anforderungen: Lebensmittelkontaktflächen, Abfallzonen und Spülbecken werden getrennt behandelt. Mängel (undichte Kühlschränke, Schimmelansätze, defekte Lüftungen) melden wir — ein Frühwarnsystem für Facility und Eigentümer.",
      "In Arztpraxen und medizinischen MVZ kombinieren wir Unterhaltsreinigung mit desinfizierenden Zwischenreinigungen in Behandlungs- und Wartezonen. Grundlage ist Ihr Hygieneplan; Mittel nach anerkannten Standards. Für Hausverwaltungen mit gemischten Mieterstrukturen bedeutet das: ein Partner, der Büroflächen und hygiene-sensitive Bereiche im selben Gebäude betreut.",
      "Abrechnung und Nachweis erfolgen digital: dokumentierte Einsätze (Umfang je nach Objekt und Vereinbarung), exportierbare Protokolle für Nebenkosten, ISO-Audits und Eigentümerversammlungen. Transparente SLAs ohne versteckte Zusatzpositionen.",
    ],
    operationalTitle: "Betrieb: Intervalle, Touren & Vertretung",
    operationalParagraphs: [
      "Unterhaltsreinigung lebt von Konstanz: feste Zeitfenster, feste Checklisten. Saubermatik plant Touren entlang realer Verkehrsachsen; Vertretung bei Urlaub oder Ausfall regeln wir vor Leistungsbeginn schriftlich.",
      "Verbrauchsmaterial (Seifen, Papier, Müllbeutel) kann optional integriert werden — ein Ansprechpartner, eine Rechnung. Jedes Objekt erhält sein digitales LV, die Zentrale behält den Überblick.",
      "Bei Vertragsverlängerung legen wir die Protokolle zu Einsätzen und Reaktionszeiten vor. Das ist Handwerk mit nachvollziehbarer Dokumentation — nicht anonyme Subunternehmer-Ketten.",
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
    operationalTitle: "Tourenplanung & streifenfreies Ergebnis",
    operationalParagraphs: [
      "Glas-Touren sind wetterabhängig: Wind, Frost und Starkregen verschieben Einsätze. Wir kommunizieren proaktiv — kein Schweigen bis zur Reklamation. Ersatztermine stimmen wir mit Ihnen ab und dokumentieren sie.",
      "Für Hochhäuser und Hallenfassaden koordinieren wir Hubsteiger, Seilzugang oder Gerüstbauer — ein Projektleiter, ein SLA. Dokumentierte Einsätze halten den Zustand vor/nach nachvollziehbar, besonders bei Übergaben und Mietvertragswechsel (Umfang je nach Vereinbarung).",
      "Streifenfreiheit merken wir selbst und arbeiten nach. Eine Garantiezusage geben wir nicht; Reklamationen werden als QM-Signal verarbeitet.",
    ],
  },
  treppenhausreinigung: {
    breadcrumbLabel: "Treppenhausreinigung",
    normRefs: ["§ 2 BetrKV", "Verkehrssicherungspflicht", "DIN EN 13549"],
    technicalTitle: "Treppenhaus: Verkehrssicherung & Trittsicherheit",
    technicalParagraphs: [
      "Treppenhausreinigung ist Verkehrssicherungspflicht in Reinform: Stufen, Podeste, Handläufe, Schmutzfangmatten und Eingangsbereiche müssen so betreut werden, dass Sturz- und Rutschrisiken minimiert werden. Saubermatik arbeitet checklistenbasiert — jede Position im Treppenhaus ist im digitalen LV abgebildet, Einsätze werden protokolliert.",
      "Materialspezifische Pflege: Stein, Granit, PVC, Gummi, Holz und Metall erhalten passende Reinigungs- und Pflegemittel. Feuchtigkeit wird zeitnah entfernt, Streusalzreste in Wintermonaten koordiniert mit unserem Winterdienst — eine durchgängige Logik statt widersprüchlicher Dienstleister.",
      "Für WEG und Hausverwaltungen liefern wir objektbezogene Nachweise: transparente Intervalle, objektbezogene Abrechnung, digitale Protokolle für Eigentümerversammlungen. Ob die Kosten umlagefähig sind, richtet sich nach Mietvertrag und § 2 BetrKV.",
    ],
    complianceTitle: "Haftung, BetrKV & Mieterkommunikation",
    complianceParagraphs: [
      "Undokumentierte Treppenhausreinigung ist im Schadensfall wertlos — Versicherer und Gerichte fragen nach Sorgfaltspflicht, nicht nach gutem Willen. Dokumentierte Einsätze schaffen nachvollziehbare Belege (Umfang je nach Objekt und Vereinbarung).",
      "Repräsentativität: Eingänge, Spiegel, Glas, Briefkastenzonen und Fahrstuhl-Vorhallen prägen den ersten Eindruck bei Vermietung und Verkauf. Saubermatik plant leise Geräte und störungsarme Zeitfenster — wichtig in Wohnobjekten mit Kinderwagen, Lieferverkehr und Schichtbetrieb.",
      "Mängelmeldung ist Teil des Service: defekte Beleuchtung, lose Geländer, rissige Stufen werden eskaliert — bevor der Mieter stolpert.",
    ],
    operationalTitle: "WEG-Touren & Vertretung",
    operationalParagraphs: [
      "Ein fester Ansprechpartner — der Inhaber persönlich — sichert Wiedererkennung und Qualität. Verwalter sparen Koordinationszeit; Mieter erleben Konstanz. Vertretung bei Urlaub oder Ausfall regeln wir vor Leistungsbeginn schriftlich.",
      "Kombination mit Winterdienst, Grünpflege und Hausmeisterservice aus einem Portfolio: ein Ansprechpartner, ein SLA, ein Kundenportal (im Aufbau).",
      "Vom Einzel-MFH bis zum Verwalter-Portfolio — Umfang und Kapazität klären wir vor dem Angebot.",
    ],
  },
  hausmeisterservice: {
    breadcrumbLabel: "Hausmeisterservice",
    normRefs: ["Verkehrssicherungspflicht", "§ 2 BetrKV"],
    technicalTitle: "Hausmeisterservice: Objektbetreuung & Eskalation",
    technicalParagraphs: [
      "Hausmeisterservice bei Saubermatik bedeutet mehr als „mal eben reparieren“: strukturierte Kontrollgänge, definierte Reaktionszeiten, dokumentierte Mängelmeldungen und klare Grenzen zwischen Hausmeister-Light und Gewerke-Beauftragung. Jede Liegenschaft erhält ein digitales Betriebshandbuch — Schlüssel, Zugänge, Notfallkontakte, wiederkehrende Aufgaben.",
      "Typische Leistungen: Ausfälle der Beleuchtung melden (Wechsel nach Festlegung durch eine Elektrofachkraft), einfache Kleinreparaturen ohne Eingriff in Elektro-, Sanitär-, Brandschutz- und Sicherheitstechnik (Fachgewerke koordinieren wir nach Freigabe), Müllplatz-Pflege, Übergabeprotokolle bei Mieterwechsel, Begleitung von Fremdfirmen nach Vorgabe des Auftraggebers. Für Hausverwaltungen ist das die Entlastung des technischen Property Managements — ohne Vollzeit-Hausmeister auf der Payroll.",
      "Im MFH-Kontext kombinieren wir Hausmeister-Light mit Treppenhausreinigung, Winterdienst und Grünpflege — ein integriertes Liegenschafts-SLA statt vier getrennter Verträge mit vier Ansprechpartnern.",
    ],
    complianceTitle: "Verkehrssicherung & NK-Abrechnung",
    complianceParagraphs: [
      "Verkehrssicherungspflicht endet nicht am Treppenhaus: Gehwege, Beleuchtung, Spielplätze und Müllplatz-Hygiene gehören zum Gesamtbild. Saubermatik dokumentiert Sichtkontrollen, Meldungen und Maßnahmen — für Abrechnung, Versicherung und Eigentümerversammlung. Prüfungen (z. B. Spielgeräte, Sicherheitsbeleuchtung) bleiben bei Fachbetrieben.",
      "Kosten weisen wir objektbezogen aus; ob sie umlagefähig sind, richtet sich nach Mietvertrag und § 2 BetrKV. Digitale Protokolle ersetzen Zettelwirtschaft im Keller — Verwalter und Beirat sehen, was wann erledigt wurde.",
      "Eskalationswege sind vordefiniert: Was erledigt der Hausmeister sofort, was geht an den zuständigen Gewerk? Klare Regeln verhindern teure Verzögerungen.",
    ],
    operationalTitle: "WE-Umfang & fester Ansprechpartner",
    operationalParagraphs: [
      "Für Mehrfamilienhäuser staffeln wir Touren nach Objekt – eine erste Orientierung besprechen wir im Gespräch, das verbindliche Angebot folgt nach Objektbegehung.",
      "Ihr fester Ansprechpartner ist der Inhaber persönlich — über das gesamte Portfolio: ein Gesicht, ein SLA.",
      "Ausfälle: Vertretung bei Krankheit und Urlaub regeln wir vor Leistungsbeginn schriftlich — damit das Objekt im Rhythmus bleibt.",
    ],
  },
  gruenanlagenpflege: {
    breadcrumbLabel: "Grünanlagenpflege",
    normRefs: ["Verkehrssicherungspflicht", "§ 39 BNatSchG"],
    technicalTitle: "Grünanlagen: Werterhalt & Jahresprogramm",
    technicalParagraphs: [
      "Grünanlagenpflege unterstützt Werterhalt und Verkehrssicherheit zugleich: Rasen, Hecken, Beete und Wege werden so gepflegt, dass kein Wildwuchs entsteht; auffällige Äste oder Schäden an Bäumen melden wir — Baumkontrolle und Baumpflege übernimmt ein qualifizierter Fachbetrieb. Saubermatik plant Jahresprogramme — nicht reaktives Mähen „wenn es aussieht“, sondern saisonale Intervalle mit dokumentierten Einsätzen.",
      "Laubentsorgung im Herbst, Schnitt im Winter (unter Beachtung der Schnittzeiten nach § 39 BNatSchG: 1.3.–30.9. nur schonende Form- und Pflegeschnitte), Rasenpflege im Frühjahr, Bewässerungs-Checks im Sommer: alles im digitalen LV. Kombination mit Winterdienst und Gehwegreinigung eliminiert Schnittstellen an Eingängen und Zufahrten.",
      "Für Gewerbeobjekte und WEG: repräsentative Außenwirkung — ein Ansprechpartner, ein SLA.",
    ],
    complianceTitle: "Verkehrssicherung im Außenbereich",
    complianceParagraphs: [
      "Herabfallende Äste, ungesicherte Spielgeräte-Nähe und rutschige Laubschichten sind klassische Haftungsthemen. Auffälligkeiten melden wir bei unseren Kontrollgängen und protokollieren sie; Baumkontrolle und Spielplatzinspektion gehören in die Hand qualifizierter Fachleute.",
      "Pflanzenschutzmittel setzen wir nicht ein: Wildkraut entfernen wir mechanisch oder thermisch (auf befestigten Flächen sind Herbizide ohnehin verboten, § 12 Abs. 2 PflSchG). Schnittgut und Grüngut werden dokumentiert.",
      "Koordination mit Hausmeister und Reinigung: Außenanlage und Eingangsbereich wirken als Einheit.",
    ],
    operationalTitle: "Saisonplan & Touren",
    operationalParagraphs: [
      "Wetter und Vegetationsphase steuern Einsätze — Verschiebungen kommunizieren wir proaktiv.",
      "Ihr fester Ansprechpartner — der Inhaber persönlich — kennt die Objekte: Hecken, Beete, sensibles Pflaster.",
      "Für Wohnanlagen, WEG und Gewerbeflächen — Umfang und Kapazität klären wir vor dem Angebot.",
    ],
  },
  winterdienst: {
    breadcrumbLabel: "Winterdienst",
    normRefs: ["Verkehrssicherungspflicht", "§ 2 BetrKV", "BG BAU"],
    technicalTitle: "Winterdienst: Räum- & Streupflicht",
    technicalParagraphs: [
      "Winterdienst ist Verkehrssicherung: Räumen und Streuen müssen nach vereinbarten Kriterien, nachweisbar und zeitnah erfolgen. Saubermatik arbeitet mit schriftlichem Winterdienstplan, dokumentierten Einsätzen und Streumitteln nach örtlicher Satzung und Vorgabe des Auftraggebers.",
      "Gehwege, Zufahrten, Parkplätze, Treppen und Hauszugänge werden im digitalen LV abgebildet — inklusive Prioritäten (Medizin, Schule, WEG-Haupteingang). Bei Glätteereignissen eskalieren wir nach Plan — nicht nach Bauchgefühl.",
      "Kombination mit Treppenhausreinigung und Grünpflege: ein Partner für die vertraglich übernommenen Flächen im Außen- und Übergangsbereich.",
    ],
    complianceTitle: "Haftung & BetrKV-Nachweis",
    complianceParagraphs: [
      "Im Schadensfall zählt, was dokumentiert ist. Unsere Protokolle zeigen: wann geräumt, wann gestreut, welche Fläche, welches Mittel. Die Verkehrssicherungspflicht übernehmen wir nur auf Grundlage einer klaren schriftlichen Vereinbarung; Ihre Kontroll- und Überwachungspflicht als Auftraggeber bleibt bestehen.",
      "Objektbezogene, nachvollziehbare Abrechnung für WEG — keine undurchsichtigen Pauschalen. Ob die Kosten umlagefähig sind, richtet sich nach Mietvertrag und § 2 BetrKV.",
      "BG-BAU-orientierte Arbeitssicherheit bei Nacht und Eis.",
    ],
    operationalTitle: "Einsatzauslösung in der Saison",
    operationalParagraphs: [
      "Schneefall und Glätte kommen in der Saison — Einsatzauslösung nach vereinbarten Kriterien; Einsatzfenster und Fertigstellungszeiten vereinbaren wir im Vertrag, ohne Rund-um-die-Uhr-Bereitschaft.",
      "Kommunikation an Verwalter bei Extremwetter: proaktiv, nicht reaktiv.",
      "Touren und Kapazität klären wir je Objekt vor Saisonbeginn — auch für Multi-Objekt-Verwalter.",
    ],
  },
  grundreinigung: {
    breadcrumbLabel: "Grund- & Baureinigung",
    normRefs: ["DIN 18365", "VOB/C", "RKI", "VAH"],
    technicalTitle: "Grundreinigung: Bauabnahme & Tiefenreinigung",
    technicalParagraphs: [
      "Grundreinigung und Bauendreinigung sind meilensteingetrieben: Nach Sanierung, Neubau oder Mieterwechsel muss der Zustand abnahmefähig sein — besenrein reicht selten. Saubermatik entfernt Baustaub, Zementschleier, Folienreste und Feinpartikel materialspezifisch, ohne Oberflächen zu beschädigen.",
      "DIN 18365 und VOB/C-orientierte Übergaben: Bodenbeläge werden eingepflegt, Sanitär desinfiziert, Glas und Rahmen final gereinigt. In Praxen und Laboren: Desinfektion nach Hygieneplan, Mittel nach anerkannten Standards, dokumentierte Freigabe.",
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
      "Hallen, Bürokomplexe und MFH-Übergaben — Umfang und Kapazität klären wir vor dem Angebot.",
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
      "Einsatzprotokoll (PDF) für Facility und Eigentümer.",
      "Industrie- und Verwaltungsfassaden entlang B27/B14 — Umfang und Kapazität klären wir vor dem Angebot.",
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
      "Entsorgungsnachweise für Verwalter und Erben — vollständig übergeben.",
      "Versicherung und Haftung bei Transport und Demontage — professionell, nicht „Kumpel mit Transporter“.",
    ],
    operationalTitle: "Termintreue & Diskretion",
    operationalParagraphs: [
      "Feste Termine für Übergaben und Notar — wir halten Meilensteine.",
      "Diskrete Abwicklung bei Nachlass — respektvoller Umgang.",
      "MFH, Büro und Lagerflächen — Umfang und Kapazität klären wir vor dem Angebot.",
    ],
  },
  sonstiges: {
    breadcrumbLabel: "Spezialanfrage",
    normRefs: ["DIN EN 13549", "RKI", "VAH", "Ausschreibung"],
    technicalTitle: "Spezialreinigung: Teppich, Events & Sonderdesinfektion",
    technicalParagraphs: [
      "Spezialanfragen — Teppich- und Polsterreinigung, Event-Reinigung, Industrie-Sonderflächen, Ausschreibungsprojekte — werden bei Saubermatik nicht abgewiesen, sondern in Leistungsverzeichnisse übersetzt. Jedes Briefing durchläuft Begehung, LV-Erstellung und Start.",
      "Sonderdesinfektion nach Hygieneplan und anerkannten Standards für Praxen, Labore und Lebensmittel-Nähe. Teppichreinigung mit Werterhalt-Fokus — kein „nass bis in die Dämmung“ ohne Konzept.",
      "Event-Einsätze mit vereinbarten Reaktionszeiten — Messen, Stadtfeste, Produktionswechsel in Industriezonen.",
    ],
    complianceTitle: "Ausschreibung & Compliance",
    complianceParagraphs: [
      "Öffentliche und konzernweite Ausschreibungen: strukturierte LV-Texte, Versicherungsnachweis, BG- und TRBS-Nachweise.",
      "Dokumentierte Qualität in Anlehnung an DIN EN 13549 auch für Sonderprojekte — nicht nur für Standard-Unterhalt.",
      "Datenschutz und Zutrittsregeln in sensiblen Objekten — schriftlich fixiert.",
    ],
    operationalTitle: "Umfang & Projektleitung",
    operationalParagraphs: [
      "Temporäre Einsätze nach Absprache — Umfang und Kapazität klären wir vor dem Angebot.",
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
