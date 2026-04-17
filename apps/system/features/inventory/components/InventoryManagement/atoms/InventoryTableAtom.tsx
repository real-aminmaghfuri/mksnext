
"use client";
import React from 'react';
import { Product } from 'data';
import { Edit, Trash2, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface InventoryTableProps {
  products: Product[];
  isLoading: boolean;
  formatCurrency: (val: number) => string;
}

export const InventoryTableAtom: React.FC<InventoryTableProps> = ({ products, isLoading, formatCurrency }) => {
  
  if (isLoading) {
      return <div className="p-8 text-center text-zinc-500 font-bold animate-pulse">Scanning Warehouse...</div>;
  }

  if (products.length === 0) {
      return (
          <div className="p-12 text-center border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-2xl">
              <p className="font-black text-zinc-400 uppercase tracking-widest">Gudang Kosong, Bos.</p>
              <p className="text-xs text-zinc-500 mt-2">Segera input data barang sebelum jualan.</p>
          </div>
      );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
       <table className="w-full text-left border-collapse">
          <thead>
             <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50">
                <th className="p-4 text-[10px] font-black uppercase tracking-widest text-zinc-500 w-16">ID</th>
                <th className="p-4 text-[10px] font-black uppercase tracking-widest text-zinc-500">Item Name</th>
                <th className="p-4 text-[10px] font-black uppercase tracking-widest text-zinc-500">SKU</th>
                <th className="p-4 text-[10px] font-black uppercase tracking-widest text-zinc-500 text-right">Price</th>
                <th className="p-4 text-[10px] font-black uppercase tracking-widest text-zinc-500 text-center">Stock</th>
                <th className="p-4 text-[10px] font-black uppercase tracking-widest text-zinc-500 text-right">Actions</th>
             </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
             {products.map((product) => {
                const isLowStock = product.stock <= 5;
                const isOutOfStock = product.stock === 0;

                return (
                   <tr key={product.id} className="group hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                      <td className="p-4 text-xs font-mono text-zinc-400">#{product.id}</td>
                      <td className="p-4">
                         <div className="font-bold text-sm text-zinc-900 dark:text-white">{product.name}</div>
                         <div className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider">{product.category}</div>
                      </td>
                      <td className="p-4 text-xs font-mono font-medium text-zinc-600 dark:text-zinc-400">
                         {product.sku}
                      </td>
                      <td className="p-4 text-right text-xs font-bold text-zinc-900 dark:text-white font-mono">
                         {formatCurrency(product.price)}
                      </td>
                      <td className="p-4 text-center">
                         <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wide border 
                            ${isOutOfStock 
                                ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-500 border-red-200 dark:border-red-800' 
                                : isLowStock 
                                    ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-500 border-amber-200 dark:border-amber-800'
                                    : 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-500 border-emerald-200 dark:border-emerald-800'
                            }`}>
                            {isOutOfStock ? <AlertTriangle size={10} /> : <CheckCircle2 size={10} />}
                            {product.stock} Unit
                         </div>
                      </td>
                      <td className="p-4 text-right">
                         <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="p-2 rounded-lg text-zinc-400 hover:text-brand-600 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-colors">
                               <Edit size={14} />
                            </button>
                            <button className="p-2 rounded-lg text-zinc-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                               <Trash2 size={14} />
                            </button>
                         </div>
                      </td>
                   </tr>
                );
             })}
          </tbody>
       </table>
    </div>
  );
};
