/** Canonical Origin für absolute URLs (JSON-LD, Breadcrumbs). */
export function getSiteOrigin(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.saubermatik.de"
  ).replace(/\/+$/, "");
}
