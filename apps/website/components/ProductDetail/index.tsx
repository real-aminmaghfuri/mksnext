
"use client";

import React from 'react';
import { ProductItem } from 'shared';
import { useProductDetail } from './useProductDetail';
import { ProductGalleryAtom } from './atoms/ProductGalleryAtom';
import { ProductInfoAtom } from './atoms/ProductInfoAtom';
import { ProductActionsAtom } from './atoms/ProductActionsAtom';
import { X, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface ProductDetailProps {
  product: ProductItem;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const { 
    currentImageIndex, 
    nextImage, 
    prevImage, 
    formatPrice,
    generateWaLink,
    text
  } = useProductDetail(product);

  return (
    <div className="fixed inset-0 z-[100] bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white overflow-hidden flex flex-col">
       
       {/* Top Navigation Bar (Mobile Only / Global Close) */}
       <div className="h-16 flex items-center justify-between px-6 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md z-50 shrink-0 lg:hidden">
          <Link href="/shop" className="p-2 -ml-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-white">
             <ArrowLeft size={24} />
          </Link>
          <span className="font-bold text-sm uppercase tracking-widest line-clamp-1">{product.name}</span>
          <div className="w-8" /> 
       </div>

       {/* Close Button Desktop */}
       <Link 
         href="/shop" 
         className="hidden lg:flex absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white dark:bg-zinc-900 shadow-xl items-center justify-center text-zinc-500 hover:text-red-600 hover:rotate-90 transition-all border border-zinc-200 dark:border-zinc-800"
       >
          <X size={24} />
       </Link>

       {/* Main Grid Content */}
       <div className="flex-1 overflow-y-auto lg:overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-full">
             
             {/* LEFT COLUMN (60%) - Visuals & Actions */}
             <div className="lg:col-span-7 bg-white dark:bg-zinc-900 flex flex-col relative h-auto lg:h-full border-r border-zinc-200 dark:border-zinc-800">
                
                {/* Scrollable Gallery Area */}
                <div className="flex-1 flex flex-col justify-center p-6 lg:p-12 relative">
                   <div className="absolute top-6 left-6 lg:top-10 lg:left-10 z-10">
                      <span className="inline-block px-3 py-1 bg-brand-600 text-white text-[10px] font-black uppercase tracking-widest rounded shadow-lg shadow-brand-600/30 mb-2">
                         {product.category}
                      </span>
                      <h1 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter leading-none max-w-2xl">
                         {product.name}
                      </h1>
                   </div>

                   <ProductGalleryAtom 
                      images={product.gallery}
                      currentIndex={currentImageIndex}
                      onNext={nextImage}
                      onPrev={prevImage}
                   />
                </div>

                {/* Sticky Bottom Actions */}
                <ProductActionsAtom 
                   price={formatPrice(product.price)}
                   waLink={generateWaLink}
                   text={text}
                />
             </div>

             {/* RIGHT COLUMN (40%) - Info & Specs */}
             <div className="lg:col-span-5 bg-zinc-50 dark:bg-black overflow-y-auto custom-scrollbar h-auto lg:h-full">
                <ProductInfoAtom product={product} text={text} />
             </div>

          </div>
       </div>

    </div>
  );
};