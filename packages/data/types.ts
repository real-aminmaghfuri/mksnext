
export type { CompanyIdentity, BankAccount } from 'shared';

export interface Transaction {
  id?: number; 
  uuid?: string;
  total: number;
  status: 'COMPLETED' | 'PENDING' | 'CANCELLED';
  paymentMethod: 'CASH' | 'QRIS' | 'DEBIT';
  createdAt: Date;
}

export interface Product {
  id?: number;
  name: string;
  sku: string;
  price: number;
  stock: number;
  category: string;
}

export interface DashboardStats {
  revenue: number;
  orders: number;
  activePos: number;
}

export interface WebProtocols {
  maintenanceMode: boolean;
  visibility: 'PUBLIC' | 'STEALTH';
  gsc: string;
  ga4: string;
  gMerchant: string;
  bing: string;
  yandex: string;
  pinterest: string;
}

export interface MediaAsset {
  id: string; // Public ID from Cloudinary
  url: string; // Optimized URL
  originalUrl: string; // Raw URL
  filename: string;
  format: string;
  size: number;
  alt: string; // Stored in DB, not Cloudinary
  caption: string; // Stored in DB
  uploadedAt: string;
}

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

export interface DataConfig {
  useSupabase: boolean;
  supabaseUrl?: string;
  supabaseKey?: string;
}