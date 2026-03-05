
export interface ProductItem {
  id: number;
  name: string;
  price: number;
  image: string; // Thumbnail
  gallery: string[]; // Multi-image support
  desc: string; // Short desc
  review: string; // Long narrative
  specs: string[];
  inBox: string[];
  weight: string;
  dimensions: string;
  tag?: string;
  category: 'ANDROID' | 'PC' | 'PERIPHERALS'; 
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: 'PHYSICAL' | 'DIGITAL';
  tag: string;
  desc: string;
  image: string;
  value?: string; // New: Project Value
  duration?: string; // New: Project Duration
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
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  author: string;
  image: string;
  readTime: string;
  isFeatured?: boolean;
}

export type IndustryTag = 'RETAIL' | 'FNB' | 'SERVICES' | 'HEALTH' | 'CORP' | 'EDU' | 'GOV' | 'FRANCHISE';

export type IndustrySlug = 'retail' | 'fnb' | 'services' | 'health' | 'corporate' | 'education' | 'government' | 'franchise';

export interface IndustryData {
  slug: IndustrySlug;
  tag: IndustryTag;
  label: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero: {
    title: string;
    subtitle: string;
  };
}

export interface SolutionItem {
  id: number;
  title: string;
  industryTag: IndustryTag;
  desc: string;
  image: string;
  features: string[];
}
