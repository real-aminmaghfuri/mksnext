"use client";

import React, { useState } from 'react';
import { Plus, Trash2, Move, Monitor, Code, TrendingUp, Users, Settings, ChevronDown } from 'lucide-react';

const ICON_MAP = { 'monitor': Monitor, 'code': Code, 'trending': TrendingUp, 'users': Users };

export function SolutionSettings() {
  const [solutions] = useState([
    { id: '1', title: 'Gear Fisik', icon: 'monitor', desc: 'Mesin kasir badak, scanner laser, printer anti macet. Tahan banting buat lo yang kerjanya barbar.', color: 'bg-orange-500' },
    { id: '2', title: 'Otak Digital', icon: 'code', desc: 'Arsitektur Monorepo, Next.js. Bukan web template murahan yang bikin malu brand lo.', color: 'bg-red-600' }
  ]);

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-3xl font-black italic tracking-tighter text-white uppercase">Amunisi <span className="text-red-600">Tempur</span></h2>
          <p className="text-xs text-white/40 italic tracking-wide">Kelola senjata utama yang lo tawarkan ke pasar.</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-3 bg-white/[0.03] hover:bg-white/[0.08] rounded-2xl border border-white/5 transition-all text-[10px] font-black uppercase tracking-widest text-orange-500">
          <Plus className="w-4 h-4" />
          <span>Tambah Senjata</span>
        </button>
      </div>

      <div className="grid gap-6">
        {solutions.map((item) => {
          const Icon = ICON_MAP[item.icon as keyof typeof ICON_MAP] || Settings;
          return (
            <div key={item.id} className="group overflow-hidden bg-white/[0.02] border border-white/5 rounded-[2rem] transition-all hover:bg-white/[0.04] hover:shadow-2xl hover:shadow-orange-500/5">
              <div className="p-8 flex flex-col sm:flex-row items-start gap-8">
                <div className={`p-5 rounded-[1.5rem] ${item.color} shadow-2xl shadow-black/40 group-hover:rotate-6 transition-transform flex-shrink-0`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-1 space-y-4 w-full">
                  <div className="flex items-center justify-between">
                    <input 
                      type="text" 
                      defaultValue={item.title}
                      className="bg-transparent text-2xl font-black italic outline-none focus:text-orange-500 transition-colors w-full uppercase tracking-tighter"
                    />
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all">
                      <button className="p-2 text-white/20 hover:text-white"><Move className="w-4 h-4" /></button>
                      <button className="p-2 text-white/20 hover:text-red-500"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </div>
                  <textarea 
                    defaultValue={item.desc}
                    className="w-full bg-black/20 border border-white/5 rounded-2xl p-4 text-xs font-medium text-white/50 leading-relaxed focus:bg-black/60 outline-none transition-all resize-none italic"
                  />
                </div>
              </div>

              <div className="px-8 py-3 bg-black/40 border-t border-white/5 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-black uppercase text-white/20 tracking-widest">Aksen Warna</span>
                  <div className={`w-3 h-3 rounded-full ${item.color}`} />
                  <ChevronDown className="w-3 h-3 text-white/10" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
