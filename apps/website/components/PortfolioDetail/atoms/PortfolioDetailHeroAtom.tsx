
"use client";
import React from 'react';
import { PortfolioItem } from 'shared';
import Image from 'next/image';
import { Monitor, Box } from 'lucide-react';

interface HeroProps {
  item: PortfolioItem;
  isDigital: boolean;
}

export const PortfolioDetailHeroAtom: React.FC<HeroProps> = ({ item, isDigital }) => {
  return (
    <div className={`relative w-full ${isDigital ? 'h-auto min-h-[60vh]' : 'h-[60vh]'} bg-zinc-200 dark:bg-zinc-900 overflow-hidden`}>
       
       {/* Image Rendering Logic */}
       {isDigital ? (
         // Digital: Full width render, let natural height take over
         <div className="relative w-full">
            <Image 
                src={item.image} 
                alt={item.title}
                width={1920}
                height={1080}
                style={{ width: '100%', height: 'auto' }}
                className="block"
                priority
            />
            {/* Overlay Gradient at bottom to merge with content */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-zinc-50 dark:from-black to-transparent" />
         </div>
       ) : (
         // Physical: Cover Background
         <>
            <Image 
                src={item.image} 
                alt={item.title}
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-black/40" />
         </>
       )}

       {/* Floating Badge */}
       <div className="absolute top-6 left-6 z-20">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur text-xs font-black text-zinc-900 dark:text-white uppercase tracking-widest shadow-lg">
              {isDigital ? <Monitor size={14} className="text-brand-500" /> : <Box size={14} className="text-brand-500" />}
              {item.category} Project
          </span>
       </div>

    </div>
  );
};
