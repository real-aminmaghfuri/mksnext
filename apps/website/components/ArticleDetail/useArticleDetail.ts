
"use client";

import { useMemo, useState } from 'react';
import { MOCK_ARTICLES, MOCK_PRODUCTS } from 'shared';
import { ArticleDetailLogic } from './types';

export const useArticleDetail = (slug: string): ArticleDetailLogic => {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const article = useMemo(() => {
    return MOCK_ARTICLES.find(a => a.slug === slug);
  }, [slug]);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(MOCK_ARTICLES.map(a => a.category))) as string[];
    return ['ALL', ...cats];
  }, []);

  return {
    article,
    sidebarProducts: MOCK_PRODUCTS.slice(0, 3), // Show 3 top products
    categories,
    activeCategory,
    setActiveCategory,
    isLoading: false,
  };
};
