import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/config/services";
import { getSiteOrigin } from "@/lib/seo/site-origin";
import { STANDORT_CITIES } from "@/lib/routes/standorte";

const CORE_PAGES: readonly { path: string; priority: number }[] = [
  { path: "/", priority: 1.0 },
  { path: "/ueber-uns", priority: 0.95 },
  { path: "/qualitaetsmanagement", priority: 0.9 },
  { path: "/karriere", priority: 0.85 },
  { path: "/kontakt", priority: 0.8 },
] as const;

const LEISTUNG_PRIORITY = 0.9;
const STANDORT_PRIORITY = 0.8;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteOrigin();
  const now = new Date();

  const core: MetadataRoute.Sitemap = CORE_PAGES.map(({ path, priority }) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority,
  }));

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

  return [...core, ...leistungen, ...standorte];
}
