import React, { useState } from "react";
import { FileCheck, ExternalLink, ZoomIn, BookOpen, Award, Cpu, Globe } from "lucide-react";
import LightboxModal from "./LightboxModal";

const certifications = [
  {
    title: "Semiconductor Fabrication 101",
    issuer: "Purdue University Texas",
    sponsor: "Intel Sponsored",
    year: "2023",
    category: "Hardware",
    icon: Cpu,
    img: "/lovable-uploads/603836fa-feeb-4a00-b7fd-0bd5609a9888.png",
    link: "https://drive.google.com/drive/folders/1cE9iPPTE2vz2R7t6SNu08gT15XpSTB5m",
  },
  {
    title: "GE Aerospace Job Simulation",
    issuer: "GE Aerospace via Forage",
    sponsor: "Electrical Engineering",
    year: "2025",
    category: "Industry",
    icon: Award,
    img: "/lovable-uploads/Screenshot 2025-02-14 at 5.19.49 PM.png",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ay2tsYxaTif7Nt6z7/ntFrRvKxX5AmquXRr_ay2tsYxaTif7Nt6z7_RAZA8nua5RLumyJpu_1740978804858_completion_certificate.pdf",
  },
  {
    title: "NASA TOPS Open Science",
    issuer: "NASA Transform to Open Science",
    sponsor: "Open Science Certification",
    year: "2023",
    category: "Space",
    icon: Globe,
    img: "/lovable-uploads/Screenshot 2025-02-14 at 5.26.15 PM.png",
    link: "https://drive.google.com/drive/folders/1cE9iPPTE2vz2R7t6SNu08gT15XpSTB5m",
  },
  {
    title: "Industrial Technology — EEE",
    issuer: "Training Institute for Chemical Industries (TICI)",
    sponsor: "May 2025",
    year: "2025",
    category: "Industrial",
    icon: FileCheck,
    img: "/lovable-uploads/471479605_122171552672048239_7736058077222623760_n.jpg",
    link: "https://drive.google.com/drive/folders/1cE9iPPTE2vz2R7t6SNu08gT15XpSTB5m",
  },
  {
    title: "IASC Asteroid Search Campaign",
    issuer: "International Astronomical Search Collaboration",
    sponsor: "NASA Supported — Team MeteoriteX",
    year: "2023",
    category: "Space",
    icon: Globe,
    img: "/lovable-uploads/galactic problem solver.jpeg",
    link: "https://drive.google.com/drive/folders/1cE9iPPTE2vz2R7t6SNu08gT15XpSTB5m",
  },
  {
    title: "7 Days Industrial Training on Analog Design",
    issuer: "ULKASEMI PVT Limited",
    sponsor: "IC Mask & Mixed-Signal Layout",
    year: "2024",
    category: "Hardware",
    icon: Cpu,
    img: "/lovable-uploads/34415cf9-ffa7-445e-ac9e-d7c51cbbc77c.png",
    link: "https://drive.google.com/file/d/1I2O84TAIzwUc64hMu_hTgsM5hklZjBLS/view?usp=sharing",
  },
];

export default function Certifications() {
  const [lightbox, setLightbox] = useState<{ isOpen: boolean; src: string; title: string }>({
    isOpen: false, src: "", title: ""
  });
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...Array.from(new Set(certifications.map(c => c.category)))];
  const filtered = filter === "All" ? certifications : certifications.filter(c => c.category === filter);

  return (
    <>
      <LightboxModal
        isOpen={lightbox.isOpen}
        onClose={() => setLightbox(prev => ({ ...prev, isOpen: false }))}
        imageSrc={lightbox.src}
        title={lightbox.title}
      />

      <section id="certifications" className="section-container">
        <span className="section-subtitle">VERIFIED CREDENTIALS</span>
        <h2 className="section-title mb-3">Certifications</h2>
        <p className="text-slate-600 mb-6 max-w-xl">
          Professional qualifications from NASA, Intel/Purdue, GE Aerospace, and ULKASEMI.
        </p>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold transition-all ${
                filter === cat
                  ? "bg-slate-950 text-white shadow-md"
                  : "bg-white text-slate-700 border border-slate-200 hover:border-orange-500 hover:text-orange-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <div key={i} className="aero-card flex flex-col justify-between">
                <div>
                  <div
                    className="relative cursor-zoom-in group rounded-xl overflow-hidden border border-slate-200 mb-4 bg-slate-50 shadow-sm"
                    onClick={() => setLightbox({ isOpen: true, src: cert.img, title: cert.title })}
                  >
                    <img
                      src={cert.img}
                      alt={cert.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <ZoomIn className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center flex-shrink-0 text-orange-600">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-950 text-sm leading-tight">{cert.title}</h3>
                      <p className="text-xs font-mono font-bold text-orange-600 mt-0.5">{cert.issuer}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500">{cert.sponsor}</span>
                  <a href={cert.link} target="_blank" rel="noreferrer"
                    className="flex items-center gap-1 text-xs font-mono font-bold text-orange-600 hover:text-red-600">
                    VERIFY <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://drive.google.com/drive/folders/1cE9iPPTE2vz2R7t6SNu08gT15XpSTB5m"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-slate-950 hover:bg-orange-600 text-white font-mono text-xs font-bold px-6 py-3.5 rounded-full transition-all shadow-xl"
          >
            <ExternalLink className="w-4 h-4 text-orange-500" />
            VIEW ALL CREDENTIALS ON GOOGLE DRIVE
          </a>
        </div>
      </section>
    </>
  );
}
