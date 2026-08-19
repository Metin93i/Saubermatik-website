import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { GeoImage } from "@/components/GeoImage";
import { AnfrageCta } from "@/components/AnfrageCta";
import { LeistungFaqJsonLd } from "@/components/LeistungFaqJsonLd";
import { SeoCrossLinks } from "@/components/SeoCrossLinks";
import { getLeistungImage } from "@/lib/config/leistung-images";
import { REMOTE_IMAGE_BLUR_DATA_URL } from "@/lib/image-blur";
import { buildTelHref } from "@/lib/phone";
import { getLeistungFaqItems } from "@/lib/seo/leistung-faq";

const SLUG = "raffstore-lamellenreinigung" as const;
const hero = getLeistungImage(SLUG);
const faqItems = getLeistungFaqItems(SLUG);

export const metadata: Metadata = {
  title: "Raffstore- & Lamellenreinigung – schonend im Reinwasser-Verfahren",
  description:
    "Professionelle Reinigung von Außenraffstoren und Lamellen im Reinwasser-Verfahren. Ohne Chemie, schonend für Mechanik und Material. Für Gewerbe und Privathaushalte.",
  alternates: { canonical: "/leistungen/raffstore-lamellenreinigung" },
};

export default function RaffstoreLamellenreinigungPage() {
  const raw = process.env.NEXT_PUBLIC_BUSINESS_PHONE?.trim();
  const telHref = raw ? buildTelHref(raw) : null;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", path: "/" },
          { name: "Leistungen", path: "/leistungen" },
          {
            name: "Raffstore- & Lamellenreinigung",
            path: "/leistungen/raffstore-lamellenreinigung",
          },
        ]}
      />
      <LeistungFaqJsonLd slug={SLUG} />
      <div className="flex flex-1 flex-col bg-white">
        <section className="border-b border-slate-200/80 bg-zinc-100">
          <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
            <nav className="text-sm font-semibold text-secondary">
              <Link href="/leistungen" className="hover:underline">
                Leistungen
              </Link>
              <span className="text-muted"> / </span>
              <span className="text-muted">
                Raffstore- &amp; Lamellenreinigung
              </span>
            </nav>
            <h1 className="mt-6 max-w-4xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
              Raffstore- und Lamellenreinigung
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
              Außenliegender Sonnenschutz ist teuer und empfindlich. Wir
              reinigen Ihre Raffstoren schonend im Reinwasser-Verfahren – ohne
              Chemie und ohne Risiko für die Mechanik. Für Firmen und
              Privathaushalte.
            </p>
            {/* TODO(E2): durch echtes Einsatzfoto ersetzen */}
            <div className="relative mt-10 aspect-[16/9] max-w-4xl overflow-hidden rounded-sm ">
              <GeoImage
                src={hero.src}
                alt={hero.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 48rem"
                priority
                placeholder="blur"
                blurDataURL={REMOTE_IMAGE_BLUR_DATA_URL}
                contentLocation="Zollernalbkreis, Baden-Württemberg"
                author="Saubermatik"
                imageId="geo-hero-raffstore-lamellenreinigung"
              />
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/kontakt#kontakt-anfrage"
                className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
              >
                Anfrage stellen
              </Link>
              <Link
                href="/kontakt#kontakt-anfrage"
                className="inline-flex h-12 items-center justify-center rounded-sm border border-zinc-300 px-6 text-sm font-semibold text-foreground transition hover:border-secondary/50 hover:bg-secondary/5"
              >
                Zur Kontaktseite
              </Link>
              {telHref ? (
                <a
                  href={telHref}
                  className="inline-flex h-12 items-center justify-center rounded-sm border border-zinc-300 px-6 text-sm font-semibold text-foreground transition hover:border-secondary/50 hover:bg-secondary/5"
                >
                  Anrufen
                </a>
              ) : null}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <article className="mt-4 space-y-8">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Warum Raffstoren gereinigt werden sollten
            </h2>
            <div className="space-y-5 text-base leading-[1.75] text-foreground/90">
              <p>
                Staub, Pollen und Wetterablagerungen setzen sich auf den
                Lamellen und in den Führungen fest. Das sieht nicht nur
                ungepflegt aus. Verschmutzte Anlagen laufen schwergängig, der
                Motor arbeitet gegen Widerstand, und die Lebensdauer sinkt.
              </p>
              <ul className="list-inside list-disc space-y-2 text-muted">
                <li>
                  <span className="text-foreground/90">
                    Funktion erhalten: Saubere Lamellen und Führungen laufen
                    leicht und schonen den Antrieb.
                  </span>
                </li>
                <li>
                  <span className="text-foreground/90">
                    Wert erhalten: Raffstoren gehören zu den hochwertigsten
                    Teilen der Fassade. Regelmäßige Pflege zahlt sich aus.
                  </span>
                </li>
                <li>
                  <span className="text-foreground/90">
                    Eindruck erhalten: Die Fassade wirkt nur so gepflegt wie
                    ihr Sonnenschutz.
                  </span>
                </li>
              </ul>
            </div>
          </article>

          <article className="mt-16 space-y-8">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              So arbeiten wir – das Reinwasser-Verfahren
            </h2>
            <div className="space-y-5 text-base leading-[1.75] text-foreground/90">
              <p>
                Reinwasser ist entmineralisiertes Wasser. Es bindet Schmutz
                besonders gut und trocknet ohne Flecken und Streifen ab.
                Chemische Reiniger sind dafür nicht nötig.
              </p>
              <ol className="list-decimal space-y-3 pl-5">
                <li>
                  Vorab-Check: Wir prüfen die Anlage vor Beginn auf sichtbare
                  Schäden an Lamellen, Bändern und Führungen.
                </li>
                <li>
                  Schonende Reinigung: Jede Lamelle wird einzeln mit weichen
                  Spezialbürsten und Reinwasser gereinigt – ohne Hochdruck, ohne
                  aggressive Mittel.
                </li>
                <li>
                  Streifenfreies Ergebnis: Das Reinwasser trocknet
                  rückstandsfrei ab. Nachwischen entfällt.
                </li>
              </ol>
              <p>
                Dieses Verfahren haben wir bereits bei mehreren Objekten
                eingesetzt.
              </p>
            </div>
          </article>

          <article className="mt-16 space-y-8">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Warum nicht selbst machen?
            </h2>
            <div className="space-y-5 text-base leading-[1.75] text-foreground/90">
              <p>
                Raffstore-Lamellen bestehen aus dünnem Aluminium und verbiegen
                leicht. Hochdruckreiniger und scharfe Mittel beschädigen
                Lamellen, Bänder und Lager. Dazu kommt die Arbeit in der Höhe.
                Kleine, gut erreichbare Anlagen können Sie vorsichtig selbst
                pflegen – bei mehreren Behängen, oberen Stockwerken oder
                Gewerbeobjekten ist der Fachbetrieb die sichere Wahl.
              </p>
            </div>
          </article>

          <article className="mt-16 space-y-8">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Für Firmen und Hausverwaltungen
            </h2>
            <div className="space-y-5 text-base leading-[1.75] text-foreground/90">
              <p>
                Bürogebäude, Praxen und Verwaltungen haben oft große
                Fensterfronten mit vielen Behängen. Wir stimmen die Termine auf
                Ihren Betrieb ab und arbeiten die Anlagen systematisch ab.
                Hausverwaltungen bündeln wir gerne zu Sammelterminen für das
                ganze Objekt. Sie haben bei uns einen festen Ansprechpartner –
                kein Callcenter.
              </p>
            </div>
          </article>

          <article className="mt-16 space-y-8">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Für Privathaushalte
            </h2>
            <div className="space-y-5 text-base leading-[1.75] text-foreground/90">
              <p>
                Auch am Wohnhaus lohnt sich die professionelle Reinigung –
                einmalig oder regelmäßig. Sie erhalten ein klares Angebot vorab
                und ein streifenfreies Ergebnis ohne eigenen Aufwand.
              </p>
            </div>
          </article>

          <article className="mt-16 space-y-8">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Unser Einsatzgebiet
            </h2>
            <div className="space-y-5 text-base leading-[1.75] text-foreground/90">
              <p>
                Wir kommen von Meßstetten aus zu Ihnen – auf der Schwäbischen
                Alb und im Umkreis. Größere Objekte und Projektaufträge
                übernehmen wir auch überregional, zum Beispiel im Raum
                Stuttgart.
              </p>
            </div>
          </article>

          <section className="mt-16" aria-labelledby="raffstore-faq-heading">
            <h2
              id="raffstore-faq-heading"
              className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
            >
              Häufige Fragen
            </h2>
            <dl className="mt-8 space-y-8">
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
            <AnfrageCta
              title="Angebot anfragen"
              text="Beschreiben Sie uns kurz Ihr Objekt – Anzahl der Fenster oder Behänge und der Ort genügen. Wir melden uns zügig mit einem unverbindlichen Angebot. Fester Ansprechpartner statt Callcenter."
            />
          </div>
        </section>
      </div>
    </>
  );
}
