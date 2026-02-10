
"use client";

import React from 'react';
import { useArticleDetail } from './useArticleDetail';
import { ArticleHeroAtom } from './atoms/ArticleHeroAtom';
import { ArticleProgressBarAtom } from './atoms/ArticleProgressBarAtom';
import { ArticleTocAtom } from './atoms/ArticleTocAtom';
import { ArticleContentAtom } from './atoms/ArticleContentAtom';
import { ArticleRightSidebarAtom } from './atoms/ArticleRightSidebarAtom';
import { ArticleRelatedAtom } from './atoms/ArticleRelatedAtom';
import { ArticleCommentsAtom } from './atoms/ArticleCommentsAtom';

interface ArticleDetailProps {
  slug: string;
}

export const ArticleDetail: React.FC<ArticleDetailProps> = ({ slug }) => {
  const { 
    article, 
    prevArticle, 
    nextArticle, 
    sidebarProducts, 
    categories, 
    toc,
    comments,
    
    scrollRef,
    scrollTop,
    scrollProgress,
    isContentExpanded,
    isCommentsOpen,
    
    toggleContent,
    toggleComments,
    submitComment,
    closeArticle
  } = useArticleDetail(slug);

  if (!article) return null; // Or 404 Component

  return (
    // FULL PAGE OVERLAY - Z-100 to cover RootLayout Navbar/Footer
    // Attach scrollRef here to listen to the actual scrollable element
    <div 
        ref={scrollRef}
        className="fixed inset-0 z-[100] bg-zinc-50 dark:bg-zinc-950 overflow-y-auto custom-scrollbar"
    >
       
       <ArticleProgressBarAtom progress={scrollProgress} />
       
       <ArticleHeroAtom 
          article={article} 
          scrollTop={scrollTop}
          onClose={closeArticle} 
       />

       {/* Spacer for Hero when not shrunk (50vh/60vh) + Buffer */}
       {/* This spacer pushes the content down to the initial visible fold position */}
       <div className="h-[50vh] md:h-[60vh] w-full pointer-events-none" />

       {/* Main Content Area - White/Dark Paper Background */}
       <div className="relative z-20 bg-zinc-50 dark:bg-zinc-950 min-h-screen rounded-t-[40px] -mt-10 shadow-[0_-20px_40px_rgba(0,0,0,0.1)] border-t border-zinc-200 dark:border-zinc-900">
          
          <div className="container mx-auto px-6 py-16 md:py-20">
             <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                {/* LEFT: 20% (TOC & Share) */}
                <div className="hidden lg:block lg:col-span-3">
                   <ArticleTocAtom items={toc} />
                </div>

                {/* CENTER: 60% (Main Content) */}
                <div className="lg:col-span-6">
                   <ArticleContentAtom 
                      content={article.content} 
                      isExpanded={isContentExpanded} 
                      onToggle={toggleContent} 
                   />

                   {/* Post-Article Navigation */}
                   <ArticleRelatedAtom prev={prevArticle} next={nextArticle} />

                   {/* Discussion Section */}
                   <div className="mt-16">
                      <ArticleCommentsAtom 
                         comments={comments} 
                         isOpen={isCommentsOpen} 
                         onToggle={toggleComments} 
                         onSubmit={submitComment} 
                      />
                   </div>
                </div>

                {/* RIGHT: 20% (Widgets) */}
                <div className="hidden lg:block lg:col-span-3">
                   <ArticleRightSidebarAtom 
                      categories={categories} 
                      products={sidebarProducts} 
                   />
                </div>

             </div>
          </div>

          {/* Mobile Spacer */}
          <div className="h-20 lg:hidden" />
       </div>

    </div>
  );
};
