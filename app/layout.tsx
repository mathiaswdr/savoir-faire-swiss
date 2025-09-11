import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import Nav from "@/components/navigation/nav";
import Footer from "@/components/footer";
import { Toaster } from "sonner";
import { siteMetadata } from "@/lib/metadata";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexMono.className} antialiased`}
      >
        <Nav />
        {children}
        <Footer />

        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
