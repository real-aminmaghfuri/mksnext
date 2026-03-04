
import { localDB } from '../local-db';
import { getSupabase, isOnline } from '../remote-db';
import { Transaction } from '../types';

export class POSRepository {
  static async saveTransaction(transaction: Transaction): Promise<void> {
    const supabase = getSupabase();
    
    // 1. Save to Local DB (Always)
    await localDB.transactions.add({
      ...transaction,
      uuid: crypto.randomUUID(),
      createdAt: transaction.createdAt || new Date()
    });

    // 2. Sync to Supabase if Online
    if (isOnline() && supabase) {
      try {
        const { error } = await supabase.from('transactions').insert({
          total: transaction.total,
          status: transaction.status,
          payment_method: transaction.paymentMethod,
          created_at: transaction.createdAt || new Date()
        });
        if (error) console.error("Supabase Sync Failed:", error);
      } catch (e) {
        console.warn("Supabase Sync Failed, keeping local only:", e);
      }
    }
  }
}
