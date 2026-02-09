
import { ArticleItem } from '../types';

const DUMMY_CONTENT = `
  <p class="lead">Bisnis ritel itu medan perang. Kalau lo masuk tanpa strategi harga yang bener, lo cuma setor nyawa (baca: modal) ke kompetitor sebelah.</p>
  
  <h3>1. The Decoy Effect (Efek Umpan)</h3>
  <p>Pernah liat popcorn di bioskop? Small 30rb, Medium 45rb, Large 50rb. Kebanyakan orang bakal beli Large karena beda tipis sama Medium. Padahal aslinya, si Medium itu cuma "umpan" biar Large keliatan murah.</p>
  
  <blockquote>"Orang gak beli barang karena butuh, orang beli karena ngerasa untung."</blockquote>

  <h3>2. Angka Ganjil Psikologis</h3>
  <p>Harga Rp 99.900 itu secara psikologis jauh lebih murah di otak manusia dibanding Rp 100.000. Digit kiri itu "anchor". Mata kita baca dari kiri ke kanan. Jadi 99rb itu masuknya ke kategori "90 ribuan", bukan "100 ribuan".</p>

  <h3>3. Bundling: Ilusi Hemat</h3>
  <p>Lo punya stok barang mati yang gak laku? Jangan diskon sendirian. Gabungin sama barang <i>best seller</i>. Namanya <strong>Paket Hemat</strong>. Barang laku tetep jalan, barang mati ikut kegusur keluar gudang.</p>

  <h3>Kesimpulan</h3>
  <p>Jangan asal nentuin harga pake feeling. Pake data, pake psikologi. Kalau lo butuh sistem kasir yang bisa atur promo bundling otomatis, lo tau harus hubungi siapa.</p>
`;

export const MOCK_ARTICLES: ArticleItem[] = [
  {
    id: 1,
    slug: "rahasia-psikologi-harga",
    title: "Kenapa Toko Sebelah Lebih Rame? Ini Rahasia Psikologi Harga Mereka",
    excerpt: "Bukan sihir bukan santet. Toko rame itu soal permainan otak pelanggan. Gue bongkar trik psikologi harga yang sering dipake minimarket modern.",
    content: DUMMY_CONTENT,
    category: "MARKETING",
    date: "25 Oct 2024",
    author: "Amin Maghfuri",
    readTime: "5 MIN READ",
    image: "https://images.unsplash.com/photo-1556740758-90de2742eefc?auto=format&fit=crop&q=80&w=800",
    isFeatured: true
  },
  {
    id: 2,
    slug: "stok-opname-neraka",
    title: "Stok Opname: Neraka Buat Karyawan, Surga Buat Owner",
    excerpt: "Karyawan lo males stok opname? Wajar. Tapi kalau lo ikut males, siap-siap boncos. Ini cara bikin stok opname jadi ga kerasa kayak kerja rodi.",
    content: DUMMY_CONTENT,
    category: "MANAJEMEN",
    date: "22 Oct 2024",
    author: "Tim MKS",
    readTime: "3 MIN READ",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    slug: "thermal-vs-dotmatrix",
    title: "Thermal Printer vs Dot Matrix: Mana yang Cocok Buat Warung Lo?",
    excerpt: "Jangan asal beli printer murah. Salah beli, struk lo ilang kena panas atau malah berisik kayak mesin jahit. Pelajari bedanya disini.",
    content: DUMMY_CONTENT,
    category: "TEKNIS",
    date: "20 Oct 2024",
    author: "Amin Maghfuri",
    readTime: "4 MIN READ",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    slug: "loyalitas-tanpa-bakar-duit",
    title: "Membangun Loyalitas Pelanggan Tanpa Bakar Duit Promo",
    excerpt: "Diskon mulu kapan untungnya? Ada cara elegan buat bikin pelanggan balik lagi tanpa harus motong margin lo gila-gilaan.",
    content: DUMMY_CONTENT,
    category: "MARKETING",
    date: "18 Oct 2024",
    author: "Tim MKS",
    readTime: "6 MIN READ",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    slug: "bahaya-software-bajakan",
    title: "Bahaya Pakai Software Kasir Bajakan: Data Lo Taruhannya",
    excerpt: "Gratis sih, tapi kalau database pelanggan lo bocor atau sistem crash pas jam sibuk, nangis darah lo. Investasi software itu asuransi.",
    content: DUMMY_CONTENT,
    category: "TEKNIS",
    date: "15 Oct 2024",
    author: "Amin Maghfuri",
    readTime: "4 MIN READ",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    slug: "sop-kasir-anti-maling",
    title: "SOP Kasir Anti Maling: Menutup Celah Kecurangan Karyawan",
    excerpt: "Gue pernah dikadalin karyawan sendiri. Belajar dari pengalaman pahit itu, ini SOP ketat yang wajib lo terapkan di meja kasir.",
    content: DUMMY_CONTENT,
    category: "MANAJEMEN",
    date: "12 Oct 2024",
    author: "Amin Maghfuri",
    readTime: "7 MIN READ",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ec?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 7,
    slug: "qris-wajib-punya",
    title: "QRIS: Cara Terima Duit Jaman Now yang Wajib Lo Punya",
    excerpt: "Masih cuma terima cash? Lo kehilangan potensi omzet dari anak muda yang dompetnya isinya cuma kartu dan HP.",
    content: DUMMY_CONTENT,
    category: "TEKNIS",
    date: "10 Oct 2024",
    author: "Tim MKS",
    readTime: "3 MIN READ",
    image: "https://images.unsplash.com/photo-1556741533-974f8e62a92d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 8,
    slug: "kelola-cash-flow",
    title: "Mengelola Cash Flow Bisnis Retail Biar Gak 'Kaya di Stok, Miskin di Kas'",
    excerpt: "Omzet gede tapi duit ga ada? Penyakit umum. Gue kasih tau cara muter duit biar cashflow lo tetep ijo royo-royo.",
    content: DUMMY_CONTENT,
    category: "MANAJEMEN",
    date: "05 Oct 2024",
    author: "Amin Maghfuri",
    readTime: "5 MIN READ",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 9,
    slug: "branding-umkm",
    title: "Branding UMKM: Gak Perlu Mahal, Yang Penting Ngena",
    excerpt: "Logo bagus doang ga cukup. Branding itu soal rasa. Gimana bikin pelanggan inget terus sama toko lo.",
    content: DUMMY_CONTENT,
    category: "MARKETING",
    date: "01 Oct 2024",
    author: "Tim MKS",
    readTime: "4 MIN READ",
    image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 10,
    slug: "tablet-vs-komputer",
    title: "Pilih Tablet atau Komputer Kasir? Ini Panduannya",
    excerpt: "Bingung milih device? Tablet ringkas tapi layar kecil. Komputer gede tapi powerful. Sesuaikan dengan jenis usaha lo.",
    content: DUMMY_CONTENT,
    category: "TEKNIS",
    date: "28 Sep 2024",
    author: "Tim MKS",
    readTime: "5 MIN READ",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 11,
    slug: "handle-komplain",
    title: "Cara Menghadapi Komplain Pelanggan Tanpa Baper",
    excerpt: "Pelanggan marah itu peluang. Kalau lo bisa handle dengan elegan, dia bakal jadi pelanggan paling setia.",
    content: DUMMY_CONTENT,
    category: "MANAJEMEN",
    date: "25 Sep 2024",
    author: "Amin Maghfuri",
    readTime: "4 MIN READ",
    image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 12,
    slug: "digital-marketing-warung",
    title: "Digital Marketing untuk Warung Kelontong: Emang Bisa?",
    excerpt: "Bisa banget. Pake Google Maps, WA Story, dan Facebook Ads lokal. Ga perlu budget juta-jutaan buat mulai.",
    content: DUMMY_CONTENT,
    category: "MARKETING",
    date: "20 Sep 2024",
    author: "Tim MKS",
    readTime: "6 MIN READ",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800"
  }
];
