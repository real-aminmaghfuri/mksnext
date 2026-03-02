import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FabButtonAtomProps {
  icon: LucideIcon;
  onClick: () => void;
  className?: string;
  title?: string;
  size?: 'sm' | 'md' | 'lg';
  isActive?: boolean;
}

export const FabButtonAtom: React.FC<FabButtonAtomProps> = ({ 
  icon: Icon, 
  onClick, 
  className = "", 
  title,
  size = 'md',
  isActive = false
}) => {
  const sizeStyles = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-14 h-14'
  };

  return (
    <button
      onClick={onClick}
      className={`
        ${sizeStyles[size]} rounded-full flex items-center justify-center shadow-lg 
        transition-all duration-300 hover:scale-105 active:scale-95
        ${className}
      `}
      title={title}
    >
      <Icon size={size === 'lg' ? 26 : 20} strokeWidth={2.5} className={isActive ? 'rotate-90 transition-transform' : ''} />
    </button>
  );
};
