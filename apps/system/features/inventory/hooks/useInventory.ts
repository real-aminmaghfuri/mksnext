"use client";

import { useState, useEffect, useMemo, useCallback } from 'react';
import { useConfig } from 'ui';
import { DICTIONARY } from 'shared';
import { Product } from 'data';
import { InventoryService } from '../services/InventoryService';

/**
 * useInventory (UI Adapter)
 * STRICT RULE: Only manages UI state (loading, search inputs) and bindings.
 * Delegates all logic to InventoryService.
 */
export const useInventory = () => {
  const { language } = useConfig();
  const text = DICTIONARY[language];
  
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const refresh = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await InventoryService.getCatalog();
      setProducts(data);
    } catch (e) {
      console.error("Hook Error:", e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  // UI Filtering binding
  const filteredProducts = useMemo(() => {
    return InventoryService.filterProducts(products, searchQuery);
  }, [products, searchQuery]);

  return {
    text,
    products: filteredProducts,
    isLoading,
    searchQuery,
    setSearchQuery,
    refresh,
    formatCurrency: InventoryService.formatCurrency
  };
};
