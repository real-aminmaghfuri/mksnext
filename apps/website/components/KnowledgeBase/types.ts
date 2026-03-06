
import { KbCategory, KbArticle } from 'shared';

export interface KbContent {
  heading: string;
  sub: string;
  searchPlaceholder: string;
  popularTitle: string;
  categoriesTitle: string;
  contactTitle: string;
  contactSub: string;
  contactBtn: string;
  categories: KbCategory[];
  popularArticles: KbArticle[];
}
