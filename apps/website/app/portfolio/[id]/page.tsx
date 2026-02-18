
import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata, ResolvingMetadata } from 'next';
import { MOCK_PORTFOLIO } from 'shared';
import { PortfolioDetail } from '../../../components/PortfolioDetail';

type Props = {
  params: Promise<{ id: string }>;
};

// 1. Static Params for SSG
export async function generateStaticParams() {
  return MOCK_PORTFOLIO.map((item) => ({
    id: item.id.toString(),
  }));
}

// 2. Metadata
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id } = await params;
  const item = MOCK_PORTFOLIO.find((p) => p.id.toString() === id);

  if (!item) {
    return { title: 'Project Not Found' };
  }

  return {
    title: `${item.title} | MKS Portfolio`,
    description: item.desc,
    openGraph: {
      images: [item.image],
    },
  };
}

// 3. Server Component
export default async function PortfolioDetailPage({ params }: Props) {
  const { id } = await params;
  const item = MOCK_PORTFOLIO.find((p) => p.id.toString() === id);

  if (!item) {
    notFound();
  }

  return <PortfolioDetail item={item} />;
}
