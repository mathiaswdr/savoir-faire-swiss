import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import Nav from "@/components/navigation/nav";
import Footer from "@/components/footer";
import { Toaster } from "sonner";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  title: "Savoir Faire Swiss",
  description: "this is the website description",
  openGraph: {
    type: "website",
    url: "https://mywebsitemwrdev.vercel.app",
    title: "Savoir Faire Swiss",
    description: "this is the website description",
    // images: [
    //   {
    //     url: "https://pokedy.vercel.app/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Pokedy - Pokémon Card Collection Manager",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your website 💽",
    description: "this is the website description",
    images: ["https://mywebsitemwrdev.vercel.app/twitter-image.jpg"],
  },
  metadataBase: new URL("https://mywebsitemwrdev.vercel.app"),
};

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
