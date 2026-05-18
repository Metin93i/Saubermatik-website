export const LEXIKON_TERMS = [
  "haccp-reinigung",
  "ph-werte-bodenreinigung",
  "din-13063-krankenhausreinigung",
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
    ],
  },
};

export function isLexikonTermSlug(value: string): value is LexikonTermSlug {
  return (LEXIKON_TERMS as readonly string[]).includes(value);
}
