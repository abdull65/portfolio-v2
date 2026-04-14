"use client";

import Image from "next/image";
import { CaseStudyDivider } from "@/components/case-study/CaseStudyDivider";
import { CaseStudyIntro } from "@/components/case-study/CaseStudyIntro";
import { CaseStudySection } from "@/components/case-study/CaseStudySection";

export default function BridgeConnect() {
  return (
    <main className="max-w-4xl mt-16 mx-auto px-4 py-16 text-gray-800 dark:text-gray-100">
      <CaseStudyIntro
        label="Case Study · Proposed Redesign / Concept"
        title="Bridge Connect Africa"
        subtitle="Website Redesign Concept & User Experience Improvement"
        description="This case study documents a proposed redesign for Bridge Connect Africa. The goal was to explore how the existing website experience could be improved in terms of structure, clarity, and overall usability."
      />

      <CaseStudyDivider />

      <CaseStudySection eyebrow="Context">
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
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Key Findings">
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
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Project Objectives">
        <ul className="list-disc pl-6 space-y-2">
          <li>Improve clarity and readability across the site</li>
          <li>Create a more consistent and structured layout</li>
          <li>Make navigation easier and intuitive</li>
          <li>Present the organization’s mission clearly</li>
          <li>Enhance the experience on both desktop and mobile</li>
        </ul>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Process">
        <ul className="list-disc pl-6 space-y-2">
          <li>Reviewed the current website structure and content flow</li>
          <li>Identified gaps and inconsistencies in UX</li>
          <li>Built a homepage demo using WordPress</li>
          <li>Focused on spacing, typography, and visual hierarchy</li>
          <li>Compared the existing site with the redesigned demo</li>
        </ul>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Product Opportunity">
        <p className="mb-4">
          For organizations like Bridge Connect Africa, a website is often the
          first point of contact for partners, donors, and community members.
          When the experience is unclear or difficult to navigate, important
          messages can be missed.
        </p>

        <p className="mb-4">
          This redesign concept focuses on making information easier to find,
          improving readability, and presenting the organization’s mission more
          clearly.
        </p>

        <p>
          Thoughtful improvements in structure and usability can strengthen
          credibility, trust, and engagement without changing the core message
          of the organization.
        </p>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Demo & Comparison">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
          <div>
            <Image
              src="/images/bridge-connect-before.png"
              alt="Bridge Connect Africa website before redesign"
              width={400}
              height={300}
              className="w-full rounded-lg"
            />
            <p className="text-base text-center mt-1">Before</p>
          </div>

          <div>
            <Image
              src="/images/bridge-connect-preview.png"
              alt="Bridge Connect Africa website after redesign"
              width={400}
              height={300}
              className="w-full rounded-lg"
            />
            <p className="text-base text-center mt-1">After</p>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Project Status">
        <p>
          This work was created as a{" "}
          <strong>proposed redesign and concept</strong> while discussions
          around the website revamp were ongoing. It serves as a visual
          reference and starting point for future conversations.
        </p>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Key Takeaways" className="mb-0">
        <ul className="list-disc pl-6 space-y-2">
          <li>Improved my approach to reviewing existing websites</li>
          <li>Learned to communicate UX ideas visually</li>
          <li>
            Explored scalable WordPress setups for organizations and teams
          </li>
        </ul>
      </CaseStudySection>
    </main>
  );
}
