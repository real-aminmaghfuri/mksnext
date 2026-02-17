
"use client";

import { useState, useMemo, useEffect } from 'react';
import { useConfig } from 'ui';
import { DICTIONARY, MOCK_PRODUCTS, MOCK_PORTFOLIO } from 'shared';
import { ShopLogic, ShopCategory } from './types';

export const useShop = (): ShopLogic => {
  const { language } = useConfig();
  const text = DICTIONARY[language];
  const [activeCategory, setCategory] = useState<ShopCategory>('ALL');
  
  // Pagination State
  const [currentPage, setPage] = useState(1);
  const ITEMS_PER_PAGE = 12;

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

  // Logic: Pagination
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  // Reset page when category changes
  useEffect(() => {
    setPage(1);
  }, [activeCategory]);

  // Logic: Hardware Portfolio (Physical Category, Limit 3)
  const hardwareProjects = useMemo(() => {
    return MOCK_PORTFOLIO
      .filter(item => item.category === 'PHYSICAL')
      .slice(0, 3);
  }, []);

  return {
    text,
    products: paginatedProducts,
    formatPrice,
    activeCategory,
    setCategory,
    generateWaLink,
    currentPage,
    totalPages,
    setPage,
    hardwareProjects
  };
};
