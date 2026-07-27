import React, { useState } from "react";
import { Sparkles, Send, Bot, User } from "lucide-react";

export default function ClaudeAIDesk() {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hello! I am Lian's AI Portfolio Assistant. Ask me anything about Lian's EEE degree, TVC rocket thesis, work experience, or research papers!"
    }
  ]);

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!query.trim()) return;

    const userText = query;
    setQuery("");
    
    setMessages(prev => [...prev, { sender: "user", text: userText }]);

    // Smart responses based on Lian's resume & projects
    setTimeout(() => {
      let reply = "Lian Mollick Nehal is an EEE graduate from Dhaka University (MEC) specializing in Thrust Vector Control (TVC) rocketry, embedded avionics, and machine learning research.";

      const q = userText.toLowerCase();
      if (q.includes("thesis") || q.includes("tvc") || q.includes("rocket") || q.includes("pid")) {
        reply = "Lian's B.Sc. thesis is titled 'Design, Simulation & Implementation of a Thrust Vector Control system & Telemetry system for Small scale Rocket using PID'. He developed custom flight controllers in STM32, simulated dynamics in OpenRocket & MATLAB/Simulink, and built 3D-printed gimbal nozzles!";
      } else if (q.includes("work") || q.includes("job") || q.includes("urbangaz") || q.includes("experience")) {
        reply = "Lian currently serves as Tech-Coordinator at UrbanGaz (Dhaka). Previously, he was Assistant to CEO at Cloud Company and Jr. Embedded Engineer at Dhumketu Exploration Technologies Ltd. where he built rocket avionics and live broadcast ground stations!";
      } else if (q.includes("award") || q.includes("winner") || q.includes("nasa") || q.includes("competition")) {
        reply = "Lian won 1st Place in the Rocketry Innovation Challenge 2022 (a2i & BAAU), was 1st Runner-Up at NASA Space Apps Challenge 2023 (Team Solar Sentinel), 1st Runner-Up at 3rd National Science Fest, and a National Finalist at Technoxian WRC 2024!";
      } else if (q.includes("contact") || q.includes("email") || q.includes("phone")) {
        reply = "You can reach Lian Mollick Nehal directly at lianmollik@gmail.com or by phone at +8801518664917. LinkedIn: linkedin.com/in/lianmollick";
      }

      setMessages(prev => [...prev, { sender: "ai", text: reply }]);
    }, 500);
  };

  return (
    <div className="glass-panel p-6 bg-white/80 border border-slate-200 shadow-xl rounded-3xl relative overflow-hidden">
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-700">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-sm">Ask Lian's AI Portfolio Assistant</h4>
            <p className="text-[11px] text-slate-500">Trained on Lian's resume, TVC thesis & publications</p>
          </div>
        </div>
        <span className="text-[10px] font-mono bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">
          ONLINE
        </span>
      </div>

      {/* Chat Container */}
      <div className="h-48 overflow-y-auto space-y-3 pr-2 mb-4 text-xs">
        {messages.map((m, idx) => (
          <div 
            key={idx} 
            className={`flex gap-2.5 ${m.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            {m.sender === "ai" && (
              <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0 mt-0.5 text-[10px]">
                <Bot className="w-3.5 h-3.5" />
              </div>
            )}
            <div className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
              m.sender === "user"
                ? "bg-slate-900 text-white rounded-br-none"
                : "bg-slate-100 text-slate-800 border border-slate-200/60 rounded-bl-none"
            }`}>
              {m.text}
            </div>
            {m.sender === "user" && (
              <div className="w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center shrink-0 mt-0.5 text-[10px]">
                <User className="w-3.5 h-3.5" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Input */}
      <form onSubmit={handleSend} className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask about Lian's rocket thesis, ULKASEMI training, or awards..."
          className="flex-grow bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
        />
        <button
          type="submit"
          className="bg-slate-900 hover:bg-slate-800 text-white p-2.5 rounded-xl transition-colors shrink-0"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
