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
      <body>
        <MobileMenuProvider>
          {/* This wrapper handles the mobile menu state and click outside to close */}
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </MobileMenuProvider>
        {/* The BodyWrapper component ensures that clicks outside the mobile menu close it */}
      </body>
    </html>
  );
}
