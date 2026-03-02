import React from 'react';
import Image from 'next/image';

interface ThumbnailItemAtomProps {
  src: string;
  isActive: boolean;
  onClick: () => void;
  index: number;
}

/**
 * ThumbnailItemAtom - An individual thumbnail button with active state styling.
 */
export const ThumbnailItemAtom: React.FC<ThumbnailItemAtomProps> = ({ 
  src, 
  isActive, 
  onClick, 
  index 
}) => {
  return (
    <button 
      onClick={onClick}
      className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 transition-all shrink-0 
        ${isActive 
          ? 'border-brand-500 scale-110 shadow-lg opacity-100' 
          : 'border-transparent opacity-50 hover:opacity-100 hover:scale-105'
        }`}
    >
      <Image src={src} alt={`Thumb ${index}`} fill className="object-cover" />
    </button>
  );
};
