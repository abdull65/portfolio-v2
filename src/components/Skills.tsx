"use client"

import Image from "next/image"
import React, { useRef, useEffect } from "react"
import { motion} from "framer-motion"

export default function SkillsSection() {
  const skills = [
    { title: "HTML%", imgSrc: "/icons/html5.svg" },
    { title: "CSS#", imgSrc: "/icons/css3.svg" },
    { title: "Tailwind", imgSrc: "/icons/tailwind.svg" },
    { title: "JavaScript", imgSrc: "/icons/javascript.svg" },
    { title: "React", imgSrc: "/icons/react.svg" },
    { title: "Next.js", imgSrc: "/icons/nextjs.svg" },
    { title: "Git", imgSrc: "/icons/git.svg" },
    { title: "Wordpress", imgSrc: "/icons/wordpress.svg" },
    { title: "Shopify", imgSrc: "/icons/shopify.svg" },
  ]

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let scrollAmount = 0
    const scrollStep = 1
    const scrollInterval = 20

    const autoScroll = setInterval(() => {
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        scrollAmount = 0
        container.scrollTo({ left: 0, behavior: "smooth" })
      } else {
        scrollAmount += scrollStep
        container.scrollTo({ left: scrollAmount, behavior: "smooth" })
      }
    }, scrollInterval)

    return () => clearInterval(autoScroll)
  }, [])

  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-4 py-12 text-center bg-gray-50 dark:bg-gray-950"
    >
      <motion.h2
      initial={{opacity: 0, y: -30}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true}}
      transition={{duration: 0.6}}
      className="text-3xl text-start md:text-center font-bold mb-12 text-gray-800 dark:text-gray-100">
        Stacks
      </motion.h2>

      <div
        ref={containerRef}
        className="flex space-x-6 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-hide"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="min-w-[30%] sm:min-w-[150px] snap-center bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md flex flex-col items-center justify-center transition-transform transform hover:scale-105"
          >
            {skill.imgSrc && (
              <Image
                src={skill.imgSrc}
                alt={skill.title}
                width={50}
                height={50}
                className="w-12 h-12 mb-3"
              />
            )}
            {/* <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
              {skill.title}
            </p> */}
          </div>
        ))}
      </div>
    </section>
  )
}
