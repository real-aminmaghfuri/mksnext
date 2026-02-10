
"use client";

import { useState, useMemo } from 'react';
import { useConfig } from 'ui';
import { DICTIONARY, MOCK_PRODUCTS } from 'shared';
import { ShopLogic, ShopCategory } from './types';

export const useShop = (): ShopLogic => {
  const { language } = useConfig();
  const text = DICTIONARY[language];
  const [activeCategory, setCategory] = useState<ShopCategory>('ALL');

  // Logic: Format Currency
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', { 
      style: 'currency', 
      currency: 'IDR', 
      maximumSignificantDigits: 9 
    }).format(price);
  };

  // Logic: Generate WA Link
  const generateWaLink = (productName: string) => {
    const phone = "628816566935"; // MKS Hotline
    const message = `Halo MKS, saya tertarik angkut *${productName}*. Tolong info stok dan ongkir ke lokasi saya.`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  // Logic: Filter Products
  const filteredProducts = useMemo(() => {
    if (activeCategory === 'ALL') return MOCK_PRODUCTS;
    return MOCK_PRODUCTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return {
    text,
    products: filteredProducts,
    formatPrice,
    activeCategory,
    setCategory,
    generateWaLink
  };
};
