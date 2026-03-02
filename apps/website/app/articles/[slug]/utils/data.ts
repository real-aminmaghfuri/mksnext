
import { MOCK_ARTICLES, ArticleItem } from 'shared';

export async function getArticleBySlug(slug: string): Promise<ArticleItem | undefined> {
  // In the future, this will fetch from Supabase
  return MOCK_ARTICLES.find((a) => a.slug === slug);
}

export async function getAllArticleSlugs(): Promise<{ slug: string }[]> {
  return MOCK_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}
