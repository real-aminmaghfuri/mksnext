
"use client";
import React from 'react';
import { Search, Download as DownloadIcon } from 'lucide-react';
import { Button } from 'ui';
import { DownloadItem } from 'shared';

interface DownloadGridProps {
  searchPlaceholder: string;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (c: string) => void;
  tableHeaders: {
    file: string;
    version: string;
    size: string;
    date: string;
    action: string;
  };
  items: DownloadItem[];
}

export const DownloadGridAtom: React.FC<DownloadGridProps> = ({
  searchPlaceholder,
  searchQuery,
  setSearchQuery,
  categories,
  selectedCategory,
  setSelectedCategory,
  tableHeaders,
  items
}) => {
  return (
    <div className="container mx-auto px-6 py-20">
      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12">
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full text-xs font-bold transition-all border ${
                selectedCategory === cat
                  ? 'bg-brand-500 border-brand-500 text-white shadow-lg shadow-brand-500/20'
                  : 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-brand-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-80">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
          <input
            type="text"
            placeholder={searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:border-brand-500 outline-none transition-all text-sm"
          />
        </div>
      </div>

      {/* Table - Recipe 1 Style */}
      <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-xl shadow-black/5">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50">
                <th className="px-8 py-5 text-[11px] font-black uppercase tracking-widest text-zinc-400">{tableHeaders.file}</th>
                <th className="px-8 py-5 text-[11px] font-black uppercase tracking-widest text-zinc-400">{tableHeaders.version}</th>
                <th className="px-8 py-5 text-[11px] font-black uppercase tracking-widest text-zinc-400">{tableHeaders.size}</th>
                <th className="px-8 py-5 text-[11px] font-black uppercase tracking-widest text-zinc-400">{tableHeaders.date}</th>
                <th className="px-8 py-5 text-[11px] font-black uppercase tracking-widest text-zinc-400 text-right">{tableHeaders.action}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {items.map((item, idx) => (
                <tr key={idx} className="group hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors">
                  <td className="px-8 py-6">
                    <div className="font-bold text-zinc-900 dark:text-white mb-1 group-hover:text-brand-500 transition-colors">{item.name}</div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-500">{item.desc}</div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="px-3 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-[10px] font-mono font-bold text-zinc-600 dark:text-zinc-400">
                      {item.version}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-sm text-zinc-600 dark:text-zinc-400 font-medium">{item.size}</td>
                  <td className="px-8 py-6 text-sm text-zinc-600 dark:text-zinc-400">{item.date}</td>
                  <td className="px-8 py-6 text-right">
                    <Button size="sm" variant="outline" className="rounded-xl group-hover:bg-brand-500 group-hover:text-white group-hover:border-brand-500">
                      <DownloadIcon size={14} className="mr-2" /> DOWNLOAD
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {items.length === 0 && (
          <div className="py-20 text-center text-zinc-500">
            Gak ada file yang cocok sama pencarian lo.
          </div>
        )}
      </div>
    </div>
  );
};
