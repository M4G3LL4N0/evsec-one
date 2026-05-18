import "./globals.css";
import { VentureSignature } from "@/components/VentureSignature";
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
      <body>{children}
        <VentureSignature tone="dark" variant="default" />
      </body>
    </html>
  );
}
