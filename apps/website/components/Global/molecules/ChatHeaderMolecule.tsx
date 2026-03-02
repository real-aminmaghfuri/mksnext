import React from 'react';
import { Bot } from 'lucide-react';

interface ChatHeaderMoleculeProps {
  title: string;
  statusText: string;
}

export const ChatHeaderMolecule: React.FC<ChatHeaderMoleculeProps> = ({ title, statusText }) => {
  return (
    <div className="bg-gradient-to-r from-brand-600 to-orange-600 p-4 flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm">
        <Bot size={20} />
      </div>
      <div>
        <h3 className="text-white font-black text-sm uppercase tracking-wider">{title}</h3>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] text-white/80 font-bold">{statusText}</span>
        </div>
      </div>
    </div>
  );
};
