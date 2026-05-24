/** Pfad zum Kunden-Login auf der SaaS-Plattform. */
export const PLATFORM_LOGIN_PATH = "/login";

/** Fallback, wenn weder Env noch Browser-Kontext verfügbar (SSR). */
export const PLATFORM_URL_FALLBACK = "http://72.62.88.65:3001";

/**
 * Basis-URL der SaaS-Kundenplattform.
 * Priorität: `NEXT_PUBLIC_PLATFORM_URL` → Browser `{hostname}:3001` → VPS-Fallback.
 */
export function getPlatformBaseUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_PLATFORM_URL?.trim();
  if (fromEnv) return fromEnv.replace(/\/+$/, "");

  if (typeof window !== "undefined") {
    return `${window.location.protocol}//${window.location.hostname}:3001`;
  }

  return PLATFORM_URL_FALLBACK;
}

/** Vollständige Login-URL für Header-Button. */
export function getPlatformLoginUrl(): string {
  return `${getPlatformBaseUrl()}${PLATFORM_LOGIN_PATH}`;
}
