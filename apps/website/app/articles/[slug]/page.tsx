
import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata, ResolvingMetadata } from 'next';
import { ArticleDetail } from '../../../components/ArticleDetail';
import { processArticleContent } from '../../../utils/contentProcessor';
import { ArticlePageProps } from './types';
import { getArticleBySlug, getAllArticleSlugs } from './utils/data';
import { getArticleMetadata } from './utils/metadata';
import { ArticleJsonLd } from './components/ArticleJsonLd';

// 1. GENERATE STATIC PARAMS
export async function generateStaticParams() {
  return getAllArticleSlugs();
}

// 2. DYNAMIC METADATA
export async function generateMetadata(
  { params }: ArticlePageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  return getArticleMetadata(article);
}

// 3. SERVER COMPONENT RENDER
export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  
  if (!article) {
    notFound();
  }

  // Process Content on Server
  const { processedContent, toc } = processArticleContent(article.content);

  return (
    <>
      <ArticleJsonLd article={article} />
      
      <ArticleDetail 
        article={article} 
        processedContent={processedContent}
        toc={toc}
      />
    </>
  );
}
