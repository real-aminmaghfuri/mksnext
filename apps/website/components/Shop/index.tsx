
"use client";

import React from 'react';
import { useShop } from './useShop';
import { ShopHeaderAtom } from './atoms/ShopHeaderAtom';
import { ShopFilterAtom } from './atoms/ShopFilterAtom';
import { ProductCardAtom } from './atoms/ProductCardAtom';
import { ShopPortfolioSection } from './atoms/ShopPortfolioSection';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Shop: React.FC = () => {
  const { 
    text, 
    products, 
    formatPrice, 
    activeCategory, 
    setCategory, 
    generateWaLink,
    currentPage, 
    totalPages, 
    setPage,
    hardwareProjects
  } = useShop();

  return (
    <section className="min-h-screen bg-zinc-50 dark:bg-black transition-colors duration-500 pb-0">
      
      <ShopHeaderAtom 
        title={text.shopTitle} 
        subtitle={text.shopSub} 
      />

      <ShopFilterAtom 
        activeCategory={activeCategory} 
        onFilterChange={setCategory} 
      />

      {/* 
          FULL WIDTH CONTAINER 
          Removed 'container' and 'max-w-*' constraints to use full screen width.
          Added proper padding for edge spacing.
      */}
      <div className="w-full px-4 md:px-8 pb-24">
        {products.length > 0 ? (
          <>
            {/* 
               GRID LOGIC UPDATE (Requested):
               - HP (Base): 2 Columns
               - Tablet Kecil (sm): 3 Columns
               - Tablet Besar/Laptop (md/lg): 4 Columns
               - Monitor Lebar (xl): 5 Columns
               - Monitor Sultan (2xl): 6 Columns
            */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 md:gap-6 mb-16">
              {products.map((product) => (
                <ProductCardAtom 
                  key={product.id} 
                  product={product}
                  formattedPrice={formatPrice(product.price)}
                  btnText={text.shopBtnOrder}
                  viewText={text.prodSeeDetail}
                  waLink={generateWaLink(product.name)}
                />
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-4">
                    <button 
                        onClick={() => setPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 disabled:opacity-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    
                    <span className="text-sm font-bold text-zinc-600 dark:text-zinc-400">
                        Page <span className="text-zinc-900 dark:text-white">{currentPage}</span> of {totalPages}
                    </span>

                    <button 
                        onClick={() => setPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 disabled:opacity-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            )}
          </>
        ) : (
          <div className="text-center py-20">
             <p className="text-zinc-500 font-bold italic">Stok kategori ini lagi kosong, Bos. Cek kategori lain.</p>
          </div>
        )}
      </div>

      {/* Hardware Portfolio Section */}
      <ShopPortfolioSection projects={hardwareProjects} />

    </section>
  );
};
