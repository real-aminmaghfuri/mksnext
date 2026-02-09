
import { 
  User, 
  BookOpen, 
  ShoppingBag, 
  HelpCircle, 
  Briefcase, 
  FolderOpen, 
  Mail, 
  Globe, 
  Code, 
  ShoppingCart, 
  Search, 
  Monitor, 
  Printer, 
  CreditCard, 
  Mouse,
  Coffee,
  Scissors,
  Activity,
  Factory,
  GraduationCap,
  LayoutGrid
} from 'lucide-react';
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
    label: text.navLayanan, // NEW: "LAYANAN" (Replaces Innovation)
    path: '#', 
    hasDropdown: true,
    // Using 'columns' triggers the new Split Layout in MegaMenuAtom
    columns: [
      {
        title: text.navTechHeader, // "TEKNOLOGI"
        items: [
          { label: text.navTechCompro, path: '/services', icon: Globe, desc: "Branding Perusahaan & SEO" },
          { label: text.navTechEcom, path: '/services', icon: ShoppingCart, desc: "Sistem Toko Online Auto-Pilot" },
          { label: text.navTechCustom, path: '/services', icon: Code, desc: "Web Apps & Sistem Custom" },
        ]
      },
      {
        title: text.navBizHeader, // "SOLUSI BISNIS"
        items: [
          { label: text.navIndRetail, path: '/solutions?tag=RETAIL', icon: ShoppingBag, desc: "Minimarket, Fashion, Grosir" },
          { label: text.navIndFnb, path: '/solutions?tag=FNB', icon: Coffee, desc: "Cafe, Resto, Franchise" },
          { label: text.navIndService, path: '/solutions?tag=SERVICES', icon: Scissors, desc: "Barbershop, Laundry, Bengkel" },
          { label: text.navIndHealth, path: '/solutions?tag=HEALTH', icon: Activity, desc: "Apotek & Klinik" },
          { label: text.navIndCorp, path: '/solutions?tag=CORP', icon: Factory, desc: "Gudang & Pabrik" },
          { label: text.navIndAll, path: '/solutions', icon: LayoutGrid, desc: "Lihat Semua Industri" },
        ]
      }
    ]
  },
  { 
    label: text.navSolutions, // "MESIN KASIR" (Hardware Focused)
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
    label: text.navHelp, 
    path: '#', 
    hasDropdown: true,
    items: [
      { label: "Live Support", path: '/contact', icon: HelpCircle, desc: "Bantuan Teknis 24/7" },
      { label: "Knowledge Base", path: '/articles', icon: BookOpen, desc: "Tutorial & Dokumentasi" },
    ]
  },
  { 
    label: text.navInsights, 
    path: '/articles', 
    hasDropdown: false 
  },
];
