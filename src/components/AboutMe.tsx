"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl rounded-xl bg-gray-50 px-4 pb-16 pt-4 dark:bg-gray-950"
    >
      <div className="flex flex-col items-center justify-center gap-12 text-left md:flex-row">
        <motion.div
          className="relative h-80 w-full md:max-w-sm overflow-hidden rounded-3xl border-4 border-gray-300 shadow-lg dark:border-gray-700 md:w-80"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/images/about-photo.png"
            alt="Portrait of Abdullahi Mohammed"
            fill
            className="object-cover grayscale"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl md:ml-6"
        >
          <h2 className="mb-6 text-3xl font-bold text-gray-800 dark:text-gray-100">
            About Me
          </h2>

          <p className="mb-6 text-base leading-relaxed text-gray-600 dark:text-gray-300 md:text-lg">
            I’m a frontend developer focused on building clean, responsive, and
            user-friendly digital experiences. I enjoy turning ideas into
            polished interfaces with React, Next.js, and Tailwind CSS, while
            paying close attention to usability, performance, and visual
            clarity.
          </p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center rounded-full border-2 border-gray-800 px-6 py-3 text-lg text-gray-800 shadow transition hover:bg-gray-100 dark:border-gray-100 dark:text-gray-100 dark:hover:bg-gray-900"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}