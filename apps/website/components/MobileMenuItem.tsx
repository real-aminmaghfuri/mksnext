
"use client";

import React from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { MenuItem } from './Navigation/types';

interface MobileMenuItemProps {
  item: MenuItem;
  isExpanded: boolean;
  onToggle: () => void;
  onClose: () => void;
}

export const MobileMenuItem: React.FC<MobileMenuItemProps> = ({ item, isExpanded, onToggle, onClose }) => {
  const hasChildren = item.hasDropdown;

  return (
    <div className="border-b border-zinc-100 dark:border-zinc-900 last:border-0">
      {/* Header Item */}
      <div 
        onClick={() => hasChildren ? onToggle() : onClose()}
        className="flex items-center justify-between py-4 cursor-pointer group"
      >
        {hasChildren ? (
          <span className={`text-lg font-bold transition-colors ${isExpanded ? 'text-brand-600 dark:text-brand-500' : 'text-zinc-800 dark:text-zinc-200'}`}>
            {item.label}
          </span>
        ) : (
          <Link href={item.path} className="text-lg font-bold text-zinc-800 dark:text-zinc-200 w-full">
            {item.label}
          </Link>
        )}

        {hasChildren && (
          <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-180 text-brand-500' : 'text-zinc-400'}`}>
            <ChevronDown size={18} />
          </div>
        )}
      </div>

      {/* Accordion Content */}
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[1000px] opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
        
        {/* Case 1: Split Layout (Columns) - e.g. Layanan, About */}
        {item.columns && (
          <div className="space-y-6 pl-2">
            {item.columns.map((col, cIdx) => (
              <div key={cIdx}>
                <h4 className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                   <div className="w-1 h-2 bg-brand-500 rounded-full"/>
                   {col.title}
                </h4>
                <div className="space-y-3 pl-3 border-l-2 border-zinc-100 dark:border-zinc-800">
                  {col.items.map((subItem, iIdx) => {
                    const Icon = subItem.icon;
                    return (
                      <Link 
                        key={iIdx} 
                        href={subItem.path} 
                        onClick={onClose}
                        className="flex items-center gap-3 py-1"
                      >
                         <Icon size={16} className="text-brand-500 shrink-0" />
                         <div>
                            <p className="text-sm font-bold text-zinc-700 dark:text-zinc-300 leading-none mb-0.5">{subItem.label}</p>
                            <p className="text-[10px] text-zinc-500 line-clamp-1">{subItem.desc}</p>
                         </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Case 2: Standard List (Items) - e.g. Solutions */}
        {item.items && !item.columns && (
           <div className="space-y-3 pl-2">
              {item.items.map((subItem, iIdx) => {
                 const Icon = subItem.icon;
                 return (
                    <Link 
                      key={iIdx} 
                      href={subItem.path} 
                      onClick={onClose}
                      className="flex items-center gap-3 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 active:scale-95 transition-transform"
                    >
                       <div className="p-2 bg-white dark:bg-zinc-800 rounded-lg text-brand-500 shadow-sm">
                          <Icon size={18} />
                       </div>
                       <div>
                          <p className="text-sm font-bold text-zinc-800 dark:text-zinc-200">{subItem.label}</p>
                          <p className="text-[10px] text-zinc-500">{subItem.desc}</p>
                       </div>
                    </Link>
                 )
              })}
           </div>
        )}

      </div>
    </div>
  );
};
