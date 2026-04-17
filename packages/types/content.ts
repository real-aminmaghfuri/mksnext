/**
 * Content & Media Types
 */

export interface Article {
  id?: number;
  uuid?: string;
  title: string;
  slug: string;
  content: string; // HTML or Markdown
  excerpt: string;
  coverImage: string;
  category: string;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  authorId: string;
  authorName: string;
  publishedAt?: string;
  createdAt?: string;
  updatedAt?: string;
}

/**
 * ArticleCatalogue (Website focus with readTime)
 */
export interface ArticleCatalogue extends Article {
  readTime: string;
  isFeatured?: boolean;
}

export interface MediaAsset {
  id: string; // Public ID from Cloudinary
  url: string; // Optimized URL
  originalUrl: string; // Raw URL
  filename: string;
  format: string;
  size: number;
  alt: string; 
  caption: string; 
  uploadedAt: string;
}

export interface AIKeywordResearch {
  keyword: string;
  volume: number;
  difficulty: number; // 0-100
  level: 'LOW' | 'MEDIUM';
  suggestedTitle: string;
  reasoning: string;
}

export interface AIGenerationConfig {
  type: 'PILLAR' | 'CLUSTER';
  minWords: number;
  language: 'ID' | 'EN' | 'DUAL';
  narrativeStyle: 'STREET_SMART' | 'PROFESSIONAL' | 'STORYTELLING' | 'TECHNICAL';
  targetKeyword: string;
  title: string;
}
