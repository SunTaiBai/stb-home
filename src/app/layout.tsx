import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SunTaiBai Home",
  description: "SunTaiBai",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script src="/internal/statistics.js" />
      <link rel="icon" href="/logo.svg" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
