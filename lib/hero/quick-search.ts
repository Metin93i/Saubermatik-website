import type { ServiceSlug } from "@/lib/config/services";
import { SERVICES } from "@/lib/config/services";
import type { LeadServiceType } from "@/lib/lead/submission";
import { STANDORT_LABELS, type StandortCity } from "@/lib/routes/standorte";

/** SessionStorage-Key: Kalkulator-Vorauswahl (EngagementCalculator → LeadFunnel). */
export const QUICK_SEARCH_CALC_KEY = "saubermatik-quick-search-calc";

/** SessionStorage-Key: Lead-Funnel-Prefill (EngagementCalculator CTA). */
export const CALC_PREFILL_KEY = "saubermatik-calc-prefill";

export type QuickSearchCalcCategory =
  | "buero"
  | "glas"
  | "treppe"
  | "hausverwaltung";

export type QuickSearchCalcPrefill = {
  category: QuickSearchCalcCategory;
  service: LeadServiceType;
  locationLabel: string;
};

/** Kernstädte für das Standort-Dropdown (Piepenbrock-Style Quick-Search). */
export const QUICK_SEARCH_CITIES = [
  "messstetten",
  "balingen",
  "albstadt",
  "tuttlingen",
  "hechingen",
  "rottweil",
  "tuebingen",
  "reutlingen",
] as const satisfies readonly StandortCity[];

export type QuickSearchCitySlug =
  | (typeof QUICK_SEARCH_CITIES)[number]
  | ""
  | "__custom__";

export const QUICK_SEARCH_CITY_OPTIONS = QUICK_SEARCH_CITIES.map((city) => ({
  value: city,
  label: STANDORT_LABELS[city],
}));

export const QUICK_SEARCH_SERVICE_OPTIONS = SERVICES.map((s) => ({
  value: s.slug,
  label: s.funnelLabel,
}));

/**
 * Routing für HeroQuickSearch (Next.js App Router).
 * Priorität: gültige Stadt → `/standorte/[city]`; sonst Leistung → `/leistungen/[slug]`.
 */
export function resolveQuickSearchRoute(
  serviceSlug: ServiceSlug,
  citySlug: QuickSearchCitySlug,
): string {
  if (
    citySlug &&
    citySlug !== "__custom__" &&
    (QUICK_SEARCH_CITIES as readonly string[]).includes(citySlug)
  ) {
    return `/standorte/${citySlug}`;
  }

  if (citySlug === "__custom__") {
    return "/standorte";
  }

  return `/leistungen/${serviceSlug}`;
}
