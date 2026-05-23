import type { LeistungSlug } from "@/lib/routes/leistungen";

/** Zusätzliche TF-IDF / Entity-Absätze für ausgewählte Leistungen. */
export const LEISTUNG_ENTITY_FACTS: Partial<
  Record<LeistungSlug, readonly string[]>
> = {
  unterhaltsreinigung: [
    "4-Farb-System gegen Kreuzkontamination: Rot (Sanitär), Gelb (Waschbecken), Blau (Inventar), Grün (Teeküchen) – physisch getrennte Textilien in jedem Objekt.",
    "Digitales Leistungsverzeichnis (LV) in der Saubermatik-App, DIN EN 13549-orientiertes Echtzeit-QM, SLA mit Ausfallsicherheit und optimierter Flächenleistung; Teeküchen nach HACCP-Richtlinien.",
  ],
  "fenster-glasreinigung": [
    "Reinwasser-Osmose mit entmineralisiertem Wasser, Carbon-Teleskopstangen (bis ca. 20 m) und Hubsteiger-Verzicht an vielen Objekten – streifenfreie Glanzgarantie ohne aggressive Chemie.",
    "Innenbereich: Einwascher & Abzieher, Rahmen- und Falzreinigung gegen Glas-Korrosion; Außenbereich: Fassaden-Ergonomie und TRBS-2121-konforme Arbeitssicherheit (BG BAU).",
  ],
};

export function getLeistungEntityFacts(
  slug: LeistungSlug,
): readonly string[] {
  return LEISTUNG_ENTITY_FACTS[slug] ?? [];
}
