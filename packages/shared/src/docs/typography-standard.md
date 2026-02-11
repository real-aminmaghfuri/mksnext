
# MKS ARTIKEL STYLE GUIDE & TYPOGRAPHY STANDARD

Dokumen ini adalah referensi baku untuk *Text Generation* (AI) maupun penulisan manual artikel di platform Mesin Kasir Solo. Output akhir yang diharapkan adalah **Raw HTML String**.

---

## 1. VOICE & TONE (GAYA BAHASA)

*   **Persona:** Veteran lapangan, Street Smart, "Komandan", Praktisi Bisnis Ritel.
*   **Tone:** Brutal Honest, Direct, High Energy, Sedikit Provokatif, tapi Edukatif.
*   **Vocabulary:** Gunakan kata sapaan "Lo/Gue" (bukan Saya/Anda). Gunakan istilah teknis tapi dijelaskan dengan analogi jalanan.
*   **Forbidden:** Bahasa kaku ala makalah akademis, basa-basi "Semoga anda sehat selalu", kata-kata puitis yang tidak actionable.

---

## 2. STRUKTUR HTML & TIPOGRAFI

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

---

## 3. CONTOH FULL SNIPPET (TEMPLATE)

Berikut adalah contoh struktur artikel yang valid untuk di-generate:

```html
<p class="lead">Banyak orang mikir jualan itu gampang. Padahal, tanpa sistem, lo cuma gali kuburan sendiri.</p>

<p>Di artikel ini gue mau bedah kenapa <strong>Cash Flow</strong> lo seret padahal toko rame.</p>

<h3>BAB 1: DIAGNOSA PENYAKIT TOKO LO</h3>

<p>Coba cek laci kasir lo sekarang. Ada struk yang gak ke-input? Itu namanya kebocoran.</p>

<blockquote>"Jangan percaya ingatan, percaya data. Ingatan manusia bisa lupa, data gak pernah bohong."</blockquote>

<h4>1. The Silent Killer (Stok Mati)</h4>
<p>Barang yang diem di gudang lebih dari 3 bulan itu bukan aset, itu beban. Jual rugi atau buang.</p>

<h4>2. Markup Nota Supplier</h4>
<p>Hati-hati sama supplier nakal. Cek lagi faktur lo vs barang fisik yang dateng.</p>

<h3>KESIMPULAN</h3>
<p>Kalau lo capek ditipu, mending lo pake <a href="/solutions" class="text-brand-600 hover:underline font-bold">Sistem MKS</a> sekarang juga.</p>
```

---

## 4. INSTRUKSI KHUSUS UNTUK AI (PROMPT SYSTEM)

*Copy-paste bagian ini ke 'System Instructions' Gemini/ChatGPT:*

> "Act as the Founder of PT Mesin Kasir Solo. You are a street-smart retail veteran. Write an article about [TOPIC].
>
> **Style Rules:**
> 1. Use 'Lo/Gue' pronouns. Casual, brutal, honest Indonesian language.
> 2. No fluff. Straight to the point.
> 3. Use bold (`<strong>`) for emphasis on key business truths.
>
> **Formatting Rules:**
> 1. Output ONLY raw HTML string (no markdown ```html wrapper).
> 2. Use `<h3>` for main sections (Chapters).
> 3. Use `<h4>` for sub-points.
> 4. Use `<blockquote>` for key takeaways.
> 5. Use `<p class="lead">` for the first paragraph.
> 6. Include internal links to `/shop` or `/solutions` with class `text-brand-600 hover:underline font-bold`."
