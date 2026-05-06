
import { db, isOnline, handleFirestoreError, OperationType } from '../remote-db';
import { CompanyIdentity, RepoResponse } from '../types';
import { DEFAULT_COMPANY_IDENTITY } from '../defaults';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export class IdentityRepository {
  private static collectionPath = 'settings';
  private static docId = 'company_identity';

  static async getCompanyIdentity(): Promise<RepoResponse<CompanyIdentity>> {
    try {
      if (isOnline()) {
        const docRef = doc(db, this.collectionPath, this.docId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data?.value) {
            return { success: true, data: { ...DEFAULT_COMPANY_IDENTITY, ...data.value } };
          }
        }
      }
      return { success: true, data: DEFAULT_COMPANY_IDENTITY };
    } catch (e: any) {
      // If it fails during build or because of connectivity, log it but don't crash
      const isServer = typeof window === 'undefined';
      const isNetworkError = e?.code === 'unavailable' || e?.message?.includes('offline') || e?.message?.includes('unavailable');

      console.warn("[IdentityRepo] Fetch Fail (Falling back to default):", e?.message || e);
      
      // If we are on server/build or it's a network error, return default gracefully
      if (isServer || isNetworkError) {
        return { success: true, data: DEFAULT_COMPANY_IDENTITY };
      }
      
      handleFirestoreError(e, OperationType.GET, `${this.collectionPath}/${this.docId}`);
      return { success: false, error: "IDENTITY_FETCH_ERROR" };
    }
  }

  static async saveCompanyIdentity(identity: CompanyIdentity): Promise<RepoResponse<void>> {
    try {
      if (isOnline()) {
        const docRef = doc(db, this.collectionPath, this.docId);
        await setDoc(docRef, { key: this.docId, value: identity });
      } else {
        throw new Error("Cannot save identity while offline.");
      }
      return { success: true };
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, `${this.collectionPath}/${this.docId}`);
      return { success: false, error: error instanceof Error ? error.message : "IDENTITY_SAVE_ERROR" };
    }
  }
}
