
"use client";

import React from 'react';
import { useArticles } from './useArticles';
import { HeroArticleAtom } from './atoms/HeroArticleAtom';
import { SidebarAtom } from './atoms/SidebarAtom';
import { ArticleListAtom } from './atoms/ArticleListAtom';
import { Button } from 'ui';
import { RefreshCw } from 'lucide-react';

export const Articles: React.FC = () => {
  const { 
      text, 
      heroArticle, 
      displayItems, 
      categories, 
      activeCategory, 
      setActiveCategory,
      loadMore,
      hasMore,
      sidebarProducts 
  } = useArticles();

  return (
    <section className="min-h-screen bg-zinc-50 dark:bg-black transition-colors duration-500">
       <div className="container mx-auto px-6 py-24">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
             <h1 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter mb-4">
                {text.title}
             </h1>
             <p className="text-zinc-600 dark:text-zinc-400 text-lg">
                {text.sub}
             </p>
          </div>

          {/* Hero Article */}
          <HeroArticleAtom article={heroArticle} />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
             
             {/* Main Content (75%) */}
             <div className="lg:col-span-3">
                 <ArticleListAtom items={displayItems} />

                 {/* Load More Button */}
                 {hasMore && (
                    <div className="flex justify-center mt-16">
                        <Button 
                            onClick={loadMore} 
                            variant="ghost" 
                            className="border-2 border-brand-500 text-brand-600 dark:text-brand-500 hover:bg-brand-600 hover:text-white font-bold uppercase tracking-widest px-8 py-3 rounded-full transition-all duration-300 shadow-lg shadow-brand-500/10 hover:shadow-brand-500/40"
                        >
                            <RefreshCw size={16} className="mr-2" />
                            {text.loadMoreText}
                        </Button>
                    </div>
                 )}
             </div>

             {/* Sidebar (25%) */}
             <div className="lg:col-span-1">
                 <SidebarAtom 
                    categories={categories}
                    activeCategory={activeCategory}
                    onCategoryChange={setActiveCategory}
                    products={sidebarProducts}
                    text={{
                       searchPlaceholder: text.searchPlaceholder,
                       sidebarTitle: text.sidebarTitle,
                       productTitle: text.sidebarProductTitle
                    }}
                 />
             </div>

          </div>

       </div>
    </section>
  );
};
