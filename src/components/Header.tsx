import React, { useState } from "react";
import { Mail, Linkedin, Github, Menu, X, Rocket, ArrowUpRight } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#tvc-simulator", label: "TVC Sim" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#awards", label: "Awards" },
    { href: "#personal", label: "Growth" },
  ];

  return (
    <div className="sticky top-4 z-50 px-4 max-w-6xl mx-auto">
      <header className="bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-xl shadow-slate-200/50 rounded-full px-5 py-2.5 transition-all">
        <div className="flex items-center justify-between">
          
          {/* Official Project NEAL PNG Logo - Floating seamlessly on whitish background */}
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src="/lovable-uploads/5e9aa584-e39f-426c-b9fe-dc65ce0f79da.png"
              alt="Project NEAL TVC & Guidance"
              className="h-6 sm:h-7 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="hidden sm:block border-l border-slate-200 pl-3">
              <span className="font-black text-slate-950 text-sm tracking-tight block leading-none">
                Lian Mollick Nehal
              </span>
              <span className="text-[9px] font-mono font-extrabold text-orange-600 tracking-widest uppercase block mt-0.5">
                EEE · TVC · GNC
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

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a href="https://linkedin.com/in/lianmollick" target="_blank" rel="noreferrer"
              className="text-slate-500 hover:text-orange-600 transition-colors p-1.5 rounded-full hover:bg-slate-100">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://github.com/MevrickNeal" target="_blank" rel="noreferrer"
              className="text-slate-500 hover:text-slate-950 transition-colors p-1.5 rounded-full hover:bg-slate-100">
              <Github className="w-4 h-4" />
            </a>
            <a href="#contact"
              className="flex items-center gap-1.5 bg-slate-950 hover:bg-orange-600 text-white font-mono text-xs font-bold px-4 py-2 rounded-full transition-all shadow-md hover:shadow-orange-500/20">
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 rounded-full text-slate-700 hover:bg-slate-100">
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden mt-2 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-3xl p-5 shadow-2xl animate-fade-in">
          <div className="flex flex-col gap-3">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                className="text-slate-700 hover:text-orange-600 font-mono text-xs uppercase tracking-wider py-2 px-3 rounded-xl hover:bg-slate-50 font-bold">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 bg-orange-600 text-white font-mono text-xs font-bold py-3 px-4 rounded-full">
              <Mail className="w-4 h-4" />
              GET IN TOUCH
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
