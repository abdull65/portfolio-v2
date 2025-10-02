"use client"

import Image from "next/image"
import React, { useRef, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"

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
    { title: "Payload CMS", imgSrc: "/icons/payload.svg" },
  ]

  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  useEffect(() => {
    if (!containerRef.current) return

    const scrollWidth = containerRef.current.scrollWidth / 2
    controls.start({
      x: [0, -scrollWidth],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    })
  }, [controls])

  const handleMouseEnter = () => {
    if (!containerRef.current) return
    const scrollWidth = containerRef.current.scrollWidth / 2
    controls.start({
      x: [-scrollWidth, 0],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    })
  }

  const handleMouseLeave = () => {
    if (!containerRef.current) return
    const scrollWidth = containerRef.current.scrollWidth / 2
    controls.start({
      x: [0, -scrollWidth],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    })
  }

  return (
    <section
  id="skills"
  className="max-w-6xl mx-auto px-4 py-12 text-center bg-gray-50 dark:bg-gray-950"
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
>
  <motion.h2
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-3xl text-start md:text-center font-bold mb-12 text-gray-800 dark:text-gray-100"
  >
    Stacks
  </motion.h2>

  <div className="relative w-full overflow-hidden">
    <motion.div
      ref={containerRef}
      animate={controls}
      className="flex space-x-6"
    >
      {[...skills, ...skills].map((skill, index) => (
        <div
          key={index}
          className="min-w-[30%] sm:min-w-[150px] bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md flex flex-col items-center justify-center transition-transform transform hover:scale-105"
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
        </div>
      ))}
    </motion.div>
  </div>
</section>

  )
}
