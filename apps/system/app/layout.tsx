import type { Metadata } from "next";
import { ConfigProvider } from "ui";
import { DataProvider } from "../contexts/DataContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "SIBOS Editor",
  description: "Management platform for PT Mesin Kasir Solo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">
        <ConfigProvider>
          <DataProvider>
            {children}
          </DataProvider>
        </ConfigProvider>
      </body>
    </html>
  );
}
