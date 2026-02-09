
"use client";
import React from 'react';
import { SolutionItem } from 'shared';
import { GlassCard, Button } from 'ui';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface SolutionGridProps {
  solutions: SolutionItem[];
}

export const SolutionGridAtom: React.FC<SolutionGridProps> = ({ solutions }) => {
  if (solutions.length === 0) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <div className="inline-block p-6 rounded-3xl bg-zinc-100 dark:bg-zinc-900 mb-4">
            <span className="text-4xl">🚧</span>
        </div>
        <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Belum ada data tempur.</h3>
        <p className="text-zinc-500">Kategori ini sedang dalam pengembangan di markas pusat.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {solutions.map((item) => (
          <GlassCard key={item.id} variant="solid" className="flex flex-col md:flex-row bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 overflow-hidden group hover:border-brand-500/50 transition-all duration-500">
            
            {/* Image Side */}
            <div className="md:w-2/5 relative min-h-[250px] md:min-h-full">
               <img 
                 src={item.image} 
                 alt={item.title} 
                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
               />
               <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
               <div className="absolute top-4 left-4">
                  <span className="bg-black/80 backdrop-blur text-white text-[10px] font-black uppercase px-2 py-1 rounded border border-white/10">
                    {item.industryTag}
                  </span>
               </div>
            </div>

            {/* Content Side */}
            <div className="md:w-3/5 p-8 flex flex-col">
               <h3 className="text-2xl font-black text-zinc-900 dark:text-white mb-3 uppercase tracking-tight leading-none group-hover:text-brand-600 dark:group-hover:text-brand-500 transition-colors">
                 {item.title}
               </h3>
               <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                 {item.desc}
               </p>
               
               {/* Features */}
               <div className="mb-8 space-y-2">
                 {item.features.map((feature, idx) => (
                   <div key={idx} className="flex items-center gap-2 text-sm font-bold text-zinc-700 dark:text-zinc-300">
                      <CheckCircle2 size={16} className="text-brand-500 shrink-0" />
                      <span>{feature}</span>
                   </div>
                 ))}
               </div>

               <div className="mt-auto">
                 <a href="/contact">
                    <Button variant="outline" size="sm" className="w-full font-bold uppercase tracking-widest text-xs group/btn">
                        Konsultasi Sistem <ArrowRight size={14} className="ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                 </a>
               </div>
            </div>

          </GlassCard>
        ))}
      </div>
    </div>
  );
};
