
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
import { ArticleSupplyDropAtom } from './atoms/ArticleSupplyDropAtom'; // NEW IMPORT

interface ArticleDetailProps {
  slug: string;
}

export const ArticleDetail: React.FC<ArticleDetailProps> = ({ slug }) => {
  const { 
    article,
    processedContent, // Use processed content with IDs 
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
    activeSectionId, // Use active section ID
    
    toggleContent,
    toggleComments,
    submitComment,
    closeArticle
  } = useArticleDetail(slug);

  if (!article) return null; 

  return (
    // FULL PAGE OVERLAY
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

       {/* Spacer for Hero */}
       <div className="h-[50vh] md:h-[60vh] w-full" />

       {/* Main Content Area */}
       <div className="relative z-20 bg-zinc-50 dark:bg-zinc-950 min-h-screen rounded-t-[40px] -mt-10 shadow-[0_-20px_40px_rgba(0,0,0,0.1)] border-t border-zinc-200 dark:border-zinc-900">
          
          <div className="container mx-auto px-6 py-16 md:py-20 max-w-[1600px]">
             {/* 
                GRID CALIBRATION: 18fr - 64fr - 18fr 
             */}
             <div className="grid grid-cols-1 lg:grid-cols-[18fr_64fr_18fr] gap-8 xl:gap-12">
                
                {/* LEFT SIDEBAR: TOC + Supply Drop */}
                <div className="hidden lg:block">
                   <div className="sticky top-32">
                      <ArticleTocAtom 
                        items={toc} 
                        activeId={activeSectionId} // Pass Active ID
                      />
                      {/* MOVED SUPPLY DROP HERE */}
                      <ArticleSupplyDropAtom products={sidebarProducts} />
                   </div>
                </div>

                {/* CENTER CONTENT */}
                <div className="min-w-0"> 
                   <ArticleContentAtom 
                      content={processedContent} // Pass Content with IDs
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

                {/* RIGHT SIDEBAR: Categories Only */}
                <div className="hidden lg:block">
                   <div className="sticky top-32">
                      <ArticleRightSidebarAtom 
                          categories={categories} 
                          // Products removed from here
                      />
                   </div>
                </div>

             </div>
          </div>

          {/* Mobile Spacer */}
          <div className="h-20 lg:hidden" />
       </div>

    </div>
  );
};
