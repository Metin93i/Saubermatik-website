import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SecureOps",
  description:
    "SecureOps: digitale Einsatz-Dokumentation von Saubermatik – ausführliche Informationen folgen.",
  alternates: { canonical: "/secureops" },
};

export default function SecureOpsPage() {
  return (
    <article className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold text-secondary">SecureOps</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        SecureOps
      </h1>
      <p className="mt-5 text-base leading-7 text-muted">
        SecureOps steht für die digitale Einsatz-Dokumentation von Saubermatik.
        Eine ausführliche Erklärseite folgt.
      </p>
      <p className="mt-8 text-sm text-muted">
        <Link
          href="/kontakt#kontakt-anfrage"
          className="font-semibold text-secondary hover:underline"
        >
          Kontakt aufnehmen
        </Link>
      </p>
    </article>
  );
}
