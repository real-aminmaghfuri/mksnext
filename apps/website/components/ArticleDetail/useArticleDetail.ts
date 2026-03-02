
"use client";

import { useMemo } from 'react';
import { MOCK_PRODUCTS, TOCItem, ArticleItem, DICTIONARY, MOCK_ARTICLES } from 'shared';
import { ArticleDetailLogic } from './types';
import { useConfig } from 'ui';
import { useArticleScrollSpy } from './hooks/useArticleScrollSpy';
import { useArticleNavigation } from './hooks/useArticleNavigation';
import { useArticleActions } from './hooks/useArticleActions';
import { MOCK_COMMENTS } from './data';

/**
 * useArticleDetail - Orchestrates sub-hooks for article detail logic.
 * Separates scroll, navigation, and UI actions into modular hooks.
 */
export const useArticleDetail = (
  article: ArticleItem, 
  processedContent: string, 
  toc: TOCItem[]
): ArticleDetailLogic & { relatedArticles: ArticleItem[], text: any } => {
  const { language } = useConfig();
  const text = DICTIONARY[language];
  
  // 1. Logic Extraction
  const scrollSpy = useArticleScrollSpy(toc);
  const navigation = useArticleNavigation(article.id);
  const actions = useArticleActions();

  // 2. Derived Data
  const categories = useMemo(() => 
    Array.from(new Set(MOCK_ARTICLES.map(a => a.category))) as string[]
  , []);

  const sidebarProducts = useMemo(() => 
    MOCK_PRODUCTS.slice(0, 2)
  , []);

  return {
    // Data Passthrough & Derived
    article,
    processedContent,
    toc,
    categories,
    sidebarProducts,
    comments: MOCK_COMMENTS,
    text,
    
    // Navigation Logic
    ...navigation,
    
    // Scroll Logic
    ...scrollSpy,
    
    // UI Actions & States
    ...actions
  };
};

