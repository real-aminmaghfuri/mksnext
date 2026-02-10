
import { ArticleItem } from '../types';
import { DATA_SOURCE } from './articles-data';
import { PILLAR_HTML } from './pillar-content';

// Re-export for compatibility
export { ARTICLE_CATEGORIES, AUTHORS } from './articles-data';

// --- CONTENT HELPER ---
function getDummyContent(): string {
  return `
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
}

// --- MAIN MOCK EXPORT ---
export const MOCK_ARTICLES: ArticleItem[] = DATA_SOURCE.map(item => ({
  ...item,
  // Inject the Pillar HTML if ID is 13, otherwise use dummy
  content: item.id === 13 ? PILLAR_HTML : getDummyContent()
}));
