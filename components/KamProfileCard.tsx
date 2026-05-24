import { KamPortrait } from "@/components/KamPortrait";
import {
  KAM_PROFILE,
  buildKamProfileJsonLd,
} from "@/lib/seo/kam-profile";

type Props = {
  className?: string;
};

export function KamProfileCard({ className = "" }: Props) {
  const json = JSON.stringify(buildKamProfileJsonLd()).replaceAll("<", "\\u003c");

  return (
    <aside
      className={`rounded-sm border border-zinc-800 bg-zinc-950/50 p-3 sm:p-4 ${className}`}
      aria-labelledby="kam-profile-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: json }}
      />
      <div className="flex gap-3">
        <KamPortrait />
        <div className="min-w-0 flex-1">
          <p
            id="kam-profile-heading"
            className="text-[10px] font-bold uppercase tracking-widest text-primary sm:text-xs"
          >
            {KAM_PROFILE.eyebrow}
          </p>
          <p className="mt-0.5 text-sm font-bold text-foreground">
            {KAM_PROFILE.name}
          </p>
          <p className="mt-1 text-xs font-semibold leading-snug text-foreground/90">
            {KAM_PROFILE.usp}
          </p>
          <p className="mt-1 text-[11px] leading-snug text-muted sm:text-xs">
            {KAM_PROFILE.expertise}
          </p>
        </div>
      </div>
    </aside>
  );
}
