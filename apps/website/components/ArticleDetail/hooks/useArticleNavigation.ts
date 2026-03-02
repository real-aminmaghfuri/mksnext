"use client";

import { useMemo } from 'react';
import { MOCK_ARTICLES, ArticleItem } from 'shared';

/**
 * useArticleNavigation - Hook to manage Prev/Next article logic and Related Articles.
 * @param articleId - The ID of the current article.
 */
export function useArticleNavigation(articleId: number) {
  const currentIndex = MOCK_ARTICLES.findIndex(a => a.id === articleId);
  
  const prevArticle = currentIndex > 0 
    ? MOCK_ARTICLES[currentIndex - 1] 
    : MOCK_ARTICLES[MOCK_ARTICLES.length - 1];
    
  const nextArticle = currentIndex < MOCK_ARTICLES.length - 1 
    ? MOCK_ARTICLES[currentIndex + 1] 
    : MOCK_ARTICLES[0];

  const relatedArticles = useMemo(() => {
    return MOCK_ARTICLES
      .filter(a => a.id !== articleId)
      .slice(0, 4);
  }, [articleId]);

  return {
    prevArticle,
    nextArticle,
    relatedArticles
  };
}
