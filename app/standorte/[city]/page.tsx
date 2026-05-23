import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { FreshnessBadge } from "@/components/FreshnessBadge";
import { LocalCityFaq } from "@/components/LocalCityFaq";
import { SeoCrossLinks } from "@/components/SeoCrossLinks";
import { buildStandortDeepContent } from "@/lib/seo/standort-deep-content";
import {
  STANDORT_CITIES,
  STANDORT_LABELS,
  isStandortCity,
} from "@/lib/routes/standorte";

type PageProps = {
  params: Promise<{ city: string }>;
};

export function generateStaticParams() {
  return STANDORT_CITIES.map((city) => ({ city }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { city } = await params;
  if (!isStandortCity(city)) {
    return { title: "Standort" };
  }
  const label = STANDORT_LABELS[city];
  const deep = buildStandortDeepContent(city, label);
  return {
    title: `${label}: Facility & Gebäudereinigung`,
    description: deep.heroSubtitle.slice(0, 160),
    alternates: {
      canonical: `/standorte/${city}`,
    },
  };
}

export default async function StandortPage({ params }: PageProps) {
  const { city } = await params;
  if (!isStandortCity(city)) {
    notFound();
  }
  const label = STANDORT_LABELS[city];
  const deep = buildStandortDeepContent(city, label);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", path: "/" },
          { name: "Standorte", path: "/standorte" },
          { name: label, path: `/standorte/${city}` },
        ]}
      />
      <div className="flex flex-1 flex-col bg-white">
        <section className="border-b border-slate-200/80 bg-gradient-to-b from-slate-50 via-white to-white">
          <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
            <nav className="text-sm font-semibold text-secondary">
              <Link href="/standorte" className="hover:underline">
                Standorte
              </Link>
              <span className="text-muted"> / </span>
              <span className="text-muted">{label}</span>
            </nav>
            <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-secondary">
              Standort {label}
            </p>
            <h1 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
              {deep.heroTitle}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
              {deep.heroSubtitle}
            </p>
            <FreshnessBadge className="mt-6" />
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/kontakt#kontakt-anfrage"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-md transition hover:bg-primary/90"
              >
                Objekt in {label} anfragen
              </Link>
              <Link
                href="/leistungen/unterhaltsreinigung"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-foreground/15 px-6 text-sm font-semibold text-foreground transition hover:border-secondary/50 hover:bg-secondary/5"
              >
                Leistungen
              </Link>
            </div>
          </div>
        </section>

        <article className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          {deep.sections.map((section) => (
            <section
              key={section.id}
              className="mt-14 first:mt-0"
              aria-labelledby={`${section.id}-${city}`}
            >
              <h2
                id={`${section.id}-${city}`}
                className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
              >
                {section.title}
              </h2>
              <div className="mt-6 space-y-5 text-base leading-[1.75] text-foreground/90">
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 56)}>{p}</p>
                ))}
              </div>
            </section>
          ))}

          <LocalCityFaq city={city} />

          <div className="mt-14 border-t border-foreground/10 pt-10">
            <SeoCrossLinks type="service" />
          </div>
        </article>
      </div>
    </>
  );
}
