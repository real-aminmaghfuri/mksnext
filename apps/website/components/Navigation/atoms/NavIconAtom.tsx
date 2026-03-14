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
      p-1.5 rounded-xl transition-all duration-300
      ${isActive ? 'bg-brand-50 dark:bg-brand-900/20 translate-y-0' : 'translate-y-1 landscape:translate-y-0'}
      ${className}
    `}>
      <Icon 
        size={size} 
        strokeWidth={isActive ? 2.5 : 2} 
        className={isActive ? 'animate-pulse' : ''} 
      />
    </div>
  );
};
