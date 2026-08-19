import type { MatrixServiceSlug } from "@/lib/config/services";
import type { StandortCity } from "@/lib/routes/standorte";

/** Deterministischer Spin über Stadt+Leistung — stabil pro Build, unique pro Matrix-Zelle. */
export function matrixSpinVariant(
  city: StandortCity,
  service: MatrixServiceSlug,
  mod: number,
): number {
  let h = 2166136261;
  const key = `${city}:${service}`;
  for (let i = 0; i < key.length; i++) {
    h ^= key.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h) % mod;
}
