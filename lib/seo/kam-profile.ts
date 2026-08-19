import { getSiteOrigin } from "@/lib/seo/site-origin";

/** Single Source: Key-Account-Profil Metin Altinsoy (Hero, Kontakt, JSON-LD). */
export const KAM_PROFILE = {
  eyebrow: "Ihr persönlicher Key Account Manager",
  name: "Metin Altinsoy | Geschäftsführer",
  usp: "Fester Ansprechpartner statt Callcenter.",
  expertise:
    "Spezialisiert auf digitale QM-Kontrolle & Kalkulation von Industrieobjekten.",
  portraitAlt:
    "Metin Altinsoy, Geschäftsführer Saubermatik — Key Account Manager",
  jobTitle: "Geschäftsführer & Key Account Manager",
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
          "Digitale Qualitätskontrolle",
          "Gebäudereinigung B2B",
          "Service Level Agreement",
          "Industrieobjekte",
        ],
      },
      {
        "@type": "OrganizationRole",
        "@id": `${origin}/#kam-role-metin-altinsoy`,
        roleName: "Key Account Manager",
        namedPosition: KAM_PROFILE.jobTitle,
        description: KAM_PROFILE.usp,
        holder: { "@id": `${origin}/#metin-altinsoy` },
      },
    ],
  };
}
