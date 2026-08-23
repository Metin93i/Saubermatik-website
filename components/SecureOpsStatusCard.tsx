import Image from "next/image";

type Props = {
  className?: string;
};

export function SecureOpsStatusCard({ className = "" }: Props) {
  return (
    <div
      className={`flex items-center gap-3 rounded-[14px] border border-[rgba(103,191,255,0.25)] bg-navy px-4 py-3 shadow-[0_10px_28px_rgba(103,191,255,0.18)] ${className}`}
    >
      <Image
        src="/images/secureops-schild-icon.png"
        alt=""
        width={54}
        height={54}
        className="h-[54px] w-[54px] shrink-0 object-contain mix-blend-screen"
      />
      <div className="min-w-0 flex-1">
        <p className="font-display text-base font-bold leading-tight text-white">
          SecureOps
        </p>
        <p className="mt-0.5 text-sm leading-5 text-text-dunkel">
          Einsätze dokumentiert im Kundenportal
        </p>
      </div>
      <span className="relative mr-1 flex h-2.5 w-2.5 shrink-0" aria-hidden>
        <span className="leitstand-pulse absolute inset-0 rounded-full bg-glow" />
        <span className="relative h-2.5 w-2.5 rounded-full bg-glow" />
      </span>
    </div>
  );
}
