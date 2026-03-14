
import { localDB } from '../local-db';
import { getSupabase, isOnline } from '../remote-db';
import { DashboardStats, Transaction } from '../types';

export class DashboardRepository {
  static async getStats(): Promise<DashboardStats> {
    const supabase = getSupabase();
    if (isOnline() && supabase) {
      try {
        const { data: txs, error } = await supabase
          .from('transactions')
          .select('total, status')
          .eq('status', 'COMPLETED');

        if (!error && txs) {
          const revenue = txs.reduce((sum: number, t: any) => sum + t.total, 0);
          return { revenue, orders: txs.length, activePos: 24 };
        }
      } catch (e) {
        console.warn("Supabase Fetch Failed, falling back to Local:", e);
      }
    } 
    const transactions = await localDB.transactions.toArray();
    const revenue = transactions.filter((t: Transaction) => t.status === 'COMPLETED').reduce((sum: number, t: Transaction) => sum + t.total, 0);
    return { revenue, orders: transactions.length, activePos: 1 };
  }

  static async getRecentTransactions(): Promise<Transaction[]> {
    const supabase = getSupabase();
    if (isOnline() && supabase) {
      const { data, error } = await supabase.from('transactions').select('*').order('created_at', { ascending: false }).limit(10);
      if (!error && data) {
        return data.map((d: any) => ({ ...d, createdAt: new Date(d.created_at), paymentMethod: d.payment_method }));
      }
    }
    return await localDB.transactions.orderBy('createdAt').reverse().limit(10).toArray();
  }
}
