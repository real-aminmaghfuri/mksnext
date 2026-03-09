
"use client";

import React from 'react';
import { Sidebar } from '../../components/Sidebar';
import { Header } from '../../components/Header';
import { MobileNav } from '../../components/MobileNav';
import { Button } from 'ui';
import { Plus, Search, Filter, Sparkles } from 'lucide-react';
import { useArticles } from './hooks/useArticles';
import { ArticleListOrganism } from './components/organisms/ArticleListOrganism';
import Link from 'next/link';

export default function ArticlesPage() {
  const {
    articles,
    isLoading,
    searchTerm,
    setSearchTerm,
    filterStatus,
    setFilterStatus,
    handleDelete
  } = useArticles();

  return (
    <div className="flex h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white overflow-hidden">
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <Header title="CONTENT MANAGEMENT" />

        <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-6 py-4">
          <div className="flex items-center gap-4 flex-1 max-w-xl">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
              <input 
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-zinc-100 dark:bg-zinc-900 border-none rounded-xl text-sm focus:ring-2 focus:ring-brand-500 transition-all"
              />
            </div>
            
            <div className="flex items-center gap-1 bg-zinc-100 dark:bg-zinc-900 p-1 rounded-xl">
              {(['ALL', 'PUBLISHED', 'DRAFT', 'ARCHIVED'] as const).map((status) => (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status)}
                  className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all
                    ${filterStatus === status 
                      ? 'bg-white dark:bg-zinc-800 text-brand-600 shadow-sm' 
                      : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                    }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          <Link href="/articles/ai">
            <Button size="sm" variant="outline" className="border-brand-500/50 text-brand-600 hover:bg-brand-500 hover:text-white font-black tracking-widest uppercase text-[10px] px-6">
              <Sparkles size={14} className="mr-2" /> AI STRATEGIST
            </Button>
          </Link>
          <Link href="/articles/new">
            <Button size="sm" className="bg-brand-600 hover:bg-brand-500 font-black tracking-widest uppercase text-[10px] px-6">
              <Plus size={14} className="mr-2" /> NEW ARTICLE
            </Button>
          </Link>
        </div>

        <main className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-6">
               <h2 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400">
                  {isLoading ? 'Loading Articles...' : `Showing ${articles.length} Articles`}
               </h2>
            </div>

            <ArticleListOrganism 
              articles={articles}
              isLoading={isLoading}
              onDelete={handleDelete}
            />
          </div>
        </main>
      </div>

      <Sidebar />
      <MobileNav />
    </div>
  );
}
