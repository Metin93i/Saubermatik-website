"use client";

import { useCallback, useEffect, useId, useState } from "react";
import { PrefetchLink } from "@/components/PrefetchLink";
import { SERVICES } from "@/lib/config/services";
import { buildTelHref } from "@/lib/phone";

const NAV_LINK_CLASS =
  "rounded-lg px-2 py-1.5 text-sm font-medium text-foreground/85 transition-colors hover:bg-secondary/10 hover:text-secondary";

const DESKTOP_NAV_ITEM =
  "whitespace-nowrap rounded-lg px-2 py-1.5 text-sm font-medium text-foreground/85 transition-colors hover:bg-secondary/10 hover:text-secondary";

const MAIN_PAGES = [
  { href: "/qualitaetsmanagement", label: "Qualitätsmanagement" },
  { href: "/expertise", label: "Expertise" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/karriere", label: "Karriere" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

function cn(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function SiteHeaderNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [leistungenOpen, setLeistungenOpen] = useState(false);
  const panelId = useId();

  const raw = process.env.NEXT_PUBLIC_BUSINESS_PHONE?.trim();
  const telHref = raw ? buildTelHref(raw) : null;

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    setLeistungenOpen(false);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobile();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen, closeMobile]);

  const callButtonClass =
    "inline-flex h-10 shrink-0 items-center justify-center gap-1.5 rounded-xl bg-secondary px-3.5 text-sm font-bold text-secondary-foreground shadow-md shadow-secondary/20 transition hover:bg-secondary/90 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary";

  return (
    <>
      <div className="flex min-w-0 flex-1 items-center justify-end gap-2 md:gap-3 lg:gap-4">
        <nav
          className="hidden items-center gap-0.5 md:flex md:flex-nowrap lg:gap-1"
          aria-label="Hauptnavigation"
        >
        <details className="group relative">
          <summary
            className={cn(
              DESKTOP_NAV_ITEM,
              "cursor-pointer list-none select-none [&::-webkit-details-marker]:hidden",
            )}
          >
            Leistungen
            <span
              className="ml-0.5 inline-block text-[10px] text-muted transition-transform group-open:rotate-180"
              aria-hidden
            >
              ▾
            </span>
          </summary>
          <div className="absolute left-0 top-full z-50 mt-2 w-[min(100vw-2rem,22rem)] overflow-hidden rounded-xl border border-foreground/10 bg-background py-1 shadow-xl ring-1 ring-black/5 lg:left-auto lg:right-0">
            <ul className="max-h-[min(70vh,24rem)] overflow-y-auto py-1">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <PrefetchLink
                    href={`/leistungen/${s.slug}`}
                    className="flex items-start gap-2 px-4 py-2.5 text-sm text-foreground transition hover:bg-secondary/10"
                  >
                    <span className="shrink-0 text-base leading-none" aria-hidden>
                      {s.emoji}
                    </span>
                    <span className="min-w-0 leading-snug">{s.title}</span>
                  </PrefetchLink>
                </li>
              ))}
            </ul>
            <div className="border-t border-foreground/10 px-2 py-2">
              <PrefetchLink
                href="/leistungen"
                className="block rounded-lg px-3 py-2 text-center text-sm font-semibold text-secondary hover:bg-secondary/10"
              >
                Zur Leistungsübersicht →
              </PrefetchLink>
            </div>
          </div>
        </details>

        {MAIN_PAGES.map((item) => (
          <PrefetchLink key={item.href} href={item.href} className={DESKTOP_NAV_ITEM}>
            {item.label}
          </PrefetchLink>
        ))}
        </nav>

        <div className="flex items-center gap-2 md:ml-0">
        {telHref ? (
          <a
            href={telHref}
            className={cn(callButtonClass, "hidden md:inline-flex")}
            aria-label="Jetzt telefonisch anrufen"
          >
            <span aria-hidden>📞</span>
            <span>Jetzt anrufen</span>
          </a>
        ) : (
          <PrefetchLink
            href="/kontakt"
            className={cn(callButtonClass, "hidden md:inline-flex")}
          >
            Kontakt aufnehmen
          </PrefetchLink>
        )}

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-foreground/15 bg-background text-sm font-semibold text-foreground shadow-sm transition hover:border-secondary/40 hover:bg-secondary/5 md:hidden"
          aria-expanded={mobileOpen}
          aria-controls={panelId}
          aria-label="Hauptmenü öffnen"
          onClick={() => setMobileOpen(true)}
        >
          <span className="sr-only">Menü öffnen</span>
          <span aria-hidden className="flex flex-col gap-1">
            <span className="h-0.5 w-5 rounded-full bg-foreground" />
            <span className="h-0.5 w-5 rounded-full bg-foreground" />
            <span className="h-0.5 w-5 rounded-full bg-foreground" />
          </span>
        </button>
      </div>
      </div>

      {mobileOpen ? (
        <div className="fixed inset-0 z-[100] md:hidden" role="dialog" aria-modal="true">
          <button
            type="button"
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-[2px]"
            aria-label="Menü schließen"
            onClick={closeMobile}
          />
          <div
            id={panelId}
            className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col border-l border-foreground/10 bg-background shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-foreground/10 px-4 py-3">
              <p className="text-sm font-bold text-foreground">Menü</p>
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-lg text-lg text-muted transition hover:bg-secondary/10 hover:text-secondary"
                onClick={closeMobile}
                aria-label="Menü schließen"
              >
                ×
              </button>
            </div>

            <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
              {telHref ? (
                <a
                  href={telHref}
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-secondary text-base font-bold text-secondary-foreground shadow-lg shadow-secondary/25"
                  onClick={closeMobile}
                  aria-label="Jetzt telefonisch anrufen"
                >
                  <span aria-hidden>📞</span>
                  Jetzt anrufen
                </a>
              ) : (
                <PrefetchLink
                  href="/kontakt"
                  className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-secondary text-base font-bold text-secondary-foreground shadow-lg"
                  onClick={closeMobile}
                >
                  Kontakt aufnehmen
                </PrefetchLink>
              )}

              <div className="flex flex-col gap-1 border-t border-foreground/10 pt-3">
                {MAIN_PAGES.map((item) => (
                  <PrefetchLink
                    key={item.href}
                    href={item.href}
                    className={NAV_LINK_CLASS}
                    onClick={closeMobile}
                  >
                    {item.label}
                  </PrefetchLink>
                ))}
              </div>

              <div className="border-t border-foreground/10 pt-3">
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-left text-sm font-semibold text-foreground"
                  aria-expanded={leistungenOpen}
                  onClick={() => setLeistungenOpen((o) => !o)}
                >
                  Leistungen
                  <span className="text-muted" aria-hidden>
                    {leistungenOpen ? "▾" : "▸"}
                  </span>
                </button>
                {leistungenOpen ? (
                  <ul className="mt-1 max-h-60 space-y-0.5 overflow-y-auto border-l-2 border-secondary/30 pl-3">
                    {SERVICES.map((s) => (
                      <li key={s.slug}>
                        <PrefetchLink
                          href={`/leistungen/${s.slug}`}
                          className="block py-1.5 text-sm text-muted transition hover:text-secondary"
                          onClick={closeMobile}
                        >
                          {s.title}
                        </PrefetchLink>
                      </li>
                    ))}
                    <li>
                      <PrefetchLink
                        href="/leistungen"
                        className="block py-2 text-sm font-semibold text-secondary"
                        onClick={closeMobile}
                      >
                        Alle Leistungen →
                      </PrefetchLink>
                    </li>
                  </ul>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
