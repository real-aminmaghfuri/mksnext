
import { localDB } from '../local-db';
import { db, isOnline, handleFirestoreError, OperationType } from '../remote-db';
import { Transaction, RepoResponse } from '../types';
import { collection, addDoc } from 'firebase/firestore';

/**
 * POSRepository (Core Data Package)
 * STRICT RULE: Returns standard RepoResponse<T>
 */
export class POSRepository {
  private static collectionPath = 'transactions';

  /** Save transaction with offline-first and background-sync attempt */
  static async saveTransaction(transaction: Transaction): Promise<RepoResponse<void>> {
    try {
      // 1. Save to Local DB (MANDATORY - Offline First)
      const txnRecord = {
        ...transaction,
        uuid: transaction.uuid || crypto.randomUUID(),
        createdAt: transaction.createdAt || new Date()
      };
      
      await localDB.transactions.add(txnRecord);

      // 2. Sync to Firestore if Online
      if (isOnline()) {
        try {
          await addDoc(collection(db, this.collectionPath), {
            uuid: txnRecord.uuid,
            total: txnRecord.total,
            status: txnRecord.status,
            paymentMethod: txnRecord.paymentMethod,
            createdAt: txnRecord.createdAt.toISOString()
          });
        } catch (syncError) {
          console.warn("[POSRepo] Firestore Sync Deferred:", syncError);
          handleFirestoreError(syncError, OperationType.WRITE, this.collectionPath);
        }
      }

      return { success: true };
    } catch (error) {
      console.error("[POSRepo] Save Failed:", error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : "TRANSACTION_SAVE_ERROR" 
      };
    }
  }
}
