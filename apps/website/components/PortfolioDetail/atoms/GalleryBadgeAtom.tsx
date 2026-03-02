import React from 'react';
import { Monitor, Box } from 'lucide-react';

interface GalleryBadgeAtomProps {
  category: string;
  className?: string;
}

/**
 * GalleryBadgeAtom - A floating badge indicating the project category.
 */
export const GalleryBadgeAtom: React.FC<GalleryBadgeAtomProps> = ({ category, className = "" }) => {
  const isDigital = category.toUpperCase() === 'DIGITAL';
  
  return (
    <div className={`absolute top-4 left-4 z-20 ${className}`}>
      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur text-xs font-black text-zinc-900 dark:text-white uppercase tracking-widest shadow-lg border border-white/20">
        {isDigital ? <Monitor size={12} className="text-brand-500" /> : <Box size={12} className="text-brand-500" />}
        {category}
      </span>
    </div>
  );
};
