import React from 'react';

interface NavLabelAtomProps {
  text: string;
  variant?: 'title' | 'subtitle' | 'meta' | 'default';
  className?: string;
}

/**
 * NavLabelAtom - A small, bold label for navigation items.
 */
export const NavLabelAtom: React.FC<NavLabelAtomProps> = ({ 
  text, 
  variant = 'default',
  className = ""
}) => {
  const styles = {
    title: "text-lg font-black tracking-tight text-zinc-900 dark:text-white",
    subtitle: "text-xs font-medium text-zinc-500 dark:text-zinc-400",
    meta: "text-[8px] font-black tracking-[0.2em] text-zinc-400 dark:text-zinc-500 uppercase",
    default: "text-[9px] font-bold text-center leading-none px-0.5 truncate w-full mt-1"
  };

  return (
    <span className={`${styles[variant]} ${className}`}>
      {text}
    </span>
  );
};
