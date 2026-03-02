import React from 'react';
import Image from 'next/image';

interface GalleryImageAtomProps {
  src: string;
  alt: string;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  sizes?: string;
}

/**
 * GalleryImageAtom - A styled wrapper for Next.js Image with a background placeholder.
 */
export const GalleryImageAtom: React.FC<GalleryImageAtomProps> = ({ 
  src, 
  alt, 
  fill = true, 
  priority = false,
  className = "",
  sizes = "(max-width: 768px) 100vw, 70vw"
}) => {
  return (
    <div className={`relative w-full h-full bg-zinc-100 dark:bg-zinc-800 ${className}`}>
      <Image 
        src={src} 
        alt={alt}
        fill={fill}
        className="object-contain"
        sizes={sizes}
        priority={priority}
      />
    </div>
  );
};
