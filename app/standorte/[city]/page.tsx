import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { getLocalEntityAugmentation } from "@/lib/seo/local-entities";
import {
  STANDORT_CITIES,
  STANDORTE_BY_CITY,
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
  const headline = STANDORTE_BY_CITY[city].headline;
  return {
    title: `${label}: Gebäudereinigung`,
    description: `${headline} – Saubermatik aus Meßstetten, für die Region Zollernalb.`,
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
  const content = STANDORTE_BY_CITY[city];
  const entityAug = getLocalEntityAugmentation(city, label);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", path: "/" },
          { name: label, path: `/standorte/${city}` },
        ]}
      />
      <article className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-secondary">Standort {label}</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          {content.headline}
        </h1>
        <div className="mt-6 space-y-4 text-base leading-7 text-muted">
          {content.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        {entityAug ? (
          <section
            className="mt-10 border-t border-foreground/10 pt-8"
            aria-labelledby={`local-entities-${city}`}
          >
            <h2
              id={`local-entities-${city}`}
              className="text-xl font-bold tracking-tight text-primary"
            >
              {entityAug.heading}
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-muted">
              {entityAug.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </section>
        ) : null}
        <div className="mt-10">
          <Link
            href="/kontakt#kontakt-anfrage"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
          >
            Terminwunsch senden
          </Link>
        </div>
      </article>
    </>
  );
}
