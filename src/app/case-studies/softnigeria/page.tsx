"use client";

import Image from "next/image";
import { CaseStudyDivider } from "@/components/case-study/CaseStudyDivider";
import { CaseStudyIntro } from "@/components/case-study/CaseStudyIntro";
import { CaseStudySection } from "@/components/case-study/CaseStudySection";

export default function SoftNigeriaCaseStudy() {
  return (
    <main className="max-w-4xl mt-16 mx-auto px-4 py-16 text-gray-800 dark:text-gray-100">
      <CaseStudyIntro
        label="Case Study · UX Audit / Proposed Redesign Concept"
        title="SoftNigeria"
        subtitle="Website Experience Review & Redesign Direction"
        description="This case study explores how the SoftNigeria website could be improved through clearer structure, stronger content presentation, and a more modern user experience."
        extra="The goal was to evaluate the current platform and identify opportunities to improve content discovery, business visibility, and audience engagement."
      />

      <CaseStudyDivider />

      <CaseStudySection eyebrow="Overview">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
          <div>
            <p className="text-gray-500 dark:text-gray-400 mb-1">Role</p>
            <p>Frontend Developer / UX Reviewer</p>
          </div>
          <div>
            <p className="text-gray-500 dark:text-gray-400 mb-1">Project Type</p>
            <p>Independent UX Audit</p>
          </div>
          <div>
            <p className="text-gray-500 dark:text-gray-400 mb-1">Scope</p>
            <p>Content structure, navigation, mobile usability, platform direction</p>
          </div>
          <div>
            <p className="text-gray-500 dark:text-gray-400 mb-1">Outcome</p>
            <p>Strategic redesign recommendations for a lifestyle media platform</p>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection eyebrow="Context">
        <Image
          src="/images/softnigeria-preview.png"
          alt="SoftNigeria website preview"
          width={800}
          height={400}
          className="w-full h-auto rounded-lg mb-4"
        />

        <p>
          SoftNigeria presents itself as a lifestyle and discovery platform
          focused on promoting experiences, businesses, culture, and events
          across Nigerian cities.
        </p>

        <p className="mt-3">
          After noticing the brand’s relaunch activity, I reviewed the website
          to assess how well the digital experience supports the platform’s
          identity, content goals, and growth potential.
        </p>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Platform Understanding">
        <p className="mb-4">
          From a product perspective, SoftNigeria sits at the intersection of
          lifestyle media, business promotion, and city discovery.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Readers looking for places, events, and experiences</li>
          <li>Businesses seeking visibility and promotion</li>
          <li>Users exploring lifestyle content across major Nigerian cities</li>
        </ul>

        <p className="mt-4">
          Because of this, the website should feel less like a basic blog and
          more like a curated content platform with stronger visual hierarchy,
          clearer navigation, and better discovery paths.
        </p>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Key Findings">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            The homepage lacks a strong content hierarchy, making featured
            stories, businesses, and experiences less visible
          </li>
          <li>
            The visual presentation does not fully reflect the energy and
            quality expected from a lifestyle-focused brand
          </li>
          <li>
            Navigation can be improved to support easier exploration across
            categories and content types
          </li>
          <li>
            Content cards and page layouts feel closer to a default blog setup
            than a modern media platform
          </li>
          <li>
            Mobile reading and browsing could be better optimized for spacing,
            scanning, and tap interactions
          </li>
          <li>
            The platform misses opportunities for engagement features such as
            trending sections, newsletters, and business spotlight modules
          </li>
        </ul>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Project Objectives">
        <ul className="list-disc pl-6 space-y-2">
          <li>Create a clearer and more engaging homepage structure</li>
          <li>Improve content discovery across categories and sections</li>
          <li>Strengthen the platform’s visual identity</li>
          <li>Make the experience more intuitive on mobile devices</li>
          <li>
            Better support SoftNigeria’s business promotion and audience
            engagement goals
          </li>
        </ul>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Process">
        <ul className="list-disc pl-6 space-y-2">
          <li>Reviewed the current website structure and navigation</li>
          <li>Assessed homepage layout and content presentation patterns</li>
          <li>Identified hierarchy, usability, and discovery gaps</li>
          <li>
            Evaluated how the platform could better support engagement and
            promotion
          </li>
          <li>
            Defined a redesign direction based on modern content platform
            patterns
          </li>
        </ul>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Proposed Experience Direction">
        <p className="mb-4">
          Rather than functioning primarily as a simple post feed, SoftNigeria
          could evolve into a more structured lifestyle discovery platform.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Hero section for featured stories or highlighted experiences</li>
          <li>Trending categories such as food, events, travel, and nightlife</li>
          <li>Featured business spotlight sections</li>
          <li>Improved article cards with stronger imagery and metadata</li>
          <li>More intentional spacing, typography, and mobile responsiveness</li>
          <li>Newsletter and audience retention features</li>
        </ul>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Product Opportunity">
        <p className="mb-4">
          SoftNigeria has the potential to become more than a blog. With the
          right structure, it could operate as a city-focused discovery platform
          that helps users find places, experiences, and events while also
          giving businesses stronger visibility.
        </p>

        <p className="mb-4">
          This would improve not only usability, but also the platform’s value
          proposition for readers, advertisers, and featured brands.
        </p>

        <p>
          A stronger digital experience could increase user engagement, improve
          discoverability of content, and better align the website with the
          platform’s broader brand ambition.
        </p>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Project Status">
        <p>
          This work was created as an independent UX audit and redesign concept.
          No functional demo was developed for this version. The case study
          serves as a strategic review of the current experience and a proposal
          for how the platform could evolve.
        </p>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Key Takeaways" className="mb-0">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Strengthened my ability to evaluate content-driven platforms from a
            UX and product perspective
          </li>
          <li>
            Practiced identifying gaps between brand identity and digital
            experience
          </li>
          <li>
            Explored how design decisions can improve discovery, engagement, and
            platform clarity
          </li>
        </ul>
      </CaseStudySection>
    </main>
  );
}