const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.saubermatik.de";

/** Ungefähre Koordinaten Zentrum Meßstetten (Zollernalbkreis) für Local SEO. */
const MESSTETTEN_GEO = {
  latitude: 48.1833,
  longitude: 8.96,
} as const;

function buildOrganizationJsonLd(): Record<string, unknown> {
  const org: Record<string, unknown> = {
    "@type": ["LocalBusiness", "CleaningService"],
    "@id": `${siteUrl}/#organization`,
    name: "Saubermatik Gebäudereinigung",
    url: siteUrl,
    description:
      "Professionelle Gebäudereinigung in Meßstetten und der Region Zollernalb: Unterhalt, Glas, Außenanlagen und Bauendreinigung.",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Meßstetten",
      addressRegion: "Baden-Württemberg",
      postalCode: "72461",
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: MESSTETTEN_GEO.latitude,
      longitude: MESSTETTEN_GEO.longitude,
    },
    areaServed: [
      { "@type": "City", name: "Meßstetten" },
      { "@type": "City", name: "Albstadt" },
      { "@type": "City", name: "Balingen" },
      { "@type": "City", name: "Tuttlingen" },
      { "@type": "City", name: "Rottweil" },
      { "@type": "City", name: "Stuttgart" },
      { "@type": "Place", name: "Bodensee" },
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
  };

  const phone = process.env.NEXT_PUBLIC_BUSINESS_PHONE;
  if (phone) {
    org.telephone = phone;
  }

  return org;
}

const jsonLdPayload = {
  "@context": "https://schema.org",
  "@graph": [buildOrganizationJsonLd()],
};

const jsonLdString = JSON.stringify(jsonLdPayload).replaceAll("<", "\\u003c");

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdString }}
    />
  );
}
