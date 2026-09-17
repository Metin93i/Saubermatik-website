export const LEXIKON_TERMS = [
  "haccp-reinigung",
  "ph-werte-bodenreinigung",
  "din-13063-krankenhausreinigung",
  "facility-management-software-cafm",
  "din-31051-instandhaltung-reinigung",
  "sla-service-level-agreement",
  "farbcode-system-hygiene",
  "unterhaltsreinigung-vs-grundreinigung",
] as const;

export type LexikonTermSlug = (typeof LEXIKON_TERMS)[number];

export type LexikonEntry = {
  slug: LexikonTermSlug;
  title: string;
  summary: string;
  paragraphs: readonly string[];
};

export const LEXIKON_BY_SLUG: Record<LexikonTermSlug, LexikonEntry> = {
  "haccp-reinigung": {
    slug: "haccp-reinigung",
    title: "HACCP-Reinigung",
    summary:
      "Hygienepläne nach HACCP für Lebensmittelbetriebe, Gastronomie und sensible Gewerbeobjekte – dokumentiert und auditierbar.",
    paragraphs: [
      "HACCP (Hazard Analysis and Critical Control Points) verlangt, dass Reinigung und Desinfektion nachvollziehbar geplant, ausgeführt und kontrolliert werden. In der Praxis heißt das: definierte Reinigungszonen, freigegebene Mittel, Schulungsnachweise und Protokolle bei Abweichungen.",
      "Saubermatik verknüpft HACCP-orientierte Checklisten mit der digitalen Objektsteuerung – Facility-Verantwortliche sehen Einsätze und Korrekturen ohne Excel-Chaos. Für Audits und Behördenkontakte liefern wir strukturierte Nachweise statt Bauchgefühl.",
      "Für Einkäufer zählt die Trennung von Kontaminationspfaden: Roherzeugnis, Verarbeitung, Ausgabe und Lager müssen hygienisch entkoppelt sein. Wir definieren Farb- und Gerätezonen, dokumentieren Desinfektionsfenster und schulen Teams auf kritische Kontrollpunkte – nicht nur auf „sauber wirken“.",
      "In der Due-Diligence-Phase fragen Konzerne nach wiederholbaren KPIs: Abweichungsquote, Reaktionszeit bei Befunden, Nachweis der Mittelchargen. Unsere Plattform liefert diese Daten exportierbar – ein Vorteil gegenüber rein manuellen Anbietern ohne Systemanbindung.",
    ],
  },
  "ph-werte-bodenreinigung": {
    slug: "ph-werte-bodenreinigung",
    title: "pH-Werte in der Bodenreinigung",
    summary:
      "Warum der pH-Wert über Materialschutz, Rutschsicherheit und Lebensdauer von Bodenbelägen entscheidet.",
    paragraphs: [
      "Jeder Bodenbelag reagiert unterschiedlich auf Säuren und Laugen: Naturstein, Linoleum, Designboden oder versiegeltes Parkett verlangen materialgerechte pH-Bereiche. Falsche Mittel führen zu Mattstellen, Klebrigkeit oder irreversiblen Schäden.",
      "Unsere Teams arbeiten mit freigegebenen Tensid- und Pflegesystemen – dokumentiert pro Objekt. So bleibt die Oberfläche hygienisch sauber, ohne die Substanz zu opfern. Das senkt Folgekosten und Reklamationen messbar.",
      "Facility Manager sollten pH-Werte nicht als Chemie-Detail abtun, sondern als Vertragsvariable: In SLAs können pH-Toleranzen, Probenahme und Korrekturmaßnahmen verbindlich festgelegt werden. Das schützt vor Haftungsrisiken bei Rutschfällen oder Beschichtungsschäden.",
      "In Produktions- und Logistikflächen kollidieren oft Öl-/Fettbelastung mit alkalischer Grundreinigung. Wir planen Intervall- und Mittelwechsel so, dass Zwischenpflege und Grundreinigung sich nicht gegenseitig zerstören – inklusive dokumentierter Freigabe durch den Objektleiter.",
    ],
  },
  "din-13063-krankenhausreinigung": {
    slug: "din-13063-krankenhausreinigung",
    title: "DIN 13063 (Krankenhausreinigung)",
    summary:
      "Orientierung an DIN 13063 für Reinigung in Gesundheitseinrichtungen – Risikozonen, Intervalle und Nachweislogik.",
    paragraphs: [
      "Die DIN 13063 strukturiert Anforderungen an die Reinigung und Desinfektion in medizinischen Einrichtungen – von Risikogruppen über Flächenklassen bis zu Prüfintervallen. Auch außerhalb von Kliniken nutzen Praxen und Labore diese Logik als Qualitätsrahmen.",
      "Saubermatik übersetzt Normen in umsetzbare Tourenpläne: getrennte Einsatzketten, PSA, dokumentierte Desinfektionsfenster und Eskalation bei Abweichungen. So bleibt Compliance prüfbar – nicht nur auf dem Papier.",
      "Für nicht-klinische, aber sensible Gewerbeobjekte (Arztpraxen, Labore, Reha) lohnt sich die DIN-Logik als Benchmark in Ausschreibungen: Sie schafft eine gemeinsame Sprache zwischen Einkauf, Hygienebeauftragten und Dienstleister – unabhängig von Marketingversprechen.",
      "Die digitale Objektsteuerung ergänzt die Norm um dokumentierte Nachweise: Welche Fläche wurde wann in welcher Risikoklasse bearbeitet? Wer war vor Ort? Welche Abweichung wurde binnen welcher Frist geschlossen? Das ist die Brücke zwischen Norm und Betrieb.",
    ],
  },
  "facility-management-software-cafm": {
    slug: "facility-management-software-cafm",
    title: "Facility Management Software (CAFM)",
    summary:
      "Computer Aided Facility Management (CAFM) als Steuerungszentrale – und wie Saubermatik Reinigungsdaten in Ihre Betriebslogik einspielt.",
    paragraphs: [
      "CAFM-Systeme bündeln Flächendaten, Wartungsintervalle, Störungen, Verträge und Kostenstellen in einer digitalen Gebäudewahrheit. Für Konzerne ist CAFM die Basis für Portfoliomanagement: Welches Objekt kostet wie viel, wo sind Risiken, wo drohen SLA-Verletzungen?",
      "Reinigung ist im CAFM-Kontext selten isoliert – sie kollidiert mit Instandhaltung, Sicherheitsdienst, Catering und Energiemanagement. Ohne saubere Schnittstellen entstehen Medienbrüche: Excel-Listen, PDF-Protokolle, Messenger-Gruppen. Genau hier setzt Saubermatik an: unsere Plattform exportiert strukturierte Einsatz- und Qualitätsdaten, die in Ihr CAFM oder Reporting-Tool überführt werden können.",
      "Für Einkäufer bedeutet CAFM-Reife: weniger Blindflug. Statt „Reinigung läuft irgendwie“ sehen Sie dokumentierte Touren, Ausfallersatz, Reklamationszyklen und KPI-Trends. Das erleichtert Benchmarks zwischen Standorten und die Verteidigung von Budgets gegenüber CFO und Revision.",
      "Die Integration folgt keinem starren Vendor-Lock-in: Wir liefern definierte Datenfelder (Objekt-ID, Zone, Leistung, Zeitstempel, Mängelstatus) und abstimmbare Exportrhythmen. Ob SAP, Planon, Archibus oder ein eigenes Data Warehouse – entscheidend ist die Vertraglichkeit der Datenqualität, nicht das Logo auf der Folie.",
    ],
  },
  "din-31051-instandhaltung-reinigung": {
    slug: "din-31051-instandhaltung-reinigung",
    title: "DIN 31051 (Grundlagen der Instandhaltung)",
    summary:
      "DIN 31051 als Rahmen für planbare Instandhaltung – und die Rolle professioneller Reinigung im Lebenszyklus von Gebäuden.",
    paragraphs: [
      "Die DIN 31051 beschreibt Grundlagen der Instandhaltung: Zustandserfassung, Planung, Durchführung und Bewertung. Reinigung ist dabei keine Nebenkostenposition, sondern präventive Instandhaltung – sie schützt Oberflächen, verlängert Nutzungsdauern und verhindert Folgeschäden durch Verschmutzung oder falsche Pflege.",
      "Facility Manager nutzen die Norm, um Reinigung, Wartung und Sanierung in einem Gesamtbudget zu denken. Wer nur auf Reparaturen reagiert, zahlt später mehr. Wer Reinigungsintervalle materialgerecht plant, stabilisiert CAPEX und reduziert Stillstandsrisiken in sensiblen Bereichen.",
      "In Ausschreibungen hilft die DIN-31051-Logik, Leistungstexte präziser zu formulieren: Nicht „Boden wischen“, sondern definierte Zustandsgrade, Prüfzyklen und Dokumentationspflichten. Saubermatik übersetzt diese Anforderungen in SLA-KPIs und digitale Nachweise – nicht in vage Versprechen.",
      "Die Verzahnung mit digitaler Objektsteuerung ist entscheidend: Zustandsfotos, Mängellisten und Korrekturmaßnahmen werden historisiert. Bei Übergaben, Mietvertragsende oder Auditorenfragen liegt die Beweiskette vor – nicht im E-Mail-Archiv des Hausmeisters.",
      "Für Konzerne mit mehreren Standorten schafft DIN 31051 eine gemeinsame Sprache zwischen Technik, Einkauf und Betrieb. Reinigung wird messbar, vergleichbar und steuerbar – ein Kernargument gegen rein preisgetriebene Vergaben ohne Qualitätsarchitektur.",
    ],
  },
  "sla-service-level-agreement": {
    slug: "sla-service-level-agreement",
    title: "SLA (Service Level Agreement)",
    summary:
      "Service Level Agreements in der Gebäudereinigung: KPIs, Reaktionszeiten, Nachweise und was Einkauf wirklich prüfen sollte.",
    paragraphs: [
      "Ein SLA ist der vertragliche Kern zwischen Auftraggeber und Dienstleister – nicht das Anschreiben mit Marketingfloskeln. Es definiert messbare Leistungen: Reaktionszeiten bei Mängeln, Mindestqualität je Zone, Nachweispflichten, Eskalationsstufen und Review-Zyklen.",
      "Typische KPIs in der Reinigung: Erfüllungsquote geplanter Touren, Zeit bis zur Mängelbehebung, Wiederholungsquote bei Reklamationen, Ausfallquote ohne Ersatzlogik, Dokumentationsvollständigkeit. Ohne KPIs bleibt „sauber“ subjektiv – und streitanfällig.",
      "Saubermatik strukturiert Vereinbarungen vor Vertragsstart: Zonenplan, Materialfreigaben, Sicherheitsvorgaben und Kommunikationswege werden fixiert. Die Plattform liefert die Datenbasis – nicht das Bauchgefühl des Vorarbeiters.",
      "Für Einkauf und Revision zählen Sanktionen und Transparenz: Was passiert bei SLA-Verletzung? Wer ist erreichbar? Wie werden Abweichungen innerhalb der vereinbarten Reaktionsfenster geschlossen? Ein SLA ohne Eskalationsmatrix ist nur ein PDF ohne Zähne.",
      "Großkonzerne koppeln SLAs an Bonus-Malus-Modelle. Das funktioniert nur mit digitaler Nachweisführung. Manuelle Zettelwirtschaft scheitert bei größeren Portfolios – hier gewinnt, wer Protokolle, Fotos und Zeitstempel revisionssicher liefert.",
    ],
  },
  "farbcode-system-hygiene": {
    slug: "farbcode-system-hygiene",
    title: "Farbcode-System (Hygienestandards)",
    summary:
      "Farbcodierte Reinigungssysteme zur Vermeidung von Kreuzkontamination – Pflicht in Lebensmittel, Pharma und hochsensiblen Gewerbeobjekten.",
    paragraphs: [
      "Farbcode-Systeme trennen Reinigungsmittel, Eimer, Tücher und Geräte nach Zonen – typischerweise Sanitär (rot), Küche/Gastro (blau), Allgemeinbereiche (grün) und Hochrisiko (gelb/weiß je Standard). Ziel: keine Kreuzkontamination zwischen Bakterienlasten unterschiedlicher Bereiche.",
      "In der Praxis scheitern Farbsysteme ohne Schulung und Kontrolle: Geräte wandern zwischen Zonen, Beschriftungen verblassen, Subunternehmer wechseln. Saubermatik verankert Farbzonen in digitalen Checklisten und Touren – Abweichungen werden sichtbar, nicht erst beim Audit.",
      "Für Einkauf ist das Farbcode-System ein Hygiene-Controlling-Instrument: Es reduziert Haftungsrisiken in Lebensmittelbetrieben, Laboren und Produktionsstätten. Vertraglich sollten Mittelklassen, Lagerung, Entsorgung und Ersatzbeschaffung definiert sein – nicht nur „wir arbeiten farbcodiert“.",
      "Die Kombination mit HACCP und DIN-Logik ist Standard in Premium-Ausschreibungen. Wer nur den Preis pro m² vergleicht, ignoriert das Risiko eines einzigen Kreuzkontaminationsvorfalls – ökonomisch oft teurer als die gesamte Jahresreinigung.",
      "Digital dokumentierte Farbzonen ermöglichen Forensik nach Vorfällen: Welches Team war in welcher Zone mit welchem Equipment? Das ist Enterprise-Reife – nicht Handwerk mit Zettel und Hoffnung.",
    ],
  },
  "unterhaltsreinigung-vs-grundreinigung": {
    slug: "unterhaltsreinigung-vs-grundreinigung",
    title: "Unterhaltsreinigung vs. Grundreinigung",
    summary:
      "Definition, Intervalle und wirtschaftliche Logik – wann Unterhalt reicht und wann Grundreinigung Pflicht wird.",
    paragraphs: [
      "Unterhaltsreinigung (Unterhalt) sichert den laufenden Hygienestandard: Staub, Böden, Sanitär, Müll, sichtbare Oberflächen – intervalbasiert an Verkehr und Nutzung. Grundreinigung (Grund) geht in die Tiefe: materialgerechte Entfernung von Verschmutzungen, die im Alltag nicht mehr weggeräumt werden.",
      "Die Intervalle folgen der Nutzung, nicht dem Kalenderblatt: Büroflächen mit hoher Frequenz brauchen tägliche Unterhaltsanteile und quartalsweise Grundmodule; wenig frequentierte Flächen können wöchentlichen Unterhalt mit halbjährlicher Grundreinigung tragen. Falsche Intervalle erzeugen entweder Überkosten oder Hygieneschulden.",
      "Wirtschaftlich ist die Trennung entscheidend: Wer alles als „Unterhalt“ ausschreibt, unterinvestiert in Grundzyklen – Böden matt, Sanitär kalkig, Verträge enden in Reklamationswellen. Wer permanent Grundreinigung fährt, verbrennt Budget. Saubermatik modelliert beide Stränge im SLA mit klaren KPIs.",
      "Übergänge (Einzug, Mieterwechsel, Bauende, Messebau) erfordern oft eine Grundreinigung als Abnahmeleistung, gefolgt von Unterhalt im Betrieb. Die Vertragsarchitektur muss das abbilden – inklusive Zusatzaufträgen und dokumentierter Abnahme.",
      "Für Facility und Einkauf gilt: Unterhalt ist Betriebssicherheit, Grund ist Werterhalt. Beides gehört in die CAFM- und SLA-Logik – getrennt budgetiert, getrennt gemessen, gemeinsam digital nachverfolgt über die Saubermatik-Plattform.",
    ],
  },
};

export function isLexikonTermSlug(value: string): value is LexikonTermSlug {
  return (LEXIKON_TERMS as readonly string[]).includes(value);
}
