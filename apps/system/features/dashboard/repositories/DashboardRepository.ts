import { Repository as DataHub, DashboardStats, Transaction, RepoResponse } from 'data';

/**
 * DashboardRepository (Feature Data Layer)
 * STRICT RULE: ONLY handles raw data fetching for the dashboard.
 * Returns standardized RepoResponse.
 */
export class DashboardRepository {
  /** Fetch raw data for stats computation */
  static async getStatsData(): Promise<RepoResponse<Transaction[]>> {
    try {
      await DataHub.init();
      return await DataHub.getTransactionsForStats();
    } catch (error) {
      return { 
        success: false, 
        error: "ERR_DASHBOARD_DATA_FETCH" 
      };
    }
  }

  /** Fetch latest activity/transactions */
  static async getLatestTransactions(): Promise<RepoResponse<Transaction[]>> {
    try {
      return await DataHub.getRecentTransactions();
    } catch (error) {
      return { 
        success: false, 
        error: "ERR_DASHBOARD_TX_FETCH" 
      };
    }
  }
}
