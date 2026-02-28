import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MediaIconAtomProps {
  icon: LucideIcon;
  size?: number;
  className?: string;
}

export const MediaIconAtom: React.FC<MediaIconAtomProps> = ({ 
  icon: Icon, 
  size = 40, 
  className = "text-brand-600 dark:text-brand-500" 
}) => {
  return (
    <div className={`w-20 h-20 rounded-full bg-brand-50 dark:bg-brand-900/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg ${className}`}>
      <Icon size={size} />
    </div>
  );
};
