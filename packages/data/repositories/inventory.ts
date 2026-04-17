
import { localDB } from '../local-db';
import { getSupabase, isOnline } from '../remote-db';
import { Product, RepoResponse } from '../types';

/**
 * InventoryRepository (Core Data Package)
 * STRICT RULE: Returns standard RepoResponse<T>
 */
export class InventoryRepository {
  /** Fetch all products with online-first strategy */
  static async getProducts(): Promise<RepoResponse<Product[]>> {
    try {
      const supabase = getSupabase();
      if (isOnline() && supabase) {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .order('id', { ascending: true });
        
        if (error) throw error;
        if (data) return { success: true, data };
      }

      // Fallback to Local
      const localData = await localDB.products.toArray();
      return { success: true, data: localData };
    } catch (error) {
      console.error("[InventoryDataRepo] Get Failed:", error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : "FETCH_ERROR" 
      };
    }
  }

  /** Add product with sync-to-remote logic */
  static async addProduct(product: Product): Promise<RepoResponse<void>> {
    try {
      // 1. Save Local First (Offline First approach)
      await localDB.products.add(product);

      // 2. Try Sync to Remote
      const supabase = getSupabase();
      if (isOnline() && supabase) {
        const { id, ...payload } = product; 
        const { error } = await supabase.from('products').insert([payload]);
        if (error) throw error;
      }

      return { success: true };
    } catch (error) {
      console.error("[InventoryDataRepo] Insert Failed:", error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : "INSERT_ERROR" 
      };
    }
  }
}
