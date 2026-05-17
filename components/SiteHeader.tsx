import Link from "next/link";

const navLinkClass =
  "text-sm font-medium text-foreground/80 transition-colors hover:text-secondary";

export function SiteHeader() {
  return (
    <header className="border-b border-foreground/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-primary"
        >
          Saubermatik
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2">
          <Link href="/leistungen" className={navLinkClass}>
            Leistungen
          </Link>
          <Link href="/#kontakt-anfrage" className={navLinkClass}>
            Anfrage
          </Link>
        </nav>
      </div>
    </header>
  );
}
