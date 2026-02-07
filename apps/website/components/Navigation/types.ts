
import { LucideIcon } from 'lucide-react';

export interface SubMenuItem {
  label: string;
  path: string;
  icon: LucideIcon;
  desc: string;
}

export interface MenuItem {
  label: string;
  path: string;
  hasDropdown: boolean;
  items?: SubMenuItem[];
}

export interface NavbarLogic {
  isDark: boolean;
  language: string;
  pathname: string;
  toggleTheme: () => void;
  toggleLang: () => void;
  text: any; // Using flexible type for dictionary to avoid strict coupling
}
