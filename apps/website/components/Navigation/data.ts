
import { User, Layers, BookOpen, ShoppingBag, Laptop, Cpu, HelpCircle, Briefcase, FolderOpen, Mail, Globe, Code, ShoppingCart, Search, Monitor, Printer, CreditCard, Mouse } from 'lucide-react';
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
    label: text.navSolutions, // MESIN KASIR
    path: '#', 
    hasDropdown: true,
    items: [
      { label: "Paket Mesin Kasir", path: '/shop', icon: Monitor, desc: "Cash Register, Android, Komputer" },
      { label: "Printer", path: '/shop', icon: Printer, desc: "Thermal, Dotmatrix, Label, Barcode" },
      { label: "Cash Drawer", path: '/shop', icon: CreditCard, desc: "Penyimpanan Uang Aman" },
      { label: "Aksesoris Lainnya", path: '/shop', icon: Mouse, desc: "Scanner, Kertas Thermal, dll" },
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
    path: '/articles', 
    hasDropdown: false 
  },
];
