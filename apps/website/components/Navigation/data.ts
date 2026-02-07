
import { User, Layers, BookOpen, ShoppingBag, Laptop, Cpu, HelpCircle } from 'lucide-react';
import { Translation } from 'shared';
import { MenuItem } from './types';

export const getMenuStructure = (text: Translation): MenuItem[] => [
  { 
    label: text.navHome, 
    path: '/', 
    hasDropdown: false 
  },
  { 
    label: text.navAbout, 
    path: '#', 
    hasDropdown: true,
    items: [
      { label: text.navAboutProfile, path: '/about', icon: User, desc: "Sejarah, Visi & Legitimasi PT MKS" },
      { label: text.navAboutTeam, path: '#', icon: Layers, desc: "Struktur Komando & Tim Lapangan" },
      { label: text.navAboutVision, path: '/vision', icon: BookOpen, desc: "Blueprint Masa Depan" },
    ]
  },
  { 
    label: text.navSolutions, 
    path: '#', 
    hasDropdown: true,
    items: [
      { label: text.navSolHardware, path: '/shop', icon: ShoppingBag, desc: "Supply Mesin Kasir & Device" },
      { label: text.navSolSoftware, path: '/services', icon: Laptop, desc: "Aplikasi Kasir (SaaS) & Website" },
      { label: text.navSolConsulting, path: '/services', icon: User, desc: "Konsultasi Manajemen & SOP" },
    ]
  },
  { 
    label: text.navInnovation, 
    path: '#', 
    hasDropdown: true,
    items: [
      { label: "AI Integration", path: '#', icon: Cpu, desc: "Analisis Data Cerdas (Coming Soon)" },
      { label: "MKS Labs", path: '#', icon: Layers, desc: "Riset & Pengembangan Internal" },
    ]
  },
  { 
    label: text.navHelp, 
    path: '#', 
    hasDropdown: true,
    items: [
      { label: "Live Support", path: '#', icon: HelpCircle, desc: "Bantuan Teknis 24/7" },
      { label: "Knowledge Base", path: '#', icon: BookOpen, desc: "Tutorial & Dokumentasi" },
    ]
  },
  { 
    label: text.navInsights, 
    path: '#', 
    hasDropdown: false 
  },
];
