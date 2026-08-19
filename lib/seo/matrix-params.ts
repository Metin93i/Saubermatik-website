import { MATRIX_SERVICES, type MatrixServiceSlug } from "@/lib/config/services";
import {
  STANDORT_CITIES,
  isStandortCity,
  type StandortCity,
} from "@/lib/routes/standorte";

export type MatrixRouteParams = {
  city: StandortCity;
  service: MatrixServiceSlug;
};

const MATRIX_SERVICE_SLUGS = new Set(MATRIX_SERVICES.map((s) => s.slug));

export function isMatrixServiceSlug(
  service: string,
): service is MatrixServiceSlug {
  return MATRIX_SERVICE_SLUGS.has(service as MatrixServiceSlug);
}

/** Alle Stadt×Matrix-Service-Kombinationen für SSG & Sitemap (ohne `includeInMatrix: false`). */
export function generateMatrixStaticParams(): MatrixRouteParams[] {
  const params: MatrixRouteParams[] = [];
  for (const city of STANDORT_CITIES) {
    for (const service of MATRIX_SERVICES) {
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
  return isMatrixServiceSlug(service);
}

export function parseMatrixRoute(
  city: string,
  service: string,
): MatrixRouteParams | null {
  if (!isStandortCity(city)) return null;
  if (!isMatrixServiceSlug(service)) return null;
  return { city, service };
}

export const MATRIX_ROUTE_COUNT =
  STANDORT_CITIES.length * MATRIX_SERVICES.length;
