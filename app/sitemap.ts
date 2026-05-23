import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/config/services";
import { LEXIKON_TERMS } from "@/lib/config/lexikon";
import { generateMatrixStaticParams } from "@/lib/seo/matrix-params";
import { getSiteOrigin } from "@/lib/seo/site-origin";
import { STANDORT_CITIES } from "@/lib/routes/standorte";

const CORE_PAGES: readonly {
  path: string;
  priority: number;
  changeFrequency?: "weekly" | "monthly";
}[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/ueber-uns", priority: 0.95 },
  { path: "/zielgruppen/hausverwaltungen", priority: 0.95, changeFrequency: "weekly" },
  { path: "/qualitaetsmanagement", priority: 0.9 },
  { path: "/karriere", priority: 0.85 },
  { path: "/kontakt", priority: 0.8 },
] as const;

const LEISTUNG_PRIORITY = 0.9;
const STANDORT_PRIORITY = 0.8;

/** Zusätzliche Index-/Spezial-Routen inkl. Standort-Hub `/standorte`. */
function extraRoutes(base: string, now: Date): MetadataRoute.Sitemap {
  return [
    {
      url: `${base}/standorte`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${base}/leistungen`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${base}/expertise`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${base}/standorte/stuttgart`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
  ];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteOrigin();
  const now = new Date();

  const core: MetadataRoute.Sitemap = CORE_PAGES.map(
    ({ path, priority, changeFrequency }) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: changeFrequency ?? (path === "/" ? "weekly" : "monthly"),
      priority,
    }),
  );

  const extras = extraRoutes(base, now);

  const leistungen: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${base}/leistungen/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: LEISTUNG_PRIORITY,
  }));

  const standorte: MetadataRoute.Sitemap = STANDORT_CITIES.map((city) => ({
    url: `${base}/standorte/${city}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: STANDORT_PRIORITY,
  }));

  const matrix: MetadataRoute.Sitemap = generateMatrixStaticParams().map(
    ({ city, service }) => ({
      url: `${base}/standorte/${city}/${service}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    }),
  );

  const wissen: MetadataRoute.Sitemap = [
    {
      url: `${base}/wissen`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },
    ...LEXIKON_TERMS.map((term) => ({
      url: `${base}/wissen/${term}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  return [...core, ...extras, ...leistungen, ...standorte, ...matrix, ...wissen];
}
