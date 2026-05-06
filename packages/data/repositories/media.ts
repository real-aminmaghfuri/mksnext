
import { db, isOnline, handleFirestoreError, OperationType } from '../remote-db';
import { MediaAsset, RepoResponse } from '../types';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export class MediaRepository {
  private static collectionPath = 'settings';
  private static docId = 'media_library';

  static async getMediaLibrary(): Promise<RepoResponse<MediaAsset[]>> {
    try {
      if (isOnline()) {
        const docRef = doc(db, this.collectionPath, this.docId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data?.value && Array.isArray(data.value)) {
            return { success: true, data: data.value as MediaAsset[] };
          }
        }
      }
      return { success: true, data: [] };
    } catch (e) {
      console.error("Failed to fetch media", e);
      handleFirestoreError(e, OperationType.GET, `${this.collectionPath}/${this.docId}`);
      return { success: false, error: "MEDIA_FETCH_ERROR" };
    }
  }

  static async saveMediaToLibrary(asset: MediaAsset): Promise<RepoResponse<void>> {
    try {
      if (isOnline()) {
        const response = await this.getMediaLibrary();
        const current = response.success && response.data ? response.data : [];
        const updated = [asset, ...current];
        
        const docRef = doc(db, this.collectionPath, this.docId);
        await setDoc(docRef, { key: this.docId, value: updated });
      } else {
        throw new Error("Cannot save media while offline.");
      }
      return { success: true };
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, `${this.collectionPath}/${this.docId}`);
      return { success: false, error: error instanceof Error ? error.message : "MEDIA_SAVE_ERROR" };
    }
  }
}
