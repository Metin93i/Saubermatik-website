import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { KeyAccountManager } from "@/components/KeyAccountManager";
import { REMOTE_IMAGE_BLUR_DATA_URL } from "@/lib/image-blur";
import { buildTelHref } from "@/lib/phone";

const imgUeberUns =
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Saubermatik aus Meßstetten: regionale Wurzeln, digitale Objektsteuerung und B2B-Reinigung mit festen Ansprechpartnern für Zollernalb, Tübingen und den Schwarzwald-Baar-Heuberg.",
  alternates: { canonical: "/ueber-uns" },
};

export default function UeberUnsPage() {
  const raw = process.env.NEXT_PUBLIC_BUSINESS_PHONE?.trim();
  const telHref = raw ? buildTelHref(raw) : null;

  return (
    <article className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold text-secondary">Über uns</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Regional verwurzelt. Digital vorbereitet.
      </h1>

      <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-sm ">
        <Image
          src={imgUeberUns}
          alt="Professionelles Teammeeting – Saubermatik als B2B-Partner"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 48rem"
          priority
          placeholder="blur"
          blurDataURL={REMOTE_IMAGE_BLUR_DATA_URL}
        />
      </div>

      <div className="mt-8 space-y-6 text-base leading-7 text-muted">
        <p>
          Saubermatik entstand aus der Überzeugung, dass Gebäudereinigung im
          Mittelstand und in der öffentlichen Wirtschaft{" "}
          <strong className="font-semibold text-foreground">
            Verlässlichkeit vor Marketing
          </strong>{" "}
          braucht. Unser Team arbeitet von Meßstetten aus in der Zollernalb und
          darüber hinaus – mit kurzen Wegen und klaren Verantwortlichkeiten.
        </p>
        <p>
          Digitale Innovation ist für uns kein Buzzword, sondern{" "}
          <strong className="font-semibold text-foreground">
            Alltagssicherheit
          </strong>
          : Touren, Qualität und Kommunikation laufen über eine gemeinsame
          Plattform. Wenn sich etwas ändert, sehen wir es früh – und handeln,
          bevor Ihr Objekt darunter leidet.
        </p>
        <p>
          Zuverlässigkeit heißt auch: Sie erreichen Menschen, die Entscheidungen
          treffen dürfen. Keine anonyme Hotline, kein endloses Weiterreichen –
          sondern Partner, die Ihre Flächen und Rhythmen kennenlernen.
        </p>
      </div>

      <KeyAccountManager className="mt-12" />

      <div className="mt-12 min-h-[10rem] rounded-sm border border-zinc-300/25 bg-secondary/5 p-6 sm:p-8">
        <h2 className="text-lg font-bold text-foreground">Was uns antreibt</h2>
        <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-7 text-muted sm:text-base">
          <li>Langfristige Objektbetreuung statt Einmal-Show</li>
          <li>Transparente Abläufe für Eigentümer, Mieter und Verwaltung</li>
          <li>Faire Zusammenarbeit mit unseren Teams vor Ort</li>
        </ul>
      </div>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/kontakt#kontakt-anfrage"
          className="inline-flex h-11 items-center justify-center rounded-sm bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
        >
          Kennenlernen vereinbaren
        </Link>
        <Link
          href="/qualitaetsmanagement"
          className="inline-flex h-11 items-center justify-center rounded-sm border border-zinc-300 px-5 text-sm font-semibold text-foreground transition hover:border-secondary/50 hover:bg-secondary/5"
        >
          Qualitätsmanagement
        </Link>
        {telHref ? (
          <a
            href={telHref}
            className="inline-flex h-11 items-center justify-center rounded-sm border border-zinc-300 px-5 text-sm font-semibold text-foreground transition hover:border-secondary/50 hover:bg-secondary/5"
          >
            Anrufen
          </a>
        ) : null}
      </div>
    </article>
  );
}
