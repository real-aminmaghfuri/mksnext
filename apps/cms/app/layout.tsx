
import React from "react";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ConfigProvider } from "ui";
import { DataProvider } from "../contexts/DataContext"; // Reusing DataContext logic
import "./globals.css";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

// Rose Red Favicon for CMS (#e11d48)
const cmsFaviconSvg = `data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg' fill='none' stroke='%23e11d48' stroke-width='6' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M 18 25 Q 50 12 82 25 L 82 48 Q 82 75 50 92 Q 18 75 18 48 Z' /%3E%3Cg transform='translate(0, 2)'%3E%3Cpath d='M 28 35 L 62 35 L 68 50 L 55 50 L 50 55 L 44 75 L 34 72 L 40 55 L 32 55 C 25 55 25 35 35 35 Z' /%3E%3Cpath d='M 35 42 L 55 42 L 52 47 L 35 47 Z' stroke-width='3' /%3E%3Cpath d='M 64 38 L 68 47' stroke-width='3' /%3E%3Cpath d='M 70 38 L 74 47' stroke-width='3' /%3E%3Cpath d='M 46 58 L 48 62' stroke-width='3' /%3E%3Ctext x='61' y='55' font-family='Arial, sans-serif' font-size='10' font-weight='bold' fill='%23e11d48' stroke='none'%3ECMS%3C/text%3E%3C/g%3E%3C/svg%3E`;

export const metadata: Metadata = {
  title: "MKS.MEDIA - Content Command",
  description: "Internal content management system for PT MKS.",
  icons: {
    icon: cmsFaviconSvg,
    shortcut: cmsFaviconSvg,
    apple: cmsFaviconSvg,
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
