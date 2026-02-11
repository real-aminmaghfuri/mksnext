
"use client";

import { 
  ShoppingCart, Truck, CreditCard, Smartphone, 
  BarChart3, Zap, Globe, Lock 
} from 'lucide-react';
import { StoreContent } from './types';

export const useOnlineStore = (): StoreContent => {
  return {
    hero: {
      badge: "E-COMMERCE AUTO PILOT",
      title: "Toko Buka 24 Jam,",
      titleSpan: "Lo Tidur Duit Masuk.",
      sub: "Masih jualan via WA manual? Capek jempol, Bos! Gue bikinin mesin otomatis biar orderan masuk sendiri, ongkir kehitung sendiri, duit masuk rekening sendiri. Lo tinggal packing.",
    },
    painPoints: {
      title: "STOP JADI KULI CHAT",
      sub: "Coba itung berapa jam waktu lo kebuang cuma buat balesin 'Ongkir ke Bekasi berapa gan?' atau 'Barang ready gak?'. Ini bedanya nasib lo kalau upgrade:",
      comparisons: [
        { manual: "Balesin chat satu-satu sampai jempol keriting.", auto: "Customer checkout sendiri 24 jam nonstop." },
        { manual: "Cek ongkir manual buka tutup aplikasi ekspedisi.", auto: "Ongkir otomatis kehitung (JNE, J&T, SiCepat, dll)." },
        { manual: "Rekapan order di buku tulis/Excel manual.", auto: "Laporan omzet & stok real-time di dashboard." },
        { manual: "Transfer manual, kudu cek mutasi satu-satu.", auto: "Payment Gateway (QRIS/VA) konfirmasi otomatis." },
      ]
    },
    features: {
      title: "SENJATA JUALAN OTOMATIS",
      sub: "Sistem yang gue bangun bukan sekadar katalog pajangan. Ini mesin transaksi full power.",
      items: [
        {
          title: "Raja Ongkir Pro",
          desc: "Integrasi API logistik level dewa. Cek ongkir otomatis se-Indonesia sampai level kecamatan.",
          icon: Truck
        },
        {
          title: "Payment Gateway",
          desc: "Terima duit via QRIS, Virtual Account, E-Wallet, sampai Kartu Kredit. Keliatan bonafide, Bos.",
          icon: CreditCard
        },
        {
          title: "App-Like Experience",
          desc: "Tampilan di HP licin kayak aplikasi native. Gak perlu install, loading ngebut.",
          icon: Smartphone
        },
        {
          title: "Live Dashboard",
          desc: "Pantau omzet hari ini, produk terlaris, dan data pelanggan sambil ngopi.",
          icon: BarChart3
        },
        {
          title: "SEO E-Commerce",
          desc: "Produk lo gampang ditemuin di Google. Struktur data schema product udah gue tanem.",
          icon: Globe
        },
        {
          title: "Stok Otomatis",
          desc: "Barang laku, stok berkurang sendiri. Gak ada lagi drama 'Maaf kak barang habis' setelah transfer.",
          icon: Zap
        }
      ]
    },
    steps: {
      title: "CARA KERJA MESIN UANG",
      steps: [
        { num: "01", title: "Setup Produk", desc: "Upload foto, deskripsi, harga, dan berat barang di admin panel yang gampang banget." },
        { num: "02", title: "Sebar Link", desc: "Taruh link web di Bio IG, TikTok, atau Broadcast WA. Biarin trafik masuk." },
        { num: "03", title: "Panen Order", desc: "Lo dapet notifikasi order masuk. Tinggal cetak label pengiriman, tempel, kirim." }
      ]
    },
    cta: {
      title: "Pensiun Jadi Admin",
      sub: "Mulai jadi Owner beneran. Biarin sistem yang kerja keras, lo fokus mikirin strategi ekspansi.",
      btn: "BIKIN TOKO OTOMATIS SEKARANG"
    }
  };
};
