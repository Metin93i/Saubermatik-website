import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum der Saubermatik Reinigungsservice, Inhaber Metin Altinsoy, mit Angaben gemäß § 5 DDG.",
  alternates: { canonical: "/impressum" },
};

export default function ImpressumPage() {
  return (
    <article className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Impressum
      </h1>

      <div className="mt-10 space-y-10 text-base leading-7 text-muted">
        <section>
          <h2 className="text-xl font-bold text-foreground">
            Angaben gemäß § 5 DDG
          </h2>
          <p className="mt-4 text-foreground">
            <strong className="font-semibold">Saubermatik Reinigungsservice</strong>
            <br />
            Inhaber: Metin Altinsoy
            <br />
            Schelmenwasenstraße 11
            <br />
            72469 Meßstetten
            <br />
            Deutschland
          </p>
          <p className="mt-6 text-foreground">
            <strong className="font-semibold">Kontakt</strong>
            <br />
            Telefon: +49 151 29860059
            <br />
            E-Mail: info@saubermatik-reinigung.de
          </p>
          <p className="mt-6">
            <strong className="font-semibold text-foreground">
              Umsatzsteuer-Identifikationsnummer
            </strong>{" "}
            gemäß § 27a Umsatzsteuergesetz:
            <br />
            <span className="text-foreground">DE366416089</span>
          </p>
          <p className="mt-6">Mitglied der Handwerkskammer Reutlingen.</p>
          <p className="mt-6">
            „Saubermatik Gebäudereinigung“ ist die Geschäftsbezeichnung des
            Unternehmens Saubermatik Reinigungsservice, Inhaber Metin Altinsoy.
          </p>
          <p className="mt-6 text-foreground">
            <strong className="font-semibold">
              Verantwortlich für den Inhalt
            </strong>{" "}
            nach § 18 Abs. 2 MStV:
            <br />
            Metin Altinsoy, Schelmenwasenstraße 11, 72469 Meßstetten
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">
            Verbraucherstreitbeilegung
          </h2>
          <p className="mt-4">
            Wir sind nicht bereit und nicht verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </section>
      </div>
    </article>
  );
}
