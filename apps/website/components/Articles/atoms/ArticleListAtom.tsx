
"use client";
import React from 'react';
import { ArticleItem, ProductItem } from 'shared';
import { ArticleCardAtom } from './ArticleCardAtom';
import { GlassCard, Button } from 'ui';
import { ShoppingCart } from 'lucide-react';

interface ArticleListProps {
  items: (ArticleItem | { type: 'PRODUCT'; product: ProductItem })[];
}

export const ArticleListAtom: React.FC<ArticleListProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       {items.map((item, idx) => {
          if ('type' in item && item.type === 'PRODUCT') {
             // Product Card Insert
             const { product } = item;
             return (
                <div key={`prod-${product.id}-${idx}`} className="md:col-span-1 h-full">
                    <div className="h-full rounded-3xl bg-gradient-to-br from-brand-600 to-red-600 p-6 flex flex-col justify-between text-white shadow-xl shadow-brand-500/20 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-[40px] pointer-events-none" />
                        
                        <div className="relative z-10">
                            <span className="inline-block px-2 py-1 rounded bg-black/20 backdrop-blur text-[10px] font-black uppercase tracking-widest mb-4">
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
                         <img 
                            src={product.image} 
                            alt={product.name} 
                            className="absolute -bottom-10 -right-10 w-40 h-40 object-cover rounded-full opacity-20 rotate-12 group-hover:opacity-40 transition-opacity duration-500"
                        />
                    </div>
                </div>
             );
          } else {
             // Standard Article Card
             return (
                <div key={`art-${(item as ArticleItem).id}`} className="h-full">
                   <ArticleCardAtom article={item as ArticleItem} />
                </div>
             );
          }
       })}
    </div>
  );
};
