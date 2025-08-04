"use client"

import React from "react"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="max-w-6xl mx-auto py-16 px-4 md:px-16 bg-gray-50 dark:bg-gray-900 text-zinc-900 dark:text-white">
      <div className="max-w-3xl mx-auto md:text-center">
        <h2 className="text-3xl font-bold mb-4 text-start md:text-center">Get in Touch</h2>
        <p className="mb-8 text-zinc-600 dark:text-zinc-400">
          Feel free to reach out for collaborations, freelance opportunities, or just to say hi!
        </p>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 text-left">
          <div className="flex items-start gap-4">
            <Mail className="text-primary mt-1" />
            <div>
              <h4 className="font-semibold">Email</h4>
              <p className="text-sm">audumohammed211@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="text-primary mt-1" />
            <div>
              <h4 className="font-semibold">Phone</h4>
              <p className="text-sm">+234 907 405 7222</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="text-primary mt-1" />
            <div>
              <h4 className="font-semibold">Location</h4>
              <p className="text-sm">Nigeria (Remote Available)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
