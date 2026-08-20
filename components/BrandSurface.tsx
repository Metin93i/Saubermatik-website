type Props = {
  className?: string;
  /** Optional, nur wenn die Fläche allein im Dokument steht (kein begleitendes Bild). */
  label?: string;
};

/** Ruhige Markenfläche statt Fremdbild: #13181d, dezenter oranger Keil. */
export function BrandSurface({ className = "", label }: Props) {
  return (
    <div
      className={`relative overflow-hidden bg-[#13181d] ${className}`}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? "img" : undefined}
    >
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-[42%] bg-[#f47920]/20"
        style={{ clipPath: "polygon(32% 0, 100% 0, 100% 100%, 0 100%)" }}
      />
      <div className="pointer-events-none absolute bottom-0 left-0 h-1 w-full bg-[#f47920]" />
    </div>
  );
}
