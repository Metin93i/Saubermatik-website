import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { KamProfileCard } from "@/components/KamProfileCard";
import { KontaktFormFallback } from "@/components/KontaktFormFallback";
import { KontaktFormSwitch } from "@/components/KontaktFormSwitch";
import {
  SITE_ADDRESS_LINES,
  SITE_MAP_EMBED_SRC,
  SITE_OFFICE,
} from "@/lib/config/site";
import { buildTelHref } from "@/lib/phone";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Saubermatik Meßstetten: Adresse, Anfahrt, Kundenanfrage (Lead) und Bewerbungen – digital und persönlich für die Zollernalb und Region Tübingen.",
  alternates: { canonical: "/kontakt" },
};

type KontaktPageProps = {
  searchParams?: Promise<{ type?: string | string[] | undefined }>;
};

export default async function KontaktPage({ searchParams }: KontaktPageProps) {
  const sp = (await searchParams) ?? {};
  const rawType = sp.type;
  const typeVal = Array.isArray(rawType) ? rawType[0] : rawType;
  const isCareer = typeVal === "karriere";

  const raw = process.env.NEXT_PUBLIC_BUSINESS_PHONE?.trim();
  const telHref = raw ? buildTelHref(raw) : null;

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:gap-8 lg:px-8 lg:py-12">
      <div className="min-h-[22rem] flex-1 lg:max-w-md">
        <p className="text-sm font-semibold text-secondary">
          {isCareer ? "Karriere · Kontakt" : "Kontakt"}
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {isCareer
            ? "Bewerbung & erste Fragen zum Job."
            : "Sprechen wir über Ihr Objekt."}
        </h1>
        <p className="mt-4 text-base leading-7 text-muted">
          {isCareer
            ? "Nutzen Sie das Formular rechts für eine Schnellbewerbung – oder erreichen Sie uns klassisch telefonisch. Unsere Adresse gilt für Bewerbungen und Kunden gleichermaßen."
            : "Ob konkrete Anfrage oder Erstgespräch: Sie erreichen uns telefonisch, über das Formular oder nach Terminvereinbarung vor Ort in der Region."}
        </p>

        <p className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-sm">
          {isCareer ? (
            <Link
              href="/kontakt"
              className="font-semibold text-secondary hover:underline"
            >
              Zur Kundenanfrage (Leistungen)
            </Link>
          ) : (
            <Link
              href="/kontakt?type=karriere"
              className="font-semibold text-secondary hover:underline"
            >
              Zur Bewerbung (Karriere)
            </Link>
          )}
        </p>

        <address className="mt-8 not-italic">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">
            Adresse
          </p>
          <ul className="mt-2 space-y-0.5 text-base font-medium leading-7 text-foreground">
            {SITE_ADDRESS_LINES.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </address>

        {telHref ? (
          <p className="mt-6">
            <span className="text-xs font-semibold uppercase tracking-wide text-muted">
              Telefon
            </span>
            <br />
            <a
              href={telHref}
              className="text-lg font-bold text-secondary underline-offset-2 hover:underline"
            >
              {raw}
            </a>
          </p>
        ) : null}

        <p className="mt-6 text-sm text-muted">
          <Link
            href="/leistungen"
            className="font-semibold text-secondary hover:underline"
          >
            Leistungsübersicht
          </Link>
          {" · "}
          <Link
            href="/qualitaetsmanagement"
            className="font-semibold text-secondary hover:underline"
          >
            Qualitätsmanagement
          </Link>
        </p>

        <div className="mt-10 min-h-[16rem] overflow-hidden rounded-sm border border-zinc-200 ">
          <iframe
            title={`Karte: ${SITE_OFFICE.locality}`}
            className="h-64 w-full bg-slate-100 lg:h-full lg:min-h-[16rem]"
            src={SITE_MAP_EMBED_SRC}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className="mt-2 text-right text-xs text-muted">
          <a
            href="https://www.openstreetmap.org/search?query=Me%C3%9Fstetten%2072469"
            className="text-secondary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Karte auf OpenStreetMap öffnen
          </a>
        </p>
      </div>

      <div className="min-h-[24rem] flex-1 space-y-5 lg:max-w-xl">
        {!isCareer ? <KamProfileCard /> : null}
        <Suspense fallback={<KontaktFormFallback isCareer={isCareer} />}>
          <KontaktFormSwitch />
        </Suspense>
      </div>
    </div>
  );
}
