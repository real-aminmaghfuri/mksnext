
"use client";

import { useState } from 'react';
import { PortfolioItem } from 'shared';

export const usePortfolioDetail = (item: PortfolioItem) => {
  const isDigital = item.category === 'DIGITAL';
  
  // Since mock data only has 1 image, we simulate a gallery by duplicating it 
  // to demonstrate the gallery UI capabilities requested.
  const gallery = [item.image, item.image, item.image]; 
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const openLightbox = () => setIsLightboxOpen(true);
  const closeLightbox = () => setIsLightboxOpen(false);

  const generateWaLink = () => {
    const phone = "628816566935";
    const message = `Halo MKS, saya tertarik bikin project kayak *${item.title}*. Bisa diskusi konsep?`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  return {
    isDigital,
    gallery,
    currentImageIndex,
    setCurrentImageIndex,
    nextImage,
    prevImage,
    isLightboxOpen,
    openLightbox,
    closeLightbox,
    generateWaLink
  };
};
