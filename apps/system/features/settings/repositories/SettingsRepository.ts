import { HardwareConfig, ReceiptConfig, UserProfile, ConnectivityStatus } from '../types';
import { RepoResponse } from 'data';

/**
 * SettingsRepository (Feature Data Layer)
 * STRICT RULE: Only handles raw data fetching/saving for configuration.
 * Returns standardized RepoResponse.
 */
export class SettingsRepository {
  /** Fetch user profile */
  static async fetchProfile(): Promise<RepoResponse<UserProfile>> {
    return {
      success: true,
      data: {
        name: "AMIN MAGHFURI",
        role: "Commander",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100"
      }
    };
  }

  /** Fetch hardware list */
  static async fetchHardware(): Promise<RepoResponse<HardwareConfig[]>> {
    return {
      success: true,
      data: [
        { id: 'h1', name: "Printer Dapur (Kitchen)", connection: "192.168.1.200", type: 'IP' },
        { id: 'h2', name: "Printer Kasir (Cashier)", connection: "USB-001", type: 'USB' }
      ]
    };
  }

  /** Fetch receipt config */
  static async fetchReceiptConfig(): Promise<RepoResponse<ReceiptConfig>> {
    return {
      success: true,
      data: {
        header: "PT MESIN KASIR SOLO",
        footer: "Terima Kasih, Selamat Belanja Kembali"
      }
    };
  }

  /** Persist receipt config */
  static async saveReceiptConfig(config: ReceiptConfig): Promise<RepoResponse<void>> {
    console.log("Saving receipt config down to DB:", config);
    // Mimic API latency
    await new Promise(resolve => setTimeout(resolve, 800));
    return { success: true };
  }

  /** Sync status monitor */
  static async getCheckConnectivity(): Promise<RepoResponse<ConnectivityStatus>> {
    return {
      success: true,
      data: {
        localDb: { status: 'active', label: 'IndexedDB Active' },
        cloudSync: { lastSync: '2m ago', status: 'synced' }
      }
    };
  }
}
