import React from 'react';

interface NavLabelAtomProps {
  text: string;
  variant?: 'title' | 'subtitle' | 'meta';
  className?: string;
}

export const NavLabelAtom: React.FC<NavLabelAtomProps> = ({ 
  text, 
  variant = 'title',
  className = "" 
}) => {
  const styles = {
    title: "text-xl font-black text-zinc-900 dark:text-white uppercase tracking-tight leading-none",
    subtitle: "text-[10px] text-zinc-500 font-bold uppercase tracking-widest",
    meta: "text-[10px] font-black text-zinc-400 uppercase tracking-widest"
  };

  return (
    <span className={`${styles[variant]} ${className}`}>
      {text}
    </span>
  );
};
