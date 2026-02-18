
"use client";
import React from 'react';
import { PortfolioItem } from 'shared';
import { Button } from 'ui';
import { MessageCircle } from 'lucide-react';

interface ContentProps {
  item: PortfolioItem;
}

export const PortfolioDetailContentAtom: React.FC<ContentProps> = ({ item }) => {
  return (
    <div className="container mx-auto px-6 py-12 md:py-20 relative z-10 max-w-4xl">
        
        <div className="mb-8">
            <span className="text-brand-600 dark:text-brand-500 font-black text-xs uppercase tracking-[0.2em] mb-2 block">
                {item.tag}
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white leading-tight mb-6">
                {item.title}
            </h1>
            <div className="h-1.5 w-24 bg-brand-500 rounded-full mb-8" />
        </div>

        <div className="prose prose-lg dark:prose-invert mb-12">
            <p className="text-xl font-medium text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {item.desc}
            </p>
            {/* Placeholder for extended content if available later */}
            <p className="text-zinc-500 dark:text-zinc-400">
                Project ini dikerjakan dengan standar tinggi PT Mesin Kasir Solo untuk memastikan operasional klien berjalan tanpa hambatan. Kami melakukan analisis kebutuhan, instalasi, hingga training SDM.
            </p>
        </div>

        <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8">
            <h3 className="text-lg font-black uppercase tracking-tight mb-4">Tertarik Project Serupa?</h3>
            <a href="https://wa.me/628816566935" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-brand-600 hover:bg-brand-500 text-white font-black tracking-widest uppercase shadow-xl shadow-brand-500/20">
                    <MessageCircle size={18} className="mr-2" /> KONSULTASI GRATIS
                </Button>
            </a>
        </div>

    </div>
  );
};
