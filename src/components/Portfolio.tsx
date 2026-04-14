"use client";

import React, { useEffect, useMemo, useState } from "react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import staticProjects from "@/data/projects.json";
import Link from "next/link";

type Project = {
  title: string;
  description: string;
  link?: string;
  caseStudySlug?: string;
  previewSrc?: string;
  videoSrc?: string;
  tech: string[];
};

export default function PortfolioSection() {
  const [visibleCount, setVisibleCount] = useState(4);
  const [projects, setProjects] = useState<Project[]>(
    staticProjects.projects ?? [],
  );

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/data/projects.json");

        if (!res.ok) return;

        const data = await res.json();
        setProjects(data.projects ?? data ?? []);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth >= 768) return;

    const videos = document.querySelectorAll("video");
    videos.forEach((video) => {
      video.play().catch(() => {});
    });
  }, [projects]);

  const visibleProjects = useMemo(
    () => projects.slice(0, visibleCount),
    [projects, visibleCount],
  );

  const handleToggleView = () => {
    if (visibleCount >= projects.length) {
      setVisibleCount(4);
      return;
    }

    setVisibleCount((prev) => prev + 4);
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
          Portfolio & Case Studies
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2">
          <AnimatePresence>
            {visibleProjects.map((project, id) => {
              const isCaseStudy = Boolean(project.caseStudySlug);
              const href = isCaseStudy
                ? `/case-studies/${project.caseStudySlug}`
                : (project.link ?? "#");

              return (
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
                  <div className="relative aspect-video overflow-hidden">
                    {project.previewSrc ? (
                      <Image
                        src={project.previewSrc}
                        alt={project.title}
                        fill
                        className="object-cover transition-opacity duration-500 ease-out group-hover:opacity-0"
                      />
                    ) : null}

                    {project.videoSrc ? (
                      <video
                        src={project.videoSrc}
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        onMouseEnter={(e) => e.currentTarget.play()}
                        onMouseLeave={(e) => {
                          e.currentTarget.pause();
                          e.currentTarget.currentTime = 0;
                        }}
                      />
                    ) : null}
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <span className="inline-block mb-2 text-xs font-medium px-2 py-1 rounded-full bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300">
                          {isCaseStudy ? "Case Study" : "Live Project"}
                        </span>

                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                          {project.title}
                        </h3>
                      </div>

                      <Link
                        href={href}
                        target={isCaseStudy ? "_self" : "_blank"}
                        rel={isCaseStudy ? undefined : "noopener noreferrer"}
                        className="shrink-0 text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                        aria-label={`Open ${project.title}`}
                      >
                        <ExternalLink size={20} />
                      </Link>
                    </div>

                    <p className="mb-4 text-zinc-700 dark:text-zinc-300">
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
              );
            })}
          </AnimatePresence>
        </div>

        {projects.length > 4 ? (
          <div className="mt-10 text-center">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleToggleView}
              className="inline-flex items-center border-2 border-gray-800 dark:border-gray-100 text-gray-800 dark:text-gray-100 px-6 py-2 rounded-full shadow hover:bg-gray-50 dark:hover:bg-gray-900 transition"
            >
              {visibleCount >= projects.length ? "View Less" : "View More"}
            </motion.button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
