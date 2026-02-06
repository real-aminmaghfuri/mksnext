import Dexie, { type Table } from 'dexie';
import { Transaction, Product } from './types';

export class LocalDatabase extends Dexie {
  transactions!: Table<Transaction, number>;
  products!: Table<Product, number>;

  constructor() {
    super('MKS_Local_DB');
    
    // Define schema
    // Cast to any to bypass potential TypeScript environment issue where version() is not recognized on the subclass
    (this as any).version(1).stores({
      transactions: '++id, uuid, status, createdAt',
      products: '++id, sku, category'
    });
  }

  // Seed data for demo purposes
  async seed() {
    const count = await this.transactions.count();
    if (count === 0) {
      const now = new Date();
      await this.transactions.bulkAdd([
        { total: 150000, status: 'COMPLETED', paymentMethod: 'QRIS', createdAt: new Date(now.getTime() - 1000 * 60 * 5) },
        { total: 25000, status: 'COMPLETED', paymentMethod: 'CASH', createdAt: new Date(now.getTime() - 1000 * 60 * 30) },
        { total: 300000, status: 'PENDING', paymentMethod: 'DEBIT', createdAt: new Date(now.getTime() - 1000 * 60 * 60) },
        { total: 75000, status: 'COMPLETED', paymentMethod: 'QRIS', createdAt: new Date(now.getTime() - 1000 * 60 * 120) },
      ]);
    }
  }
}

export const localDB = new LocalDatabase();