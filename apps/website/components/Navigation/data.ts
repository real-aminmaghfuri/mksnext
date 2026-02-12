
import { Translation } from 'shared';
import { MenuItem } from './types';
import { 
  Home, Lightbulb 
} from 'lucide-react';
import { 
  getAboutMenu, 
  getServicesMenu, 
  getHardwareMenu, 
  getSupportMenu 
} from './menu-items';

// --- ATOMIC MENU BUILDERS ---

const getHomeMenu = (text: Translation): MenuItem => ({
  label: text.navHome,
  path: '/',
  hasDropdown: false,
  icon: Home
});

const getInsightsMenu = (text: Translation): MenuItem => ({
  label: text.navInsights,
  path: '/articles',
  hasDropdown: false,
  icon: Lightbulb
});

// --- MAIN ORCHESTRATOR ---

export const getMenuStructure = (text: Translation): MenuItem[] => [
  getHomeMenu(text),
  getAboutMenu(text),
  getServicesMenu(text),
  getHardwareMenu(text),
  getSupportMenu(text),
  getInsightsMenu(text),
];
