/**
 * CMS & Website Specific Types
 */

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

export interface PortfolioItem {
  id: number;
  title: string;
  category: 'PHYSICAL' | 'DIGITAL';
  tag: string;
  desc: string;
  image: string;
  value?: string;
  duration?: string;
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

export interface SolutionItem {
  id: number;
  title: string;
  industryTag: IndustryTag;
  desc: string;
  image: string;
  features: string[];
}
