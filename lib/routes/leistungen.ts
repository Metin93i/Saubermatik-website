import type { ServiceSlug } from "@/lib/config/services";
import { SERVICES } from "@/lib/config/services";

export type LeistungSlug = ServiceSlug;

export const LEISTUNG_SLUGS = SERVICES.map((s) => s.slug);

export function isLeistungSlug(value: string): value is LeistungSlug {
  return SERVICES.some((s) => s.slug === value);
}

export type LeistungContent = {
  title: string;
  summary: string;
  body: string[];
};

export const LEISTUNGEN_BY_SLUG: Record<LeistungSlug, LeistungContent> =
  Object.fromEntries(
    SERVICES.map((s) => [
      s.slug,
      {
        title: s.title,
        summary: s.summary,
        body: [...s.body],
      },
    ]),
  ) as Record<LeistungSlug, LeistungContent>;
