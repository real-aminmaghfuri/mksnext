import type { Metadata } from "next";
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
