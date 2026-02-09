
import { SolutionItem } from '../types';

export const MOCK_SOLUTIONS: SolutionItem[] = [
  // RETAIL
  {
    id: 1,
    title: "Minimarket & Toko Kelontong",
    industryTag: "RETAIL",
    desc: "Sistem kasir ritel dengan manajemen stok ribuan SKU. Support barcode scanner, cetak label rak, dan laporan laba rugi harian.",
    image: "https://images.unsplash.com/photo-1583574932824-c10e0c0f8629?auto=format&fit=crop&q=80&w=800",
    features: ["Database 10.000+ SKU", "Cetak Label Rak", "Laporan Stok Opname"]
  },
  {
    id: 2,
    title: "Fashion & Distro",
    industryTag: "RETAIL",
    desc: "Kelola varian warna dan ukuran baju dengan mudah. Sistem barcode tag baju dan manajemen retur barang.",
    image: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&q=80&w=800",
    features: ["Varian Matrix (Size/Color)", "Cetak Barcode Baju", "Manajemen Konsinyasi"]
  },
  
  // F&B
  {
    id: 3,
    title: "Coffee Shop & Cafe",
    industryTag: "FNB",
    desc: "POS Android untuk cafe dengan fitur manajemen meja, resep (ingredients), dan varian topping.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800",
    features: ["Manajemen Meja", "Potong Stok Bahan Baku", "Varian Topping/Sugar"]
  },
  {
    id: 4,
    title: "Restoran Full Service",
    industryTag: "FNB",
    desc: "Sistem lengkap dari kasir depan, waiters (tablet), hingga dapur (kitchen display). Sinkronisasi order real-time.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    features: ["Kitchen Display System", "Split Bill", "Manajemen Waiters"]
  },

  // SERVICES
  {
    id: 5,
    title: "Laundry Kiloan & Satuan",
    industryTag: "SERVICES",
    desc: "Aplikasi kasir laundry dengan fitur cetak nota tag, pelacakan status cucian, dan SMS notifikasi ke pelanggan.",
    image: "https://images.unsplash.com/photo-1545173168-9f1947eebb8f?auto=format&fit=crop&q=80&w=800",
    features: ["Tracking Status Cucian", "Nota Tag Anti Air", "SMS/WA Notifikasi"]
  },
  {
    id: 6,
    title: "Barbershop & Salon",
    industryTag: "SERVICES",
    desc: "Manajemen antrian pelanggan, komisi kapster/stylist, dan booking jadwal online.",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800",
    features: ["Komisi Kapster", "Booking Jadwal", "Member & Langganan"]
  },
  {
    id: 7,
    title: "Bengkel & Car Wash",
    industryTag: "SERVICES",
    desc: "Catat riwayat servis kendaraan pelanggan, stok sparepart, dan komisi mekanik.",
    image: "https://images.unsplash.com/photo-1599256621730-535171e28e50?auto=format&fit=crop&q=80&w=800",
    features: ["Riwayat Servis (Plat No)", "Stok Sparepart", "Komisi Mekanik"]
  },

  // HEALTH
  {
    id: 8,
    title: "Apotek & Klinik",
    industryTag: "HEALTH",
    desc: "Sistem kasir apotek dengan manajemen tanggal kadaluarsa (expired date), kartu stok, dan resep dokter.",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=800",
    features: ["Alert Expired Date", "Kartu Stok Obat", "Manajemen Resep"]
  },

  // CORPORATE
  {
    id: 9,
    title: "Gudang & Distributor",
    industryTag: "CORP",
    desc: "Software manajemen gudang (WMS), multi-gudang, transfer stok, dan faktur penjualan tempo.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    features: ["Multi Gudang", "Hutang Piutang", "Sales Canvas"]
  }
];
