import PageTemplate from "@/components/site/PageTemplate";
import { SECTOR_PAGES } from "@/lib/content";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const BASE_URL = "https://logosnext.com.br";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(SECTOR_PAGES).map((setor) => ({ setor }));
}

export async function generateMetadata({ params }: { params: Promise<{ setor: string }> }): Promise<Metadata> {
  const { setor } = await params;
  const page = SECTOR_PAGES[setor];
  if (!page) return {};
  const url = `${BASE_URL}/${page.slug}`;
  return {
    title: page.meta.title,
    description: page.meta.description,
    alternates: { canonical: url },
    openGraph: { url, title: page.meta.title, description: page.meta.description },
    twitter: { title: page.meta.title, description: page.meta.description },
  };
}

export default async function SectorPage({ params }: { params: Promise<{ setor: string }> }) {
  const { setor } = await params;
  const page = SECTOR_PAGES[setor];
  if (!page) notFound();
  return <PageTemplate content={page} featuresId="automacoes" />;
}
