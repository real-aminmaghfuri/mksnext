
import { Translation } from 'shared';
import { MenuItem } from './types';
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
  hasDropdown: false
});

const getInsightsMenu = (text: Translation): MenuItem => ({
  label: text.navInsights,
  path: '/articles',
  hasDropdown: false
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
