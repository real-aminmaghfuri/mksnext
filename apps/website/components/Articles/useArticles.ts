
"use client";

import { useState, useMemo, useEffect } from 'react';
import { useConfig } from 'ui';
import { DICTIONARY, MOCK_ARTICLES, MOCK_PRODUCTS, ArticleItem, ProductItem } from 'shared';
import { ArticleLogic } from './types';

export const useArticles = (): ArticleLogic => {
  const { language } = useConfig();
  const text = DICTIONARY[language];

  const [activeCategory, setActiveCategory] = useState('ALL');
  const [page, setPage] = useState(1);
  const itemsPerPage = 12; // 11 Articles + 1 Product Card

  // Extract Categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(MOCK_ARTICLES.map(a => a.category)));
    return ['ALL', ...cats];
  }, []);

  // Filter Articles
  const filteredArticles = useMemo(() => {
    if (activeCategory === 'ALL') return MOCK_ARTICLES;
    return MOCK_ARTICLES.filter(a => a.category === activeCategory);
  }, [activeCategory]);

  // Featured Article (First one)
  const heroArticle = MOCK_ARTICLES[0];

  // Remaining Articles (Exclude hero from grid if 'ALL' is selected, otherwise show all relevant to category)
  // To keep it simple for the grid logic, we will treat the grid as separate list.
  // Actually, let's keep hero separate.
  const gridArticlesSource = useMemo(() => {
     if(activeCategory === 'ALL') {
         return filteredArticles.filter(a => a.id !== heroArticle.id);
     }
     return filteredArticles;
  }, [filteredArticles, heroArticle, activeCategory]);

  // Pagination & Mixing Logic
  const displayItems = useMemo(() => {
    // Determine how many articles to show based on pages
    // Note: We want 11 articles per page to allow 1 product slot = 12 items total
    const articlesNeeded = page * 11;
    const slicedArticles = gridArticlesSource.slice(0, articlesNeeded);

    // Mix in products
    // We will insert 1 product for every 11 articles.
    const mixedList: (ArticleItem | { type: 'PRODUCT'; product: ProductItem })[] = [];
    
    let productIndex = 0;
    slicedArticles.forEach((article, index) => {
        mixedList.push(article);
        // Insert product after every 7th item in the current batch (just an arbitrary position that looks good in grid)
        // Or strictly at the end of the batch?
        // Let's insert it at index 4 of every page (5th position) to break the flow nicely
        if ((index + 1) % 7 === 0) {
            const prod = MOCK_PRODUCTS[productIndex % MOCK_PRODUCTS.length];
            mixedList.push({ type: 'PRODUCT', product: prod });
            productIndex++;
        }
    });

    return mixedList;
  }, [gridArticlesSource, page]);

  const hasMore = (page * 11) < gridArticlesSource.length;

  const loadMore = () => {
    setPage(prev => prev + 1);
  };

  return {
    text: {
      title: text.blogTitle,
      sub: text.blogSub,
      searchPlaceholder: text.blogSearchPlaceholder,
      loadMoreText: text.blogLoadMore,
      sidebarTitle: text.blogSidebarTitle,
      sidebarProductTitle: text.blogSidebarProductTitle
    },
    heroArticle,
    displayItems,
    categories,
    activeCategory,
    setActiveCategory,
    loadMore,
    hasMore,
    sidebarProducts: MOCK_PRODUCTS.slice(0, 2)
  };
};
