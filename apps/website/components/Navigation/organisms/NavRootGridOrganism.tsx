import React from 'react';
import { MenuItem } from '../types';
import { NavCardMolecule } from '../molecules/NavCardMolecule';

interface NavRootGridOrganismProps {
  menuStructure: MenuItem[];
  onPushMenu: (item: MenuItem) => void;
  onClose: () => void;
}

export const NavRootGridOrganism: React.FC<NavRootGridOrganismProps> = ({ 
  menuStructure, 
  onPushMenu, 
  onClose 
}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {menuStructure.map((item, idx) => (
        <NavCardMolecule 
          key={idx}
          label={item.label}
          icon={item.icon!}
          isAction={item.hasDropdown}
          onClick={() => onPushMenu(item)}
          path={item.path}
        />
      ))}
    </div>
  );
};
