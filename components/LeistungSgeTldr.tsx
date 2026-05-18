import type { LeistungSlug } from "@/lib/routes/leistungen";
import { getLeistungSgeTldr } from "@/lib/seo/leistung-sge-tldr";

type Props = { slug: LeistungSlug };

export function LeistungSgeTldr({ slug }: Props) {
  const t = getLeistungSgeTldr(slug);

  return (
    <section
      aria-label="Zusammenfassung"
      className="mt-8 rounded-xl border border-foreground/10 bg-secondary/5 px-4 py-5 sm:px-5"
    >
      <h2 className="text-sm font-bold uppercase tracking-wide text-secondary">
        Kurz &amp; faktenbasiert
      </h2>
      <ul className="mt-3 list-disc space-y-3 pl-5 text-base leading-7 text-foreground/90 marker:text-secondary">
        <li>
          <strong className="text-foreground">Problem:</strong> {t.problem}
        </li>
        <li>
          <strong className="text-foreground">Saubermatik-Lösung:</strong>{" "}
          {t.saubermatikLoesung}
        </li>
        <li>
          <strong className="text-foreground">Zeitrahmen:</strong> {t.zeitrahmen}
        </li>
      </ul>
    </section>
  );
}
