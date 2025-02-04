import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Navigation from "@/components/ui/Navigation";
// import TransitionPage from "@/components/ui/TransitionPage";
// import TransitionBlocks from "@/components/ui/TransitionBlocks";
import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Andre dev.",
  description: "This is my first portfolio",
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
        <Navbar />
        {/* <TransitionBlocks />
        <TransitionPage >   */}
        {children}
        {/* </TransitionPage> */}
        <Navigation />
        
      </body>
    </html>
  );
}
