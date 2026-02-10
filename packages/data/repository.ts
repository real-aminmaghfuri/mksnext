
import { localDB } from './local-db';
import { getSupabase, isOnline } from './remote-db';
import { DashboardStats, Transaction, Product } from './types';

const FORCE_OFFLINE = true; // Set to true for AIStudio/StackBlitz env

export class Repository {
  
  static async init() {
    if(FORCE_OFFLINE) {
        await localDB.seed();
    }
  }

  // --- DASHBOARD ---
  static async getStats(): Promise<DashboardStats> {
    if (!FORCE_OFFLINE && isOnline() && getSupabase()) {
      return { revenue: 0, orders: 0, activePos: 0 }; 
    } else {
      const transactions = await localDB.transactions.toArray();
      const revenue = transactions
        .filter(t => t.status === 'COMPLETED')
        .reduce((sum, t) => sum + t.total, 0);
      
      return {
        revenue,
        orders: transactions.length,
        activePos: 12 
      };
    }
  }

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

  // --- INVENTORY / PRODUCTS ---
  static async getProducts(): Promise<Product[]> {
    return await localDB.products.toArray();
  }

  static async addProduct(product: Product): Promise<void> {
    await localDB.products.add(product);
  }

  static async updateProduct(id: number, product: Partial<Product>): Promise<void> {
    await localDB.products.update(id, product);
  }

  static async deleteProduct(id: number): Promise<void> {
    await localDB.products.delete(id);
  }
}
