import React from 'react';
import { Send, AlertTriangle } from 'lucide-react';
import { ChatInputAtom } from '../atoms/ChatInputAtom';

interface ChatFooterMoleculeProps {
  input: string;
  setInput: (val: string) => void;
  onSend: () => void;
  isTyping: boolean;
  placeholder: string;
  disclaimer: string;
}

export const ChatFooterMolecule: React.FC<ChatFooterMoleculeProps> = ({ 
  input, 
  setInput, 
  onSend, 
  isTyping,
  placeholder,
  disclaimer
}) => {
  return (
    <div className="p-4 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
      <form 
        className="flex items-center gap-2"
        onSubmit={(e) => { e.preventDefault(); onSend(); }}
      >
        <ChatInputAtom 
          value={input}
          onChange={setInput}
          placeholder={placeholder}
          disabled={isTyping}
        />
        <button 
          type="submit"
          disabled={!input.trim() || isTyping}
          className="p-3 bg-brand-600 hover:bg-brand-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl transition-colors shadow-lg shadow-brand-500/20"
        >
          <Send size={18} />
        </button>
      </form>
      <div className="mt-2 flex items-center justify-center gap-1.5 text-[9px] text-zinc-400">
        <AlertTriangle size={10} />
        {disclaimer}
      </div>
    </div>
  );
};
