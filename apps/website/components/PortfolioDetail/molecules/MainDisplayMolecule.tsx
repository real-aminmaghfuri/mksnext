import React from 'react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GalleryImageAtom } from '../atoms/GalleryImageAtom';
import { GalleryBadgeAtom } from '../atoms/GalleryBadgeAtom';
import { GalleryNavButtonAtom } from '../atoms/GalleryNavButtonAtom';

interface MainDisplayMoleculeProps {
  images: string[];
  currentIndex: number;
  category: string;
  onNext: () => void;
  onPrev: () => void;
  onOpenLightbox: () => void;
}

/**
 * MainDisplayMolecule - The primary image viewer with navigation and metadata.
 */
export const MainDisplayMolecule: React.FC<MainDisplayMoleculeProps> = ({ 
  images, 
  currentIndex, 
  category,
  onNext,
  onPrev,
  onOpenLightbox
}) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center relative min-h-[400px] group w-full">
      {/* Main Image Container - Auto Full Width */}
      <div 
        className="relative w-full h-full max-h-[700px] overflow-hidden cursor-zoom-in group/img" 
        onClick={onOpenLightbox}
      >
        <GalleryImageAtom 
          src={images[currentIndex]} 
          alt="Project Documentation"
          priority
        />
        
        <GalleryBadgeAtom category={category} />

        {/* Zoom Hint */}
        <div className="absolute bottom-4 right-4 bg-black/50 text-white p-2 rounded-lg backdrop-blur opacity-0 group-hover/img:opacity-100 transition-opacity pointer-events-none">
          <Maximize2 size={20} />
        </div>
      </div>

      {/* Desktop Navigation Arrows */}
      <GalleryNavButtonAtom 
        icon={ChevronLeft} 
        onClick={onPrev} 
        position="left" 
      />
      <GalleryNavButtonAtom 
        icon={ChevronRight} 
        onClick={onNext} 
        position="right" 
      />
    </div>
  );
};
