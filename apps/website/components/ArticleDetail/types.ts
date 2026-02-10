
import { RefObject } from 'react';
import { ArticleItem, ProductItem, CommentItem, TOCItem } from 'shared';

export interface ArticleDetailLogic {
  article: ArticleItem | undefined;
  processedContent: string; // New: Content with injected IDs
  prevArticle: ArticleItem | undefined;
  nextArticle: ArticleItem | undefined;
  sidebarProducts: ProductItem[];
  categories: string[];
  toc: TOCItem[];
  comments: CommentItem[];
  
  // States
  scrollRef: RefObject<HTMLDivElement | null>;
  scrollTop: number;
  scrollProgress: number;
  isHeroShrunk: boolean;
  isContentExpanded: boolean;
  isCommentsOpen: boolean;
  activeSectionId: string; // New: For TOC highlighting
  
  // Actions
  toggleContent: () => void;
  toggleComments: () => void;
  submitComment: (data: any) => void;
  closeArticle: () => void;
}
