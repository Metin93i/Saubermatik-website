import Link from "next/link";
import { B2BOnboardingProcess } from "@/components/B2BOnboardingProcess";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { LeistungFaqJsonLd } from "@/components/LeistungFaqJsonLd";
import { LeistungHeroImage } from "@/components/LeistungHeroImage";
import { LeistungSgeTldr } from "@/components/LeistungSgeTldr";
import { LeadFunnel } from "@/components/LeadFunnel";
import { SeoCrossLinks } from "@/components/SeoCrossLinks";
import { SnippetBaitTable } from "@/components/SnippetBaitTable";
import type { LeistungDeepContent } from "@/lib/seo/leistung-deep-content";

type Props = {
  content: LeistungDeepContent;
};

export function LeistungDeepPage({ content }: Props) {
  const {
    slug,
    breadcrumbLabel,
    heroTitle,
    heroSubtitle,
    introParagraphs,
    deepDives,
    highlight,
    secondaryCta,
    funnelTitle,
    funnelSubtitle,
  } = content;

  const pagePath = `/leistungen/${slug}`;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", path: "/" },
          { name: "Leistungen", path: "/leistungen" },
          { name: breadcrumbLabel, path: pagePath },
        ]}
      />
      <LeistungFaqJsonLd slug={slug} />
      <div className="flex flex-1 flex-col bg-white">
        <section className="border-b border-slate-200/80 bg-zinc-100">
          <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
            <nav className="text-sm font-semibold text-secondary">
              <Link href="/leistungen" className="hover:underline">
                Leistungen
              </Link>
              <span className="text-muted"> / </span>
              <span className="text-muted">{breadcrumbLabel}</span>
            </nav>
            <h1 className="mt-6 max-w-4xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
              {heroTitle}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
              {heroSubtitle}
            </p>
            <LeistungHeroImage
              slug={slug}
              priority
              className="mt-10 max-w-4xl"
            />
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#kontakt-anfrage"
                className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
              >
                Analyse anfordern
              </a>
              {secondaryCta ? (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex h-12 items-center justify-center rounded-sm border border-zinc-300 px-6 text-sm font-semibold text-foreground transition hover:border-secondary/50 hover:bg-secondary/5"
                >
                  {secondaryCta.label}
                </Link>
              ) : (
                <Link
                  href="/qualitaetsmanagement"
                  className="inline-flex h-12 items-center justify-center rounded-sm border border-zinc-300 px-6 text-sm font-semibold text-foreground transition hover:border-secondary/50 hover:bg-secondary/5"
                >
                  Qualitätsmanagement
                </Link>
              )}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <LeistungSgeTldr slug={slug} />
          <div className="mt-12 space-y-6 text-base leading-[1.75] text-foreground/90">
            {introParagraphs.map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}
          </div>

          {deepDives.map((dive) => (
            <article key={dive.title} className="mt-16 space-y-8">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {dive.title}
              </h2>
              <div className="space-y-5 text-base leading-[1.75] text-foreground/90">
                {dive.paragraphs.map((p) => (
                  <p key={p.slice(0, 48)}>{p}</p>
                ))}
              </div>
            </article>
          ))}

          <div className="mt-16 rounded-sm border border-zinc-300/25 bg-secondary/5 p-5 sm:p-6">
            <h2 className="text-xl font-bold text-foreground">
              {highlight.title}
            </h2>
            <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-7 text-muted">
              {highlight.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-white py-12">
          <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
            <SnippetBaitTable slug={slug} />
          </div>
        </section>

        <B2BOnboardingProcess
          pagePath={pagePath}
          className="border-t border-foreground/10 bg-slate-50/80 py-12 sm:py-14"
        />

        <section className="border-t border-slate-200 py-12">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <SeoCrossLinks type="location" />
          </div>
        </section>

        <section
          id="kontakt-anfrage"
          className="border-t border-slate-200 bg-zinc-100 py-12 sm:py-14"
        >
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {funnelTitle}
              </h2>
              <p className="mt-3 text-base leading-7 text-muted">
                {funnelSubtitle}
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-xl">
              <LeadFunnel initialServiceType={slug} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
