import type { Metadata } from "next";
import Link from "next/link";
import { LeadFunnel } from "@/components/LeadFunnel";
import {
  SITE_ADDRESS_LINES,
  SITE_MAP_EMBED_SRC,
  SITE_OFFICE,
} from "@/lib/config/site";
import { buildTelHref } from "@/lib/phone";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Saubermatik Meßstetten: Adresse, Anfahrt und digitale Kurz-Anfrage für Gebäudereinigung in der Zollernalb und Region Tübingen.",
  alternates: { canonical: "/kontakt" },
};

export default function KontaktPage() {
  const raw = process.env.NEXT_PUBLIC_BUSINESS_PHONE?.trim();
  const telHref = raw ? buildTelHref(raw) : null;

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-12 px-4 py-12 sm:px-6 lg:flex-row lg:gap-16 lg:px-8 lg:py-16">
      <div className="min-h-[22rem] flex-1 lg:max-w-md">
        <p className="text-sm font-semibold text-secondary">Kontakt</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          Sprechen wir über Ihr Objekt.
        </h1>
        <p className="mt-4 text-base leading-7 text-muted">
          Ob konkrete Anfrage oder Erstgespräch: Sie erreichen uns telefonisch,
          über das Formular oder nach Terminvereinbarung vor Ort in der
          Region.
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
          <Link href="/leistungen" className="font-semibold text-secondary hover:underline">
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

        <div className="mt-10 min-h-[16rem] overflow-hidden rounded-2xl border border-foreground/10 shadow-lg ring-1 ring-black/5">
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
            href="https://www.openstreetmap.org/search?query=Me%C3%9Fstetten%2072461"
            className="text-secondary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Karte auf OpenStreetMap öffnen
          </a>
        </p>
      </div>

      <div className="min-h-[28rem] flex-1 lg:max-w-xl">
        <LeadFunnel className="shadow-xl ring-1 ring-black/5" />
      </div>
    </div>
  );
}
