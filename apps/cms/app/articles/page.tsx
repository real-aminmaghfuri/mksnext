
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
    <div className="flex h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white overflow-hidden text-sm">
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <Header title="CONTENT MANAGEMENT" />

        <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-4 py-2">
          <div className="flex items-center gap-3 flex-1 max-w-xl">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-400" size={14} />
              <input 
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 bg-zinc-100 dark:bg-zinc-900 border-none rounded-lg text-xs focus:ring-1 focus:ring-brand-500 transition-all"
              />
            </div>
            
            <div className="flex items-center gap-0.5 bg-zinc-100 dark:bg-zinc-900 p-0.5 rounded-lg">
              {(['ALL', 'PUBLISHED', 'DRAFT', 'ARCHIVED'] as const).map((status) => (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status)}
                  className={`px-2 py-1 rounded-md text-[9px] font-bold uppercase tracking-wider transition-all
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

          <div className="flex items-center gap-2">
            <Link href="/articles/ai">
              <Button size="sm" variant="outline" className="h-7 border-brand-500/50 text-brand-600 hover:bg-brand-500 hover:text-white font-bold tracking-wider uppercase text-[9px] px-3">
                <Sparkles size={12} className="mr-1.5" /> Strategist
              </Button>
            </Link>
            <Link href="/articles/new">
              <Button size="sm" className="h-7 bg-brand-600 hover:bg-brand-500 font-bold tracking-wider uppercase text-[9px] px-3">
                <Plus size={12} className="mr-1.5" /> New
              </Button>
            </Link>
          </div>
        </div>

        <main className="flex-1 overflow-y-auto p-4 custom-scrollbar">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-3 border-b border-zinc-200 dark:border-zinc-800 pb-2">
               <h2 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                  {isLoading ? 'Loading...' : `${articles.length} Items`}
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
