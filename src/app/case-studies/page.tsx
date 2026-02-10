"use client";

import Image from "next/image";

export default function BridgeConnect() {
  return (
    <main className="max-w-4xl mt-16 mx-auto px-4 py-16 text-gray-800 dark:text-gray-100">
      {/* Intro */}
      <section className="md:my-8">
        <p className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">
          Case Study · Proposed Redesign / Concept
        </p>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Bridge Connect Africa
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-300">
          Website Redesign Concept & User Experience Improvement
        </p>

        <p className="mt-4">
          This case study documents a proposed redesign for Bridge Connect
          Africa. The goal was to explore how the existing website experience
          could be improved in terms of structure, clarity, and overall
          usability.
        </p>
      </section>

      <hr className="my-8 border-gray-300 dark:border-gray-700" />

      {/* Background */}
      <section className="mb-16">
        <p className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">
          Context
        </p>

        <Image
          src="/images/bridge-connect-preview.png"
          alt="Bridge Connect Africa Website Redesign Preview"
          width={800}
          height={400}
          className="w-full h-auto rounded-lg mb-4"
        />

        <p>
          Bridge Connect Africa creates impact through community-driven
          programs. I reviewed their current site and identified areas where the
          user experience could be improved.
        </p>

        <p className="mt-3">
          While discussions were ongoing, I independently created a demo to
          visually communicate these ideas.
        </p>
      </section>

      <hr className="my-8 border-gray-300 dark:border-gray-700" />

      {/* Problems */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">What I Noticed</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Text hierarchy made important information hard to scan</li>
          <li>The navigation bar felt less clear and inconsistent</li>
          <li>Font sizes were too small for easy reading</li>
          <li>Layouts were inconsistent across pages</li>
          <li>
            Pages like <strong>About Us</strong> and <strong>Contact Us</strong>{" "}
            didn’t clearly communicate their purpose
          </li>
          <li>Site felt slow, likely due to unoptimized images</li>
        </ul>
      </section>

      <hr className="my-8 border-gray-300 dark:border-gray-700" />

      {/* Goals */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Goal of the Redesign</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Improve clarity and readability across the site</li>
          <li>Create a more consistent and structured layout</li>
          <li>Make navigation easier and intuitive</li>
          <li>Present the organization’s mission clearly</li>
          <li>Enhance the experience on both desktop and mobile</li>
        </ul>
      </section>

      <hr className="my-8 border-gray-300 dark:border-gray-700" />

      {/* Approach */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">My Approach</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Reviewed the current website structure and content flow</li>
          <li>Identified gaps and inconsistencies in UX</li>
          <li>Built a homepage demo using WordPress</li>
          <li>Focused on spacing, typography, and visual hierarchy</li>
          <li>Compared the existing site with the redesigned demo</li>
        </ul>
      </section>

      <hr className="my-8 border-gray-300 dark:border-gray-700" />

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>

        <p className="mb-4">
          For organizations like Bridge Connect Africa, a website is often the
          first point of contact for partners, donors, and community members.
          When the experience is unclear or difficult to navigate, important
          messages can be missed.
        </p>

        <p className="mb-4">
          This redesign concept focuses on making information easier to find,
          improving readability, and presenting the organization’s mission more
          clearly. Small improvements in structure and usability can make a big
          difference in how an organization is perceived and understood.
        </p>

        <p>
          By creating this demo, I wanted to show how thoughtful design choices
          can support credibility, trust, and engagement, even without changing
          the core content.
        </p>
      </section>

      <hr className="my-8 border-gray-300 dark:border-gray-700" />

      {/* Demo */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Demo & Comparison</h2>
        <p className="mb-4">
          Below is a short demo of the redesigned homepage, along with a
          before-and-after comparison to highlight key improvements.
        </p>
        <p className="mb-6">
          <a
            href="https://limas-abayas.com/bridge-connect/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600 dark:text-blue-400"
          >
            View live demo
          </a>
        </p>
        {/* Embedded video */}
        <video
          controls
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Bridge Connect Africa website redesign demo"
          poster="/images/bridge-connect-preview.png"
          src="/videos/bridge-connect.webm"
          className="w-full rounded-lg mb-4"
        />

        {/* Before/After screenshots */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
          <div>
            <Image
              src="/images/bridge-connect-before.png"
              alt="Before Redesign"
              width={400}
              height={300}
              className="w-full rounded-lg"
            />
            <p className="text-base text-center mt-1">Before</p>
          </div>
          <div>
            <Image
              src="/images/bridge-connect-preview.png"
              alt="After Redesign"
              width={400}
              height={300}
              className="w-full rounded-lg"
            />
            <p className="text-base text-center mt-1">After</p>
          </div>
        </div>
      </section>

      <hr className="my-8 border-gray-300 dark:border-gray-700" />

      {/* Status */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Project Status</h2>
        <p>
          This work was created as a{" "}
          <strong>proposed redesign and concept</strong> while discussions
          around the website revamp were ongoing. It serves as a visual
          reference and starting point for future conversations.
        </p>
      </section>

      {/* Takeaways */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Key Takeaways</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Improved my approach to reviewing existing websites</li>
          <li>Learned to communicate UX ideas visually</li>
          <li>
            Explored scalable WordPress setups for organizations and teams
          </li>
        </ul>
      </section>
    </main>
  );
}
