
import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata, ResolvingMetadata } from 'next';
import { MOCK_ARTICLES } from 'shared';
import { ArticleDetail } from '../../../components/ArticleDetail';

// Next.js 15 / App Router Compatibility: Params is a Promise
type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// 1. GENERATE STATIC PARAMS (SSG Strategy)
export async function generateStaticParams() {
  return MOCK_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

// 2. DYNAMIC METADATA (SEO Radar)
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const article = MOCK_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: '404 - Artikel Hilang | PT Mesin Kasir Solo',
      description: 'Halaman yang lo cari udah gak ada atau dipindah.',
      robots: { index: false, follow: false }
    };
  }

  const baseUrl = 'https://mesinkasirsolo.com'; 
  const ogImage = article.image; 

  return {
    title: `${article.title} | MKS Intel`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `${baseUrl}/articles/${article.slug}`,
      siteName: 'PT Mesin Kasir Solo',
      images: [{ url: ogImage, width: 1200, height: 630, alt: article.title }],
      locale: 'id_ID',
      type: 'article',
      authors: [article.author],
      publishedTime: new Date(article.date).toISOString(), // Ensure standard format if possible
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [ogImage],
      creator: '@kasirsolo',
    },
    alternates: {
      canonical: `${baseUrl}/articles/${article.slug}`,
    },
    robots: { index: true, follow: true },
  };
}

// 3. SERVER COMPONENT RENDER (The Supply Chain)
export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  
  // Server-Side Fetching (Mock DB)
  const article = MOCK_ARTICLES.find((a) => a.slug === slug);
  
  // Validasi: Kalau gak ada, buang ke 404
  if (!article) {
    notFound();
  }

  // 4. STRUCTURED DATA (JSON-LD) - The SEO Nuke
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    datePublished: new Date(article.date).toISOString(),
    author: {
      '@type': 'Person',
      name: article.author,
      url: 'https://mesinkasirsolo.com/about'
    },
    publisher: {
      '@type': 'Organization',
      name: 'PT Mesin Kasir Solo',
      logo: {
        '@type': 'ImageObject',
        url: 'https://mesinkasirsolo.com/logo.png' // Pastikan ada aset ini nanti
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://mesinkasirsolo.com/articles/${article.slug}`
    }
  };

  return (
    <>
      {/* Inject JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Render Visual Component */}
      <ArticleDetail article={article} />
    </>
  );
}
