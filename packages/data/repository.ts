
import { localDB } from './local-db';
import { getSupabase, isOnline } from './remote-db';
import { DashboardStats, Transaction, Product, WebProtocols } from './types';

export class Repository {
  
  static async init() {
    // Always seed local DB as backup/cache
    await localDB.seed();
  }

  // --- DASHBOARD ---
  static async getStats(): Promise<DashboardStats> {
    const supabase = getSupabase();
    
    // 1. Try Online (Supabase)
    if (isOnline() && supabase) {
      try {
        const { data: txs, error } = await supabase
          .from('transactions')
          .select('total, status')
          .eq('status', 'COMPLETED');

        if (!error && txs) {
          const revenue = txs.reduce((sum, t) => sum + t.total, 0);
          return {
            revenue,
            orders: txs.length,
            activePos: 24 
          };
        }
      } catch (e) {
        console.warn("Supabase Fetch Failed, falling back to Local:", e);
      }
    } 
    
    // 2. Fallback Offline (Dexie)
    const transactions = await localDB.transactions.toArray();
    const revenue = transactions
      .filter(t => t.status === 'COMPLETED')
      .reduce((sum, t) => sum + t.total, 0);
    
    return {
      revenue,
      orders: transactions.length,
      activePos: 1 
    };
  }

  static async getRecentTransactions(): Promise<Transaction[]> {
    const supabase = getSupabase();

    if (isOnline() && supabase) {
      const { data, error } = await supabase
        .from('transactions')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(10);
      
      if (!error && data) {
        return data.map((d: any) => ({
            ...d,
            createdAt: new Date(d.created_at),
            paymentMethod: d.payment_method
        }));
      }
    }

    return await localDB.transactions
      .orderBy('createdAt')
      .reverse()
      .limit(10)
      .toArray();
  }

  // --- INVENTORY / PRODUCTS ---
  static async getProducts(): Promise<Product[]> {
    const supabase = getSupabase();

    if (isOnline() && supabase) {
       const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('id', { ascending: true });
        
       if (!error && data) return data;
    }

    return await localDB.products.toArray();
  }

  static async addProduct(product: Product): Promise<void> {
    await localDB.products.add(product);
    
    const supabase = getSupabase();
    if (isOnline() && supabase) {
        const { id, ...payload } = product; 
        await supabase.from('products').insert([payload]);
    }
  }

  // --- SETTINGS (WEB PROTOCOLS) ---
  static async getWebProtocols(): Promise<WebProtocols> {
    const supabase = getSupabase();
    const defaults: WebProtocols = {
        maintenanceMode: false,
        visibility: 'PUBLIC',
        gsc: '', ga4: '', gMerchant: '', bing: '', yandex: '', pinterest: ''
    };

    if (isOnline() && supabase) {
        try {
            const { data, error } = await supabase
                .from('settings')
                .select('value')
                .eq('key', 'web_protocols')
                .single();
            
            // PGRST116 means no rows returned (first time setup), which is fine.
            if (error && error.code !== 'PGRST116') { 
                 console.error("Supabase Error:", error.message);
            }

            if (data?.value) {
                return { ...defaults, ...data.value };
            }
        } catch (e) {
            console.error("Failed to fetch settings from Supabase", e);
        }
    }
    return defaults;
  }

  static async saveWebProtocols(protocols: WebProtocols): Promise<void> {
    const supabase = getSupabase();
    
    if (!supabase) {
        throw new Error("Supabase Client not initialized. Check Env Vars.");
    }

    const { error } = await supabase
        .from('settings')
        .upsert(
            { key: 'web_protocols', value: protocols }, 
            { onConflict: 'key' }
        );
    
    if (error) {
        console.error("Supabase Write Error:", error);
        // Throw the ACTUAL error message from Supabase so the UI knows what happened
        throw new Error(error.message);
    }
  }
}
