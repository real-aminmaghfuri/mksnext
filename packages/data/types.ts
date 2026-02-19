
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

export interface WebProtocols {
  maintenanceMode: boolean;
  visibility: 'PUBLIC' | 'STEALTH';
  gsc: string;
  ga4: string;
  gMerchant: string;
  bing: string;
  yandex: string;
  pinterest: string;
}

export interface CompanyIdentity {
  founderName: string;
  founderRole: string;
  founderPhoto: string;
  founderQuote: string;
  companyName: string;
  brandName: string;
  addressLegal: string;
  addressOps: string;
  nib: string;
  skKemenkumham: string;
  npwp: string;
  bankName: string;
  bankAccount: string;
  bankHolder: string;
  whatsapp: string;
  email: string;
}

// Configuration for Environment switching
export interface DataConfig {
  useSupabase: boolean;
  supabaseUrl?: string;
  supabaseKey?: string;
}
