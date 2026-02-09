
"use client";

import React from 'react';
import { useArticleDetail } from './useArticleDetail';
import { ArticleHeaderAtom } from './atoms/ArticleHeaderAtom';
import { ArticleBodyAtom } from './atoms/ArticleBodyAtom';
import { ShareWidgetAtom } from './atoms/ShareWidgetAtom';
import { ArticleCtaAtom } from './atoms/ArticleCtaAtom';
import { SidebarAtom } from '../Articles/atoms/SidebarAtom';
import { DICTIONARY } from 'shared';
import { useConfig } from 'ui';

interface ArticleDetailProps {
  slug: string;
}

export const ArticleDetail: React.FC<ArticleDetailProps> = ({ slug }) => {
  const { article, sidebarProducts, categories, activeCategory, setActiveCategory } = useArticleDetail(slug);
  const { language } = useConfig();
  
  // Quick fix: Direct dictionary access since hook might not provide text directly for detail
  // In a real app, extend the dictionary. Here we assume text is available or hardcode fallbacks.
  const text = {
    searchPlaceholder: "Cari data...",
    sidebarTitle: "Radar Kategori",
    productTitle: "Amunisi Cadangan"
  };

  if (!article) {
    return (
        <div className="min-h-screen pt-40 text-center">
            <h1 className="text-4xl font-black text-zinc-900 dark:text-white">404</h1>
            <p className="text-zinc-500">Artikel tidak ditemukan di arsip intel.</p>
        </div>
    );
  }

  return (
    <section className="min-h-screen bg-zinc-50 dark:bg-black transition-colors duration-500">
       <div className="container mx-auto px-6 pt-32 pb-24">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
             
             {/* Left: Share (Desktop) - 1 Col */}
             <div className="hidden lg:block lg:col-span-1">
                <ShareWidgetAtom />
             </div>

             {/* Center: Content - 8 Cols */}
             <div className="lg:col-span-7">
                 <ArticleHeaderAtom article={article} />
                 <ArticleBodyAtom content={article.content} />
                 <ArticleCtaAtom />
             </div>

             {/* Right: Sidebar - 4 Cols */}
             <div className="lg:col-span-4 pl-0 lg:pl-8">
                 <SidebarAtom 
                    categories={categories}
                    activeCategory={activeCategory}
                    onCategoryChange={setActiveCategory}
                    products={sidebarProducts}
                    text={text}
                 />
             </div>

          </div>

       </div>
    </section>
  );
};
