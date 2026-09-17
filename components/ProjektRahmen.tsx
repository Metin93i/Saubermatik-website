import { getProjektRahmenAbsatz } from "@/lib/config/city-tiers";

type Props = {
  cityLabel: string;
  className?: string;
};

/** Rahmen-Absatz für Städte außerhalb des Unterhalts-Kernradius. */
export function ProjektRahmen({ cityLabel, className = "" }: Props) {
  return (
    <p
      className={`max-w-3xl rounded-sm border border-zinc-200 bg-white px-4 py-3 text-sm leading-6 text-foreground/90 sm:text-base sm:leading-7 ${className}`}
    >
      {getProjektRahmenAbsatz(cityLabel)}
    </p>
  );
}
