import React from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxOverlayOrganismProps {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

/**
 * LightboxOverlayOrganism - A full-screen image viewer with navigation.
 */
export const LightboxOverlayOrganism: React.FC<LightboxOverlayOrganismProps> = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[150] bg-black/95 backdrop-blur-xl flex items-center justify-center animate-fade-in-up">
      {/* Close Button */}
      <button 
        onClick={onClose} 
        className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50"
      >
        <X size={40} />
      </button>

      {/* Navigation - Left */}
      <button 
        onClick={onPrev} 
        className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors z-50 p-4"
      >
        <ChevronLeft size={48} />
      </button>

      {/* Main Image Container */}
      <div className="relative w-[90vw] h-[80vh]">
        <Image 
          src={images[currentIndex]} 
          alt="Full Screen View"
          fill
          className="object-contain"
        />
      </div>

      {/* Navigation - Right */}
      <button 
        onClick={onNext} 
        className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors z-50 p-4"
      >
        <ChevronRight size={48} />
      </button>
      
      {/* Counter */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 font-mono text-sm tracking-widest">
        IMAGE {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};
