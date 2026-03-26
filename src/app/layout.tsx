import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Siddharth R Kaulagi | Industrial Engineer",
  description: "Portfolio of Siddharth R Kaulagi - Industrial Engineering",
};

import { SmoothScroll } from "@/components/layout/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${inter.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll />
          {/* Grainy Texture Overlay */}
          <div className="fixed inset-0 pointer-events-none z-[99999] opacity-[0.03] dark:opacity-[0.05] contrast-150 grayscale" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
