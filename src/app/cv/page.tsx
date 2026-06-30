"use client";

import { useEffect, useRef } from "react";

export default function CV() {
  const cvRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cvRef.current) return;

    const generatePDF = async () => {
      const html2pdf = (await import("html2pdf.js")).default;

      html2pdf()
        .set({
          margin: 0.5,
          filename: "Abdullahi-Mohammed-CV.pdf",
          html2canvas: {
            scale: 2,
            backgroundColor: "#ffffff",
            useCORS: true,
          },
          jsPDF: {
            unit: "in",
            format: "a4",
            orientation: "portrait",
          },
        })
        .from(cvRef.current!)
        .save();
    };

    setTimeout(generatePDF, 500);
  }, []);

  return (
    <div className="min-h-screen max-w-6xl mx-auto mt-20 px-6 py-12 bg-gray-50 dark:bg-gray-900">
      <div
        ref={cvRef}
        className="bg-white rounded-3xl shadow-2xl p-12"
        style={{ color: "#111827" }}
      >
        {/* Header */}
        <div className="border-b border-gray-200 pb-6 mb-8">
          <h1 style={{ fontSize: "2.5rem", fontWeight: 700 }}>
            Abdullahi Mohammed
          </h1>

          <p
            style={{
              fontSize: "1.125rem",
              color: "#6B7280",
              marginTop: "0.5rem",
            }}
          >
            Web Developer | WordPress & React Developer
          </p>

          <div
            style={{
              marginTop: "1rem",
              fontSize: "0.875rem",
              color: "#6B7280",
            }}
          >
            <p>
              <a href="tel:+2349074057222" className="underline">
                +234 90 7405 7222
              </a>
            </p>

            <p>
              <a href="mailto:audumohammed211@gmail.com" className="underline">
                audumohammed211@gmail.com
              </a>
            </p>

            <p>
              <a
                href="https://portfolio-v2-khaki-gamma.vercel.app"
                className="underline"
              >
                portfolio-v2-khaki-gamma.vercel.app
              </a>
            </p>

            <p>
              <a href="https://github.com/abdull65" className="underline">
                github.com/abdull65
              </a>
            </p>
          </div>
        </div>

        {/* Summary */}
        <section className="mb-10">
          <h2
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              color: "#9CA3AF",
              marginBottom: "0.75rem",
            }}
          >
            Professional Summary
          </h2>

          <p
            style={{
              fontSize: "0.875rem",
              lineHeight: 1.5,
              color: "#374151",
            }}
          >
            Web Developer with 3+ years of experience building responsive
            websites and modern web applications using WordPress, WooCommerce,
            React, Next.js, and TypeScript. Experienced in collaborating with
            cross-functional teams to deliver production-ready products while
            also managing client websites, improving performance, integrating
            third-party services, and creating mobile-first user experiences.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-10">
          <h2
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              color: "#9CA3AF",
              marginBottom: "1rem",
            }}
          >
            Core Skills
          </h2>

          <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
            <div>
              <h3
                style={{
                  fontWeight: 600,
                  color: "#111827",
                  marginBottom: "0.5rem",
                }}
              >
                Website Development
              </h3>

              <ul
                style={{
                  listStyleType: "disc",
                  marginLeft: "1rem",
                  color: "#374151",
                  fontSize: "0.875rem",
                  lineHeight: 1.5,
                }}
              >
                <li>Responsive Website Design</li>
                <li>Website Maintenance & Bug Fixes</li>
                <li>Speed & Performance Optimization</li>
                <li>SEO Basics</li>
                <li>Mobile-First Development</li>
                <li>Third-party Plugin Integration</li>
                <li>Analytics / Meta Pixel Setup</li>
              </ul>
            </div>

            <div>
              <h3
                style={{
                  fontWeight: 600,
                  color: "#111827",
                  marginBottom: "0.5rem",
                }}
              >
                WordPress & eCommerce
              </h3>

              <ul
                style={{
                  listStyleType: "disc",
                  marginLeft: "1rem",
                  color: "#374151",
                  fontSize: "0.875rem",
                  lineHeight: 1.5,
                }}
              >
                <li>WordPress Theme Customization</li>
                <li>Elementor Page Building</li>
                <li>WooCommerce Setup & Management</li>
                <li>Product Upload & Management</li>
                <li>Payment Gateway Integration</li>
                <li>cPanel & Hosting Management</li>
              </ul>
            </div>

            <div>
              <h3
                style={{
                  fontWeight: 600,
                  color: "#111827",
                  marginBottom: "0.5rem",
                }}
              >
                Frontend Development
              </h3>

              <ul
                style={{
                  listStyleType: "disc",
                  marginLeft: "1rem",
                  color: "#374151",
                  fontSize: "0.875rem",
                  lineHeight: 1.5,
                }}
              >
                <li>HTML5 & CSS3</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>Git & GitHub</li>
                <li>API Integration</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="md:mb-20">
          <h2
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              color: "#9CA3AF",
              marginBottom: "1rem",
            }}
          >
            Professional Experience
          </h2>

          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ fontWeight: 600, color: "#111827" }}>
              Frontend Developer — 3Deez Global Investment
            </h3>

            <span style={{ fontSize: "0.95rem", color: "#6B7280" }}>
              2026 – Present
            </span>

            <ul
              style={{
                fontSize: "0.875rem",
                color: "#374151",
                marginTop: "0.5rem",
                listStyleType: "disc",
                marginLeft: "1rem",
                lineHeight: 1.5,
              }}
            >
              <li>
                Collaborate with a cross-functional team to build and maintain
                modern web applications using React, Next.js, and TypeScript.
              </li>
              <li>
                Develop responsive, reusable UI components following modern
                frontend best practices.
              </li>
              <li>
                Consume REST APIs and integrate backend services using React
                Query.
              </li>
              <li>
                Participate in code reviews, bug fixes, feature implementation,
                and sprint-based development.
              </li>
              {/* <li>
                Contribute to multiple internal products, including the AYKRE
                agricultural management platform.
              </li> */}
              <li>
                Work closely with designers and backend engineers to deliver
                production-ready features.
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ fontWeight: 600, color: "#111827" }}>
              Freelance Web Developer — Bomes Digital
            </h3>

            <span style={{ fontSize: "0.95rem", color: "#6B7280" }}>
              2025 – Present
            </span>

            <ul
              style={{
                fontSize: "0.875rem",
                color: "#374151",
                marginTop: "0.5rem",
                listStyleType: "disc",
                marginLeft: "1rem",
                lineHeight: 1.5,
              }}
            >
              <li>
                Build live client websites and web applications using Next.js,
                Prisma, and Supabase.
              </li>
              <li>
                Worked on client-facing projects including Premald Homes and
                Diaspora Creatives.
              </li>
              <li>
                Implement responsive frontend pages, database-backed features,
                and website updates.
              </li>
              <li>
                Handle UI implementation, bug fixes, deployment support, and
                production-ready website improvements.
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ fontWeight: 600, color: "#111827" }}>
              Website Manager — Limas Luxury Abayas
            </h3>

            <span style={{ fontSize: "0.95rem", color: "#6B7280" }}>
              2023 – Present
            </span>

            <p
              style={{
                fontSize: "0.95rem",
                textDecoration: "underline",
                color: "#6B7280",
                marginTop: "0.25rem",
              }}
            >
              <a href="https://limas-abayas.com">limas-abayas.com</a>
            </p>

            <ul
              style={{
                fontSize: "0.875rem",
                color: "#374151",
                marginTop: "0.5rem",
                listStyleType: "disc",
                marginLeft: "1rem",
                lineHeight: 1.5,
              }}
            >
              <li>
                Manage and maintain the company’s WordPress/WooCommerce website.
              </li>
              <li>
                Customize pages, product layouts, and website sections to
                improve user experience.
              </li>
              <li>
                Upload and manage ecommerce products, categories, images, and
                descriptions.
              </li>
              <li>
                Configure plugins, payment setup, Meta Pixel, and other
                third-party tools.
              </li>
              <li>
                Improve mobile responsiveness, website speed, and basic SEO
                structure.
              </li>
              <li>
                Handle hosting, cPanel, email, and domain-related website
                support.
              </li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="mt-10 mb-10">
          <h2
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              color: "#9CA3AF",
              marginBottom: "1rem",
            }}
          >
            Selected Projects
          </h2>

          {/* <div style={{ marginBottom: "1rem" }}>
            <h3 style={{ fontWeight: 600, color: "#111827" }}>
              AYKRE Agricultural Management Platform
            </h3>

            <p
              style={{
                fontSize: "0.875rem",
                color: "#6B7280",
                marginBottom: "0.25rem",
              }}
            >
              React • Next.js • TypeScript • React Query
            </p>

            <ul
              style={{
                fontSize: "0.875rem",
                color: "#374151",
                listStyleType: "disc",
                marginLeft: "1rem",
                lineHeight: 1.5,
              }}
            >
              <li>
                Developed responsive frontend interfaces for an enterprise
                agricultural management platform.
              </li>
              <li>
                Built reusable dashboard components, forms, tables, and API
                integrations.
              </li>
              <li>
                Collaborated with designers and backend developers in a
                team-based development environment.
              </li>
            </ul>
          </div> */}

          {/* <div style={{ marginBottom: "1rem" }}>
            <h3 style={{ fontWeight: 600, color: "#111827" }}>
              Luxora Hospitality Platform
            </h3>

            <p
              style={{
                fontSize: "0.875rem",
                color: "#6B7280",
                marginBottom: "0.25rem",
              }}
            >
              Next.js • React • TypeScript • Prisma
            </p>

            <ul
              style={{
                fontSize: "0.875rem",
                color: "#374151",
                listStyleType: "disc",
                marginLeft: "1rem",
                lineHeight: 1.5,
              }}
            >
              <li>
                Designed and developed a luxury hotel booking platform and admin
                dashboard.
              </li>
              <li>
                Built reservation, room management, user management, and
                dashboard modules.
              </li>
              <li>
                Integrated APIs and optimized responsive layouts across public
                and dashboard pages.
              </li>
            </ul>
          </div> */}

          <div style={{ marginBottom: "1rem" }}>
            <h3 style={{ fontWeight: 600, color: "#111827" }}>
              Premald Homes & Diaspora Creatives
            </h3>

            <p
              style={{
                fontSize: "0.875rem",
                color: "#6B7280",
                marginBottom: "0.25rem",
              }}
            >
              Next.js • Prisma • Supabase • Freelance Project under Bomes
              Digital
            </p>

            <ul
              style={{
                fontSize: "0.875rem",
                color: "#374151",
                listStyleType: "disc",
                marginLeft: "1rem",
                lineHeight: 1.5,
              }}
            >
              <li>
                Built and deployed live client websites using Next.js, Prisma,
                and Supabase.
              </li>
              <li>
                Developed responsive frontend pages and integrated
                database-backed features.
              </li>
              <li>
                Worked as a freelance developer under Bomes Digital on
                client-facing projects.
              </li>
              <li>
                Handled UI implementation, bug fixes, and production-ready
                website updates.
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <h3 style={{ fontWeight: 600, color: "#111827" }}>
              Limas Luxury Abayas
            </h3>

            <p
              style={{
                fontSize: "0.875rem",
                color: "#6B7280",
                marginBottom: "0.25rem",
              }}
            >
              WordPress • WooCommerce • Elementor
            </p>

            <p
              style={{
                fontSize: "0.95rem",
                textDecoration: "underline",
                color: "#6B7280",
                marginBottom: "0.25rem",
              }}
            >
              <a href="https://limas-abayas.com">limas-abayas.com</a>
            </p>

            <ul
              style={{
                fontSize: "0.875rem",
                color: "#374151",
                listStyleType: "disc",
                marginLeft: "1rem",
                lineHeight: 1.5,
              }}
            >
              <li>
                Managed the ecommerce website and optimized the customer
                shopping experience.
              </li>
              <li>
                Integrated payment solutions and third-party marketing tools.
              </li>
              <li>
                Maintained product uploads, category structure, and website
                updates.
              </li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section>
          <h2
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              color: "#9CA3AF",
              marginBottom: "0.5rem",
            }}
          >
            Education
          </h2>

          <p style={{ fontSize: "0.875rem", color: "#374151" }}>
            Bachelor of Technology — Building Engineering
            <br />
            Federal University of Technology, Minna
          </p>
        </section>
      </div>
    </div>
  );
}