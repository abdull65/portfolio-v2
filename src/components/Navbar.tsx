"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="max-w-6xl fixed top-4 left-1/2 transform -translate-x-1/2 w-[calc(100%-30px)] mx-auto bg-gray-50 dark:bg-gray-900 shadow-md z-50 rounded-2xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <Link href="#" className="text-xl font-bold text-gray-900 dark:text-white">
          <Image src="/logo.png" alt="logo" width={40} height={40} />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-gray-800 dark:text-gray-100 hover:text-blue-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Theme toggle + hamburger */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />

          <button
            className="md:hidden text-gray-800 dark:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="md:hidden bg-gray-50 dark:bg-gray-900 px-4 pb-4 rounded-b-2xl">
          {navLinks.map((link) => (
            <li key={link.name} className="py-2">
              <a
                href={link.href}
                className="block text-gray-800 dark:text-gray-100 hover:text-blue-500"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
