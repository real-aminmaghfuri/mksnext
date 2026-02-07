
"use client";

import React from 'react';
import { useShop } from './Shop/useShop';
import { ShopHeaderAtom } from './Shop/atoms/ShopHeaderAtom';
import { ProductCardAtom } from './Shop/atoms/ProductCardAtom';

export const Shop: React.FC = () => {
  const { text, products, formatPrice } = useShop();

  return (
    <section className="min-h-screen bg-zinc-50 dark:bg-black transition-colors duration-500 pb-24">
      
      {/* Particle: Page Header */}
      <ShopHeaderAtom 
        title={text.shopTitle} 
        subtitle={text.shopSub} 
      />

      <div className="container mx-auto px-4 sm:px-6 py-12 max-w-6xl">
        {/* Particle: Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCardAtom 
              key={product.id} 
              product={product}
              formattedPrice={formatPrice(product.price)}
              btnText={text.shopBtnOrder}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
