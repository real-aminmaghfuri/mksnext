
"use client";

import React from 'react';
import { Sidebar } from '../../../components/Sidebar';
import { Header } from '../../../components/Header';
import { MobileNav } from '../../../components/MobileNav';
import { useArticleEditor } from '../hooks/useArticleEditor';
import { ArticleEditorOrganism } from '../components/organisms/ArticleEditorOrganism';

export default function NewArticlePage() {
  const {
    article,
    setArticle,
    isSaving,
    handleSave,
    handleChange
  } = useArticleEditor({});

  return (
    <div className="flex h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white overflow-hidden">
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <Header title="CREATE NEW ARTICLE" />

        <main className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
          <div className="max-w-6xl mx-auto">
            <ArticleEditorOrganism 
              article={article}
              setArticle={setArticle}
              isSaving={isSaving}
              onSave={handleSave}
              onChange={handleChange}
            />
          </div>
        </main>
      </div>

      <Sidebar />
      <MobileNav />
    </div>
  );
}
