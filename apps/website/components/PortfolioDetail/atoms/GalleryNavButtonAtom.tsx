import React from 'react';
import { LucideIcon } from 'lucide-react';

interface GalleryNavButtonAtomProps {
  icon: LucideIcon;
  onClick: (e: React.MouseEvent) => void;
  className?: string;
  position?: 'left' | 'right';
}

/**
 * GalleryNavButtonAtom - A styled navigation button for the gallery.
 * Features an outline-to-solid orange transition on hover.
 */
export const GalleryNavButtonAtom: React.FC<GalleryNavButtonAtomProps> = ({ 
  icon: Icon, 
  onClick, 
  className = "",
  position = 'left'
}) => {
  const baseClass = "absolute top-1/2 -translate-y-1/2 p-3 rounded-full border-2 border-brand-500 text-brand-500 bg-transparent hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-all duration-300 shadow-xl z-20";
  const hoverAnimation = position === 'left' 
    ? "opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0" 
    : "opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0";

  return (
    <button 
      onClick={(e) => { e.stopPropagation(); onClick(e); }}
      className={`${baseClass} ${position === 'left' ? 'left-4' : 'right-4'} ${hoverAnimation} ${className}`}
    >
      <Icon size={24} strokeWidth={2.5} />
    </button>
  );
};
