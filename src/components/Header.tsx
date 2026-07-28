import React, { useState } from "react";
import { Mail, Phone, Linkedin, Github, ArrowRight, Rocket, Award, BookOpen, Briefcase, ExternalLink, ChevronDown, Cpu, Satellite, Star, Zap, Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#tvc-simulator", label: "TVC Sim" },
    { href: "#awards", label: "Awards" },
    { href: "#wall-of-fame", label: "Honors" },
    { href: "#certifications", label: "Certs" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            {/* Project NEAL SVG Logo */}
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-portfolio-navy to-portfolio-teal flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5">
                {/* Stylized N for NEAL with rocket accent */}
                <path d="M4 26V6l10 14V6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 6h6" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M20 6v8" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M20 14l-3 5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                {/* Rocket tip */}
                <circle cx="26" cy="8" r="3" fill="#EC6C4C" />
                <path d="M26 11v9" stroke="#EC6C4C" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/>
              </svg>
            </div>
            <div>
              <span className="font-black text-slate-900 text-sm tracking-tight block leading-none">Lian Mollick Nehal</span>
              <span className="text-[10px] font-semibold text-portfolio-accent uppercase tracking-widest">EEE · TVC · GNC</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map(l => (
              <a key={l.href} href={l.href} className="nav-link px-3 py-1.5 rounded-lg hover:bg-slate-50">
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="https://linkedin.com/in/lianmollick" target="_blank" rel="noreferrer"
              className="text-slate-500 hover:text-portfolio-teal transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://github.com/MevrickNeal" target="_blank" rel="noreferrer"
              className="text-slate-500 hover:text-slate-900 transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="mailto:lianmollik@gmail.com"
              className="flex items-center gap-1.5 bg-portfolio-navy hover:bg-portfolio-dark-accent text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors">
              <Mail className="w-3.5 h-3.5" />
              Contact
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-50">
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                className="text-slate-700 hover:text-portfolio-accent font-medium py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors">
                {l.label}
              </a>
            ))}
            <a href="mailto:lianmollik@gmail.com"
              className="mt-2 flex items-center justify-center gap-2 bg-portfolio-navy text-white font-semibold py-3 px-4 rounded-xl text-sm">
              <Mail className="w-4 h-4" />
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
