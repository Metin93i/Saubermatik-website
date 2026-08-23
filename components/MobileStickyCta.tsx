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
              className="btn-primary h-12 min-h-12 flex-1"
            >
              Jetzt anrufen
            </a>
          ) : null}
          <Link
            href="/kontakt#kontakt-anfrage"
            className={`btn-secondary h-12 min-h-12 ${telHref ? "flex-1" : "w-full"}`}
          >
            Anfrage stellen
          </Link>
        </div>
      </nav>
    </div>
  );
}
