import React, { useState } from "react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import EngineeringProcessWidget from "@/components/EngineeringProcessWidget";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Awards from "@/components/Awards";
import PersonalSection from "@/components/PersonalSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <>
      <Preloader onComplete={() => setPreloaderDone(true)} />

      <div style={{ opacity: preloaderDone ? 1 : 0, transition: "opacity 0.5s ease" }}>
        <Navbar />
        <Hero />
        <Marquee />
        <About />
        <EngineeringProcessWidget />
        <Projects />
        <Research />
        <Skills />
        <Experience />
        <Awards />
        <PersonalSection />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
