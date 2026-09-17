/** Pfad zum Kunden-Login auf der SaaS-Plattform. */
export const PLATFORM_LOGIN_PATH = "/login";

/**
 * Basis-URL der SaaS-Kundenplattform.
 * Priorität: `NEXT_PUBLIC_PLATFORM_URL` → Browser `{hostname}:3001`.
 * Ohne Env und ohne Browser-Kontext (SSR): leer — kein hartes IP-Fallback.
 */
export function getPlatformBaseUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_PLATFORM_URL?.trim();
  if (fromEnv) return fromEnv.replace(/\/+$/, "");

  if (typeof window !== "undefined") {
    return `${window.location.protocol}//${window.location.hostname}:3001`;
  }

  return "";
}

/** Vollständige Login-URL für Header-Button. */
export function getPlatformLoginUrl(): string {
  const base = getPlatformBaseUrl();
  if (!base) return PLATFORM_LOGIN_PATH;
  return `${base}${PLATFORM_LOGIN_PATH}`;
}
