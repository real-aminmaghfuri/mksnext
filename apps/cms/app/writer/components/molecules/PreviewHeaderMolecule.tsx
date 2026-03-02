import React from 'react';
import { Copy, Check } from 'lucide-react';
import { StatusIndicatorAtom } from '../atoms/StatusIndicatorAtom';

interface PreviewHeaderMoleculeProps {
  hasContent: boolean;
  isCopied: boolean;
  onCopy: () => void;
}

export const PreviewHeaderMolecule: React.FC<PreviewHeaderMoleculeProps> = ({ 
  hasContent, 
  isCopied, 
  onCopy 
}) => {
  return (
    <div className="h-14 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between px-6 bg-white/80 dark:bg-zinc-900/80 backdrop-blur relative z-20">
      <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest flex items-center gap-2">
        <StatusIndicatorAtom active={hasContent} />
        RENDER PREVIEW
      </span>
      {hasContent && (
        <button 
          onClick={onCopy}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-xs font-bold text-zinc-600 dark:text-zinc-400 hover:text-brand-600 dark:hover:text-white transition-all hover:scale-105"
        >
          {isCopied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
          {isCopied ? 'COPIED TO CLIPBOARD' : 'COPY HTML CODE'}
        </button>
      )}
    </div>
  );
};
