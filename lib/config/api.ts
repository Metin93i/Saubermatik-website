/**
 * Basis-URL für Client-seitige API-Aufrufe (Lead, Karriere, künftige SaaS-Endpoints).
 * Leer oder unset → same-origin (Next.js `/api/*` auf demselben Host).
 * Separates Backend: `NEXT_PUBLIC_API_URL=https://api.example.com`
 */
export function getApiBaseUrl(): string {
  const raw = process.env.NEXT_PUBLIC_API_URL?.trim();
  if (!raw) return "";
  return raw.replace(/\/+$/, "");
}

/** Baut absolute oder relative API-URL: `/api/lead` oder `{BASE}/api/lead`. */
export function apiUrl(path: string): string {
  const base = getApiBaseUrl();
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return base ? `${base}${normalized}` : normalized;
}
