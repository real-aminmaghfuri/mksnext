"use client";

import React, { useState } from 'react';
import { 
  Building2, 
  Type, 
  Image as ImageIcon, 
  Link as LinkIcon, 
  MoreHorizontal,
  Plus,
  Trash2,
  Move
} from 'lucide-react';

export function HeroSettings() {
  const [trustedBy, setTrustedBy] = useState([
    { id: '1', name: 'MKS SYSTEM' },
    { id: '2', name: 'GTI SYSTEM' },
    { id: '3', name: 'ERP SYSTEM' },
    { id: '4', name: 'BOS SYSTEM' },
    { id: '5', name: 'CRM SYSTEM' },
  ]);

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <section className="space-y-6">
        <h2 className="text-3xl font-black italic tracking-tighter text-white">HERO CONFIG.</h2>
        
        {/* Main Content */}
        <div className="grid gap-6 p-8 bg-white/5 rounded-3xl border border-white/10 ring-1 ring-white/5">
          <div className="space-y-4">
            <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-500">
              <Type className="w-4 h-4" />
              <span>Headline</span>
            </label>
            <input 
              type="text" 
              defaultValue="Solusi Mesin Kasir Modern & Digital"
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-lg focus:border-orange-500 outline-none transition-all"
            />
          </div>

          <div className="space-y-4">
            <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-500">
              <LinkIcon className="w-4 h-4" />
              <span>Primary CTA</span>
            </label>
            <div className="flex gap-4">
              <input 
                type="text" 
                placeholder="Label"
                defaultValue="Konsultasi Gratis"
                className="flex-1 bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:border-orange-500 outline-none transition-all"
              />
              <input 
                type="text" 
                placeholder="Link"
                defaultValue="https://wa.me/..."
                className="flex-[2] bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:border-orange-500 outline-none transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section - Requested at bottom of hero settings (Image 1) */}
      <section className="space-y-6 pt-12 border-t border-white/10">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h3 className="text-xl font-bold">Industry Trust</h3>
            <p className="text-sm text-white/40 italic">Kelola partner & klien yang nampil di bawah hero.</p>
          </div>
          <button className="p-2 bg-orange-500/10 text-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition-all">
            <Plus className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-white/30 tracking-[0.2em]">Label "Trusted By"</label>
            <input 
              type="text" 
              defaultValue="TRUSTED BY INDUSTRY LEADERS"
              className="w-full bg-black/20 border border-white/5 rounded-lg px-4 py-2 text-xs font-bold tracking-widest focus:ring-1 focus:ring-orange-500 outline-none uppercase"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            {trustedBy.map((item) => (
              <div key={item.id} className="group relative flex items-center justify-between p-4 bg-white/[0.03] border border-white/5 rounded-xl hover:border-orange-500/30 transition-all">
                <div className="flex items-center gap-3">
                  <div className="cursor-grab active:cursor-grabbing text-white/10 hover:text-white/30">
                    <Move className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-bold opacity-60 group-hover:opacity-100 transition-opacity">{item.name}</span>
                </div>
                <button className="opacity-0 group-hover:opacity-100 p-1.5 text-white/20 hover:text-red-500 transition-all">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
