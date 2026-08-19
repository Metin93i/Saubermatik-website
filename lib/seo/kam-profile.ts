import { getSiteOrigin } from "@/lib/seo/site-origin";

/** Single Source: Key-Account-Profil Metin Altinsoy (Hero, Kontakt, JSON-LD). */
export const KAM_PROFILE = {
  eyebrow: "Ihr persönlicher Ansprechpartner",
  name: "Metin Altinsoy | Geschäftsführer",
  usp: "Geschäftsführer und fester Ansprechpartner statt Callcenter.",
  expertise:
    "Glas- und Raffstore-Spezialist. Digitale Plattform für dokumentierte Einsätze – Umfang nach Vereinbarung.",
  portraitAlt:
    "Metin Altinsoy, Geschäftsführer Saubermatik — persönlicher Ansprechpartner",
  jobTitle: "Geschäftsführer & persönlicher Ansprechpartner",
  organizationName: "Saubermatik Gebäudereinigung",
} as const;

export function buildKamProfileJsonLd() {
  const origin = getSiteOrigin();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${origin}/#metin-altinsoy`,
        name: "Metin Altinsoy",
        jobTitle: KAM_PROFILE.jobTitle,
        worksFor: {
          "@type": "Organization",
          "@id": `${origin}/#organization`,
          name: KAM_PROFILE.organizationName,
          url: origin,
        },
        description: `${KAM_PROFILE.usp} ${KAM_PROFILE.expertise}`,
        knowsAbout: [
          "Facility Management",
          "Glasreinigung",
          "Raffstore-Reinigung",
          "Digitale Einsatzdokumentation",
          "Gebäudereinigung B2B",
        ],
      },
      {
        "@type": "OrganizationRole",
        "@id": `${origin}/#kam-role-metin-altinsoy`,
        roleName: "Geschäftsführer",
        namedPosition: KAM_PROFILE.jobTitle,
        description: KAM_PROFILE.usp,
        holder: { "@id": `${origin}/#metin-altinsoy` },
      },
    ],
  };
}
