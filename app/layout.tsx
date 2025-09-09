import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import Nav from "@/components/navigation/nav";
import { Toaster } from "sonner";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Your website",
  description: "this is the website description",
  openGraph: {
    type: "website",
    url: "https://mywebsitemwrdev.vercel.app",
    title: "Your website 💽",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col items-center justify-center`}
      >
        <main className="w-full max-w-screen-xl">
          <Nav />
          {children}
        </main>

        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
