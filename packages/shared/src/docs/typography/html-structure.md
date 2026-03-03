
# 2. STRUKTUR HTML & TIPOGRAFI

Sistem menggunakan `dangerouslySetInnerHTML`. Gunakan tag HTML berikut untuk memastikan styling `ArticleContentAtom.tsx` berjalan sempurna.

### A. Lead Paragraph (Paragraf Pembuka)
Paragraf pertama harus nendang. Gunakan class `lead`.
```html
<p class="lead">Kalimat hook yang menampar pembaca sadar akan masalah bisnis mereka.</p>
```

### B. Headings (Hirarki Judul)
*Jangan loncat level heading. Gunakan H3 sebagai pemisah Bab utama.*

**Heading 3 (Judul BAB Utama)**
Digunakan untuk memisahkan poin besar. Otomatis akan di-render besar, tebal, dan ada gradien warna.
```html
<h3>BAB 1: JUDUL DENGAN UPPERCASE BIAR GAHAR</h3>
```

**Heading 4 (Sub-Poin / List Item Detail)**
Digunakan untuk breakdown poin di dalam Bab.
*Note: Jangan gunakan H4 untuk judul bab utama.*
```html
<h4>1. Nama Taktik Spesifik</h4>
```

### C. Body Text & Emphasis
Gunakan tag semantic standard.
*   **Paragraf:** `<p>Isi teks...</p>`
*   **Bold:** `<strong>Teks Penting</strong>` (Gunakan untuk highlight keyword atau punchline).
*   **Italic:** `<em>Istilah Asing</em>` atau penekanan intonasi.

### D. Blockquotes (Kutipan Emas)
Gunakan untuk "Wisdom Drop" atau kalimat yang layak di-screenshot.
```html
<blockquote>"Bisnis tanpa kontrol itu bukan bisnis, itu sedekah yang salah alamat."</blockquote>
```

### E. Lists (Daftar)
Gunakan untuk memecah tembok teks.

**Unordered List (Poin-poin)**
```html
<ul>
  <li><strong>Poin Satu:</strong> Penjelasan singkat.</li>
  <li><strong>Poin Dua:</strong> Penjelasan singkat.</li>
</ul>
```

**Ordered List (Langkah-langkah)**
```html
<ol>
  <li>Langkah Pertama.</li>
  <li>Langkah Kedua.</li>
</ol>
```

### F. Links (Internal Linking)
Wajib menyisipkan link ke halaman produk/solusi MKS dengan styling khusus.
```html
<a href="/shop" class="text-brand-600 hover:underline font-bold">Software Kasir</a>
```
