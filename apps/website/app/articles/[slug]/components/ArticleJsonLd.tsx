
import React from 'react';
import { SITE_CONFIG, absoluteUrl, ArticleItem } from 'shared';

interface ArticleJsonLdProps {
  article: ArticleItem;
}

export const ArticleJsonLd: React.FC<ArticleJsonLdProps> = ({ article }) => {
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
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};
