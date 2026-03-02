import React from 'react';

interface DrawerBackdropAtomProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * DrawerBackdropAtom - A semi-transparent overlay that closes the drawer on click.
 * Handles landscape offset to avoid covering the main navigation rail.
 */
export const DrawerBackdropAtom: React.FC<DrawerBackdropAtomProps> = ({ isOpen, onClose }) => {
  return (
    <div 
      className={`
        fixed inset-0 bg-black/60 z-[80] backdrop-blur-sm transition-opacity duration-300
        landscape:right-[80px]
        ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `}
      onClick={onClose}
    />
  );
};
