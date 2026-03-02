"use client";

import { useEffect, useRef } from 'react';

/**
 * useGalleryAutoCenter - Hook to manage auto-centering of gallery thumbnails.
 * @param currentIndex - The index of the currently active image.
 * @returns scrollRef - A ref to be attached to the thumbnail container.
 */
export function useGalleryAutoCenter(currentIndex: number) {
  const scrollRef = useRef<HTMLDivElement>(null);

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

  return scrollRef;
}
