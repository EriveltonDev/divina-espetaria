import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "../shared/components/header";
import { WhatsappButton } from "@/shared/components/whatsapp-button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Divina Espetaria",
  description: "Divina Espetaria",
  openGraph: {
    images: [
      {
        url: 'https://divina-espetaria.vercel.app/images/open-graph.webp',
        width: 800,
        height: 600,
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
        <WhatsappButton/>
      </body>
    </html>
  );
}
