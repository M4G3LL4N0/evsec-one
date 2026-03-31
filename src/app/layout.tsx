import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EvSec-One",
  description:
    "Security for everyone. Exposure visibility, privacy hardening, removal workflows, and calm personal digital protection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
