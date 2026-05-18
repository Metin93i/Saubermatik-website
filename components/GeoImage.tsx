import Image, { type ImageProps } from "next/image";
import { getSiteOrigin } from "@/lib/seo/site-origin";

type Props = ImageProps & {
  /** Ortsname für ImageObject contentLocation (z. B. „Balingen“, „Stuttgart“). */
  contentLocation: string;
  /** Optional: eindeutige Bild-ID im Schema-Graph */
  imageId?: string;
};

export function GeoImage({
  contentLocation,
  imageId,
  alt,
  src,
  ...imageProps
}: Props) {
  const origin = getSiteOrigin();
  const srcString = typeof src === "string" ? src : origin;
  const id = imageId ?? `geo-image-${contentLocation.replace(/\s+/g, "-").toLowerCase()}`;

  const payload = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "@id": `${origin}/#${id}`,
    name: typeof alt === "string" ? alt : undefined,
    contentUrl: srcString.startsWith("http") ? srcString : `${origin}${srcString}`,
    contentLocation: {
      "@type": "Place",
      name: contentLocation,
      address: {
        "@type": "PostalAddress",
        addressLocality: contentLocation,
        addressRegion: "Baden-Württemberg",
        addressCountry: "DE",
      },
    },
  };

  const json = JSON.stringify(payload).replaceAll("<", "\\u003c");

  return (
    <>
      <Image alt={alt} src={src} {...imageProps} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: json }}
        aria-hidden
      />
    </>
  );
}
