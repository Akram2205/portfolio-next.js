'use client'
import Image from "next/image";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Services/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
    );
}
