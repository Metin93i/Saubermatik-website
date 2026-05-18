import Image from "next/image";
import type { LeistungSlug } from "@/lib/routes/leistungen";
import { getLeistungImage } from "@/lib/config/leistung-images";
import { REMOTE_IMAGE_BLUR_DATA_URL } from "@/lib/image-blur";

type Props = {
  slug: LeistungSlug;
  priority?: boolean;
  className?: string;
};

export function LeistungHeroImage({
  slug,
  priority = false,
  className = "mt-8",
}: Props) {
  const { src, alt } = getLeistungImage(slug);

  return (
    <div
      className={`relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-foreground/10 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 48rem"
        priority={priority}
        placeholder="blur"
        blurDataURL={REMOTE_IMAGE_BLUR_DATA_URL}
      />
    </div>
  );
}
