"use client"

import React from "react"
import { motion } from "framer-motion";
import { Code, MonitorSmartphone, PenTool } from "lucide-react"

const services = [
  {
    icon: <Code size={28} />,
    title: "Frontend Development",
    description: "Building fast, scalable, and accessible user interfaces with modern frameworks like React and Next.js.",
  },
  {
    icon: <MonitorSmartphone size={28} />,
    title: "Website Design",
    description: "Ensuring your website looks and functions great across all devices, from desktops to mobile phones.",
  },
  {
    icon: <PenTool size={28} />,
    title: "UI/UX Design",
    description: "Creating intuitive and engaging designs that improve user experience and engagement.",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="max-w-6xl mx-auto py-12 px-4 md:px-16 bg-gray-50 dark:bg-gray-900">
      <motion.h2
      initial={{opacity: 0, y: -30}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true}}
      transition={{duration: 0.6}}
      className="text-3xl text-start md:text-center font-bold mb-8 text-gray-800 dark:text-white">
        Services
        </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            key={index}
            className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition-all text-center"
          >
            <div className="flex justify-center mb-4 text-blue-500">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
