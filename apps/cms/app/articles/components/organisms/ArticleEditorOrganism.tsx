
import React from 'react';
import { Article } from 'data';
import { GlassCard, Button } from 'ui';
import { Save, ArrowLeft, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';

interface ArticleEditorOrganismProps {
  article: Article;
  setArticle: React.Dispatch<React.SetStateAction<Article>>;
  isSaving: boolean;
  onSave: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

export const ArticleEditorOrganism: React.FC<ArticleEditorOrganismProps> = ({
  article,
  setArticle,
  isSaving,
  onSave,
  onChange
}) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      <div className="flex items-center justify-between">
        <Link 
          href="/articles"
          className="flex items-center text-xs font-black uppercase tracking-widest text-zinc-500 hover:text-brand-600 transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to Articles
        </Link>
        
        <Button 
          onClick={onSave}
          disabled={isSaving}
          className="bg-brand-600 hover:bg-brand-500 font-black tracking-widest uppercase text-[10px] px-8"
        >
          {isSaving ? 'SAVING...' : <><Save size={14} className="mr-2" /> SAVE ARTICLE</>}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <GlassCard variant="solid" className="p-6 md:p-8 space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Article Title</label>
              <input 
                name="title"
                value={article.title}
                onChange={onChange}
                placeholder="Enter a catchy title..."
                className="w-full bg-transparent border-none text-2xl md:text-3xl font-black placeholder:text-zinc-200 dark:placeholder:text-zinc-800 focus:ring-0 p-0"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Slug (URL)</label>
              <input 
                name="slug"
                value={article.slug}
                onChange={onChange}
                placeholder="article-url-slug"
                className="w-full bg-zinc-50 dark:bg-black/40 border border-zinc-100 dark:border-zinc-800 rounded-xl px-4 py-2 text-sm font-mono focus:ring-2 focus:ring-brand-500 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Content (HTML/Markdown)</label>
              <textarea 
                name="content"
                value={article.content}
                onChange={onChange}
                placeholder="Write your masterpiece here..."
                className="w-full h-[400px] bg-zinc-50 dark:bg-black/40 border border-zinc-100 dark:border-zinc-800 rounded-2xl px-4 py-4 text-sm focus:ring-2 focus:ring-brand-500 transition-all custom-scrollbar resize-none"
              />
            </div>
          </GlassCard>
        </div>

        {/* Sidebar Settings */}
        <div className="space-y-6">
          <GlassCard variant="solid" className="p-6 space-y-6">
            <div className="space-y-4">
              <h4 className="text-xs font-black uppercase tracking-widest border-b border-zinc-100 dark:border-zinc-800 pb-2">Publishing</h4>
              
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Status</label>
                <select 
                  name="status"
                  value={article.status}
                  onChange={onChange}
                  className="w-full bg-zinc-50 dark:bg-black/40 border border-zinc-100 dark:border-zinc-800 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-brand-500 transition-all"
                >
                  <option value="DRAFT">DRAFT</option>
                  <option value="PUBLISHED">PUBLISHED</option>
                  <option value="ARCHIVED">ARCHIVED</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Category</label>
                <input 
                  name="category"
                  value={article.category}
                  onChange={onChange}
                  placeholder="e.g. TIPS, NEWS"
                  className="w-full bg-zinc-50 dark:bg-black/40 border border-zinc-100 dark:border-zinc-800 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-brand-500 transition-all"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-black uppercase tracking-widest border-b border-zinc-100 dark:border-zinc-800 pb-2">Media</h4>
              
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Cover Image URL</label>
                <div className="relative">
                  <input 
                    name="coverImage"
                    value={article.coverImage}
                    onChange={onChange}
                    placeholder="https://..."
                    className="w-full bg-zinc-50 dark:bg-black/40 border border-zinc-100 dark:border-zinc-800 rounded-xl pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-brand-500 transition-all"
                  />
                  <ImageIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
                </div>
                {article.coverImage && (
                  <div className="mt-2 rounded-xl overflow-hidden border border-zinc-100 dark:border-zinc-800 aspect-video">
                    <img src={article.coverImage} alt="Preview" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-black uppercase tracking-widest border-b border-zinc-100 dark:border-zinc-800 pb-2">SEO</h4>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Excerpt / Meta Description</label>
                <textarea 
                  name="excerpt"
                  value={article.excerpt}
                  onChange={onChange}
                  placeholder="Short summary for SEO..."
                  className="w-full h-24 bg-zinc-50 dark:bg-black/40 border border-zinc-100 dark:border-zinc-800 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-brand-500 transition-all resize-none"
                />
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};
