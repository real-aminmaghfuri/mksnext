import { DashboardStats, Transaction, UserProfile } from 'data';
import { DashboardRepository } from '../repositories/DashboardRepository';

/**
 * DashboardService (Business Logic Layer)
 * STRICT RULE: Handles formatting and mapping for the dashboard UI.
 */
export class DashboardService {
  
  /** Business Rule: Get current operator info */
  static getMockOperator(): UserProfile {
    return {
      name: "AMIN MAGHFURI",
      role: "Commander",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100"
    };
  }

  /** Orchestrate full data refresh */
  static async getDashboardData() {
    const [dataRes, txRes] = await Promise.all([
      DashboardRepository.getStatsData(),
      DashboardRepository.getLatestTransactions()
    ]);
    
    if (!dataRes.success || !txRes.success) {
      throw new Error("DASHBOARD_DATA_ORCHESTRATION_FAIL");
    }

    // 1. Logic moved from Repository to Service
    const stats = this.computeStats(dataRes.data || []);

    return { 
      stats, 
      recentTransactions: txRes.data! 
    };
  }

  /** 
   * Business Logic: Aggregation of raw transactions into stats.
   * STRICT RULE: Data transformation belongs here.
   */
  private static computeStats(transactions: Transaction[]): DashboardStats {
    const revenue = transactions
      .filter(t => t.status === 'COMPLETED')
      .reduce((sum, t) => sum + t.total, 0);

    return {
      revenue,
      orders: transactions.length,
      activePos: transactions.length > 0 ? 24 : 1 // Moved business decision logic here
    };
  }

  /** Business logic for currency formatting */
  static formatIDR(num: number): string {
    return new Intl.NumberFormat('id-ID', { 
      style: 'currency', 
      currency: 'IDR', 
      maximumFractionDigits: 0 
    }).format(num);
  }

  /** Logic to transform raw stats into UI-friendly stat items */
  static mapToStatItems(stats: DashboardStats, text: any, icons: any) {
    const { DollarSign, Users, TrendingUp } = icons;
    
    return [
      { 
        label: text.statsRevenue, 
        value: this.formatIDR(stats.revenue), 
        trend: '+12.5%', 
        color: 'from-brand-500 to-orange-600',
        icon: DollarSign
      },
      { 
        label: text.statsOrders, 
        value: stats.orders.toString(), 
        trend: '+5.2%', 
        color: 'from-blue-500 to-indigo-600',
        icon: Users
      },
      { 
        label: 'Active POS', 
        value: stats.activePos.toString(), 
        trend: 'Stable', 
        color: 'from-emerald-500 to-teal-600',
        icon: TrendingUp 
      },
    ];
  }
}
