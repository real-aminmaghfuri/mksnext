import React from 'react';

interface ChatInputAtomProps {
  value: string;
  onChange: (val: string) => void;
  placeholder: string;
  disabled?: boolean;
}

export const ChatInputAtom: React.FC<ChatInputAtomProps> = ({ 
  value, 
  onChange, 
  placeholder,
  disabled = false
}) => {
  return (
    <input 
      type="text" 
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      disabled={disabled}
      className="flex-1 bg-zinc-100 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-xs md:text-sm font-bold focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all placeholder:text-zinc-400 disabled:opacity-50"
    />
  );
};
