
import { 
  User, BookOpen, FolderOpen, Briefcase, Mail, Cpu, 
  Globe, ShoppingCart, Code, ShoppingBag, Coffee, Scissors, 
  Activity, School, Building2, Factory, LayoutGrid, 
  Package, Tablet, Monitor, Calculator, Scan, Scroll, 
  Inbox, Armchair, Grid, Mouse, FileText, Lock, 
  HelpCircle, Download, Truck, AlertTriangle 
} from 'lucide-react';
import { Translation } from 'shared';
import { MenuItem } from './types';

export const getAboutMenu = (text: Translation): MenuItem => ({
  label: text.navAbout,
  path: '#',
  hasDropdown: true,
  columns: [
    {
       title: text.navAboutCompany,
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
       title: text.navInnoHeader,
       width: 'narrow',
       items: [
           { label: text.navInnoSibos, path: '/sibos', icon: Cpu, desc: "Sistem ERP Terintegrasi" },
           { label: text.navInnoQalam, path: '/qalam', icon: BookOpen, desc: "Manajemen Pendidikan Digital" },
       ]
    }
  ]
});

export const getServicesMenu = (text: Translation): MenuItem => ({
  label: text.navLayanan,
  path: '#',
  hasDropdown: true,
  columns: [
    {
      title: text.navTechHeader,
      width: 'narrow',
      items: [
        { label: text.navTechCompro, path: '/services/company-profile', icon: Globe, desc: "Branding Perusahaan & SEO" },
        { label: text.navTechEcom, path: '/services/online-store', icon: ShoppingCart, desc: "Sistem Toko Online Auto-Pilot" },
        { label: text.navTechCustom, path: '/services/web-app', icon: Code, desc: text.navTechCustomDesc },
      ]
    },
    {
      title: text.navBizHeader,
      width: 'wide',
      items: [
        { label: text.navIndRetail, path: '/solutions/retail', icon: ShoppingBag, desc: "Minimarket, Fashion, Grosir" },
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

export const getHardwareMenu = (text: Translation): MenuItem => ({
  label: text.navSolutions,
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

export const getSupportMenu = (text: Translation): MenuItem => ({
  label: text.navHelp,
  path: '#',
  hasDropdown: true,
  columns: [
      {
          title: text.navSupLegalHeader,
          width: 'narrow',
          items: [
              { label: text.navSupTerms, path: '/terms', icon: FileText, desc: "Perjanjian Pengguna" },
              { label: text.navSupPrivacy, path: '/privacy', icon: Lock, desc: "Kebijakan Data" },
              { label: text.navSupFaq, path: '/faq', icon: HelpCircle, desc: "Tanya Jawab Umum" },
          ]
      },
      {
          title: text.navSupHeader,
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
