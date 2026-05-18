import type { Metadata } from "next";
import Link from "next/link";
import { buildTelHref } from "@/lib/phone";

export const metadata: Metadata = {
  title: "Qualitätsmanagement",
  description:
    "Saubermatik-Garantie: digitale Objektüberwachung, Echtzeit-Checks, DIN-orientierte Standards und nachvollziehbare Protokolle für B2B-Reinigung in der Zollernalb.",
  alternates: { canonical: "/qualitaetsmanagement" },
};

const pillars = [
  {
    title: "Saubermatik-Garantie",
    body: "Wir geben kein leeres Versprechen ab, sondern verbinden feste Qualitätskriterien mit technischer Nachverfolgung: Was auf dem Objekt passiert, wird strukturiert erfasst – damit Sie jederzeit wissen, wo Sie stehen.",
  },
  {
    title: "SaaS-Überwachung statt Zettelwirtschaft",
    body: "Unsere Plattform bündelt Touren, Checklisten und Einsatznachweise. Statt Excel und Messenger-Ketten erhalten Sie eine Quelle der Wahrheit für Ihre Liegenschaft – skalierbar über mehrere Standorte und Zugänge.",
  },
  {
    title: "Echtzeit-Checks & Eskalation",
    body: "Abweichungen werden sichtbar, bevor sie zum Dauerproblem werden. Wir arbeiten mit klaren Eskalationspfaden: erst digital dokumentiert, dann persönlich gelöst – mit festem Ansprechpartner.",
  },
  {
    title: "DIN-orientierte Standards",
    body: "Wo sinnvoll, orientieren wir uns an anerkannten Reinigungs- und Hygienestandards (u. a. DIN EN Bereiche) und übersetzen diese in praxisnahe Objektprogramme – abgestimmt auf Material, Frequenz und Risiko.",
  },
] as const;

export default function QualitaetsmanagementPage() {
  const raw = process.env.NEXT_PUBLIC_BUSINESS_PHONE?.trim();
  const telHref = raw ? buildTelHref(raw) : null;

  return (
    <article className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold text-secondary">Qualitätsmanagement</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Qualität, die Sie messen können – nicht nur riechen.
      </h1>
      <p className="mt-5 text-lg leading-8 text-muted">
        Für Geschäftsführung, Facility und Verwaltung: Saubermatik verbindet
        handwerkliche Sorgfalt mit digitaler Steuerung. So wird Qualität zum
        wiederholbaren System – nicht zum Glücksfall.
      </p>

      <ul className="mt-12 space-y-10">
        {pillars.map((p) => (
          <li key={p.title} className="min-h-[8rem] border-l-4 border-secondary/40 pl-5">
            <h2 className="text-xl font-bold text-foreground">{p.title}</h2>
            <p className="mt-3 text-base leading-7 text-muted">{p.body}</p>
          </li>
        ))}
      </ul>

      <div className="mt-14 rounded-2xl border border-foreground/10 bg-slate-50/80 p-6 sm:p-8">
        <h2 className="text-lg font-bold text-foreground">Nächster Schritt</h2>
        <p className="mt-2 text-sm leading-6 text-muted">
          Wir zeigen Ihnen gern in einem kurzen Gespräch, wie wir Ihr Objekt
          abbilden – inklusive Prüfpunkten und Reporting.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/kontakt#kontakt-anfrage"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
          >
            Qualitätsgespräch anfragen
          </Link>
          {telHref ? (
            <a
              href={telHref}
              className="inline-flex h-11 items-center justify-center rounded-xl border border-foreground/15 px-5 text-sm font-semibold text-foreground transition hover:border-secondary/50 hover:bg-secondary/5"
            >
              Direkt anrufen
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
