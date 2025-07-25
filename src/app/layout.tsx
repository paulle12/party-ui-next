import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
           <div className="min-h-screen bg-gray-900 p-6 text-white">
       <nav className="bg-gray-950 text-white p-4 flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/success">Success Page</Link>
        </nav>
        {children}
        </div>
      </body>
    </html>
  );
}
