
import { 
  // --- 1. ABOUT & CORPORATE ---
  User,           // Profile
  BookOpen,       // Vision / Knowledge
  FolderOpen,     // Portfolio
  Briefcase,      // Career
  Mail,           // Contact
  Cpu,            // Innovation

  // --- 2. SERVICES & TECH ---
  Globe,          // Web
  ShoppingCart,   // E-commerce
  Code,           // Custom Dev

  // --- 3. SOLUTIONS & INDUSTRIES ---
  ShoppingBag,    // Retail
  Coffee,         // F&B
  Scissors,       // Services
  Activity,       // Health
  School,         // Education
  Building2,      // Gov
  Factory,        // Corporate
  LayoutGrid,     // All Categories

  // --- 4. HARDWARE & SHOP ---
  Package,        // Bundle
  Tablet,         // Android POS
  Monitor,        // PC POS
  Calculator,     // Register
  Scan,           // Scanner
  Scroll,         // Paper/Thermal
  Inbox,          // Drawer
  Armchair,       // Desk
  Grid,           // Rack
  Mouse,          // Accessories

  // --- 5. SUPPORT & UTILS ---
  FileText,       // Terms
  Lock,           // Privacy
  HelpCircle,     // FAQ
  Download,       // Drivers
  Truck,          // Tracking
  AlertTriangle   // Warranty
} from 'lucide-react';

import { Translation } from 'shared';
import { MenuItem } from './types';

// --- ATOMIC MENU BUILDERS ---

const getHomeMenu = (text: Translation): MenuItem => ({
  label: text.navHome,
  path: '/',
  hasDropdown: false
});

const getAboutMenu = (text: Translation): MenuItem => ({
  label: text.navAbout,
  path: '#',
  hasDropdown: true,
  columns: [
    {
       title: text.navAboutCompany, // "PERUSAHAAN"
       width: 'wide',
       items: [
          { label: text.navAboutProfile, path: '/about', icon: User, desc: "Sejarah, Visi & Legitimasi PT MKS" },
          { label: text.navAboutVision, path: '/vision', icon: BookOpen, desc: "Blueprint Masa Depan" },
          { label: text.navAboutPortfolio, path: '/portfolio', icon: FolderOpen, desc: "Bukti Otentik Project" },
          { label: text.navCareer, path: '/career', icon: Briefcase, desc: "Gabung Pasukan Elite" },
          { label: text.navContact, path: '/contact', icon: Mail, desc: "Markas Komando & Kontak" },
       ]
    },
    {
       title: text.navInnoHeader, // "INOVASI"
       width: 'narrow',
       items: [
           { label: text.navInnoSibos, path: '/sibos', icon: Cpu, desc: "Sistem ERP Terintegrasi" },
           { label: text.navInnoQalam, path: '/qalam', icon: BookOpen, desc: "Manajemen Pendidikan Digital" },
       ]
    }
  ]
});

const getServicesMenu = (text: Translation): MenuItem => ({
  label: text.navLayanan,
  path: '#',
  hasDropdown: true,
  columns: [
    {
      title: text.navTechHeader, // "TEKNOLOGI"
      width: 'narrow',
      items: [
        { label: text.navTechCompro, path: '/services', icon: Globe, desc: "Branding Perusahaan & SEO" },
        { label: text.navTechEcom, path: '/services', icon: ShoppingCart, desc: "Sistem Toko Online Auto-Pilot" },
        { label: text.navTechCustom, path: '/services', icon: Code, desc: "Web Apps & Sistem Custom" },
      ]
    },
    {
      title: text.navBizHeader, // "SOLUSI BISNIS"
      width: 'wide',
      items: [
        { label: text.navIndRetail, path: '/solutions?tag=RETAIL', icon: ShoppingBag, desc: "Minimarket, Fashion, Grosir" },
        { label: text.navIndFnb, path: '/solutions?tag=FNB', icon: Coffee, desc: "Cafe, Resto, Franchise" },
        { label: text.navIndService, path: '/solutions?tag=SERVICES', icon: Scissors, desc: "Barbershop, Laundry, Bengkel" },
        { label: text.navIndHealth, path: '/solutions?tag=HEALTH', icon: Activity, desc: "Apotek & Klinik" },
        { label: text.navIndEdu, path: '/solutions?tag=EDU', icon: School, desc: "Pendidikan & Sekolah" },
        { label: text.navIndGov, path: '/solutions?tag=GOV', icon: Building2, desc: "Birokrasi & Desa" },
        { label: text.navIndCorp, path: '/solutions?tag=CORP', icon: Factory, desc: "Gudang & Pabrik" },
        { label: text.navIndAll, path: '/solutions', icon: LayoutGrid, desc: "Lihat Semua Industri" },
      ]
    }
  ]
});

const getHardwareMenu = (text: Translation): MenuItem => ({
  label: text.navSolutions, // "MESIN KASIR"
  path: '#',
  hasDropdown: true,
  items: [
    { label: text.navHwBundle, path: '/shop', icon: Package, desc: "Paket Siap Pakai (All-in-One)" },
    { label: text.navHwAndroid, path: '/shop', icon: Tablet, desc: "Cash Register, Android, Komputer" },
    { label: text.navHwPc, path: '/shop', icon: Monitor, desc: "PC Desktop & All-in-One" },
    { label: text.navHwRegister, path: '/shop', icon: Calculator, desc: "Electronic Cash Register" },
    { label: text.navHwScanner, path: '/shop', icon: Scan, desc: "1D/2D Barcode Scanner" },
    { label: text.navHwPaper, path: '/shop', icon: Scroll, desc: "Thermal & Label Paper" },
    { label: text.navHwDrawer, path: '/shop', icon: Inbox, desc: "Laci Uang (Metal/RJ11)" },
    { label: text.navHwDesk, path: '/shop', icon: Armchair, desc: "Meja Kasir & Shelving" },
    { label: text.navHwRack, path: '/shop', icon: Grid, desc: "Rak Minimarket & Gudang" },
    { label: text.navHwAksesoris, path: '/shop', icon: Mouse, desc: "Printer, Sparepart, dll" },
  ]
});

const getSupportMenu = (text: Translation): MenuItem => ({
  label: text.navHelp,
  path: '#',
  hasDropdown: true,
  columns: [
      {
          title: text.navSupLegalHeader, // "ATURAN MAIN"
          width: 'narrow',
          items: [
              { label: text.navSupTerms, path: '/terms', icon: FileText, desc: "Perjanjian Pengguna" },
              { label: text.navSupPrivacy, path: '/privacy', icon: Lock, desc: "Kebijakan Data" },
              { label: text.navSupFaq, path: '/faq', icon: HelpCircle, desc: "Tanya Jawab Umum" },
          ]
      },
      {
          title: text.navSupHeader, // "BANTUAN"
          width: 'wide',
          items: [
            { label: text.navSupDownload, path: '/download', icon: Download, desc: "Driver & Software" },
            { label: text.navSupKb, path: '/articles', icon: BookOpen, desc: "Tutorial & Dokumentasi" },
            { label: text.navSupTrack, path: '/track', icon: Truck, desc: "Cek Resi Pengiriman" },
            { label: text.navSupClaim, path: '/warranty', icon: AlertTriangle, desc: "Layanan Purna Jual" },
          ]
      }
  ]
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
