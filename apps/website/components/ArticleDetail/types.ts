
import { ArticleItem, ProductItem } from 'shared';

export interface ArticleDetailLogic {
  article: ArticleItem | undefined;
  sidebarProducts: ProductItem[];
  categories: string[];
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
  isLoading: boolean;
}
