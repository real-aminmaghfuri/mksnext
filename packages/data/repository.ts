
import { localDB } from './local-db';
import { DashboardRepository } from './repositories/dashboard';
import { InventoryRepository } from './repositories/inventory';
import { SettingsRepository } from './repositories/settings';
import { IdentityRepository } from './repositories/identity';
import { MediaRepository } from './repositories/media';
import { POSRepository } from './repositories/pos';
import { DashboardStats, Transaction, Product, WebProtocols, CompanyIdentity, MediaAsset } from './types';

export class Repository {
  
  static async init() {
    await localDB.seed();
  }

  // --- DASHBOARD ---
  static getStats(): Promise<DashboardStats> {
    return DashboardRepository.getStats();
  }

  static getRecentTransactions(): Promise<Transaction[]> {
    return DashboardRepository.getRecentTransactions();
  }

  // --- POS ---
  static saveTransaction(transaction: Transaction): Promise<void> {
    return POSRepository.saveTransaction(transaction);
  }

  // --- INVENTORY ---
  static getProducts(): Promise<Product[]> {
    return InventoryRepository.getProducts();
  }

  static addProduct(product: Product): Promise<void> {
    return InventoryRepository.addProduct(product);
  }

  // --- SETTINGS ---
  static getWebProtocols(): Promise<WebProtocols> {
    return SettingsRepository.getWebProtocols();
  }

  static saveWebProtocols(protocols: WebProtocols): Promise<void> {
    return SettingsRepository.saveWebProtocols(protocols);
  }

  // --- IDENTITY ---
  static getCompanyIdentity(): Promise<CompanyIdentity> {
    return IdentityRepository.getCompanyIdentity();
  }

  static saveCompanyIdentity(identity: CompanyIdentity): Promise<void> {
    return IdentityRepository.saveCompanyIdentity(identity);
  }

  // --- MEDIA LIBRARY ---
  static getMediaLibrary(): Promise<MediaAsset[]> {
    return MediaRepository.getMediaLibrary();
  }

  static saveMediaToLibrary(asset: MediaAsset): Promise<void> {
    return MediaRepository.saveMediaToLibrary(asset);
  }
}
