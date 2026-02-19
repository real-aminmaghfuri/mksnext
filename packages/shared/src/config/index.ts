
export const SITE_CONFIG = {
  // Domain Utama (Otomatis ambil dari Environment Variable, atau default placeholder)
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || "https://mks-tech.id",
  
  // Identitas Brand
  name: "PT MESIN KASIR SOLO",
  shortName: "MKS",
  tagline: "Savage Business Tools",
  
  // Kontak Pusat
  whatsapp: "628816566935", // Format internasional tanpa '+'
  email: "owner.kasirsolo@gmail.com",
  
  // Alamat
  addressLegal: "Perum Graha Tiara 2 B1, Gumpang 07/01, Kartasura, Jawa Tengah 57169",
  addressOps: "Gumiring 04/04, Sidomulyo, Banjarejo, Blora, Jawa Tengah 58253",
  
  // Koordinat Peta
  geo: {
    lat: -7.561021,
    lng: 110.852573
  }
};

// Helper buat bikin URL lengkap (misal buat SEO/OG Image)
export const absoluteUrl = (path: string) => {
  return `${SITE_CONFIG.domain}${path}`;
};

// Helper buat bikin Link WA otomatis
export const getWhatsAppLink = (message: string) => {
  return `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
};
