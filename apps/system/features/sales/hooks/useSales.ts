"use client";

import { useState, useCallback, useEffect } from 'react';
import { useConfig } from 'ui';
import { DICTIONARY } from 'shared';
import { Product } from 'data';
import { useData } from '../../../contexts/DataContext';
import { SalesService, CartItem } from '../services/SalesService';

/**
 * useSales (UI State Adapter)
 * STRICT RULE: ONLY React State & bindings. 
 * MUST delegate everything to SalesService.
 * NO repository calls, NO raw JSON transaction construction.
 */
export function useSales() {
  const { language } = useConfig();
  const { isLoading, refresh } = useData();
  const text = DICTIONARY[language];

  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCheckoutOpen, setCheckoutOpen] = useState(false);

  const refreshProducts = useCallback(async () => {
    // Calling Service, not Repository
    const data = await SalesService.loadCatalog();
    setProducts(data);
  }, []);

  useEffect(() => {
    refreshProducts();
  }, [refreshProducts]);

  const addToCart = useCallback((product: Product) => {
    setCart(prev => SalesService.processAddToCart(prev, product));
  }, []);

  const updateQuantity = useCallback((productId: number, quantity: number) => {
    setCart(prev => SalesService.processUpdateQuantity(prev, productId, quantity));
  }, []);

  const removeFromCart = useCallback((productId: number) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  }, []);

  const handleCheckout = async (paymentMethod: string) => {
    try {
      // Direct Delegation to Business Layer
      await SalesService.executeCheckout(cart, paymentMethod);
      
      setCart([]);
      setCheckoutOpen(false);
      alert("Transaksi Amankan, Ndan!");
      refresh();
    } catch (e) {
      alert("Gagal posting transaksi, cek log!");
    }
  };

  const total = SalesService.calculateTotal(cart);

  const user = {
    name: "AMIN MAGHFURI",
    role: "Commander",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100"
  };

  return {
    text,
    user,
    products,
    cart,
    total,
    isLoading,
    isCheckoutOpen,
    setCheckoutOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    handleCheckout,
    refresh
  };
}
