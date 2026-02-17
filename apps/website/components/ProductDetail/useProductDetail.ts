
"use client";

import { useState } from 'react';
import { ProductItem, DICTIONARY } from 'shared';
import { useConfig } from 'ui';

export const useProductDetail = (product: ProductItem) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { language } = useConfig();
  const text = DICTIONARY[language];

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === product.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.gallery.length - 1 : prev - 1
    );
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', { 
      style: 'currency', 
      currency: 'IDR', 
      maximumSignificantDigits: 9 
    }).format(price);
  };

  const generateWaLink = (type: 'BUY' | 'NEGO') => {
    const phone = "628816566935";
    let message = "";
    
    if (type === 'BUY') {
        message = `Halo MKS, saya mau angkut *${product.name}*. Info total harga + ongkir ke lokasi saya.`;
    } else {
        message = `Halo MKS, saya minat *${product.name}*, tapi mau nego tipis bisa?`;
    }
    
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  return {
    currentImageIndex,
    nextImage,
    prevImage,
    formatPrice,
    generateWaLink,
    text
  };
};