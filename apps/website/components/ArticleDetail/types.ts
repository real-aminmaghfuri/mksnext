
import { ArticleItem, ProductItem, CommentItem, TOCItem } from 'shared';

export interface ArticleDetailLogic {
  article: ArticleItem | undefined;
  prevArticle: ArticleItem | undefined;
  nextArticle: ArticleItem | undefined;
  sidebarProducts: ProductItem[];
  categories: string[];
  toc: TOCItem[];
  comments: CommentItem[];
  
  // States
  scrollProgress: number;
  isHeroShrunk: boolean;
  isContentExpanded: boolean;
  isCommentsOpen: boolean;
  
  // Actions
  toggleContent: () => void;
  toggleComments: () => void;
  submitComment: (data: any) => void;
  closeArticle: () => void;
}
