import Image from "next/image";
import { KAM_PROFILE } from "@/lib/seo/kam-profile";
import { REMOTE_IMAGE_BLUR_DATA_URL } from "@/lib/image-blur";

type Props = {
  className?: string;
};

export function KamPortrait({ className = "" }: Props) {
  return (
    <Image
      src={KAM_PROFILE.portraitSrc}
      alt={KAM_PROFILE.portraitAlt}
      width={64}
      height={64}
      className={`h-16 w-16 shrink-0 rounded-sm object-cover grayscale ${className}`}
      placeholder="blur"
      blurDataURL={REMOTE_IMAGE_BLUR_DATA_URL}
    />
  );
}
