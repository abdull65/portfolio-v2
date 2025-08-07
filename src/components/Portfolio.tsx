"use client"

import React from "react"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

const projects = [
  {
    title: "Bomes Digital – Digital Agency",
    description: "A digital marketing brand website desinged with WordPress, Elementor, and AIOSEO.",
    tech: ["WordPress", "PHP", "WooCommerce", "Custom CSS"],
    previewSrc: "/images/bomes.png",
    videoSrc: "/videos/bomes.webm",
    link: "https://bomesdigitals.com",
  },
  {
    title: "Getlinked – Hackathon Platform",
    description: "A hackathon website i participated in building during the Getlinked Hackathon 2023.",
    tech: ["HTML", "CSS", "Javascript"],
    previewSrc: "/images/getlinked.png",
    videoSrc: "/videos/getlinked.webm",
    link: "https://usum-getlinked-project.netlify.app/",
  },
  // {
  //   title: "JBM Cosmetics – eCommerce Store",
  //   description: "An SEO-optimized skincare store with product filtering and mobile responsiveness.",
  //   tech: ["WooCommerce", "AIOSEO", "Elementor"],
  //   previewSrc: "/images/bomes.png",
  //   videoSrc: "/videos/bomes.webm",
  //   link: "https://jbmcosmetics.com",
  // },
  {
    title: "Portfolio Website v1.0",
    description: "Developer personal portfolio site built using Next.js and TailwindCSS.",
    tech: ["HTML", "CSS", "Javascript"],
    previewSrc: "/images/portfolio-v1.png",
    videoSrc: "/videos/portfolio-v1.webm",
    link: "https://usumtech.netlify.app",
  },
  {
    title: "Limas Luxury Abayas",
    description: "A responsive multi page e-commerce website for a clothing brand",
    tech: ["Wordpress", "Woocommerce", "AIOSEO"],
    previewSrc: "/images/limas-abayas.png",
    videoSrc: "/videos/limas-abayas.webm",
    link: "https://limas-abayas.com",
  },
]

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="max-w-6xl mx-auto py-16 px-4 md:px-16 bg-white dark:bg-gray-950"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
        initial={{opacity: 0, y: -30}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{duration: 0.6}}
        className="text-3xl font-bold mb-12 text-start md:text-center text-gray-800 dark:text-white">
          Portfolio
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, id) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: id * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition-all group overflow-hidden"
            >
              {/* Media Preview */}
              <div className="relative aspect-video overflow-hidden">
                {project.previewSrc && (
                  <Image
                    src={project.previewSrc}
                    alt={project.title}
                    fill
                    className="object-cover transition-opacity duration-300 group-hover:opacity-0"
                  />
                )}
                {project.videoSrc && (
                  <video
                    src={project.videoSrc}
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause()
                      e.currentTarget.currentTime = 0
                    }}
                  />
                )}
              </div>

              {/* Text Content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white truncate">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 dark:text-white hover:text-blue-500"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>

                <p className="mb-3 text-zinc-700 dark:text-zinc-300">{project.description}</p>

                <div className="flex flex-wrap gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {project.tech.map((tech, techId) => (
                    <span
                      key={techId}
                      className="bg-zinc-200 dark:bg-zinc-700 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
