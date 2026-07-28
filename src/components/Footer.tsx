import React from "react";
import { ArrowUp, Github, Linkedin, Mail, Rocket } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Rocket className="w-5 h-5 text-cyan-400" />
              <h3 className="text-xl font-extrabold text-white">
                Lian Mollick <span className="text-cyan-400">Nehal</span>
              </h3>
            </div>
            <p className="text-xs font-mono text-slate-400">
              Rocketry Avionics · Thrust Vector Control · GNC Engineer
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-6 font-mono text-xs text-slate-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#tvc-simulator" className="hover:text-cyan-400 transition-colors">TVC Sim</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#awards" className="hover:text-cyan-400 transition-colors">Awards</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-400">
          <p>
            © {currentYear} Lian Mollick Nehal. Built with React, Vite & Tailwind CSS.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-bold transition-colors"
          >
            TOP <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
