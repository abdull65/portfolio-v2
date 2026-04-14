"use client";

import Image from "next/image";
import { CaseStudyDivider } from "@/components/case-study/CaseStudyDivider";
import { CaseStudyIntro } from "@/components/case-study/CaseStudyIntro";
import { CaseStudySection } from "@/components/case-study/CaseStudySection";

export default function PremaldHomesCaseStudy() {
  return (
    <main className="max-w-4xl mt-16 mx-auto px-4 py-16 text-gray-800 dark:text-gray-100">
      <CaseStudyIntro
        label="Case Study · Full-Stack Product Build / Production Deployment"
        title="Premald Homes"
        subtitle="Building a Scalable Serviced Apartment Platform with a Custom CMS"
        description="Premald Homes is a conversion-focused serviced apartment platform built to help users browse available properties easily and make fast, low-friction inquiries through WhatsApp."
        extra="What began as a property listing website evolved into a more complete product system with a CMS-powered data layer, a custom admin dashboard, and a mobile-first frontend designed for clarity, scalability, and easier content management."
      />

      <CaseStudyDivider />

      <CaseStudySection eyebrow="Overview">
        <div className="grid grid-cols-1 gap-6 text-sm sm:grid-cols-2">
          <div>
            <p className="mb-1 text-gray-500 dark:text-gray-400">Role</p>
            <p>Product Designer / Frontend Developer</p>
          </div>
          <div>
            <p className="mb-1 text-gray-500 dark:text-gray-400">
              Project Type
            </p>
            <p>Serviced Apartment Platform</p>
          </div>
          <div>
            <p className="mb-1 text-gray-500 dark:text-gray-400">Scope</p>
            <p>
              Frontend architecture, CMS integration, admin dashboard,
              responsive UX, inquiry flow, deployment
            </p>
          </div>
          <div>
            <p className="mb-1 text-gray-500 dark:text-gray-400">Outcome</p>
            <p>
              A production-ready listing platform with scalable content
              management and conversion-focused user experience
            </p>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection eyebrow="Context">
        <Image
          src="/images/premald-homes-preview.png"
          alt="Premald Homes website preview"
          width={800}
          height={400}
          className="mb-4 h-auto w-full rounded-lg"
        />

        <p>
          Premald Homes was built as a modern serviced apartment platform
          designed to make property discovery simpler for users while making
          listing management easier for the business behind it.
        </p>

        <p className="mt-3">
          Instead of relying on a heavy external dashboard or a static marketing
          site, the goal was to create a system that could support both sides of
          the product experience: smooth browsing for users and efficient
          content control for administrators.
        </p>

        <p className="mt-3">
          This project gradually evolved from a standard frontend build into a
          more complete product system with dynamic listings, a custom admin
          workflow, and production-ready deployment.
        </p>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="The Challenge">
        <p className="mb-4">
          Many serviced apartment businesses face the same digital limitations:
          listings are difficult to manage, updates depend too heavily on
          developers, mobile browsing feels weak, and inquiry flows create
          unnecessary friction.
        </p>

        <p className="mb-4">
          Premald Homes needed a more scalable and business-friendly setup, one
          that could support dynamic content without sacrificing speed, clarity,
          or conversion.
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>
            No structured system for managing apartment listings efficiently
          </li>
          <li>Content updates risked depending on developer intervention</li>
          <li>Poor mobile experience could weaken browsing and inquiry flow</li>
          <li>A static site approach would not scale as the platform grew</li>
          <li>
            Inquiry paths needed to be simpler and more conversion-focused
          </li>
        </ul>

        <p className="mt-4">
          During development, real engineering challenges also surfaced,
          including CMS data inconsistencies, type mismatches across layers,
          image handling issues during prerendering, and limitations in query
          structure.
        </p>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="The Solution">
        <p className="mb-4">
          I designed and built a full-stack solution that combined a CMS-powered
          data layer, a lightweight custom admin dashboard, and a
          conversion-focused frontend optimized for both usability and long-term
          maintainability.
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Used Sanity as a flexible content backend for property data</li>
          <li>
            Built a custom mapping layer to clean and normalize CMS responses
            before rendering
          </li>
          <li>
            Created a lightweight admin dashboard for uploading, managing, and
            deleting listings
          </li>
          <li>
            Designed a responsive frontend optimized for browsing speed and
            clarity
          </li>
          <li>
            Integrated WhatsApp inquiries to reduce friction from discovery to
            action
          </li>
        </ul>

        <p className="mt-4">
          The result was a platform that works not just as a polished frontend
          experience, but as a practical operational tool for the business.
        </p>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Key Features">
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Dynamic Property Listings:</strong> property data fetched
            from Sanity, safely transformed for the UI, and rendered through
            slug-based routes
          </li>
          <li>
            <strong>Interactive Image Gallery:</strong> upgraded from a
            single-image approach to multi-image display with thumbnail
            switching and preview behavior
          </li>
          <li>
            <strong>Custom Admin CMS:</strong> secure admin access with
            validation, listing upload, gallery image support, and property
            management actions
          </li>
          <li>
            <strong>WhatsApp Inquiry Flow:</strong> dynamic pre-filled messages
            tied to each property to make inquiries faster and clearer
          </li>
          <li>
            <strong>Mobile-First UX:</strong> improved layout responsiveness,
            tap targets, navigation, and visual spacing across devices
          </li>
          <li>
            <strong>Scalable Architecture:</strong> reusable UI components,
            clean folder structure, and clear separation between server and
            client responsibilities
          </li>
        </ul>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Engineering Highlights">
        <p className="mb-4">
          One of the most important technical decisions in this project was
          introducing a dedicated data mapping layer instead of sending raw CMS
          data directly into the UI.
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Normalized data before rendering</li>
          <li>Handled optional and inconsistent CMS fields safely</li>
          <li>Built image URLs in a controlled way</li>
          <li>Reduced the chance of UI crashes caused by malformed content</li>
        </ul>

        <p className="mt-4 mb-4">
          This helped make the frontend more stable and maintainable, especially
          as content structure changed during development.
        </p>

        <p className="mb-4">
          I also solved several real-world implementation issues:
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Fixed GROQ alias errors by restructuring queries</li>
          <li>
            Handled image undefined crashes through defensive mapping and
            fallbacks
          </li>
          <li>
            Separated admin and public data models to avoid type mismatches
          </li>
          <li>
            Split query logic by use case to reduce inconsistencies in returned
            shapes
          </li>
        </ul>

        <p className="mt-4">
          Performance was also kept in focus through static rendering, image
          optimization, limited gallery payloads, and a lightweight component
          structure.
        </p>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Deployment & Production">
        <p className="mb-4">
          The project was deployed to production on Vercel and connected to a
          custom domain, turning the build from a working local product into a
          fully accessible live platform.
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Configured environment variables securely for production</li>
          <li>Connected and validated the custom domain setup</li>
          <li>Debugged incorrect DNS records and propagation-related issues</li>
          <li>Resolved SSL and domain accessibility concerns during launch</li>
        </ul>

        <p className="mt-4">
          These steps were important because they moved the project beyond
          implementation and into real delivery, where users could access the
          platform reliably.
        </p>

        <p className="mt-4">
          <a
            href="https://premaldhomes.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600 dark:text-blue-400"
          >
            Visit live site
          </a>
        </p>
        <div className="mt-6">
          <video
            controls
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Bridge Connect Africa website redesign demo"
            poster="/images/premald-homes-preview.png"
            src="/videos/premald-homes.webm"
            className="w-full rounded-lg mb-4"
          />
        </div>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Results / Impact">
        <p className="mb-4">
          The final product delivered value across operations, user experience,
          conversion, and long-term maintainability.
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>
            Non-technical users can now manage listings through a custom admin
            workflow
          </li>
          <li>
            Users can browse properties more clearly through a structured and
            responsive interface
          </li>
          <li>
            The image gallery improves property presentation and browsing
            confidence
          </li>
          <li>
            WhatsApp integration reduces friction between discovery and inquiry
          </li>
          <li>
            The codebase is better structured for future updates and platform
            growth
          </li>
          <li>
            The system was successfully deployed as a live, production-ready
            platform
          </li>
        </ul>
      </CaseStudySection>

      <CaseStudyDivider />

      <CaseStudySection title="Key Takeaways" className="mb-0">
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Strengthened my ability to build scalable systems instead of static
            pages
          </li>
          <li>
            Reinforced the importance of designing for conversion, not just
            aesthetics
          </li>
          <li>
            Improved my confidence in handling real-world production and
            deployment issues
          </li>
          <li>
            Deepened my product thinking across content management, user flow,
            and business usability
          </li>
        </ul>
      </CaseStudySection>
    </main>
  );
}
