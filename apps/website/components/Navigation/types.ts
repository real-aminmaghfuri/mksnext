
import { LucideIcon } from 'lucide-react';

export interface SubMenuItem {
  label: string;
  path: string;
  icon: LucideIcon;
  desc: string;
  variant?: 'default' | 'highlight';
}

export interface MegaMenuColumn {
  title: string;
  items: SubMenuItem[];
  width?: 'narrow' | 'wide'; // New property for controlling column span
}

export interface MenuItem {
  label: string;
  path: string;
  hasDropdown: boolean;
  icon?: LucideIcon; // Added optional icon for top-level grid display
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