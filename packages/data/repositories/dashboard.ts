
import { localDB } from '../local-db';
import { db, isOnline, handleFirestoreError, OperationType } from '../remote-db';
import { Transaction, RepoResponse } from '../types';
import { collection, getDocs, query, orderBy, limit, where } from 'firebase/firestore';

/**
 * DashboardRepository (Core Data Package)
 * STRICT RULE: Returns standard RepoResponse<T>
 */
export class DashboardRepository {
  private static collectionPath = 'transactions';

  /** Fetch all transactions specifically for stats computation */
  static async getTransactionsForStats(): Promise<RepoResponse<Transaction[]>> {
    try {
      if (isOnline()) {
        const q = query(collection(db, this.collectionPath), where('status', '==', 'COMPLETED'));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map(doc => ({ id: doc.id as any, ...doc.data() } as Transaction));
        return { success: true, data };
      }

      const localData = await localDB.transactions.toArray();
      return { success: true, data: localData };
    } catch (error) {
      console.error("[DashboardRepo] Stats Data Fetch Fail:", error);
      handleFirestoreError(error, OperationType.LIST, this.collectionPath);
      return { success: false, error: "STATS_DATA_FETCH_ERROR" };
    }
  }

  /** Fetch latest activity/transactions */
  static async getRecentTransactions(): Promise<RepoResponse<Transaction[]>> {
    try {
      if (isOnline()) {
        const q = query(collection(db, this.collectionPath), orderBy('createdAt', 'desc'), limit(10));
        const snapshot = await getDocs(q);
        
        const data = snapshot.docs.map(doc => {
          const d = doc.data();
          return { 
            ...d, 
            id: doc.id as any,
            createdAt: new Date(d.createdAt), 
            paymentMethod: d.paymentMethod 
          } as Transaction;
        });
        return { success: true, data };
      }

      // Fallback: Local
      const localData = await localDB.transactions
        .orderBy('createdAt')
        .reverse()
        .limit(10)
        .toArray();
      
      return { success: true, data: localData };
    } catch (error) {
      console.error("[DashboardRepo] TX Fetch Fail:", error);
      handleFirestoreError(error, OperationType.LIST, this.collectionPath);
      return { success: false, error: "TX_FETCH_ERROR" };
    }
  }
}
