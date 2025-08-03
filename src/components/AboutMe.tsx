"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-4 py-16 bg-gray-50 dark:bg-gray-950"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 text-left">
        {/* Profile Image */}
        <motion.div
          className="h-80 w-full md:w-80 rounded-3xl overflow-hidden border-4 border-gray-300 dark:border-gray-700 shadow-lg"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/images/about-photo.png"
            alt="Abdullahi's Profile"
            width={256}
            height={320}
            className="object-cover w-full h-full grayscale"
          />
        </motion.div>

        {/* Text & Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl md:ml-6"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
            About Me
          </h2>

          <p className="text-gray-800 dark:text-white text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
            I’m a passionate Frontend Developer with a strong eye for clean UI
            and responsive design. I specialize in building fast, accessible,
            and user-friendly web applications using modern technologies like
            React, Next.js, and Tailwind CSS. I love solving problems,
            collaborating with teams, and continuously learning to improve my
            craft.
          </p>

          <motion.a
            href="#contact"
             className="inline-flex items-center border-4 border-gray-800 dark:border-white text-gray-800 dark:text-white px-6 py-1 rounded-full shadow hover:bg-primary/90 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
