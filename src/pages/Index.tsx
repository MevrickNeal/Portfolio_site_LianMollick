
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Awards from "@/components/Awards";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Earth3D from "@/components/Earth3D";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Earth3D />
      <Projects />
      <Awards />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
