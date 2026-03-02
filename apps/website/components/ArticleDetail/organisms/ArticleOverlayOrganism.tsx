import React from 'react';
import { ArticleProgressBarAtom } from '../atoms/ArticleProgressBarAtom';
import { ArticleHeroAtom } from '../atoms/ArticleHeroAtom';
import { ArticleItem } from 'shared';

interface ArticleOverlayOrganismProps {
  scrollRef: React.RefObject<HTMLDivElement>;
  scrollProgress: number;
  scrollTop: number;
  article: ArticleItem;
  onClose: () => void;
  children: React.ReactNode;
}

/**
 * ArticleOverlayOrganism - The full-page overlay for the article detail view.
 */
export const ArticleOverlayOrganism: React.FC<ArticleOverlayOrganismProps> = ({
  scrollRef,
  scrollProgress,
  scrollTop,
  article,
  onClose,
  children
}) => {
  return (
    <div 
      ref={scrollRef}
      className="fixed inset-0 z-[100] bg-zinc-50 dark:bg-zinc-950 overflow-y-auto custom-scrollbar"
    >
      <ArticleProgressBarAtom progress={scrollProgress} />
      
      <ArticleHeroAtom 
        article={article} 
        scrollTop={scrollTop}
        onClose={onClose} 
      />

      {/* Spacer for Hero */}
      <div className="h-[50vh] md:h-[60vh] w-full" />

      {children}
    </div>
  );
};
