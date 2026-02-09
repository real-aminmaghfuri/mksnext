
"use client";
import React from 'react';
import { Button } from 'ui';
import { MessageCircle } from 'lucide-react';

export const ArticleCtaAtom: React.FC = () => {
  return (
    <div className="my-16 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 relative overflow-hidden text-center shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600/20 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-4">
                Pusing Ngurusin Sistem Sendirian?
            </h3>
            <p className="text-zinc-400 max-w-xl mx-auto mb-8 text-lg">
                Fokus jualan aja, Bos. Urusan sistem kasir, manajemen stok, dan laporan keuangan biar tim MKS yang handle.
            </p>
            <a href="/contact">
                <Button size="lg" className="bg-brand-600 hover:bg-brand-500 text-white font-black tracking-widest uppercase shadow-lg shadow-brand-600/40">
                    <MessageCircle size={18} className="mr-2" /> Konsultasi Gratis
                </Button>
            </a>
        </div>
    </div>
  );
};
