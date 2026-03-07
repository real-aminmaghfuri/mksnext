
export const PRIVACY_ID = `
    <div class="space-y-8">
      <section id="policy-1" class="scroll-mt-32">
        <h3 class="text-xl font-bold text-zinc-900 dark:text-white mb-2">1. ZERO DATA SELLING POLICY</h3>
        <p>Gue tegaskan di awal: <strong>MKS TIDAK AKAN PERNAH MENJUAL DATA LO</strong>. Database pelanggan lo, data omzet lo, data stok lo, nomor HP lo, TIDAK AKAN gue jual ke pihak ketiga, kompetitor, bank, pinjol, atau sales asuransi. Model bisnis gue adalah jualan teknologi, bukan jualan data (Data Broker). Kepercayaan lo mahal harganya.</p>
      </section>

      <section id="policy-2" class="scroll-mt-32">
        <h3 class="text-xl font-bold text-zinc-900 dark:text-white mb-2">2. DATA YANG KITA KUMPULKAN (DAN ALASANNYA)</h3>
        <p class="mb-2">Kami hanya mengoleksi data yang relevan untuk operasional sistem:</p>
        <ul class="list-disc pl-5 space-y-1">
            <li><strong>Identitas Pemilik:</strong> Nama, Alamat KTP, NPWP (untuk keperluan faktur pajak resmi).</li>
            <li><strong>Data Toko:</strong> Alamat outlet, logo, struk (untuk setup sistem kasir).</li>
            <li><strong>Kontak Darurat:</strong> Email & WhatsApp (untuk notifikasi sistem, tagihan, dan reset password).</li>
            <li><strong>Data Transaksi (Khusus Cloud):</strong> Tersimpan di server kami yang terenkripsi, semata-mata agar lo bisa akses laporan real-time dari mana saja.</li>
        </ul>
      </section>

      <section id="policy-3" class="scroll-mt-32">
        <h3 class="text-xl font-bold text-zinc-900 dark:text-white mb-2">3. KEAMANAN LEVEL MILITER (ENKRIPSI)</h3>
        <p>Seluruh jalur komunikasi antara perangkat lo dan server MKS dilindungi enkripsi SSL/TLS 256-bit (standar perbankan). Password lo di database kami di-hash (diacak) menggunakan algoritma bcrypt terbaru. Artinya apa? <strong>Bahkan tim IT MKS sendiri (termasuk gue) GAK BISA BACA password asli lo.</strong> Kalau lo lupa password, bisanya cuma di-reset, bukan dikasih tau password lamanya.</p>
      </section>

      <section id="policy-4" class="scroll-mt-32">
        <h3 class="text-xl font-bold text-zinc-900 dark:text-white mb-2">4. AKSES PIHAK KETIGA (LIMITED)</h3>
        <p>Kami hanya membagi data lo kepada pihak ketiga yang esensial untuk layanan, yaitu:</p>
        <ul class="list-disc pl-5 space-y-1">
            <li><strong>Mitra Logistik:</strong> Nama & Alamat untuk pengiriman hardware.</li>
            <li><strong>Payment Gateway (Midtrans/Xendit):</strong> Nominal transaksi untuk memproses pembayaran QRIS/VA.</li>
            <li><strong>Penegak Hukum:</strong> HANYA JIKA ada surat perintah resmi dari Pengadilan/Kepolisian terkait tindak pidana berat (Pencucian Uang, Terorisme).</li>
        </ul>
      </section>

      <section id="policy-5" class="scroll-mt-32">
        <h3 class="text-xl font-bold text-zinc-900 dark:text-white mb-2">5. HAK UNTUK DILUPAKAN (RIGHT TO BE FORGOTTEN)</h3>
        <p>Jika suatu saat lo memutuskan berhenti menggunakan layanan MKS, lo punya hak penuh untuk meminta penghapusan total data lo dari server kami. Ajukan permohonan tertulis, dan dalam 3x24 jam kerja, database lo akan kami <strong>WIPE OUT PERMANEN</strong> tanpa sisa backup. Once deleted, it's gone forever.</p>
      </section>
    </div>
  `;

export const PRIVACY_EN = `
    <div class="space-y-8">
      <section id="policy-1" class="scroll-mt-32">
        <h3 class="text-xl font-bold text-zinc-900 dark:text-white mb-2">1. ZERO DATA SELLING POLICY</h3>
        <p>I state upfront: <strong>MKS WILL NEVER SELL YOUR DATA</strong>. Your customer database, revenue data, stock data, phone numbers, WILL NOT be sold to third parties, competitors, banks, loan sharks, or insurance sales. My business model is selling tech, not selling data (Data Broker). Your trust is expensive.</p>
      </section>

      <section id="policy-2" class="scroll-mt-32">
        <h3 class="text-xl font-bold text-zinc-900 dark:text-white mb-2">2. DATA WE COLLECT (AND WHY)</h3>
        <p class="mb-2">We only collect data relevant to system operations:</p>
        <ul class="list-disc pl-5 space-y-1">
            <li><strong>Owner Identity:</strong> Name, ID Address, Tax ID (for official tax invoice purposes).</li>
            <li><strong>Store Data:</strong> Outlet address, logo, receipt header (for cashier system setup).</li>
            <li><strong>Emergency Contact:</strong> Email & WhatsApp (for system notifications, billing, and password reset).</li>
            <li><strong>Transaction Data (Cloud Only):</strong> Stored on our encrypted server solely so you can access real-time reports from anywhere.</li>
        </ul>
      </section>

      <section id="policy-3" class="scroll-mt-32">
        <h3 class="text-xl font-bold text-zinc-900 dark:text-white mb-2">3. MILITARY GRADE SECURITY (ENCRYPTION)</h3>
        <p>All communication channels between your device and MKS servers are protected by 256-bit SSL/TLS encryption (banking standard). Your passwords in our database are hashed (scrambled) using the latest bcrypt algorithm. What does this mean? <strong>Even the MKS IT team (including me) CANNOT READ your actual password.</strong> If you forget your password, it can only be reset, not retrieved.</p>
      </section>

      <section id="policy-4" class="scroll-mt-32">
        <h3 class="text-xl font-bold text-zinc-900 dark:text-white mb-2">4. THIRD PARTY ACCESS (LIMITED)</h3>
        <p>We only share your data with essential third parties for service, namely:</p>
        <ul class="list-disc pl-5 space-y-1">
            <li><strong>Logistics Partners:</strong> Name & Address for hardware shipping.</li>
            <li><strong>Payment Gateway (Midtrans/Xendit):</strong> Transaction amount to process QRIS/VA payments.</li>
            <li><strong>Law Enforcement:</strong> ONLY IF there is an official warrant from Court/Police regarding serious crimes (Money Laundering, Terrorism).</li>
        </ul>
      </section>

      <section id="policy-5" class="scroll-mt-32">
        <h3 class="text-xl font-bold text-zinc-900 dark:text-white mb-2">5. RIGHT TO BE FORGOTTEN</h3>
        <p>If one day you decide to stop using MKS services, you have full rights to request total deletion of your data from our servers. Submit a written request, and within 3x24 working hours, your database will be <strong>PERMANENTLY WIPED OUT</strong> without backup. Once deleted, it's gone forever.</p>
      </section>
    </div>
  `;
