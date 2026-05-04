
"use client";
import React from 'react';
import { Sidebar } from '../../components/Sidebar';
import { MobileNav } from '../../components/MobileNav';
import { GlassCard } from 'ui';
import { FileText, Plus, Search, Filter } from 'lucide-react';

export default function ArticlesPage() {
  return (
    <>
       <header className="h-16 flex items-center justify-between px-6 border-b border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-black/50 backdrop-blur-md sticky top-0 z-20">
          <h2 className="text-xl font-black tracking-tight uppercase leading-none">Management Artikel</h2>
          <button className="bg-brand-500 hover:bg-brand-600 text-white px-4 py-2 rounded-xl flex items-center gap-2 font-black text-xs transition-all active:scale-95 shadow-lg shadow-brand-500/20">
              <Plus size={16} /> TULIS BARU
          </button>
       </header>

       <main className="flex-1 overflow-y-auto p-4 md:p-6 custom-scrollbar relative z-10">
          <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="flex-1 relative">
                      <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                      <input 
                          type="text" 
                          placeholder="Cari judul artikel..." 
                          className="w-full pl-9 pr-4 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-xs font-bold focus:ring-1 focus:ring-brand-500 transition-all"
                      />
                  </div>
                  <button className="px-4 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl flex items-center gap-2 font-bold text-xs hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                      <Filter size={14} /> FILTER
                  </button>
              </div>

              <GlassCard variant="solid" className="overflow-hidden border-zinc-200 dark:border-zinc-800/50">
                  <table className="w-full text-left border-collapse">
                      <thead>
                          <tr className="border-b border-zinc-100 dark:border-zinc-800">
                              <th className="p-4 text-[10px] font-black uppercase tracking-widest text-zinc-500">Judul Artikel</th>
                              <th className="p-4 text-[10px] font-black uppercase tracking-widest text-zinc-500">Status</th>
                              <th className="p-4 text-[10px] font-black uppercase tracking-widest text-zinc-500">Tanggal</th>
                              <th className="p-4 text-[10px] font-black uppercase tracking-widest text-zinc-500 text-right">Aksi</th>
                          </tr>
                      </thead>
                      <tbody>
                          {[
                              { title: "Cara Memilih Mesin Kasir di Tahun 2025", status: "Published", date: "24 Feb 2025" },
                              { title: "Update SIBOS ERP v2.1: Fitur Cloud Sync", status: "Draft", date: "12 Mar 2025" },
                          ].map((art, i) => (
                              <tr key={i} className="border-b border-zinc-50 dark:border-zinc-900/50 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
                                  <td className="p-4">
                                      <div className="font-bold text-zinc-900 dark:text-white">{art.title}</div>
                                      <div className="text-[10px] text-zinc-400 uppercase font-black">PT Mesin Kasir Solo</div>
                                  </td>
                                  <td className="p-4">
                                      <span className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase ${
                                          art.status === 'Published' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-zinc-500/10 text-zinc-500'
                                      }`}>
                                          {art.status}
                                      </span>
                                  </td>
                                  <td className="p-4 text-[11px] font-mono text-zinc-500">{art.date}</td>
                                  <td className="p-4 text-right">
                                      <button className="text-brand-500 font-bold text-[11px] hover:underline">EDIT</button>
                                  </td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
              </GlassCard>
          </div>
       </main>
    </>
  );
}
