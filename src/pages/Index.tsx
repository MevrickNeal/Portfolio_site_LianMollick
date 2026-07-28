import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import InteractiveTVCSimulator from "@/components/InteractiveTVCSimulator";
import Awards from "@/components/Awards";
import WallOfFame from "@/components/WallOfFame";
import Gallery from "@/components/Gallery";
import CoolStuffs from "@/components/CoolStuffs";
import Certifications from "@/components/Certifications";
import PersonalSection from "@/components/PersonalSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <span className="section-subtitle">B.Sc. Thesis — Digital Twin</span>
        <h2 className="section-title mb-2">TVC Digital Twin Simulator</h2>
        <p className="text-slate-500 mb-8 max-w-2xl">
          Live PID flight controller simulation for Project NEAL's Thrust Vector Control system.
          Tune Kp, Ki, Kd gains and setpoint in real-time and observe the attitude stabilization response.
        </p>
        <InteractiveTVCSimulator />
      </section>
      <Awards />
      <WallOfFame />
      <Gallery />
      <CoolStuffs />
      <Certifications />
      <PersonalSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
