
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
