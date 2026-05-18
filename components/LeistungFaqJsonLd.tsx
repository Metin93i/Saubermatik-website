import type { LeistungSlug } from "@/lib/routes/leistungen";
import { getLeistungFaqItems } from "@/lib/seo/leistung-faq";

type Props = { slug: LeistungSlug };

export function LeistungFaqJsonLd({ slug }: Props) {
  const items = getLeistungFaqItems(slug);
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
