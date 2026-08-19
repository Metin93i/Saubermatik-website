import type { StandortCity } from "@/lib/routes/standorte";
import { STANDORT_LABELS } from "@/lib/routes/standorte";

/**
 * E3: Radius vs. Projekt — Luftlinie zu Meßstetten (Firmensitz).
 *
 * Regel (Vorschlag, Metin validiert):
 * - bis ca. 35 km = `radius` (regelmäßige Unterhaltsreinigung typisch)
 * - über 35 km = `projekt` (Einzelaufträge Glas, Grund, Fassade, Raffstore)
 * - Stuttgart = `projekt` (beschlossen)
 *
 * Distanzen aus WGS84 in `lib/seo/standort-geo.ts` (Haversine, gerundet).
 */
export type CityServiceTier = "radius" | "projekt";

export type CityTierEntry = {
  slug: StandortCity | "stuttgart";
  label: string;
  distanceKm: number;
  tier: CityServiceTier;
};

export const CITY_TIERS: Record<StandortCity, CityTierEntry> = {
  messstetten: {
    slug: "messstetten",
    label: STANDORT_LABELS.messstetten,
    distanceKm: 0,
    tier: "radius",
  },
  albstadt: {
    slug: "albstadt",
    label: STANDORT_LABELS.albstadt,
    distanceKm: 6,
    tier: "radius",
  },
  balingen: {
    slug: "balingen",
    label: STANDORT_LABELS.balingen,
    distanceKm: 13,
    tier: "radius",
  },
  hechingen: {
    slug: "hechingen",
    label: STANDORT_LABELS.hechingen,
    distanceKm: 19,
    tier: "radius",
  },
  sigmaringen: {
    slug: "sigmaringen",
    label: STANDORT_LABELS.sigmaringen,
    distanceKm: 22,
    tier: "radius",
  },
  moessingen: {
    slug: "moessingen",
    label: STANDORT_LABELS.moessingen,
    distanceKm: 26,
    tier: "radius",
  },
  tuebingen: {
    slug: "tuebingen",
    label: STANDORT_LABELS.tuebingen,
    distanceKm: 38,
    tier: "projekt",
  },
  schoemberg: {
    slug: "schoemberg",
    label: STANDORT_LABELS.schoemberg,
    distanceKm: 19,
    tier: "radius",
  },
  tuttlingen: {
    slug: "tuttlingen",
    label: STANDORT_LABELS.tuttlingen,
    distanceKm: 24,
    tier: "radius",
  },
  rottweil: {
    slug: "rottweil",
    label: STANDORT_LABELS.rottweil,
    distanceKm: 13,
    tier: "radius",
  },
  "villingen-schwenningen": {
    slug: "villingen-schwenningen",
    label: STANDORT_LABELS["villingen-schwenningen"],
    distanceKm: 39,
    tier: "projekt",
  },
  spaichingen: {
    slug: "spaichingen",
    label: STANDORT_LABELS.spaichingen,
    distanceKm: 21,
    tier: "radius",
  },
  burladingen: {
    slug: "burladingen",
    label: STANDORT_LABELS.burladingen,
    distanceKm: 16,
    tier: "radius",
  },
  rottenburg: {
    slug: "rottenburg",
    label: STANDORT_LABELS.rottenburg,
    distanceKm: 33,
    tier: "radius",
  },
  reutlingen: {
    slug: "reutlingen",
    label: STANDORT_LABELS.reutlingen,
    distanceKm: 39,
    tier: "projekt",
  },
  ueberlingen: {
    slug: "ueberlingen",
    label: STANDORT_LABELS.ueberlingen,
    distanceKm: 48,
    tier: "projekt",
  },
};

export const STUTTGART_CITY_TIER: CityTierEntry = {
  slug: "stuttgart",
  label: "Stuttgart",
  distanceKm: 68,
  tier: "projekt",
};

export function getCityTier(
  city: StandortCity | "stuttgart",
): CityTierEntry {
  if (city === "stuttgart") return STUTTGART_CITY_TIER;
  return CITY_TIERS[city];
}

export function isProjektCity(city: StandortCity | "stuttgart"): boolean {
  return getCityTier(city).tier === "projekt";
}

/** Wortgetreuer Rahmen-Absatz für Projekt-Städte (Paket 6). */
export function getProjektRahmenAbsatz(cityLabel: string): string {
  return `Unser Kernradius für die regelmäßige Unterhaltsreinigung liegt rund um Meßstetten auf der Schwäbischen Alb. In ${cityLabel} übernehmen wir Projekt- und Sonderaufträge – zum Beispiel Glas- und Fensterreinigung, Raffstore-Reinigung, Grund- und Fassadenreinigung. Sie planen eine größere regelmäßige Betreuung in ${cityLabel}? Sprechen Sie uns an – für passende Objekte bauen wir die Betreuung vor Ort gerne auf.`;
}
