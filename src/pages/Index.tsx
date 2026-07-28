import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import InteractiveTVCSimulator from "@/components/InteractiveTVCSimulator";
import Awards from "@/components/Awards";
import Certifications from "@/components/Certifications";
import PersonalSection from "@/components/PersonalSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#080C14] text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      <Header />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <section id="tvc-simulator" className="section-container">
        <span className="section-subtitle">B.SC. THESIS — DIGITAL TWIN SIMULATION</span>
        <h2 className="section-title mb-2">TVC Digital Twin Simulator</h2>
        <p className="text-slate-300 mb-8 max-w-2xl text-sm sm:text-base leading-relaxed">
          Live PID flight controller simulation for Project NEAL's Thrust Vector Control system.
          Tune Kp, Ki, Kd gains and setpoint in real-time and observe the pitch attitude stabilization response.
        </p>
        <InteractiveTVCSimulator />
      </section>
      <Awards />
      <Certifications />
      <PersonalSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
