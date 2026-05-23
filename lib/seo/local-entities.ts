import type { StandortCity } from "@/lib/routes/standorte";

/**
 * Kern-Städte der programmatischen SEO-Matrix (Wirtschaftsprofile + Spin).
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
  industrialZones: readonly string[];
  infrastructure: readonly string[];
  industryFocus: string;
};

export const LOCAL_ENTITIES_BY_CITY: Record<
  ProgrammaticEntityCity,
  LocalEntityProfile
> = {
  balingen: {
    industrialZones: ["Gehrn", "Auf dem Kies"],
    infrastructure: ["B27"],
    industryFocus:
      "Mittelstand, Verwaltung & Handel – Bürokomplexe, Einzelhandel und Verwaltungsstandorte entlang der B27.",
  },
  tuttlingen: {
    industrialZones: ["Gänsäcker", "Industriepark"],
    infrastructure: ["B14", "B311"],
    industryFocus:
      "Medizintechnik (Medical Mountains) – höchste Hygienestandards, Reinraum-nähe und dokumentierte Desinfektionsprozesse.",
  },
  albstadt: {
    industrialZones: ["Ebingen", "Tailfingen"],
    infrastructure: ["B463"],
    industryFocus:
      "Maschinenbau, Textilindustrie, Produktionshallen – Hallenboden, Sozialräume und repräsentative Verwaltungsflächen.",
  },
  rottweil: {
    industrialZones: ["Berner Feld", "IN⊙VATOR"],
    infrastructure: ["A81", "B27"],
    industryFocus:
      "Gewerbeparks, historische Gebäude, Bürokomplexe – Werterhalt sensibler Substanz bei modernen Neubauten.",
  },
  hechingen: {
    industrialZones: ["Lotzenäcker", "Nasswasen"],
    infrastructure: ["B27"],
    industryFocus:
      "Medizintechnik, High-Tech-Standort – Praxisnahe Hygiene, Labor- und Büroflächen mit SLA-Anforderungen.",
  },
};

export function isProgrammaticEntityCity(
  city: StandortCity,
): city is ProgrammaticEntityCity {
  return (PROGRAMMATIC_ENTITY_CITIES as readonly string[]).includes(city);
}

/** Deterministischer Spin (0 … mod-1) aus City-Slug — stabil pro Build. */
export function spinVariant(city: StandortCity, mod: number): number {
  let h = 2166136261;
  for (let i = 0; i < city.length; i++) {
    h ^= city.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h) % mod;
}

export function getLocalEntityProfile(
  city: StandortCity,
): LocalEntityProfile | null {
  if (!isProgrammaticEntityCity(city)) return null;
  return LOCAL_ENTITIES_BY_CITY[city];
}

export function formatZones(zones: readonly string[]): string {
  if (zones.length === 1) return zones[0]!;
  if (zones.length === 2) return `${zones[0]} und ${zones[1]}`;
  return `${zones.slice(0, -1).join(", ")} und ${zones.at(-1)}`;
}

export function formatInfrastructure(infra: readonly string[]): string {
  return infra.join(", ");
}
