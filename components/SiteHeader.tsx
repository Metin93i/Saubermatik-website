import Link from "next/link";
import { SaubermatikLogo } from "@/components/SaubermatikLogo";
import { SERVICES } from "@/lib/config/services";

const navLinkClass =
  "text-sm font-medium text-foreground/80 transition-colors hover:text-secondary";

export function SiteHeader() {
  return (
    <header className="border-b border-foreground/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <SaubermatikLogo href="/" />
        <nav className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 sm:gap-x-5">
          <details className="group relative">
            <summary
              className={`${navLinkClass} cursor-pointer list-none select-none [&::-webkit-details-marker]:hidden`}
            >
              Leistungen
              <span
                className="ml-0.5 inline-block text-[10px] text-muted transition-transform group-open:rotate-180"
                aria-hidden
              >
                ▾
              </span>
            </summary>
            <div className="absolute right-0 top-full z-50 mt-2 w-[min(100vw-2rem,20rem)] overflow-hidden rounded-xl border border-foreground/10 bg-background py-1 shadow-xl ring-1 ring-black/5">
              <ul className="max-h-[min(70vh,24rem)] overflow-y-auto py-1">
                {SERVICES.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/leistungen/${s.slug}`}
                      className="flex items-start gap-2 px-4 py-2.5 text-sm text-foreground transition hover:bg-secondary/10"
                    >
                      <span className="shrink-0 text-base leading-none" aria-hidden>
                        {s.emoji}
                      </span>
                      <span className="min-w-0 leading-snug">{s.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="border-t border-foreground/10 px-2 py-2">
                <Link
                  href="/leistungen"
                  className="block rounded-lg px-3 py-2 text-center text-sm font-semibold text-secondary hover:bg-secondary/10"
                >
                  Zur Leistungsübersicht →
                </Link>
              </div>
            </div>
          </details>
          <Link href="/#kontakt-anfrage" className={navLinkClass}>
            Anfrage
          </Link>
        </nav>
      </div>
    </header>
  );
}
