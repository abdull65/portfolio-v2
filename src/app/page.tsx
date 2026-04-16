import Hero from "@/components/Hero";
import About from "@/components/AboutMe";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Services />
      <Portfolio />
      <Contact />
    </>
  );
}
