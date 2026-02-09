
import { LucideIcon } from 'lucide-react';

export interface SubMenuItem {
  label: string;
  path: string;
  icon: LucideIcon;
  desc: string;
}

export interface MegaMenuColumn {
  title: string;
  items: SubMenuItem[];
}

export interface MenuItem {
  label: string;
  path: string;
  hasDropdown: boolean;
  items?: SubMenuItem[]; // Legacy/Standard layout (Left List + Right Image)
  columns?: MegaMenuColumn[]; // New Split layout (Column 1 + Column 2)
}

export interface NavbarLogic {
  isDark: boolean;
  language: string;
  pathname: string;
  toggleTheme: () => void;
  toggleLang: () => void;
  text: any; // Using flexible type for dictionary to avoid strict coupling
}
