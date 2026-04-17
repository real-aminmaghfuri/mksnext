
import { localDB } from '../local-db';
import { getSupabase, isOnline } from '../remote-db';
import { Transaction, RepoResponse } from '../types';

/**
 * POSRepository (Core Data Package)
 * STRICT RULE: Returns standard RepoResponse<T>
 */
export class POSRepository {
  /** Save transaction with offline-first and background-sync attempt */
  static async saveTransaction(transaction: Transaction): Promise<RepoResponse<void>> {
    try {
      // 1. Save to Local DB (MANDATORY - Offline First)
      const txnRecord = {
        ...transaction,
        uuid: transaction.uuid || crypto.randomUUID(),
        createdAt: transaction.createdAt || new Date()
      };
      
      await localDB.transactions.add(txnRecord);

      // 2. Sync to Supabase if Online
      const supabase = getSupabase();
      if (isOnline() && supabase) {
        const { error } = await supabase.from('transactions').insert({
          total: txnRecord.total,
          status: txnRecord.status,
          payment_method: txnRecord.paymentMethod,
          created_at: txnRecord.createdAt
        });
        
        // We log sync error but succeed the operation because it's saved locally
        if (error) {
          console.warn("[POSRepo] Supabase Sync Deferred:", error.message);
        }
      }

      return { success: true };
    } catch (error) {
      console.error("[POSRepo] Save Failed:", error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : "TRANSACTION_SAVE_ERROR" 
      };
    }
  }
}
