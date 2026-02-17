
import { ProductItem } from '../types';

export const MOCK_PRODUCTS: ProductItem[] = [
  {
    id: 1,
    name: "MKS Fighter V1",
    price: 3500000,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=400",
    gallery: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    ],
    desc: "Paket Kasir Android lengkap + Printer Thermal 58mm. Siap tempur untuk warung & cafe.",
    review: "Ini bukan tablet mainan. Gue rakit MKS Fighter V1 khusus buat lo yang butuh kecepatan. Layar responsif, gak pake lag pas jam sibuk. Printer thermal-nya ngebut, struk keluar sebelum pelanggan sempet kedip. Cocok banget buat Warung Makan, Cafe, atau Booth Minuman yang transaksinya ratusan per hari.",
    specs: ["Layar 10.1 Inch IPS", "Printer Thermal 58mm Built-in", "Android 11 OS", "RAM 4GB / ROM 32GB", "Battery 5000mAh"],
    inBox: ["Unit Utama MKS Fighter", "Adaptor Power", "Roll Kertas Thermal (Starter)", "Manual Book", "Kartu Garansi"],
    weight: "2.5 Kg",
    dimensions: "30 x 25 x 15 cm",
    tag: "BEST SELLER",
    category: 'ANDROID'
  },
  {
    id: 2,
    name: "Thermal Savage 80mm",
    price: 1250000,
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=400",
    gallery: [
        "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1529236183275-4fdcf2bc987e?auto=format&fit=crop&q=80&w=800"
    ],
    desc: "Printer dapur heavy duty. Auto cutter. Koneksi LAN + USB. Anti macet saat rush hour.",
    review: "Printer ini badak. Lo geber cetak 1000 struk sehari juga dia ketawa doang. Fitur Auto-Cutter nya tajem, gak bikin kertas nyangkut (paper jam) yang bikin emosi koki. Wajib punya buat dapur restoran yang hectic.",
    specs: ["Paper Width 80mm", "Speed 260mm/sec", "Interface: USB + LAN + Serial", "Auto Cutter: 1.5 Million Cuts", "Wall Mountable"],
    inBox: ["Printer Unit", "Kabel USB & Power", "CD Driver", "Sample Paper 80mm"],
    weight: "1.8 Kg",
    dimensions: "19 x 14 x 14 cm",
    tag: "HEAVY DUTY",
    category: 'PERIPHERALS'
  },
  {
    id: 3,
    name: "Scanner Laser Gun",
    price: 450000,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=400",
    gallery: [
        "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1580974852861-c04838003195?auto=format&fit=crop&q=80&w=800"
    ],
    desc: "Barcode scanner 1D/2D. Baca barcode lecek? Bisa. Respon milidetik.",
    review: "Scanner ini matanya tajem. Barcode lecek, basah, atau kepotong dikit masih bisa kebaca. Gak perlu ngeker-ngeker lama yang bikin antrian kasir panjang. Trigger-nya empuk, enak buat scan barang grosiran yang banyak.",
    specs: ["Sensor: CMOS", "Scan Speed: 300 scans/sec", "Drop Test: 1.5 Meter", "Cable Length: 2M", "Mode: Manual & Continuous"],
    inBox: ["Scanner Gun", "Stand/Holder", "Kabel USB", "Manual Config"],
    weight: "0.5 Kg",
    dimensions: "17 x 10 x 7 cm",
    category: 'PERIPHERALS'
  },
  {
    id: 4,
    name: "MKS Pro Tablet",
    price: 2800000,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=400",
    gallery: [
        "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&q=80&w=800"
    ],
    desc: "Tablet khusus POS. Baterai badak 8000mAh. Layar IPS jernih. Sudah include stand metal.",
    review: "Bukan tablet cina murahan yang dipake sebulan jebol. Ini Industrial Grade. Baterai 8000mAh kuat seharian tanpa colok charger. Stand metalnya kokoh, gak goyang pas ditutul-tutul pelanggan.",
    specs: ["Screen: 10.1 FHD IPS", "CPU: Octa Core 2.0GHz", "RAM 4GB / Storage 64GB", "Battery: 8000mAh", "4G LTE Support"],
    inBox: ["Tablet Unit", "Metal Stand", "Charger Fast Charging", "Sim Ejector"],
    weight: "1.2 Kg",
    dimensions: "24 x 17 x 0.9 cm",
    category: 'ANDROID'
  },
  {
    id: 5,
    name: "PC All-in-One Commander",
    price: 8500000,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=400",
    gallery: [
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1547082299-bb196bcc449c?auto=format&fit=crop&q=80&w=800"
    ],
    desc: "PC Touchscreen Industrial Grade. Core i5, RAM 8GB, SSD 256GB. Tahan nyala 24 jam nonstop.",
    review: "Ini mesin perang sesungguhnya buat Minimarket atau Resto besar. Fanless design (gak berisik & gak nyedot debu). Touchscreen kapasitif responsif banget. Dinyalain 24 jam non-stop aman sentosa.",
    specs: ["Intel Core i5 Gen 11", "RAM 8GB DDR4 (Upgradable)", "SSD 256GB NVMe", "Screen: 15.6 Inch True Flat", "Win 10 IoT Enterprise"],
    inBox: ["AIO PC Unit", "Power Adapter", "Keyboard & Mouse Wireless", "Driver"],
    weight: "5.5 Kg",
    dimensions: "40 x 35 x 25 cm",
    tag: "PREMIUM",
    category: 'PC'
  },
  {
    id: 6,
    name: "Cash Drawer Baja",
    price: 650000,
    image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&q=80&w=400",
    gallery: [
        "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&q=80&w=800"
    ],
    desc: "Laci uang full metal. Koneksi RJ11 ke printer. Penjepit uang besi, bukan plastik murahan.",
    review: "Laci uang yang bunyinya 'Cring' nya mantep. Full metal body, ditendang maling gak bakal penyok. Penjepit uangnya besi, bukan plastik yang gampang patah. Koneksi RJ11 otomatis kebuka pas struk keluar.",
    specs: ["Material: Heavy Duty Steel", "Interface: RJ11", "Tray: 5 Bills / 8 Coins", "Lock: 3-Position Key Lock", "Cycle: 1 Million Opens"],
    inBox: ["Cash Drawer Unit", "Kunci (2 Pcs)", "Kabel RJ11"],
    weight: "4.2 Kg",
    dimensions: "41 x 42 x 10 cm",
    category: 'PERIPHERALS'
  }
];
