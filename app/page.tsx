import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import AI from "@/components/AI";
import Devops from "@/components/Devops";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#05070d]">
      <Hero />

      <About />

      <Skills />

      <Projects />

      <Experience/>
      <AI/>
      <Devops/>
      <Contact/>

      <Footer/>
    </main>
  );
}