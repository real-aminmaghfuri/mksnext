
import { localDB } from './local-db';
import { getSupabase, isOnline } from './remote-db';
import { DashboardStats, Transaction, Product, WebProtocols, CompanyIdentity, MediaAsset } from './types';

export class Repository {
  
  static async init() {
    await localDB.seed();
  }

  // --- DASHBOARD ---
  static async getStats(): Promise<DashboardStats> {
    const supabase = getSupabase();
    if (isOnline() && supabase) {
      try {
        const { data: txs, error } = await supabase
          .from('transactions')
          .select('total, status')
          .eq('status', 'COMPLETED');

        if (!error && txs) {
          const revenue = txs.reduce((sum, t) => sum + t.total, 0);
          return { revenue, orders: txs.length, activePos: 24 };
        }
      } catch (e) {
        console.warn("Supabase Fetch Failed, falling back to Local:", e);
      }
    } 
    const transactions = await localDB.transactions.toArray();
    const revenue = transactions.filter(t => t.status === 'COMPLETED').reduce((sum, t) => sum + t.total, 0);
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

  // --- INVENTORY ---
  static async getProducts(): Promise<Product[]> {
    const supabase = getSupabase();
    if (isOnline() && supabase) {
       const { data, error } = await supabase.from('products').select('*').order('id', { ascending: true });
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

  // --- SETTINGS ---
  static async getWebProtocols(): Promise<WebProtocols> {
    const supabase = getSupabase();
    const defaults: WebProtocols = { maintenanceMode: false, visibility: 'PUBLIC', gsc: '', ga4: '', gMerchant: '', bing: '', yandex: '', pinterest: '' };

    if (isOnline() && supabase) {
        try {
            const { data, error } = await supabase.from('settings').select('value').eq('key', 'web_protocols').single();
            if (data?.value) return { ...defaults, ...data.value };
        } catch (e) { console.error("Failed to fetch settings", e); }
    }
    return defaults;
  }

  static async saveWebProtocols(protocols: WebProtocols): Promise<void> {
    const supabase = getSupabase();
    if (!supabase) throw new Error("Supabase Client not initialized.");
    const { error } = await supabase.from('settings').upsert({ key: 'web_protocols', value: protocols }, { onConflict: 'key' });
    if (error) throw new Error(error.message);
  }

  // --- IDENTITY ---
  static async getCompanyIdentity(): Promise<CompanyIdentity> {
    const supabase = getSupabase();
    
    const defaults: CompanyIdentity = {
        founderName: "Amin Maghfuri",
        founderRole: "Commanding Officer",
        founderPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
        founderQuote: "Jujur-jujuran aja... Bisnis tanpa sistem yang kuat cuma nunggu waktu buat meledak.",
        companyName: "PT MESIN KASIR SOLO",
        brandName: "MKS",
        addressLegal: "Perum Graha Tiara 2 B1, Gumpang 07/01, Kartasura, Jawa Tengah 57169",
        addressOps: "Gumiring 04/04, Sidomulyo, Banjarejo, Blora, Jawa Tengah 58253",
        mapLegalUrl: "",
        mapOpsUrl: "",
        operatingHours: "Senin - Sabtu: 08:00 - 17:00 WIB",
        nib: "1226000711085",
        skKemenkumham: "AHU-006097.AH.01.30.Tahun 2021",
        npwp: "53.494.885.6-532.000",
        bankAccounts: [
            { bankName: "Bank BNC (Neo)", accountNumber: "5859459406740414", accountHolder: "PT MESIN KASIR SOLO" }
        ],
        whatsapp: "628816566935",
        email: "owner.kasirsolo@gmail.com"
    };

    if (isOnline() && supabase) {
        try {
            const { data, error } = await supabase.from('settings').select('value').eq('key', 'company_identity').single();
            if (data?.value) {
                return { ...defaults, ...data.value };
            }
        } catch (e) { console.error("Failed to fetch identity", e); }
    }
    return defaults;
  }

  static async saveCompanyIdentity(identity: CompanyIdentity): Promise<void> {
    const supabase = getSupabase();
    if (!supabase) throw new Error("Supabase Client not initialized.");
    const { error } = await supabase.from('settings').upsert({ key: 'company_identity', value: identity }, { onConflict: 'key' });
    if (error) throw new Error(error.message);
  }

  // --- MEDIA LIBRARY (PERSISTENT) ---
  static async getMediaLibrary(): Promise<MediaAsset[]> {
    const supabase = getSupabase();
    if (isOnline() && supabase) {
        try {
            const { data, error } = await supabase.from('settings').select('value').eq('key', 'media_library').single();
            if (data?.value && Array.isArray(data.value)) {
                return data.value as MediaAsset[];
            }
        } catch (e) { console.error("Failed to fetch media", e); }
    }
    return [];
  }

  static async saveMediaToLibrary(asset: MediaAsset): Promise<void> {
    const supabase = getSupabase();
    if (!supabase) throw new Error("Supabase Client not initialized.");
    
    // 1. Get current list
    const current = await this.getMediaLibrary();
    
    // 2. Prepend new asset (Newest first)
    const updated = [asset, ...current];
    
    // 3. Save back
    const { error } = await supabase.from('settings').upsert({ key: 'media_library', value: updated }, { onConflict: 'key' });
    if (error) throw new Error(error.message);
  }
}