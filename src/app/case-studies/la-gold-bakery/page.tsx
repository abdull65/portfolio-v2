"use client";

import Image from "next/image";
import { CaseStudyDivider } from "@/components/case-study/CaseStudyDivider";
import { CaseStudyIntro } from "@/components/case-study/CaseStudyIntro";
import { CaseStudySection } from "@/components/case-study/CaseStudySection";

export default function LaGoldBakeryCaseStudy() {
  return (
    <main className="max-w-4xl mt-16 mx-auto px-4 py-16 text-gray-800 dark:text-gray-100">
      <CaseStudyIntro
        label="Case Study · UX Audit / Proposed Redesign Concept"
        title="LaGold Bakery"
        subtitle="Bringing a Quality Bakery Brand into a More Trustworthy Digital Experience"
        description="This case study explores how LaGold Bakery’s website can evolve from a generic bakery template into a more credible, locally relevant, and conversion-focused digital experience."
        extra="The goal was to analyze the current website, identify the gaps between product quality and digital perception, and propose a clearer direction for a modern bakery brand experience."
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
            <p>Brand perception, trust-building, information clarity, conversion flow, local relevance</p>
          </div>
          <div>
            <p className="mb-1 text-gray-500 dark:text-gray-400">Outcome</p>
            <p>Strategic redesign direction for a bakery website with stronger credibility and customer action</p>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection eyebrow="Context">
        <Image
          src="/images/lagold-bakery-preview.png"
          alt="LaGold Bakery website preview"
          width={800}
          height={400}
          className="mb-4 h-auto w-full rounded-lg"
        />

        <p>
          I first discovered LaGold Bakery through its product, not through its website. I bought one of their breads at a store where I live in Minna, and it stood out immediately as one of the best breads I had eaten in a long time.
        </p>

        <p className="mt-3">
          That experience made me curious about the brand. After noticing the website domain printed on the bread wrapper, I decided to check it out, expecting to see a digital presence that reflected the same quality and care as the product itself.
        </p>

        <p className="mt-3">
          Instead, I found a website with clear trust, branding, and usability issues. That contrast between a strong physical product and a weak online presence became the foundation for this case study.
        </p>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Brand Understanding">
        <p className="mb-4">
          LaGold Bakery already has something many brands struggle to build: a product experience that leaves an impression. The bread created enough curiosity and trust offline to make me actively look up the business online.
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Walk-in and repeat customers buying bread and baked goods through retail stores</li>
          <li>Local customers looking for a reliable bakery brand they can trust</li>
          <li>Potential new customers discovering the brand through packaging or word of mouth</li>
          <li>People who need a quick and clear way to confirm products, location, and contact details</li>
        </ul>

        <p className="mt-4">
          Because of this, the website should do more than simply exist. It should reinforce trust, showcase the bakery’s offerings clearly, and make it easier for customers to connect with or buy from the brand.
        </p>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Core Observation">
        <p className="mb-4">
          The strongest issue with the current website is not just visual quality. It is the disconnect between the quality of the product and the credibility of the digital experience.
        </p>

        <p>
          The bread feels real, memorable, and worth recommending. The website, however, feels generic, under-customized, and in several places disconnected from the reality of the actual business.
        </p>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Key Findings">
        <ul className="list-disc space-y-2 pl-6">
          <li>
            The homepage feels like a bakery template rather than a website designed specifically for LaGold Bakery
          </li>
          <li>
            Brand messaging is too generic and does not clearly communicate what makes the bakery distinct
          </li>
          <li>
            Important trust signals such as contact details and business information feel inconsistent or inaccurate
          </li>
          <li>
            The overall experience does not reflect the quality of the product customers already enjoy offline
          </li>
          <li>
            Product presentation lacks the kind of strong visual storytelling a bakery website depends on
          </li>
          <li>
            Calls-to-action are weak, making it unclear how customers should contact, locate, or order from the bakery
          </li>
          <li>
            The interface includes unnecessary template-driven e-commerce elements that distract from the main customer journey
          </li>
          <li>
            The website does not feel rooted in a clear local context, which weakens relevance and trust
          </li>
        </ul>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Experience Gap: Product Quality vs Digital Trust">
        <p className="mb-4">
          The biggest opportunity lies in closing the gap between how the brand feels in real life and how it appears online.
        </p>

        <p className="mb-4">
          Offline, the product creates confidence. Online, the experience introduces doubt. That creates friction at the exact point where the website should be strengthening trust and encouraging action.
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>A strong product experience is not matched by a strong digital identity</li>
          <li>The website does not feel like a reliable extension of the bakery brand</li>
          <li>Customers looking for reassurance may instead encounter confusion</li>
          <li>The current experience misses the chance to turn curiosity into conversion</li>
        </ul>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Trust and Credibility Issues">
        <p className="mb-4">
          Bakery websites thrive on familiarity, warmth, and confidence. Customers want to know the business is real, accessible, and consistent.
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Placeholder-style content reduces the sense of authenticity</li>
          <li>Inconsistent business information weakens confidence</li>
          <li>The website lacks a clear and believable local bakery identity</li>
          <li>Visual and content choices do not support a premium or well-loved product impression</li>
        </ul>

        <p className="mt-4">
          When customers discover a bakery through packaging or recommendation, the website should validate that trust. In this case, it currently does the opposite.
        </p>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Structural Gaps">
        <p className="mb-4">
          Beyond trust issues, the structure of the website also leaves important customer needs unmet.
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>No clear path for a new customer to understand what the bakery offers</li>
          <li>No strong product-first layout that highlights bread and related offerings</li>
          <li>No obvious contact or ordering journey</li>
          <li>No clear emphasis on location, accessibility, or local relevance</li>
          <li>No simplified conversion flow for customers who just want to reach out quickly</li>
        </ul>

        <p className="mt-4">
          Instead of guiding people toward confidence and action, the site makes them work too hard to understand the brand.
        </p>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Project Objectives">
        <ul className="list-disc space-y-2 pl-6">
          <li>Create a more trustworthy and authentic digital presence</li>
          <li>Align the website more closely with the actual quality of the bakery’s product</li>
          <li>Improve clarity around business identity, offerings, and contact paths</li>
          <li>Reduce template clutter and simplify the customer journey</li>
          <li>Introduce stronger calls-to-action for inquiry, location, and ordering</li>
          <li>Make the experience feel warmer, more modern, and more locally grounded</li>
          <li>Strengthen brand perception through better content and presentation</li>
        </ul>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Proposed Experience Direction">
        <p className="mb-4">
          To better support the brand, LaGold Bakery’s website should move away from a generic e-commerce template and toward a simpler, more believable bakery experience built around trust and product appeal.
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>A cleaner homepage with stronger brand storytelling and bakery-focused visuals</li>
          <li>Clear presentation of bread, pastries, and related offerings</li>
          <li>More visible and credible contact information</li>
          <li>Simple conversion paths such as WhatsApp, call, or location-based inquiry</li>
          <li>A stronger local identity through clearer business context and messaging</li>
          <li>Reduced interface noise so customers can focus on what matters most</li>
          <li>More intentional visual hierarchy that guides trust and action</li>
        </ul>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Product Opportunity">
        <p className="mb-4">
          LaGold Bakery already has a real advantage: the product itself creates a strong enough impression to generate curiosity and repeat interest. The next step is making sure the digital experience supports that same impression instead of weakening it.
        </p>

        <p className="mb-4">
          A more thoughtful website could help the brand feel more established, more trustworthy, and easier to engage with for both existing and potential customers.
        </p>

        <p>
          That shift would not only improve visual presentation. It would strengthen credibility, improve discoverability, and create a clearer path from product discovery to customer action.
        </p>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Project Status">
        <p>
          This work was created as an independent UX audit and redesign concept. No functional demo was developed for this version. The case study serves as a strategic proposal for how LaGold Bakery’s website could evolve into a more credible and customer-focused digital experience.
        </p>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Key Takeaways" className="mb-0">
        <ul className="list-disc space-y-2 pl-6">
          <li>Strengthened my ability to analyze the gap between product experience and digital perception</li>
          <li>Improved my thinking around trust-building for small business websites</li>
          <li>Explored how local relevance and clarity can directly affect brand credibility</li>
          <li>Reinforced the idea that a strong product deserves an equally strong online presence</li>
        </ul>
      </CaseStudySection>
    </main>
  );
}