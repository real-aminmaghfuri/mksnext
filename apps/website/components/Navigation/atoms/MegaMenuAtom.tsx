
"use client";
import React from 'react';
import Link from 'next/link';
import { SubMenuItem } from '../types';
import { ArrowRight, Sparkles } from 'lucide-react';

interface MegaMenuAtomProps {
  items: SubMenuItem[];
  parentLabel: string;
}

export const MegaMenuAtom: React.FC<MegaMenuAtomProps> = ({ items, parentLabel }) => {
  
  // Logic to determine visual content based on parent label (Simple keyword matching)
  // In a real app, this could be passed via the data structure, but strictly styling here:
  const getVisual = (label: string) => {
    const l = label.toLowerCase();
    if (l.includes('tentang') || l.includes('about')) {
      return {
        img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop',
        title: 'We Are MKS',
        desc: 'Membangun ekosistem ritel masa depan.'
      };
    }
    if (l.includes('solusi') || l.includes('solutions')) {
      return {
        img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop',
        title: 'System Intelligence',
        desc: 'Otomatisasi bisnis dari hulu ke hilir.'
      };
    }
    if (l.includes('inovasi') || l.includes('innovation')) {
      return {
        img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop',
        title: 'Future Labs',
        desc: 'Eksperimen teknologi tanpa batas.'
      };
    }
    // Default
    return {
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop',
      title: 'Explore More',
      desc: 'Temukan potensi terbaik bisnismu.'
    };
  };

  const visual = getVisual(parentLabel);

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] opacity-0 translate-y-4 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-out z-50 pt-4">
      {/* Container with Glassmorphism & Border */}
      <div className="bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-2xl overflow-hidden relative">
        
        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-600 via-red-500 to-brand-600" />

        <div className="grid grid-cols-12">
          
          {/* LEFT SIDE: Menu Links (Grid Layout) */}
          <div className="col-span-8 p-8">
            <h4 className="text-xs font-black text-zinc-400 uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-1 h-4 bg-brand-500 rounded-full"/>
              {parentLabel} DIRECTORY
            </h4>
            
            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              {items.map((item, itemIdx) => {
                const Icon = item.icon;
                return (
                  <Link 
                    key={itemIdx} 
                    href={item.path}
                    className="group/item flex items-start gap-4 p-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-zinc-100 dark:hover:border-zinc-800"
                  >
                    <div className="shrink-0 p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-500 group-hover/item:text-brand-600 dark:group-hover/item:text-brand-500 group-hover/item:bg-brand-50 dark:group-hover/item:bg-brand-900/20 transition-colors">
                      <Icon size={20} strokeWidth={2} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-bold text-zinc-900 dark:text-white group-hover/item:text-brand-600 dark:group-hover/item:text-brand-500 transition-colors">
                          {item.label}
                        </p>
                        <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-brand-500" />
                      </div>
                      <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-snug mt-1 font-medium line-clamp-2">
                        {item.desc}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE: Visual Banner */}
          <div className="col-span-4 relative overflow-hidden bg-zinc-100 dark:bg-zinc-900">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
            <img 
              src={visual.img} 
              alt="Visual" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            <div className="absolute bottom-0 left-0 w-full p-6 z-20 text-white">
               <div className="inline-flex items-center gap-1 px-2 py-1 rounded bg-brand-600/90 backdrop-blur text-[10px] font-bold uppercase tracking-wider mb-2 shadow-lg">
                 <Sparkles size={10} /> FEATURED
               </div>
               <h3 className="text-xl font-black uppercase tracking-tight mb-1">{visual.title}</h3>
               <p className="text-xs text-zinc-300 font-medium leading-relaxed">{visual.desc}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
