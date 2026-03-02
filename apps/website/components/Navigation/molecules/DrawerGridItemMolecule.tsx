import React from 'react';
import Link from 'next/link';
import { SubMenuItem } from '../types';
import { DrawerIconBoxAtom } from '../atoms/DrawerIconBoxAtom';

interface DrawerGridItemMoleculeProps {
  item: SubMenuItem;
  onClose: () => void;
  index: number;
}

/**
 * DrawerGridItemMolecule - An individual menu item with an icon and label.
 * Features an active scale effect for a native app feel.
 */
export const DrawerGridItemMolecule: React.FC<DrawerGridItemMoleculeProps> = ({ 
  item, 
  onClose, 
  index 
}) => {
  return (
    <Link 
      href={item.path}
      onClick={onClose}
      className="flex flex-col items-center text-center gap-2 group active:scale-95 transition-transform duration-200 p-2 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900/50"
    >
      <DrawerIconBoxAtom icon={item.icon} index={index} />
      <span className="text-[9px] font-bold text-zinc-700 dark:text-zinc-300 leading-tight line-clamp-2 max-w-[70px]">
        {item.label}
      </span>
    </Link>
  );
};
