import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SolveitByTech | Transforming Ideas into Digital Solutions",
  description: "SolveitByTech - Your trusted partner for website development, mobile apps, iOS development, video editing, SEO, drone photogrammetry, and more. We solve all your tech requirements.",
  keywords: ["web development", "mobile apps", "iOS development", "video editing", "SEO", "drone photogrammetry", "digital solutions", "SolveitByTech"],
  authors: [{ name: "SolveitByTech Team" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "SolveitByTech | Transforming Ideas into Digital Solutions",
    description: "Your trusted tech partner for websites, apps, video editing, SEO, and more",
    url: "https://solveitbytech.com",
    siteName: "SolveitByTech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SolveitByTech",
    description: "Transforming Ideas into Digital Solutions",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
