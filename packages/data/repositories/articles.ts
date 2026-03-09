
import { localDB } from '../local-db';
import { getSupabase, isOnline } from '../remote-db';
import { Article } from '../types';

export class ArticlesRepository {
  static async getArticles(): Promise<Article[]> {
    const supabase = getSupabase();
    if (isOnline() && supabase) {
       const { data, error } = await supabase.from('articles').select('*').order('created_at', { ascending: false });
       if (!error && data) return data;
    }
    return await localDB.articles.reverse().toArray();
  }

  static async getArticleBySlug(slug: string): Promise<Article | null> {
    const supabase = getSupabase();
    if (isOnline() && supabase) {
       const { data, error } = await supabase.from('articles').select('*').eq('slug', slug).single();
       if (!error && data) return data;
    }
    const article = await localDB.articles.where('slug').equals(slug).first();
    return article || null;
  }

  static async saveArticle(article: Article): Promise<void> {
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
            await supabase.from('articles').update(payload).eq('uuid', article.uuid);
        } else {
            await supabase.from('articles').insert([payload]);
        }
    }
  }

  static async deleteArticle(id: number, uuid?: string): Promise<void> {
    await localDB.articles.delete(id);
    const supabase = getSupabase();
    if (isOnline() && supabase && uuid) {
        await supabase.from('articles').delete().eq('uuid', uuid);
    }
  }
}
