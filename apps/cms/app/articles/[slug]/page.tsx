
"use client";

import React from 'react';
import { Sidebar } from '../../../components/Sidebar';
import { Header } from '../../../components/Header';
import { MobileNav } from '../../../components/MobileNav';
import { useArticleEditor } from '../hooks/useArticleEditor';
import { ArticleEditorOrganism } from '../components/organisms/ArticleEditorOrganism';
import { useParams } from 'next/navigation';

export default function EditArticlePage() {
  const params = useParams();
  const slug = params.slug as string;

  const {
    article,
    setArticle,
    isLoading,
    isSaving,
    handleSave,
    handleChange
  } = useArticleEditor({ slug });

  return (
    <div className="flex h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white overflow-hidden">
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <Header title="EDIT ARTICLE" />

        <main className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
          <div className="max-w-6xl mx-auto">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center h-64 text-zinc-500">
                <div className="w-8 h-8 border-4 border-brand-500 border-t-transparent rounded-full animate-spin mb-4" />
                <p className="text-xs font-black uppercase tracking-widest">Loading Article...</p>
              </div>
            ) : (
              <ArticleEditorOrganism 
                article={article}
                setArticle={setArticle}
                isSaving={isSaving}
                onSave={handleSave}
                onChange={handleChange}
              />
            )}
          </div>
        </main>
      </div>

      <Sidebar />
      <MobileNav />
    </div>
  );
}
