
import { localDB } from '../local-db';
import { db, isOnline, handleFirestoreError, OperationType } from '../remote-db';
import { Article, RepoResponse } from '../types';
import { collection, getDocs, query, orderBy, where, limit, doc, getDoc, setDoc, addDoc, deleteDoc, serverTimestamp } from 'firebase/firestore';

export class ArticlesRepository {
  private static collectionPath = 'articles';

  static async getArticles(): Promise<RepoResponse<Article[]>> {
    try {
      if (isOnline()) {
        const q = query(collection(db, this.collectionPath), orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map(d => ({ id: d.id as any, uuid: d.id, ...d.data() } as Article));
        return { success: true, data };
      }
      const localData = typeof window !== 'undefined' ? await localDB.articles.reverse().toArray() : [];
      return { success: true, data: localData };
    } catch (error: any) {
      console.warn("[ArticlesRepo] Fetch Fail:", error?.message || error);
      
      // Graceful fallback for build
      if (typeof window === 'undefined') {
        return { success: true, data: [] };
      }
      
      handleFirestoreError(error, OperationType.LIST, this.collectionPath);
      return { success: false, error: "ARTICLES_FETCH_ERROR" };
    }
  }

  static async getArticleBySlug(slug: string): Promise<RepoResponse<Article | null>> {
    try {
      if (isOnline()) {
        const q = query(collection(db, this.collectionPath), where('slug', '==', slug), limit(1));
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
          const d = snapshot.docs[0];
          return { success: true, data: { id: d.id as any, uuid: d.id, ...d.data() } as Article };
        }
      }
      const article = await localDB.articles.where('slug').equals(slug).first();
      return { success: true, data: article || null };
    } catch (error) {
      console.error("[ArticlesRepo] Fetch By Slug Fail:", error);
      handleFirestoreError(error, OperationType.GET, this.collectionPath);
      return { success: false, error: "ARTICLE_BY_SLUG_FETCH_ERROR" };
    }
  }

  static async saveArticle(article: Article): Promise<RepoResponse<void>> {
    try {
      const isNew = !article.id && !article.uuid;
      const now = new Date().toISOString();
      
      if (isNew) {
        article.createdAt = now;
      }
      article.updatedAt = now;

      // Save to Local (Dexie use id as PK, Firestore use uuid)
      if (article.id) {
        await localDB.articles.update(article.id, article);
      } else {
        const newId = await localDB.articles.add(article);
        article.id = newId;
      }

      // Save to Remote
      if (isOnline()) {
        const { id, ...payload } = article;
        if (article.uuid) {
          await setDoc(doc(db, this.collectionPath, article.uuid), payload);
        } else {
          const docRef = await addDoc(collection(db, this.collectionPath), payload);
          article.uuid = docRef.id;
          // Update local with new UUID
          if (article.id) await localDB.articles.update(article.id, { uuid: article.uuid });
        }
      }
      return { success: true };
    } catch (error) {
      console.error("[ArticlesRepo] Save Fail:", error);
      handleFirestoreError(error, OperationType.WRITE, this.collectionPath);
      return { success: false, error: error instanceof Error ? error.message : "ARTICLE_SAVE_ERROR" };
    }
  }

  static async deleteArticle(id: number, uuid?: string): Promise<RepoResponse<void>> {
    try {
      await localDB.articles.delete(id);
      if (isOnline() && uuid) {
        await deleteDoc(doc(db, this.collectionPath, uuid));
      }
      return { success: true };
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, this.collectionPath);
      return { success: false, error: error instanceof Error ? error.message : "ARTICLE_DELETE_ERROR" };
    }
  }
}
