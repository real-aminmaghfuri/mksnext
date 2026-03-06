
"use client";
import { useConfig } from 'ui';
import { DICTIONARY } from 'shared';
import { useState, useMemo } from 'react';

export const useKnowledgeBase = () => {
  const { language } = useConfig();
  const text = DICTIONARY[language];
  
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = useMemo(() => {
    if (!searchQuery.trim()) return text.kbPopularArticles;
    
    const q = searchQuery.toLowerCase();
    // In a real app, we would search all articles, but for now we filter the popular ones or mock data
    return text.kbPopularArticles.filter((article: any) => 
      article.title.toLowerCase().includes(q) || 
      article.excerpt.toLowerCase().includes(q)
    );
  }, [text.kbPopularArticles, searchQuery]);

  return {
    heading: text.kbHeading,
    sub: text.kbSub,
    searchPlaceholder: text.kbSearchPlaceholder,
    popularTitle: text.kbPopularTitle,
    categoriesTitle: text.kbCategoriesTitle,
    contactTitle: text.kbContactTitle,
    contactSub: text.kbContactSub,
    contactBtn: text.kbContactBtn,
    categories: text.kbCategories,
    popularArticles: text.kbPopularArticles,
    searchQuery,
    setSearchQuery,
    filteredArticles
  };
};
