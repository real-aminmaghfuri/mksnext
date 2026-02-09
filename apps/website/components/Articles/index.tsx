
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
       <div className="container mx-auto px-6 pt-32 pb-24">
          
          {/* Header Removed as requested - Direct to Hero Content */}

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
                            variant="ghost" // Base ghost allows us to fully customize styles
                            className="
                                group relative overflow-hidden
                                bg-white dark:bg-zinc-900 
                                border-2 border-brand-500/20 dark:border-brand-500/50 
                                text-brand-600 dark:text-brand-500 
                                hover:border-brand-600 dark:hover:border-brand-500
                                hover:text-white
                                font-black uppercase tracking-widest px-10 py-4 rounded-full 
                                transition-all duration-300 
                                shadow-xl shadow-brand-500/10 dark:shadow-none
                                hover:shadow-brand-600/30 dark:hover:shadow-brand-500/20
                                hover:-translate-y-1
                            "
                        >
                            <span className="relative z-10 flex items-center">
                                <RefreshCw size={18} className="mr-3 transition-transform group-hover:rotate-180" />
                                {text.loadMoreText}
                            </span>
                            <div className="absolute inset-0 bg-brand-600 dark:bg-brand-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
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
