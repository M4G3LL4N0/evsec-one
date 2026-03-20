import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Opsera - Privacy Protection Done Right",
  description: "Enterprise-grade privacy protection made simple for everyone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased bg-black`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-black text-zinc-100">
        {children}
      </body>
    </html>
  );
}
