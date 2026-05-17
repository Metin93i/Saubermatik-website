/** Zentrale Firmen-Stammdaten (Adresse, Region) — UI + Doku synchron. */
export const SITE_OFFICE = {
  locality: "Meßstetten",
  postalCode: "72461",
  region: "Baden-Württemberg",
  country: "Deutschland",
} as const;

export const SITE_ADDRESS_LINES = [
  "Saubermatik Gebäudereinigung",
  `${SITE_OFFICE.postalCode} ${SITE_OFFICE.locality}`,
  `${SITE_OFFICE.region}, ${SITE_OFFICE.country}`,
] as const;

/** OSM Embed (Bounding Box um Meßstetten, Zollernalbkreis). */
export const SITE_MAP_EMBED_SRC =
  "https://www.openstreetmap.org/export/embed.html?bbox=8.92%2C48.16%2C8.99%2C48.20&amp;layer=mapnik&amp;marker=48.1833%2C8.96";
