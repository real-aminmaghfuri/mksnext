
export const SITE_CONFIG = {
  // Domain Utama (Ambil dari Env Var, atau default placeholder)
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || "https://mks-tech.id",
  
  // Identitas
  name: "PT MESIN KASIR SOLO",
  shortName: "MKS",
  tagline: "Savage Business Tools",
  
  // Kontak Pusat
  whatsapp: "628816566935", // Format internasional tanpa '+'
  email: "owner.kasirsolo@gmail.com",
  
  // Alamat
  addressLegal: "Perum Graha Tiara 2 B1, Gumpang 07/01, Kartasura, Jawa Tengah 57169",
  addressOps: "Gumiring 04/04, Sidomulyo, Banjarejo, Blora, Jawa Tengah 58253",
  
  // Geo Coordinates (Legal Office)
  geo: {
    lat: -7.561021,
    lng: 110.852573
  }
};

// Helper untuk generate URL lengkap
export const absoluteUrl = (path: string) => {
  return `${SITE_CONFIG.domain}${path}`;
};

// Helper untuk generate WA Link
export const getWhatsAppLink = (message: string) => {
  return `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
};
