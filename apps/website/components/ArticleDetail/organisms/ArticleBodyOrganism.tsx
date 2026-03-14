import React from 'react';
import { ArticleItem, TOCItem, CommentItem } from 'shared';
import { ArticleTocAtom } from '../atoms/ArticleTocAtom';
import { ArticleContentAtom } from '../atoms/ArticleContentAtom';
import { ArticleRelatedAtom } from '../atoms/ArticleRelatedAtom';
import { ArticleCommentsAtom } from '../atoms/ArticleCommentsAtom';
import { ArticleRightSidebarAtom } from '../atoms/ArticleRightSidebarAtom';
import { ArticleSubscribeWidget } from '../atoms/ArticleSubscribeWidget';
import { ArticleLayoutMolecule } from '../molecules/ArticleLayoutMolecule';

interface ArticleBodyOrganismProps {
  article: ArticleItem;
  processedContent: string;
  toc: TOCItem[];
  activeSectionId: string;
  isContentExpanded: boolean;
  toggleContent: () => void;
  prevArticle: ArticleItem | undefined;
  nextArticle: ArticleItem | undefined;
  comments: CommentItem[];
  isCommentsOpen: boolean;
  toggleComments: () => void;
  submitComment: (data: any) => void;
  relatedArticles: ArticleItem[];
  text: any;
}

/**
 * ArticleBodyOrganism - The main body of the article including content and sidebars.
 */
export const ArticleBodyOrganism: React.FC<ArticleBodyOrganismProps> = ({
  article,
  processedContent,
  toc,
  activeSectionId,
  isContentExpanded,
  toggleContent,
  prevArticle,
  nextArticle,
  comments,
  isCommentsOpen,
  toggleComments,
  submitComment,
  relatedArticles,
  text
}) => {
  return (
    <div className="relative z-20 bg-zinc-50 dark:bg-zinc-950 min-h-screen rounded-t-[40px] -mt-10 shadow-[0_-20px_40px_rgba(0,0,0,0.1)] border-t border-zinc-200 dark:border-zinc-900">
      <div className="container mx-auto px-6 py-16 md:py-20 max-w-[1600px]">
        <ArticleLayoutMolecule
          left={
            <ArticleTocAtom 
              items={toc} 
              activeId={activeSectionId} 
            />
          }
          center={
            <div className="min-w-0">
              <ArticleContentAtom 
                excerpt={article.excerpt} 
                content={processedContent} 
                isExpanded={isContentExpanded} 
                onToggle={toggleContent} 
              />
              <ArticleRelatedAtom prev={prevArticle} next={nextArticle} />
              <div className="mt-16">
                <ArticleCommentsAtom 
                  comments={comments} 
                  isOpen={isCommentsOpen} 
                  onToggle={toggleComments} 
                  onSubmit={submitComment} 
                />
              </div>
            </div>
          }
          right={
            <>
              <ArticleRightSidebarAtom 
                text={text}
                currentCategory={article.category}
                relatedArticles={relatedArticles}
              />
              <ArticleSubscribeWidget />
            </>
          }
        />
      </div>
      {/* Mobile Spacer */}
      <div className="h-20 lg:hidden" />
    </div>
  );
};
