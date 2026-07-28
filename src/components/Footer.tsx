import React from "react";
import { ArrowUp, Github, Linkedin, Mail, Rocket } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-white py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <img
                src="/lovable-uploads/5e9aa584-e39f-426c-b9fe-dc65ce0f79da.png"
                alt="Project NEAL Logo"
                className="h-6 w-auto object-contain bg-white rounded px-2 py-0.5"
              />
              <h3 className="text-xl font-black text-white">
                Lian Mollick <span className="text-orange-500">Nehal</span>
              </h3>
            </div>
            <p className="text-xs font-mono text-slate-400">
              Rocketry Avionics · Thrust Vector Control · GNC Engineer
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-6 font-mono text-xs text-slate-400">
            <a href="#about" className="hover:text-orange-500 transition-colors">About</a>
            <a href="#projects" className="hover:text-orange-500 transition-colors">Projects</a>
            <a href="#tvc-simulator" className="hover:text-orange-500 transition-colors">TVC Sim</a>
            <a href="#experience" className="hover:text-orange-500 transition-colors">Experience</a>
            <a href="#awards" className="hover:text-orange-500 transition-colors">Awards</a>
            <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-400">
          <p>
            © {currentYear} Lian Mollick Nehal. Built with React, Vite & Tailwind CSS.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-orange-500 hover:text-orange-400 font-bold transition-colors"
          >
            TOP <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
