import { Repository as DataHub, Product, RepoResponse } from 'data';

/**
 * InventoryRepository (Feature Data Layer)
 * STRICT RULE: ONLY handles data access for Stock/Products.
 * Returns standardized RepoResponse.
 */
export class InventoryRepository {
  /** Fetch raw product list */
  static async fetchAllProducts(): Promise<RepoResponse<Product[]>> {
    try {
      await DataHub.init();
      const response = await DataHub.getProducts();
      
      // DataHub.getProducts returns RepoResponse directly now
      return response;
    } catch (error) {
      return {
        success: false,
        error: "ERR_INVENTORY_FETCH"
      };
    }
  }

  /** Placeholder for future stock mutation */
  static async updateStockCount(productId: number, newCount: number): Promise<RepoResponse<void>> {
    console.log(`Updating product ${productId} to ${newCount}`);
    return { success: true };
  }
}
