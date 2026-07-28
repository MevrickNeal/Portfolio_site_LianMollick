import React, { useState } from "react";
import { Trophy, Award, Medal, Star, ExternalLink, ZoomIn } from "lucide-react";
import LightboxModal from "./LightboxModal";

const honors = [
  {
    rank: "1st Place",
    rankBadge: "bg-amber-500 text-slate-950 font-black",
    borderColor: "border-amber-500/40",
    icon: Trophy,
    iconColor: "text-amber-400",
    title: "Rocketry Innovation Challenge 2022",
    org: "a2i & Bangabandhu Aviation & Aerospace University",
    desc: "1st place winner in Bangladesh's premier rocketry innovation competition for outstanding rocket design and engineering.",
    img: "/lovable-uploads/c7364aa4-f619-4066-8c11-4af77564283c.png",
    link: "https://drive.google.com/drive/folders/1cE9iPPTE2vz2R7t6SNu08gT15XpSTB5m",
  },
  {
    rank: "1st Runner-Up",
    rankBadge: "bg-cyan-500 text-slate-950 font-black",
    borderColor: "border-cyan-500/40",
    icon: Award,
    iconColor: "text-cyan-400",
    title: "NASA Space Apps Challenge 2023",
    org: "Team SolarSentinel — Mymensingh",
    desc: "1st Runner-Up at NASA Space Apps Challenge Bangladesh 2023 for DSCOVR satellite space weather AI system.",
    img: "/lovable-uploads/e00a481e-4e06-4e62-b409-b39661c31fcd.png",
  },
  {
    rank: "1st Runner-Up",
    rankBadge: "bg-slate-700 text-white font-bold",
    borderColor: "border-slate-800",
    icon: Medal,
    iconColor: "text-slate-300",
    title: "3rd National Science Fest",
    org: "Project: Wireless Energy Transmission",
    desc: "1st Runner-Up at 3rd National Science Fest for wireless energy transmission innovation.",
    img: "/lovable-uploads/98808512-2995-4e9b-822e-702b4422ce82.png",
  },
  {
    rank: "National Finalist",
    rankBadge: "bg-blue-600 text-white font-bold",
    borderColor: "border-blue-500/40",
    icon: Trophy,
    iconColor: "text-blue-400",
    title: "Technoxian WRC 2024",
    org: "World Robotics Championship — 15kg Battle Bot",
    desc: "National Finalist at Technoxian World Robotics Championship 2024 with custom 15kg combat battle robot.",
    img: "/lovable-uploads/01c1360a-62bc-4bad-996f-e32d933b1d48.png",
  },
  {
    rank: "Finalist",
    rankBadge: "bg-indigo-600 text-white font-bold",
    borderColor: "border-indigo-500/40",
    icon: Star,
    iconColor: "text-indigo-400",
    title: "National STEAM Olympiad",
    org: "iTesseract & Ministry of Education",
    desc: "Top team finalist at National STEAM Olympiad organized by Ministry of Education.",
    img: "/lovable-uploads/ecf8b8e8-f9be-4a89-9b69-a4578f9ba6df.png",
  },
  {
    rank: "Participant",
    rankBadge: "bg-emerald-600 text-white font-bold",
    borderColor: "border-emerald-500/40",
    icon: Award,
    iconColor: "text-emerald-400",
    title: "IIT Techfest Combat Robotics",
    org: "IUBAT — 15kg Battle Bot",
    desc: "Participated in IIT Techfest combat robotics division with Alpha Science Lab team's 15kg battle bot.",
    img: "/lovable-uploads/cacaca86-a46b-419a-bec9-5777b25a91a1.png",
  },
];

export default function Awards() {
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

      <section id="awards" className="section-container">
        <span className="section-subtitle">HONORS & COMPETITIONS</span>
        <h2 className="section-title mb-3">Awards & Recognition</h2>
        <p className="text-slate-400 mb-10">Winning across rocketry, robotics, AI, and science innovation.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {honors.map((h, i) => {
            const Icon = h.icon;
            return (
              <div
                key={i}
                className={`tech-card border ${h.borderColor} flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center">
                      <Icon className={`w-5 h-5 ${h.iconColor}`} />
                    </div>
                    <span className={`badge-pill ${h.rankBadge}`}>
                      {h.rank}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-white text-base mb-1">{h.title}</h3>
                  <p className="text-xs font-mono text-cyan-400 mb-3">{h.org}</p>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">{h.desc}</p>
                </div>

                <div>
                  <div
                    className="relative rounded-xl overflow-hidden cursor-zoom-in group border border-slate-800 mb-3"
                    onClick={() => setLightbox({ isOpen: true, src: h.img, title: h.title })}
                  >
                    <img
                      src={h.img}
                      alt={h.title}
                      className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <ZoomIn className="w-6 h-6 text-cyan-400" />
                    </div>
                  </div>

                  {h.link && (
                    <a href={h.link} target="_blank" rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
                      <ExternalLink className="w-3.5 h-3.5" />
                      VIEW CERTIFICATE
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
