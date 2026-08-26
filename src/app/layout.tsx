import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AfricaConnect4",
  description: "AfricaConnect4 Multilingual Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
