"use client";

import { useState, useEffect, useRef } from 'react';
import { TOCItem } from 'shared';

/**
 * useArticleScrollSpy - Hook to manage scroll progress, hero shrink, and active section ID.
 * @param toc - Table of Contents items to spy on.
 */
export function useArticleScrollSpy(toc: TOCItem[]) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHeroShrunk, setIsHeroShrunk] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState<string>('');

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const currentScroll = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;
      
      setScrollTop(currentScroll);
      
      const scrolled = scrollHeight > 0 ? currentScroll / scrollHeight : 0;
      setScrollProgress(scrolled);

      setIsHeroShrunk(currentScroll > 100);

      // Scroll Spy Logic
      const spyThreshold = window.innerHeight / 3; 
      let currentId = '';
      
      for (const section of toc) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < spyThreshold) {
            currentId = section.id;
          }
        }
      }
      
      if (currentId) {
        setActiveSectionId(currentId);
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [toc]);

  return {
    scrollRef,
    scrollTop,
    scrollProgress,
    isHeroShrunk,
    activeSectionId
  };
}
