
import { db, isOnline, handleFirestoreError, OperationType } from '../remote-db';
import { WebProtocols, RepoResponse } from '../types';
import { DEFAULT_WEB_PROTOCOLS } from '../defaults';
import { doc, getDoc, setDoc } from 'firebase/firestore';

/**
 * SettingsRepository (Core Data Package)
 * STRICT RULE: Returns standard RepoResponse<T>
 */
export class SettingsRepository {
  private static collectionPath = 'settings';
  private static docId = 'web_protocols';

  /** Fetch high-level system/web configurations */
  static async getWebProtocols(): Promise<RepoResponse<WebProtocols>> {
    try {
      if (isOnline()) {
        const docRef = doc(db, this.collectionPath, this.docId);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data?.value) {
            return { 
              success: true, 
              data: { ...DEFAULT_WEB_PROTOCOLS, ...data.value } 
            };
          }
        }
      }
      return { success: true, data: DEFAULT_WEB_PROTOCOLS };
    } catch (error) {
      console.error("[SettingsRepo] Protocol Fetch Fail:", error);
      handleFirestoreError(error, OperationType.GET, `${this.collectionPath}/${this.docId}`);
      return { success: false, error: "PROTOCOL_FETCH_ERROR" };
    }
  }

  /** Persist system/web configurations */
  static async saveWebProtocols(protocols: WebProtocols): Promise<RepoResponse<void>> {
    try {
      if (isOnline()) {
        const docRef = doc(db, this.collectionPath, this.docId);
        await setDoc(docRef, { key: this.docId, value: protocols });
      } else {
        throw new Error("REMOTE_DB_UNAVAILABLE");
      }
      return { success: true };
    } catch (error) {
      console.error("[SettingsRepo] Protocol Save Fail:", error);
      handleFirestoreError(error, OperationType.WRITE, `${this.collectionPath}/${this.docId}`);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : "PROTOCOL_SAVE_ERROR" 
      };
    }
  }
}
