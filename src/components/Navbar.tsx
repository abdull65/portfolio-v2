"use client";

import { useEffect, useRef, useState } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useMobileMenu } from "@/context/MobileMenuContext";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Portfolio", href: "/#portfolio" },
] as const;

const caseStudyLinks = [
  { name: "Bridge Connect Africa", href: "/case-studies/bridge-connect" },
  { name: "SoftNigeria", href: "/case-studies/softnigeria" },
] as const;

export default function Navbar() {
  const { isOpen, setIsOpen } = useMobileMenu();
  const pathname = usePathname();

  const dropdownRef = useRef<HTMLLIElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  const [isCaseStudiesOpen, setIsCaseStudiesOpen] = useState(false);
  const [isMobileCaseStudiesOpen, setIsMobileCaseStudiesOpen] = useState(false);

  const activeSection = useActiveSection([
    "hero",
    "about",
    "services",
    "portfolio",
    "contact",
  ]);

  useEffect(() => {
    setIsOpen(false);
    setIsMobileCaseStudiesOpen(false);
    setIsCaseStudiesOpen(false);
  }, [pathname, setIsOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setIsCaseStudiesOpen(false);
      }

      if (mobileMenuRef.current && !mobileMenuRef.current.contains(target)) {
        setIsOpen(false);
        setIsMobileCaseStudiesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpen]);

  const isSectionLinkActive = (href: string) => {
    if (pathname !== "/") return false;

    const sectionId = href.split("#")[1];
    return activeSection === sectionId;
  };

  const isCaseStudyActive = caseStudyLinks.some((link) =>
    pathname.startsWith(link.href),
  );

  return (
    <nav
      role="navigation"
      aria-label="Main"
      className="fixed top-0 left-1/2 z-50 w-full max-w-7xl -translate-x-1/2 bg-gray-50 py-5 dark:bg-gray-900"
    >
      <div
        ref={mobileMenuRef}
        className="mx-auto w-[calc(100%-30px)] max-w-6xl"
      >
        <div className="flex items-center justify-between rounded-2xl bg-gray-50 p-4 shadow-2xl dark:bg-gray-800">
          <Link href="/" aria-label="Go to homepage">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="grayscale"
            />
          </Link>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden items-center space-x-8 md:flex"
          >
            {navLinks.map((link) => {
              const isActive = isSectionLinkActive(link.href);

              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`text-lg transition-colors hover:font-semibold ${
                      isActive
                        ? "font-semibold text-gray-800 dark:text-gray-100"
                        : "text-gray-800 dark:text-gray-100"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}

            <li ref={dropdownRef} className="relative">
              <button
                type="button"
                onClick={() => setIsCaseStudiesOpen((prev) => !prev)}
                className={`flex items-center gap-1 text-lg transition-colors hover:font-semibold ${
                  isCaseStudyActive || isCaseStudiesOpen
                    ? "font-semibold text-gray-800 dark:text-gray-100"
                    : "text-gray-800 dark:text-gray-100"
                }`}
                aria-expanded={isCaseStudiesOpen}
                aria-haspopup="menu"
                aria-controls="case-studies-menu"
              >
                Case Studies
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${
                    isCaseStudiesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isCaseStudiesOpen && (
                  <motion.div
                    id="case-studies-menu"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-full mt-1 w-64 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-900"
                  >
                    <ul className="py-2">
                      {caseStudyLinks.map((link) => {
                        const isActive = pathname === link.href;

                        return (
                          <li key={link.name}>
                            <Link
                              href={link.href}
                              className={`block px-4 py-3 text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 ${
                                isActive
                                  ? "font-semibold text-gray-900 dark:text-gray-100"
                                  : "text-gray-700 dark:text-gray-300"
                              }`}
                              onClick={() => setIsCaseStudiesOpen(false)}
                            >
                              {link.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            <li>
              <Link
                href="/#contact"
                className={`text-lg transition-colors hover:font-semibold ${
                  isSectionLinkActive("/#contact")
                    ? "font-semibold text-gray-800 dark:text-gray-100"
                    : "text-gray-800 dark:text-gray-100"
                }`}
              >
                Contact
              </Link>
            </li>
          </motion.ul>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button
              type="button"
              className="text-gray-800 dark:text-gray-100 md:hidden"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mt-2 overflow-hidden rounded-2xl bg-gray-50 px-4 py-4 shadow-lg dark:bg-gray-900 md:hidden"
            >
              <ul>
                {navLinks.map((link) => {
                  const isActive = isSectionLinkActive(link.href);

                  return (
                    <li
                      key={link.name}
                      className="border-b border-gray-200 py-2 dark:border-gray-700"
                    >
                      <Link
                        href={link.href}
                        className={`block text-lg transition-colors ${
                          isActive
                            ? "font-semibold text-gray-800 dark:text-gray-100"
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
                  );
                })}

                <li className="border-b border-gray-200 py-2 dark:border-gray-700">
                  <button
                    type="button"
                    onClick={() => setIsMobileCaseStudiesOpen((prev) => !prev)}
                    className={`flex w-full items-center justify-between text-left text-lg transition-colors ${
                      isCaseStudyActive
                        ? "font-semibold text-gray-800 dark:text-gray-100"
                        : "text-gray-800 dark:text-gray-100"
                    }`}
                    aria-expanded={isMobileCaseStudiesOpen}
                    aria-controls="mobile-case-studies-menu"
                  >
                    <span>Case Studies</span>
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${
                        isMobileCaseStudiesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isMobileCaseStudiesOpen && (
                      <motion.ul
                        id="mobile-case-studies-menu"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-4 pt-3"
                      >
                        {caseStudyLinks.map((link) => {
                          const isActive = pathname === link.href;

                          return (
                            <li key={link.name} className="py-2">
                              <Link
                                href={link.href}
                                className={`block text-base transition-colors ${
                                  isActive
                                    ? "font-semibold text-gray-800 dark:text-gray-100"
                                    : "text-gray-700 dark:text-gray-300"
                                }`}
                                onClick={() => {
                                  setIsOpen(false);
                                  setIsMobileCaseStudiesOpen(false);
                                }}
                              >
                                {link.name}
                              </Link>
                            </li>
                          );
                        })}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>

                <li className="py-2">
                  <Link
                    href="/#contact"
                    className={`block text-lg transition-colors ${
                      isSectionLinkActive("/#contact")
                        ? "font-semibold text-gray-800 dark:text-gray-100"
                        : "text-gray-800 dark:text-gray-100"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsOpen(false);
                    }}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}