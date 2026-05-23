import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Expertise, Zertifizierung & technische Standards",
  description:
    "EEAT-Hub von Saubermatik: Arbeitssicherheit, Qualitätsstandards, Echtzeit-Monitoring und digitale Objektprotokolle – für messbare Gebäudereinigung in der Zollernalb und darüber hinaus.",
  alternates: { canonical: "/expertise" },
};

const pillars = [
  {
    title: "Zertifizierungen & Nachweise",
    body: "Wir arbeiten versichert und dokumentieren Leistungen so, dass Facility- und Verwaltungsteams Prüfungen und Übergaben souverän bestehen. Auf Wunsch stimmen wir Leistungsverzeichnisse mit Ihren Ausschreibungen oder SLAs ab – inklusive definierter Prüfpunkte und Abnahmeprotokollen.",
  },
  {
    title: "Arbeitssicherheit & Hygiene",
    body: "Von Arbeiten in der Höhe bis zu sensiblen Bereichen (Praxis, Kanzlei) gelten klare Regeln: Einweisungen, PSA, materialgerechte Mittel und getrennte Einsatzketten wo nötig. Hygienepläne und Desinfektionsintervalle werden dort ergänzt, wo regulatorisch oder betrieblich erforderlich.",
  },
  {
    title: "Echtzeit-Monitoring & Software-Vorsprung",
    body: "Die Saubermatik-Plattform bündelt Touren, Checklisten und Eskalationen. Ausfälle werden sichtbar, bevor sie zum Stillstand werden – mit Ersatzlogistik statt improvisiertem Telefonieren. Für Geschäftsführung und Eigentümer heißt das: höhere Trustworthiness durch nachvollziehbare Daten statt Bauchgefühl.",
  },
  {
    title: "Qualitätssicherung & Transparenz",
    body: "Wiederkehrende Intervalle, klare Zuständigkeiten und reproduzierbare Standards reduzieren Reklamationen. Wo Abweichungen auftreten, gibt es einen dokumentierten Korrekturpfad – wichtig für E-E-A-T und langfristige Mandate.",
  },
] as const;

export default function ExpertisePage() {
  return (
    <article className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold text-secondary">Expertise</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Beweis-Zentrum: Standards, Sicherheit &amp; digitale Objektsteuerung
      </h1>
      <p className="mt-5 text-lg leading-8 text-muted">
        Diese Seite bündelt, warum Suchmaschinen und menschliche Entscheider
        denselben Qualitätskriterien folgen können: Erfahrung, Expertise,
        Autorität und Vertrauenswürdigkeit – verkörpert in Prozessen, nicht in
        Superlativen.
      </p>

      <ul className="mt-12 space-y-10">
        {pillars.map((p) => (
          <li key={p.title} className="border-l-4 border-secondary/50 pl-5">
            <h2 className="text-xl font-bold text-foreground">{p.title}</h2>
            <p className="mt-3 text-base leading-7 text-muted">{p.body}</p>
          </li>
        ))}
      </ul>

      <div className="mt-14 rounded-none border border-foreground/10 bg-slate-50/90 p-6 sm:p-8">
        <h2 className="text-lg font-bold text-foreground">Vertiefung</h2>
        <p className="mt-2 text-sm leading-6 text-muted">
          Technische und organisatorische Details zum Qualitätsmanagement finden
          Sie im QM-Hub; für konkrete Objekte nutzen Sie die Kurz-Anfrage.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/qualitaetsmanagement"
            className="inline-flex h-11 items-center justify-center rounded-none bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            Qualitätsmanagement
          </Link>
          <Link
            href="/standorte/stuttgart"
            className="inline-flex h-11 items-center justify-center rounded-none border border-foreground/15 px-5 text-sm font-semibold text-foreground transition hover:border-secondary/60 hover:bg-secondary/5"
          >
            Stuttgart-Cluster
          </Link>
          <Link
            href="/kontakt#kontakt-anfrage"
            className="inline-flex h-11 items-center justify-center rounded-none border border-foreground/15 px-5 text-sm font-semibold text-foreground transition hover:border-secondary/60 hover:bg-secondary/5"
          >
            Anfrage
          </Link>
        </div>
      </div>
    </article>
  );
}
