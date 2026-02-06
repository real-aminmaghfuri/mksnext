import React from "react";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ConfigProvider } from "ui";
import "./globals.css";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PT MESIN KASIR SOLO - Savage Business Tools",
  description: "Operational tools for businesses that want to dominate the market.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${font.className} bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white transition-colors duration-500`}>
        <ConfigProvider>
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
}