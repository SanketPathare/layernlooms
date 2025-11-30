import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Work_Sans, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

const outfitFont = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "layerslooms",
  description: "",
};
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${workSans.variable} ${outfitFont.variable} antialiased`}

      >
        <Navbar/>
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}