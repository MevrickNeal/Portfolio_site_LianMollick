import React, { useState } from "react";
import { Award, Trophy, Medal, Star, ZoomIn } from "lucide-react";
import LightboxModal from "./LightboxModal";

const spaceHonors = [
  {
    label: "NASA DART Mission",
    category: "NASA Recognition",
    categoryColor: "bg-blue-600",
    title: "Planetary Defender",
    desc: "Official recognition from NASA for contributions to the Double Asteroid Redirection Test (DART) mission — Earth's first planetary defense demonstration.",
    img: "/lovable-uploads/8c15f52e-3b9c-4253-8c71-1d62bf2ba066.png",
    border: "border-blue-300",
    bg: "from-blue-50 to-indigo-50",
  },
  {
    label: "NASA Space Apps",
    category: "Galactic Award",
    categoryColor: "bg-indigo-600",
    title: "Galactic Problem Solver",
    desc: "Awarded at NASA Space Apps Challenge 2023 for outstanding participation and problem-solving for Earth and space challenges as part of Team SolarSentinel.",
    img: "/lovable-uploads/2ab5c8fd-6973-401f-af1d-14d4d177c442.png",
    border: "border-indigo-300",
    bg: "from-indigo-50 to-blue-50",
  },
  {
    label: "IASC Program",
    category: "Asteroid Discovery",
    categoryColor: "bg-cyan-600",
    title: "IASC Asteroid Search — P129NRx",
    desc: "Team MeteoriteX contributed to asteroid discovery under the NASA-supported International Astronomical Search Collaboration (IASC). Finding P129NRx was recorded as a preliminary discovery.",
    img: "/lovable-uploads/7d87ae07-384d-4b6f-8329-c6d75a883dc4.png",
    border: "border-cyan-300",
    bg: "from-cyan-50 to-blue-50",
  },
  {
    label: "NASA Space Apps 2023",
    category: "Runner-Up",
    categoryColor: "bg-purple-600",
    title: "1st Runner-Up — Bangladesh",
    desc: "1st Runner-Up (Mymensingh Hub) at NASA Space Apps Challenge Bangladesh 2023 for DSCOVR satellite space weather anomaly detection using machine learning.",
    img: "/lovable-uploads/429deff5-c417-48f8-8aed-2b208ab805ac.png",
    border: "border-purple-300",
    bg: "from-purple-50 to-indigo-50",
  },
  {
    label: "Global Innovation",
    category: "Xylem Challenge 2025",
    categoryColor: "bg-teal-600",
    title: "Xylem Global Student Innovation Challenge",
    desc: "Project submission certificate for the 2025 Xylem Global Student Innovation Challenge — focusing on innovative water and environmental solutions.",
    img: "/lovable-uploads/4110bdb4-908d-4993-ba9d-6df3c08c8453.png",
    border: "border-teal-300",
    bg: "from-teal-50 to-emerald-50",
  },
  {
    label: "Technoxian WRC",
    category: "National Round 2024",
    categoryColor: "bg-red-600",
    title: "Technoxian Bangladesh National Round",
    desc: "Certificate of participation in the 1st Technoxian Bangladesh National Round 2024 — World's largest robotics championship organized by Bangladesh Open Source Network.",
    img: "/lovable-uploads/1e267b93-7f22-4576-954d-f6f8c53ad535.png",
    border: "border-red-300",
    bg: "from-red-50 to-orange-50",
  },
];

export default function WallOfFame() {
  const [lightbox, setLightbox] = useState<{ isOpen: boolean; src: string; title: string }>({
    isOpen: false, src: "", title: ""
  });

  return (
    <>
      <LightboxModal
        isOpen={lightbox.isOpen}
        onClose={() => setLightbox(prev => ({ ...prev, isOpen: false }))}
        imageSrc={lightbox.src}
        title={lightbox.title}
      />

      <section id="wall-of-fame" className="section-container">
        <span className="section-subtitle">Global Space & Science Recognition</span>
        <h2 className="section-title mb-2">Wall of Fame</h2>
        <p className="text-slate-500 mb-10">NASA missions, asteroid discoveries, and international innovation challenges.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
          {spaceHonors.map((h, i) => (
            <div
              key={i}
              className={`hover-card rounded-2xl bg-gradient-to-br ${h.bg} border ${h.border} overflow-hidden flex flex-col animate-fade-in`}
            >
              {/* Certificate image — click to zoom */}
              <div
                className="relative cursor-zoom-in group"
                onClick={() => setLightbox({ isOpen: true, src: h.img, title: h.title })}
              >
                <img
                  src={h.img}
                  alt={h.title}
                  className="w-full h-44 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                  <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="absolute top-2 left-2">
                  <span className={`badge-pill ${h.categoryColor} text-white text-[10px] font-black`}>
                    {h.category}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className="p-5 flex flex-col gap-2 flex-1">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{h.label}</p>
                <h3 className="font-bold text-slate-900 text-base leading-tight">{h.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
