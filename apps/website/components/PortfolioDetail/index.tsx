
"use client";

import React, { useEffect } from 'react';
import { PortfolioItem } from 'shared';
import { usePortfolioDetail } from './usePortfolioDetail';
import { PortfolioGalleryAtom } from './atoms/PortfolioGalleryAtom';
import { PortfolioInfoAtom } from './atoms/PortfolioInfoAtom';
import { useRouter } from 'next/navigation';
import { ArrowLeft, X } from 'lucide-react';

interface PortfolioDetailProps {
  item: PortfolioItem;
}

export const PortfolioDetail: React.FC<PortfolioDetailProps> = ({ item }) => {
  const router = useRouter();
  const { 
    gallery, 
    currentImageIndex, 
    nextImage, 
    prevImage, 
    setCurrentImageIndex,
    isLightboxOpen,
    openLightbox,
    closeLightbox,
    generateWaLink
  } = usePortfolioDetail(item);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white overflow-hidden flex flex-col animate-fade-in-up">
       
       {/* Top Nav (Mobile) */}
       <div className="h-16 flex items-center justify-between px-6 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md z-50 shrink-0 lg:hidden">
          <button 
            onClick={() => router.back()} 
            className="p-2 -ml-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-white cursor-pointer"
          >
             <ArrowLeft size={24} />
          </button>
          <span className="font-bold text-xs uppercase tracking-widest line-clamp-1">{item.title}</span>
          <div className="w-8" /> 
       </div>

       {/* Close Button (Desktop) */}
       <button 
         onClick={() => router.back()} 
         className="hidden lg:flex absolute top-6 right-6 z-[60] w-14 h-14 rounded-full bg-brand-600 hover:bg-brand-500 shadow-2xl items-center justify-center text-white transition-all hover:rotate-90 hover:scale-110 active:scale-95 border-4 border-white dark:border-zinc-900 cursor-pointer"
       >
          <X size={28} strokeWidth={3} />
       </button>

       <div className="flex-1 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 h-full">
             
             {/* LEFT COLUMN (65%) - Visual Gallery */}
             <div className="lg:col-span-8 bg-zinc-200 dark:bg-zinc-900/50 flex flex-col h-full relative border-r border-zinc-200 dark:border-zinc-800 overflow-y-auto lg:overflow-hidden">
                <PortfolioGalleryAtom 
                    images={gallery}
                    currentIndex={currentImageIndex}
                    onNext={nextImage}
                    onPrev={prevImage}
                    onSelect={setCurrentImageIndex}
                    isLightboxOpen={isLightboxOpen}
                    onOpenLightbox={openLightbox}
                    onCloseLightbox={closeLightbox}
                    category={item.category}
                />
             </div>

             {/* RIGHT COLUMN (35%) - Project Info */}
             <div className="lg:col-span-4 bg-white dark:bg-black h-full overflow-y-auto custom-scrollbar border-t lg:border-t-0 border-zinc-200 dark:border-zinc-800 shadow-2xl lg:shadow-none relative z-10">
                <PortfolioInfoAtom 
                    item={item} 
                    waLink={generateWaLink()}
                />
             </div>

          </div>
       </div>

    </div>
  );
};
