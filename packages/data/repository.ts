import { localDB } from './local-db';
import { getSupabase, isOnline } from './remote-db';
import { DashboardStats, Transaction } from './types';

const FORCE_OFFLINE = true; // Set to true for AIStudio/StackBlitz env

export class Repository {
  
  // Fetch Dashboard Stats
  static async getStats(): Promise<DashboardStats> {
    if (!FORCE_OFFLINE && isOnline() && getSupabase()) {
      // Supabase logic would go here
      return { revenue: 0, orders: 0, activePos: 0 }; 
    } else {
      // Dexie Logic
      const transactions = await localDB.transactions.toArray();
      const revenue = transactions
        .filter(t => t.status === 'COMPLETED')
        .reduce((sum, t) => sum + t.total, 0);
      
      return {
        revenue,
        orders: transactions.length,
        activePos: 12 // Hardcoded for hardware demo
      };
    }
  }

  // Fetch Recent Transactions
  static async getRecentTransactions(): Promise<Transaction[]> {
    if (!FORCE_OFFLINE && isOnline() && getSupabase()) {
       return [];
    } else {
       return await localDB.transactions
        .orderBy('createdAt')
        .reverse()
        .limit(10)
        .toArray();
    }
  }

  // Create Transaction
  static async createTransaction(data: Transaction): Promise<void> {
    // In a real hybrid app, we would save to Dexie first, then sync to Supabase
    await localDB.transactions.add({
      ...data,
      createdAt: new Date()
    });
  }

  static async init() {
    if(FORCE_OFFLINE) {
        await localDB.seed();
    }
  }
}