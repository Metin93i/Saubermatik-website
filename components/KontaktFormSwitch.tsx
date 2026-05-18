"use client";

import { useSearchParams } from "next/navigation";
import { CareerForm } from "@/components/CareerForm";
import { LeadFunnel } from "@/components/LeadFunnel";

/**
 * Liest `?type=karriere` (Suspense-Child) und rendert Bewerber- vs. Kunden-Funnel.
 * Muss in `<Suspense>` von `app/kontakt/page.tsx` eingebunden sein.
 */
export function KontaktFormSwitch() {
  const searchParams = useSearchParams();
  const isCareer = searchParams.get("type") === "karriere";

  if (isCareer) {
    return <CareerForm className="shadow-xl ring-1 ring-black/5" />;
  }

  return <LeadFunnel className="shadow-xl ring-1 ring-black/5" />;
}
