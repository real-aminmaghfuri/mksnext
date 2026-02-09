
export interface ProductItem {
  id: number;
  name: string;
  price: number;
  image: string;
  desc: string;
  tag?: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: 'PHYSICAL' | 'DIGITAL';
  tag: string;
  desc: string;
  image: string;
}

export interface CommentItem {
  id: number;
  name: string;
  url?: string;
  content: string;
  date: string;
  avatar: string;
}

export interface TOCItem {
  id: string;
  text: string;
}

export interface ArticleItem {
  id: number;
  slug: string; // Added for routing
  title: string;
  excerpt: string;
  content: string; // Added for full body content
  category: string;
  date: string;
  author: string;
  image: string;
  readTime: string;
  isFeatured?: boolean;
}

export type IndustryTag = 'RETAIL' | 'FNB' | 'SERVICES' | 'HEALTH' | 'CORP' | 'EDU';

export interface SolutionItem {
  id: number;
  title: string;
  industryTag: IndustryTag;
  desc: string;
  image: string;
  features: string[];
}
