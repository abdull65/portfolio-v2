// src/app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/AboutMe";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
    </>
  );
}
