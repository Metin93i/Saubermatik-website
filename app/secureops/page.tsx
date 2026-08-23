import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { AnfrageCta } from "@/components/AnfrageCta";
import { SecureOpsFaqJsonLd } from "@/components/SecureOpsFaqJsonLd";
import { buildTelHref } from "@/lib/phone";
import { getSecureOpsFaqItems } from "@/lib/seo/secureops-faq";

export const metadata: Metadata = {
  title: "SecureOps – digitale Einsatz-Dokumentation von Saubermatik",
  description:
    "Mit SecureOps dokumentieren wir Reinigungseinsätze digital. Kundenportal mit eigenem Zugang, nachvollziehbare Nachweise und ein direkter Meldeweg für Mieter. Umfang je nach Objekt.",
  alternates: { canonical: "/secureops" },
  openGraph: {
    images: [
      {
        url: "/images/og-secureops.jpg",
        width: 1200,
        height: 630,
        alt: "SecureOps by Saubermatik",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og-secureops.jpg"],
  },
};

const faqItems = getSecureOpsFaqItems();

export default function SecureOpsPage() {
  const raw = process.env.NEXT_PUBLIC_BUSINESS_PHONE?.trim();
  const telHref = raw ? buildTelHref(raw) : null;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", path: "/" },
          { name: "SecureOps", path: "/secureops" },
        ]}
      />
      <SecureOpsFaqJsonLd />
      <div className="flex flex-1 flex-col bg-hell">
        <section className="bg-linear-to-br from-navy to-nacht bg-blueprint">
          <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
            <Image
              src="/images/secureops-logo-weiss.png"
              alt="SecureOps by Saubermatik"
              width={320}
              height={59}
              className="mb-8 h-auto w-[220px] mix-blend-screen sm:w-[280px]"
              priority
            />
            <p className="text-xs font-bold uppercase tracking-widest text-glow">
              SecureOps
            </p>
            <h1 className="mt-6 max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
              SecureOps – wir digitalisieren die Reinigung
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-text-dunkel">
              Die meisten Reinigungsfirmen liefern eine Rechnung. Wir liefern
              zusätzlich den Nachweis. SecureOps ist unsere eigene Software, mit
              der wir Einsätze dokumentieren und unseren Kunden Einblick geben.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/kontakt#kontakt-anfrage" className="btn-secureops h-12">
                Anfrage stellen
              </Link>
              <Link
                href="/kontakt#kontakt-anfrage"
                className="btn-secondary-on-dark h-12"
              >
                Zur Kontaktseite
              </Link>
              {telHref ? (
                <a href={telHref} className="btn-secondary-on-dark h-12">
                  Anrufen
                </a>
              ) : null}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <article className="space-y-8">
            <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              Warum wir das gebaut haben
            </h2>
            <div className="space-y-5 text-base leading-[1.75] text-foreground/90">
              <p>
                Reinigung ist Vertrauenssache – und genau da liegt das Problem.
                Wer prüft, ob wirklich gereinigt wurde? Meist fällt es erst auf,
                wenn sich jemand beschwert. Beschwerden landen dann bei der
                Hausverwaltung oder beim Facility Management, obwohl gar nicht
                klar ist, was tatsächlich passiert ist.
              </p>
              <p>
                Wir wollten das anders. Deshalb haben wir SecureOps selbst
                entwickelt: eine Plattform, mit der wir unsere Arbeit
                nachvollziehbar machen – für uns und für unsere Kunden.
              </p>
            </div>
          </article>

          <article className="mt-16 space-y-8">
            <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              Ihr eigener Zugang zum Objekt
            </h2>
            <div className="space-y-5 text-base leading-[1.75] text-foreground/90">
              <p>
                Als Kunde erhalten Sie einen persönlichen Zugang zu Ihrem
                Kundenportal. Dort sehen Sie, was in Ihrem Objekt passiert ist –
                ohne anrufen zu müssen und ohne auf einen Monatsbericht zu
                warten.
              </p>
              <p>
                Der Umfang der Dokumentation wird pro Objekt vereinbart. Ein
                kleines Treppenhaus braucht weniger als eine Praxis mit
                Hygieneanforderungen. Was für Ihr Objekt sinnvoll ist, klären
                wir vorher gemeinsam.
              </p>
            </div>
          </article>

          <article className="mt-16 space-y-8">
            <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              Der Meldeweg für Mieter
            </h2>
            <div className="space-y-5 text-base leading-[1.75] text-foreground/90">
              <p>
                Das ist der Teil, für den uns Hausverwaltungen am meisten
                danken.
              </p>
              <p>
                Im Objekt hängt ein QR-Code. Wer etwas zu melden hat – ein
                übersehener Bereich, ein voller Container, ein Schaden – scannt
                ihn und schreibt uns direkt. Die Meldung landet bei uns, nicht
                auf dem Schreibtisch der Verwaltung.
              </p>
              <ul className="list-inside list-disc space-y-2 text-muted">
                <li>
                  <span className="text-foreground/90">
                    Weniger Anrufe: Anliegen zur Reinigung kommen direkt zu uns.
                  </span>
                </li>
                <li>
                  <span className="text-foreground/90">
                    Schnellere Klärung: Wir sehen die Meldung sofort und kümmern
                    uns.
                  </span>
                </li>
                <li>
                  <span className="text-foreground/90">
                    Nichts geht verloren: Jede Meldung ist erfasst und
                    nachvollziehbar.
                  </span>
                </li>
              </ul>
              <p>
                Für Hausverwaltungen heißt das konkret: weniger Weiterleiten,
                weniger Rückfragen, weniger Zeit für Dinge, die eigentlich
                unsere Aufgabe sind. Mehr dazu für Verwalter unter{" "}
                <Link
                  href="/zielgruppen/hausverwaltungen"
                  className="font-semibold text-secureops hover:underline"
                >
                  Hausverwaltungen &amp; WEG
                </Link>
                .
              </p>
            </div>
          </article>

          <article className="mt-16 space-y-8">
            <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              Nachweise, wenn Sie sie brauchen
            </h2>
            <div className="space-y-5 text-base leading-[1.75] text-foreground/90">
              <p>
                Aus der laufenden Dokumentation erstellen wir
                Nachweis-Dokumente – zum Beispiel für eine
                Eigentümerversammlung, eine interne Prüfung oder wenn ein
                Bereich strittig ist. Statt Diskussion aus dem Gedächtnis liegt
                etwas Schriftliches auf dem Tisch.
              </p>
            </div>
          </article>

          <article className="mt-16 space-y-8">
            <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              Ehrlich gesagt
            </h2>
            <div className="space-y-5 text-base leading-[1.75] text-foreground/90">
              <p>
                SecureOps ist kein Überwachungssystem und soll keines sein. Es
                ersetzt auch nicht das Gespräch: Sie haben bei uns einen festen
                Ansprechpartner, kein Callcenter.
              </p>
              <p>
                Was dokumentiert wird und in welcher Tiefe, entscheiden wir
                gemeinsam mit Ihnen – passend zum Objekt und im Rahmen des
                Datenschutzes.
              </p>
            </div>
          </article>

          <article className="mt-16 space-y-8">
            <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              Wie Sie starten
            </h2>
            <ol className="list-decimal space-y-3 pl-5 text-base leading-[1.75] text-foreground/90">
              <li>
                Erstgespräch: Wir schauen uns Ihr Objekt an und klären, was
                dokumentiert werden soll.
              </li>
              <li>
                Angebot: Sie erhalten ein Angebot für die Reinigung. Die
                Dokumentation über SecureOps ist Teil unserer Leistung.
              </li>
              <li>
                Zugang: Zum Start richten wir Ihren Portal-Zugang ein und
                bringen bei Bedarf den QR-Code im Objekt an.
              </li>
            </ol>
            <p className="text-base leading-[1.75] text-foreground/90">
              Passende Leistungen finden Sie in der{" "}
              <Link
                href="/leistungen"
                className="font-semibold text-secureops hover:underline"
              >
                Leistungsübersicht
              </Link>
              .
            </p>
          </article>

          <section className="mt-16" aria-labelledby="secureops-faq-heading">
            <h2
              id="secureops-faq-heading"
              className="text-2xl font-bold tracking-tight text-navy sm:text-3xl"
            >
              Häufige Fragen
            </h2>
            <dl className="mt-8 space-y-4">
              {faqItems.map((item) => (
                <div
                  key={item.question}
                  className="rounded-[14px] border border-[#e1e4e9] bg-white p-5"
                >
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

        <section
          id="kontakt-anfrage"
          className="bg-hell py-12 sm:py-14"
        >
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <AnfrageCta
              title="SecureOps im Gespräch ansehen"
              text="Am besten zeigen wir es Ihnen direkt an Ihrem Objekt. Schreiben Sie uns kurz, um welches Objekt es geht – wir melden uns zügig. Fester Ansprechpartner statt Callcenter."
            />
          </div>
        </section>
      </div>
    </>
  );
}
