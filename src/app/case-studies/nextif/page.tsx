"use client";

import Image from "next/image";
import { CaseStudyDivider } from "@/components/case-study/CaseStudyDivider";
import { CaseStudyIntro } from "@/components/case-study/CaseStudyIntro";
import { CaseStudySection } from "@/components/case-study/CaseStudySection";

export default function NextIFCaseStudy() {
  return (
    <main className="mx-auto mt-16 max-w-4xl px-4 py-16 text-gray-800 dark:text-gray-100">
      <CaseStudyIntro
        label="Case Study · Proposed Redesign / Concept"
        title="NextIF"
        subtitle="Repositioning an Ethical Finance Ecosystem Through a Modern Homepage Experience"
        description="This case study explores a proposed homepage redesign for NextIF, a global ethical finance and innovation ecosystem. The goal was to improve clarity, credibility, visual hierarchy, mobile experience, and trust-building across the digital experience while preserving the organization’s existing mission and brand direction."
      />

      <CaseStudyDivider />

      <CaseStudySection eyebrow="Context">
        <Image
          src="/images/nextif-preview-before.png"
          alt="NextIF original homepage preview"
          width={800}
          height={400}
          className="mb-4 h-auto w-full rounded-lg"
        />

        <p>
          NextIF is positioned around ethical finance, innovation, mentorship,
          accelerator programs, speakers, and global community building. While
          reviewing the existing website, it became clear that the organization
          had strong content and credibility assets, but the homepage experience
          did not fully communicate the scale or quality of the platform.
        </p>

        <p className="mt-3">
          The redesign was approached as a strategic concept: not just to make
          the website look more polished, but to reframe how NextIF presents its
          ecosystem, builds trust, and guides users through its value.
        </p>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Brand & Platform Insight">
        <p className="mb-4">
          A closer review of NextIF’s website revealed that the organization is
          more than a simple educational platform. It operates as an ecosystem
          connecting emerging innovators with ethical finance education,
          accelerator opportunities, mentorship, speakers, partners, and a
          global community.
        </p>

        <p className="mb-4">
          The strongest assets already existed within the brand:
        </p>

        <ul className="mb-4 list-disc space-y-2 pl-6">
          <li>Global community and country reach</li>
          <li>Recognizable speakers and mentors</li>
          <li>Accelerator program structure</li>
          <li>Ethical finance and innovation positioning</li>
          <li>Partner and ecosystem credibility</li>
        </ul>

        <p>
          The opportunity was to bring these assets forward and structure them
          into a clearer homepage journey that felt more modern, trustworthy,
          and globally positioned.
        </p>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Key Findings">
        <ul className="list-disc space-y-2 pl-6">
          <li>
            The homepage lacked a strong visual hierarchy and did not clearly
            guide users through the organization’s value.
          </li>
          <li>
            High-value credibility assets such as speakers, mentors, partners,
            and impact statistics were underutilized.
          </li>
          <li>
            Sections felt disconnected, making the experience feel more like
            stacked content than a guided ecosystem journey.
          </li>
          <li>
            The existing presentation did not fully reflect NextIF’s global,
            innovation-driven positioning.
          </li>
          <li>
            The website relied too heavily on static presentation and did not
            create enough emotional engagement.
          </li>
          <li>
            Mobile navigation and responsive behavior needed stronger attention
            for a better small-screen experience.
          </li>
          <li>
            The homepage needed stronger image-led storytelling to communicate
            people, community, mentorship, and global collaboration.
          </li>
        </ul>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Project Objectives">
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Reposition the homepage as a global ethical finance ecosystem rather
            than a generic organization website.
          </li>
          <li>
            Improve trust by highlighting speakers, partners, community reach,
            and accelerator structure more clearly.
          </li>
          <li>
            Create a stronger storytelling flow from awareness to credibility to
            action.
          </li>
          <li>
            Make the visual experience feel more modern, premium, and aligned
            with the existing NextIF logo identity.
          </li>
          <li>
            Improve responsiveness and mobile navigation for smaller screens.
          </li>
          <li>
            Build reusable sections and components using Next.js, Tailwind CSS,
            and shadcn/ui.
          </li>
        </ul>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Strategic Direction">
        <p className="mb-4">
          The redesign strategy focused on turning the homepage into a guided
          ecosystem journey. Instead of presenting information as separate
          blocks, the page was structured to build momentum from first
          impression to trust, clarity, engagement, and conversion.
        </p>

        <p className="mb-4">The new flow was structured around:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>
            A stronger hero section to communicate mission and positioning
          </li>
          <li>Impact statistics to establish credibility early</li>
          <li>An ecosystem section explaining what NextIF actually enables</li>
          <li>
            An accelerator section positioned as a practical growth pathway
          </li>
          <li>A speakers carousel to elevate expert credibility</li>
          <li>A partner carousel to reinforce ecosystem backing</li>
          <li>A stronger final CTA and footer to complete the experience</li>
        </ul>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Design Direction">
        <p className="mb-4">
          The visual direction was built around the existing NextIF identity,
          especially its modern blue/cyan brand energy. The goal was to avoid
          creating a completely different brand and instead evolve the website
          into a more refined version of what the identity already suggested.
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Host Grotesk typography to match the brand’s existing feel</li>
          <li>Dark premium sections to communicate depth and authority</li>
          <li>Cyan and blue glow accents inspired by the logo</li>
          <li>Image-led sections to make the platform feel more human</li>
          <li>Glassmorphism and soft borders for a modern fintech feel</li>
          <li>Carousel-based content for speakers and partners</li>
          <li>Consistent rounded cards, spacing, and section rhythm</li>
        </ul>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Key Improvements">
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Rebuilt the hero section with stronger messaging, clearer CTAs,
            image-led storytelling, and trust indicators.
          </li>
          <li>
            Redesigned the impact section to feel like platform credibility
            rather than plain statistics.
          </li>
          <li>
            Reframed the ecosystem section into a connected explanation of how
            NextIF supports learning, mentorship, innovation, and collaboration.
          </li>
          <li>
            Positioned the accelerator section as a structured 5-week journey
            from learning to building.
          </li>
          <li>
            Turned the speakers section into a premium carousel using real
            speaker profiles from the existing website.
          </li>
          <li>
            Reworked the partners section into a responsive logo carousel to
            make the ecosystem backing feel more active.
          </li>
          <li>
            Added a responsive mobile navigation menu with outside-click closing
            behavior.
          </li>
          <li>
            Redesigned the footer with social links, contact information, and a
            stronger platform summary.
          </li>
        </ul>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Mobile Experience">
        <p className="mb-4">
          Mobile responsiveness was treated as a key part of the redesign rather
          than an afterthought. Since many users will likely discover the
          platform on smaller screens, the navigation, carousel behavior,
          spacing, CTA placement, and section rhythm were adjusted to feel
          natural on mobile.
        </p>
        <div className="mb-6 flex justify-start">
          <Image
            src="/images/after-mobile.png"
            alt="NextIF redesigned mobile experience"
            width={420}
            height={860}
            className="h-auto w-full max-w-[280px] rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-200/60 md:max-w-[320px]"
          />
        </div>

        <ul className="list-disc space-y-2 pl-6">
          <li>Added a dedicated mobile menu instead of hiding navigation</li>
          <li>Moved CTA buttons into better positions on smaller screens</li>
          <li>Used carousel layouts to reduce content overload</li>
          <li>Adjusted spacing and image sizing for better readability</li>
        </ul>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Demo & Comparison">
        <p className="mb-4">
          The concept below demonstrates how a stronger structure, clearer
          storytelling, and more intentional visual system can make NextIF feel
          more credible, modern, and globally positioned.
        </p>

        <p className="mb-6">
          <a
            href="https://nextif-redesign.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline dark:text-blue-400"
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
          poster="/images/nextif/after-homepage.png"
          src="/videos/nextif-demo.webm"
          className="mb-4 w-full rounded-lg"
        />

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <Image
              src="/images/nextif-preview-before.png"
              alt="NextIF homepage before redesign"
              width={400}
              height={300}
              className="w-full rounded-lg"
            />
            <p className="mt-1 text-center text-base">Before</p>
          </div>

          <div>
            <Image
              src="/images/nextif-preview-after.png"
              alt="NextIF homepage after redesign"
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
          This work was created as a{" "}
          <strong>proposed redesign and independent UX/UI concept</strong> to
          explore how NextIF could better communicate its mission, ecosystem,
          and credibility online. It is not an official implementation, but a
          strategic design exercise built to demonstrate how the organization’s
          digital experience could be improved.
        </p>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Key Takeaways" className="mb-0">
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Strengthened my ability to identify gaps between organizational
            value and digital presentation.
          </li>
          <li>
            Improved my approach to designing trust systems through speakers,
            partners, impact data, and structured content flow.
          </li>
          <li>
            Practiced turning a homepage into a guided ecosystem journey rather
            than a collection of disconnected sections.
          </li>
          <li>
            Reinforced the importance of responsive navigation and mobile-first
            polish in modern landing pages.
          </li>
        </ul>
      </CaseStudySection>
    </main>
  );
}
