"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4 py-10 bg-background">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {"Hi, I'm Abdullahi"}
      </motion.h1>

      <motion.p
        className="text-xl md:text-2xl text-muted-foreground mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Frontend Developer • Website Designer • Freelancer
      </motion.p>

      <motion.a
        href="/resume.pdf"
        download
        className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-full shadow hover:bg-primary/90 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Download className="mr-2 w-5 h-5" />
        Download CV
      </motion.a>
    </section>
  );
}
