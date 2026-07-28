import React, { useState } from "react";
import { Trophy, Award, Medal, Star, ExternalLink, ZoomIn } from "lucide-react";
import LightboxModal from "./LightboxModal";

const honors = [
  {
    rank: "1st Place",
    rankColor: "bg-amber-500",
    labelColor: "text-amber-700",
    borderColor: "border-amber-300",
    bgColor: "from-amber-50 to-white",
    icon: Trophy,
    iconColor: "text-amber-600",
    iconBg: "bg-amber-100",
    title: "Rocketry Innovation Challenge 2022",
    org: "a2i & Bangabandhu Aviation & Aerospace University",
    desc: "1st place winner in Bangladesh's premier rocketry innovation competition for outstanding rocket design and engineering.",
    img: "/lovable-uploads/c7364aa4-f619-4066-8c11-4af77564283c.png",
    link: "https://drive.google.com/drive/folders/1cE9iPPTE2vz2R7t6SNu08gT15XpSTB5m",
  },
  {
    rank: "1st Runner-Up",
    rankColor: "bg-slate-600",
    labelColor: "text-slate-700",
    borderColor: "border-slate-300",
    bgColor: "from-slate-50 to-white",
    icon: Award,
    iconColor: "text-slate-600",
    iconBg: "bg-slate-100",
    title: "NASA Space Apps Challenge 2023",
    org: "Team SolarSentinel — Mymensingh",
    desc: "1st Runner-Up at NASA Space Apps Challenge Bangladesh 2023 for DSCOVR satellite space weather AI system.",
    img: "/lovable-uploads/e00a481e-4e06-4e62-b409-b39661c31fcd.png",
  },
  {
    rank: "1st Runner-Up",
    rankColor: "bg-slate-600",
    labelColor: "text-slate-700",
    borderColor: "border-slate-300",
    bgColor: "from-slate-50 to-white",
    icon: Medal,
    iconColor: "text-slate-600",
    iconBg: "bg-slate-100",
    title: "3rd National Science Fest",
    org: "Project: Wireless Energy Transmission",
    desc: "1st Runner-Up at the 3rd National Science Fest (Walton Laptop presents) for wireless energy transmission innovation.",
    img: "/lovable-uploads/98808512-2995-4e9b-822e-702b4422ce82.png",
  },
  {
    rank: "National Finalist",
    rankColor: "bg-blue-600",
    labelColor: "text-blue-700",
    borderColor: "border-blue-300",
    bgColor: "from-blue-50 to-white",
    icon: Trophy,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
    title: "Technoxian WRC 2024",
    org: "World Robotics Championship — 15kg Battle Bot",
    desc: "National Finalist at Technoxian World Robotics Championship 2024 with custom-built 15kg combat battle robot.",
    img: "/lovable-uploads/01c1360a-62bc-4bad-996f-e32d933b1d48.png",
  },
  {
    rank: "Finalist",
    rankColor: "bg-indigo-500",
    labelColor: "text-indigo-700",
    borderColor: "border-indigo-200",
    bgColor: "from-indigo-50 to-white",
    icon: Star,
    iconColor: "text-indigo-600",
    iconBg: "bg-indigo-100",
    title: "National STEAM Olympiad",
    org: "iTesseract & Ministry of Education",
    desc: "Top team finalist at National STEAM Olympiad organized by iTesseract & Ministry of Education.",
    img: "/lovable-uploads/ecf8b8e8-f9be-4a89-9b69-a4578f9ba6df.png",
  },
  {
    rank: "Participant",
    rankColor: "bg-emerald-500",
    labelColor: "text-emerald-700",
    borderColor: "border-emerald-200",
    bgColor: "from-emerald-50 to-white",
    icon: Award,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-100",
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

      <section id="awards" className="section-container bg-slate-50/60">
        <span className="section-subtitle">National & Global Recognition</span>
        <h2 className="section-title mb-2">Competitions & Awards</h2>
        <p className="text-slate-500 mb-10">Winning across rocketry, robotics, AI, and science innovation.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
          {honors.map((h, i) => {
            const Icon = h.icon;
            return (
              <div
                key={i}
                className={`hover-card glass-card bg-gradient-to-br ${h.bgColor} border ${h.borderColor} p-5 flex flex-col gap-4 animate-fade-in`}
              >
                {/* Top */}
                <div className="flex items-start justify-between">
                  <div className={`w-10 h-10 rounded-xl ${h.iconBg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-5 h-5 ${h.iconColor}`} />
                  </div>
                  <span className={`badge-pill ${h.rankColor} text-white text-[10px] font-black`}>
                    {h.rank}
                  </span>
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-bold text-slate-900 text-base mb-1">{h.title}</h3>
                  <p className={`text-xs font-semibold ${h.labelColor} mb-2`}>{h.org}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{h.desc}</p>
                </div>

                {/* Award photo */}
                <div
                  className="relative rounded-xl overflow-hidden cursor-zoom-in group"
                  onClick={() => setLightbox({ isOpen: true, src: h.img, title: h.title })}
                >
                  <img
                    src={h.img}
                    alt={h.title}
                    className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                    <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>

                {/* Link */}
                {h.link && (
                  <a href={h.link} target="_blank" rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-portfolio-teal hover:text-portfolio-accent transition-colors">
                    <ExternalLink className="w-3.5 h-3.5" />
                    View Certificate
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
