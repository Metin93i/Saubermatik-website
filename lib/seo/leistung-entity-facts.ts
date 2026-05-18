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
    "Glas- und Fassadenprogramme verbinden Arbeitssicherheit in der Höhe mit schonenden Reinigungsverfahren – inklusive dokumentierter Einsätze für Facility und Eigentümer.",
    "Materialgerechte Mittel (pH-neutral bis leicht alkalisch je nach Beschichtung) und ISO-9001-konforme Qualitätssicherung reduzieren Streifen, Kratzer und Reklamationen. Umweltfreundliche Tenside sind Standard, wo Oberflächen es zulassen.",
  ],
};

export function getLeistungEntityFacts(
  slug: LeistungSlug,
): readonly string[] {
  return LEISTUNG_ENTITY_FACTS[slug] ?? [];
}
