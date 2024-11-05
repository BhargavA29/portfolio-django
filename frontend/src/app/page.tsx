import Image from "next/image";
import Navbar from "@/components/Narbar"
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import DraggableIcons from "@/components/DraggableIcons";



export default function Home() {
  return (
    <main>
      <DraggableIcons />
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
