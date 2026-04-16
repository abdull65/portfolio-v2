"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, MonitorSmartphone, PenTool } from "lucide-react";

const services = [
  {
    icon: <Code size={28} />,
    title: "Frontend Development",
    description:
      "Building fast, scalable, and accessible interfaces with modern tools like React and Next.js.",
  },
  {
    icon: <MonitorSmartphone size={28} />,
    title: "Website Design",
    description:
      "Designing clean, conversion-focused websites that present your brand clearly across every screen size.",
  },
  {
    icon: <PenTool size={28} />,
    title: "UI/UX Design",
    description:
      "Creating intuitive user flows and interface systems that make products easier and more enjoyable to use.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="mx-auto max-w-6xl bg-gray-50 px-4 py-12 dark:bg-gray-900 md:px-16"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8 text-start text-3xl font-bold text-gray-800 dark:text-gray-100 md:text-center"
      >
        Services
      </motion.h2>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="h-full rounded-2xl bg-white p-6 text-center shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-gray-800"
          >
            <div className="mb-4 flex justify-center text-gray-800 dark:text-gray-100">
              {service.icon}
            </div>

            <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-100">
              {service.title}
            </h3>

            <p className="text-base text-gray-600 dark:text-gray-300">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}