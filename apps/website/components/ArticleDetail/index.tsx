
"use client";

import React from 'react';
import { ArticleItem, TOCItem } from 'shared'; 
import { useArticleDetail } from './useArticleDetail';
import { ArticleHeroAtom } from './atoms/ArticleHeroAtom';
import { ArticleProgressBarAtom } from './atoms/ArticleProgressBarAtom';
import { ArticleTocAtom } from './atoms/ArticleTocAtom';
import { ArticleContentAtom } from './atoms/ArticleContentAtom';
import { ArticleRightSidebarAtom } from './atoms/ArticleRightSidebarAtom';
import { ArticleRelatedAtom } from './atoms/ArticleRelatedAtom';
import { ArticleCommentsAtom } from './atoms/ArticleCommentsAtom';
import { ArticleSubscribeWidget } from './atoms/ArticleSubscribeWidget';

// Strict Interface ensuring we receive the processed data
interface ArticleDetailProps {
  article: ArticleItem;
  processedContent: string;
  toc: TOCItem[];
}

export const ArticleDetail: React.FC<ArticleDetailProps> = ({ article, processedContent: injectedContent, toc: injectedToc }) => {
  // Hook acts as the State Manager, receiving data from props (Step 2)
  const { 
    processedContent, 
    prevArticle, 
    nextArticle, 
    relatedArticles, 
    toc,
    comments,
    text,
    
    scrollRef,
    scrollTop,
    scrollProgress,
    isContentExpanded,
    isCommentsOpen,
    activeSectionId, 
    
    toggleContent,
    toggleComments,
    submitComment,
    closeArticle
  } = useArticleDetail(article, injectedContent, injectedToc);

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
                
                {/* LEFT SIDEBAR: TOC + SUBSCRIBE */}
                <div className="hidden lg:block">
                   <div className="sticky top-32 space-y-10">
                      <ArticleTocAtom 
                        items={toc} 
                        activeId={activeSectionId} 
                      />
                      <ArticleSubscribeWidget />
                   </div>
                </div>

                {/* CENTER CONTENT */}
                <div className="min-w-0"> 
                   <ArticleContentAtom 
                      excerpt={article.excerpt} 
                      content={processedContent} 
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

                {/* RIGHT SIDEBAR: Search + Categories + Related */}
                <div className="hidden lg:block">
                   <div className="sticky top-32">
                      <ArticleRightSidebarAtom 
                          text={text}
                          currentCategory={article.category}
                          relatedArticles={relatedArticles}
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
