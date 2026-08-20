import { BrandSurface } from "@/components/BrandSurface";

type Props = {
  className?: string;
};

export function AppMockup({ className = "" }: Props) {
  return (
    <figure
      className={`flex items-center gap-3 ${className}`}
      aria-label="Saubermatik QM-App — digitale Objektsteuerung"
    >
      <div className="relative w-full max-w-[200px] shrink-0 rotate-3 drop-shadow-lg">
        <div className="overflow-hidden rounded-sm border border-zinc-700">
          <BrandSurface className="aspect-[1/2] w-full" />
        </div>
      </div>
      <figcaption className="hidden min-w-0 flex-1 text-xs leading-snug text-muted sm:block">
        <span className="font-bold uppercase tracking-wide text-foreground">
          Saubermatik-Plattform
        </span>
        <span className="mt-1 block">
          Dokumentierte Einsätze über die Plattform — am Rechner und über
          mobile Endgeräte (Handy, auch Platform-App).
        </span>
      </figcaption>
    </figure>
  );
}
