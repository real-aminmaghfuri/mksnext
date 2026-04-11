import React from 'react';
import { MenuItem } from '../types';
import { DrawerHandleAtom } from '../atoms/DrawerHandleAtom';
import { DrawerHeaderMolecule } from '../molecules/DrawerHeaderMolecule';
import { DrawerGridItemMolecule } from '../molecules/DrawerGridItemMolecule';

interface PortraitDrawerOrganismProps {
  isOpen: boolean;
  onClose: () => void;
  menuItem: MenuItem;
}

/**
 * PortraitDrawerOrganism - The "Bottom Sheet" layout for mobile portrait orientation.
 */
export const PortraitDrawerOrganism: React.FC<PortraitDrawerOrganismProps> = ({ 
  isOpen, 
  onClose, 
  menuItem 
}) => {
  return (
    <div 
      className={`
        fixed z-[90] bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 shadow-2xl transition-transform duration-300 ease-out
        bottom-0 left-0 w-full rounded-t-[32px] landscape:hidden
        ${isOpen ? 'translate-y-0' : 'translate-y-full'}
      `}
      style={{ maxHeight: '85vh' }}
    >
      <DrawerHandleAtom />
      
      <div className="p-6 pt-2 overflow-y-auto pb-24 max-h-[80vh]">
        <DrawerHeaderMolecule title={menuItem.label} onClose={onClose} />
        
        <div className="grid grid-cols-4 gap-2">
          {menuItem.columns ? 
            menuItem.columns.flatMap((col, idx) => 
              col.items.map((item, i) => (
                <DrawerGridItemMolecule 
                  key={`${idx}-${i}`} 
                  item={item} 
                  onClose={onClose} 
                  index={idx * 10 + i} 
                />
              ))
            ) 
            : menuItem.items?.map((item, i) => (
                <DrawerGridItemMolecule 
                  key={i} 
                  item={item} 
                  onClose={onClose} 
                  index={i} 
                />
              ))
          }
        </div>
      </div>
    </div>
  );
};
