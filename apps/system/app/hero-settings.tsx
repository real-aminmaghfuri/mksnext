"use client";

import React, { useState } from 'react';
import { Type, Link as LinkIcon, Move, Trash2, Plus } from 'lucide-react';

export function HeroSettings() {
  const [trustedBy, setTrustedBy] = useState([
    { id: '1', name: 'MKS SYSTEM' },
    { id: '2', name: 'GTI SYSTEM' },
    { id: '3', name: 'ERP SYSTEM' }
  ]);

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section className="space-y-8">
        <div className="space-y-1">
          <h2 className="text-3xl font-black italic tracking-tighter text-white uppercase">Konfigurasi <span className="text-orange-500">Hero</span></h2>
          <p className="text-xs text-white/40 italic">Urus headline pertama yang diliat calon klien tajir lo.</p>
        </div>
        
        <div className="grid gap-8 p-8 bg-white/[0.02] rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 blur-[80px] group-hover:bg-orange-500/10 transition-all duration-1000" />
          
          <div className="space-y-4">
            <label className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-orange-500/60">
              <Type className="w-4 h-4" />
              <span>Headline Utama</span>
            </label>
            <textarea 
              defaultValue="Solusi Mesin Kasir Modern & Digital Street Smart"
              className="w-full bg-black/40 border-accent rounded-2xl px-5 py-4 text-xl font-bold tracking-tight focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20 outline-none transition-all resize-none italic"
              rows={2}
            />
          </div>

          <div className="space-y-4">
            <label className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-orange-500/60">
              <LinkIcon className="w-4 h-4" />
              <span>Primary Call-to-Action</span>
            </label>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="text" 
                placeholder="Label Button"
                defaultValue="Konsultasi Gratis"
                className="flex-1 bg-black/40 border-accent rounded-xl px-5 py-3.5 text-sm font-bold focus:border-orange-500 outline-none transition-all"
              />
              <input 
                type="text" 
                placeholder="WhatsApp Link / URL"
                defaultValue="https://wa.me/628816566935"
                className="flex-[2] bg-black/40 border-accent rounded-xl px-5 py-3.5 text-sm font-mono focus:border-orange-500 outline-none transition-all text-white/60"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industry Trust - Di bawah Hero */}
      <section className="space-y-8 pt-12 border-t border-white/5">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h3 className="text-xl font-black italic tracking-tight uppercase">Kepercayaan <span className="text-orange-400">Industri</span></h3>
            <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold">Partner & Klien Strategis</p>
          </div>
          <button className="p-3 bg-orange-500/5 text-orange-500 rounded-2xl hover:bg-orange-500 hover:text-white transition-all border border-orange-500/20">
            <Plus className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {trustedBy.map((item) => (
            <div key={item.id} className="group relative flex items-center justify-between p-5 bg-white/[0.01] border border-white/5 rounded-2xl hover:border-orange-500/30 transition-all hover:bg-white/[0.02]">
              <div className="flex items-center gap-4">
                <div className="cursor-grab text-white/10 hover:text-orange-500 transition-colors">
                  <Move className="w-4 h-4" />
                </div>
                <span className="text-xs font-black tracking-[0.15em] text-white/60 group-hover:text-white uppercase italic">{item.name}</span>
              </div>
              <button className="opacity-0 group-hover:opacity-100 p-2 text-white/10 hover:text-red-500 transition-all">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
