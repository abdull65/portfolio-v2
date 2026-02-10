"use client";

import { useActiveSection } from "@/hooks/useActiveSection";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useMobileMenu } from "@/context/MobileMenuContext";

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const { isOpen, setIsOpen } = useMobileMenu();
  const activeSection = useActiveSection([
    "hero",
    "about",
    "services",
    "portfolio",
    "contact",
  ]);

  return (
    <nav
      role="navigation"
      aria-label="Main"
      className="max-w-7xl w-full fixed top-0 py-5 left-1/2 transform -translate-x-1/2 bg-gray-50 dark:bg-gray-900 mx-auto z-50"
    >
      <div className="max-w-6xl w-[calc(100%-30px)] mx-auto flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 shadow-2xl rounded-2xl">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="grayscale"
          />
        </Link>

        {/* Desktop Menu */}
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="hidden md:flex space-x-8"
        >
          {navLinks.map((link) => {
            const linkId = link.href.includes("#")
              ? link.href.split("#")[1]
              : link.href.replace("/", "");
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`text-lg transition-colors hover:font-semibold ${
                    activeSection === linkId
                      ? "text-gray-800 font-semibold dark:text-gray-100"
                      : "text-gray-800 dark:text-gray-100"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </motion.ul>

        {/* Theme Toggle + Hamburger */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <button
            className="md:hidden text-gray-800 dark:text-gray-100"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
            aria-expanded={isOpen}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-gray-50 dark:bg-gray-900 px-4 py-4 overflow-hidden rounded-b-2xl shadow-lg"
          >
            {navLinks.map((link) => (
              <li
                key={link.name}
                className="py-2 border-b border-gray-200 dark:border-gray-700 last:border-none"
              >
                <Link
                  href={link.href}
                  className={`text-lg transition-colors ${
                    activeSection === link.href.replace("#", "")
                      ? "text-gray-800 font-semibold"
                      : "text-gray-800 dark:text-gray-100"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(false);
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
