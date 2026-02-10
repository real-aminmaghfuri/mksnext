
import { IndustryData, IndustrySlug } from '../types';

export const INDUSTRY_DICTIONARY: Record<IndustrySlug, IndustryData> = {
  retail: {
    slug: 'retail',
    tag: 'RETAIL',
    label: 'Retail & Grosir',
    seo: {
      title: 'Sistem Kasir Minimarket & Toko Kelontong Modern | MKS',
      description: 'Software kasir ritel anti-maling. Kelola ribuan SKU, stok opname cepat, dan cegah kebocoran stok. Solusi pasti buat minimarket dan toko grosir.',
      keywords: ['mesin kasir minimarket', 'software toko kelontong', 'aplikasi kasir ritel', 'program kasir barcode'],
    },
    hero: {
      title: 'DOMINASI RAK & GUDANG',
      subtitle: 'Kelola 10.000+ SKU tanpa pusing. Sistem kita dirancang buat nangkap selisih stok sekecil apapun. Jangan biarkan profit lo dimakan tuyul gudang.',
    }
  },
  fnb: {
    slug: 'fnb',
    tag: 'FNB',
    label: 'F&B (Resto/Cafe)',
    seo: {
      title: 'Software Restoran & Cafe Manajemen Meja | MKS',
      description: 'Aplikasi kasir cafe dan restoran dengan manajemen meja, resep bahan baku, dan kitchen display system. Percepat order, kurangi salah saji.',
      keywords: ['software restoran', 'aplikasi kasir cafe', 'sistem manajemen meja', 'pos restoran android'],
    },
    hero: {
      title: 'DARI DAPUR SAMPAI MEJA',
      subtitle: 'Sinkronisasi total. Order di depan, dapur langsung masak. Gak ada lagi teriak-teriak pesanan. Potong cost bahan baku dengan manajemen resep akurat.',
    }
  },
  services: {
    slug: 'services',
    tag: 'SERVICES',
    label: 'Jasa & Layanan',
    seo: {
      title: 'Aplikasi Kasir Laundry, Barbershop & Bengkel | MKS',
      description: 'Sistem manajemen jasa dengan fitur tracking order real-time, notifikasi WA, dan manajemen komisi karyawan/kapster/mekanik.',
      keywords: ['aplikasi laundry', 'software bengkel', 'sistem barbershop', 'aplikasi kasir jasa'],
    },
    hero: {
      title: 'TRACKING ORDER REAL-TIME',
      subtitle: 'Pelanggan lo butuh kepastian, bukan janji. Pantau status servis atau cucian detik ini juga. Kirim notifikasi WA otomatis pas kelar.',
    }
  },
  health: {
    slug: 'health',
    tag: 'HEALTH',
    label: 'Kesehatan (Klinik)',
    seo: {
      title: 'Software Apotek & Klinik Terintegrasi | MKS',
      description: 'Manajemen apotek dengan fitur kartu stok, peringatan kadaluarsa (expired date), dan resep dokter. Aman, akurat, dan sesuai standar.',
      keywords: ['software apotek', 'aplikasi klinik', 'sistem kasir obat', 'manajemen expired date'],
    },
    hero: {
      title: 'AKURASI ADALAH NYAWA',
      subtitle: 'Salah stok obat urusannya nyawa. Sistem kita jagain batch number dan expired date lo seakurat mungkin. Audit stok obat jadi mainan anak kecil.',
    }
  },
  corporate: {
    slug: 'corporate',
    tag: 'CORP',
    label: 'Corporate & Pabrik',
    seo: {
      title: 'Sistem Gudang & Distributor (WMS) | MKS',
      description: 'Software manajemen gudang (WMS) multi-lokasi. Atur transfer stok antar cabang, faktur tempo, dan salesman canvas dalam satu dashboard.',
      keywords: ['warehouse management system', 'software distributor', 'aplikasi gudang', 'sistem multi cabang'],
    },
    hero: {
      title: 'KOMANDO RANTAI PASOK',
      subtitle: 'Multi-gudang, multi-cabang, satu komando. Pantau pergerakan aset lo dari pabrik sampai ke tangan retailer tanpa blindspot.',
    }
  },
  education: {
    slug: 'education',
    tag: 'EDU',
    label: 'Pendidikan',
    seo: {
      title: 'Sistem Pembayaran SPP & Sekolah | MKS',
      description: 'Digitalisasi keuangan sekolah. Tagihan SPP via WA, pembayaran online, dan laporan keuangan yayasan yang transparan.',
      keywords: ['aplikasi spp sekolah', 'sistem keuangan yayasan', 'software administrasi sekolah'],
    },
    hero: {
      title: 'DIGITALISASI SEKOLAH',
      subtitle: 'Ubah tumpukan buku kas jadi dashboard digital. Transparansi keuangan yayasan dan kemudahan bayar buat wali murid.',
    }
  },
  government: {
    slug: 'government',
    tag: 'GOV',
    label: 'Pemerintahan',
    seo: {
      title: 'Solusi Smart Village & Birokrasi | MKS',
      description: 'Sistem informasi desa dan manajemen aset daerah. Transparansi anggaran dan pelayanan publik berbasis digital.',
      keywords: ['sistem informasi desa', 'aplikasi smart village', 'manajemen aset daerah'],
    },
    hero: {
      title: 'BIROKRASI SAT-SET',
      subtitle: 'Pelayanan publik gak boleh lelet. Digitalisasi data warga dan aset daerah untuk transparansi dan kecepatan layanan.',
    }
  }
};

// Helper untuk dapetin list slug buat Static Params (SSG)
export const getIndustrySlugs = () => Object.keys(INDUSTRY_DICTIONARY).map(slug => ({ industry: slug }));

// Helper untuk cari data by slug
export const getIndustryBySlug = (slug: string): IndustryData | undefined => {
  return INDUSTRY_DICTIONARY[slug as IndustrySlug];
}
