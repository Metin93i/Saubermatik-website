import { getBusinessPhoneDisplay } from "@/lib/config/site";

/** Baut `tel:+49…` aus deutscher Schreibweise (Leerzeichen, /, Klammern). */
export function buildTelHref(raw: string): string | null {
  const d = raw.replace(/\D/g, "");
  if (d.length < 6) return null;
  if (d.startsWith("49")) return `tel:+${d}`;
  if (d.startsWith("0")) return `tel:+49${d.slice(1)}`;
  return `tel:+49${d}`;
}

/** Kanonische Geschäftsnummer + tel:-Link für Header, Footer, CTAs. */
export function getBusinessPhone(): {
  display: string;
  telHref: string | null;
} {
  const display = getBusinessPhoneDisplay();
  return { display, telHref: buildTelHref(display) };
}
