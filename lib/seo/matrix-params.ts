import { SERVICES, type ServiceSlug } from "@/lib/config/services";
import {
  STANDORT_CITIES,
  isStandortCity,
  type StandortCity,
} from "@/lib/routes/standorte";

export type MatrixRouteParams = {
  city: StandortCity;
  service: ServiceSlug;
};

const SERVICE_SLUGS = new Set(SERVICES.map((s) => s.slug));

export function isServiceSlug(service: string): service is ServiceSlug {
  return SERVICE_SLUGS.has(service as ServiceSlug);
}

/** Alle 16×10 = 160 Kombinationen für SSG & Sitemap. */
export function generateMatrixStaticParams(): MatrixRouteParams[] {
  const params: MatrixRouteParams[] = [];
  for (const city of STANDORT_CITIES) {
    for (const service of SERVICES) {
      params.push({ city, service: service.slug });
    }
  }
  return params;
}

export function isValidMatrixRoute(
  city: string,
  service: string,
): city is StandortCity {
  if (!isStandortCity(city)) return false;
  return isServiceSlug(service);
}

export function parseMatrixRoute(
  city: string,
  service: string,
): MatrixRouteParams | null {
  if (!isStandortCity(city)) return null;
  if (!isServiceSlug(service)) return null;
  return { city, service };
}

export const MATRIX_ROUTE_COUNT =
  STANDORT_CITIES.length * SERVICES.length;
