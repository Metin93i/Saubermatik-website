"use client";

import { useEffect, useState } from "react";
import { LeitstandButton } from "@/components/LeitstandButton";
import { buildTelHref } from "@/lib/phone";

export function MobileStickyCta() {
  const raw = process.env.NEXT_PUBLIC_BUSINESS_PHONE?.trim();
  const telHref = raw ? buildTelHref(raw) : null;

  const [weg, setWeg] = useState(false);

  // Kommt die Fußzeile ins Bild, gleitet die Leiste weg, damit Impressum und
  // Datenschutz frei antippbar sind. Ohne JavaScript bleibt sie sichtbar, die
  // Fußzeile hat dafür unten Abstand (SiteFooter).
  useEffect(() => {
    const fusszeile = document.querySelector("footer");
    if (!fusszeile || typeof IntersectionObserver === "undefined") return;
    const beobachter = new IntersectionObserver(([eintrag]) => {
      setWeg(eintrag.isIntersecting);
    });
    beobachter.observe(fusszeile);
    return () => beobachter.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 transition-transform duration-300 ease-out motion-reduce:transition-none md:hidden ${
        weg ? "pointer-events-none translate-y-full" : "translate-y-0"
      }`}
      aria-hidden={weg || undefined}
      inert={weg}
    >
      <nav
        className="border-t border-zinc-200 bg-background px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2"
        aria-label="Schnellaktionen Mobil"
      >
        <div className="mx-auto flex max-w-lg gap-2">
          {telHref ? (
            <LeitstandButton
              variant="primary"
              href={telHref}
              className="h-12 min-h-12 flex-1"
            >
              Jetzt anrufen
            </LeitstandButton>
          ) : null}
          <LeitstandButton
            variant="secondary-on-light"
            href="/kontakt#kontakt-anfrage"
            className={`h-12 min-h-12 ${telHref ? "flex-1" : "w-full"}`}
          >
            Anfrage stellen
          </LeitstandButton>
        </div>
      </nav>
    </div>
  );
}
