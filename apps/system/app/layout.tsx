
import React from "react";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ConfigProvider } from "ui";
import { DataProvider } from "../contexts/DataContext";
import { Sidebar } from "../components/Sidebar";
import { MobileNav } from "../components/MobileNav";
import "./globals.css";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

// Purple Favicon for System
const systemFaviconSvg = `data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg' fill='none' stroke='%238b5cf6' stroke-width='6' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M 18 25 Q 50 12 82 25 L 82 48 Q 82 75 50 92 Q 18 75 18 48 Z' /%3E%3Cg transform='translate(0, 2)'%3E%3Cpath d='M 28 35 L 62 35 L 68 50 L 55 50 L 50 55 L 44 75 L 34 72 L 40 55 L 32 55 C 25 55 25 35 35 35 Z' /%3E%3Cpath d='M 35 42 L 55 42 L 52 47 L 35 47 Z' stroke-width='3' /%3E%3Cpath d='M 64 38 L 68 47' stroke-width='3' /%3E%3Cpath d='M 70 38 L 74 47' stroke-width='3' /%3E%3Cpath d='M 46 58 L 48 62' stroke-width='3' /%3E%3Ctext x='61' y='55' font-family='Arial, sans-serif' font-size='10' font-weight='bold' fill='%238b5cf6' stroke='none'%3EMKS%3C/text%3E%3C/g%3E%3C/svg%3E`;

export const metadata: Metadata = {
  title: "MKS.SYS - Command Center",
  description: "Internal operational dashboard for PT MKS.",
  icons: {
    icon: systemFaviconSvg,
    shortcut: systemFaviconSvg,
    apple: systemFaviconSvg,
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${font.className} bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white antialiased`}>
        <ConfigProvider>
          <DataProvider>
            <div className="flex h-screen overflow-hidden">
              <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
                {children}
              </main>
              <Sidebar />
              <MobileNav />
            </div>
          </DataProvider>
        </ConfigProvider>
      </body>
    </html>
  );
}
