import { getSiteOrigin } from "@/lib/seo/site-origin";

export const KEY_ACCOUNT_COPY = {
  eyebrow: "One Face to the Customer",
  title: "Ihr dedizierter Key Account Manager",
  intro:
    "Konzerne und mittelständische Liegenschaftsverantwortliche erwarten keine wechselnden Callcenter-Ketten – sondern einen strategischen Partner mit direkter Erreichbarkeit, klaren Eskalationsstufen und Verantwortung bis zur Geschäftsführungsebene.",
  pillars: [
    {
      title: "Eine Gesicht, eine Verantwortung",
      body: "Ihr Key Account Manager kennt Vertragslogik, SLA-KPIs und Objektbesonderheiten. Entscheidungen werden nicht „weitergeleitet“, sondern mit festem Ansprechpartner getroffen – mit dokumentierter Nachverfolgung in der Saubermatik-Plattform.",
    },
    {
      title: "Direkte Durchwahl & klare Eskalation",
      body: "Nach Vertragsstart erhalten Sie eine feste Eskalationsmatrix: operativer Tageskontakt, strategische Quartalsreviews und eine definierte Notfallstufe für sicherheits- oder reputationskritische Ereignisse – ohne Warteschleife.",
    },
    {
      title: "Null anonyme Hotline",
      body: "Kein anonymes „Ticket #48291“. Stattdessen: benannte Verantwortlichkeit, SLA-konforme Reaktionszeiten und Reporting, das Einkauf, Facility und Geschäftsführung in einem Format lesen können.",
    },
  ],
  roleTitle: "Key Account Manager Gebäudereinigung",
  organizationName: "Saubermatik Gebäudereinigung",
} as const;

export function buildKeyAccountJsonLd() {
  const origin = getSiteOrigin();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "OrganizationRole",
        "@id": `${origin}/#key-account-role`,
        name: KEY_ACCOUNT_COPY.roleTitle,
        description: KEY_ACCOUNT_COPY.intro,
        roleName: "Key Account Manager",
        knowsAbout: [
          "Facility Management",
          "Service Level Agreement",
          "Gebäudereinigung B2B",
          "CAFM-Integration",
        ],
      },
      {
        "@type": "Organization",
        "@id": `${origin}/#organization`,
        name: KEY_ACCOUNT_COPY.organizationName,
        url: origin,
        employee: {
          "@type": "Person",
          name: "Saubermatik Key Account Management",
          jobTitle: KEY_ACCOUNT_COPY.roleTitle,
          worksFor: { "@id": `${origin}/#organization` },
          description:
            "Dedizierte strategische Ansprechpartner für Enterprise- und Mittelstandsobjekte – One Face to the Customer.",
        },
      },
    ],
  };
}
