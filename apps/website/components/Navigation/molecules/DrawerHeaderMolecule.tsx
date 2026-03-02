import React from 'react';
import { X } from 'lucide-react';

interface DrawerHeaderMoleculeProps {
  title: string;
  onClose: () => void;
  className?: string;
}

/**
 * DrawerHeaderMolecule - A consistent header for the drawer with a title and close button.
 */
export const DrawerHeaderMolecule: React.FC<DrawerHeaderMoleculeProps> = ({ 
  title, 
  onClose,
  className = ""
}) => {
  return (
    <div className={`flex justify-between items-center mb-6 ${className}`}>
      <h3 className="text-2xl font-black uppercase text-zinc-900 dark:text-white tracking-tight">
        {title}
      </h3>
      <button 
        onClick={onClose}
        className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 transition-colors"
      >
        <X size={24} />
      </button>
    </div>
  );
};
