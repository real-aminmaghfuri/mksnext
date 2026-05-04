
"use client";
import React from 'react';
import { Sidebar } from '../../components/Sidebar';
import { MobileNav } from '../../components/MobileNav';
import { GlassCard } from 'ui';
import { Image as ImageIcon, Upload, Search, Trash2 } from 'lucide-react';

export default function MediaPage() {
  return (
    <div className="flex h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white overflow-hidden text-sm">
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
         <header className="h-16 flex items-center justify-between px-6 border-b border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-black/50 backdrop-blur-md sticky top-0 z-20">
            <h2 className="text-xl font-black tracking-tight uppercase leading-none">Media Intelligence</h2>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-xl flex items-center gap-2 font-black text-xs transition-all active:scale-95 shadow-lg shadow-emerald-500/20">
                <Upload size={16} /> UPLOAD ASSET
            </button>
         </header>

         <main className="flex-1 overflow-y-auto p-4 md:p-6 custom-scrollbar relative z-10">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                    {[1,2,3,4,5,6].map((i) => (
                        <div key={i} className="group relative aspect-square bg-zinc-100 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:border-brand-500 transition-all">
                            <div className="absolute inset-0 flex items-center justify-center text-zinc-300 dark:text-zinc-700">
                                <ImageIcon size={32} />
                            </div>
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-2">
                                <p className="text-[10px] font-black text-white truncate w-full text-center">image_{i}.jpg</p>
                                <div className="mt-2 flex gap-2">
                                    <button className="p-1.5 bg-white/20 rounded-lg hover:bg-white/40 text-white transition-colors">
                                        <Search size={14} />
                                    </button>
                                    <button className="p-1.5 bg-rose-500/20 rounded-lg hover:bg-rose-500 text-white transition-colors text-rose-500 hover:text-white">
                                        <Trash2 size={14} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
         </main>
      </div>
      <Sidebar />
      <MobileNav />
    </div>
  );
}
