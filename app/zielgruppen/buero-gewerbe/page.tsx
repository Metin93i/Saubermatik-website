import type { Metadata } from "next";
import Link from "next/link";
import { AnfrageCta } from "@/components/AnfrageCta";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { FaqPageJsonLd } from "@/components/FaqPageJsonLd";
import { getBueroFaqItems } from "@/lib/seo/buero-faq";

export const metadata: Metadata = {
  title: "Büroreinigung und Gewerbereinigung",
  description:
    "Ihre Räume sind Ihr Aushängeschild – für Kunden und für Ihr Team. Wir halten Büros und Gewerbeflächen zuverlässig sauber, zu Zeiten, die Ihren Betrieb nicht stören.",
  alternates: { canonical: "/zielgruppen/buero-gewerbe" },
};

const faqItems = getBueroFaqItems();

export default function BueroGewerbePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", path: "/" },
          { name: "Branchen", path: "/zielgruppen" },
          { name: "Büro & Gewerbe", path: "/zielgruppen/buero-gewerbe" },
        ]}
      />
      <FaqPageJsonLd items={faqItems} />
      <div className="flex flex-1 flex-col bg-white">
        <section className="border-b border-slate-200/80 bg-zinc-100">
          <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">
              Branche · Büro &amp; Gewerbe
            </p>
            <h1 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
              Büroreinigung und Gewerbereinigung
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
              Ihre Räume sind Ihr Aushängeschild – für Kunden und für Ihr Team.
              Wir halten Büros und Gewerbeflächen zuverlässig sauber, zu Zeiten,
              die Ihren Betrieb nicht stören.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/kontakt#kontakt-anfrage"
                className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
              >
                Anfrage stellen
              </Link>
              <Link
                href="/leistungen/unterhaltsreinigung"
                className="inline-flex h-12 items-center justify-center rounded-sm border border-zinc-300 bg-white px-6 text-sm font-semibold text-foreground transition hover:border-secondary/50 hover:bg-secondary/5"
              >
                Unterhaltsreinigung
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <article className="max-w-3xl space-y-5 text-base leading-[1.75] text-foreground/90">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Sauberkeit, die man merkt – und nicht bemerkt
            </h2>
            <p>
              Arbeitsplätze, Besprechungsräume, Küchen und Sanitärbereiche,
              Eingang und Empfang: Wir reinigen nach einem festen Plan, den wir
              gemeinsam mit Ihnen aufstellen. Die Reinigung passiert in
              Randzeiten oder nach Feierabend – Ihr Team merkt nur das Ergebnis.
            </p>
          </article>

          <article className="mt-16 max-w-3xl space-y-5 text-base leading-[1.75] text-foreground/90">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Ein Ansprechpartner, klare Abläufe
            </h2>
            <p>
              Sie bekommen bei uns eine feste Ansprechperson, die Ihr Objekt
              kennt. Wünsche, Änderungen und kurzfristige Anliegen klären Sie
              direkt – ohne Ticketsystem und ohne Callcenter.
            </p>
          </article>

          <article className="mt-16 max-w-3xl space-y-5 text-base leading-[1.75] text-foreground/90">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Nachvollziehbar auf Wunsch
            </h2>
            <p>
              Wenn Sie es genauer wissen wollen: Über unsere Plattform{" "}
              <Link
                href="/secureops"
                className="font-semibold text-secondary hover:underline"
              >
                SecureOps
              </Link>{" "}
              dokumentieren wir Einsätze und geben Ihnen Einblick in Ihr
              Objekt. Ob und in welchem Umfang, entscheiden Sie – wir beraten
              Sie ehrlich, was für Ihre Fläche sinnvoll ist.
            </p>
          </article>

          <article className="mt-16 max-w-3xl space-y-5 text-base leading-[1.75] text-foreground/90">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Vom Einzelbüro bis zum Gewerbeobjekt
            </h2>
            <p>
              Wir betreuen kleine Büros genauso wie größere Gewerbeflächen.
              Regelmäßige Unterhaltsreinigung übernehmen wir im Umkreis von
              Meßstetten auf der Schwäbischen Alb; Projekt- und Sonderaufträge
              wie Glas-, Grund- oder Fassadenreinigung auch überregional.
            </p>
          </article>

          <section className="mt-16" aria-labelledby="buero-faq-heading">
            <h2
              id="buero-faq-heading"
              className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
            >
              Häufige Fragen
            </h2>
            <dl className="mt-8 max-w-3xl space-y-8">
              {faqItems.map((item) => (
                <div key={item.question}>
                  <dt className="text-lg font-semibold text-foreground">
                    {item.question}
                  </dt>
                  <dd className="mt-2 text-base leading-[1.75] text-foreground/90">
                    {item.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        </section>

        <section className="border-t border-slate-200 bg-zinc-100 py-12 sm:py-14">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <AnfrageCta
              title="Angebot für Ihr Büro anfragen"
              text="Schreiben Sie uns kurz Fläche, Nutzung und gewünschten Rhythmus – wir melden uns zügig mit einem unverbindlichen Angebot. Fester Ansprechpartner statt Callcenter."
            />
          </div>
        </section>
      </div>
    </>
  );
}
