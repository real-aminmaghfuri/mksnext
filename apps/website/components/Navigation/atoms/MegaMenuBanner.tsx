"use client";

import React from 'react';
import { Sparkles } from 'lucide-react';

interface MegaMenuBannerProps {
  img: string;
  title: string;
}

export const MegaMenuBanner: React.FC<MegaMenuBannerProps> = ({ img, title }) => {
  return (
    <div className="col-span-3 relative overflow-hidden bg-zinc-900 h-full">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      
      {/* Background Image */}
      <img 
        src={img} 
        alt="Visual" 
        className="w-full h-full object-cover opacity-80 transition-transform duration-700 hover:scale-105"
      />
      
      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 w-full p-5 z-20 text-white">
         <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-brand-600/90 backdrop-blur text-[9px] font-bold uppercase tracking-wider mb-2 shadow-sm">
           <Sparkles size={10} /> FEATURED
         </div>
         <h3 className="text-xl font-black uppercase tracking-tight leading-none">
            {title}
         </h3>
      </div>
    </div>
  );
};