import Link from "next/link";
import { buildTelHref } from "@/lib/phone";

export function MobileStickyCta() {
  const raw = process.env.NEXT_PUBLIC_BUSINESS_PHONE?.trim();
  const telHref = raw ? buildTelHref(raw) : null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 md:hidden">
      <nav
        className="border-t border-zinc-200 bg-background px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2"
        aria-label="Schnellaktionen Mobil"
      >
        <div className="mx-auto flex max-w-lg gap-2">
          {telHref ? (
            <a
              href={telHref}
              className="flex h-12 min-h-12 flex-1 items-center justify-center rounded-sm bg-secondary text-sm font-bold text-secondary-foreground transition hover:bg-secondary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
            >
              Jetzt anrufen
            </a>
          ) : null}
          <Link
            href="/kontakt#kontakt-anfrage"
            className={`flex h-12 min-h-12 items-center justify-center rounded-sm border border-zinc-300 bg-white text-sm font-bold text-foreground transition hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary ${telHref ? "flex-1" : "w-full"}`}
          >
            Anfrage stellen
          </Link>
        </div>
      </nav>
    </div>
  );
}
