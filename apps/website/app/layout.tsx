
import React from "react";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ConfigProvider } from "ui";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { WebsiteMobileNav } from "../components/MobileNav";
import "./globals.css";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

const faviconSvg = `data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg' fill='none' stroke='%23f97316' stroke-width='6' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M 18 25 Q 50 12 82 25 L 82 48 Q 82 75 50 92 Q 18 75 18 48 Z' /%3E%3Cg transform='translate(0, 2)'%3E%3Cpath d='M 28 35 L 62 35 L 68 50 L 55 50 L 50 55 L 44 75 L 34 72 L 40 55 L 32 55 C 25 55 25 35 35 35 Z' /%3E%3Cpath d='M 35 42 L 55 42 L 52 47 L 35 47 Z' stroke-width='3' /%3E%3Cpath d='M 64 38 L 68 47' stroke-width='3' /%3E%3Cpath d='M 70 38 L 74 47' stroke-width='3' /%3E%3Cpath d='M 46 58 L 48 62' stroke-width='3' /%3E%3Ctext x='61' y='55' font-family='Arial, sans-serif' font-size='10' font-weight='bold' fill='%23f97316' stroke='none'%3EMKS%3C/text%3E%3C/g%3E%3C/svg%3E`;

export const metadata: Metadata = {
  title: "PT MESIN KASIR SOLO - Savage Business Tools",
  description: "Operational tools for businesses that want to dominate the market.",
  icons: {
    icon: faviconSvg,
    shortcut: faviconSvg,
    apple: faviconSvg,
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://mesinkasirsolo.com/#organization",
        "name": "PT MESIN KASIR SOLO",
        "url": "https://mesinkasirsolo.com",
        "logo": "https://mesinkasirsolo.com/icon.svg",
        "email": "owner.kasirsolo@gmail.com",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+628816566935",
          "contactType": "customer service",
          "areaServed": "ID",
          "availableLanguage": ["en", "id"]
        }
      },
      {
        "@type": "LocalBusiness",
        "parentOrganization": { "@id": "https://mesinkasirsolo.com/#organization" },
        "name": "PT MESIN KASIR SOLO (Kantor Legal)",
        "image": "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d", 
        "telephone": "+628816566935",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Perum Graha Tiara 2 B1, Gumpang 07/01",
          "addressLocality": "Kartasura",
          "addressRegion": "Jawa Tengah",
          "postalCode": "57169",
          "addressCountry": "ID"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -7.561021,
          "longitude": 110.852573
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "17:00"
        }
      },
      {
        "@type": "ProfessionalService",
        "name": "PT MESIN KASIR SOLO (Markas Operasional)",
        "description": "Pusat perakitan sistem, servis hardware, dan konsultasi manajemen bisnis ritel.",
        "telephone": "+628816566935",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Gumiring 04/04, Sidomulyo, Banjarejo",
          "addressLocality": "Blora",
          "addressRegion": "Jawa Tengah",
          "postalCode": "58253",
          "addressCountry": "ID"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -7.039000, 
          "longitude": 111.398000
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "17:00"
        }
      }
    ]
  };

  return (
    <html lang="en" className="dark">
      {/* 
         LAYOUT PADDING RULES (CRITICAL):
         - Default (Portrait Mobile): pb-[72px] (Bottom Nav Space)
         - Landscape Mobile/Tablet: pr-[80px] pb-0 (Right Sidebar Space)
         - Desktop (XL+): pr-0 pb-0 (No Sidebar, No Bottom Nav)
         
         Note: xl:landscape:pr-0 is essential to reset landscape padding on big screens.
      */}
      <body className={`
        ${font.className} 
        bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white transition-colors duration-500
        pb-[72px] landscape:pb-0 landscape:pr-[80px] 
        xl:pb-0 xl:pr-0 xl:landscape:pr-0
      `}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        <ConfigProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <WebsiteMobileNav />
        </ConfigProvider>
      </body>
    </html>
  );
}
