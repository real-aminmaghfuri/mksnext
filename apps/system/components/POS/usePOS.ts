
"use client";

import { useState, useEffect } from 'react';
import { useConfig } from 'ui';
import { DICTIONARY } from 'shared';
import { Repository, Product, Transaction } from 'data';
import { useData } from '../../contexts/DataContext';

export interface CartItem {
  product: Product;
  quantity: number;
}

export function usePOS() {
  const { language } = useConfig();
  const { isLoading, refresh } = useData();
  const text = DICTIONARY[language];
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCheckoutOpen, setCheckoutOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await Repository.getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev => prev.map(item => 
      item.product.id === productId 
        ? { ...item, quantity } 
        : item
    ));
  };

  const total = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  const handleCheckout = async (paymentMethod: string) => {
    // Save to Dexie/Supabase
    const transaction: Transaction = {
      total,
      status: 'COMPLETED',
      paymentMethod,
      createdAt: new Date(),
    };
    
    await Repository.saveTransaction(transaction);
    
    // Clear the cart
    setCart([]);
    setCheckoutOpen(false);
    alert("Transaksi Berhasil, Ndan! Struk dicetak...");
    refresh();
  };

  const user = {
    name: "AMIN MAGHFURI",
    role: "Commander",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100"
  };

  return {
    text,
    products,
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    total,
    isCheckoutOpen,
    setCheckoutOpen,
    handleCheckout,
    user,
    isLoading,
    refresh
  };
}
