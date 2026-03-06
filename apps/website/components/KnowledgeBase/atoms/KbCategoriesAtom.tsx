
"use client";
import React from 'react';
import { Wrench, Printer, Code, CreditCard, ChevronRight, BookOpen } from 'lucide-react';
import { KbCategory } from 'shared';

const ICON_MAP: Record<string, any> = {
  WRENCH: Wrench,
  PRINTER: Printer,
  CODE: Code,
  CREDIT_CARD: CreditCard,
};

interface KbCategoriesProps {
  title: string;
  categories: KbCategory[];
}

export const KbCategoriesAtom: React.FC<KbCategoriesProps> = ({ title, categories }) => {
  return (
    <div className="container mx-auto px-6 py-20">
      <h2 className="text-sm font-black uppercase tracking-widest text-brand-600 dark:text-brand-500 mb-12 text-center">
        {title}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => {
          const Icon = ICON_MAP[cat.icon] || BookOpen;
          return (
            <div 
              key={cat.id}
              className="group p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-brand-500 transition-all cursor-pointer shadow-xl shadow-black/5 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                <Icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{cat.title}</h3>
              <div className="flex items-center justify-between text-zinc-500 dark:text-zinc-400 text-sm">
                <span>{cat.articleCount} Artikel</span>
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
