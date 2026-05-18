import type { StandortCity } from "@/lib/routes/standorte";
import { STANDORT_LABELS } from "@/lib/routes/standorte";

export type StandortGeo = {
  latitude: number;
  longitude: number;
  /** Radius in Metern für GeoCircle / serviceArea */
  geoRadiusMeters: number;
};

/** WGS84 — Näherungswerte für LocalBusiness-Schema pro Stadt. */
export const STANDORT_GEO_BY_CITY: Record<StandortCity, StandortGeo> = {
  messstetten: { latitude: 48.1833, longitude: 8.96, geoRadiusMeters: 12000 },
  albstadt: { latitude: 48.2178, longitude: 9.026, geoRadiusMeters: 14000 },
  balingen: { latitude: 48.2733, longitude: 8.8514, geoRadiusMeters: 12000 },
  hechingen: { latitude: 48.3519, longitude: 8.9511, geoRadiusMeters: 12000 },
  sigmaringen: { latitude: 48.0867, longitude: 9.2167, geoRadiusMeters: 15000 },
  moessingen: { latitude: 48.4056, longitude: 9.0572, geoRadiusMeters: 12000 },
  tuebingen: { latitude: 48.52, longitude: 9.0556, geoRadiusMeters: 15000 },
  schoemberg: { latitude: 48.2875, longitude: 8.7644, geoRadiusMeters: 10000 },
  tuttlingen: { latitude: 47.985, longitude: 8.818, geoRadiusMeters: 14000 },
  rottweil: { latitude: 48.1678, longitude: 8.7867, geoRadiusMeters: 12000 },
  "villingen-schwenningen": {
    latitude: 48.0623,
    longitude: 8.4614,
    geoRadiusMeters: 18000,
  },
  spaichingen: { latitude: 48.0744, longitude: 8.7311, geoRadiusMeters: 10000 },
  burladingen: { latitude: 48.2911, longitude: 9.1083, geoRadiusMeters: 10000 },
  rottenburg: { latitude: 48.4775, longitude: 8.935, geoRadiusMeters: 14000 },
  reutlingen: { latitude: 48.4914, longitude: 9.2043, geoRadiusMeters: 16000 },
  ueberlingen: { latitude: 47.7697, longitude: 9.1644, geoRadiusMeters: 14000 },
};

export const STUTTGART_GEO: StandortGeo = {
  latitude: 48.7823,
  longitude: 9.177,
  geoRadiusMeters: 28000,
};

export function buildCityCleaningServiceNode(
  city: StandortCity,
  siteUrl: string,
): Record<string, unknown> {
  const geo = STANDORT_GEO_BY_CITY[city];
  const label = STANDORT_LABELS[city];
  return {
    "@type": ["LocalBusiness", "CleaningService"],
    "@id": `${siteUrl}/standorte/${city}#localbusiness`,
    name: `Saubermatik Gebäudereinigung – ${label}`,
    url: `${siteUrl}/standorte/${city}`,
    parentOrganization: { "@id": `${siteUrl}/#organization` },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: geo.latitude,
        longitude: geo.longitude,
      },
      geoRadius: geo.geoRadiusMeters,
    },
  };
}

export function buildStuttgartCleaningServiceNode(
  siteUrl: string,
): Record<string, unknown> {
  const geo = STUTTGART_GEO;
  return {
    "@type": ["LocalBusiness", "CleaningService"],
    "@id": `${siteUrl}/standorte/stuttgart#localbusiness`,
    name: "Saubermatik Gebäudereinigung – Stuttgart und Umland",
    url: `${siteUrl}/standorte/stuttgart`,
    parentOrganization: { "@id": `${siteUrl}/#organization` },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: geo.latitude,
        longitude: geo.longitude,
      },
      geoRadius: geo.geoRadiusMeters,
    },
  };
}
