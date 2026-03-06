
export interface KbCategory {
  id: string;
  title: string;
  icon: string;
  articleCount: number;
}

export interface KbArticle {
  id: string;
  title: string;
  categoryId: string;
  excerpt: string;
  date: string;
}

export interface KbDictionary {
  kbHeading: string;
  kbSub: string;
  kbSearchPlaceholder: string;
  kbPopularTitle: string;
  kbCategoriesTitle: string;
  kbContactTitle: string;
  kbContactSub: string;
  kbContactBtn: string;
  kbCategories: KbCategory[];
  kbPopularArticles: KbArticle[];
}
