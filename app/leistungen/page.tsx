import type { Metadata } from "next";
import Link from "next/link";
import { LEISTUNG_SLUGS, LEISTUNGEN_BY_SLUG } from "@/lib/routes/leistungen";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Facility & Reinigung in der Zollernalb: Unterhalts- & Büroreinigung, Glas, Treppenhaus, Hausmeister, Grünanlagen, Winterdienst, Grund-/Bau- und Fassadenreinigung.",
};

export default function LeistungenPage() {
  return (
    <div className="mx-auto w-full max-w-6xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold text-secondary">Leistungen</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Reinigung, die zu Ihrem Objekt passt
        </h1>
        <p className="mt-4 text-base leading-7 text-muted">
          Wählen Sie eine Leistung – wir beraten Sie transparent zu Umfang,
          Intervallen und einem unverbindlichen Angebot.
        </p>
      </div>

      <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {LEISTUNG_SLUGS.map((slug) => {
          const item = LEISTUNGEN_BY_SLUG[slug];
          return (
            <li key={slug}>
              <Link
                href={`/leistungen/${slug}`}
                className="group block rounded-sm border border-zinc-300 bg-white p-6 transition hover:border-primary hover:bg-zinc-100"
              >
                <h2 className="text-lg font-semibold text-foreground group-hover:text-secondary">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {item.summary}
                </p>
                <span className="mt-4 inline-flex text-sm font-semibold text-secondary">
                  Details ansehen →
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
