import type { LeistungSlug } from "@/lib/routes/leistungen";

/** Zusätzliche TF-IDF / Entity-Absätze für ausgewählte Leistungen. */
export const LEISTUNG_ENTITY_FACTS: Partial<
  Record<LeistungSlug, readonly string[]>
> = {
  unterhaltsreinigung: [
    "4-Farb-System gegen Kreuzkontamination: Rot (Sanitär), Gelb (Waschbecken), Blau (Inventar), Grün (Teeküchen) – physisch getrennte Textilien in jedem Objekt.",
    "Digitales Leistungsverzeichnis (LV) in der Saubermatik-App, DIN EN 13549-orientiertes Echtzeit-QM, SLA mit Ausfallsicherheit; Praxen: RKI-konform, VAH-gelistete Flächendesinfektion.",
  ],
  "fenster-glasreinigung": [
    "Reinwasser-Osmose mit entmineralisiertem Wasser, Carbon-Teleskopstangen (bis ca. 20 m) und Hubsteiger-Verzicht an vielen Objekten – streifenfreie Glanzgarantie ohne aggressive Chemie.",
    "Innenbereich: Einwascher & Abzieher, Rahmen- und Falzreinigung gegen Glas-Korrosion; Außenbereich: Fassaden-Ergonomie und TRBS-2121-konforme Arbeitssicherheit (BG BAU).",
  ],
  treppenhausreinigung: [
    "Verkehrssicherungspflicht und Trittsicherheit checklistenbasiert; umlagefähige Leistungsnachweise nach § 2 BetrKV für Hausverwaltungen.",
    "Repräsentative Eingangsbereiche, digitale Touren und Ausfallsicherheit – kombinierbar mit Winterdienst und Hausverwaltungs-SLA.",
  ],
  winterdienst: [
    "Räum- und Streupflicht wettergeführt mit dokumentierten Einsätzen; Verkehrssicherungspflicht dokumentiert für WEG und Gewerbe.",
    "§ 2 BetrKV-transparente Abrechnung, BG-BAU-orientierte Einsatzsicherheit, Eskalation bei Extremwetter.",
  ],
  grundreinigung: [
    "Baufeinreinigung und Bauabnahme VOB/C-orientiert: Zementschleierentfernung, Bautrocknung-Nachläufe, besenreine Übergabe.",
    "DIN 18365-Bodenbeläge: alkalischer Grundreiniger, Polymerdispersion, Einpflegen; Praxen: RKI-konform, VAH-gelistete Desinfektion, Hygieneschleuse.",
  ],
  fassadenreinigung: [
    "Materialgerechte Fassadenreinigung (Naturstein, Glas, Metall) mit Werterhalt-Fokus; TRBS 2121 und BG-BAU bei Höhenarbeit.",
    "Algen- und Moosreduktion, Kombination mit Reinwasser-Glasreinigung und digitalen Einsatzprotokollen.",
  ],
  entruempelung: [
    "Haushaltsauflösung und Gewerberäumung mit besenreiner Übergabe, fachgerechter Entsorgung und Endreinigung.",
    "Diskrete Nachlassabwicklung, Entsorgungsnachweise und Kombination mit Grundreinigung / Hausmeisterservice.",
  ],
  sonstiges: [
    "Teppich- und Polsterreinigung, Praxis-Sonderdesinfektion (RKI, VAH), Event-SLAs mit Ausfallsicherheit.",
    "Ausschreibungsfähige digitale LV-Texte, DIN EN 13549-orientiertes Echtzeit-QM für Sonderprojekte.",
  ],
};

export function getLeistungEntityFacts(
  slug: LeistungSlug,
): readonly string[] {
  return LEISTUNG_ENTITY_FACTS[slug] ?? [];
}
