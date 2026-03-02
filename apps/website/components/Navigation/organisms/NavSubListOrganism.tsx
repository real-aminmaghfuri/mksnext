import React from 'react';
import { MenuItem, SubMenuItem } from '../types';
import { NavListItemMolecule } from '../molecules/NavListItemMolecule';

interface NavSubListOrganismProps {
  parent: MenuItem;
  subItems: SubMenuItem[];
  onClose: () => void;
}

export const NavSubListOrganism: React.FC<NavSubListOrganismProps> = ({ 
  parent, 
  subItems, 
  onClose 
}) => {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter mb-2">
          {parent.label}
        </h2>
        <p className="text-zinc-500 text-lg">Pilih tujuan operasi lo.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {subItems.map((subItem, sIdx) => (
          <NavListItemMolecule 
            key={sIdx}
            label={subItem.label}
            desc={subItem.desc}
            icon={subItem.icon}
            path={subItem.path}
            onClick={onClose}
          />
        ))}
      </div>
    </div>
  );
};
