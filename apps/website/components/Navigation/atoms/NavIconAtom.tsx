import React from 'react';
import { LucideIcon } from 'lucide-react';

interface NavIconAtomProps {
  icon: LucideIcon;
  isActive?: boolean;
  size?: number;
  className?: string;
}

/**
 * NavIconAtom - A styled icon for the navigation bar.
 * Features a pulse animation and background highlight when active.
 */
export const NavIconAtom: React.FC<NavIconAtomProps> = ({ 
  icon: Icon, 
  isActive = false,
  size = 20,
  className = ""
}) => {
  return (
    <div className={`
      p-2 rounded-2xl transition-all duration-500
      ${isActive ? 'bg-brand-500/10 dark:bg-brand-500/10 scale-110' : 'scale-100'}
      ${className}
    `}>
      <Icon 
        size={size} 
        strokeWidth={isActive ? 3 : 2} 
        className={isActive ? 'drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]' : ''} 
      />
    </div>
  );
};
