
import { localDB } from '../local-db';
import { db, isOnline, handleFirestoreError, OperationType } from '../remote-db';
import { Product, RepoResponse } from '../types';
import { collection, getDocs, query, orderBy, addDoc, serverTimestamp } from 'firebase/firestore';

/**
 * InventoryRepository (Core Data Package)
 * STRICT RULE: Returns standard RepoResponse<T>
 */
export class InventoryRepository {
  /** Fetch all products with online-first strategy */
  static async getProducts(): Promise<RepoResponse<Product[]>> {
    const path = 'products';
    try {
      if (isOnline()) {
        const q = query(collection(db, path), orderBy('sku', 'asc'));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map(doc => ({ id: doc.id as any, ...doc.data() } as Product));
        return { success: true, data };
      }

      // Fallback to Local
      const localData = await localDB.products.toArray();
      return { success: true, data: localData };
    } catch (error) {
      console.error("[InventoryDataRepo] Get Failed:", error);
      handleFirestoreError(error, OperationType.GET, path);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : "FETCH_ERROR" 
      };
    }
  }

  /** Add product with sync-to-remote logic */
  static async addProduct(product: Product): Promise<RepoResponse<void>> {
    const path = 'products';
    try {
      // 1. Save Local First (Offline First approach)
      await localDB.products.add(product);

      // 2. Try Sync to Remote
      if (isOnline()) {
        const { id, ...payload } = product; 
        await addDoc(collection(db, path), payload);
      }

      return { success: true };
    } catch (error) {
      console.error("[InventoryDataRepo] Insert Failed:", error);
      handleFirestoreError(error, OperationType.WRITE, path);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : "INSERT_ERROR" 
      };
    }
  }
}
