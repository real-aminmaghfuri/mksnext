
"use client";
import React from 'react';
import { FeedItem } from '../types';
import { ArticleCardAtom } from './ArticleCardAtom';
import { Button } from 'ui';
import { ShoppingCart, Code, TrendingUp, Wrench, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface ArticleListProps {
  items: FeedItem[];
}

export const ArticleListAtom: React.FC<ArticleListProps> = ({ items }) => {
  
  // Helper to render icon for services
  const getIcon = (name: string) => {
    switch(name) {
      case 'CODE': return <Code size={24} />;
      case 'CHART': return <TrendingUp size={24} />;
      case 'WRENCH': return <Wrench size={24} />;
      default: return <Code size={24} />;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       {items.map((item, idx) => {
          
          // 1. PRODUCT CARD
          if (item.type === 'PRODUCT') {
             const { data: product } = item;
             return (
                <div key={`prod-${product.id}-${idx}`} className="md:col-span-1 h-full">
                    <div className="h-full rounded-3xl bg-gradient-to-br from-brand-600 to-red-600 p-6 flex flex-col justify-between text-white shadow-xl shadow-brand-500/20 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                        {/* Blob Effect */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-[40px] pointer-events-none" />
                        
                        <div className="relative z-10">
                            <span className="inline-block px-2 py-1 rounded bg-black/20 backdrop-blur text-[10px] font-black uppercase tracking-widest mb-4 border border-white/10">
                                REKOMENDASI
                            </span>
                            <h3 className="text-xl font-black uppercase leading-tight mb-2 line-clamp-2">
                                {product.name}
                            </h3>
                            <p className="text-white/80 text-sm font-medium line-clamp-3 mb-4">
                                {product.desc}
                            </p>
                            <p className="text-2xl font-mono font-black mb-6">
                                IDR {product.price.toLocaleString()}
                            </p>
                        </div>
                        
                        <Button variant="secondary" fullWidth className="font-black text-brand-600 border-none relative z-10">
                             <ShoppingCart size={16} className="mr-2" /> CEK BARANG
                        </Button>

                        {/* Image Overlay */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 opacity-20 rotate-12 group-hover:opacity-40 transition-opacity duration-500">
                             <Image 
                                src={product.image} 
                                alt={product.name} 
                                fill
                                sizes="160px"
                                className="object-cover rounded-full"
                            />
                        </div>
                    </div>
                </div>
             );
          } 
          
          // 2. SERVICE CARD
          else if (item.type === 'SERVICE') {
            const { data: service } = item;
            return (
               <div key={`serv-${idx}`} className="md:col-span-1 h-full">
                   <div className="h-full rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-6 flex flex-col justify-between text-white shadow-xl shadow-blue-500/20 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                       <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-[50px] pointer-events-none" />
                       
                       <div className="relative z-10">
                           <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center mb-4 text-white border border-white/20">
                              {getIcon(service.iconName)}
                           </div>
                           <h3 className="text-xl font-black uppercase leading-tight mb-2">
                               {service.title}
                           </h3>
                           <p className="text-blue-100 text-sm font-medium leading-relaxed mb-6">
                               {service.desc}
                           </p>
                       </div>
                       
                       <div className="relative z-10 pt-4 border-t border-white/10">
                            <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:gap-3 transition-all">
                                {service.cta} <ArrowRight size={14} />
                            </button>
                       </div>
                   </div>
               </div>
            );
         }

          // 3. ARTICLE CARD
          else {
             return (
                <div key={`art-${item.data.id}`} className="h-full">
                   <ArticleCardAtom article={item.data} />
                </div>
             );
          }
       })}
    </div>
  );
};