
"use client";

import React from 'react';
import { MainDisplayMolecule } from '../molecules/MainDisplayMolecule';
import { ThumbnailStripMolecule } from '../molecules/ThumbnailStripMolecule';
import { LightboxOverlayOrganism } from '../organisms/LightboxOverlayOrganism';

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

/**
 * PortfolioGalleryAtom - Orchestrates the portfolio gallery UI.
 * Now acts as a clean container for molecules and organisms.
 */
export const PortfolioGalleryAtom: React.FC<GalleryProps> = ({ 
    images, currentIndex, onNext, onPrev, onSelect, 
    isLightboxOpen, onOpenLightbox, onCloseLightbox, category
}) => {
  return (
    <>
      <MainDisplayMolecule 
        images={images}
        currentIndex={currentIndex}
        category={category}
        onNext={onNext}
        onPrev={onPrev}
        onOpenLightbox={onOpenLightbox}
      />

      <ThumbnailStripMolecule 
        images={images}
        currentIndex={currentIndex}
        onSelect={onSelect}
      />

      <LightboxOverlayOrganism 
        isOpen={isLightboxOpen}
        images={images}
        currentIndex={currentIndex}
        onClose={onCloseLightbox}
        onNext={onNext}
        onPrev={onPrev}
      />
    </>
  );
};

