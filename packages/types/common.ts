/**
 * Standard Repository Response Format
 * Mandatory for all data operations across the monorepo.
 */
export interface RepoResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

/**
 * Common operational status used in Dashboard and Settings
 */
export interface ConnectivityStatus {
  localDb: {
    status: 'active' | 'inactive';
    label: string;
  };
  cloudSync: {
    lastSync: string;
    status: 'synced' | 'syncing';
  };
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

export interface DataConfig {
  useSupabase: boolean;
  supabaseUrl?: string;
  supabaseKey?: string;
}
