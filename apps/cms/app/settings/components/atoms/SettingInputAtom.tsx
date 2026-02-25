import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SettingInputAtomProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  icon?: LucideIcon;
  isTextarea?: boolean;
}

export const SettingInputAtom: React.FC<SettingInputAtomProps> = ({ 
  label, 
  icon: Icon, 
  isTextarea, 
  className = '', 
  ...props 
}) => {
  const baseClasses = "w-full mt-1 bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 text-sm font-bold focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all";
  
  return (
    <div className={className}>
      <label className="text-[10px] font-bold text-zinc-500 uppercase flex items-center gap-2">
        {Icon && <Icon size={12} />}
        {label}
      </label>
      {isTextarea ? (
        <textarea 
          className={`${baseClasses} py-3 resize-none font-medium`} 
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)} 
        />
      ) : (
        <input 
          className={`${baseClasses} py-2.5`} 
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)} 
        />
      )}
    </div>
  );
};
