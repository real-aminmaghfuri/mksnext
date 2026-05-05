import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SIBOS System | PT Mesin Kasir Solo",
  description: "Advanced Management System by PT Mesin Kasir Solo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased bg-[#050505] text-white">
        {children}
      </body>
    </html>
  );
}
