
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

        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 auto-rows-[240px]">
          
          {/* Card 1: Cloud & Real-time (Large) */}
          <div className="md:col-span-3 lg:col-span-6 row-span-2 group relative overflow-hidden bg-zinc-100 dark:bg-luxury-dark rounded-[2rem] border border-zinc-200 dark:border-zinc-800 p-8 flex flex-col justify-between hover:border-brand-500/50 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white dark:bg-black rounded-2xl flex items-center justify-center shadow-xl mb-6">
                <Globe className="text-brand-500" size={24} />
              </div>
              <h3 className="text-2xl font-black text-zinc-900 dark:text-white mb-3">Integrasi Cloud Real-time</h3>
              <p className="text-zinc-500 dark:text-zinc-400 font-medium">Sync data stok dan penjualan dari semua cabang dalam hitungan milidetik. Gak nunggu lagi.</p>
            </div>
            <div className="relative z-10 h-32 mt-6 flex items-end">
                <div className="flex gap-2 items-end w-full h-full">
                    {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                        <div key={i} className="flex-1 bg-brand-500/20 dark:bg-brand-500/30 rounded-t-lg group-hover:bg-brand-500 transition-all duration-700" style={{ height: `${h}%`, transitionDelay: `${i * 50}ms` }} />
                    ))}
                </div>
            </div>
          </div>

          {/* Card 2: Security (Square) */}
          <div className="md:col-span-3 lg:col-span-3 group relative overflow-hidden bg-zinc-100 dark:bg-luxury-dark rounded-[2rem] border border-zinc-200 dark:border-zinc-800 p-8 flex flex-col justify-center items-center text-center hover:border-emerald-500/50 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500 mb-6 group-hover:scale-110 transition-transform duration-500">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-xl font-black text-zinc-900 dark:text-white mb-2">Keamanan Militer</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 font-bold uppercase tracking-widest text-emerald-500">AES-256 Encrypted</p>
          </div>

          {/* Card 3: Speed (Tall) */}
          <div className="md:col-span-3 lg:col-span-3 row-span-2 group relative overflow-hidden bg-zinc-950 rounded-[2rem] border border-zinc-800 p-8 flex flex-col justify-between">
            <div className="absolute inset-0 bg-brand-500/10 opacity-40" />
            <div className="relative z-10">
              <Zap className="text-yellow-500 mb-6" size={28} />
              <h3 className="text-2xl font-black text-white mb-3">Ultra Fast Response</h3>
              <p className="text-zinc-400 font-medium">Dirancang untuk kecepatan transaksi tinggi tanpa lag sedikit pun.</p>
            </div>
            <div className="relative z-10">
                <div className="text-5xl font-black text-white tracking-widest">0.2<span className="text-xl text-yellow-500 font-bold">ms</span></div>
                <div className="text-[10px] font-black uppercase text-zinc-500 mt-2">Latency Internal</div>
            </div>
          </div>

          {/* Card 4: Architecture (Wide) */}
          <div className="md:col-span-3 lg:col-span-6 group relative overflow-hidden bg-zinc-100 dark:bg-luxury-dark rounded-[2rem] border border-zinc-200 dark:border-zinc-800 p-8 flex items-center gap-6 hover:border-brand-500/50 transition-all duration-500">
             <div className="w-20 h-20 bg-brand-500/10 rounded-2xl flex items-center justify-center text-brand-500 flex-shrink-0">
                <Layers size={32} />
             </div>
             <div>
                <h3 className="text-xl font-black text-zinc-900 dark:text-white mb-1">Microservices Ready</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium">Modular, fleksibel, mudah dikustomisasi sesuai kebutuhan bisnis unik Anda.</p>
             </div>
          </div>

          {/* Card 5: Analytics (Small) */}
          <div className="md:col-span-3 lg:col-span-3 group relative overflow-hidden bg-zinc-100 dark:bg-luxury-dark rounded-[2rem] border border-zinc-200 dark:border-zinc-800 p-8 flex flex-col justify-center hover:border-brand-500/50 transition-all duration-500">
            <BarChart3 className="text-brand-500 mb-4" size={24} />
            <h3 className="text-lg font-black text-zinc-900 dark:text-white">AI Analytics</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Prediksi penjualan di masa depan.</p>
          </div>

        </div>

      </div>
    </section>
  );
};
