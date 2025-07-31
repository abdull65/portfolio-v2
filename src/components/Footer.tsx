"use client"

import React from "react"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-900 py-8 text-center text-zinc-700 dark:text-zinc-300">
      <div className="max-w-4xl mx-auto px-4 flex flex-col gap-6">
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/usumtech"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/audu-mohammed"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:audumohammed211@gmail.com"
            className="hover:text-primary transition"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <p className="text-sm">
          &copy; {new Date().getFullYear()} Audu Mohammed. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
