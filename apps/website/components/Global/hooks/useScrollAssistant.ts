"use client";

import { useState, useEffect } from 'react';

/**
 * useScrollAssistant - Hook to manage scroll-to-top logic.
 */
export function useScrollAssistant() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTop(true);
      } else {
        setShowTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return {
    showTop,
    scrollToTop
  };
}
