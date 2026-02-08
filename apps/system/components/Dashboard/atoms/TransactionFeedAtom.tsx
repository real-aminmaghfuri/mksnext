
"use client";
import React from 'react';
import { GlassCard } from 'ui';
import { Transaction } from 'data';

interface TransactionFeedProps {
  transactions: Transaction[];
  formatIDR: (val: number) => string;
}

export const TransactionFeedAtom: React.FC<TransactionFeedProps> = ({ transactions, formatIDR }) => {
  return (
    <GlassCard variant="solid" className="p-8 border-zinc-200 dark:border-zinc-800/50 flex flex-col">
      <h4 className="font-black text-lg uppercase tracking-tight mb-8">Feed Transaksi</h4>
      <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar flex-1 max-h-[300px]">
        {transactions.map((tx, i) => (
          <div key={i} className="group p-4 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900/30 hover:border-brand-500/50 transition-all duration-300">
            <div className="flex justify-between items-start mb-2">
              <p className="text-sm font-black tracking-tight">{formatIDR(tx.total)}</p>
              <span className={`text-[9px] font-black px-1.5 py-0.5 rounded ${tx.status === 'COMPLETED' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'}`}>
                {tx.status}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-bold text-zinc-500 uppercase">{tx.paymentMethod}</span>
              <span className="text-[10px] font-medium text-zinc-400">
                {tx.createdAt instanceof Date ? tx.createdAt.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : 'Now'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
};
