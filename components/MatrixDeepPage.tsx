import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { FreshnessBadge } from "@/components/FreshnessBadge";
import { AnfrageCta } from "@/components/AnfrageCta";
import { ProjektRahmen } from "@/components/ProjektRahmen";
import { SeoCrossLinks } from "@/components/SeoCrossLinks";
import { isProjektCity } from "@/lib/config/city-tiers";
import type { MatrixDeepContent } from "@/lib/seo/matrix-content";

const PAGE_CONTAINER =
  "mx-auto w-full max-w-[100rem] px-4 sm:px-8 lg:px-16";

type Props = {
  content: MatrixDeepContent;
};

export function MatrixDeepPage({ content }: Props) {
  const {
    city,
    service,
    cityLabel,
    serviceLabel,
    heroTitle,
    heroSubtitle,
    sections,
  } = content;

  const pagePath = `/standorte/${city}/${service}`;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", path: "/" },
          { name: "Einsatzgebiete", path: "/standorte" },
          { name: cityLabel, path: `/standorte/${city}` },
          { name: serviceLabel, path: pagePath },
        ]}
      />
      <div className="flex flex-1 flex-col bg-white">
        <section className="border-b border-zinc-200 bg-zinc-50">
          <div className={`${PAGE_CONTAINER} py-8 sm:py-10`}>
            <nav className="text-sm font-semibold text-secondary">
              <Link href="/standorte" className="hover:underline">
                Einsatzgebiete
              </Link>
              <span className="text-muted"> / </span>
              <Link href={`/standorte/${city}`} className="hover:underline">
                {cityLabel}
              </Link>
              <span className="text-muted"> / </span>
              <span className="text-muted">{serviceLabel}</span>
            </nav>
            <p className="mt-3 text-xs font-bold uppercase tracking-widest text-primary">
              {serviceLabel} · {cityLabel}
            </p>
            <h1 className="mt-2 max-w-5xl text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
              {heroTitle}
            </h1>
            <p className="mt-4 max-w-4xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              {heroSubtitle}
            </p>
            {isProjektCity(city) ? (
              <ProjektRahmen cityLabel={cityLabel} className="mt-4" />
            ) : null}
            <FreshnessBadge className="mt-4" />
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/kontakt#kontakt-anfrage"
                className="inline-flex h-11 items-center justify-center rounded-sm bg-primary px-5 text-sm font-bold text-primary-foreground transition hover:bg-primary/90"
              >
                Anfrage stellen
              </Link>
              <Link
                href={`/leistungen/${service}`}
                className="inline-flex h-11 items-center justify-center rounded-sm border border-zinc-300 bg-white px-5 text-sm font-bold text-foreground transition hover:bg-zinc-100"
              >
                Leistungsdetails
              </Link>
            </div>
          </div>
        </section>

        <section className="border-b border-zinc-200 bg-white py-10 sm:py-12">
          <div className={`${PAGE_CONTAINER} space-y-12`}>
            {sections.map((section) => (
              <article key={section.id} id={section.id}>
                <h2 className="text-xl font-extrabold tracking-tight text-foreground sm:text-2xl">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className="max-w-4xl text-base leading-7 text-muted sm:leading-8"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="kontakt-anfrage"
          className="border-b border-zinc-200 bg-zinc-50 py-10 sm:py-12"
        >
          <div className={`${PAGE_CONTAINER}`}>
            <AnfrageCta
              title={`${serviceLabel} in ${cityLabel} anfragen`}
              text="Objektgröße, Intervalle, Sonderflächen — nach einer Begehung erhalten Sie ein unverbindliches Angebot."
            />
          </div>
        </section>

        <div className={PAGE_CONTAINER}>
          <SeoCrossLinks type="service" />
        </div>
      </div>
    </>
  );
}
