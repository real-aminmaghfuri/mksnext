
"use client";

import React from 'react';
import { Sparkles, BarChart3, Globe, ShieldCheck, Zap, Layers } from 'lucide-react';

export const LandingBento: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-black transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-xs font-black tracking-[0.3em] uppercase text-brand-500 mb-4 items-center flex justify-center gap-2">
            <Sparkles size={14} /> ADVANCED TECHNOLOGY
          </h2>
          <p className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tighter">
            Dibangun untuk <span className="text-brand-500">Skalabilitas</span> Tanpa Batas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-5 auto-rows-[220px]">
          
          {/* Card 1: Cloud & Real-time (Extra Large) */}
          <div className="md:col-span-3 lg:col-span-8 row-span-2 group relative overflow-hidden bg-zinc-100 dark:bg-luxury-dark rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8 md:p-10 flex flex-col justify-between hover:border-brand-500/50 transition-all duration-500">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.08),transparent_70%)]" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white dark:bg-black rounded-xl flex items-center justify-center shadow-xl mb-8 border border-zinc-200/50 dark:border-zinc-800/50">
                <Globe className="text-brand-500" size={24} />
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-zinc-900 dark:text-white mb-4 tracking-tighter">Integrasi Cloud Real-time</h3>
              <p className="max-w-md text-zinc-600 dark:text-zinc-400 font-medium text-lg leading-relaxed">Sync data stok dan penjualan dari semua cabang dalam hitungan milidetik. Gak nunggu lagi.</p>
            </div>
            
            {/* Visual: Data Flow Chart */}
            <div className="relative z-10 h-32 mt-8 flex items-end gap-2 pr-12">
                {[30, 60, 45, 90, 65, 80, 50, 75, 40, 85].map((h, i) => (
                    <div key={i} className="flex-1 bg-brand-500/10 dark:bg-brand-500/20 rounded-t-lg group-hover:bg-brand-500 transition-all duration-700" style={{ height: `${h}%`, transitionDelay: `${i * 40}ms` }} />
                ))}
                <div className="absolute top-0 right-0 w-32 h-full flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full border-2 border-dashed border-brand-500/30 flex items-center justify-center animate-spin-slow">
                        <Zap className="text-brand-500" size={24} />
                    </div>
                </div>
            </div>
          </div>

          {/* Card 2: Security (Compact) */}
          <div className="md:col-span-3 lg:col-span-4 group relative overflow-hidden bg-zinc-100 dark:bg-luxury-dark rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8 flex flex-col justify-center items-center text-center hover:border-emerald-500/50 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500 mb-6 group-hover:scale-110 transition-transform duration-500 border border-emerald-500/20 shadow-lg shadow-emerald-500/5">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-xl font-black text-zinc-900 dark:text-white mb-2">Keamanan Militer</h3>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-500">AES-256 Encrypted</p>
            <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 font-medium">Privasi data Anda adalah prioritas mutlak kami.</p>
          </div>

          {/* Card 3: Speed (Tall & Dark) */}
          <div className="md:col-span-3 lg:col-span-4 row-span-2 group relative overflow-hidden bg-zinc-950 rounded-2xl border border-zinc-800 p-8 md:p-10 flex flex-col justify-between">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(249,115,22,0.15),transparent_70%)]" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-yellow-500 mb-8 border border-white/10">
                <Zap size={24} fill="currentColor" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4 tracking-tight">Ultra Fast Response</h3>
              <p className="text-zinc-400 font-medium leading-relaxed">Dirancang untuk kecepatan transaksi tinggi tanpa lag sedikit pun di jam sibuk.</p>
            </div>
            <div className="relative z-10 pt-10 border-t border-white/5">
                <div className="text-6xl font-black text-white tracking-tighter">0.2<span className="text-xl text-yellow-500 font-black ml-1 uppercase">ms</span></div>
                <div className="text-[10px] font-black uppercase text-zinc-500 mt-3 tracking-widest">Internal Backend Latency</div>
            </div>
          </div>

          {/* Card 4: Architecture (Optimized) */}
          <div className="md:col-span-3 lg:col-span-5 group relative overflow-hidden bg-zinc-100 dark:bg-luxury-dark rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8 flex items-center gap-8 hover:border-brand-500/50 transition-all duration-500">
             <div className="w-16 h-16 bg-brand-500/10 rounded-xl flex items-center justify-center text-brand-500 flex-shrink-0 shadow-inner group-hover:rotate-12 transition-transform duration-500">
                <Layers size={28} />
             </div>
             <div>
                <h3 className="text-xl font-black text-zinc-900 dark:text-white mb-1">Microservices Ready</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium leading-normal">Arsitektur modular yang memungkinkan kustomisasi fitur tanpa batas.</p>
             </div>
          </div>

          {/* Card 5: Analytics (Strategic) */}
          <div className="md:col-span-3 lg:col-span-3 group relative overflow-hidden bg-zinc-100 dark:bg-luxury-dark rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8 flex flex-col justify-center hover:border-brand-500/50 transition-all duration-500">
            <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="text-brand-500" size={24} />
                <h3 className="text-lg font-black text-zinc-900 dark:text-white tracking-tight">AI Analytics</h3>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium leading-snug">Prediksi tren stok dan perilaku pelanggan dengan kecerdasan buatan.</p>
          </div>

        </div>

      </div>
    </section>
  );
};
