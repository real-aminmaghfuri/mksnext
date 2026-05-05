
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Monitor, Box } from 'lucide-react';
import { MOCK_PORTFOLIO, DICTIONARY } from 'shared';
import { useConfig, GlassCard } from 'ui';

export const LandingPortfolioPreview: React.FC = () => {
  const { language } = useConfig();
  const text = DICTIONARY[language];
  const items = MOCK_PORTFOLIO.slice(0, 3);

  return (
    <section className="py-24 bg-zinc-50 dark:bg-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-xs font-black tracking-[0.3em] uppercase text-brand-500 mb-4">
              SHOWCASE PROYEK
            </h2>
            <p className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tighter leading-none">
              Transformasi bisnis yang telah kami <span className="text-brand-500">wujudkan.</span>
            </p>
          </div>
          <Link 
            href="/portfolio" 
            className="group flex items-center gap-3 text-xs font-black uppercase tracking-widest text-zinc-500 hover:text-brand-500 transition-colors"
          >
            LIHAT SEMUA PORTOFOLIO 
            <div className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center group-hover:border-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-all">
              <ArrowRight size={16} />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <Link href={`/portfolio/${item.id}`} key={item.id} className="block group">
              <GlassCard variant="solid" className="h-full overflow-hidden border-zinc-200 dark:border-zinc-800 hover:border-brand-500 transition-all duration-500 flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                      <span className="px-2 py-1 rounded bg-white/90 dark:bg-black/80 backdrop-blur text-[9px] font-black uppercase tracking-wider text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800">
                        {item.tag}
                      </span>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 line-clamp-2 leading-tight group-hover:text-brand-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6 line-clamp-3 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                  <div className="mt-auto pt-6 border-t border-zinc-100 dark:border-zinc-900 flex items-center justify-between">
                     <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
                       {item.category} PROJECT
                     </span>
                     <ArrowRight size={16} className="text-brand-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </div>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};
