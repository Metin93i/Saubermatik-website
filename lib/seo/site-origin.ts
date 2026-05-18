/** Öffentliche Live-Domain (Fallback wenn `NEXT_PUBLIC_SITE_URL` fehlt). */
export const SITE_ORIGIN_FALLBACK = "https://www.saubermatik-reinigung.de";

/** Canonical Origin für absolute URLs (JSON-LD, Breadcrumbs, Sitemap, robots). */
export function getSiteOrigin(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL ?? SITE_ORIGIN_FALLBACK).replace(
    /\/+$/,
    "",
  );
}
