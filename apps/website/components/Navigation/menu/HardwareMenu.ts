
import { Package, Tablet, Monitor, Calculator, Scan, Scroll, Inbox, Armchair, Grid, Mouse, LayoutGrid } from 'lucide-react';
import { Translation } from 'shared';
import { MenuItem } from '../types';

export const getHardwareMenu = (text: Translation): MenuItem => ({
  label: text.navSolutions,
  path: '#',
  hasDropdown: true,
  icon: Monitor,
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
    { label: text.navHwAll, path: '/shop', icon: LayoutGrid, desc: "Cek Semua Katalog" },
  ]
});
