import React from 'react';

interface NavLabelAtomProps {
  label: string;
}

/**
 * NavLabelAtom - A small, bold label for navigation items.
 */
export const NavLabelAtom: React.FC<NavLabelAtomProps> = ({ label }) => {
  return (
    <span className="text-[9px] font-bold text-center leading-none px-0.5 truncate w-full mt-1">
      {label}
    </span>
  );
};
