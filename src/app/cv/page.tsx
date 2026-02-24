"use client";
import { useRef, useEffect } from "react";
import html2pdf from "html2pdf.js";

export default function CV() {
  const cvRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cvRef.current) return;

    // Small delay to ensure DOM fully renders
    setTimeout(() => {
      html2pdf()
        .set({
          margin: 0.5,
          filename: "Abdullahi-Mohammed.pdf",
          html2canvas: { scale: 2, backgroundColor: "#ffffff", useCORS: true },
          jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
        })
        .from(cvRef.current!)
        .save();
    }, 500);
  }, []);

  return (
    <div className="min-h-screen max-w-6xl mx-auto mt-20 px-6 py-12 bg-gray-50 dark:bg-gray-900">
      {/* Static PDF-friendly container */}
      <div
        ref={cvRef}
        className="bg-white rounded-3xl shadow-2xl p-12"
        style={{ color: "#111827" /* Tailwind gray-900 */ }}
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
            Frontend Developer & WordPress Designer
          </p>
          <div
            style={{
              marginTop: "1rem",
              fontSize: "0.875rem",
              color: "#6B7280",
            }}
          >
            <p>
              <a href="tel:+2349074057222" className="underline">+234 90 7405 7222</a>
            </p>
            <p>
              <a href="mailto:audumohammed211@gmail.com" className="underline">
                audumohammed211@gmail.com
              </a>
            </p>
            <p>
              <a href="https://portfolio-v2-khaki-gamma.vercel.app" className="underline">
                portfolio-v2-khaki-gamma.vercel.app
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
            style={{ fontSize: "0.875rem", lineHeight: 1.5, color: "#374151" }}
          >
            Frontend Developer & WordPress Engineer with 3+ years of experience
            building high-performing websites and WooCommerce stores. Strong
            foundation in React, Next.js, HTML, CSS, and JavaScript, enabling
            advanced customization beyond visual builders. Experienced in
            optimizing performance, improving UI/UX, and delivering
            production-ready digital solutions.
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
                <li>Elementor (Advanced Page Building)</li>
                <li>WooCommerce Setup & Optimization</li>
                <li>Plugin Integration & Configuration</li>
                <li>Payment Gateway Integration</li>
                <li>Website Speed Optimization</li>
                <li>Basic SEO Implementation</li>
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
                <li>JavaScript (ES6+)</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Responsive & Mobile-First Design</li>
                <li>Git & GitHub</li>
                <li>cPanel & Hosting Management</li>
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
              Website Manager – Limas Luxury Abayas
            </h3>
            <span style={{ fontSize: "0.95rem",
             color: "#6B7280" }}>
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
              <a href="https://limas-abayas.com">
                limas-abayas.com
                </a>
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
              <li>Designed and maintained the company WordPress website.</li>
              <li>Customized themes and improved UI/UX layout.</li>
              <li>Managed WooCommerce products and updates.</li>
              <li>Optimized website performance and responsiveness.</li>
              <li>Handled hosting configuration and domain management.</li>
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
            Selected WordPress Projects
          </h2>
          <div style={{ marginBottom: "1rem" }}>
            <h3 style={{ fontWeight: 600, color: "#111827" }}>
              Bomes Digitals
            </h3>
            <p
              style={{
                fontSize: "0.95rem",
                textDecoration: "underline",
                color: "#6B7280",
                marginBottom: "0.25rem",
              }}
            >
              <a href="https://bomesdigitals.com">
                bomesdigitals.com
                </a>
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
              <li>Led full website design and layout implementation.</li>
              <li>Built with WordPress and Elementor.</li>
              <li>Extensively customized prebuilt theme using custom CSS.</li>
              <li>Ensured full responsiveness across all devices.</li>
              <li>Optimized page speed and performance.</li>
            </ul>
          </div>

          <div>
            <h3 style={{ fontWeight: 600, color: "#111827" }}>
              Blessed Prinx Cosmetics (WooCommerce)
            </h3>
            <p
              style={{
                fontSize: "0.95rem",
                textDecoration: "underline",
                color: "#6B7280",
                marginBottom: "0.25rem",
              }}
            >
              <a href="https://blessedprinxcosmetics.com">
                blessedprinxcosmetics.com
                </a>
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
              <li>Developed WooCommerce online store.</li>
              <li>Customized product pages and checkout flow.</li>
              <li>Integrated payment gateway and shipping configuration.</li>
              <li>Applied custom HTML/CSS modifications.</li>
              <li>Optimized mobile shopping experience.</li>
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
            Bachelor of Technology – Building Engineering
            <br />
            Federal University of Technology, Minna
          </p>
        </section>
      </div>
    </div>
  );
}
