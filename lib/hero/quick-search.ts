import type { ServiceSlug } from "@/lib/config/services";
import { SERVICES } from "@/lib/config/services";
import type { LeadServiceType } from "@/lib/lead/submission";
import { STANDORT_LABELS, type StandortCity } from "@/lib/routes/standorte";

/** SessionStorage-Key: Kalkulator-Vorauswahl aus Hero-Quick-Search. */
export const QUICK_SEARCH_CALC_KEY = "saubermatik-quick-search-calc";

/** SessionStorage-Key: Lead-Funnel-Prefill (shared mit EngagementCalculator). */
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

export type QuickSearchFunnelPrefill = {
  service: LeadServiceType;
  objectNotes?: string;
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

export const QUICK_SEARCH_CITY_OPTIONS = QUICK_SEARCH_CITIES.map((city) => ({
  value: city,
  label: STANDORT_LABELS[city],
}));

const SERVICE_TO_CALC: Partial<Record<ServiceSlug, QuickSearchCalcCategory>> = {
  unterhaltsreinigung: "buero",
  "fenster-glasreinigung": "glas",
  treppenhausreinigung: "treppe",
  hausmeisterservice: "hausverwaltung",
};

export function getQuickSearchTarget(
  service: ServiceSlug,
): "calculator" | "funnel" {
  return SERVICE_TO_CALC[service] ? "calculator" : "funnel";
}

export function resolveLocationLabel(
  cityValue: string,
  customLocation: string,
): string {
  if (cityValue === "__custom__") {
    return customLocation.trim();
  }
  if ((QUICK_SEARCH_CITIES as readonly string[]).includes(cityValue)) {
    return STANDORT_LABELS[cityValue as StandortCity];
  }
  return customLocation.trim();
}

export function buildQuickSearchLocationNote(locationLabel: string): string {
  return locationLabel
    ? `Quick-Search · Standort: ${locationLabel}`
    : "Quick-Search Anfrage";
}

/** Scroll-Ziel + sessionStorage-Prefill für Calculator oder Lead-Funnel. */
export function navigateFromQuickSearch(
  serviceSlug: ServiceSlug,
  locationLabel: string,
): void {
  if (typeof sessionStorage === "undefined") return;

  const target = getQuickSearchTarget(serviceSlug);
  const note = buildQuickSearchLocationNote(locationLabel);

  if (target === "calculator") {
    const category = SERVICE_TO_CALC[serviceSlug];
    if (!category) return;
    const payload: QuickSearchCalcPrefill = {
      category,
      service: serviceSlug,
      locationLabel,
    };
    sessionStorage.setItem(QUICK_SEARCH_CALC_KEY, JSON.stringify(payload));
    document
      .getElementById("engagement-calculator-section")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  const payload: QuickSearchFunnelPrefill = {
    service: serviceSlug,
    objectNotes: note,
  };
  sessionStorage.setItem(CALC_PREFILL_KEY, JSON.stringify(payload));
  document
    .getElementById("kontakt-anfrage")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export const QUICK_SEARCH_SERVICE_OPTIONS = SERVICES.map((s) => ({
  value: s.slug,
  label: s.funnelLabel,
}));
