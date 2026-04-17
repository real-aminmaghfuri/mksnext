
import type { Metadata } from 'next';
import { SITE_CONFIG, absoluteUrl, ArticleItem } from 'shared';

export function getArticleMetadata(article: ArticleItem | undefined): Metadata {
  if (!article) {
    return {
      title: '404 - Artikel Hilang | PT Mesin Kasir Solo',
      description: 'Halaman yang lo cari udah gak ada atau dipindah.',
      robots: { index: false, follow: false }
    };
  }

  const ogImage = article.coverImage; 

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
      authors: [article.authorName],
      publishedTime: new Date(article.publishedAt || article.createdAt || '').toISOString(),
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
