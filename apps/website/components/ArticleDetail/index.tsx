
"use client";

import React from 'react';
import { ArticleItem, TOCItem } from 'shared'; 
import { useArticleDetail } from './useArticleDetail';
import { ArticleBodyOrganism } from './organisms/ArticleBodyOrganism';
import { ArticleOverlayOrganism } from './organisms/ArticleOverlayOrganism';

// Strict Interface ensuring we receive the processed data
interface ArticleDetailProps {
  article: ArticleItem;
  processedContent: string;
  toc: TOCItem[];
}

/**
 * ArticleDetail - Orchestrates the article detail UI.
 * Now acts as a clean container for organisms and sub-hooks.
 */
export const ArticleDetail: React.FC<ArticleDetailProps> = ({ 
  article, 
  processedContent: injectedContent, 
  toc: injectedToc 
}) => {
  // Hook acts as the State Manager, receiving data from props
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
    <ArticleOverlayOrganism
      scrollRef={scrollRef}
      scrollProgress={scrollProgress}
      scrollTop={scrollTop}
      article={article}
      onClose={closeArticle}
    >
      <ArticleBodyOrganism 
        article={article}
        processedContent={processedContent}
        toc={toc}
        activeSectionId={activeSectionId}
        isContentExpanded={isContentExpanded}
        toggleContent={toggleContent}
        prevArticle={prevArticle}
        nextArticle={nextArticle}
        comments={comments}
        isCommentsOpen={isCommentsOpen}
        toggleComments={toggleComments}
        submitComment={submitComment}
        relatedArticles={relatedArticles}
        text={text}
      />
    </ArticleOverlayOrganism>
  );
};

