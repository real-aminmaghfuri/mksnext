
"use client";

import React, { useState } from 'react';
import { GlassCard, Button } from 'ui';
import { X, CreditCard, Wallet, Banknote, QrCode, CheckCircle } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  total: number;
  onConfirm: (method: string) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, total, onConfirm }) => {
  const [method, setMethod] = useState('CASH');
  
  if (!isOpen) return null;

  const paymentMethods = [
    { id: 'CASH', label: 'Tunai', icon: Banknote, color: 'text-emerald-500' },
    { id: 'QRIS', label: 'QRIS / E-Wallet', icon: QrCode, color: 'text-brand-500' },
    { id: 'DEBIT', label: 'Debit / Kartu', icon: CreditCard, color: 'text-blue-500' },
    { id: 'TRANSFER', label: 'Transfer Bank', icon: Wallet, color: 'text-indigo-500' },
  ];

  const formatIDR = (num: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-sm animate-fade-in">
      <GlassCard variant="solid" className="w-full max-w-md p-8 relative shadow-2xl animate-scale-in">
        
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-500"
        >
          <X size={20} />
        </button>

        <div className="text-center mb-8">
            <h2 className="text-2xl font-black uppercase tracking-tighter mb-2">Pilih Pembayaran</h2>
            <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Total yang harus dibayar:</p>
            <p className="text-4xl font-black text-brand-600 dark:text-brand-500 mt-2">{formatIDR(total)}</p>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-8">
            {paymentMethods.map((m) => {
                const Icon = m.icon;
                const isActive = method === m.id;
                return (
                    <button
                        key={m.id}
                        onClick={() => setMethod(m.id)}
                        className={`p-4 rounded-2xl border-2 flex flex-col items-center justify-center gap-3 transition-all active:scale-95
                            ${isActive 
                                ? 'bg-brand-500/10 border-brand-500 text-brand-600 dark:text-brand-500' 
                                : 'bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:border-zinc-300 dark:hover:border-zinc-700'}`}
                    >
                        <div className={`p-2 rounded-xl ${isActive ? 'bg-brand-500 text-white' : 'bg-zinc-100 dark:bg-zinc-800 ' + m.color}`}>
                            <Icon size={24} />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest">{m.label}</span>
                    </button>
                );
            })}
        </div>

        <div className="space-y-3">
            <Button 
                fullWidth 
                size="lg" 
                variant="primary" 
                onClick={() => onConfirm(method)}
                className="h-14 text-base tracking-widest uppercase font-black"
            >
                KONFIRMASI PEMBAYARAN <CheckCircle size={20} className="ml-2" />
            </Button>
            <Button 
                fullWidth 
                size="md" 
                variant="ghost" 
                onClick={onClose}
                className="text-xs tracking-widest uppercase font-bold text-zinc-500"
            >
                BATALKAN
            </Button>
        </div>

      </GlassCard>
    </div>
  );
};
