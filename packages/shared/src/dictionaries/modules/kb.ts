
import { KbDictionary } from '../../types';

export const Kb_ID: KbDictionary = {
  kbHeading: "Knowledge Base",
  kbSub: "Gak usah bingung, Bos. Semua tutorial, panduan, dan dokumentasi teknis ada di sini. Baca, praktekkan, kuasai.",
  kbSearchPlaceholder: "Cari tutorial atau panduan...",
  kbPopularTitle: "TUTORIAL POPULER",
  kbCategoriesTitle: "KATEGORI PANDUAN",
  kbContactTitle: "Masih Mentok?",
  kbContactSub: "Kalau udah baca tapi masih bingung, tim teknis gue siap bantu lewat WhatsApp.",
  kbContactBtn: "TANYA TEKNISI",
  kbCategories: [
    { id: 'setup', title: "Instalasi & Setup", icon: 'WRENCH', articleCount: 12 },
    { id: 'hardware', title: "Hardware & Troubleshooting", icon: 'PRINTER', articleCount: 8 },
    { id: 'software', title: "Penggunaan Software", icon: 'CODE', articleCount: 15 },
    { id: 'payment', title: "Metode Pembayaran", icon: 'CREDIT_CARD', articleCount: 5 },
  ],
  kbPopularArticles: [
    { id: '1', title: "Cara Setting Printer Thermal Bluetooth ke HP", categoryId: 'hardware', excerpt: "Langkah-langkah menyambungkan printer thermal ke aplikasi kasir di Android.", date: "2024-01-10" },
    { id: '2', title: "Panduan Input Stok Barang di SIBOS ERP", categoryId: 'software', excerpt: "Cara cepat memasukkan ribuan data barang ke sistem tanpa ribet.", date: "2024-01-15" },
    { id: '3', title: "Solusi Printer Macet / Tidak Keluar Kertas", categoryId: 'hardware', excerpt: "Tips mengatasi masalah umum printer thermal yang sering terjadi di lapangan.", date: "2024-02-01" },
    { id: '4', title: "Cara Tarik Laporan Penjualan Harian", categoryId: 'software', excerpt: "Melihat omset dan profit harian lo cuma dalam hitungan detik.", date: "2024-02-05" },
  ]
};

export const Kb_EN: KbDictionary = {
  kbHeading: "Knowledge Base",
  kbSub: "Don't be confused, Boss. All tutorials, guides, and technical documentation are here. Read, practice, master.",
  kbSearchPlaceholder: "Search tutorials or guides...",
  kbPopularTitle: "POPULAR TUTORIALS",
  kbCategoriesTitle: "GUIDE CATEGORIES",
  kbContactTitle: "Still Stuck?",
  kbContactSub: "If you've read but still confused, my technical team is ready to help via WhatsApp.",
  kbContactBtn: "ASK TECHNICIAN",
  kbCategories: [
    { id: 'setup', title: "Installation & Setup", icon: 'WRENCH', articleCount: 12 },
    { id: 'hardware', title: "Hardware & Troubleshooting", icon: 'PRINTER', articleCount: 8 },
    { id: 'software', title: "Software Usage", icon: 'CODE', articleCount: 15 },
    { id: 'payment', title: "Payment Methods", icon: 'CREDIT_CARD', articleCount: 5 },
  ],
  kbPopularArticles: [
    { id: '1', title: "How to Setup Bluetooth Thermal Printer to Phone", categoryId: 'hardware', excerpt: "Steps to connect thermal printer to cashier app on Android.", date: "2024-01-10" },
    { id: '2', title: "Guide to Input Stock Items in SIBOS ERP", categoryId: 'software', excerpt: "Quick way to enter thousands of item data into the system without hassle.", date: "2024-01-15" },
    { id: '3', title: "Solution for Jammed Printer / No Paper", categoryId: 'hardware', excerpt: "Tips for solving common thermal printer problems that often occur in the field.", date: "2024-02-01" },
    { id: '4', title: "How to Pull Daily Sales Reports", categoryId: 'software', excerpt: "See your daily turnover and profit in just seconds.", date: "2024-02-05" },
  ]
};
