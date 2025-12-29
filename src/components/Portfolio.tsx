"use client";

import React, { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import staticProjects from "@/data/projects.json"; // Static import fallback

type Project = {
  title: string;
  description: string;
  link: string;
  previewSrc?: string;
  videoSrc?: string;
  tech: string[];
};

export default function PortfolioSection() {
  const [visibleCount, setVisibleCount] = useState(4);
  const [projects, setProjects] = useState<Project[]>(staticProjects.projects); // Start with static data

  // Fetch updated JSON from public folder as fallback 
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/data/projects.json");
        if (res.ok) {
          const data = await res.json();
          setProjects(data.project || data);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    if(window.innerWidth < 768) {
      document.querySelectorAll("video").forEach((vid) => vid.play());
    }
  }, [projects]);

  const handleToggleView = () => {
    if (visibleCount >= projects.length) {
      setVisibleCount(4);
    } else {
      setVisibleCount((prev) => prev + 4);
    }
  };

  return (
    <section
      id="portfolio"
      className="max-w-6xl mx-auto py-16 px-4 md:px-16 bg-white dark:bg-gray-950 rounded-xl"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-12 text-start md:text-center text-gray-800 dark:text-gray-100"
        >
          Portfolio
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2">
          <AnimatePresence>
            {projects.slice(0, visibleCount).map((project, id) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: id * 0.15,
                }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition-all group overflow-hidden"
              >
                {/* Media Preview */}
                <div className="relative aspect-video overflow-hidden">
                  {project.previewSrc && (
                    <Image
                      src={project.previewSrc}
                      alt={project.title}
                      fill
                      className="object-cover transition-opacity duration-500 ease-out group-hover:opacity-0"
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
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                    />
                  )}
                </div>

                {/* Text Content */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 truncate">
                      {project.title}
                    </h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 dark:text-gray-100 hover:text-gray-800"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>

                  <p className="mb-3 text-zinc-700 dark:text-zinc-300">
                    {project.description}
                  </p>

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
          </AnimatePresence>
        </div>

        {/* View More / View Less Button */}
        {projects.length > 4 && (
          <div className="mt-10 text-center">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleToggleView}
              className="inline-flex items-center border-4 border-gray-800 dark:border-gray-100 text-gray-800 dark:text-gray-100 px-6 py-1 rounded-full shadow hover:bg-primary/90 transition"
            >
              {visibleCount >= projects.length ? "View Less" : "View More"}
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}
