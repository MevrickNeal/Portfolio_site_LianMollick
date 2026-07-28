import React, { useState } from "react";
import { Mail, Linkedin, Github, Menu, X, Rocket, Terminal } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#tvc-simulator", label: "TVC Sim" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#awards", label: "Awards" },
    { href: "#certifications", label: "Certs" },
    { href: "#personal", label: "Growth" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Official Project NEAL Logo + Branding */}
          <a href="#home" className="flex items-center gap-3 group">
            {/* White card wrapper for logo so black text & red fins pop sharply */}
            <div className="bg-white rounded-lg px-2.5 py-1 border border-slate-200 shadow-md group-hover:border-cyan-400 transition-colors flex items-center justify-center h-9">
              <img
                src="/lovable-uploads/5e9aa584-e39f-426c-b9fe-dc65ce0f79da.png"
                alt="Project NEAL TVC Logo"
                className="h-5 w-auto object-contain"
              />
            </div>
            <div>
              <span className="font-extrabold text-white text-sm tracking-tight block leading-none group-hover:text-cyan-400 transition-colors">
                Lian Mollick Nehal
              </span>
              <span className="text-[10px] font-mono font-bold text-cyan-400 tracking-widest uppercase mt-0.5 block">
                EEE · TVC · GNC ENGINEER
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {links.map(l => (
              <a key={l.href} href={l.href} className="nav-link">
                {l.label}
              </a>
            ))}
          </nav>

          {/* Social & Contact */}
          <div className="hidden sm:flex items-center gap-3">
            <a href="https://linkedin.com/in/lianmollick" target="_blank" rel="noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors p-1.5 rounded-lg hover:bg-slate-900">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://github.com/MevrickNeal" target="_blank" rel="noreferrer"
              className="text-slate-400 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-slate-900">
              <Github className="w-4 h-4" />
            </a>
            <a href="mailto:lianmollik@gmail.com"
              className="flex items-center gap-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-mono text-xs font-bold px-3.5 py-1.5 rounded-lg transition-all shadow-lg shadow-cyan-500/20">
              <Mail className="w-3.5 h-3.5" />
              CONTACT
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 rounded-lg text-slate-300 hover:bg-slate-900 border border-slate-800">
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-950 p-4">
          <div className="flex flex-col gap-3">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                className="text-slate-300 hover:text-cyan-400 font-mono text-xs uppercase tracking-wider py-2 px-3 rounded-lg hover:bg-slate-900">
                {l.label}
              </a>
            ))}
            <a href="mailto:lianmollik@gmail.com"
              className="mt-2 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-mono text-xs font-bold py-2.5 px-4 rounded-lg">
              <Mail className="w-4 h-4" />
              GET IN TOUCH
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
