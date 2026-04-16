"use client";

import { motion } from "framer-motion";
import staticExperience from "@/data/Experience.json";

type Experience = {
  title: string;
  company: string;
  period: string;
  description: string;
};

export default function Experience() {
  const experiences: Experience[] = staticExperience.experience ?? [];

  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl bg-white px-4 py-12 dark:bg-gray-950 md:px-16"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-left text-3xl font-bold text-gray-800 dark:text-gray-100 md:text-center"
      >
        Experience
      </motion.h2>

      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-[2px] bg-gray-300 dark:bg-gray-700 md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-12">
          {experiences.map((experience, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={`${experience.company}-${experience.title}-${experience.period}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative grid grid-cols-1 md:grid-cols-2 md:gap-12"
              >
                <div className="absolute left-4 top-8 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-gray-900 shadow dark:border-gray-950 dark:bg-gray-100 md:left-1/2" />

                {isLeft ? (
                  <>
                    <div className="pl-12 md:pl-0">
                      <div className="rounded-2xl bg-gray-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:bg-gray-900 md:ml-auto md:max-w-lg">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                          {experience.title}
                        </h3>

                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                          {experience.company} — {experience.period}
                        </p>

                        <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-300">
                          {experience.description}
                        </p>
                      </div>
                    </div>

                    <div className="hidden md:block" />
                  </>
                ) : (
                  <>
                    <div className="hidden md:block" />

                    <div className="pl-12 md:pl-0">
                      <div className="rounded-2xl bg-gray-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:bg-gray-900 md:max-w-lg">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                          {experience.title}
                        </h3>

                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                          {experience.company} — {experience.period}
                        </p>

                        <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-300">
                          {experience.description}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}