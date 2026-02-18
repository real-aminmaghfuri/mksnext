
"use client";
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Maximize2, X, Monitor, Box } from 'lucide-react';

interface GalleryProps {
  images: string[];
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
  onSelect: (index: number) => void;
  isLightboxOpen: boolean;
  onOpenLightbox: () => void;
  onCloseLightbox: () => void;
  category: string;
}

export const PortfolioGalleryAtom: React.FC<GalleryProps> = ({ 
    images, currentIndex, onNext, onPrev, onSelect, 
    isLightboxOpen, onOpenLightbox, onCloseLightbox, category
}) => {
  
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-center logic for thumbnails (Pseudo Looping Effect)
  useEffect(() => {
    if (scrollRef.current) {
        const container = scrollRef.current;
        const activeItem = container.children[currentIndex] as HTMLElement;
        if (activeItem) {
            // Calculate center position
            const scrollLeft = activeItem.offsetLeft - (container.clientWidth / 2) + (activeItem.clientWidth / 2);
            container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
        }
    }
  }, [currentIndex]);

  // BUTTON STYLE: Outline Orange (Normal) -> Solid Orange (Hover)
  const navBtnClass = "absolute top-1/2 -translate-y-1/2 p-3 rounded-full border-2 border-brand-500 text-brand-500 bg-transparent hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-all duration-300 shadow-xl z-20";

  return (
    <>
        {/* MAIN VIEW AREA */}
        <div className="flex-1 flex flex-col items-center justify-center p-6 lg:p-12 relative min-h-[400px] group w-full">
            
            {/* Main Image */}
            <div className="relative w-full h-full max-h-[600px] shadow-2xl rounded-xl overflow-hidden cursor-zoom-in bg-zinc-100 dark:bg-zinc-800" onClick={onOpenLightbox}>
                <Image 
                    src={images[currentIndex]} 
                    alt="Project Documentation"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 70vw"
                    priority
                />
                
                {/* Floating Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur text-xs font-black text-zinc-900 dark:text-white uppercase tracking-widest shadow-lg border border-white/20">
                        {category === 'DIGITAL' ? <Monitor size={12} className="text-brand-500" /> : <Box size={12} className="text-brand-500" />}
                        {category}
                    </span>
                </div>

                {/* Zoom Hint */}
                <div className="absolute bottom-4 right-4 bg-black/50 text-white p-2 rounded-lg backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <Maximize2 size={20} />
                </div>
            </div>

            {/* Thumbnail Strip - Hidden Scrollbar + Auto Center */}
            <div className="mt-8 w-full max-w-2xl relative">
                <div 
                    ref={scrollRef}
                    className="flex gap-3 overflow-hidden w-full justify-center px-4"
                >
                    {images.map((img, idx) => (
                        <button 
                            key={idx}
                            onClick={() => onSelect(idx)}
                            className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 transition-all shrink-0 
                                ${idx === currentIndex 
                                    ? 'border-brand-500 scale-110 shadow-lg opacity-100' 
                                    : 'border-transparent opacity-50 hover:opacity-100 hover:scale-105'
                                }`}
                        >
                            <Image src={img} alt={`Thumb ${idx}`} fill className="object-cover" />
                        </button>
                    ))}
                </div>
            </div>

            {/* Nav Arrows (Desktop) - Visible on Group Hover */}
            <button 
                onClick={(e) => { e.stopPropagation(); onPrev(); }}
                className={`${navBtnClass} left-4 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0`}
            >
                <ChevronLeft size={24} strokeWidth={2.5} />
            </button>
            <button 
                onClick={(e) => { e.stopPropagation(); onNext(); }}
                className={`${navBtnClass} right-4 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0`}
            >
                <ChevronRight size={24} strokeWidth={2.5} />
            </button>
        </div>

        {/* LIGHTBOX OVERLAY */}
        {isLightboxOpen && (
            <div className="fixed inset-0 z-[150] bg-black/95 backdrop-blur-xl flex items-center justify-center animate-fade-in-up">
                <button onClick={onCloseLightbox} className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50">
                    <X size={40} />
                </button>

                <button onClick={onPrev} className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors z-50 p-4">
                    <ChevronLeft size={48} />
                </button>

                <div className="relative w-[90vw] h-[80vh]">
                    <Image 
                        src={images[currentIndex]} 
                        alt="Full Screen"
                        fill
                        className="object-contain"
                    />
                </div>

                <button onClick={onNext} className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors z-50 p-4">
                    <ChevronRight size={48} />
                </button>
                
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 font-mono text-sm tracking-widest">
                    IMAGE {currentIndex + 1} / {images.length}
                </div>
            </div>
        )}
    </>
  );
};
