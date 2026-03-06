
"use client";

import React, { useEffect } from 'react';
import { ProductItem } from 'shared';
import { useProductDetail } from './useProductDetail';
import { ProductGalleryAtom } from './atoms/ProductGalleryAtom';
import { ProductInfoAtom } from './atoms/ProductInfoAtom';
import { ProductActionsAtom } from './atoms/ProductActionsAtom';
import { X, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface ProductDetailProps {
  product: ProductItem;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const router = useRouter();
  const { 
    currentImageIndex, 
    nextImage, 
    prevImage, 
    formatPrice,
    generateWaLink,
    text
  } = useProductDetail(product);

  // Lock Body Scroll to prevent "Global Scroll" annoyance
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white overflow-hidden flex flex-col animate-fade-in-up">
       
       {/* Top Navigation Bar (Mobile Only) */}
       <div className="h-16 flex items-center justify-between px-6 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md z-50 shrink-0 lg:hidden">
          <button 
            onClick={() => router.back()} 
            className="p-2 -ml-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-white cursor-pointer"
          >
             <ArrowLeft size={24} />
          </button>
          <span className="font-bold text-xs uppercase tracking-widest line-clamp-1">{product.name}</span>
          <div className="w-8" /> 
       </div>

       {/* 
          Desktop Close Button 
          STYLE: Lebih mencolok (Red Background, White Icon, Floating)
       */}
       <button 
         onClick={() => router.back()} 
         className="hidden lg:flex absolute top-6 right-6 z-[60] w-14 h-14 rounded-full bg-red-600 hover:bg-red-500 shadow-2xl items-center justify-center text-white transition-all hover:rotate-90 hover:scale-110 active:scale-95 border-4 border-white dark:border-zinc-900 cursor-pointer"
       >
          <X size={28} strokeWidth={3} />
       </button>

       {/* Main Content Area */}
       <div className="flex-1 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 h-full">
             
             {/* 
                LEFT COLUMN (65%) - Visuals & Primary Info 
                Structure: 
                - Top: Gallery (Flex)
                - Bottom: Info Grid & Actions (Fixed height/Auto)
             */}
             <div className="lg:col-span-8 bg-zinc-100 dark:bg-zinc-900/50 flex flex-col h-full relative border-r border-zinc-200 dark:border-zinc-800 overflow-y-auto lg:overflow-hidden">
                
                {/* 1. Image Area (Standardized & Proportional) */}
                <div className="flex-1 flex items-center justify-center p-6 lg:p-12 relative min-h-[400px]">
                   <ProductGalleryAtom 
                      images={product.gallery}
                      currentIndex={currentImageIndex}
                      onNext={nextImage}
                      onPrev={prevImage}
                   />
                </div>

                {/* 2. Bottom Grid Area (Title, Price, Buttons) */}
                <ProductActionsAtom 
                   productName={product.name}
                   category={product.category}
                   price={formatPrice(product.price)}
                   waLink={generateWaLink}
                   text={text}
                />
             </div>

             {/* 
                RIGHT COLUMN (35%) - Narrative & Specs 
                Behavior: Scrollable independently
             */}
             <div className="lg:col-span-4 bg-white dark:bg-black h-full overflow-y-auto custom-scrollbar border-t lg:border-t-0 border-zinc-200 dark:border-zinc-800 shadow-2xl lg:shadow-none relative z-10">
                <ProductInfoAtom product={product} text={text} />
             </div>

          </div>
       </div>

    </div>
  );
};
