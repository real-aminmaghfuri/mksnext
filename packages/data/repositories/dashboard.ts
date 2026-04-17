
import { localDB } from '../local-db';
import { getSupabase, isOnline } from '../remote-db';
import { DashboardStats, Transaction, RepoResponse } from '../types';

/**
 * DashboardRepository (Core Data Package)
 * STRICT RULE: Returns standard RepoResponse<T>
 */
export class DashboardRepository {
  /** Fetch all transactions specifically for stats computation */
  static async getTransactionsForStats(): Promise<RepoResponse<Transaction[]>> {
    try {
      const supabase = getSupabase();
      if (isOnline() && supabase) {
        const { data, error } = await supabase
          .from('transactions')
          .select('*')
          .eq('status', 'COMPLETED');

        if (error) throw error;
        if (data) return { success: true, data };
      }

      const localData = await localDB.transactions.toArray();
      return { success: true, data: localData };
    } catch (error) {
      console.error("[DashboardRepo] Stats Data Fetch Fail:", error);
      return { success: false, error: "STATS_DATA_FETCH_ERROR" };
    }
  }

  /** Fetch latest activity/transactions */
  static async getRecentTransactions(): Promise<RepoResponse<Transaction[]>> {
    try {
      const supabase = getSupabase();
      if (isOnline() && supabase) {
        const { data, error } = await supabase
          .from('transactions')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(10);
        
        if (error) throw error;

        if (data) {
          return { 
            success: true, 
            data: data.map((d: any) => ({ 
              ...d, 
              createdAt: new Date(d.created_at), 
              paymentMethod: d.payment_method 
            })) 
          };
        }
      }

      // Fallback: Local
      const localData = await localDB.transactions
        .orderBy('createdAt')
        .reverse()
        .limit(10)
        .toArray();
      
      return { success: true, data: localData };
    } catch (error) {
      console.error("[DashboardRepo] TX Fetch Fail:", error);
      return { success: false, error: "TX_FETCH_ERROR" };
    }
  }
}
