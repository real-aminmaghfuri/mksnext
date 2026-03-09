
import Dexie, { type Table } from 'dexie';
import { Transaction, Product, Article } from './types';

export class LocalDatabase extends Dexie {
  transactions!: Table<Transaction, number>;
  products!: Table<Product, number>;
  articles!: Table<Article, number>;

  constructor() {
    super('MKS_Local_DB');
    
    // Define schema
    (this as any).version(1).stores({
      transactions: '++id, uuid, status, createdAt',
      products: '++id, sku, category',
      articles: '++id, uuid, slug, category, status',
      customers: '++id, name, phone, email',
      suppliers: '++id, name, phone',
      inventory_logs: '++id, productId, type, createdAt'
    });
  }

  // Seed data for demo purposes
  async seed() {
    const txCount = await this.transactions.count();
    if (txCount === 0) {
      const now = new Date();
      await this.transactions.bulkAdd([
        { total: 150000, status: 'COMPLETED', paymentMethod: 'QRIS', createdAt: new Date(now.getTime() - 1000 * 60 * 5) },
        { total: 25000, status: 'COMPLETED', paymentMethod: 'CASH', createdAt: new Date(now.getTime() - 1000 * 60 * 30) },
        { total: 300000, status: 'PENDING', paymentMethod: 'DEBIT', createdAt: new Date(now.getTime() - 1000 * 60 * 60) },
        { total: 75000, status: 'COMPLETED', paymentMethod: 'QRIS', createdAt: new Date(now.getTime() - 1000 * 60 * 120) },
      ]);
    }

    const prodCount = await this.products.count();
    if (prodCount === 0) {
      await this.products.bulkAdd([
        { name: 'MKS Fighter V1', sku: 'MKS-POS-001', price: 3500000, stock: 12, category: 'HARDWARE' },
        { name: 'Thermal Paper 58mm', sku: 'PAPER-58', price: 7500, stock: 500, category: 'SUPPLIES' },
        { name: 'Barcode Scanner Gun', sku: 'SCAN-2D-X', price: 450000, stock: 3, category: 'HARDWARE' },
        { name: 'Laci Uang Metal', sku: 'CD-RJ11', price: 650000, stock: 0, category: 'HARDWARE' }, // Stok Kosong
        { name: 'Kopi Robusta 1kg', sku: 'COF-ROB-01', price: 120000, stock: 45, category: 'FNB_RM' },
        { name: 'Gula Pasir Premium', sku: 'ING-SUG-01', price: 15000, stock: 8, category: 'FNB_RM' }, // Stok Nipis
      ]);
    }

    const articleCount = await this.articles.count();
    if (articleCount === 0) {
      await this.articles.bulkAdd([
        {
          title: 'Cara Memilih Mesin Kasir untuk UMKM',
          slug: 'cara-memilih-mesin-kasir-umkm',
          content: '<p>Memilih mesin kasir tidak boleh sembarangan...</p>',
          excerpt: 'Tips jitu memilih mesin kasir yang tepat untuk bisnis UMKM Anda.',
          coverImage: 'https://picsum.photos/seed/pos/800/400',
          category: 'TIPS',
          tags: ['UMKM', 'Mesin Kasir'],
          status: 'PUBLISHED',
          authorId: 'admin-1',
          authorName: 'Amin Maghfuri',
          publishedAt: new Date().toISOString(),
          createdAt: new Date().toISOString()
        },
        {
          title: 'Strategi Bisnis Pasca Pandemi',
          slug: 'strategi-bisnis-pasca-pandemi',
          content: '<p>Pandemi telah merubah lanskap bisnis...</p>',
          excerpt: 'Bagaimana bertahan dan berkembang di era new normal.',
          coverImage: 'https://picsum.photos/seed/business/800/400',
          category: 'BUSINESS',
          tags: ['Strategi', 'Pandemi'],
          status: 'DRAFT',
          authorId: 'admin-1',
          authorName: 'Amin Maghfuri',
          createdAt: new Date().toISOString()
        }
      ]);
    }
  }
}

// Guard for server-side rendering
export const localDB = typeof window !== 'undefined' ? new LocalDatabase() : null as any;
