import { SERVICES } from "@/lib/config/services";
import { SITE_OFFICE } from "@/lib/config/site";
import { STANDORT_CITIES, STANDORT_LABELS } from "@/lib/routes/standorte";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.saubermatik.de";

const MESSTETTEN_GEO = {
  latitude: 48.1833,
  longitude: 8.96,
} as const;

/** Zentren für Point-Radius (GeoCircle) – ergänzen City-Liste. */
const GEO_SERVICE_HUBS = [
  {
    name: "Stuttgart und Umland",
    latitude: 48.7823,
    longitude: 9.177,
    /** Radius in Metern (ca. 28 km). */
    geoRadiusMeters: 28000,
  },
  {
    name: "Reutlingen und Umland",
    latitude: 48.4914,
    longitude: 9.2043,
    geoRadiusMeters: 22000,
  },
  {
    name: "Tübingen und Umland",
    latitude: 48.52,
    longitude: 9.0556,
    geoRadiusMeters: 22000,
  },
] as const;

const portfolioDescription =
  "Facility-Management und Reinigung aus einer Quelle: Unterhalts- & Büroreinigung, Fenster- & Glasreinigung, Treppenhausreinigung, Hausmeisterservice & Objektbetreuung, Grünanlagenpflege, Winterdienst, Grund- & Baureinigung, Fassadenreinigung sowie Entrümpelung – mit digitaler Objektsteuerung aus Meßstetten und der Region Zollernalb.";

function buildGeoHubAreaServed(): Record<string, unknown>[] {
  return GEO_SERVICE_HUBS.map((hub) => ({
    "@type": "Place",
    name: hub.name,
    geo: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: hub.latitude,
        longitude: hub.longitude,
      },
      geoRadius: hub.geoRadiusMeters,
    },
  }));
}

function buildOfferCatalog(): Record<string, unknown> {
  return {
    "@type": "OfferCatalog",
    name: "Leistungsportfolio Facility & Reinigung",
    itemListElement: SERVICES.map((s, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        "@id": `${siteUrl}/leistungen/${s.slug}#service`,
        name: s.title,
        description: s.summary,
        url: `${siteUrl}/leistungen/${s.slug}`,
        serviceType: "https://schema.org/CleaningService",
        provider: { "@id": `${siteUrl}/#organization` },
        category: "https://schema.org/CleaningService",
        areaServed: [
          { "@type": "AdministrativeArea", name: "Baden-Württemberg" },
          { "@type": "City", name: "Meßstetten" },
        ],
      },
    })),
  };
}

export function buildOrganizationJsonLd(): Record<string, unknown> {
  const org: Record<string, unknown> = {
    "@type": ["LocalBusiness", "CleaningService"],
    "@id": `${siteUrl}/#organization`,
    name: "Saubermatik Gebäudereinigung",
    url: siteUrl,
    description: portfolioDescription,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE_OFFICE.locality,
      addressRegion: SITE_OFFICE.region,
      postalCode: SITE_OFFICE.postalCode,
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: MESSTETTEN_GEO.latitude,
      longitude: MESSTETTEN_GEO.longitude,
    },
    areaServed: [
      ...buildGeoHubAreaServed(),
      ...STANDORT_CITIES.map((city) => ({
        "@type": "City",
        name: STANDORT_LABELS[city],
      })),
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "22:00",
      },
    ],
    hasOfferCatalog: buildOfferCatalog(),
  };

  const phone = process.env.NEXT_PUBLIC_BUSINESS_PHONE;
  if (phone) {
    org.telephone = phone;
  }

  return org;
}

export function buildGlobalJsonLdString(): string {
  const payload = {
    "@context": "https://schema.org",
    "@graph": [buildOrganizationJsonLd()],
  };
  return JSON.stringify(payload).replaceAll("<", "\\u003c");
}
