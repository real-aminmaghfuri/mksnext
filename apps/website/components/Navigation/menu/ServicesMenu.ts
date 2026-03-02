
import { Globe, ShoppingCart, Code, ShoppingBag, Coffee, Network, Scissors, Activity, School, Building2, Factory, LayoutGrid, Layers } from 'lucide-react';
import { Translation } from 'shared';
import { MenuItem } from '../types';

export const getServicesMenu = (text: Translation): MenuItem => ({
  label: text.navLayanan,
  path: '#',
  hasDropdown: true,
  icon: Layers,
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
        { label: text.navIndFnb, path: '/solutions/fnb', icon: Coffee, desc: "Cafe, Resto, Franchise" },
        { label: text.navIndFranchise, path: '/solutions/franchise', icon: Network, desc: "Kemitraan & Cabang" },
        { label: text.navIndService, path: '/solutions/services', icon: Scissors, desc: "Barbershop, Laundry, Bengkel" },
        { label: text.navIndHealth, path: '/solutions/health', icon: Activity, desc: "Apotek & Klinik" },
        { label: text.navIndEdu, path: '/solutions/education', icon: School, desc: "Pendidikan & Sekolah" },
        { label: text.navIndGov, path: '/solutions/government', icon: Building2, desc: "Birokrasi & Desa" },
        { label: text.navIndCorp, path: '/solutions/corporate', icon: Factory, desc: "Gudang & Pabrik" },
        { label: text.navIndAll, path: '/solutions', icon: LayoutGrid, desc: "Lihat Semua Industri" },
      ]
    }
  ]
});
