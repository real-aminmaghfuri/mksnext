"use client";

import { useMemo } from 'react';

export const useMegaMenu = (parentLabel: string) => {
  
  const visualData = useMemo(() => {
    const l = parentLabel.toLowerCase();
    
    // Logic: Determine Visual based on Parent Category Keywords
    // We use includes() to make it resilient to language changes (e.g. Profil/Profile)
    if (l.includes('profil') || l.includes('about') || l.includes('mks')) {
      return {
        img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop',
        title: 'MKS DNA',
      };
    }
    if (l.includes('kasir') || l.includes('pos')) {
      return {
        img: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=600&auto=format&fit=crop',
        title: 'HARDWARE',
      };
    }
    if (l.includes('website') || l.includes('web')) {
      return {
        img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop',
        title: 'DIGITAL',
      };
    }
    
    // Default Fallback
    return {
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop',
      title: 'EXPLORE',
    };
  }, [parentLabel]);

  return { visualData };
};