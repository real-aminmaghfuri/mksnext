
import { User, Layers, BookOpen, ShoppingBag, Laptop, Cpu, HelpCircle, Briefcase, FolderOpen, Mail, Globe, Code, ShoppingCart, Search } from 'lucide-react';
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
      { label: text.navAboutVision, path: '/vision', icon: BookOpen, desc: "Blueprint Masa Depan" },
      { label: text.navAboutPortfolio, path: '/portfolio', icon: FolderOpen, desc: "Bukti Otentik Project" },
      { label: text.navCareer, path: '/career', icon: Briefcase, desc: "Gabung Pasukan Elite" },
      { label: text.navContact, path: '/contact', icon: Mail, desc: "Markas Komando & Kontak" },
    ]
  },
  { 
    label: text.navSolutions, // MESIN KASIR & APP
    path: '#', 
    hasDropdown: true,
    items: [
      { label: text.navSolHardware, path: '/shop', icon: ShoppingBag, desc: "Supply Mesin Kasir & Device" },
      { label: text.navSolSoftware, path: '/services', icon: Laptop, desc: "Aplikasi Kasir (SaaS) & Android" },
      { label: text.navSolConsulting, path: '/services', icon: User, desc: "Konsultasi Manajemen & SOP" },
    ]
  },
  { 
    label: text.navInnovation, // JASA WEBSITE
    path: '#', 
    hasDropdown: true,
    items: [
      { label: text.navWebCompro, path: '/services', icon: Globe, desc: "Branding Perusahaan Profesional" },
      { label: text.navWebEcom, path: '/services', icon: ShoppingCart, desc: "Jualan Online 24 Jam" },
      { label: text.navWebCustom, path: '/services', icon: Code, desc: "Sistem Web Sesuai Request" },
      { label: text.navWebSeo, path: '/services', icon: Search, desc: "Optimasi Pencarian Google" },
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
