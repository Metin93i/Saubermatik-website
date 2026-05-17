import Link from "next/link";
import { SaubermatikLogo } from "@/components/SaubermatikLogo";
import { LEISTUNG_SLUGS, LEISTUNGEN_BY_SLUG } from "@/lib/routes/leistungen";
import { STANDORT_CITIES, STANDORT_LABELS } from "@/lib/routes/standorte";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-foreground/10 bg-primary text-primary-foreground">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <SaubermatikLogo href="/" variant="onDark" />
          <p className="mt-3 text-sm leading-6 text-primary-foreground/85">
            Professionelle Gebäudereinigung aus Meßstetten – für die Region
            Zollernalb und angrenzende Städte.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold">Leistungen</p>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/85">
            {LEISTUNG_SLUGS.map((slug) => (
              <li key={slug}>
                <Link
                  href={`/leistungen/${slug}`}
                  className="text-primary-foreground/90 transition hover:text-[color:var(--link-on-primary)] hover:underline"
                >
                  {LEISTUNGEN_BY_SLUG[slug].title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="text-sm font-semibold">Standorte &amp; Region</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3 lg:grid-cols-2">
            {STANDORT_CITIES.map((city) => (
              <li key={city} className="min-h-[1.25rem]">
                <Link
                  href={`/standorte/${city}`}
                  className="text-sm text-primary-foreground/90 transition hover:text-[color:var(--link-on-primary)] hover:underline"
                >
                  {STANDORT_LABELS[city]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-primary-foreground/75 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Saubermatik Gebäudereinigung</p>
          <Link
            href="/leistungen"
            className="hover:text-[color:var(--link-on-primary)] hover:underline"
          >
            Leistungsübersicht
          </Link>
        </div>
      </div>
    </footer>
  );
}
