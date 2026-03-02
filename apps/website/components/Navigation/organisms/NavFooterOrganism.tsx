import React from 'react';
import { NavStatusAtom } from '../atoms/NavStatusAtom';

export const NavFooterOrganism: React.FC = () => {
  return (
    <div className="h-12 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-center shrink-0">
      <NavStatusAtom version="v2.0.5" />
    </div>
  );
};
