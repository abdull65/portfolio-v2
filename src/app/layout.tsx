import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MobileMenuProvider } from "@/context/MobileMenuContext";

export const metadata = {
  title: "Abdullahi Mohammed",
  description: "Welcome to my personal portfolio website.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
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
