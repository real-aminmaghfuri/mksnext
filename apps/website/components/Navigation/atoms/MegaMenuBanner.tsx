
"use client";

import React from 'react';
import { Sparkles } from 'lucide-react';
import Image from 'next/image';

interface MegaMenuBannerProps {
  img: string;
  title: string;
}

export const MegaMenuBanner: React.FC<MegaMenuBannerProps> = ({ img, title }) => {
  return (
    <div className="relative overflow-hidden bg-zinc-900 h-full w-full group">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/20 transition-colors duration-500" />
      
      {/* Background Image */}
      <Image 
        src={img} 
        alt="Visual" 
        fill
        sizes="33vw"
        className="object-cover opacity-80 transition-transform duration-1000 group-hover:scale-110"
      />
      
      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 w-full p-8 z-20 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
         <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-brand-600/90 backdrop-blur text-[9px] font-bold uppercase tracking-wider mb-2 shadow-sm">
           <Sparkles size={10} /> FEATURED
         </div>
         <h3 className="text-2xl font-black uppercase tracking-tight leading-none">
            {title}
         </h3>
      </div>
    </div>
  );
};