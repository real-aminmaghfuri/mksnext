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
        bg-transparent border-2 border-brand-500 
        text-brand-500
        hover:bg-brand-500/5 hover:border-brand-600 hover:text-brand-600 hover:-translate-y-1.5
        shadow-[0_10px_30px_rgba(249,115,22,0.2)] dark:shadow-[0_15px_40px_rgba(249,115,22,0.15)]
        ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-0 pointer-events-none'}
      `}
    />
  );
};
