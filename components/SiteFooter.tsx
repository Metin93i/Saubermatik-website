import { SaubermatikLogo } from "@/components/SaubermatikLogo";
import { PrefetchLink } from "@/components/PrefetchLink";
import { LEISTUNG_SLUGS, LEISTUNGEN_BY_SLUG } from "@/lib/routes/leistungen";
import { STANDORT_CITIES, STANDORT_LABELS } from "@/lib/routes/standorte";

const UNTERNEHMEN_LINKS = [
  { href: "/qualitaetsmanagement", label: "Qualitätsmanagement" },
  { href: "/expertise", label: "Expertise" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/karriere", label: "Karriere" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-foreground/10 bg-surface-inverse text-surface-inverse-foreground">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="sm:col-span-2 lg:col-span-1">
          <SaubermatikLogo variant="onDark" />
          <p className="mt-3 text-sm leading-6 text-surface-inverse-foreground/85">
            Professionelle Gebäudereinigung aus Meßstetten – für die Region
            Zollernalb, Tübingen und angrenzende Wirtschaftsräume.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold">Leistungen</p>
          <ul className="mt-3 space-y-2 text-sm text-surface-inverse-foreground/85">
            {LEISTUNG_SLUGS.map((slug) => (
              <li key={slug}>
                <PrefetchLink
                  href={`/leistungen/${slug}`}
                  className="text-surface-inverse-foreground/90 transition hover:text-[color:var(--link-on-inverse)] hover:underline"
                >
                  {LEISTUNGEN_BY_SLUG[slug].title}
                </PrefetchLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold">Unternehmen</p>
          <ul className="mt-3 space-y-2 text-sm text-surface-inverse-foreground/85">
            {UNTERNEHMEN_LINKS.map((item) => (
              <li key={item.href}>
                <PrefetchLink
                  href={item.href}
                  className="text-surface-inverse-foreground/90 transition hover:text-[color:var(--link-on-inverse)] hover:underline"
                >
                  {item.label}
                </PrefetchLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="text-sm font-semibold">Standorte &amp; Region</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3 lg:grid-cols-2">
            {STANDORT_CITIES.map((city) => (
              <li key={city} className="min-h-[1.25rem]">
                <PrefetchLink
                  href={`/standorte/${city}`}
                  className="text-sm text-surface-inverse-foreground/90 transition hover:text-[color:var(--link-on-inverse)] hover:underline"
                >
                  {STANDORT_LABELS[city]}
                </PrefetchLink>
              </li>
            ))}
            <li className="min-h-[1.25rem] sm:col-span-2 lg:col-span-2">
              <PrefetchLink
                href="/standorte/stuttgart"
                className="text-sm font-semibold text-surface-inverse-foreground transition hover:text-[color:var(--link-on-inverse)] hover:underline"
              >
                Stuttgart (Metropolregion, Spezial-Hub)
              </PrefetchLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-surface-inverse-foreground/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-surface-inverse-foreground/75 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Saubermatik Gebäudereinigung</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <PrefetchLink
              href="/leistungen"
              className="hover:text-[color:var(--link-on-inverse)] hover:underline"
            >
              Leistungsübersicht
            </PrefetchLink>
            <PrefetchLink
              href="/kontakt"
              className="hover:text-[color:var(--link-on-inverse)] hover:underline"
            >
              Kontakt
            </PrefetchLink>
            <PrefetchLink
              href="/wissen"
              className="hover:text-[color:var(--link-on-inverse)] hover:underline"
            >
              Wissen &amp; Lexikon
            </PrefetchLink>
            <PrefetchLink
              href="/impressum"
              className="hover:text-[color:var(--link-on-inverse)] hover:underline"
            >
              Impressum
            </PrefetchLink>
            <PrefetchLink
              href="/datenschutz"
              className="hover:text-[color:var(--link-on-inverse)] hover:underline"
            >
              Datenschutz
            </PrefetchLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
