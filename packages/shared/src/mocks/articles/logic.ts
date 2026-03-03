
import { DATA_SOURCE } from './data';
import { ARTICLE_CATEGORIES } from './constants';

export const getFeaturedArticles = () => {
  return DATA_SOURCE.filter(article => article.isFeatured);
};

export const getArticlesByCategory = (category: string) => {
  return DATA_SOURCE.filter(article => article.category === category);
};

export const getArticleBySlug = (slug: string) => {
  return DATA_SOURCE.find(article => article.slug === slug);
};

export const getLatestArticles = (limit: number = 5) => {
  return [...DATA_SOURCE].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  }).slice(0, limit);
};
