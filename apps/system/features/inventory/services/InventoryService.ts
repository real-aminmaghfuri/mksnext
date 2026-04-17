import { Product } from 'data';
import { InventoryRepository } from '../repositories/InventoryRepository';

/**
 * InventoryService (Business Logic Layer)
 * STRICT RULE: Handles business rules for stock, filtering, and formatting.
 */
export class InventoryService {
  
  /** Orchestrate loading and potential business mapping */
  static async getCatalog(): Promise<Product[]> {
    const response = await InventoryRepository.fetchAllProducts();
    
    if (!response.success) {
      console.error("[InventoryService] Failed to load catalog:", response.error);
      throw new Error(response.error || "UNKNOWN_INVENTORY_ERROR");
    }

    return response.data || [];
  }

  /** Logic for filtering products (Deterministic logic) */
  static filterProducts(products: Product[], query: string): Product[] {
    if (!query) return products;
    const lowerQ = query.toLowerCase();
    
    return products.filter(p => 
      p.name.toLowerCase().includes(lowerQ) || 
      p.sku.toLowerCase().includes(lowerQ)
    );
  }

  /** Business logic for price formatting */
  static formatCurrency(val: number): string {
    return new Intl.NumberFormat('id-ID', { 
      style: 'currency', 
      currency: 'IDR', 
      maximumFractionDigits: 0 
    }).format(val);
  }
}
