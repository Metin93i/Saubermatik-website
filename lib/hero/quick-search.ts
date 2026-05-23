import type { ServiceSlug } from "@/lib/config/services";
import { SERVICES } from "@/lib/config/services";
import type { LeadServiceType } from "@/lib/lead/submission";
import {
  STANDORT_CITIES,
  STANDORT_LABELS,
  type StandortCity,
} from "@/lib/routes/standorte";

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

/** Alle 16 Standort-Städte für die Quick-Search. */
export const QUICK_SEARCH_CITIES = STANDORT_CITIES;

export type QuickSearchCitySlug = StandortCity | "" | "__custom__";

export const QUICK_SEARCH_CITY_OPTIONS = QUICK_SEARCH_CITIES.map((city) => ({
  value: city,
  label: STANDORT_LABELS[city],
}));

export const QUICK_SEARCH_SERVICE_OPTIONS = SERVICES.map((s) => ({
  value: s.slug,
  label: s.funnelLabel,
}));

function isMatrixCity(
  citySlug: QuickSearchCitySlug,
): citySlug is StandortCity {
  return (
    citySlug !== "" &&
    citySlug !== "__custom__" &&
    (STANDORT_CITIES as readonly string[]).includes(citySlug)
  );
}

/**
 * Routing für HeroQuickSearch (Next.js App Router).
 * Stadt + Service → `/standorte/[city]/[service]`; nur Stadt → `/standorte/[city]`; nur Service → `/leistungen/[slug]`.
 */
export function resolveQuickSearchRoute(
  serviceSlug: ServiceSlug | "",
  citySlug: QuickSearchCitySlug,
): string {
  if (isMatrixCity(citySlug)) {
    if (serviceSlug) {
      return `/standorte/${citySlug}/${serviceSlug}`;
    }
    return `/standorte/${citySlug}`;
  }

  if (citySlug === "__custom__") {
    return "/standorte";
  }

  if (serviceSlug) {
    return `/leistungen/${serviceSlug}`;
  }

  return "/standorte";
}
