import React, { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const awards = [
  {
    year: "2022",
    title: "Winner — Rocketry Innovation Challenge",
    org: "a2i Aspire to Innovation, Ministry of ICT, Bangladesh · Aviation and Aerospace University",
    desc: "National rocketry challenge awarded by the Ministry of ICT Bangladesh for innovative amateur rocket design and avionics development.",
    badge: "🥇 Winner",
    color: "#c8a000",
    certImg: "/lovable-uploads/cert-pdf-1701834168192.png",
  },
  {
    year: "2023",
    title: "Regional 1st Runner-Up — NASA Space Apps Challenge",
    org: "NASA · Team: Solar Sentinel",
    desc: "Built a machine learning model using NOAA satellite data from the Lagrange point to predict severe solar weather events and issue early warnings via Twitter integration to help prevent large-scale power blackouts.",
    badge: "🥈 Runner-Up",
    color: "#c8102e",
    certImg: "/lovable-uploads/cert-pdf-1st-runner-up-27.png",
    eventImg: "/lovable-uploads/429deff5-c417-48f8-8aed-2b208ab805ac.png",
    trophyImg: "/lovable-uploads/e00a481e-4e06-4e62-b409-b39661c31fcd.png",
  },
  {
    year: "2023",
    title: "1st Runner-Up — 3rd National Science Fest",
    org: "Walton Laptop · Senior Segment",
    desc: "Project: Wireless energy transmission. Demonstrated high frequency resonant inductive coupling for practical wireless power delivery.",
    badge: "🥈 Runner-Up",
    color: "#c8102e",
    certImg: "/lovable-uploads/98808512-2995-4e9b-822e-702b4422ce82.png",
  },
  {
    year: "2024",
    title: "National Finalist — WRC Bot Combat",
    org: "1st Technoxian Bangladesh National Round · World's Biggest Robotics Championship",
    desc: "Represented Mymensingh Engineering College at the national round of the world's biggest robotics championship. Team Alpha Science Lab competed in bot combat with the custom built CORE iFight combat robot.",
    badge: "🏆 Finalist",
    color: "#7c3aed",
    certImg: "/lovable-uploads/National finalist robowar.png",
    eventImg: "/lovable-uploads/cacaca86-a46b-419a-bec9-5777b25a91a1.png",
  },
  {
    year: "2022",
    title: "Finalist — National STEAM Olympiad",
    org: "iTesseract · Ministry of Education, Bangladesh",
    desc: "Selected as a national finalist at the STEAM Olympiad organized by iTesseract under the Ministry of Education. Competed in the technology track representing Mymensingh Engineering College.",
    badge: "🎖 Finalist",
    color: "#0284c7",
    certImg: "/lovable-uploads/ecf8b8e8-f9be-4a89-9b69-a4578f9ba6df.png",
  },
  {
    year: "2022",
    title: "1st Runner-Up — Poster Presentation at Brainiac 2022",
    org: "Brainiac National Competition",
    desc: "Presented an automobile anti-theft system using GPS tracking, RFID authentication, and GSM based owner alerts.",
    badge: "🥈 Runner-Up",
    color: "#c8102e",
    certImg: "/lovable-uploads/cert-pdf-1701834168192.png",
  },
  {
    year: "2020",
    title: "1st Runner-Up — Robo Race",
    org: "CSE Carnival 2020 · Mymensingh Engineering College",
    desc: "High speed autonomous robot racing competition. Designed and built a line following robot with optimized PID speed control.",
    badge: "🥈 Runner-Up",
    color: "#c8102e",
    certImg: "/lovable-uploads/cert-pdf-Lian_Mollick_Certificate.png",
  },
];


const certifications = [
  {
    title: "Semiconductor Fabrication 101",
    org: "Intel · Purdue University · Texas University",
    date: "Jan 2025",
    desc: "Comprehensive training on semiconductor fabrication processes, wafer processing, and chip design fundamentals. Intel sponsored industry program.",
    certImg: "/lovable-uploads/cert-pdf-Semiconductor_Fabrication_101_Certificate_Semiconductor_Fabrication_101__2024_Nehal.png",
  },
  {
    title: "IC Mask Design & Analog Layout",
    org: "ULKASEMI PVT Limited — Industrial Training",
    date: "Dec 2024",
    desc: "Intensive training on Analog Design, IC Mask Design (Mixed Signal Layout), and IC Physical Design using industry standard tools.",
    certImg: "/lovable-uploads/cert-pdf-Lian_nonEUCV2025.png",
  },
  {
    title: "Industrial Electrical Engineering",
    org: "Training Institute for Chemical Industries (TICI)",
    date: "Apr–May 2025",
    desc: "Specialized training on industrial electrical systems — implementation and maintenance in chemical and manufacturing environments.",
    certImg: "/lovable-uploads/cert-pdf-1718462644546.png",
  },
  {
    title: "Completion Credentials",
    org: "Professional Development & Specialized Courses",
    date: "2024",
    desc: "Verified online certifications covering embedded systems, Python software development, and control systems engineering.",
    certImg: "/lovable-uploads/cert-pdf-Udemy-certificate_(1).png",
  },
];

const Awards = () => {
  const ref = useScrollReveal();
  const [activeModalImg, setActiveModalImg] = useState<string | null>(null);

  return (
    <section id="awards" className="section" style={{ background: "var(--off-white)" }} ref={ref}>
      <div className="section-inner">
        <div className="reveal">
          <div className="section-tag">Recognition</div>
          <h2 className="section-heading">
            Awards &<br />
            <span className="section-heading-light">Achievements</span>
          </h2>
        </div>

        {/* Awards listing */}
        <div style={{ marginTop: 64 }}>
          {awards.map((a, i) => (
            <div
              key={a.title}
              className={`reveal delay-${i + 1}`}
              style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr auto",
                gap: "32px",
                alignItems: "start",
                padding: "32px 0",
                borderBottom: "1px solid var(--light-grey)",
              }}
            >
              <div style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 13,
                color: "var(--mid-grey)",
                letterSpacing: "0.1em",
                paddingTop: 4,
              }}>{a.year}</div>
              <div>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "clamp(16px, 2vw, 22px)",
                  textTransform: "uppercase",
                  color: "var(--black)",
                  marginBottom: 6,
                  letterSpacing: "0.02em",
                }}>{a.title}</div>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 300,
                  fontSize: 13,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--mid-grey)",
                  marginBottom: 12,
                }}>{a.org}</div>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: "var(--dark-grey)", marginBottom: 12 }}>{a.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 8 }}>
                  {a.certImg && (
                    <button
                      onClick={() => setActiveModalImg(a.certImg)}
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 11,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--red)",
                        background: "none",
                        border: "none",
                        padding: 0,
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      🔍 View Certificate Document →
                    </button>
                  )}
                  {a.eventImg && (
                    <button
                      onClick={() => setActiveModalImg(a.eventImg)}
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 11,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--red)",
                        background: "none",
                        border: "none",
                        padding: 0,
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      🖼️ View Team Photo →
                    </button>
                  )}
                  {a.trophyImg && (
                    <button
                      onClick={() => setActiveModalImg(a.trophyImg)}
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 11,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--red)",
                        background: "none",
                        border: "none",
                        padding: 0,
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      🏆 View Trophy Photo →
                    </button>
                  )}
                </div>
              </div>
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: 12,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: a.color,
                background: `${a.color}15`,
                border: `1px solid ${a.color}40`,
                padding: "6px 14px",
                whiteSpace: "nowrap",
                alignSelf: "flex-start",
              }}>{a.badge}</div>
            </div>
          ))}
        </div>

        {/* Certifications Card Grid with Document Preview */}
        <div style={{ marginTop: 80 }}>
          <div className="reveal">
            <div className="section-tag">Credentials</div>
            <h2 className="section-heading" style={{ fontSize: "clamp(28px, 3vw, 48px)" }}>
              Certifications &<br />
              <span className="section-heading-light">Document Previews</span>
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 24,
            marginTop: 40,
          }}>
            {certifications.map((c, i) => (
              <div
                key={c.title}
                className={`skill-card reveal delay-${i + 1}`}
                style={{
                  background: "var(--white)",
                  border: "1px solid var(--light-grey)",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  {c.certImg && (
                    <div
                      onClick={() => setActiveModalImg(c.certImg)}
                      style={{
                        width: "100%",
                        height: 160,
                        overflow: "hidden",
                        border: "1px solid var(--light-grey)",
                        marginBottom: 16,
                        cursor: "pointer",
                        background: "#fff",
                      }}
                    >
                      <img
                        src={c.certImg}
                        alt={`${c.title} document preview`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "top",
                          transition: "transform 0.3s ease",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1.0)")}
                      />
                    </div>
                  )}
                  <div style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 11,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--red)",
                    marginBottom: 8,
                  }}>{c.date}</div>
                  <div className="skill-card-name" style={{ marginBottom: 6 }}>{c.title}</div>
                  <div style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 11,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--mid-grey)",
                    marginBottom: 12,
                  }}>{c.org}</div>
                  <p style={{ fontSize: 13, lineHeight: 1.7, color: "var(--dark-grey)", marginBottom: 16 }}>{c.desc}</p>
                </div>

                {c.certImg && (
                  <button
                    onClick={() => setActiveModalImg(c.certImg)}
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 11,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--white)",
                      background: "var(--black)",
                      border: "none",
                      padding: "10px 16px",
                      cursor: "pointer",
                      width: "100%",
                      textAlign: "center",
                    }}
                  >
                    Preview Certificate
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Education & Leadership */}
        <div style={{ marginTop: 80 }}>
          <div className="reveal">
            <div className="section-tag">Education</div>
            <h2 className="section-heading" style={{ fontSize: "clamp(28px, 3vw, 48px)" }}>
              Academic<br />
              <span className="section-heading-light">Background</span>
            </h2>
          </div>

          <div className={`reveal delay-1`} style={{
            marginTop: 40,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 40,
          }}>
            <div style={{ borderLeft: "3px solid var(--red)", paddingLeft: 24 }}>
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: 11,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--red)",
                marginBottom: 8,
              }}>Jan 2020 – Jun 2025</div>
              <div style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "clamp(16px, 2vw, 22px)",
                textTransform: "uppercase",
                color: "var(--black)",
                marginBottom: 6,
              }}>B.Sc. Electrical & Electronic Engineering</div>
              <div style={{
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                fontSize: 13,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--mid-grey)",
                marginBottom: 12,
              }}>Technology Unit, University of Dhaka (Mymensingh Engineering College)</div>
              <p style={{ fontSize: 13, lineHeight: 1.7, color: "var(--dark-grey)" }}>
                Specialization in control systems, embedded electronics, power systems, and digital signal processing.
                Thesis: TVC-based flight controller design with MATLAB/Simulink 6-DOF simulation.
              </p>
            </div>

            {/* Leadership */}
            <div style={{ borderLeft: "3px solid var(--dark-grey)", paddingLeft: 24 }}>
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: 11,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--dark-grey)",
                marginBottom: 8,
              }}>Leadership</div>
              <div style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 18,
                textTransform: "uppercase",
                color: "var(--black)",
                marginBottom: 6,
              }}>EEE Coordinator</div>
              <div style={{
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                fontSize: 12,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--mid-grey)",
                marginBottom: 12,
              }}>Alpha Science Lab · Head of Robotics</div>
              <p style={{ fontSize: 13, lineHeight: 1.7, color: "var(--dark-grey)" }}>
                Led the Alpha Science Lab robotics department — robot design, building, and competition strategy.
                Mentored teams to competition success across national-level events.
                Also served as Co-Publicity Editor at Bangladesh Human Rights Commission.
              </p>
            </div>
          </div>
        </div>

        {/* Certificate Modal Lightbox */}
        {activeModalImg && (
          <div
            onClick={() => setActiveModalImg(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 999999,
              background: "rgba(0,0,0,0.85)",
              backdropFilter: "blur(10px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 24,
              cursor: "pointer",
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                maxWidth: "90vw",
                maxHeight: "90vh",
                background: "#fff",
                padding: 12,
                borderRadius: 4,
                boxShadow: "0 20px 50px rgba(0,0,0,0.8)",
              }}
            >
              <button
                onClick={() => setActiveModalImg(null)}
                style={{
                  position: "absolute",
                  top: -16,
                  right: -16,
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "var(--red)",
                  color: "#fff",
                  border: "none",
                  fontSize: 18,
                  fontWeight: 700,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                ✕
              </button>
              <img
                src={activeModalImg}
                alt="Certificate Document Preview"
                style={{
                  maxWidth: "100%",
                  maxHeight: "80vh",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Awards;
