import { getSiteOrigin } from "@/lib/seo/site-origin";

export type BreadcrumbJsonLdItem = {
  name: string;
  /** Pfad ab Origin, z. B. `/leistungen/fenster-glasreinigung` */
  path: string;
};

type Props = { items: readonly BreadcrumbJsonLdItem[] };

export function BreadcrumbJsonLd({ items }: Props) {
  if (items.length === 0) return null;
  const origin = getSiteOrigin();

  const payload = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => {
      const path = item.path.startsWith("/") ? item.path : `/${item.path}`;
      return {
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: `${origin}${path}`,
      };
    }),
  };

  const json = JSON.stringify(payload).replaceAll("<", "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
