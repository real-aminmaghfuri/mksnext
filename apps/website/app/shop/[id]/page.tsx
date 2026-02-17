
import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata, ResolvingMetadata } from 'next';
import { MOCK_PRODUCTS } from 'shared';
import { ProductDetail } from '../../../components/ProductDetail';

type Props = {
  params: Promise<{ id: string }>;
};

// 1. Static Params for SSG
export async function generateStaticParams() {
  return MOCK_PRODUCTS.map((product) => ({
    id: product.id.toString(),
  }));
}

// 2. Metadata
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id } = await params;
  const product = MOCK_PRODUCTS.find((p) => p.id.toString() === id);

  if (!product) {
    return { title: 'Produk Tidak Ditemukan' };
  }

  return {
    title: `${product.name} | MKS Arsenal`,
    description: product.desc,
    openGraph: {
      images: [product.image],
    },
  };
}

// 3. Server Component
export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = MOCK_PRODUCTS.find((p) => p.id.toString() === id);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}
