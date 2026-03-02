import React from 'react';
import { LucideIcon } from 'lucide-react';

interface LabelAtomProps {
  label: string;
  icon?: LucideIcon;
  className?: string;
}

export const LabelAtom: React.FC<LabelAtomProps> = ({ label, icon: Icon, className = "" }) => {
  return (
    <label className={`text-[10px] font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2 ${className}`}>
      {Icon && <Icon size={12}/>}
      {label}
    </label>
  );
};
