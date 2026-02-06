import React from "react";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ConfigProvider } from "ui";
import { DataProvider } from "../contexts/DataContext";
import "./globals.css";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MKS.SYS - Command Center",
  description: "Internal operational dashboard for PT MKS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${font.className} bg-zinc-100 dark:bg-black text-zinc-900 dark:text-white`}>
        <ConfigProvider>
          <DataProvider>
            {children}
          </DataProvider>
        </ConfigProvider>
      </body>
    </html>
  );
}