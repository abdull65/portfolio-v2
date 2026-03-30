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
        subtitle="From Awareness to Participation, Rethinking the Civic Experience"
        description="This case study explores how the SoftNigeria website can evolve from an awareness-driven landing page into a more complete civic participation platform that better supports youth engagement, onboarding, trust, and long-term involvement."
        extra="The goal was to analyze the current experience, identify gaps between mission and interaction, and propose a clearer, more action-oriented direction."
      />

      <CaseStudyDivider />

      <CaseStudySection eyebrow="Overview">
        <div className="grid grid-cols-1 gap-6 text-sm sm:grid-cols-2">
          <div>
            <p className="mb-1 text-gray-500 dark:text-gray-400">Role</p>
            <p>Website / Frontend Developer</p>
          </div>
          <div>
            <p className="mb-1 text-gray-500 dark:text-gray-400">Project Type</p>
            <p>Independent UX Audit</p>
          </div>
          <div>
            <p className="mb-1 text-gray-500 dark:text-gray-400">Scope</p>
            <p>Information architecture, navigation, engagement flow, trust-building, mobile usability</p>
          </div>
          <div>
            <p className="mb-1 text-gray-500 dark:text-gray-400">Outcome</p>
            <p>Strategic redesign direction for a youth civic engagement platform</p>
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
          className="mb-4 h-auto w-full rounded-lg"
        />

        <p>
          SoftNigeria is a youth-centered civic movement focused on placing young Nigerians at the heart of governance, encouraging them to learn, engage, and contribute to national development with empathy and purpose.
        </p>

        <p className="mt-3">
          The platform communicates values such as youth empowerment, unity in diversity, responsibility, hope, and modern civic participation, while highlighting initiatives like voter sensitization, entrepreneurship empowerment, government awareness campaigns, and community projects.
        </p>

        <p className="mt-3">
          After reviewing the website, I wanted to understand how effectively the digital experience supports that mission, especially in helping users move from interest to meaningful participation.
        </p>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Platform Understanding">
        <p className="mb-4">
          SoftNigeria is not just introducing an idea. It is presenting itself as a movement designed to activate, educate, and organize young people around civic participation.
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Youth interested in governance and civic responsibility</li>
          <li>Students and emerging leaders</li>
          <li>Volunteers and community participants</li>
          <li>Organizers and contributors across different states</li>
        </ul>

        <p className="mt-4">
          Because of this, the website should do more than explain the movement. It should guide users into clear participation paths, build trust, and support ongoing engagement over time.
        </p>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Core Observation">
        <p className="mb-4">
          The website communicates the movement clearly, but the experience remains largely informational. Users can understand the mission, but they are not guided into structured participation in a meaningful way.
        </p>

        <p>
          This creates a gap between what SoftNigeria represents, a movement built around action, connection, and civic engagement, and how users are currently able to interact with it digitally.
        </p>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Key Findings">
        <ul className="list-disc space-y-2 pl-6">
          <li>
            The hero section introduces the mission effectively, but does not clearly explain what happens after a user chooses to join
          </li>
          <li>
            Navigation is extremely limited, restricting users from exploring programs, initiatives, leadership, or deeper platform content
          </li>
          <li>
            Most sections are designed for reading rather than interaction, creating a passive experience
          </li>
          <li>
            Programs and initiatives are visible, but not explorable, actionable, or connected to specific next steps
          </li>
          <li>
            Calls-to-action are repeated without progression, offering the same action regardless of user intent or stage
          </li>
          <li>
            The platform lacks a clear onboarding journey for new users after sign-up
          </li>
          <li>
            Metrics and roadmap sections add credibility, but lack context, progression, and user interaction
          </li>
          <li>
            Social media links feel underutilized and do not yet function as meaningful engagement channels within the overall journey
          </li>
        </ul>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Experience Gap: Awareness vs Participation">
        <p className="mb-4">
          The biggest opportunity lies in bridging the gap between awareness and action.
        </p>

        <p className="mb-4">
          Currently, the website does a strong job of explaining what SoftNigeria stands for, but provides limited direction on how users can actively participate, contribute, or stay engaged over time.
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>No clear journey from interest to involvement</li>
          <li>No role-based or personalized entry points</li>
          <li>No structured engagement flow across initiatives</li>
          <li>No clear explanation of what happens after sign-up</li>
        </ul>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Interaction Limitations">
        <p className="mb-4">
          A large portion of the experience is static. Users consume information, but they are not encouraged to interact with it in meaningful ways.
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Initiatives are not clickable or expandable</li>
          <li>No access to events, town halls, or community activities</li>
          <li>No visibility into local chapters or participation options</li>
          <li>No feedback loops, updates, or progress experiences</li>
        </ul>

        <p className="mt-4">
          As a result, the platform feels more like a campaign presentation than a living movement users can actively engage with.
        </p>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Structural Gaps">
        <p className="mb-4">
          Beyond interaction limitations, the site structure itself is still too shallow for a movement of this nature.
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>No dedicated About page explaining the movement’s background, leadership, and long-term vision</li>
          <li>No clear Contact page or communication path for questions, partnerships, volunteer interest, or media inquiries</li>
          <li>No dedicated pages for programs, events, or initiatives</li>
          <li>No supporting trust-building pages such as FAQs, leadership details, or community chapters</li>
        </ul>

        <p className="mt-4">
          These missing pages make the website feel like a single landing page rather than a complete civic participation ecosystem.
        </p>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Project Objectives">
        <ul className="list-disc space-y-2 pl-6">
          <li>Create a clear transition from awareness to participation</li>
          <li>Improve navigation and information architecture</li>
          <li>Introduce structured engagement pathways</li>
          <li>Make initiatives interactive and explorable</li>
          <li>Strengthen trust through supporting pages and clearer communication pathways</li>
          <li>Design a more intuitive mobile experience</li>
          <li>Support long-term user engagement beyond sign-up</li>
        </ul>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Proposed Experience Direction">
        <p className="mb-4">
          To better support its mission, SoftNigeria can evolve from an awareness-driven landing page into a more complete civic engagement platform.
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Clear “Get Involved” flows tailored to different user types</li>
          <li>Dedicated pages for programs, initiatives, and impact areas</li>
          <li>Interactive sections for events, town halls, and community participation</li>
          <li>Step-by-step onboarding explaining how users can contribute</li>
          <li>Dedicated About and Contact pages to improve trust and transparency</li>
          <li>Better use of social channels as part of the overall engagement journey</li>
          <li>Supporting pages such as FAQs, leadership details, and initiative-specific content</li>
          <li>More intentional mobile-first design for faster understanding and action</li>
        </ul>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Product Opportunity">
        <p className="mb-4">
          SoftNigeria already has a strong mission, identity, and thematic direction. The next stage of growth depends on translating that clarity into a structured digital experience that supports participation at scale.
        </p>

        <p className="mb-4">
          By improving how users explore, join, trust, and engage with the movement, the platform can move from simply informing people to actively mobilizing them.
        </p>

        <p>
          That shift would strengthen engagement, improve retention, and better align the website with the movement’s long-term civic vision.
        </p>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Project Status">
        <p>
          This work was created as an independent UX audit and redesign concept. No functional demo was developed for this version. The case study serves as a strategic proposal for how the platform could evolve into a more effective civic participation experience.
        </p>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Key Takeaways" className="mb-0">
        <ul className="list-disc space-y-2 pl-6">
          <li>Improved my ability to analyze mission-driven platforms</li>
          <li>Learned to identify gaps between purpose, trust, and user interaction</li>
          <li>Strengthened product thinking around onboarding, participation, and engagement</li>
          <li>Explored how design can support action, not just awareness</li>
        </ul>
      </CaseStudySection>
    </main>
  );
}