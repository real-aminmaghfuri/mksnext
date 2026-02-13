
import { LayoutGrid, ShoppingBag, Coffee, Scissors, Activity, GraduationCap, Building2, Factory, Network, Globe, ShoppingCart, Code } from 'lucide-react';

export const LEGAL_SIDEBAR_DATA = [
  {
    category: "SYSTEM SOLUTIONS",
    items: [
      { label: "Retail & Grosir", path: "/solutions/retail", icon: ShoppingBag },
      { label: "F&B (Resto/Cafe)", path: "/solutions/fnb", icon: Coffee },
      { label: "Jasa & Layanan", path: "/solutions/services", icon: Scissors },
      { label: "Apotek & Klinik", path: "/solutions/health", icon: Activity },
      { label: "Pendidikan", path: "/solutions/education", icon: GraduationCap },
      { label: "Pemerintahan", path: "/solutions/government", icon: Building2 },
      { label: "Korporat & Pabrik", path: "/solutions/corporate", icon: Factory },
      { label: "Franchise", path: "/solutions/franchise", icon: Network },
    ]
  },
  {
    category: "DIGITAL SERVICES",
    items: [
      { label: "Company Profile", path: "/services/company-profile", icon: Globe },
      { label: "Toko Online", path: "/services/online-store", icon: ShoppingCart },
      { label: "Custom Web App", path: "/services/web-app", icon: Code },
    ]
  },
  {
    category: "HARDWARE ARSENAL",
    items: [
      { label: "Katalog Alat Tempur", path: "/shop", icon: LayoutGrid },
    ]
  }
];
