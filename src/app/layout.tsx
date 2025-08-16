import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter, Space_Grotesk } from "next/font/google";
import { MobileMenuProvider } from "@/context/MobileMenuContext";
const inter = Inter({
  subsets: ['latin'], variable: '--font-inter',
})
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'], variable: '--font-spaceGrotesk',
})

export const metadata = {
  title: "Abdullahi Mohammed",
  description: "Welcome to my personal portfolio website.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <MobileMenuProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </MobileMenuProvider>
      </body>
    </html>
  );
}
