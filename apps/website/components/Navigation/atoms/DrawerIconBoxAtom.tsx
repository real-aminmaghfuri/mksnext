import React from 'react';
import { LucideIcon } from 'lucide-react';

interface DrawerIconBoxAtomProps {
  icon: LucideIcon;
  index: number;
}

const colorPalette = [
  "text-blue-600 bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800",
  "text-orange-600 bg-orange-50 dark:bg-orange-900/20 border-orange-100 dark:border-orange-800",
  "text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 border-emerald-100 dark:border-emerald-800",
  "text-purple-600 bg-purple-50 dark:bg-purple-900/20 border-purple-100 dark:border-purple-800",
  "text-rose-600 bg-rose-50 dark:bg-rose-900/20 border-rose-100 dark:border-rose-800",
  "text-cyan-600 bg-cyan-50 dark:bg-cyan-900/20 border-cyan-100 dark:border-cyan-800",
];

/**
 * DrawerIconBoxAtom - A styled container for menu icons with a dynamic color palette.
 */
export const DrawerIconBoxAtom: React.FC<DrawerIconBoxAtomProps> = ({ icon: Icon, index }) => {
  const themeClass = colorPalette[index % colorPalette.length];

  return (
    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shadow-sm transition-colors ${themeClass}`}>
      <Icon size={20} strokeWidth={2} />
    </div>
  );
};
