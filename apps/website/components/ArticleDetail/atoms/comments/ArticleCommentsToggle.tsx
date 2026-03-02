
import React from 'react';
import { MessageSquare, ChevronDown } from 'lucide-react';

interface ToggleProps {
  isOpen: boolean;
  onToggle: () => void;
  count: number;
}

export const ArticleCommentsToggle: React.FC<ToggleProps> = ({ isOpen, onToggle, count }) => {
  return (
    <button 
      onClick={onToggle}
      className="w-full flex items-center justify-between p-6 md:p-8 hover:bg-zinc-200 dark:hover:bg-zinc-800/50 transition-colors"
    >
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shadow-inner transition-colors bg-brand-600 text-white">
          <MessageSquare size={20} />
        </div>
        <div className="text-left">
          <h3 className="text-sm md:text-base font-black text-brand-600 dark:text-brand-500 uppercase tracking-widest">
            Buka Diskusi
          </h3>
          <p className="text-xs font-bold text-zinc-500">{count} Komentar Terverifikasi</p>
        </div>
      </div>
      <ChevronDown size={24} className={`text-zinc-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
    </button>
  );
};
