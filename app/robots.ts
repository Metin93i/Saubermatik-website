import type { MetadataRoute } from "next";
import { getSiteOrigin } from "@/lib/seo/site-origin";

/** Bekannte LLM-/AI-Crawler — `Disallow: /` reduziert ungebetenes Trainingsscraping (kein juristischer Schutz). */
const AI_SCRAPER_USER_AGENTS = [
  "CCBot",
  "GPTBot",
  "anthropic-ai",
  "Claude-Web",
] as const;

export default function robots(): MetadataRoute.Robots {
  const base = getSiteOrigin();

  return {
    rules: [
      ...AI_SCRAPER_USER_AGENTS.map((userAgent) => ({
        userAgent,
        disallow: ["/"],
      })),
      { userAgent: "Googlebot", allow: ["/"] },
      { userAgent: "Bingbot", allow: ["/"] },
      { userAgent: "*", allow: ["/"] },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
