
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
    <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-6">
       <div>
          <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
             {title}
          </h2>
       </div>

       <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
             <input 
                type="text" 
                placeholder={searchPlaceholder}
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all placeholder:text-zinc-400"
             />
             <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
          </div>
          
          <Button onClick={onAdd} className="shrink-0 px-4">
             <Plus size={18} className="mr-2" /> <span className="hidden sm:inline">RESTOCK</span>
          </Button>
       </div>
    </div>
  );
};
