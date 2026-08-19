import type { FaqPair } from "@/lib/seo/leistung-faq";

type Props = {
  items: readonly FaqPair[];
};

/** Generisches FAQPage-JSON-LD — gleiche Mechanik wie Leistungsseiten. */
export function FaqPageJsonLd({ items }: Props) {
  if (items.length === 0) return null;

  const payload = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const json = JSON.stringify(payload).replaceAll("<", "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
