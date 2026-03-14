import React from 'react';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import { NavIconAtom } from '../atoms/NavIconAtom';
import { NavLabelAtom } from '../atoms/NavLabelAtom';

interface NavItemMoleculeProps {
  label: string;
  icon: LucideIcon;
  isActive: boolean;
  path: string;
  hasDropdown?: boolean;
  onClick: () => void;
}

/**
 * NavItemMolecule - A single navigation item.
 * Renders either a Link or a Button depending on whether it has a dropdown.
 */
export const NavItemMolecule: React.FC<NavItemMoleculeProps> = ({ 
  label, 
  icon, 
  isActive, 
  path, 
  hasDropdown, 
  onClick 
}) => {
  const content = (
    <div className={`
      flex flex-col items-center justify-center transition-all duration-200 group w-full
      ${isActive ? 'text-brand-600 dark:text-brand-500' : 'text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300'}
    `}>
      <NavIconAtom icon={icon} isActive={isActive} />
      <NavLabelAtom text={label} />
    </div>
  );

  const commonClasses = "h-full w-full landscape:h-auto landscape:w-full flex items-center justify-center focus:outline-none active:scale-90 transition-transform";

  if (hasDropdown) {
    return (
      <button onClick={onClick} aria-label={`Open ${label} menu`} className={commonClasses}>
        {content}
      </button>
    );
  }

  return (
    <Link href={path} aria-label={label} className={commonClasses}>
      {content}
    </Link>
  );
};
