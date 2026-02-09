
import { ArticleItem, ProductItem } from 'shared';
import { LucideIcon } from 'lucide-react';

export interface ServiceAdItem {
  title: string;
  desc: string;
  iconName: 'CODE' | 'CHART' | 'WRENCH'; // Simple identifier for icon mapping
  cta: string;
}

export type FeedItem = 
  | { type: 'ARTICLE'; data: ArticleItem }
  | { type: 'PRODUCT'; data: ProductItem }
  | { type: 'SERVICE'; data: ServiceAdItem };

export interface ArticlesContent {
  searchPlaceholder: string;
  loadMoreText: string;
  sidebarTitle: string;
  sidebarProductTitle: string;
}

export interface ArticleLogic {
  text: ArticlesContent;
  heroArticle: ArticleItem;
  displayItems: FeedItem[];
  categories: string[];
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
  loadMore: () => void;
  hasMore: boolean;
  sidebarProducts: ProductItem[];
}
