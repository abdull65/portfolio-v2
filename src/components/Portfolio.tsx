"use client"

import React from "react"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "SnapLodge – Shortlet Booking Platform",
    description: "A property rental platform built with Homey theme, Paystack, and affiliate systems.",
    tech: ["WordPress", "PHP", "WooCommerce", "Custom CSS"],
    link: "https://snaplodge.ng",
  },
  {
    title: "JBM Cosmetics – eCommerce Store",
    description: "An SEO-optimized skincare store with product filtering and mobile responsiveness.",
    tech: ["WooCommerce", "AIOSEO", "Elementor"],
    link: "https://jbmcosmetics.com",
  },
  {
    title: "Usumtech Portfolio",
    description: "Developer personal portfolio site built using Next.js and TailwindCSS.",
    tech: ["Next.js", "TailwindCSS", "Framer Motion"],
    link: "https://usumtech.netlify.app",
  },
  {
    title: "Limas Luxury Abayas",
    description: "A responsive multi page e-commerce website for a clothing brand",
    tech: ["Wordpress", "Woocommerce", "AIOSEO"],
    link: "https://limas-abayas.com",
  },
]

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="max-w-6xl mx-auto py-12 px-4 md:px-16 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-start md:text-center text-gray-800 dark:text-white">Portfolio</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, idx) => (
            <div key={idx} className="p-6 bg-zinc-100 dark:bg-zinc-800 rounded-xl shadow hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{project.title}</h3>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-primary text-gray-800 dark:text-white hover:underline">
                  <ExternalLink size={20} />
                </a>
              </div>
              <p className="mb-2 text-zinc-700 dark:text-zinc-300">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                {project.tech.map((tech, techIdx) => (
                  <span key={techIdx} className="bg-zinc-200 dark:bg-zinc-700 px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
