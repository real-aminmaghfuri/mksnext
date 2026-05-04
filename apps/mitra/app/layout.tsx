
import React from "react";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ConfigProvider } from "ui";
import { DataProvider } from "../contexts/DataContext"; // Reusing DataContext logic
import "./globals.css";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

// Blue-ish Favicon for Mitra Partnership (#2563eb)
const mitraFaviconSvg = `data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg' fill='none' stroke='%232563eb' stroke-width='6' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='50' cy='35' r='10' /%3E%3Cpath d='M30 75 Q50 65 70 75' /%3E%3Cpath d='M30 50 L20 70 L30 85 L70 85 L80 70 L70 50 Z' /%3E%3Cpath d='M50 50 L50 75' /%3E%3Ctext x='35' y='60' font-family='Arial, sans-serif' font-size='8' font-weight='black' fill='%232563eb' stroke='none'%3EPARTNER%3C/text%3E%3C/svg%3E`;

export const metadata: Metadata = {
  title: "MKS.MITRA - Partnership Hub",
  description: "Partnership management system for PT Mesin Kasir Solo.",
  icons: {
    icon: mitraFaviconSvg,
    shortcut: mitraFaviconSvg,
    apple: mitraFaviconSvg,
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${font.className} bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white`}>
        <ConfigProvider>
          <DataProvider>
            {children}
          </DataProvider>
        </ConfigProvider>
      </body>
    </html>
  );
}
