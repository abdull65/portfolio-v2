"use client";

import Image from "next/image";
import { CaseStudyDivider } from "@/components/case-study/CaseStudyDivider";
import { CaseStudyIntro } from "@/components/case-study/CaseStudyIntro";
import { CaseStudySection } from "@/components/case-study/CaseStudySection";

export default function SobelProperties() {
  return (
    <main className="mx-auto mt-16 max-w-4xl px-4 py-16 text-gray-800 dark:text-gray-100">
      <CaseStudyIntro
        label="Case Study · Proposed Redesign / Concept"
        title="Sobel Properties"
        subtitle="Translating a Rental Wealth System into a Conversion-Focused Website"
        description="This case study explores a proposed website redesign for Sobel Properties. The goal was not just to improve visual design, but to align the website with the brand’s true positioning as a rental income education system. The landing page was designed and built as a concept to demonstrate how this strategy could translate into a more structured, high-converting digital experience."
      />

      <CaseStudyDivider />

      <CaseStudySection eyebrow="Context">
        <Image
          src="/images/sobel-properties-preview-before.png"
          alt="Sobel Properties original website preview"
          width={800}
          height={400}
          className="mb-4 h-auto w-full rounded-lg"
        />

        <p>
          Sobel Properties is a real estate education and mentorship brand built
          around the experience of investor Yamundow Camara, with a strong focus
          on helping individuals build wealth through rental income.
        </p>

        <p className="mt-3">
          While reviewing the brand’s online presence, it became clear that the
          business itself was strong — but the website did not fully reflect how
          the brand actually operates or communicates its value.
        </p>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Brand & Audience Insight">
        <p className="mb-4">
          A deeper look at the brand’s Instagram presence revealed a clear and
          consistent positioning: helping people build wealth through rental
          income using practical, repeatable strategies.
        </p>

        <p className="mb-4">
          The content follows a strong pattern:
        </p>

        <ul className="list-disc space-y-2 pl-6 mb-4">
          <li>Education — explaining how rental investing works</li>
          <li>Proof — showcasing properties, results, and lifestyle</li>
          <li>Authority — consistent founder-led communication</li>
          <li>Aspiration — reinforcing financial freedom and ownership</li>
        </ul>

        <p>
          This creates a clear user journey: learn → believe → take action. 
          However, this structure was not clearly translated into the website
          experience.
        </p>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Key Findings">
        <ul className="list-disc space-y-2 pl-6">
          <li>
            The brand’s core positioning around rental income was not clearly
            communicated on the website
          </li>
          <li>
            The website did not reflect the education → proof → conversion
            structure present on Instagram
          </li>
          <li>
            The founder’s authority existed, but was not structured as a clear
            system or framework
          </li>
          <li>
            The rental portfolio was underutilized as proof of real-world results
          </li>
          <li>
            The overall experience lacked a guided journey from learning to
            conversion
          </li>
        </ul>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Project Objectives">
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Translate the brand’s rental wealth positioning into a clear website
            narrative
          </li>
          <li>
            Structure the experience around education, proof, and conversion
          </li>
          <li>
            Position the founder as both a guide and authority figure
          </li>
          <li>
            Use the rental portfolio as credibility, not just visual content
          </li>
          <li>
            Create a cohesive flow that moves users from interest to action
          </li>
        </ul>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Strategic Direction">
        <p className="mb-4">
          The opportunity was not simply to redesign the interface, but to align
          the website with how the business already succeeds on Instagram.
        </p>

        <p className="mb-4">
          This meant translating a proven content strategy into a structured
          digital experience:
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Lead with the founder’s story to establish trust</li>
          <li>Introduce the rental income concept clearly and early</li>
          <li>Reinforce credibility through real properties and results</li>
          <li>Present the mentorship as a structured pathway, not just an offer</li>
          <li>Guide users toward a clear and confident call to action</li>
        </ul>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Design Direction">
        <p className="mb-4">
          The visual direction builds on the brand’s black and gold identity,
          elevating it into a more refined and intentional experience.
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Black foundation to communicate authority and depth</li>
          <li>Gold accents for emphasis and brand consistency</li>
          <li>Founder-led hero messaging to establish immediate trust</li>
          <li>
            Section flow structured as: Education → Proof → Mentorship → Action
          </li>
          <li>Subtle motion and clean layouts to enhance perceived quality</li>
        </ul>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Key Improvements">
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Reframed the hero to clearly communicate the rental income
            opportunity
          </li>
          <li>
            Strengthened the founder section into a central trust-building
            element
          </li>
          <li>
            Repositioned the rental portfolio as proof of a repeatable strategy
          </li>
          <li>
            Structured the mentorship section as a clear pathway to results
          </li>
          <li>
            Redesigned testimonials into a stronger social proof system
          </li>
          <li>
            Improved the overall flow to guide users toward conversion
          </li>
        </ul>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Demo & Comparison">
        <p className="mb-4">
          The concept below demonstrates how aligning the website with the
          brand’s actual positioning creates a clearer, more structured, and more
          persuasive experience.
        </p>

        <p className="mb-6">
          <a
            href="https://sobel-properties-demo.vercel.app/"
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
          poster="/images/sobel-properties-preview-after.png"
          src="/videos/sobel-properties.webm"
          className="mb-4 w-full rounded-lg"
        />

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <Image
              src="/images/sobel-properties-preview-before.png"
              alt="Before redesign"
              width={400}
              height={300}
              className="w-full rounded-lg"
            />
            <p className="mt-1 text-center text-base">Before</p>
          </div>

          <div>
            <Image
              src="/images/sobel-properties-preview-after.png"
              alt="After redesign"
              width={400}
              height={300}
              className="w-full rounded-lg"
            />
            <p className="mt-1 text-center text-base">After</p>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Project Status">
        <p>
          This work was created as a <strong>proposed redesign and concept</strong>{" "}
          to explore how Sobel Properties could better align its digital
          experience with its actual business model. The landing page was built
          as a demo to express this direction, serving as a strategic design
          exercise rather than an official implementation.
        </p>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Key Takeaways" className="mb-0">
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Learned to identify gaps between brand positioning and digital
            experience
          </li>
          <li>
            Strengthened ability to translate content strategy into product
            structure
          </li>
          <li>
            Improved approach to designing for both trust and conversion
          </li>
        </ul>
      </CaseStudySection>
    </main>
  );
}