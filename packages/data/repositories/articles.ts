
import { localDB } from '../local-db';
import { getSupabase, isOnline } from '../remote-db';
import { Article, RepoResponse } from '../types';

export class ArticlesRepository {
  static async getArticles(): Promise<RepoResponse<Article[]>> {
    try {
      const supabase = getSupabase();
      if (isOnline() && supabase) {
        const { data, error } = await supabase.from('articles').select('*').order('created_at', { ascending: false });
        if (!error && data) return { success: true, data };
        if (error) throw error;
      }
      const localData = await localDB.articles.reverse().toArray();
      return { success: true, data: localData };
    } catch (error) {
      console.error("[ArticlesRepo] Fetch Fail:", error);
      return { success: false, error: "ARTICLES_FETCH_ERROR" };
    }
  }

  static async getArticleBySlug(slug: string): Promise<RepoResponse<Article | null>> {
    try {
      const supabase = getSupabase();
      if (isOnline() && supabase) {
        const { data, error } = await supabase.from('articles').select('*').eq('slug', slug).single();
        if (!error && data) return { success: true, data };
        if (error && error.code !== 'PGRST116') throw error;
      }
      const article = await localDB.articles.where('slug').equals(slug).first();
      return { success: true, data: article || null };
    } catch (error) {
      console.error("[ArticlesRepo] Fetch By Slug Fail:", error);
      return { success: false, error: "ARTICLE_BY_SLUG_FETCH_ERROR" };
    }
  }

  static async saveArticle(article: Article): Promise<RepoResponse<void>> {
    try {
      const isNew = !article.id && !article.uuid;
      
      if (isNew) {
        article.createdAt = new Date().toISOString();
      }
      article.updatedAt = new Date().toISOString();

      // Save to Local
      if (article.id) {
        await localDB.articles.update(article.id, article);
      } else {
        await localDB.articles.add(article);
      }

      // Save to Remote
      const supabase = getSupabase();
      if (isOnline() && supabase) {
        const { id, ...payload } = article;
        if (article.uuid) {
          const { error } = await supabase.from('articles').update(payload).eq('uuid', article.uuid);
          if (error) throw error;
        } else {
          const { error } = await supabase.from('articles').insert([payload]);
          if (error) throw error;
        }
      }
      return { success: true };
    } catch (error) {
      console.error("[ArticlesRepo] Save Fail:", error);
      return { success: false, error: error instanceof Error ? error.message : "ARTICLE_SAVE_ERROR" };
    }
  }

  static async deleteArticle(id: number, uuid?: string): Promise<RepoResponse<void>> {
    try {
      await localDB.articles.delete(id);
      const supabase = getSupabase();
      if (isOnline() && supabase && uuid) {
        const { error } = await supabase.from('articles').delete().eq('uuid', uuid);
        if (error) throw error;
      }
      return { success: true };
    } catch (error) {
      return { success: false, error: error instanceof Error ? error.message : "ARTICLE_DELETE_ERROR" };
    }
  }
}
