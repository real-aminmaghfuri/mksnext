
import { localDB } from './local-db';
import { DashboardRepository } from './repositories/dashboard';
import { InventoryRepository } from './repositories/inventory';
import { SettingsRepository } from './repositories/settings';
import { IdentityRepository } from './repositories/identity';
import { MediaRepository } from './repositories/media';
import { POSRepository } from './repositories/pos';
import { ArticlesRepository } from './repositories/articles';
import { AIService } from './services/ai';
import { CompanyIdentity } from 'shared';
import { RepoResponse, Transaction, Product, WebProtocols, MediaAsset, Article, AIKeywordResearch, AIGenerationConfig } from './types';

export class Repository {
  
  static async init() {
    await localDB.seed();
  }

  // --- DASHBOARD ---
  static getTransactionsForStats(): Promise<RepoResponse<Transaction[]>> {
    return DashboardRepository.getTransactionsForStats();
  }

  static getRecentTransactions(): Promise<RepoResponse<Transaction[]>> {
    return DashboardRepository.getRecentTransactions();
  }

  // --- POS ---
  static saveTransaction(transaction: Transaction): Promise<RepoResponse<void>> {
    return POSRepository.saveTransaction(transaction);
  }

  // --- INVENTORY ---
  static getProducts(): Promise<RepoResponse<Product[]>> {
    return InventoryRepository.getProducts();
  }

  static addProduct(product: Product): Promise<RepoResponse<void>> {
    return InventoryRepository.addProduct(product);
  }

  // --- SETTINGS ---
  static getWebProtocols(): Promise<RepoResponse<WebProtocols>> {
    return SettingsRepository.getWebProtocols();
  }

  static saveWebProtocols(protocols: WebProtocols): Promise<RepoResponse<void>> {
    return SettingsRepository.saveWebProtocols(protocols);
  }

  // --- IDENTITY ---
  static getCompanyIdentity(): Promise<RepoResponse<CompanyIdentity>> {
    return IdentityRepository.getCompanyIdentity();
  }

  static saveCompanyIdentity(identity: CompanyIdentity): Promise<RepoResponse<void>> {
    return IdentityRepository.saveCompanyIdentity(identity);
  }

  // --- MEDIA LIBRARY ---
  static getMediaLibrary(): Promise<RepoResponse<MediaAsset[]>> {
    return MediaRepository.getMediaLibrary();
  }

  static saveMediaToLibrary(asset: MediaAsset): Promise<RepoResponse<void>> {
    return MediaRepository.saveMediaToLibrary(asset);
  }

  // --- ARTICLES ---
  static getArticles(): Promise<RepoResponse<Article[]>> {
    return ArticlesRepository.getArticles();
  }

  static getArticleBySlug(slug: string): Promise<RepoResponse<Article | null>> {
    return ArticlesRepository.getArticleBySlug(slug);
  }

  static saveArticle(article: Article): Promise<RepoResponse<void>> {
    return ArticlesRepository.saveArticle(article);
  }

  static deleteArticle(id: number, uuid?: string): Promise<RepoResponse<void>> {
    return ArticlesRepository.deleteArticle(id, uuid);
  }

  // --- AI STRATEGIST ---
  static researchKeywords(topic: string): Promise<AIKeywordResearch[]> {
    return AIService.researchKeywords(topic);
  }

  static generateArticle(config: AIGenerationConfig): Promise<string> {
    return AIService.generateArticle(config);
  }
}
