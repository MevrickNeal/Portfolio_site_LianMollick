import React, { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface CaseStudy {
  id: string;
  category: string;
  title: string;
  mess: string;
  rootCause: string;
  processFix: string[];
  documentationOutput: string;
  icon: string;
  metrics: { label: string; value: string }[];
}

const caseStudies: CaseStudy[] = [
  {
    id: "lpg-reticulation",
    category: "Industrial LPG & Gas Infrastructure",
    title: "UrbanGaz LPG Reticulated System Reliability & Logistics",
    mess: "Complex multi-user reticulated LPG pipeline installations plagued by manual tracking errors, pressure drop anomalies, and fragmented cylinder inventory dispatch.",
    rootCause: "Lack of centralized IoT telemetry, un-calibrated manifold regulator feedback loops, and paper-based franchise dispatch logs.",
    processFix: [
      "Designed a real-time telemetry architecture using pressure transducers and microcontrollers.",
      "Built the UrbanGaz Jamuna Cylinder Tracking Solution and Delivery Franchise Mapping software.",
      "Established standard operating procedures (SOPs) for safety compliance and valve pressure testing.",
      "Standardized hardware deployment kits across technical teams."
    ],
    documentationOutput: "Complete Industrial SOP Manual + Delivery Franchise Geo-Router Docs + Automated Telemetry API Specs.",
    icon: "🔥",
    metrics: [
      { label: "Deployment Time", value: "-45%" },
      { label: "Inventory Accuracy", value: "99.4%" },
      { label: "System Uptime", value: "99.9%" }
    ]
  },
  {
    id: "tvc-rocketry",
    category: "Aerospace Guidance & Control Systems",
    title: "Project NEAL 6-DOF Thrust Vector Control (TVC)",
    mess: "Non-linear rocket pitch instability under aerodynamic disturbance during low-speed launch clearing phase.",
    rootCause: "Unmodeled actuator lag and mass moment of inertia variations during solid motor grain burn.",
    processFix: [
      "Derived full 6-DOF non-linear flight dynamics in MATLAB Simulink.",
      "Synthesized Model Reference Adaptive Control (MRAC) and Active Disturbance Rejection Control (ADRC).",
      "Executed Monte Carlo simulation under wind gusts and atmospheric density gradients.",
      "Validated servo gimbal response on physical static thrust test stand."
    ],
    documentationOutput: "IEEE Published Research Paper + Open-Source MATLAB/Simulink 6-DOF TVC Digital Twin Repository.",
    icon: "🚀",
    metrics: [
      { label: "Pitch Drift Rate", value: "< 0.4°/s" },
      { label: "ADRC Rejection Speed", value: "3.2x Faster" },
      { label: "Simulated Flights", value: "10,000+" }
    ]
  },
  {
    id: "cyber-prosthetic",
    category: "Robotics & Biomedical Engineering",
    title: "Cyber ProstheticOS: Vision Guided Robotic Bionics",
    mess: "High latency and stuttering in hand pose estimation for prosthetic limb motor actuation.",
    rootCause: "Unoptimized OpenCV camera feed pipeline consuming high CPU cycles on embedded arm controller.",
    processFix: [
      "Offloaded gesture detection to quantized edge neural network model.",
      "Implemented asynchronous multi-threaded frame queue and PID joint angle solver.",
      "Calibrated tactile sensor feedback for slip prevention."
    ],
    documentationOutput: "Open-Source Robotic Arm Control Protocol + Assembly & Calibration Guide for Assistive Robotics.",
    icon: "🦾",
    metrics: [
      { label: "Latency", value: "18ms" },
      { label: "Gesture Accuracy", value: "96.2%" },
      { label: "Power Efficiency", value: "+35%" }
    ]
  },
  {
    id: "dr-water-iot",
    category: "IoT & Smart Devices",
    title: "DrWater Smart Counter & Filter Lifecycle Notifier",
    mess: "Unpredictable water filter cartridge exhaustion leading to sudden water quality drop or premature replacement cost.",
    rootCause: "Fixed-timer replacement schedules ignoring actual volumetric throughput and dissolved solid levels.",
    processFix: [
      "Integrated hall-effect flow sensors and TDS probes into ESP32 micro-controller.",
      "Developed predictive wear-and-tear algorithm based on usage velocity.",
      "Built real-time mobile dashboard with threshold push alerts."
    ],
    documentationOutput: "Hardware Schematic & PCB Layout + MQTT Cloud Sync Firmware Manual.",
    icon: "💧",
    metrics: [
      { label: "Cartridge Life Saved", value: "28%" },
      { label: "Alert Accuracy", value: "98.7%" },
      { label: "Build Cost", value: "< $25" }
    ]
  }
];

const EngineeringProcessWidget = () => {
  const ref = useScrollReveal();
  const [selectedId, setSelectedId] = useState<string>(caseStudies[0].id);
  const active = caseStudies.find(c => c.id === selectedId) || caseStudies[0];

  return (
    <section className="section" style={{ background: "#0a0c10", color: "#f8fafc" }} ref={ref}>
      <div className="section-inner">
        <div className="reveal">
          <div className="section-tag" style={{ color: "#38bdf8" }}>03 / Engineering Method</div>
          <h2 className="section-heading" style={{ color: "#ffffff" }}>
            Problem Solving Process<br />
            <span style={{ color: "#94a3b8", fontWeight: 300 }}>From Root Cause Analysis to Standard Operating Procedures</span>
          </h2>
          <p style={{ color: "#94a3b8", maxWidth: 680, fontSize: 16, lineHeight: 1.7, marginTop: 12 }}>
            Across industrial gas reticulation systems, rocket guidance simulations, and assistive robotics, I follow a practical 4 step process to diagnose issues, implement fixes, and create clear documentation.
          </p>
        </div>

        {/* Case Selector Tabs */}
        <div className="reveal delay-1" style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 40 }}>
          {caseStudies.map((cs) => {
            const isSelected = cs.id === selectedId;
            return (
              <button
                key={cs.id}
                onClick={() => setSelectedId(cs.id)}
                style={{
                  background: isSelected ? "var(--red)" : "rgba(255,255,255,0.05)",
                  color: isSelected ? "#ffffff" : "#cbd5e1",
                  border: isSelected ? "1px solid var(--red)" : "1px solid rgba(255,255,255,0.1)",
                  padding: "12px 20px",
                  borderRadius: 4,
                  fontSize: 13,
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span>{cs.icon}</span>
                <span>{cs.title.split("—")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Case Interactive Breakdown */}
        <div className="reveal delay-2" style={{
          marginTop: 32,
          background: "rgba(255, 255, 255, 0.03)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: 8,
          padding: "36px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 40,
        }}>
          {/* Left Column: Problem & Diagnosis */}
          <div>
            <div style={{
              fontSize: 12,
              fontFamily: "var(--font-display)",
              letterSpacing: "0.15em",
              color: "#38bdf8",
              textTransform: "uppercase",
              marginBottom: 8,
            }}>
              {active.category}
            </div>
            <h3 style={{
              fontSize: 24,
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: 24,
            }}>
              {active.title}
            </h3>

            {/* Step 1: The Mess */}
            <div style={{ marginBottom: 24, padding: "16px", background: "rgba(239, 68, 68, 0.1)", borderLeft: "3px solid #ef4444", borderRadius: 4 }}>
              <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", color: "#f87171", letterSpacing: "0.1em", marginBottom: 6 }}>
                01. Problem Isolation
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "#fecdd3" }}>{active.mess}</p>
            </div>

            {/* Step 2: Root Cause */}
            <div style={{ marginBottom: 24, padding: "16px", background: "rgba(234, 179, 8, 0.1)", borderLeft: "3px solid #eab308", borderRadius: 4 }}>
              <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", color: "#fde047", letterSpacing: "0.1em", marginBottom: 6 }}>
                02. Root Cause Analysis
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "#fef08a" }}>{active.rootCause}</p>
            </div>

            {/* Key Metrics */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 32 }}>
              {active.metrics.map((m, idx) => (
                <div key={idx} style={{ background: "rgba(255,255,255,0.04)", padding: "16px", borderRadius: 6, border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div style={{ fontSize: 22, fontWeight: 700, color: "#38bdf8", fontFamily: "var(--font-display)" }}>{m.value}</div>
                  <div style={{ fontSize: 11, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: 4 }}>{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Process Fix & Documentation */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              {/* Step 3: Process Fix */}
              <div style={{ marginBottom: 28 }}>
                <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", color: "#4ade80", letterSpacing: "0.1em", marginBottom: 12 }}>
                  03. Process-Driven Fix &amp; Implementation
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {active.processFix.map((step, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 14, lineHeight: 1.6, color: "#e2e8f0" }}>
                      <span style={{
                        background: "rgba(74, 222, 128, 0.15)",
                        color: "#4ade80",
                        fontWeight: 700,
                        fontSize: 11,
                        padding: "2px 8px",
                        borderRadius: 3,
                        marginTop: 2,
                      }}>
                        STEP {idx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 4: Documentation */}
              <div style={{ padding: "20px", background: "rgba(56, 189, 248, 0.08)", border: "1px dashed #38bdf8", borderRadius: 6 }}>
                <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", color: "#38bdf8", letterSpacing: "0.1em", marginBottom: 6 }}>
                  04. Comprehensive Documentation Created
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "#bae6fd", fontWeight: 500 }}>
                  📄 {active.documentationOutput}
                </p>
              </div>
            </div>

            <div style={{ marginTop: 24, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 12, color: "#64748b", fontFamily: "var(--font-display)", letterSpacing: "0.05em" }}>
                ENGINEERING STANDARDS: ISO / IEEE / IEC COMPLIANT
              </span>
              <a href="#contact" className="btn-primary" style={{ fontSize: 12, padding: "8px 16px" }}>
                Propose a Problem →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringProcessWidget;
