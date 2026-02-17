
"use client";
import React from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryProps {
  images: string[];
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
}

export const ProductGalleryAtom: React.FC<GalleryProps> = ({ images, currentIndex, onNext, onPrev }) => {
  return (
    // Reduced margins, centered perfectly
    <div className="relative w-full h-full max-h-[500px] flex items-center justify-center group">
       
       {/* Main Image */}
       <div className="relative w-full h-full">
          <Image 
             src={images[currentIndex]} 
             alt="Product Detail"
             fill
             className="object-contain drop-shadow-2xl transition-all duration-500"
             sizes="(max-width: 768px) 100vw, 60vw"
             priority
          />
       </div>

       {/* Navigation Arrows */}
       {images.length > 1 && (
         <>
            <button 
                onClick={onPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 hover:scale-110 transition-all shadow-xl opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 z-10"
            >
                <ChevronLeft size={24} strokeWidth={2.5} />
            </button>
            <button 
                onClick={onNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 hover:scale-110 transition-all shadow-xl opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 z-10"
            >
                <ChevronRight size={24} strokeWidth={2.5} />
            </button>
         </>
       )}

       {/* Indicators */}
       <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, idx) => (
             <div 
                key={idx} 
                className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-brand-600 w-8' : 'bg-zinc-300 dark:bg-zinc-700 w-2'}`}
             />
          ))}
       </div>
    </div>
  );
};
