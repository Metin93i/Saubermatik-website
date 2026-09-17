import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MatrixDeepPage } from "@/components/MatrixDeepPage";
import { buildMatrixDeepContent } from "@/lib/seo/matrix-content";
import {
  generateMatrixStaticParams,
  parseMatrixRoute,
} from "@/lib/seo/matrix-params";

type PageProps = {
  params: Promise<{ city: string; service: string }>;
};

export function generateStaticParams() {
  return generateMatrixStaticParams().map(({ city, service }) => ({
    city,
    service,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { city, service } = await params;
  const route = parseMatrixRoute(city, service);
  if (!route) {
    return { title: "Einsatzgebiet & Leistung" };
  }
  const content = buildMatrixDeepContent(route.city, route.service);
  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: {
      canonical: `/standorte/${city}/${service}`,
    },
  };
}

export default async function MatrixStandortServicePage({ params }: PageProps) {
  const { city, service } = await params;
  const route = parseMatrixRoute(city, service);
  if (!route) {
    notFound();
  }

  const content = buildMatrixDeepContent(route.city, route.service);

  return <MatrixDeepPage content={content} />;
}
