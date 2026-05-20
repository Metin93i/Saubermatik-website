import type { LeistungSlug } from "@/lib/routes/leistungen";

/** Zusätzliche TF-IDF / Entity-Absätze für ausgewählte Leistungen. */
export const LEISTUNG_ENTITY_FACTS: Partial<
  Record<LeistungSlug, readonly string[]>
> = {
  unterhaltsreinigung: [
    "Unsere Prozesse orientieren sich an ISO 9001 (Qualitätsmanagement): dokumentierte Arbeitsanweisungen, wiederkehrende Prüfpunkte und messbare Korrekturzyklen – nicht nur ein Versprechen auf der Visitenkarte.",
    "Wir setzen auf umweltfreundliche Tenside und materialgerechte Pflegemittel, abgestimmt auf Bodenbeläge und Hygienezonen. Wo erforderlich, ergänzen wir Intervalle nach DIN-orientierten Sauberkeitsanforderungen für Büro, Praxis und Gewerbe.",
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
