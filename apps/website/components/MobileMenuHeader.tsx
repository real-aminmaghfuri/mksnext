
"use client";

import React from 'react';
import { X } from 'lucide-react';

interface MobileMenuHeaderProps {
  title: string;
  onClose: () => void;
}

export const MobileMenuHeader: React.FC<MobileMenuHeaderProps> = ({ title, onClose }) => {
  return (
    <div className="flex justify-between items-center mb-6 shrink-0">
      <h3 className="text-xl font-extrabold text-zinc-900 dark:text-white">
        {title}
      </h3>
      <button 
        onClick={onClose} 
        className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-full text-zinc-500 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors active:scale-95"
      >
        <X size={20} />
      </button>
    </div>
  );
};
