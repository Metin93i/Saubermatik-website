import Link from "next/link";
import { buildTelHref } from "@/lib/phone";

export function MobileStickyCta() {
  const raw = process.env.NEXT_PUBLIC_BUSINESS_PHONE?.trim();
  const telHref = raw ? buildTelHref(raw) : null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 md:hidden">
      <nav
        className="border-t border-foreground/10 bg-background/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2 shadow-[0_-8px_30px_rgba(15,23,42,0.08)] backdrop-blur supports-[backdrop-filter]:bg-background/90"
        aria-label="Schnellaktionen Mobil"
      >
        <div className="mx-auto flex max-w-lg gap-2">
          {telHref ? (
            <a
              href={telHref}
              className="flex h-12 min-h-12 flex-1 items-center justify-center rounded-xl border border-foreground/15 bg-white text-sm font-semibold text-primary shadow-sm transition hover:border-primary/30 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Anrufen
            </a>
          ) : null}
          <Link
            href="/kontakt#kontakt-anfrage"
            className={`flex h-12 min-h-12 items-center justify-center rounded-xl bg-primary text-sm font-semibold text-primary-foreground shadow-md transition hover:bg-primary/92 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${telHref ? "flex-1" : "w-full"}`}
          >
            Angebot
          </Link>
        </div>
      </nav>
    </div>
  );
}
