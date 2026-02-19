
import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata, ResolvingMetadata } from 'next';
import { MOCK_ARTICLES, SITE_CONFIG, absoluteUrl } from 'shared';
import { ArticleDetail } from '../../../components/ArticleDetail';
import { processArticleContent } from '../../../utils/contentProcessor'; // The Brain Utility

// Next.js 15 / App Router Compatibility: Params is a Promise
type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// 1. GENERATE STATIC PARAMS (SSG Strategy for Maximum SEO Speed)
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

  const ogImage = article.image; 

  return {
    title: `${article.title} | ${SITE_CONFIG.shortName} Intel`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: absoluteUrl(`/articles/${article.slug}`),
      siteName: SITE_CONFIG.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: article.title }],
      locale: 'id_ID',
      type: 'article',
      authors: [article.author],
      publishedTime: new Date(article.date).toISOString(),
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [ogImage],
      creator: '@kasirsolo',
    },
    alternates: {
      canonical: absoluteUrl(`/articles/${article.slug}`),
    },
    robots: { index: true, follow: true },
  };
}

// 3. SERVER COMPONENT RENDER (The Distribution Center)
export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  
  // A. Fetch Raw Data (Mock DB / Supabase later)
  const article = MOCK_ARTICLES.find((a) => a.slug === slug);
  
  // B. Validation
  if (!article) {
    notFound();
  }

  // C. THE BRAIN SHIFT: Process Content on Server
  // HTML is parsed, IDs injected, and TOC generated HERE.
  // Browser receives ready-to-render HTML. Zero JS overhead for content parsing.
  const { processedContent, toc } = processArticleContent(article.content);

  // D. SEO Schema Injection
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
      url: absoluteUrl('/about')
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/logo.png')
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': absoluteUrl(`/articles/${article.slug}`)
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* 
        E. PROP DRILLING
        Pass the server-processed data to the Client Component.
      */}
      <ArticleDetail 
        article={article} 
        processedContent={processedContent}
        toc={toc}
      />
    </>
  );
}
