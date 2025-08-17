"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion";

import staticExperience from "@/data/Experience.json";

type Experience = {
  title: string;
  company: string;
  period: string;
  description: string;
}

export default function ExperienceSection() {
const [experiences, setExperience] = useState<Experience[]>(staticExperience.experience);

   useEffect(() => {
    const fetchExperience = async () => {
      try {
        const res = await fetch("/data/Experience.json");
        if(res.ok) {
          const data = await res.json();
          setExperience(data.experience || data);
        }  
      } catch (error) {
        console.error("error fetching experience", error);
      }
    };
    fetchExperience();
   }, [])
   
  return (
    <section
      id="experience"
      className="max-w-6xl mx-auto py-12 pb-2 px-4 md:px-16 bg-white dark:bg-gray-950"
    >
      <motion.h2
      initial={{opacity: 0, y: -30}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true}}
      transition={{duration: 0.6}}
      className="text-3xl font-bold mb-12 text-left md:text-center text-gray-800 dark:text-gray-100">
        Experience
      </motion.h2>

      <div 
      className="relative border-l-2 border-gray-300 dark:border-gray-700">
        {experiences.map((experience, index) => (
          <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
            key={index}
            className={`mb-12 md:mb-10 pl-6 md:pl-0 md:pr-0 md:flex ${
              index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
            } items-start md:items-center relative`}
          >
            <div className="absolute -left-2 md:left-1/2 transform md:-translate-x-1/2 top-1 w-4 h-4 bg-blue-500 rounded-full z-10"></div>

            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full border-l-2 border-gray-300 dark:border-gray-700 z-0"></div>

            <div className="md:w-1/2 px-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                {experience.title}
              </h3>
              <span className="text-sm text-gray-500 dark:text-gray-400 truncate">
                {experience.company} — {experience.period}
              </span>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {experience.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
