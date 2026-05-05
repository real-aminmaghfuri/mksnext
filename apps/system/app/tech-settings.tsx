"use client";

import React, { useState } from 'react';
import { 
  Cloud, 
  ShieldCheck, 
  Zap, 
  Layers, 
  BarChart3, 
  Cpu,
  Plus,
  Settings2,
  Trash2,
  Maximize2
} from 'lucide-react';

export function TechSettings() {
  const [techItems, setTechItems] = useState([
    { id: '1', title: 'Integrasi Cloud Real-time', icon: Cloud, desc: 'Sync data stok dan penjualan dari semua cabang dalam hitungan milidetik. Gak nunggu lagi.', size: 'large' },
    { id: '2', title: 'Keamanan Militer', icon: ShieldCheck, desc: 'AES-256 Encrypted. Privasi data Anda adalah prioritas mutlak kami.', size: 'medium' },
    { id: '3', title: 'Ultra Fast Response', icon: Zap, desc: 'Dirancang untuk kecepatan transaksi tinggi tanpa lag sedikit pun di jam sibuk.', size: 'medium' },
    { id: '4', title: 'Microservices Ready', icon: Layers, desc: 'Arsitektur modular yang memungkinkan kustomisasi fitur tanpa batas.', size: 'small' },
    { id: '5', title: 'AI Analytics', icon: BarChart3, desc: 'Prediksi tren stok dan perilaku pelanggan dengan kecerdasan buatan.', size: 'small' },
  ]);

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-black italic tracking-tighter text-white uppercase underline decoration-orange-500 decoration-4 underline-offset-8">Tech Stack</h2>
            <p className="text-sm text-white/40 italic mt-3">Atur amunisi teknologi yang bikin sistem lo secepat kilat dan sekuat baja.</p>
          </div>
          <button className="p-3 bg-white/5 border border-white/10 rounded-2xl hover:border-orange-500/50 hover:bg-orange-500/10 transition-all text-orange-500">
            <Plus className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {techItems.map((item) => (
            <div key={item.id} className={`group relative p-6 bg-black/40 border-2 border-white/5 rounded-3xl transition-all hover:border-orange-500/30 ${item.size === 'large' ? 'ring-1 ring-orange-500/20' : ''}`}>
              <div className="flex gap-6 items-start">
                <div className="flex flex-col items-center gap-4">
                  <div className="p-4 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/10 text-orange-500 group-hover:scale-110 transition-transform shadow-inner shadow-white/10">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className={`w-1 h-2 rounded-full mx-auto ${item.size === 'large' ? 'bg-orange-500' : 'bg-white/10'}`} />
                    <div className={`w-1 h-3 rounded-full mx-auto ${item.size === 'large' ? 'bg-orange-500' : 'bg-white/10'}`} />
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <input 
                        type="text" 
                        defaultValue={item.title}
                        className="bg-transparent text-xl font-black tracking-tight outline-none focus:text-orange-500 w-full"
                      />
                      <span className="px-2 py-1 bg-white/5 rounded text-[8px] font-black uppercase text-white/30 tracking-widest">{item.size}</span>
                    </div>
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all">
                      <button className="p-2 text-white/30 hover:text-white"><Maximize2 className="w-4 h-4" /></button>
                      <button className="p-2 text-white/30 hover:text-white"><Settings2 className="w-4 h-4" /></button>
                      <button className="p-2 text-white/30 hover:text-red-500"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </div>
                  
                  <textarea 
                    defaultValue={item.desc}
                    className="w-full bg-white/5 border border-white/5 rounded-2xl p-4 text-sm text-white/60 focus:bg-black/60 focus:ring-1 focus:ring-orange-500/30 outline-none transition-all resize-none min-h-[80px]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Internal Latency Mockup Settings (Bottom right of Image 3) */}
      <section className="p-8 bg-gradient-to-br from-orange-500/10 to-red-600/10 rounded-3xl border border-orange-500/20 shadow-2xl shadow-orange-500/5">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-xl font-black italic tracking-tight">Latency Override</h3>
            <p className="text-xs text-white/40 uppercase tracking-widest font-bold">Internal Backend Metrics</p>
          </div>
          <div className="text-right">
            <span className="text-3xl font-black text-orange-500 underline decoration-white/20">0.2</span>
            <span className="text-xs font-black ml-1">MS</span>
          </div>
        </div>
        <div className="flex gap-2 h-12 items-end justify-between px-2">
          {[40, 60, 30, 80, 50, 90, 70, 100, 60, 40].map((h, i) => (
            <div key={i} className="flex-1 bg-orange-500/20 rounded-t-sm relative group">
              <div className="absolute inset-0 bg-orange-500 origin-bottom transition-all duration-1000" style={{ height: `${h}%` }} />
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
