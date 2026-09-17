"use client";

import { useSearchParams } from "next/navigation";
import { CareerForm } from "@/components/CareerForm";
import { KontaktForm } from "@/components/KontaktForm";

/**
 * Liest `?type=karriere` (Suspense-Child) und rendert Bewerber- vs. Kundenformular.
 * Muss in `<Suspense>` von `app/kontakt/page.tsx` eingebunden sein.
 */
export function KontaktFormSwitch() {
  const searchParams = useSearchParams();
  const isCareer = searchParams.get("type") === "karriere";

  if (isCareer) {
    return <CareerForm className="" />;
  }

  return <KontaktForm className="" />;
}
