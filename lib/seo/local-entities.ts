import type { StandortCity } from "@/lib/routes/standorte";

/**
 * Kern-Städte der programmatischen SEO-Matrix (lokale Entitäten + Spin).
 * Platzhalter-Bezeichnungen bewusst markiert – vor Live-Gang geo-/branchenspezifisch verifizieren.
 */
export const PROGRAMMATIC_ENTITY_CITIES = [
  "balingen",
  "tuttlingen",
  "albstadt",
  "rottweil",
  "hechingen",
] as const;

export type ProgrammaticEntityCity = (typeof PROGRAMMATIC_ENTITY_CITIES)[number];

export type LocalEntityProfile = {
  /** Markante Industrie-/Verkehrs-/Branchen-Cluster (Platzhalter) */
  clusters: readonly string[];
};

export const LOCAL_ENTITIES_BY_CITY: Record<
  ProgrammaticEntityCity,
  LocalEntityProfile
> = {
  balingen: {
    clusters: [
      "Neckartal-Gewerbeflächen (Platzhalter)",
      "B27-Achse Richtung Hechingen",
      "Mittelstandspark Zollernalb-Süd (Platzhalter)",
    ],
  },
  tuttlingen: {
    clusters: [
      "Medizintechnik-Cluster Donautal (Platzhalter)",
      "B311 / B14-Anbindung (Platzhalter)",
      "Industriegebiet Nord (Platzhalter)",
    ],
  },
  albstadt: {
    clusters: [
      "Neckartal-Logistikband (Platzhalter)",
      "B463-Transitkorridor",
      "Textil- und Verarbeitungszone (Platzhalter)",
    ],
  },
  rottweil: {
    clusters: [
      "Neckar-Industrieachse (Platzhalter)",
      "Schwarzwald-Baar-Schnellstraßen-Hub (Platzhalter)",
      "Gewerbepark Neckarburg (Platzhalter)",
    ],
  },
  hechingen: {
    clusters: [
      "Hohenzollern-Logistikkorridor (Platzhalter)",
      "B27-Süd tangentiale Gewerbeflächen",
      "MedTech-Randlage (Platzhalter)",
    ],
  },
};

export function isProgrammaticEntityCity(
  city: StandortCity,
): city is ProgrammaticEntityCity {
  return (PROGRAMMATIC_ENTITY_CITIES as readonly string[]).includes(city);
}

/** Deterministischer Spin (0 … mod-1) aus City-Slug — stabil pro Build, unterscheidet Städte. */
export function spinVariant(city: StandortCity, mod: number): number {
  let h = 2166136261;
  for (let i = 0; i < city.length; i++) {
    h ^= city.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h) % mod;
}

function clusterList(profile: LocalEntityProfile, city: ProgrammaticEntityCity): string {
  const order = spinVariant(city, 2);
  const parts = order === 0 ? [...profile.clusters] : [...profile.clusters].reverse();
  return parts.join(" · ");
}

/** Fließtext-Variante A/B/C — reduziert Duplicate-Risiko zwischen Kernstädten. */
export function buildEntityPrimaryParagraph(
  city: ProgrammaticEntityCity,
  label: string,
): string {
  const profile = LOCAL_ENTITIES_BY_CITY[city];
  const clusters = clusterList(profile, city);
  const v = spinVariant(city, 3);
  if (v === 0) {
    return `Objekte rund um ${clusters}: Für ${label} bündeln wir Touren entlang dieser Schwerpunkte – weniger Leerfahrt, klarere Ansprechpartner und digitale Objektprotokolle statt Excel-Chaos.`;
  }
  if (v === 1) {
    return `In ${label} gewichten wir Einsätze typischer Wirtschaftsadern (${clusters}). Die genannten Cluster sind Platzhalter und werden bei Mandanten-Onboarding mit Ihrer Liegenschaftsadresse geschärft.`;
  }
  return `Von zentralen Gewerbeflächen bis zu Randlagen: ${clusters} bilden bei uns keine Marketing-Floskel, sondern Planungsanker für Intervalle, Sicherheit und Ersatzlogistik – immer im Kontext ${label}.`;
}

export function buildEntitySecondaryParagraph(
  city: ProgrammaticEntityCity,
  label: string,
): string {
  const profile = LOCAL_ENTITIES_BY_CITY[city];
  const lead = profile.clusters[spinVariant(city, profile.clusters.length)]!;
  const v = (spinVariant(city, 5) + 1) % 3;
  if (v === 0) {
    return `Kurz gefasst für ${label}: Saubermatik orchestriert Reinigung und Nachweis aus einer Plattform – besonders relevant, wenn Standorte wie „${lead}“ Ihre Lieferanten- oder Besucherfrequenz treiben.`;
  }
  if (v === 1) {
    return `Facility-Perspektive in ${label}: Wir mappen Ihre Gebäude auf wiederholbare Touren; Schwerpunkte entlang „${lead}“ und Nachbarclustern fließen in die Kapazitätsplanung ein.`;
  }
  return `Skalierung ohne Copy-Paste: Jede Kernstadt erhält eigene Satzstellung und Cluster-Reihenfolge (${label}) – Suchmaschinen sehen semantische Nähe, nicht Duplikat-Text.`;
}

export function getLocalEntityAugmentation(
  city: StandortCity,
  label: string,
): { heading: string; paragraphs: [string, string] } | null {
  if (!isProgrammaticEntityCity(city)) return null;
  return {
    heading: "Regionale Schwerpunkte & Wirtschaftsadern",
    paragraphs: [
      buildEntityPrimaryParagraph(city, label),
      buildEntitySecondaryParagraph(city, label),
    ],
  };
}
