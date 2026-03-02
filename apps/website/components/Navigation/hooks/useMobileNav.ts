"use client";

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useConfig } from 'ui';
import { DICTIONARY } from 'shared';
import { getMenuStructure } from '../data';
import { MenuItem } from '../types';
import { 
  Home, User, Layers, Monitor, HelpCircle, Lightbulb
} from 'lucide-react';

/**
 * useMobileNav - Hook to manage mobile navigation logic.
 * Handles menu structure, active states, and icon mapping.
 */
export function useMobileNav() {
  const pathname = usePathname();
  const { language } = useConfig();
  const text = DICTIONARY[language];
  const menuStructure = getMenuStructure(text);

  // State for Submenu Drawer
  const [activeMenu, setActiveMenu] = useState<MenuItem | null>(null);

  /**
   * getIcon - Maps menu index to Lucide icons.
   */
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return Home;       
      case 1: return User;       
      case 2: return Layers;     
      case 3: return Monitor;    
      case 4: return HelpCircle; 
      case 5: return Lightbulb;  
      default: return Home;
    }
  };

  /**
   * handleMenuClick - Toggles sub-menu drawer for items with dropdowns.
   */
  const handleMenuClick = (item: MenuItem) => {
    if (item.hasDropdown) {
      setActiveMenu(activeMenu?.label === item.label ? null : item);
    }
  };

  /**
   * isItemActive - Determines if a menu item is currently active.
   */
  const isItemActive = (item: MenuItem) => {
    return pathname === item.path || (activeMenu?.label === item.label);
  };

  return {
    menuStructure,
    activeMenu,
    setActiveMenu,
    getIcon,
    handleMenuClick,
    isItemActive,
    text
  };
}
