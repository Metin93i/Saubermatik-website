import type { Metadata } from "next";
import Link from "next/link";
import { AnfrageCta } from "@/components/AnfrageCta";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { FaqPageJsonLd } from "@/components/FaqPageJsonLd";
import { getPraxenFaqItems } from "@/lib/seo/praxen-faq";

export const metadata: Metadata = {
  title: "Reinigung für Praxen und Gesundheitswesen",
  description:
    "In einer Praxis ist Sauberkeit kein Nebenthema. Patienten schließen vom Wartezimmer auf die Behandlung. Wir reinigen hygienesensible Bereiche nach einem Plan, der mit Ihnen abgestimmt ist – zuverlässig und außerhalb Ihrer Sprechzeiten.",
  alternates: { canonical: "/zielgruppen/praxen-gesundheitswesen" },
};

const faqItems = getPraxenFaqItems();

export default function PraxenGesundheitswesenPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", path: "/" },
          { name: "Branchen", path: "/zielgruppen" },
          {
            name: "Praxen & Gesundheitswesen",
            path: "/zielgruppen/praxen-gesundheitswesen",
          },
        ]}
      />
      <FaqPageJsonLd items={faqItems} />
      <div className="flex flex-1 flex-col bg-white">
        <section className="border-b border-slate-200/80 bg-zinc-100">
          <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">
              Branche · Praxen
            </p>
            <h1 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
              Reinigung für Praxen und Gesundheitswesen
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
              In einer Praxis ist Sauberkeit kein Nebenthema. Patienten
              schließen vom Wartezimmer auf die Behandlung. Wir reinigen
              hygienesensible Bereiche nach einem Plan, der mit Ihnen
              abgestimmt ist – zuverlässig und außerhalb Ihrer Sprechzeiten.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/kontakt#kontakt-anfrage"
                className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
              >
                Anfrage stellen
              </Link>
              <Link
                href="/secureops"
                className="inline-flex h-12 items-center justify-center rounded-sm border border-zinc-300 bg-white px-6 text-sm font-semibold text-foreground transition hover:border-secondary/50 hover:bg-secondary/5"
              >
                SecureOps
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <article className="mt-0 max-w-3xl space-y-5 text-base leading-[1.75] text-foreground/90">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Worauf es in der Praxis ankommt
            </h2>
            <p>
              Behandlungsräume, Sanitärbereiche, Wartezimmer und Kontaktflächen
              brauchen unterschiedliche Sorgfalt und unterschiedliche Abläufe.
              Was wie oft und womit gereinigt wird, legen wir gemeinsam mit
              Ihnen in einem Reinigungsplan fest. Wo Desinfektion gefordert
              ist, stimmen wir Mittel und Ablauf vorher mit Ihnen ab.
            </p>
          </article>

          <article className="mt-16 max-w-3xl space-y-5 text-base leading-[1.75] text-foreground/90">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Zu Ihren Zeiten, nicht zu unseren
            </h2>
            <p>
              Wir reinigen außerhalb der Sprechzeiten – früh, abends oder am
              Wochenende, wie es in Ihren Praxisablauf passt. Sie haben einen
              festen Ansprechpartner, der Ihre Praxis und Ihren Plan kennt.
              Kein Callcenter, keine wechselnden Zuständigkeiten.
            </p>
          </article>

          <article className="mt-16 max-w-3xl space-y-5 text-base leading-[1.75] text-foreground/90">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Dokumentation, die Ihr QM unterstützt
            </h2>
            <p>
              Praxen müssen intern nachweisen können, dass Abläufe eingehalten
              werden. Auf Wunsch dokumentieren wir unsere Einsätze über unsere
              eigene Plattform{" "}
              <Link
                href="/secureops"
                className="font-semibold text-secondary hover:underline"
              >
                SecureOps
              </Link>{" "}
              und stellen Ihnen Nachweise zur Verfügung – zum Beispiel für Ihr
              Qualitätsmanagement oder eine Begehung. Den Umfang der
              Dokumentation vereinbaren wir pro Objekt.
            </p>
          </article>

          <article className="mt-16 max-w-3xl space-y-5 text-base leading-[1.75] text-foreground/90">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Diskretion ist selbstverständlich
            </h2>
            <p>
              Unsere Kräfte arbeiten in sensiblen Räumen. Zurückhaltung,
              Sorgfalt im Umgang mit Einrichtung und Unterlagen und klare
              Absprachen zu Schlüsseln und Zugängen gehören für uns zum Auftrag.
            </p>
          </article>

          <section className="mt-16" aria-labelledby="praxen-faq-heading">
            <h2
              id="praxen-faq-heading"
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
              title="Angebot für Ihre Praxis anfragen"
              text="Beschreiben Sie uns kurz Ihre Praxis – Größe, Räume und gewünschte Zeiten genügen für den Anfang. Wir melden uns zügig. Fester Ansprechpartner statt Callcenter."
            />
          </div>
        </section>
      </div>
    </>
  );
}
