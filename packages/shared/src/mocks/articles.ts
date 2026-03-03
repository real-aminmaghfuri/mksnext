
import { ArticleItem } from '../types';
import { DATA_SOURCE } from './articles/data';
import { getArticleContent } from './articles/visual';

// Re-export for compatibility
export { ARTICLE_CATEGORIES, AUTHORS } from './articles/constants';

// --- MAIN MOCK EXPORT ---
export const MOCK_ARTICLES: ArticleItem[] = DATA_SOURCE.map(item => ({
  ...item,
  content: getArticleContent(item.id)
}));
