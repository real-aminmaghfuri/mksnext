
import { localDB } from '../local-db';
import { getSupabase, isOnline } from '../remote-db';
import { Product } from '../types';

export class InventoryRepository {
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
}
