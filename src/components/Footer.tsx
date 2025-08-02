"use client"

import React from "react"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="max-w-6xl mx-auto bg-white dark:bg-gray-950 py-8 text-center text-zinc-700 dark:text-zinc-300">
      <div className="max-w-4xl mx-auto px-4 flex flex-col gap-6">
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/abdull65"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/abdullahi-mohammed-b7903a233/"
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
          &copy; {new Date().getFullYear()} Abdullahi Mohammed. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
