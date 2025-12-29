"use client";

import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import Typewriter from "typewriter-effect";

export default function HeroSection() {
  return (
    <section 
    className="custom-height max-w-6xl mx-auto py-28 flex flex-col items-center justify-center text-center px-4 bg-gray-50 dark:bg-gray-900 bg-hero bg-cover bg-center bg-no-repeat hero-overlay">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4 text-gray-800 dark:text-gray-100"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {"Hi, I'm Abdullahi"}
      </motion.h1>

      <motion.div
        className="text-xl md:text-2xl font-semibold text-muted-foreground mb-6 min-h-[40px] flex justify-center text-gray-800 dark:text-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <span className="mr-2 ">{`I'm a`}</span>
        <Typewriter
          options={{
            strings: ["Frontend Developer", "Website Designer", "Freelancer"],
            autoStart: true,
            loop: true,
            delay: 75,
            deleteSpeed: 40,
          }}
        />
      </motion.div>

      <motion.a
        href="/abdullahi-mohammed.pdf"
        download
        className="inline-flex items-center border-4 border-gray-800 dark:border-gray-100 text-xl text-gray-800 dark:text-gray-100 px-6 py-3 rounded-full shadow hover:bg-primary/90 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Eye className="mr-2 w-5 h-5" />
        View Resume
      </motion.a>
    </section>
  );
}
