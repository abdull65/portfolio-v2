"use client"

import React from "react"

const experiences = [
  {
    title: "Frontend Developer",
    company: "Snaplodge",
    period: "Jan 2024 - Present",
    description: "Built and maintained user interfaces with React and Tailwind CSS. Integrated real-time APIs and ensured mobile responsiveness.",
  },
  {
    title: "Website Designer",
    company: "Canary Prime Homes",
    period: "Jul 2023 - Dec 2023",
    description: "Designed real estate landing pages, agent dashboards, and booking flows using WordPress and custom CSS.",
  },
  {
    title: "Freelancer",
    company: "Various Clients",
    period: "2022 - 2023",
    description: "Delivered multiple client projects including eCommerce, landing pages, and blogs using modern frontend stacks.",
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 px-4 md:px-16 bg-white dark:bg-gray-950">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Experience</h2>
      <div className="relative border-l-2 border-gray-300 dark:border-gray-700">
        {experiences.map((item, index) => (
          <div key={index} className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 top-1.5"></div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{item.title}</h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">{item.company} — {item.period}</span>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
