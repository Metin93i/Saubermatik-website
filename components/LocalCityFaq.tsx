import type { StandortCity } from "@/lib/routes/standorte";
import { getStandortFaqItems } from "@/lib/seo/standort-faq";

type Props = {
  city: StandortCity;
};

export function LocalCityFaq({ city }: Props) {
  const items = getStandortFaqItems(city);
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
    <section
      className="mt-14 border-t border-foreground/10 pt-10"
      aria-labelledby={`local-faq-${city}`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: json }}
      />
      <h2
        id={`local-faq-${city}`}
        className="text-2xl font-bold tracking-tight text-foreground"
      >
        Häufige Fragen – Gebäudereinigung vor Ort
      </h2>
      <ul className="mt-8 space-y-8">
        {items.map((item) => (
          <li key={item.question}>
            <h3 className="text-lg font-semibold text-foreground">
              {item.question}
            </h3>
            <p className="mt-3 text-base leading-7 text-muted">{item.answer}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
