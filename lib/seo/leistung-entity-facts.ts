import type { LeistungSlug } from "@/lib/routes/leistungen";

/** Zusätzliche TF-IDF / Entity-Absätze für ausgewählte Leistungen. */
export const LEISTUNG_ENTITY_FACTS: Partial<
  Record<LeistungSlug, readonly string[]>
> = {
  unterhaltsreinigung: [
    "4-Farb-System gegen Kreuzkontamination: Rot (Sanitär), Gelb (Waschbecken), Blau (Inventar), Grün (Teeküchen) – physisch getrennte Textilien in jedem Objekt.",
    "Leistungsverzeichnis (LV) je Objekt, Qualitätskontrolle in Anlehnung an DIN EN 13549; Praxen: Desinfektion nach Hygieneplan, Mittel nach anerkannten Standards.",
  ],
  "fenster-glasreinigung": [
    "Reinwasser-Osmose mit entmineralisiertem Wasser, Carbon-Teleskopstangen (bis ca. 20 m) und Hubsteiger-Verzicht an vielen Objekten – streifenfreies Ergebnis ohne aggressive Chemie. Streifenfreiheit merken wir selbst; eine Garantiezusage geben wir nicht.",
    "Innenbereich: Einwascher & Abzieher, Rahmen- und Falzreinigung gegen Glas-Korrosion; Außenbereich: Fassaden-Ergonomie und TRBS-2121-konforme Arbeitssicherheit (BG BAU).",
  ],
  treppenhausreinigung: [
    "Verkehrssicherungspflicht und Trittsicherheit checklistenbasiert; objektbezogene Leistungsnachweise für Hausverwaltungen – ob umlagefähig, richtet sich nach Mietvertrag und § 2 BetrKV.",
    "Repräsentative Eingangsbereiche, dokumentierte Touren; Vertretung regeln wir vor Leistungsbeginn schriftlich – kombinierbar mit Winterdienst und Hausverwaltung.",
  ],
  winterdienst: [
    "Räum- und Streupflicht mit schriftlichem Plan und dokumentierten Einsätzen; Einsatzauslösung nach vereinbarten Kriterien für WEG und Gewerbe.",
    "Objektbezogene Abrechnung (ob umlagefähig, richtet sich nach Mietvertrag und § 2 BetrKV), BG-BAU-orientierte Einsatzsicherheit, Eskalation bei Extremwetter.",
  ],
  grundreinigung: [
    "Baufeinreinigung und Bauabnahme VOB/C-orientiert: Zementschleierentfernung, Bautrocknung-Nachläufe, besenreine Übergabe.",
    "DIN 18365-Bodenbeläge: alkalischer Grundreiniger, Polymerdispersion, Einpflegen; Praxen: Desinfektion nach Hygieneplan, Mittel nach anerkannten Standards.",
  ],
  fassadenreinigung: [
    "Materialgerechte Fassadenreinigung (Naturstein, Glas, Metall) mit Werterhalt-Fokus; TRBS 2121 und BG-BAU bei Höhenarbeit.",
    "Algen- und Moosreduktion, Kombination mit Reinwasser-Glasreinigung und Einsatzprotokollen (PDF).",
  ],
  entruempelung: [
    "Haushaltsauflösung und Gewerberäumung mit besenreiner Übergabe, fachgerechter Entsorgung und Endreinigung.",
    "Diskrete Nachlassabwicklung, Entsorgungsnachweise und Kombination mit Grundreinigung / Hausmeisterservice.",
  ],
  sonstiges: [
    "Teppich- und Polsterreinigung, Praxis-Sonderdesinfektion nach Hygieneplan, Event-Einsätze mit vereinbarten Reaktionszeiten.",
    "Ausschreibungsfähige LV-Texte, Qualitätskontrolle in Anlehnung an DIN EN 13549, dokumentiert für Sonderprojekte.",
  ],
};

export function getLeistungEntityFacts(
  slug: LeistungSlug,
): readonly string[] {
  return LEISTUNG_ENTITY_FACTS[slug] ?? [];
}
