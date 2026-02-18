
import React from "react";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ConfigProvider } from "ui";
import { DataProvider } from "../contexts/DataContext"; // Reusing DataContext logic
import "./globals.css";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MKS.MEDIA - Content Command",
  description: "Internal content management system for PT MKS.",
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
