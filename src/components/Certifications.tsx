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
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
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
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
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
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
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
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
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
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
    img: "/lovable-uploads/galactic problem solver.jpeg",
    link: "https://drive.google.com/drive/folders/1cE9iPPTE2vz2R7t6SNu08gT15XpSTB5m",
  },
  {
    title: "Udemy Professional Course",
    issuer: "Udemy",
    sponsor: "Engineering Program",
    year: "2024",
    category: "Online",
    icon: BookOpen,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    img: "/lovable-uploads/428710431_3357967617837500_4496798535136347615_n.jpg",
    link: "https://drive.google.com/drive/folders/1cE9iPPTE2vz2R7t6SNu08gT15XpSTB5m",
  },
];

const categoryColors: Record<string, string> = {
  "Hardware": "bg-blue-100 text-blue-700",
  "Industry": "bg-amber-100 text-amber-700",
  "Space": "bg-indigo-100 text-indigo-700",
  "Industrial": "bg-emerald-100 text-emerald-700",
  "Online": "bg-purple-100 text-purple-700",
};

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

      <section id="certifications" className="section-container bg-slate-50/60">
        <span className="section-subtitle">Training & Certified Courses</span>
        <h2 className="section-title mb-2">Certifications</h2>
        <p className="text-slate-500 mb-6 max-w-xl">
          Verified credentials from NASA, Purdue University, GE Aerospace, and international science programs.
        </p>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                filter === cat
                  ? "bg-portfolio-navy text-white border-portfolio-navy shadow-sm"
                  : "bg-white text-slate-600 border-slate-200 hover:border-portfolio-teal hover:text-portfolio-teal"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
          {filtered.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <div key={i}
                className="hover-card bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col animate-fade-in shadow-sm hover:shadow-xl">
                {/* Certificate image */}
                <div
                  className="relative cursor-zoom-in group"
                  onClick={() => cert.img && setLightbox({ isOpen: true, src: cert.img, title: cert.title })}
                >
                  <div className="h-40 bg-slate-100 overflow-hidden">
                    {cert.img ? (
                      <img
                        src={cert.img}
                        alt={cert.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className={`w-full h-full flex items-center justify-center ${cert.iconBg}`}>
                        <Icon className={`w-12 h-12 ${cert.iconColor} opacity-40`} />
                      </div>
                    )}
                  </div>
                  {cert.img && (
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                      <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  )}
                  <div className="absolute top-2 right-2">
                    <span className={`badge-pill ${categoryColors[cert.category] || "bg-slate-100 text-slate-600"} text-[10px]`}>
                      {cert.category}
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-4 flex flex-col gap-2 flex-1">
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-lg ${cert.iconBg} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-4 h-4 ${cert.iconColor}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-slate-900 text-sm leading-tight">{cert.title}</h3>
                      <p className="text-xs text-slate-500 mt-0.5">{cert.issuer}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-1">
                    <span className="text-[11px] text-slate-400 font-medium">{cert.sponsor}</span>
                    <span className="badge-pill bg-slate-100 text-slate-600 text-[10px]">{cert.year}</span>
                  </div>

                  <a href={cert.link} target="_blank" rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-portfolio-teal hover:text-portfolio-accent transition-colors mt-1">
                    <ExternalLink className="w-3.5 h-3.5" />
                    View Certificate
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* View all link */}
        <div className="text-center mt-10">
          <a
            href="https://drive.google.com/drive/folders/1cE9iPPTE2vz2R7t6SNu08gT15XpSTB5m"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-portfolio-navy hover:bg-portfolio-dark-accent text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all hover:-translate-y-0.5 shadow-md"
          >
            <ExternalLink className="w-4 h-4" />
            View All Certificates on Google Drive
          </a>
        </div>
      </section>
    </>
  );
}
