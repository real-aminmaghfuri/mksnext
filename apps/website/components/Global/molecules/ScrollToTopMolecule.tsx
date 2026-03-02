import React from 'react';
import { ArrowUp } from 'lucide-react';
import { FabButtonAtom } from '../atoms/FabButtonAtom';

interface ScrollToTopMoleculeProps {
  isVisible: boolean;
  onClick: () => void;
  title: string;
}

export const ScrollToTopMolecule: React.FC<ScrollToTopMoleculeProps> = ({ 
  isVisible, 
  onClick, 
  title 
}) => {
  return (
    <FabButtonAtom 
      icon={ArrowUp}
      onClick={onClick}
      title={title}
      className={`
        bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 
        text-zinc-600 dark:text-zinc-300
        hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:-translate-y-1
        ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-0 pointer-events-none'}
      `}
    />
  );
};
