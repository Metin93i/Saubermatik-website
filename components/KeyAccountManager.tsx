import Link from "next/link";
import {
  KEY_ACCOUNT_COPY,
  buildKeyAccountJsonLd,
} from "@/lib/seo/key-account";
import { buildTelHref } from "@/lib/phone";

type Props = {
  className?: string;
  showCta?: boolean;
};

export function KeyAccountManager({ className = "", showCta = true }: Props) {
  const raw = process.env.NEXT_PUBLIC_BUSINESS_PHONE?.trim();
  const telHref = raw ? buildTelHref(raw) : null;
  const jsonLd = buildKeyAccountJsonLd();
  const json = JSON.stringify(jsonLd).replaceAll("<", "\\u003c");

  return (
    <section
      className={`rounded-2xl border border-foreground/10 bg-gradient-to-br from-slate-50 via-white to-secondary/5 p-6 shadow-md ring-1 ring-black/5 sm:p-8 ${className}`}
      aria-labelledby="key-account-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: json }}
      />
      <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
        {KEY_ACCOUNT_COPY.eyebrow}
      </p>
      <h2
        id="key-account-heading"
        className="mt-2 text-xl font-bold tracking-tight text-foreground sm:text-2xl"
      >
        {KEY_ACCOUNT_COPY.title}
      </h2>
      <p className="mt-4 text-base leading-7 text-muted">
        {KEY_ACCOUNT_COPY.intro}
      </p>

      <ul className="mt-8 space-y-6">
        {KEY_ACCOUNT_COPY.pillars.map((p) => (
          <li
            key={p.title}
            className="border-l-4 border-primary/80 pl-4 sm:pl-5"
          >
            <h3 className="text-base font-bold text-foreground">{p.title}</h3>
            <p className="mt-2 text-sm leading-7 text-muted sm:text-[15px]">
              {p.body}
            </p>
          </li>
        ))}
      </ul>

      {showCta ? (
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href="/kontakt#kontakt-anfrage"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-md transition hover:bg-primary/90"
          >
            Key Account anfragen
          </Link>
          {telHref ? (
            <a
              href={telHref}
              className="inline-flex h-11 items-center justify-center rounded-xl border border-foreground/15 px-5 text-sm font-semibold text-foreground transition hover:border-secondary/40 hover:bg-white"
            >
              Direkte Erreichbarkeit
            </a>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}
