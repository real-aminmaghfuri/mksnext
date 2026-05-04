
"use client";
import React from 'react';
import { Sidebar } from '../../components/Sidebar';
import { MobileNav } from '../../components/MobileNav';
import { GlassCard } from 'ui';
import { Sparkles, PenTool, Brain, Save } from 'lucide-react';

export default function WriterPage() {
  return (
    <div className="flex h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white overflow-hidden text-sm">
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
         <header className="h-16 flex items-center justify-between px-6 border-b border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-black/50 backdrop-blur-md sticky top-0 z-20">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-500 rounded-lg text-white shadow-lg shadow-brand-500/20">
                    <PenTool size={18} />
                </div>
                <h2 className="text-xl font-black tracking-tight uppercase leading-none">AI SIBOS WRITER</h2>
            </div>
            <button className="bg-brand-500 hover:bg-brand-600 text-white px-4 py-2 rounded-xl flex items-center gap-2 font-black text-xs transition-all active:scale-95 shadow-lg shadow-brand-500/20">
                <Save size={16} /> SIMPAN DRAFT
            </button>
         </header>

         <main className="flex-1 overflow-y-auto p-4 md:p-6 custom-scrollbar relative z-10">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Editor Section */}
                <div className="lg:col-span-2 space-y-4">
                    <input 
                        type="text" 
                        placeholder="Judul Artikel..." 
                        className="w-full bg-transparent border-none text-3xl font-black focus:ring-0 placeholder:text-zinc-300 dark:placeholder:text-zinc-800 p-0"
                    />
                    <textarea 
                        placeholder="Mulai menulis atau gunakan AI..." 
                        className="w-full bg-transparent border-none focus:ring-0 min-h-[400px] text-lg leading-relaxed placeholder:text-zinc-200 dark:placeholder:text-zinc-800 p-0"
                    />
                </div>

                {/* AI Toolbox */}
                <div className="space-y-4">
                    <GlassCard variant="solid" className="p-5 border-brand-500/30 bg-brand-500/5">
                        <h3 className="font-black text-xs uppercase tracking-widest text-brand-500 mb-4 flex items-center gap-2">
                            <Sparkles size={14} /> AI Copilot
                        </h3>
                        <div className="space-y-3">
                            <button className="w-full text-left p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-brand-500 transition-all font-bold text-[11px] uppercase tracking-wider flex items-center justify-between group">
                                Generate Outline <Brain size={14} className="text-zinc-300 group-hover:text-brand-500" />
                            </button>
                            <button className="w-full text-left p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-brand-500 transition-all font-bold text-[11px] uppercase tracking-wider flex items-center justify-between group">
                                Buatkan Kesimpulan <Brain size={14} className="text-zinc-300 group-hover:text-brand-500" />
                            </button>
                            <button className="w-full text-left p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-brand-500 transition-all font-bold text-[11px] uppercase tracking-wider flex items-center justify-between group">
                                SEO Analysis <Brain size={14} className="text-zinc-300 group-hover:text-brand-500" />
                            </button>
                        </div>
                    </GlassCard>

                    <GlassCard variant="solid" className="p-5">
                        <h3 className="font-black text-xs uppercase tracking-widest text-zinc-500 mb-4">Metadata</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest block mb-1">Kategori</label>
                                <select className="w-full bg-zinc-100 dark:bg-zinc-900 border-none rounded-lg text-xs font-bold py-2 focus:ring-1 focus:ring-brand-500">
                                    <option>Edukasi</option>
                                    <option>Berita</option>
                                    <option>Tutorial</option>
                                </select>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </div>
         </main>
      </div>
      <Sidebar />
      <MobileNav />
    </div>
  );
}
