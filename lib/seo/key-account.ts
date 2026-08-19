import { getSiteOrigin } from "@/lib/seo/site-origin";

export const KEY_ACCOUNT_COPY = {
  eyebrow: "Fester Ansprechpartner",
  title: "Geschäftsführer als persönlicher Ansprechpartner",
  intro:
    "Sie erreichen bei uns keine Callcenter-Kette, sondern Metin Altinsoy – Geschäftsführer und fester Ansprechpartner. Rückmeldung innerhalb eines Werktags; bei Spezialanfragen auch direkt über die Geschäftsführung.",
  pillars: [
    {
      title: "Ein Gesicht, eine Verantwortung",
      body: "Ihr Ansprechpartner kennt Objekt und Vereinbarung. Entscheidungen werden nicht weitergereicht – mit dokumentierter Nachverfolgung in der Saubermatik-Plattform, Umfang nach Absprache.",
    },
    {
      title: "Erreichbarkeit mit Klärung",
      body: "Rückmeldung innerhalb eines Werktags. Bei Urlaub oder Ausfall übernimmt ein bewährtes Vertretungsteam; sonst die Geschäftsführung persönlich. Vertraglich vereinbarte Reaktionszeiten legen wir im Angebot fest.",
    },
    {
      title: "Kein anonymes Ticketsystem",
      body: "Kein Callcenter. Stattdessen: benannte Verantwortlichkeit und Nachweise, die Sie intern verwenden können – ohne leere Versprechen.",
    },
  ],
  roleTitle: "Geschäftsführer Gebäudereinigung",
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
        roleName: "Geschäftsführer",
        knowsAbout: [
          "Facility Management",
          "Glasreinigung",
          "Raffstore-Reinigung",
          "Gebäudereinigung B2B",
        ],
      },
      {
        "@type": "Organization",
        "@id": `${origin}/#organization`,
        name: KEY_ACCOUNT_COPY.organizationName,
        url: origin,
        employee: {
          "@type": "Person",
          name: "Metin Altinsoy",
          jobTitle: KEY_ACCOUNT_COPY.roleTitle,
          worksFor: { "@id": `${origin}/#organization` },
          description:
            "Geschäftsführer und persönlicher Ansprechpartner – fester Kontakt statt Callcenter.",
        },
      },
    ],
  };
}
