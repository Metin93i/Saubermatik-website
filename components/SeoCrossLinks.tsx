import Link from "next/link";
import { LEISTUNGEN_BY_SLUG, type LeistungSlug } from "@/lib/routes/leistungen";
import { STANDORT_LABELS } from "@/lib/routes/standorte";

const TOP_SERVICE_SLUGS = [
  "unterhaltsreinigung",
  "fenster-glasreinigung",
  "entruempelung",
] as const satisfies readonly LeistungSlug[];

const TOP_LOCATION_LINKS = [
  { href: "/standorte/stuttgart", label: "Stuttgart (Metropolregion)" },
  {
    href: "/standorte/balingen",
    label: STANDORT_LABELS.balingen,
  },
  {
    href: "/standorte/tuttlingen",
    label: STANDORT_LABELS.tuttlingen,
  },
] as const;

const asideClass =
  "mt-12 rounded-none border border-foreground/10 bg-secondary/5 px-4 py-5 sm:px-5";

type Props = {
  /** Auf Leistungsseiten: verlinkt priorisierte Standort-Hubs. */
  type: "location" | "service";
};

export function SeoCrossLinks({ type }: Props) {
  if (type === "location") {
    return (
      <aside className={asideClass} aria-label="Beliebte Einsatzorte">
        <h2 className="text-base font-bold text-foreground">
          Beliebte Einsatzorte
        </h2>
        <p className="mt-1 text-sm text-muted">
          Gebäudereinigung dort, wo Ihre Objekte stehen — inklusive Spezial-Hub
          Stuttgart.
        </p>
        <ul className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
          {TOP_LOCATION_LINKS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm font-semibold text-secondary underline-offset-4 transition hover:text-secondary hover:underline"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/standorte"
              className="text-sm font-medium text-muted underline-offset-4 transition hover:text-secondary hover:underline"
            >
              Alle Standorte
            </Link>
          </li>
        </ul>
      </aside>
    );
  }

  return (
    <aside className={asideClass} aria-label="Passende Leistungen">
      <h2 className="text-base font-bold text-foreground">
        Das könnte Sie auch interessieren
      </h2>
      <p className="mt-1 text-sm text-muted">
        Häufig kombinierte Leistungen — direkt zur Detailseite.
      </p>
      <ul className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
        {TOP_SERVICE_SLUGS.map((slug) => (
          <li key={slug}>
            <Link
              href={`/leistungen/${slug}`}
              className="text-sm font-semibold text-secondary underline-offset-4 transition hover:text-secondary hover:underline"
            >
              {LEISTUNGEN_BY_SLUG[slug].title}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/leistungen"
            className="text-sm font-medium text-muted underline-offset-4 transition hover:text-secondary hover:underline"
          >
            Zur Leistungsübersicht
          </Link>
        </li>
      </ul>
    </aside>
  );
}
