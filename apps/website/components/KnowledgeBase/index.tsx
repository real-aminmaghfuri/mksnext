
"use client";
import React from 'react';
import { useKnowledgeBase } from './hooks/useKnowledgeBase';
import { KbHeaderAtom } from './atoms/KbHeaderAtom';
import { KbCategoriesAtom } from './atoms/KbCategoriesAtom';
import { KbPopularArticlesAtom } from './atoms/KbPopularArticlesAtom';
import { KbContactAtom } from './atoms/KbContactAtom';

export const KnowledgeBase: React.FC = () => {
  const logic = useKnowledgeBase();

  return (
    <section className="min-h-screen bg-zinc-50 dark:bg-black transition-colors duration-500">
      <KbHeaderAtom 
        heading={logic.heading}
        sub={logic.sub}
        searchPlaceholder={logic.searchPlaceholder}
        searchQuery={logic.searchQuery}
        setSearchQuery={logic.setSearchQuery}
      />
      
      <KbCategoriesAtom 
        title={logic.categoriesTitle}
        categories={logic.categories}
      />
      
      <KbPopularArticlesAtom 
        title={logic.popularTitle}
        articles={logic.filteredArticles}
      />
      
      <KbContactAtom 
        title={logic.contactTitle}
        sub={logic.contactSub}
        btn={logic.contactBtn}
      />
    </section>
  );
};
