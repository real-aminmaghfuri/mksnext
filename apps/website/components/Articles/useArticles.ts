
"use client";

import { useState, useMemo } from 'react';
import { useConfig } from 'ui';
import { DICTIONARY, MOCK_ARTICLES, MOCK_PRODUCTS } from 'shared';
import { ArticleLogic, FeedItem, ServiceAdItem } from './types';

// Mock Services for the Feed Ads
const MOCK_SERVICES: ServiceAdItem[] = [
  {
    title: "Jasa Website Custom",
    desc: "Bikin brand lo keliatan mahal. Website company profile atau toko online performa tinggi.",
    iconName: 'CODE',
    cta: "KONSULTASI WEB"
  },
  {
    title: "Konsultan SEO Jahat",
    desc: "Dominasi halaman 1 Google. Teknik SEO organik & barbar buat nyulik trafik kompetitor.",
    iconName: 'CHART',
    cta: "AUDIT GRATIS"
  },
  {
    title: "Servis Mesin Kasir",
    desc: "Hardware rusak pas toko rame? Tim teknis kita siap meluncur benerin masalah lo.",
    iconName: 'WRENCH',
    cta: "PANGGIL TEKNISI"
  }
];

export const useArticles = (): ArticleLogic => {
  const { language } = useConfig();
  const text = DICTIONARY[language];

  const [activeCategory, setActiveCategory] = useState('ALL');
  const [page, setPage] = useState(1);
  
  // CONFIGURATION
  const ARTICLES_PER_PAGE = 7; 

  // Extract Categories
  const categories: string[] = useMemo(() => {
    const cats = Array.from(new Set(MOCK_ARTICLES.map(a => a.category))) as string[];
    return ['ALL', ...cats];
  }, []);

  // Filter Articles
  const filteredArticles = useMemo(() => {
    if (activeCategory === 'ALL') return MOCK_ARTICLES;
    return MOCK_ARTICLES.filter(a => a.category === activeCategory);
  }, [activeCategory]);

  // Featured Article (Always the newest one / first one)
  const heroArticle = filteredArticles[0];

  // Grid Pool (Exclude hero)
  const gridArticlesSource = useMemo(() => {
     return filteredArticles.filter(a => a.id !== heroArticle.id);
  }, [filteredArticles, heroArticle]);

  // Mixing Logic
  const displayItems = useMemo(() => {
    const articlesNeeded = page * ARTICLES_PER_PAGE;
    const slicedArticles = gridArticlesSource.slice(0, articlesNeeded);

    const mixedList: FeedItem[] = [];
    
    // We iterate through the sliced articles and inject ads
    slicedArticles.forEach((article, index) => {
        mixedList.push({ type: 'ARTICLE', data: article });

        // Calculate current batch index (0, 1, 2...)
        const batchIndex = Math.floor(index / ARTICLES_PER_PAGE);
        // Position within the current batch (0 to 6)
        const positionInBatch = index % ARTICLES_PER_PAGE;

        // INJECTION LOGIC:
        // Insert Product at Index 2 (3rd slot visually)
        if (positionInBatch === 2) {
            const prod = MOCK_PRODUCTS[batchIndex % MOCK_PRODUCTS.length];
            mixedList.push({ type: 'PRODUCT', data: prod });
        }

        // Insert Service at Index 5 (6th slot visually)
        if (positionInBatch === 5) {
            const serv = MOCK_SERVICES[batchIndex % MOCK_SERVICES.length];
            mixedList.push({ type: 'SERVICE', data: serv });
        }
    });

    return mixedList;
  }, [gridArticlesSource, page]);

  const hasMore = (page * ARTICLES_PER_PAGE) < gridArticlesSource.length;

  const loadMore = () => {
    setPage(prev => prev + 1);
  };

  return {
    text: {
      searchPlaceholder: text.blogSearchPlaceholder,
      loadMoreText: text.blogLoadMore,
      sidebarTitle: text.blogSidebarTitle,
      sidebarProductTitle: text.blogSidebarProductTitle,
      catAll: text.blogCatAll,
      catBiz: text.blogCatBiz,
      catTech: text.blogCatTech
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
