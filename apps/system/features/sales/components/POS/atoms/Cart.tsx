
"use client";

import React from 'react';
import { CartItem } from 'types';
import { Trash2, Plus, Minus, ShoppingCart, CreditCard } from 'lucide-react';
import { Button } from 'ui';

interface CartProps {
  items: CartItem[];
  total: number;
  onRemove: (id: number) => void;
  onUpdateQty: (id: number, qty: number) => void;
  onCheckout: () => void;
}

export const Cart: React.FC<CartProps> = ({ items, total, onRemove, onUpdateQty, onCheckout }) => {
  const formatIDR = (num: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);
  };

  return (
    <div className="flex flex-col h-full">
      
      {/* Header */}
      <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between bg-zinc-50 dark:bg-zinc-900/50">
        <h3 className="text-sm font-black uppercase tracking-widest flex items-center gap-2">
          <ShoppingCart size={18} className="text-brand-500" />
          Keranjang Belanja
        </h3>
        <span className="px-2 py-1 rounded-lg bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-500 text-[10px] font-black">
          {items.length} ITEMS
        </span>
      </div>

      {/* Items List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item.product.id} className="p-3 rounded-xl bg-zinc-100/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-lg bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center shrink-0">
                <span className="text-[8px] font-black text-zinc-400 uppercase">{item.product.sku}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-xs font-black uppercase tracking-tight truncate mb-0.5">{item.product.name}</h4>
                <p className="text-[10px] font-bold text-brand-600 dark:text-brand-500">{formatIDR(item.product.price)}</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 p-0.5">
                  <button onClick={() => onUpdateQty(item.product.id!, item.quantity - 1)} className="p-1 hover:text-brand-500 transition-colors">
                    <Minus size={14} />
                  </button>
                  <span className="w-6 text-center text-xs font-black">{item.quantity}</span>
                  <button onClick={() => onUpdateQty(item.product.id!, item.quantity + 1)} className="p-1 hover:text-brand-500 transition-colors">
                    <Plus size={14} />
                  </button>
                </div>
                <button onClick={() => onRemove(item.product.id!)} className="p-2 text-zinc-400 hover:text-red-500 transition-colors">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-center opacity-30 py-10">
             <ShoppingCart size={48} className="mb-4" />
             <p className="text-xs font-black uppercase tracking-widest">Keranjang Kosong, Ndan!</p>
          </div>
        )}
      </div>

      {/* Footer / Summary */}
      <div className="p-6 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-bold text-zinc-500 uppercase">
            <span>Subtotal</span>
            <span>{formatIDR(total)}</span>
          </div>
          <div className="flex justify-between text-xs font-bold text-zinc-500 uppercase">
            <span>Pajak (0%)</span>
            <span>Rp 0</span>
          </div>
          <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800 flex justify-between items-end">
            <span className="text-xs font-black uppercase tracking-widest text-zinc-500">Total Tagihan</span>
            <span className="text-2xl font-black text-brand-600 dark:text-brand-500">{formatIDR(total)}</span>
          </div>
        </div>

        <Button 
          fullWidth 
          size="lg" 
          variant="primary" 
          disabled={items.length === 0}
          onClick={onCheckout}
          className="h-14 text-base tracking-widest uppercase font-black"
        >
          BAYAR SEKARANG <CreditCard size={20} className="ml-2" />
        </Button>
      </div>

    </div>
  );
};
