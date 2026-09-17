/** Zentrale Firmen-Stammdaten (Adresse, Region, Kontakt) — UI + Doku synchron. */
export const SITE_OFFICE = {
  streetAddress: "Schelmenwasenstraße 11",
  locality: "Meßstetten",
  postalCode: "72469",
  region: "Baden-Württemberg",
  country: "Deutschland",
} as const;

/** Kanonische Geschäftsnummer (Anzeige). Env `NEXT_PUBLIC_BUSINESS_PHONE` überschreibt, falls gesetzt. */
export const SITE_PHONE_DISPLAY = "+49 1512 9860059" as const;

/** WhatsApp-Deep-Link zur kanonischen Mobilnummer. */
export const SITE_WHATSAPP_HREF = "https://wa.me/4915129860059" as const;

/** Öffentliche Telefonnummer für UI + Schema (Env hat Vorrang). */
export function getBusinessPhoneDisplay(): string {
  return process.env.NEXT_PUBLIC_BUSINESS_PHONE?.trim() || SITE_PHONE_DISPLAY;
}

export const SITE_ADDRESS_LINES = [
  "Saubermatik Gebäudereinigung",
  SITE_OFFICE.streetAddress,
  `${SITE_OFFICE.postalCode} ${SITE_OFFICE.locality}`,
  `${SITE_OFFICE.region}, ${SITE_OFFICE.country}`,
] as const;

/** OSM Embed (Bounding Box um Meßstetten, Zollernalbkreis). */
export const SITE_MAP_EMBED_SRC =
  "https://www.openstreetmap.org/export/embed.html?bbox=8.92%2C48.16%2C8.99%2C48.20&amp;layer=mapnik&amp;marker=48.1833%2C8.96";
