"use client";

import { useCallback, useEffect, useId, useState } from "react";
import { PrefetchLink } from "@/components/PrefetchLink";
import { ClientLoginButton } from "@/components/ClientLoginButton";
import { SERVICES } from "@/lib/config/services";

const NAV_LINK_CLASS =
  "rounded-sm px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900";

const DESKTOP_NAV_ITEM =
  "whitespace-nowrap rounded-sm px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900";

const DROPDOWN_LINK =
  "flex items-start gap-2 border-b border-slate-100 px-4 py-2.5 text-sm text-slate-700 transition last:border-b-0 hover:bg-slate-50 hover:text-slate-900";

const MAIN_PAGES = [
  { href: "/qualitaetsmanagement", label: "Qualitätsmanagement" },
  { href: "/expertise", label: "Expertise" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/karriere", label: "Karriere" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export function SiteHeaderNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [leistungenOpen, setLeistungenOpen] = useState(false);
  const panelId = useId();

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

  return (
    <>
      <div className="flex min-w-0 flex-1 items-center justify-end gap-2 lg:gap-4">
        <nav
          className="hidden items-center md:flex md:flex-nowrap"
          aria-label="Hauptnavigation"
        >
          <details className="group relative">
            <summary
              className={`${DESKTOP_NAV_ITEM} cursor-pointer list-none select-none [&::-webkit-details-marker]:hidden`}
            >
              Leistungen
              <span
                className="ml-0.5 inline-block text-[10px] text-slate-400 transition-transform group-open:rotate-180"
                aria-hidden
              >
                ▾
              </span>
            </summary>
            <div className="absolute left-0 top-full z-50 mt-1 w-[min(100vw-2rem,22rem)] overflow-hidden rounded-sm border border-slate-200 bg-white py-1 shadow-sm lg:left-auto lg:right-0">
              <ul className="max-h-[min(70vh,24rem)] overflow-y-auto py-1">
                {SERVICES.map((s) => (
                  <li key={s.slug}>
                    <PrefetchLink
                      href={`/leistungen/${s.slug}`}
                      className={DROPDOWN_LINK}
                    >
                      <span
                        className="shrink-0 text-base leading-none opacity-80"
                        aria-hidden
                      >
                        {s.emoji}
                      </span>
                      <span className="min-w-0 leading-snug">{s.title}</span>
                    </PrefetchLink>
                  </li>
                ))}
              </ul>
              <div className="border-t border-slate-100 px-2 py-2">
                <PrefetchLink
                  href="/leistungen"
                  className="block rounded-sm px-3 py-2 text-center text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
                >
                  Zur Leistungsübersicht →
                </PrefetchLink>
              </div>
            </div>
          </details>

          {MAIN_PAGES.map((item) => (
            <PrefetchLink
              key={item.href}
              href={item.href}
              className={DESKTOP_NAV_ITEM}
            >
              {item.label}
            </PrefetchLink>
          ))}
        </nav>

        <ClientLoginButton className="hidden shrink-0 md:inline-flex" />

        <button
          type="button"
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 md:hidden"
          aria-expanded={mobileOpen}
          aria-controls={panelId}
          aria-label="Hauptmenü öffnen"
          onClick={() => setMobileOpen(true)}
        >
          <span className="sr-only">Menü öffnen</span>
          <span aria-hidden className="flex flex-col gap-1">
            <span className="h-0.5 w-5 bg-slate-700" />
            <span className="h-0.5 w-5 bg-slate-700" />
            <span className="h-0.5 w-5 bg-slate-700" />
          </span>
        </button>
      </div>

      {mobileOpen ? (
        <div
          className="fixed inset-0 z-[100] md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="absolute inset-0 bg-slate-950/40 backdrop-blur-[1px]"
            aria-label="Menü schließen"
            onClick={closeMobile}
          />
          <div
            id={panelId}
            className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col border-l border-slate-200 bg-white shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Menü
              </p>
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-sm text-lg text-slate-500 transition hover:bg-slate-50 hover:text-slate-900"
                onClick={closeMobile}
                aria-label="Menü schließen"
              >
                ×
              </button>
            </div>

            <div className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-3 pb-[max(1rem,env(safe-area-inset-bottom))]">
              <div className="flex flex-col gap-0.5">
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

              <div className="mt-2 border-t border-slate-100 pt-2">
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-sm px-3 py-2.5 text-left text-sm font-medium text-slate-700 transition hover:text-slate-900"
                  aria-expanded={leistungenOpen}
                  onClick={() => setLeistungenOpen((o) => !o)}
                >
                  Leistungen
                  <span className="text-slate-400" aria-hidden>
                    {leistungenOpen ? "▾" : "▸"}
                  </span>
                </button>
                {leistungenOpen ? (
                  <ul className="mt-1 max-h-60 space-y-0.5 overflow-y-auto border-l border-slate-200 pl-3">
                    {SERVICES.map((s) => (
                      <li key={s.slug}>
                        <PrefetchLink
                          href={`/leistungen/${s.slug}`}
                          className="block rounded-sm py-1.5 pl-2 text-sm text-slate-600 transition hover:text-slate-900"
                          onClick={closeMobile}
                        >
                          {s.title}
                        </PrefetchLink>
                      </li>
                    ))}
                    <li>
                      <PrefetchLink
                        href="/leistungen"
                        className="block rounded-sm py-2 pl-2 text-sm font-medium text-slate-700 transition hover:text-slate-900"
                        onClick={closeMobile}
                      >
                        Alle Leistungen →
                      </PrefetchLink>
                    </li>
                  </ul>
                ) : null}
              </div>

              <div className="mt-auto border-t border-slate-100 pt-4">
                <ClientLoginButton
                  className="h-10 w-full"
                  onNavigate={closeMobile}
                />
                <p className="mt-2 text-center text-xs text-slate-400">
                  Kundenportal — öffnet in neuem Tab
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
