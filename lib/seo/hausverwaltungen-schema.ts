import { getSiteOrigin } from "@/lib/seo/site-origin";

export function buildHausverwaltungenServiceJsonLd() {
  const origin = getSiteOrigin();
  const url = `${origin}/zielgruppen/hausverwaltungen`;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#property-management-service`,
    name: "Property Management Maintenance Services",
    serviceType:
      "Gebäudereinigung, Hausmeisterservice, Grünanlagenpflege und Winterdienst für Hausverwaltungen",
    description:
      "All-in-One Objektbetreuung für Hausverwaltungen: Treppenhausreinigung, Hausmeister, Grünpflege und dokumentierter Winterdienst mit dokumentierten Einsätzen über die Saubermatik-Plattform (Umfang je nach Objekt und Vereinbarung).",
    url,
    inLanguage: "de-DE",
    provider: {
      "@type": "LocalBusiness",
      name: "Saubermatik Gebäudereinigung",
      url: origin,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Zollernalbkreis, Sigmaringen, Rottweil, Hechingen, Tübingen; Projekte Stuttgart und Bodensee",
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Hausverwaltungen, WEG-Verwalter, Liegenschaftsverwalter",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: `${origin}/kontakt#kontakt-anfrage`,
    },
  };
}
