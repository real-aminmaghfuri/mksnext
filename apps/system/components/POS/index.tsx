
"use client";

import React from 'react';
import { usePOS } from './usePOS';
import { ProductGrid } from './atoms/ProductGrid';
import { Cart } from './atoms/Cart';
import { CheckoutModal } from './atoms/CheckoutModal';
import { DashboardHeaderAtom } from '../Dashboard/atoms/DashboardHeaderAtom';
import { MobileNav } from '../MobileNav';

export const POS: React.FC = () => {
  const { 
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
  } = usePOS();

  return (
    <div className="flex h-screen bg-zinc-50 dark:bg-luxury-dark text-zinc-900 dark:text-white overflow-hidden">
      
      {/* Main Area: POS Interface */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <DashboardHeaderAtom 
          title="Terminal Kasir"
          isLoading={isLoading}
          onRefresh={refresh}
          user={user}
        />

        <main className="flex-1 flex flex-col md:flex-row overflow-hidden relative z-10">
          
          {/* Left: Product Selection (Scrollable) */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6 custom-scrollbar">
            <ProductGrid 
              products={products} 
              onAdd={addToCart} 
            />
          </div>

          {/* Right: Cart (Fixed on Desktop, Hidden on Mobile if needed, but here we show it) */}
          <div className="w-full md:w-[380px] lg:w-[420px] bg-white dark:bg-zinc-950 border-l border-zinc-200 dark:border-zinc-800 flex flex-col shadow-2xl">
            <Cart 
              items={cart} 
              total={total} 
              onRemove={removeFromCart} 
              onUpdateQty={updateQuantity} 
              onCheckout={() => setCheckoutOpen(true)}
            />
          </div>

        </main>

        <MobileNav />
      </div>

      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setCheckoutOpen(false)} 
        total={total} 
        onConfirm={handleCheckout} 
      />
      
    </div>
  );
};
