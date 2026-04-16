"use client";

import React, { useMemo, useState } from "react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import staticProjects from "@/data/projects.json";
import Link from "next/link";

export default function PortfolioSection() {
  const [visibleCount, setVisibleCount] = useState(4);
  const projects = useMemo(() => staticProjects.projects ?? [], []);

  const visibleProjects = useMemo(() => {
    return projects.slice(0, visibleCount);
  }, [projects, visibleCount]);

  const handleToggleView = () => {
    setVisibleCount((prev) => (prev >= projects.length ? 4 : prev + 4));
  };

  return (
    <section
      id="portfolio"
      className="mx-auto max-w-6xl rounded-xl bg-white px-4 py-16 dark:bg-gray-950 md:px-16"
    >
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:hidden mb-12 text-start text-3xl font-bold text-gray-800 dark:text-gray-100"
        >
          Portfolio & <br /> Case Studies
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="hidden md:block mb-12 text-center text-3xl font-bold text-gray-800 dark:text-gray-100"
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
                  className="group overflow-hidden rounded-xl bg-white shadow transition-all hover:shadow-lg dark:bg-gray-800"
                >
                  <div className="relative aspect-video overflow-hidden">
                    {project.previewSrc && (
                      <Image
                        src={project.previewSrc}
                        alt={project.title}
                        fill
                        className="object-cover transition-opacity duration-500 ease-out opacity-0 md:opacity-100 md:group-hover:opacity-0"
                      />
                    )}

                    {project.videoSrc && (
                      <video
                        src={project.videoSrc}
                        muted
                        loop
                        playsInline
                        autoPlay
                        preload="metadata"
                        className="absolute inset-0 h-full w-full object-cover opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100"
                        onMouseEnter={(e) => e.currentTarget.play()}
                        onMouseLeave={(e) => {
                          e.currentTarget.pause();
                          e.currentTarget.currentTime = 0;
                        }}
                      />
                    )}
                  </div>

                  <div className="p-5">
                    <div className="mb-3 flex items-start justify-between gap-4">
                      <div>
                        <span className="mb-2 inline-block rounded-full bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-700 dark:text-zinc-300">
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
                        className="shrink-0 text-gray-800 transition-colors hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300"
                        aria-label={`Open ${project.title}`}
                      >
                        <ExternalLink size={20} />
                      </Link>
                    </div>

                    <p className="mb-4 text-zinc-700 dark:text-zinc-300">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-zinc-200 px-2 py-1 dark:bg-zinc-700"
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

        {projects.length > 4 && (
          <div className="mt-10 text-center">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleToggleView}
              className="inline-flex items-center rounded-full border-2 border-gray-800 px-6 py-2 text-gray-800 shadow transition hover:bg-gray-50 dark:border-gray-100 dark:text-gray-100 dark:hover:bg-gray-900"
            >
              {visibleCount >= projects.length ? "View Less" : "View More"}
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}
