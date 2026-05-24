import Image from "next/image";
import { REMOTE_IMAGE_BLUR_DATA_URL } from "@/lib/image-blur";

const APP_MOCKUP_SRC =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400";

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
        <div className="overflow-hidden rounded-sm border border-zinc-700 bg-zinc-900">
          <Image
            src={APP_MOCKUP_SRC}
            alt="Dashboard-Ansicht der Saubermatik QM-App auf einem Smartphone — Echtzeit-Protokolle und Tourenstatus"
            width={400}
            height={800}
            className="h-auto w-full object-cover"
            placeholder="blur"
            blurDataURL={REMOTE_IMAGE_BLUR_DATA_URL}
          />
        </div>
      </div>
      <figcaption className="hidden min-w-0 flex-1 text-xs leading-snug text-muted sm:block">
        <span className="font-bold uppercase tracking-wide text-foreground">
          Saubermatik-Plattform
        </span>
        <span className="mt-1 block">
          Echtzeit-QM, digitale Leistungsverzeichnisse und Ausfallsicherheit —
          steuerbar vom Desktop und mobil im Objekt.
        </span>
      </figcaption>
    </figure>
  );
}
