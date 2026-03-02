import React from 'react';
import { ThumbnailItemAtom } from '../atoms/ThumbnailItemAtom';
import { useGalleryAutoCenter } from '../hooks/useGalleryAutoCenter';

interface ThumbnailStripMoleculeProps {
  images: string[];
  currentIndex: number;
  onSelect: (index: number) => void;
}

/**
 * ThumbnailStripMolecule - A scrollable row of thumbnails that auto-centers the active item.
 */
export const ThumbnailStripMolecule: React.FC<ThumbnailStripMoleculeProps> = ({ 
  images, 
  currentIndex, 
  onSelect 
}) => {
  const scrollRef = useGalleryAutoCenter(currentIndex);

  return (
    <div className="mt-8 w-full max-w-2xl relative">
      <div 
        ref={scrollRef}
        className="flex gap-3 overflow-hidden w-full justify-center px-4"
      >
        {images.map((img, idx) => (
          <ThumbnailItemAtom 
            key={idx}
            src={img}
            isActive={idx === currentIndex}
            onClick={() => onSelect(idx)}
            index={idx}
          />
        ))}
      </div>
    </div>
  );
};
