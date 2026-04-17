import { Repository as DataHub, Transaction, Product, RepoResponse } from 'data';

/**
 * SalesRepository (Feature Data Layer)
 * STRICT RULE: ONLY handles data access.
 * Returns standardized RepoResponse.
 */
export class SalesRepository {
  /** Fetch available products for POS */
  static async getAvailableProducts(): Promise<RepoResponse<Product[]>> {
    try {
      await DataHub.init();
      return await DataHub.getProducts();
    } catch (error) {
      return { 
        success: false, 
        error: "ERR_FETCH_PRODUCTS" 
      };
    }
  }

  /** Save transaction to data store */
  static async persistTransaction(transaction: Transaction): Promise<RepoResponse<void>> {
    try {
      return await DataHub.saveTransaction(transaction);
    } catch (error) {
      return { 
        success: false, 
        error: "ERR_SAVE_TRANSACTION" 
      };
    }
  }
}
