"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const skills = [
  { title: "HTML", imgSrc: "/icons/html5.svg" },
  { title: "CSS", imgSrc: "/icons/css3.svg" },
  { title: "Tailwind", imgSrc: "/icons/tailwind.svg" },
  { title: "JavaScript", imgSrc: "/icons/javascript.svg" },
  { title: "React", imgSrc: "/icons/react.svg" },
  { title: "Next.js", imgSrc: "/icons/nextjs.svg" },
  { title: "Git", imgSrc: "/icons/git.svg" },
  { title: "WordPress", imgSrc: "/icons/wordpress.svg" },
  { title: "Shopify", imgSrc: "/icons/shopify.svg" },
  { title: "Payload CMS", imgSrc: "/icons/payload.svg" },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl bg-gray-50 px-4 py-12 text-center dark:bg-gray-950"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-start text-3xl font-bold text-gray-800 dark:text-gray-100 md:text-center"
      >
        Stacks
      </motion.h2>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex w-max gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
        >
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={`${skill.title}-${index}`}
              className="flex min-w-[140px] flex-col items-center justify-center rounded-xl bg-white p-6 shadow-md transition-transform hover:scale-105 dark:bg-gray-900 sm:min-w-[160px]"
            >
              <Image
                src={skill.imgSrc}
                alt={skill.title}
                width={50}
                height={50}
                className="mb-3 h-12 w-12"
              />
              <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                {skill.title}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}