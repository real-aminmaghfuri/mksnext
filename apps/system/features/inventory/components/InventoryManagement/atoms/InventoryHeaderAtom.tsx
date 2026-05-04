
"use client";
import React from 'react';
import { Search, Plus } from 'lucide-react';
import { Button } from 'ui';

interface InventoryHeaderProps {
  title: string;
  searchPlaceholder: string;
  searchQuery: string;
  onSearchChange: (val: string) => void;
  onAdd: () => void;
}

export const InventoryHeaderAtom: React.FC<InventoryHeaderProps> = ({ 
  title, 
  searchPlaceholder, 
  searchQuery, 
  onSearchChange, 
  onAdd 
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-3 justify-between items-center mb-4">
       <div>
          <h2 className="text-lg font-black uppercase tracking-tight text-zinc-900 dark:text-white leading-none">
             {title}
          </h2>
       </div>

       <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-56">
             <input 
                type="text" 
                placeholder={searchPlaceholder}
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-bold focus:outline-none focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-zinc-400"
             />
             <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
          </div>
          
          <Button onClick={onAdd} className="shrink-0 px-3 h-8 text-[10px] uppercase font-black tracking-widest">
             <Plus size={14} className="mr-1.5" /> <span className="hidden sm:inline">RESTOCK</span>
          </Button>
       </div>
    </div>
  );
};
