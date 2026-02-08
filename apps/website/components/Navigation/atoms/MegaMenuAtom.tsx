
"use client";
import React from 'react';
import Link from 'next/link';
import { SubMenuItem } from '../types';
import { ArrowRight, Sparkles } from 'lucide-react';

interface MegaMenuAtomProps {
  items: SubMenuItem[];
  parentLabel: string;
  isVisible: boolean;
  onLinkClick: () => void;
}

export const MegaMenuAtom: React.FC<MegaMenuAtomProps> = ({ items, parentLabel, isVisible, onLinkClick }) => {
  
  const getVisual = (label: string) => {
    const l = label.toLowerCase();
    if (l.includes('tentang') || l.includes('about')) {
      return {
        img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop',
        title: 'MKS DNA',
      };
    }
    if (l.includes('solusi') || l.includes('solutions')) {
      return {
        img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop',
        title: 'SYSTEMS',
      };
    }
    return {
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop',
      title: 'EXPLORE',
    };
  };

  const visual = getVisual(parentLabel);

  return (
    <div 
      className={`absolute top-full left-1/2 -translate-x-1/2 w-[900px] pt-2 z-50 transition-all duration-200 ease-out origin-top ${isVisible ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'}`}
    >
      {/* Compact Container */}
      <div className="bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden relative">
        
        {/* Accent Line */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-brand-600 via-red-500 to-brand-600" />

        <div className="grid grid-cols-12 h-full">
          
          {/* LEFT SIDE: Compact Grid Layout */}
          <div className="col-span-9 p-5">
            <div className="flex items-center justify-between mb-4 border-b border-zinc-100 dark:border-zinc-800 pb-2">
                <h4 className="text-[10px] font-black text-zinc-400 uppercase tracking-widest flex items-center gap-2">
                <span className="w-1 h-3 bg-brand-500 rounded-full"/>
                {parentLabel} DIRECTORY
                </h4>
            </div>
            
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {items.map((item, itemIdx) => {
                const Icon = item.icon;
                return (
                  <Link 
                    key={itemIdx} 
                    href={item.path}
                    onClick={onLinkClick}
                    className="group/item flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800"
                  >
                    <div className="shrink-0 p-1.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-400 group-hover/item:text-brand-600 dark:group-hover/item:text-brand-500 transition-colors">
                      <Icon size={16} strokeWidth={2} />
                    </div>
                    <div className="overflow-hidden">
                      <div className="flex items-center gap-1">
                        <p className="text-xs font-bold text-zinc-800 dark:text-zinc-200 group-hover/item:text-brand-600 dark:group-hover/item:text-brand-500 transition-colors truncate">
                          {item.label}
                        </p>
                      </div>
                      <p className="text-[10px] text-zinc-500 dark:text-zinc-500 truncate mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE: Visual Banner (Slim) */}
          <div className="col-span-3 relative overflow-hidden bg-zinc-900">
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img 
              src={visual.img} 
              alt="Visual" 
              className="w-full h-full object-cover opacity-80"
            />
            
            <div className="absolute bottom-0 left-0 w-full p-4 z-20 text-white">
               <div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-brand-600/90 backdrop-blur text-[8px] font-bold uppercase tracking-wider mb-2 shadow-sm">
                 <Sparkles size={8} /> FEATURED
               </div>
               <h3 className="text-lg font-black uppercase tracking-tight leading-none">{visual.title}</h3>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
