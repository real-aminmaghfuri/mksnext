"use client";

import React, { useState } from 'react';
import { 
  Plus, 
  Trash2, 
  Move, 
  Monitor, 
  Code, 
  TrendingUp, 
  Users,
  Settings,
  ChevronDown
} from 'lucide-react';

const ICON_MAP = {
  'monitor': Monitor,
  'code': Code,
  'trending': TrendingUp,
  'users': Users,
};

export function SolutionSettings() {
  const [solutions, setSolutions] = useState([
    { id: '1', title: 'Gear Fisik', icon: 'monitor', desc: 'Mesin kasir badak, scanner laser, printer anti macet. Tahan banting buat lo yang kerjanya barbar.', color: 'bg-orange-500' },
    { id: '2', title: 'Otak Digital', icon: 'code', desc: 'Arsitektur Monorepo, Next.js. Bukan web template murahan yang bikin malu brand lo di depan investor.', color: 'bg-blue-500' },
    { id: '3', title: 'Dominasi Google', icon: 'trending', desc: "Halaman satu atau mati. Teknik SEO 'black-ops' & organik buat nyulik trafik kompetitor masuk ke lapak lo.", color: 'bg-emerald-500' },
    { id: '4', title: 'Transfer Ilmu', icon: 'users', desc: 'Gue ajarin SOP kasir anti maling, manajemen stok rapi, dan strategi marketing jalanan yang udah teruji.', color: 'bg-violet-500' },
  ]);

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-black italic tracking-tighter text-white uppercase">Amunisi Tempur</h2>
            <p className="text-sm text-white/40 italic">Kelola kartu-kartu solusi yang bikin kompetitor ketar-ketir.</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-all text-sm font-bold">
            <Plus className="w-4 h-4 text-orange-500" />
            <span>Tambah Kartu</span>
          </button>
        </div>

        <div className="grid gap-4">
          {solutions.map((item) => {
            const Icon = ICON_MAP[item.icon as keyof typeof ICON_MAP] || Settings;
            return (
              <div key={item.id} className="group overflow-hidden bg-white/5 border border-white/10 rounded-3xl transition-all hover:bg-white/[0.07] hover:border-white/20">
                <div className="p-6 flex items-start gap-6">
                  {/* Icon Preview */}
                  <div className={`p-4 rounded-2xl ${item.color} shadow-lg shadow-black/20 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Info */}
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center justify-between">
                      <input 
                        type="text" 
                        defaultValue={item.title}
                        className="bg-transparent text-xl font-bold italic outline-none focus:text-orange-500 transition-colors w-full"
                      />
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all">
                        <button className="p-2 text-white/20 hover:text-white"><Move className="w-4 h-4" /></button>
                        <button className="p-2 text-white/20 hover:text-red-500"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    </div>
                    <textarea 
                      defaultValue={item.desc}
                      className="w-full bg-white/5 border border-white/5 rounded-xl p-3 text-sm text-white/60 focus:bg-black/40 outline-none transition-all resize-none h-24"
                    />
                  </div>
                </div>

                {/* Card Meta Settings */}
                <div className="px-6 py-3 bg-black/40 border-t border-white/5 flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase text-white/30">Warna</span>
                    <div className={`w-4 h-4 rounded-full ${item.color}`} />
                    <ChevronDown className="w-3 h-3 text-white/20" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase text-white/30">Icon</span>
                    <span className="text-[10px] font-bold text-white/60 uppercase">{item.icon}</span>
                    <ChevronDown className="w-3 h-3 text-white/20" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
