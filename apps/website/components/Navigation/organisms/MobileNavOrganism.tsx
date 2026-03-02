import React from 'react';
import { MenuItem } from '../types';
import { NavContainerAtom } from '../atoms/NavContainerAtom';
import { NavItemMolecule } from '../molecules/NavItemMolecule';
import { LucideIcon } from 'lucide-react';

interface MobileNavOrganismProps {
  menuStructure: MenuItem[];
  getIcon: (idx: number) => LucideIcon;
  isItemActive: (item: MenuItem) => boolean;
  onItemClick: (item: MenuItem) => void;
}

/**
 * MobileNavOrganism - The complete mobile navigation bar structure.
 * Orchestrates the layout and mapping of navigation items.
 */
export const MobileNavOrganism: React.FC<MobileNavOrganismProps> = ({ 
  menuStructure, 
  getIcon, 
  isItemActive, 
  onItemClick 
}) => {
  return (
    <NavContainerAtom>
      <div className="
        grid grid-cols-6 h-full items-center
        /* Landscape: Vertical Stack, Distributed Evenly */
        landscape:flex landscape:flex-col landscape:h-full landscape:w-full landscape:justify-evenly landscape:py-4
      ">
        {menuStructure.map((item, idx) => (
          <NavItemMolecule 
            key={idx}
            label={item.label}
            icon={getIcon(idx)}
            isActive={isItemActive(item)}
            path={item.path}
            hasDropdown={item.hasDropdown}
            onClick={() => onItemClick(item)}
          />
        ))}
      </div>
    </NavContainerAtom>
  );
};
