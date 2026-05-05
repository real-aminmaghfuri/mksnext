"use client";

import React, { useState } from 'react';
import { Cloud, ShieldCheck, Zap, Layers, Plus, Settings2, Trash2 } from 'lucide-react';

export function TechSettings() {
  const [techItems] = useState([
    { id: '1', title: 'Real-time Cloud Sync', icon: Cloud, desc: 'Sync data stok miliaran cabang dalam milidetik. Gak pake lemot.', size: 'Ultra' },
    { id: '2', title: 'Hardened Security', icon: ShieldCheck, desc: 'Enkripsi sekelas militer. Privasi data klien adalah harga mati.', size: 'Core' }
  ]);

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-3xl font-black italic tracking-tighter text-white uppercase underline decoration-orange-500 decoration-4 underline-offset-8">Tech <span className="text-orange-500">Stack</span></h2>
          <p className="text-[11px] text-white/30 uppercase tracking-[0.2em] font-bold mt-4">Manual Amunisi Digital SIBOS</p>
        </div>
        <button className="p-4 bg-orange-500/5 border border-orange-500/20 rounded-[1.5rem] hover:bg-orange-500 hover:text-white transition-all text-orange-500">
          <Plus className="w-6 h-6" />
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {techItems.map((item) => (
          <div key={item.id} className="group relative p-8 bg-black/40 border-2 border-white/5 rounded-[2.5rem] transition-all hover:border-orange-500/40 hover:shadow-2xl hover:shadow-orange-500/[0.03]">
            <div className="flex gap-8 items-start">
              <div className="flex flex-col items-center gap-6">
                <div className="p-5 bg-gradient-to-br from-white/[0.03] to-white/[0.01] rounded-[1.5rem] border border-white/5 text-orange-500 group-hover:scale-110 group-hover:-rotate-3 transition-transform shadow-inner shadow-white/5">
                  <item.icon className="w-7 h-7" />
                </div>
                <div className="w-0.5 h-12 bg-gradient-to-b from-orange-500/20 to-transparent rounded-full" />
              </div>

              <div className="flex-1 space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <input type="text" defaultValue={item.title} className="bg-transparent text-xl font-black tracking-tight outline-none focus:text-orange-500 w-full uppercase italic" />
                    <span className="px-3 py-1 bg-orange-500/10 rounded-full text-[8px] font-black uppercase text-orange-500 tracking-[0.2em]">{item.size}</span>
                  </div>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all flex-shrink-0">
                    <button className="p-2 text-white/20 hover:text-white transition-colors"><Settings2 className="w-4 h-4" /></button>
                    <button className="p-2 text-white/20 hover:text-red-500 transition-colors"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </div>
                
                <textarea 
                  defaultValue={item.desc}
                  className="w-full bg-white/[0.01] border border-white/5 rounded-2xl p-5 text-[13px] font-medium text-white/40 leading-relaxed focus:bg-black/60 focus:ring-1 focus:ring-orange-500/20 outline-none transition-all resize-none h-24 italic"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Latency Dashboard - Elemen Immersif Mewah */}
      <section className="p-10 bg-gradient-to-br from-orange-500/[0.08] to-red-600/[0.05] rounded-[3rem] border border-white/5 shadow-2xl relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-orange-500/10 blur-[100px] rounded-full" />
        <div className="flex items-center justify-between mb-10 relative z-10">
          <div className="space-y-1">
            <h3 className="text-xl font-black italic uppercase tracking-tighter">Latency <span className="text-orange-500">Metric</span></h3>
            <p className="text-[9px] text-white/30 uppercase tracking-[0.3em] font-bold">In-Site Backend Analysis</p>
          </div>
          <div className="text-right">
            <span className="text-4xl font-black text-orange-500 italic">0.18</span>
            <span className="text-[10px] font-black ml-2 text-white/40">MS</span>
          </div>
        </div>
        <div className="flex gap-2 h-16 items-end justify-between px-2 relative z-10">
          {[40, 70, 30, 90, 50, 110, 80, 120, 60, 45, 95, 30].map((h, i) => (
            <div key={i} className="flex-1 bg-white/[0.03] rounded-t-lg relative group overflow-hidden">
              <div 
                className="absolute inset-0 bg-gradient-to-t from-orange-600 to-orange-400 origin-bottom transition-all duration-1000 ease-in-out" 
                style={{ height: `${(h/120)*100}%` }} 
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
