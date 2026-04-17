import { ReceiptConfig, HardwareConfig, UserProfile, ConnectivityStatus } from '../types';
import { SettingsRepository } from '../repositories/SettingsRepository';

/**
 * SettingsService (Business Logic Layer)
 * STRICT RULE: Handles business rules for user management, hardware, and sync.
 */
export class SettingsService {
  
  /** Orchestrate full load of settings modules */
  static async loadAllSettings() {
    const [userRes, hwRes, rxRes, connRes] = await Promise.all([
      SettingsRepository.fetchProfile(),
      SettingsRepository.fetchHardware(),
      SettingsRepository.fetchReceiptConfig(),
      SettingsRepository.getCheckConnectivity()
    ]);

    if (!userRes.success || !hwRes.success || !rxRes.success || !connRes.success) {
      throw new Error("SETTINGS_LOAD_FAIL");
    }

    return { 
      user: userRes.data!, 
      hardware: hwRes.data!, 
      receipt: rxRes.data!, 
      connectivity: connRes.data! 
    };
  }

  /** Business logic for printer testing */
  static async testPrinterConnection(id: string): Promise<boolean> {
    console.log(`[BizLogic] Testing printer connection sequence for ${id}`);
    // Here we'd typically call a low-level printer driverRepo
    return true;
  }

  /** Business logic for saving application config */
  static async updateTerminalConfig(receipt: ReceiptConfig): Promise<void> {
    // Validate business rules
    if (!receipt.header) throw new Error("RECEIPT_HEADER_REQUIRED");
    
    // Delegate to storage
    const response = await SettingsRepository.saveReceiptConfig(receipt);
    if (!response.success) {
      throw new Error(response.error || "CONFIG_SAVE_FAIL");
    }
  }

  /** Business logic for cloud synchronization trigger */
  static async triggerCloudSync(): Promise<void> {
    console.log("[BizLogic] Triggering data harmonization sequence...");
    // Orchestrate data sync logic
  }
}
