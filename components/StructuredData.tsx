import { buildGlobalJsonLdString } from "@/lib/seo/global-jsonld";

const jsonLdString = buildGlobalJsonLdString();

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdString }}
    />
  );
}
