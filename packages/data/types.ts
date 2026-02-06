export interface Transaction {
  id?: number; // Dexie uses number, Supabase UUID (string). We handle mapping in repo.
  uuid?: string;
  total: number;
  status: 'COMPLETED' | 'PENDING' | 'CANCELLED';
  paymentMethod: 'CASH' | 'QRIS' | 'DEBIT';
  createdAt: Date;
}

export interface Product {
  id?: number;
  name: string;
  sku: string;
  price: number;
  stock: number;
  category: string;
}

export interface DashboardStats {
  revenue: number;
  orders: number;
  activePos: number;
}

// Configuration for Environment switching
export interface DataConfig {
  useSupabase: boolean;
  supabaseUrl?: string;
  supabaseKey?: string;
}