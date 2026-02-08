
import { ArticleItem, ProductItem } from 'shared';

export interface ArticlesContent {
  title: string;
  sub: string;
  searchPlaceholder: string;
  loadMoreText: string;
  sidebarTitle: string;
  sidebarProductTitle: string;
}

export interface ArticleLogic {
  text: ArticlesContent;
  heroArticle: ArticleItem;
  displayItems: (ArticleItem | { type: 'PRODUCT'; product: ProductItem })[]; // Mixed array
  categories: string[];
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
  loadMore: () => void;
  hasMore: boolean;
  sidebarProducts: ProductItem[];
}
