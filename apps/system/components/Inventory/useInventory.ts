
"use client";

import { useState, useEffect, useMemo } from 'react';
import { useConfig } from 'ui';
import { DICTIONARY } from 'shared';
import { Repository, Product } from 'data';

export const useInventory = () => {
  const { language } = useConfig();
  const text = DICTIONARY[language];
  
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const loadProducts = async () => {
    setIsLoading(true);
    try {
        if (typeof window !== 'undefined') {
            await Repository.init();
            const data = await Repository.getProducts();
            setProducts(data);
        }
    } catch (e) {
        console.error("Failed to load inventory", e);
    } finally {
        setIsLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    if (!searchQuery) return products;
    const lowerQ = searchQuery.toLowerCase();
    return products.filter(p => 
        p.name.toLowerCase().includes(lowerQ) || 
        p.sku.toLowerCase().includes(lowerQ)
    );
  }, [products, searchQuery]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);
  };

  return {
    text,
    products: filteredProducts,
    isLoading,
    searchQuery,
    setSearchQuery,
    refresh: loadProducts,
    formatCurrency
  };
};
