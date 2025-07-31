"use client";

import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="w-full max-w-4xl mx-auto px-4 py-16 text-center"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="text-base md:text-lg text-muted-foreground leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        I’m a passionate Frontend Developer with a strong eye for clean UI and
        responsive design. I specialize in building fast, accessible, and
        user-friendly web applications using modern technologies like React,
        Next.js, and Tailwind CSS. I love solving problems, collaborating with
        teams, and continuously learning to improve my craft.
      </motion.p>
    </section>
  );
}
