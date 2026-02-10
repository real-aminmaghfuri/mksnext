
"use client";

import React from 'react';
import { useShop } from './useShop';
import { ShopHeaderAtom } from './atoms/ShopHeaderAtom';
import { ShopFilterAtom } from './atoms/ShopFilterAtom';
import { ProductCardAtom } from './atoms/ProductCardAtom';

export const Shop: React.FC = () => {
  const { 
    text, 
    products, 
    formatPrice, 
    activeCategory, 
    setCategory,
    generateWaLink 
  } = useShop();

  return (
    <section className="min-h-screen bg-zinc-50 dark:bg-black transition-colors duration-500 pb-24">
      
      <ShopHeaderAtom 
        title={text.shopTitle} 
        subtitle={text.shopSub} 
      />

      <ShopFilterAtom 
        activeCategory={activeCategory} 
        onFilterChange={setCategory} 
      />

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((product) => (
              <ProductCardAtom 
                key={product.id} 
                product={product}
                formattedPrice={formatPrice(product.price)}
                btnText={text.shopBtnOrder}
                waLink={generateWaLink(product.name)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
             <p className="text-zinc-500 font-bold italic">Stok kategori ini lagi kosong, Bos. Cek kategori lain.</p>
          </div>
        )}
      </div>
    </section>
  );
};
