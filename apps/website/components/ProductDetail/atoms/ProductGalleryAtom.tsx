
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
    <div className="relative w-full h-[300px] md:h-[450px] flex items-center justify-center my-8 group">
       {/* Main Image */}
       <div className="relative w-full h-full">
          <Image 
             src={images[currentIndex]} 
             alt="Product Detail"
             fill
             className="object-contain drop-shadow-2xl transition-all duration-500"
             sizes="(max-width: 768px) 100vw, 50vw"
             priority
          />
       </div>

       {/* Navigation Arrows */}
       {images.length > 1 && (
         <>
            <button 
                onClick={onPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-brand-600 hover:text-white transition-all shadow-lg opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
            >
                <ChevronLeft size={24} />
            </button>
            <button 
                onClick={onNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-brand-600 hover:text-white transition-all shadow-lg opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
            >
                <ChevronRight size={24} />
            </button>
         </>
       )}

       {/* Indicators */}
       <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, idx) => (
             <div 
                key={idx} 
                className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-brand-600 w-6' : 'bg-zinc-300 dark:bg-zinc-700'}`}
             />
          ))}
       </div>
    </div>
  );
};
